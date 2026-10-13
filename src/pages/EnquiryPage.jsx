import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, MessageCircle, 
  Ship, Anchor, Globe, CheckCircle2, Sparkles, ArrowUpRight 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import EnquiryForm from '../components/EnquiryForm';
import { companyInfo } from '../data/companyData';

export default function EnquiryPage() {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';
  const prefilledCategory = searchParams.get('category') || '';

  return (
    <div className="w-full">

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-forest-950 text-ivory overflow-hidden border-b border-gold/25">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-900/90 to-forest-950/98 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-forest-900/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
              Global Procurement Desk
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory tracking-tight">
            Commercial Export Inquiry
          </h1>

          <p className="text-base sm:text-xl text-ivory-200/80 leading-relaxed font-light">
            Request an official Proforma Invoice, container capacity estimates, and certified laboratory sample packages for Indian Spices or Tiles.
          </p>
        </div>
      </section>

      {/* ═══ MAIN INQUIRY & CONTACT SECTION ═══ */}
      <section className="py-20 lg:py-28 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 7 Columns: The Full Inquiry Form */}
            <div className="lg:col-span-7 space-y-6">
              <EnquiryForm 
                prefilledProduct={prefilledProduct}
                prefilledCategory={prefilledCategory}
              />
            </div>

            {/* Right 5 Columns: Contact Info Card, Business Hours, Map & Ports */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Contact Card */}
              <div className="rounded-3xl p-8 bg-white dark:bg-forest-900/70 border border-gold/30 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-1">
                    Direct Trade Communication
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 dark:text-ivory">
                    Aurelian International HQ
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-charcoal/80 dark:text-ivory-200/80">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-forest-950 dark:text-ivory">Export Corporate Offices:</p>
                      <p className="text-xs leading-relaxed mt-0.5">{companyInfo.address}</p>
                      <p className="text-xs font-semibold text-gold mt-0.5">{companyInfo.cityState}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={19} className="text-gold flex-shrink-0" />
                    <div>
                      <span className="text-xs block text-charcoal/60 dark:text-ivory-300/60">Phone (International Desk):</span>
                      <a href={`tel:${companyInfo.phone}`} className="font-semibold text-forest-950 dark:text-ivory hover:text-gold transition-colors">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={19} className="text-gold flex-shrink-0" />
                    <div>
                      <span className="text-xs block text-charcoal/60 dark:text-ivory-300/60">Official Export Inquiries:</span>
                      <a href={`mailto:${companyInfo.email}`} className="font-semibold text-forest-950 dark:text-ivory hover:text-gold transition-colors">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-gold/15">
                    <Clock size={19} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs block text-charcoal/60 dark:text-ivory-300/60">Business Hours:</span>
                      <p className="text-xs text-forest-950 dark:text-ivory font-medium mt-0.5">
                        {companyInfo.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Callout */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20Aurelian%20International%20Export%20Desk,%20I%20would%20like%20to%20request%20a%20commercial%20quote.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-[#1EBE5D] transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>Instant WhatsApp Export Connect</span>
                  </a>
                </div>
              </div>

              {/* Ports & Transit Hubs Card */}
              <div className="rounded-3xl p-8 bg-forest-950 text-ivory border border-gold/30 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-gold">
                  <Ship size={16} />
                  <span>Strategic Port Dispatches</span>
                </div>

                <h4 className="font-serif text-xl font-bold text-ivory">
                  Seaport Infrastructure & Dwell Time
                </h4>

                <p className="text-xs text-ivory-200/80 leading-relaxed font-light">
                  Our dual operational bases in Gujarat (Morbi) and Kerala (Kochi) place us minutes from India's highest-volume deepwater container terminals:
                </p>

                <div className="space-y-2 text-xs text-ivory-300">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-forest-900/80 border border-gold/20">
                    <span className="font-semibold text-ivory">Mundra Port (Gujarat)</span>
                    <span className="text-gold font-mono text-[11px]">Primary Tile Export Hub</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-forest-900/80 border border-gold/20">
                    <span className="font-semibold text-ivory">Cochin Port (Kerala)</span>
                    <span className="text-gold font-mono text-[11px]">Direct Spice Gate to Europe/US</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-forest-900/80 border border-gold/20">
                    <span className="font-semibold text-ivory">Nhava Sheva JNPT (Mumbai)</span>
                    <span className="text-gold font-mono text-[11px]">Transshipment Feeder Lines</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-ivory-300/60 flex items-center gap-2">
                  <Anchor size={13} className="text-gold" />
                  <span>Customs broker registered with ICEGATE, Govt. of India.</span>
                </div>
              </div>

              {/* Embedded Interactive Map Card */}
              <div className="rounded-3xl overflow-hidden border border-gold/30 shadow-xl bg-forest-900/40 relative">
                <div className="p-4 bg-white/80 dark:bg-forest-900/80 border-b border-gold/20 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest-950 dark:text-ivory flex items-center gap-2">
                    <MapPin size={14} className="text-gold" />
                    <span>India Export Corridors Map View</span>
                  </span>
                  <span className="text-[10px] text-gold font-mono">22.81° N, 70.83° E</span>
                </div>
                
                {/* Visual stylized map container */}
                <div className="relative aspect-[16/9] w-full bg-forest-950 flex items-center justify-center overflow-hidden">
                  <iframe
                    title="Aurelian International Export Corridors"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117937.10098553257!2d70.76722081977797!3d22.81313437142079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598cd96dd5f385%3A0x6b8d4e760207ff0!2sMorbi%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-70"
                    loading="lazy"
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-2 right-2 bg-forest-950/90 text-gold text-[10px] px-2 py-1 rounded border border-gold/30 pointer-events-none">
                    Morbi Ceramic Epicenter & Logistics Zone
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
