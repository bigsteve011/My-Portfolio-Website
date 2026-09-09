import { 
  ProjectCaseStudy, 
  CareerRole, 
  CertificationItem, 
  FrameworkItem, 
  CapabilityCard, 
  ThoughtLeadershipTopic,
  FairScenario 
} from '../types';

export const PERSONAL_INFO = {
  name: 'OMOWUMI Stephen',
  title: 'Senior Cybersecurity, Risk & GRC Professional',
  subtitle: 'Cybersecurity Risk | GRC | IT Audit | Security Assurance | Compliance',
  heroStatement: 'I turn cybersecurity risk into measurable business decisions.',
  heroSupporting: 'Cybersecurity risk, governance, audit and control assurance professional combining deep technical security with enterprise risk, regulatory compliance and quantitative risk modeling to help organizations understand posture, strengthen controls, reduce exposure and demonstrate continuous compliance.',
  location: 'Kraków, Poland',
  profileImage: '/src/assets/images/omowumi_profile_1787607611654.jpg',
  github: 'https://github.com/bigsteve011',
  linkedin: 'https://www.linkedin.com/in/stephen-omowumi-grc-risk/', // placeholder/profile reference
  email: 'talktosteve247@gmail.com',
  experienceYearsIT: 10,
  experienceYearsCyber: 7,
  signatureQuote: 'Most security programs can tell you whether a control exists. I focus on whether the control works, what risk remains, what that risk means to the business, and what should happen next.',
  footerStatement: 'Built around one principle: security decisions should be grounded in evidence, risk and business context.'
};

export const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    id: 'risk-intelligence',
    title: 'Risk Intelligence',
    subtitle: 'Signal to Business Decision',
    summary: 'Translating complex technical vulnerabilities, architecture deficiencies, and threat signals into defensible, business-aligned risk decisions.',
    coreDeliverables: [
      'Inherent & Residual Risk Modeling',
      'Dynamic Enterprise Risk Registers',
      'Executive Risk Committees Reporting',
      'Risk Treatment & Exception Governance'
    ],
    iconName: 'ShieldAlert',
    metricLabel: 'Risk Visibility',
    metricValue: '100% Measurable'
  },
  {
    id: 'control-assurance',
    title: 'Control Assurance',
    subtitle: 'From Existence to Effectiveness',
    summary: 'Evaluating whether security controls are designed properly, operating consistently across environments, and genuinely mitigating threat vectors.',
    coreDeliverables: [
      'Control Design & Operating Effectiveness',
      'Key Control Indicators (KCIs) Metrics',
      'Automated Evidence Collection',
      'Attack-Ready vs Audit-Ready Gap Analysis'
    ],
    iconName: 'ShieldCheck',
    metricLabel: 'Assurance Model',
    metricValue: '6-Stage Ladder'
  },
  {
    id: 'audit-readiness',
    title: 'Audit Readiness',
    subtitle: 'Evidence-Driven Compliance',
    summary: 'Building and leading robust internal & external cybersecurity audit programs in highly regulated banking and enterprise environments.',
    coreDeliverables: [
      'SOC 2, ISO 27001 & DORA Audit Readiness',
      'Audit Evidence Mapping & Workpapers',
      'Finding Remediation & SLA Tracking',
      'Regulator & External Auditor Engagement'
    ],
    iconName: 'FileCheck2',
    metricLabel: 'Audit Coverage',
    metricValue: 'Tier-1 Regulated'
  },
  {
    id: 'governance-strategy',
    title: 'Governance & Strategy',
    subtitle: 'Policy & Enterprise Frameworks',
    summary: 'Architecting scalable security policies, governance structures, and control baselines aligned with international standards and emerging regulations.',
    coreDeliverables: [
      'ISO 27001 / NIST CSF 2.0 Governance Programs',
      'Policy Hierarchy & Standard Operating Procedures',
      'RACI & Accountability Frameworks',
      'Continuous Compliance Automation'
    ],
    iconName: 'Workflow',
    metricLabel: 'Frameworks',
    metricValue: '15+ International'
  },
  {
    id: 'quantitative-risk',
    title: 'Quantitative Cyber Risk',
    subtitle: 'FAIR & Monte Carlo Analytics',
    summary: 'Applying the Factor Analysis of Information Risk (FAIR) framework and statistical simulations to calculate financial loss exposure in currency.',
    coreDeliverables: [
      'Annualized Loss Exposure (ALE) Modeling',
      '10,000+ Trial Monte Carlo Simulations',
      'Beta-PERT Loss Distribution Analysis',
      'Risk-Based Security Budget Justification'
    ],
    iconName: 'BarChart3',
    metricLabel: 'Quant Engine',
    metricValue: 'Python / FAIR'
  },
  {
    id: 'technical-context',
    title: 'Technical & OT Context',
    subtitle: 'Cloud, Infrastructure & ICS/SCADA',
    summary: 'Bridging the technical nuances of multi-cloud architectures, endpoint defense, SIEM analytics, and industrial OT/SCADA environments.',
    coreDeliverables: [
      'Industrial OT/SCADA & ISA/IEC 62443 Assurance',
      'Azure, AWS & Defender Cloud Security',
      'SIEM Detection & Endpoint Posture',
      'Vulnerability Management & Remediation'
    ],
    iconName: 'Cpu',
    metricLabel: 'Ecosystems',
    metricValue: 'IT, Cloud & OT'
  }
];

