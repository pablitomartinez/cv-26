import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Proyectos", href: "#projects" },
    { name: "Sobre mí", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "py-4 bg-background/70 backdrop-blur-xl border-b border-primary/10"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="group font-display text-4xl text-foreground relative inline-flex items-center"
        >
          {/* PM */}
          <span className="group-hover:opacity-0 transition-opacity duration-300">
            P<span className="text-primary">M</span>
          </span>

          {/* Nombre letra por letra */}
          <span className="absolute left-0 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {["P", "a", "b", "l", "o", " ", "M", "a", "r", "t", "i", "n", "e", "z"].map((char, i) => (
              <span
                key={i}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={`inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${char === " " ? "w-3" : ""
                  } ${i >= 6 ? "italic text-primary" : ""}`}
              >
                {char}
              </span>
            ))}
          </span>
        </a>




        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="link-underline text-m font-body font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Botón Descargar CV / Contacto Mobile */}
        <div className="flex items-center gap-4">
          <a
            href="./cv-pablo-martinez.pdf" // Agregamos el punto inicial para rutas relativas de Vite
            download="CV_Pablo_Martinez.pdf" // Forzamos el nombre del archivo al descargar
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm font-body text-[10px] uppercase tracking-widest font-bold"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Descargar CV</span>
            <span className="sm:hidden">CV</span>
          </a>

          <a
            href="#contact"
            className=" md:hidden text-xs font-body font-bold uppercase tracking-widest text-foreground border-b border-primary pb-1"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;