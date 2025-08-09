import { useEffect, useState } from 'react';
import {
  Code2,
  Database,
  Brain,
  Rocket,
  Cloud,
  BarChart3,
  Cpu,
  Globe,
  Zap,
  Palette
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
    { icon: Cloud, label: "Google Cloud", url: "https://www.credential.net/8fe11c38-23dc-42d4-b641-fc6ead8195ab" },
    { icon: BarChart3, label: "Data Visualization", url: "https://drive.google.com/file/d/1ggt14QPdL1vfEggtjuX8VlM7gSqKd5Mz/view?usp=drive_link" },
    { icon: Database, label: "MySQL and Statistics", url: "https://drive.google.com/file/d/1ryFzi1DQyh2L5x8ZyTnXGnKG-wFlZgFt/view?usp=drive_link" },
    { icon: Globe, label: "React", url: "https://drive.google.com/file/d/1nF0ICTTIQwTUQdMQU8Fb65vRVklNkfkk/view?usp=drive_link" },
    { icon: Zap, label: "Prompt Engineering", url: "https://learn.deeplearning.ai/accomplishments/07c2f1f7-7d30-4b96-bfc2-7269af5c273c?usp=sharing" },
    { icon: Cpu, label: "AI & Machine Learning", url: "https://github.com/CodehubPriyanshu" },
    { icon: Palette, label: "UI/UX Design", url: "https://github.com/CodehubPriyanshu" },
  ];

  useEffect(() => {
    setMounted(true);

    // Initialize floating icons with improved positioning
    // Avoid center area where profile photo is located and ensure better distribution
    const initialIcons: FloatingIcon[] = iconData.map((data, index) => {
      let x, y;
      let attempts = 0;

      do {
        // Create zones for better distribution
        const zone = index % 4;
        switch (zone) {
          case 0: // Top-left
            x = Math.random() * 25 + 5; // 5-30%
            y = Math.random() * 30 + 5; // 5-35%
            break;
          case 1: // Top-right
            x = Math.random() * 25 + 70; // 70-95%
            y = Math.random() * 30 + 5; // 5-35%
            break;
          case 2: // Bottom-left
            x = Math.random() * 25 + 5; // 5-30%
            y = Math.random() * 30 + 65; // 65-95%
            break;
          case 3: // Bottom-right
            x = Math.random() * 25 + 70; // 70-95%
            y = Math.random() * 30 + 65; // 65-95%
            break;
          default:
            x = Math.random() * 20 + 5; // Fallback
            y = Math.random() * 20 + 5;
        }
        attempts++;
      } while (
        // Avoid center area (profile photo and main content)
        (x > 25 && x < 75 && y > 15 && y < 85) && attempts < 10
      );

      return {
        id: index,
        ...data,
        x,
        y,
        vx: (Math.random() - 0.5) * 0.2, // Slower, more gentle movement
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 6 + 18, // Size between 18-24px
        delay: index * 0.3, // Staggered animation delays
      };
    });

    setIcons(initialIcons);

    // Enhanced animation with smoother movement
    const animateIcons = () => {
      setIcons(prev => prev.map(icon => {
        let newX = icon.x + icon.vx;
        let newY = icon.y + icon.vy;
        let newVx = icon.vx;
        let newVy = icon.vy;

        // Smooth bounce off edges with damping
        if (newX <= 2 || newX >= 98) {
          newVx = -newVx * 0.8; // Add damping for more natural movement
          newX = Math.max(2, Math.min(98, newX));
        }
        if (newY <= 2 || newY >= 98) {
          newVy = -newVy * 0.8; // Add damping for more natural movement
          newY = Math.max(2, Math.min(98, newY));
        }

        // Add slight random variation to prevent predictable patterns
        newVx += (Math.random() - 0.5) * 0.02;
        newVy += (Math.random() - 0.5) * 0.02;

        // Limit velocity to prevent too fast movement
        newVx = Math.max(-0.3, Math.min(0.3, newVx));
        newVy = Math.max(-0.3, Math.min(0.3, newVy));

        return {
          ...icon,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
        };
      }));
    };

    const interval = setInterval(animateIcons, 80); // Slightly faster updates for smoother animation

    // Enhanced scroll-based visibility control
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));

        // Fade out icons as user scrolls past hero section
        const isHeroVisible = rect.bottom > 50; // Show icons when hero section is visible
        setIsVisible(isHeroVisible);
      }
    };

    // Throttle scroll events for better performance
    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
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
