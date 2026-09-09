import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingDown, 
  Activity, 
  FileText, 
  Clock, 
  Layers, 
  RefreshCw,
  Zap,
  Info
} from 'lucide-react';
import { MOCK_EXECUTIVE_DASHBOARD_DATA } from '../data/portfolioData';

export const ExecutiveDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'audit' | 'thirdparty' | 'compliance'>('overview');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const data = MOCK_EXECUTIVE_DASHBOARD_DATA;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <section id="dashboard" className="py-20 lg:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-cyan-700 font-mono text-xs font-bold uppercase tracking-widest">
                07 — EXECUTIVE RISK GOVERNANCE
              </span>
              <div className="h-px bg-slate-300 w-24" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
              Executive Risk & Control Dashboard
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              How I synthesize complex technical security posture, audit findings, and third-party risk into actionable C-Suite intelligence.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-amber-800 flex items-center gap-1.5 shadow-sm font-medium">
              <Info className="w-3.5 h-3.5 text-amber-600" />
              <span>Interactive Portfolio Demonstration</span>
            </span>

            <button
              onClick={handleRefresh}
              className="p-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-cyan-700 transition-all shadow-sm"
              title="Refresh Telemetry"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-cyan-600' : ''}`} />
            </button>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-3">
          {[
            { id: 'overview', label: 'Enterprise Posture Overview' },
            { id: 'audit', label: 'Audit Ready vs. Attack Ready' },
            { id: 'compliance', label: 'Framework Compliance Index' },
            { id: 'thirdparty', label: 'Third-Party Risk (TPRM) Tiers' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide transition-all ${
                activeTab === tab.id
                  ? 'bg-cyan-600 text-white font-bold shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Top 4 KPI Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Enterprise Risk Status</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-xl font-bold font-display text-slate-900">
              {data.overallRiskPosture}
            </div>
            <div className="text-xs font-mono text-emerald-700 mt-2 flex items-center gap-1 font-semibold">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>{data.residualRiskReduction} Inherent Risk Reduction</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Control Assurance Index</span>
              <ShieldCheck className="w-4 h-4 text-cyan-600" />
            </div>
            <div className="text-2xl font-extrabold font-mono text-cyan-800">
              {data.controlAssuranceIndex}%
            </div>
            <div className="text-xs font-mono text-slate-500 mt-2">
              Tested across 106 Control Categories
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Critical Risks / Findings</span>
              <ShieldAlert className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-extrabold font-mono text-emerald-700">
              {data.criticalRisksCount} <span className="text-xs text-slate-500 font-normal">Active</span>
            </div>
            <div className="text-xs font-mono text-slate-500 mt-2">
              {data.highRisksCount} High • {data.mediumRisksCount} Medium Under SLA
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Remediation SLA Health</span>
              <Clock className="w-4 h-4 text-cyan-600" />
            </div>
            <div className="text-2xl font-extrabold font-mono text-slate-900">
              100% <span className="text-xs text-emerald-700 font-normal font-semibold">Within SLA</span>
            </div>
            <div className="text-xs font-mono text-slate-500 mt-2">
              14 On Track • 0 Overdue
            </div>
          </div>

        </div>

        {/* Tab 1: Overview & Audit Ready vs Attack Ready Spotlight */}
        {(activeTab === 'overview' || activeTab === 'audit') && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
            
            {/* Audit Ready vs Attack Ready Visual (7 Cols) */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-cyan-500/30 space-y-6 shadow-md">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-cyan-700 font-bold uppercase tracking-wider block">
                    SIGNATURE METRIC DIFFERENTIATOR
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    Audit-Ready vs. Attack-Ready Divergence
                  </h3>
                </div>

                <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-mono font-semibold">
                  Δ {data.auditReadyVsAttackReady.delta}% Gap Managed
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Traditional compliance reports only measure whether policies exist on paper (<strong className="text-slate-900">Audit Ready: {data.auditReadyVsAttackReady.auditReady}%</strong>). My methodology evaluates whether controls actively withstand technical adversary pressure and automated exploit attempts (<strong className="text-cyan-800 font-bold">Attack Ready: {data.auditReadyVsAttackReady.attackReady}%</strong>).
              </p>

              {/* Progress Bars Comparison */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-700 font-semibold">Audit-Ready Documentation Index</span>
                    <span className="text-slate-900 font-bold">{data.auditReadyVsAttackReady.auditReady}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div 
                      className="h-full bg-slate-500 rounded-full transition-all duration-1000"
                      style={{ width: `${data.auditReadyVsAttackReady.auditReady}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Verified via ISO 27001 / SOC 2 / DORA Policies</span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-cyan-800 font-bold">Attack-Ready Operational Effectiveness Index</span>
                    <span className="text-cyan-800 font-bold">{data.auditReadyVsAttackReady.attackReady}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full transition-all duration-1000 shadow-sm"
                      style={{ width: `${data.auditReadyVsAttackReady.attackReady}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-cyan-800 font-mono font-medium">Verified via Control Stress Testing & Live Telemetry</span>
                </div>
              </div>

              {/* Resolution Action */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <span className="text-cyan-800 font-mono font-bold block">Assurance Strategy:</span>
                <span>Closing the 9% delta through automated configuration drift detection in Azure/Defender and industrial zone conduit enforcement under ISA/IEC 62443.</span>
              </div>

            </div>

            {/* SLA Governance Tracker (5 Cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-200 space-y-5 shadow-sm">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                  Remediation SLA Queue
                </span>
                <span className="text-[10px] font-mono text-cyan-800 font-bold">
                  AUTO-ESCALATED
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Active Findings On-Track</span>
                    <span className="text-[10px] text-slate-500 font-mono">Within defined 7d/30d/90d SLA</span>
                  </div>
                  <span className="text-base font-bold font-mono text-emerald-700">14</span>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Approaching SLA Deadline</span>
                    <span className="text-[10px] text-amber-800 font-mono">Action required within 48h</span>
                  </div>
                  <span className="text-base font-bold font-mono text-amber-800">2</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Overdue Audit Items</span>
                    <span className="text-[10px] text-slate-500 font-mono">Zero breach tolerance enforced</span>
                  </div>
                  <span className="text-base font-bold font-mono text-emerald-700">0</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 font-mono">
                Remediation Governance: ISO 27001 Clause 9 & 10 Enforced
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Compliance Framework Scores */}
        {(activeTab === 'overview' || activeTab === 'compliance') && (
          <div className="p-6 rounded-2xl bg-white border border-slate-200 mb-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                  FRAMEWORK ASSURANCE MATRIX
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Multi-Standard Compliance Coverage
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">Continuous Assessment</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.complianceCoverage.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-display text-slate-900">{item.standard}</span>
                    <span className="text-xs font-bold font-mono text-cyan-800">{item.score}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cyan-600 rounded-full" 
                      style={{ width: `${item.score}%` }} 
                    />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-600">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Third-Party Risk Management (TPRM) */}
        {(activeTab === 'overview' || activeTab === 'thirdparty') && (
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                  SUPPLY CHAIN GOVERNANCE
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Third-Party Risk (TPRM) Tiering & Due Diligence
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">Total Suppliers: 204</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-1">
                <span className="text-xs font-mono font-bold text-rose-800 uppercase block">Tier 1 — Critical</span>
                <div className="text-xl font-bold font-mono text-slate-900">8 / 8 Assessed</div>
                <span className="text-[10px] text-slate-600 block font-medium">0 Critical Risks • SOC 2 Type II Verified</span>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1">
                <span className="text-xs font-mono font-bold text-amber-800 uppercase block">Tier 2 — High</span>
                <div className="text-xl font-bold font-mono text-slate-900">24 / 24 Assessed</div>
                <span className="text-[10px] text-slate-600 block font-medium">1 Finding in Remediation • DPA Validated</span>
              </div>

              <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200 space-y-1">
                <span className="text-xs font-mono font-bold text-cyan-800 uppercase block">Tier 3 — Medium</span>
                <div className="text-xl font-bold font-mono text-slate-900">62 / 62 Assessed</div>
                <span className="text-[10px] text-slate-600 block font-medium">Annual Re-Assessment Cadence</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase block">Tier 4 — Low</span>
                <div className="text-xl font-bold font-mono text-slate-900">110 / 110 Assessed</div>
                <span className="text-[10px] text-slate-600 block font-medium">Automated SIG Lite Questionnaires</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
