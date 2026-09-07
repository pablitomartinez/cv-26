import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Mail, Linkedin, Github, Send, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import TerminalToast from "./TerminalToast";

/**
 * Componente Contact
 * - Formulario controlado
 * - Estados UX claros (idle / loading / success / error)
 * - Conectado a API externa (Vercel + Resend)
 */
const Contact = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? "es";
  // Estado del formulario (inputs controlados)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado UX del envío
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  /**
   * Maneja cambios en inputs y textarea
   * Usa el id del input como key (name, email, message)
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  /**
   * Envío del formulario
   * - Valida campos
   * - Llama a la API
   * - Maneja feedback visual
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        "https://cv-26-resend-email.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) throw new Error();

      // Éxito
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      // Error
      setStatus("error");
    }
  };

  return (
    <section key={language} id="contact" className="py-24 bg-card transition-colors duration-500">
      <div className="container mx-auto px-6">
        <p className="text-primary text-xs tracking-[0.3em] uppercase font-bold mb-8">
          {t("contact.label")}
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ───────────────── INFO ───────────────── */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl font-display mb-8 leading-tight text-secondary-foreground">
                {t("contact.title")}
                <span className="italic text-primary">{t("contact.titleHighlight")}</span>
              </h2>

              <p className="text-foreground text-xl mb-10 max-w-md">
                {t("contact.description")}
              </p>

              <div className="space-y-4 mb-10">
                <Reveal>
                  <a
                    href="mailto:pablo.emartinez.dev@gmail.com"
                    className="text-foreground flex items-center gap-4 p-4 border border-ring rounded-sm hover:bg-primary/5 transition-all w-fit"
                  >
                    <Mail size={20} className="text-primary" />
                    <span>pablo.emartinez.dev@gmail.com</span>
                  </a>
                </Reveal>

                <Reveal>
                  <a
                    href="https://wa.me/543884597800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground flex items-center gap-4 p-4 border border-ring rounded-sm hover:bg-primary/5 transition-all w-fit"
                  >
                    <MessageCircle size={20} className="text-primary" />
                    <span>+54 388 4597800</span>
                  </a>
                </Reveal>
              </div>
            </div>

            <Reveal>
              <div className="flex items-center gap-6">
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  {t("contact.social")}
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/pablo-ezequiel-martinez-9b2991233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="https://github.com/pablitomartinez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ───────────────── FORM ───────────────── */}
          <div className="bg-background/40 p-8 md:p-10 border border-primary/10 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-primary"
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-background border px-4 py-3 text-sm rounded-sm text-primary"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-primary"
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-background border px-4 py-3 text-sm rounded-sm  text-primary"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-primary"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-background border px-4 py-3 text-sm rounded-sm resize-none text-primary"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-sm disabled:opacity-50 transition-all"
              >
                {status === "idle" && t("contact.form.submit")}
                {status === "loading" && t("contact.form.loading")}
                {status === "success" && t("contact.form.sent")}
                {status === "error" && t("contact.form.retry")}
                <Send size={16} />
              </button>

              {/* Feedback UX */}
              {status === "error" && (
                <p className="text-sm text-destructive">
                  {t("contact.form.error")}
                </p>
              )}

            </form>
          </div>
        </div>
      </div>

      {status === "success" && (
        <TerminalToast
          command={t("contact.form.terminal.command")}
          message={t("contact.form.terminal.message")}
        />
      )}
    </section>
  );
};

export default Contact;
