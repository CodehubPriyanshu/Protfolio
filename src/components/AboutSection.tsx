import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Brain, Server } from "lucide-react";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Python", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScripts", icon: Code, color: "from-green-500 to-blue-500" },
    { name: "Vibe Coding", icon: Globe, color: "from-indigo-500 to-purple-500" },
    { name: "Node.js", icon: Server, color: "from-red-500 to-pink-500" },
    { name: "MongoDB", icon: Database, color: "from-yellow-500 to-orange-500" },
    { name: "MySQL", icon: Server, color: "from-green-600 to-green-400" },
    { name: "Web Devlopment", icon: Database, color: "from-green-500 to-teal-500" },
    { name: "Data Analysis", icon: Brain, color: "from-indigo-500 to-purple-500" },
    { name: "Docker", icon: Code, color: "from-blue-600 to-blue-400" },
    { name: "AI/ML", icon: Globe, color: "from-cyan-500 to-blue-500" },
  ];

  return (
    <section id="about" className="mobile-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-bg-secondary opacity-5"></div>
      
      <div className="mobile-container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading mb-4">
            <span className="neon-text-glow">About Me</span>
          </h2>
          <p className="mobile-subheading text-muted-foreground">Passionate developer with a love for innovation</p>
        </div>

        {/* Mobile-first layout: Stack vertically, then side-by-side */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Skills Section - glowing cards grid */}
          <div className="w-full space-y-6 animate-slide-in-left order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 neon-text text-center lg:text-left">Technical Skills</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass-card p-3 sm:p-4 flex flex-col items-center text-center hover:shadow-[var(--glow-strong)] hover:border-primary/50 transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${skill.color} mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="font-medium text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio Section - centered circular image on mobile */}
          <div className="w-full animate-slide-in-right order-1 lg:order-2">
            <Card className="glass-card p-6 sm:p-8 space-y-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-primary p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-2xl sm:text-4xl font-bold neon-text">P</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold neon-text">Priyanshu Kumar</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Full Stack Developer | Data Analysis</p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>
                  I'm a passionate BCA student at ITM University with a deep love for technology 
                  and innovation. My journey in programming started with curiosity and has evolved 
                  into a commitment to creating impactful digital solutions.
                </p>
                
                <p>
                  With expertise in modern web technologies like React, Python, and Flask, 
                  I enjoy building applications that solve real-world problems. I'm particularly 
                  interested in AI/ML and how it can enhance user experiences.
                </p>
                
                <p className="hidden sm:block">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold neon-text">20+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold neon-text">1+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;