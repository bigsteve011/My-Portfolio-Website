import React, { useRef } from 'react';
import { 
  Cloud, 
  Terminal, 
  ShieldCheck, 
  Boxes, 
  Cpu, 
  Layers, 
  Workflow, 
  Lock, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  CheckCircle2,
  FileCode2,
  Database,
  ShieldAlert
} from 'lucide-react';

interface TechItem {
  name: string;
  category: 'Cloud' | 'DevSecOps' | 'Governance' | 'Risk Analytics' | 'Security Operations';
  icon: React.ElementType;
  description: string;
  badge: string;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: 'Microsoft Azure',
    category: 'Cloud',
    icon: Cloud,
    description: 'Landing Zones, Entra ID PIM, Azure Firewall & Defender for Cloud',
    badge: 'Enterprise Architecture'
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud',
    icon: Boxes,
    description: 'Control Tower, SCP Guardrails, Security Hub, KMS & S3 Object Lock',
    badge: 'Multi-Account Security'
  },
  {
    name: 'Terraform & OpenTofu',
    category: 'DevSecOps',
    icon: FileCode2,
    description: 'Infrastructure as Code, Checkov, OPA Gatekeeper & Policy-as-Code',
    badge: 'Automated Guardrails'
  },
  {
    name: 'Kubernetes & GitOps',
    category: 'DevSecOps',
    icon: Cpu,
    description: 'Kyverno Admission Controllers, ArgoCD, Pod Security Standards (PSS)',
    badge: 'Cluster Hardening'
  },
  {
    name: 'GitHub Actions & OIDC',
    category: 'DevSecOps',
    icon: Workflow,
    description: 'Short-lived Cloud Federation, Sigstore Cosign, CycloneDX SBOM',
    badge: 'SLSA Level 3'
  },
  {
    name: 'Microsoft Sentinel',
    category: 'Security Operations',
    icon: Terminal,
    description: 'KQL Analytics, MITRE ATT&CK Hunting, Logic Apps SOAR Playbooks',
    badge: 'SIEM & Detection'
  },
  {
    name: 'FAIR™ Model Engine',
    category: 'Risk Analytics',
    icon: ShieldCheck,
    description: 'OpenFAIR Quantitative Risk, Calibrated Monte Carlo & Loss Modeling',
    badge: 'Financial Quantification'
  },
  {
    name: 'ISO/IEC 27001 & 42001',
    category: 'Governance',
    icon: Lock,
    description: 'Certified Lead Auditor, ISMS 2022 Controls & Artificial Intelligence Governance',
    badge: 'Lead Auditor'
  },
  {
    name: 'NIST SP 800-53 & CSF 2.0',
    category: 'Governance',
    icon: Layers,
    description: 'Federal Security Baselines, Continuous Control Monitoring & POA&M',
    badge: 'Assurance Framework'
  },
  {
    name: 'ISA/IEC 62443 & OT Cyber',
    category: 'Governance',
    icon: ShieldAlert,
    description: 'Industrial SCADA, DCS, PLC Systems Security & Purdue Model Zoning',
    badge: 'Critical Infrastructure'
  },
  {
    name: 'DORA & NIS2 Compliance',
    category: 'Governance',
    icon: Database,
    description: 'EU Digital Operational Resilience Act, Third-Party Risk & Incident SLA',
    badge: 'Regulatory Mandates'
  },
  {
    name: 'Python Analytics & NumPy',
    category: 'Risk Analytics',
    icon: Sparkles,
    description: 'Automated Risk Simulation Engines, Statistical Curves & Executive Dashboards',
    badge: 'Computational Risk'
  }
];

export const TechStackCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Cloud':
        return 'text-sky-700 bg-sky-50 border-sky-200';
      case 'DevSecOps':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Risk Analytics':
        return 'text-cyan-700 bg-cyan-50 border-cyan-200';
      case 'Security Operations':
        return 'text-purple-700 bg-purple-50 border-purple-200';
      case 'Governance':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="w-full py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
            CORE CLOUD, DEVSECOPS & GRC TOOLING CAROUSEL
          </span>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Carousel Track: Lightly highlighted deeper shade of white with subtle shadows */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-4 overflow-x-auto pb-4 pt-1 px-4 sm:px-6 lg:px-8 scroll-smooth scrollbar-none snap-x snap-mandatory"
      >
        {TECH_ITEMS.map((item, index) => {
          const Icon = item.icon;
          const categoryBadgeClass = getCategoryColor(item.category);

          return (
            <div
              key={index}
              className="w-72 sm:w-80 shrink-0 snap-start p-5 rounded-2xl bg-slate-50/90 hover:bg-[#f8fafc] border border-slate-200 hover:border-cyan-500/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-cyan-700 group-hover:text-cyan-800 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${categoryBadgeClass}`}>
                    {item.category}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 font-display group-hover:text-cyan-700 transition-colors mb-1.5">
                  {item.name}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {item.badge}
                </span>
                <span className="text-[10px] font-mono text-cyan-700 font-bold">
                  Verified
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
