import React from 'react';

export default function SkeletonHero() {
  return (
    <section className="w-full h-[420px] md:h-[500px] relative flex items-center shrink-0 overflow-hidden pt-[88px] skeleton-shimmer bg-neutral-100">
      {/* Content area */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-8 md:py-16 xl:px-24">
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* Badge skeleton */}
          <div className="skeleton-shimmer bg-neutral-200 h-6 w-32 rounded-full mb-4 md:mb-6" />
          
          {/* Title skeleton */}
          <div className="skeleton-shimmer bg-neutral-200 h-10 md:h-14 w-[85%] sm:w-[90%] lg:w-[100%] rounded-xl mb-3 md:mb-4" />
          <div className="skeleton-shimmer bg-neutral-200 h-10 md:h-14 w-[60%] sm:w-[70%] lg:w-[80%] rounded-xl mb-6 md:mb-8" />
          
          {/* Paragraph skeleton */}
          <div className="skeleton-shimmer bg-neutral-200 h-5 md:h-6 w-full max-w-sm rounded-lg mb-2" />
          <div className="skeleton-shimmer bg-neutral-200 h-5 md:h-6 w-[80%] max-w-xs rounded-lg mb-6 md:mb-8" />
          
          {/* Button skeleton */}
          <div className="skeleton-shimmer bg-neutral-200 h-12 w-32 md:w-40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
