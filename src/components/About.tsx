import React from 'react';
import { 
  UserCheck, 
  Layers, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck, 
  Compass,
  ArrowUpRight,
  Radio,
  CheckCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold mb-3 border border-cyan-200/60">
            <UserCheck className="w-3.5 h-3.5 text-cyan-600" />
            <span>PROFESSIONAL PROFILE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Intersection of Technical Security, Enterprise Risk & Governance
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg">
            <p>
              I am a senior cybersecurity professional focused on the intersection of <strong className="text-slate-900 font-semibold">technology, risk, governance and business decision-making</strong>.
            </p>
            
            <p className="text-slate-600">
              My career began from an engineering foundation in telecommunications and enterprise infrastructure, subsequently evolving through security operations, SIEM detection engineering, cloud security governance, IT auditing in regulated financial banking, and operational technology (OT) cybersecurity in critical infrastructure.
            </p>

            <p className="text-slate-600">
              Today, I operate across both deeply technical and strategic governance domains. I assist CISOs, Audit Directors, and executive leadership in understanding actual cyber exposure, evaluating whether security controls operate effectively under adversary pressure, elevating security maturity, and establishing bulletproof audit assurance.
            </p>

            <p className="text-slate-600">
              I am particularly driven by the necessary industry evolution from <span className="text-cyan-800 font-semibold">checklist-based compliance</span> toward <span className="text-cyan-800 font-semibold">measurable control effectiveness</span> and <span className="text-cyan-800 font-semibold">quantified financial cyber risk</span>.
            </p>

            {/* Strategic Dual Advantage Highlight (Benchmark Card Style) */}
            <div className="group relative overflow-hidden mt-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
              
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold border border-cyan-200/60">
                  <Radio className="w-3.5 h-3.5" />
                  <span>The Engineering & Business Advantage</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Unlike conventional GRC analysts who operate strictly within theoretical policy checklists, my telecommunications and network engineering background provides a first-principles understanding of TCP/IP protocols, industrial PLCs, cloud architectures, and operating system internals. Combined with a Master’s degree in Business Administration, this enables me to translate raw packet-level vulnerabilities directly into Board-level financial exposure.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Capability Matrix Cards (5 cols) (Benchmark Card Style) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="group relative overflow-hidden p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-cyan-700 uppercase tracking-wide">
                    CURRENT FOCUS
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                    Regulated Banking
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Cybersecurity Auditor @ State Street Bank
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Auditing complex financial IT controls, security assurance workpapers, SOC / ISO compliance, and remediating critical risk findings.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-cyan-700 uppercase tracking-wide">
                    CRITICAL INFRASTRUCTURE
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                    OT / ICS Security
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  OT Cybersecurity Senior GRC Analyst
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Securing industrial control systems (SCADA, DCS, PLC) at Jacobs, applying NIST SP 800-82, ISA/IEC 62443, NIS2, and NERC CIP frameworks.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-cyan-700 uppercase tracking-wide">
                    LOCATION & GLOBAL REACH
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200 shadow-xs">
                    European Union
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Based in Kraków, Poland
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Operating across European and international regulatory environments (GDPR, DORA, NIS2, ISO standards, NIST ecosystem).
                </p>
              </div>
            </div>

            {/* Core Verification Pillars (Benchmark Card Style) */}
            <div className="p-6 rounded-3xl bg-cyan-50/80 border border-cyan-200/80 space-y-2.5 shadow-sm">
              <span className="text-xs font-bold text-cyan-900 uppercase tracking-wider block">
                CORE PRINCIPLE OF PRACTICE
              </span>
              <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                "{PERSONAL_INFO.signatureQuote}"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
