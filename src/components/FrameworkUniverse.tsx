import React, { useState } from 'react';
import { 
  Workflow, 
  Layers, 
  Shield, 
  Cpu, 
  Lock, 
  FileCheck, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Search
} from 'lucide-react';
import { FRAMEWORKS_DATA } from '../data/portfolioData';
import { FrameworkItem } from '../types';

export const FrameworkUniverse: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFramework, setSelectedFramework] = useState<FrameworkItem | null>(FRAMEWORKS_DATA[0]);

  const domains = [
    'All',
    'Governance & Assurance',
    'OT / Industrial',
    'Cloud & Enterprise',
    'Privacy & AI',
    'Resilience & Banking',
    'Risk & Quantification'
  ];

  const filteredFrameworks = FRAMEWORKS_DATA.filter((fw) => {
    const matchesDomain = selectedDomain === 'All' || fw.domain === selectedDomain;
    const matchesSearch = searchQuery === '' || 
      fw.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fw.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fw.whyItMatters.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <section id="frameworks" className="py-20 lg:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-cyan-700 font-mono text-xs font-bold uppercase tracking-widest">
                09 — COMPLIANCE & CONTROL STANDARDS
              </span>
              <div className="h-px bg-slate-300 w-24" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
              The Framework Universe
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              15+ international standards, federal baselines, industrial OT specifications, and emerging AI/privacy regulations operationalized in practice.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search standards (e.g. 62443, DORA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50/90 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 font-mono transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all ${
                selectedDomain === domain
                  ? 'bg-cyan-600 text-white font-bold shadow-sm'
                  : 'bg-slate-50/90 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Framework Cards Grid & Active Detail Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Framework Cards (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[680px] overflow-y-auto pr-1">
            {filteredFrameworks.map((fw) => {
              const isSelected = selectedFramework?.id === fw.id;
              return (
                <div
                  key={fw.id}
                  onClick={() => setSelectedFramework(fw)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-50/95 border-cyan-500 shadow-md ring-1 ring-cyan-500'
                      : 'bg-slate-50/90 hover:bg-[#f8fafc] border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-cyan-800 font-bold uppercase tracking-wider">
                        {fw.domain}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-600 animate-ping" />
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 font-display mb-1">
                      {fw.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-mono mb-2 line-clamp-1 font-medium">
                      {fw.fullName}
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {fw.whyItMatters}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-500">{fw.keyControls.length} Core Controls</span>
                    <span className={`font-semibold ${isSelected ? 'text-cyan-700' : 'text-slate-400'}`}>
                      {isSelected ? 'INSPECTING' : 'VIEW DETAILS'}
                    </span>
                  </div>
                </div>
              );
            })}

            {filteredFrameworks.length === 0 && (
              <div className="col-span-2 p-8 text-center bg-slate-50/90 rounded-xl border border-slate-200 text-slate-500 text-xs font-mono shadow-sm">
                No framework matching "{searchQuery}" in domain "{selectedDomain}".
              </div>
            )}
          </div>

          {/* Detailed Inspector Panel (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {selectedFramework ? (
              <div className="p-6 rounded-2xl bg-slate-50/95 border border-cyan-500/40 shadow-md space-y-5">
                
                {/* Header */}
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan-800 font-bold uppercase tracking-wider">
                      {selectedFramework.domain}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-700 font-semibold shadow-xs">
                      INTERNATIONAL STANDARD
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    {selectedFramework.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1 font-medium">
                    {selectedFramework.fullName}
                  </p>
                </div>

                {/* Why It Matters */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                    Strategic Importance:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    {selectedFramework.whyItMatters}
                  </p>
                </div>

                {/* How I Use It */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-cyan-800 uppercase tracking-widest font-bold block">
                    How I Operationalize This:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed bg-cyan-50/90 p-3.5 rounded-xl border border-cyan-200 shadow-xs">
                    {selectedFramework.howIUseIt}
                  </p>
                </div>

                {/* Key Controls List */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                    Key Control Pillars & Modules:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedFramework.keyControls.map((ctrl, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-white border border-slate-200 text-xs font-mono text-slate-700 font-medium shadow-xs">
                        {ctrl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500 font-medium">
                  <span>OMOWUMI FRAMEWORK REPOSITORY</span>
                  <span className="text-cyan-700 font-semibold">100% AUDIT READY</span>
                </div>

              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-slate-50/90 border border-slate-200 text-center text-slate-500 font-mono text-xs shadow-sm">
                Select a framework from the grid to inspect details.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
