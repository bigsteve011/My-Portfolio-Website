import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  FileCheck2, 
  Workflow, 
  BarChart3, 
  Cpu, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { CAPABILITY_CARDS } from '../data/portfolioData';

export const WhatIBring: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<string>(CAPABILITY_CARDS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return ShieldAlert;
      case 'ShieldCheck': return ShieldCheck;
      case 'FileCheck2': return FileCheck2;
      case 'Workflow': return Workflow;
      case 'BarChart3': return BarChart3;
      case 'Cpu': return Cpu;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="capabilities" className="py-16 sm:py-24 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-200/60">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>CORE PRACTICE PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Executive Cybersecurity Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Six core operational pillars bridging technical depth with executive governance and quantified risk reduction.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>End-to-End Control Assurance</span>
          </div>
        </div>

        {/* 6 High-End Benchmark Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITY_CARDS.map((card) => {
            const Icon = getIcon(card.iconName);
            const isSelected = selectedCardId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedCardId(card.id)}
                className={`group relative overflow-hidden rounded-3xl bg-white border p-6 sm:p-7 shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 ${
                  isSelected
                    ? 'border-cyan-500/80 ring-2 ring-cyan-500/20 shadow-xl'
                    : 'border-slate-200/90 hover:border-cyan-500/40 hover:shadow-xl'
                }`}
              >
                {/* Ambient hover glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />

                <div className="relative z-10">
                  {/* Top Icon & Metric Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-right">
                      <span className="text-[10px] font-semibold text-slate-500 uppercase block tracking-wider">
                        {card.metricLabel}
                      </span>
                      <span className="text-xs font-bold text-cyan-700 font-mono">
                        {card.metricValue}
                      </span>
                    </div>
                  </div>

                  {/* Titles */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-tight mb-1">
                      {card.title}
                    </h3>
                    <span className="text-xs font-semibold text-cyan-700">
                      {card.subtitle}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {card.summary}
                  </p>

                  {/* Deliverables Inner Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4 space-y-2 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Core Work Products:
                    </span>
                    {card.coreDeliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-cyan-700 transition-colors">
                  <span>PRACTICE PILLAR</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-700 translate-x-1' : 'text-slate-400 group-hover:translate-x-1'}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
