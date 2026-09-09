import React, { useState, useMemo } from 'react';
import { 
  Terminal, 
  Cloud, 
  ShieldCheck, 
  Search, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  X, 
  FileCode2, 
  Layers, 
  Clock, 
  Sparkles, 
  Code2,
  Workflow,
  Lock,
  Boxes,
  Award,
  Eye,
  Bookmark,
  Share2,
  ExternalLink,
  ThumbsUp
} from 'lucide-react';
import { TECHNICAL_ARTICLES } from '../data/technicalArticlesData';
import { TechnicalArticle } from '../types';

export const TechnicalArticles: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'DevOps' | 'Azure' | 'AWS' | 'Security'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<TechnicalArticle | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  const categories: ('All' | 'DevOps' | 'Azure' | 'AWS' | 'Security')[] = [
    'All',
    'DevOps',
    'Azure',
    'AWS',
    'Security'
  ];

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filter articles based on Category, Search Query, and Bookmarks
  const filteredArticles = useMemo(() => {
    return TECHNICAL_ARTICLES.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesBookmark = !showBookmarkedOnly || bookmarkedIds.includes(article.id);
      const matchesSearch = 
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.publication && article.publication.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (article.platform && article.platform.toLowerCase().includes(searchQuery.toLowerCase())) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        article.level.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesBookmark && matchesSearch;
    });
  }, [selectedCategory, searchQuery, showBookmarkedOnly, bookmarkedIds]);

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const handleShareArticle = (article: TechnicalArticle) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}#article-${article.id}`);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'DevOps':
        return 'text-emerald-800 bg-emerald-50/90 border-emerald-200';
      case 'Azure':
        return 'text-sky-800 bg-sky-50/90 border-sky-200';
      case 'AWS':
        return 'text-amber-800 bg-amber-50/90 border-amber-200';
      case 'Security':
        return 'text-cyan-800 bg-cyan-50/90 border-cyan-200';
      default:
        return 'text-slate-700 bg-slate-100/90 border-slate-200';
    }
  };

  return (
    <section id="technical-articles" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
      
      {/* Section Header (Layout matching raphaelgmomoh.pages.dev) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold mb-3 border border-cyan-200/60 shadow-xs">
            <FileCode2 className="w-3.5 h-3.5 text-cyan-600" />
            <span>Technical Blog & Thought Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Practical Guides for Operational Reality
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-2xl leading-relaxed">
            Deep-dive operational blueprints, architecture decision records, and security engineering guides written from production cybersecurity, cloud governance, and critical infrastructure assurance.
          </p>
        </div>

        {/* Category Filter Pills (matching raphaelgmomoh.pages.dev) */}
        <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Guides' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Search & Saved Filter Toolbar */}
      <div className="mb-8 flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides by keyword, CVE, framework, or cloud..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
          className={`px-4 py-2.5 rounded-2xl text-xs font-bold font-mono transition-all flex items-center gap-2 shrink-0 border ${
            showBookmarkedOnly
              ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
              : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 shadow-sm'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${showBookmarkedOnly ? 'fill-white' : ''}`} />
          <span>Saved ({bookmarkedIds.length})</span>
        </button>
      </div>

        {/* Empty State */}
        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white border border-slate-200 shadow-sm">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-700">No technical guides match this filter.</p>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setShowBookmarkedOnly(false); }}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:gap-10">
            {filteredArticles.map((article) => {
              const isBookmarked = bookmarkedIds.includes(article.id);

              return (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 cursor-pointer group hover:-translate-y-1 relative"
                >
                  {/* Left Column (Visual cover / architecture preview banner) */}
                  <div className="w-full md:w-72 lg:w-80 shrink-0 aspect-[12/5] md:aspect-auto md:min-h-[220px] self-stretch bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex flex-col justify-between p-6 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300 border-b md:border-b-0 md:border-r border-slate-200/60">
                    {/* Subtle background tech texture */}
                    <div className="absolute inset-0 bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                    <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/10">
                        {article.platform || 'Architecture'}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-cyan-300 shadow-xs">
                        <Code2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="relative z-10 my-3">
                      <div className="text-xs font-mono text-cyan-400 font-bold mb-1">
                        {article.level}
                      </div>
                      <div className="text-xs text-slate-300 line-clamp-2 font-mono font-medium">
                        {article.publication || 'Cloud Security Engineering'}
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[10px] font-mono text-slate-400">
                      <span>{article.architectureWorkflow?.length ? `${article.architectureWorkflow.length}-Step Pipeline` : 'Verified Lab'}</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        VERIFIED
                      </span>
                    </div>
                  </div>

                  {/* Right Column (Article Details, Tags & Actions) */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between w-full">
                    <div>
                      {/* Category pill, date & bookmark */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-md bg-cyan-100 text-cyan-800 text-xs font-bold">
                            {article.category}
                          </span>
                          <span className="text-xs text-slate-400 font-medium font-mono">
                            {article.publishedDate || '2026'} • {article.readTime}
                          </span>
                          {article.level && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600 border border-slate-200 font-semibold">
                              {article.level}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={(e) => toggleBookmark(article.id, e)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 transition-colors"
                          title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
                        >
                          <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-cyan-600 text-cyan-600" : ""}`} />
                        </button>
                      </div>

                      {/* Article Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-cyan-700 transition-colors mb-3 leading-snug font-display">
                        {article.title}
                      </h3>

                      {/* Article Summary */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {article.summary}
                      </p>

                      {/* Article Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-medium text-slate-600 font-mono"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Stats & CTA */}
                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4 text-xs text-slate-400 font-medium font-mono">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-slate-400" />
                          {article.clapsOrViews || "3.4k Reads"}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-3.5 h-3.5 text-slate-400" />
                          {article.likes || 380}
                        </span>
                      </div>

                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Read Guide</span>
                        <ArrowRight className="w-4 h-4 text-cyan-600" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      {/* Comprehensive Technical Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-50/95 border border-slate-200 shadow-2xl overflow-hidden text-slate-800 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="p-5 sm:p-6 border-b border-slate-200 bg-white flex items-start justify-between gap-4 sticky top-0 z-20 shadow-xs">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${getCategoryColor(selectedArticle.category)}`}>
                    {selectedArticle.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 font-semibold shadow-xs">
                    {selectedArticle.level}
                  </span>
                  {selectedArticle.publication && (
                    <span className="text-xs font-mono text-cyan-700 font-semibold">
                      {selectedArticle.publication}
                    </span>
                  )}
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {selectedArticle.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 font-display leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleShareArticle(selectedArticle)}
                  title="Copy link to article"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-xs"
                >
                  {copiedShare ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors shadow-xs"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-8 space-y-8 overflow-y-auto max-h-[calc(92vh-140px)]">
              
              {/* Abstract / Problem Statement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 space-y-1.5 shadow-sm">
                  <span className="text-[10px] font-mono text-rose-800 uppercase tracking-wider font-bold block flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-rose-600" />
                    Problem & Threat Vector:
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {selectedArticle.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200 space-y-1.5 shadow-sm">
                  <span className="text-[10px] font-mono text-cyan-800 uppercase tracking-wider font-bold block flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                    Architectural Solution:
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {selectedArticle.solutionArchitecture}
                  </p>
                </div>
              </div>

              {/* Workflow Pipeline Steps */}
              {selectedArticle.architectureWorkflow && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-cyan-700" />
                    <h4 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                      Architectural Execution Pipeline
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedArticle.architectureWorkflow.map((wf) => (
                      <div key={wf.step} className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-sm">
                        <div className="w-6 h-6 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {wf.step}
                        </div>
                        <div className="space-y-1">
                          <h5 className="text-xs font-bold text-slate-900 font-mono">
                            {wf.title}
                          </h5>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            {wf.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Snippets / Policy Configuration */}
              {selectedArticle.codeSnippets && selectedArticle.codeSnippets.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-700" />
                    <h4 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                      Infrastructure as Code & Policy Definitions
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {selectedArticle.codeSnippets.map((snippet, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden border border-slate-800 bg-[#0f172a] shadow-md">
                        {/* Snippet Header */}
                        <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono text-cyan-400 font-bold">
                              {snippet.filename}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              ({snippet.language})
                            </span>
                          </div>

                          <button
                            onClick={() => handleCopyCode(snippet.code, idx)}
                            className="flex items-center gap-1 text-[11px] font-mono text-slate-300 hover:text-cyan-300 transition-colors"
                          >
                            {copiedIndex === idx ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400 font-semibold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Code</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Description */}
                        <div className="px-4 py-2 bg-slate-950/70 border-b border-slate-900 text-[11px] text-slate-400 italic">
                          {snippet.description}
                        </div>

                        {/* Code Display */}
                        <div className="p-4 overflow-x-auto">
                          <pre className="text-xs font-mono text-cyan-200 leading-relaxed">
                            <code>{snippet.code}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Strategic Takeaways */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Engineering & Operational Takeaways
                </h4>

                <div className="space-y-2">
                  {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantified Impact Metrics */}
              {selectedArticle.impactMetrics && selectedArticle.impactMetrics.length > 0 && (
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[10px] font-mono text-slate-600 uppercase tracking-wider block mb-3 font-semibold">
                    Quantified Engineering & Security Impact:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedArticle.impactMetrics.map((metric, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center shadow-xs">
                        <span className="text-[10px] font-mono text-slate-500 block uppercase font-semibold">
                          {metric.label}
                        </span>
                        <span className="text-sm sm:text-base font-extrabold text-cyan-800 font-mono mt-0.5 block">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer Bar */}
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-white flex items-center justify-between text-xs font-mono text-slate-500 shadow-xs">
              <div className="flex items-center gap-2">
                <span>Author: OMOWUMI Stephen</span>
                <span>•</span>
                <span className="text-cyan-700 font-semibold">Senior Cyber Risk & DevOps Security</span>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-colors shadow-sm"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
