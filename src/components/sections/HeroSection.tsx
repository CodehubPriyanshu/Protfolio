import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";
import TypingAnimation from "@/components/sections/TypingAnimation";

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
  // Convert your Google Drive link to a direct download link
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=1tmhH55s_D8ZQ1Bf8jJn6nDWLFcUPR-Ak';

  // Create a temporary link element to trigger the file download
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
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg shadow-primary/20 flex items-center justify-center">
              <img
                src={profileImage}
                alt="Priyanshu Kumar - Full Stack Developer"
                className="w-full h-full object-cover mix-blend-lighten scale-105 flex-shrink-0 translate-z-0 aspect-square"
              />
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