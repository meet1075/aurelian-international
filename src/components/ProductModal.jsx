import React, { useState } from 'react';
import { X, ArrowRight, Download, CheckCircle2, Shield, Package, Globe, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const isSpice = product.categoryType === 'spices';

  const handleDownloadSpec = () => {
    setDownloadSuccess(true);
    // Simulate spec sheet download
    const dummyBlob = new Blob([
      `AURELIAN INTERNATIONAL - EXPORT SPECIFICATION SHEET\n` +
      `Product: ${product.name}\n` +
      `Category: ${product.category}\n` +
      `Specifications:\n` +
      JSON.stringify(product.specs, null, 2) +
      `\n\nCertified by Aurelian International Quality Assurance Division.\nContact: exports@aurelianinternational.com`
    ], { type: 'text/plain' });
    const url = URL.createObjectURL(dummyBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Aurelian_SpecSheet_${product.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-ivory dark:bg-forest-950 rounded-3xl border border-gold/30 shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold/15 bg-white/60 dark:bg-forest-900/60 sticky top-0 z-20 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold"></span>
            <span className="text-xs uppercase tracking-widest font-bold text-gold">
              Export Specification Dossier
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-charcoal/60 dark:text-ivory/60 hover:text-gold hover:bg-gold/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
          {/* Top Section: Gallery & Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/20 shadow-md bg-black/10">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-forest-950/80 text-gold border border-gold/30">
                  {product.badge || 'Export Grade Standard'}
                </span>
              </div>

              {/* Thumbnails if gallery available */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeImage === img ? 'border-gold shadow-gold-subtle scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Overview */}
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-1">
                  {product.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 dark:text-ivory leading-tight mb-2">
                  {product.name}
                </h2>
                <p className="text-sm text-charcoal/80 dark:text-ivory-200/80 leading-relaxed">
                  {product.shortDesc}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-gold/15 text-xs">
                <div>
                  <span className="text-charcoal/50 dark:text-ivory/50 block">Standard Packaging</span>
                  <span className="font-semibold text-forest-900 dark:text-ivory mt-0.5 block">{product.tag}</span>
                </div>
                <div>
                  <span className="text-charcoal/50 dark:text-ivory/50 block">Origin / Manufacturing</span>
                  <span className="font-semibold text-forest-900 dark:text-ivory mt-0.5 block">
                    {product.specs?.origin || (isSpice ? 'India (Direct Agro-Clusters)' : 'Morbi, Gujarat, India')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/enquiry?product=${encodeURIComponent(product.name)}&category=${product.categoryType}`}
                  onClick={onClose}
                  className="flex-1 py-3 px-5 rounded-xl font-bold uppercase tracking-wider text-xs text-forest-950 bg-gradient-to-r from-gold-400 via-gold to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-md shadow-gold/25 transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>Request Proforma Quote</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  onClick={handleDownloadSpec}
                  className="py-3 px-5 rounded-xl font-semibold uppercase tracking-wider text-xs border border-gold/40 text-forest-900 dark:text-ivory hover:bg-gold/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={14} className="text-gold" />
                  <span>{downloadSuccess ? 'Downloaded!' : 'Download Spec (PDF)'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-4 pt-4 border-t border-gold/20">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-forest-950 dark:text-ivory flex items-center gap-2">
                <FileText size={18} className="text-gold" />
                <span>Export Quality Parameters & Laboratory Standards</span>
              </h3>
              <span className="text-xs text-gold/80 font-medium">NABL & ISO Compliant</span>
            </div>

            <div className="bg-white/70 dark:bg-forest-900/60 rounded-2xl border border-gold/20 overflow-hidden shadow-inner">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-gold/10">
                  {Object.entries(product.specs || {}).map(([key, val]) => {
                    const formatLabel = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    return (
                      <tr key={key} className="hover:bg-gold/5 transition-colors">
                        <td className="py-3 px-4 sm:px-6 font-medium text-charcoal/60 dark:text-ivory-200/60 w-1/3 sm:w-2/5 bg-gold/5">
                          {formatLabel}
                        </td>
                        <td className="py-3 px-4 sm:px-6 font-semibold text-forest-950 dark:text-ivory">
                          {val}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Export Assurance Callout */}
          <div className="p-4 rounded-2xl bg-gold/10 border border-gold/30 flex items-start gap-3 text-xs sm:text-sm text-charcoal/80 dark:text-ivory-200/80">
            <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-forest-950 dark:text-ivory">
                International Pre-Shipment Inspection Included:
              </p>
              <p className="mt-0.5">
                Every commercial consignment is eligible for pre-stuffing inspection by independent surveyor agencies (SGS, Bureau Veritas, Intertek) upon buyer nomination.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
