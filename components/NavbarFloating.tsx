"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarFloating() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const navLinks = [
    { 
      name: 'Menu', 
      href: '/', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>,
      description: "Explore our signature woks"
    },
    { 
      name: 'Our Story', 
      href: '/about', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
      description: "The heritage behind WokCity"
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
      description: "Get in touch with us"
    },
  ];

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const activeIndex = navLinks.findIndex(link => link.href === pathname);
    const activeEl = navRefs.current[activeIndex];
    
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    } else {
      setIndicatorStyle({ left: 0, width: 0 });
    }
  }, [pathname]);

  const handleOrderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 w-full flex flex-col items-center pointer-events-none">
      {/* Navbar Container */}
      <nav 
        className={`w-full max-w-[1200px] pointer-events-auto rounded-full flex items-center justify-between px-6 md:px-8 xl:px-12 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform border ${
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
        <div className="hidden md:flex items-center space-x-8 relative">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                ref={(el) => { navRefs.current[idx] = el; }}
                className={`relative z-10 text-sm font-medium transition-colors duration-200 py-1 ${
                  isActive ? 'text-black font-bold' : 'text-neutral-600 hover:text-red-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          {/* Sliding Indicator (Desktop) */}
          <span 
            className="absolute bottom-[-4px] left-0 h-[2px] bg-red-600 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] z-0"
            style={{ 
              transform: `translateX(${indicatorStyle.left}px)`, 
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.width > 0 ? 1 : 0
            }}
          />
        </div>

        {/* Right: Primary Action Button (Desktop) & Hamburger Menu (Mobile) */}
        <div className="flex items-center shrink-0">
          <Link 
            href="/#menu"
            onClick={handleOrderClick}
            className="hidden md:inline-flex items-center justify-center bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:scale-105 hover:shadow-md active:scale-95"
          >
            Order Now
          </Link>
          
          <button 
            ref={toggleButtonRef}
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

      <div 
        ref={mobileMenuRef}
        className={`md:hidden w-full max-w-[1200px] pointer-events-auto bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg border border-neutral-100 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobileMenuOpen ? 'max-h-[500px] mt-3 opacity-100 scale-100' : 'max-h-0 mt-0 opacity-0 scale-95 pointer-events-none border-transparent'
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
                className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-neutral-50 shadow-sm' 
                    : 'hover:bg-neutral-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                  isActive ? 'bg-red-600 text-white border-red-600 shadow-sm' : 'bg-red-50 text-red-600 border-red-100'
                }`}>
                  {link.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className={`text-base font-bold ${isActive ? 'text-black' : 'text-neutral-700'}`}>
                    {link.name}
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    {link.description}
                  </span>
                </div>
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/#menu"
              onClick={handleOrderClick}
              className="flex items-center justify-center w-full bg-black text-white text-base font-medium py-3.5 rounded-full transition-all hover:bg-neutral-800 active:scale-95 shadow-sm"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
