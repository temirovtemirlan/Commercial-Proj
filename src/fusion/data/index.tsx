import { directionType, ITariffFooter, TariffType } from "fusion/type";

export const inViewProps = { threshold: 0.2, triggerOnce: true };

// ----------------------------------------------------------------------------
// ICON PATHS TYPE
// ----------------------------------------------------------------------------

type IconPath =
  | "/analyse.png"
  | "/search.png"
  | "/docs.png"
  | "/stoting.png"
  | "/brainstorm.png"
  | "/cube3d.png"
  | "/animation.png"
  | "/world3d.png"
  | "/composting.png"
  | "/colorcorrection.png"
  | "/sound_design.png"
  | "/voice.png"
  | "/search_ai.png"
  | "/timeline.png"
  | "/framefilm.png"
  | "/integrationai.png"
  | "/unreale+blender.png"
  | "/post-prod.png"
  | "/unreale+blender+c4.png"
  | "/virus.png"
  | "/ai.png"
  | "/fire.png"
  | "/voiceai.png"
  | "/unboarding.png";

// ----------------------------------------------------------------------------
// ITariffFooter WITH ICON
// ----------------------------------------------------------------------------

interface ITariffFooterWithIcon extends ITariffFooter {
  title: IconPath; // Enforce that `title` is one of the defined icon paths
}

const analyseObj: ITariffFooterWithIcon = {
  title: "/analyse.png",
  descriptions: ["Консультация, анализ бренда"],
};

const footerData: ITariffFooterWithIcon[] = [
  {
    title: "/search.png",
    descriptions: ["Анализ продукта"],
  },
  {
    title: "/docs.png",
    descriptions: ["Написание сценария"],
  },
  {
    title: "/stoting.png",
    descriptions: ["Раскадровка"],
  },
  {
    title: "/brainstorm.png",
    descriptions: ["Разработка концепции"],
  },
  {
    title: "/cube3d.png",
    descriptions: ["Создание 3D-моделей"],
  },
  {
    title: "/animation.png",
    descriptions: ["Персонажная анимация"],
  },
  {
    title: "/world3d.png",
    descriptions: ["Создание полноценных", "3Д-миров"],
  },
  {
    title: "/composting.png",
    descriptions: ["Композитинг"],
  },
  {
    title: "/colorcorrection.png",
    descriptions: ["Премиальная", "Цветокоррекция"],
  },
  {
    title: "/sound_design.png",
    descriptions: ["Sound Design"],
  },
  {
    title: "/voice.png",
    descriptions: ["Профессиональная озвучка"],
  },
];

// ----------------------------------------------------------------------------
//  TARIFF DATA
// ----------------------------------------------------------------------------

// Helper function to create tariff footer items
const createTariffFooterItem = (
  title: IconPath,
  descriptions: string[]
): ITariffFooterWithIcon => ({ title, descriptions });

