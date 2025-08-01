import { Button } from "@/components/ui/button";
import { Heart, ArrowUp, Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:ParthPandya1510@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+971523916556", 
      label: "Phone"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/parthpandya1510/",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://parth111pandya.github.io/portfolio/",
      label: "Portfolio"
    }
  ];

  return (
    <footer className="relative bg-surface/80 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-secondary/20 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Parth Pandya</h3>
            <p className="text-muted-foreground mb-4">Flutter Developer</p>
            <p className="text-sm text-muted-foreground max-w-sm">
              Building exceptional mobile experiences with 4+ years of Flutter expertise. 
              Available for exciting opportunities worldwide.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="glass hover:bg-white/10 hover:scale-110 transition-all"
                  onClick={() => window.open(link.href, "_blank")}
                  aria-label={link.label}
                >
                  {link.icon}
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>+971 52 391 6556</p>
              <p>ParthPandya1510@gmail.com</p>
              <p>Sharjah, UAE</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Parth Pandya. Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Available for work</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 glow pulse-glow z-40"
        size="sm"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;