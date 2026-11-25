import { useTranslation } from "react-i18next";
import SurfaceCard from "./ui-system/SurfaceCard";

const educationIds = ["henry", "nucba", "unju"] as const;
const responsibilityIds = ["development", "management"] as const;

const Career = () => {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="career-title" className="mt-12 border-t border-primary/10 pt-10">
      <h3 id="career-title" className="mb-6 font-display text-2xl text-foreground">
        {t("career.title")}
      </h3>

      <SurfaceCard>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <h4 className="mb-5 font-body text-xs uppercase tracking-[0.2em] text-primary">
              {t("career.experience.title")}
            </h4>
            <div className="border-l border-primary/20 pl-5">
              <h5 className="font-display text-xl text-foreground">
                {t("career.experience.role")}
              </h5>
              <p className="mt-1 text-sm font-medium text-foreground">
                {t("career.experience.organization")}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("career.experience.period")}
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-4 text-sm leading-relaxed text-muted-foreground">
                {responsibilityIds.map((id) => (
                  <li key={id}>{t(`career.experience.responsibilities.${id}`)}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="mb-5 font-body text-xs uppercase tracking-[0.2em] text-primary">
              {t("career.education.title")}
            </h4>
            <ul className="space-y-5">
              {educationIds.map((id) => (
                <li key={id} className="border-l border-primary/20 pl-5">
                  <h5 className="font-display text-lg text-foreground">
                    {t(`career.education.items.${id}.program`)}
                  </h5>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t(`career.education.items.${id}.institution`)}
                    {" · "}
                    {t(`career.education.items.${id}.period`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SurfaceCard>
    </section>
  );
};

export default Career;
