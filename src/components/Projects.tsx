import { memo, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, BarChart2, Zap, Shield, Globe } from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  technologies: string[];
  category: string;
  link?: string;
}

const categoryColors: Record<string, string> = {
  Healthcare:  "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Retail:      "bg-blue-500/10   text-blue-400   border-blue-500/20",
  Fitness:     "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Energy:      "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Transport:   "bg-violet-500/10 text-violet-400 border-violet-500/20",
  IoT:         "bg-cyan-500/10   text-cyan-400   border-cyan-500/20",
  Web:         "bg-pink-500/10   text-pink-400   border-pink-500/20",
  Logistics:   "bg-sky-500/10    text-sky-400    border-sky-500/20",
};

const projects: Project[] = [
  {
    title: "WellnessHub — Telemedicine App",
    description:
      "Complete telemedicine platform enabling patients to book appointments for physical visits and online consultations with doctors.",
    icon: <Smartphone className="h-6 w-6" />,
    features: [
      "Real-time chat with Sendbird SDK",
      "Virtual consultation rooms via 100ms SDK",
      "Doctor availability & scheduling",
      "Patient health records management",
      "Push notification system",
    ],
    technologies: ["Flutter", "Sendbird SDK", "100ms SDK", "Firebase", "REST APIs"],
    category: "Healthcare",
  },
  {
    title: "Data Monitor — Retail Analytics",
    description:
      "Real-time sales and purchase reporting app for Poojara Telecom — Gujarat's #1 mobile retailer operating across 3 states.",
    icon: <BarChart2 className="h-6 w-6" />,
    features: [
      "Live sales & purchase reports across regions",
      "WebView-based dashboard integration",
      "Real-time team chat with Sendbird SDK",
      "Role-based access for staff and managers",
      "Cross-platform iOS & Android",
    ],
    technologies: ["Flutter", "WebView", "Sendbird SDK", "Real-time Analytics"],
    category: "Retail",
    link: "https://play.google.com/store/apps/details?id=com.monitor.poojara.vr4c",
  },
  {
    title: "Fitness App with Crypto Rewards",
    description:
      "Fitness application where users earn Fit24 Tokens (cryptocurrency) based on physical activity and workout achievements.",
    icon: <Zap className="h-6 w-6" />,
    features: [
      "Activity tracking & fitness monitoring",
      "Blockchain integration for crypto rewards",
      "Secure wallet system integration",
      "Real-time token earning mechanism",
      "Remote team leadership",
    ],
    technologies: ["Flutter", "Blockchain APIs", "Crypto Integration", "Secure APIs"],
    category: "Fitness",
  },
  {
    title: "AGRI ENERGY — Lease Management",
    description:
      "Comprehensive lease management app for energy sector clients to manage lease info, rent reviews, and payment tracking.",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "Detailed lease information management",
      "Rent reviews and market-based adjustments",
      "Ticket submission and support system",
      "Payment due date tracking",
      "Profile and security management",
    ],
    technologies: ["Flutter", "Payment Integration", "Document Management"],
    category: "Energy",
  },
  {
    title: "Aurum Events & Weddings",
    description:
      "Luxury wedding and events website for a Dubai-based planning studio — covering intimate desert elopements to royal palace ceremonies.",
    icon: <Globe className="h-6 w-6" />,
    features: [
      "Wedding gallery & service showcase",
      "Booking experience across UAE & destinations",
      "Figma UI/UX custom design",
      "High-performance Next.js build",
      "SEO-optimised for UAE luxury market",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Figma", "Technical SEO"],
    category: "Web",
    link: "https://aurum.thewebbrew.com",
  },
  {
    title: "NexLog — Logistics Platform",
    description:
      "Premium logistics and freight website for a UAE-based partner with direct access to Jebel Ali Port and Dubai World Central.",
    icon: <Globe className="h-6 w-6" />,
    features: [
      "Shipment tracking integration",
      "Service showcase & quote generation",
      "Network coverage across 120+ countries",
      "Conversion-optimised landing pages",
      "Technical SEO & speed optimisation",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Figma", "Technical SEO"],
    category: "Logistics",
    link: "https://nexlog.thewebbrew.com",
  },
  {
    title: "PMP Transport — Driver Management",
    description:
      "Streamlined driver management system for gas bill submission with automatic location tracking for transport operations.",
    icon: <Smartphone className="h-6 w-6" />,
    features: [
      "Gas bill submission system",
      "Automatic location recording",
      "Real-time admin notifications",
      "Driver profile management",
      "Expense tracking & reimbursement",
    ],
    technologies: ["Flutter", "Location Services", "File Upload", "Admin Dashboard"],
    category: "Transport",
  },
  {
    title: "IoT Lab Management System",
    description:
      "Centralised control and monitoring system for university IoT lab devices, published on Google Play Store.",
    icon: <Zap className="h-6 w-6" />,
    features: [
      "Remote device control and management",
      "Real-time monitoring & status updates",
      "Customisable automation rules",
      "Energy optimisation scheduling",
      "Multi-device synchronisation",
    ],
    technologies: ["Flutter", "IoT Integration", "Real-time Monitoring", "Automation"],
    category: "IoT",
  },
];

const ProjectCard = memo(({ project }: { project: Project }) => {
  const colorClass = categoryColors[project.category] ?? "bg-muted text-muted-foreground border-border";

  return (
    <Card className="p-7 glass hover-scale flex flex-col group">
      <div className="flex items-start gap-4 mb-5">
        <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
          {project.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-semibold text-foreground leading-snug">{project.title}</h3>
            <Badge className={`text-xs shrink-0 border ${colorClass}`} variant="outline">
              {project.category}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        </div>
      </div>

      <div className="space-y-5 flex-1">
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Key Features</h4>
          <ul className="space-y-1.5">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t, i) => (
              <span key={i} className="tag text-xs">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {project.link && (
        <div className="mt-5 pt-5 border-t border-border">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View Live
          </a>
        </div>
      )}
    </Card>
  );
});
ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-surface/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 mb-6 text-base">
            Mobile apps and web builds across healthcare, retail, fitness, logistics, and more.
          </p>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-5 text-sm">
            Interested in collaborating or want to see more?
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 glow"
            onClick={scrollToContact}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
