import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: t("header.projects"), href: "#projects" },
    { name: t("header.about"), href: "#about" },
    { name: t("header.skills"), href: "#skills" },
    { name: t("header.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-xl border-b border-primary/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="group font-display text-3xl text-foreground relative inline-flex items-center"
        >
          {/* Iniciales estáticas en mobile */}
          <span className="pointer-events-none md:hidden">
            P<span className="text-primary">M</span>
          </span>

          {/* Iniciales */}
          <span className="hidden md:inline-block group-hover:opacity-0 transition-opacity duration-300">
            P<span className="text-primary">M</span>
          </span>

          {/* Nombre completo al hacer hover */}
          <span className="hidden md:flex pointer-events-none absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {[
              "P",
              "a",
              "b",
              "l",
              "o",
              " ",
              "M",
              "a",
              "r",
              "t",
              "i",
              "n",
              "e",
              "z",
            ].map((char, i) => (
              <span
                key={i}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={`inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  char === " " ? "w-3" : ""
                } ${i >= 6 ? "italic text-primary" : ""}`}
              >
                {char}
              </span>
            ))}
          </span>
        </a>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-foreground/95 dark:text-muted-foreground hover:text-foreground font-bold text-xs uppercase tracking-[0.2em] py-1 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageToggle />
          <ThemeToggle />

          <a
            href="/Pablo-Martinez-CV.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-body text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300"
          >
            <Download size={14} />
            <span className="hidden sm:inline">{t("header.downloadCv")}</span>
            <span className="inline sm:hidden">{t("header.cv")}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