export const tariffData: TariffType[] = [
  // * Base
  {
    head: {
      media: "BASE_AIGC.mp4",
      title: "Base AIGC",
      description:
        "Доступный тариф, на создание трендового ролика для социальных сетей, с использованием передовых технологий AIGC.",
      price: "<s>$1500</s> <br/> <p>От $1000</p>",
      content: "",
    },
    footer: [
      {
        before: "До",
        title: "15 сек",
        descriptions: ["Длительность ролика"],
      },
      {
        before: "До",
        title: "3",
        descriptions: ["Правок"],
      },
      createTariffFooterItem("/search_ai.png", [
        "Поиск креативного",
        "референса",
      ]),
      createTariffFooterItem("/colorcorrection.png", ["Цветокоррекция"]),
      createTariffFooterItem("/timeline.png", ["Таймлайн в After Effects"]),
      createTariffFooterItem("/framefilm.png", ["Создание видео с AIGC"]),
      createTariffFooterItem("/integrationai.png", [
        "Интеграция 3Д\n" + "модели в ролик",
      ]),
      createTariffFooterItem("/sound_design.png", ["Sound Design"]),
    ],
    tabCategory: "Base",
  },
  {
    head: {
      media: "BASE_CGI.mp4",
      title: "Base CGI",
      description:
        "CGI-ролики с использованием готовых 3D-моделей и простой анимации.",
      price: "<s>$2000</s><br/> <p>От $900</p>",
      content: "",
    },
    footer: [
      {
        before: "До",
        title: "15 сек",
        descriptions: ["Длительность ролика"],
      },
      {
        before: "До",
        title: "2",
        descriptions: ["Правок"],
      },
      createTariffFooterItem("/search.png", [
        "Поиск креативного\n",
        "референса",
      ]),
      createTariffFooterItem("/unreale+blender.png", [
        "3D анимация создается",
        "с применением передовых ",
        "инструментов:",
        "Cinema 4D и Blender.",
      ]),
      createTariffFooterItem("/post-prod.png", ["Пост-обработка"]),
      createTariffFooterItem("/sound_design.png", ["Sound Design"]),
    ],
    tabCategory: "Base",
  },
  {
    head: {
      media: "BASE_VFX.mp4",
      title: "Base VFX",
      description:
        "VFX-ролики с использованием готовых 3D-моделей и простой анимации.",
      price: "<s>$2500</s><br/> <p>От $1,200</p>",
      content: "",
    },
    footer: [
      {
        before: "До",
        title: "15 сек",
        descriptions: ["Длительность ролика"],
      },
      {
        before: "До",
        title: "2",
        descriptions: ["Правок"],
      },
      createTariffFooterItem("/search.png", [
        "Поиск креативного\n",
        "референса",
      ]),
      createTariffFooterItem("/unreale+blender+c4.png", [
        "Современная 3D анимация",
        "создается с использованием",
        "передовых инструментов,",
        "таких как Cinema 4D,",
        "Blender и Unreal Engine.",
      ]),
      createTariffFooterItem("/composting.png", ["Композитинг"]),
      createTariffFooterItem("/post-prod.png", ["Пост-обработка"]),
      createTariffFooterItem("/sound_design.png", ["Sound Design"]),
    ],
    tabCategory: "Base",
  },
  // * Advanced
  {
    head: {
      media: "ADVANCED_AIGC.mp4",
      title: "Advanced AIGC",
      description:
        "Создание рекламных роликов с использованием технологий AIGC, AICG, AIVFX и AISFX для реализации сложных идей в рамках масштабных кампаний. Быстро и с доступным бюджетом.",
      price: "<s>$2700</s> <br/> <p>От $2,700</p>",
      content: "",
    },
    footer: [
      {
        before: "До",
        title: "30 сек",
        descriptions: ["Длительность ролика"],
      },
      {
        before: "До",
        title: "3",
        descriptions: ["Правок"],
      },
      analyseObj,
      createTariffFooterItem("/virus.png", ["3 Вирусные концепции"]),
      createTariffFooterItem("/unboarding.png", ["Детализированный сториборд"]),
      createTariffFooterItem("/docs.png", ["Детализированный сценарий"]),
      createTariffFooterItem("/ai.png", ["Создание AIGC-футажей"]),
      createTariffFooterItem("/framefilm.png", ["Создание видео с AIGC"]),
      createTariffFooterItem("/integrationai.png", [
        "Интеграция 3Д\n",
        "модели в ролик",
      ]),
      createTariffFooterItem("/animation.png", ["Motion Design"]),
      createTariffFooterItem("/framefilm.png", ["Профессиональный монтаж"]),
      createTariffFooterItem("/colorcorrection.png", [
        "Премиальная\n",
        "цветокоррекция",
      ]),
      createTariffFooterItem("/sound_design.png", ["Sound Design"]),
      createTariffFooterItem("/post-prod.png", ["Пост-обработка"]),
    ],
    tabCategory: "Advanced",
  },
  {
    head: {
      media: "ADVANCED_CGI.mp4",
      title: "Advanced CGI",
      description:
        "Расширенный тариф, который включает в себя всё из Base CGI, а также разработку индивидуальных 3D-моделей, сложную анимацию и симуляцию физических эффектов для создания по-настоящему уникального визуального опыта.",
      price: "<s>$3900</s> <br/> <p>От $3,900</p>",
      content: "",
    },
    footer: [
      {
        before: "До",
        title: "30 сек",
        descriptions: ["Длительность ролика"],
      },
      {
        before: "До",
        title: "3",
        descriptions: ["Правок"],
      },
      analyseObj,
      createTariffFooterItem("/brainstorm.png", ["Разработка концепции"]),
      createTariffFooterItem("/unboarding.png", ["Детализированный сториборд"]),
      createTariffFooterItem("/docs.png", ["Детализированный сценарий"]),
      createTariffFooterItem("/cube3d.png", ["Создание 3D-моделей"]),
      createTariffFooterItem("/unreale+blender+c4.png", [
        "Современная 3D анимация",
        "создается с использованием",
        "передовых инструментов,",
        "таких как Cinema 4D,",
        "Blender и Unreal Engine.",
      ]),
      createTariffFooterItem("/fire.png", ["Cимуляция физики", "анимация"]),
      createTariffFooterItem("/colorcorrection.png", [
        "Премиальная",
        "цветокоррекция",
      ]),
      createTariffFooterItem("/sound_design.png", ["Sound Design"]),
      createTariffFooterItem("/post-prod.png", ["Пост-обработка"]),
    ],
    tabCategory: "Advanced",
  },
  {
    head: {
      media: "ADVANCED_VFX.mp4",
      title: "Advanced VFX",
      description:
        "Base VFX + Создание индивидуальных 3D моделей, сложная анимация, симуляция физики.",
      price: "<s>$4900</s> <br/> <p>От $4,200</p>",
      content: "",
    },
    footer: [
      {
        before: "До",
        title: "30 сек",
        descriptions: ["Длительность ролика"],
      },
      {
        before: "До",
        title: "3",
        descriptions: ["Правок"],
      },
      analyseObj,
      createTariffFooterItem("/brainstorm.png", ["Разработка концепции"]),
      createTariffFooterItem("/unboarding.png", ["Детализированный сториборд"]),
      createTariffFooterItem("/docs.png", ["Детализированный сценарий"]),
      createTariffFooterItem("/cube3d.png", ["Создание 3D-моделей"]),
      createTariffFooterItem("/unreale+blender+c4.png", [
        "Современная 3D анимация",
        "создается с использованием",
        "передовых инструментов,",
        "таких как Cinema 4D,",
        "Blender и Unreal Engine.",
      ]),
      createTariffFooterItem("/fire.png", ["Cимуляция физики", "анимация"]),
      createTariffFooterItem("/colorcorrection.png", [
        "Цветокоррекция кадров",
        "Davinci Resolve",
      ]),
      createTariffFooterItem("/sound_design.png", ["Sound Design"]),
      createTariffFooterItem("/post-prod.png", ["Пост-обработка"]),
    ],
    tabCategory: "Advanced",
  },
  // * Ultimate
  {
    head: {
      media: "ULTIMATE_AIGC.mp4",
      title: "Ultimate AIGC",
      description:
        "Уникальные AI-решения, созданные специально для конкретного клиента.",
      price: "<p>От $12,000</p>",
      content: "Cкидка по звонку",
    },
    footer: [
      {
        before: "До",
        title: "60 сек",
        descriptions: ["Длительность ролика"],
      },
      {
        before: "До",
        title: "3",
        descriptions: ["Правок"],
      },
      createTariffFooterItem("/search_ai.png", ["Анализ продукта"]),
      createTariffFooterItem("/docs.png", ["Написание сценария"]),
      createTariffFooterItem("/stoting.png", ["Раскадровка"]),
      createTariffFooterItem("/integrationai.png", [
        "Интеграция 3Д",
        "модели в ролик",
      ]),
      createTariffFooterItem("/cube3d.png", [
        "Cоздание 3д модели",
        "вашего продукта",
      ]),
      createTariffFooterItem("/colorcorrection.png", [
        "Премиальная",
        "цветокоррекция",
      ]),
      createTariffFooterItem("/sound_design.png", ["Sound Design"]),
      createTariffFooterItem("/voiceai.png", ["Профессиональная озвучка"]),
    ],
    tabCategory: "Ultimate",
  },
  {
    head: {
      media: "",
      title: "Ultimate VFX:",
      description:
        "VFX-ролики кинематографического качества, с использованием профессионального продакшна, передовых технологий и индивидуальных решений.",
      price: "от $18 000",
      content: "Cкидка по звонку",
    },
    footer: footerData,
    tabCategory: "Ultimate",
  },
  {
    head: {
      media: "FULL_CGI.mp4",
      title: "Full CGI Universe",
      description:
        "CGI-ролики кинематографического качества, с использованием передовых технологий и индивидуальных решений.",
      price: "От $25 000",
      content: "Cкидка по звонку",
    },
    footer: footerData,
    tabCategory: "Ultimate",
  },
  // * PACKAGES
  {
    head: {
      media: "FULL_CGI.mp4",
      title: "Packages",
      description:
        "CGI-ролики кинематографического качества, с использованием передовых технологий и индивидуальных решений.",
      price: "От $25 000",
      content: "Cкидка по звонку",
    },
    footer: footerData,
    tabCategory: "Packages",
  },
];

