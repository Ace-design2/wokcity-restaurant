import React from 'react';

export default function SkeletonNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 w-full flex flex-col items-center pointer-events-none">
      <nav 
        className="w-full max-w-[1200px] pointer-events-auto rounded-full flex items-center justify-between px-6 md:px-8 xl:px-12 h-[64px] bg-white/80 backdrop-blur-md shadow-sm border border-neutral-100/50"
      >
        {/* Left: Logo Skeleton */}
        <div className="skeleton-shimmer h-8 w-24 rounded-lg shrink-0" />

        {/* Center: Navigation Links Skeleton (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="skeleton-shimmer h-4 w-12 rounded-lg" />
          <div className="skeleton-shimmer h-4 w-16 rounded-lg" />
          <div className="skeleton-shimmer h-4 w-16 rounded-lg" />
        </div>

        {/* Right: Primary Action Skeleton (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center shrink-0">
          <div className="hidden md:block skeleton-shimmer h-10 w-28 rounded-full" />
          <div className="md:hidden skeleton-shimmer h-8 w-8 rounded-full ml-4" />
        </div>
      </nav>
    </div>
  );
}
