import { Trans, useTranslation } from "react-i18next";
import Reveal from "./Reveal";

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="py-16 lg:min-h-screen bg-card transition-colors duration-500 flex items-center"
    >
      <div className="container mx-auto px-6">
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-10">
          {t("about.label")}
        </p>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">

          {/* Columna izquierda */}
          <div className="md:col-span-7">

            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight mb-8">
              {t("about.title")}
            </h2>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-lg">

              <Reveal>
                <p>
                  <Trans t={t} i18nKey="about.introduction" components={{ highlight: <span className="text-foreground" /> }} />
                </p>
              </Reveal>

              <Reveal>
                <p>
                  {t("about.product")}
                </p>
              </Reveal>

              <Reveal>
                <p>
                  <Trans t={t} i18nKey="about.background" components={{ highlight: <span className="text-foreground" /> }} />
                </p>
              </Reveal>

            </div>

          </div>

          {/* Columna derecha */}
          <Reveal>
            <div className="md:col-span-4 md:col-start-9">

              <div className="sticky top-24 rounded-xl border border-primary/10 bg-background p-6">

                <p className="mb-8 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-primary">
                  {t("about.profile.title")}
                </p>

                <ul className="space-y-5 text-sm font-body">

                  <li className="flex items-start gap-4">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                        {t("about.profile.locationLabel")}
                      </p>
                      <p className="text-muted-foreground">
                        {t("about.profile.location")}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                        {t("about.profile.specialtyLabel")}
                      </p>
                      <p className="text-muted-foreground">
                        {t("about.profile.specialty")}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                        {t("about.profile.focusLabel")}
                      </p>
                      <p className="text-muted-foreground">
                        {t("about.profile.focus")}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                        {t("about.profile.goalLabel")}
                      </p>
                      <p className="text-muted-foreground">
                        {t("about.profile.goal")}
                      </p>
                    </div>
                  </li>

                </ul>

              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default About; 
