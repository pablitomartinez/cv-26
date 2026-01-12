import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="container">
        <div className="max-w-3xl">
          {/* Subtle label */}
          <p className="text-muted-foreground font-body text-sm tracking-wide mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Frontend Developer
          </p>
          
          {/* Name with serif elegance */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Alex Chen
          </h1>
          
          {/* Value statement - clear and grounded */}
          <p className="text-xl md:text-2xl text-muted-foreground font-body font-normal leading-relaxed max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            I build clean, functional web interfaces that solve real problems. 
            Currently focused on React ecosystems and design systems.
          </p>
          
          {/* CTA - subtle but actionable */}
          <div className="flex flex-wrap gap-6 items-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 text-foreground font-body font-medium link-underline"
            >
              View my work
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground font-body transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-200">
          <ArrowDown size={20} className="animate-bounce" style={{ animationDuration: "2s" }} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