export const CAREER_EXPERIENCE: CareerRole[] = [
  {
    company: 'State Street Bank',
    role: 'Cybersecurity Auditor',
    period: '2025 – Present',
    location: 'Kraków, Poland',
    isCurrent: true,
    executiveSummary: 'Executed comprehensive cybersecurity and IT control audits across global financial enterprise systems, evaluating control effectiveness, testing evidence, and driving remediation for strict regulatory compliance.',
    focus: [
      'Cybersecurity audit & IT controls testing',
      'Security assurance & operational effectiveness testing',
      'Risk assessments in tier-1 regulated financial services',
      'Audit evidence evaluation, gap validation & remediation governance',
      'Security governance & audit committee reporting'
    ],
    frameworks: ['ISO 27001', 'NIST CSF', 'DORA', 'SOX ITGC', 'COBIT 2019'],
    technologies: ['GRC Systems', 'Audit Workpapers', 'Automated Evidence Platforms', 'Identity & Access Controls']
  },
  {
    company: 'Jacobs',
    role: 'OT Cybersecurity Senior GRC Analyst',
    period: '2023 – 2025',
    location: 'Global / Enterprise',
    isCurrent: false,
    executiveSummary: 'Leading operational technology (OT) cybersecurity governance, control assurance, and risk assessments across mission-critical industrial control systems (ICS, SCADA, DCS, PLC) and infrastructure projects.',
    focus: [
      'OT cybersecurity governance & control frameworks',
      'Industrial cybersecurity risk assessments (SCADA, DCS, PLC)',
      'Security controls alignment for critical infrastructure',
      'Compliance verification and security assurance'
    ],
    frameworks: [
      'NIST SP 800-82',
      'ISA/IEC 62443',
      'NIST CSF',
      'ISO 27001',
      'NERC CIP',
      'NIS2'
    ],
    technologies: ['SCADA', 'DCS', 'PLC', 'Industrial Network Segmentation', 'Purdue Model Architecture']
  },
  {
    company: 'LTIMindtree',
    role: 'Cloud & Infrastructure Security Engineer — GRC Focus',
    period: 'May 2023 – July 2025',
    location: 'Kraków, Poland',
    isCurrent: false,
    executiveSummary: 'Engineered cloud and infrastructure security controls while orchestrating vulnerability governance, endpoint security postures, and GRC integration across Microsoft and multi-cloud environments.',
    focus: [
      'Cloud security governance & posture management',
      'Infrastructure security controls & vulnerability management',
      'Endpoint security posture & compliance baseline enforcement',
      'Microsoft security ecosystem integration & GRC workflows',
      'Security monitoring and automated control validation'
    ],
    frameworks: ['ISO 27001', 'CIS Controls', 'NIST SP 800-53', 'Cloud Security Alliance (CSA CCM)'],
    technologies: [
      'Microsoft Defender for Endpoint',
      'Microsoft Defender for Cloud',
      'Microsoft Sentinel',
      'Azure',
      'Azure Arc',
      'AWS',
      'GCP',
      'SCCM',
      'WSUS',
      'Intune',
      'Jamf',
      'Tanium',
      'Nessus',
      'Qualys',
      'Tenable',
      'Rapid7',
      'Invicti'
    ]
  },
  {
    company: 'Softrays IT',
    role: 'Cybersecurity Analyst / SIEM Engineer',
    period: 'January 2022 – April 2023',
    location: 'Lagos, Nigeria',
    isCurrent: false,
    executiveSummary: 'Delivered security operations, log engineering, and SIEM threat monitoring. Built detection use cases, conducted incident investigations, and provided operational security data for risk analytics.',
    focus: [
      'SIEM architecture and event log monitoring',
      'Cybersecurity operations & incident triage',
      'Detection engineering & security telemetry correlation',
      'Threat analysis and root-cause investigations'
    ],
    frameworks: ['MITRE ATT&CK', 'NIST CSF (Detect/Respond)', 'ISO 27001'],
    technologies: ['Splunk', 'Microsoft Sentinel', 'Log Analytics', 'EDR Telemetry']
  },
  {
    company: 'XCLAIM LABS / Cybarik',
    role: 'Information Security Analyst',
    period: 'May 2020 – December 2021',
    location: 'Lagos, Nigeria',
    isCurrent: false,
    executiveSummary: 'Spearheaded information security baseline assessments, control implementation, security analysis, and compliance verification across emerging enterprise environments.',
    focus: [
      'Information security risk identification & analysis',
      'Internal security controls design and verification',
      'Security operations support & vulnerability reviews',
      'Compliance reviews and security assurance'
    ],
    frameworks: ['ISO 27001', 'NIST CSF', 'PCI DSS', 'NDPR / GDPR'],
    technologies: ['Vulnerability Scanners', 'Firewall Auditing', 'Endpoint Protection', 'Security Documentation']
  }
];

