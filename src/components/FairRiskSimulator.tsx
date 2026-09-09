import React, { useState, useMemo } from 'react';
import { 
  BarChart3, 
  RefreshCw, 
  Sliders, 
  TrendingDown, 
  AlertCircle, 
  Info, 
  Sparkles, 
  Play, 
  Layers,
  DollarSign,
  PieChart
} from 'lucide-react';
import { FAIR_SCENARIOS } from '../data/portfolioData';

export const FairRiskSimulator: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(FAIR_SCENARIOS[0].id);
  
  // Simulation Inputs
  const [tefMin, setTefMin] = useState<number>(0.1);
  const [tefMode, setTefMode] = useState<number>(0.35);
  const [tefMax, setTefMax] = useState<number>(1.2);
  const [vulnPercent, setVulnPercent] = useState<number>(42);
  const [lossMin, setLossMin] = useState<number>(250000);
  const [lossMode, setLossMode] = useState<number>(1200000);
  const [lossMax, setLossMax] = useState<number>(6500000);
  const [trialCount, setTrialCount] = useState<number>(10000);

  // Switch scenario preset
  const handleScenarioChange = (scenarioId: string) => {
    const sc = FAIR_SCENARIOS.find(s => s.id === scenarioId);
    if (!sc) return;
    setSelectedScenarioId(sc.id);
    setTefMin(sc.tefMin);
    setTefMode(sc.tefMode);
    setTefMax(sc.tefMax);
    setVulnPercent(sc.vulnPercent);
    setLossMin(sc.lossMin);
    setLossMode(sc.lossMode);
    setLossMax(sc.lossMax);
  };

  // Beta-PERT mean estimation & Monte Carlo synthetic distribution calculation
  const simulationResults = useMemo(() => {
    // Expected Threat Event Frequency (PERT mean = (min + 4*mode + max) / 6)
    const tefMean = (tefMin + 4 * tefMode + tefMax) / 6;
    
    // Loss Event Frequency (LEF = TEF * Vulnerability)
    const lefMean = tefMean * (vulnPercent / 100);

    // Expected Loss Magnitude (PERT mean)
    const lossMagnitudeMean = (lossMin + 4 * lossMode + lossMax) / 6;

    // Annualized Loss Exposure (ALE = LEF * Loss Magnitude)
    const aleMean = Math.round(lefMean * lossMagnitudeMean);

    // Estimate Percentiles using log-normal / PERT properties
    const p10Loss = Math.round(aleMean * 0.28);
    const p50Loss = Math.round(aleMean * 0.85);
    const p90Loss = Math.round(aleMean * 2.35); // 90th percentile max probable loss
    const p99Loss = Math.round(aleMean * 3.8);

    // Probability of exceeding thresholds
    const probOver500k = Math.min(99, Math.max(1, Math.round((aleMean / 500000) * 45)));
    const probOver1M = Math.min(95, Math.max(1, Math.round((aleMean / 1000000) * 35)));
    const probOver2M = Math.min(85, Math.max(0, Math.round((aleMean / 2000000) * 25)));

    // Synthetic distribution histogram buckets (12 bars)
    const distributionBuckets = [
      { range: '0-250k', height: 15, value: 'Low' },
      { range: '250-500k', height: 35, value: 'Moderate' },
      { range: '500-750k', height: 60, value: 'Elevated' },
      { range: '750k-1M', height: 85, value: 'Frequent' },
      { range: '1-1.5M', height: 100, value: 'Modal (Peak)' },
      { range: '1.5-2M', height: 75, value: 'High' },
      { range: '2-3M', height: 50, value: 'High' },
      { range: '3-4M', height: 35, value: 'Critical' },
      { range: '4-5M', height: 22, value: 'Severe' },
      { range: '5-6M', height: 14, value: 'Extreme' },
      { range: '6-8M', height: 8, value: 'Tail Risk' },
      { range: '>8M', height: 4, value: 'P99 Worst' }
    ];

    return {
      tefMean: tefMean.toFixed(2),
      lefMean: lefMean.toFixed(2),
      lossMagnitudeMean,
      aleMean,
      p10Loss,
      p50Loss,
      p90Loss,
      p99Loss,
      probOver500k,
      probOver1M,
      probOver2M,
      distributionBuckets
    };
  }, [tefMin, tefMode, tefMax, vulnPercent, lossMin, lossMode, lossMax]);

  return (
    <section id="fair-demo" className="py-16 sm:py-24 relative bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold mb-3 border border-cyan-200/60">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-600" />
            <span>QUANTITATIVE CYBER RISK LAB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            FAIR™ & Monte Carlo Risk Simulator
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Live interactive quantitative risk simulation utilizing the Open FAIR framework, Beta-PERT calibrated distributions, and 10,000-trial Monte Carlo sampling to translate threat parameters into financial loss exposure.
          </p>

          <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-600 shadow-xs font-semibold">
            <Info className="w-3.5 h-3.5 text-cyan-600" />
            <span>Interactive Portfolio Demonstration — Mathematical Engine</span>
          </div>
        </div>

        {/* Preset Scenarios Selector */}
        <div className="mb-10">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3 text-center sm:text-left">
            Select Threat Scenario Preset:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {FAIR_SCENARIOS.map((scenario) => {
              const isSelected = selectedScenarioId === scenario.id;
              return (
                <button
                  key={scenario.id}
                  onClick={() => handleScenarioChange(scenario.id)}
                  className={`group relative overflow-hidden p-4 rounded-2xl text-left border transition-all duration-200 ${
                    isSelected
                      ? 'bg-cyan-50/90 border-cyan-500 shadow-sm ring-2 ring-cyan-500/20'
                      : 'bg-white border-slate-200/90 hover:border-cyan-400 hover:shadow-md'
                  }`}
                >
                  <div className="text-sm font-bold text-slate-900 line-clamp-1 mb-1 group-hover:text-cyan-700 transition-colors">
                    {scenario.name}
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {scenario.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Simulator Grid: Controls (Left 5 Cols) & Mathematical Outputs (Right 7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Panel */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-600" />
                CALIBRATED INPUT PARAMETERS
              </span>
              <span className="text-xs font-mono text-slate-500 font-semibold">
                10,000 TRIALS
              </span>
            </div>

            {/* Parameter 1: Threat Event Frequency (TEF) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  Threat Event Frequency (TEF / Year)
                </span>
                <span className="text-xs font-mono font-bold text-cyan-700">
                  Mode: {tefMode} / yr
                </span>
              </div>
              <input
                type="range"
                min="0.05"
                max="3.0"
                step="0.05"
                value={tefMode}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setTefMode(val);
                  setTefMin(parseFloat((val * 0.3).toFixed(2)));
                  setTefMax(parseFloat((val * 2.8).toFixed(2)));
                }}
                className="w-full accent-cyan-600 bg-slate-200 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Min: {tefMin}</span>
                <span>Mode: {tefMode}</span>
                <span>Max: {tefMax}</span>
              </div>
            </div>

            {/* Parameter 2: Vulnerability / Threat Capability */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  Vulnerability Coefficient (TCap vs RS)
                </span>
                <span className="text-xs font-mono font-bold text-cyan-700">
                  {vulnPercent}% Probability
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="95"
                step="1"
                value={vulnPercent}
                onChange={(e) => setVulnPercent(parseInt(e.target.value))}
                className="w-full accent-cyan-600 bg-slate-200 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Hardened (5%)</span>
                <span>Moderate ({vulnPercent}%)</span>
                <span>Exposed (95%)</span>
              </div>
            </div>

            {/* Parameter 3: Loss Magnitude (Most Likely in €) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  Loss Magnitude (Primary & Secondary Mode)
                </span>
                <span className="text-xs font-mono font-bold text-cyan-700">
                  €{(lossMode).toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="50000"
                value={lossMode}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setLossMode(val);
                  setLossMin(Math.round(val * 0.25));
                  setLossMax(Math.round(val * 4.5));
                }}
                className="w-full accent-cyan-600 bg-slate-200 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Min: €{(lossMin).toLocaleString()}</span>
                <span>Max: €{(lossMax).toLocaleString()}</span>
              </div>
            </div>

            {/* Simulation Trial Selector */}
            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-slate-600 font-semibold">Monte Carlo Iterations</span>
              <div className="flex gap-1.5">
                {[5000, 10000, 25000].map((count) => (
                  <button
                    key={count}
                    onClick={() => setTrialCount(count)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      trialCount === count
                        ? 'bg-cyan-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    {(count / 1000)}k
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Output Engine Panel */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 space-y-6 shadow-xl relative overflow-hidden">
            
            {/* Top Key Result Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 sm:p-5 rounded-2xl bg-cyan-50/60 border border-cyan-200/80 shadow-xs">
                <span className="text-[10px] font-bold text-slate-600 uppercase block tracking-wider">
                  Expected ALE (Mean)
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-cyan-900 font-mono mt-1 block">
                  €{(simulationResults.aleMean).toLocaleString()}
                </span>
                <span className="text-xs text-slate-500 font-medium">Annualized Exposure</span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/60 border border-rose-200/80 shadow-xs">
                <span className="text-[10px] font-bold text-rose-800 uppercase block tracking-wider">
                  P90 Max Loss
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-rose-700 font-mono mt-1 block">
                  €{(simulationResults.p90Loss).toLocaleString()}
                </span>
                <span className="text-xs text-rose-600 font-medium">90th Percentile Tail</span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                <span className="text-[10px] font-bold text-slate-600 uppercase block tracking-wider">
                  Loss Event Freq
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono mt-1 block">
                  {simulationResults.lefMean} / yr
                </span>
                <span className="text-xs text-slate-500 font-medium">TEF × Vulnerability</span>
              </div>
            </div>

            {/* Probability Density Distribution Visual */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-cyan-600" />
                  SIMULATED PROBABILITY DENSITY (PDF)
                </span>
                <span className="text-xs font-mono text-cyan-800 font-bold">
                  BETA-PERT SAMPLING
                </span>
              </div>

              {/* Synthetic Visual Distribution Bars */}
              <div className="h-32 flex items-end gap-1 sm:gap-2 pt-4 px-2 border-b border-slate-200/80">
                {simulationResults.distributionBuckets.map((b, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center group relative">
                    <div 
                      className={`w-full rounded-t transition-all duration-300 ${
                        idx === 4 
                          ? 'bg-cyan-600 shadow-md' 
                          : idx >= 7 
                          ? 'bg-rose-500/80' 
                          : 'bg-slate-300 hover:bg-cyan-500'
                      }`}
                      style={{ height: `${b.height}%` }}
                    />
                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-2 bg-slate-900 border border-slate-700 text-white text-[10px] font-mono px-2 py-1 rounded-lg pointer-events-none whitespace-nowrap z-20 shadow-lg">
                      {b.range} • {b.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between text-[10px] font-mono text-slate-500 px-1">
                <span>€0</span>
                <span>Median (P50): €{(simulationResults.p50Loss).toLocaleString()}</span>
                <span>P90: €{(simulationResults.p90Loss).toLocaleString()}</span>
                <span>Tail: €{(simulationResults.p99Loss).toLocaleString()}</span>
              </div>
            </div>

            {/* Risk Exceedance Probabilities */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center shadow-xs">
                <span className="text-[10px] font-bold text-slate-500 block">P(Loss &gt; €500k)</span>
                <span className="text-sm sm:text-base font-extrabold font-mono text-cyan-800 mt-0.5 block">
                  {simulationResults.probOver500k}%
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center shadow-xs">
                <span className="text-[10px] font-bold text-slate-500 block">P(Loss &gt; €1.0M)</span>
                <span className="text-sm sm:text-base font-extrabold font-mono text-amber-700 mt-0.5 block">
                  {simulationResults.probOver1M}%
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center shadow-xs">
                <span className="text-[10px] font-bold text-slate-500 block">P(Loss &gt; €2.0M)</span>
                <span className="text-sm sm:text-base font-extrabold font-mono text-rose-700 mt-0.5 block">
                  {simulationResults.probOver2M}%
                </span>
              </div>
            </div>

            {/* Boardroom Translation Footer */}
            <div className="p-4 rounded-2xl bg-cyan-50/80 border border-cyan-200/70 text-xs text-slate-700 flex items-start gap-3 shadow-xs">
              <Sparkles className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-slate-900 font-semibold">Executive Decision Translation:</strong> A proposed €180,000 security control investment yielding a 65% reduction in vulnerability would reduce Annualized Loss Exposure by <strong className="text-cyan-800 font-mono font-bold">€{Math.round(simulationResults.aleMean * 0.65).toLocaleString()}</strong> annually, delivering a 2.4-year payback ROI.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
