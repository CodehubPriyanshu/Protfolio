import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="glass-card">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="glass-card hover:shadow-glow-strong transition-all duration-500 relative overflow-hidden group theme-toggle"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className="relative w-4 h-4">
        {/* Sun icon */}
        <Sun
          className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${
            theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100 text-yellow-500'
              : 'rotate-90 scale-0 opacity-0'
          }`}
        />

        {/* Moon icon */}
        <Moon
          className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${
            theme === 'light'
              ? 'rotate-0 scale-100 opacity-100 text-blue-400'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>

      {/* Enhanced ripple effect on click */}
      <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-active:opacity-30 group-active:animate-ripple transition-opacity duration-300"></div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/20 to-accent-glow/20 blur-sm"></div>
    </Button>
  );
};

export default ThemeToggle;