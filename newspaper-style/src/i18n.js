import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import enJSON from './locales/en.json';
import ruJSON from './locales/ru.json';
import uzJSON from './locales/uz.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enJSON },
      ru: { translation: ruJSON },
      uz: { translation: uzJSON }
    },
    lng: "ru", // изменяем начальный язык на русский
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;