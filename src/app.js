function localMedia(folder, stageFile, fullFile, mobileFile, focus = "50% 50%") {
  return {
    src: `assets/media/${folder}/${stageFile}`,
    fullSrc: `assets/media/${folder}/${fullFile}`,
    mobileSrc: `assets/media/${folder}/${mobileFile}`,
    focus
  };
}

const zones = [
  {
    id: "overview",
    media: [
      localMedia("overview", "dji_0266_1-stage.webp", "dji_0266_1-full.webp", "dji_0266_1-mobile.webp", "50% 48%"),
      localMedia("overview", "dji_0261_1-stage.webp", "dji_0261_1-full.webp", "dji_0261_1-mobile.webp", "54% 50%"),
      localMedia("overview", "dji_0269_1-stage.webp", "dji_0269_1-full.webp", "dji_0269_1-mobile.webp", "50% 54%"),
      localMedia("overview", "dji_0258_1-stage.webp", "dji_0258_1-full.webp", "dji_0258_1-mobile.webp", "48% 52%")
    ],
    en: {
      label: "Overview",
      title: "At a glance",
      copy: "A 24 m Sunseeker 76 for quiet family cruising, open decks, and water-level leisure.",
      detail: "Built in 2020, the yacht is presented through exterior profile, outdoor deck life, lower-deck accommodation, water access, and tender context. The tone stays family-oriented and unhurried, with enough performance and toys for more energetic days on the water."
    },
    ru: {
      label: "Обзор",
      title: "Одним взглядом",
      copy: "24-метровая Sunseeker 76 для спокойного семейного путешествия, палуб и отдыха у воды.",
      detail: "Яхта 2020 года показана через внешний профиль, жизнь на открытых палубах, размещение на нижней палубе, выход к воде и тендер. Тон остается семейным и неспешным, но с запасом эмоций и активности для более энергичных дней на воде."
    }
  },
  {
    id: "exterior",
    media: [
      localMedia("exterior", "dji_0262-stage.webp", "dji_0262-full.webp", "dji_0262-mobile.webp", "50% 48%"),
      localMedia("exterior", "dji_0266-stage.webp", "dji_0266-full.webp", "dji_0266-mobile.webp", "50% 52%"),
      localMedia("exterior", "dji_0247-stage.webp", "dji_0247-full.webp", "dji_0247-mobile.webp", "50% 52%"),
      localMedia("exterior", "dji_0267-stage.webp", "dji_0267-full.webp", "dji_0267-mobile.webp", "52% 50%"),
      localMedia("exterior", "dji_0261-stage.webp", "dji_0261-full.webp", "dji_0261-mobile.webp", "50% 50%"),
      localMedia("exterior", "dji_0270-stage.webp", "dji_0270-full.webp", "dji_0270-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Exterior",
      title: "Profile and proportions",
      copy: "Deep-V profile, long glazing, and deck volume are kept readable as one complete yacht.",
      detail: "The exterior sequence is for scale, stance, hull line, and the way the Sunseeker 76 sits on the water. It should support a fast broker conversation without cutting the yacht into decorative fragments."
    },
    ru: {
      label: "Экстерьер",
      title: "Профиль и пропорции",
      copy: "Профиль deep-V, длинное остекление и объем палуб считываются как цельная яхта.",
      detail: "Экстерьер нужен для масштаба, посадки на воде, линии корпуса и общего силуэта Sunseeker 76. Он должен быстро помогать в разговоре с брокером, без декоративного дробления яхты на фрагменты."
    }
  },
  {
    id: "flybridge",
    media: [
      localMedia("flybridge", "130-p1999658-stage.webp", "130-p1999658-full.webp", "130-p1999658-mobile.webp", "50% 48%"),
      localMedia("flybridge", "dji_0276-stage.webp", "dji_0276-full.webp", "dji_0276-mobile.webp", "50% 48%"),
      localMedia("flybridge", "129-p1477663-stage.webp", "129-p1477663-full.webp", "129-p1477663-mobile.webp", "48% 48%"),
      localMedia("flybridge", "132-p1999663-stage.webp", "132-p1999663-full.webp", "132-p1999663-mobile.webp", "45% 50%"),
      localMedia("flybridge", "126-p1477652-stage.webp", "126-p1477652-full.webp", "126-p1477652-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Flybridge",
      title: "Open social deck",
      copy: "The upper deck is arranged for ten at the table, sun, shade, and easy service.",
      detail: "Flybridge equipment includes two refrigerators, a chilled storage box, ice maker, two sunpads, awning, and a sliding opening roof. The space suits slow lunches, shaded cruising, and livelier days without changing the yacht's calm character."
    },
    ru: {
      label: "Флайбридж",
      title: "Открытая верхняя палуба",
      copy: "Верхняя палуба рассчитана на стол до 10 человек, солнце, тень и удобный сервис.",
      detail: "На флайбридже предусмотрены два холодильника, охлаждаемый бокс, ледомат, два лежака, маркиза и сдвижная открывающаяся крыша. Пространство подходит для неспешных обедов, движения в тени и более живых дней без потери спокойного характера яхты."
    }
  },
  {
    id: "foredeck",
    media: [
      localMedia("foredeck", "142-p1477659-stage.webp", "142-p1477659-full.webp", "142-p1477659-mobile.webp", "50% 49%"),
      localMedia("foredeck", "146-p1999711-stage.webp", "146-p1999711-full.webp", "146-p1999711-mobile.webp", "49% 50%"),
      localMedia("foredeck", "149-p1999723-stage.webp", "149-p1999723-full.webp", "149-p1999723-mobile.webp", "50% 49%"),
      localMedia("foredeck", "156-p1999729-stage.webp", "156-p1999729-full.webp", "156-p1999729-mobile.webp", "48% 50%"),
      localMedia("foredeck", "160-p1477679-stage.webp", "160-p1477679-full.webp", "160-p1477679-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Foredeck",
      title: "Forward lounge",
      copy: "A quieter bow lounge with sofas, table, refrigeration, music, and space for 6-8 people.",
      detail: "The foredeck works as a separate open-air sitting area away from the cockpit and flybridge. Sofas, a table, two refrigerators, and music support calm anchorage time or a more private forward conversation while underway."
    },
    ru: {
      label: "Фордек",
      title: "Носовая лаунж-зона",
      copy: "Спокойная носовая зона с диванами, столом, музыкой, двумя холодильниками и местом для 6-8 человек.",
      detail: "Фордек работает как отдельная открытая зона посадки вдали от кокпита и флайбриджа. Диваны, стол, два холодильника и музыка поддерживают спокойное время на якоре или более приватный разговор на ходу."
    }
  },
  {
    id: "cockpit",
    media: [
      localMedia("cockpit", "121-p1999653-stage.webp", "121-p1999653-full.webp", "121-p1999653-mobile.webp", "50% 50%"),
      localMedia("cockpit", "113-p1477599-stage.webp", "113-p1477599-full.webp", "113-p1477599-mobile.webp", "50% 50%"),
      localMedia("cockpit", "115-p1477604-stage.webp", "115-p1477604-full.webp", "115-p1477604-mobile.webp", "47% 50%")
    ],
    en: {
      label: "Cockpit",
      title: "Aft lounge connection",
      copy: "The cockpit links saloon, aft seating, table service, refrigeration, ice, and water access.",
      detail: "This is the shaded transition between the main saloon and the stern. A refrigerator and ice maker support relaxed service at the table, while the layout keeps movement toward the swim platform simple."
    },
    ru: {
      label: "Кокпит",
      title: "Кормовая лаунж-связь",
      copy: "Кокпит связывает салон, кормовую посадку, стол, холодильник, ледомат и выход к воде.",
      detail: "Это защищенный переход между главным салоном и кормой. Холодильник и ледомат поддерживают спокойный сервис у стола, а планировка сохраняет простой маршрут к купальной платформе."
    }
  },
  {
    id: "aft_swim_platform",
    media: [
      localMedia("aft_swim_platform", "generated-platform-placeholder-stage.webp", "generated-platform-placeholder-full.webp", "generated-platform-placeholder-mobile.webp", "52% 53%")
    ],
    en: {
      label: "Aft Swim Platform",
      title: "Water access aft",
      copy: "A sea-level stern setup for swimming, tender boarding, SeaBob, SUPs, and slow time by the water.",
      detail: "Final platform media will replace the current placeholder. The intended story is water-level use: easy bathing access, tender transfer, SeaBob, two SUP boards, and relaxed stern lounging."
    },
    ru: {
      label: "Кормовая платформа",
      title: "Кормовой выход к воде",
      copy: "Кормовая зона у воды для купания, посадки с тендера, SeaBob, SUP и спокойного отдыха.",
      detail: "Финальные фото платформы позже заменят текущую заглушку. Смысл зоны: удобный выход к воде, трансфер с тендера, SeaBob, две SUP-доски и спокойный отдых на корме у уровня моря."
    }
  },
  {
    id: "tender",
    media: [
      localMedia("tender", "williams-sportjet-placeholder-stage.webp", "williams-sportjet-placeholder-full.webp", "williams-sportjet-placeholder-mobile.webp", "45% 52%")
    ],
    en: {
      label: "Tender",
      title: "Tender and water toys",
      copy: "Williams 420 tender context is kept separate from the platform for transfer and toy planning.",
      detail: "This section remains a placeholder until owner-approved tender media is connected. It should support the conversation around transfer, water toys, and storage without overloading the aft-platform story."
    },
    ru: {
      label: "Тендер",
      title: "Тендер и водные активности",
      copy: "Тендер Williams 420 отделен от платформы для понятного разговора о трансфере и игрушках.",
      detail: "Раздел остается на заглушке до подключения утвержденных фото тендера. Его задача - отдельно поддержать разговор о трансфере, водных игрушках и хранении, не перегружая историю кормовой платформы."
    }
  },
  {
    id: "saloon",
    media: [
      localMedia("saloon", "80-p1477573-stage.webp", "80-p1477573-full.webp", "80-p1477573-mobile.webp", "50% 50%"),
      localMedia("saloon", "89-p1999637-stage.webp", "89-p1999637-full.webp", "89-p1999637-mobile.webp", "50% 50%"),
      localMedia("saloon", "87-p1999629-stage.webp", "87-p1999629-full.webp", "87-p1999629-mobile.webp", "50% 50%"),
      localMedia("saloon", "85-p1999616-stage.webp", "85-p1999616-full.webp", "85-p1999616-mobile.webp", "50% 50%"),
      localMedia("saloon", "94-p1477558-stage.webp", "94-p1477558-full.webp", "94-p1477558-mobile.webp", "50% 50%"),
      localMedia("saloon", "98-p1999624-stage.webp", "98-p1999624-full.webp", "98-p1999624-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Saloon",
      title: "Main saloon",
      copy: "The saloon combines seating, dining, galley context, broad glazing, and direct cockpit flow.",
      detail: "This is the calm interior center of the main deck: social seating, dining, natural light, and visual connection outward. It supports family cruising without feeling formal or separated from the aft deck."
    },
    ru: {
      label: "Салон",
      title: "Главный салон",
      copy: "Салон объединяет посадку, обеденную зону, камбуз, широкое остекление и прямой выход в кокпит.",
      detail: "Это спокойный интерьерный центр главной палубы: общая посадка, обеденная зона, естественный свет и визуальная связь наружу. Он поддерживает семейное путешествие без ощущения формальности или отрыва от кормовой палубы."
    }
  },
  {
    id: "master_cabin",
    media: [
      localMedia("master_cabin", "2-p1999374-stage.webp", "2-p1999374-full.webp", "2-p1999374-mobile.webp", "50% 50%"),
      localMedia("master_cabin", "6-p1999381-stage.webp", "6-p1999381-full.webp", "6-p1999381-mobile.webp", "50% 50%"),
      localMedia("master_cabin", "12-p1477496-stage.webp", "12-p1477496-full.webp", "12-p1477496-mobile.webp", "50% 50%"),
      localMedia("master_cabin", "10-p1999413-stage.webp", "10-p1999413-full.webp", "10-p1999413-mobile.webp", "50% 50%"),
      localMedia("master_cabin", "15-p1999395-stage.webp", "15-p1999395-full.webp", "15-p1999395-mobile.webp", "50% 50%"),
      localMedia("master_cabin", "14-p1999393-stage.webp", "14-p1999393-full.webp", "14-p1999393-mobile.webp", "50% 50%"),
      localMedia("master_cabin", "18-p1477504-stage.webp", "18-p1477504-full.webp", "18-p1477504-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Master cabin",
      title: "Principal cabin",
      copy: "The principal lower-deck cabin is shown through berth volume, storage, calm materials, and ensuite use.",
      detail: "The master cabin is the quiet private part of the lower deck, with a double berth, storage and lounge/vanity context, and its own bathroom. The wording stays calm rather than hotel-like."
    },
    ru: {
      label: "Мастер-каюта",
      title: "Главная каюта",
      copy: "Главная каюта нижней палубы показана через кровать, хранение, спокойные материалы и собственную ванную.",
      detail: "Мастер-каюта - приватная спокойная часть нижней палубы: французская кровать, хранение, зона отдыха/туалетный столик и собственная ванная. Текст намеренно остается спокойным, без гостиничного пафоса."
    }
  },
  {
    id: "forward_vip",
    media: [
      localMedia("forward_vip", "38-p1999471-stage.webp", "38-p1999471-full.webp", "38-p1999471-mobile.webp", "50% 50%"),
      localMedia("forward_vip", "45-p1999492-stage.webp", "45-p1999492-full.webp", "45-p1999492-mobile.webp", "50% 50%"),
      localMedia("forward_vip", "43-p1999484-stage.webp", "43-p1999484-full.webp", "43-p1999484-mobile.webp", "50% 50%"),
      localMedia("forward_vip", "44-p1999491-stage.webp", "44-p1999491-full.webp", "44-p1999491-mobile.webp", "50% 50%"),
      localMedia("forward_vip", "47-p1999506-stage.webp", "47-p1999506-full.webp", "47-p1999506-mobile.webp", "50% 50%"),
      localMedia("forward_vip", "49-p1999515-stage.webp", "49-p1999515-full.webp", "49-p1999515-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Forward VIP",
      title: "Forward VIP cabin",
      copy: "The forward guest cabin adds a double berth, storage, natural light, and its own bathroom.",
      detail: "Placed forward on the lower deck, this cabin gives guests a complete private space rather than an overflow berth. It works naturally within a family cruising plan or for selected guests."
    },
    ru: {
      label: "Носовая VIP",
      title: "Носовая VIP-каюта",
      copy: "Носовая гостевая каюта добавляет французскую кровать, хранение, свет и собственную ванную.",
      detail: "Расположенная в носовой части нижней палубы, эта каюта дает гостям полноценное приватное пространство, а не дополнительное спальное место. Она естественно работает для семейного путешествия или выбранных гостей."
    }
  },
  {
    id: "starboard_guest",
    media: [
      localMedia("starboard_guest", "19-p1999421-stage.webp", "19-p1999421-full.webp", "19-p1999421-mobile.webp", "50% 50%"),
      localMedia("starboard_guest", "21-p1999436-stage.webp", "21-p1999436-full.webp", "21-p1999436-mobile.webp", "50% 50%"),
      localMedia("starboard_guest", "22-p1999445-stage.webp", "22-p1999445-full.webp", "22-p1999445-mobile.webp", "50% 50%"),
      localMedia("starboard_guest", "23-p1999446-stage.webp", "23-p1999446-full.webp", "23-p1999446-mobile.webp", "50% 50%"),
      localMedia("starboard_guest", "27-p1999448-stage.webp", "27-p1999448-full.webp", "27-p1999448-mobile.webp", "50% 50%"),
      localMedia("starboard_guest", "34-p1999463-stage.webp", "34-p1999463-full.webp", "34-p1999463-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Starboard guest",
      title: "Starboard guest cabin",
      copy: "A starboard guest cabin with a double berth, storage, natural light, and private bathroom access.",
      detail: "This cabin keeps the accommodation plan balanced on the lower deck. It reads as a comfortable guest room with its own bathroom access, suitable for quiet family cruising or invited guests."
    },
    ru: {
      label: "Правая гостевая",
      title: "Правая гостевая каюта",
      copy: "Правая гостевая каюта с французской кроватью, хранением, естественным светом и ванной.",
      detail: "Эта каюта балансирует план размещения на нижней палубе. Она воспринимается как комфортная гостевая с собственной ванной зоной, подходящая для семейного путешествия или приглашенных гостей."
    }
  },
  {
    id: "port_guest",
    media: [
      localMedia("port_guest", "58-p1999575-stage.webp", "58-p1999575-full.webp", "58-p1999575-mobile.webp", "50% 50%"),
      localMedia("port_guest", "54-p1999537-stage.webp", "54-p1999537-full.webp", "54-p1999537-mobile.webp", "50% 50%"),
      localMedia("port_guest", "53-p1999532-stage.webp", "53-p1999532-full.webp", "53-p1999532-mobile.webp", "50% 50%"),
      localMedia("port_guest", "60-p1999557-stage.webp", "60-p1999557-full.webp", "60-p1999557-mobile.webp", "50% 50%"),
      localMedia("port_guest", "62-p1999562-stage.webp", "62-p1999562-full.webp", "62-p1999562-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Port guest",
      title: "Port guest / children's cabin",
      copy: "A flexible port-side cabin: three singles, or a double berth with an upper pullman.",
      detail: "This is the most family-oriented cabin. It can be read as three single berths, or as one double berth with an upper pullman, with its own bathroom completing the lower-deck accommodation plan."
    },
    ru: {
      label: "Левая гостевая",
      title: "Левая гостевая / детская",
      copy: "Гибкая левая каюта: три односпальных места или французская кровать с верхней откидной.",
      detail: "Это самая семейная каюта. Ее можно воспринимать как три односпальных места или как одну французскую кровать с верхней откидной полкой; собственная ванная завершает план размещения нижней палубы."
    }
  }
];

const copy = {
  en: {
    eyebrow: "Controlled yacht presentation",
    headline: "Claudia Z",
    lead: "Sunseeker 76 combines speed, volume, and maneuverability with quiet family cruising. Designed with taste for comfortable time on board. Built in 2020.",
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
    factLength: "24 m",
    factCabins: "4 cabins",
    factSpeed: "32 kn",
    previousMedia: "Previous image",
    nextMedia: "Next image",
    openMedia: "Open image",
    swipeHint: "Swipe sideways"
  },
  ru: {
    eyebrow: "Закрытая презентация яхты",
    headline: "Claudia Z",
    lead: "Sunseeker 76 - отличное сочетание скоростных показателей, вместительности и маневренности. Семейная круизная яхта, спроектированная со вкусом для комфортного отдыха. Год постройки 2020.",
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
    factLength: "24 м",
    factCabins: "4 каюты",
    factSpeed: "32 уз.",
    previousMedia: "Предыдущее изображение",
    nextMedia: "Следующее изображение",
    openMedia: "Открыть изображение",
    swipeHint: "Свайп вбок"
  }
};

const state = {
  lang: detectLanguage(),
  theme: detectTheme(),
  zoneId: "overview",
  mediaIndex: 0,
  mediaRequestId: 0,
  dragStartX: 0,
  dragStartY: 0
};

document.documentElement.lang = state.lang;

const mediaElement = document.querySelector("#zoneMedia");
const mediaGuard = document.querySelector("#mediaGuard");
const rail = document.querySelector("#zoneRail");
const detailsSheet = document.querySelector("#detailsSheet");
const themeButton = document.querySelector("#themeButton");
const stageContent = document.querySelector(".stage__content");
const zoneTitle = document.querySelector("#zoneTitle");
const zoneCopy = document.querySelector("#zoneCopy");
const zoneDetail = document.querySelector("#zoneDetail");
const mediaCounter = document.querySelector("#mediaCounter");
const previousMediaButton = document.querySelector("#prevMediaButton");
const nextMediaButton = document.querySelector("#nextMediaButton");
const openMediaButton = document.querySelector("#openMediaButton");
const mediaLightbox = document.querySelector("#mediaLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const stage = document.querySelector(".stage");

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

function currentMedia() {
  const zone = currentZone();
  return zone.media[state.mediaIndex] || zone.media[0];
}

function stageSourceFor(mediaItem) {
  const isMobile = window.matchMedia("(max-width: 759px)").matches;
  return isMobile && mediaItem.mobileSrc ? mediaItem.mobileSrc : mediaItem.src;
}

function setTheme(theme) {
  state.theme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = state.theme;
  window.localStorage.setItem("claudia-z-theme", state.theme);
  themeButton.setAttribute("aria-pressed", state.theme === "light" ? "true" : "false");
  themeButton.setAttribute("aria-label", state.theme === "light" ? "Switch to dark theme" : "Switch to light theme");
}

function setZone(zoneId) {
  if (zoneId === state.zoneId) {
    return;
  }
  state.zoneId = zoneId;
  state.mediaIndex = 0;
  render();
}

function setMediaIndex(index) {
  const zone = currentZone();
  state.mediaIndex = (index + zone.media.length) % zone.media.length;
  document.body.classList.remove("is-media-surfacing");
  window.requestAnimationFrame(() => {
    document.body.classList.add("is-media-surfacing");
  });
  renderZone();
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
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.dataset.i18nAria;
    node.setAttribute("aria-label", copy[state.lang][key] || "");
  });
  document.querySelector('[data-fact="length"]').textContent = copy[state.lang].factLength;
  document.querySelector('[data-fact="cabins"]').textContent = copy[state.lang].factCabins;
  document.querySelector('[data-fact="speed"]').textContent = copy[state.lang].factSpeed;
}

function preloadAdjacentMedia() {
  const zone = currentZone();
  const next = zone.media[(state.mediaIndex + 1) % zone.media.length];
  const previous = zone.media[(state.mediaIndex - 1 + zone.media.length) % zone.media.length];
  [next, previous].forEach((item) => {
    const image = new Image();
    image.src = stageSourceFor(item);
  });
}

function updateStageMedia(selectedMedia, altText) {
  const stageSrc = stageSourceFor(selectedMedia);
  const nextRequestId = state.mediaRequestId + 1;
  state.mediaRequestId = nextRequestId;
  mediaElement.alt = altText;
  if (mediaElement.src.endsWith(stageSrc)) {
    mediaElement.style.objectPosition = selectedMedia.focus;
    mediaElement.classList.remove("is-loading");
    return;
  }
  mediaElement.classList.add("is-loading");
  const image = new Image();
  image.onload = () => {
    if (state.mediaRequestId !== nextRequestId) {
      return;
    }
    mediaElement.src = stageSrc;
    mediaElement.style.objectPosition = selectedMedia.focus;
    mediaElement.classList.remove("is-loading");
  };
  image.onerror = () => {
    if (state.mediaRequestId === nextRequestId) {
      mediaElement.classList.remove("is-loading");
    }
  };
  image.src = stageSrc;
}

function renderZone() {
  const zone = currentZone();
  const selectedMedia = currentMedia();
  stageContent.classList.toggle("stage__content--overview", zone.id === "overview");
  updateStageMedia(selectedMedia, zone[state.lang].title);
  mediaCounter.textContent = `${state.mediaIndex + 1} / ${zone.media.length}`;
  zoneTitle.textContent = zone[state.lang].title;
  zoneCopy.textContent = zone[state.lang].copy;
  zoneDetail.textContent = zone[state.lang].detail || "";
  preloadAdjacentMedia();
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

function toggleLightbox(force) {
  const shouldOpen = typeof force === "boolean" ? force : !mediaLightbox.classList.contains("is-open");
  if (shouldOpen) {
    const selectedMedia = currentMedia();
    lightboxImage.src = selectedMedia.fullSrc || selectedMedia.src;
    lightboxImage.alt = currentZone()[state.lang].title;
  }
  mediaLightbox.classList.toggle("is-open", shouldOpen);
  mediaLightbox.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
  document.body.classList.toggle("is-lightbox-open", shouldOpen);
}

themeButton.addEventListener("click", () => {
  setTheme(state.theme === "dark" ? "light" : "dark");
});

previousMediaButton.addEventListener("click", () => {
  setMediaIndex(state.mediaIndex - 1);
});

nextMediaButton.addEventListener("click", () => {
  setMediaIndex(state.mediaIndex + 1);
});

openMediaButton.addEventListener("click", () => {
  toggleLightbox(true);
});

stage.addEventListener("pointerdown", (event) => {
  if (event.target.closest("button, .sheet, .zone-rail")) {
    return;
  }
  state.dragStartX = event.clientX;
  state.dragStartY = event.clientY;
});

stage.addEventListener("pointerup", (event) => {
  if (event.target.closest("button, .sheet, .zone-rail")) {
    return;
  }
  const deltaX = event.clientX - state.dragStartX;
  const deltaY = event.clientY - state.dragStartY;
  const isSwipe = Math.abs(deltaX) >= 44 && Math.abs(deltaX) >= Math.abs(deltaY) * 1.4;
  if (!isSwipe) {
    const isMobile = window.matchMedia("(max-width: 759px)").matches;
    if (isMobile && Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8 && !event.target.closest(".stage__content, .topbar, .command")) {
      toggleLightbox(true);
    }
    return;
  }
  setMediaIndex(state.mediaIndex + (deltaX < 0 ? 1 : -1));
});

document.querySelector("#detailsButton").addEventListener("click", () => {
  toggleSheet(detailsSheet);
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.close === "lightbox") {
      toggleLightbox(false);
      return;
    }
    toggleSheet(detailsSheet, false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleSheet(detailsSheet, false);
    toggleLightbox(false);
  }
  if (event.key === "ArrowLeft") {
    setMediaIndex(state.mediaIndex - 1);
  }
  if (event.key === "ArrowRight") {
    setMediaIndex(state.mediaIndex + 1);
  }
});

document.addEventListener("contextmenu", (event) => {
  if (event.target.closest(".stage, .lightbox")) {
    event.preventDefault();
  }
});

document.addEventListener("dragstart", (event) => {
  if (event.target === mediaElement || event.target === mediaGuard) {
    event.preventDefault();
  }
});

setTheme(state.theme);
render();
