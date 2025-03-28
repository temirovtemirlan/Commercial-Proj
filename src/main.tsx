import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import i18next from "i18next";
import { AppRouter } from "routes";
import { store } from "store";
import "styles/index.scss";
import "fusion/i18n/index.ts";
import type { langsType } from "fusion/type";
import { LANG_STORAGE } from "data/hero";

const getCountry = (countryCode: string): langsType => {
  switch (countryCode) {
    case "ru":
      return "ru";
    case "uz":
      return "uz";
    case "kz":
      return "kz";
    case "us":
      return "en";
    default:
      return "ru";
  }
};

// const ru = "178.248.232.1";
// const uz = "195.158.31.255";
// const kz = "178.89.255.255";
// const en = "8.8.8.8";

const getLang = async () => {
  try {
    const responseIp = await fetch("https://api64.ipify.org?format=json");
    const resIp = await responseIp.json();
    const response = await fetch(`https://ipapi.co/${resIp.ip}/json/`);
    const responseData = await response.json();
    return responseData.country.toLowerCase();
  } catch {
    return "Ошибка получения IP";
  }
};

const lang = getCountry(await getLang());
const langStorage = localStorage.getItem(LANG_STORAGE);
if (!langStorage) {
  localStorage.setItem(LANG_STORAGE, lang);
}
i18next.changeLanguage(langStorage || lang);

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<h1>Loading...</h1>}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </Suspense>
);
