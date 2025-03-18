import type { directionType, TariffType } from "fusion/type";
import arcticons_super_sound from "../../../public/tariff/arcticons_super-sound.png";
import circle_with_lines from "../../../public/tariff/circle_with_lines.png";
import circles from "../../../public/tariff/circles.png";
import docs from "../../../public/tariff/docs.png";
import hugeicons_brain from "../../../public/tariff/hugeicons_brain.png";
import icon_park_outline_voice from "../../../public/tariff/icon-park-outline_voice.png";
import iconoir_select_face_3d from "../../../public/tariff/iconoir_select-face-3d.png";
import lets_icons_color_mode from "../../../public/tariff/lets-icons_color-mode.png";
import mdi_fire from "../../../public/tariff/mdi_fire.png";
import meteor_icons_book_open from "../../../public/tariff/meteor-icons_book-open.png";
import mynaui_infinity from "../../../public/tariff/mynaui_infinity.png";
import search from "../../../public/tariff/search.png";
import fluent_layer_24_regular from "../../../public/tariff/fluent_layer-24-regular.png";
import hugeicons_pathfinder_merge from "../../../public/tariff/hugeicons_pathfinder-merge.png";
import icon_park_outline_voice_ai from "../../../public/tariff/icon-park-outline_voice_ai.png";
import docs_ai from "../../../public/tariff/docs_ai.png";
import arcticons_super_sound_ai from "../../../public/tariff/arcticons_super-sound_ai.png";
import search_ai from "../../../public/tariff/search_ai.png";

