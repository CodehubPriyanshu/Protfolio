import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, FileText, Briefcase, Mail, Building2 } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Education', icon: FileText },
    { id: 'experience', label: 'Professional Experience', icon: Building2 },
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

    // Announce navigation to screen readers
    const announcement = `Navigated to ${navItems.find(item => item.id === sectionId)?.label} section`;
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.textContent = announcement;
    document.body.appendChild(announcer);
    setTimeout(() => document.body.removeChild(announcer), 1000);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="glass-card px-6 py-3">
          <div className="flex items-center gap-6" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                    : 'hover:bg-muted hover:shadow-glow-secondary'
                }`}
                role="menuitem"
                aria-label={`Navigate to ${item.label} section`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }
                }}
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden" role="banner">
        <div className="glass-card m-4 mb-0 rounded-2xl">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-bold neon-text">Priyanshu</h1>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="glass-card"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation-menu"
                tabIndex={0}
              >
                {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              </Button>
            </div>
          </div>
        </div>
      </header>



      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-labelledby="mobile-nav-title">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          />
          <nav
            id="mobile-navigation-menu"
            className="absolute top-20 left-4 right-4 glass-card p-6 rounded-2xl max-h-[80vh] overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <h2 id="mobile-nav-title" className="sr-only">Navigation Menu</h2>
            <div className="space-y-2" role="menu">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-nav-item ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                  role="menuitem"
                  aria-label={`Navigate to ${item.label} section`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      scrollToSection(item.id);
                    } else if (e.key === 'Escape') {
                      setIsOpen(false);
                    }
                  }}
                >
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                  <span className="font-medium text-lg">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;