import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Download, Send, Globe, Calendar } from "lucide-react";

const RESUME_URL =
  "https://docs.google.com/document/d/1DZXz-zunvtS7_CbNhMCBOfRt6DaBJMj5-9Z6iRY55mM/edit?usp=sharing";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  description: string;
}

const contactInfo: ContactItem[] = [
  {
    icon: <Phone className="h-4 w-4" />,
    label: "Phone",
    value: "+971 52 391 6556",
    href: "tel:+971523916556",
    description: "Available 9 AM – 6 PM GST",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    label: "Email",
    value: "ParthPandya1510@gmail.com",
    href: "mailto:ParthPandya1510@gmail.com",
    description: "Reply within 24 hours",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    label: "Location",
    value: "Dubai, UAE",
    href: "#",
    description: "Open to remote & on-site",
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    label: "LinkedIn",
    value: "parthpandya1510",
    href: "https://www.linkedin.com/in/parthpandya1510/",
    description: "Professional network & updates",
  },
];

const quickStats = [
  { label: "Response Time", value: "< 24 hrs",   icon: <Send className="h-4 w-4" /> },
  { label: "Availability",  value: "Full-time",  icon: <Calendar className="h-4 w-4" /> },
  { label: "Remote Work",   value: "Available",  icon: <Globe className="h-4 w-4" /> },
];

const ContactCard = memo(({ contact }: { contact: ContactItem }) => (
  <Card className="p-6 glass hover-scale group">
    <div className="flex items-start gap-4">
      <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
        {contact.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-foreground mb-1">{contact.label}</h4>
        <a
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : undefined}
          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-primary hover:text-primary/80 transition-colors animated-underline block mb-1 text-sm font-medium truncate"
        >
          {contact.value}
        </a>
        <p className="text-xs text-muted-foreground">{contact.description}</p>
      </div>
    </div>
  </Card>
));
ContactCard.displayName = "ContactCard";

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mt-4 mb-6 text-base">
          Available for full-time Flutter roles, freelance projects, and TheWebBrew collaborations.
        </p>
        <div className="section-divider" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left column: quick info + resume */}
        <div className="space-y-5">
          <Card className="p-6 glass">
            <h3 className="text-sm font-semibold text-foreground mb-5">Quick Info</h3>
            <div className="space-y-4">
              {quickStats.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">{s.icon}</div>
                  <div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                    <div className="text-sm font-medium">{s.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 glass">
            <h3 className="text-sm font-semibold text-foreground mb-2">Resume</h3>
            <p className="text-xs text-muted-foreground mb-5">
              Full overview of experience, skills, and projects.
            </p>
            <Button
              className="w-full bg-primary hover:bg-primary/90 glow"
              onClick={() => window.open(RESUME_URL, "_blank")}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </Card>
        </div>

        {/* Right column: contact cards + CTA */}
        <div className="lg:col-span-2 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            {contactInfo.map((c, i) => (
              <ContactCard key={i} contact={c} />
            ))}
          </div>

          <Card className="p-8 glass text-center">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Ready to build something great?
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
              Flutter development, cross-platform apps, web projects via TheWebBrew, or just a
              conversation — I'm open to it all.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["Flutter Development", "Cross-platform Apps", "UI/UX Implementation", "API Integration", "Web Projects"].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 pulse-glow"
                onClick={() => window.open("mailto:ParthPandya1510@gmail.com")}
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary/50 hover:bg-primary/5"
                onClick={() => window.open("https://www.linkedin.com/in/parthpandya1510/", "_blank")}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
