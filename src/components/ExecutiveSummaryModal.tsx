import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Shield, 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  Briefcase, 
  MapPin, 
  Mail, 
  Github, 
  Linkedin,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, CAREER_EXPERIENCE, CERTIFICATIONS, EDUCATION_ITEMS } from '../data/portfolioData';
import { useProfileImage } from '../utils/useProfileImage';

interface ExecutiveSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveSummaryModal: React.FC<ExecutiveSummaryModalProps> = ({ isOpen, onClose }) => {
  const { profileImage } = useProfileImage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-700" />
            <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider">
              EXECUTIVE BRIEFING SHEET & CANDIDATE DOSSIER
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-700" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Executive Dossier Body */}
        <div className="space-y-6 text-sm">
          
          {/* Header with Headshot */}
          <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-600/80 shrink-0 bg-slate-100 p-0.5 shadow-md">
              <img
                src={profileImage}
                alt="OMOWUMI Stephen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top rounded-xl"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-slate-900 font-display">
                OMOWUMI STEPHEN
              </h1>
              <p className="text-sm font-semibold text-cyan-800 font-mono mt-1">
                Senior Cybersecurity, Risk & GRC Professional
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Kraków, Poland • {PERSONAL_INFO.email} • github.com/bigsteve011
              </p>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                10 years of IT experience with 7 years specializing in cybersecurity, GRC, IT audit, cloud security governance, and operational technology (OT) cybersecurity. Proven track record across tier-1 regulated financial banking (State Street Bank) and global industrial infrastructure (Jacobs).
              </p>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider block">
              CORE SPECIALIZATIONS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-slate-700">
              <div>• Cybersecurity GRC & Policies</div>
              <div>• IT Control Auditing & Testing</div>
              <div>• OT/SCADA (NIST 800-82 / IEC 62443)</div>
              <div>• FAIR Quantitative Risk Modeling</div>
              <div>• ISO 27001 / ISO 42001 (AI) / 27701</div>
              <div>• NIST CSF 2.0 & DORA Compliance</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider block">
              PROFESSIONAL CAREER TIMELINE
            </span>
            <div className="space-y-3">
              {CAREER_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">{exp.role}</h4>
                      <span className="text-[11px] font-mono text-cyan-700 font-semibold">{exp.company}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                    {exp.executiveSummary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider block">
                EDUCATION
              </span>
              <div className="space-y-2 text-xs">
                {EDUCATION_ITEMS.map((edu, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 shadow-sm">
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-500 font-mono text-[10px]">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider block">
                KEY CERTIFICATIONS
              </span>
              <div className="space-y-1.5 text-xs font-mono">
                {CERTIFICATIONS.slice(0, 6).map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] shadow-sm">
                    <span className="text-slate-800 font-medium">{cert.name}</span>
                    <span className="text-emerald-700 font-bold">{cert.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>OMOWUMI STEPHEN • CYBERSECURITY RISK INTELLIGENCE</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-colors shadow-sm"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
