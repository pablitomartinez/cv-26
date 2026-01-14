import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-background text-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Un detalle sutil de color para romper el monocromo */}
          <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase">
            Disponible para nuevos proyectos
          </span>
          
          <h1 className="text-7xl md:text-9xl font-display mt-4 mb-8">
            Hola, soy <span className="text-primary">Alex</span>.
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-body leading-tight max-w-2xl">
            Desarrollador Frontend enfocado en crear interfaces modernas, 
            rápidas y con una experiencia de usuario impecable.
          </p>
          
          <div className="mt-12 flex gap-6">
            <a href="#proyectos" className="text-lg font-body border-b-2 border-primary pb-1 hover:text-primary transition-all">
              Ver mi trabajo
            </a>
            <a href="#contacto" className="text-lg font-body border-b-2 border-transparent pb-1 hover:border-foreground transition-all">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;