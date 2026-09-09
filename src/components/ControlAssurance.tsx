import React, { useState } from 'react';
import { 
  FileText, 
  Settings, 
  Activity, 
  ShieldCheck, 
  Gauge, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const ControlAssurance: React.FC = () => {
  const [selectedLadderIndex, setSelectedLadderIndex] = useState<number>(3); // default on EFFECTIVE

  const ladder = [
    {
      stage: '01',
      title: 'DOCUMENTED',
      subtitle: 'Policy & Standard Existence',
      description: 'The security policy, SOP, or control standard is formally written, approved by leadership, and cataloged.',
      weakness: 'Purely theoretical on paper. A threat actor ignores policy documents.',
      evidenceArtifact: 'ISMS Policy Register, Approved Standard Operating Procedures',
      icon: FileText
    },
    {
      stage: '02',
      title: 'IMPLEMENTED',
      subtitle: 'Technical Configuration',
      description: 'The control is technically deployed on endpoints, cloud subscriptions, or network firewalls.',
      weakness: 'May suffer from configuration drift, unpatched bypasses, or scoping exemptions.',
      evidenceArtifact: 'Defender Baseline Configuration, Azure Policy Assignment',
      icon: Settings
    },
    {
      stage: '03',
      title: 'OPERATING',
      subtitle: 'Continuous Execution',
      description: 'The control runs continuously without administrative silence, handling everyday user sessions and telemetry.',
      weakness: 'Operational uptime does not guarantee resistance against targeted adversarial evasion.',
      evidenceArtifact: 'SIEM Log Ingestion Telemetry, Daily Patch Deployment Reports',
      icon: Activity
    },
    {
      stage: '04',
      title: 'EFFECTIVE',
      subtitle: 'Tested Adversary Resistance',
      description: 'The control is subjected to adversary simulation, penetration testing, and negative-case audit validation.',
      weakness: 'Requires regular re-validation as threat actor capabilities evolve.',
      evidenceArtifact: 'Red Team / Penetration Test Workpapers, Control Failure Analysis',
      icon: ShieldCheck
    },
    {
      stage: '05',
      title: 'MEASURED',
      subtitle: 'Key Control Indicators (KCIs)',
      description: 'Control health is measured via real-time statistical metrics, drift triggers, and automated exception reporting.',
      weakness: 'Requires continuous telemetry monitoring without metric fatigue.',
      evidenceArtifact: 'Live KCI Dashboard, Automated Drift Alert Logs',
      icon: Gauge
    },
    {
      stage: '06',
      title: 'CONTINUOUSLY IMPROVED',
      subtitle: 'Resilience Loop Optimization',
      description: 'Control baselines are automatically updated based on audit findings, threat intelligence, and emerging regulations (NIS2/DORA).',
      weakness: 'World-class maturity benchmark.',
      evidenceArtifact: 'Continual Improvement Log, Updated Statement of Applicability',
      icon: Sparkles
    }
  ];

  const current = ladder[selectedLadderIndex];

  return (
    <section id="assurance" className="py-20 lg:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
            <span>08 — CONTROL ASSURANCE PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            From Compliance Evidence to Control Confidence
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            I do not view compliance as simply collecting binders of documents. I focus on whether controls <strong className="text-slate-900">exist, are implemented, operate consistently, address the intended threat, produce evidence, and remain effective over time</strong>.
          </p>
        </div>

        {/* 6-Stage Maturity Ladder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Ladder Selection Grid (6 Cols) */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2 font-bold">
              THE 6-STAGE ASSURANCE CONTINUUM:
            </span>

            {ladder.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedLadderIndex === idx;
              return (
                <div
                  key={item.stage}
                  onClick={() => setSelectedLadderIndex(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-50/95 border-cyan-500 shadow-md ring-1 ring-cyan-500/50'
                      : 'bg-slate-50/90 hover:bg-[#f8fafc] border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono text-xs font-bold border shadow-xs ${
                      isSelected
                        ? 'bg-cyan-50 text-cyan-800 border-cyan-400 font-bold'
                        : 'bg-white text-slate-600 border-slate-200'
                    }`}>
                      {item.stage}
                    </div>

                    <div>
                      <h4 className={`text-sm font-bold font-display ${isSelected ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                        {item.title}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-xs ${
                      isSelected ? 'text-cyan-800 bg-cyan-50 border border-cyan-200' : 'text-slate-400'
                    }`}>
                      {isSelected ? 'ACTIVE' : 'SELECT'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Inspector Spotlight (6 Cols) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="p-7 rounded-2xl bg-slate-50/95 border border-cyan-500/30 shadow-md space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shadow-xs">
                    {React.createElement(current.icon, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-700 font-bold uppercase tracking-wider block">
                      STAGE {current.stage} / 06 ASSURANCE
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded bg-white text-slate-700 text-[10px] font-mono font-medium border border-slate-200 shadow-xs">
                  {current.subtitle}
                </span>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block font-semibold">
                  Assurance Definition:
                </span>
                <p className="text-sm text-slate-800 leading-relaxed bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  {current.description}
                </p>
              </div>

              {/* Critical Weakness if Left Isolated */}
              <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-1 shadow-xs">
                <span className="text-[11px] font-mono text-rose-800 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                  THE FALSE ASSURANCE RISK:
                </span>
                <p className="text-xs text-slate-700">
                  {current.weakness}
                </p>
              </div>

              {/* Evidence Artifact Required */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block font-semibold">
                  Auditable Evidence Workpaper:
                </span>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-cyan-900 flex items-center gap-2 font-medium shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0" />
                  <span>{current.evidenceArtifact}</span>
                </div>
              </div>

              {/* Bottom Quote reminder */}
              <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>OMOWUMI ASSURANCE MODEL</span>
                <button
                  onClick={() => setSelectedLadderIndex((prev) => (prev + 1) % ladder.length)}
                  className="text-cyan-700 hover:text-cyan-800 font-bold flex items-center gap-1"
                >
                  <span>Next Stage</span>
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
