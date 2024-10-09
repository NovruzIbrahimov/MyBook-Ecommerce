import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationAZ from "../public/translations/az.json";
import translationEN from "../public/translations/en.json";
import translationRU from "../public/translations/ru.json";
import translationTR from "../public/translations/tr.json";

const resources = {
  az: {
    translation: translationAZ,
  },
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  tr: {
    translation: translationTR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "az",
    lng: localStorage.getItem("i18nextLng") || "az",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
