import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full glass float opacity-30" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-lg glass float opacity-20" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full glass float opacity-25" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 fade-in-up">
        <div className="mb-8">
          <div className="relative inline-block">
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
              Flutter Developer
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm{" "}
          <span className="gradient-text">Parth Pandya</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Mobile Application Developer with{" "}
          <span className="text-accent font-semibold">4+ years</span> of experience building 
          scalable cross-platform applications with Flutter
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 glow pulse-glow"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="glass hover:bg-white/10"
            onClick={() => scrollToSection("projects")}
          >
            <Github className="mr-2 h-5 w-5" />
            View Projects
          </Button>
        </div>

        {/* Quick Contact */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a 
            href="tel:+971523916556" 
            className="flex items-center gap-2 hover:text-primary transition-colors animated-underline"
          >
            <Phone className="h-4 w-4" />
            +971 52 391 6556
          </a>
          <a 
            href="mailto:ParthPandya1510@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors animated-underline"
          >
            <Mail className="h-4 w-4" />
            ParthPandya1510@gmail.com
          </a>
          <a 
            href="https://www.linkedin.com/in/parthpandya1510/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors animated-underline"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection("about")}
          className="animate-bounce hover:bg-transparent"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;