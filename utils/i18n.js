import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend"; // <---- add this
import { initReactI18next } from 'react-i18next';

import commonEs from "../public/locales/es/common.json";
import commonEn from "../public/locales/en/common.json";

const resources = {
  en: { common: commonEn },
  es: { common: commonEs },
};

i18n
  .use(XHR) // <---- add this
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
      ],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",

      // cache user language
      caches: ["localStorage"],
      excludeCacheFor: ["cimode"],
      //cookieMinutes: 10,
      //cookieDomain: 'myDomain',
    },
    resources,
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: "en",
    supportedLngs: [ "en", "es"],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
