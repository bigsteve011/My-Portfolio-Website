import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  FileCode2, 
  CheckCircle,
  Sparkles,
  Search
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories = ['All', 'Quantitative Risk', 'Security Maturity', 'Governance & SLA', 'Third-Party Risk', 'AI Governance', 'Privacy & PIMS'];

  const filteredProjects = selectedCategory === 'All' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold mb-3 border border-cyan-200/60">
              <Layers className="w-3.5 h-3.5 text-cyan-600" />
              <span>CASE STUDIES & BLUEPRINTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Security Systems I've Architected
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Turning cybersecurity risk, audit evidence, and governance workflows into automated, quantifiable software architectures.
            </p>
          </div>

          <a
            href="https://github.com/bigsteve011"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 text-xs font-semibold transition-all shadow-sm self-start md:self-auto"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>github.com/bigsteve011</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
          </a>
        </div>

        {/* Filter Tab Container (matching raphaelgmomoh benchmark pill strip) */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200 mb-10 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 flex flex-col justify-between"
            >
              {/* Subtle ambient hover glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />

              <div className="relative z-10">
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-md bg-cyan-100 text-cyan-800 text-xs font-bold">
                    {project.badgeText}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2">
                  {project.subtitle}
                </p>

                {/* The Problem Highlight Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-bold text-amber-800 uppercase block tracking-wider">
                    THE PROBLEM:
                  </span>
                  <p className="text-xs text-slate-700 line-clamp-3 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Key Metrics Snippet Boxes */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <span className="text-[10px] font-semibold text-slate-500 block uppercase tracking-wider">{m.label}</span>
                      <span className="text-sm font-black text-cyan-700">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies List Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-slate-500 text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="relative z-10 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-cyan-50 hover:text-cyan-700 text-xs font-bold text-slate-800 flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200/80 transition-colors shadow-xs"
                  aria-label="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
