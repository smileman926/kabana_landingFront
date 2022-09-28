import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";
import languageDetector from "i18next-browser-languagedetector";

const languages = ["en", "ru", "du"];

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    whitelist: languages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
