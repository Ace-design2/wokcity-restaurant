import React from 'react';

export default function Hero() {
  return (
    <section className="w-full h-[380px] md:h-[450px] relative flex items-center shrink-0 overflow-hidden pt-[140px] pb-36">
      <img 
        src="/images/hero.jpg" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      {/* Subtle darkening gradient overlay for minimal aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
      
      {/* Content */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-8 xl:px-24">
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4 md:mb-6 text-white text-[10px] md:text-xs font-medium uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Chef's Recommended
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 md:mb-4 leading-[1.1] md:leading-[1.1]">
            Experience the <br className="hidden sm:block"/> Art of the Wok.
          </h1>
          <p className="text-lg sm:text-xl text-white font-medium max-w-lg mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed">
            Fresh ingredients, intense heat, and authentic flavors delivered straight to your door.
          </p>
          <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all focus:outline-none shadow-lg">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
