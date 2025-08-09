import { useEffect, useState } from 'react';
import { 
  Github, 
  Code2, 
  Database, 
  Brain, 
  Rocket, 
  Cloud, 
  BarChart3, 
  Cpu, 
  Globe, 
  Zap 
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface FloatingIcon {
  id: number;
  icon: React.ComponentType<any>;
  label: string;
  url: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  delay: number;
}

const FloatingIcons = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const iconData = [
    { icon: Code2, label: "Web Development", url: "https://drive.google.com/file/d/1oDyb51rQZ3xUzBMKRviyoxyP2lVNMF3r/view?usp=drive_link" },
    { icon: Database, label: "Data Analysis", url: "https://drive.google.com/file/d/1x7hjoY9gz1EYDWj0XqWM-TDRM2kFXQr9/view?usp=drive_link" },
    { icon: Brain, label: "AWS", url: "https://drive.google.com/file/d/1kQnnOrvZkkGxS2E4xtCnJDnmgyU9dr74/view?usp=drive_link" },
    { icon: Cloud, label: "Goggle Cloud", url: "https://www.credential.net/8fe11c38-23dc-42d4-b641-fc6ead8195ab" },
    { icon: BarChart3, label: "Data Visualization", url: "https://drive.google.com/file/d/1ggt14QPdL1vfEggtjuX8VlM7gSqKd5Mz/view?usp=drive_link" },
    { icon: Database, label: "MySQL and Satistics", url: "https://drive.google.com/file/d/1ryFzi1DQyh2L5x8ZyTnXGnKG-wFlZgFt/view?usp=drive_link" },
    { icon: Globe, label: "React", url: "https://drive.google.com/file/d/1nF0ICTTIQwTUQdMQU8Fb65vRVklNkfkk/view?usp=drive_link" },
    { icon: Zap, label: "ChatGPT Prompt Engineering for Developers", url: "https://learn.deeplearning.ai/accomplishments/07c2f1f7-7d30-4b96-bfc2-7269af5c273c?usp=sharing" },
  ];

  useEffect(() => {
    setMounted(true);

    // Initialize floating icons with random positions and velocities
    // Avoid center area where profile photo is located (30-70% width, 20-80% height)
    const initialIcons: FloatingIcon[] = iconData.map((data, index) => {
      let x, y;
      do {
        x = Math.random() * 80 + 10; // Keep icons within 10-90% of screen
        y = Math.random() * 80 + 10;
      } while (
        // Avoid profile photo area (center of screen)
        (x > 30 && x < 70 && y > 20 && y < 80)
      );

      return {
        id: index,
        ...data,
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3, // Slower movement
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 8 + 16, // Size between 16-24px
        delay: index * 0.5, // Staggered animation delays
      };
    });

    setIcons(initialIcons);

    // Animate icons
    const animateIcons = () => {
      setIcons(prev => prev.map(icon => {
        let newX = icon.x + icon.vx;
        let newY = icon.y + icon.vy;
        let newVx = icon.vx;
        let newVy = icon.vy;

        // Bounce off edges
        if (newX <= 5 || newX >= 95) {
          newVx = -newVx;
          newX = Math.max(5, Math.min(95, newX));
        }
        if (newY <= 5 || newY >= 95) {
          newVy = -newVy;
          newY = Math.max(5, Math.min(95, newY));
        }

        return {
          ...icon,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
        };
      }));
    };

    const interval = setInterval(animateIcons, 100);

    // Handle scroll to hide icons when not on home screen
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isHeroVisible = rect.bottom > 100; // Show icons when hero section is mostly visible
        setIsVisible(isHeroVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleIconClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!mounted || !isVisible) return null;

  return (
    <TooltipProvider>
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden transition-opacity duration-500">
        {icons.map((icon) => {
          const IconComponent = icon.icon;
          return (
            <Tooltip key={icon.id}>
              <TooltipTrigger asChild>
                <div
                  className="absolute pointer-events-auto cursor-pointer floating-icon"
                  style={{
                    left: `${icon.x}%`,
                    top: `${icon.y}%`,
                    animationDelay: `${icon.delay}s`,
                  }}
                  onClick={() => handleIconClick(icon.url)}
                >
                  <div className="floating-icon-wrapper group">
                    <IconComponent 
                      size={icon.size}
                      className="floating-icon-svg transition-all duration-300 group-hover:scale-125 group-active:scale-95"
                    />
                    <div className="floating-icon-glow" />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent 
                side="top" 
                className="glass-card text-xs font-medium"
                sideOffset={8}
              >
                {icon.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default FloatingIcons;
