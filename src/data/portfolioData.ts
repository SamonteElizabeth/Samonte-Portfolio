export interface WorkProject {
  id: string;
  name: string;
  description: string;
  isDeployed: boolean;
  category: string;
  role: string;
  iconName: string;
  keyDeliverables: string[];
  imageUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  period: string;
  isCurrent?: boolean;
  companyScope: string;
  responsibilities: string[];
  keyTools: string[];
}

export interface SkillModule {
  id: string;
  code: string;
  title: string;
  description: string;
  skills: string[];
}

export interface PersonalProject {
  id: string;
  name: string;
  description: string;
  iconName: string;
  targetUsers: string;
  coreHighlights: string[];
  status: string;
}

export interface SdlcPhase {
  phaseNumber: number;
  title: string;
  iconName: string;
  summary: string;
  baFocus: string;
  aiIntegration: string;
  deliverables: string[];
}

export const PROFILE_DATA = {
  name: "Elizabeth Samonte",
  headline: "Business Analyst | Business Excellence Specialist II | Prompt Engineer",
  summary:
    "Business Analyst experienced in requirements analysis, workflow design, SDLC, project management, and AI prompt optimization. Skilled in stakeholder communication, technical documentation, and leveraging AI tools to improve business processes and deliver effective solutions.",
  phone: "0969-312-3870",
  email: "elizabethsamonte2002@gmail.com",
  location: "Quezon, Philippines",
  company: "Microgenesis Business Systems",
  portfolioUrl: "https://statuesque-sfogliatella-6abd48.netlify.app",
  education: {
    institution: "STI College Lipa",
    degree: "Bachelor's Degree in Information Technology",
    years: "2020 – 2024",
    distinction: "Magna Cum Laude",
  },
  stats: {
    deployedSystems: 7,
    workProjects: 12,
    personalProjects: 2,
    coreExpertiseAreas: 3,
  },
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "bes-2",
    title: "Business Excellence Specialist II",
    period: "October 2026 – Present",
    isCurrent: true,
    companyScope: "Business Excellence & AI Transformation Initiatives",
    responsibilities: [
      "Supported multiple business initiatives through AI-driven solutions and process optimization.",
      "Created prompts for generative AI applications to achieve accurate, relevant outputs.",
      "Integrated AI tools into daily workflows to enhance productivity and reduce manual effort.",
      "Explored AI capabilities for rapid prototyping, content generation, and solution development.",
      "Assessed emerging AI tools and techniques to identify opportunities for innovation and automation.",
    ],
    keyTools: ["Prompt Engineering", "Generative AI", "Workflow Automation", "Process Optimization", "Rapid Prototyping"],
  },
  {
    id: "bes-1",
    title: "Business Excellence Specialist",
    period: "November 2025 – October 2026",
    isCurrent: false,
    companyScope: "Enterprise Systems & SDLC Delivery",
    responsibilities: [
      "Prepared Business Requirements Documents (BRDs), functional requirements, and system documentation.",
      "Collaborated with stakeholders, developers, and QA teams to align business needs with technical solutions.",
      "Designed workflows and documented business processes to improve system functionality and operational efficiency.",
      "Coordinated User Acceptance Testing (UAT), documented issues, and monitored bug resolution.",
      "Managed change requests, tracked project progress, and facilitated stakeholder communication throughout the SDLC.",
      "Utilized AI tools and prompt engineering to streamline documentation and improve work efficiency.",
    ],
    keyTools: ["BRD Preparation", "Functional Specs", "UAT Coordination", "Change Management", "AI Prompting"],
  },
  {
    id: "ba",
    title: "Business Analyst",
    period: "October 2024 – November 2025",
    isCurrent: false,
    companyScope: "Business Analysis & Cross-Functional Coordination",
    responsibilities: [
      "Gathered and documented business and functional requirements.",
      "Created process flows, system workflows, and technical documentation.",
      "Coordinated with stakeholders, developers, and QA teams.",
      "Facilitated User Acceptance Testing and tracked defects.",
      "Managed change requests and monitored development progress.",
    ],
    keyTools: ["Requirements Gathering", "Process Flows", "Defect Tracking", "Stakeholder Alignment", "SDLC Coordination"],
  },
  {
    id: "it-intern",
    title: "Information Technology Associate (Internship)",
    period: "February 2024 – May 2024",
    isCurrent: false,
    companyScope: "Web Technology & Technical Documentation",
    responsibilities: [
      "Developed and documented technical requirements for the company website.",
      "Collaborated with the technical team to develop and implement website features.",
    ],
    keyTools: ["Technical Requirements", "Web Feature Implementation", "Documentation", "Team Collaboration"],
  },
];

