import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Terminal, 
  Database, 
  Cloud, 
  Layers, 
  ExternalLink 
} from 'lucide-react';

export const personalInfo = {
  name: "Manoj Chauhan",
  title: "Senior Full Stack Developer",
  email: "chauhanmanoj16358@gmail.com",
  phone: "+91 63963-12017",
  location: "Noida, India",
  github: "https://github.com/ManojChauhanRana",
  linkedin: "https://www.linkedin.com/in/manoj-chauhan-64b200227/",
  profileImage: "/profile.jpg",
  summary: "Results-driven Senior Full Stack Developer with 3+ years of experience specializing in Ruby on Rails and React. Expert in architecting scalable SaaS platforms, implementing complex integrations, and delivering high-performance web applications as a Technical Lead. Proven track record in leading development teams and transforming legacy systems into modern, cloud-native solutions."
};

export const skills = [
  {
    category: "Full Stack Development",
    icon: Code2,
    items: ["Ruby on Rails", "React", "TypeScript", "JavaScript (ES6+)", "Redux", "Node.js", "Java"]
  },
  {
    category: "Integrations & APIs",
    icon: Terminal,
    items: ["MuleSoft", "RESTful APIs", "GraphQL", "Microservices", "Odoo Integrations"]
  },
  {
    category: "SaaS & Cloud",
    icon: Cloud,
    items: ["AWS EKS", "CDK (IaC)", "Docker", "Kubernetes", "CI/CD Automation", "Cognito"]
  },
  {
    category: "Data & Systems",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "DynamoDB", "Git", "Agile/Scrum"]
  }
];

export const experience = [
  {
    role: "Senior Full Stack Developer | Tech Lead",
    company: "Brazen Group",
    period: "Oct 2023 – Present",
    highlights: [
      "Led full-stack architecture of multi-tenant SaaS platforms using React and Ruby on Rails",
      "Managed development life-cycle for complex migrations from legacy stacks with zero downtime",
      "Built and optimized AWS microservices using CDK, significantly reducing deployment overhead",
      "Mentored engineering teams across sprint planning, technical design, and code quality",
      "Implemented scalable database schemas supporting high-transaction SaaS environments"
    ]
  }
];

export interface Project {
  title: string;
  tech: string[];
  description: string;
  featured: boolean;
  status?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    title: "ScalarTax: Enterprise SaaS Re-engineering",
    tech: ["React 18", "TypeScript", "Ruby on Rails 7.1", "MySQL", "AWS Cognito", "EKS"],
    status: "Production Ready",
    description: "Architected the total overhaul of an Enterprise AWS SaaS Reference Architecture, migrating from Angular/Microservices to a high-velocity React/Rails ecosystem. Re-built the core Tax engine, including complex nexus determination and automated exemption logic.",
    featured: true
  },
  {
    title: "AWS Microservices Architectural Migration",
    tech: ["AWS", "Kubernetes", "Docker", "Ruby on Rails", "React", "MySQL"],
    description: "Successfully migrated core enterprise microservices from Angular/Spring-Boot and DynamoDB to a streamlined React/Rails/MySQL architecture. Implemented high-availability CI/CD using CodeCommit and CloudFront.",
    featured: true
  },
  {
    title: "Mahakumbh 2025 Certificate Application",
    tech: ["React", "Ruby on Rails", "PostgreSQL", "AWS S3", "QR Codes"],
    description: "High-volume certificate registration system for Mahakumbh 2025. Features multi-step forms, automated generation, and secure verification.",
    featured: true
  },
  {
    title: "Island Innovator Platform",
    tech: ["Odoo", "Python", "React", "PostgreSQL"],
    description: "Custom membership management platform with reward tracking and gamification logic.",
    featured: false
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "GL Bajaj Institute of technology",
    score: "MCA Graduate"
  },
  {
    degree: "Bachelor of Science (B.Sc)",
    institution: "Gurukul Kangri Vishwavidyalaya",
    score: "Science Graduate"
  }
];

export const certifications = [
  "MuleSoft Certified Developer - Level 1",
  "Odoo Certified Developer"
];

export const socialLinks = [
  { name: "GitHub", icon: Github, url: personalInfo.github },
  { name: "LinkedIn", icon: Linkedin, url: personalInfo.linkedin },
  { name: "Email", icon: Mail, url: `mailto:${personalInfo.email}` },
  { name: "Phone", icon: Phone, url: `tel:${personalInfo.phone}` }
];
