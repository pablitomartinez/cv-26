import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-background text-foreground transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">
              Frontend Developer // React & Next.js
            </span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-display mb-8 tracking-tighter">
            Pablo <span className="italic text-primary">Martinez</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed max-w-2xl mb-12">
            Desarrollador de interfaces claras y flujos de usuario completos. 
            Especializado en digitalizar procesos con tecnologías modernas.
          </p>
          
          <div className="flex flex-wrap gap-8 items-center">
            <a href="#proyectos" className="group flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] font-bold">
              <span className="link-underline">Explorar Proyectos</span>
              <span className="text-primary transition-transform group-hover:translate-x-2">→</span>
            </a>
            <a href="mailto:pablo.emartinez.dev@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm uppercase tracking-[0.2em]">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;