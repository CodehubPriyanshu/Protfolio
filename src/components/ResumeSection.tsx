import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const ResumeSection = () => {
  const education = [
    {
      level: "Graduated",
      course: "Bachelor of Computer Applications (BCA)",
      institution: "ITM University",
      location: "Gwalior, Madhya Pradesh",
      year: "2022 - 2025",
      grade: "8.5 CGPA",
      achievements: [
        "Dean's List for Academic Excellence",
        "Winner - University Coding Competition 2023",
        "Active member of Programming Club"
      ],
      subjects: ["Data Structures & Algorithms", "Software Engineering", "Database Management", "Web Development", "AI/ML Fundamentals"]
    },
    {
      level: "Higher Secondary (12th)",
      course: "Science Stream (PCM)",
      institution: "Kendriya Vidyalaya No.3",
      location: "Gwalior, Madhya Pradesh", 
      year: "2021 - 2022",
      board: "CBSE",
      achievements: [
        "School Topper in Computer Science",
        "Merit Certificate for Outstanding Performance"
      ],
      subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"]
    },
    {
      level: "Secondary (10th)",
      course: "All Subjects",
      institution: "Kendriya Vidyalaya No.3 ",
      location: "Gwalior, Madhya Pradesh",
      year: "2019 - 2020",
      board: "CBSE",
      achievements: [
        "School Rank 2",
        "Perfect Score in Mathematics",
        "Certificate of Excellence"
      ],
      subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"]
    }
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
          <p className="mobile-subheading text-muted-foreground">Academic journey and achievements</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* First two education cards - side by side on desktop, stacked on mobile */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Graduation Card - Left on desktop */}
            <div className="flex-1 lg:max-w-[48%]">
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
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{education[0].year}</span>
                            <span className="mx-2">•</span>
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{education[0].location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold neon-text mb-1">{education[0].grade}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Grade</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold mb-3 text-sm sm:text-base">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {education[0].achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Subjects */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm sm:text-base">Key Subjects</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {education[0].subjects.map((subject) => (
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

            {/* Higher Secondary Card - Right on desktop */}
            <div className="flex-1 lg:max-w-[48%]">
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
                          {education[1].board && (
                            <div className="text-primary font-medium">{education[1].board}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-center sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold neon-text mb-1">{education[1].grade}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Grade</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold mb-3 text-sm sm:text-base">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {education[1].achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

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
                          {education[2].board && (
                            <div className="text-primary font-medium">{education[2].board}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-center sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold neon-text mb-1">{education[2].grade}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Grade</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold mb-3 text-sm sm:text-base">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {education[2].achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

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