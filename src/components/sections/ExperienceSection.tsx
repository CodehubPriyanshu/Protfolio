import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, ExternalLink } from "lucide-react";
import { experiences } from "@/data/experienceData";
import React from "react";

const ExperienceSection = () => {
  const items = experiences || [];

  const openLocationInMaps = (location: string) => {
    const encodedLocation = encodeURIComponent(location);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    window.open(mapsUrl, "_blank");
  };

  const openCompanyWebsite = (website?: string) => {
    if (website) {
      window.open(website, "_blank");
    }
  };

  return (
    <section id="experience" className="mobile-section relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-4 w-56 h-56 bg-accent-glow/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="mobile-container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading mb-4">
            <span className="neon-text-glow">Professional Experience</span>
          </h2>
          <p className="mobile-subheading text-muted-foreground">
            Roles and responsibilities
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {items.map((exp, idx) => (
              <div
                key={idx}
                className={`flex justify-center lg:items-start ${idx % 2 === 1 ? 'lg:justify-end' : 'lg:justify-start'}`}
              >
                <Card
                  className="glass-card animate-fade-in-up h-full w-full max-w-md lg:max-w-none"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`bg-gradient-primary rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 flex-shrink-0 flex items-center justify-center overflow-hidden ${
                          exp.iconSize === 'sm'
                            ? 'h-8 w-8'
                            : exp.iconSize === 'lg'
                              ? 'h-12 w-12'
                              : 'h-10 w-10'
                        }`}
                        onClick={() => openCompanyWebsite(exp.companyWebsite)}
                        title={`Visit ${exp.company} website`}
                      >
                        {exp.companyIcon ? (
                          <img
                            src={exp.companyIcon}
                            alt={`${exp.company} Icon`}
                            className="w-full h-full object-contain p-1"
                          />
                        ) : (
                          <Briefcase className="h-6 w-6 text-primary-foreground" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary via-primary to-accent-glow bg-clip-text text-transparent break-words hover:scale-105 transition-transform cursor-pointer">
                          {exp.company}
                        </h3>
                      </div>
                    </div>

                    <CardTitle className="text-xl sm:text-2xl mb-2 hover:neon-text transition-all duration-300">
                      {exp.role}
                    </CardTitle>

                    <div className="flex flex-col gap-2">
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {exp.duration}
                      </div>

                      <div
                        className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-300"
                        onClick={() => openLocationInMaps(exp.location)}
                        title={`View ${exp.location} on Google Maps`}
                      >
                        <MapPin className="h-3 w-3" />
                        <span className="hover:underline">{exp.location}</span>
                        <ExternalLink className="h-3 w-3 opacity-50" />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <ul className="space-y-2 list-disc pl-5">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-muted-foreground"
                        >
                          {item.text}
                          {item.linkText && item.linkUrl && (
                            <>
                              {' '}
                              <a
                                href={item.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline transition-colors duration-300"
                              >
                                {item.linkText}
                              </a>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
