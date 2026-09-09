import React, { useState } from 'react';
import { 
  Terminal, 
  Layers, 
  Cloud, 
  ShieldAlert, 
  Cpu, 
  Code2, 
  Server, 
  Sparkles,
  Search,
  CheckCircle2
} from 'lucide-react';
import { TECHNICAL_TOOLKIT } from '../data/portfolioData';

export const TechnicalToolkit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('automationEngineering');

  const categories = [
    { id: 'automationEngineering', label: 'Quant & Engineering (Python)', icon: Code2 },
    { id: 'grc', label: 'Enterprise GRC & IRM', icon: Layers },
    { id: 'microsoftSecurity', label: 'Microsoft Security & Defender', icon: ShieldAlert },
    { id: 'cloud', label: 'Multi-Cloud & Arc', icon: Cloud },
    { id: 'siem', label: 'SIEM & Detection', icon: Terminal },
    { id: 'vulnerabilityMgmt', label: 'Vulnerability Management', icon: Cpu },
    { id: 'infrastructureEndpoint', label: 'Endpoint & Infrastructure', icon: Server },
  ];

  const currentTools = (TECHNICAL_TOOLKIT as any)[activeCategory] || [];

  return (
    <section id="toolkit" className="py-16 sm:py-24 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-3 border border-emerald-200/60">
              <Cpu className="w-3.5 h-3.5 text-emerald-600" />
              <span>STACK & ECOSYSTEM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Technology & Tooling
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Hands-on mastery across GRC platforms, SIEM telemetry, cloud environments, and mathematical Python simulation engines.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Python for FAIR & Monte Carlo Risk Analytics</span>
          </div>
        </div>

        {/* Category Selector Tabs Strip (matching raphaelgmomoh benchmark pill strip) */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200 mb-10 w-fit">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-600' : 'text-slate-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tools Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTools.map((tool: any, idx: number) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 flex flex-col justify-between"
            >
              {/* Subtle ambient hover glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {tool.name}
                  </h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border shadow-xs ${
                    tool.level === 'Expert'
                      ? 'bg-cyan-50 text-cyan-800 border-cyan-200'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {tool.level}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1.5 text-cyan-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Production Tested</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase">ENTERPRISE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
