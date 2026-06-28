import { Card } from "@/components/ui/card";

const stats = [
  { value: "4+", label: "Years Flutter", color: "text-primary" },
  { value: "100+", label: "Projects Delivered", color: "text-secondary" },
  { value: "15+", label: "Team Members", color: "text-accent" },
  { value: "50+", label: "Industries", color: "text-primary" },
];

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Objective card */}
        <Card className="p-8 glass hover-scale">
          <h3 className="text-xl font-semibold mb-5 text-foreground">
            Who I Am
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Flutter developer with 4+ years of hands-on experience building scalable,
            cross-platform mobile applications — from UI-rich consumer apps to complex B2B
            enterprise solutions. Proficient in clean architecture, state management, and
            end-to-end deployment on both Google Play and the App Store.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond mobile, I founded{" "}
            <a
              href="https://thewebbrew.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              TheWebBrew
            </a>
            {" "}— a full-service web & mobile studio based in Dubai, UAE. We've delivered
            100+ projects across 50+ industries for clients in the UAE and internationally,
            combining custom development, Figma UI/UX, technical SEO, and AI-powered workflows.
          </p>
        </Card>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map(({ value, label, color }) => (
            <Card key={label} className="p-6 glass hover-scale text-center">
              <div className={`text-3xl font-bold ${color} mb-1`}>{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
