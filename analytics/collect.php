<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$host = $_SERVER['HTTP_HOST'] ?? '';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (is_string($origin) && $origin !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST);
    $requestHost = preg_replace('/:\d+$/', '', (string) $host);
    if (!is_string($originHost) || strcasecmp($originHost, (string) $requestHost) !== 0) {
        http_response_code(403);
        echo json_encode(['ok' => false, 'error' => 'origin_denied']);
        exit;
    }
}

$fetchSite = $_SERVER['HTTP_SEC_FETCH_SITE'] ?? '';
if (is_string($fetchSite) && $fetchSite !== '' && !in_array($fetchSite, ['same-origin', 'same-site', 'none'], true)) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'site_denied']);
    exit;
}

$rawBody = file_get_contents('php://input');
if ($rawBody === false || strlen($rawBody) > 8192) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_body']);
    exit;
}

$payload = json_decode($rawBody, true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_json']);
    exit;
}

function clean_string($value, int $maxLength = 160): string
{
    if (!is_string($value)) {
        return '';
    }
    $value = preg_replace('/[^\P{C}\t]/u', '', $value) ?? '';
    $value = trim($value);
    return substr($value, 0, $maxLength);
}

function clean_number($value, int $min = 0, int $max = 1000000): int
{
    if (!is_numeric($value)) {
        return 0;
    }
    return max($min, min($max, (int) $value));
}

$event = clean_string($payload['event'] ?? '', 64);
$allowedEvents = [
    'session_start',
    'session_pause',
    'session_end',
    'heartbeat',
    'zone_select',
    'zone_view',
    'media_view',
    'details_open',
    'details_close',
    'gallery_open',
    'gallery_close',
    'gallery_media_view',
    'theme_change',
];
if (!in_array($event, $allowedEvents, true)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_event']);
    exit;
}

$rootDir = dirname(__DIR__, 2);
$logDir = $rootDir . '/private/claudia-z-analytics';
if (!is_dir($logDir) && !mkdir($logDir, 0750, true) && !is_dir($logDir)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'log_unavailable']);
    exit;
}

$now = new DateTimeImmutable('now', new DateTimeZone('UTC'));
$entry = [
    'ts' => $now->format(DateTimeInterface::ATOM),
    'event' => $event,
    'visitor_id' => clean_string($payload['visitor_id'] ?? '', 80),
    'session_id' => clean_string($payload['session_id'] ?? '', 80),
    'visit_number' => clean_number($payload['visit_number'] ?? 0, 0, 10000),
    'zone_id' => clean_string($payload['zone_id'] ?? '', 80),
    'zone_label' => clean_string($payload['zone_label'] ?? '', 120),
    'media_mode' => clean_string($payload['media_mode'] ?? '', 32),
    'media_index' => clean_number($payload['media_index'] ?? 0, 0, 10000),
    'media_count' => clean_number($payload['media_count'] ?? 0, 0, 10000),
    'active_seconds' => clean_number($payload['active_seconds'] ?? 0, 0, 3600),
    'lang' => clean_string($payload['lang'] ?? '', 16),
    'theme' => clean_string($payload['theme'] ?? '', 16),
    'viewport' => [
        'width' => clean_number($payload['viewport']['width'] ?? 0, 0, 10000),
        'height' => clean_number($payload['viewport']['height'] ?? 0, 0, 10000),
    ],
    'source' => clean_string($payload['source'] ?? '', 64),
];

$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
if (is_string($userAgent) && $userAgent !== '') {
    $entry['ua_hash'] = hash('sha256', substr($userAgent, 0, 512));
}

$line = json_encode($entry, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL;
$logFile = $logDir . '/events-' . $now->format('Y-m') . '.jsonl';
if (file_put_contents($logFile, $line, FILE_APPEND | LOCK_EX) === false) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'write_failed']);
    exit;
}

echo json_encode(['ok' => true]);
