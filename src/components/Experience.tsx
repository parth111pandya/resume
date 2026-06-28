import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  website?: string;
  period: string;
  location: string;
  type: string;
  achievements: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Founder & CEO",
    company: "TheWebBrew",
    website: "https://thewebbrew.com",
    period: "2026 - Present",
    location: "Dubai, UAE",
    type: "Entrepreneurship",
    achievements: [
      "Founded and scaled a full-service web & mobile development studio based in Dubai, UAE",
      "Led a team of 15+ developers, designers, and SEO specialists across 50+ industries",
      "Delivered 100+ projects including custom web apps, e-commerce platforms, landing pages, and mobile apps",
      "Architected AI-powered development workflows using ChatGPT API, GitHub Copilot, Gemini, and Claude AI to accelerate delivery and reduce cost",
      "Built and managed end-to-end service offerings: custom development, Figma UI/UX, technical SEO, and mobile app development",
      "Grew client base across UAE and internationally, achieving UAE's best-value web development pricing"
    ],
    skills: ["Entrepreneurship", "Team Leadership", "Web Development", "Mobile Apps", "AI Integration", "Technical SEO", "Figma UI/UX", "Business Strategy"]
  },
  {
    title: "Flutter Developer",
    company: "Code Drive for Technologies Est",
    period: "Sept 2024 - Present",
    location: "Remote",
    type: "Full-time",
    achievements: [
      "Led a remote Flutter development team in India, overseeing project planning and code reviews",
      "Initiated development of a fitness mobile application with crypto rewards (Fit24 Tokens)",
      "Integrated blockchain and crypto reward mechanisms using secure APIs",
      "Managed end-to-end development: UI/UX, state management, API integration, release cycles",
      "Collaborated with backend, blockchain, and business teams for product alignment"
    ],
    skills: ["Flutter", "Team Leadership", "Blockchain Integration", "Crypto APIs", "Remote Management"]
  },
  {
    title: "Flutter Developer",
    company: "GNWebSoft Pvt. Ltd.",
    period: "June 2022 - June 2025",
    location: "Gujarat, India",
    type: "Full-time",
    achievements: [
      "Designed and implemented custom Flutter widgets and UI components",
      "Integrated RESTful APIs using Flutter's http package for seamless data sync",
      "Optimized application performance using Dart's asynchronous programming",
      "Implemented complex state management using StateSet and Bloc",
      "Created custom animations and transitions for enhanced user engagement",
      "Ensured cross-platform consistency across iOS and Android",
      "Successfully deployed applications to Google Play Store and Apple App Store"
    ],
    skills: ["Flutter", "Dart", "REST APIs", "Bloc", "StateSet", "Animations", "App Deployment"]
  },
  {
    title: "Co-Founder",
    company: "Aky's Café",
    period: "Jan 2020 - Feb 2021",
    location: "Gujarat, India",
    type: "Entrepreneurship",
    achievements: [
      "Developed strategic business plans driving cafe growth from concept to establishment",
      "Led brand identity creation including logo design and social media presence",
      "Managed day-to-day operations, inventory, supplier negotiations, and staff training",
      "Oversaw financial aspects: budgeting, forecasting, expense management",
      "Achieved profitability within the first year of operations",
      "Implemented customer feedback systems and innovative menu offerings"
    ],
    skills: ["Business Strategy", "Brand Development", "Operations Management", "Financial Management"]
  }
];

const AchievementItem = memo(({ text }: { text: string }) => (
  <div className="flex items-start gap-3 p-3 rounded-lg glass hover:bg-primary/5 transition-colors">
    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
    <span className="text-muted-foreground leading-relaxed text-sm">{text}</span>
  </div>
));
AchievementItem.displayName = "AchievementItem";

const ExperienceCard = memo(({ exp }: { exp: Experience }) => (
  <Card className="p-8 glass hover-scale">
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold gradient-text mb-2">{exp.title}</h3>
        <div className="flex items-center gap-2 text-lg font-medium mb-3">
          <Building2 className="h-5 w-5 text-primary" />
          {exp.website ? (
            <a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {exp.company}
            </a>
          ) : (
            exp.company
          )}
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {exp.period}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {exp.location}
          </div>
          <Badge variant="outline" className="glass">
            {exp.type}
          </Badge>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <h4 className="text-lg font-semibold text-accent">Key Achievements:</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {exp.achievements.map((achievement, i) => (
          <AchievementItem key={i} text={achievement} />
        ))}
      </div>

      <div className="pt-4">
        <h5 className="text-sm font-semibold text-foreground mb-3">Technologies & Skills:</h5>
        <div className="flex flex-wrap gap-2">
          {exp.skills.map((skill, i) => (
            <Badge key={i} variant="secondary" className="glass hover:bg-primary/20 transition-colors">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </Card>
));
ExperienceCard.displayName = "ExperienceCard";

const Experience = () => (
  <section id="experience" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
