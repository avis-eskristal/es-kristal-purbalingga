/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import PromoBanner from './components/PromoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#f0f9ff] text-slate-800 antialiased overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. Top Announcement Header / Promo Banner */}
      <PromoBanner />

      {/* 2. Responsive Navigation Bar */}
      <Navbar />

      {/* 3. Main Landing Contents (Modular) */}
      <main className="relative z-10">
        {/* Hero Area */}
        <Hero />

        {/* Tentang Usaha */}
        <About />

        {/* Catalog & Estimator Calculator */}
        <Products />

        {/* Keunggulan Spec Grid */}
        <Advantages />

        {/* Interactive Image Gallery */}
        <Gallery />

        {/* Client Testimonial slider */}
        <Testimonials />

        {/* Contact and Maps Location locator */}
        <Contact />

        {/* Pre-footer Call to Action */}
        <ClosingCTA />
      </main>

      {/* 4. Complete Footer */}
      <Footer />

      {/* 5. Floating Interactive Widgets (WhatsApp Pulsing and Scroll-To-Top) */}
      <FloatingWidgets />
    </div>
  );
}
