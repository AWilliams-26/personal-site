import { SiteConfig } from '@/types';

// Site configuration - all personal data in one place
// This is the single source of truth for site content
export const siteConfig: SiteConfig = {
  personalInfo: {
    name: "Alexander Williams",
    title: "Computer Science Student & Developer",
    tagline: "Building tomorrow's technology with today's passion",
    email: "alwilliam345@gmail.com",
    location: "Elkins Park, PA",
    phone: "267-378-5088"
  },
  
  experiences: [
    {
      id: "arcadia-it",
      title: "IT Assistant",
      company: "Arcadia University",
      location: "Information Technology",
      period: "June 2023 - August 2023",
      description: "Paid internship learning IT department operations, including events and maintenance roles.",
      type: "work"
    },
    {
      id: "temple-ee",
      title: "Virtual Program Participant",
      company: "Temple University",
      location: "Electrical Engineering",
      period: "July 2021 - August 2021",
      description: "Built and programmed robots in an intensive electrical engineering program.",
      type: "program"
    },
    {
      id: "urban-apps-2019",
      title: "Mobile App Development",
      company: "Urban Apps and Maps, Temple University",
      location: "Summer Program",
      period: "July 2019 - August 2019",
      description: "Developed smartphone applications with step-by-step guidance and instructor support.",
      type: "program"
    },
    {
      id: "urban-poetry",
      title: "Poetry Division Participant",
      company: "Urban Apps and Maps",
      location: "Land Title Building",
      period: "June 2018 - August 2018",
      description: "Advanced writing skills development through poetry creation and analysis.",
      type: "program"
    }
  ],

  skills: [
    { name: "Java Programming", category: "technical", proficiency: "intermediate" },
    { name: "HTML & CSS", category: "technical", proficiency: "intermediate" },
    { name: "Computer Systems", category: "technical", proficiency: "advanced" },
    { name: "PowerPoint Presentation", category: "technical", proficiency: "advanced" },
    { name: "Programming", category: "technical", proficiency: "intermediate" },
    { name: "English", category: "language", proficiency: "advanced" },
    { name: "Italian", category: "language", proficiency: "beginner" },
    { name: "Trombone", category: "creative", proficiency: "advanced" },
    { name: "Trumpet", category: "creative", proficiency: "intermediate" },
    { name: "Tuba", category: "creative", proficiency: "intermediate" }
  ],

  projects: [
    {
      id: "robot-programming",
      title: "Robot Programming Project",
      description: "Built and programmed custom robots using electrical engineering principles",
      technologies: ["Robotics", "Programming", "Hardware Assembly"],
      year: "2021",
      type: "academic"
    },
    {
      id: "mobile-app",
      title: "Mobile Application Development",
      description: "Created smartphone applications as part of Urban Apps program",
      technologies: ["Mobile Development", "App Design", "User Interface"],
      year: "2019",
      type: "academic"
    },
    {
      id: "it-systems",
      title: "IT Systems Management",
      description: "Managed IT operations including event coordination and system maintenance",
      technologies: ["System Administration", "Event Management", "Technical Support"],
      year: "2023",
      type: "internship"
    }
  ]
};
