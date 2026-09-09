import React, { useState } from 'react';
import { 
  ArrowDown, 
  Check, 
  Layers, 
  ShieldAlert, 
  Cpu, 
  BarChart2, 
  TrendingDown, 
  FileCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PipelineStep {
  step: string;
  name: string;
  category: string;
  questionSolved: string;
  practicalAction: string;
  outputArtifact: string;
  accent: string;
}

export const SignatureApproach: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3); // default on Business Impact

  const pipeline: PipelineStep[] = [
    {
      step: '01',
      name: 'TECHNICAL FINDING',
      category: 'Signal & Vulnerability',
      questionSolved: 'What technical vulnerability, architectural flaw, or threat vector exists?',
      practicalAction: 'Extracting raw vulnerability data from Nessus, Qualys, Defender, or OT network telemetry.',
      outputArtifact: 'CVSS Score, Exploitability Index, Affected Asset Tier',
      accent: 'border-cyan-500 text-cyan-400 bg-cyan-500/10'
    },
    {
      step: '02',
      name: 'SECURITY CONTROL',
      category: 'Defense Design',
      questionSolved: 'What preventive, detective, or compensating control is designed to mitigate this?',
      practicalAction: 'Evaluating ISO 27001 Annex A, NIST SP 800-53, or ISA/IEC 62443 control specifications.',
      outputArtifact: 'Control ID Mapping, Design Adequacy Rating',
      accent: 'border-sky-500 text-sky-400 bg-sky-500/10'
    },
    {
      step: '03',
      name: 'RISK IDENTIFICATION',
      category: 'Inherent Exposure',
      questionSolved: 'What happens if a threat actor exploits this control deficiency?',
      practicalAction: 'Calculating Inherent Risk by pairing threat capability with asset blast radius.',
      outputArtifact: 'Inherent Risk Score, Threat Scenario Profile',
      accent: 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
    },
    {
      step: '04',
      name: 'BUSINESS IMPACT',
      category: 'Enterprise Context',
      questionSolved: 'What does this risk mean to revenue, customer trust, operations, and compliance?',
      practicalAction: 'Translating technical outage hours into downtime costs, SLA penalties, and GDPR/DORA fines.',
      outputArtifact: 'Business Impact Analysis (BIA), Criticality Rating',
      accent: 'border-amber-500 text-amber-400 bg-amber-500/10'
    },
    {
      step: '05',
      name: 'QUANTIFICATION',
      category: 'FAIR Financial Math',
      questionSolved: 'What is the calibrated financial loss exposure in Euros or Dollars?',
      practicalAction: 'Running 10,000 Monte Carlo trials to compute Annualized Loss Exposure (ALE) and P90 loss.',
      outputArtifact: 'ALE Currency Metric, Loss Exceedance Curve',
      accent: 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
    },
    {
      step: '06',
      name: 'EXECUTIVE DECISION',
      category: 'Board & CISO Action',
      questionSolved: 'What security investment, control upgrade, or risk acceptance is justified?',
      practicalAction: 'Presenting a defensible ROI business case comparing cost-of-control against risk reduction.',
      outputArtifact: 'Board Decision Paper, Budget Justification',
      accent: 'border-purple-500 text-purple-400 bg-purple-500/10'
    },
    {
      step: '07',
      name: 'REMEDIATION',
      category: 'Enforced Accountability',
      questionSolved: 'Who fixes this, within what SLA, and what compensating controls exist in the interim?',
      practicalAction: 'Assigning formal business ownership with automated SLA countdowns (7d/30d/90d).',
      outputArtifact: 'Risk Register Entry, Remediation Work Order',
      accent: 'border-rose-500 text-rose-400 bg-rose-500/10'
    },
    {
      step: '08',
      name: 'CONTROL ASSURANCE',
      category: 'Evidence & Validation',
      questionSolved: 'Did the remediation genuinely work, and is it operating effectively over time?',
      practicalAction: 'Re-testing controls under stress and collecting immutable audit evidence for regulators.',
      outputArtifact: 'Audit Assurance Workpaper, Closed Finding Memo',
      accent: 'border-cyan-400 text-cyan-300 bg-cyan-400/10'
    }
  ];

  const current = pipeline[activeStepIndex];

  return (
    <section id="approach" className="py-20 lg:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs font-bold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-600" />
            <span>04 — SIGNATURE DIFFERENTIATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            How I Think About Cybersecurity Risk
          </h2>

          <p className="text-slate-700 text-base sm:text-lg mt-4 italic font-sans max-w-2xl mx-auto border-y border-slate-200 py-4 font-medium">
            "{PERSONAL_INFO.signatureQuote}"
          </p>
        </div>

        {/* The 8-Step Interactive Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pipeline Stages Vertical Track (6 Cols) */}
          <div className="lg:col-span-6 space-y-2">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2 font-bold">
              SELECT A TRANSFORMATION STAGE TO INSPECT:
            </span>

            {pipeline.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? 'bg-slate-50/95 border-cyan-500 shadow-md ring-1 ring-cyan-500'
                      : 'bg-slate-50/90 hover:bg-[#f8fafc] border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded border shadow-xs ${
                      isActive ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white text-slate-700 border-slate-200'
                    }`}>
                      {item.step}
                    </span>

                    <div>
                      <h4 className={`text-xs sm:text-sm font-bold tracking-wide font-display ${
                        isActive ? 'text-slate-900 font-bold' : 'text-slate-700 group-hover:text-slate-900'
                      }`}>
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {idx < pipeline.length - 1 && (
                      <ArrowDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
                    )}
                    <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                      isActive ? 'text-cyan-800 bg-cyan-100 font-bold' : 'text-slate-400'
                    }`}>
                      {isActive ? 'INSPECTING' : 'VIEW'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep Insight Spotlight Box (6 Cols) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="p-7 rounded-2xl bg-slate-50/95 border border-cyan-500/30 shadow-md space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-cyan-700 font-bold uppercase tracking-wider block">
                    STAGE {current.step} OF 08 • {current.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display mt-1">
                    {current.name}
                  </h3>
                </div>

                <div className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono font-bold shadow-xs">
                  TRANSFORMATION
                </div>
              </div>

              {/* Core Question Solved */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block font-semibold">
                  The Fundamental Question Solved:
                </span>
                <p className="text-base font-semibold text-cyan-900 italic leading-snug">
                  "{current.questionSolved}"
                </p>
              </div>

              {/* Practical Execution */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block font-semibold">
                  Practical Professional Execution:
                </span>
                <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  {current.practicalAction}
                </p>
              </div>

              {/* Tangible Output Artifact */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block font-semibold">
                  Tangible Output Artifact Generated:
                </span>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-cyan-900 font-semibold flex items-center gap-2 shadow-xs">
                  <FileCheck className="w-4 h-4 text-cyan-700 shrink-0" />
                  <span>{current.outputArtifact}</span>
                </div>
              </div>

              {/* Summary Integration */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Traditional GRC + Technical Audit + Quant Risk
                </span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % pipeline.length)}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800 transition-colors font-mono"
                >
                  <span>ADVANCE PIPELINE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
