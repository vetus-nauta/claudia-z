const yachts = [
  { id: "1", label: "Yacht 1" },
  { id: "2", label: "Yacht 2" },
  { id: "3", label: "Yacht 3" },
  { id: "4", label: "Yacht 4" },
  { id: "5", label: "Yacht 5" }
];

const zones = [
  { id: "1", label: "Zone 1" },
  { id: "2", label: "Zone 2" },
  { id: "3", label: "Zone 3" },
  { id: "4", label: "Zone 4" },
  { id: "5", label: "Zone 5" },
  { id: "6", label: "Zone 6" },
  { id: "7", label: "Zone 7" },
  { id: "8", label: "Zone 8" }
];

const params = new URLSearchParams(window.location.search);
const yachtId = params.get("yacht") || "1";
const yacht = yachts.find((item) => item.id === yachtId) || yachts[0];
const state = {
  zoneIndex: 0,
  theme: window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
};

const stage = document.querySelector("#stage");
const yachtTitle = document.querySelector("#yachtTitle");
const zoneLead = document.querySelector("#zoneLead");
const zoneCounter = document.querySelector("#zoneCounter");
const zoneRail = document.querySelector("#zoneRail");
const detailsButton = document.querySelector("#detailsButton");
const closeDetailsButton = document.querySelector("#closeDetailsButton");
const detailsSheet = document.querySelector("#detailsSheet");
const sheetEyebrow = document.querySelector("#sheetEyebrow");
const sheetTitle = document.querySelector("#sheetTitle");
const sheetCopy = document.querySelector("#sheetCopy");
const themeButton = document.querySelector("#themeButton");
const prevZoneButton = document.querySelector("#prevZoneButton");
const nextZoneButton = document.querySelector("#nextZoneButton");

function currentZone() {
  return zones[state.zoneIndex] || zones[0];
}

function setTheme(theme) {
  state.theme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = state.theme;
  themeButton.setAttribute("aria-pressed", state.theme === "light" ? "true" : "false");
}

function renderRail() {
  zoneRail.innerHTML = "";
  zones.forEach((zone, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `zone-button${index === state.zoneIndex ? " is-active" : ""}`;
    button.textContent = zone.id;
    button.setAttribute("aria-label", zone.label);
    button.addEventListener("click", () => setZone(index));
    zoneRail.append(button);
  });
}

function render() {
  const zone = currentZone();
  yachtTitle.textContent = yacht.label;
  zoneLead.textContent = `${zone.label} placeholder. Add approved media and text here.`;
  zoneCounter.textContent = `${state.zoneIndex + 1} / ${zones.length}`;
  sheetEyebrow.textContent = yacht.label;
  sheetTitle.textContent = zone.label;
  sheetCopy.textContent = "Placeholder details. Replace this only after approved source text is available.";
  stage.dataset.zone = zone.id;
  renderRail();
}

function setZone(index) {
  state.zoneIndex = (index + zones.length) % zones.length;
  render();
}

function toggleDetails(force) {
  const next = typeof force === "boolean" ? force : detailsSheet.getAttribute("aria-hidden") === "true";
  detailsSheet.setAttribute("aria-hidden", next ? "false" : "true");
}

detailsButton.addEventListener("click", () => toggleDetails());
closeDetailsButton.addEventListener("click", () => toggleDetails(false));
themeButton.addEventListener("click", () => setTheme(state.theme === "light" ? "dark" : "light"));
prevZoneButton.addEventListener("click", () => setZone(state.zoneIndex - 1));
nextZoneButton.addEventListener("click", () => setZone(state.zoneIndex + 1));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleDetails(false);
  }
  if (event.key === "ArrowLeft") {
    setZone(state.zoneIndex - 1);
  }
  if (event.key === "ArrowRight") {
    setZone(state.zoneIndex + 1);
  }
});

setTheme(state.theme);
render();
