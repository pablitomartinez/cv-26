const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-body text-muted-foreground">
          © {currentYear} Alex Chen
        </p>
        
        <nav className="flex items-center gap-6">
          <a 
            href="https://github.com/alexchen" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/alexchen" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
