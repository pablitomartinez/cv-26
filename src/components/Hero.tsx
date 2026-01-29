import { ArrowDown } from "lucide-react";
import DotGrid from "./react-bits/grid-points";
import SplitText from "../components/react-bits/SplitText";
import Reveal from "./Reveal";
import PixelTransition from "./react-bits/PixelTransition";

// Hero.tsx revisado para mobile
const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center bg-background text-foreground transition-colors duration-500 overflow-hidden pt-20 lg:pt-0">
       {/* DOT GRID FONDO */}
  <div className="absolute inset-0 -z-0">
    <DotGrid
      dotSize={6}
      gap={30}
      baseColor="#22C55E33"   // verde suave (accent con alpha)
      activeColor="#22C55E"
      proximity={140}
      shockRadius={220}
      shockStrength={4}
      resistance={800}
      returnDuration={1.2}
      className="w-full h-full"
    />
  </div>
      {/* ^ Agregamos pt-20 (padding top) para que en mobile el texto baje y no toque la navbar */}

      <div className="container mx-auto px-6 relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* COLUMNA IZQUIERDA */}
          <div className="max-w-4xl mt-10 lg:mt-0 text-left">
            {/* ^ mt-10 refuerza la separación del header en mobile */}

            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3 shrink-0"> {/* shrink-0 para que no se aplaste */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-primary font-body text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em]">
                Frontend Developer // React & Next.js
              </span>
            </div>

            <Reveal>
              <h1 className="text-4xl md:text-7xl font-display text-foreground mb-6 leading-tight">
                {/* Cambié text-5xl a text-4xl para que no se desborde en pantallas chicas */}
                <span className="flex flex-wrap gap-x-3 md:gap-x-4">
                  <SplitText text="Pablo" className="text-foreground" delay={80} tag="span" textAlign="left" />
                  <SplitText text="Martinez" className="text-primary italic" delay={120} tag="span" textAlign="left" />
                </span>
              </h1>
            </Reveal>

            <p className="text-lg md:text-2xl text-muted-foreground font-body leading-relaxed max-w-2xl mb-10">
              {/* Bajé el tamaño de texto en mobile de xl a lg */}
              Frontend Developer orientado a producto. Diseño y desarrollo interfaces utilizadas por medios digitales e instituciones, con foco en UX, flujos completos y mantenibilidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
              {/* Botones en columna para mobile */}
              <a href="#projects" className="group flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] font-bold">
                <span className="link-underline">Explorar Proyectos</span>
                <span className="text-primary transition-transform group-hover:translate-x-2">→</span>
              </a>
              <a href="#contact" className="link-underline text-muted-foreground hover:text-foreground transition-colors font-body text-xs uppercase tracking-[0.2em]">
                Contactar
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: FOTO */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 mt-8 lg:mt-0">
            {/* Ajustamos el tamaño de la foto para que sea responsiva */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]">

              <PixelTransition
                gridSize={10}
                pixelColor="#10B981"
                animationStepDuration={0.4}
                className="w-full h-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                }}
                firstContent={
                  <img src="/foto.sinfondo.png" alt="Pablo" className="w-full h-full object-contain grayscale opacity-80" />
                }
                secondContent={
                  <img src="/foto.sinfondo.png" alt="Pablo" className="w-full h-full object-contain grayscale-0" />
                }
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full -z-10 blur-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;