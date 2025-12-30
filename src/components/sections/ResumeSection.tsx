import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const ResumeSection = () => {
  const education = [
    {
      level: "Post Graduation",
      course: "Master of Computer Applications (MCA)",
      institution: "Rustamji Institute of Technology",
      location: "Tekanpur Gwalior, Madhya Pradesh",
      year: "2025 - 2027",
      enthusiastic: ["Exploring AI Tools"]
    },
    {
      level: "Graduated",
      course: "Bachelor of Computer Applications (BCA)",
      institution: "ITM University",
      location: "Gwalior, Madhya Pradesh",
      year: "2022 - 2025",
      subjects: ["Software Engineering", "Data Analytics", "Database Management", "Web Development", "AI/ML Fundamentals"]
    },
    {
      level: "Higher Secondary (12th)",
      course: "Commerce",
      institution: "Kendriya Vidyalaya No.3",
      location: "Gwalior, Madhya Pradesh", 
      year: "2021 - 2022",
      subjects: ["Accountancy", "Business Studies", "Economics", "English", "Informatics Practices"]
    },
    // {
    //   level: "Secondary (10th)",
    //   course: "All Subjects",
    //   institution: "Kendriya Vidyalaya No.3 ",
    //   location: "Gwalior, Madhya Pradesh",
    //   year: "2019 - 2020",
    //   subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"]
    // }
  ];

  return (
    <section id="resume" className="mobile-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 sm:top-40 left-4 sm:left-20 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-32 w-56 sm:w-80 h-56 sm:h-80 bg-accent-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="mobile-container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading mb-4">
            <span className="neon-text-glow">Education</span>
          </h2>
          <p className="mobile-subheading text-muted-foreground">Academic journey</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* First two education cards - side by side on mobile and desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Graduation Card */}
            <div className="flex-1">
              <Card
                className="glass-card animate-fade-in-up h-full"
                style={{ animationDelay: '0ms' }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-gradient-primary rounded-full p-2">
                          <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="glass-card text-xs font-semibold"
                        >
                          {education[0].level}
                        </Badge>
                      </div>

                      <CardTitle className="text-xl sm:text-2xl mb-2 hover:neon-text transition-all duration-300">
                        {education[0].course}
                      </CardTitle>

                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base">
                          <span className="font-semibold text-foreground">{education[0].institution}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                            {education[0].location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            {education[0].year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Key Subjects */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm sm:text-base">Enthusiastic to Learning</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {(education[0]?.enthusiastic || []).map((enthusiastic) => (
                        <Badge
                          key={enthusiastic}
                          variant="outline"
                          className="glass-card text-xs hover:shadow-glow-secondary transition-all duration-300"
                        >
                          {enthusiastic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Higher Secondary Card */}
            <div className="flex-1">
              <Card
                className="glass-card animate-fade-in-up h-full"
                style={{ animationDelay: '200ms' }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-gradient-primary rounded-full p-2">
                          <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="glass-card text-xs font-semibold"
                        >
                          {education[1].level}
                        </Badge>
                      </div>

                      <CardTitle className="text-xl sm:text-2xl mb-2 hover:neon-text transition-all duration-300">
                        {education[1].course}
                      </CardTitle>

                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base">
                          <span className="font-semibold text-foreground">{education[1].institution}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                            {education[1].location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            {education[1].year}
                          </div>

                        </div>
                      </div>
                    </div>


                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Key Subjects */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm sm:text-base">Key Subjects</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {education[1].subjects.map((subject) => (
                        <Badge
                          key={subject}
                          variant="outline"
                          className="glass-card text-xs hover:shadow-glow-secondary transition-all duration-300"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Secondary (10th) Card - Centered below */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <Card
                className="glass-card animate-fade-in-up"
                style={{ animationDelay: '400ms' }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-gradient-primary rounded-full p-2">
                          <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="glass-card text-xs font-semibold"
                        >
                          {education[2].level}
                        </Badge>
                      </div>

                      <CardTitle className="text-xl sm:text-2xl mb-2 hover:neon-text transition-all duration-300">
                        {education[2].course}
                      </CardTitle>

                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base">
                          <span className="font-semibold text-foreground">{education[2].institution}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                            {education[2].location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            {education[2].year}
                          </div>

                        </div>
                      </div>
                    </div>


                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Key Subjects */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm sm:text-base">Key Subjects</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {education[2].subjects.map((subject) => (
                        <Badge
                          key={subject}
                          variant="outline"
                          className="glass-card text-xs hover:shadow-glow-secondary transition-all duration-300"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Timeline connector - hidden on mobile */}
        <div className="absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-primary via-accent-glow to-primary opacity-20 transform -translate-x-1/2 hidden xl:block"></div>
      </div>
    </section>
  );
};

export default ResumeSection;