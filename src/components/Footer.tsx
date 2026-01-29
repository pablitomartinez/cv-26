import Reveal from "./Reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-primary/10 bg-background transition-colors duration-500">
    <Reveal>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Lado Izquierdo: Branding y Ubicación */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm font-body text-foreground font-bold tracking-widest uppercase">
              Pablo Martinez <span className="text-primary/50 font-normal">© {currentYear}</span>
            </p>
            <p className="text-[10px] font-body text-muted-foreground uppercase tracking-[0.2em]">
              San Salvador de Jujuy, Argentina
            </p>
          </div>

          {/* Lado Derecho: Navegación Social */}
          <nav className="flex items-center gap-8">
            <a
              href="https://github.com/pablitomartinez"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-xs font-body uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <span className="relative z-10">GitHub</span>
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="https://www.linkedin.com/in/pablo-martinez-9b2991233/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-xs font-body uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <span className="relative z-10">LinkedIn</span>
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="mailto:pablo.emartinez.dev@gmail.com"
              className="group relative text-xs font-body uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <span className="relative z-10">Email</span>
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

        </div>

        {/* Créditos técnicos sutiles */}
        {/* <div className="mt-12 text-center">
          <p className="text-[9px] text-primary/20 uppercase tracking-[0.5em]">
            React · Tailwind · Vite
          </p>
        </div> */}
      </div>
    </Reveal>
    </footer>
  );
};

export default Footer;