export const EDUCATION_ITEMS = [
  {
    degree: 'M.A. Business Administration / Management',
    institution: 'Poland',
    period: 'Completed',
    focus: 'Corporate Strategy, Enterprise Governance, Financial Impact, Executive Leadership & Risk Management',
    advantage: 'Enables high-level strategic communication with Boards, CISOs, and Audit Directors, linking technical security metrics to enterprise EBITDA and financial exposure.'
  },
  {
    degree: 'M.Sc. Telecommunications Management',
    institution: 'Ghana',
    period: 'January 2024',
    focus: 'Advanced Telecommunication Networks, Network Security, Protocols, Infrastructure & Systems Architecture',
    advantage: 'Provides deep foundational mastery in network topology, routing protocols, packet flows, and enterprise infrastructure underpinning all cyber defense.'
  },
  {
    degree: 'B.Sc. Telecommunications Science',
    institution: 'Nigeria',
    period: 'Completed',
    focus: 'Signals & Systems, Digital Communications, Hardware Architecture, Data Transmission & Network Engineering',
    advantage: 'Gives an engineering-grade technical baseline that distinguishes Stephen from conventional, non-technical GRC practitioners.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'ISO/IEC 27001:2022 Lead Auditor',
    issuer: 'International Accreditation / Certification Body',
    status: 'CERTIFIED',
    year: '2023',
    domain: 'Information Security Management Systems (ISMS)',
    category: 'LEAD AUDITOR'
  },
  {
    name: 'ISO/IEC 27001:2022 Lead Implementer',
    issuer: 'International Accreditation / Certification Body',
    status: 'CERTIFIED',
    year: '2023',
    domain: 'ISMS Control Implementation & Governance',
    category: 'LEAD AUDITOR'
  },
  {
    name: 'ISO/IEC 42001 Lead Auditor',
    issuer: 'AI Management Systems',
    status: 'CERTIFIED',
    year: '2024',
    domain: 'Artificial Intelligence Governance & Risk Management',
    category: 'LEAD AUDITOR'
  },
  {
    name: 'ISO/IEC 27701 Lead Auditor',
    issuer: 'Privacy Information Management Systems (PIMS)',
    status: 'CERTIFIED',
    year: '2024',
    domain: 'Privacy Governance, GDPR & Data Protection',
    category: 'LEAD AUDITOR'
  },
  {
    name: 'CompTIA CySA+ (Cybersecurity Analyst)',
    issuer: 'CompTIA',
    status: 'CERTIFIED',
    year: '2022',
    domain: 'Security Analytics, Threat Detection & Vulnerability Management',
    category: 'PROFESSIONAL'
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    status: 'CERTIFIED',
    year: '2021',
    domain: 'Core Cybersecurity, Threat Modeling & Defense',
    category: 'PROFESSIONAL'
  },
  {
    name: 'Certified Security Awareness Specialist',
    issuer: 'Proofpoint',
    status: 'CERTIFIED',
    year: '2023',
    domain: 'Human Risk, Phishing Defense & Security Culture',
    category: 'PROFESSIONAL'
  },
  {
    name: 'CGRCA (Certified Governance, Risk & Compliance Auditor)',
    issuer: 'GRC Certification Body',
    status: 'CERTIFIED',
    year: '2023',
    domain: 'GRC Auditing & Regulatory Assurance',
    category: 'PROFESSIONAL'
  },
  {
    name: 'CPPS (Certified Professional in Privacy & Security)',
    issuer: 'Professional Standards Institute',
    status: 'CERTIFIED',
    year: '2023',
    domain: 'Integrated Privacy & Information Security',
    category: 'PROFESSIONAL'
  },
  {
    name: 'Microsoft Applied Skills: Resolve GitHub issues by using GitHub Copilot',
    issuer: 'Microsoft',
    status: 'CERTIFIED',
    code: 'C9A23D7C53EBF73',
    year: '2024',
    domain: 'AI-Assisted DevSecOps, Secure Code Remediation & GitHub Copilot',
    category: 'APPLIED SKILLS'
  },
  {
    name: 'Microsoft Applied Skills: Administer Active Directory Domain Services',
    issuer: 'Microsoft',
    status: 'CERTIFIED',
    code: 'FA1EA5BC65B07758',
    year: '2024',
    domain: 'Enterprise Identity Governance, AD DS Administration & Access Controls',
    category: 'APPLIED SKILLS'
  },
  {
    name: 'Microsoft Applied Skills: Implement security through a pipeline using Azure DevOps',
    issuer: 'Microsoft',
    status: 'CERTIFIED',
    code: '1132AA021C3A10E',
    year: '2024',
    domain: 'DevSecOps Pipeline Security, SAST/DAST Automation & Azure DevOps',
    category: 'APPLIED SKILLS'
  },
  {
    name: 'Microsoft Applied Skills: Deploy cloud-native apps using Azure Container Apps',
    issuer: 'Microsoft',
    status: 'CERTIFIED',
    code: 'C2F0EC15A4B442FA',
    year: '2024',
    domain: 'Cloud-Native Architecture, Microservices & Container Security',
    category: 'APPLIED SKILLS'
  },
  {
    name: 'Microsoft Applied Skills: Get started with identities and access using Microsoft Entra',
    issuer: 'Microsoft',
    status: 'CERTIFIED',
    code: '9D440CFF5C109E52',
    year: '2024',
    domain: 'Microsoft Entra ID, Zero Trust Identity & Access Management (IAM)',
    category: 'APPLIED SKILLS'
  },
  {
    name: 'Microsoft Applied Skills: Configure secure access to your workloads using Azure networking',
    issuer: 'Microsoft',
    status: 'CERTIFIED',
    code: 'A5F01B6348FE27F3',
    year: '2024',
    domain: 'Azure Network Security, NSGs, Private Endpoints & Zero Trust Segmentation',
    category: 'APPLIED SKILLS'
  },
  {
    name: 'Microsoft Applied Skills: Get started with cloud security and monitoring tasks',
    issuer: 'Microsoft',
    status: 'CERTIFIED',
    code: 'B8644D2FB804A718',
    year: '2024',
    domain: 'Cloud Security Posture Management (CSPM), Threat Detection & Monitoring',
    category: 'APPLIED SKILLS'
  },
  {
    name: 'Microsoft Applied Skills: Deploy and configure Azure Monitor',
    issuer: 'Microsoft',
    status: 'CERTIFIED',
    code: 'BB7C918651C85096',
    year: '2024',
    domain: 'Cloud Security Telemetry, Log Analytics Workspaces & SIEM Observability',
    category: 'APPLIED SKILLS'
  },
  {
    name: 'Microsoft Applied Skills: Get started with Azure management tasks',
    issuer: 'Microsoft',
    status: 'CERTIFIED',
    code: '18F797F13374CF34',
    year: '2024',
    domain: 'Cloud Infrastructure Governance, Resource Hierarchy & Azure Policy Compliance',
    category: 'APPLIED SKILLS'
  },
  {
    name: 'Microsoft Applied Skills: Secure storage for Azure Files and Azure Blob Storage',
    issuer: 'Microsoft',
    status: 'CERTIFIED',
    code: '7C364BCCB8FF667E',
    year: '2024',
    domain: 'Cloud Data Protection, At-Rest/In-Transit Encryption & Storage Access Control',
    category: 'APPLIED SKILLS'
  },
  {
    name: 'CISA (Certified Information Systems Auditor)',
    issuer: 'ISACA',
    status: 'IN PROGRESS',
    year: 'Target 2026',
    domain: 'IT Audit, Assurance, Control & Security',
    category: 'TARGET'
  },
  {
    name: 'CISM (Certified Information Security Manager)',
    issuer: 'ISACA',
    status: 'PLANNED',
    year: 'Target 2026',
    domain: 'Information Security Governance & Program Management',
    category: 'TARGET'
  }
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'fair-risk-engine',
    title: 'FAIR Quantitative Cyber Risk Analysis Engine',
    subtitle: 'Python & Monte Carlo Financial Risk Quantification Engine',
    category: 'Quantitative Risk',
    badgeText: 'FAIR / Monte Carlo / 10K Trials',
    githubUrl: 'https://github.com/bigsteve011/bigsteve011',
    problem: 'Traditional qualitative risk matrices (High/Medium/Low 5x5 grids) suffer from severe cognitive bias, lack defensible mathematical backing, and fail to answer the primary C-Suite question: "What is our financial exposure in dollars/euros, and how much risk reduction do we get per security investment?"',
    approach: 'Engineered a standalone Python quantitative risk engine using the Factor Analysis of Information Risk (FAIR™) standard. Leveraged Beta-PERT distributions to model calibrated expert estimates of Threat Event Frequency (TEF), Vulnerability (Threat Capability vs Resistance Strength), and Loss Magnitude. Executed 10,000-trial Monte Carlo simulations via NumPy and SciPy.',
    framework: ['FAIR Standard', 'ISO 27005', 'NIST SP 800-30', 'Beta-PERT / Monte Carlo'],
    technologies: ['Python', 'NumPy', 'SciPy', 'Pandas', 'Matplotlib', 'Streamlit UI'],
    output: 'Generates full probability distribution curves, Annualized Loss Exposure (ALE), Expected Loss, Loss Exceedance Curves (LECs), and 10th/50th/90th percentile financial exposure ranges (e.g. P90 Max Probable Loss).',
    businessValue: 'Allows CISOs and Risk Committees to evaluate cybersecurity investments against financial return on investment (ROI), justify cyber insurance limits, and replace subjective risk colors with board-ready financial distributions.',
    workflowSteps: [
      { step: 1, name: 'Threat Event Parameterization', detail: 'Calibrating Min, Mode, and Max parameters for Threat Event Frequency (TEF).' },
      { step: 2, name: 'Loss Magnitude Scenarios', detail: 'Modeling primary response losses and secondary regulatory/reputational liabilities via Beta-PERT.' },
      { step: 3, name: '10,000 Monte Carlo Trials', detail: 'Sampling combined distributions to compute empirical loss likelihoods.' },
      { step: 4, name: 'Annualized Loss Exposure (ALE)', detail: 'Deriving expected financial losses and loss exceedance probability tables.' }
    ],
    metrics: [
      { label: 'Simulation Trials', value: '10,000+' },
      { label: 'Statistical Engine', value: 'Beta-PERT' },
      { label: 'Output Metric', value: 'ALE / P90 Loss' },
      { label: 'Language', value: 'Python 3.11' }
    ]
  },
  {
    id: 'nist-csf-maturity-tool',
    title: 'NIST CSF 2.0 Security Maturity & Control Effectiveness Tool',
    subtitle: 'Maturity Scoring (1–5) with Operational Attack-Ready vs Audit-Ready Differentiation',
    category: 'Security Maturity',
    badgeText: 'NIST CSF 2.0 / Govern to Recover',
    githubUrl: 'https://github.com/bigsteve011/bigsteve011',
    problem: 'Organizations frequently pass compliance audits by producing static policy documents ("Audit Ready"), yet suffer catastrophic breaches because controls are poorly configured or untested under adversary conditions ("Attack Ready").',
    approach: 'Developed an end-to-end NIST CSF 2.0 assessment framework covering all six core functions (Govern, Identify, Protect, Detect, Respond, Recover). Designed dual-dimension scoring: Implementation Maturity (Tier 1–5) and Control Operational Effectiveness (0.0–1.0 coefficient) backed by evidentiary verification.',
    framework: ['NIST CSF 2.0', 'CIS Critical Security Controls v8', 'ISO/IEC 27001:2022 Annex A'],
    technologies: ['Python', 'Structured Data Schema', 'Data Visualization Engine', 'Control Rubric'],
    output: 'Interactive function-level radar profiles, gap heatmaps, prioritized remediation backlogs, and an automated "Attacker vs Auditor" divergence ratio.',
    businessValue: 'Delivers a realistic, unvarnished view of enterprise security posture, eliminating false senses of security created by checklist compliance.',
    workflowSteps: [
      { step: 1, name: 'Function & Category Scoping', detail: 'Evaluating 106 subcategories across GOVERN, IDENTIFY, PROTECT, DETECT, RESPOND, RECOVER.' },
      { step: 2, name: 'Dual-Score Measurement', detail: 'Rating policy maturity (1-5) and continuous technical effectiveness coefficient (0.0 - 1.0).' },
      { step: 3, name: 'Divergence Gap Analysis', detail: 'Isolating high-compliance / low-effectiveness controls prone to zero-day bypass.' },
      { step: 4, name: 'Board Executive Scorecard', detail: 'Auto-generating executive radar visuals and prioritized risk reduction roadmaps.' }
    ],
    metrics: [
      { label: 'Framework Functions', value: '6 CSF Domains' },
      { label: 'Evaluation Granularity', value: '106 Subcategories' },
      { label: 'Effectiveness Index', value: '0.0 – 1.0 Scale' },
      { label: 'Audit vs Attack Ratio', value: 'Automated' }
    ]
  },
  {
    id: 'enterprise-risk-remediation-engine',
    title: 'Enterprise Risk & Remediation Governance Engine',
    subtitle: 'Full Finding-to-Closure Lifecycle with Dynamic SLA & Residual Risk Calculation',
    category: 'Governance & SLA',
    badgeText: 'Lifecycle Risk / SLA Governance',
    githubUrl: 'https://github.com/bigsteve011/bigsteve011',
    problem: 'Vulnerabilities and audit findings often sit unaddressed in spreadsheets without clear business ownership, formal risk acceptance workflows, or enforceable remediation SLAs, leading to systemic control degradation.',
    approach: 'Created an enterprise remediation governance engine that ingests audit findings and vulnerability scans, maps them to control frameworks (ISO 27001, NIST CSF), calculates Inherent Risk, assigns automated SLA countdowns based on criticality, and tracks residual risk upon mitigation.',
    framework: ['ISO/IEC 27001', 'NIST SP 800-53', 'COBIT 2019', 'FAIR Risk Treatment'],
    technologies: ['Python', 'SQL Database Engine', 'Automated SLA Escalator', 'Reporting Dashboard'],
    output: 'Comprehensive Risk Register with automated status tracking, breach SLA alert triggers, compensating control validation, and formal Risk Acceptance artifact generation.',
    businessValue: 'Ensures 100% accountability for open audit issues, enforces remediation timeliness, and provides Audit Committees with auditable evidence of risk reduction over time.',
    workflowSteps: [
      { step: 1, name: 'Finding Intake & Control Mapping', detail: 'Tagging audit/technical issues with asset criticality and framework IDs.' },
      { step: 2, name: 'Inherent Risk Rating', detail: 'Computing initial risk score based on exploitability, impact, and blast radius.' },
      { step: 3, name: 'SLA & Ownership Assignment', detail: 'Binding owner, treatment plan, and dynamic SLA deadlines (Critical 7d, High 30d, Med 90d).' },
      { step: 4, name: 'Residual Risk & Closure Audit', detail: 'Testing re-verification evidence before formally closing findings.' }
    ],
    metrics: [
      { label: 'SLA Enforcement', value: 'Dynamic Triggers' },
      { label: 'Control Mapping', value: 'NIST & ISO 27001' },
      { label: 'Risk Traceability', value: '100% End-to-End' },
      { label: 'Audit Trail', value: 'Immutable Logs' }
    ]
  },
  {
    id: 'tprm-vendor-due-diligence',
    title: 'Third-Party Risk & Vendor Due Diligence Framework',
    subtitle: 'Multi-Tier Supplier Assessment, Questionnaire Engine & Contractual DPA Review',
    category: 'Third-Party Risk',
    badgeText: 'TPRM / Vendor Governance',
    githubUrl: 'https://github.com/bigsteve011/bigsteve011',
    problem: 'Over 60% of modern data breaches originate in the third-party supply chain. Organizations struggle to tier hundreds of vendors, validate SOC 2/ISO certifications, and evaluate subprocessor privacy risks before onboarding.',
    approach: 'Engineered a multi-tier vendor risk assessment framework utilizing inherent risk tiering (Tier 1 Critical to Tier 4 Low), dynamic SIG/CAIQ-aligned security questionnaires, automated evidence verification checks (SOC 2 Type II, ISO 27001, Pen Test reports), and DPA/MSA security clauses.',
    framework: ['ISO 27001 A.15', 'NIST SP 800-161', 'GDPR Article 28', 'DORA Third-Party Risk'],
    technologies: ['Python Assessment Scripting', 'Tiering Scoring Logic', 'Questionnaire Matrix', 'Vendor Portal'],
    output: 'Automated Vendor Risk Profile, Tier-based Review Cadence, Vendor Risk Register, and Go/No-Go Onboarding recommendations with contractual security requirements.',
    businessValue: 'Shields the enterprise from supply chain contagion, fulfills DORA & GDPR vendor management mandates, and establishes continuous supplier security monitoring.',
    workflowSteps: [
      { step: 1, name: 'Inherent Risk Tiering', detail: 'Classifying vendors based on data access (PII, Financial), system interconnectivity, and business criticality.' },
      { step: 2, name: 'Due Diligence & Evidence Collection', detail: 'Reviewing SOC 2 Type II reports, ISO 27001 certificates, and third-party penetration tests.' },
      { step: 3, name: 'Subprocessor & DPA Audit', detail: 'Validating fourth-party dependencies and contractual security addendums.' },
      { step: 4, name: 'Continuous Monitoring & Re-assessment', detail: 'Triggering annual re-assessments and threat intelligence feed checks.' }
    ],
    metrics: [
      { label: 'Tiering Levels', value: 'Tier 1 to Tier 4' },
      { label: 'Evidence Scrutiny', value: 'SOC 2 & ISO 27001' },
      { label: 'Regulatory Scope', value: 'DORA & GDPR Art 28' },
      { label: 'Vendor Lifecycle', value: 'Onboarding to Exit' }
    ]
  },
  {
    id: 'iso-42001-ai-governance',
    title: 'ISO 42001 AI Governance & Audit Evidence Mapping',
    subtitle: 'Artificial Intelligence Management System (AIMS) Control Verification Architecture',
    category: 'AI Governance',
    badgeText: 'ISO 42001 / AI Risk & Safety',
    githubUrl: 'https://github.com/bigsteve011/bigsteve011',
    problem: 'The rapid deployment of Generative AI, Large Language Models (LLMs), and autonomous algorithms creates unprecedented risks around data leakage, model drift, algorithmic bias, hallucination, and regulatory non-compliance (EU AI Act).',
    approach: 'Constructed an ISO/IEC 42001:2023 AI Management System governance framework. Mapped AI risk assessment methodologies across data provenance, model transparency, human-in-the-loop oversight, cybersecurity defenses, and continuous audit evidence collection.',
    framework: ['ISO/IEC 42001:2023', 'NIST AI RMF 1.0', 'EU AI Act', 'ISO/IEC 27001:2022'],
    technologies: ['AI Governance Rubric', 'Model Card Auditing', 'Risk Classification Matrix', 'Compliance Workpapers'],
    output: 'AI System Registry, Risk Impact Assessment templates, Model Card audit checklists, and an ISO 42001 Statement of Applicability (SoA) for AI workloads.',
    businessValue: 'Positions organizations to safely adopt advanced enterprise AI while establishing provable governance that satisfies external auditors, board risk committees, and EU AI Act requirements.',
    workflowSteps: [
      { step: 1, name: 'AI Asset Inventory & Classification', detail: 'Cataloging all internal & third-party AI models by autonomy and risk tier (Unacceptable, High, Limited, Minimal).' },
      { step: 2, name: 'AI Risk & Impact Assessment', detail: 'Evaluating prompt injection vulnerability, training data integrity, privacy leakage, and hallucination bounds.' },
      { step: 3, name: 'Control Implementation & SoA', detail: 'Deploying ISO 42001 Annex A controls for transparency, human oversight, and data validation.' },
      { step: 4, name: 'Audit Evidence Verification', detail: 'Maintaining reproducible verification logs and algorithmic performance telemetry.' }
    ],
    metrics: [
      { label: 'Standard', value: 'ISO/IEC 42001' },
      { label: 'AI Risk Alignment', value: 'NIST AI RMF' },
      { label: 'Regulatory Prep', value: 'EU AI Act Ready' },
      { label: 'Audit Tooling', value: 'AIMS SoA Generator' }
    ]
  },
  {
    id: 'iso-27701-privacy-blueprint',
    title: 'ISO 27701 Privacy Governance & PIMS Blueprint',
    subtitle: 'Privacy Information Management System (PIMS) Architecture, GDPR RoPA & Data Subject Rights',
    category: 'Privacy & PIMS',
    badgeText: 'ISO 27701 / GDPR / PIMS',
    githubUrl: 'https://github.com/bigsteve011/bigsteve011',
    problem: 'Organizations struggle to harmonize privacy mandates (GDPR, national privacy laws) with their existing ISO 27001 ISMS, resulting in duplicated compliance efforts, unmapped data flows, and inadequate controller/processor segregation.',
    approach: 'Architected an integrated Privacy Information Management System (PIMS) extending ISO 27001 into ISO/IEC 27701:2019. Structured Records of Processing Activities (RoPA), Data Protection Impact Assessment (DPIA) workflows, and explicit controller vs. processor control matrices.',
    framework: ['ISO/IEC 27701:2019', 'GDPR', 'ISO/IEC 27001:2022', 'ePrivacy Directive'],
    technologies: ['RoPA Data Flow Mapper', 'DPIA Assessment Logic', 'PIMS SoA Framework', 'Privacy Audit Checklists'],
    output: 'Turnkey PIMS architecture containing automated RoPA registers, DPIA threshold criteria, Data Subject Access Request (DSAR) SLA trackers, and cross-border transfer assessments.',
    businessValue: 'Dramatically streamlines dual ISMS/PIMS certifications, eliminates privacy compliance friction, and ensures rigorous GDPR defensibility during regulatory inspections.',
    workflowSteps: [
      { step: 1, name: 'PIMS Scope & Extension', detail: 'Extending existing ISO 27001 ISMS clauses to include PII controller and processor requirements.' },
      { step: 2, name: 'RoPA & Data Flow Mapping', detail: 'Documenting processing purposes, legal bases, retention schedules, and international transfers.' },
      { step: 3, name: 'DPIA Risk Assessment', detail: 'Assessing high-risk processing operations and calculating privacy risk mitigation.' },
      { step: 4, name: 'Statement of Applicability (SoA)', detail: 'Verifying 31 PII controller controls and 18 PII processor controls.' }
    ],
    metrics: [
      { label: 'Standard', value: 'ISO/IEC 27701' },
      { label: 'Data Regulation', value: 'GDPR / Art 30' },
      { label: 'Control Domains', value: 'Controller & Processor' },
      { label: 'Artifact', value: 'RoPA & PIMS SoA' }
    ]
  }
];

