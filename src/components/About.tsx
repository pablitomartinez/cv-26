const About = () => {
  return (
    <section id="about" className="py-24 bg-card transition-colors duration-500">
      <div className="container mx-auto px-6">
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-16">
          Sobre Mí
        </p>
        
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight mb-8">
              Desarrollador Frontend con una mirada <span className="italic text-primary">humana</span> y técnica.
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-lg">
              <p>
                Soy un desarrollador especializado en React y Next.js, con una sólida trayectoria creando aplicaciones web reales para empresas e instituciones[cite: 2]. Mi enfoque principal es la construcción de interfaces claras, performantes y flujos de usuario completos[cite: 3].
              </p>
              <p>
                Lo que me hace diferente es mi formación en <span className="text-foreground">Trabajo Social</span> y <span className="text-foreground">Diseño UX/UI</span>[cite: 17]. Esta combinación me permite no solo escribir código eficiente, sino entender profundamente las necesidades de las personas que usarán el software.
              </p>
              <p>
                He trabajado digitalizando procesos administrativos complejos y colaborando directamente con clientes para transformar requerimientos en soluciones técnicas sólidas[cite: 11, 13]. Siempre estoy buscando aprender y aplicar mejores prácticas en arquitectura de componentes.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-4 md:col-start-9">
            <div className="sticky top-24 p-8 border border-primary/10 bg-background/50 rounded-sm">
              <p className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-primary mb-6">
                Estado Actual
              </p>
              <ul className="space-y-6 text-foreground font-body text-sm">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold uppercase tracking-widest text-[10px]">Ubicación</p>
                    <p className="text-muted-foreground">Argentina - Remoto</p> 
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold uppercase tracking-widest text-[10px]">Especialidad</p>
                    <p className="text-muted-foreground">React & Next.js</p> 
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold uppercase tracking-widest text-[10px]">Educación</p>
                    <p className="text-muted-foreground">Full Stack Developer & UX/UI</p> 
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;