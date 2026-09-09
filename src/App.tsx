import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SecurityRiskLoop } from './components/SecurityRiskLoop';
import { WhatIBring } from './components/WhatIBring';
import { SignatureApproach } from './components/SignatureApproach';
import { FeaturedProjects } from './components/FeaturedProjects';
import { FairRiskSimulator } from './components/FairRiskSimulator';
import { ExecutiveDashboard } from './components/ExecutiveDashboard';
import { ControlAssurance } from './components/ControlAssurance';
import { FrameworkUniverse } from './components/FrameworkUniverse';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechnicalToolkit } from './components/TechnicalToolkit';
import { Certifications } from './components/Certifications';
import { TechnicalArticles } from './components/TechnicalArticles';
import { Education } from './components/Education';
import { Philosophy } from './components/Philosophy';
import { Insights } from './components/Insights';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExecutiveSummaryModal } from './components/ExecutiveSummaryModal';
import { TechStackCarousel } from './components/TechStackCarousel';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-cyan-500/20 selection:text-cyan-900 antialiased overflow-x-hidden">
      
      {/* Top Floating Command Navigation (matching raphaelgmomoh layout) */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="space-y-4 sm:space-y-6">
        {/* 01. Executive Hero with Real-Time Risk Flow Simulator */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Cloud, DevSecOps & GRC Tooling Carousel */}
        <section className="bg-white border-t border-slate-200">
          <TechStackCarousel />
        </section>

        {/* Signature Brand Element: The OMOWUMI Security Risk Loop */}
        <SecurityRiskLoop />

        {/* 04. What I Bring: 6 Core Capability Pillars */}
        <WhatIBring />

        {/* 05. Signature Differentiator: How I Think About Cybersecurity Risk */}
        <SignatureApproach />

        {/* 06. Security Systems I've Built: 6 Major Case Studies & Systems */}
        <FeaturedProjects />

        {/* 07. Interactive FAIR™ & Monte Carlo Quantitative Risk Engine */}
        <FairRiskSimulator />

        {/* 08. Executive Risk & Control Governance Dashboard */}
        <ExecutiveDashboard />

        {/* 09. Control Assurance: From Compliance Evidence to Control Confidence */}
        <ControlAssurance />

        {/* 10. The Framework Universe (ISO, NIST, DORA, OT, AI) */}
        <FrameworkUniverse />

        {/* 11. Career Trajectory Timeline (State Street Bank, Jacobs, LTIMindtree, Softrays, Cybarik) */}
        <ExperienceTimeline />

        {/* 12. Technical Toolkit & Engineering Ecosystem */}
        <TechnicalToolkit />

        {/* 13. Professional Certifications & Lead Auditor Accreditations */}
        <Certifications />

        {/* 14. Technical Articles on DevOps, Azure, AWS & Security */}
        <TechnicalArticles />

        {/* 15. Academic Foundation & Engineering Lineage */}
        <Education />

        {/* 15. Security Philosophy (5 Core Principles) */}
        <Philosophy />

        {/* 16. Executive Briefings & Thought Leadership Research */}
        <Insights />

        {/* 17. Contact & Professional Consultation */}
        <ContactSection onOpenCvModal={() => setIsCvModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable Executive Dossier Modal */}
      <ExecutiveSummaryModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

    </div>
  );
}
