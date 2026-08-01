export type ThemeMode = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile';
  image: string;
  tags: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  description: string;
  achievements: string[];
  technologies: string[];
  logoBg: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps & Tools' | 'Database';
  icon: string;
  level: number; // 0 - 100
  color: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}
