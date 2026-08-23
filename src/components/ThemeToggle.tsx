import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

const getCurrentTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncWithSystemTheme = (event: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;

      const nextTheme = event.matches ? "dark" : "light";
      document.documentElement.classList.toggle("dark", event.matches);
      document.documentElement.style.colorScheme = nextTheme;
      setTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", syncWithSystemTheme);
    return () => mediaQuery.removeEventListener("change", syncWithSystemTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const nextThemeLabel = theme === "dark" ? "claro" : "oscuro";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Activar modo ${nextThemeLabel}`}
      title={`Activar modo ${nextThemeLabel}`}
      className="h-9 w-9 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors duration-200"
    >
      {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  );
};

export default ThemeToggle;
