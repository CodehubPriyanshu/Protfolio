import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
          <div className="flex justify-center lg:grid lg:grid-cols-2 lg:gap-8">
            {items.map((exp, idx) => (
              <Card
                key={idx}
                className="glass-card animate-fade-in-up h-full w-full max-w-md lg:max-w-none"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="bg-gradient-primary rounded-full p-2 cursor-pointer hover:scale-110 transition-transform duration-300"
                      onClick={() => openCompanyWebsite(exp.companyWebsite)}
                      title={`Visit ${exp.company} website`}
                    >
                      <Briefcase className="h-4 w-4 text-primary-foreground" />
                    </div>

                    <Badge variant="secondary" className="glass-card text-xs font-semibold">
                      {exp.company}
                    </Badge>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
