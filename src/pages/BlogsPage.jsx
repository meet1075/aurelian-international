import React, { useState } from 'react';
import { 
  Calendar, Clock, User, ArrowRight, Tag, BookOpen, Share2, 
  ChevronLeft, CheckCircle2, Bookmark, Sparkles, Filter 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { blogsData } from '../data/blogsData';
import { Link } from 'react-router-dom';

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['All', 'Spices', 'Tiles', 'Export Guides'];

  const filteredArticles = blogsData.filter(article => {
    if (selectedCategory === 'All') return true;
    return article.category === selectedCategory;
  });

  return (
    <div className="w-full">

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-forest-950 text-ivory overflow-hidden border-b border-gold/25">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-900/90 to-forest-950/98 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-forest-900/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
              Knowledge & Trade Intelligence
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory tracking-tight">
            Export Insights & Industry Guides
          </h1>

          <p className="text-base sm:text-xl text-ivory-200/80 leading-relaxed font-light">
            In-depth procurement guides, laboratory standards, container logistics insights, and international trade regulations curated by our export directors.
          </p>
        </div>
      </section>

      {/* ═══ MAIN CONTENT ═══ */}
      <section className="py-20 lg:py-28 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* If an article is open in single view, show the full article reader template! */}
          {activeArticle ? (
            <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
              {/* Back button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-gold hover:text-gold-600 transition-colors"
              >
                <ChevronLeft size={16} />
                <span>Back to All Articles</span>
              </button>

              {/* Article Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold text-forest-950">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-charcoal/60 dark:text-ivory-300/60 flex items-center gap-1">
                    <Calendar size={13} />
                    <span>{activeArticle.date}</span>
                  </span>
                  <span className="text-xs text-charcoal/60 dark:text-ivory-300/60 flex items-center gap-1">
                    <Clock size={13} />
                    <span>{activeArticle.readTime}</span>
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 dark:text-ivory leading-tight">
                  {activeArticle.title}
                </h1>

                {/* Author profile */}
                <div className="flex items-center gap-3 py-3 border-y border-gold/15">
                  <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold">
                    AI
                  </div>
                  <div>
                    <p className="text-xs font-bold text-forest-950 dark:text-ivory">{activeArticle.author}</p>
                    <p className="text-[11px] text-charcoal/60 dark:text-ivory-300/60">{activeArticle.authorRole} • Aurelian International</p>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-gold/30 shadow-2xl">
                <img
                  src={activeArticle.featuredImage}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Key Takeaways Box */}
              {activeArticle.keyTakeaways && (
                <div className="p-6 sm:p-8 rounded-2xl bg-gold/10 border-l-4 border-gold text-forest-950 dark:text-ivory space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2">
                    <Bookmark size={15} />
                    <span>Executive Summary & Key Takeaways</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-charcoal/80 dark:text-ivory-200/80">
                    {activeArticle.keyTakeaways.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-gold flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Content Render */}
              <div 
                className="prose prose-lg dark:prose-invert max-w-none text-charcoal/85 dark:text-ivory-200/85 leading-relaxed space-y-6 font-light"
                dangerouslySetInnerHTML={{ __html: activeArticle.content }}
              />

              {/* Tags */}
              <div className="pt-6 border-t border-gold/15 flex flex-wrap items-center gap-2">
                <span className="text-xs text-charcoal/50 dark:text-ivory-300/50 uppercase tracking-wider font-semibold mr-2">
                  Tags:
                </span>
                {activeArticle.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white dark:bg-forest-900 border border-gold/25 text-charcoal/80 dark:text-ivory/80"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* End-of-article CTA Banner */}
              <div className="p-8 rounded-3xl bg-forest-900 border border-gold/30 text-ivory text-center space-y-4">
                <h3 className="font-serif text-2xl font-bold text-ivory">
                  Interested in Sourcing Under These Quality Standards?
                </h3>
                <p className="text-xs sm:text-sm text-ivory-200/80 max-w-lg mx-auto">
                  Our international trade desk can tailor specifications, arrange samples, and provide live container rate quotes.
                </p>
                <Link
                  to="/enquiry"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs text-forest-950 bg-gold hover:bg-gold-400 transition-colors shadow-md"
                >
                  <span>Submit Inquiry to Authors</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          ) : (
            /* Blog Grid View */
            <div className="space-y-12">
              
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                      selectedCategory === cat
                        ? 'bg-gold text-forest-950 shadow-md'
                        : 'bg-white dark:bg-forest-900 text-charcoal/70 dark:text-ivory/70 border border-gold/25 hover:border-gold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Grid of Articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="group rounded-3xl overflow-hidden bg-white dark:bg-forest-900/60 border border-gold/25 hover:border-gold/60 shadow-sm hover:shadow-gold-subtle transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
                  >
                    <div>
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
                        <img
                          src={article.featuredImage}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"></div>
                        <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-forest-950/90 text-gold border border-gold/30">
                          {article.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-7 space-y-3">
                        <div className="flex items-center gap-3 text-xs text-charcoal/50 dark:text-ivory-300/50">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{article.date}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{article.readTime}</span>
                          </span>
                        </div>

                        <h2 className="font-serif text-xl font-bold text-forest-950 dark:text-ivory group-hover:text-gold transition-colors leading-snug">
                          {article.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-charcoal/70 dark:text-ivory-200/70 leading-relaxed line-clamp-3 font-light">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="px-6 pb-6 pt-2">
                      <button
                        onClick={() => setActiveArticle(article)}
                        className="w-full py-2.5 rounded-xl border border-gold/40 text-gold hover:bg-gold hover:text-forest-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight size={13} className="transition-transform group-btn-hover:translate-x-1" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
