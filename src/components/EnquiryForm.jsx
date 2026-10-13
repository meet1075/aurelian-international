import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, Building, Globe, Mail, Phone, MapPin, PackageCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnquiryForm({ prefilledProduct = '', prefilledCategory = '', compact = false }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    country: '',
    address: '',
    productInterest: 'Both',
    subject: '',
    requirementDetails: '',
    estimatedVolume: '1 FCL (20ft Container)',
    incotermPreference: 'CIF'
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
        subject: `Export Inquiry for ${prefilledProduct}`,
        requirementDetails: `We would like to receive FOB/CIF pricing, product specification sheet, and sample availability for ${prefilledProduct}. Target volume: `
      }));
    }
  }, [prefilledProduct, prefilledCategory]);

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Contact number with country code is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.country.trim()) errs.country = 'Destination country is required';
    if (!formData.address.trim()) errs.address = 'Company or port address is required';
    if (!formData.productInterest) errs.productInterest = 'Select your product interest';
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.requirementDetails.trim()) errs.requirementDetails = 'Please specify volume, grades, or specifications';
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
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#B8893B', '#D4AF37', '#1D4E37', '#FAF7F0']
        });
      } catch (err) {
        // Safe fallback if confetti isn't supported
      }
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      country: '',
      address: '',
      productInterest: 'Both',
      subject: '',
      requirementDetails: '',
      estimatedVolume: '1 FCL (20ft Container)',
      incotermPreference: 'CIF'
    });
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-forest-950 text-ivory">
      {/* Background cargo container subtle watermark */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=80')`
        }}
      />
      
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900/95 to-forest-950/98 pointer-events-none" />

      <div className="relative z-10 p-6 sm:p-10 lg:p-12">
        {submitted ? (
          <div className="py-12 text-center max-w-xl mx-auto space-y-6 animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold text-gold flex items-center justify-center mx-auto shadow-gold-glow">
              <CheckCircle2 size={36} />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-gold">
                Inquiry Successfully Logged
              </span>
              <h3 className="font-serif text-3xl font-bold text-ivory">
                Thank You, {formData.firstName}.
              </h3>
              <p className="text-sm text-ivory-200/80 leading-relaxed">
                Your B2B trade dossier has been routed to our International Operations Desk. A senior export manager will review your requirement for <strong>{formData.productInterest}</strong> and dispatch a formal quotation within 12 business hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-forest-900/80 border border-gold/20 text-xs text-ivory-300 text-left space-y-1">
              <p><strong>Reference Destination:</strong> {formData.country}</p>
              <p><strong>Target Incoterm:</strong> {formData.incotermPreference} • <strong>Volume:</strong> {formData.estimatedVolume}</p>
              <p><strong>Notification Sent To:</strong> {formData.email}</p>
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider text-forest-950 bg-gold hover:bg-gold-400 transition-colors shadow-md"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gold/15 gap-2">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-gold flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>Direct Export Desk Proforma Request</span>
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory mt-1">
                  Commercial Export Inquiry Form
                </h3>
              </div>
              <span className="text-[11px] text-ivory-300/60 uppercase tracking-widest">
                * All Fields Mandatory
              </span>
            </div>

            {/* Grid 1: Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. Alexander"
                  className={`w-full px-4 py-3 rounded-xl bg-forest-900/70 border text-ivory placeholder-ivory-300/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                    errors.firstName ? 'border-red-400 bg-red-950/20' : 'border-gold/25 focus:border-gold'
                  }`}
                />
                {errors.firstName && <p className="text-[11px] text-red-300 mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Vance"
                  className={`w-full px-4 py-3 rounded-xl bg-forest-900/70 border text-ivory placeholder-ivory-300/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                    errors.lastName ? 'border-red-400 bg-red-950/20' : 'border-gold/25 focus:border-gold'
                  }`}
                />
                {errors.lastName && <p className="text-[11px] text-red-300 mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Grid 2: Corporate Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Corporate Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="procurement@company.com"
                  className={`w-full px-4 py-3 rounded-xl bg-forest-900/70 border text-ivory placeholder-ivory-300/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                    errors.email ? 'border-red-400 bg-red-950/20' : 'border-gold/25 focus:border-gold'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-300 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Phone / WhatsApp (with Country Code) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+49 40 12345678"
                  className={`w-full px-4 py-3 rounded-xl bg-forest-900/70 border text-ivory placeholder-ivory-300/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                    errors.phone ? 'border-red-400 bg-red-950/20' : 'border-gold/25 focus:border-gold'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red-300 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Grid 3: Company & Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Company Name & Business Nature *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. EuroCommodities Wholesale Ltd."
                  className={`w-full px-4 py-3 rounded-xl bg-forest-900/70 border text-ivory placeholder-ivory-300/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                    errors.companyName ? 'border-red-400 bg-red-950/20' : 'border-gold/25 focus:border-gold'
                  }`}
                />
                {errors.companyName && <p className="text-[11px] text-red-300 mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Destination Country & Discharge Port *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. Germany (Port of Hamburg) or UAE (Jebel Ali)"
                  className={`w-full px-4 py-3 rounded-xl bg-forest-900/70 border text-ivory placeholder-ivory-300/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                    errors.country ? 'border-red-400 bg-red-950/20' : 'border-gold/25 focus:border-gold'
                  }`}
                />
                {errors.country && <p className="text-[11px] text-red-300 mt-1">{errors.country}</p>}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                Registered Office / Warehouse Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address, City, Postal code"
                className={`w-full px-4 py-3 rounded-xl bg-forest-900/70 border text-ivory placeholder-ivory-300/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                  errors.address ? 'border-red-400 bg-red-950/20' : 'border-gold/25 focus:border-gold'
                }`}
              />
              {errors.address && <p className="text-[11px] text-red-300 mt-1">{errors.address}</p>}
            </div>

            {/* Grid 4: Product Interest & Incoterm */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Product Interest *
                </label>
                <select
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-forest-900/90 border border-gold/25 text-ivory text-sm focus:outline-none focus:border-gold"
                >
                  <option value="Spices" className="bg-forest-950 text-white">Indian Spices (Bulk / Retail)</option>
                  <option value="Tiles" className="bg-forest-950 text-white">Tiles (Vitrified / Porcelain / Ceramic)</option>
                  <option value="Both" className="bg-forest-950 text-white">Both Spices & Tiles</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Target Order Volume
                </label>
                <select
                  name="estimatedVolume"
                  value={formData.estimatedVolume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-forest-900/90 border border-gold/25 text-ivory text-sm focus:outline-none focus:border-gold"
                >
                  <option value="Sample Evaluation" className="bg-forest-950 text-white">Courier Sample Evaluation</option>
                  <option value="1 FCL (20ft Container)" className="bg-forest-950 text-white">1 FCL (20ft Container)</option>
                  <option value="2 to 5 FCL (Multi-Container)" className="bg-forest-950 text-white">2 to 5 FCL (Multi-Container)</option>
                  <option value="Annual Supply Contract" className="bg-forest-950 text-white">Annual Recurring Contract</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                  Preferred Incoterm
                </label>
                <select
                  name="incotermPreference"
                  value={formData.incotermPreference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-forest-900/90 border border-gold/25 text-ivory text-sm focus:outline-none focus:border-gold"
                >
                  <option value="CIF" className="bg-forest-950 text-white">CIF (Cost, Insurance & Freight)</option>
                  <option value="FOB" className="bg-forest-950 text-white">FOB (Mundra / Cochin / JNPT)</option>
                  <option value="CFR" className="bg-forest-950 text-white">CFR (Cost & Freight)</option>
                </select>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                Inquiry Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Quotation for 20ft Container of Tellicherry Black Pepper & Turmeric"
                className={`w-full px-4 py-3 rounded-xl bg-forest-900/70 border text-ivory placeholder-ivory-300/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                  errors.subject ? 'border-red-400 bg-red-950/20' : 'border-gold/25 focus:border-gold'
                }`}
              />
              {errors.subject && <p className="text-[11px] text-red-300 mt-1">{errors.subject}</p>}
            </div>

            {/* Requirement Details */}
            <div>
              <label className="block text-xs uppercase font-semibold tracking-wider text-ivory-200/90 mb-1.5">
                Detailed Requirement & Technical Specifications *
              </label>
              <textarea
                name="requirementDetails"
                rows={4}
                value={formData.requirementDetails}
                onChange={handleChange}
                placeholder="Please include: desired spice grades or tile dimensions (e.g. 600x1200mm GVT), finish requirements (Polished/Matte), packaging preferences (25kg bags or private label cartons), target shipping timeline, and any special testing requirements (Aflatoxin, SGS)."
                className={`w-full px-4 py-3 rounded-xl bg-forest-900/70 border text-ivory placeholder-ivory-300/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                  errors.requirementDetails ? 'border-red-400 bg-red-950/20' : 'border-gold/25 focus:border-gold'
                }`}
              />
              {errors.requirementDetails && <p className="text-[11px] text-red-300 mt-1">{errors.requirementDetails}</p>}
            </div>

            {/* Full Width Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-8 rounded-xl font-bold uppercase tracking-widest text-sm text-forest-950 bg-gradient-to-r from-gold-400 via-gold to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-lg shadow-gold/30 hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.99] disabled:opacity-70 group"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-forest-950 border-t-transparent animate-spin"></span>
                    <span>Processing Trade Dossier...</span>
                  </span>
                ) : (
                  <>
                    <span>Submit Export Inquiry & Request Quotation</span>
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-[11px] text-ivory-300/60">
                <span className="flex items-center gap-1.5">
                  <PackageCheck size={13} className="text-gold" />
                  <span>Verified Export House Response</span>
                </span>
                <span>•</span>
                <span>NDA & Commercial Confidentiality Guaranteed</span>
                <span>•</span>
                <span>24-Hour Proforma Response</span>
              </div>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
