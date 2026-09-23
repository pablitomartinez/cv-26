import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";

type MessageRole = "user" | "assistant";

interface ChatMessage {
  id: number;
  role: MessageRole;
  content: string;
}

const initialMessage: ChatMessage = {
  id: 1,
  role: "assistant",
  content:
    "Hola 👋 Soy el asistente de Pablo. Puedo contarte sobre su experiencia, proyectos, tecnologías y formación.",
};

const suggestedQuestions = [
  "¿Quién es Pablo?",
  "¿Qué proyectos desarrolló?",
  "¿Con qué tecnologías trabaja?",
  "¿Qué experiencia tiene?",
];

interface AssistantApiResponse {
  message: string;
  mode: "ai";
}

const isAssistantApiResponse = (
  value: unknown,
): value is AssistantApiResponse => {
  if (typeof value !== "object" || value === null) return false;

  const response = value as Record<string, unknown>;
  return typeof response.message === "string" && response.mode === "ai";
};

const PortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [isSending, setIsSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextMessageId = useRef(2);
  const requestInFlightRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    messagesEndRef.current?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "nearest",
    });
  }, [isOpen, isSending, messages]);

  const closeAssistant = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const sendMessage = async (content: string) => {
    const trimmedContent = content.trim();
    if (!trimmedContent || requestInFlightRef.current) return;

    requestInFlightRef.current = true;
    setIsSending(true);

    const userMessage: ChatMessage = {
      id: nextMessageId.current++,
      role: "user",
      content: trimmedContent,
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedContent }),
      });
      const data: unknown = await response.json();

      if (!response.ok || !isAssistantApiResponse(data)) {
        throw new Error("Invalid assistant response");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: nextMessageId.current++,
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: nextMessageId.current++,
          role: "assistant",
          content: "El asistente no pudo responder en este momento.",
        },
      ]);
    } finally {
      requestInFlightRef.current = false;
      setIsSending(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {isOpen && (
        <section
          id="portfolio-assistant-panel"
          role="dialog"
          aria-labelledby="portfolio-assistant-title"
          aria-describedby="portfolio-assistant-description"
          className="fixed inset-x-3 bottom-3 z-[70] flex h-[min(78dvh,680px)] flex-col overflow-hidden rounded-2xl border border-primary/20 bg-card text-card-foreground shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-5 sm:h-[min(640px,calc(100dvh-8rem))] sm:w-[min(410px,calc(100vw-2.5rem))] md:right-8"
        >
          <header className="flex items-start gap-3 border-b border-border bg-background/70 px-4 py-4 backdrop-blur-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Bot size={21} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2
                  id="portfolio-assistant-title"
                  className="text-base font-display text-foreground"
                >
                  Asistente de Pablo
                </h2>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary">
                  IA activa
                </span>
              </div>
              <p
                id="portfolio-assistant-description"
                className="mt-1 text-xs leading-relaxed text-muted-foreground"
              >
                Un asistente sobre su perfil, no Pablo hablando directamente.
              </p>
            </div>

            <button
              type="button"
              onClick={closeAssistant}
              aria-label="Cerrar asistente de Pablo"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card motion-reduce:transition-none"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </header>

          <div
            className="flex-1 space-y-4 overflow-y-auto bg-background/35 px-4 py-5"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${{
                    user: "rounded-br-md bg-primary text-primary-foreground",
                    assistant:
                      "rounded-bl-md border border-border bg-card text-card-foreground shadow-sm",
                  }[message.role]}`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isSending && (
              <div className="flex justify-start" role="status">
                <div className="rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground shadow-sm">
                  <span className="animate-pulse motion-reduce:animate-none">
                    Conectando con el asistente…
                  </span>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="space-y-2 pt-1" aria-label="Preguntas sugeridas">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Podés empezar por acá
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => sendMessage(question)}
                      disabled={isSending}
                      className="rounded-full border border-primary/25 bg-card px-3 py-2 text-left text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-border bg-card p-3"
          >
            <div className="flex items-center gap-2 rounded-xl border border-input bg-background p-1.5 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20">
              <label htmlFor="portfolio-assistant-input" className="sr-only">
                Escribí una pregunta sobre Pablo
              </label>
              <input
                ref={inputRef}
                id="portfolio-assistant-input"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Preguntá sobre Pablo..."
                autoComplete="off"
                maxLength={500}
                disabled={isSending}
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-foreground outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isSending}
                aria-label="Enviar mensaje"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
              >
                <Send size={17} aria-hidden="true" />
              </button>
            </div>
          </form>
        </section>
      )}

      {!isOpen && (
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir asistente de Pablo"
          aria-controls="portfolio-assistant-panel"
          aria-expanded={isOpen}
          className="group fixed bottom-5 right-5 z-50 flex h-12 items-center gap-2 rounded-full border border-primary/25 bg-primary px-3.5 text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transform-none motion-reduce:transition-none md:bottom-8 md:right-8"
        >
          <Bot size={19} strokeWidth={1.8} aria-hidden="true" />
          <span className="hidden pr-1 text-xs font-bold uppercase tracking-[0.12em] sm:inline">
            Asistente
          </span>
        </button>
      )}
    </>
  );
};

export default PortfolioAssistant;
