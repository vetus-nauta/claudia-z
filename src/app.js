function localMedia(folder, stageFile, fullFile, mobileFile, focus = "50% 50%") {
  return {
    src: `assets/media/${folder}/${stageFile}`,
    fullSrc: `assets/media/${folder}/${fullFile}`,
    mobileSrc: `assets/media/${folder}/${mobileFile}`,
    focus
  };
}

function versionedAsset(src, version = "") {
  return version ? `${src}?v=${version}` : src;
}

function localGalleryMedia(folder, baseFile, focus = "50% 50%", version = "") {
  const basePath = `assets/media/${folder}/${baseFile}`;

  return {
    src: versionedAsset(`${basePath}-stage.webp`, version),
    fullSrc: versionedAsset(`${basePath}-full.webp`, version),
    mobileSrc: versionedAsset(`${basePath}-mobile.webp`, version),
    thumbSrc: versionedAsset(`${basePath}-thumb.webp`, version),
    gallerySrc: versionedAsset(`${basePath}-full.webp`, version),
    focus
  };
}

const SECTION_GALLERY_ZONE_IDS = new Set(["exterior", "flybridge", "foredeck", "cockpit", "aft_swim_platform", "tender", "saloon", "master_cabin", "forward_vip", "starboard_guest", "port_guest"]);

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
      localGalleryMedia("exterior", "01-exterior-img-3348", "50% 50%"),
      localGalleryMedia("exterior", "02-exterior-img-3347", "50% 50%"),
      localGalleryMedia("exterior", "03-exterior-img-3349", "50% 50%"),
      localGalleryMedia("exterior", "04-exterior-img-3350", "50% 50%"),
      localGalleryMedia("exterior", "05-exterior-img-3362", "50% 50%"),
      localGalleryMedia("exterior", "06-exterior-img-3363", "50% 50%"),
      localGalleryMedia("exterior", "07-exterior-img-3355", "50% 50%"),
      localGalleryMedia("exterior", "08-exterior-img-3358", "50% 50%"),
      localGalleryMedia("exterior", "09-exterior-ai-b7161a52", "50% 50%", "20260624-crop1"),
      localGalleryMedia("exterior", "10-exterior-ai-6abf4df0", "50% 50%", "20260624-crop1"),
      localGalleryMedia("exterior", "11-exterior-ai-7c94ad0a", "50% 50%", "20260624-crop1"),
      localGalleryMedia("exterior", "12-exterior-ai-0a786325", "50% 50%", "20260624-crop1")
    ],
    horizontalMedia: [
      localMedia("overview", "dji_0266_1-stage.webp", "dji_0266_1-full.webp", "dji_0266_1-mobile.webp", "50% 48%"),
      localMedia("overview", "dji_0261_1-stage.webp", "dji_0261_1-full.webp", "dji_0261_1-mobile.webp", "54% 50%"),
      localMedia("overview", "dji_0269_1-stage.webp", "dji_0269_1-full.webp", "dji_0269_1-mobile.webp", "50% 54%"),
      localMedia("overview", "dji_0258_1-stage.webp", "dji_0258_1-full.webp", "dji_0258_1-mobile.webp", "48% 52%"),
      localMedia("exterior", "dji_0262-stage.webp", "dji_0262-full.webp", "dji_0262-mobile.webp", "50% 48%"),
      localMedia("exterior", "dji_0266-stage.webp", "dji_0266-full.webp", "dji_0266-mobile.webp", "50% 52%"),
      localMedia("exterior", "dji_0247-stage.webp", "dji_0247-full.webp", "dji_0247-mobile.webp", "50% 52%"),
      localMedia("exterior", "dji_0267-stage.webp", "dji_0267-full.webp", "dji_0267-mobile.webp", "52% 50%"),
      localMedia("exterior", "dji_0261-stage.webp", "dji_0261-full.webp", "dji_0261-mobile.webp", "50% 50%"),
      localMedia("exterior", "dji_0270-stage.webp", "dji_0270-full.webp", "dji_0270-mobile.webp", "50% 50%"),
      localMedia("exterior", "h11-exterior-dji-0248-stage.webp", "h11-exterior-dji-0248-full.webp", "h11-exterior-dji-0248-mobile.webp", "50% 50%"),
      localMedia("exterior", "h12-exterior-dji-0250-stage.webp", "h12-exterior-dji-0250-full.webp", "h12-exterior-dji-0250-mobile.webp", "50% 50%"),
      localMedia("exterior", "h13-exterior-dji-0252-stage.webp", "h13-exterior-dji-0252-full.webp", "h13-exterior-dji-0252-mobile.webp", "50% 50%"),
      localMedia("exterior", "h14-exterior-dji-0257-stage.webp", "h14-exterior-dji-0257-full.webp", "h14-exterior-dji-0257-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Exterior",
      title: "Profile and proportions",
      noteTitle: "",
      copy: "A modern Sunseeker profile with clean British lines, a planted stance, and a serious presence on the water.",
      noteCopy: "",
      detail: "The exterior keeps the yacht's sporty character without feeling overdrawn or aggressive. The lines stay balanced, clean, and unmistakably marine.\n\nUnderway, the Sunseeker 76 feels responsive and predictable. That matters on a yacht of this size: the captain gets the sense of control and confidence that makes the boat feel composed rather than heavy."
    },
    ru: {
      label: "Экстерьер",
      title: "Профиль и пропорции",
      noteTitle: "",
      copy: "Профиль, линия корпуса, остекление и объем палуб одним взглядом.",
      noteCopy: "",
      detail: "Sunseeker 76 — современная моторная яхта с узнаваемыми классическими чертами британского дизайна. В её экстерьере хорошо сочетаются спортивный характер, уверенная посадка на воде и серьёзный, солидный внешний вид.\n\nПри этом в облике яхты нет лишней агрессии и перегруженности, которые часто встречаются в последних дизайнерских трендах. Линии остаются чистыми, сбалансированными и по-настоящему морскими.\n\nНа ходу Sunseeker 76 ощущается маневренной, послушной и предсказуемой яхтой. Она уверенно отвечает на управление и даёт капитану то важное чувство контроля, которое особенно ценится на лодке такого класса."
    }
  },
  {
    id: "flybridge",
    media: [
      localGalleryMedia("flybridge", "00-flybridge-gpt-people", "50% 50%"),
      localGalleryMedia("flybridge", "01-flybridge-img-3318", "50% 50%"),
      localGalleryMedia("flybridge", "02-flybridge-img-3319", "50% 50%"),
      localGalleryMedia("flybridge", "03-flybridge-img-3320", "50% 50%"),
      localGalleryMedia("flybridge", "04-flybridge-img-3321", "50% 50%"),
      localGalleryMedia("flybridge", "05-flybridge-img-3413", "50% 50%"),
      localGalleryMedia("flybridge", "06-flybridge-img-3425", "50% 50%"),
      localGalleryMedia("flybridge", "07-flybridge-img-3426", "50% 50%"),
      localGalleryMedia("flybridge", "08-flybridge-img-3427", "50% 50%"),
      localGalleryMedia("flybridge", "09-flybridge-img-3428", "50% 50%"),
      localGalleryMedia("flybridge", "10-flybridge-img-3429", "50% 50%"),
      localGalleryMedia("flybridge", "11-flybridge-img-3430", "50% 50%"),
      localGalleryMedia("flybridge", "12-flybridge-img-3477", "50% 50%"),
      localGalleryMedia("flybridge", "13-flybridge-img-3480", "50% 50%"),
      localGalleryMedia("flybridge", "14-flybridge-img-3481", "50% 50%"),
      localGalleryMedia("flybridge", "15-flybridge-img-3482", "50% 50%"),
      localGalleryMedia("flybridge", "16-flybridge-img-3484", "50% 50%"),
      localGalleryMedia("flybridge", "17-flybridge-img-3485", "50% 50%"),
      localGalleryMedia("flybridge", "18-flybridge-img-3492", "50% 50%"),
      localGalleryMedia("flybridge", "19-flybridge-img-3494", "50% 50%"),
      localGalleryMedia("flybridge", "20-flybridge-img-3498", "50% 50%"),
      localGalleryMedia("flybridge", "21-flybridge-img-3499", "50% 50%"),
      localGalleryMedia("flybridge", "22-flybridge-img-3500", "50% 50%")
    ],
    horizontalMedia: [
      localMedia("flybridge", "130-p1999658-stage.webp", "130-p1999658-full.webp", "130-p1999658-mobile.webp", "50% 48%"),
      localMedia("flybridge", "dji_0276-stage.webp", "dji_0276-full.webp", "dji_0276-mobile.webp", "50% 48%"),
      localMedia("flybridge", "129-p1477663-stage.webp", "129-p1477663-full.webp", "129-p1477663-mobile.webp", "48% 48%"),
      localMedia("flybridge", "132-p1999663-stage.webp", "132-p1999663-full.webp", "132-p1999663-mobile.webp", "45% 50%"),
      localMedia("flybridge", "126-p1477652-stage.webp", "126-p1477652-full.webp", "126-p1477652-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h06-flybridge-img-3486-stage.webp", "h06-flybridge-img-3486-full.webp", "h06-flybridge-img-3486-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h07-flybridge-img-3487-stage.webp", "h07-flybridge-img-3487-full.webp", "h07-flybridge-img-3487-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h08-flybridge-img-3488-stage.webp", "h08-flybridge-img-3488-full.webp", "h08-flybridge-img-3488-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h09-flybridge-img-3489-stage.webp", "h09-flybridge-img-3489-full.webp", "h09-flybridge-img-3489-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h10-flybridge-img-3490-stage.webp", "h10-flybridge-img-3490-full.webp", "h10-flybridge-img-3490-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h11-flybridge-img-3491-stage.webp", "h11-flybridge-img-3491-full.webp", "h11-flybridge-img-3491-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h12-flybridge-img-3495-stage.webp", "h12-flybridge-img-3495-full.webp", "h12-flybridge-img-3495-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h13-flybridge-img-3496-stage.webp", "h13-flybridge-img-3496-full.webp", "h13-flybridge-img-3496-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h14-flybridge-img-3497-stage.webp", "h14-flybridge-img-3497-full.webp", "h14-flybridge-img-3497-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h15-flybridge-img-3501-stage.webp", "h15-flybridge-img-3501-full.webp", "h15-flybridge-img-3501-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h16-flybridge-img-3502-stage.webp", "h16-flybridge-img-3502-full.webp", "h16-flybridge-img-3502-mobile.webp", "50% 50%"),
      localMedia("flybridge", "h17-flybridge-img-3503-stage.webp", "h17-flybridge-img-3503-full.webp", "h17-flybridge-img-3503-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Flybridge",
      title: "Open upper deck",
      copy: "The Sunseeker 76 flybridge is one of the boat's strongest social spaces, with the scale to feel natural all day.",
      detail: "It is open, generous, and well planned, so guests tend to gather here without the space feeling staged.\n\nBy day, it works for sun, conversation, coffee, cocktails, and time above deck with an open sea view. The aft section can function as its own relaxed beach area, with sun loungers and a retractable shade for the hotter hours. It also suits morning routines such as fitness, yoga, stretching, or a private training session.\n\nIn the evening, the flybridge shifts into a quieter lounge. Live music, low-key dinner music, or a small evening at anchor can sit here naturally without turning the yacht into a loud event.\n\nThe bar area is a real advantage. Drinks can be prepared upstairs, and the grill lets food come directly from the flybridge instead of treating it as overflow space. That makes the deck useful for service as well as for conversation.\n\nTaken as a whole, the flybridge feels like its own zone on board: air, view, privacy, bar, music, sun, and an evening atmosphere. The audio system supports the mood without needing to dominate the anchorage or the rest of the yacht."
    },
    ru: {
      label: "Флайбридж",
      title: "Открытая верхняя палуба",
      copy: "Флайбридж Sunseeker 76 — это одно из тех пространств, которому действительно могут позавидовать многие яхты похожего и даже большего размера.",
      detail: "Просторный, открытый и хорошо продуманный, он быстро становится естественной точкой притяжения гостей.\n\nДнём здесь отдыхают на солнце, разговаривают, пьют кофе или коктейли и просто проводят время наверху, с открытым видом на море. Кормовая часть флайбриджа работает как отдельная пляжная зона: здесь предусмотрены лежаки и выдвижная маркиза, создающая комфортную тень в жаркие часы. Это пространство удобно использовать и для утренних активностей — фитнеса, йоги, растяжки или индивидуальных тренировочных программ.\n\nВечером флайбридж меняет характер и превращается в атмосферную лаунж-зону. Здесь легко представить живую музыку, спокойное сопровождение ужина или небольшого гала-вечера на якоре. Приглашённые музыканты органично вписываются в эту морскую романтику, не превращая отдых в шумное мероприятие, а лишь добавляя ему настроение и глубину.\n\nОтдельная сильная сторона флайбриджа — барная зона. Бармен может готовить коктейли для гостей, а повар — работать с грилем и подавать блюда прямо наверху. Это делает флайбридж не просто дополнительной палубой, а самостоятельным пространством для отдыха, общения и сервиса.\n\nПо сути, флайбридж Sunseeker 76 — это своя отдельная экосистема на борту. Здесь есть воздух, обзор, приватность, бар, музыка, солнце и вечерняя атмосфера. Премиальная аудиосистема создаёт качественное музыкальное сопровождение, при этом не мешая соседним яхтам на якоре и гостям, которые отдыхают в других зонах лодки."
    }
  },
  {
    id: "foredeck",
    media: [
      localGalleryMedia("foredeck", "01-foredeck-img-3416", "50% 50%"),
      localGalleryMedia("foredeck", "02-foredeck-img-3417", "50% 50%"),
      localGalleryMedia("foredeck", "03-foredeck-img-3418", "50% 50%"),
      localGalleryMedia("foredeck", "04-foredeck-img-3419", "50% 50%"),
      localGalleryMedia("foredeck", "05-foredeck-img-3420", "50% 50%"),
      localGalleryMedia("foredeck", "06-foredeck-img-3421", "50% 50%"),
      localGalleryMedia("foredeck", "07-foredeck-img-3422", "50% 50%"),
      localGalleryMedia("foredeck", "08-foredeck-img-3423", "50% 50%"),
      localGalleryMedia("foredeck", "09-foredeck-img-3424", "50% 50%"),
      localGalleryMedia("foredeck", "10-foredeck-img-3414", "50% 50%"),
      localGalleryMedia("foredeck", "11-foredeck-img-3413", "50% 50%")
    ],
    horizontalMedia: [
      localMedia("foredeck", "142-p1477659-stage.webp", "142-p1477659-full.webp", "142-p1477659-mobile.webp", "50% 49%"),
      localMedia("foredeck", "146-p1999711-stage.webp", "146-p1999711-full.webp", "146-p1999711-mobile.webp", "49% 50%"),
      localMedia("foredeck", "149-p1999723-stage.webp", "149-p1999723-full.webp", "149-p1999723-mobile.webp", "50% 49%"),
      localMedia("foredeck", "156-p1999729-stage.webp", "156-p1999729-full.webp", "156-p1999729-mobile.webp", "48% 50%"),
      localMedia("foredeck", "160-p1477679-stage.webp", "160-p1477679-full.webp", "160-p1477679-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Foredeck",
      title: "Foredeck",
      copy: "The foredeck on the Sunseeker 76 is a separate forward lounge with more privacy than the main guest areas aft.",
      detail: "By day, it is a comfortable place for sun, reading, conversation, or a quiet pause away from the main rhythm of the yacht. It is arranged as a real seating area, not just a pad with sun cushions: a table and wraparound sofa make it easy to sit, talk, have coffee, a glass of wine, or simply look out over the water.\n\nIn the evening, the mood becomes quieter and more intimate. It works well for private conversation, personal time, or a small romantic dinner when guests want to step away from the rest of the boat.\n\nThe separate sound zone matters. Volume and music can be set for the foredeck itself, instead of forcing one soundtrack across the whole yacht.\n\nIn short, the foredeck is the yacht's private forward lounge: sun and rest during the day, then a calmer setting for conversation and time alone in the evening."
    },
    ru: {
      label: "Фордек",
      title: "Фордек",
      copy: "Фордек на Sunseeker 76 — это отдельная лаунж-зона в носовой части яхты. В отличие от кокпита, где обычно собираются все гости, фордек даёт больше приватности и ощущения уединения.",
      detail: "Днём это удобное место для отдыха на солнце: здесь можно позагорать, полежать, почитать, спокойно провести время отдельно от основной жизни яхты. Пространство организовано не просто как площадка с лежаками, а как полноценная зона отдыха со столом и диваном вокруг него. Поэтому здесь можно не только лежать, но и удобно сидеть, разговаривать, пить кофе, бокал вина или просто смотреть на море.\n\nВечером фордек меняет настроение. Это уже более тихое и камерное место для бесед, личного времени или романтического ужина. Если гости хотят немного отойти от общего ритма яхты и побыть отдельно, фордек подходит для этого очень хорошо.\n\nОтдельный комфорт создаёт музыкальная система. Акустика на яхте разделена по зонам, поэтому на фордеке можно отдельно регулировать и громкость, и саму музыку под своё настроение. Это важная деталь: музыка не навязывается всей яхте сразу, а может работать именно для той зоны, где сейчас находятся гости.\n\nВ итоге фордек — это приватная лаунж-зона яхты. Днём это место для солнца и отдыха, вечером — пространство для уединения, спокойных разговоров и красивого романтичного настроения."
    }
  },
  {
    id: "cockpit",
    media: [
      localGalleryMedia("cockpit", "01-cockpit-img-3447", "50% 50%"),
      localGalleryMedia("cockpit", "02-cockpit-img-3448", "50% 50%"),
      localGalleryMedia("cockpit", "03-cockpit-img-3449", "50% 50%"),
      localGalleryMedia("cockpit", "04-cockpit-img-3450", "50% 50%"),
      localGalleryMedia("cockpit", "05-cockpit-img-3451", "50% 50%"),
      localGalleryMedia("cockpit", "06-cockpit-img-3452", "50% 50%"),
      localGalleryMedia("cockpit", "07-cockpit-img-3453", "50% 50%"),
      localGalleryMedia("cockpit", "08-cockpit-img-3454", "50% 50%"),
      localGalleryMedia("cockpit", "09-cockpit-img-3456", "50% 50%"),
      localGalleryMedia("cockpit", "10-cockpit-img-3457", "50% 50%"),
      localGalleryMedia("cockpit", "11-cockpit-img-3458", "50% 50%")
    ],
    horizontalMedia: [
      localMedia("cockpit", "h01-cockpit-img-3470-stage.webp", "h01-cockpit-img-3470-full.webp", "h01-cockpit-img-3470-mobile.webp", "50% 50%"),
      localMedia("cockpit", "h02-cockpit-img-3471-stage.webp", "h02-cockpit-img-3471-full.webp", "h02-cockpit-img-3471-mobile.webp", "50% 50%"),
      localMedia("cockpit", "h03-cockpit-img-3472-stage.webp", "h03-cockpit-img-3472-full.webp", "h03-cockpit-img-3472-mobile.webp", "50% 50%"),
      localMedia("cockpit", "h04-cockpit-img-3473-stage.webp", "h04-cockpit-img-3473-full.webp", "h04-cockpit-img-3473-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Cockpit",
      title: "Cockpit",
      copy: "The cockpit is one of the key living areas on the Sunseeker 76: open, comfortable, and used throughout the day.",
      detail: "Breakfast, lunch, and dinner often happen here. It is not just a pass-through space by the saloon entrance; it is the central meeting point on board, where guests sit together, talk, listen to music, look out to sea, and spend a large part of the day.\n\nThe connection to the main saloon is a major part of how the cockpit works. The large sliding door opens the two spaces into one larger living area, so service from the saloon feels easy and the aft deck feels more generous.\n\nThe layout also respects crew movement. Crew can use the side deck and reach the helm area through a separate side door without crossing through the guest cockpit. In real use, that keeps technical work and guest time from getting in each other's way.\n\nThe atmosphere is helped by the sound system. Music can stay in the background without taking over the conversation; after a while, it simply becomes part of the setting.\n\nFrom the cockpit there is access to the ice maker, two side decks leading forward to the foredeck, the stairs to the flybridge, and two ways down toward the swim platform and the water.\n\nOverall, the cockpit is the yacht's main social hub: a place for meals, conversation, informal meetings, and the everyday life of the boat."
    },
    ru: {
      label: "Кокпит",
      title: "Кокпит",
      copy: "Кокпит на Sunseeker 76 — одна из самых важных зон на яхте. Именно здесь большую часть времени проводят гости, и в этом размере лодки Sunseeker подошёл к организации пространства очень разумно: кокпит получился большим, удобным, открытым и по-настоящему комфортным.",
      detail: "Чаще всего именно здесь проходят завтраки, обеды и ужины. Это не просто проходная зона у входа в салон, а центральное место встречи на борту — пространство, где люди собираются вместе, разговаривают, отдыхают, слушают музыку, смотрят на море и проводят значительную часть дня.\n\nОчень важная особенность кокпита — его связь с главным салоном. Большая раздвижная дверь полностью открывает пространство между салоном и кокпитом, и визуально они начинают работать как единая большая зона. Благодаря этому кокпит ощущается ещё просторнее, а подача из салона становится более мобильной.\n\nПри этом планировка продумана не только для гостей, но и для экипажа. У экипажа есть возможность проходить по боковой палубе и попадать к зоне поста управления через отдельную боковую дверь, не проходя сквозь гостевой кокпит. Это важная деталь в реальном использовании яхты: экипаж может двигаться из своей рабочей зоны и выполнять технические задачи, не нарушая атмосферу отдыха и общения гостей.\n\nОтдельно стоит отметить атмосферу. Аудиосистема работает на очень хорошем уровне: фоновая музыка не мешает разговору, не раздражает слух и не перетягивает внимание на себя. Она просто создаёт нужное настроение. Через некоторое время её почти перестаёшь замечать, но именно этот мягкий фон делает отдых в кокпите ещё более цельным.\n\nИз кокпита есть удобный доступ к ледомату, два боковых прохода вперёд на фордек, лестница на флайбридж и два спуска вниз — к купальной платформе и воде.\n\nВ итоге кокпит на Sunseeker 76 — это центральная жилая точка яхты. Здесь встречаются гости, беседуют, общаются, проводят свои личные и рабочие встречи. В общем, кокпит — это центр притяжения всей яхты."
    }
  },
  {
    id: "aft_swim_platform",
    media: [
      localGalleryMedia("aft_swim_platform", "01-platform-iphone-primary", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "02-platform-iphone-26290316", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("aft_swim_platform", "03-platform-iphone-42e39c65", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "05-platform-iphone-58e2ff53", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "06-platform-iphone-bddff6cc", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "07-platform-iphone-c1312fd5", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "08-platform-iphone-c32af275", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "09-platform-iphone-d175137d", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "10-platform-iphone-d364fbb6", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "11-platform-iphone-d9cc07d5", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "12-platform-iphone-edd7c0f8", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "13-platform-iphone-img-3432", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("aft_swim_platform", "14-platform-more-12a52a1a", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "15-platform-more-28f215bb", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "16-platform-more-48d5cd2c", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "17-platform-more-99a0cf94", "50% 50%"),
      localGalleryMedia("aft_swim_platform", "18-platform-more-82d20f3d", "50% 50%")
    ],
    horizontalMedia: [
      localMedia("aft_swim_platform", "h01-platform-more-ea4beffd-stage.webp", "h01-platform-more-ea4beffd-full.webp", "h01-platform-more-ea4beffd-mobile.webp", "50% 50%"),
      localMedia("aft_swim_platform", "h02-platform-more-81b6c017-stage.webp", "h02-platform-more-81b6c017-full.webp", "h02-platform-more-81b6c017-mobile.webp", "50% 50%"),
      localMedia("aft_swim_platform", "h03-platform-more-9ef043f8-stage.webp", "h03-platform-more-9ef043f8-full.webp", "h03-platform-more-9ef043f8-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Aft Swim Platform",
      title: "Water access aft",
      copy: "The aft submersible platform works as a beach area by the water.",
      detail: "On the Sunseeker 76, the aft hydraulic swim platform is unusually useful. It can be set up as a beach area with loungers and a small table, and its height can be adjusted for easier entry into and out of the water. A swim ladder is also available.\n\nThat makes the sea more accessible for children, older guests, and anyone who needs an easier way in and out. The platform can lower up to 40 cm below the surface, creating a shallow-water area right beside the yacht.\n\nTwo freshwater showers are available on the platform, so guests do not have to wait. For evenings by the water, the grill area supports relaxed meals on the platform and easy service back to the cockpit table.\n\nUnderwater lighting, step lighting, and other small lighting details make the area feel comfortable after sunset. For active time on board, the yacht carries 2 SUP boards, a SeaBob, a tender with a towable inflatable, masks, and fins."
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
      localGalleryMedia("tender", "01-tender-primary", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("tender", "02-tender-img-3370", "50% 50%"),
      localGalleryMedia("tender", "03-tender-img-3393", "50% 50%"),
      localGalleryMedia("tender", "04-tender-img-3394", "50% 50%"),
      localGalleryMedia("tender", "05-tender-img-3395", "50% 50%"),
      localGalleryMedia("tender", "06-tender-img-3396", "50% 50%"),
      localGalleryMedia("tender", "07-tender-img-3397", "50% 50%"),
      localGalleryMedia("tender", "08-tender-img-3399", "50% 50%"),
      localGalleryMedia("tender", "09-tender-img-3433", "50% 50%")
    ],
    en: {
      label: "Tender",
      title: "Williams 420 tender",
      copy: "The Williams 420 is more than a support boat; at this size, it works as a capable small runabout.",
      detail: "At more than four meters long, the tender can comfortably carry up to six people. It is used for guest transfers, arrivals and departures, and movement between yachts without spending time entering a marina or arranging a berth.\n\nIts speed makes short runs easy, while also allowing longer coastal trips when the plan calls for it.\n\nIt also adds another layer of time on the water. The tender can tow inflatable water toys, take children for a ride, support swimming in remote bays, or simply make a fast run along the coast.\n\nFor many outings, the tender becomes the practical way to explore: island visits, caves, beach landings, and places where the main yacht should not or cannot approach often start with the Williams.\n\nIn that sense, the Williams 420 is not just a boat that follows the yacht. It expands how the yacht can be used and opens up more ways to spend time on the water."
    },
    ru: {
      label: "Тендер",
      title: "Тендер Williams 420",
      copy: "Тендер Williams 420 — это не просто вспомогательная лодка для связи с берегом. Благодаря своим размерам и возможностям он является полноценным катером, способным выполнять широкий круг задач во время отдыха на яхте.",
      detail: "Длина тендера превышает четыре метра, а его вместимость позволяет комфортно перевозить до шести человек. Он используется для доставки гостей на берег, встреч и проводов, а также для перемещений между яхтами без необходимости тратить время на заходы в марину и оформление швартовки.\n\nВысокая скорость позволяет быстро и комфортно доставлять гостей в нужную точку. При этом тендер одинаково хорошо подходит как для коротких трансферов, так и для более продолжительных поездок вдоль побережья.\n\nОтдельное направление его использования — отдых и развлечения на воде. Тендер может буксировать надувные аттракционы, использоваться для прогулок с детьми, купания в удалённых бухтах или просто для динамичной поездки вдоль побережья.\n\nВо многих случаях именно тендер становится основным транспортом для небольших экскурсий. Поездки к островам, посещение гротов, высадки на пляжи и исследование мест, куда большой яхте подходить неудобно или невозможно, часто начинаются именно с него.\n\nВ итоге тендер Williams 420 — это не просто лодка, следующая за яхтой. Это самостоятельное плавсредство, которое расширяет возможности отдыха, делает передвижение более удобным и открывает множество дополнительных сценариев для путешествий и активного времени на воде."
    }
  },
  {
    id: "saloon",
    media: [
      localGalleryMedia("saloon", "01-saloon-img-3404", "50% 50%"),
      localGalleryMedia("saloon", "02-saloon-img-3411", "50% 50%"),
      localGalleryMedia("saloon", "03-saloon-img-3410", "50% 50%"),
      localGalleryMedia("saloon", "04-saloon-img-3409", "50% 50%"),
      localGalleryMedia("saloon", "05-saloon-img-3408", "50% 50%"),
      localGalleryMedia("saloon", "06-saloon-img-3406", "50% 50%"),
      localGalleryMedia("saloon", "07-saloon-img-3400", "50% 50%"),
      localGalleryMedia("saloon", "08-saloon-img-3401", "50% 50%"),
      localGalleryMedia("saloon", "09-saloon-img-3402", "50% 50%"),
      localGalleryMedia("saloon", "10-saloon-img-3403", "50% 50%"),
      localGalleryMedia("saloon", "11-saloon-img-3405", "50% 50%")
    ],
    horizontalMedia: [
      localMedia("saloon", "80-p1477573-stage.webp", "80-p1477573-full.webp", "80-p1477573-mobile.webp", "50% 50%"),
      localMedia("saloon", "89-p1999637-stage.webp", "89-p1999637-full.webp", "89-p1999637-mobile.webp", "50% 50%"),
      localMedia("saloon", "87-p1999629-stage.webp", "87-p1999629-full.webp", "87-p1999629-mobile.webp", "50% 50%"),
      localMedia("saloon", "85-p1999616-stage.webp", "85-p1999616-full.webp", "85-p1999616-mobile.webp", "50% 50%"),
      localMedia("saloon", "94-p1477558-stage.webp", "94-p1477558-full.webp", "94-p1477558-mobile.webp", "50% 50%"),
      localMedia("saloon", "98-p1999624-stage.webp", "98-p1999624-full.webp", "98-p1999624-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Saloon",
      title: "Saloon",
      copy: "The Sunseeker 76 saloon feels visually large and bright.",
      noteCopy: "",
      detail: "It is not a closed interior room, but a proper living area that, through large windows and a direct connection to the cockpit, works as an open space inside the yacht.\n\nOne of the main features of the saloon is the large glazed door-window that opens out to the cockpit. When the door is open, the boundary between the saloon and cockpit almost disappears: the cockpit visually becomes a continuation of the saloon, and the saloon becomes part of the shared guest area. This makes the whole space feel larger, more alive, and more comfortable for conversation.\n\nLarge windows on all sides fill the saloon with light and keep a constant connection with the sea. Inside, there is no sense of pressure from a closed room: guests can sit in the saloon, rest, talk, or dine while still seeing the water, the shore, and the movement around the yacht.\n\nSeveral functional zones are arranged inside the saloon. There is a large dining table, a galley with an island, a lounge area with a sofa, a coffee table, and a large TV. This division makes the saloon convenient for quiet rest, meals, and an evening with a movie or conversation.\n\nThe helm station is placed far forward and is visually separated from the main guest part of the saloon. There is a small sofa next to it, but the helm area does not mix with the central lounge. As a result, the saloon stays comfortable for guests, while the working part of the yacht keeps its separate purpose.\n\nOverall, the Sunseeker 76 saloon is a bright, spacious, and well-organized interior zone. It brings together dining, galley, relaxation, and the connection with the cockpit, while keeping a feeling of lightness and openness."
    },
    ru: {
      label: "Салон",
      title: "Салон",
      copy: "Салон Sunseeker 76 визуально ощущается очень большим и светлым.",
      noteCopy: "",
      detail: "Это не закрытое внутреннее помещение, а полноценная жилая зона, которая за счёт больших окон и прямой связи с кокпитом работает как открытое пространство внутри яхты.\n\nОдна из главных особенностей салона — большое витражное окно-дверь, через которое открывается выход в кокпит. Когда дверь раскрыта, граница между салоном и кокпитом почти исчезает: кокпит визуально становится продолжением салона, а салон — частью общей гостевой зоны. Это делает всё пространство более объёмным, живым и удобным для общения.\n\nБольшие окна со всех сторон наполняют салон светом и дают постоянный контакт с морем. Находясь внутри, не чувствуешь давления закрытого помещения: можно сидеть в салоне, отдыхать, разговаривать или обедать, продолжая видеть воду, берег и движение вокруг яхты.\n\nВ салоне расположены несколько функциональных зон. Здесь есть большой обеденный стол, кухня с островом, зона отдыха с диваном, журнальным столом и большим телевизором. Такое разделение делает салон удобным и для спокойного отдыха, и для обедов, и для вечера с фильмом или беседой.\n\nПост управления вынесен далеко вперёд и интерьерно отделён от основной гостевой части салона. Рядом с ним расположен небольшой диванчик, но сама зона управления не смешивается с центральной зоной отдыха. Благодаря этому салон остаётся комфортным для гостей, а рабочая часть яхты сохраняет своё отдельное назначение.\n\nВ итоге салон Sunseeker 76 — это светлая, просторная и хорошо организованная внутренняя зона яхты. Он объединяет обеденное пространство, кухню, отдых и связь с кокпитом, при этом не теряет ощущения лёгкости и открытости."
    }
  },
  {
    id: "master_cabin",
    media: [
      localGalleryMedia("master_cabin", "01-master-img-052e1749", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("master_cabin", "02-master-img-681d9fd3", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("master_cabin", "03-master-img-a4681bf8", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("master_cabin", "04-master-img-cd3bdd7e", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("master_cabin", "05-master-img-bc2f637f", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("master_cabin", "06-master-img-672fa126", "50% 50%", "20260624-vertical1")
    ],
    horizontalMedia: [
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
      copy: "The cabins on the Sunseeker 76 were given particular attention.",
      detail: "These are not simply sleeping areas, but personal spaces for rest, quiet, and comfortable time on board.\n\nEach cabin is arranged for two people and has everything needed for an easy life on the yacht. Here, guests can rest, watch a movie, take care of their own things, or simply close the door and step out of the yacht's shared rhythm for a while.\n\nAn important part of the comfort is good sound insulation. Underway, outside noise does not distract from rest, sleep, or work, which is especially valuable on longer passages.\n\nEach cabin has its own shower and toilet, so guests keep their personal space and independence. There is also air conditioning and temperature control, keeping the cabins comfortable in both warm and cooler weather.\n\nStorage is also thought through. Dedicated places are provided for luggage, so suitcases, bags, and personal items do not clutter the living space or interfere with rest.\n\nThe cabin audio supports a calm atmosphere. Guests can watch a movie, play music in the background, or set the mood for a quiet evening.\n\nOverall, the cabins on the Sunseeker 76 are quiet, comfortable, well-planned spaces where guests can properly rest, have time to themselves, and feel comfortable throughout the trip."
    },
    ru: {
      label: "Мастер-каюта",
      title: "Главная каюта",
      copy: "Каютам на Sunseeker 76 уделено особое внимание.",
      detail: "Это не просто спальные помещения, а личные пространства для отдыха, тишины и комфортного пребывания на борту.\n\nКаждая каюта рассчитана на двух человек и оснащена всем необходимым для спокойной жизни на яхте. Здесь можно отдохнуть, посмотреть фильм, заняться своими делами или просто закрыть дверь и на время выйти из общего ритма яхты.\n\nВажная часть комфорта — хорошая звукоизоляция. Во время движения посторонние звуки не отвлекают от отдыха, сна или рабочих дел, что особенно ценно на длительных переходах.\n\nВ каждой каюте есть собственная душевая кабина и туалет, поэтому гости сохраняют личное пространство и независимость. Также предусмотрена система кондиционирования и поддержания температуры, благодаря чему в каютах комфортно как в тёплое, так и в холодное время года.\n\nОтдельно продумано хранение багажа. Для вещей предусмотрены специальные места, чтобы чемоданы, сумки и личные предметы не загромождали жилое пространство и не мешали отдыху.\n\nАкустика в каютах поддерживает атмосферу уюта. Можно посмотреть фильм, включить музыку фоном или создать настроение спокойного вечера.\n\nВ итоге каюты на Sunseeker 76 — это тихие, удобные и хорошо продуманные пространства, где гости могут полноценно отдохнуть, побыть наедине с собой и чувствовать себя комфортно на протяжении всего путешествия."
    }
  },
  {
    id: "forward_vip",
    media: [
      localGalleryMedia("forward_vip", "01-vip-img-431820e4", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("forward_vip", "02-vip-img-8cb19509", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("forward_vip", "03-vip-img-9333a7f2", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("forward_vip", "04-vip-img-f9d44235", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("forward_vip", "05-vip-img-78092e16", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("forward_vip", "06-vip-img-deda1dcf", "50% 50%", "20260624-vertical1")
    ],
    horizontalMedia: [
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
      copy: "The cabins on the Sunseeker 76 were given particular attention.",
      detail: "These are not simply sleeping areas, but personal spaces for rest, quiet, and comfortable time on board.\n\nEach cabin is arranged for two people and has everything needed for an easy life on the yacht. Here, guests can rest, watch a movie, take care of their own things, or simply close the door and step out of the yacht's shared rhythm for a while.\n\nAn important part of the comfort is good sound insulation. Underway, outside noise does not distract from rest, sleep, or work, which is especially valuable on longer passages.\n\nEach cabin has its own shower and toilet, so guests keep their personal space and independence. There is also air conditioning and temperature control, keeping the cabins comfortable in both warm and cooler weather.\n\nStorage is also thought through. Dedicated places are provided for luggage, so suitcases, bags, and personal items do not clutter the living space or interfere with rest.\n\nThe cabin audio supports a calm atmosphere. Guests can watch a movie, play music in the background, or set the mood for a quiet evening.\n\nOverall, the cabins on the Sunseeker 76 are quiet, comfortable, well-planned spaces where guests can properly rest, have time to themselves, and feel comfortable throughout the trip."
    },
    ru: {
      label: "Носовая VIP",
      title: "Носовая VIP-каюта",
      copy: "Каютам на Sunseeker 76 уделено особое внимание.",
      detail: "Это не просто спальные помещения, а личные пространства для отдыха, тишины и комфортного пребывания на борту.\n\nКаждая каюта рассчитана на двух человек и оснащена всем необходимым для спокойной жизни на яхте. Здесь можно отдохнуть, посмотреть фильм, заняться своими делами или просто закрыть дверь и на время выйти из общего ритма яхты.\n\nВажная часть комфорта — хорошая звукоизоляция. Во время движения посторонние звуки не отвлекают от отдыха, сна или рабочих дел, что особенно ценно на длительных переходах.\n\nВ каждой каюте есть собственная душевая кабина и туалет, поэтому гости сохраняют личное пространство и независимость. Также предусмотрена система кондиционирования и поддержания температуры, благодаря чему в каютах комфортно как в тёплое, так и в холодное время года.\n\nОтдельно продумано хранение багажа. Для вещей предусмотрены специальные места, чтобы чемоданы, сумки и личные предметы не загромождали жилое пространство и не мешали отдыху.\n\nАкустика в каютах поддерживает атмосферу уюта. Можно посмотреть фильм, включить музыку фоном или создать настроение спокойного вечера.\n\nВ итоге каюты на Sunseeker 76 — это тихие, удобные и хорошо продуманные пространства, где гости могут полноценно отдохнуть, побыть наедине с собой и чувствовать себя комфортно на протяжении всего путешествия."
    }
  },
  {
    id: "starboard_guest",
    media: [
      localGalleryMedia("starboard_guest", "01-starboard-img-e4b83691", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("starboard_guest", "02-starboard-img-2531ed23", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("starboard_guest", "03-starboard-img-842682af", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("starboard_guest", "04-starboard-img-db0f5a67", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("starboard_guest", "05-starboard-img-86fe2922", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("starboard_guest", "06-starboard-img-ed9dd0ab", "50% 50%", "20260624-vertical1")
    ],
    horizontalMedia: [
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
      copy: "The cabins on the Sunseeker 76 were given particular attention.",
      detail: "These are not simply sleeping areas, but personal spaces for rest, quiet, and comfortable time on board.\n\nEach cabin is arranged for two people and has everything needed for an easy life on the yacht. Here, guests can rest, watch a movie, take care of their own things, or simply close the door and step out of the yacht's shared rhythm for a while.\n\nAn important part of the comfort is good sound insulation. Underway, outside noise does not distract from rest, sleep, or work, which is especially valuable on longer passages.\n\nEach cabin has its own shower and toilet, so guests keep their personal space and independence. There is also air conditioning and temperature control, keeping the cabins comfortable in both warm and cooler weather.\n\nStorage is also thought through. Dedicated places are provided for luggage, so suitcases, bags, and personal items do not clutter the living space or interfere with rest.\n\nThe cabin audio supports a calm atmosphere. Guests can watch a movie, play music in the background, or set the mood for a quiet evening.\n\nOverall, the cabins on the Sunseeker 76 are quiet, comfortable, well-planned spaces where guests can properly rest, have time to themselves, and feel comfortable throughout the trip."
    },
    ru: {
      label: "Правая гостевая",
      title: "Правая гостевая каюта",
      copy: "Каютам на Sunseeker 76 уделено особое внимание.",
      detail: "Это не просто спальные помещения, а личные пространства для отдыха, тишины и комфортного пребывания на борту.\n\nКаждая каюта рассчитана на двух человек и оснащена всем необходимым для спокойной жизни на яхте. Здесь можно отдохнуть, посмотреть фильм, заняться своими делами или просто закрыть дверь и на время выйти из общего ритма яхты.\n\nВажная часть комфорта — хорошая звукоизоляция. Во время движения посторонние звуки не отвлекают от отдыха, сна или рабочих дел, что особенно ценно на длительных переходах.\n\nВ каждой каюте есть собственная душевая кабина и туалет, поэтому гости сохраняют личное пространство и независимость. Также предусмотрена система кондиционирования и поддержания температуры, благодаря чему в каютах комфортно как в тёплое, так и в холодное время года.\n\nОтдельно продумано хранение багажа. Для вещей предусмотрены специальные места, чтобы чемоданы, сумки и личные предметы не загромождали жилое пространство и не мешали отдыху.\n\nАкустика в каютах поддерживает атмосферу уюта. Можно посмотреть фильм, включить музыку фоном или создать настроение спокойного вечера.\n\nВ итоге каюты на Sunseeker 76 — это тихие, удобные и хорошо продуманные пространства, где гости могут полноценно отдохнуть, побыть наедине с собой и чувствовать себя комфортно на протяжении всего путешествия."
    }
  },
  {
    id: "port_guest",
    media: [
      localGalleryMedia("port_guest", "01-port-img-3580", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("port_guest", "02-port-img-8fd19da7", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("port_guest", "03-port-img-3574", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("port_guest", "04-port-img-3577", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("port_guest", "05-port-img-3579", "50% 50%", "20260624-vertical1"),
      localGalleryMedia("port_guest", "06-port-img-3578", "50% 50%", "20260624-vertical1")
    ],
    horizontalMedia: [
      localMedia("port_guest", "58-p1999575-stage.webp", "58-p1999575-full.webp", "58-p1999575-mobile.webp", "50% 50%"),
      localMedia("port_guest", "54-p1999537-stage.webp", "54-p1999537-full.webp", "54-p1999537-mobile.webp", "50% 50%"),
      localMedia("port_guest", "53-p1999532-stage.webp", "53-p1999532-full.webp", "53-p1999532-mobile.webp", "50% 50%"),
      localMedia("port_guest", "60-p1999557-stage.webp", "60-p1999557-full.webp", "60-p1999557-mobile.webp", "50% 50%"),
      localMedia("port_guest", "62-p1999562-stage.webp", "62-p1999562-full.webp", "62-p1999562-mobile.webp", "50% 50%"),
      localMedia("port_guest", "07-port-horizontal-3583-stage.webp", "07-port-horizontal-3583-full.webp", "07-port-horizontal-3583-mobile.webp", "50% 50%"),
      localMedia("port_guest", "08-port-horizontal-3584-stage.webp", "08-port-horizontal-3584-full.webp", "08-port-horizontal-3584-mobile.webp", "50% 50%")
    ],
    en: {
      label: "Port guest",
      title: "Port guest / children's cabin",
      copy: "The port-side cabin deserves separate attention.",
      detail: "It is a compact but very versatile cabin that can be used in different scenarios: for three children, for two adult guests, or for a small family with one child.\n\nThe main feature of this cabin is the convertible bed. The sleeping area can be arranged as two separate beds, with an additional fold-down berth above when needed. This layout works not only for children, but also for guests who prefer to sleep separately.\n\nIn another setup, the two lower beds can be joined into one larger double bed. This lets the cabin adapt easily to the actual guest mix: children can stay separately, adults can sleep apart, and a small family can use the cabin as its own comfortable space.\n\nAs in the other cabins, it has everything needed for a full stay on board: a private shower, toilet, TV, and audio. Air conditioning and temperature control help keep the cabin comfortable in both warm and cooler weather.\n\nOverall, the port-side cabin is one of the yacht's most flexible and thoughtfully planned accommodation spaces. It gives guests more options and helps distribute people on board comfortably, without feeling like a compromise."
    },
    ru: {
      label: "Левая гостевая",
      title: "Левая гостевая / детская",
      copy: "Отдельного внимания заслуживает левая боковая каюта.",
      detail: "Это небольшая, но очень универсальная каюта, которую можно использовать по разным сценариям — для троих детей, для двоих взрослых гостей или для небольшой семьи с одним ребёнком.\n\nГлавная особенность этой каюты — кровать-трансформер. Спальное место можно организовать как две раздельные кровати, а при необходимости использовать дополнительную откидную кровать сверху. Такой вариант подходит не только для детей, но и для гостей, которым удобнее размещаться отдельно.\n\nПри другом сценарии две нижние кровати можно объединить в одну большую французскую кровать. Благодаря этому каюта легко перестраивается под конкретный состав гостей: дети могут жить отдельно, взрослые могут разместиться раздельно, а небольшая семья — использовать каюту как самостоятельное комфортное пространство.\n\nВ этой каюте, как и в остальных, есть всё необходимое для полноценного пребывания на борту: собственная душевая, туалет, телевизор и акустика. Система кондиционирования и поддержания температуры позволяет сохранять комфорт как в тёплое, так и в холодное время года.\n\nВ итоге левая боковая каюта — одна из самых гибких и продуманных зон размещения на яхте. Она даёт больше вариантов для гостей и помогает удобно распределить людей на борту без ощущения компромисса."
    }
  }
];

function secondaryGalleryItems() {
  const zone = currentZone();
  const mode = secondaryMediaMode(zone);
  if (!mode) {
    return [];
  }
  return mediaItemsFor(zone, mode).map((mediaItem) => ({
    ...mediaItem,
    galleryLabel: {
      en: zone.en.label,
      ru: zone.ru.label
    }
  }));
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
    horizontalGallery: "Horizontal gallery",
    horizontalGalleryAria: "Open horizontal gallery",
    verticalGallery: "Vertical gallery",
    verticalGalleryAria: "Open vertical gallery",
    sectionGalleryAria: "Section gallery",
    portraitOnly: "Portrait view only",
    portraitOnlyHint: "Please rotate your phone upright to continue."
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
    horizontalGallery: "Горизонтальная галерея",
    horizontalGalleryAria: "Открыть горизонтальную галерею",
    verticalGallery: "Вертикальная галерея",
    verticalGalleryAria: "Открыть вертикальную галерею",
    sectionGalleryAria: "Галерея раздела",
    portraitOnly: "Только вертикальный просмотр",
    portraitOnlyHint: "Поверните телефон вертикально, чтобы продолжить."
  }
};

const state = {
  lang: detectLanguage(),
  theme: detectTheme(),
  zoneId: "overview",
  mediaMode: "vertical",
  mediaIndex: 0,
  mediaIndexByZoneMode: {},
  mediaDirection: 0,
  mediaAxis: "x",
  mediaRequestId: 0,
  lightboxRequestId: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0,
  touchStartX: 0,
  touchStartY: 0,
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
  },
  hints: {
    stage: null,
    gallery: null,
    timers: new Map(),
    listeners: new Map(),
    stageHorizontalNudgeShown: false
  }
};

const preloadedImageSources = new Set();
let adjacentStagePreloadTimer = 0;
let adjacentGalleryPreloadTimer = 0;
let mediaModeViewportTimer = 0;

function runWhenIdle(callback, timeout = 1800) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout });
    return;
  }
  window.setTimeout(callback, 0);
}

function preloadImageSource(src) {
  if (!src || preloadedImageSources.has(src)) {
    return;
  }
  preloadedImageSources.add(src);
  const image = new Image();
  image.decoding = "async";
  image.fetchPriority = "low";
  image.src = src;
}

document.documentElement.lang = state.lang;

const mediaElement = document.querySelector("#zoneMedia");
const mediaDesktopSource = document.querySelector("#zoneMediaDesktopSource");
const mediaGuard = document.querySelector("#mediaGuard");
const rail = document.querySelector("#zoneRail");
const detailsSheet = document.querySelector("#detailsSheet");
const detailsButton = document.querySelector("#detailsButton");
const themeButton = document.querySelector("#themeButton");
const stageContent = document.querySelector(".stage__content");
const stageLead = document.querySelector("#stageLead");
const stageZoneDetail = document.querySelector("#stageZoneDetail");
const detailsSheetTitle = document.querySelector("#detailsSheetTitle");
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

function isWideMediaViewport() {
  const isDesktop = window.matchMedia("(min-width: 1120px)").matches;
  const isTabletLandscape = window.matchMedia("(orientation: landscape) and (min-width: 760px)").matches;
  return isDesktop || isTabletLandscape;
}

function mediaItemsFor(zone, mode = state.mediaMode) {
  if (mode === "horizontal" && zone.horizontalMedia?.length) {
    return zone.horizontalMedia;
  }
  return zone.media;
}

function preferredMediaMode(zone = currentZone()) {
  if (zone.id !== "overview" && zone.horizontalMedia?.length && isWideMediaViewport()) {
    return "horizontal";
  }
  return "vertical";
}

function secondaryMediaMode(zone = currentZone()) {
  const primaryMode = state.mediaMode;
  if (primaryMode === "horizontal" && zone.media?.length) {
    return "vertical";
  }
  if (primaryMode === "vertical" && zone.horizontalMedia?.length) {
    return "horizontal";
  }
  return null;
}

function mediaIndexKey(zoneId = state.zoneId, mode = state.mediaMode) {
  return `${zoneId}:${mode}`;
}

function rememberMediaIndex(zoneId = state.zoneId, mode = state.mediaMode, index = state.mediaIndex) {
  state.mediaIndexByZoneMode[mediaIndexKey(zoneId, mode)] = index;
}

function restoredMediaIndex(zone, mode) {
  const items = mediaItemsFor(zone, mode);
  const storedIndex = state.mediaIndexByZoneMode[mediaIndexKey(zone.id, mode)] ?? 0;
  if (!items.length) {
    return 0;
  }
  return Math.max(0, Math.min(storedIndex, items.length - 1));
}

function applyPreferredMediaMode(zone = currentZone()) {
  const nextMode = preferredMediaMode(zone);
  if (nextMode !== state.mediaMode) {
    rememberMediaIndex();
    state.mediaMode = nextMode;
    state.mediaIndex = restoredMediaIndex(zone, nextMode);
    state.mediaDirection = 0;
    state.mediaAxis = "x";
    return true;
  }
  state.mediaIndex = restoredMediaIndex(zone, state.mediaMode);
  return false;
}

function currentMedia() {
  const zone = currentZone();
  const items = mediaItemsFor(zone);
  return items[state.mediaIndex] || items[0] || zone.media[0];
}

function isSectionGalleryZone() {
  return SECTION_GALLERY_ZONE_IDS.has(currentZone().id);
}

function isTouchDevice() {
  return window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

function createAirHint(container, key, orientation = "vertical") {
  const existing = state.hints[key];
  if (existing) {
    existing.classList.toggle("air-arrow-trail--horizontal", orientation === "horizontal");
    existing.classList.toggle("air-arrow-trail--vertical", orientation !== "horizontal");
    return existing;
  }
  const hint = document.createElement("div");
  hint.className = `air-arrow-trail air-arrow-trail--${orientation === "horizontal" ? "horizontal" : "vertical"}`;
  hint.setAttribute("data-air-arrow-trail", "");
  hint.setAttribute("aria-hidden", "true");
  hint.innerHTML = `
    <div class="air-arrow-trail__move air-arrow-trail__move--back">
      <div class="air-arrow-trail__arrow"></div>
      <div class="air-arrow-trail__trace"></div>
    </div>
    <div class="air-arrow-trail__move air-arrow-trail__move--forward">
      <div class="air-arrow-trail__arrow"></div>
      <div class="air-arrow-trail__trace"></div>
    </div>
  `;
  container.append(hint);
  state.hints[key] = hint;
  return hint;
}

function clearAirHintTimer(key) {
  const timer = state.hints.timers.get(key);
  if (timer) {
    window.clearTimeout(timer);
    state.hints.timers.delete(key);
  }
}

function hideAirHint(key, storageKey) {
  const hint = state.hints[key];
  if (hint) {
    hint.classList.remove("is-visible");
  }
  clearAirHintTimer(key);
  const listener = state.hints.listeners.get(key);
  if (listener) {
    listener.container.removeEventListener("touchstart", listener.hide);
    listener.container.removeEventListener("pointerdown", listener.hide);
    listener.container.removeEventListener("scroll", listener.hide);
    state.hints.listeners.delete(key);
  }
  if (storageKey) {
    window.localStorage.setItem(storageKey, "1");
  }
}

function showAirHint({
  key,
  container,
  orientation = "vertical",
  storageKey,
  force = false,
  showDelay = 450,
  autoHideDelay = 5600
}) {
  if (!container || !isTouchDevice()) {
    return;
  }
  if (!force && storageKey && window.localStorage.getItem(storageKey) === "1") {
    return;
  }
  const hint = createAirHint(container, key, orientation);
  hideAirHint(key);
  const hide = () => hideAirHint(key, force ? null : storageKey);
  state.hints.listeners.set(key, { container, hide });
  container.addEventListener("touchstart", hide, { passive: true });
  container.addEventListener("pointerdown", hide, { passive: true });
  container.addEventListener("scroll", hide, { passive: true });
  const timer = window.setTimeout(() => {
    hint.classList.add("is-visible");
    state.hints.timers.set(key, window.setTimeout(hide, autoHideDelay));
  }, showDelay);
  state.hints.timers.set(key, timer);
}

function maybeShowStageSwipeHint(force = false) {
  if (document.body.classList.contains("is-details-open") || document.body.classList.contains("is-gallery-mode-open")) {
    return;
  }
  const zone = currentZone();
  const items = mediaItemsFor(zone);
  if (zone.id === "overview" || items.length < 2) {
    return;
  }
  showAirHint({
    key: "stage",
    container: stage,
    orientation: "vertical",
    storageKey: "claudia_z_stage_vertical_swipe_hint_seen",
    force,
    showDelay: force ? 80 : 650,
    autoHideDelay: force ? 3600 : 5600
  });
}

function maybeShowHorizontalGalleryHint() {
  if (!state.gallery.isOpen || state.gallery.syncStage) {
    return;
  }
  showAirHint({
    key: "gallery",
    container: galleryViewport,
    orientation: "horizontal",
    storageKey: "claudia_z_horizontal_gallery_swipe_hint_seen",
    showDelay: 520,
    autoHideDelay: 5600
  });
}

function stageSourceFor(mediaItem) {
  const isMobile = window.matchMedia("(max-width: 759px)").matches;
  if (currentZone().id === "overview") {
    return isMobile && mediaItem.mobileSrc ? mediaItem.mobileSrc : mediaItem.src;
  }
  if (isSectionGalleryZone()) {
    return isMobile && mediaItem.mobileSrc ? mediaItem.mobileSrc : mediaItem.src;
  }
  return mediaItem.src;
}

function gallerySourceFor(mediaItem) {
  return mediaItem.gallerySrc || mediaItem.fullSrc || stageSourceFor(mediaItem);
}

function analyticsContext(extra = {}) {
  const zone = currentZone();
  const activeItems = mediaItemsFor(zone);
  return {
    zone_id: zone.id,
    zone_label: zone[state.lang].label,
    media_mode: state.mediaMode,
    media_index: state.mediaIndex + 1,
    media_count: activeItems.length,
    lang: state.lang,
    theme: state.theme,
    ...extra
  };
}

function emitAnalyticsEvent(event, detail = {}) {
  window.dispatchEvent(new CustomEvent("claudia:analytics", {
    detail: {
      event,
      ...analyticsContext(detail)
    }
  }));
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
  rememberMediaIndex();
  state.zoneId = zoneId;
  const zone = currentZone();
  state.mediaMode = preferredMediaMode(zone);
  state.mediaIndex = restoredMediaIndex(zone, state.mediaMode);
  state.mediaDirection = 0;
  state.mediaAxis = "x";
  closeZoneMenu();
  render();
  emitAnalyticsEvent("zone_view", { source: "zone_change" });
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

function setMediaIndex(index, direction = 0, axis = "x") {
  const zone = currentZone();
  const items = mediaItemsFor(zone);
  if (items.length < 2) {
    return;
  }
  state.mediaDirection = direction;
  state.mediaAxis = axis === "y" ? "y" : "x";
  state.mediaIndex = (index + items.length) % items.length;
  rememberMediaIndex();
  document.body.classList.remove("is-media-surfacing");
  window.requestAnimationFrame(() => {
    document.body.classList.add("is-media-surfacing");
  });
  renderZone();
  emitAnalyticsEvent("media_view", { source: "stage", direction });
}

function shiftStage(direction, axis = "x") {
  if (mediaItemsFor(currentZone()).length > 1) {
    setMediaIndex(state.mediaIndex + direction, direction, axis);
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
    button.dataset.zoneId = zone.id;
    button.append(icon, label);
    button.addEventListener("click", () => {
      emitAnalyticsEvent("zone_select", {
        source: "zone_button",
        zone_id: zone.id,
        zone_label: zone[state.lang].label
      });
      setZone(zone.id);
    });
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

function scheduleAdjacentMediaPreload() {
  window.clearTimeout(adjacentStagePreloadTimer);
  const requestId = state.mediaRequestId;
  adjacentStagePreloadTimer = window.setTimeout(() => {
    runWhenIdle(() => {
      if (requestId !== state.mediaRequestId || state.gallery.isOpen) {
        return;
      }
      const zone = currentZone();
      const items = mediaItemsFor(zone);
      if (items.length < 2) {
        return;
      }
      const next = items[(state.mediaIndex + 1) % items.length];
      const previous = items[(state.mediaIndex - 1 + items.length) % items.length];
      preloadImageSource(stageSourceFor(next));
      window.setTimeout(() => {
        if (requestId === state.mediaRequestId && !state.gallery.isOpen) {
          preloadImageSource(stageSourceFor(previous));
        }
      }, 700);
    });
  }, 450);
}

function transitionStageMedia(nextSrc, focus) {
  const direction = state.mediaDirection;
  const axis = state.mediaAxis === "y" ? "y" : "x";
  const canAnimate = direction !== 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (canAnimate && mediaElement.getAttribute("src")) {
    const ghost = mediaElement.cloneNode(false);
    ghost.removeAttribute("id");
    ghost.alt = "";
    ghost.className = `stage__media stage__media-ghost stage__media-ghost--${direction > 0 ? "next" : "previous"} stage__media-ghost--axis-${axis}`;
    ghost.style.objectPosition = mediaElement.style.objectPosition || focus;
    stage.append(ghost);
    window.requestAnimationFrame(() => {
      ghost.classList.add("is-leaving");
    });
    window.setTimeout(() => {
      ghost.remove();
    }, 520);

    const enterClass = direction > 0 ? "stage__media--enter-from-next" : "stage__media--enter-from-previous";
    const axisClass = `stage__media--enter-axis-${axis}`;
    mediaElement.classList.add(enterClass, axisClass);
    mediaElement.src = nextSrc;
    mediaElement.style.objectPosition = focus;
    mediaElement.getBoundingClientRect();
    window.requestAnimationFrame(() => {
      mediaElement.classList.remove(enterClass, axisClass);
    });
    return;
  }

  mediaElement.src = nextSrc;
  mediaElement.style.objectPosition = focus;
}

function updateStageMedia(selectedMedia, altText, options = {}) {
  const stageSrc = stageSourceFor(selectedMedia);
  const nextRequestId = state.mediaRequestId + 1;
  state.mediaRequestId = nextRequestId;
  if (currentZone().id !== "overview") {
    mediaDesktopSource?.remove();
    if (mediaElement.hasAttribute("srcset")) {
      mediaElement.removeAttribute("srcset");
      mediaElement.removeAttribute("sizes");
    }
  }
  mediaElement.alt = altText;
  if (options.hideCurrent) {
    mediaElement.classList.add("stage__media--handoff");
  }
  const activeStageSrc = mediaElement.currentSrc || mediaElement.src;
  if (activeStageSrc.endsWith(stageSrc)) {
    mediaElement.style.objectPosition = selectedMedia.focus;
    mediaElement.classList.remove("is-loading");
    mediaElement.classList.remove("stage__media--handoff");
    scheduleAdjacentMediaPreload();
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
    window.requestAnimationFrame(() => {
      mediaElement.classList.remove("stage__media--handoff");
    });
    scheduleAdjacentMediaPreload();
  };
  image.onerror = () => {
    if (state.mediaRequestId === nextRequestId) {
      mediaElement.classList.remove("is-loading");
      mediaElement.classList.remove("stage__media--handoff");
      scheduleAdjacentMediaPreload();
    }
  };
  image.src = stageSrc;
}

function renderZone() {
  const zone = currentZone();
  applyPreferredMediaMode(zone);
  const activeItems = mediaItemsFor(zone);
  const selectedMedia = currentMedia();
  const isOverview = zone.id === "overview";
  const hasSectionGallery = isSectionGalleryZone();
  const alternateMode = secondaryMediaMode(zone);
  const isLeavingOverview = stage.classList.contains("stage--welcome") && !isOverview;
  if (isOverview) {
    toggleLightbox(false);
  }
  stage.classList.toggle("stage--welcome", isOverview);
  stage.classList.toggle("stage--gallery-zone", hasSectionGallery);
  stage.classList.toggle("stage--horizontal-media", state.mediaMode === "horizontal");
  stageContent.classList.toggle("stage__content--overview", isOverview);
  detailsSheet.classList.toggle("sheet--overview", isOverview);
  detailsSheet.classList.toggle("sheet--gallery-zone", hasSectionGallery);
  horizontalGalleryButton.hidden = !alternateMode;
  if (alternateMode) {
    const galleryKey = alternateMode === "vertical" ? "verticalGallery" : "horizontalGallery";
    const galleryAriaKey = alternateMode === "vertical" ? "verticalGalleryAria" : "horizontalGalleryAria";
    horizontalGalleryButton.textContent = copy[state.lang][galleryKey];
    horizontalGalleryButton.setAttribute("aria-label", copy[state.lang][galleryAriaKey]);
  }
  const detailMode = isOverview ? "yacht" : "zone";
  detailsButtonLabel.textContent = copy[state.lang][`${detailMode}Details`];
  detailsSheet.setAttribute("aria-label", copy[state.lang][`${detailMode}DetailsDialogAria`]);
  updateStageMedia(selectedMedia, zone[state.lang].title, { hideCurrent: isLeavingOverview });
  mediaCounter.textContent = `${state.mediaIndex + 1} / ${activeItems.length}`;
  stageLead.textContent = isOverview ? copy[state.lang].lead : zone[state.lang].copy;
  stageZoneDetail.textContent = "";
  stageZoneDetail.hidden = true;
  currentZoneLabel.textContent = zone[state.lang].label;
  const noteTitle = zone[state.lang].noteTitle ?? zone[state.lang].title;
  const noteCopy = zone[state.lang].noteCopy ?? zone[state.lang].copy;
  const sheetTitle = isOverview ? copy[state.lang].yachtDetails : noteTitle;
  detailsSheetTitle.textContent = sheetTitle;
  detailsSheetTitle.hidden = !sheetTitle;
  zoneCopy.textContent = noteCopy;
  zoneCopy.hidden = !noteCopy;
  zoneDetail.textContent = zone[state.lang].detail || "";
  maybeShowStageSwipeHint();
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
    emitAnalyticsEvent(shouldOpen ? "details_open" : "details_close", { source: "details_button" });
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
  if (shouldOpen) {
    requestViewerFullscreen(mediaLightbox);
  } else {
    exitViewerFullscreen(mediaLightbox);
  }
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
  image.decoding = "async";
  image.onload = onReady;
  image.onerror = onReady;
  image.src = src;
}

function scheduleAdjacentGalleryMediaPreload() {
  window.clearTimeout(adjacentGalleryPreloadTimer);
  const items = state.gallery.items.length ? state.gallery.items : mediaItemsFor(currentZone());
  if (!state.gallery.isOpen || items.length < 2) {
    return;
  }
  const requestId = state.gallery.requestId;
  adjacentGalleryPreloadTimer = window.setTimeout(() => {
    runWhenIdle(() => {
      if (!state.gallery.isOpen || requestId !== state.gallery.requestId) {
        return;
      }
      const next = items[(state.gallery.index + 1) % items.length];
      const previous = items[(state.gallery.index - 1 + items.length) % items.length];
      preloadImageSource(gallerySourceFor(next));
      window.setTimeout(() => {
        if (state.gallery.isOpen && requestId === state.gallery.requestId) {
          preloadImageSource(gallerySourceFor(previous));
        }
      }, 700);
    });
  }, 550);
}

function fullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || null;
}

function requestViewerFullscreen(element) {
  const isTouchViewport = window.matchMedia("(pointer: coarse)").matches;
  const isPhoneLandscapeSize = window.matchMedia("(max-height: 540px), (max-width: 960px)").matches;
  if (!isTouchViewport || !isPhoneLandscapeSize || fullscreenElement()) {
    return;
  }
  const request = element.requestFullscreen || element.webkitRequestFullscreen;
  if (!request) {
    return;
  }
  try {
    const result = request.call(element);
    if (result && typeof result.catch === "function") {
      result.catch(() => {});
    }
  } catch (_) {}
}

function exitViewerFullscreen(element) {
  const activeElement = fullscreenElement();
  if (!activeElement || (activeElement !== element && !element.contains(activeElement))) {
    return;
  }
  const exit = document.exitFullscreen || document.webkitExitFullscreen;
  if (!exit) {
    return;
  }
  try {
    const result = exit.call(document);
    if (result && typeof result.catch === "function") {
      result.catch(() => {});
    }
  } catch (_) {}
}

function renderGalleryMode(direction = 0) {
  const mediaItem = state.gallery.media || currentMedia();
  const nextSrc = gallerySourceFor(mediaItem);
  const nextAlt = mediaItem.galleryLabel ? mediaItem.galleryLabel[state.lang] : currentZone()[state.lang].title;
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

function openGalleryMode(mediaItem = currentMedia(), items = mediaItemsFor(currentZone()), index = state.mediaIndex, syncStage = true) {
  if (!isSectionGalleryZone()) {
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
  scheduleAdjacentGalleryMediaPreload();
  galleryMode.classList.add("is-open");
  galleryMode.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-gallery-mode-open");
  document.body.classList.toggle("is-horizontal-gallery-open", !syncStage);
  requestViewerFullscreen(galleryMode);
  closeZoneMenu();
  emitAnalyticsEvent("gallery_open", {
    source: syncStage ? "primary_gallery" : "secondary_gallery",
    media_index: index + 1,
    media_count: items.length
  });
  maybeShowHorizontalGalleryHint();
}

function closeGalleryMode() {
  const wasOpen = state.gallery.isOpen || galleryMode.classList.contains("is-open");
  window.clearTimeout(adjacentGalleryPreloadTimer);
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
  document.body.classList.remove("is-horizontal-gallery-open");
  galleryCaption.textContent = "";
  galleryCaption.hidden = true;
  hideAirHint("gallery");
  resetGalleryTransform();
  exitViewerFullscreen(galleryMode);
  if (wasOpen) {
    emitAnalyticsEvent("gallery_close", { source: "gallery" });
  }
}

function shiftGallery(direction) {
  if (state.gallery.isTransitioning) {
    return;
  }
  const items = state.gallery.items.length ? state.gallery.items : mediaItemsFor(currentZone());
  if (items.length > 1) {
    state.gallery.index = (state.gallery.index + direction + items.length) % items.length;
    state.gallery.media = items[state.gallery.index];
    if (state.gallery.syncStage) {
      state.mediaDirection = direction;
      state.mediaAxis = "x";
      state.mediaIndex = state.gallery.index;
      rememberMediaIndex();
      renderZone();
    }
    state.gallery.scale = 1;
    state.gallery.translateX = 0;
    state.gallery.translateY = 0;
    renderGalleryMode(direction);
    emitAnalyticsEvent("gallery_media_view", {
      source: state.gallery.syncStage ? "primary_gallery" : "secondary_gallery",
      direction,
      media_index: state.gallery.index + 1,
      media_count: items.length
    });
    scheduleAdjacentGalleryMediaPreload();
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
  emitAnalyticsEvent("theme_change", { source: "theme_button" });
});

zoneMenuButton.addEventListener("click", () => {
  const shouldOpen = !document.body.classList.contains("is-zone-menu-open");
  document.body.classList.toggle("is-zone-menu-open", shouldOpen);
  zoneMenuButton.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
});

previousMediaButton.addEventListener("click", () => {
  shiftStage(-1, "x");
});

nextMediaButton.addEventListener("click", () => {
  shiftStage(1, "x");
});

openMediaButton.addEventListener("click", () => {
  if (isSectionGalleryZone()) {
    openGalleryMode();
    return;
  }
  toggleLightbox(true);
});

horizontalGalleryButton.addEventListener("click", () => {
  const items = secondaryGalleryItems();
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
  const isHorizontalSwipe = Math.abs(deltaX) >= 28 && Math.abs(deltaX) >= Math.abs(deltaY) * 1.12;
  const isVerticalSwipe = Math.abs(deltaY) >= 34 && Math.abs(deltaY) >= Math.abs(deltaX) * 1.08;
  if (!isHorizontalSwipe && !isVerticalSwipe) {
    return;
  }
  if (isVerticalSwipe) {
    hideAirHint("stage", "claudia_z_stage_vertical_swipe_hint_seen");
    shiftStage(deltaY < 0 ? 1 : -1, "y");
    return;
  }
  shiftStage(deltaX < 0 ? 1 : -1, "x");
  if (isTouchDevice() && !state.hints.stageHorizontalNudgeShown && currentZone().id !== "overview") {
    state.hints.stageHorizontalNudgeShown = true;
    window.setTimeout(() => maybeShowStageSwipeHint(true), 360);
  }
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
    shiftStage(-1, "x");
  }
  if (event.key === "ArrowRight") {
    if (state.gallery.isOpen) {
      shiftGallery(1);
      return;
    }
    shiftStage(1, "x");
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

function rememberGlobalTouch(event) {
  const touch = event.touches[0];
  if (!touch) {
    return;
  }
  state.touchStartX = touch.clientX;
  state.touchStartY = touch.clientY;
}

function scrollableAncestorFor(target) {
  let node = target instanceof Element ? target : target.parentElement;
  while (node && node !== document.body) {
    const style = window.getComputedStyle(node);
    const canScroll = /(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 1;
    if (canScroll) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}

function canUseInternalScroll(target, deltaY) {
  const scroller = scrollableAncestorFor(target);
  if (!scroller) {
    return false;
  }
  if (deltaY > 0) {
    return scroller.scrollTop > 0;
  }
  if (deltaY < 0) {
    return scroller.scrollTop + scroller.clientHeight < scroller.scrollHeight - 1;
  }
  return true;
}

function preventPageOverscroll(event) {
  const touch = event.touches[0];
  if (!touch) {
    return;
  }
  const deltaX = touch.clientX - state.touchStartX;
  const deltaY = touch.clientY - state.touchStartY;
  const isVertical = Math.abs(deltaY) > Math.abs(deltaX) * 1.05;
  if (!isVertical) {
    return;
  }
  if (canUseInternalScroll(event.target, deltaY)) {
    return;
  }
  event.preventDefault();
}

function preventFullscreenOverscroll(event) {
  if (document.body.classList.contains("is-gallery-mode-open") || document.body.classList.contains("is-lightbox-open")) {
    event.preventDefault();
  }
}

function handleViewportMediaModeChange() {
  window.clearTimeout(mediaModeViewportTimer);
  mediaModeViewportTimer = window.setTimeout(() => {
    const zone = currentZone();
    if (preferredMediaMode(zone) === state.mediaMode) {
      return;
    }
    closeGalleryMode();
    applyPreferredMediaMode(zone);
    render();
  }, 140);
}

document.addEventListener("touchstart", rememberGlobalTouch, { passive: true });
document.addEventListener("touchmove", preventPageOverscroll, { passive: false });
window.addEventListener("resize", handleViewportMediaModeChange);
window.addEventListener("orientationchange", handleViewportMediaModeChange);
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
emitAnalyticsEvent("zone_view", { source: "initial" });
