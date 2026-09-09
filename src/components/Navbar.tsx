import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Menu, 
  X, 
  FileText, 
  ChevronRight,
  Mail
} from 'lucide-react';
import { useProfileImage } from '../utils/useProfileImage';
import { ProfilePhotoModal } from './ProfilePhotoModal';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const { profileImage } = useProfileImage();
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'projects', 'fair-demo', 'certifications', 'technical-articles', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items matching portfolio structure without section 02
  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Case Studies', href: '#projects' },
    { label: 'FAIR™ Model', href: '#fair-demo' },
    { label: 'Assurance', href: '#control-assurance' },
    { label: 'Credentials', href: '#certifications' },
    { label: 'Articles', href: '#technical-articles' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/90 border border-slate-200/90 rounded-2xl shadow-lg shadow-slate-900/5 px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Brand Name & Identity */}
        <div 
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-2.5 cursor-pointer group"
          id="brand-logo"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform duration-200 shadow-md shadow-cyan-500/10 overflow-hidden shrink-0">
            <Shield className="w-4 h-4" />
          </div>
          <div className="flex flex-col justify-center leading-none">
            <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base leading-tight">
              OMOWUMI <span className="text-cyan-700">Stephen</span>
            </span>
            <span className="hidden sm:block text-[11px] text-slate-500 font-medium mt-0.5 leading-none">
              Cyber Risk, GRC & Security Architecture
            </span>
          </div>
        </div>

        {/* Center Navigation Pill Strip (matching raphaelgmomoh.pages.dev) */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.label}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenCvModal}
            id="nav-executive-brief-btn"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold font-mono transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Executive Dossier</span>
          </button>

          {/* Profile Picture Trigger */}
          <button
            onClick={() => setIsPhotoModalOpen(true)}
            id="nav-profile-picture-btn"
            title="Executive Headshot & Profile Settings"
            className="relative p-0.5 rounded-full border border-slate-300 hover:border-cyan-500 transition-all focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 shadow-inner">
              <img
                src={profileImage}
                alt="Stephen Omowumi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Profile Photo Modal */}
      <ProfilePhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 shadow-xl transition-all"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-cyan-700 font-medium flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full py-2.5 rounded-lg bg-cyan-600 text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View Executive Briefing Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