// ----------------------------------------------------------------------------
// INDICATORS
// ----------------------------------------------------------------------------

interface IIndicatorsLoading {
  gradientClass: string;
  title: string;
  end: number;
  filter: directionType;
}

interface IIndicatorsAppsLogo {
  title: string;
  app: string;
  className: string;
  filter: directionType;
}

export const indicatorsLoading: IIndicatorsLoading[] = [
  {
    gradientClass: "gradient-one",
    title: "GeoGen",
    end: 91,
    filter: "VFX",
  },
  {
    gradientClass: "gradient-two",
    title: "Liquigen",
    end: 92,
    filter: "VFX",
  },
  {
    gradientClass: "gradient-three",
    title: "Embergen",
    end: 91,
    filter: "VFX",
  },
  {
    gradientClass: "gradient-one",
    title: "Blender",
    end: 98,
    filter: "CG",
  },
  {
    gradientClass: "gradient-four",
    title: "Marvelous Designer",
    end: 94,
    filter: "CG",
  },
  {
    gradientClass: "gradient-two",
    title: "PF Tracker",
    end: 95,
    filter: "VFX",
  },
  {
    gradientClass: "gradient-three",
    title: "Unreal Engine",
    end: 92,
    filter: "CG",
  },
  {
    gradientClass: "gradient-four",
    title: "Houdini",
    end: 94,
    filter: "VFX",
  },
  {
    gradientClass: "gradient-one",
    title: "Cinema 4D",
    end: 92,
    filter: "CG",
  },
  {
    gradientClass: "gradient-two",
    title: "Adobe After Effects",
    end: 91,
    filter: "VFX",
  },
  {
    gradientClass: "gradient-three",
    title: "Adobe Photoshop",
    end: 98,
    filter: "VFX",
  },
  {
    gradientClass: "gradient-four",
    title: "Premiere Pro",
    end: 96,
    filter: "VFX",
  },
  {
    gradientClass: "gradient-one",
    title: "Adobe Illustrator",
    end: 94,
    filter: "VFX",
  },
  {
    gradientClass: "gradient-two",
    title: "Davinci Resolve",
    end: 98,
    filter: "VFX",
  },
  {
    gradientClass: "gradient-two",
    title: "3ds Max",
    end: 90,
    filter: "CG",
  },
  {
    gradientClass: "gradient-one",
    title: "Maya",
    end: 91,
    filter: "CG",
  },
  {
    gradientClass: "gradient-one",
    title: "ZBrush",
    end: 91,
    filter: "CG",
  },
  {
    gradientClass: "gradient-one",
    title: "Fusion",
    end: 94,
    filter: "VFX",
  },
  {
    gradientClass: "gradient-one",
    title: "D5 Render",
    end: 90,
    filter: "CG",
  },
  {
    gradientClass: "gradient-actorcore",
    title: "Actorcore",
    end: 95,
    filter: "CG",
  },
  {
    gradientClass: "gradient-three",
    title: "Cascadeur",
    end: 91,
    filter: "CG",
  },
  {
    gradientClass: "gradient-iClone",
    title: "iClone",
    end: 87,
    filter: "CG",
  },
];

