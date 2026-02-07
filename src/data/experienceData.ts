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
};

export const experiences: Experience[] = [
  {
    company: "Agnistoka Technology",
    role: "Software Development Engineer",
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
    companyIcon: "src/assets/building.png",
    companyWebsite: "https://agnistokatechnology.com",
  },
];
