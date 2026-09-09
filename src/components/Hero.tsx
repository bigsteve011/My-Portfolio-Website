import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfileImage } from '../utils/useProfileImage';
import { ProfilePhotoModal } from './ProfilePhotoModal';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { profileImage } = useProfileImage();
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const capabilities = [
    'GRC & GOVERNANCE',
    'CYBERSECURITY AUDIT',
    'OT / INDUSTRIAL CYBER',
    'CLOUD SECURITY',
    'FAIR QUANTITATIVE RISK',
    'REGULATORY COMPLIANCE',
    'CONTROL ASSURANCE'
  ];

  return (
    <section 
      id="hero"
      className="relative w-full pt-6 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 opacity-70">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-blue-300/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Positioning & Core Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Status & Availability Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-800">
                Available for Senior Cyber Risk, GRC & Audit Advisory
              </span>
            </div>

            {/* Prominent Name & Title Header */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08] sm:leading-[1.08]">
                <span>OMOWUMI </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">Stephen</span>
              </h1>
              <div className="text-base sm:text-lg text-slate-500 font-semibold">
                Senior Cyber Risk Specialist, GRC Leader & Lead Auditor
              </div>
            </div>

            {/* Core Hero Statement Card */}
            <div className="w-full p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
              <p className="text-lg sm:text-xl font-medium text-slate-900 italic tracking-tight font-display">
                "{PERSONAL_INFO.heroStatement}"
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Cybersecurity risk, governance, audit and control assurance professional combining deep technical security knowledge with enterprise risk, regulatory compliance and quantitative risk analysis. Bridging the critical gap between <strong className="text-slate-900 font-semibold">Technical Security ↔ Risk ↔ Governance ↔ Audit ↔ Business Decision-Making</strong>.
            </p>

            {/* CTA Buttons (Pill design matching raphaelgmomoh benchmark) */}
            <div className="flex flex-row items-center gap-2 sm:gap-3 pt-2 overflow-x-auto pb-2 w-full sm:w-auto scrollbar-none">
              <a
                href="#projects"
                id="hero-view-work-btn"
                className="shrink-0 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-connect-btn"
                className="shrink-0 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-semibold border border-slate-200 shadow-xs transition-all flex items-center gap-2"
              >
                <span>Let's Connect</span>
              </a>

              <button
                onClick={onOpenCvModal}
                id="hero-executive-summary-btn"
                className="shrink-0 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-cyan-50 hover:bg-cyan-100 text-cyan-700 text-xs sm:text-sm font-semibold border border-cyan-200/60 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Dossier</span>
              </button>
            </div>

            {/* Focus Areas Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-slate-400 font-medium">Focus Areas:</span>
              {[
                'FAIR™ Quantitative Risk',
                'ISO 27001 & 42001 Lead Auditor',
                'DORA & NIS2 Compliance',
                'OT / SCADA Security',
                'SOC 2 & Cloud Assurance',
                'KCI & Residual Risk Metrics'
              ].map((focus) => (
                <span
                  key={focus}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60 shadow-2xs"
                >
                  {focus}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Benchmark Executive Profile Photo Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/4.5] sm:aspect-[4/4.8] rounded-3xl p-3 bg-white/60 backdrop-blur-md border border-slate-200/90 shadow-2xl shadow-slate-900/10 group">
              {/* Radial dot tech pattern */}
              <div className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={profileImage}
                  alt="OMOWUMI Stephen - Cybersecurity Risk & GRC Professional"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] hover:scale-105 transition-transform duration-700 cursor-pointer"
                  onClick={() => setIsPhotoModalOpen(true)}
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
                
                {/* Bottom text overlay matching raphaelgmomoh layout */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                  <div>
                    <div className="font-bold text-base tracking-tight">OMOWUMI Stephen</div>
                    <div className="text-xs text-slate-300 font-medium">Cyber Risk, GRC & Security Assurance Specialist</div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Lead Auditor Badge matching MVP badge placement */}
              <div 
                onClick={() => setIsPhotoModalOpen(true)}
                title="Verified Lead Auditor Credentials"
                className="absolute bottom-16 right-4 sm:bottom-20 sm:right-6 cursor-pointer group hover:scale-105 transition-transform duration-200 z-10 drop-shadow-xl"
              >
                <div className="p-2.5 rounded-2xl bg-white/95 border border-slate-200 shadow-xl flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 font-bold text-xs">
                    ISO
                  </div>
                  <div className="pr-1">
                    <div className="text-[11px] font-bold text-slate-900 leading-tight">Lead Auditor</div>
                    <div className="text-[9px] font-mono text-cyan-700 font-semibold">27001 • 42001 • 27701</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Fast Credibility / Badges Grid (matching raphaelgmomoh benchmark card boxes) */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/90 shadow-sm transition-all cursor-pointer group hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <span className="text-cyan-700 font-black font-mono text-base">10+</span>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>10+ Years</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Total Enterprise IT Foundation
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/90 shadow-sm transition-all cursor-pointer group hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <span className="text-blue-700 font-black font-mono text-base">7+</span>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>7+ Years</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Cybersecurity, GRC & Audit
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/90 shadow-sm transition-all cursor-pointer group hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <span className="text-amber-700 font-black font-mono text-base">6x</span>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>ISO Lead Auditor</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Certified Global Accreditations
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/90 shadow-sm transition-all cursor-pointer group hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <span className="text-emerald-700 font-black font-mono text-base">100%</span>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>Quantitative Risk</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  FAIR™ Business Aligned
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Profile Photo Modal */}
      <ProfilePhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      />
    </section>
  );
};
