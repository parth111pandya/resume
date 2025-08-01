import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
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

  return (
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
            <Card key={index} className="p-8 glass hover-scale">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold gradient-text mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-lg font-medium mb-3">
                    <Building2 className="h-5 w-5 text-primary" />
                    {exp.company}
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
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-3 p-3 rounded-lg glass hover:bg-primary/5 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <h5 className="text-sm font-semibold text-foreground mb-3">Technologies & Skills:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="glass hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;