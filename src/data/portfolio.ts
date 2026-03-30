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
    items: ["MuleSoft", "RESTful APIs", "GraphQL", "Microservices", "Odoo Integrations"]
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
    period: "Oct 2023 – Present",
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
    title: "ScalarHub: Foundations & Tech Stack Migration",
    tech: ["Ruby on Rails API", "React", "MySQL", "AWS EKS", "CDK"],
    status: "Architectural Migration",
    description: "Led the massive migration of the foundational AWS SaaS Factory EKS Reference Architecture. Re-engineered the original Angular, Spring-Boot, and DynamoDB stack into a high-performance React, Ruby on Rails, and MySQL ecosystem. Optimized the infrastructure specifically for multi-tenant relational data compliance.",
    featured: true,
    sourceUrl: "https://github.com/aws-samples/aws-saas-factory-eks-reference-architecture"
  },
  {
    title: "ScalarTax: Enterprise Compliance Ecosystem",
    tech: ["Ruby on Rails API", "React 18", "Kubernetes", "Docker", "Tax Rule Engine"],
    status: "Enterprise Platform",
    description: "Prepared the overall architecture and built the full-scale ScalarTax compliance suite on the ScalarHub core. Designed complex database schemas for multiple entities and implemented a central, multi-tenant Tax Rule Engine in Ruby. Developed specialized Rails APIs and React UIs for both Shared Services and Tenant-Specific applications, optimized through a modernized Kubernetes and Docker architecture.",
    featured: true
  },
  {
    title: "Mahakumbh 2025: AI-Driven Verification",
    tech: ["Ruby on Rails", "React", "Face Match & EXIF AI", "Document AI", "AWS S3"],
    status: "Production Ready",
    description: "Developed a high-volume certificate registration and automated verification system for Mahakumbh 2025. Integrated an AI-powered photo verification engine that matches user selfies against official IDs and extracts GPS/Timestamp metadata (EXIF) to validate on-site presence. Leveraged automated document parsing for secure data extraction from travel tickets and hotel proofs, ensuring a seamless, anti-fraud registration experience for millions of pilgrims.",
    featured: true
  },
  {
    title: "Island Innovators: Global Membership & Reward Ecosystem",
    tech: ["Odoo", "Python", "React", "PostgreSQL", "Custom APIs"],
    status: "Enterprise Portal",
    description: "Architected a custom global membership and partner reward platform by extending the Odoo ERP ecosystem with bespoke Python modules and a high-performance React portal. Developed complex multi-tenant membership logic, automated partnership benefit tracking, and secure API integrations to bridge ERP data with a modern user experience for sustainable innovation projects.",
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
  { name: "Email", icon: Mail, url: `mailto:${personalInfo.email}` },
  { name: "Phone", icon: Phone, url: `tel:${personalInfo.phone}` }
];
