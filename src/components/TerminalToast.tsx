import { useEffect, useState } from "react";

type TerminalToastProps = {
  command: string;
  message: string;
};

type ToastPhase = "enter" | "visible" | "exit" | "hidden";

const TerminalToast = ({ command, message }: TerminalToastProps) => {
  const [phase, setPhase] = useState<ToastPhase>("enter");
  const [showCommand, setShowCommand] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const commandDelay = reducedMotion ? 0 : 320;
    const messageDelay = reducedMotion ? 0 : 760;

    const enterTimer = window.setTimeout(() => setPhase("visible"), reducedMotion ? 0 : 30);
    const commandTimer = window.setTimeout(() => setShowCommand(true), commandDelay);
    const messageTimer = window.setTimeout(() => setShowMessage(true), messageDelay);
    const exitTimer = window.setTimeout(() => setPhase("exit"), 4500);
    const removeTimer = window.setTimeout(() => setPhase("hidden"), 4850);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(commandTimer);
      window.clearTimeout(messageTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="terminal-toast pointer-events-none fixed bottom-4 left-4 right-4 z-50 md:bottom-8 md:left-auto md:right-8 md:w-[min(480px,calc(100vw-4rem))]"
      data-state={phase}
    >
      <div className="overflow-hidden rounded-md border border-primary/25 bg-card/80 text-card-foreground shadow-[0_0_28px_hsl(var(--primary)/0.08)] backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-primary/10 px-5 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-primary/85" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/45" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <span className="font-mono text-[10px] font-semibold tracking-[0.24em] text-muted-foreground">
            TERMINAL
          </span>
        </div>

        <div className="px-5 py-6 sm:px-7 sm:py-8">
          <p
            className="terminal-toast-command font-mono text-base tracking-wide text-foreground sm:text-lg"
            data-visible={showCommand}
          >
            <span className="text-muted-foreground">&gt; </span>
            {command}
          </p>

          <p
            className="terminal-toast-message mt-5 font-mono text-sm font-medium text-primary sm:text-base"
            data-visible={showMessage}
          >
            {message}
          </p>

          <p className="mt-6 font-mono text-sm text-muted-foreground" aria-hidden="true">
            <span className="terminal-toast-cursor">\_</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalToast;
