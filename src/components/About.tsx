import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card transition-colors duration-500">
      <div className="container mx-auto px-6">
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-16">
          Sobre mí
        </p>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight mb-8">
              Desarrollo interfaces pensadas para usarse, mantenerse y escalar.            </h2>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-lg">
              <Reveal>
                <p>
                  Soy desarrollador Frontend orientado a producto. Me especializo en construir interfaces claras y sistemas de UI que acompañan flujos completos: desde la primera interacción hasta el uso cotidiano.
                </p>


              </Reveal>
              <Reveal>

                <p>
                  Mi formación en <span className="text-foreground">Trabajo Social</span> define cómo encaro el desarrollo: pienso en usuarios reales, contextos reales y fricciones reales. No diseño pantallas aisladas, diseño recorridos.
                </p>
              </Reveal>
              <Reveal>

                <p>
                  Trabajo con proyectos end-to-end: estructura, estado, autenticación, datos y experiencia de uso. Busco mi primera oportunidad formal en tech para crecer dentro de un equipo y aportar criterio desde el primer día.
                </p>

              </Reveal>

            </div>
          </div>
          <Reveal>
            <div className="md:col-span-4 md:col-start-9">
              <div className="sticky top-24 p-8 border border-primary/10 bg-background/50 rounded-sm">
                <p className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-primary mb-6">
                  Perfil actual
                </p>

                <ul className="space-y-6 text-foreground font-body text-sm">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold uppercase tracking-widest text-[10px]">
                        Ubicación
                      </p>
                      <p className="text-muted-foreground">
                        Argentina · Disponible remoto
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold uppercase tracking-widest text-[10px]">
                        Rol buscado
                      </p>
                      <p className="text-muted-foreground">
                        Frontend Developer (Junior / Trainee)
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold uppercase tracking-widest text-[10px]">
                        Enfoque
                      </p>
                      <p className="text-muted-foreground">
                        Producto · UX · Flujos reales
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
