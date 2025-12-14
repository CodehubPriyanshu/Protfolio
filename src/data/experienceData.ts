export type Experience = {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  location: string; // Location for Google Maps link
  companyIcon?: string; // Optional company icon URL
  companyWebsite?: string; // Optional company website URL
};

export const experiences: Experience[] = [
  {
    company: "Agnistoka Technology",
    role: "Software Development Engineer",
    duration: "July 2025 – Present",
    responsibilities: [
      "Developed live projects including Dr. Kumar Laboratory and AyuChat",
      "Collaborated with team members to strengthen development skills",
      "Gained hands-on experience in frontend and backend development",
      "Worked with React, Node.js, and Python",
      "Built a short-term project related to webinars.",
    ],
    location: "Hybrid, Gwalior, Madhya Pradesh, India", // TODO: Update with actual company location for Google Maps
    companyIcon: "src/assets/building.png", // TODO: Replace with actual company icon/logo URL
    companyWebsite: "https://agnistokatechnology.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio", // TODO: Replace with actual company website URL
  },
];
