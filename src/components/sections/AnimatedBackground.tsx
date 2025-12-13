import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Create initial particles
    const initialParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    setParticles(initialParticles);

    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.vx + 100) % 100,
        y: (particle.y + particle.vy + 100) % 100,
      })));
    };

    const interval = setInterval(animateParticles, 100);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, hsl(var(--accent-glow)) 1px, transparent 1px),
              linear-gradient(45deg, transparent 48%, hsl(var(--primary) / 0.1) 49%, hsl(var(--primary) / 0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, hsl(var(--accent-glow) / 0.1) 49%, hsl(var(--accent-glow) / 0.1) 51%, transparent 52%)
            `,
            backgroundSize: '100px 100px, 150px 150px, 200px 200px, 200px 200px',
            backgroundPosition: '0 0, 50px 50px, 0 0, 0 0',
          }}
        />
      </div>

      {/* Moving particles */}
      <div className="absolute inset-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary/20 dark:bg-primary/30 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-glow/5 dark:bg-accent-glow/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl animate-pulse" />

      {/* Animated tagline */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center pointer-events-none">
        <div className="animate-fade-in-up" style={{ animationDelay: '2s' }}>
          <p className="text-sm sm:text-base lg:text-lg font-medium text-muted-foreground/60 dark:text-muted-foreground/80">
            <span className="inline-block animate-pulse" style={{ animationDelay: '0s' }}>
              Transforming
            </span>
            {' '}
            <span className="inline-block animate-pulse neon-text" style={{ animationDelay: '0.5s' }}>
              Data
            </span>
            {' '}
            <span className="inline-block animate-pulse" style={{ animationDelay: '1s' }}>
              into
            </span>
            {' '}
            <span className="inline-block animate-pulse neon-text" style={{ animationDelay: '1.5s' }}>
              Insight
            </span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '2s' }}>
              ,
            </span>
            {' '}
            <span className="inline-block animate-pulse neon-text" style={{ animationDelay: '2.5s' }}>
              Code
            </span>
            {' '}
            <span className="inline-block animate-pulse" style={{ animationDelay: '3s' }}>
              into
            </span>
            {' '}
            <span className="inline-block animate-pulse neon-text" style={{ animationDelay: '3.5s' }}>
              Impact
            </span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '4s' }}>
              .
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