export const FRAMEWORKS_DATA: FrameworkItem[] = [
  {
    id: 'iso-27001',
    name: 'ISO/IEC 27001:2022',
    fullName: 'Information Security Management System (ISMS)',
    domain: 'Governance & Assurance',
    whyItMatters: 'The gold standard for establishing, implementing, maintaining, and continually improving an enterprise Information Security Management System.',
    howIUseIt: 'I lead end-to-end ISMS audits, design Annex A control baselines (Organizational, People, Physical, Technological), and craft auditable Statements of Applicability (SoA).',
    keyControls: ['A.5 Organizational', 'A.6 People', 'A.7 Physical', 'A.8 Technological Controls', 'Continuous ISMS Improvement']
  },
  {
    id: 'iso-27005',
    name: 'ISO/IEC 27005',
    fullName: 'Information Security Risk Management',
    domain: 'Risk & Quantification',
    whyItMatters: 'Provides structured guidance on conducting information security risk assessments aligned with ISO 27001 and ISO 31000 principles.',
    howIUseIt: 'I utilize ISO 27005 to structure risk identification, risk estimation, criteria definition, risk evaluation, and risk treatment options.',
    keyControls: ['Risk Identification', 'Risk Estimation', 'Risk Evaluation', 'Risk Treatment', 'Risk Acceptance']
  },
  {
    id: 'iso-27701',
    name: 'ISO/IEC 27701:2019',
    fullName: 'Privacy Information Management System (PIMS)',
    domain: 'Privacy & AI',
    whyItMatters: 'Extends ISO 27001 to govern Personally Identifiable Information (PII) processing, directly demonstrating GDPR compliance.',
    howIUseIt: 'I map PII controller and processor requirements, structure Data Protection Impact Assessments (DPIAs), and build auditable RoPA registers.',
    keyControls: ['PII Controller Controls', 'PII Processor Controls', 'RoPA', 'Data Subject Rights', 'Breach Notification']
  },
  {
    id: 'iso-42001',
    name: 'ISO/IEC 42001:2023',
    fullName: 'Artificial Intelligence Management System (AIMS)',
    domain: 'Privacy & AI',
    whyItMatters: 'The world’s first certifiable standard for responsible AI governance, AI risk management, and algorithmic assurance.',
    howIUseIt: 'I conduct AI governance audits, evaluate AI transparency and bias controls, and establish AIMS policies aligned with the EU AI Act.',
    keyControls: ['AI Risk Assessment', 'Data Provenance', 'Human Oversight', 'Model Explainability', 'Continuous AI Audit']
  },
  {
    id: 'nist-csf-2',
    name: 'NIST CSF 2.0',
    fullName: 'NIST Cybersecurity Framework 2.0',
    domain: 'Cloud & Enterprise',
    whyItMatters: 'A comprehensive, outcomes-driven framework updated in 2024 to include the vital GOVERN function alongside identify, protect, detect, respond, and recover.',
    howIUseIt: 'I conduct organizational maturity assessments, construct target profiles, and measure operational control effectiveness vs documentation.',
    keyControls: ['Govern (GV)', 'Identify (ID)', 'Protect (PR)', 'Detect (DE)', 'Respond (RS)', 'Recover (RC)']
  },
  {
    id: 'nist-800-53',
    name: 'NIST SP 800-53 Rev 5',
    fullName: 'Security and Privacy Controls for Information Systems and Organizations',
    domain: 'Cloud & Enterprise',
    whyItMatters: 'The most granular catalog of security and privacy controls globally, providing comprehensive baselines for federal and enterprise systems.',
    howIUseIt: 'I leverage 800-53 for deep-dive technical control specification, control overlays, and mapping against hybrid cloud architectures.',
    keyControls: ['Access Control (AC)', 'System & Comm Protection (SC)', 'Audit & Accountability (AU)', 'Incident Response (IR)']
  },
  {
    id: 'nist-800-82',
    name: 'NIST SP 800-82 Rev 3',
    fullName: 'Guide to Operational Technology (OT) Security',
    domain: 'OT / Industrial',
    whyItMatters: 'The benchmark guide for securing Industrial Control Systems (ICS), SCADA systems, DCS, and Programmable Logic Controllers (PLCs).',
    howIUseIt: 'I apply 800-82 at Jacobs to assess OT network architecture, zone/conduit segmentation, PLC patch management, and safety system isolation.',
    keyControls: ['Purdue Model Architecture', 'ICS Patching & Vulnerability', 'Air-Gap / Diode Controls', 'Safety Instrumented Systems (SIS)']
  },
  {
    id: 'isa-iec-62443',
    name: 'ISA/IEC 62443',
    fullName: 'Industrial Network and System Security Standard',
    domain: 'OT / Industrial',
    whyItMatters: 'The globally accepted standard suite for security across all stages of the industrial automation and control systems (IACS) lifecycle.',
    howIUseIt: 'I evaluate Security Levels (SL-1 to SL-4), establish Zones and Conduits, and audit system integrator & asset owner requirements.',
    keyControls: ['Security Levels (SL 1-4)', 'Foundational Requirements (FR 1-7)', 'Zones & Conduits', 'IACS Security Management (Part 2-1)']
  },
  {
    id: 'dora',
    name: 'DORA',
    fullName: 'Digital Operational Resilience Act (EU 2022/2554)',
    domain: 'Resilience & Banking',
    whyItMatters: 'Enforces rigorous digital operational resilience, ICT risk management, threat-led penetration testing, and third-party ICT oversight in financial services.',
    howIUseIt: 'I audit ICT risk governance, critical third-party contractual terms, incident classification pipelines, and operational resilience testing.',
    keyControls: ['ICT Risk Management Framework', 'Major ICT Incident Reporting', 'Digital Resilience Testing (TLPT)', 'Third-Party ICT Risk']
  },
  {
    id: 'nerc-cip',
    name: 'NERC CIP',
    fullName: 'Critical Infrastructure Protection Reliability Standards',
    domain: 'OT / Industrial',
    whyItMatters: 'Mandatory cybersecurity standards designed to secure the bulk electric system and critical energy assets against cyber incidents.',
    howIUseIt: 'I reference NERC CIP for Electronic Security Perimeters (ESP), Physical Security Perimeters (PSP), and transient cyber asset controls.',
    keyControls: ['CIP-002 Bulk Electric Assets', 'CIP-005 Electronic Perimeters', 'CIP-007 System Security', 'CIP-010 Configuration Change']
  },
  {
    id: 'nis2',
    name: 'NIS2 Directive',
    fullName: 'Directive (EU) 2022/2555 on Network & Information Security',
    domain: 'Governance & Assurance',
    whyItMatters: 'EU-wide legislation establishing strict baseline security measures, supply chain requirements, management accountability, and 24h reporting.',
    howIUseIt: 'I help essential and important entities map risk analysis policies, supply chain security reviews, and rapid incident handling workflows.',
    keyControls: ['Risk Analysis & InfoSec Policies', 'Supply Chain Security', 'Incident Handling (24h Alert)', 'Management Body Accountability']
  },
  {
    id: 'gdpr',
    name: 'GDPR',
    fullName: 'General Data Protection Regulation (EU 2016/679)',
    domain: 'Privacy & AI',
    whyItMatters: 'The benchmark data privacy framework mandating principles of lawfulness, data minimization, privacy by design, and strict penalty structures.',
    howIUseIt: 'I audit Art. 30 RoPA registers, review Art. 28 Data Processing Agreements with subprocessors, and conduct Art. 35 DPIAs.',
    keyControls: ['Article 28 DPA & Subprocessors', 'Article 30 RoPA', 'Article 32 Security of Processing', 'Article 35 DPIA']
  },
  {
    id: 'cobit-2019',
    name: 'COBIT 2019',
    fullName: 'Control Objectives for Information and Related Technologies',
    domain: 'Governance & Assurance',
    whyItMatters: 'A comprehensive business framework for the governance and management of enterprise information and technology.',
    howIUseIt: 'I use COBIT to align IT governance objectives (Evaluate, Direct, Monitor) with enterprise strategy and internal audit testing programs.',
    keyControls: ['EDM01-05 Evaluate, Direct, Monitor', 'APO12 Manage Risk', 'APO13 Manage Security', 'MEA01-03 Monitor & Assess']
  },
  {
    id: 'cis-controls',
    name: 'CIS Controls v8',
    fullName: 'Center for Internet Security Critical Security Controls',
    domain: 'Cloud & Enterprise',
    whyItMatters: 'A prioritized set of 18 critical actions for cyber defense that provide specific, actionable ways to stop today’s most pervasive attacks.',
    howIUseIt: 'I structure technical control baselines across Implementation Groups 1, 2, and 3, tracking automated configuration drift.',
    keyControls: ['CIS 1-2 Asset/Software Inventory', 'CIS 4 Secure Config', 'CIS 5 Account Mgmt', 'CIS 7 Vulnerability Mgmt']
  },
  {
    id: 'pci-dss',
    name: 'PCI DSS v4.0',
    fullName: 'Payment Card Industry Data Security Standard',
    domain: 'Resilience & Banking',
    whyItMatters: 'Global standard for organizations handling branded credit cards, enforcing strict controls over cardholder data environments (CDE).',
    howIUseIt: 'I review network segmentation, encryption key management, access controls, and quarterly vulnerability scanning requirements.',
    keyControls: ['Build & Maintain Secure Network', 'Protect Account Data', 'Maintain Vulnerability Mgmt', 'Strong Access Control Measures']
  }
];

