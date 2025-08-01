import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { name: "Flutter", level: 95, category: "Framework" },
    { name: "Dart", level: 95, category: "Language" },
    { name: "Flutter Web", level: 85, category: "Framework" },
    { name: "Clean Architecture", level: 90, category: "Architecture" },
    { name: "Bloc", level: 90, category: "State Management" },
    { name: "GetX", level: 85, category: "State Management" },
    { name: "Firebase", level: 90, category: "Backend" },
    { name: "RESTful APIs", level: 90, category: "Integration" },
    { name: "Git/GitHub", level: 85, category: "Version Control" },
    { name: "CI/CD", level: 80, category: "DevOps" }
  ];

  const softSkills = [
    "Team Collaboration",
    "Time Management", 
    "Problem Solving",
    "Strategic Planning",
    "Quick Learning",
    "Leadership",
    "Communication",
    "Adaptability"
  ];

  const tools = [
    "Sendbird SDK",
    "100ms SDK", 
    "MobSF",
    "OAuth",
    "JWT",
    "ChatGPT",
    "Push Notifications",
    "Android Deployment",
    "iOS Deployment"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Abilities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <Card className="p-8 glass hover-scale h-full">
              <h3 className="text-2xl font-semibold mb-8 gradient-text">Technical Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-center justify-between p-4 rounded-lg glass hover:bg-primary/10 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs group-hover:bg-primary/20 transition-colors">
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Soft Skills & Tools */}
          <div className="space-y-8">
            <Card className="p-8 glass hover-scale">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="glass hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-8 glass hover-scale">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Tools & SDKs</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="glass hover:bg-secondary/20 transition-colors"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;