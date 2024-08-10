import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import main_th from "../src/locales/th/main.json";
import main_en from "../src/locales/en/main.json";

const resources = {
  th: {
    main: main_th,
  },
  en: {
    main: main_en,
  },
};

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18next;
