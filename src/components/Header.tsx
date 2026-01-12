import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-border" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="font-display text-xl text-foreground hover:text-primary transition-colors duration-200">
          AC
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Projects", "About", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <a 
          href="#contact" 
          className="md:hidden text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
