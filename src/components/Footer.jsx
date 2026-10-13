import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Globe, Clock } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '../data/companyData';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-forest-950 text-ivory-100 relative overflow-hidden border-t border-gold/25 pt-16 pb-10">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-spice/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-ivory/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block bg-forest-900/60 p-2.5 rounded-2xl border border-gold/20">
              <Logo />
            </div>
            <p className="text-sm text-ivory-200/80 leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-gold/90 font-medium pt-1">
              <ShieldCheck size={16} className="text-gold" />
              <span>Govt. Recognized Export House • ISO 9001:2015</span>
            </div>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-widest text-gold flex items-center gap-2">
              <span>Our Export Lines</span>
              <span className="h-[1px] w-6 bg-gold/40"></span>
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory-200/85">
              <li>
                <Link to="/products?category=spices" className="hover:text-gold transition-colors flex items-center justify-between group">
                  <span>Indian Spices (Bulk & Whole)</span>
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                </Link>
              </li>
              <li>
                <Link to="/products?category=spices" className="hover:text-gold transition-colors text-xs text-ivory-300/60 pl-2">
                  • Turmeric, Chilli, Pepper, Cardamom, Cumin
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/products?category=tiles" className="hover:text-gold transition-colors flex items-center justify-between group">
                  <span>Tiles & Architectural Surfaces</span>
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                </Link>
              </li>
              <li>
                <Link to="/products?category=tiles" className="hover:text-gold transition-colors text-xs text-ivory-300/60 pl-2">
                  • Vitrified (GVT/PGVT), Porcelain Slabs, Ceramic
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/certificates" className="hover:text-gold transition-colors text-xs text-gold font-medium">
                  → View Export Compliance Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-widest text-gold flex items-center gap-2">
              <span>Quick Links</span>
              <span className="h-[1px] w-6 bg-gold/40"></span>
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory-200/85">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gold transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-gold transition-colors">Certifications</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-gold transition-colors">Export Guides</Link>
              </li>
              <li>
                <Link to="/enquiry" className="hover:text-gold transition-colors text-gold font-medium">Request Quotation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-widest text-gold flex items-center gap-2">
              <span>Global Export Desk</span>
              <span className="h-[1px] w-6 bg-gold/40"></span>
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-ivory-200/80">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-ivory">{companyInfo.address}</p>
                  <p className="text-xs text-ivory-300/70">{companyInfo.cityState}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} className="text-gold flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-gold transition-colors">
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={17} className="text-gold flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-gold transition-colors truncate">
                  {companyInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-3 text-xs text-ivory-300/60 pt-1">
                <Clock size={16} className="text-gold/80 flex-shrink-0 mt-0.5" />
                <span>{companyInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory-300/70">
          <p>© {currentYear} Aurelian International. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-ivory-300/50 uppercase tracking-widest text-[10px]">Follow Our Trade Network:</span>
            <a
              href={companyInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-forest-950 transition-colors"
              aria-label="LinkedIn"
            >
              <span className="font-bold text-xs">in</span>
            </a>
            <a
              href={companyInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-forest-950 transition-colors"
              aria-label="Instagram"
            >
              <span className="font-bold text-xs">ig</span>
            </a>
            <a
              href={companyInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-forest-950 transition-colors"
              aria-label="Facebook"
            >
              <span className="font-bold text-xs">fb</span>
            </a>
            <a
              href={companyInfo.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-forest-950 transition-colors"
              aria-label="X / Twitter"
            >
              <span className="font-bold text-xs">𝕏</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-ivory-300/60">
            <span>Ports: Mundra • JNPT • Cochin</span>
            <span>•</span>
            <span>Incoterms: FOB / CIF / CFR</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
