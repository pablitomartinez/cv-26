import { Mail, Linkedin, Github, ArrowUpRight, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card transition-colors duration-500">
      <div className="container mx-auto px-6">
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-8">Contacto</p>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Columna de Información */}
          <div>
            <h2 className="text-4xl md:text-6xl font-display text-foreground mb-8">
              ¿Tenés un proyecto en mente? <span className="italic">Hablemos.</span>
            </h2>
            
            <p className="text-muted-foreground font-body text-xl mb-12 max-w-md">
             Estoy disponible para posiciones de Frontend Developer (Remoto) y proyectos freelance.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:pablo.emartinez.dev@gmail.com" 
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-body group"
              >
                <div className="p-3 border border-primary/20 rounded-sm group-hover:bg-primary/5">
                  <Mail size={20} />
                </div>
                <span>pablo.emartinez.dev@gmail.com</span>
              </a>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://linkedin.com/in/pablo-emartinez" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all rounded-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/pablo-emartinez" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all rounded-sm"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Columna del Formulario */}
          <div className="bg-background/50 p-8 border border-primary/10 rounded-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-background border border-border focus:border-primary outline-none px-4 py-3 text-sm transition-colors rounded-sm"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-background border border-border focus:border-primary outline-none px-4 py-3 text-sm transition-colors rounded-sm"
                  placeholder="email@ejemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold mb-2">Mensaje</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-background border border-border focus:border-primary outline-none px-4 py-3 text-sm transition-colors rounded-sm resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full group flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-body font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-all"
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