import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'md', className = '', link = true }) {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  const logoContent = (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Official Infinity Logo Emblem */}
      <div className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-gold/40 shadow-sm shadow-navy-950/50 bg-[#0A1325] transition-transform duration-300 group-hover:scale-105 flex-shrink-0 ${
        isSmall ? 'w-9 h-9 p-0.5' : isLarge ? 'w-14 h-14 p-1' : 'w-11 h-11 p-1'
      }`}>
        <img
          src="/images/logo.png"
          alt="Aurelian International Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Wordmark and Subtitle */}
      <div className="flex flex-col justify-center">
        <span className={`font-serif tracking-wider font-semibold uppercase leading-none transition-colors duration-200 text-slate-900 dark:text-ivory group-hover:text-gold ${
          isSmall ? 'text-base' : isLarge ? 'text-2xl' : 'text-lg md:text-xl'
        }`}>
          Aurelian
        </span>
        <span className={`font-sans tracking-[0.28em] uppercase text-gold font-medium leading-tight ${
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
