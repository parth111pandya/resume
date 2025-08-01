import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Users, Zap, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "WellnessHub - Telemedicine App",
      description: "Complete telemedicine platform enabling patients to book appointments for both physical hospital visits and online consultations with doctors.",
      icon: <Smartphone className="h-8 w-8" />,
      features: [
        "Real-time chat using Sendbird SDK",
        "Virtual consultation rooms with 100ms SDK", 
        "Doctor availability & scheduling system",
        "Patient profile & health records management",
        "Push notification system"
      ],
      technologies: ["Flutter", "Sendbird SDK", "100ms SDK", "Firebase", "REST APIs"],
      category: "Healthcare"
    },
    {
      title: "Data Monitor - Retail Analytics",
      description: "Real-time sales and purchase reporting app for Poojara Telecom - Gujarat's #1 mobile retailer with operations across 3 states.",
      icon: <Users className="h-8 w-8" />,
      features: [
        "Live sales & purchase reports across regions",
        "WebView-based dashboard integration",
        "Real-time team chat with Sendbird SDK",
        "Role-based access for employees and managers",
        "Cross-platform Android & iOS support"
      ],
      technologies: ["Flutter", "WebView", "Sendbird SDK", "Real-time Analytics"],
      category: "Retail"
    },
    {
      title: "Fitness App with Crypto Rewards",
      description: "Innovative fitness application where users earn Fit24 Tokens (cryptocurrency) based on their physical activity and workout achievements.",
      icon: <Zap className="h-8 w-8" />,
      features: [
        "Activity tracking & fitness monitoring",
        "Blockchain integration for crypto rewards",
        "Secure wallet system integration",
        "Real-time token earning mechanism",
        "Team leadership & remote development"
      ],
      technologies: ["Flutter", "Blockchain APIs", "Crypto Integration", "Secure APIs"],
      category: "Fitness"
    },
    {
      title: "AGRI ENERGY - Lease Management",
      description: "Comprehensive lease management application for energy sector clients to manage lease information, rent reviews, and payment tracking.",
      icon: <Shield className="h-8 w-8" />,
      features: [
        "Detailed lease information management",
        "Rent reviews and market-based adjustments",
        "Ticket submission and support system",
        "Payment due date tracking",
        "Profile and security management"
      ],
      technologies: ["Flutter", "Payment Integration", "Document Management"],
      category: "Energy"
    },
    {
      title: "PMP Transport - Driver Management",
      description: "Streamlined driver management system allowing gas bill submission with location tracking for transport company operations.",
      icon: <Smartphone className="h-8 w-8" />,
      features: [
        "Gas bill submission system",
        "Automatic location recording",
        "Real-time admin notifications",
        "Driver profile management",
        "Expense tracking and reimbursement"
      ],
      technologies: ["Flutter", "Location Services", "File Upload", "Admin Dashboard"],
      category: "Transport"
    },
    {
      title: "IoT Lab Management System",
      description: "Centralized control and monitoring system for university IoT lab devices, published on Google Play Store.",
      icon: <Zap className="h-8 w-8" />,
      features: [
        "Remote device control and management",
        "Real-time monitoring and status updates",
        "Customizable automation rules",
        "Energy optimization scheduling",
        "Multi-device synchronization"
      ],
      technologies: ["Flutter", "IoT Integration", "Real-time Monitoring", "Automation"],
      category: "IoT"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Healthcare: "bg-green-500/20 text-green-400",
      Retail: "bg-blue-500/20 text-blue-400", 
      Fitness: "bg-orange-500/20 text-orange-400",
      Energy: "bg-yellow-500/20 text-yellow-400",
      Transport: "bg-purple-500/20 text-purple-400",
      IoT: "bg-cyan-500/20 text-cyan-400"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <section id="projects" className="py-20 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Showcasing 6+ mobile applications across various industries, 
            from healthcare and fitness to IoT and enterprise solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 glass hover-scale group">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold gradient-text">{project.title}</h3>
                    <Badge className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-accent mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="glass hover:bg-primary/10 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="glass hover:bg-white/10">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more projects or discussing a collaboration?
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 glow"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;