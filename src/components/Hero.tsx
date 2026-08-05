import { ArrowDown } from "lucide-react";
import DotGrid from "./react-bits/grid-points";
import SplitText from "../components/react-bits/SplitText";
import Reveal from "./Reveal";
import PixelTransition from "./react-bits/PixelTransition";
import SpecularButton from "./SpecularButton";

const Hero = () => {
  return (
    <section className="min-h-screen lg:h-screen relative flex flex-col justify-center bg-background text-foreground transition-colors duration-500 overflow-hidden pt-24 lg:pt-0 pb-12 lg:pb-0">
      {/* DOT GRID FONDO */}
      <div className="absolute inset-0 -z-0">
        <DotGrid
          dotSize={6}
          gap={30}
          baseColor="#22C55E33" // verde suave (accent con alpha)
          activeColor="#22C55E"
          proximity={140}
          shockRadius={220}
          shockStrength={4}
          resistance={800}
          returnDuration={1.2}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

          {/* COLUMNA IZQUIERDA: TEXTOS */}
          <div className="max-w-4xl text-left order-1 lg:order-1">

            <div className="flex items-center gap-2 mb-4 lg:mb-6">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-primary font-body text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em]">
                Frontend Developer // React & Next.js
              </span>
            </div>

            <Reveal>
              <h1 className="text-4xl md:text-6xl font-display text-foreground mb-4 lg:mb-6 leading-tight">
                <span className="flex flex-wrap gap-x-3 md:gap-x-4">
                  <SplitText text="Pablo" className="text-foreground" delay={80} tag="span" textAlign="left" />
                  <SplitText text="Martinez" className="text-primary italic" delay={120} tag="span" textAlign="left" />
                </span>
              </h1>
            </Reveal>

            {/* Copy optimizado según el reporte de Codex */}
            <p className="text-base sm:text-lg md:text-2xl text-secondary-foreground font-body leading-relaxed max-w-2xl mb-8 lg:mb-10">
              Frontend Developer orientado a producto. Construyo interfaces en React y Next.js para sistemas reales: medios digitales, instituciones y plataformas de gestión, con foco en la experiencia de usuario y la mantenibilidad.
            </p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">

              <a
                href="#projects"
                className="group relative inline-flex items-center overflow-hidden rounded-xl border border-primary/20 bg-zinc-950 px-7 py-3.5"
              >

                {/* Glow */}
                <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                </span>

                <span className="relative flex items-center gap-3">
                  <span className="font-medium">
                    Ver proyectos
                  </span>

                  <ArrowDown
                    className="h-4 w-4 -rotate-90 text-primary transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>

              </a>

              <a
  href="#contact"
  className="group inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground"
>
  <span className="relative">
    ESCRIBIME

    <span className="absolute left-0 -bottom-1 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
  </span>

  <ArrowDown className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
</a>

            </div>


          </div>

          {/* COLUMNA DERECHA: FOTO (Responsiva para que entre todo de una sola vez) */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 order-2 lg:order-2">
            {/* Controlamos estrictamente el tamaño en pantallas chicas (w-48 h-48) y crece en desktop */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              <PixelTransition
                gridSize={10}
                pixelColor="#10B981"
                animationStepDuration={0.4}
                className="w-full h-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                }}
                firstContent={
                  <img src="/foto.sinfondo.png" alt="Pablo Martínez" className="w-full h-full object-contain grayscale opacity-80" />
                }
                secondContent={
                  <img src="/foto.sinfondo.png" alt="Pablo Martínez" className="w-full h-full object-contain grayscale-0" />
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