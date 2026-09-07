import { useTranslation } from "react-i18next";
import { supportedLanguages } from "@/i18n";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t("language.label")}
      className="pointer-events-auto inline-flex shrink-0 items-center rounded-full border border-primary/20 bg-primary/10 p-0.5"
    >
      {supportedLanguages.map((language) => (
        <button
          key={language}
          type="button"
          aria-label={t(`language.${language}`)}
          title={t(`language.${language}`)}
          aria-pressed={i18n.resolvedLanguage === language}
          onClick={() => void i18n.changeLanguage(language)}
          className={`rounded-full px-2 py-2 font-body text-xs font-bold uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
            i18n.resolvedLanguage === language
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          }`}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
