import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="space-y-6">
            <Card className="p-8 glass hover-scale">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                Results-driven Flutter developer with over 4 years of hands-on experience in building 
                scalable, cross-platform mobile applications. Proficient in delivering high-performance, 
                UI-rich, and maintainable code for both B2B and B2C solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Successfully developed and deployed 6+ freelance projects in addition to full-time roles, 
                showcasing adaptability and ownership. Seeking to contribute technical expertise and 
                problem-solving skills to a growth-focused tech company that values innovation, clean 
                architecture, and user-centered design.
              </p>
            </Card>

            <Card className="p-8 glass hover-scale">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Personal Details</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p><span className="text-muted-foreground">Location:</span> Sharjah, UAE</p>
                  <p><span className="text-muted-foreground">Nationality:</span> Indian</p>
                  <p><span className="text-muted-foreground">Languages:</span> English, Hindi, Gujarati</p>
                </div>
                <div className="space-y-2">
                  <p><span className="text-muted-foreground">Date of Birth:</span> October 15, 2001</p>
                  <p><span className="text-muted-foreground">Status:</span> Married</p>
                  <p><span className="text-muted-foreground">Experience:</span> 4+ Years</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Strengths & Stats */}
          <div className="space-y-6">
            <Card className="p-8 glass hover-scale">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Personal Strengths</h3>
              <div className="grid gap-4">
                {[
                  "Strategic Planning",
                  "Quick Learning",
                  "Sincere and Dedicated",
                  "Flexible and Smart Working"
                ].map((strength, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{strength}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 glass hover-scale">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Key Achievements</h3>
              <div className="grid gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">Freelance Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Apps Deployed</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;