"use client";

import React, { useState, useEffect } from 'react';
import NavbarFloating from '@/components/NavbarFloating';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartPanel from '@/components/CartPanel';

// Skeletons
import SkeletonNavbar from '@/components/skeletons/SkeletonNavbar';
import SkeletonHero from '@/components/skeletons/SkeletonHero';
import SkeletonCart from '@/components/skeletons/SkeletonCart';

export default function Home() {
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    // Simulated data fetch delay
    const initialDelay = 1500;
    
    // Staggered sequence: 
    // step 1: Navbar (0ms)
    // step 2: Hero (100ms)
    // step 3: Filters (200ms)
    // step 4: Cards (300ms)
    // step 5: Cart (400ms)
    const timers = [
      setTimeout(() => setLoadingStep(1), initialDelay),
      setTimeout(() => setLoadingStep(2), initialDelay + 100),
      setTimeout(() => setLoadingStep(3), initialDelay + 200),
      setTimeout(() => setLoadingStep(4), initialDelay + 300),
      setTimeout(() => setLoadingStep(5), initialDelay + 400),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <div className="relative">
        <div className={`transition-opacity duration-300 ${loadingStep >= 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <NavbarFloating />
        </div>
        <div className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${loadingStep >= 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <SkeletonNavbar />
        </div>
      </div>

      <div className="relative">
        <div className={`transition-opacity duration-300 ${loadingStep >= 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Hero />
        </div>
        <div className={`absolute top-0 left-0 w-full transition-opacity duration-300 z-10 ${loadingStep >= 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <SkeletonHero />
        </div>
      </div>

      <main className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row px-4 sm:px-8 xl:px-24 py-12 md:py-20 pb-32 lg:pb-20 gap-10 xl:gap-14 shrink-0 relative overflow-x-hidden">

        <div id="menu" className="flex-1 min-w-0 w-full relative">
          <h1 className="text-3xl font-bold text-black tracking-tight mb-10">
            Our Signature Woks
          </h1>
          <ProductGrid 
            showFilters={loadingStep >= 3} 
            showCards={loadingStep >= 4} 
          />
        </div>

        <aside className="fixed bottom-0 left-0 w-full lg:relative lg:w-[300px] xl:w-[380px] shrink-0 h-auto lg:h-[calc(100vh-160px)] lg:sticky lg:top-[120px] z-50 lg:z-10">
          <div className={`transition-opacity duration-300 h-full ${loadingStep >= 5 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <CartPanel />
          </div>
          <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${loadingStep >= 5 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <SkeletonCart />
          </div>
        </aside>

      </main>
    </>
  );
}
