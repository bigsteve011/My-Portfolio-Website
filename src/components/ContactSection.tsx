import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  FileText, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Shield,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCvModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [topic, setTopic] = useState('Cybersecurity Risk & GRC');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: CTA & Professional Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-200/60">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>INITIATE ENGAGEMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Let's Talk Security Risk
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether the conversation is about cybersecurity risk, GRC, audit, security controls, cloud security, OT security, regulatory compliance or quantitative cyber risk — let's connect.
            </p>

            {/* Direct Info Boxes (Benchmark Card Style) */}
            <div className="space-y-3 pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block tracking-wider">Location</span>
                  <span className="text-sm font-bold text-slate-900">Kraków, Poland • European Union</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block tracking-wider">Direct Inquiries</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-cyan-700 hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Action Pill Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
              >
                <Github className="w-4 h-4 text-cyan-700" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
              >
                <Linkedin className="w-4 h-4 text-cyan-700" />
                <span>Connect on LinkedIn</span>
              </a>

              <button
                onClick={onOpenCvModal}
                className="px-5 py-2.5 rounded-full bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>Executive CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider block">
                    DIRECT ENGAGEMENT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Send a Professional Inquiry
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  SLA: &lt; 24 Hours
                </span>
              </div>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">
                    Inquiry Received
                  </h4>
                  <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">
                    Thank you for connecting. I have received your message regarding <span className="text-cyan-800 font-bold">"{topic}"</span> and will respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-2 rounded-full bg-white text-xs font-bold text-cyan-700 border border-slate-300 hover:bg-slate-50 transition-all mt-3 shadow-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 font-sans shadow-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. elena@enterprise.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 font-sans shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Organization / Firm</label>
                      <input
                        type="text"
                        placeholder="e.g. Financial Services / Enterprise"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 font-sans shadow-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Discussion Topic</label>
                      <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-cyan-500 font-sans shadow-xs"
                      >
                        <option value="Cybersecurity Risk & GRC">Cybersecurity Risk & GRC</option>
                        <option value="IT Audit & Security Assurance">IT Audit & Security Assurance</option>
                        <option value="OT / SCADA Cybersecurity">OT / SCADA Cybersecurity</option>
                        <option value="FAIR Quantitative Risk Analytics">FAIR Quantitative Risk Analytics</option>
                        <option value="Executive Career / Leadership Opportunity">Executive Career / Leadership Opportunity</option>
                        <option value="General Consulting Inquiry">General Consulting Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Message / Context *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your objective, security scope, or project..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 font-sans shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>SENDING INQUIRY...</span>
                    ) : (
                      <>
                        <span>TRANSMIT INQUIRY</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
