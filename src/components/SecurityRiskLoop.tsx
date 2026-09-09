import React, { useState } from 'react';
import { 
  Search, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  FileCheck2, 
  Wrench, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  Activity
} from 'lucide-react';

interface LoopStage {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  artifacts: string[];
  frameworkAlignment: string;
  icon: any;
}

export const SecurityRiskLoop: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('quantify');

  const stages: LoopStage[] = [
    {
      id: 'discover',
      number: '01',
      name: 'DISCOVER',
      shortDesc: 'Asset & Threat Surface Mapping',
      fullDesc: 'Comprehensive identification of IT, Cloud, OT/SCADA, and Third-Party assets, data flows, supply chains, and threat vectors.',
      artifacts: ['Asset Inventory (Purdue/Cloud)', 'Threat Vector Catalog', 'RoPA Data Flows'],
      frameworkAlignment: 'NIST CSF 2.0 (Identify) / ISO 27001 A.8.1 / CIS 1-2',
      icon: Search
    },
    {
      id: 'assess',
      number: '02',
      name: 'ASSESS',
      shortDesc: 'Inherent Risk & Vulnerability Triage',
      fullDesc: 'Evaluating exploitability, threat actor capability, asset criticality, and calculating baseline Inherent Risk without control assumptions.',
      artifacts: ['Inherent Risk Matrix', 'Vulnerability Scans (Nessus/Qualys)', 'Threat Capability Scoring'],
      frameworkAlignment: 'ISO/IEC 27005 / NIST SP 800-30 / CVSS v3.1',
      icon: Target
    },
    {
      id: 'quantify',
      number: '03',
      name: 'QUANTIFY',
      shortDesc: 'FAIR Financial Loss Modeling',
      fullDesc: 'Applying the FAIR standard and Monte Carlo simulations (Beta-PERT) to calculate Annualized Loss Exposure (ALE) and P90 probable loss in currency.',
      artifacts: ['10k-Trial Monte Carlo Engine', 'ALE & P90 Loss Distributions', 'Risk Exceedance Curves'],
      frameworkAlignment: 'FAIR™ Standard / ISO 27005 Quantitative / Open Group',
      icon: BarChart3
    },
    {
      id: 'control',
      number: '04',
      name: 'CONTROL',
      shortDesc: 'Defensive Architecture & Design',
      fullDesc: 'Architecting and mapping technical, physical, and organizational security controls aligned with industry standards.',
      artifacts: ['Statement of Applicability (SoA)', 'ISA/IEC 62443 SL Baselines', 'Security Policy Baselines'],
      frameworkAlignment: 'ISO 27001 Annex A / NIST SP 800-53 / CIS Controls',
      icon: ShieldCheck
    },
    {
      id: 'assure',
      number: '05',
      name: 'ASSURE',
      shortDesc: 'Testing Operational Effectiveness',
      fullDesc: 'Independent audit testing and evidence sampling to verify whether controls operate consistently under realistic stress conditions.',
      artifacts: ['Audit Workpapers & Evidence', 'Control Effectiveness Coefficients', 'SOC 2 / ISO Audit Reports'],
      frameworkAlignment: 'COBIT 2019 / DORA TLPT / ISO 19011 / ISACA ITAF',
      icon: FileCheck2
    },
    {
      id: 'remediate',
      number: '06',
      name: 'REMEDIATE',
      shortDesc: 'Enforced SLA & Finding Treatment',
      fullDesc: 'Binding findings to clear owners, automated SLA deadlines (7d/30d/90d), root-cause remediation, and formal Risk Acceptance governance.',
      artifacts: ['Remediation SLA Tracker', 'Compensating Control Plans', 'Risk Acceptance Forms'],
      frameworkAlignment: 'Enterprise SLA Matrix / NIST CSF 2.0 (Govern)',
      icon: Wrench
    },
    {
      id: 'measure',
      number: '07',
      name: 'MEASURE',
      shortDesc: 'Residual Risk & KCI Metrics',
      fullDesc: 'Continuous tracking of Key Control Indicators (KCIs), residual risk reduction, and executive scorecard reporting for Risk Committees.',
      artifacts: ['Executive Risk Dashboard', 'Residual Risk Reduction Index', 'Audit Ready vs Attack Ready Ratio'],
      frameworkAlignment: 'Board Reporting Metrics / COSO ERM',
      icon: TrendingUp
    },
    {
      id: 'improve',
      number: '08',
      name: 'IMPROVE',
      shortDesc: 'Continuous Resilience Optimization',
      fullDesc: 'Feeding audit insights, emerging threat intel, AI governance updates, and regulator feedback back into the strategy loop.',
      artifacts: ['ISMS Continual Improvement Plan', 'AI Management System Review (ISO 42001)', 'Post-Incident Learning Logs'],
      frameworkAlignment: 'ISO 27001 Clause 10 / DORA Resilience / NIS2 Governance',
      icon: Sparkles
    }
  ];

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[2];

  return (
    <section id="risk-loop" className="py-20 lg:py-28 relative bg-white border-t border-slate-200 overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-cyan-500/10 pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-blue-500/10 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold mb-3 border border-cyan-200/60">
            <Activity className="w-3.5 h-3.5 text-cyan-600" />
            <span>SIGNATURE METHODOLOGY</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            THE OMOWUMI SECURITY RISK LOOP
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            A continuous, evidence-driven cyber risk lifecycle transforming technical findings into quantified financial exposure, verified controls, and board-level decisions.
          </p>
        </div>

        {/* Interactive Layout: Circular Hub (Left/Top) & Deep Inspector Panel (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Circular Stage Grid / Loop Visual (7 Cols) */}
          <div className="lg:col-span-7 relative flex items-center justify-center p-2 sm:p-6">
            
            {/* Stage Grid Cards */}
            <div className="w-full max-w-lg grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
              {stages.map((stage) => {
                const IconComponent = stage.icon;
                const isSelected = activeStageId === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`group relative overflow-hidden flex flex-col items-center p-4 rounded-2xl border text-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-cyan-50/90 border-cyan-500 shadow-md ring-2 ring-cyan-500/20 scale-105'
                        : 'bg-white border-slate-200/90 hover:border-cyan-400 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-cyan-700' : 'text-slate-400'}`}>
                        {stage.number}
                      </span>
                      <IconComponent className={`w-4 h-4 ${isSelected ? 'text-cyan-600' : 'text-slate-400 group-hover:text-cyan-600'} transition-colors`} />
                    </div>

                    <span className={`text-xs font-bold tracking-wider mb-1 ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                      {stage.name}
                    </span>

                    <span className="text-[10px] text-slate-500 leading-tight line-clamp-2">
                      {stage.shortDesc}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Connecting border indicator */}
            <div className="absolute inset-0 m-auto w-full max-w-md h-72 border border-dashed border-cyan-500/30 rounded-3xl pointer-events-none -z-0" />
          </div>

          {/* Detailed Inspector Panel (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />

              <div className="relative z-10">
                {/* Header of Active Stage */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                      {React.createElement(activeStage.icon, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-cyan-700 uppercase tracking-widest block">
                        STAGE {activeStage.number} / 08
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">
                        {activeStage.name}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold shadow-xs">
                    INSPECTOR
                  </span>
                </div>

                {/* Stage Narrative Description */}
                <div className="space-y-4 text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 leading-relaxed shadow-xs">
                    {activeStage.fullDesc}
                  </div>

                  {/* Key Deliverables / Artifacts */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider block">
                      Key Work Products & Deliverables:
                    </span>
                    <div className="space-y-1.5">
                      {activeStage.artifacts.map((artifact, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                          <span className="font-medium">{artifact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Framework Mapping */}
                  <div className="pt-3 border-t border-slate-200/80">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1.5">
                      Primary Framework Alignment:
                    </span>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-cyan-900 shadow-xs">
                      {activeStage.frameworkAlignment}
                    </div>
                  </div>
                </div>

                {/* Quick Navigation Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold">
                    LIFECYCLE FLOW
                  </span>
                  
                  <button
                    onClick={() => {
                      const currentIndex = stages.findIndex(s => s.id === activeStageId);
                      const nextIndex = (currentIndex + 1) % stages.length;
                      setActiveStageId(stages[nextIndex].id);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 hover:bg-cyan-100 text-xs font-bold border border-cyan-200/60 transition-colors"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
