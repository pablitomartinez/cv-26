import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const BackToTop = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.9);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleAssistantOpenChange = (event: Event) => {
      const { detail } = event as CustomEvent<{ isOpen?: boolean }>;
      setIsAssistantOpen(Boolean(detail?.isOpen));
    };

    window.addEventListener(
      "portfolio-assistant-open-change",
      handleAssistantOpenChange,
    );

    return () =>
      window.removeEventListener(
        "portfolio-assistant-open-change",
        handleAssistantOpenChange,
      );
  }, []);

  const handleClick = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    const startY = window.scrollY;

    if (reducedMotion || startY <= 0) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const duration = 820;
    let startTime: number | null = null;

    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress ** 3
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const animateScroll = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const nextY = startY * (1 - easeInOutCubic(progress));

      window.scrollTo({ top: progress === 1 ? 0 : nextY, behavior: "instant" });

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(animateScroll);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = window.requestAnimationFrame(animateScroll);
  };

  return (
    <button
      type="button"
      aria-label={t("backToTop")}
      onClick={handleClick}
      className={`fixed bottom-[calc(1.25rem+3rem+0.75rem)] right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 bg-card/75 text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none md:bottom-[calc(2rem+3rem+0.75rem)] md:right-8 ${
        isVisible && !isAssistantOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp size={18} strokeWidth={1.8} aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
