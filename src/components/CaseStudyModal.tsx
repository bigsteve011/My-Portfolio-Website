import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  Terminal,
  Cpu,
  ArrowRight,
  Sparkles,
  FileCode2
} from 'lucide-react';
import { ProjectCaseStudy } from '../types';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-4xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-slate-200 pb-5 mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600 border border-slate-200 font-semibold">
              CASE STUDY & SYSTEM ARCHITECTURE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-cyan-800 font-mono mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-50/95 border border-slate-200/90 shadow-sm mb-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="space-y-0.5">
              <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">
                {m.label}
              </span>
              <span className="text-sm sm:text-base font-bold font-mono text-cyan-800">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Problem & Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Problem */}
          <div className="p-5 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2 shadow-sm">
            <span className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              THE PROBLEM
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Approach */}
          <div className="p-5 rounded-xl bg-cyan-50/60 border border-cyan-200 space-y-2 shadow-sm">
            <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-600" />
              THE ARCHITECTURAL APPROACH
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* System Workflow Steps */}
        <div className="mb-6 space-y-3">
          <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-700" />
            SYSTEM EXECUTION WORKFLOW
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.workflowSteps.map((step) => (
              <div key={step.step} className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/90 space-y-1 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-cyan-100 text-cyan-800 font-mono text-[10px] font-bold flex items-center justify-center border border-cyan-200 shadow-xs">
                    {step.step}
                  </span>
                  <span className="text-xs font-bold text-slate-900 font-display">
                    {step.name}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 pl-7 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tangible Output & Business Value */}
        <div className="space-y-4 mb-6 pt-2">
          <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/90 space-y-1.5 shadow-sm">
            <span className="text-[11px] font-mono text-cyan-800 uppercase tracking-wider font-bold">
              THE ARTIFACT / OUTPUT:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 font-medium">
              {project.output}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5 shadow-sm">
            <span className="text-[11px] font-mono text-emerald-800 uppercase tracking-wider font-bold">
              THE STRATEGIC BUSINESS VALUE:
            </span>
            <p className="text-xs sm:text-sm text-slate-800 font-medium">
              {project.businessValue}
            </p>
          </div>
        </div>

        {/* Framework & Tech Tags */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <div className="flex flex-wrap gap-1.5">
            {project.framework.map((fw, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200 text-[10px] font-mono font-medium">
                {fw}
              </span>
            ))}
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-mono">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-medium flex items-center gap-2 transition-all shadow-sm"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
