import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import type { langsType } from "fusion/type";

const lng = window.location.pathname.split("/")[1];
console.log("lng: ", lng);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      ru: {
        translation: {
          settings: settings("ru"),
        },
      },
      en: {
        translation: {
          settings: settings("en"),
        },
      },
      uz: {
        translation: {
          settings: settings("uz"),
        },
      },
      kz: {
        translation: {
          settings: settings("kz"),
        },
      },
    },
    lng: lng || "ru", // if you're using a language detector, do not define the lng option
    fallbackLng: "ru",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function settings(lang: langsType) {
  switch (lang) {
    case "ru":
      return {};
    case "en":
      return {};
    case "uz":
      return {};
    case "kz":
      return {};
    default:
      return {};
  }
}
