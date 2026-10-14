import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnquiryForm({ prefilledProduct = '', prefilledCategory = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyCountry: '',
    productInterest: 'Both',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledCategory) {
      if (prefilledCategory.toLowerCase() === 'spices') {
        setFormData(prev => ({ ...prev, productInterest: 'Spices' }));
      } else if (prefilledCategory.toLowerCase() === 'tiles') {
        setFormData(prev => ({ ...prev, productInterest: 'Tiles' }));
      }
    }
    if (prefilledProduct) {
      setFormData(prev => ({
        ...prev,
        message: `Inquiring about export pricing and specifications for: ${prefilledProduct}.`
      }));
    }
  }, [prefilledProduct, prefilledCategory]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone / WhatsApp is required';
    if (!formData.companyCountry.trim()) errs.companyCountry = 'Company & destination country required';
    if (!formData.message.trim()) errs.message = 'Please provide your requirement details';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#B8893B', '#D4AF37', '#1D4E37', '#FAF7F0']
        });
      } catch (err) {
        // Fallback
      }
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-forest-950 text-ivory">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-spice/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 p-6 sm:p-10 lg:p-12">
        {submitted ? (
          <div className="py-12 text-center max-w-lg mx-auto space-y-6 animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold text-gold flex items-center justify-center mx-auto shadow-gold-glow">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-gold">
                Inquiry Successfully Transmitted
              </span>
              <h3 className="font-serif text-3xl font-bold text-ivory">
                Thank You, {formData.fullName}.
              </h3>
              <p className="text-sm text-ivory-200/80 leading-relaxed font-light">
                Your trade inquiry for <strong>{formData.productInterest}</strong> has been assigned to our International Export Desk. A formal proforma quote will be sent to <strong>{formData.email}</strong> within 12 business hours.
              </p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  companyCountry: '',
                  productInterest: 'Both',
                  message: ''
                });
              }}
              className="px-8 py-3 rounded-full text-xs uppercase font-bold tracking-wider text-forest-950 bg-gold hover:bg-gold-400 transition-colors shadow-md"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gold/15 gap-2">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-gold flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>Direct Export Desk</span>
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory mt-1">
                  Request an Export Quotation
                </h3>
              </div>
              <span className="text-[11px] text-ivory-300/60 uppercase tracking-widest">
                Direct Proforma & Specs
              </span>
            </div>

            {/* Product Interest Modern Pill Selector */}
            <div className="space-y-2">
              <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90">
                Product Interest
              </label>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                {[
                  { value: 'Spices', label: 'Indian Spices' },
                  { value: 'Tiles', label: 'Tiles & Slabs' },
                  { value: 'Both', label: 'Both Categories' }
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, productInterest: item.value }))}
                    className={`py-3 px-3 rounded-xl text-xs font-semibold tracking-wider transition-all border text-center ${
                      formData.productInterest === item.value
                        ? 'bg-gold text-forest-950 font-bold border-gold shadow-md'
                        : 'bg-forest-900/60 text-ivory-200/80 border-gold/20 hover:border-gold/50 hover:bg-forest-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 1: Full Name & Business Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-forest-900/60 border text-ivory text-sm focus:outline-none focus:ring-1 focus:ring-gold/60 transition-all ${
                    errors.fullName ? 'border-red-400' : 'border-gold/25 focus:border-gold'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-red-300 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Corporate Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-forest-900/60 border text-ivory text-sm focus:outline-none focus:ring-1 focus:ring-gold/60 transition-all ${
                    errors.email ? 'border-red-400' : 'border-gold/25 focus:border-gold'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-300 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Row 2: Phone/WhatsApp & Company/Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Phone / WhatsApp (with Country Code)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-forest-900/60 border text-ivory text-sm focus:outline-none focus:ring-1 focus:ring-gold/60 transition-all ${
                    errors.phone ? 'border-red-400' : 'border-gold/25 focus:border-gold'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red-300 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Company Name & Destination Country / Port
                </label>
                <input
                  type="text"
                  name="companyCountry"
                  value={formData.companyCountry}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-forest-900/60 border text-ivory text-sm focus:outline-none focus:ring-1 focus:ring-gold/60 transition-all ${
                    errors.companyCountry ? 'border-red-400' : 'border-gold/25 focus:border-gold'
                  }`}
                />
                {errors.companyCountry && <p className="text-[11px] text-red-300 mt-1">{errors.companyCountry}</p>}
              </div>
            </div>

            {/* Requirement Details */}
            <div>
              <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                Requirement Details & Specifications
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-forest-900/60 border text-ivory text-sm focus:outline-none focus:ring-1 focus:ring-gold/60 transition-all ${
                  errors.message ? 'border-red-400' : 'border-gold/25 focus:border-gold'
                }`}
              />
              {errors.message && <p className="text-[11px] text-red-300 mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-8 rounded-xl font-bold uppercase tracking-widest text-xs sm:text-sm text-forest-950 bg-gradient-to-r from-gold-400 via-gold to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-lg shadow-gold/30 hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.99] disabled:opacity-70 group"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-forest-950 border-t-transparent animate-spin"></span>
                    <span>Transmitting Trade Dossier...</span>
                  </span>
                ) : (
                  <>
                    <span>Submit Inquiry & Request Proforma Quote</span>
                    <Send size={15} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-6 mt-4 text-[11px] text-ivory-300/60">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-gold" />
                  <span>NABL & ISO Verified Quotation</span>
                </span>
                <span>•</span>
                <span>Confidential Commercial Treatment</span>
              </div>
            </div>

          </form>
        )}
      </div>

    </div>
  );
}
