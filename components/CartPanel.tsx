"use client";

import React, { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';

export default function CartPanel() {
  const { items, removeFromCart, updateQuantity, cartTotal, totalItems } = useCart();
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
    <>
      {/* Mobile Backdrop Overlay - closes cart on click */}
      {isMobile && (
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 lg:hidden ${isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
          onClick={() => setIsExpanded(false)}
          aria-label="Close cart"
        />
      )}

      <div className={`w-full bg-white h-fit shadow-[0_-8px_30px_rgba(0,0,0,0.12)] lg:shadow-sm flex flex-col lg:pt-2 rounded-t-3xl lg:rounded-2xl lg:border border-neutral-100 overflow-hidden relative z-50`}>
        {/* Draggable indicator for mobile */}
        <div className="w-full flex justify-center pt-3 pb-2 lg:hidden cursor-pointer active:scale-95 transition-transform" onClick={toggleCart}>
          <div className="w-12 h-1.5 bg-neutral-200 rounded-full" />
        </div>

        {/* Collapsible Inner Content Container */}
        <div className={`w-full flex-col flex overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${showContent ? 'max-h-[75vh] lg:max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
          
          <div className="px-6 pb-4 pt-1 lg:pt-4 shrink-0">
            <h2 className="text-xl font-medium text-black flex items-center justify-between">
              Cart
              <span className="bg-neutral-100 text-neutral-600 font-medium text-xs px-2.5 py-1 rounded-full">{totalItems} items</span>
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto px-6 flex flex-col gap-6 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-neutral-400 gap-3 py-16">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <p className="text-sm">Your cart is empty</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-lg object-cover bg-neutral-100" />
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h4 className="text-sm font-medium text-black leading-tight">{item.name}</h4>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-neutral-300 hover:text-red-500 active:scale-90 transition-all focus:outline-none" aria-label="Remove item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm font-semibold text-black">₦{item.price.toLocaleString()}</span>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black active:scale-90 transition-all focus:outline-none">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                        </button>
                        <span className="text-xs font-medium text-black w-2 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black active:scale-90 transition-all focus:outline-none">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className={`px-6 pt-4 pb-2 lg:p-6 lg:pb-4 shrink-0 bg-white z-10 border-t border-neutral-100`}>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-neutral-500 font-medium">Subtotal</span>
              <span className="text-sm font-medium text-black">₦{cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-neutral-500 font-medium">Delivery</span>
              <span className="text-sm font-medium text-green-600">{cartTotal > 0 ? 'Free' : '—'}</span>
            </div>
            <div className="flex justify-between items-center mb-2 lg:mb-4">
              <span className="text-base font-semibold text-black">Total</span>
              <span className="text-lg font-semibold text-black">₦{cartTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        {/* Persistent Bottom Checkout Button */}
        <div className="p-4 lg:p-6 pt-2 shrink-0 bg-white z-20">
          <button 
            onClick={toggleCart}
            className="w-full py-4 bg-black hover:bg-neutral-800 active:scale-[0.98] transition-all duration-300 rounded-full text-white text-sm font-bold flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black shadow-lg shadow-black/20 relative overflow-hidden h-[52px]"
          >
            {/* View Cart State (Flows out) */}
            <div className={`flex items-center gap-2 absolute inset-0 justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${!showContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              <span>View Cart ({totalItems}) • ₦{cartTotal.toLocaleString()}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </div>
            {/* Continue to Checkout State (Flows in) */}
            <div className={`flex items-center gap-2 absolute inset-0 justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${showContent ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
              <span>Continue to Checkout</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
