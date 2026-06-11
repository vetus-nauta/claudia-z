const mediaBase = "https://claudiazdotcom.wordpress.com/wp-content/uploads/2022/10/";

const zones = [
  {
    id: "overview",
    image: `${mediaBase}dji_0240.jpg`,
    focus: "50% 46%",
    en: {
      label: "Overview",
      title: "A private first look",
      copy: "The opening view should identify the yacht, the scale, and the route into the media without adding a contact path."
    },
    ru: {
      label: "Обзор",
      title: "Первое частное впечатление",
      copy: "Первый экран должен сразу показать яхту, уровень и путь в медиа без контактного сценария."
    }
  },
  {
    id: "exterior",
    image: `${mediaBase}dji_0248.jpg`,
    focus: "58% 44%",
    en: {
      label: "Exterior",
      title: "Profile and deck presence",
      copy: "Exterior media should show the hull line, the deck proportions, and the yacht's presence at anchor or underway."
    },
    ru: {
      label: "Экстерьер",
      title: "Профиль и палубы",
      copy: "Экстерьер должен показывать линию корпуса, пропорции палуб и присутствие яхты на воде."
    }
  },
  {
    id: "flybridge",
    image: `${mediaBase}164-p1477618_1.jpg`,
    focus: "50% 50%",
    en: {
      label: "Flybridge",
      title: "Open social deck",
      copy: "A zone for sun, dining, bar moments, and the elevated view that gives the yacht its open-air character."
    },
    ru: {
      label: "Флайбридж",
      title: "Открытая верхняя палуба",
      copy: "Зона солнца, общения, бара и высокого обзора, которая формирует открытый характер яхты."
    }
  },
  {
    id: "main_deck",
    image: `${mediaBase}main-deck.png`,
    focus: "50% 50%",
    en: {
      label: "Main deck",
      title: "Saloon, dining, movement",
      copy: "Main deck content should connect the saloon, dining, galley context, cockpit flow, and the nearly all-around view."
    },
    ru: {
      label: "Главная палуба",
      title: "Салон, обеденная зона, движение",
      copy: "Главная палуба связывает салон, обеденную зону, камбуз, переход в кокпит и широкий обзор вокруг."
    }
  },
  {
    id: "foredeck",
    image: `${mediaBase}167-p1477642.jpg`,
    focus: "50% 50%",
    en: {
      label: "Foredeck",
      title: "Forward lounge",
      copy: "Foredeck media should make the forward sunbeds, seating, and quiet anchorage moments easy to understand."
    },
    ru: {
      label: "Фордек",
      title: "Носовая лаунж-зона",
      copy: "Фото фордека должны ясно показать лежаки, посадочные места и спокойные моменты на якоре."
    }
  },
  {
    id: "cockpit",
    image: `${mediaBase}170-p1999735_1.jpg`,
    focus: "50% 50%",
    en: {
      label: "Cockpit",
      title: "Aft lounge connection",
      copy: "Cockpit presentation should show shade, seating, service, and the transition toward the aft water area."
    },
    ru: {
      label: "Кокпит",
      title: "Кормовая лаунж-связь",
      copy: "Кокпит должен показывать тень, посадку, сервис и переход к кормовой зоне у воды."
    }
  },
  {
    id: "aft_swim_platform",
    image: `${mediaBase}117-p1477608.jpg`,
    focus: "52% 54%",
    en: {
      label: "Aft Swim Platform",
      title: "Water access aft",
      copy: "This section is for the bathing platform, water access, boarding from the tender, and the beach-club style use of the stern."
    },
    ru: {
      label: "Кормовая купальная платформа",
      title: "Кормовой выход к воде",
      copy: "Раздел для купальной платформы, выхода к воде, посадки с тендера и beach-club сценария на корме."
    }
  },
  {
    id: "tender",
    image: `${mediaBase}168-p1477709_1.jpg`,
    focus: "50% 50%",
    en: {
      label: "Tender",
      title: "Tender and water toys",
      copy: "Tender is kept as a separate media story, even when the photos are physically connected to the aft platform."
    },
    ru: {
      label: "Тендер",
      title: "Тендер и водные активности",
      copy: "Тендер ведется отдельной медиа-историей, даже если часть фото снята у кормовой платформы."
    }
  },
  {
    id: "interior",
    image: `${mediaBase}1-p1999373.jpg`,
    focus: "50% 50%",
    en: {
      label: "Interior",
      title: "Interior calm",
      copy: "Interior media is grouped under saloon, master cabin, forward VIP, starboard guest, and port guest / children's cabin."
    },
    ru: {
      label: "Интерьер",
      title: "Спокойствие внутри",
      copy: "Интерьер делится на салон, мастер-каюту, носовую VIP, правую гостевую и левую гостевую / детскую."
    }
  }
];

