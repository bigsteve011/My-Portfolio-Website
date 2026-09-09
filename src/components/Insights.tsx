import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  X,
  FileText,
  Bookmark
} from 'lucide-react';
import { THOUGHT_LEADERSHIP_TOPICS } from '../data/portfolioData';
import { ThoughtLeadershipTopic } from '../types';

export const Insights: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<ThoughtLeadershipTopic | null>(null);

  return (
    <section id="insights" className="py-20 lg:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-cyan-700 font-mono text-xs font-bold uppercase tracking-widest">
                15 — THOUGHT LEADERSHIP & RESEARCH
              </span>
              <div className="h-px bg-slate-300 w-24" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
              Executive Briefings & Perspectives
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Research briefs and technical perspectives on the evolution of cybersecurity risk, control assurance, and regulatory resilience.
            </p>
          </div>

          <span className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono self-start md:self-auto font-medium shadow-sm">
            6 Executive Briefs
          </span>
        </div>

        {/* 6 Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {THOUGHT_LEADERSHIP_TOPICS.map((topic) => {
            const isBriefReady = topic.status === 'Executive Brief Available';

            return (
              <div
                key={topic.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
                      {topic.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500 font-medium">
                      <Clock className="w-3 h-3" />
                      {topic.readingTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display group-hover:text-cyan-800 transition-colors mb-3 leading-snug">
                    {topic.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {topic.summary}
                  </p>

                  {/* Key Takeaways Preview */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-6">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      Core Brief Takeaways:
                    </span>
                    {topic.keyTakeaways.slice(0, 2).map((point, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                        <div className="w-1 h-1 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold ${isBriefReady ? 'text-emerald-700' : 'text-slate-500'}`}>
                    {topic.status}
                  </span>

                  <button
                    onClick={() => setSelectedTopic(topic)}
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-700 hover:text-cyan-800 transition-colors"
                  >
                    <span>Read Abstract</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Abstract Modal */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
          <div 
            className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTopic(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
                {selectedTopic.category} • {selectedTopic.status}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-2">
                {selectedTopic.title}
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 mb-6">
              <p className="leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                {selectedTopic.summary}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider block">
                  Strategic Executive Key Findings:
                </span>
                <div className="space-y-2">
                  {selectedTopic.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="font-semibold">Author: OMOWUMI Stephen</span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-colors shadow-sm"
              >
                Close Brief
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
