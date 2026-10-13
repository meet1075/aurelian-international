import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, Sparkles, ChevronDown, Check, ChevronLeft, ChevronRight,
  Shield, Globe2, Award, Ship, Sliders, Anchor, CreditCard, Headphones, Plus, Minus
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import EnquiryForm from '../components/EnquiryForm';
import { spicesProducts, tilesProducts } from '../data/productsData';
import { 
  trustStats, exportProcessSteps, whyChooseUsFeatures, 
  globalDestinations, clientTestimonials, faqList, companyInfo 
} from '../data/companyData';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Hero backgrounds: crossfading between vibrant spice market & luxurious marble/tile showroom
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1920&q=85",
      titleTheme: "Authentic Indian Spice Heritage",
      caption: "Sourced directly from Kerala and Gujarat agro-clusters"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      titleTheme: "Architectural Vitrified Surfaces",
      caption: "Precision calibrated tiles crafted in Morbi ceramic hub"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide(prev => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial(prev => (prev + 1) % clientTestimonials.length);
  };
  const prevTestimonial = () => {
    setActiveTestimonial(prev => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
  };

  return (
    <div className="w-full overflow-hidden">

      {/* ═══ 1. HERO SECTION ═══ */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-forest-950 text-ivory">
        {/* Slideshow background layers */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeHeroSlide === idx ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'opacity 1.5s ease-in-out, transform 8s ease'
            }}
          />
        ))}

        {/* Dark Green Gradient Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-900/70 to-forest-950/95 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
          
          {/* Small Gold Label */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold/40 bg-forest-900/60 backdrop-blur-md mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              Exporters of Spices & Tiles From India
            </span>
          </div>

          {/* Headline in Large Serif */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ivory leading-[1.1] mb-6 max-w-4xl">
            Premium Spices. <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Timeless Tiles.</span> <br />
            Global Possibilities.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-xl text-ivory-200/85 font-light leading-relaxed max-w-2xl mb-10">
            Aurelian International is your trusted partner for export-quality Indian spices and premium tiles, delivered worldwide.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-forest-950 bg-gradient-to-r from-gold-400 via-gold to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-lg shadow-gold/30 hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>View Products</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/enquiry"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs sm:text-sm text-ivory border border-gold/50 hover:bg-gold/15 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Connect With Us</span>
              <ArrowUpRight size={16} className="text-gold" />
            </Link>
          </div>

          {/* Slide Indicator bullets */}
          <div className="flex items-center gap-2 mt-12">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveHeroSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeHeroSlide === idx ? 'w-8 bg-gold' : 'w-2 bg-ivory/30 hover:bg-ivory/60'
                }`}
              />
            ))}
          </div>

          {/* Animated Scroll-down indicator */}
          <div className="mt-8 flex flex-col items-center text-ivory-300/60 animate-bounce">
            <span className="text-[10px] uppercase tracking-widest text-gold/70">Scroll Down</span>
            <ChevronDown size={18} className="text-gold" />
          </div>

        </div>
      </section>

      {/* ═══ 2. TRUST STRIP (Animated Counters) ═══ */}
      <section className="bg-forest-900 border-y border-gold/25 py-8 text-ivory relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gold/20">
            {trustStats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-ivory">
                  {stat.label}
                </span>
                <span className="text-[11px] text-ivory-300/60 mt-0.5 hidden sm:block">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. LEADING SPICES & TILES EXPORTER FROM INDIA ═══ */}
      <section className="py-20 lg:py-28 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Compelling SEO Intro */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-gold"></span>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
                  Direct Indian Export House
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 dark:text-ivory leading-tight">
                Leading Spices & Tiles Exporter From India
              </h2>

              <p className="text-base sm:text-lg text-charcoal/80 dark:text-ivory-200/80 leading-relaxed font-light">
                Headquartered strategically with operational hubs across Morbi's ceramic epicenter and the ancient spice corridors of Kerala and Gujarat, <strong>Aurelian International</strong> caters exclusively to discerning global importers, commercial distributors, architecture contractors, and retail chains.
              </p>

              <p className="text-sm sm:text-base text-charcoal/70 dark:text-ivory-200/70 leading-relaxed">
                By maintaining uncompromised focus on strictly two world-class verticals—<strong>Indian Spices</strong> and <strong>Vitrified / Porcelain Tiles</strong>—we guarantee single-origin authenticity, batch-level lab testing, ISO compliance, and uninterrupted maritime ocean freight from India's premier seaports directly to your destination warehouses.
              </p>

              {/* Key Highlights list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-forest-900 dark:text-ivory">
                  <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
                    <Check size={12} />
                  </div>
                  <span>Batch-wise NABL Lab Reports</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-forest-900 dark:text-ivory">
                  <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
                    <Check size={12} />
                  </div>
                  <span>Zero Broken Tile Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-forest-900 dark:text-ivory">
                  <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
                    <Check size={12} />
                  </div>
                  <span>Private Label Packaging</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-forest-900 dark:text-ivory">
                  <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
                    <Check size={12} />
                  </div>
                  <span>FOB, CIF & CFR Terms</span>
                </div>
              </div>

              {/* Learn More link */}
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold hover:text-gold-600 transition-colors group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Layered Image Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg">
                
                {/* Main large image (Tile sample slab display) */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-gold/30 shadow-2xl aspect-[4/3]">
                  <img
                    src="/images/tiles/calacatta-gold.jpg"
                    alt="Calacatta Gold Polished Vitrified Tile Slab"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-xs font-semibold text-ivory uppercase tracking-wider bg-forest-900/80 px-3 py-1 rounded-full border border-gold/30">
                    Morbi Porcelain Tech
                  </span>
                </div>

                {/* Overlapping floating image (Spice bowl on neutral stone) */}
                <div className="absolute -bottom-8 -left-6 sm:-left-10 w-3/5 rounded-2xl overflow-hidden border-2 border-gold shadow-2xl aspect-square bg-forest-950">
                  <img
                    src="/images/spices/turmeric.jpg"
                    alt="Indian Turmeric & Whole Spices"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-gold uppercase tracking-wider bg-forest-950/80 px-2.5 py-0.5 rounded-full border border-gold/30">
                    High-Curcumin Agro
                  </span>
                </div>

                {/* Decorative gold badge seal */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-forest-900 border-2 border-gold text-gold flex flex-col items-center justify-center shadow-gold-glow">
                  <span className="text-[10px] font-semibold uppercase tracking-tighter">Est.</span>
                  <span className="font-serif font-bold text-lg leading-none">2018</span>
                  <span className="text-[9px] uppercase tracking-tighter">India</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 4. OUR EXPORT RANGE (Two Large Category Cards) ═══ */}
      <section className="py-20 bg-ivory-200/50 dark:bg-forest-900/40 border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Dedicated Portfolios"
            title="Our Export Range"
            subtitle="Specializing exclusively in two premier Indian export industries. Each product line backed by dedicated quality inspection and certified packaging."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Category Card 1: SPICES */}
            <div className="group relative rounded-3xl overflow-hidden min-h-[460px] flex flex-col justify-end p-8 sm:p-10 border border-gold/30 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-gold-glow">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent" />
              
              <div className="relative z-10 space-y-3">
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-spice-400">
                  Agro Commodities • Line 01
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ivory">
                  Indian Spices
                </h3>
                <p className="text-sm text-ivory-200/80 line-clamp-2 max-w-md">
                  Export-grade Turmeric, Red Chilli, Black Pepper, Green Cardamom, Cumin, and proprietary masala blends with high volatile oil and verified purity.
                </p>
                <div className="pt-2">
                  <Link
                    to="/products?category=spices"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider bg-gold text-forest-950 hover:bg-gold-400 transition-all shadow-md group-hover:scale-105"
                  >
                    <span>Explore Spices Range →</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Category Card 2: TILES */}
            <div className="group relative rounded-3xl overflow-hidden min-h-[460px] flex flex-col justify-end p-8 sm:p-10 border border-gold/30 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-gold-glow">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('/images/tiles/statuario-royal.jpg')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent" />
              
              <div className="relative z-10 space-y-3">
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold">
                  Surfaces & Ceramics • Line 02
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ivory">
                  Tiles & Slabs
                </h3>
                <p className="text-sm text-ivory-200/80 line-clamp-2 max-w-md">
                  Glazed Vitrified (GVT/PGVT), polished porcelain, matte ceramic, wooden-finish planks, and grand architectural slabs crafted in Morbi.
                </p>
                <div className="pt-2">
                  <Link
                    to="/products?category=tiles"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider bg-gold text-forest-950 hover:bg-gold-400 transition-all shadow-md group-hover:scale-105"
                  >
                    <span>Explore Tiles Range →</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 5. FEATURED SPICES ═══ */}
      <section className="py-20 lg:py-28 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-[1px] w-6 bg-gold"></span>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
                  Harvested & Cleaned In India
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 dark:text-ivory">
                Featured Spices
              </h2>
            </div>
            <Link
              to="/products?category=spices"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-gold hover:text-gold-400 transition-colors"
            >
              <span>View Full Spices Catalogue (8 Items)</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spicesProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. FEATURED TILES ═══ */}
      <section className="py-20 lg:py-28 bg-ivory-200/40 dark:bg-forest-900/30 border-y border-gold/15 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-[1px] w-6 bg-gold"></span>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
                  Morbi Architectural Excellence
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 dark:text-ivory">
                Featured Tiles & Slabs
              </h2>
            </div>
            <Link
              to="/products?category=tiles"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-gold hover:text-gold-400 transition-colors"
            >
              <span>View Full Tiles Catalogue</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tilesProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. "WHY CHOOSE AURELIAN" (3x2 Alternating Grid) ═══ */}
      <section className="py-20 lg:py-28 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Export Grade Excellence"
            title="Why Choose Aurelian"
            subtitle="Built on institutional compliance, strict batch testing, and transparent maritime execution. We simplify overseas procurement from India."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsFeatures.map((feat) => {
              // Alternating color themes: deep green, ivory, and gold
              const isGreen = feat.theme === 'green';
              const isGold = feat.theme === 'gold';

              let cardBg = 'bg-white dark:bg-forest-900/60 text-charcoal dark:text-ivory';
              let badgeColor = 'text-gold';
              let borderColor = 'border-gold/25';

              if (isGreen) {
                cardBg = 'bg-forest-900 text-ivory';
                borderColor = 'border-gold/30';
              } else if (isGold) {
                cardBg = 'bg-gradient-to-br from-gold-500/15 via-gold/10 to-transparent dark:bg-forest-900/80 text-forest-950 dark:text-ivory';
                borderColor = 'border-gold/40';
              }

              return (
                <div
                  key={feat.id}
                  className={`rounded-2xl p-8 border ${borderColor} ${cardBg} shadow-sm hover:shadow-gold-subtle transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    {/* Gold Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center mb-6 text-gold shadow-sm">
                      <Sparkles size={22} />
                    </div>

                    {/* Uppercase spaced heading */}
                    <h3 className="text-sm font-bold uppercase tracking-[0.18em] mb-3 text-gold">
                      {feat.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed ${isGreen ? 'text-ivory-200/80' : 'text-charcoal/80 dark:text-ivory-200/70'}`}>
                      {feat.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gold/15 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-gold/80">
                    <span>Export Standard</span>
                    <span>0{feat.id}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 8. HOW WE WORK / EXPORT PROCESS (Horizontal Timeline) ═══ */}
      <section className="py-20 bg-forest-950 text-ivory border-y border-gold/25 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            label="Predictable Operations"
            title="How We Work: The Export Process"
            subtitle="From your initial requirement specifications to container unsealing at your port—a streamlined 5-stage commercial workflow."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {exportProcessSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-forest-900/70 rounded-2xl p-6 border border-gold/25 hover:border-gold transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-gold">
                      {step.step}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-gold"></span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-ivory mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs text-ivory-300/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gold/15 text-[10px] uppercase tracking-widest text-gold/70">
                  Phase {step.step}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs text-forest-950 bg-gold hover:bg-gold-400 transition-colors shadow-md shadow-gold/20"
            >
              <span>Initiate Phase 01: Request Specification Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 9. GLOBAL REACH (Stylized World Map & Destination Dots) ═══ */}
      <section className="py-20 lg:py-28 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Worldwide Maritime Presence"
            title="Global Reach & Shipping Footprint"
            subtitle="Delivering containerized consignments across 48+ countries from India's west and south coast ports."
          />

          <div className="relative rounded-3xl bg-forest-950 border border-gold/30 p-8 sm:p-12 overflow-hidden shadow-2xl text-ivory">
            {/* World Map SVG Graphic Silhouette */}
            <div className="relative w-full aspect-[21/9] min-h-[300px] flex items-center justify-center">
              
              {/* Stylized Vector World Map Wireframe */}
              <svg
                viewBox="0 0 1000 460"
                className="w-full h-full opacity-20 pointer-events-none fill-gold/80 stroke-gold/40 stroke-[0.5]"
              >
                {/* Simplified Continents Silhouette */}
                <path d="M150,120 Q180,80 260,90 Q300,140 280,200 Q230,240 180,200 Z" />
                <path d="M240,240 Q320,240 310,340 Q270,420 220,380 Q210,300 240,240 Z" />
                <path d="M480,90 Q560,70 580,130 Q540,180 480,150 Z" />
                <path d="M470,180 Q560,180 580,280 Q520,360 460,320 Q440,240 470,180 Z" />
                <path d="M600,80 Q760,70 820,130 Q800,220 700,200 Q630,160 600,80 Z" />
                <path d="M720,280 Q840,270 820,380 Q750,390 720,320 Z" />
              </svg>

              {/* Origin Marker: India */}
              <div className="absolute top-[48%] left-[63%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 group">
                <div className="relative">
                  <span className="absolute -inset-2 rounded-full bg-gold animate-ping opacity-60"></span>
                  <div className="w-5 h-5 rounded-full bg-gold border-2 border-forest-950 flex items-center justify-center shadow-gold-glow">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-950"></span>
                  </div>
                </div>
                <span className="mt-1 text-[11px] font-bold text-gold uppercase tracking-wider bg-forest-950/90 px-2 py-0.5 rounded border border-gold/40">
                  India (HQ & Ports)
                </span>
              </div>

              {/* Destination Hotspots */}
              <div className="absolute top-[42%] left-[56%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-gold/90 border border-white animate-pulse" />
                <span className="text-[10px] text-ivory/80 bg-black/60 px-1.5 py-0.5 rounded mt-0.5">Middle East (GCC)</span>
              </div>

              <div className="absolute top-[32%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-gold/90 border border-white animate-pulse" />
                <span className="text-[10px] text-ivory/80 bg-black/60 px-1.5 py-0.5 rounded mt-0.5">Europe & UK</span>
              </div>

              <div className="absolute top-[35%] left-[23%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-gold/90 border border-white animate-pulse" />
                <span className="text-[10px] text-ivory/80 bg-black/60 px-1.5 py-0.5 rounded mt-0.5">North America</span>
              </div>

              <div className="absolute top-[58%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-gold/90 border border-white animate-pulse" />
                <span className="text-[10px] text-ivory/80 bg-black/60 px-1.5 py-0.5 rounded mt-0.5">SE Asia</span>
              </div>

              <div className="absolute top-[62%] left-[53%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-gold/90 border border-white animate-pulse" />
                <span className="text-[10px] text-ivory/80 bg-black/60 px-1.5 py-0.5 rounded mt-0.5">Africa</span>
              </div>
            </div>

            {/* Region Breakdown Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 pt-6 border-t border-gold/20 text-xs">
              {globalDestinations.map((dest, i) => (
                <div key={i} className="bg-forest-900/80 p-3.5 rounded-xl border border-gold/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gold font-bold">{dest.region}</span>
                    <span className="text-[10px] text-ivory-300/60">{dest.share}</span>
                  </div>
                  <p className="text-[11px] text-ivory-200/70 truncate">{dest.countries}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 10. TESTIMONIALS (Carousel of 3 Quotes) ═══ */}
      <section className="py-20 lg:py-28 bg-ivory-200/50 dark:bg-forest-900/40 border-y border-gold/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Verified Importer Experiences"
            title="Global Client Testimonials"
            subtitle="Long-term partnerships forged across European retail networks, GCC construction towers, and North American distributors."
          />

          <div className="relative bg-white dark:bg-forest-900/70 rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-xl">
            {/* Quote Marks */}
            <span className="font-serif text-6xl text-gold/30 leading-none select-none block mb-4">“</span>

            <p className="font-serif text-xl sm:text-2xl text-forest-950 dark:text-ivory leading-relaxed mb-8 italic">
              {clientTestimonials[activeTestimonial].quote}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-gold/15 gap-4">
              <div>
                <h4 className="font-bold text-base text-forest-950 dark:text-ivory">
                  {clientTestimonials[activeTestimonial].name}
                </h4>
                <p className="text-xs text-gold font-medium">
                  {clientTestimonials[activeTestimonial].role} • {clientTestimonials[activeTestimonial].company}
                </p>
                <p className="text-xs text-charcoal/60 dark:text-ivory-300/60 mt-0.5">
                  {clientTestimonials[activeTestimonial].location} • ({clientTestimonials[activeTestimonial].product})
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-gold/40 text-forest-950 dark:text-ivory hover:bg-gold hover:text-forest-950 transition-colors flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-gold/40 text-forest-950 dark:text-ivory hover:bg-gold hover:text-forest-950 transition-colors flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {clientTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeTestimonial === i ? 'w-6 bg-gold' : 'w-2 bg-charcoal/20 dark:bg-ivory/20'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 11. FAQ ACCORDION (8 Questions) ═══ */}
      <section className="py-20 lg:py-28 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Clarity & Compliance"
            title="Frequently Asked Questions"
            subtitle="Essential trade guidance on MOQs, container logistics, third-party lab testing, and payment structures."
          />

          <div className="space-y-4">
            {faqList.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gold/25 bg-white dark:bg-forest-900/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-bold text-forest-950 dark:text-ivory hover:text-gold transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal/80 dark:text-ivory-200/80 leading-relaxed border-t border-gold/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 12. CTA BANNER (Dark Green Tile & Spice Backdrop) ═══ */}
      <section className="relative py-20 bg-forest-950 text-ivory border-y border-gold/30 overflow-hidden">
        {/* Background texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80')`
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs uppercase tracking-widest font-bold">
            <Sparkles size={12} />
            <span>Direct Commercial Trade Inquiries</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory leading-tight">
            Ready to Import Premium Spices & Tiles?
          </h2>

          <p className="text-base sm:text-lg text-ivory-200/85 max-w-2xl mx-auto font-light leading-relaxed">
            Connect with our international export managers for CIF proforma quotations, container stuffing optimization, and certified laboratory sample packages.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/enquiry"
              className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs text-forest-950 bg-gold hover:bg-gold-400 shadow-lg shadow-gold/25 transition-all duration-300"
            >
              Request a Quote Now
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs border border-gold/50 text-ivory hover:bg-gold/15 transition-all"
            >
              Call International Desk: {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 13. ENQUIRY FORM ═══ */}
      <section className="py-20 lg:py-28 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Commercial Proforma Request"
            title="Submit Your Export Enquiry"
            subtitle="Provide your target specifications, destination port, and container requirements below for rapid turnaround."
          />

          <EnquiryForm />
        </div>
      </section>

      {/* Specification Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}
