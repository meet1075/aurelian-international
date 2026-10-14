import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Eye, Award, CheckCircle2, Shield, Globe, Users, Building, 
  MapPin, Anchor, Sparkles, ArrowRight 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { companyInfo, secondaryStats } from '../data/companyData';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rajesh V. Patel",
      role: "Managing Director & Co-Founder",
      division: "Executive Leadership & Port Logistics",
      experience: "24+ Years in International Trade",
      bio: "Spearheading Aurelian's direct maritime export infrastructure across Mundra and Nhava Sheva ports. Pioneered containerized quality tracking systems for overseas buyers.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Dr. Ananya Nair",
      role: "Head of Agri-Sourcing & Spice Quality",
      division: "Kerala & South India Agro Clusters",
      experience: "18+ Years Ph.D. in Spice Biochemistry",
      bio: "Oversees farmer cooperative alliances in Idukki, Wayanad, and Guntur. Directs batch-wise HPLC testing for curcumins, volatile oils, and international MRL compliance.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Ketan M. Bhalodia",
      role: "Chief Ceramic Technologist & Quality Lead",
      division: "Morbi Vitrified Surfaces Operations",
      experience: "20+ Years Ceramic Engineering",
      bio: "Directs laser-calibrated inspection protocols, water absorption testing, and specialized A-frame container packing for large-format porcelain slabs.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Jean-Luc Dubois",
      role: "Director of International Client Relations",
      division: "Europe & Americas Commercial Desk",
      experience: "15+ Years Global Commodity Trade",
      bio: "Coordinates Incoterms, customs clearance documentation, and multilingual account management for distributors across Hamburg, Rotterdam, and North America.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="w-full">

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-forest-950 text-ivory overflow-hidden border-b border-gold/25">
        <div className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-900/90 to-forest-950/98 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-forest-900/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
              Institutional Trade Heritage
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory tracking-tight">
            About Aurelian International
          </h1>

          <p className="text-base sm:text-xl text-ivory-200/80 leading-relaxed font-light">
            Founded with a steadfast mission: to bridge India's most extraordinary natural spice wealth and premier ceramic engineering directly to the world's commercial importers without intermediaries.
          </p>
        </div>
      </section>

      {/* ═══ OUR COMPANY OVERVIEW ═══ */}
      <section className="py-20 lg:py-28 bg-ivory dark:bg-forest-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-gold"></span>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
                  Our Company Overview
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 dark:text-ivory leading-tight">
                Three Specialized Verticals. <br />
                Uncompromising Export Integrity.
              </h2>

              <p className="text-base text-charcoal/80 dark:text-ivory-200/80 leading-relaxed font-light">
                <strong>Aurelian International</strong> was founded in <strong>2018</strong> by the <strong>Aurelian Trade Consortium</strong>, based strategically in <strong>Morbi &amp; Kochi, India</strong>. Rather than operating as a sprawling, generic merchant exporter trading in dozens of unrelated goods, our founders made an intentional, visionary commitment: <em>to master and export core industries where India commands undisputed global dominance.</em>
              </p>

              <div className="space-y-4 pt-2 text-sm text-charcoal/70 dark:text-ivory-200/70 leading-relaxed">
                <p>
                  <strong>1. Indian Spices:</strong> Sourced through centuries-old cultivation zones across the Western Ghats (Kerala) and Saurashtra (Gujarat), processed under strict FSSAI, US FDA, and Spices Board of India standards.
                </p>
                <p>
                  <strong>2. Architectural Tiles &amp; Slabs:</strong> Manufactured in Morbi, Gujarat—the globe's leading ceramic innovation hub—using Italian continuous presses to deliver porcelain, GVT/PGVT vitrified, and ceramic surfaces complying with ISO 13006 and CE norms.
                </p>
                <p>
                  <strong>3. Farm-Fresh Fruits &amp; Vegetables:</strong> Sourced directly from certified APEDA grower cooperatives across Maharashtra and Gujarat, shipped via temperature-controlled CA Reefer containers and rapid air freight.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center border border-gold/40">
                    <Shield size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-forest-950 dark:text-ivory block">DGFT & Govt. Certified</span>
                    <span className="text-[11px] text-charcoal/60 dark:text-ivory-300/60">Export House Recognition</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center border border-gold/40">
                    <Globe size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-forest-950 dark:text-ivory block">48+ Destination Ports</span>
                    <span className="text-[11px] text-charcoal/60 dark:text-ivory-300/60">Containerized Global Reach</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold/30 shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                  alt="Aurelian International Port Operations and Maritime Dispatch"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <p className="text-xs uppercase font-bold tracking-widest text-gold mb-1">
                    Direct Port Proximity
                  </p>
                  <p className="text-sm font-light text-ivory-200">
                    Mundra, Nhava Sheva (JNPT), and Cochin container terminals ensuring minimal inland dwell time and expedited bill of lading issuance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ STATS ROW ═══ */}
      <section className="bg-forest-900 border-y border-gold/25 py-12 text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {secondaryStats.map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <span className="font-serif text-3xl sm:text-5xl font-bold text-gold">
                  {stat.value}
                </span>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-ivory-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ "WHAT WE'RE BUILT ON" (3 Elevated Cards) ═══ */}
      <section className="py-20 lg:py-28 bg-ivory-200/40 dark:bg-forest-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Guiding Principles"
            title="What We're Built On"
            subtitle="The operational philosophy that safeguards the commercial interests of our international buyers on every consignment."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission Card */}
            <div className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-forest-900/70 border border-gold/25 shadow-lg flex flex-col justify-between hover:shadow-gold-subtle transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gold/15 text-gold border border-gold/40 flex items-center justify-center">
                  <Target size={26} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950 dark:text-ivory">
                  Our Mission
                </h3>
                <p className="text-sm text-charcoal/80 dark:text-ivory-200/80 leading-relaxed font-light">
                  To establish India's most dependable, transparent B2B export gateway for premium spices and architectural surfaces—guaranteeing that global buyers receive exact laboratory-verified specifications without substitution or shipping delays.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gold/15 text-[11px] font-bold uppercase tracking-widest text-gold">
                Pillar 01 • Purpose
              </div>
            </div>

            {/* Vision Card */}
            <div className="rounded-3xl p-8 sm:p-10 bg-forest-900 text-ivory border border-gold/40 shadow-xl flex flex-col justify-between hover:shadow-gold-glow transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gold/20 text-gold border border-gold/50 flex items-center justify-center">
                  <Eye size={26} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-ivory">
                  Our Vision
                </h3>
                <p className="text-sm text-ivory-200/80 leading-relaxed font-light">
                  To become the world's most trusted export trademark for Indian spices and porcelain tiles, setting the benchmark for ethical trade, sustainable agro-practices, and zero-defect maritime delivery across 100+ nations.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gold/20 text-[11px] font-bold uppercase tracking-widest text-gold">
                Pillar 02 • Outlook
              </div>
            </div>

            {/* Core Values Card */}
            <div className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-forest-900/70 border border-gold/25 shadow-lg flex flex-col justify-between hover:shadow-gold-subtle transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gold/15 text-gold border border-gold/40 flex items-center justify-center">
                  <Award size={26} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950 dark:text-ivory">
                  Core Values
                </h3>
                
                {/* 5 bulleted core values */}
                <ul className="space-y-2 text-xs sm:text-sm text-charcoal/80 dark:text-ivory-200/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span><strong>Quality First:</strong> Batch-wise lab testing & non-negotiable purity.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span><strong>Transparent Trade:</strong> Clear Incoterms & genuine vessel tracking.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span><strong>Customer-Centric:</strong> Dedicated accounts for global buyers.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span><strong>Innovation in Packaging:</strong> Multi-layer foil & A-frame crating.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span><strong>Global Compliance:</strong> US FDA, ISO 22000, CE, and FSSAI certified.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-gold/15 text-[11px] font-bold uppercase tracking-widest text-gold">
                Pillar 03 • Integrity
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ MEET THE TEAM ═══ */}
      <section className="py-20 lg:py-28 bg-ivory dark:bg-forest-950 transition-colors border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Institutional Leadership"
            title="Meet Our Trade & Quality Team"
            subtitle="Experienced commodity traders, ceramic technologists, and international logistics directors dedicated to your order execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-forest-900/60 border border-gold/20 hover:border-gold/60 shadow-sm hover:shadow-gold-subtle transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-forest-950">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-70"></div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-gold bg-forest-950/80 px-2.5 py-1 rounded border border-gold/30">
                    {member.experience}
                  </span>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-forest-950 dark:text-ivory group-hover:text-gold transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-gold mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-charcoal/50 dark:text-ivory-300/50 uppercase tracking-wider mt-0.5 mb-3">
                      {member.division}
                    </p>
                    <p className="text-xs text-charcoal/70 dark:text-ivory-200/70 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs text-forest-950 bg-gold hover:bg-gold-400 transition-colors shadow-md"
            >
              <span>Connect with Our Leadership Desk</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
