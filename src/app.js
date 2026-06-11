const mediaBase = "https://claudiazdotcom.wordpress.com/wp-content/uploads/2022/10/";

const zones = [
  {
    id: "overview",
    image: `${mediaBase}dji_0240.jpg`,
    focus: "50% 46%",
    en: {
      label: "Overview",
      title: "Claudia Z at a glance",
      copy: "Start with the yacht's profile, scale, and calm presence on the water before moving into decks, interiors, and water access."
    },
    ru: {
      label: "Обзор",
      title: "Claudia Z одним взглядом",
      copy: "Сначала силуэт, масштаб и спокойное присутствие яхты на воде, затем палубы, интерьер и выход к воде."
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
    image: `${mediaBase}72-p1999588.jpg`,
    focus: "50% 50%",
    en: {
      label: "Interior",
      title: "Interior overview",
      copy: "Interior media is organized as a clear route through the saloon, cabins, guest spaces, and private-use details."
    },
    ru: {
      label: "Интерьер",
      title: "Обзор интерьера",
      copy: "Интерьер собран как понятный маршрут через салон, каюты, гостевые зоны и детали частного использования."
    }
  },
  {
    id: "saloon",
    image: `${mediaBase}68-p1999580.jpg`,
    focus: "50% 50%",
    en: {
      label: "Saloon",
      title: "Main saloon",
      copy: "The saloon should show seating, dining, light, circulation, and the way the main deck feels during a real conversation."
    },
    ru: {
      label: "Салон",
      title: "Главный салон",
      copy: "Салон должен показывать посадку, обеденную зону, свет, движение и ощущение главной палубы в реальном разговоре."
    }
  },
  {
    id: "master_cabin",
    image: `${mediaBase}1-p1999373.jpg`,
    focus: "50% 52%",
    en: {
      label: "Master cabin",
      title: "Owner's cabin",
      copy: "Master cabin media should communicate privacy, proportions, storage, materials, and the calm of the principal sleeping space."
    },
    ru: {
      label: "Мастер-каюта",
      title: "Главная каюта",
      copy: "Медиа мастер-каюты должно передавать приватность, пропорции, хранение, материалы и спокойствие главной спальной зоны."
    }
  },
  {
    id: "forward_vip",
    image: `${mediaBase}38-p1999471.jpg`,
    focus: "50% 52%",
    en: {
      label: "Forward VIP",
      title: "Forward VIP cabin",
      copy: "The forward VIP cabin should read as a complete guest space, not a leftover detail in the general interior gallery."
    },
    ru: {
      label: "Носовая VIP",
      title: "Носовая VIP-каюта",
      copy: "Носовая VIP-каюта должна восприниматься как полноценное гостевое пространство, а не случайная деталь общей галереи."
    }
  },
  {
    id: "starboard_guest",
    image: `${mediaBase}53-p1999532.jpg`,
    focus: "50% 52%",
    en: {
      label: "Starboard guest",
      title: "Starboard guest cabin",
      copy: "This zone separates the starboard guest cabin for fast orientation when discussing accommodation layout."
    },
    ru: {
      label: "Правая гостевая",
      title: "Правая гостевая каюта",
      copy: "Эта зона отдельно показывает правую гостевую каюту, чтобы быстро объяснять планировку размещения."
    }
  },
  {
    id: "port_guest",
    image: `${mediaBase}55-p1999538.jpg`,
    focus: "50% 52%",
    en: {
      label: "Port guest",
      title: "Port guest / children's cabin",
      copy: "The port cabin is kept separate so family or guest-use scenarios can be explained without overloading the main interior view."
    },
    ru: {
      label: "Левая гостевая",
      title: "Левая гостевая / детская",
      copy: "Левая каюта ведется отдельно, чтобы семейный или гостевой сценарий объяснялся без перегруза общего раздела интерьера."
    }
  }
];

const copy = {
  en: {
    eyebrow: "Controlled yacht presentation",
    headline: "Claudia Z",
    lead: "A 23.60 m Sunseeker 76 shown by deck, interior, water access, and tender so the yacht can be read quickly and studied in detail.",
    details: "Yacht details",
    detailsTitle: "Specifications",
    length: "Length",
    beam: "Beam",
    draft: "Draft",
    engines: "Engines",
    dryWeight: "Dry weight",
    fuel: "Fuel",
    freshWater: "Fresh water",
    range: "Range",
    factLength: "23.60 m",
    factCabins: "4 cabins",
    factSpeed: "32 kn"
  },
  ru: {
    eyebrow: "Закрытая презентация яхты",
    headline: "Claudia Z",
    lead: "23.60-метровая Sunseeker 76 показана через палубы, интерьер, выход к воде и тендер: быстро для первого понимания, подробно для изучения.",
    details: "Детали яхты",
    detailsTitle: "Спецификация",
    length: "Длина",
    beam: "Ширина",
    draft: "Осадка",
    engines: "Двигатели",
    dryWeight: "Сухой вес",
    fuel: "Топливо",
    freshWater: "Пресная вода",
    range: "Запас хода",
    factLength: "23.60 м",
    factCabins: "4 каюты",
    factSpeed: "32 уз."
  }
};

const state = {
  lang: detectLanguage(),
  theme: detectTheme(),
  zoneId: "overview"
};

document.documentElement.lang = state.lang;

const media = document.querySelector("#zoneMedia");
const mediaGuard = document.querySelector("#mediaGuard");
const rail = document.querySelector("#zoneRail");
const detailsSheet = document.querySelector("#detailsSheet");
const themeButton = document.querySelector("#themeButton");
const zoneTitle = document.querySelector("#zoneTitle");
const zoneCopy = document.querySelector("#zoneCopy");

function detectLanguage() {
  const preferred = [navigator.language, ...(navigator.languages || [])]
    .filter(Boolean)
    .map((lang) => lang.toLowerCase());
  const primaryLanguage = preferred[0] || "";
  if (primaryLanguage.startsWith("ru")) {
    return "ru";
  }
  return "en";
}

function detectTheme() {
  const storedTheme = window.localStorage.getItem("claudia-z-theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function currentZone() {
  return zones.find((zone) => zone.id === state.zoneId) || zones[0];
}

function setTheme(theme) {
  state.theme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = state.theme;
  window.localStorage.setItem("claudia-z-theme", state.theme);
  themeButton.setAttribute("aria-pressed", state.theme === "light" ? "true" : "false");
  themeButton.setAttribute("aria-label", state.theme === "light" ? "Switch to dark theme" : "Switch to light theme");
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
  if (sheet === detailsSheet) {
    document.body.classList.toggle("is-details-open", shouldOpen);
  }
}

themeButton.addEventListener("click", () => {
  setTheme(state.theme === "dark" ? "light" : "dark");
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

document.addEventListener("contextmenu", (event) => {
  if (event.target.closest(".stage")) {
    event.preventDefault();
  }
});

document.addEventListener("dragstart", (event) => {
  if (event.target === media || event.target === mediaGuard) {
    event.preventDefault();
  }
});

setTheme(state.theme);
render();
