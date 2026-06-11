const mediaBase = "https://claudiazdotcom.wordpress.com/wp-content/uploads/2022/10/";

const zones = [
  {
    id: "overview",
    image: `${mediaBase}dji_0279_1.jpg`,
    en: {
      label: "Overview",
      title: "A private first look",
      copy: "The opening view should read quickly: a 23.60 m Sunseeker 76, presented for selected broker and client conversations."
    },
    ru: {
      label: "Обзор",
      title: "Первое частное впечатление",
      copy: "Первый экран должен считываться сразу: Sunseeker 76 длиной 23.60 м для закрытого показа брокерам и клиентам."
    }
  },
  {
    id: "exterior",
    image: `${mediaBase}dji_0248.jpg`,
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
    lead: "A controlled, media-first presentation for selected broker and client conversations. Quiet, direct, and built around the yacht itself.",
    details: "Details",
    inquiry: "Private inquiry",
    detailsTitle: "Yacht facts",
    inquiryTitle: "Private inquiry",
    inquiryCopy: "Availability, operational details, and introductions are handled privately and remain subject to confirmation.",
    length: "Length",
    beam: "Beam",
    draft: "Draft",
    engines: "Engines",
    fuel: "Fuel",
    range: "Range",
    factLength: "23.60 m",
    factCabins: "4 cabins",
    factSpeed: "32 kn",
    inquirySummary: "Prepared context: Claudia Z, Sunseeker 76, selected private presentation. Preferred zone:"
  },
  ru: {
    eyebrow: "Закрытая презентация яхты",
    headline: "Claudia Z",
    lead: "Контролируемая медиа-презентация для выбранных брокеров и прямых клиентских разговоров. Спокойно, ясно, вокруг самой яхты.",
    details: "Детали",
    inquiry: "Частный запрос",
    detailsTitle: "Факты о яхте",
    inquiryTitle: "Частный запрос",
    inquiryCopy: "Доступность, операционные детали и представления обсуждаются приватно и требуют подтверждения.",
    length: "Длина",
    beam: "Ширина",
    draft: "Осадка",
    engines: "Двигатели",
    fuel: "Топливо",
    range: "Запас хода",
    factLength: "23.60 м",
    factCabins: "4 каюты",
    factSpeed: "32 уз.",
    inquirySummary: "Контекст: Claudia Z, Sunseeker 76, закрытая презентация. Выбранная зона:"
  }
};

const state = {
  lang: detectLanguage(),
  zoneId: "overview"
};

const media = document.querySelector("#zoneMedia");
const rail = document.querySelector("#zoneRail");
const detailsSheet = document.querySelector("#detailsSheet");
const inquirySheet = document.querySelector("#inquirySheet");
const zoneTitle = document.querySelector("#zoneTitle");
const zoneCopy = document.querySelector("#zoneCopy");
const inquirySummary = document.querySelector("#inquirySummary");

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
  zoneTitle.textContent = zone[state.lang].title;
  zoneCopy.textContent = zone[state.lang].copy;
  inquirySummary.textContent = `${copy[state.lang].inquirySummary} ${zone[state.lang].label}.`;
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
  toggleSheet(inquirySheet, false);
  toggleSheet(detailsSheet);
});

document.querySelector("#inquiryButton").addEventListener("click", () => {
  toggleSheet(detailsSheet, false);
  toggleSheet(inquirySheet);
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.close === "details" ? detailsSheet : inquirySheet;
    toggleSheet(target, false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleSheet(detailsSheet, false);
    toggleSheet(inquirySheet, false);
  }
});

render();
