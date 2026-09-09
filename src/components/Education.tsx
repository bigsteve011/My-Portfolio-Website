import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Radio, 
  Sparkles,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-cyan-700 font-mono text-xs font-bold uppercase tracking-widest">
            13 — ACADEMIC FOUNDATION
          </span>
          <div className="h-px bg-slate-300 flex-1 max-w-xs" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight mb-4">
          Academic Background & Engineering Lineage
        </h2>

        <p className="text-slate-600 text-sm sm:text-base mb-12 max-w-2xl">
          A unique blend of advanced telecommunications engineering science and executive business management.
        </p>

        {/* 3 Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_ITEMS.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/90 hover:bg-[#f8fafc] border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Degree Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                    {edu.institution}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                  {edu.degree}
                </h3>

                <p className="text-xs text-slate-600 font-mono mb-4 leading-relaxed font-medium">
                  {edu.focus}
                </p>

                {/* The Strategic Advantage Box */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-mono font-bold text-cyan-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Strategic Advantage:
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {edu.advantage}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-mono text-slate-500 font-medium">
                <span>{edu.period}</span>
                <span className="text-cyan-700 font-semibold">VERIFIED DEGREE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
