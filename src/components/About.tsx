import Reveal from "./Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 lg:min-h-screen bg-card transition-colors duration-500 flex items-center"
    >
      <div className="container mx-auto px-6">
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-10">
          Sobre mí
        </p>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">

          {/* Columna izquierda */}
          <div className="md:col-span-7">

            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight mb-8">
              Construyo productos digitales que combinan diseño, rendimiento y una gran experiencia de usuario.
            </h2>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-lg">

              <Reveal>
                <p>
                  Soy <span className="text-foreground">Frontend Developer</span> especializado en React, Next.js y TypeScript. Disfruto crear interfaces modernas, intuitivas y escalables que resuelvan problemas reales. Me motiva trabajar cerca del producto, entender las necesidades de los usuarios y convertir ideas en experiencias rápidas, claras y fáciles de mantener.
                </p>
              </Reveal>

              <Reveal>
                <p>
                  Antes de dedicarme al desarrollo me formé en <span className="text-foreground">Trabajo Social</span>, una experiencia que fortaleció mi comunicación, la empatía y el trabajo en equipo. Fuera del código, soy un apasionado del fútbol y mi mayor objetivo es crecer profesionalmente mientras viajo por el mundo como <span className="text-foreground">nómada digital</span>, colaborando con equipos internacionales y aprendiendo de cada nuevo desafío.
                </p>
              </Reveal>

            </div>

          </div>

          {/* Columna derecha */}
          <Reveal>
            <div className="md:col-span-4 md:col-start-9">

              <div className="sticky top-24 rounded-xl border border-primary/10 bg-background p-6">

                <p className="mb-8 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-primary">
                  Perfil actual
                </p>

                <ul className="space-y-5 text-sm font-body">

                  <li className="flex items-start gap-4">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                        Ubicación
                      </p>
                      <p className="text-muted-foreground">
                        Argentina · Disponible para trabajo remoto
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                        Especialidad
                      </p>
                      <p className="text-muted-foreground">
                        Frontend · React · Next.js · TypeScript
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                        Enfoque
                      </p>
                      <p className="text-muted-foreground">
                        Producto · UX · Performance · Código mantenible
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                        Objetivo
                      </p>
                      <p className="text-muted-foreground">
                        Integrarme a un equipo internacional y crecer como desarrollador Full Stack mientras trabajo de forma remota.
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