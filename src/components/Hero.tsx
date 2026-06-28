import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle radial glow in background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(217 90% 67% / 0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 fade-in-up">

        {/* Role badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="tag">Flutter Developer</span>
          <span className="text-muted-foreground text-sm">·</span>
          <a
            href="https://thewebbrew.com"
            target="_blank"
            rel="noopener noreferrer"
            className="tag hover:no-underline flex items-center gap-1.5"
          >
            Founder & CEO, TheWebBrew
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-5 tracking-tight">
          Parth{" "}
          <span className="gradient-text">Pandya</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Building cross-platform mobile apps with Flutter · Running{" "}
          <a
            href="https://thewebbrew.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            TheWebBrew
          </a>
          , UAE's web & mobile studio with{" "}
          <span className="text-foreground font-medium">100+ projects delivered</span>
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
          {[
            { value: "4+", label: "Years Flutter" },
            { value: "100+", label: "Projects Shipped" },
            { value: "50+", label: "Industries Served" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-foreground">{value}</div>
              <div className="text-muted-foreground mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 pulse-glow"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:border-primary/50 hover:bg-primary/5"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
        </div>

        {/* Quick contact links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a
            href="tel:+971523916556"
            className="flex items-center gap-2 hover:text-foreground transition-colors animated-underline"
          >
            <Phone className="h-3.5 w-3.5" />
            +971 52 391 6556
          </a>
          <a
            href="mailto:ParthPandya1510@gmail.com"
            className="flex items-center gap-2 hover:text-foreground transition-colors animated-underline"
          >
            <Mail className="h-3.5 w-3.5" />
            ParthPandya1510@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/parthpandya1510/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors animated-underline"
          >
            <Linkedin className="h-3.5 w-3.5" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
