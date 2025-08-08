export type Experience = {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    company: "Agnistoka Technology",
    role: "Software Development Engineer",
    duration: "Jul 2024 – Present",
    responsibilities: [
      "Build and optimize AI-driven portfolio applications.",
      "Collaborated on the frontend in React and Tailwind.",
      "Created backend email form logic with Nodemailer and Express.",
      "Integrated dynamic project cards using data mapping logic.",
    ],
  },
];
