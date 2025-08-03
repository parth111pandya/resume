import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Download,
  Send,
  Globe,
  Calendar
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+971 52 391 6556",
      href: "tel:+971523916556",
      description: "Available 9 AM - 6 PM GST"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email", 
      value: "ParthPandya1510@gmail.com",
      href: "mailto:ParthPandya1510@gmail.com",
      description: "Response within 24 hours"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Dubai, UAE",
      href: "#",
      description: "Open for remote & on-site work"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "parthpandya1510",
      href: "https://www.linkedin.com/in/parthpandya1510/",
      description: "Professional network & updates"
    }
  ];

  const quickStats = [
    { label: "Response Time", value: "< 24hrs", icon: <Send className="h-4 w-4" /> },
    { label: "Availability", value: "Full-time", icon: <Calendar className="h-4 w-4" /> },
    { label: "Remote Work", value: "Available", icon: <Globe className="h-4 w-4" /> }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to bring your mobile app ideas to life? I'm available for full-time opportunities, 
            freelance projects, and consultations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Stats */}
          <div className="lg:col-span-1">
            <Card className="p-6 glass hover-scale mb-8">
              <h3 className="text-lg font-semibold gradient-text mb-6">Quick Info</h3>
              <div className="space-y-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 glass hover-scale">
              <h3 className="text-lg font-semibold gradient-text mb-4">Download Resume</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Get a detailed overview of my experience, skills, and projects.
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 glow"
                onClick={() => window.open("https://docs.google.com/document/d/1DZXz-zunvtS7_CbNhMCBOfRt6DaBJMj5-9Z6iRY55mM/edit?usp=sharing", "_blank")}
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="p-6 glass hover-scale group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{contact.label}</h4>
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-accent hover:text-accent/80 transition-colors animated-underline block mb-2"
                      >
                        {contact.value}
                      </a>
                      <p className="text-xs text-muted-foreground">{contact.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="p-8 glass hover-scale mt-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold gradient-text mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Whether you need a new mobile app, want to improve an existing one, 
                  or need consultation on Flutter development, I'm here to help.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <Badge variant="outline" className="glass">Flutter Development</Badge>
                  <Badge variant="outline" className="glass">Cross-platform Apps</Badge>
                  <Badge variant="outline" className="glass">UI/UX Implementation</Badge>
                  <Badge variant="outline" className="glass">API Integration</Badge>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 glow pulse-glow"
                    onClick={() => window.open("mailto:ParthPandya1510@gmail.com", "_blank")}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="glass hover:bg-white/10"
                    onClick={() => window.open("https://www.linkedin.com/in/parthpandya1510/", "_blank")}
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;