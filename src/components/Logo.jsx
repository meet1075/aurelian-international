import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'md', className = '', link = true }) {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  const logoContent = (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Monogram Seal */}
      <div className={`relative flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${
        isSmall ? 'w-9 h-9' : isLarge ? 'w-14 h-14' : 'w-11 h-11'
      } bg-forest-900 border border-gold/40 shadow-sm shadow-gold/20 flex-shrink-0`}>
        {/* Subtle decorative inner ring */}
        <div className="absolute inset-[2px] rounded-full border border-gold/30"></div>
        {/* Monogram Text */}
        <span className={`font-serif font-bold tracking-tight text-gold ${
          isSmall ? 'text-sm' : isLarge ? 'text-2xl' : 'text-lg'
        }`}>
          AI
        </span>
      </div>

      {/* Wordmark and Subtitle */}
      <div className="flex flex-col justify-center">
        <span className={`font-serif tracking-wider font-semibold uppercase leading-none transition-colors duration-200 text-forest-900 dark:text-ivory group-hover:text-gold ${
          isSmall ? 'text-base' : isLarge ? 'text-2xl' : 'text-lg md:text-xl'
        }`}>
          Aurelian
        </span>
        <span className={`font-sans tracking-[0.26em] uppercase text-gold font-medium leading-tight ${
          isSmall ? 'text-[8px] pt-0.5' : isLarge ? 'text-[11px] pt-1' : 'text-[9px] pt-0.5'
        }`}>
          International
        </span>
      </div>
    </div>
  );

  if (!link) {
    return logoContent;
  }

  return (
    <Link to="/" aria-label="Aurelian International Home">
      {logoContent}
    </Link>
  );
}
