import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import EnquiryPage from './pages/EnquiryPage';
import CertificatesPage from './pages/CertificatesPage';
import BlogsPage from './pages/BlogsPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  // Check system or saved preference for dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('aurelian_theme');
    if (saved) return saved === 'dark';
    return false; // Default to elegant warm ivory light mode
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('aurelian_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('aurelian_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      
      {/* Sticky Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Routed Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Global Floating WhatsApp Support */}
      <FloatingWhatsApp />

      {/* Dark Forest Green Luxury Footer */}
      <Footer />
    </div>
  );
}
