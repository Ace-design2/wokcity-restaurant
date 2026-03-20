"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="w-full h-[80px] max-w-[1440px] px-8 xl:px-24 mx-auto flex items-center justify-between">
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
          className="md:hidden text-black focus:outline-none shrink-0" 
          aria-label="Toggle Mobile Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-b border-neutral-100 px-8 py-6 flex flex-col gap-6 shadow-lg shadow-black/5 absolute top-[80px] left-0">
          <Link 
            href="/shop" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-black hover:text-red-600 transition-colors"
          >
            Menu
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-neutral-600 hover:text-black transition-colors"
          >
            Our Story
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-neutral-600 hover:text-black transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
