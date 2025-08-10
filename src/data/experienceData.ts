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
    duration: "Jul 2024 – Present",
    responsibilities: [
      "Developed AI-powered apps for a startup, boosting productivity.",
      "Deployed live projects: Dr. Kumar Laboratory, AyuChat.",
      "Built responsive UIs with React & Tailwind CSS.",
      "Implemented backend email logic using Nodemailer & Express.",
      "Created dynamic project cards with data mapping."
    ],
    location: "Remote, India", // TODO: Update with actual company location for Google Maps
    companyIcon: "/placeholder.svg", // TODO: Replace with actual company icon/logo URL
    companyWebsite: "https://agnistoka.com", // TODO: Replace with actual company website URL
  },
];
