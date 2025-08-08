import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [expandedSkills, setExpandedSkills] = useState<{ [key: number]: boolean }>({});

  const toggleSkills = (projectId: number) => {
    setExpandedSkills(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const projects = [
    {
      id: 1,
      title: "Promptify",
      description: "It is a full-stack AI prompt creation and management platform that allows users to easily build, organize, and manage prompts using a clean, developer-friendly interface. Built with React, TypeScript, Node.js, and MongoDB, it includes startup scripts, validation checks, and health monitoring to ensure smooth development and deployment. The project follows a modular structure for easy scaling and supports API integrations with OpenAI, Anthropic, and more.",
      techStack: ["React", "TypeScripts", "Node.js", "Razorpay", "OpenAI / Anthropic API integration"],
      githubUrl: "https://github.com/CodehubPriyanshu/Promptify",
      liveUrl: "https://ai-taskmaster.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "SentimentSage",
      description: "SentimentSage is a production-ready AI sentiment analysis web application refactored for clean structure, scalability, and platform flexibility. The frontend (React + TypeScript) is now set as the root for seamless Vercel deployment, while the backend (Python + Flask) is separated for independent hosting on Render, Railway, or Heroku. The entire codebase was cleaned and optimized, with proper environment configuration, error handling, and documentation including detailed setup and deployment guides. API keys, database connections, and CORS settings are now environment-based, making the project secure and easy to maintain across multiple environments.",
      techStack: ["React", "MongoDB Atlas", "flask", "Axios", "JWT Authentication"],
      githubUrl: "https://github.com/CodehubPriyanshu/SentimentSage",
      liveUrl: "https://ecommerce-admin.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Sales Insights",
      description: "It is a business intelligence project aimed at analyzing the sales performance of an India-based hardware company using SQL for data processing and Tableau for visualization. The project involved extracting and transforming raw sales data into a structured Star Schema, followed by building an interactive Tableau dashboard to track revenue, profit, customer behavior, and product performance across different cities, years, and markets. By answering key business questions like top-performing products, high-revenue customers, and city-wise profitability, the dashboard helps stakeholders—including the Sales Director—make strategic decisions regarding pricing, discounts, and operational improvements.",
      techStack: ["Interactive Tableau Dashboards", "SQL Data Analysis", "Data Modeling", "Star Schema",],
      githubUrl: "https://github.com/CodehubPriyanshu/Sales-Data-Analysis-and-Insights",
      liveUrl: "https://social-insights.herokuapp.com",
      featured: false
    },
    {
      id: 4,
      title: "Personal Finance Dashboard",
      description: "This Personal Finance Dashboard project uses Microsoft Power BI to transform static Excel expense data into an interactive financial analysis tool. Designed to track and visualize daily spending patterns, the dashboard provides deep insights into monthly trends, category-wise expenses, location-based purchases, price-range behavior, weekday vs. weekend spending, and even habits during sick days. Raw data was collected manually and cleaned using Python, then modeled with DAX and lookup tables in Power BI. The result is a fully interactive dashboard that tells the story of financial behavior with clarity, offering a modern alternative to traditional Excel filtering.",
      techStack: ["Microsoft Power BI Desktop", "Python", "Data Collection & Cleaning", "Power BI Modeling", "Dashboard Visualizations"],
      githubUrl: "https://github.com/CodehubPriyanshu/Finance-PowerBI-Dashboard",
      liveUrl: "https://weather-predict.streamlit.app",
      featured: false
    },
    {
      id: 5,
      title: "Real-time Chat App",
      description: "This Chat Application is a modern, real-time messaging platform built with React and Firebase, offering secure authentication, instant messaging, voice messages, file sharing, and push notifications. It supports room-based conversations, tracks online status, and delivers a responsive user experience across devices. Authentication is powered by Google and Facebook providers, with Firebase Realtime Database and Cloud Storage handling messages and media. The app is optimized for deployment via Vercel or Firebase Hosting, and includes strong environment setup, Firebase security rules, and modular React architecture.",
      techStack: ["React 18", "ESLint + Prettier", "Firebase", "Vercel "],
      githubUrl: "https://github.com/CodehubPriyanshu/Chat-Application",
      liveUrl: "https://chat-realtime.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "HireHub-Job Portal",
      description: "HireHub is a full-stack job portal platform built with the MERN stack that streamlines the job application and recruitment process for both job seekers and employers. It offers features like job search, resume upload, application tracking, employer dashboards, and role-based access. The backend is secured with JWT authentication, file handling via Cloudinary, and email services through Nodemailer, while the frontend is powered by React, Redux Toolkit, and Vite for a fast, responsive experience. The project supports both local and cloud deployment, with detailed environment configurations and API routes, making it scalable and production-ready.",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="project-card group h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-4 sm:p-6 pb-3">{/* Removed charging icon section */}

                <CardTitle className="text-sm sm:text-base lg:text-lg xl:text-xl group-hover:neon-text transition-all duration-300 line-clamp-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-xs sm:text-sm lg:text-base line-clamp-2 sm:line-clamp-3">
                  {project.description}
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
