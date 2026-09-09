import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Search,
  Copy,
  Check,
  Fingerprint,
  Layers,
  Cpu
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  // Filter certifications based on category and search query
  const filteredCerts = CERTIFICATIONS.filter((cert) => {
    // Category match
    const matchesCategory = 
      activeCategory === 'ALL' ? true :
      activeCategory === 'APPLIED SKILLS' ? cert.category === 'APPLIED SKILLS' :
      activeCategory === 'LEAD AUDITOR' ? cert.category === 'LEAD AUDITOR' :
      activeCategory === 'PROFESSIONAL' ? cert.category === 'PROFESSIONAL' :
      activeCategory === 'TARGET' ? cert.category === 'TARGET' : true;

    // Search query match
    const matchesSearch = searchQuery.trim() === '' ? true :
      cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.code && cert.code.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'ALL', label: 'All Credentials', count: CERTIFICATIONS.length },
    { id: 'APPLIED SKILLS', label: 'Microsoft Applied Skills', count: CERTIFICATIONS.filter(c => c.category === 'APPLIED SKILLS').length },
    { id: 'LEAD AUDITOR', label: 'Lead Auditor & ISO', count: CERTIFICATIONS.filter(c => c.category === 'LEAD AUDITOR').length },
    { id: 'PROFESSIONAL', label: 'Professional Cybersecurity', count: CERTIFICATIONS.filter(c => c.category === 'PROFESSIONAL').length },
    { id: 'TARGET', label: 'In Progress / Planned', count: CERTIFICATIONS.filter(c => c.category === 'TARGET').length },
  ];

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold mb-3 border border-amber-200/60">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>ACCREDITATIONS & AUDIT CREDENTIALS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Certifications & Credentials
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Demonstrated mastery across ISO Lead Auditor accreditations (ISO 27001, 42001, 27701), CompTIA technical analytics, and hands-on validated Microsoft Applied Skills.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 self-start md:self-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search credentials or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-xs"
            />
          </div>
        </div>

        {/* Category Pill Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
                    : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200/80 border border-slate-200/80'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                  isActive ? 'bg-amber-700/80 text-white' : 'bg-white text-slate-600 border border-slate-200'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Credentials Benchmark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => {
            const isCompleted = cert.status === 'CERTIFIED';
            const isInProgress = cert.status === 'IN PROGRESS';
            const isPlanned = cert.status === 'PLANNED';
            const isAppliedSkill = cert.category === 'APPLIED SKILLS';
            const isCopied = copiedCode === cert.code;

            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 flex flex-col justify-between"
              >
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />

                <div className="relative z-10">
                  {/* Status & Category Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border ${
                      isCompleted
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60'
                        : isInProgress
                        ? 'bg-amber-50 text-amber-700 border-amber-200/60'
                        : 'bg-purple-50 text-purple-700 border-purple-200/60'
                    }`}>
                      {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                      {isInProgress && <Clock className="w-3.5 h-3.5 text-amber-600" />}
                      {isPlanned && <Sparkles className="w-3.5 h-3.5 text-purple-600" />}
                      <span>{cert.status}</span>
                    </span>

                    {isAppliedSkill ? (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/70">
                        Microsoft Applied Skill
                      </span>
                    ) : cert.year ? (
                      <span className="text-xs font-semibold text-slate-500 font-mono">
                        {cert.year}
                      </span>
                    ) : null}
                  </div>

                  {/* Certification Name */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-1.5 leading-snug">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs font-bold text-cyan-700 mb-3 flex items-center gap-1.5">
                    {isAppliedSkill && <Cpu className="w-3.5 h-3.5 text-blue-600" />}
                    <span>{cert.issuer}</span>
                  </p>

                  {/* Credential Number Callout Box (if present) */}
                  {cert.code && (
                    <div className="mb-3.5 p-2.5 rounded-2xl bg-cyan-50/80 border border-cyan-200/70 flex items-center justify-between gap-2 shadow-xs">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <Fingerprint className="w-4 h-4 text-cyan-700 shrink-0" />
                        <div className="truncate">
                          <span className="text-[9px] font-bold text-cyan-800 uppercase tracking-wider block">
                            Credential Number
                          </span>
                          <span className="font-mono text-xs font-extrabold text-slate-900 tracking-wide select-all">
                            {cert.code}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCopyCode(cert.code!)}
                        title="Copy Credential Number"
                        className="p-1.5 rounded-xl bg-white hover:bg-cyan-100 border border-cyan-200 text-cyan-800 transition-colors shrink-0 cursor-pointer"
                      >
                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Domain Inner Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 shadow-xs">
                    <span className="text-slate-500 block text-[10px] uppercase mb-1 font-bold tracking-wider">
                      Specialization Domain:
                    </span>
                    <span className="font-medium leading-relaxed block">{cert.domain}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>VERIFIED CREDENTIAL</span>
                  </span>
                  {cert.code ? (
                    <span className="font-mono text-[11px] font-bold text-cyan-800">
                      ID: {cert.code}
                    </span>
                  ) : (
                    <span className="text-cyan-700 font-bold text-[11px]">
                      {cert.category === 'LEAD AUDITOR' ? 'ISO ACCREDITED' : 'COMPTIA / ISACA'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Result State */}
        {filteredCerts.length === 0 && (
          <div className="text-center py-16 px-4 rounded-3xl bg-slate-50 border border-slate-200">
            <Award className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">No credentials match your filter</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search query or selecting "All Credentials" from the category filter above.
            </p>
            <button
              onClick={() => {
                setActiveCategory('ALL');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-white text-xs font-bold text-cyan-700 border border-slate-300 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
