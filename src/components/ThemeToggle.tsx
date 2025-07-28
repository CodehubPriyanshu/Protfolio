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
      className="glass-card hover:shadow-glow transition-all duration-300 relative overflow-hidden group"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className="relative">
        {theme === 'dark' ? (
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 group-hover:text-yellow-500" />
        ) : (
          <Moon className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 group-hover:text-blue-400" />
        )}
      </div>
      
      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-active:opacity-20 group-active:animate-ripple"></div>
    </Button>
  );
};

export default ThemeToggle;