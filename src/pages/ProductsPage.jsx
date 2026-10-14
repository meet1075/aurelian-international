import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowRight, Search, Download, Check, Sparkles, SlidersHorizontal,
  Flame, Layers, Apple, Grid3X3, Filter
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { spicesProducts, tilesProducts, produceProducts, allProducts } from '../data/productsData';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryParam = searchParams.get('category');

  // Active main tab: 'all' | 'spices' | 'tiles' | 'produce'
  const [activeTab, setActiveTab] = useState(() => {
    if (initialCategoryParam === 'spices') return 'spices';
    if (initialCategoryParam === 'tiles') return 'tiles';
    if (initialCategoryParam === 'produce' || initialCategoryParam === 'fruits' || initialCategoryParam === 'vegetables') return 'produce';
    return 'all';
  });

  const [subFilter, setSubFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync category parameter if changed
  useEffect(() => {
    if (initialCategoryParam === 'spices') setActiveTab('spices');
    else if (initialCategoryParam === 'tiles') setActiveTab('tiles');
    else if (initialCategoryParam === 'produce') setActiveTab('produce');
  }, [initialCategoryParam]);

  // Reset subfilter when main tab changes
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setSubFilter('All');
  };

  // Sub-category filters for each tab
  const subCategoryFilters = useMemo(() => {
    switch (activeTab) {
      case 'spices':
        return ['All', 'Whole Spices', 'Ground Spices'];
      case 'tiles':
        return ['All', 'Vitrified & Porcelain', 'Porcelain Slabs', 'Wood-Look Vitrified', 'Wall Ceramic'];
      case 'produce':
        return ['All', 'Fresh Fruits', 'Fresh Vegetables'];
      case 'all':
      default:
        return ['All', 'Spices', 'Tiles & Slabs', 'Fruits & Vegetables'];
    }
  }, [activeTab]);

  // Filter products based on active tab, subfilter and search query
  const filteredProducts = useMemo(() => {
    let list = [];
    if (activeTab === 'spices') list = spicesProducts;
    else if (activeTab === 'tiles') list = tilesProducts;
    else if (activeTab === 'produce') list = produceProducts;
    else list = allProducts;

    return list.filter((p) => {
      // Sub-filter check
      let matchesSubFilter = true;
      if (subFilter !== 'All') {
        if (activeTab === 'all') {
          if (subFilter === 'Spices') matchesSubFilter = p.categoryType === 'spices';
          else if (subFilter === 'Tiles & Slabs') matchesSubFilter = p.categoryType === 'tiles';
          else if (subFilter === 'Fruits & Vegetables') matchesSubFilter = p.categoryType === 'produce';
        } else if (activeTab === 'spices') {
          if (subFilter === 'Whole Spices') matchesSubFilter = p.category.includes('Whole');
          else if (subFilter === 'Ground Spices') matchesSubFilter = p.category.includes('Ground');
        } else if (activeTab === 'tiles') {
          matchesSubFilter = p.category.toLowerCase().includes(subFilter.toLowerCase());
        } else if (activeTab === 'produce') {
          matchesSubFilter = p.category.toLowerCase().includes(subFilter.toLowerCase());
        }
      }

      // Search query check
      let matchesSearch = true;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        matchesSearch =
          p.name.toLowerCase().includes(q) ||
          p.shortDesc?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          (p.specs?.origin && p.specs.origin.toLowerCase().includes(q)) ||
          (p.specs?.botanicalName && p.specs.botanicalName.toLowerCase().includes(q));
      }

      return matchesSubFilter && matchesSearch;
    });
  }, [activeTab, subFilter, searchQuery]);

  const handleDownloadFullCatalogue = () => {
    const blob = new Blob([
      `AURELIAN INTERNATIONAL - EXPORT CATALOGUE 2026\n` +
      `============================================\n` +
      `LINE 1: INDIAN SPICES\n` +
      JSON.stringify(spicesProducts.map(s => ({ name: s.name, category: s.category, specs: s.specs })), null, 2) +
      `\n\n============================================\n` +
      `LINE 2: ARCHITECTURAL TILES & SLABS\n` +
      JSON.stringify(tilesProducts.map(t => ({ name: t.name, sizes: t.sizes, finish: t.finish, specs: t.specs })), null, 2) +
      `\n\n============================================\n` +
      `LINE 3: FRESH FRUITS & VEGETABLES\n` +
      JSON.stringify(produceProducts.map(p => ({ name: p.name, category: p.category, specs: p.specs })), null, 2)
    ], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Aurelian_International_Export_Catalogue_2026.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const tabsConfig = [
    { key: 'all', label: 'All Products', count: allProducts.length, icon: Grid3X3 },
    { key: 'spices', label: 'Indian Spices', count: spicesProducts.length, icon: Flame },
    { key: 'tiles', label: 'Tiles & Slabs', count: tilesProducts.length, icon: Layers },
    { key: 'produce', label: 'Fruits & Vegetables', count: produceProducts.length, icon: Apple },
  ];

  return (
    <div className="w-full">

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-forest-950 text-ivory overflow-hidden border-b border-gold/25">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/85 via-forest-900/90 to-forest-950/98 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-forest-900/90 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
              Three Premier Export Verticals
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory tracking-tight">
            Our Export Catalogue
          </h1>

          <p className="text-base sm:text-xl text-ivory-200/80 max-w-3xl mx-auto leading-relaxed font-light">
            Engineered exclusively for global commercial importers, distributors, and contractors. Explore high-potency Indian Spices, precision Morbi Architectural Tiles, and farm-fresh Fruits &amp; Vegetables with batch-certified export standards.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={handleDownloadFullCatalogue}
              className="px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs text-forest-950 bg-gradient-to-r from-gold-400 via-gold to-gold-600 hover:from-gold-300 hover:to-gold-500 transition-all flex items-center gap-2 shadow-md shadow-gold/20"
            >
              <Download size={15} />
              <span>Download Full Catalogue (PDF)</span>
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

      {/* ═══ 3-VERTICAL QUICK OVERVIEW CARDS ═══ */}
      <section className="py-12 bg-ivory dark:bg-forest-950/90 border-b border-gold/15 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Spices */}
            <button
              onClick={() => handleTabChange('spices')}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 group ${
                activeTab === 'spices'
                  ? 'border-gold bg-gold/10 shadow-gold-subtle scale-[1.02]'
                  : 'border-gold/25 bg-white dark:bg-forest-900/60 hover:border-gold/60 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-spice/15 border border-spice/30 flex items-center justify-center text-spice">
                  <Flame size={20} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold">01 · Agro</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950 dark:text-ivory group-hover:text-gold transition-colors">
                Pure Indian Spices
              </h3>
              <p className="text-xs text-charcoal/70 dark:text-ivory-200/70 mt-2 leading-relaxed">
                Tellicherry TGSEB pepper, 8mm bold green cardamom, Guntur stemless chillies, and 5%+ curcumin turmeric fingers.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold">
                <span>View Spices Collection ({spicesProducts.length})</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            {/* Card 2: Tiles */}
            <button
              onClick={() => handleTabChange('tiles')}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 group ${
                activeTab === 'tiles'
                  ? 'border-gold bg-gold/10 shadow-gold-subtle scale-[1.02]'
                  : 'border-gold/25 bg-white dark:bg-forest-900/60 hover:border-gold/60 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                  <Layers size={20} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold">02 · Surfaces</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950 dark:text-ivory group-hover:text-gold transition-colors">
                Tiles &amp; Slabs
              </h3>
              <p className="text-xs text-charcoal/70 dark:text-ivory-200/70 mt-2 leading-relaxed">
                European-standard porcelain &amp; PGVT vitrified slabs, wood-look planks, and matte ceramic from Morbi's premier kilns.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold">
                <span>View Tiles Collection ({tilesProducts.length})</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            {/* Card 3: Fresh Fruits & Vegetables */}
            <button
              onClick={() => handleTabChange('produce')}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 group ${
                activeTab === 'produce'
                  ? 'border-gold bg-gold/10 shadow-gold-subtle scale-[1.02]'
                  : 'border-gold/25 bg-white dark:bg-forest-900/60 hover:border-gold/60 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                  <Apple size={20} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold">03 · Farm Fresh</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950 dark:text-ivory group-hover:text-gold transition-colors">
                Fruits &amp; Vegetables
              </h3>
              <p className="text-xs text-charcoal/70 dark:text-ivory-200/70 mt-2 leading-relaxed">
                GI Alphonso mangoes, Bhagwa super-red pomegranates, G9 Cavendish bananas, and Nashik export red onions in refrigerated Reefer FCLs.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold">
                <span>View Produce Collection ({produceProducts.length})</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </button>

          </div>
        </div>
      </section>

      {/* ═══ UNIFIED SINGLE CATALOGUE SECTION WITH TABS ═══ */}
      <section id="catalogue-section" className="py-16 sm:py-20 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header & Product Type Tabs */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold">
                Interactive Catalogue
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 dark:text-ivory">
                Select Product Line
              </h2>
            </div>

            {/* Main Tabs (All / Spices / Tiles / Fruits & Veges) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/80 dark:bg-forest-900/80 border border-gold/25 backdrop-blur-md max-w-3xl mx-auto shadow-sm">
              {tabsConfig.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
                    className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-gold-400 via-gold to-gold-600 text-forest-950 shadow-md shadow-gold/25 font-bold'
                        : 'text-charcoal/70 dark:text-ivory/70 hover:text-forest-950 dark:hover:text-ivory hover:bg-gold/10'
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{tab.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-forest-950/20 text-forest-950'
                        : 'bg-gold/15 text-gold'
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search & Sub-category Filter Bar */}
            <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gold/15 pb-6">
              
              {/* Sub-filter chips */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <span className="text-xs font-semibold text-charcoal/50 dark:text-ivory/50 mr-1 flex items-center gap-1">
                  <Filter size={12} className="text-gold" /> Filter:
                </span>
                {subCategoryFilters.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => setSubFilter(chip)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                      subFilter === chip
                        ? 'bg-gold text-forest-950 shadow-sm font-bold'
                        : 'bg-white dark:bg-forest-900 text-charcoal/70 dark:text-ivory/70 border border-gold/25 hover:border-gold'
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-80">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by variety, size, grade..."
                  className="w-full pl-9 pr-4 py-2 rounded-full bg-white dark:bg-forest-900 border border-gold/30 text-xs sm:text-sm text-charcoal dark:text-ivory focus:outline-none focus:border-gold"
                />
              </div>

            </div>

            {/* Showing Counter */}
            <div className="flex items-center justify-between text-xs text-charcoal/60 dark:text-ivory/60 px-1">
              <span>
                Showing <strong>{filteredProducts.length}</strong> export products
                {subFilter !== 'All' && <span> in <em>{subFilter}</em></span>}
                {searchQuery && <span> matching "<em>{searchQuery}</em>"</span>}
              </span>
              <span className="text-[11px] text-gold font-medium">
                Click any product card for lab certificates &amp; specs
              </span>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={setSelectedProduct}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white/50 dark:bg-forest-900/40 rounded-3xl border border-gold/20 space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold/15 text-gold mx-auto flex items-center justify-center">
                <Search size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950 dark:text-ivory">
                No matching export products found
              </h3>
              <p className="text-sm text-charcoal/60 dark:text-ivory/60 max-w-md mx-auto">
                Try clearing your search terms or selecting another category tab to view available export consignments.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSubFilter('All');
                  setActiveTab('all');
                }}
                className="px-5 py-2 rounded-full text-xs uppercase font-bold tracking-wider bg-gold text-forest-950 hover:bg-gold-400 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}

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
