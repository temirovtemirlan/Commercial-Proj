import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ruLang } from "./lang/ru";
import { enLang } from "./lang/en";
import { uzLang } from "./lang/uz";
import { kzLang } from "./lang/kz";
import type { langsType } from "fusion/type";
import { DEFAULT_LANG } from "data/hero";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      ru: {
        translation: {
          ...ruLang,
          settings: settings("ru"),
        },
      },
      en: {
        translation: {
          ...enLang,
          settings: settings("en"),
        },
      },
      uz: {
        translation: {
          ...uzLang,
          settings: settings("uz"),
        },
      },
      kz: {
        translation: {
          ...kzLang,
          settings: settings("kz"),
        },
      },
    },
    fallbackLng: DEFAULT_LANG,

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function settings(lang: langsType) {
  switch (lang) {
    case "ru":
      return {
        form: {
          btn: {
            send: "Отправить",
            orderProject: "Заказать проект",
            tabTutorial: "Нажимайте и переключайте клипы",
            leaveRequest: "Оставить заявку",
            showMore: "Показать ещё",
          },
        },
      };
    case "en":
      return {
        form: {
          btn: {
            send: "Send",
            orderProject: "Order a project",
            tabTutorial: "Click and toggle clips",
            leaveRequest: "Leave a request",
            showMore: "Show more",
          },
        },
      };
    case "uz":
      return {
        form: {
          btn: {
            send: "Yuborish",
            orderProject: "Loyihani buyurtma qiling",
            tabTutorial: "Kliplarni bosing va almashtiring",
            leaveRequest: "So'rov qoldiring",
            showMore: "Ko'proq ko'rsatish",
          },
        },
      };
    case "kz":
      return {
        form: {
          btn: {
            send: "Жіберу",
            orderProject: "Жобаға тапсырыс беріңіз",
            tabTutorial: "Клиптерді нұқыңыз және ауыстырыңыз",
            leaveRequest: "Өтініш қалдыру",
            showMore: "Көбірек көрсету",
          },
        },
      };
    default:
      return {
        form: {
          btn: {
            send: "Отправить",
            orderProject: "Заказать проект",
            tabTutorial: "Нажимайте и переключайте клипы",
            leaveRequest: "Оставить заявку",
            showMore: "Показать ещё",
          },
        },
      };
  }
}
