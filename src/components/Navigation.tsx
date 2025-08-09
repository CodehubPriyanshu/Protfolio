import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, FileText, Briefcase, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Education', icon: FileText },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
        <div className="glass-card px-6 py-3">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                    : 'hover:bg-muted hover:shadow-glow-secondary'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="glass-card m-4 mb-0 rounded-2xl">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-bold neon-text">Priyanshu Kumar</h1>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="glass-card"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>



      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-20 left-4 right-4 glass-card p-6 rounded-2xl max-h-[80vh] overflow-y-auto">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-nav-item ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium text-lg">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;