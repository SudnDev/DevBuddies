import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


import enMainPage from "../locales/en/mainPage.json";
import enFooter from "../locales/en/footer.json";

import ruMainPage from "../locales/ru/mainPage.json";
import ruFooter from "../locales/ru/footer.json";

i18n
    .use(LanguageDetector) // Автоопределение языка
    .use(initReactI18next) // Подключение к React
    .init({
        resources: {
            en: {
                mainPage: enMainPage,
                footer: enFooter,
            },
            ru: {
                mainPage: ruMainPage,
                footer: ruFooter,
            },
        },
        fallbackLng: "en", // Язык по умолчанию
        interpolation: {
            escapeValue: false, // Отключаем экранирование
        },
    });

export default i18n;