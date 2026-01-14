import { Mail, Linkedin, Github, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card transition-colors duration-500">
      <div className="container mx-auto px-6">
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-8">Contacto</p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Columna de Información */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl font-display text-foreground mb-8 leading-tight">
                ¿Tenés un proyecto? <br />
                <span className="italic text-primary">Hablemos.</span>
              </h2>

              <p className="text-muted-foreground font-body text-xl mb-10 max-w-md">
                Disponible para roles en React/Next.js y proyectos freelance con enfoque en UX/UI.
              </p>

              {/* Botones de Contacto Directo */}
              <div className="space-y-4 mb-10">
                <a
                  href="mailto:pablo.emartinez.dev@gmail.com"
                  className="flex items-center gap-4 p-4 border border-primary/10 rounded-sm hover:bg-primary/5 transition-all group w-fit"
                >
                  <Mail size={20} className="text-primary" />
                  <span className="text-foreground font-body">pablo.emartinez.dev@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/543884597800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-primary/10 rounded-sm hover:bg-primary/5 transition-all group w-fit"
                >
                  <MessageCircle size={20} className="text-green-500" />
                  <span className="text-foreground font-body">+54 388 4597800</span>
                </a>
              </div>
            </div>

            {/* Redes Sociales al pie de la columna */}
            <div className="flex items-center gap-6">
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Social:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/pablo-martinez-9b2991233/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com/pablitomartinez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Columna del Formulario */}
          <div className="bg-background/40 p-8 md:p-10 border border-primary/10 rounded-sm backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-primary">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-background/50 border border-border focus:border-primary outline-none px-4 py-3 text-sm transition-all rounded-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-primary">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-background/50 border border-border focus:border-primary outline-none px-4 py-3 text-sm transition-all rounded-sm"
                    placeholder="email@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-primary">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-background/50 border border-border focus:border-primary outline-none px-4 py-3 text-sm transition-all rounded-sm resize-none"
                  placeholder="Contame sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-body font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all shadow-lg shadow-primary/10"
              >
                Enviar Mensaje
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;