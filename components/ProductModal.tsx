"use client";

import React, { useEffect, useState } from 'react';
import { useCart } from '@/contexts/CartContext';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  } | null;
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const { addToCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Reset image when product changes
  useEffect(() => {
    setActiveImage(0);
  }, [product]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in" 
        onClick={onClose}
        aria-label="Close modal"
      />
      
      {/* Modal Container */}
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in slide-in-from-bottom-8 md:slide-in-from-bottom-12 duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] max-h-[90vh]"
      >
        {/* Left Column - Image Gallery */}
        <div className="w-full md:w-[45%] bg-neutral-50 p-6 flex flex-col gap-4 shrink-0">
          {/* Main Image */}
          <div className="w-full aspect-[4/3] md:aspect-square bg-white rounded-2xl overflow-hidden shadow-sm relative">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {/* Dietary Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-black">Chef's Special</span>
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-full aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all focus:outline-none ${activeImage === index ? 'border-red-600 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
              >
                <img 
                  // Using same image with slight css filter for demo purposes since we only have 1 asset per product
                  src={product.imageUrl} 
                  alt={`View ${index + 1}`} 
                  className={`w-full h-full object-cover ${index > 0 ? 'saturate-50 contrast-125' : ''}`}
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Right Column - Product Info */}
        <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col overflow-y-auto">
          {/* Header & Close Button */}
          <div className="flex justify-between items-start mb-2 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight leading-tight">
              {product.name}
            </h2>
            <button 
              onClick={onClose} 
              className="p-2 -mr-2 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-full transition-colors active:scale-90 shrink-0"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Ratings Block */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <div className="flex items-center gap-1 text-yellow-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-black">4.9</span>
              <span className="text-sm text-neutral-300">•</span>
              <span className="text-sm text-neutral-500 hover:text-black underline decoration-neutral-300 hover:decoration-black underline-offset-4 cursor-pointer transition-colors">128 Reviews</span>
            </div>
          </div>
          
          {/* Description & Details */}
          <div className="mb-8">
            <p className="text-[15px] text-neutral-600 leading-relaxed font-normal text-justify">
              {product.description}. Prepared with the finest ingredients and wok-seared to perfection. Experience the authentic burst of flavors featuring our signature house-made sauces, fresh aromatic vegetables, and tender premium meats. Perfectly balanced and deeply satisfying.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-8">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Spice Level</span>
                <span className="text-sm font-medium text-black flex items-center gap-1.5">
                  <span className="text-red-500 text-lg leading-none">🌶️</span> Medium Hot
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Allergens</span>
                <span className="text-sm font-medium text-black">Soy, Wheat, Sesame</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Calories</span>
                <span className="text-sm font-medium text-black">~650 kcal</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Preparation</span>
                <span className="text-sm font-medium text-black">15-20 Mins</span>
              </div>
            </div>
          </div>
          
          {/* Bottom Action Area */}
          <div className="mt-auto pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-6 items-end sm:items-center justify-between">
            <div className="flex flex-col w-full sm:w-auto">
              <span className="text-sm font-medium text-neutral-400 mb-1">Total Price</span>
              <span className="text-3xl font-black text-red-950 tracking-tight">
                ₦{product.price.toLocaleString()}
              </span>
            </div>
            
            <button 
              onClick={() => {
                addToCart({ 
                  id: product.id, 
                  name: product.name, 
                  price: product.price, 
                  imageUrl: product.imageUrl 
                });
                onClose();
              }}
              className="w-full sm:w-[240px] h-[56px] bg-red-600 hover:bg-red-700 active:scale-[0.98] transition-all rounded-2xl flex justify-center items-center gap-2 focus:outline-none shadow-xl shadow-red-600/20 group"
            >
              <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
                <svg className="absolute group-hover:-translate-y-6 transition-transform duration-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5v14"/></svg>
                <svg className="absolute translate-y-6 group-hover:translate-y-0 transition-transform duration-300 text-white" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="20" cy="21" r="1.5"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <span className="text-white text-[15px] font-bold tracking-wide">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
