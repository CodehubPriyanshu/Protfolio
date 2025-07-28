import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Zap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      description: "Smart task management app with AI-driven priority suggestions and natural language processing for task creation.",
      techStack: ["React", "Python", "Flask", "OpenAI API", "MongoDB"],
      githubUrl: "https://github.com/priyanshu/ai-task-manager",
      liveUrl: "https://ai-taskmaster.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description: "Comprehensive admin dashboard for e-commerce with real-time analytics, inventory management, and sales tracking.",
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "Chart.js"],
      githubUrl: "https://github.com/priyanshu/ecommerce-dashboard",
      liveUrl: "https://ecommerce-admin.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Social Media Analytics",
      description: "Tool for analyzing social media performance across platforms with automated reporting and insights generation.",
      techStack: ["Python", "Django", "React", "Redis", "Celery"],
      githubUrl: "https://github.com/priyanshu/social-analytics",
      liveUrl: "https://social-insights.herokuapp.com",
      featured: false
    },
    {
      id: 4,
      title: "Weather Prediction ML",
      description: "Machine learning model for weather prediction using historical data and real-time API integration.",
      techStack: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
      githubUrl: "https://github.com/priyanshu/weather-ml",
      liveUrl: "https://weather-predict.streamlit.app",
      featured: false
    },
    {
      id: 5,
      title: "Real-time Chat App",
      description: "Modern chat application with real-time messaging, file sharing, and group chat functionality.",
      techStack: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
      githubUrl: "https://github.com/priyanshu/realtime-chat",
      liveUrl: "https://chat-realtime.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "Secure voting platform using blockchain technology for transparent and tamper-proof elections.",
      techStack: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      githubUrl: "https://github.com/priyanshu/blockchain-voting",
      liveUrl: "https://vote-blockchain.netlify.app",
      featured: true
    }
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-glow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="neon-text-glow">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">Innovative solutions built with modern technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`glass-card group cursor-pointer h-full flex flex-col ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative">
                {project.featured && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-gradient-primary rounded-full p-2">
                      <Zap className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                )}
                
                <CardTitle className="text-xl group-hover:neon-text transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="glass-card text-xs hover:shadow-glow-secondary transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-card hover:shadow-glow"
                    onClick={() => handleProjectClick(project.githubUrl)}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-card hover:shadow-glow"
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

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="btn-neon"
            onClick={() => handleProjectClick('https://github.com/priyanshu')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;