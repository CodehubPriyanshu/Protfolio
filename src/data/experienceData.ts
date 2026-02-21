export type Responsibility = {
  text: string;
  linkText?: string;
  linkUrl?: string;
};

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
    companyIcon: "src/assets/at-logo.png",
    companyWebsite: "https://agnistokatechnology.com",
    iconSize: "lg",
  },
  {
    company: "Career Mantra",
    role: "Web Developer",
    duration: "December 2025 – Present",
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
    location: "On-site, City Center Gwalior",
    companyIcon: "src/assets/cm logo.png",
    companyWebsite: "https://careermantra.net/",
    iconSize: "md",
  }
];
