import React, { useState } from 'react';
import { 
  ShieldCheck, Award, FileCheck2, Eye, Download, X, Check, 
  ExternalLink, Lock, CheckCircle2, Sparkles, ArrowRight 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certificatesList } from '../data/certificatesData';
import { Link } from 'react-router-dom';

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="w-full">

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-forest-950 text-ivory overflow-hidden border-b border-gold/25">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-900/90 to-forest-950/98 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-forest-900/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
              Government & International Standards
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory tracking-tight">
            Accreditations & Certificates
          </h1>

          <p className="text-base sm:text-xl text-ivory-200/80 leading-relaxed font-light">
            Every export consignment from Aurelian International is backed by rigorous Indian Government statutory registrations and internationally audited ISO quality benchmarks.
          </p>
        </div>
      </section>

      {/* ═══ CERTIFICATES GALLERY GRID ═══ */}
      <section className="py-20 lg:py-28 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            label="Verified Credentials"
            title="Statutory Licenses & Quality Assurances"
            subtitle="Click on any certificate to inspect official registration codes, issuing ministries, and laboratory testing parameters."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificatesList.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group relative cursor-pointer bg-white dark:bg-forest-900/60 rounded-2xl border border-gold/25 hover:border-gold/70 shadow-sm hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Seal */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-gold/15 text-gold border border-gold/40 flex items-center justify-center">
                      <FileCheck2 size={20} />
                    </span>

                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-forest-950 text-gold border border-gold/30">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-forest-950 dark:text-ivory group-hover:text-gold transition-colors mb-2 line-clamp-1">
                    {cert.title}
                  </h3>

                  {/* Authority */}
                  <p className="text-xs text-charcoal/60 dark:text-ivory-300/60 mb-3 line-clamp-2">
                    {cert.authority}
                  </p>

                  {/* License Code */}
                  <div className="p-2 rounded-lg bg-gold/10 border border-gold/20 font-mono text-xs text-gold-700 dark:text-gold-300 font-semibold mb-3">
                    {cert.codeNumber}
                  </div>

                  {/* Short Blurb */}
                  <p className="text-xs text-charcoal/70 dark:text-ivory-200/70 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 mt-4 border-t border-gold/15 flex items-center justify-between text-xs font-semibold text-gold">
                  <span className="group-hover:underline">Click for Lightbox Preview</span>
                  <Eye size={14} className="transition-transform group-hover:scale-110" />
                </div>
              </div>
            ))}
          </div>

          {/* Third-Party Inspection Callout Strip */}
          <div className="mt-16 rounded-3xl bg-forest-900 p-8 sm:p-10 border border-gold/30 text-ivory">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs uppercase font-bold tracking-widest text-gold flex items-center gap-2">
                  <ShieldCheck size={16} />
                  <span>Independent Pre-Shipment Inspection (PSI)</span>
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">
                  Third-Party Surveyor Verification Available on Every Container
                </h3>
                <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed font-light">
                  To safeguard your import investment, we seamlessly welcome pre-shipment inspections by internationally accredited inspection agencies—including <strong>SGS, Bureau Veritas, Intertek, and Cotecna</strong>—at our packing stations or container freight stations prior to customs sealing.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  to="/enquiry"
                  className="py-3.5 px-6 rounded-full font-bold uppercase tracking-wider text-xs text-forest-950 bg-gold hover:bg-gold-400 text-center shadow-md transition-colors"
                >
                  Request Certificate Pack
                </Link>
                <div className="text-[11px] text-center text-ivory-300/60">
                  Full attested copies dispatched with Proforma Invoices
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ LIGHTBOX PREVIEW MODAL ═══ */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-ivory dark:bg-forest-950 rounded-3xl border-2 border-gold/40 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-gold/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-1">
                  Official Trade Document Dossier
                </span>
                <h3 className="font-serif text-2xl font-bold text-forest-950 dark:text-ivory">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-full text-charcoal/60 dark:text-ivory/60 hover:text-gold"
                aria-label="Close lightbox"
              >
                <X size={22} />
              </button>
            </div>

            {/* Certificate Preview Visual Frame */}
            <div className="relative rounded-2xl bg-white dark:bg-forest-900 border-2 border-dashed border-gold/40 p-6 sm:p-8 text-center space-y-4 shadow-inner">
              <div className="w-16 h-16 rounded-full bg-forest-950 border-2 border-gold text-gold flex items-center justify-center mx-auto shadow-gold-glow">
                <Award size={32} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-charcoal/60 dark:text-ivory-300/60">
                  Attested Under Official Seal
                </p>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 dark:text-ivory mt-1">
                  {selectedCert.authority}
                </h4>
                <div className="inline-block mt-3 px-4 py-1.5 rounded-full bg-gold/15 text-gold-700 dark:text-gold font-mono font-bold text-sm border border-gold/30">
                  Ref No: {selectedCert.codeNumber}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-charcoal/80 dark:text-ivory-200/80 max-w-lg mx-auto leading-relaxed">
                {selectedCert.description}
              </p>

              <div className="pt-2 flex items-center justify-center gap-4 text-xs font-semibold text-gold">
                <span>Status: {selectedCert.validity}</span>
                <span>•</span>
                <span>Audited: Active</span>
              </div>
            </div>

            {/* Key Benefits / Verification Points */}
            <div className="space-y-2">
              <h5 className="text-xs uppercase font-bold tracking-wider text-forest-950 dark:text-ivory">
                Scope & International Legal Assurance:
              </h5>
              <ul className="space-y-1.5 text-xs text-charcoal/70 dark:text-ivory-200/70">
                {selectedCert.keyBenefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-gold/15 flex flex-col sm:flex-row gap-3">
              <Link
                to={`/enquiry?subject=${encodeURIComponent(`Request Attested Copy of ${selectedCert.title}`)}`}
                onClick={() => setSelectedCert(null)}
                className="flex-1 py-3 px-6 rounded-xl font-bold uppercase tracking-wider text-xs text-forest-950 bg-gold hover:bg-gold-400 text-center shadow-md transition-colors"
              >
                Request Attested PDF Copy
              </Link>
              <button
                onClick={() => setSelectedCert(null)}
                className="py-3 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs border border-gold/40 text-forest-950 dark:text-ivory hover:bg-gold/10 transition-colors"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
