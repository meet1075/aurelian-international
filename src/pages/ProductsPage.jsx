import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowRight, Search, Filter, Sparkles, Download, Check, ShieldCheck, 
  Layers, Package, SlidersHorizontal 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { spicesProducts, tilesProducts } from '../data/productsData';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const initialCategoryParam = searchParams.get('category');

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [spiceFilter, setSpiceFilter] = useState('All');
  const [tileFilter, setTileFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to section if category param is given
  useEffect(() => {
    if (initialCategoryParam === 'spices') {
      const el = document.getElementById('spices-catalogue');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (initialCategoryParam === 'tiles') {
      const el = document.getElementById('tiles-catalogue');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [initialCategoryParam]);

  // Spice category chips
  const spiceChips = ['All', 'Whole Spices', 'Ground Spices', 'Blended Masalas'];
  // Tile category chips
  const tileChips = ['All', 'Vitrified & Porcelain', 'Porcelain Slabs', 'Wood-Look Vitrified', 'Matte Ceramic', 'Wall Ceramic'];

  const filteredSpices = spicesProducts.filter(p => {
    const matchesFilter = spiceFilter === 'All' || 
      (spiceFilter === 'Whole Spices' && p.category.includes('Whole')) ||
      (spiceFilter === 'Ground Spices' && p.category.includes('Ground')) ||
      (spiceFilter === 'Blended Masalas' && p.category.includes('Blended'));
    
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const filteredTiles = tilesProducts.filter(p => {
    const matchesFilter = tileFilter === 'All' || p.category.toLowerCase().includes(tileFilter.toLowerCase());
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const handleDownloadFullCatalogue = () => {
    const blob = new Blob([
      `AURELIAN INTERNATIONAL - EXPORT CATALOGUE 2026\n` +
      `============================================\n` +
      `LINE 1: INDIAN SPICES\n` +
      JSON.stringify(spicesProducts.map(s => ({ name: s.name, category: s.category, specs: s.specs })), null, 2) +
      `\n\n============================================\n` +
      `LINE 2: ARCHITECTURAL TILES & SLABS\n` +
      JSON.stringify(tilesProducts.map(t => ({ name: t.name, sizes: t.sizes, finish: t.finish, specs: t.specs })), null, 2)
    ], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Aurelian_International_Export_Catalogue_2026.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="w-full">

      {/* ═══ HERO BANNER (Collage of Spices & Tiles) ═══ */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-forest-950 text-ivory overflow-hidden border-b border-gold/25">
        <div className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-900/90 to-forest-950/98 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-forest-900/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
              Two Premier Export Portfolios
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory tracking-tight">
            Our Export Products
          </h1>

          <p className="text-base sm:text-xl text-ivory-200/80 max-w-3xl mx-auto leading-relaxed font-light">
            Engineered exclusively for international procurement. We supply high-potency Indian Spices and precision-engineered Morbi Architectural Tiles with unbending batch-level compliance and seaworthy container palletizing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleDownloadFullCatalogue}
              className="px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs text-forest-950 bg-gold hover:bg-gold-400 transition-all flex items-center gap-2 shadow-md"
            >
              <Download size={14} />
              <span>Download Full Export Catalogue (PDF)</span>
            </button>
            <Link
              to="/enquiry"
              className="px-6 py-3 rounded-full font-semibold uppercase tracking-wider text-xs border border-gold/50 text-ivory hover:bg-gold/15 transition-all"
            >
              Request Custom Proforma
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ALTERNATING ZIG-ZAG CATEGORY SPOTLIGHTS ═══ */}
      <section className="py-20 lg:py-24 bg-ivory dark:bg-forest-950 transition-colors border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Row 1: SPICES (Image Left / Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-gold/30 shadow-xl bg-forest-950">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80"
                  alt="Indian Spices Export Harvesting & Processing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-gold bg-forest-950/80 px-3 py-1 rounded-full border border-gold/40">
                  Agro Purity Guaranteed
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-gold"></span>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
                  Agro Category 01
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 dark:text-ivory">
                Indian Spices: Whole, Ground & Blended Masalas
              </h2>

              <p className="text-base text-charcoal/80 dark:text-ivory-200/80 leading-relaxed font-light">
                India is the world's most venerated cradle of spices. Aurelian International procures directly from audited farm cooperatives across Kerala's spice highlands and Gujarat's arid seed plains.
              </p>

              <div className="space-y-3 text-sm text-charcoal/70 dark:text-ivory-200/70">
                <div className="flex items-start gap-2.5">
                  <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span><strong>Whole Spices:</strong> Tellicherry extra-bold pepper (TGSEB), green cardamom 8mm pods, Guntur stemless chilli, and 99.5% cleaned cumin seeds.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span><strong>Ground Spices:</strong> High-curcumin (5%+) Alleppey turmeric flour, micro-pulverized red chilli powder, and aromatic coriander.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span><strong>Blended Masalas:</strong> Custom formulations roasted for global culinary chains, FMCG brands, and private label supermarkets.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#spices-catalogue"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider bg-gold text-forest-950 hover:bg-gold-400 transition-all shadow-md"
                >
                  <span>Explore Spices Catalogue ↓</span>
                </a>
              </div>
            </div>

          </div>

          {/* Row 2: TILES (Text Left / Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-gold"></span>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
                  Surfaces Category 02
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 dark:text-ivory">
                Architectural Tiles: Ceramic, Porcelain & Vitrified Slabs
              </h2>

              <p className="text-base text-charcoal/80 dark:text-ivory-200/80 leading-relaxed font-light">
                Crafted in Morbi—the ceramic powerhouse of India—our tile collections combine European Italian-press precision with commercial-grade durability and high chemical resistance.
              </p>

              <div className="space-y-3 text-sm text-charcoal/70 dark:text-ivory-200/70">
                <div className="flex items-start gap-2.5">
                  <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Sizes:</strong> 600×600, 800×800, 600×1200, 800×1600mm, and monumental 1200×2400mm bookmatched porcelain slabs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span><strong>Luxury Finishes:</strong> High-gloss PGVT, silky satin, carving vein reliefs, rustic anti-skid (R10/R11), and natural stone textures.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span><strong>Export Protection:</strong> Laser-rectified sharp edges, water absorption below 0.05%, and heavy-duty fumigated palletized crating.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#tiles-catalogue"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider bg-gold text-forest-950 hover:bg-gold-400 transition-all shadow-md"
                >
                  <span>Explore Tiles Catalogue ↓</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-gold/30 shadow-xl bg-forest-950">
                <img
                  src="/images/tiles/statuario-royal.jpg"
                  alt="Morbi Architectural Porcelain and Vitrified Tile Slabs"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-gold bg-forest-950/80 px-3 py-1 rounded-full border border-gold/40">
                  ISO 13006 & CE Certified
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Search & Global Filter Bar */}
      <section className="py-8 bg-ivory-200/50 dark:bg-forest-900/50 border-b border-gold/15 sticky top-[72px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, grade, or finish..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-forest-950 border border-gold/30 text-xs sm:text-sm text-charcoal dark:text-ivory focus:outline-none focus:border-gold"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-charcoal/70 dark:text-ivory/70">
              <SlidersHorizontal size={14} className="text-gold" />
              <span>Showing <strong>{filteredSpices.length}</strong> Spices and <strong>{filteredTiles.length}</strong> Tile SKUs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SUB-SECTION 1: SPICES CATALOGUE ═══ */}
      <section id="spices-catalogue" className="py-20 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-spice-500 block mb-1">
                Agro Commodities Catalogue
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 dark:text-ivory">
                Indian Spices Catalogue
              </h2>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {spiceChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => setSpiceFilter(chip)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    spiceFilter === chip
                      ? 'bg-gold text-forest-950 shadow-sm'
                      : 'bg-white dark:bg-forest-900 text-charcoal/70 dark:text-ivory/70 border border-gold/25 hover:border-gold'
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSpices.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ═══ SUB-SECTION 2: TILES CATALOGUE ═══ */}
      <section id="tiles-catalogue" className="py-20 bg-ivory-200/40 dark:bg-forest-900/30 border-t border-gold/15 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-gold block mb-1">
                Architectural Surfaces Catalogue
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 dark:text-ivory">
                Tiles & Porcelain Catalogue
              </h2>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {tileChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => setTileFilter(chip)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    tileFilter === chip
                      ? 'bg-gold text-forest-950 shadow-sm'
                      : 'bg-white dark:bg-forest-900 text-charcoal/70 dark:text-ivory/70 border border-gold/25 hover:border-gold'
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTiles.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Modal for detailed specifications */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}
