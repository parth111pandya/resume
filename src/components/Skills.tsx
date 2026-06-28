import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  category: string;
}

const technicalSkills: Skill[] = [
  { name: "Flutter", category: "Framework" },
  { name: "Dart", category: "Language" },
  { name: "Flutter Web", category: "Framework" },
  { name: "Clean Architecture", category: "Architecture" },
  { name: "Bloc / GetX", category: "State Mgmt" },
  { name: "Firebase", category: "Backend" },
  { name: "RESTful APIs", category: "Integration" },
  { name: "Git / GitHub", category: "Version Control" },
  { name: "CI/CD", category: "DevOps" },
  { name: "React / Next.js", category: "Web" },
  { name: "Technical SEO", category: "Growth" },
  { name: "AI Integration", category: "AI" },
];

const softSkills: string[] = [
  "Team Leadership",
  "Strategic Planning",
  "Problem Solving",
  "Time Management",
  "Quick Learning",
  "Communication",
  "Adaptability",
  "Entrepreneurship",
];

const tools: string[] = [
  "Sendbird SDK",
  "100ms SDK",
  "MobSF",
  "OAuth / JWT",
  "ChatGPT API",
  "GitHub Copilot",
  "Figma",
  "Push Notifications",
  "Android Deployment",
  "iOS Deployment",
];

const SkillItem = memo(({ skill }: { skill: Skill }) => (
  <div className="flex items-center justify-between px-4 py-3 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group">
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
      <span className="font-medium text-sm">{skill.name}</span>
    </div>
    <Badge variant="secondary" className="text-xs font-normal opacity-70 group-hover:opacity-100 transition-opacity">
      {skill.category}
    </Badge>
  </div>
));
SkillItem.displayName = "SkillItem";

const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-surface/40">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Technical Skills */}
        <div className="lg:col-span-2">
          <Card className="p-8 glass h-full">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {technicalSkills.map((skill, i) => (
                <SkillItem key={i} skill={skill} />
              ))}
            </div>
          </Card>
        </div>

        {/* Soft Skills & Tools */}
        <div className="space-y-6">
          <Card className="p-8 glass">
            <h3 className="text-lg font-semibold mb-5 text-foreground">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, i) => (
                <span key={i} className="tag">{skill}</span>
              ))}
            </div>
          </Card>

          <Card className="p-8 glass">
            <h3 className="text-lg font-semibold mb-5 text-foreground">Tools & SDKs</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span key={i} className="tag">{tool}</span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
