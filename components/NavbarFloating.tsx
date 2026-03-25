"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarFloating() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '/' },
    { name: 'Our Story', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 w-full flex flex-col items-center pointer-events-none">
      {/* Navbar Container */}
      <nav 
        className={`w-full max-w-[1200px] pointer-events-auto rounded-2xl flex items-center justify-between px-6 md:px-8 xl:px-12 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform border ${
          isScrolled 
            ? 'h-[56px] bg-white/90 backdrop-blur-md shadow-md border-neutral-200' 
            : 'h-[64px] bg-white/80 backdrop-blur-md shadow-sm border-neutral-100/50'
        }`}
      >
        {/* Left: Logo */}
        <Link 
          href="/" 
          className="text-black font-bold text-2xl tracking-tighter hover:text-red-950 transition-colors shrink-0"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          WokCity<span className="text-red-600">.</span>
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  isActive ? 'text-black font-bold' : 'text-neutral-600 hover:text-red-600'
                }`}
              >
                {link.name}
                {/* Active Underline */}
                {isActive && (
                  <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-red-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: Primary Action Button (Desktop) & Hamburger Menu (Mobile) */}
        <div className="flex items-center shrink-0">
          <Link 
            href="/order"
            className="hidden md:inline-flex items-center justify-center bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all hover:scale-105 hover:shadow-md active:scale-95"
          >
            Order Now
          </Link>
          
          <button 
            className="md:hidden text-black focus:outline-none relative w-8 h-8 flex items-center justify-center active:scale-90 transition-transform ml-4" 
            aria-label="Toggle Mobile Menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Hamburger */}
            <svg className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            {/* Close X */}
            <svg className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden w-full max-w-[1200px] pointer-events-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-neutral-100 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobileMenuOpen ? 'max-h-[400px] mt-3 opacity-100' : 'max-h-0 mt-0 opacity-0 pointer-events-none border-transparent'
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg block px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'font-bold text-black bg-neutral-50' 
                    : 'font-medium text-neutral-500 hover:text-black hover:bg-neutral-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/order"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full bg-black text-white text-base font-medium py-3.5 rounded-xl transition-all hover:bg-neutral-800 active:scale-95 shadow-sm"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
