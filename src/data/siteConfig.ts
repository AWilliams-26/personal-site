import { SiteConfig } from '@/types';

// Site configuration - all personal data in one place
// This is the single source of truth for site content
export const siteConfig: SiteConfig = {
  personalInfo: {
    name: "Alexander Williams",
    title: "Computer Science Student & Developer", 
    tagline: "Building tomorrow's solutions with today's passion for technology",
    email: "alwilliam345@gmail.com",
    phone: "267-378-5088",
    location: "Elkins Park, PA"
  },
  experiences: [
    {
      id: "cozzyshoes",
      title: "Content Creator",
      company: "Cozzy Shoes",
      location: "Philadelphia, PA",
      period: "Aug 2022 - Aug 2024",
      description: "Created engaging social media content and marketing materials for footwear brand.",
      type: "work"
    },
    {
      id: "ups-seasonal",
      title: "Seasonal Warehouse Worker", 
      company: "UPS",
      location: "Philadelphia, PA",
      period: "Dec 2023 - Jan 2024",
      description: "Processed packages in fast-paced warehouse environment during peak holiday season.",
      type: "work"
    },
    {
      id: "ups-driver-helper",
      title: "Driver Helper",
      company: "UPS", 
      location: "Philadelphia, PA",
      period: "Dec 2021 - Jan 2022",
      description: "Assisted delivery drivers with package delivery and customer service during holiday rush.",
      type: "work"
    },
    {
      id: "education-temple",
      title: "Bachelor of Science in Computer Science",
      company: "Temple University",
      location: "Philadelphia, PA", 
      period: "2022 - Present",
      description: "Pursuing comprehensive computer science education with focus on software development and problem-solving.",
      type: "education"
    },
    {
      id: "education-ccp",
      title: "Associate of Science in Computer Science",
      company: "Community College of Philadelphia",
      location: "Philadelphia, PA",
      period: "2020 - 2022", 
      description: "Completed foundational computer science curriculum with strong academic performance.",
      type: "education"
    },
    {
      id: "arcadia-it",
      title: "IT Assistant",
      company: "Arcadia University", 
      location: "Glenside, PA",
      period: "Jun 2023 - Aug 2023",
      description: "Paid internship learning IT department operations, including events and maintenance roles.",
      type: "work"
    },
    {
      id: "temple-ee",
      title: "Virtual Program Participant",
      company: "Temple University",
      location: "Philadelphia, PA",
      period: "Jul 2021 - Aug 2021", 
      description: "Built and programmed robots in an intensive electrical engineering program.",
      type: "program"
    },
    {
      id: "urban-apps-2019",
      title: "Mobile App Development",
      company: "Urban Apps and Maps, Temple University",
      location: "Philadelphia, PA",
      period: "Jul 2019 - Aug 2019",
      description: "Developed smartphone applications with step-by-step guidance and instructor support.",
      type: "program"
    },
    {
      id: "urban-poetry",
      title: "Poetry Division Participant", 
      company: "Urban Apps and Maps",
      location: "Philadelphia, PA",
      period: "Jun 2018 - Aug 2018",
      description: "Advanced writing skills development through poetry creation and analysis.",
      type: "program"
    }
  ],

  skills: [
    { name: "Java Programming", category: "technical", proficiency: "advanced" },
    { name: "HTML & CSS", category: "technical", proficiency: "intermediate" },
    { name: "JavaScript", category: "technical", proficiency: "intermediate" },
    { name: "TypeScript", category: "technical", proficiency: "intermediate" },
    { name: "React", category: "technical", proficiency: "intermediate" },
    { name: "Next.js", category: "technical", proficiency: "intermediate" },
    { name: "Computer Systems", category: "technical", proficiency: "advanced" },
    { name: "Software Development", category: "technical", proficiency: "advanced" },
    { name: "Problem Solving", category: "technical", proficiency: "advanced" },
    { name: "Microsoft Office", category: "technical", proficiency: "advanced" },
    { name: "PowerPoint Presentation", category: "technical", proficiency: "advanced" },
    { name: "Content Creation", category: "creative", proficiency: "advanced" },
    { name: "Social Media Marketing", category: "creative", proficiency: "intermediate" },
    { name: "Team Collaboration", category: "soft", proficiency: "advanced" },
    { name: "Customer Service", category: "soft", proficiency: "advanced" },
    { name: "Time Management", category: "soft", proficiency: "advanced" },
    { name: "English", category: "language", proficiency: "native" },
    { name: "Italian", category: "language", proficiency: "beginner" },
    { name: "Trombone", category: "creative", proficiency: "advanced" },
    { name: "Trumpet", category: "creative", proficiency: "intermediate" },
    { name: "Tuba", category: "creative", proficiency: "intermediate" }
  ],

  projects: [
    {
      id: "personal-site",
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website built with Next.js 15 and Tailwind CSS featuring dark/light themes and modular architecture",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      year: "2025",
      type: "personal"
    },
    {
      id: "robot-programming",
      title: "Robotics Engineering Project",
      description: "Designed, built, and programmed autonomous robots using electrical engineering principles and embedded systems",
      technologies: ["Robotics", "C++", "Arduino", "Hardware Assembly", "Sensor Integration"],
      year: "2021",
      type: "academic"
    },
    {
      id: "mobile-app-development",
      title: "Mobile Application Suite",
      description: "Developed multiple smartphone applications with focus on user experience and modern design patterns",
      technologies: ["Mobile Development", "UI/UX Design", "Java", "Android Studio"],
      year: "2019",
      type: "academic"
    },
    {
      id: "it-infrastructure",
      title: "IT Systems Administration",
      description: "Managed enterprise IT infrastructure including event coordination, system maintenance, and user support at university level",
      technologies: ["System Administration", "Network Management", "Technical Support", "Event Coordination"],
      year: "2023",
      type: "internship"
    },
    {
      id: "content-creation-platform",
      title: "Digital Content Creation System",
      description: "Developed comprehensive social media content strategy and marketing materials for e-commerce footwear brand",
      technologies: ["Content Strategy", "Social Media Marketing", "Adobe Creative Suite", "Brand Development"],
      year: "2022-2024",
      type: "professional"
    }
  ]
};
