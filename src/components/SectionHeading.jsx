import React from 'react';

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {/* Editorial Small Gold Label with hairline */}
      {label && (
        <div className={`inline-flex items-center gap-3 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-gold to-gold"></span>
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] font-semibold text-gold">
            {label}
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent via-gold to-gold"></span>
        </div>
      )}

      {/* Main Serif Headline */}
      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-4 ${
        light ? 'text-ivory' : 'text-forest-900 dark:text-ivory-50'
      }`}>
        {title}
      </h2>

      {/* Editorial Subtitle / Blurb */}
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed font-light ${
          light ? 'text-ivory-200/80' : 'text-charcoal/70 dark:text-ivory-200/70'
        } ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
