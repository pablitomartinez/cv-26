const About = () => {
  return (
    <section id="about" className="section bg-card">
      <div className="container">
        <p className="section-title">About</p>
        
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7">
            <p className="text-xl md:text-2xl font-display text-foreground leading-relaxed mb-6">
              I'm a frontend developer with 2+ years of experience building web applications that people actually use.
            </p>
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                My focus is on writing clean, maintainable code that bridges design and functionality. I enjoy working in collaborative environments where I can contribute to product decisions while delivering solid implementations.
              </p>
              <p>
                Before development, I studied computer science and spent time understanding user behavior through analytics and research. This background helps me build interfaces that make sense to real users.
              </p>
              <p>
                Currently exploring component architecture patterns and accessibility best practices. Always learning.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-5 md:col-start-9">
            <div className="sticky top-8">
              <p className="text-xs font-body font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Currently
              </p>
              <ul className="space-y-3 text-foreground font-body">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Open to frontend roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Based in San Francisco</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Available for remote work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
