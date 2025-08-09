import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Building2, ExternalLink } from "lucide-react";
import { experiences } from "@/data/experienceData";

const ExperienceSection = () => {
  const items = experiences || [];

  const handleCompanyClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="experience" className="mobile-section relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 w-56 h-56 bg-accent-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="mobile-container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading mb-4">
            <span className="neon-text-glow">Professional Experience</span>
          </h2>
          <p className="mobile-subheading text-muted-foreground">Roles and responsibilities</p>
        </div>

        {/* Mobile-optimized grid: 1 column on mobile, 2 on desktop */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {items.map((exp, idx) => (
            <Card key={idx} className="glass-card animate-fade-in-up h-full" style={{ animationDelay: `${idx * 100}ms` }}>
              <CardHeader className="pb-4 p-4 sm:p-6">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-primary rounded-full p-2">
                      <Briefcase className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <Badge variant="secondary" className="glass-card text-xs font-semibold">{exp.company}</Badge>
                  </div>

                  {/* Company Website Link with Icon */}
                  {exp.companyUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-card hover:shadow-glow active:scale-95 p-2"
                      onClick={() => handleCompanyClick(exp.companyUrl!)}
                      aria-label={`Visit ${exp.company} website`}
                      tabIndex={0}
                    >
                      <Building2 className="h-4 w-4 mr-1" />
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  )}
                </div>

                <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-2 hover:neon-text transition-all duration-300 line-clamp-2">
                  {exp.role}
                </CardTitle>
                <div className="text-xs sm:text-sm text-muted-foreground">{exp.duration}</div>
              </CardHeader>

              <CardContent className="space-y-3 p-4 sm:p-6 pt-0">
                <ul className="space-y-2 list-disc pl-5">
                  {(exp.responsibilities || []).map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
