import type { directionType, TariffType } from "fusion/type";

export const inViewProps = { threshold: 0.2, triggerOnce: true };

const footerData = [
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

// #region // * Tariff
export const tariffData: TariffType[] = [
  // * Base
  {
    head: {
      media: "BASE_AIGC.mp4",
      title: "Base AIGC",
      description: "1 трендовый ролик для соцсетей.",
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
      // {
      //   title: "—",
      //   descriptions: [""],
      // },
    ],
    tabCategory: "Base",
  },
  {
    head: {
      media: "BASE_CGI.mp4",
      title: "Base CGI",
      description:
        "CGI-ролики с использованием готовых 3D-моделей и простой анимации.",
      // price: "От $3300",
      price: "<s>$2000</s><br/> <p>От $1500</p>",
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
    ],
    tabCategory: "Base",
  },
  {
    head: {
      media: "BASE_VFX.mp4",
      title: "Base VFX",
      description:
        "VFX-ролики с использованием готовых 3D-моделей и простой анимации.",
      // price: "От $25,000",
      price: "<s>$2500</s><br/> <p>От $2000</p>",
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
    ],
    tabCategory: "Base",
  },
  // * Advanced
  {
    head: {
      media: "ADVANCED_AIGC.mp4",
      title: "Advanced AIGC",
      description: "Полноценные рекламные ролики с использованием AICG, AIVFX",
      // price: "От $2700",
      price: "<s>$2700</s> <br/> <p>От $2100</p>",
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
      {
        before: "Разработка",
        title: "3",
        descriptions: ["Концепций на выбор"],
      },
      {
        title: "/video.png",
        descriptions: ["Cоздание ролика"],
      },
      {
        title: "/colorcorrection.png",
        descriptions: ["Цветокоррекция"],
      },
      {
        title: "/sound_design_ai.png",
        descriptions: ["Sound Design"],
      },
    ],
    tabCategory: "Advanced",
  },
  {
    head: {
      media: "ADVANCED_CGI.mp4",
      title: "Advanced CGI",
      description:
        "Base CG + Создание индивидуальных 3D моделей, сложная анимация, симуляция физики.",
      // price: "От $4,300",
      price: "<s>$3900</s> <br/> <p>От $3300</p>",
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

      {
        title: "/brainstorm.png",
        descriptions: ["Разработка концепции"],
      },
      {
        title: "/cube3d.png",
        descriptions: ["Создание 3D-моделей"],
      },
      {
        title: "/fire.png",
        descriptions: ["Cимуляция физики", "анимация"],
      },
      {
        title: "/colorcorrection.png",
        descriptions: ["Цветокоррекция"],
      },
      {
        title: "/sound_design.png",
        descriptions: ["Sound Design"],
      },
    ],
    tabCategory: "Advanced",
  },
  {
    head: {
      media: "ADVANCED_VFX.mp4",
      title: "Advanced VFX",
      description:
        "Base VFX + Создание индивидуальных 3D моделей, сложная анимация, симуляция физики.",
      // price: "От $18,000",
      price: "<s>$4900</s> <br/> <p>От $4300</p>",
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
      {
        title: "/brainstorm.png",
        descriptions: ["Разработка концепции"],
      },
      // {
      //   title: search,
      //   descriptions: ["Анализ продукта"],
      // },
      // {
      //   title: docs,
      //   descriptions: ["Написание сценария"],
      // },
      // {
      //   title: 'tariff/stoting.png',
      //   descriptions: ["Раскадровка"],
      // },

      // {
      //   title: '/cube3d.png',
      //   descriptions: ["Создание 3D-моделей"],
      // },
      // {
      //   title: '/animation.png',
      //   descriptions: ["Персонажная анимация"],
      // },
      // {
      //   title: '/world3d.png',
      //   descriptions: ["Создание полноценных", "3Д-миров"],
      // },
      {
        title: "/cube3d.png",
        descriptions: ["Создание 3D-моделей"],
      },
      {
        title: "/fire.png",
        descriptions: ["Cимуляция физики анимация"],
      },
      {
        title: "/colorcorrection.png",
        descriptions: ["Премиальная", "цветокоррекция"],
      },
      // {
      //   title: '/animation.png',
      //   descriptions: ["Анимация"],
      // },
      {
        title: "/sound_design.png",
        descriptions: ["Sound Design"],
      },
      // {
      //   title: icon_park_outline_voice,
      //   descriptions: ["Профессиональная озвучка"],
      // },
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
      // {
      //   before: "До",
      //   title: "3",
      //   descriptions: ["Правок"],
      // },
      // {
      //   title: mynaui_infinity,
      //   descriptions: ["Неограниченное количество", "правок"],
      // },
      {
        before: "До",
        title: "3",
        descriptions: ["Правок"],
      },
      {
        title: "/search_ai.png",
        descriptions: ["Анализ продукта"],
      },
      {
        title: "/docs_ai.png",
        descriptions: ["Написание сценария"],
      },
      {
        title: "/stoting.png",
        descriptions: ["Раскадровка"],
      },
      {
        title: "/cube3d.png",
        descriptions: ["Cоздание 3д модели", "вашего продукта"],
      },
      {
        title: "/integrationai.png",
        descriptions: ["Интеграция 3Д", "модели в ролик"],
      },
      {
        title: "/colorcorrection.png",
        descriptions: ["Премиальная", "цветокоррекция"],
      },
      {
        title: "/sound_design.png",
        descriptions: ["Sound Design"],
      },
      {
        title: "/voiceai.png",
        descriptions: ["Профессиональная озвучка"],
      },
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
// #endregion

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