export const indicatorsAppsLogo: IIndicatorsAppsLogo[] = [
  {
    title: "GeoGen",
    app: "/one.png",
    className: "",
    filter: "VFX",
  },
  {
    title: "Liquigen",
    app: "/two.png",
    className: "",
    filter: "VFX",
  },
  {
    title: "Embergen",
    app: "/image.png",
    className: "",
    filter: "VFX",
  },
  {
    title: "Marvelous Designer",
    app: "/image-1.png",
    className: "",
    filter: "CG",
  },

  {
    title: "Blender",
    app: "/image 28.png",
    className: "",
    filter: "CG",
  },
  {
    title: "PF Tracker",
    app: "/three.png",
    className: "",
    filter: "VFX",
  },
  {
    title: "Unreal Engine",
    app: "/four.png",
    className: "",
    filter: "CG",
  },
  {
    title: "Houdini",
    app: "/five.png",
    className: "",
    filter: "VFX",
  },
  {
    title: "Cinema 4D",
    app: "/six.png",
    className: "",
    filter: "CG",
  },
  {
    title: "Adobe After Effects",
    app: "/seven.png",
    className: "",
    filter: "VFX",
  },
  {
    title: "Adobe Photoshop",
    app: "/eight.png",
    className: "",
    filter: "VFX",
  },
  {
    title: "Premiere Pro",
    app: "/nine.png",
    className: "",
    filter: "VFX",
  },
  {
    title: "Adobe Illustrator",
    app: "/ten.png",
    className: "",
    filter: "VFX",
  },
  {
    title: "Davinci Resolve",
    app: "/eleven.png",
    className: "",
    filter: "VFX",
  },
  {
    title: "Maya",
    app: "/Maya.png",
    className: "size-[56px] rounded-xl",
    filter: "CG",
  },
  {
    title: "3ds Max",
    app: "/maxon.jpg",
    className: "size-[56px] rounded-xl",
    filter: "CG",
  },
  {
    title: "ZBrush",
    app: "/ZBrush-icon.png",
    className: "size-[56px] object-cover rounded-xl",
    filter: "CG",
  },
  {
    title: "Nuke",
    app: "/nuke.png",
    className: "size-[56px] object-cover rounded-xl",
    filter: "VFX",
  },
  {
    title: "Blackmagic fusion icon",
    app: "/Blackmagic_fusion_icon.png",
    className: "size-[56px] object-cover rounded-xl",
    filter: "VFX",
  },
  {
    title: "D5 Render icon",
    app: "/d5.png",
    className: "size-[56px] object-cover rounded-xl",
    filter: "CG",
  },
  {
    title: "Actorcore",
    app: "/Actorcore.png",
    className: "size-[56px] object-cover rounded-xl",
    filter: "CG",
  },
  {
    title: "Cascadeur",
    app: "/Cascadeur.webp",
    className: "size-[56px] object-cover rounded-xl",
    filter: "CG",
  },
  {
    title: "iClone",
    app: "/iClone.png",
    className: "size-[56px] object-cover rounded-xl",
    filter: "CG",
  },
];
