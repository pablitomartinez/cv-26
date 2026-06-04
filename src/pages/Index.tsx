import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
import ClientMarquee from "@/components/ClientMarquee";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* <ClientMarquee /> */}
        <About />
        <Skills />
        {/* <LogoCarousel /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