export const SKILL_MODULES: SkillModule[] = [
  {
    id: "mod-1",
    code: "MOD 01",
    title: "Core Analysis",
    description: "Foundational business analysis techniques, requirements discovery, and stakeholder orchestration.",
    skills: [
      "Requirements Gathering",
      "Business Process Analysis",
      "Gap Analysis",
      "Workflow Design",
      "Stakeholder Communication",
      "Use Case Development",
      "User Stories",
      "Requirements Traceability",
    ],
  },
  {
    id: "mod-2",
    code: "MOD 02",
    title: "Planning & Documentation",
    description: "End-to-end SDLC artifacts, agile coordination, quality assurance, and governance frameworks.",
    skills: [
      "Functional Specifications",
      "SDLC Framework",
      "Process Mapping",
      "Documentation Management",
      "Project Reporting",
      "Agile Methodology",
      "User Acceptance Testing",
      "Functional Testing",
      "Defect Tracking",
    ],
  },
  {
    id: "mod-3",
    code: "MOD 03",
    title: "AI & Development",
    description: "Modern generative AI tools, prompt optimization, rapid prototyping, and technical literacy.",
    skills: [
      "Prompt Engineering",
      "AI-Assisted Development",
      "System Prototyping",
      "AI Workflow Optimization",
      "Low-Code / No-Code Development",
      "AI-Assisted UI Design",
      "HTML, CSS, and JavaScript Fundamentals",
    ],
  },
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: "chronos-v1",
    name: "Chronos v1",
    description: "Project management and task tracking system.",
    isDeployed: true,
    category: "Project & Task Management",
    role: "Business Requirements & Workflow Architecture",
    iconName: "Clock",
    keyDeliverables: ["BRD", "Task Flow Models", "UAT Signoff Matrix"],
    imageUrl: "/src/assets/images/chronos_preview_1791783514393.jpg",
  },
  {
    id: "chronos-v2",
    name: "Chronos v2",
    description: "Opportunity and presales management system.",
    isDeployed: false,
    category: "Presales & CRM",
    role: "Presales Pipeline Modeling & Requirements",
    iconName: "TrendingUp",
    keyDeliverables: ["Functional Specs", "Opportunity Lifecycle Map", "Prototype Review"],
    imageUrl: "/src/assets/images/chronos_preview_1791783514393.jpg",
  },
  {
    id: "chronos-v3",
    name: "Chronos v3",
    description: "Task execution and employee utilization tracking system.",
    isDeployed: false,
    category: "Workforce & Operations",
    role: "Utilization Metric Definitions & User Stories",
    iconName: "Users",
    keyDeliverables: ["Utilization Calculation Logic", "Execution Dashboards Spec"],
    imageUrl: "/src/assets/images/chronos_preview_1791783514393.jpg",
  },
  {
    id: "logistra-v1",
    name: "Logistra v1",
    description: "Rental and inventory management system.",
    isDeployed: true,
    category: "Logistics & Inventory",
    role: "Inventory State Transitions & Requirements Document",
    iconName: "Boxes",
    keyDeliverables: ["BRD", "Inventory State Machine", "UAT Defect Tracking"],
    imageUrl: "/src/assets/images/logistra_preview_1791784003981.jpg",
  },
  {
    id: "proj-lab-renewal-care",
    name: "Project Lab Renewal Care",
    description: "Renewal care management system.",
    isDeployed: true,
    category: "Customer Success & Care",
    role: "Renewal Workflow Design & Stakeholder Alignment",
    iconName: "RefreshCw",
    keyDeliverables: ["Care Lifecycle Flow", "Functional Requirements", "Deployment Verification"],
  },
  {
    id: "proj-lab-support-entitlement",
    name: "Project Lab Support Entitlement",
    description: "Support entitlement management system.",
    isDeployed: true,
    category: "Support Operations",
    role: "Entitlement Rules Engine Analysis & Documentation",
    iconName: "ShieldCheck",
    keyDeliverables: ["Entitlement Matrix", "SLA Traceability Map", "User Acceptance Testing"],
  },
  {
    id: "cartool",
    name: "CARTool",
    description: "Audit management system.",
    isDeployed: false,
    category: "Compliance & Audit",
    role: "Audit Checklist Architecture & Process Mapping",
    iconName: "FileCheck",
    keyDeliverables: ["Audit Process Flow", "Compliance Gap Analysis", "User Stories"],
  },
  {
    id: "ndcp",
    name: "NDCP",
    description: "System implementation and process support.",
    isDeployed: true,
    category: "Implementation & Support",
    role: "Process Support, Transition Coordination & UAT",
    iconName: "Compass",
    keyDeliverables: ["Implementation Roadmap", "Process Handover Guides", "Deployed Validation"],
  },
  {
    id: "cedc-vms",
    name: "CEDC – VMS",
    description: "Vendor Management System.",
    isDeployed: true,
    category: "Vendor & Supply Chain",
    role: "Vendor Onboarding Specs & Procurement Flows",
    iconName: "Building2",
    keyDeliverables: ["Vendor Lifecycle BRD", "Approval Hierarchies", "Production UAT"],
  },
  {
    id: "cedc-cecap",
    name: "CEDC – CECAp",
    description: "Customer application for electricity accounts and consumption monitoring.",
    isDeployed: false,
    category: "Customer Utilities & Mobile/Web",
    role: "Consumption Account Workflows & Requirement Stories",
    iconName: "Zap",
    keyDeliverables: ["Account Monitoring Wireframes", "Data Requirements Spec"],
  },
  {
    id: "oneops",
    name: "OneOps",
    description: "Operations management initiative.",
    isDeployed: false,
    category: "Operational Excellence",
    role: "Cross-Functional Operational Blueprinting",
    iconName: "Layers",
    keyDeliverables: ["Operational Flow Map", "System Synergy Analysis"],
  },
  {
    id: "filminera",
    name: "Filminera",
    description: "Leave camp security processing system.",
    isDeployed: true,
    category: "Security & Camp Management",
    role: "Security Protocol Modeling, Clearance Workflows & UAT",
    iconName: "Lock",
    keyDeliverables: ["Clearance Approval Workflow", "Security Specification", "Live Deployment Signoff"],
  },
];

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    id: "savewise",
    name: "SaveWise",
    description: "Personal finance management application designed to help users track expenses, manage budgets, and monitor savings goals.",
    iconName: "PiggyBank",
    targetUsers: "Individuals seeking clear visibility over daily spending and savings targets",
    coreHighlights: [
      "Expense logging and category classification",
      "Monthly budget configuration and variance monitoring",
      "Savings target tracking with visual progress indicators",
      "Structured data model for intuitive financial reviews",
    ],
    status: "Personal Application",
  },
  {
    id: "periodcare",
    name: "PeriodCare",
    description: "Menstrual cycle tracking application designed to help users record periods and monitor upcoming cycle dates.",
    iconName: "CalendarHeart",
    targetUsers: "Individuals looking for a private, straightforward menstrual health tracker",
    coreHighlights: [
      "Period date logging and historical frequency view",
      "Projected upcoming cycle date estimations",
      "Symptom and health note documentation",
      "Clean, confidential, and privacy-oriented user experience",
    ],
    status: "Personal Application",
  },
];

