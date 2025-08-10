import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import TypingAnimation from "@/components/TypingAnimation";

const HeroSection = () => {
  const [showTypingAnimation, setShowTypingAnimation] = useState(true);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);

  useEffect(() => {
    // Check if animation has been played in this session
    const animationPlayed = sessionStorage.getItem('heroAnimationPlayed');
    if (animationPlayed) {
      setShowTypingAnimation(false);
      setHasPlayedAnimation(true);
    }
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // TODO: Upload resume link here
    // Replace the URL below with your actual resume file URL
    const resumeUrl = 'https://drive.google.com/file/d/1nsJrEzuSYbQYySehWSlOvDQTYqs9eyOy/view?usp=drive_link';

    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Priyanshu_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTypingComplete = () => {
    sessionStorage.setItem('heroAnimationPlayed', 'true');
    setHasPlayedAnimation(true);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 lg:pt-0">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating particles - responsive sizes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full animate-pulse-glow float"></div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-32 w-4 h-4 sm:w-6 sm:h-6 bg-accent-glow rounded-full animate-pulse-glow float-delayed"></div>
        <div className="absolute bottom-32 left-8 sm:left-40 w-2 h-2 sm:w-3 sm:h-3 bg-primary-glow rounded-full animate-pulse-glow float"></div>
        <div className="absolute bottom-20 right-4 sm:right-20 w-3 h-3 sm:w-5 sm:h-5 bg-accent rounded-full animate-pulse-glow float-delayed"></div>
      </div>

      <div className="mobile-container mx-auto">
        {/* Mobile-first layout - stack vertically, then side-by-side on larger screens */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
          {/* Profile Section - centered on mobile */}
          <div className="text-center animate-slide-in-left order-1 lg:order-1">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mx-auto mb-6 sm:mb-8">
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary animate-glow"></div>
              <div className="absolute inset-2 rounded-xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Priyanshu Kumar - Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            {/* Social Links - mobile optimized with glow effects */}
            <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button
                variant="outline"
                size="icon"
                className="glass-card hover:shadow-[var(--glow-strong)] hover:border-primary/50 hover:bg-primary/10 active:scale-95 h-10 w-10 sm:h-12 sm:w-12 transition-all duration-300"
                onClick={() => window.open('https://github.com/CodehubPriyanshu', '_blank')}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 hover:text-primary transition-colors duration-300" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="glass-card hover:shadow-[var(--glow-strong)] hover:border-primary/50 hover:bg-primary/10 active:scale-95 h-10 w-10 sm:h-12 sm:w-12 transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/priyanshu-kumar-bca2025/', '_blank')}
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 hover:text-primary transition-colors duration-300" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="glass-card hover:shadow-[var(--glow-strong)] hover:border-primary/50 hover:bg-primary/10 active:scale-95 h-10 w-10 sm:h-12 sm:w-12 transition-all duration-300"
                onClick={() => window.open('mailto:priyanshumails.bca2025@gmail.com', '_blank')}
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 hover:text-primary transition-colors duration-300" />
              </Button>
            </div>
          </div>

          {/* Intro Section - with typing animation or static content */}
          <div className="animate-slide-in-right order-2 lg:order-2">
            {showTypingAnimation && !hasPlayedAnimation ? (
              <TypingAnimation
                onComplete={handleTypingComplete}
                onExploreClick={() => scrollToSection('projects')}
                onDownloadClick={handleDownloadCV}
              />
            ) : (
              <div className="space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <div className="text-lg sm:text-xl text-muted-foreground mb-4">
                    👋 Hi, I'm
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
                    <span className="neon-text-glow">Priyanshu Kumar</span>
                  </h1>
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Passionate about creating innovative solutions that bridge the gap between
                  cutting-edge technology and real-world problems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    className="btn-neon text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8"
                    onClick={() => scrollToSection('projects')}
                  >
                    Explore My Work
                    <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>

                  <Button
                    variant="outline"
                    className="glass-card text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 hover:shadow-glow"
                    onClick={handleDownloadCV}
                  >
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Download CV
                  </Button>
                </div>
              </div>
            )}

            {/* Lightning bolt decoration - hidden on mobile */}
            <div className="absolute -top-10 right-10 opacity-20 hidden lg:block">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-accent rounded-lg rotate-45 animate-pulse-glow"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - responsive positioning */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;