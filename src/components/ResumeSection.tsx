import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const ResumeSection = () => {
  const education = [
    {
      level: "Graduation",
      course: "Bachelor of Computer Applications (BCA)",
      institution: "ITM University",
      location: "Gwalior, Madhya Pradesh",
      year: "2022 - 2025",
      grade: "8.5 CGPA (Current)",
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
      institution: "St. Xavier's Higher Secondary School",
      location: "Gwalior, Madhya Pradesh", 
      year: "2021 - 2022",
      grade: "89.2%",
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
      institution: "St. Xavier's Secondary School",
      location: "Gwalior, Madhya Pradesh",
      year: "2019 - 2020", 
      grade: "92.8%",
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
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-80 h-80 bg-accent-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="neon-text-glow">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">Academic journey and achievements</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="glass-card animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-gradient-primary rounded-full p-2">
                        <GraduationCap className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="glass-card text-xs font-semibold"
                      >
                        {edu.level}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl mb-2 group-hover:neon-text transition-all duration-300">
                      {edu.course}
                    </CardTitle>
                    
                    <CardDescription className="space-y-1">
                      <div className="flex items-center gap-2 text-base">
                        <span className="font-semibold text-foreground">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.year}
                        </div>
                        {edu.board && (
                          <div className="text-primary font-medium">{edu.board}</div>
                        )}
                      </div>
                    </CardDescription>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold neon-text mb-1">{edu.grade}</div>
                    <div className="text-sm text-muted-foreground">Grade</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Achievements */}
                <div>
                  <h4 className="flex items-center gap-2 font-semibold mb-3">
                    <Award className="h-4 w-4 text-primary" />
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Subjects */}
                <div>
                  <h4 className="font-semibold mb-3">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject) => (
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
          ))}
        </div>

        {/* Timeline connector */}
        <div className="absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-primary via-accent-glow to-primary opacity-20 transform -translate-x-1/2 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default ResumeSection;