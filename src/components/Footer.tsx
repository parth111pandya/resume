import { useCallback } from "react";
import { ArrowUp, Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

const socialLinks = [
  { icon: <Mail className="h-4 w-4" />,    href: "mailto:ParthPandya1510@gmail.com", label: "Email" },
  { icon: <Phone className="h-4 w-4" />,   href: "tel:+971523916556",                 label: "Phone" },
  { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/in/parthpandya1510/", label: "LinkedIn" },
  { icon: <Github className="h-4 w-4" />,  href: "https://github.com/parth111pandya", label: "GitHub" },
];

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-xl font-bold gradient-text mb-2 block"
            >
              Parth Pandya
            </button>
            <p className="text-sm text-muted-foreground mb-1">Flutter Developer</p>
            <a
              href="https://thewebbrew.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              Founder & CEO, TheWebBrew
              <ExternalLink className="h-3 w-3" />
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Building mobile apps · Running a web studio in Dubai, UAE
            </p>
          </div>

          {/* Social */}
          <div className="md:text-center">
            <p className="text-sm font-medium text-foreground mb-4">Connect</p>
            <div className="flex md:justify-center gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick contact */}
          <div className="md:text-right">
            <p className="text-sm font-medium text-foreground mb-4">Contact</p>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p>+971 52 391 6556</p>
              <p>ParthPandya1510@gmail.com</p>
              <p>Dubai, UAE</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {CURRENT_YEAR} Parth Pandya. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center transition-all glow z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
};

export default Footer;