const copy = {
  en: {
    eyebrow: "Private yacht presentation",
    headline: "Claudia Z",
    lead: "Sunseeker 76 arranged as a quiet visual guide: decks, interiors, details, and water-level zones in one controlled view.",
    details: "Yacht details",
    detailsTitle: "Yacht facts",
    length: "Length",
    beam: "Beam",
    draft: "Draft",
    engines: "Engines",
    fuel: "Fuel",
    range: "Range",
    factLength: "23.60 m",
    factCabins: "4 cabins",
    factSpeed: "32 kn"
  },
  ru: {
    eyebrow: "Закрытая презентация яхты",
    headline: "Claudia Z",
    lead: "Sunseeker 76 как спокойный визуальный гид: палубы, интерьер, детали и зоны у воды в одном контролируемом просмотре.",
    details: "Детали яхты",
    detailsTitle: "Факты о яхте",
    length: "Длина",
    beam: "Ширина",
    draft: "Осадка",
    engines: "Двигатели",
    fuel: "Топливо",
    range: "Запас хода",
    factLength: "23.60 м",
    factCabins: "4 каюты",
    factSpeed: "32 уз."
  }
};

const state = {
  lang: detectLanguage(),
  zoneId: "overview"
};

const media = document.querySelector("#zoneMedia");
const rail = document.querySelector("#zoneRail");
const detailsSheet = document.querySelector("#detailsSheet");
const zoneTitle = document.querySelector("#zoneTitle");
const zoneCopy = document.querySelector("#zoneCopy");

function detectLanguage() {
  const preferred = [navigator.language, ...(navigator.languages || [])]
    .filter(Boolean)
    .map((lang) => lang.toLowerCase());
  return preferred.some((lang) => lang.startsWith("ru")) ? "ru" : "en";
}

function currentZone() {
  return zones.find((zone) => zone.id === state.zoneId) || zones[0];
}

function setLanguage(lang) {
  state.lang = lang === "ru" ? "ru" : "en";
  document.documentElement.lang = state.lang;
  render();
}

function setZone(zoneId) {
  state.zoneId = zoneId;
  render();
}

function renderRail() {
  rail.innerHTML = "";
  zones.forEach((zone) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `zone-button${zone.id === state.zoneId ? " is-active" : ""}`;
    button.textContent = zone[state.lang].label;
    button.addEventListener("click", () => setZone(zone.id));
    rail.append(button);
  });
}

function renderCopy() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[state.lang][key] || "";
  });
  document.querySelectorAll(".language__button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });
  document.querySelector('[data-fact="length"]').textContent = copy[state.lang].factLength;
  document.querySelector('[data-fact="cabins"]').textContent = copy[state.lang].factCabins;
  document.querySelector('[data-fact="speed"]').textContent = copy[state.lang].factSpeed;
}

function renderZone() {
  const zone = currentZone();
  media.src = zone.image;
  media.alt = zone[state.lang].title;
  media.style.objectPosition = zone.focus;
  zoneTitle.textContent = zone[state.lang].title;
  zoneCopy.textContent = zone[state.lang].copy;
}

function render() {
  renderCopy();
  renderRail();
  renderZone();
}

function toggleSheet(sheet, force) {
  const shouldOpen = typeof force === "boolean" ? force : !sheet.classList.contains("is-open");
  sheet.classList.toggle("is-open", shouldOpen);
  sheet.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
}

document.querySelectorAll(".language__button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelector("#detailsButton").addEventListener("click", () => {
  toggleSheet(detailsSheet);
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    toggleSheet(detailsSheet, false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleSheet(detailsSheet, false);
  }
});

render();