export const TECHNICAL_TOOLKIT = {
  grc: [
    { name: 'ServiceNow IRM', level: 'Expert', description: 'Enterprise risk register, policy management, audit workpapers, and automated compliance tracking.' },
    { name: 'RSA Archer', level: 'Advanced', description: 'Enterprise GRC platform for issue management, risk assessments, and vendor governance.' },
    { name: 'MetricStream', level: 'Advanced', description: 'Integrated risk management, internal audit, and regulatory compliance workflows.' },
    { name: 'SimpleRisk', level: 'Expert', description: 'Open-source risk management platform for threat scoring, risk mitigation, and residual risk tracking.' },
    { name: 'Excel / PowerQuery', level: 'Expert', description: 'Advanced quantitative modeling, Monte Carlo simulation tables, and pivot risk analytics.' },
    { name: 'Confluence / Jira', level: 'Expert', description: 'Collaborative security documentation, remediation ticket workflows, and SLA tracking.' }
  ],
  siem: [
    { name: 'Microsoft Sentinel', level: 'Expert', description: 'Cloud-native SIEM/SOAR: KQL queries, analytic rule creation, hunting, and incident triage.' },
    { name: 'Splunk', level: 'Advanced', description: 'Enterprise log aggregation, SPL correlation queries, dashboard generation, and security monitoring.' }
  ],
  microsoftSecurity: [
    { name: 'Microsoft Defender for Endpoint', level: 'Expert', description: 'EDR telemetry, behavioral protection, vulnerability management, and threat containment.' },
    { name: 'Microsoft Defender for Cloud', level: 'Expert', description: 'Cloud security posture management (CSPM), regulatory compliance dashboards, and workload protection (CWPP).' },
    { name: 'Azure Security Center', level: 'Expert', description: 'Centralized cloud security governance, security score optimization, and baseline monitoring.' }
  ],
  cloud: [
    { name: 'Microsoft Azure', level: 'Expert', description: 'Azure RBAC, Policy, Key Vault, Network Security Groups, Subscriptions, and landing zone governance.' },
    { name: 'AWS', level: 'Advanced', description: 'AWS IAM, GuardDuty, Security Hub, S3 bucket policies, and AWS CloudTrail compliance.' },
    { name: 'Google Cloud Platform (GCP)', level: 'Advanced', description: 'GCP Security Command Center, IAM governance, Cloud Asset Inventory, and VPC service controls.' },
    { name: 'Azure Arc', level: 'Advanced', description: 'Extending Azure security, governance, and Defender controls across on-prem and hybrid infrastructure.' }
  ],
  vulnerabilityMgmt: [
    { name: 'Tenable / Nessus', level: 'Expert', description: 'Credentialed vulnerability scans, compliance audit files, CVSS scoring, and remediation prioritization.' },
    { name: 'Qualys VMDR', level: 'Advanced', description: 'Vulnerability management, detection and response, policy compliance, and cloud agent deployment.' },
    { name: 'Rapid7 InsightVM', level: 'Advanced', description: 'Risk scoring, attack surface analysis, and remediation project management.' },
    { name: 'Invicti (Netsparker)', level: 'Advanced', description: 'Dynamic application security testing (DAST) and web vulnerability verification.' }
  ],
  infrastructureEndpoint: [
    { name: 'Microsoft Intune', level: 'Expert', description: 'Mobile Device Management (MDM), compliance policies, BitLocker enforcement, and conditional access.' },
    { name: 'SCCM / WSUS', level: 'Expert', description: 'Enterprise patch governance, OS deployment, and software inventory validation.' },
    { name: 'Tanium', level: 'Advanced', description: 'Real-time endpoint visibility, asset discovery, and rapid compliance query execution.' },
    { name: 'Jamf Pro', level: 'Advanced', description: 'macOS fleet management, CIS benchmark compliance, and security baseline distribution.' }
  ],
  automationEngineering: [
    { name: 'Python 3', level: 'Expert', description: 'Statistical risk engines, FAIR Monte Carlo simulations, NumPy/SciPy analytics, and API automation.' },
    { name: 'PowerShell', level: 'Expert', description: 'Windows/Active Directory audit automation, Azure CLI scripting, and security baseline validation.' },
    { name: 'Azure CLI / Bash', level: 'Advanced', description: 'Infrastructure configuration verification, cloud audit scripting, and report automation.' },
    { name: 'Terraform', level: 'Proficient', description: 'Infrastructure as Code (IaC) security scanning, policy-as-code validation, and drift detection.' }
  ]
};

