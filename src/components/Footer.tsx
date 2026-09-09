import React from 'react';
import { Shield, Github, Linkedin, Mail, ArrowUp, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 items-start">
          
          {/* Brand & Statement (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-800 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-white uppercase tracking-wider">
                OMOWUMI <span className="text-cyan-400">STEPHEN</span>
              </span>
            </div>

            <p className="text-xs font-mono text-cyan-300">
              Cybersecurity Risk | GRC | Audit | Security Assurance
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              "{PERSONAL_INFO.footerStatement}"
            </p>

            <div className="text-xs font-mono text-slate-400">
              Location: Kraków, Poland • European Union
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-white font-bold uppercase tracking-wider block">
              Core Architecture
            </span>
            <ul className="space-y-1.5 text-xs font-mono">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">01. Professional Profile</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">02. Career Trajectory</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">03. Security Systems</a></li>
              <li><a href="#fair-demo" className="hover:text-cyan-400 transition-colors">04. FAIR™ Simulator</a></li>
              <li><a href="#certifications" className="hover:text-cyan-400 transition-colors">05. Credentials & Certs</a></li>
              <li><a href="#technical-articles" className="hover:text-cyan-400 transition-colors">06. Technical Articles</a></li>
              <li><a href="#frameworks" className="hover:text-cyan-400 transition-colors">07. Frameworks Universe</a></li>
            </ul>
          </div>

          {/* Social & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono text-white font-bold uppercase tracking-wider block">
              Connect & Repositories
            </span>
            
            <div className="flex flex-col gap-2 text-xs font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub @bigsteve011</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white transition-all shadow-xs"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Copyright & Legal Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 OMOWUMI Stephen. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Cybersecurity Risk Intelligence</span>
            <span>•</span>
            <span>Zero Slop Executive Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
