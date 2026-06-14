function localMedia(folder, stageFile, fullFile, mobileFile, focus = "50% 50%") {
  return {
    src: `assets/media/${folder}/${stageFile}`,
    fullSrc: `assets/media/${folder}/${fullFile}`,
    mobileSrc: `assets/media/${folder}/${mobileFile}`,
    focus
  };
}

function localGalleryMedia(folder, baseFile, focus = "50% 50%") {
  return {
    src: `assets/media/${folder}/${baseFile}-stage.webp`,
    fullSrc: `assets/media/${folder}/${baseFile}-full.webp`,
    mobileSrc: `assets/media/${folder}/${baseFile}-mobile.webp`,
    thumbSrc: `assets/media/${folder}/${baseFile}-thumb.webp`,
    gallerySrc: `assets/media/${folder}/${baseFile}-full.webp`,
    focus
  };
}

const EXPERIMENTAL_GALLERY_ZONE_ID = "aft_swim_platform";

const zones = [
  {
    id: "overview",
    media: [
      localMedia("overview", "dji_0279-stage.webp", "dji_0279-full.webp", "dji_0279-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Overview",
      title: "At a glance",
      copy: "A 2020 Sunseeker 76 for private coastal cruising and time at anchor.",
      detail: "Claudia Z carries four cabins, open decks, direct water access, and a Williams 420 tender context. The presentation is kept factual, quiet, and private."
    },
    ru: {
      label: "Обзор",
      title: "Одним взглядом",
      copy: "Sunseeker 76 2020 года для частных прибрежных переходов и стоянок на якоре.",
      detail: "У Claudia Z четыре каюты, открытые палубы, прямой выход к воде и контекст тендера Williams 420. Презентация остается фактической, спокойной и закрытой."
    }
  },
  {
    id: "exterior",
    media: [
      localMedia("overview", "dji_0266_1-stage.webp", "dji_0266_1-full.webp", "dji_0266_1-mobile.webp", "50% 48%"),
      localMedia("overview", "dji_0261_1-stage.webp", "dji_0261_1-full.webp", "dji_0261_1-mobile.webp", "54% 50%"),
      localMedia("overview", "dji_0269_1-stage.webp", "dji_0269_1-full.webp", "dji_0269_1-mobile.webp", "50% 54%"),
      localMedia("overview", "dji_0258_1-stage.webp", "dji_0258_1-full.webp", "dji_0258_1-mobile.webp", "48% 52%"),
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
      copy: "Profile, hull line, glazing, and deck volume in one first read.",
      detail: "This section is for scale and orientation: the 76 Yacht silhouette, flybridge height, side glazing, and the way the hull sits on the water."
    },
    ru: {
      label: "Экстерьер",
      title: "Профиль и пропорции",
      copy: "Профиль, линия корпуса, остекление и объем палуб одним взглядом.",
      detail: "Раздел дает масштаб: силуэт 76 Yacht, высоту флайбриджа, боковое остекление и посадку корпуса на воде."
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
      copy: "The main open-air deck, with shade, table seating, sunpads, and cold storage.",
      detail: "Confirmed equipment: two refrigerators, chilled box, ice maker, two sunpads, awning, sliding roof, and table seating for 10."
    },
    ru: {
      label: "Флайбридж",
      title: "Открытая верхняя палуба",
      copy: "Главная открытая палуба: тень, стол, лежаки и холодное хранение.",
      detail: "Подтверждено: два холодильника, охлаждаемый бокс, ледомат, два лежака, маркиза, сдвижная крыша и стол до 10 человек."
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
      copy: "A quieter forward lounge, separate from the cockpit and flybridge.",
      detail: "Sofas, a table, two refrigerators, and music make it useful at anchor for 6-8 people without turning the bow into a showpiece."
    },
    ru: {
      label: "Фордек",
      title: "Носовая лаунж-зона",
      copy: "Более тихая носовая зона, отдельно от кокпита и флайбриджа.",
      detail: "Диваны, стол, два холодильника и музыка делают фордек рабочим местом на якоре для 6-8 человек, без лишней парадности."
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
      copy: "The shaded aft link between saloon, table service, and the swim platform.",
      detail: "A refrigerator and ice maker support the cockpit table. The route aft stays direct, which matters when people move between saloon, tender, and water."
    },
    ru: {
      label: "Кокпит",
      title: "Кормовая лаунж-связь",
      copy: "Теневая кормовая связь между салоном, столом и выходом к воде.",
      detail: "Холодильник и ледомат поддерживают сервис у стола. Прямой проход к корме важен, когда люди перемещаются между салоном, тендером и водой."
    }
  },
  {
    id: "aft_swim_platform",
    media: [
      localGalleryMedia("aft_swim_platform", "01-platform-iphone-primary", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "02-platform-iphone-26290316", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "03-platform-iphone-42e39c65", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "05-platform-iphone-58e2ff53", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "06-platform-iphone-bddff6cc", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "07-platform-iphone-c1312fd5", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "08-platform-iphone-c32af275", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "09-platform-iphone-d175137d", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "10-platform-iphone-d364fbb6", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "11-platform-iphone-d9cc07d5", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "12-platform-iphone-edd7c0f8", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "13-platform-iphone-img-3432", "50% 50%")
    ],
    en: {
      label: "Aft Swim Platform",
      title: "Water access aft",
      copy: "The aft submersible platform works as a beach area by the water.",
      detail: "On the Sunseeker 76, the aft submersible swim platform is arranged in an original and practical way. It can be used as a beach area with sun loungers and a small table, while the platform height can be adjusted for comfortable entry into the water and exit from it. A ladder is provided for getting into the water.\n\nThese options allow young children, older guests, and people with reduced mobility to enjoy the sea and the beach area comfortably. The platform can lower up to 40 cm below the water, creating a conditional pool area beside the yacht.\n\nTwo showers on the platform supply fresh water at any time and prevent queues. For evening time by the water, the platform includes a grill area: a practical solution for grill gatherings on the platform beach area and for serving grilled dishes to the cockpit table.\n\nTogether with underwater lighting, step lighting, and other lighting elements, this gives comfort, independence from shore infrastructure, and a calm sense of rest by the water. For active time on board there are 2 SUP boards, a SeaBob, a tender with a towable inflatable, masks, and fins."
    },
    ru: {
      label: "Кормовая платформа",
      title: "Кормовой выход к воде",
      copy: "Кормовая погружная платформа работает как пляжная зона у воды.",
      detail: "В Sunseeker 76 кормовая погружная купальная платформа устроена оригинально и удобно. Ее можно использовать как пляжную зону с шезлонгами и столиком, регулируя высоту платформы относительно воды для комфортного входа в воду и выхода из нее. Для спуска в воду предусмотрена лестница.\n\nЭти опции позволяют маленьким детям, людям в возрасте и людям с ограниченной мобильностью комфортно наслаждаться морем и пляжной зоной. Платформа может опускаться до 40 см под воду, создавая у борта зону условного бассейна.\n\nДва душа на платформе обеспечивают пресной водой в любой момент и не создают очередей. Для вечернего отдыха у воды на платформе организована гриль-зона: удобное решение для гриль-вечеринок на пляжной зоне платформы и подачи блюд с гриля к столу в кокпит.\n\nВместе с подсветкой подводной части, ступеней и других элементов это дает уют, независимость от береговой инфраструктуры и спокойное ощущение отдыха у воды. Для активного отдыха на яхте есть 2 SUP, SeaBob, тендер с надувной плюшкой, маски для ныряния и ласты."
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
      copy: "Williams 420 support for transfers, shore runs, and towable water-toy use.",
      detail: "This section stays practical: movement between yacht and shore, towable inflatable use, and planning around the aft platform."
    },
    ru: {
      label: "Тендер",
      title: "Тендер и водные активности",
      copy: "Williams 420 для трансфера, выхода на берег и буксируемых водных активностей.",
      detail: "Раздел остается практичным: движение между яхтой и берегом, надувная плюшка и сценарии вокруг кормовой платформы."
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
      copy: "Main-deck living space between cockpit, dining, seating, and galley.",
      detail: "The useful point is flow: the saloon stays connected to the aft deck, so interior time does not feel cut off from the water."
    },
    ru: {
      label: "Салон",
      title: "Главный салон",
      copy: "Главное пространство палубы между кокпитом, столом, посадкой и камбузом.",
      detail: "Главное здесь - поток движения: салон связан с кормовой палубой, поэтому интерьер не отрывается от воды."
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
      copy: "The principal lower-deck cabin, with berth, storage, seating, and ensuite.",
      detail: "A plain private cabin with room to settle in. The strongest information is the complete sleeping, storage, and bathroom arrangement."
    },
    ru: {
      label: "Мастер-каюта",
      title: "Главная каюта",
      copy: "Главная каюта нижней палубы: кровать, хранение, посадка и своя ванная.",
      detail: "Спокойная приватная каюта, где можно нормально разместиться. Важны не эпитеты, а полный набор сна, хранения и ванной."
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
      copy: "A forward guest cabin with double berth, storage, light, and ensuite.",
      detail: "Placed in the bow section of the lower deck, it works as a proper guest cabin rather than spare sleeping space."
    },
    ru: {
      label: "Носовая VIP",
      title: "Носовая VIP-каюта",
      copy: "Носовая гостевая каюта с французской кроватью, хранением, светом и ванной.",
      detail: "Она находится в носовой части нижней палубы и работает как полноценная каюта, а не запасное спальное место."
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
      copy: "A starboard guest cabin with double berth, storage, and ensuite access.",
      detail: "It keeps the lower-deck accommodation balanced and gives another proper cabin without needing to overstate the space."
    },
    ru: {
      label: "Правая гостевая",
      title: "Правая гостевая каюта",
      copy: "Правая гостевая каюта с французской кроватью, хранением и ванной.",
      detail: "Она держит баланс размещения на нижней палубе и остается нормальной гостевой каютой без лишних обещаний."
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
      copy: "A flexible port cabin for children, family, or mixed guest use.",
      detail: "It can be arranged as three single berths or as a double berth with an upper pullman. The cabin has its own bathroom."
    },
    ru: {
      label: "Левая гостевая",
      title: "Левая гостевая / детская",
      copy: "Гибкая левая каюта для детей, семьи или смешанного размещения.",
      detail: "Ее можно использовать как три односпальных места или как французскую кровать с верхней откидной полкой. Ванная - своя."
    }
  }
];

function horizontalGalleryItems() {
  return zones
    .filter((zone) => zone.id !== EXPERIMENTAL_GALLERY_ZONE_ID && zone.id !== "tender")
    .flatMap((zone) => zone.media.map((mediaItem) => ({
      ...mediaItem,
      galleryLabel: {
        en: zone.en.label,
        ru: zone.ru.label
      }
    })));
}

const zoneIcons = {
  overview: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16M12 4v16M6.5 6.5l11 11M17.5 6.5l-11 11" stroke-width="1.45"/></svg>',
  exterior: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 15c4.5-4.2 11.2-4.5 18-2.2M5 15.4h13.5l2.5-2.8M7 12.2l3.4-3.1h5.2l3.2 3.1M6 17.7h14" stroke-width="1.5"/></svg>',
  flybridge: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" stroke-width="1.35"/></svg>',
  foredeck: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3c4 4 6 8 6 12a6 6 0 0 1-12 0c0-4 2-8 6-12zM8 14h8M9.5 17h5" stroke-width="1.5"/></svg>',
  cockpit: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 11h14v8H5zM7 5h10v6H7zM4 19h16" stroke-width="1.5"/></svg>',
  aft_swim_platform: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 4v11M17 4v11M7 8h10M7 12h10M4 18c2 2 4 2 6 0s4-2 6 0 4 2 6 0" stroke-width="1.5"/></svg>',
  tender: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 14h16l-2.5 4H7L4 14zM7 14l2-4h6l2 4M9 10V6h6v4" stroke-width="1.5"/></svg>',
  saloon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 13V9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M4 13h16v6H4zM7 19v2M17 19v2" stroke-width="1.5"/></svg>',
  master_cabin: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 10h16v8M4 18V7M20 18v-5a3 3 0 0 0-3-3H4M7 10V8h5v2" stroke-width="1.5"/></svg>',
  forward_vip: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 18 6 8l5 5 5-8 2 8 2-5v10H4zM4 21h16" stroke-width="1.45"/></svg>',
  starboard_guest: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM16.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 21a5 5 0 0 1 10 0M12.5 21a4.5 4.5 0 0 1 8.5 0" stroke-width="1.45"/></svg>',
  port_guest: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM16.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 21a5 5 0 0 1 10 0M12.5 21a4.5 4.5 0 0 1 8.5 0" stroke-width="1.45"/></svg>'
};

const copy = {
  en: {
    eyebrow: "Private yacht presentation",
    headline: "Claudia Z",
    lead: "Sunseeker 76 | Private Motor Yacht. A strong choice for family time and an active life on the water: speed, comfort, and technology.",
    menu: "Sections",
    details: "Zone details",
    yachtDetails: "Yacht details",
    zoneDetails: "Zone details",
    theme: "Theme",
    switchToDark: "Switch to dark theme",
    switchToLight: "Switch to light theme",
    presentationAria: "Private yacht presentation",
    controlsAria: "Presentation controls",
    keyFactsAria: "Key facts",
    mediaControlsAria: "Media controls",
    zonesAria: "Yacht zones",
    detailsDialogAria: "Zone details",
    yachtDetailsDialogAria: "Yacht details",
    zoneDetailsDialogAria: "Zone details",
    close: "Close",
    mediaViewerAria: "Media viewer",
    detailsTitle: "Zone details",
    yachtDetailsTitle: "Specifications",
    zoneDetailsTitle: "Zone details",
    model: "Model",
    year: "Year",
    length: "Length",
    beam: "Beam",
    draft: "Draft",
    displacement: "Displacement",
    accommodation: "Accommodation",
    heads: "Heads",
    engines: "Engines",
    propulsion: "Propulsion",
    fuel: "Fuel",
    freshWater: "Fresh water",
    blackWater: "Black water",
    range: "Range",
    speed: "Speed",
    generators: "Generators",
    watermaker: "Watermaker",
    laundry: "Laundry",
    modelValue: "Sunseeker 76 Yacht",
    lengthValue: "23.60 m / 77'5\" (24 m public)",
    accommodationValue: "4 cabins",
    headsValue: "4 en-suites / day head",
    propulsionValue: "Shafts",
    speedValue: "Up to 32 kn",
    laundryValue: "Washer-dryer",
    factLength: "24 m",
    factCabins: "4 cabins",
    factSpeed: "32 kn",
    previousMedia: "Previous image",
    nextMedia: "Next image",
    openMedia: "Open image",
    swipeHint: "Swipe sideways",
    horizontalGallery: "Section: horizontal gallery",
    horizontalGalleryAria: "Open horizontal gallery",
    platformGalleryAria: "Platform gallery"
  },
  ru: {
    eyebrow: "Закрытая презентация яхты",
    headline: "Claudia Z",
    lead: "Sunseeker 76 | частная моторная яхта. Отличный выбор для семейного отдыха и активного образа жизни: скорость, комфорт и технологичность.",
    menu: "Разделы",
    details: "Детали зоны",
    yachtDetails: "Детали яхты",
    zoneDetails: "Детали зоны",
    theme: "Тема",
    switchToDark: "Переключить на темную тему",
    switchToLight: "Переключить на светлую тему",
    presentationAria: "Закрытая презентация яхты",
    controlsAria: "Управление презентацией",
    keyFactsAria: "Ключевые данные",
    mediaControlsAria: "Управление фотографиями",
    zonesAria: "Зоны яхты",
    detailsDialogAria: "Детали зоны",
    yachtDetailsDialogAria: "Детали яхты",
    zoneDetailsDialogAria: "Детали зоны",
    close: "Закрыть",
    mediaViewerAria: "Просмотр фотографий",
    detailsTitle: "Детали зоны",
    yachtDetailsTitle: "Характеристики",
    zoneDetailsTitle: "Детали зоны",
    model: "Модель",
    year: "Год",
    length: "Длина",
    beam: "Ширина",
    draft: "Осадка",
    displacement: "Водоизмещение",
    accommodation: "Размещение",
    heads: "Санузлы",
    engines: "Двигатели",
    propulsion: "Привод",
    fuel: "Топливо",
    freshWater: "Пресная вода",
    blackWater: "Черная вода",
    range: "Запас хода",
    speed: "Скорость",
    generators: "Генераторы",
    watermaker: "Опреснитель",
    laundry: "Прачечная",
    modelValue: "Sunseeker 76 Yacht",
    lengthValue: "23,60 м / 77'5\" (публично: 24 м)",
    accommodationValue: "4 каюты",
    headsValue: "4 санузла / дневной санузел",
    propulsionValue: "Валы",
    speedValue: "До 32 уз.",
    laundryValue: "Стиральная машина с сушкой",
    factLength: "24 м",
    factCabins: "4 каюты",
    factSpeed: "32 уз.",
    previousMedia: "Предыдущее изображение",
    nextMedia: "Следующее изображение",
    openMedia: "Открыть изображение",
    swipeHint: "Свайп вбок",
    horizontalGallery: "Раздел: горизонтальная галерея",
    horizontalGalleryAria: "Открыть горизонтальную галерею",
    platformGalleryAria: "Галерея платформы"
  }
};

const state = {
  lang: detectLanguage(),
  theme: detectTheme(),
  zoneId: "overview",
  mediaIndex: 0,
  mediaDirection: 0,
  mediaRequestId: 0,
  lightboxRequestId: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0,
  gallery: {
    isOpen: false,
    media: null,
    items: [],
    index: 0,
    syncStage: true,
    requestId: 0,
    isTransitioning: false,
    scale: 1,
    translateX: 0,
    translateY: 0,
    startScale: 1,
    startTranslateX: 0,
    startTranslateY: 0,
    startDistance: 0,
    startMidX: 0,
    startMidY: 0,
    dragStartX: 0,
    dragStartY: 0,
    isPanning: false
  }
};

document.documentElement.lang = state.lang;

const mediaElement = document.querySelector("#zoneMedia");
const mediaGuard = document.querySelector("#mediaGuard");
const rail = document.querySelector("#zoneRail");
const detailsSheet = document.querySelector("#detailsSheet");
const detailsButton = document.querySelector("#detailsButton");
const themeButton = document.querySelector("#themeButton");
const stageContent = document.querySelector(".stage__content");
const stageLead = document.querySelector("#stageLead");
const stageZoneDetail = document.querySelector("#stageZoneDetail");
const zoneTitle = document.querySelector("#zoneTitle");
const zoneCopy = document.querySelector("#zoneCopy");
const zoneDetail = document.querySelector("#zoneDetail");
const zoneMenuButton = document.querySelector("#zoneMenuButton");
const currentZoneLabel = document.querySelector("#currentZoneLabel");
const mediaCounter = document.querySelector("#mediaCounter");
const previousMediaButton = document.querySelector("#prevMediaButton");
const nextMediaButton = document.querySelector("#nextMediaButton");
const openMediaButton = document.querySelector("#openMediaButton");
const horizontalGalleryButton = document.querySelector("#horizontalGalleryButton");
const mediaLightbox = document.querySelector("#mediaLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const galleryMode = document.querySelector("#galleryMode");
const galleryViewport = document.querySelector("#galleryViewport");
const galleryImage = document.querySelector("#galleryImage");
const galleryCaption = document.querySelector("#galleryCaption");
const stage = document.querySelector(".stage");
const detailsButtonLabel = detailsButton.querySelector("[data-i18n]");
const detailsTitle = detailsSheet.querySelector("[data-i18n='detailsTitle']");

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

function isExperimentalGalleryZone() {
  return currentZone().id === EXPERIMENTAL_GALLERY_ZONE_ID;
}

function stageSourceFor(mediaItem) {
  const isMobile = window.matchMedia("(max-width: 759px)").matches;
  if (currentZone().id === "overview") {
    return isMobile && mediaItem.mobileSrc ? mediaItem.mobileSrc : mediaItem.src;
  }
  if (isExperimentalGalleryZone()) {
    return isMobile && mediaItem.mobileSrc ? mediaItem.mobileSrc : mediaItem.src;
  }
  return mediaItem.src;
}

function gallerySourceFor(mediaItem) {
  return mediaItem.gallerySrc || mediaItem.fullSrc || stageSourceFor(mediaItem);
}

function setTheme(theme) {
  state.theme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = state.theme;
  window.localStorage.setItem("claudia-z-theme", state.theme);
  themeButton.setAttribute("aria-pressed", state.theme === "light" ? "true" : "false");
  themeButton.setAttribute("aria-label", state.theme === "light" ? copy[state.lang].switchToDark : copy[state.lang].switchToLight);
}

function setZone(zoneId) {
  if (zoneId === state.zoneId) {
    closeZoneMenu();
    return;
  }
  closeGalleryMode();
  state.zoneId = zoneId;
  state.mediaIndex = 0;
  state.mediaDirection = 0;
  closeZoneMenu();
  render();
}

function closeZoneMenu() {
  document.body.classList.remove("is-zone-menu-open");
  zoneMenuButton.setAttribute("aria-expanded", "false");
}

function setAdjacentZone(direction) {
  const currentIndex = zones.findIndex((zone) => zone.id === state.zoneId);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const nextIndex = (safeIndex + direction + zones.length) % zones.length;
  setZone(zones[nextIndex].id);
}

function setMediaIndex(index, direction = 0) {
  const zone = currentZone();
  if (zone.media.length < 2) {
    return;
  }
  state.mediaDirection = direction;
  state.mediaIndex = (index + zone.media.length) % zone.media.length;
  document.body.classList.remove("is-media-surfacing");
  window.requestAnimationFrame(() => {
    document.body.classList.add("is-media-surfacing");
  });
  renderZone();
}

function shiftStage(direction) {
  if (currentZone().media.length > 1) {
    setMediaIndex(state.mediaIndex + direction, direction);
    return;
  }
  setAdjacentZone(direction);
}

function renderRail() {
  rail.innerHTML = "";
  rail.append(horizontalGalleryButton);
  zones.forEach((zone) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `zone-button${zone.id === state.zoneId ? " is-active" : ""}`;
    const icon = document.createElement("span");
    icon.className = "zone-button__icon";
    icon.innerHTML = zoneIcons[zone.id] || zoneIcons.overview;
    const label = document.createElement("span");
    label.className = "zone-button__label";
    label.textContent = zone[state.lang].label;
    button.append(icon, label);
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
  zoneMenuButton.setAttribute("aria-label", copy[state.lang].menu);
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

function transitionStageMedia(nextSrc, focus) {
  const direction = state.mediaDirection;
  const canAnimate = direction !== 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (canAnimate && mediaElement.getAttribute("src")) {
    const ghost = mediaElement.cloneNode(false);
    ghost.removeAttribute("id");
    ghost.alt = "";
    ghost.className = `stage__media stage__media-ghost stage__media-ghost--${direction > 0 ? "next" : "previous"}`;
    ghost.style.objectPosition = mediaElement.style.objectPosition || focus;
    stage.append(ghost);
    window.requestAnimationFrame(() => {
      ghost.classList.add("is-leaving");
    });
    window.setTimeout(() => {
      ghost.remove();
    }, 520);

    const enterClass = direction > 0 ? "stage__media--enter-from-next" : "stage__media--enter-from-previous";
    mediaElement.classList.add(enterClass);
    mediaElement.src = nextSrc;
    mediaElement.style.objectPosition = focus;
    mediaElement.getBoundingClientRect();
    window.requestAnimationFrame(() => {
      mediaElement.classList.remove(enterClass);
    });
    return;
  }

  mediaElement.src = nextSrc;
  mediaElement.style.objectPosition = focus;
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
    transitionStageMedia(stageSrc, selectedMedia.focus);
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
  const isOverview = zone.id === "overview";
  const isPlatform = isExperimentalGalleryZone();
  if (isOverview) {
    toggleLightbox(false);
  }
  stage.classList.toggle("stage--welcome", isOverview);
  stage.classList.toggle("stage--platform", isPlatform);
  stageContent.classList.toggle("stage__content--overview", isOverview);
  detailsSheet.classList.toggle("sheet--overview", isOverview);
  detailsSheet.classList.toggle("sheet--platform", isPlatform);
  horizontalGalleryButton.hidden = !isPlatform;
  const detailMode = isOverview ? "yacht" : "zone";
  detailsButtonLabel.textContent = copy[state.lang][`${detailMode}Details`];
  detailsTitle.textContent = copy[state.lang][`${detailMode}DetailsTitle`];
  detailsSheet.setAttribute("aria-label", copy[state.lang][`${detailMode}DetailsDialogAria`]);
  updateStageMedia(selectedMedia, zone[state.lang].title);
  mediaCounter.textContent = `${state.mediaIndex + 1} / ${zone.media.length}`;
  stageLead.textContent = isOverview ? copy[state.lang].lead : zone[state.lang].copy;
  stageZoneDetail.textContent = "";
  stageZoneDetail.hidden = true;
  currentZoneLabel.textContent = zone[state.lang].label;
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
    detailsButton.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  }
}

function toggleLightbox(force) {
  const shouldOpen = typeof force === "boolean" ? force : !mediaLightbox.classList.contains("is-open");
  if (shouldOpen && currentZone().id === "overview") {
    return;
  }
  state.lightboxRequestId += 1;
  if (shouldOpen) {
    const nextRequestId = state.lightboxRequestId;
    const selectedMedia = currentMedia();
    const previewSrc = stageSourceFor(selectedMedia);
    const fullSrc = selectedMedia.fullSrc || previewSrc;
    lightboxImage.src = previewSrc;
    lightboxImage.alt = currentZone()[state.lang].title;
    if (fullSrc !== previewSrc) {
      const image = new Image();
      image.onload = () => {
        if (state.lightboxRequestId === nextRequestId && mediaLightbox.classList.contains("is-open")) {
          lightboxImage.src = fullSrc;
        }
      };
      image.src = fullSrc;
    }
  }
  mediaLightbox.classList.toggle("is-open", shouldOpen);
  mediaLightbox.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
  document.body.classList.toggle("is-lightbox-open", shouldOpen);
}

function resetGalleryTransform() {
  state.gallery.scale = 1;
  state.gallery.translateX = 0;
  state.gallery.translateY = 0;
  galleryImage.style.transition = "";
  galleryImage.style.visibility = "visible";
  galleryImage.style.opacity = "1";
  galleryImage.style.transform = "translate3d(0px, 0px, 0) scale(1)";
}

function applyGalleryTransform() {
  galleryImage.style.transition = "none";
  galleryImage.style.transform = `translate3d(${state.gallery.translateX}px, ${state.gallery.translateY}px, 0) scale(${state.gallery.scale})`;
}

function settleGalleryTransform() {
  state.gallery.scale = 1;
  state.gallery.translateX = 0;
  state.gallery.translateY = 0;
  galleryImage.style.transition = "";
  galleryImage.style.visibility = "visible";
  galleryImage.style.opacity = "1";
  galleryImage.style.transform = "translate3d(0px, 0px, 0) scale(1)";
}

function cleanupGalleryTransitionLayers() {
  galleryViewport.querySelectorAll(".gallery-mode__image-transition").forEach((node) => {
    node.remove();
  });
}

function setGalleryCaption(mediaItem) {
  const captionText = mediaItem.galleryLabel ? mediaItem.galleryLabel[state.lang] : "";
  galleryCaption.textContent = captionText;
  galleryCaption.hidden = !captionText;
}

function preloadGallerySource(src, onReady) {
  const image = new Image();
  image.onload = onReady;
  image.onerror = onReady;
  image.src = src;
}

function preloadAdjacentGalleryMedia() {
  const items = state.gallery.items.length ? state.gallery.items : currentZone().media;
  if (!state.gallery.isOpen || items.length < 2) {
    return;
  }
  const next = items[(state.gallery.index + 1) % items.length];
  const previous = items[(state.gallery.index - 1 + items.length) % items.length];
  [next, previous].forEach((item) => {
    const image = new Image();
    image.src = gallerySourceFor(item);
  });
}

function renderGalleryMode(direction = 0) {
  const mediaItem = state.gallery.media || currentMedia();
  const nextSrc = gallerySourceFor(mediaItem);
  const nextAlt = currentZone()[state.lang].title;
  const nextRequestId = state.gallery.requestId + 1;
  state.gallery.requestId = nextRequestId;
  const canAnimate = direction !== 0 && galleryImage.getAttribute("src") && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (canAnimate) {
    const transitionMs = 260;
    preloadGallerySource(nextSrc, () => {
      if (state.gallery.requestId !== nextRequestId || !state.gallery.isOpen) {
        return;
      }
      state.gallery.isTransitioning = true;
      cleanupGalleryTransitionLayers();
      const outgoing = galleryImage.cloneNode(false);
      outgoing.removeAttribute("id");
      outgoing.alt = "";
      outgoing.className = "gallery-mode__image gallery-mode__image-ghost gallery-mode__image-transition";
      outgoing.style.transition = "";
      outgoing.style.opacity = "1";
      outgoing.style.transform = "translate3d(0px, 0px, 0) scale(1)";

      const incoming = galleryImage.cloneNode(false);
      incoming.removeAttribute("id");
      incoming.className = "gallery-mode__image gallery-mode__image-ghost gallery-mode__image-transition";
      incoming.src = nextSrc;
      incoming.alt = nextAlt;
      incoming.style.transition = "none";
      incoming.style.opacity = "0";
      incoming.style.transform = "translate3d(0px, 0px, 0) scale(1)";
      galleryViewport.append(outgoing, incoming);

      galleryImage.style.transition = "none";
      galleryImage.style.visibility = "hidden";
      galleryImage.style.opacity = "0";
      galleryImage.style.transform = "translate3d(0px, 0px, 0) scale(1)";
      setGalleryCaption(mediaItem);
      incoming.getBoundingClientRect();

      window.requestAnimationFrame(() => {
        outgoing.style.opacity = "0";
        incoming.style.transition = "";
        incoming.style.opacity = "1";
      });
      window.setTimeout(() => {
        if (state.gallery.requestId !== nextRequestId || !state.gallery.isOpen) {
          outgoing.remove();
          incoming.remove();
          state.gallery.isTransitioning = false;
          return;
        }
        galleryImage.style.transition = "none";
        galleryImage.src = nextSrc;
        galleryImage.alt = nextAlt;
        galleryImage.style.transform = "translate3d(0px, 0px, 0) scale(1)";
        galleryImage.style.opacity = "1";
        galleryImage.style.visibility = "visible";
        galleryImage.getBoundingClientRect();
        window.requestAnimationFrame(() => {
          cleanupGalleryTransitionLayers();
          state.gallery.isTransitioning = false;
          galleryImage.style.transition = "";
        });
      }, transitionMs + 30);
    });
    return;
  }

  cleanupGalleryTransitionLayers();
  galleryImage.style.transition = "";
  galleryImage.style.visibility = "visible";
  galleryImage.style.opacity = "1";
  galleryImage.style.transform = "translate3d(0px, 0px, 0) scale(1)";
  galleryImage.src = nextSrc;
  galleryImage.alt = nextAlt;
  setGalleryCaption(mediaItem);
}

function openGalleryMode(mediaItem = currentMedia(), items = currentZone().media, index = state.mediaIndex, syncStage = true) {
  if (!isExperimentalGalleryZone()) {
    toggleLightbox(true);
    return;
  }
  state.gallery.media = mediaItem;
  state.gallery.items = items;
  state.gallery.index = index;
  state.gallery.syncStage = syncStage;
  state.gallery.isOpen = true;
  resetGalleryTransform();
  renderGalleryMode();
  preloadAdjacentGalleryMedia();
  galleryMode.classList.add("is-open");
  galleryMode.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-gallery-mode-open");
  closeZoneMenu();
}

function closeGalleryMode() {
  state.gallery.isOpen = false;
  state.gallery.media = null;
  state.gallery.items = [];
  state.gallery.index = 0;
  state.gallery.syncStage = true;
  state.gallery.isPanning = false;
  state.gallery.requestId += 1;
  state.gallery.isTransitioning = false;
  cleanupGalleryTransitionLayers();
  galleryMode.classList.remove("is-open");
  galleryMode.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-gallery-mode-open");
  galleryCaption.textContent = "";
  galleryCaption.hidden = true;
  resetGalleryTransform();
}

function shiftGallery(direction) {
  if (state.gallery.isTransitioning) {
    return;
  }
  const items = state.gallery.items.length ? state.gallery.items : currentZone().media;
  if (items.length > 1) {
    state.gallery.index = (state.gallery.index + direction + items.length) % items.length;
    state.gallery.media = items[state.gallery.index];
    if (state.gallery.syncStage) {
      state.mediaDirection = direction;
      state.mediaIndex = state.gallery.index;
      renderZone();
    }
    state.gallery.scale = 1;
    state.gallery.translateX = 0;
    state.gallery.translateY = 0;
    renderGalleryMode(direction);
    preloadAdjacentGalleryMedia();
  }
}

function touchDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

function touchMidpoint(touches) {
  return {
    x: (touches[0].clientX + touches[1].clientX) / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2
  };
}

function clampGalleryPan() {
  if (state.gallery.scale <= 1) {
    state.gallery.translateX = 0;
    state.gallery.translateY = 0;
    return;
  }
  const maxX = galleryViewport.clientWidth * (state.gallery.scale - 1) * 0.5;
  const maxY = galleryViewport.clientHeight * (state.gallery.scale - 1) * 0.5;
  state.gallery.translateX = Math.max(-maxX, Math.min(maxX, state.gallery.translateX));
  state.gallery.translateY = Math.max(-maxY, Math.min(maxY, state.gallery.translateY));
}

function beginGalleryGesture(event) {
  if (!state.gallery.isOpen || state.gallery.isTransitioning) {
    return;
  }
  if (event.touches.length === 2) {
    const midpoint = touchMidpoint(event.touches);
    state.gallery.startDistance = touchDistance(event.touches);
    state.gallery.startScale = state.gallery.scale;
    state.gallery.startTranslateX = state.gallery.translateX;
    state.gallery.startTranslateY = state.gallery.translateY;
    state.gallery.startMidX = midpoint.x;
    state.gallery.startMidY = midpoint.y;
    state.gallery.isPanning = false;
    event.preventDefault();
    return;
  }
  const touch = event.touches[0];
  if (!touch) {
    return;
  }
  state.gallery.dragStartX = touch.clientX;
  state.gallery.dragStartY = touch.clientY;
  state.gallery.startTranslateX = state.gallery.translateX;
  state.gallery.startTranslateY = state.gallery.translateY;
  state.gallery.isPanning = true;
}

function moveGalleryGesture(event) {
  if (!state.gallery.isOpen || state.gallery.isTransitioning) {
    return;
  }
  if (event.touches.length === 2) {
    const midpoint = touchMidpoint(event.touches);
    const nextScale = state.gallery.startScale * (touchDistance(event.touches) / Math.max(1, state.gallery.startDistance));
    state.gallery.scale = Math.max(1, Math.min(4, nextScale));
    state.gallery.translateX = state.gallery.startTranslateX + (midpoint.x - state.gallery.startMidX);
    state.gallery.translateY = state.gallery.startTranslateY + (midpoint.y - state.gallery.startMidY);
    clampGalleryPan();
    applyGalleryTransform();
    event.preventDefault();
    return;
  }
  const touch = event.touches[0];
  if (!touch || !state.gallery.isPanning) {
    return;
  }
  const deltaX = touch.clientX - state.gallery.dragStartX;
  const deltaY = touch.clientY - state.gallery.dragStartY;
  if (state.gallery.scale > 1) {
    state.gallery.translateX = state.gallery.startTranslateX + deltaX;
    state.gallery.translateY = state.gallery.startTranslateY + deltaY;
    clampGalleryPan();
    applyGalleryTransform();
    event.preventDefault();
    return;
  }
  if (Math.abs(deltaX) > Math.abs(deltaY) * 1.05) {
    event.preventDefault();
  }
}

function endGalleryGesture(event) {
  if (!state.gallery.isOpen || state.gallery.isTransitioning || event.touches.length > 0) {
    return;
  }
  const touch = event.changedTouches[0];
  if (!touch) {
    state.gallery.isPanning = false;
    return;
  }
  const deltaX = touch.clientX - state.gallery.dragStartX;
  const deltaY = touch.clientY - state.gallery.dragStartY;
  state.gallery.isPanning = false;
  if (state.gallery.scale <= 1 && Math.abs(deltaX) >= 34 && Math.abs(deltaX) >= Math.abs(deltaY) * 1.1) {
    shiftGallery(deltaX < 0 ? 1 : -1);
    return;
  }
  if (state.gallery.scale <= 1) {
    settleGalleryTransform();
  }
}

themeButton.addEventListener("click", () => {
  setTheme(state.theme === "dark" ? "light" : "dark");
});

zoneMenuButton.addEventListener("click", () => {
  const shouldOpen = !document.body.classList.contains("is-zone-menu-open");
  document.body.classList.toggle("is-zone-menu-open", shouldOpen);
  zoneMenuButton.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
});

previousMediaButton.addEventListener("click", () => {
  shiftStage(-1);
});

nextMediaButton.addEventListener("click", () => {
  shiftStage(1);
});

openMediaButton.addEventListener("click", () => {
  if (isExperimentalGalleryZone()) {
    openGalleryMode();
    return;
  }
  toggleLightbox(true);
});

horizontalGalleryButton.addEventListener("click", () => {
  const items = horizontalGalleryItems();
  if (items.length) {
    openGalleryMode(items[0], items, 0, false);
  }
});

function canHandleStageGesture(target) {
  return !target.closest("button, .sheet, .zone-rail, .topbar, .command");
}

function beginStageGesture(clientX, clientY, target) {
  if (!canHandleStageGesture(target)) {
    state.isDragging = false;
    return;
  }
  state.dragStartX = clientX;
  state.dragStartY = clientY;
  state.isDragging = true;
  closeZoneMenu();
}

function endStageGesture(clientX, clientY, target) {
  if (!state.isDragging || !canHandleStageGesture(target)) {
    state.isDragging = false;
    return;
  }
  state.isDragging = false;
  const deltaX = clientX - state.dragStartX;
  const deltaY = clientY - state.dragStartY;
  const isSwipe = Math.abs(deltaX) >= 28 && Math.abs(deltaX) >= Math.abs(deltaY) * 1.12;
  if (!isSwipe) {
    const isMobile = window.matchMedia("(max-width: 759px)").matches;
    if (isMobile && Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8 && !target.closest(".stage__content")) {
      if (isExperimentalGalleryZone()) {
        openGalleryMode();
        return;
      }
      toggleLightbox(true);
    }
    return;
  }
  shiftStage(deltaX < 0 ? 1 : -1);
}

stage.addEventListener("pointerdown", (event) => {
  beginStageGesture(event.clientX, event.clientY, event.target);
});

stage.addEventListener("pointerup", (event) => {
  endStageGesture(event.clientX, event.clientY, event.target);
});

stage.addEventListener("pointercancel", () => {
  state.isDragging = false;
});

stage.addEventListener("touchstart", (event) => {
  const touch = event.changedTouches[0];
  if (!touch) {
    return;
  }
  beginStageGesture(touch.clientX, touch.clientY, event.target);
}, { passive: true });

stage.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];
  if (!touch) {
    return;
  }
  endStageGesture(touch.clientX, touch.clientY, event.target);
}, { passive: true });