export const SECURITY_PHILOSOPHY = [
  {
    number: '01',
    principle: 'Risk before bureaucracy.',
    rationale: 'Security controls should exist because they measurably reduce meaningful risk to the organization, not merely to fulfill a bureaucratic checklist.'
  },
  {
    number: '02',
    principle: 'Evidence over assumptions.',
    rationale: 'A policy document is merely an intention. Real security assurance requires empirical, testable evidence that controls operate consistently under stress.'
  },
  {
    number: '03',
    principle: 'Quantify where possible.',
    rationale: 'Translating technical vulnerabilities into annualized financial exposure and loss exceedance probabilities transforms security from a cost center into a strategic business enabler.'
  },
  {
    number: '04',
    principle: 'Compliance is the baseline.',
    rationale: 'Passing an audit confirms minimum acceptable documentation. Being "Attack Ready" requires verifying active control efficacy against actual adversary tradecraft.'
  },
  {
    number: '05',
    principle: 'Security must be understood by the business.',
    rationale: 'Cybersecurity leaders must articulate exposure clearly in terms of revenue, operational resilience, and customer trust—without hiding behind technical jargon.'
  }
];

export const THOUGHT_LEADERSHIP_TOPICS: ThoughtLeadershipTopic[] = [
  {
    id: 'topic-1',
    title: 'Why Cybersecurity Compliance Does Not Equal Operational Security',
    category: 'Security Assurance & Audit',
    readingTime: '6 min read',
    status: 'Executive Brief Available',
    date: '2026',
    summary: 'An exploration of why enterprises with pristine ISO 27001 and SOC 2 certificates still get breached, and how introducing continuous control effectiveness metrics bridges the gap between Audit-Ready and Attack-Ready postures.',
    keyTakeaways: [
      'The critical delta between policy existence and operational execution',
      'How to establish Key Control Indicators (KCIs) for real-time validation',
      'Architecting audit programs that test control failure modes under stress'
    ]
  },
  {
    id: 'topic-2',
    title: 'FAIR Quantitative Cyber Risk Analysis: Replacing 5x5 Heatmaps with Financial Distributions',
    category: 'Quantitative Risk',
    readingTime: '8 min read',
    status: 'Executive Brief Available',
    date: '2026',
    summary: 'A practitioner guide on using calibrated expert estimation, Beta-PERT distributions, and Monte Carlo simulations to calculate Annualized Loss Exposure in Euros and Dollars for Board Risk Committees.',
    keyTakeaways: [
      'Cognitive flaws and range compression inherent in color-coded risk matrices',
      'Step-by-step implementation of FAIR Threat Event Frequency and Loss Magnitude',
      'How to justify multi-million euro cybersecurity investments with measurable risk reduction'
    ]
  },
  {
    id: 'topic-3',
    title: 'NIST CSF 2.0: Operationalizing the GOVERN Function Across Hybrid & OT Environments',
    category: 'Frameworks & Governance',
    readingTime: '7 min read',
    status: 'Executive Brief Available',
    date: '2026',
    summary: 'Analyzing the pivotal structural changes in NIST CSF 2.0, with a focus on establishing clear governance hierarchies, risk appetite boundaries, and third-party oversight.',
    keyTakeaways: [
      'Deconstructing the 6 CSF 2.0 functions from an executive perspective',
      'Dual-scoring frameworks: Maturity Level (1-5) vs. Effectiveness Factor (0.0-1.0)',
      'Integrating NIST CSF 2.0 with ISO 27001 and industrial ISA/IEC 62443 standards'
    ]
  },
  {
    id: 'topic-4',
    title: 'Navigating DORA & NIS2: Digital Operational Resilience for European Financial & Critical Sectors',
    category: 'Regulatory Resilience',
    readingTime: '9 min read',
    status: 'Coming Soon',
    date: '2026',
    summary: 'A deep dive into the regulatory convergence of DORA and NIS2 in the EU, examining mandatory incident notification timelines, critical third-party ICT oversight, and threat-led penetration testing.',
    keyTakeaways: [
      'Mapping DORA ICT risk management pillars to existing ISO 27001 ISMS',
      'Managing supply chain concentration risk and subcontractor transparency',
      'Establishing compliant 24-hour and 72-hour incident reporting workflows'
    ]
  },
  {
    id: 'topic-5',
    title: 'ISO/IEC 42001: Architecting an Auditable AI Management System (AIMS)',
    category: 'AI Governance',
    readingTime: '6 min read',
    status: 'Coming Soon',
    date: '2026',
    summary: 'How to construct an enterprise AI governance framework that addresses prompt injection, training data contamination, algorithmic bias, and EU AI Act conformity through ISO 42001.',
    keyTakeaways: [
      'Classification of enterprise AI workloads by risk tier and autonomy level',
      'Implementing transparency, explainability, and human-in-the-loop controls',
      'Building auditable AI model cards and continuous telemetry workpapers'
    ]
  },
  {
    id: 'topic-6',
    title: 'Bridging the IT/OT Divide: Implementing ISA/IEC 62443 and NIST SP 800-82 in Industrial Environments',
    category: 'OT Cybersecurity',
    readingTime: '8 min read',
    status: 'Coming Soon',
    date: '2026',
    summary: 'Practical strategies for applying modern GRC and security assurance to industrial control systems (ICS/SCADA) without violating safety, availability, or low-latency operational constraints.',
    keyTakeaways: [
      'Purdue model zoning, conduit definition, and unidirectional security gateways',
      'Why IT vulnerability patching practices fail in PLC and DCS environments',
      'Conducting non-disruptive OT security audits and evidence verification'
    ]
  }
];

