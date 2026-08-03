export type Responsibility = {
  text: string;
  linkText?: string;
  linkUrl?: string;
};

import cmLogo from "@/assets/cm logo.png";
import atLogo from "@/assets/at-logo.png";

export type Experience = {
  company: string;
  role: string;
  duration: string;
  responsibilities: Responsibility[];
  location: string;
  companyIcon?: string;
  companyWebsite?: string;
  iconSize?: 'sm' | 'md' | 'lg';
};

export const experiences: Experience[] = [
  {
    company: "MB Trader",
    role: "Algo Trader Developer (Freelancer)",
    duration: "July 2026 – Present",
    responsibilities: [
      {
        text: "Developed Python-based automation tools to monitor NSE and BSE websites, tracking company announcements and delivery position updates, and generating real-time alerts for faster trading decisions.",
      },
      {
        text: "Built an automated copy trading system using Zerodha Kite Connect APIs to execute buy and sell orders across multiple client accounts based on master account activities.",
      },
      {
        text: "Implemented portfolio allocation and risk management logic to calculate investment percentages, distribute orders according to client portfolio values, and automate trade execution with improved accuracy.",
      },
    ],
    location: "Hybrid, Chetakpuri Gwalior",
  },
  {
    company: "Career Mantra",
    role: "Web Developer",
    duration: "December 2025 – June 2026",
    responsibilities: [
      {
        text: "Working on task management systems and lead management system with database integration.",
      },
      {
        text: "Built admission landing pages capturing student leads using secure databases and NeoDove API.",
      },
      {
        text: "Developing PHP projects with hands-on experience in deploying applications on MilesWeb hosting",
      },
    ],
    location: "Hybrid, City Center Gwalior",
    companyIcon: cmLogo,
    companyWebsite: "https://careermantra.net/",
    iconSize: "lg",
  },
  {
    company: "Agnistoka Technology",
    role: "Junior Software Developer",
    duration: "July 2025 – December 2025",
    responsibilities: [
      {
        text: "Developed live production projects including",
        linkText: "Dr. Kumar Laboratory",
        linkUrl: "https://drkumarlaboratories.com/",
      },
      {
        text: "Collaborated with cross-functional team members to improve development workflows and debugging skills.",
      },
      {
        text: "Worked on both frontend and backend features using React, Node.js, and Python.",
      },
      {
        text: "Gained hands-on experience with Next.js, focusing on reusable components and performance optimization.",
      },
      {
        text: "Built a short-term webinar management project and worked on admin panel features including Shiprocket integration.",
      },
    ],
    location: "Hybrid, Gwalior, Madhya Pradesh, India",
    companyIcon: atLogo,
    companyWebsite: "https://agnistokatechnology.com",
    iconSize: "lg",
  }
];