stage.addEventListener("touchcancel", () => {
  state.isDragging = false;
});

detailsButton.addEventListener("click", () => {
  toggleSheet(detailsSheet);
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.close === "gallery") {
      closeGalleryMode();
      return;
    }
    if (button.dataset.close === "lightbox") {
      toggleLightbox(false);
      return;
    }
    toggleSheet(detailsSheet, false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeGalleryMode();
    closeZoneMenu();
    toggleSheet(detailsSheet, false);
    toggleLightbox(false);
  }
  if (event.key === "ArrowLeft") {
    if (state.gallery.isOpen) {
      shiftGallery(-1);
      return;
    }
    shiftStage(-1);
  }
  if (event.key === "ArrowRight") {
    if (state.gallery.isOpen) {
      shiftGallery(1);
      return;
    }
    shiftStage(1);
  }
});

document.addEventListener("contextmenu", (event) => {
  if (event.target.closest(".stage, .lightbox, .gallery-mode")) {
    event.preventDefault();
  }
});

document.addEventListener("dragstart", (event) => {
  if (event.target === mediaElement || event.target === mediaGuard || event.target === galleryImage) {
    event.preventDefault();
  }
});

function preventFullscreenOverscroll(event) {
  if (document.body.classList.contains("is-gallery-mode-open") || document.body.classList.contains("is-lightbox-open")) {
    event.preventDefault();
  }
}

galleryMode.addEventListener("touchmove", preventFullscreenOverscroll, { passive: false });
mediaLightbox.addEventListener("touchmove", preventFullscreenOverscroll, { passive: false });
galleryViewport.addEventListener("touchstart", beginGalleryGesture, { passive: false });
galleryViewport.addEventListener("touchmove", moveGalleryGesture, { passive: false });
galleryViewport.addEventListener("touchend", endGalleryGesture, { passive: false });
galleryViewport.addEventListener("touchcancel", () => {
  state.gallery.isPanning = false;
}, { passive: false });

setTheme(state.theme);
render();
