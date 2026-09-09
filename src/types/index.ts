export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Quantitative Risk' | 'Security Maturity' | 'Governance & SLA' | 'Third-Party Risk' | 'AI Governance' | 'Privacy & PIMS';
  problem: string;
  approach: string;
  framework: string[];
  technologies: string[];
  output: string;
  businessValue: string;
  githubUrl: string;
  architectureDiagram?: string;
  workflowSteps: { step: number; name: string; detail: string }[];
  metrics: { label: string; value: string }[];
  badgeText: string;
}

export interface CareerRole {
  company: string;
  role: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  focus: string[];
  frameworks: string[];
  technologies?: string[];
  executiveSummary: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  status: 'CERTIFIED' | 'IN PROGRESS' | 'PLANNED';
  code?: string;
  year?: string;
  domain: string;
  category?: 'LEAD AUDITOR' | 'PROFESSIONAL' | 'APPLIED SKILLS' | 'TARGET';
  verificationUrl?: string;
}

export interface FrameworkItem {
  id: string;
  name: string;
  fullName: string;
  domain: 'Governance & Assurance' | 'Cloud & Enterprise' | 'OT / Industrial' | 'Privacy & AI' | 'Risk & Quantification' | 'Resilience & Banking';
  whyItMatters: string;
  howIUseIt: string;
  keyControls: string[];
  accentColor?: string;
}

export interface CapabilityCard {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  coreDeliverables: string[];
  iconName: string;
  metricLabel: string;
  metricValue: string;
}

export interface ThoughtLeadershipTopic {
  id: string;
  title: string;
  category: string;
  summary: string;
  readingTime: string;
  status: 'Coming Soon' | 'Executive Brief Available' | 'Research Paper';
  keyTakeaways: string[];
  date?: string;
}

export interface TechnicalArticle {
  id: string;
  title: string;
  category: 'DevOps' | 'Azure' | 'AWS' | 'Security';
  readTime: string;
  publishedDate: string;
  level: 'Architectural Blueprint' | 'Advanced' | 'Implementation Guide' | 'Security Standard';
  tags: string[];
  summary: string;
  problemStatement: string;
  solutionArchitecture: string;
  publication?: string;
  platform?: string;
  featured?: boolean;
  clapsOrViews?: string;
  externalUrl?: string;
  edition?: string;
  architectureWorkflow?: { step: number; title: string; detail: string }[];
  codeSnippets?: {
    language: string;
    filename: string;
    description: string;
    code: string;
  }[];
  keyTakeaways: string[];
  impactMetrics?: { label: string; value: string }[];
}

export interface FairScenario {
  id: string;
  name: string;
  tefMin: number;
  tefMode: number;
  tefMax: number;
  vulnPercent: number;
  lossMin: number;
  lossMode: number;
  lossMax: number;
  description: string;
}
