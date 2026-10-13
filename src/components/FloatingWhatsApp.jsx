import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMsg = encodeURIComponent("Hello Aurelian International, I would like to inquire about your export-quality Spices & Tiles catalog and request a CIF/FOB quote.");
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble on hover */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-forest-900 text-ivory text-xs px-3.5 py-2 rounded-xl shadow-xl border border-gold/40 animate-fade-in">
          <span>Chat directly with Export Desk</span>
          <button 
            onClick={() => setShowTooltip(false)} 
            className="text-ivory/60 hover:text-white"
            aria-label="Dismiss tooltip"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Pulsing button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-black/20 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp with Aurelian International"
      >
        {/* Glow pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40" />
        <MessageCircle size={28} className="relative z-10" />
      </a>
    </div>
  );
}