export const FAIR_SCENARIOS: FairScenario[] = [
  {
    id: 'ransomware',
    name: 'Enterprise Ransomware & Business Interruption',
    tefMin: 0.1,
    tefMode: 0.35,
    tefMax: 1.2,
    vulnPercent: 42,
    lossMin: 250000,
    lossMode: 1200000,
    lossMax: 6500000,
    description: 'Threat actor executes double-extortion ransomware across hybrid infrastructure, causing 4 days of operational downtime, forensic investigations, and legal remediation.'
  },
  {
    id: 'cloud-breach',
    name: 'Cloud Data Exfiltration & Customer PII Breach',
    tefMin: 0.2,
    tefMode: 0.6,
    tefMax: 2.0,
    vulnPercent: 35,
    lossMin: 400000,
    lossMode: 1800000,
    lossMax: 8500000,
    description: 'Misconfigured cloud storage bucket or IAM escalation leads to unauthorized exfiltration of 150,000 customer records, triggering GDPR fines and notification costs.'
  },
  {
    id: 'ot-outage',
    name: 'OT/SCADA Network Disruption & Production Halt',
    tefMin: 0.05,
    tefMode: 0.15,
    tefMax: 0.5,
    vulnPercent: 28,
    lossMin: 800000,
    lossMode: 3500000,
    lossMax: 14000000,
    description: 'Cyber threat actor bridges IT/OT boundary, impacting programmable logic controllers and halting manufacturing production for 72 hours.'
  },
  {
    id: 'vendor-leak',
    name: 'Tier-1 SaaS Vendor Compromise & Supply Chain Spill',
    tefMin: 0.3,
    tefMode: 0.8,
    tefMax: 2.5,
    vulnPercent: 55,
    lossMin: 150000,
    lossMode: 650000,
    lossMax: 3200000,
    description: 'Subprocessor credential compromise results in leak of confidential customer analytics and intellectual property, requiring contractual review and breach mitigation.'
  }
];

