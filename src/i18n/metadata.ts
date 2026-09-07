import type { TFunction } from "i18next";

export const updateMetadata = (t: TFunction, language: string) => {
  document.title = t("metadata.title");

  const values: Record<string, string> = {
    'meta[name="description"]': t("metadata.description"),
    'meta[property="og:locale"]': language === "en" ? "en_US" : "es_AR",
    'meta[property="og:title"]': t("metadata.title"),
    'meta[property="og:description"]': t("metadata.ogDescription"),
    'meta[property="og:image:alt"]': t("metadata.title"),
    'meta[name="twitter:title"]': t("metadata.title"),
    'meta[name="twitter:description"]': t("metadata.twitterDescription"),
  };

  // El HTML conserva la metadata española para lectores que no ejecutan JavaScript.
  for (const [selector, content] of Object.entries(values)) {
    document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
  }
};
