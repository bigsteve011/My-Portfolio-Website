import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Building2,
  ChevronRight
} from 'lucide-react';
import { CAREER_EXPERIENCE } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0);

  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold mb-3 border border-cyan-200/60">
              <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
              <span>LEADERSHIP & CAREER TRACK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Professional Experience Timeline
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              A track record spanning critical infrastructure OT security, tier-1 regulated banking audit, and global cloud security engineering.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>10 Years IT • 7 Years Cybersecurity</span>
          </div>
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 space-y-12">
          
          {CAREER_EXPERIENCE.map((role, idx) => {
            const isCurrent = role.isCurrent;

            return (
              <div key={idx} className="relative pl-8 sm:pl-12 group">
                
                {/* Timeline Node Point */}
                <div className={`absolute -left-[17px] top-2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isCurrent
                    ? 'bg-cyan-600 border-cyan-400 shadow-md text-white scale-110'
                    : 'bg-white border-slate-300 text-slate-500 group-hover:border-cyan-600 group-hover:text-cyan-700 shadow-sm'
                }`}>
                  <Building2 className="w-4 h-4" />
                </div>

                {/* Benchmark Card Box */}
                <div className={`group relative overflow-hidden rounded-3xl bg-white border p-6 sm:p-8 shadow-lg transition-all duration-300 ${
                  isCurrent
                    ? 'border-cyan-500/80 ring-2 ring-cyan-500/20 shadow-xl'
                    : 'border-slate-200/90 hover:border-cyan-500/40 hover:shadow-xl'
                }`}>
                  {/* Subtle ambient hover glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
                  
                  <div className="relative z-10">
                    {/* Top Metadata Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                          {role.company}
                        </span>
                        {isCurrent && (
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800 border border-cyan-200">
                            CURRENT ROLE
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-cyan-700" />
                          {role.period}
                        </span>
                        {role.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {role.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Role Title */}
                    <div className="text-base sm:text-lg font-bold text-cyan-800 mb-3">
                      {role.role}
                    </div>

                    {/* Executive Summary */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {role.executiveSummary}
                    </p>

                    {/* Core Responsibilities Inner Highlight Box */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 space-y-2.5 shadow-xs">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Key Responsibilities & Deliverables:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {role.focus.map((item, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Frameworks & Technologies Strip */}
                    <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-4">
                      {role.frameworks.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-xs text-slate-500 font-semibold mr-1">Standards:</span>
                          {role.frameworks.map((fw, fwIdx) => (
                            <span key={fwIdx} className="px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200/60 text-cyan-800 text-xs font-semibold shadow-xs">
                              {fw}
                            </span>
                          ))}
                        </div>
                      )}

                      {role.technologies && role.technologies.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-xs text-slate-500 font-semibold mr-1">Ecosystem:</span>
                          {role.technologies.slice(0, 6).map((tech, tIdx) => (
                            <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/60 text-slate-700 text-xs font-medium shadow-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
