import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-pulse-glow float"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-accent-glow rounded-full animate-pulse-glow float-delayed"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-primary-glow rounded-full animate-pulse-glow float"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-accent rounded-full animate-pulse-glow float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Profile */}
        <div className="text-center lg:text-left animate-slide-in-left">
          <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-primary animate-glow"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <img 
                src={profileImage} 
                alt="Priyanshu - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 mb-6">
            <Button variant="outline" size="icon" className="glass-card hover:shadow-glow">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="glass-card hover:shadow-glow">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="glass-card hover:shadow-glow">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Side - Intro */}
        <div className="space-y-6 animate-slide-in-right">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block neon-text-glow">Priyanshu</span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-muted-foreground space-y-2">
              <p className="animate-fade-in-up">Full Stack Developer</p>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>AI Enthusiast</p>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>& Problem Solver</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Passionate about creating innovative solutions that bridge the gap between 
            cutting-edge technology and real-world problems. Currently pursuing BCA at 
            ITM University while building amazing web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              className="btn-neon text-lg py-6 px-8"
              onClick={() => scrollToSection('projects')}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="glass-card text-lg py-6 px-8 hover:shadow-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Lightning bolt decoration */}
          <div className="absolute -top-10 right-10 opacity-20">
            <div className="w-32 h-32 bg-gradient-accent rounded-lg rotate-45 animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;