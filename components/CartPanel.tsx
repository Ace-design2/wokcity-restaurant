"use client";

import React, { useState, useEffect } from 'react';

export default function CartPanel() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleCart = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const showContent = !isMobile || isExpanded;

  return (
    <div className={`w-full bg-white h-fit shadow-[0_-8px_30px_rgba(0,0,0,0.12)] lg:shadow-sm flex flex-col transition-all duration-300 ${isExpanded && isMobile ? 'h-[80vh] max-h-[80vh]' : 'max-h-full'} pt-2 rounded-t-3xl lg:rounded-2xl border-t lg:border border-neutral-100 overflow-hidden`}>
      {/* Draggable indicator for mobile */}
      <div className="w-full flex justify-center pt-2 pb-1 lg:hidden cursor-pointer" onClick={toggleCart}>
        <div className="w-12 h-1.5 bg-neutral-200 rounded-full" />
      </div>

      <div className={`px-6 pb-6 pt-2 lg:pt-4 ${!showContent && 'hidden lg:block'}`}>
        <h2 className="text-xl font-medium text-black flex items-center justify-between">
          Cart
          <span className="bg-neutral-100 text-neutral-600 font-medium text-xs px-2.5 py-1 rounded-full">3 items</span>
        </h2>
      </div>

      <div className={`flex-1 overflow-y-auto px-6 flex-col gap-6 hide-scrollbar ${showContent ? 'flex' : 'hidden lg:flex'}`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Minimal Cart Item 1 */}
        <div className="flex gap-4 group">
          <img src="/images/food1.jpg" alt="Wok Meal 1" className="w-20 h-20 rounded-lg object-cover bg-neutral-100" />
          <div className="flex-1 flex flex-col justify-between py-0.5">
            <div className="flex justify-between items-start gap-2">
              <div>
                <h4 className="text-sm font-medium text-black leading-tight">Spicy Basil Wok</h4>
                <p className="text-[11px] text-neutral-400 mt-1">Extra spicy</p>
              </div>
              <button className="text-neutral-300 hover:text-red-500 transition-colors focus:outline-none" aria-label="Remove item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-semibold text-black">₦24,500</span>
              <div className="flex items-center gap-3">
                <button className="w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-colors focus:outline-none">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                </button>
                <span className="text-xs font-medium text-black w-2 text-center">1</span>
                <button className="w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-colors focus:outline-none">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Minimal Cart Item 2 */}
        <div className="flex gap-4 group">
          <img src="/images/food2.jpg" alt="Wok Meal 2" className="w-20 h-20 rounded-lg object-cover bg-neutral-100" />
          <div className="flex-1 flex flex-col justify-between py-0.5">
            <div className="flex justify-between items-start gap-2">
              <div>
                <h4 className="text-sm font-medium text-black leading-tight">Teriyaki Chicken</h4>
                <p className="text-[11px] text-neutral-400 mt-1">No onions</p>
              </div>
              <button className="text-neutral-300 hover:text-red-500 transition-colors focus:outline-none" aria-label="Remove item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-semibold text-black">₦32,000</span>
              <div className="flex items-center gap-3">
                <button className="w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-colors focus:outline-none">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                </button>
                <span className="text-xs font-medium text-black w-2 text-center">2</span>
                <button className="w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-colors focus:outline-none">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`p-4 lg:p-6 bg-white z-10 ${showContent ? 'border-t border-neutral-100' : ''}`}>
        <div className={`pt-2 lg:pt-6 ${!showContent ? 'hidden lg:block' : 'block'}`}>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-neutral-500 font-medium">Subtotal</span>
            <span className="text-sm font-medium text-black">₦56,500</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-neutral-500 font-medium">Delivery</span>
            <span className="text-sm font-medium text-green-600">Free</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-base font-semibold text-black">Total</span>
            <span className="text-lg font-semibold text-black">₦56,500</span>
          </div>
        </div>
        
        <button 
          onClick={toggleCart}
          className="w-full py-4 bg-black hover:bg-neutral-800 transition-colors rounded-full text-white text-sm font-bold flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black shadow-lg shadow-red-950/20"
        >
          {!showContent ? (
            <div className="flex items-center gap-2">
              <span>View Cart (3) • ₦56,500</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>Continue to Checkout</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
