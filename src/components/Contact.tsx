import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section bg-card">
      <div className="container">
        <p className="section-title">Get in Touch</p>
        
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6 text-balance">
            Let's build something together.
          </h2>
          
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
            I'm currently open to new opportunities. Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="mailto:alex.chen@email.com" 
              className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded-md hover:opacity-90 transition-opacity duration-200"
            >
              <Mail size={18} />
              alex.chen@email.com
              <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </a>
            
            <a 
              href="https://linkedin.com/in/alexchen" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 border border-border text-foreground font-body font-medium rounded-md hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