// #region // * Tariff
export const tariffData: TariffType[] = [
  // * CG
  {
    head: {
      media: "/1_tariff.mp4",
      title: "Base CGI",
      description:
        "CGI-ролики с использованием готовых3D-моделей и простой анимации.",
      price: "От $900",
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
      {
        title: "—",
        descriptions: [""],
      },
    ],
    tabCategory: "CG",
  },
  {
    head: {
      media: "/1_tariff.mp4",
      title: "Advanced CGI",
      description:
        "Все что в тарифе Base CG + Создание индивидуальных 3D моделей, сложная анимация симуляция физики",
      price: "От $3200",
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
        title: hugeicons_brain,
        descriptions: ["Разработка концепции"],
      },
      {
        title: iconoir_select_face_3d,
        descriptions: ["Создание 3D-моделей"],
      },
      {
        title: mdi_fire,
        descriptions: ["Cимуляция физики", "анимация"],
      },
      {
        title: lets_icons_color_mode,
        descriptions: ["Цветокоррекция"],
      },
      {
        title: arcticons_super_sound,
        descriptions: ["Sound Design"],
      },
    ],
    tabCategory: "CG",
  },
  {
    head: {
      media: "/1_tariff.mp4",
      title: "Full CGI Universe",
      description:
        "Все что в тарифе Advanced CGI + Ролики кинематографического качества, с использованием передовых технологий и индивидуальных решений.",
      price: "От $25,000",
    },
    footer: [
      {
        before: "До",
        title: "60 сек",
        descriptions: ["Длительность ролика"],
      },
      {
        title: mynaui_infinity,
        descriptions: ["Неограниченное количество", "правок"],
      },
      {
        title: search,
        descriptions: ["Анализ продукта"],
      },
      {
        title: docs,
        descriptions: ["Написание сценария"],
      },
      {
        title: meteor_icons_book_open,
        descriptions: ["Раскадровка"],
      },
      {
        title: iconoir_select_face_3d,
        descriptions: ["Создание 3D-моделей"],
      },
      {
        title: circles,
        descriptions: ["Персонажная анимация"],
      },
      {
        title: circle_with_lines,
        descriptions: ["Создание полноценных", "3Д-миров"],
      },
      {
        title: fluent_layer_24_regular,
        descriptions: ["Композитинг"],
      },
      {
        title: lets_icons_color_mode,
        descriptions: ["Премиальная", "цветокоррекция"],
      },
      {
        title: arcticons_super_sound,
        descriptions: ["Sound Design"],
      },
      {
        title: icon_park_outline_voice,
        descriptions: ["Профессиональная озвучка"],
      },
    ],
    tabCategory: "CG",
  },
  // * VFX
  {
    head: {
      media: "/1_tariff.mp4",
      title: "Base VFX",
      description:
        "VFX-ролики с использованием готовых 3D-моделей и простой анимации.",
      price: "От $1,200",
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
      {
        title: "—",
        descriptions: [""],
      },
    ],
    tabCategory: "VFX",
  },
  {
    head: {
      media: "/1_tariff.mp4",
      title: "Advanced VFX",
      description:
        "Все что в тарифе Base + Создание индивидуальных 3D моделей, сложная анимация, симуляция физики.",
      price: "От $4,200",
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
        title: hugeicons_brain,
        descriptions: ["Разработка концепции"],
      },
      {
        title: iconoir_select_face_3d,
        descriptions: ["Создание 3D-моделей"],
      },
      {
        title: mdi_fire,
        descriptions: ["Cимуляция физики", "анимация"],
      },
      {
        title: lets_icons_color_mode,
        descriptions: ["Цветокоррекция"],
      },
      {
        title: arcticons_super_sound,
        descriptions: ["Sound Design"],
      },
    ],
    tabCategory: "VFX",
  },
  {
    head: {
      media: "/1_tariff.mp4",
      title: "Ultimate VFX",
      description:
        "VFX-ролики кинематографического качества, с использованием профессионального продакшна, передовых технологий и индивидуальных решений.",
      price: "От $18,000",
    },
    footer: [
      {
        before: "До",
        title: "60 сек",
        descriptions: ["Длительность ролика"],
      },
      {
        title: mynaui_infinity,
        descriptions: ["Неограниченное количество", "правок"],
      },
      {
        title: search,
        descriptions: ["Анализ продукта"],
      },
      {
        title: docs,
        descriptions: ["Написание сценария"],
      },
      {
        title: meteor_icons_book_open,
        descriptions: ["Раскадровка"],
      },
      {
        title: hugeicons_brain,
        descriptions: ["Разработка концепции"],
      },
      {
        title: iconoir_select_face_3d,
        descriptions: ["Создание 3D-моделей"],
      },
      {
        title: circles,
        descriptions: ["Персонажная анимация"],
      },
      {
        title: circle_with_lines,
        descriptions: ["Создание полноценных", "3Д-миров"],
      },
      {
        title: fluent_layer_24_regular,
        descriptions: ["Композитинг"],
      },
      {
        title: lets_icons_color_mode,
        descriptions: ["Премиальная", "цветокоррекция"],
      },
      {
        title: circles,
        descriptions: ["Анимация"],
      },
      {
        title: arcticons_super_sound,
        descriptions: ["Sound Design"],
      },
      {
        title: icon_park_outline_voice,
        descriptions: ["Профессиональная озвучка"],
      },
    ],
    tabCategory: "VFX",
  },
  // * AIGC
  {
    head: {
      media: "/1_tariff.mp4",
      title: "Base AIGC",
      description: "1 трендовый ролик для соцсетей.",
      price: "От $500",
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
      {
        title: "—",
        descriptions: [""],
      },
    ],
    tabCategory: "AIGC",
  },
  {
    head: {
      media: "/1_tariff.mp4",
      title: "Advanced AIGC",
      description: "Полноценные рекламные ролики с использованием AICG, AIVFX",
      price: "От $2,200",
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
        title: meteor_icons_book_open,
        descriptions: ["Раскадровка"],
      },
      {
        title: lets_icons_color_mode,
        descriptions: ["Цветокоррекция"],
      },
      {
        title: arcticons_super_sound,
        descriptions: ["Sound Design"],
      },
    ],
    tabCategory: "AIGC",
  },
  {
    head: {
      media: "/1_tariff.mp4",
      title: "Ultimate AIGC",
      description:
        "Уникальные AI-решения, созданные специально для конкретного клиента.",
      price: "От $12 000",
    },
    footer: [
      {
        before: "До",
        title: "60 сек",
        descriptions: ["Длительность ролика"],
      },
      {
        title: mynaui_infinity,
        descriptions: ["Неограниченное количество", "правок"],
      },
      {
        title: search_ai,
        descriptions: ["Анализ продукта"],
      },
      {
        title: docs_ai,
        descriptions: ["Написание сценария"],
      },
      {
        title: meteor_icons_book_open,
        descriptions: ["Раскадровка"],
      },
      {
        title: iconoir_select_face_3d,
        descriptions: ["Cоздание 3д модели", "вашего продукта,"],
      },
      {
        title: hugeicons_pathfinder_merge,
        descriptions: ["Интеграция 3Д", "модели в ролик"],
      },
      {
        title: lets_icons_color_mode,
        descriptions: ["Премиальная", "цветокоррекция"],
      },
      {
        title: arcticons_super_sound_ai,
        descriptions: ["Sound Design"],
      },
      {
        title: icon_park_outline_voice_ai,
        descriptions: ["Профессиональная озвучка"],
      },
    ],
    tabCategory: "AIGC",
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
