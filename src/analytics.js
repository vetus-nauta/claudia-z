(function () {
  const endpoint = "/analytics/collect.php";
  const visitorKey = "claudia_z_visitor_id_v1";
  const visitCountKey = "claudia_z_visit_count_v1";
  const sessionKey = "claudia_z_session_id_v1";
  const heartbeatSeconds = 15;
  const maxQueueSize = 32;
  let queue = [];
  let activeSeconds = 0;
  let lastActivityAt = Date.now();

  function randomId(prefix) {
    if (window.crypto?.randomUUID) {
      return `${prefix}_${window.crypto.randomUUID()}`;
    }
    return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 12)}`;
  }

  function readStorage(storage, key) {
    try {
      return storage.getItem(key);
    } catch (_) {
      return "";
    }
  }

  function writeStorage(storage, key, value) {
    try {
      storage.setItem(key, value);
    } catch (_) {
      // Storage may be unavailable in private browsing modes.
    }
  }

  function visitorId() {
    let id = readStorage(window.localStorage, visitorKey);
    if (!id) {
      id = randomId("v");
      writeStorage(window.localStorage, visitorKey, id);
    }
    return id;
  }

  function sessionId() {
    let id = readStorage(window.sessionStorage, sessionKey);
    if (!id) {
      id = randomId("s");
      writeStorage(window.sessionStorage, sessionKey, id);
    }
    return id;
  }

  function visitNumber() {
    const raw = Number.parseInt(readStorage(window.localStorage, visitCountKey) || "0", 10);
    const next = Number.isFinite(raw) ? raw + 1 : 1;
    writeStorage(window.localStorage, visitCountKey, String(next));
    return next;
  }

  const sessionVisitNumber = visitNumber();

  function viewport() {
    return {
      width: Math.round(window.innerWidth || 0),
      height: Math.round(window.innerHeight || 0)
    };
  }

  function currentContext() {
    const activeZone = document.querySelector(".zone-button.is-active");
    const counter = document.querySelector("#mediaCounter")?.textContent || "";
    const parts = counter.split("/").map((part) => Number.parseInt(part.trim(), 10));
    return {
      zone_id: activeZone?.dataset.zoneId || "",
      zone_label: activeZone?.querySelector(".zone-button__label")?.textContent?.trim() || "",
      media_mode: document.querySelector(".stage--horizontal-media") ? "horizontal" : "vertical",
      media_index: Number.isFinite(parts[0]) ? parts[0] : 0,
      media_count: Number.isFinite(parts[1]) ? parts[1] : 0,
      lang: document.documentElement.lang || "",
      theme: document.documentElement.dataset.theme || "",
      viewport: viewport()
    };
  }

  function payload(eventName, detail) {
    return {
      event: eventName,
      visitor_id: visitorId(),
      session_id: sessionId(),
      visit_number: sessionVisitNumber,
      ...currentContext(),
      ...detail
    };
  }

  function sendNow(data, keepalive = true) {
    const body = JSON.stringify(data);
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      if (navigator.sendBeacon(endpoint, blob)) {
        return;
      }
    }
    window.fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive
    }).catch(() => {
      queue.push(data);
      queue = queue.slice(-maxQueueSize);
    });
  }

  function flushQueue() {
    if (!queue.length) {
      return;
    }
    const queued = queue;
    queue = [];
    queued.forEach((item) => sendNow(item, false));
  }

  function track(eventName, detail = {}) {
    if (!eventName || document.visibilityState === "prerender") {
      return;
    }
    sendNow(payload(eventName, detail));
  }

  function markActivity() {
    lastActivityAt = Date.now();
  }

  window.claudiaAnalyticsTrack = track;
  window.addEventListener("claudia:analytics", (event) => {
    const detail = event.detail || {};
    track(detail.event || "custom", detail);
  });
  window.addEventListener("pointerdown", markActivity, { passive: true });
  window.addEventListener("keydown", markActivity, { passive: true });
  window.addEventListener("touchstart", markActivity, { passive: true });

  window.setInterval(() => {
    if (document.visibilityState !== "visible") {
      return;
    }
    const inactiveFor = Date.now() - lastActivityAt;
    if (inactiveFor > heartbeatSeconds * 4 * 1000) {
      return;
    }
    activeSeconds += heartbeatSeconds;
    track("heartbeat", { active_seconds: heartbeatSeconds });
    flushQueue();
  }, heartbeatSeconds * 1000);

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && activeSeconds > 0) {
      track("session_pause", { active_seconds: activeSeconds });
    }
  });

  window.addEventListener("pagehide", () => {
    track("session_end", { active_seconds: activeSeconds });
  });

  track("session_start", {
    returning: sessionVisitNumber > 1 ? "yes" : "no",
    source: "load"
  });
})();
