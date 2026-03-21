"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="w-full h-[80px] max-w-[1440px] px-8 xl:px-24 mx-auto flex items-center justify-between relative z-20">
        <Link href="/" className="text-black font-bold text-2xl tracking-tighter hover:text-red-950 transition-colors">
          WokCity<span className="text-red-600">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/shop" className="text-sm font-medium text-black hover:text-red-600 transition-colors">
            Menu
          </Link>
          <Link href="/about" className="text-sm font-medium text-neutral-500 hover:text-black transition-colors">
            Our Story
          </Link>
          <Link href="/contact" className="text-sm font-medium text-neutral-500 hover:text-black transition-colors">
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-black focus:outline-none shrink-0 relative w-6 h-6 flex items-center justify-center active:scale-90 transition-transform" 
          aria-label="Toggle Mobile Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Hamburger */}
          <svg className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          {/* Close X */}
          <svg className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {/* Absolute positioning behind the header to slide down */}
      <div 
        className={`md:hidden absolute top-[80px] left-0 w-full bg-white border-b border-neutral-100 px-8 flex flex-col shadow-lg shadow-black/5 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen ? 'max-h-[400px] py-6 gap-6 opacity-100' : 'max-h-0 py-0 gap-0 opacity-0 pointer-events-none'}`}
      >
        <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-black hover:text-red-600 transition-colors">
          Menu
        </Link>
        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-600 hover:text-black transition-colors">
          Our Story
        </Link>
        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-600 hover:text-black transition-colors">
          Contact
        </Link>
      </div>
    </header>
  );
}
