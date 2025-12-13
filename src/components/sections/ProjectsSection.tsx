import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [expandedSkills, setExpandedSkills] = useState<{ [key: number]: boolean }>({});
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});

  // Character limits for project descriptions
  // TODO: Adjust these values as needed for your design preferences
  const DESKTOP_CHAR_LIMIT = 30; // Desktop/tablet character limit
  const MOBILE_CHAR_LIMIT = 8; // Mobile character limit (5-10 range)

  const toggleSkills = (projectId: number) => {
    setExpandedSkills(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const toggleDescription = (projectId: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Function to truncate description based on screen size and expansion state
  const getTruncatedDescription = (description: string, projectId: number, isMobile: boolean) => {
    const isExpanded = expandedDescriptions[projectId];
    if (isExpanded) return description;

    const charLimit = isMobile ? MOBILE_CHAR_LIMIT : DESKTOP_CHAR_LIMIT;
    return description.length > charLimit
      ? description.substring(0, charLimit) + '...'
      : description;
  };

  const projects = [
    {
      id: 1,
      title: "Promptify",
      description: "Full-stack AI prompt builder with modular design, API integrations, and smooth deployment features",
      techStack: ["React", "TypeScripts", "Node.js", "Razorpay", "OpenAI / Anthropic API integration"],
      githubUrl: "https://github.com/CodehubPriyanshu/Promptify",
      liveUrl: "https://promptify-henna-zeta.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "SentimentSage",
      description: "AI sentiment analysis app with React frontend, Flask backend, secure configs, and scalable deployment",
      techStack: ["React", "MongoDB Atlas", "flask", "Axios", "JWT Authentication"],
      githubUrl: "https://github.com/CodehubPriyanshu/SentimentSage",
      liveUrl: "https://sentiment-sage42984.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "Exploratory Data Analysis (EDA)",
      description: "It's projects in Python, covering data cleaning, visualization, feature engineering, and machine learning across multiple datasets",
      techStack: ["Python Libraries", "Data preprocessing", "feature engineering", "Regression","classification (KNN)", " interactive dashboards with Streamlit/Dash"],
      githubUrl: "https://github.com/CodehubPriyanshu/Data-analysis-basic-project-EDA-base",
      liveUrl: "https://colab.research.google.com/drive/1NeL-qiUfAGrqT5gLmjK00qtcSh5WPrdl?authuser=1",
      featured: false
    },
    {
      id: 4,
      title: "Personal Finance Dashboard",
      description: "Interactive Power BI dashboard analyzing spending trends, categories, and habits with Python-cleaned data.",
      techStack: ["Microsoft Power BI Desktop", "Python", "Data Collection & Cleaning", "Power BI Modeling", "Dashboard Visualizations"],
      githubUrl: "https://github.com/CodehubPriyanshu/Finance-PowerBI-Dashboard",
      liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTk4YWE0ZjMtN2U0ZS00MDBkLWFkOWYtYmU5ZDdhYzhhZDUxIiwidCI6ImU4NTYzNWI2LTFlMDItNDIzNy1iNDliLWY3NjllNTVkMzI4OSJ9",
      featured: false
    },
    {
      id: 5,
      title: "Real-time Chat App",
      description: "Real-time React Firebase chat app with authentication, media sharing, notifications, and responsive design",
      techStack: ["React 18", "ESLint + Prettier", "Firebase", "Vercel "],
      githubUrl: "https://github.com/CodehubPriyanshu/Chat-Application",
      liveUrl: "https://chat-web-app77.web.app/signin",
      featured: false
    },
    {
      id: 6,
      title: "HireHub-Job Portal",
      description: "MERN-based job portal with search, tracking, role-based access, secure authentication, and cloud deployment.",
      techStack: ["React Router", "Cloudinary", "React Toastify", "Nodemailer", "bcrypt"],
      githubUrl: "https://github.com/CodehubPriyanshu/HireHub-JobPortal-",
      liveUrl: "https://hire-hub-job-portal-es2a-m70kt2t27-codehubpriyanshus-projects.vercel.app/",
      featured: true
    }
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="mobile-section relative">
      {/* Background effects */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent-glow/10 rounded-full blur-3xl"></div>
      
      <div className="mobile-container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading mb-4">
            <span className="neon-text-glow">Featured Projects</span>
          </h2>
          <p className="mobile-subheading text-muted-foreground">Innovative solutions built with modern technologies</p>
        </div>

        {/* Mobile-optimized grid: 2 columns on mobile, 3 on desktop */}
        <div className="mobile-card-grid">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`project-card group h-full flex flex-col mobile-card transition-all duration-300 ${
                expandedDescriptions[project.id] ? 'project-card-expanded' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => window.innerWidth >= 640 && toggleDescription(project.id)} // Desktop hover expand
              onMouseLeave={() => window.innerWidth >= 640 && toggleDescription(project.id)} // Desktop hover collapse
            >
              <CardHeader className="p-4 sm:p-6 pb-3">
                <CardTitle className="text-sm sm:text-base lg:text-lg xl:text-xl group-hover:neon-text transition-all duration-300 line-clamp-2">
                  {project.title}
                </CardTitle>

                {/* Mobile description - clickable for expand/collapse */}
                <CardDescription
                  className={`project-description text-muted-foreground text-xs sm:text-sm lg:text-base cursor-pointer sm:cursor-default transition-all duration-300 sm:hidden ${
                    expandedDescriptions[project.id] ? 'expanded' : ''
                  }`}
                  onClick={() => toggleDescription(project.id)} // Mobile click expand/collapse
                >
                  {getTruncatedDescription(project.description, project.id, true)}
                  {project.description.length > MOBILE_CHAR_LIMIT && (
                    <span className="text-primary/70 ml-1 text-xs">
                      {expandedDescriptions[project.id] ? ' (tap to collapse)' : ' (tap to expand)'}
                    </span>
                  )}
                </CardDescription>

                {/* Desktop description - hover expand/collapse */}
                <CardDescription
                  className={`project-description text-muted-foreground text-xs sm:text-sm lg:text-base transition-all duration-300 hidden sm:block ${
                    expandedDescriptions[project.id] ? 'expanded' : ''
                  }`}
                >
                  {getTruncatedDescription(project.description, project.id, false)}
                  {project.description.length > DESKTOP_CHAR_LIMIT && !expandedDescriptions[project.id] && (
                    <span className="text-primary/70 ml-1 text-xs">(hover to expand)</span>
                  )}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between p-4 sm:p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {(expandedSkills[project.id] ? project.techStack : project.techStack.slice(0, 3)).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="glass-card text-xs hover:shadow-glow-secondary transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge
                      variant="outline"
                      className="glass-card text-xs cursor-pointer hover:bg-primary/10 transition-all duration-300"
                      onClick={() => toggleSkills(project.id)}
                    >
                      {expandedSkills[project.id]
                        ? 'Show Less'
                        : `+${project.techStack.length - 3}`
                      }
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-card hover:shadow-glow active:scale-95 text-xs"
                    onClick={() => handleProjectClick(project.githubUrl)}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-card hover:shadow-glow active:scale-95 text-xs"
                    onClick={() => handleProjectClick(project.liveUrl)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button 
            variant="outline" 
            className="btn-neon text-sm sm:text-base"
            onClick={() => handleProjectClick('https://github.com/CodehubPriyanshu?tab=repositories')}
          >
            <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
