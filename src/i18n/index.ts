import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";
import { updateMetadata } from "./metadata";

export const supportedLanguages = ["es", "en"] as const;
export type Language = (typeof supportedLanguages)[number];
const storageKey = "language";

const getInitialLanguage = (): Language => {
  try {
    const savedLanguage = localStorage.getItem(storageKey);
    if (savedLanguage === "es" || savedLanguage === "en") return savedLanguage;
  } catch {
    // El almacenamiento puede estar bloqueado; el selector sigue funcionando en memoria.
  }
  return "es";
};

const initialLanguage = getInitialLanguage();

const applyLanguage = (language: string) => {
  document.documentElement.lang = language;
  updateMetadata(i18n.getFixedT(language), language);
  try {
    localStorage.setItem(storageKey, language);
  } catch {
    // La persistencia es opcional si el navegador no permite acceder a localStorage.
  }
};

i18n.on("languageChanged", applyLanguage);

void i18n.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en } },
  lng: initialLanguage,
  fallbackLng: "es",
  supportedLngs: [...supportedLanguages],
  // Los recursos locales permiten inicializar antes del primer render de React.
  initAsync: false,
  interpolation: { escapeValue: false },
});

applyLanguage(initialLanguage);

export default i18n;
