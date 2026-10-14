import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '../data/companyData';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-forest-950 text-ivory relative border-t border-gold/25 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Minimal Grid: 3 clean columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-ivory/10 items-start">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-ivory-200/75 max-w-sm leading-relaxed font-light">
              Government-recognized export house specializing exclusively in export-grade Indian Spices and Architectural Vitrified & Porcelain Surfaces.
            </p>
          </div>

          {/* Essential Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-gold">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-ivory-200/80">
              <Link to="/products?category=spices" className="hover:text-gold transition-colors">
                Indian Spices Range
              </Link>
              <Link to="/products?category=tiles" className="hover:text-gold transition-colors">
                Tiles & Porcelain Slabs
              </Link>
              <Link to="/about" className="hover:text-gold transition-colors">
                About Our Export House
              </Link>
              <Link to="/certificates" className="hover:text-gold transition-colors">
                Export Accreditations & ISO
              </Link>
              <Link to="/enquiry" className="text-gold font-semibold hover:underline">
                Request Official Quotation →
              </Link>
            </div>
          </div>

          {/* Main Direct Contact Info */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-gold">
              Direct Export Desk
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-ivory-200/80">
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-gold transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-gold flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-gold transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-ivory-300/70 pt-0.5">
                <MapPin size={15} className="text-gold flex-shrink-0 mt-0.5" />
                <span>{companyInfo.cityState}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory-300/60">
          <p>© {currentYear} Aurelian International. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href={companyInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={companyInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href={companyInfo.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              𝕏 / Twitter
            </a>
          </div>

          <div className="text-ivory-300/50">
            Dispatch Seaports: Mundra • Cochin • JNPT
          </div>
        </div>

      </div>
    </footer>
  );
}
