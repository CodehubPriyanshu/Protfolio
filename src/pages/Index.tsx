import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import AnimatedBackground from "@/components/sections/AnimatedBackground";
import FloatingIcons from "@/components/sections/FloatingIcons";
import PersistentResumeIcon from "@/components/sections/FloatingResumeUpload";
import PopupNotification from "@/components/sections/PopupNotification";
import ErrorBoundary from "@/components/sections/ErrorBoundary";

const Index = () => {
  return (
    <div className="min-h-screen bg-background no-overflow">
      {/* Enhanced Animated Background */}
      <AnimatedBackground />

      {/* Floating Icons System */}
      <FloatingIcons />

      {/* Persistent Resume Icon */}
      <PersistentResumeIcon />

      {/* Popup Notification - appears 7 seconds after page load */}
      <PopupNotification />

      <Navigation />

      <main className="relative z-10">
        <ErrorBoundary>
          <HeroSection />
          <AboutSection />
          <ResumeSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </ErrorBoundary>
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 relative overflow-hidden border-t-2 border-white/20">
        <div className="container mx-auto px-6 text-center">
          <div className="text-white space-y-4">
            <p className="text-lg sm:text-xl font-medium">
              Transforming data into insight, code into impact
            </p>
            <p className="text-sm sm:text-base font-medium">
              © 2025 built by Priyanshu Kumar
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
