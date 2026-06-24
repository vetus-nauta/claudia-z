#!/usr/bin/env node
import fs from "node:fs";
import readline from "node:readline";

const files = process.argv.slice(2);

if (!files.length) {
  console.error("Usage: node tools/analytics-summary.mjs private/claudia-z-analytics/events-YYYY-MM.jsonl [...]");
  process.exit(1);
}

const visitors = new Map();
const sessions = new Map();
const zones = new Map();
const events = new Map();
let totalEvents = 0;

function increment(map, key, amount = 1) {
  const safeKey = key || "(unknown)";
  map.set(safeKey, (map.get(safeKey) || 0) + amount);
}

function sessionFor(entry) {
  const key = entry.session_id || `${entry.visitor_id || "unknown"}:${entry.ts || totalEvents}`;
  if (!sessions.has(key)) {
    sessions.set(key, {
      visitorId: entry.visitor_id || "",
      firstTs: entry.ts || "",
      lastTs: entry.ts || "",
      heartbeatSeconds: 0,
      reportedActiveSeconds: 0,
      events: 0
    });
  }
  return sessions.get(key);
}

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.error(`Missing file: ${file}`);
    process.exitCode = 1;
    continue;
  }

  const stream = fs.createReadStream(file, { encoding: "utf8" });
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (!line.trim()) {
      continue;
    }
    let entry;
    try {
      entry = JSON.parse(line);
    } catch (_) {
      continue;
    }
    totalEvents += 1;
    increment(events, entry.event);
    if (entry.visitor_id) {
      const current = visitors.get(entry.visitor_id) || { sessions: new Set(), maxVisit: 0 };
      if (entry.session_id) {
        current.sessions.add(entry.session_id);
      }
      current.maxVisit = Math.max(current.maxVisit, Number(entry.visit_number) || 0);
      visitors.set(entry.visitor_id, current);
    }
    const session = sessionFor(entry);
    session.lastTs = entry.ts || session.lastTs;
    session.events += 1;
    if (entry.event === "heartbeat") {
      const seconds = Math.max(0, Math.min(3600, Number(entry.active_seconds) || 0));
      session.heartbeatSeconds += seconds;
    }
    if (entry.event === "session_pause" || entry.event === "session_end") {
      const seconds = Math.max(0, Math.min(86400, Number(entry.active_seconds) || 0));
      session.reportedActiveSeconds = Math.max(session.reportedActiveSeconds, seconds);
    }
    if (entry.zone_id && (entry.event === "zone_view" || entry.event === "zone_select" || entry.event === "media_view")) {
      increment(zones, `${entry.zone_id}${entry.zone_label ? ` | ${entry.zone_label}` : ""}`);
    }
  }
}

const uniqueVisitors = visitors.size;
const totalSessions = sessions.size;
const returningVisitors = [...visitors.values()].filter((visitor) => visitor.maxVisit > 1 || visitor.sessions.size > 1).length;
const repeatSessions = Math.max(0, totalSessions - uniqueVisitors);
const totalActiveSeconds = [...sessions.values()]
  .reduce((sum, session) => sum + Math.max(session.heartbeatSeconds, session.reportedActiveSeconds), 0);
const averageSessionSeconds = totalSessions ? Math.round(totalActiveSeconds / totalSessions) : 0;

function topList(map, limit = 12) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }));
}

const recentSessions = [...sessions.entries()]
  .sort((a, b) => String(b[1].lastTs).localeCompare(String(a[1].lastTs)))
  .slice(0, 10)
  .map(([id, session]) => ({
    id,
    visitor: session.visitorId,
    first: session.firstTs,
    last: session.lastTs,
    activeSeconds: Math.max(session.heartbeatSeconds, session.reportedActiveSeconds),
    events: session.events
  }));

console.log(JSON.stringify({
  totalEvents,
  uniqueVisitors,
  sessions: totalSessions,
  returningVisitors,
  repeatSessions,
  totalActiveSeconds,
  averageSessionSeconds,
  topEvents: topList(events),
  topZones: topList(zones),
  recentSessions
}, null, 2));
