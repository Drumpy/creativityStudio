import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      SEO_TITLE: "",
      SEO_DESCRIPTION: "",
      HERO_TITLE_UP: "Take care of the content",
      HERO_TITLE_DOWN: "We tell the story",
      HERO_SUBTITLE: "We are a Creative Studio based in Uruguay.",
      CTA_PRIMARY_TITLE: "See our work",
      CTA_SECONDARY_TITLE: "Contact us",
    },
  },
  sp: {
    translation: {
      SEO_TITLE: "",
      SEO_DESCRIPTION: "",
      HERO_TITLE_UP: "Cuida tu contenido",
      HERO_TITLE_DOWN: "Nosotros contamos la historia",
      HERO_SUBTITLE: "Somos un Estudio Creativo establecidos en Uruguay.",
      CTA_PRIMARY_TITLE: "Ver trabajos",
      CTA_SECONDARY_TITLE: "Charlemos",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "sp",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