export const MOCK_EXECUTIVE_DASHBOARD_DATA = {
  overallRiskPosture: 'OPTIMIZED & CONTROLLED',
  enterpriseRiskScore: 32, // out of 100 (lower is better in risk)
  residualRiskReduction: '68%',
  controlAssuranceIndex: 91.4, // %
  auditReadyVsAttackReady: {
    auditReady: 96,
    attackReady: 87,
    delta: 9
  },
  criticalRisksCount: 0,
  highRisksCount: 3,
  mediumRisksCount: 11,
  openAuditIssuesBySla: {
    onTrack: 14,
    approachingSLA: 2,
    overdue: 0
  },
  complianceCoverage: [
    { standard: 'ISO 27001:2022', score: 98, status: 'Audited & Certified' },
    { standard: 'NIST CSF 2.0', score: 92, status: 'Target Maturity Tier 4' },
    { standard: 'DORA Framework', score: 88, status: 'Resilience Audited' },
    { standard: 'ISO 42001 (AI)', score: 85, status: 'Governed & Mapped' },
    { standard: 'ISO 27701 (Privacy)', score: 94, status: 'PIMS Verified' },
    { standard: 'ISA/IEC 62443 (OT)', score: 89, status: 'Zone Assured' }
  ],
  thirdPartyRiskTiering: {
    tier1Critical: { count: 8, assessed: 8, highRisk: 0 },
    tier2High: { count: 24, assessed: 24, highRisk: 1 },
    tier3Medium: { count: 62, assessed: 62, highRisk: 2 },
    tier4Low: { count: 110, assessed: 110, highRisk: 0 }
  }
};
