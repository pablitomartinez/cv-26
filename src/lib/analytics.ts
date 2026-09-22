declare global {
    interface Window {
      gtag?: (
        command: "event",
        eventName: string,
        eventParameters?: Record<string, string | number | boolean>
      ) => void;
    }
  }
  
  /**
   * Punto único para enviar eventos personalizados a GA4.
   * Evita repartir llamadas directas a window.gtag por toda la aplicación.
   */
  export const trackEvent = (
    eventName: string,
    parameters?: Record<string, string | number | boolean>
  ) => {
    if (typeof window === "undefined" || !window.gtag) {
      return;
    }
  
    window.gtag("event", eventName, parameters);
  };