import React from 'react';

export default function SkeletonFooter() {
  return (
    <footer className="w-full bg-white border-t border-neutral-200 mt-auto shrink-0 relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-32 md:py-12 md:px-8 xl:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          
          {/* Logo & Description */}
          <div className="flex-1 w-full max-w-sm">
            <div className="skeleton-shimmer h-8 w-28 rounded-md mb-6" />
            <div className="flex flex-col gap-3">
              <div className="skeleton-shimmer h-3.5 w-full rounded" />
              <div className="skeleton-shimmer h-3.5 w-[90%] rounded" />
              <div className="skeleton-shimmer h-3.5 w-[75%] rounded" />
            </div>
          </div>
          
          {/* Links Area */}
          <div className="flex flex-wrap gap-12 md:gap-24">
            {/* Column 1 */}
            <div className="flex flex-col gap-2">
              <div className="skeleton-shimmer h-3 w-16 rounded-md mb-4" />
              <div className="skeleton-shimmer h-3.5 w-20 rounded mb-1" />
              <div className="skeleton-shimmer h-3.5 w-16 rounded mb-1" />
              <div className="skeleton-shimmer h-3.5 w-16 rounded mb-1" />
              <div className="skeleton-shimmer h-3.5 w-24 rounded mb-1" />
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-2">
              <div className="skeleton-shimmer h-3 w-16 rounded-md mb-4" />
              <div className="skeleton-shimmer h-3.5 w-24 rounded mb-1" />
              <div className="skeleton-shimmer h-3.5 w-28 rounded mb-1" />
              <div className="skeleton-shimmer h-3.5 w-24 rounded mb-1" />
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="skeleton-shimmer h-3 w-48 rounded" />
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full skeleton-shimmer" />
            <div className="w-9 h-9 rounded-full skeleton-shimmer" />
            <div className="w-9 h-9 rounded-full skeleton-shimmer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
