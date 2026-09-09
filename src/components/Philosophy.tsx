import React from 'react';
import { 
  Compass, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { SECURITY_PHILOSOPHY } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 lg:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>14 — CORE OPERATIONAL ETHOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            My Security Philosophy
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Five core principles governing every audit, risk assessment, and control architecture I build.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECURITY_PHILOSOPHY.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                idx === 0 
                  ? 'bg-slate-50/95 border-cyan-500/50 shadow-md ring-1 ring-cyan-500/20 lg:col-span-2' 
                  : 'bg-slate-50/90 hover:bg-[#f8fafc] border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-cyan-700">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                    CORE PRINCIPLE
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-3">
                  {item.principle}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.rationale}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-[10px] font-mono text-cyan-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>OPERATIONAL STANDARD</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