export const SDLC_PHASES: SdlcPhase[] = [
  {
    phaseNumber: 1,
    title: "Planning & Feasibility",
    iconName: "Target",
    summary: "Establish strategic intent, project feasibility, high-level scope, and resource viability.",
    baFocus: "Identifying business problems, evaluating current-state constraints, defining project scope boundaries, and facilitating initial discovery workshops.",
    aiIntegration: "AI-assisted brainstorming of edge cases, rapid drafting of project charters, and synthesizing multi-departmental constraints into unified scope outlines.",
    deliverables: ["Project Charter", "Feasibility Matrix", "High-Level Scope Boundary", "Stakeholder Register"],
  },
  {
    phaseNumber: 2,
    title: "Requirements Analysis",
    iconName: "FileSpreadsheet",
    summary: "Elicit, analyze, prioritize, and document granular business and functional requirements.",
    baFocus: "Conducting stakeholder interviews, formulating functional requirements, authoring user stories with acceptance criteria, and building traceability matrices.",
    aiIntegration: "Prompt-driven decomposition of broad business statements into structured User Stories and Gherkin-formatted Acceptance Criteria (Given-When-Then).",
    deliverables: ["Business Requirements Document (BRD)", "Functional Requirements Spec (FRS)", "User Stories & Epics", "Requirements Traceability Matrix (RTM)"],
  },
  {
    phaseNumber: 3,
    title: "System Design",
    iconName: "Layout",
    summary: "Translate functional business needs into structured workflows, wireframes, and technical blueprints.",
    baFocus: "Modeling Business Process Model and Notation (BPMN) diagrams, user interaction flows, data dictionaries, and collaborating with UX/Tech leads.",
    aiIntegration: "AI-assisted UI prototyping, generating Mermaid.js workflow diagrams, and validating entity relationships against business logic rules.",
    deliverables: ["Process Flowcharts (BPMN)", "System Architecture Alignment", "UI/UX Wireframe Reviews", "Data Dictionary"],
  },
  {
    phaseNumber: 4,
    title: "Development",
    iconName: "Code2",
    summary: "Engineers build features in agile sprints while the Business Analyst resolves clarifications and manages change requests.",
    baFocus: "Sprint planning support, clarifying ambiguity for dev teams, validating incremental builds, and managing change request documentation.",
    aiIntegration: "Prompt engineering for rapid code prototyping, technical specification summarization, and automating release note drafting.",
    deliverables: ["Sprint Backlog Grooming", "Change Request (CR) Logs", "Technical Clarification Notes", "Sprint Review Feedback"],
  },
  {
    phaseNumber: 5,
    title: "Testing & Quality Assurance",
    iconName: "CheckCheck",
    summary: "Verify system behavior against business specifications through functional QA and User Acceptance Testing (UAT).",
    baFocus: "Developing UAT test scripts, coordinating testing sessions with business users, logging and triaging defects, and driving issue resolution.",
    aiIntegration: "Prompt-optimized test case generation across positive, negative, and edge-case operational pathways; automated test coverage gap analysis.",
    deliverables: ["UAT Test Plan & Test Cases", "Defect Log & Severity Triage", "User Acceptance Sign-Off Matrix", "QA Verification Report"],
  },
  {
    phaseNumber: 6,
    title: "Deployment",
    iconName: "Rocket",
    summary: "Release validated systems to production environments with coordinated stakeholder training and change readiness.",
    baFocus: "Authoring end-user manuals, facilitating user training workshops, validating production readiness, and coordinating cutover checkpoints.",
    aiIntegration: "Generating comprehensive end-user walkthrough guides, FAQ documentation, and operational onboarding materials from functional specs.",
    deliverables: ["User Training Documentation", "System User Guides", "Go-Live Sign-Off"],
  },
  {
    phaseNumber: 7,
    title: "Maintenance & Optimization",
    iconName: "Sparkles",
    summary: "Monitor system adoption, measure business efficiency gains, and iterate with continuous process improvements.",
    baFocus: "Gathering post-launch feedback, measuring KPI achievements, identifying operational bottlenecks, and prioritizing continuous improvement backlogs.",
    aiIntegration: "Synthesizing feedback logs into actionable backlog priorities; identifying process bottlenecks through AI workflow analytics.",
    deliverables: ["Post-Implementation Review (PIR)", "Continuous Improvement Backlog", "Efficiency Metrics Report", "Knowledge Base Updates"],
  },
];
