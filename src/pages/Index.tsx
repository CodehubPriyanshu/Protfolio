import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Background grid pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(126, 34, 206, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(126, 34, 206, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-primary py-8 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="text-primary-foreground space-y-4">
            <h3 className="text-2xl font-bold">Priyanshu</h3>
            <p className="text-primary-foreground/80">
              Full Stack Developer & AI Enthusiast
            </p>
            <p className="text-sm text-primary-foreground/60">
              © 2024 Priyanshu. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
        
        {/* Footer background effects */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-4 left-10 w-8 h-8 bg-white rounded-full animate-pulse float"></div>
          <div className="absolute top-12 right-20 w-6 h-6 bg-white rounded-full animate-pulse float-delayed"></div>
          <div className="absolute bottom-8 left-1/3 w-4 h-4 bg-white rounded-full animate-pulse float"></div>
          <div className="absolute bottom-4 right-1/4 w-10 h-10 bg-white rounded-full animate-pulse float-delayed"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
