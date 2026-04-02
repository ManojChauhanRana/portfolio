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
  website: "https://portfoliomanojchauhan.vercel.app/",
  profileImage: "/profile.jpg",
  summary: "Results-driven Senior Full Stack Developer with 3 years of experience specializing in Ruby on Rails and React. Expert in architecting scalable SaaS platforms, implementing complex integrations, and delivering high-performance web applications as a Technical Lead. Proven track record in leading development teams and transforming legacy systems into modern, cloud-native solutions."
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
    items: ["MuleSoft", "RESTful APIs", "Microservices", "Odoo Integrations", "Postman", "CI/CD"]
  },
  {
    category: "SaaS & Cloud",
    icon: Cloud,
    items: ["AWS EKS", "CDK (IaC)", "CodeBuild", "CodeDeploy", "ECR", "CloudFront", "Docker", "Kubernetes", "Cognito"]
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
    period: "Jul 2023 – Present",
    highlights: [
      "Architected and developed high-performance RESTful APIs using Ruby on Rails, seamlessly integrated with React front-ends",
      "Designed and implemented complex relational database schemas for multiple enterprise entities to ensure high-transaction scalability",
      "Led full-stack architecture of multi-tenant SaaS platforms using React and Ruby on Rails",
      "Automated CI/CD workflows using AWS CodeBuild and CodeDeploy, and containerized services with Docker and Kubernetes",
      "Managed development life-cycle for complex migrations from legacy stacks with zero downtime",
      "Mentored engineering teams across sprint planning, technical design, and code quality"
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
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    title: "ScalarHub: Saas Foundation & Tech Migration",
    tech: ["Ruby on Rails API", "React", "MySQL", "AWS EKS", "CDK"],
    status: "Architectural Migration",
    description: "Modernized the foundational AWS SaaS Factory EKS Architecture for high-performance SaaS delivery. Re-engineered the legacy Angular/Spring-Boot/DynamoDB stack into a specialized React, Ruby on Rails, and MySQL ecosystem, providing a robust, multi-tenant-compliant foundation for global SaaS providers.",
    featured: true,
    sourceUrl: "https://github.com/aws-samples/aws-saas-factory-eks-reference-architecture"
  },
  {
    title: "ScalarTax: US Enterprise Tax Compliance",
    tech: ["Ruby on Rails API", "React 18", "Kubernetes", "Docker", "Tax Rule Engine"],
    status: "Enterprise Platform",
    description: "Developed a comprehensive compliance suite for calculating US Sales and Use Tax. Implemented a complex, multi-tenant Ruby-based Tax Rule Engine capable of managing massive transaction volumes across multiple jurisdictions, optimized through a modernized Kubernetes and Docker architecture.",
    featured: true
  },
  {
    title: "Mahakumbh 2025: AI certificate Generation",
    tech: ["Ruby on Rails", "React", "AWS Rekognition", "EXIF AI", "Document AI"],
    status: "Production Ready",
    description: "Architected an automated certificate generation engine for millions of pilgrims. The system extracts details from selfies and travel tickets, cross-referencing GPS coordinates and timestamps to validate on-site presence. Integrated AWS Rekognition for high-precision face matching, ensuring a secure and anti-fraud experience for participants.",
    featured: true
  },
  {
    title: "Island Innovators: Global Reward Ecosystem",
    tech: ["Odoo", "Python", "React", "PostgreSQL", "Custom APIs"],
    status: "Enterprise Portal",
    description: "Architected a custom global membership and partner reward platform by extending the Odoo ERP ecosystem with bespoke Python modules and a React portal. Automated complex partnership benefit tracking and multi-tenant membership logic for sustainable innovation projects.",
    featured: true
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
  { name: "Portfolio", icon: ExternalLink, url: personalInfo.website },
  { name: "Email", icon: Mail, url: `mailto:${personalInfo.email}` },
  { name: "Phone", icon: Phone, url: `tel:${personalInfo.phone}` }
];
