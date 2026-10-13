import React from 'react';
import { ArrowUpRight, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onQuickView }) {
  const isSpice = product.categoryType === 'spices';

  return (
    <div className="group relative bg-white dark:bg-forest-900/60 rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/60 shadow-sm hover:shadow-gold-glow transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1.5">
      
      {/* Image Container with Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory-200/50 dark:bg-forest-950/80">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Subtle Dark Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-forest-950/85 text-gold border border-gold/30 backdrop-blur-md">
            <Sparkles size={10} className="text-gold" />
            {product.badge || (isSpice ? 'Export Grade' : 'Vitrified')}
          </span>

          <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-white/80 dark:bg-black/60 text-charcoal dark:text-ivory backdrop-blur-md">
            {isSpice ? 'India' : 'Morbi'}
          </span>
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            onClick={() => onQuickView(product)}
            className="pointer-events-auto px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-forest-900/90 border border-gold/60 shadow-lg backdrop-blur-md hover:bg-gold hover:text-forest-950 transition-all flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0"
          >
            <Eye size={13} />
            <span>Specifications</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Category Tag */}
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold block mb-1.5">
            {product.category}
          </span>

          {/* Product Name */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-950 dark:text-ivory leading-snug group-hover:text-gold transition-colors line-clamp-1 mb-2">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-charcoal/70 dark:text-ivory-200/70 line-clamp-2 leading-relaxed mb-4">
            {product.shortDesc}
          </p>
        </div>

        <div>
          {/* Specs / Tags Pills */}
          <div className="pt-3 border-t border-gold/15 flex flex-wrap items-center gap-1.5 mb-4">
            {isSpice ? (
              <>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-gold/10 text-gold-700 dark:text-gold-300 border border-gold/20">
                  {product.tag}
                </span>
                {product.specs?.moq && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-ivory-200/60 dark:bg-forest-800 text-charcoal/70 dark:text-ivory/70">
                    MOQ: {product.specs.moq.split('(')[0]}
                  </span>
                )}
              </>
            ) : (
              <>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-gold/10 text-gold-700 dark:text-gold-300 border border-gold/20">
                  {product.tag}
                </span>
                {product.finish && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-ivory-200/60 dark:bg-forest-800 text-charcoal/70 dark:text-ivory/70">
                    {product.finish.split('/')[0]}
                  </span>
                )}
              </>
            )}
          </div>

          {/* Card Footer Action */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => onQuickView(product)}
              className="text-xs font-semibold text-charcoal/70 dark:text-ivory/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              <span>View Details</span>
            </button>

            <Link
              to={`/enquiry?product=${encodeURIComponent(product.name)}&category=${product.categoryType}`}
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-400 group/link"
            >
              <span>Enquire</span>
              <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
