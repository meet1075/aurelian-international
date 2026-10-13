import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, ArrowRight, Menu, X, Globe, PhoneCall } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '../data/companyData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Enquiry', path: '/enquiry' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3.5 bg-ivory/95 dark:bg-forest-950/95 backdrop-blur-md shadow-md shadow-black/5 dark:shadow-black/30 border-b border-gold/15' 
        : 'py-5 bg-ivory/80 dark:bg-forest-950/80 backdrop-blur-sm border-b border-gold/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 text-xs xl:text-sm uppercase tracking-wider font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-gold font-semibold bg-gold/10 border border-gold/30'
                      : 'text-charcoal/80 dark:text-ivory/80 hover:text-gold dark:hover:text-gold hover:bg-gold/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full text-charcoal/70 dark:text-ivory/70 hover:text-gold hover:bg-gold/10 transition-colors border border-charcoal/10 dark:border-ivory/10"
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun size={17} className="text-gold" /> : <Moon size={17} />}
            </button>

            {/* Get a Quote Button */}
            <Link
              to="/enquiry"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-forest-950 bg-gradient-to-r from-gold-400 via-gold to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-md shadow-gold/25 transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <span>Get a Quote</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-charcoal/70 dark:text-ivory/70 hover:text-gold hover:bg-gold/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} className="text-gold" /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal dark:text-ivory hover:text-gold focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-ivory dark:bg-forest-950 border-b border-gold/20 shadow-2xl px-6 py-6 animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm uppercase tracking-wider font-medium transition-all ${
                    isActive
                      ? 'bg-gold/15 text-gold font-semibold border-l-4 border-gold'
                      : 'text-charcoal dark:text-ivory hover:bg-gold/10 hover:text-gold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-gold/15 flex flex-col gap-3">
              <Link
                to="/enquiry"
                className="w-full text-center py-3 rounded-xl font-semibold uppercase tracking-wider text-xs text-forest-950 bg-gold hover:bg-gold-400 transition-colors flex items-center justify-center gap-2 shadow-md shadow-gold/20"
              >
                <span>Request Quotation</span>
                <ArrowRight size={15} />
              </Link>

              <div className="flex items-center justify-between text-xs text-charcoal/60 dark:text-ivory/60 pt-2">
                <span>International Desk:</span>
                <a href={`tel:${companyInfo.phone}`} className="text-gold font-medium hover:underline">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
