import React from 'react';

export default function SkeletonCart() {
  return (
    <div className="w-full bg-white h-fit shadow-[0_-8px_30px_rgba(0,0,0,0.12)] lg:shadow-sm flex flex-col lg:pt-2 rounded-t-3xl lg:rounded-2xl lg:border border-neutral-100 overflow-hidden relative z-50">
      
      {/* Mobile Draggable Indicator Area */}
      <div className="w-full flex justify-center pt-3 pb-2 lg:hidden">
        <div className="w-12 h-1.5 bg-neutral-200 rounded-full" />
      </div>

      <div className="w-full flex-col flex overflow-hidden">
        
        {/* Header */}
        <div className="px-6 pb-4 pt-1 lg:pt-4 shrink-0">
          <div className="flex items-center justify-between">
            <div className="skeleton-shimmer h-6 w-16 rounded mb-1" />
            <div className="skeleton-shimmer h-5 w-16 rounded-full" />
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 flex flex-col gap-6 hide-scrollbar">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-4">
              <div className="w-20 h-20 rounded-lg skeleton-shimmer shrink-0" />
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <div className="flex justify-between items-start">
                  <div className="skeleton-shimmer h-3.5 w-[75%] rounded mt-1" />
                  <div className="skeleton-shimmer h-3.5 w-3.5 rounded mt-1" />
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="skeleton-shimmer h-4 w-12 rounded" />
                  <div className="skeleton-shimmer h-6 w-[70px] rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="px-6 pt-6 pb-2 lg:p-6 lg:pb-4 shrink-0 bg-white z-10 border-t border-neutral-100 mt-6">
          <div className="flex justify-between items-center mb-4">
            <div className="skeleton-shimmer h-3 w-16 rounded" />
            <div className="skeleton-shimmer h-3.5 w-16 rounded" />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="skeleton-shimmer h-3 w-16 rounded" />
            <div className="skeleton-shimmer h-3.5 w-12 rounded" />
          </div>
          <div className="flex justify-between items-center mb-2 lg:mb-4">
            <div className="skeleton-shimmer h-4 w-12 rounded" />
            <div className="skeleton-shimmer h-5 w-20 rounded" />
          </div>
        </div>
      </div>
      
      {/* Checkout Button */}
      <div className="p-4 lg:p-6 pt-2 shrink-0 bg-white z-20">
        <div className="skeleton-shimmer w-full h-[52px] rounded-full" />
      </div>
    </div>
  );
}
