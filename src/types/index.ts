// Core data primitives for the personal site
// These types define the structure of data that flows through our system

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  phone: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'program';
}

export interface Skill {
  name: string;
  category: 'technical' | 'language' | 'creative' | 'soft';
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'native';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  year: string;
  type: 'academic' | 'internship' | 'personal' | 'professional';
}

export interface SiteConfig {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
}
