import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  Server,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

// Personal Information
export const personalInfo = {
  name: "Priyanshu Kumar",
  title: "Full Stack Developer & AI Enthusiast",
  email: "priyanshumails.bca2025@gmail.com",
  phone: "+91 8602062785",
  location: "Gwalior, Madhya Pradesh, India",
  bio: [
    "I'm a passionate MCA student at Rustamji Institute of Technology from Gwalior with a deep love for technology and innovation. My journey in programming started with curiosity and has evolved into a commitment to creating impactful digital solutions.",
    "With expertise in modern web technologies like React, Python, and Flask, I enjoy building applications that solve real-world problems. I'm particularly interested in AI/ML and how it can enhance user experiences.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community."
  ],
  stats: {
    projects: "20+",
    experience: "2+"
  }
};

// Technical Skills
export const skills = [
  { name: "React.js", icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "Python", icon: Code, color: "from-green-500 to-blue-500" },
  { name: "Flask", icon: Server, color: "from-red-500 to-pink-500" },
  { name: "JavaScript", icon: Globe, color: "from-yellow-500 to-orange-500" },
  { name: "Node.js", icon: Server, color: "from-green-600 to-green-400" },
  { name: "MongoDB", icon: Database, color: "from-green-500 to-teal-500" },
  { name: "Docker", icon: Smartphone, color: "from-purple-500 to-pink-500" },
  { name: "AWS", icon: Brain, color: "from-indigo-500 to-purple-500" },
  { name: "TypeScript", icon: Code, color: "from-blue-600 to-blue-400" },
  { name: "Tailwind CSS", icon: Globe, color: "from-cyan-500 to-blue-500" },
];

// Education Data
export const education = [
  {
    level: "Graduated",
    course: "Bachelor of Computer Applications (BCA)",
    institution: "ITM University",
    location: "Gwalior, Madhya Pradesh",
    year: "2022 - 2025",
    grade: "8.5 CGPA",    achievements: [
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

// Projects Data
export const projects = [
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

// Contact Information
export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: "#"
  }
];

// Social Links
export const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/priyanshu",
    color: "hover:text-gray-900"
  },
  {
    icon: Linkedin,
    label: "LinkedIn", 
    href: "https://linkedin.com/in/priyanshu",
    color: "hover:text-blue-600"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/priyanshu_dev",
    color: "hover:text-blue-400"
  }
];

// Navigation Items
export const navigationItems = [
  { id: 'hero', label: 'Home', icon: 'Home' },
  { id: 'about', label: 'About', icon: 'User' },
  { id: 'resume', label: 'Education', icon: 'FileText' },
  { id: 'projects', label: 'Projects', icon: 'Briefcase' },
  { id: 'contact', label: 'Contact', icon: 'Mail' },
];

// Site Configuration
export const siteConfig = {
  title: "Priyanshu Kumar - Portfolio",
  description: "Full Stack Developer & AI Enthusiast",
  tagline: "Transforming data into insight, code into impact.",
  copyright: "© 2025 Priyanshu Kumar. Built with React, Tailwind & CSS.",
  githubProfile: "https://github.com/priyanshu"
};
