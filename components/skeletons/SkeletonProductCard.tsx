import React from 'react';

export default function SkeletonProductCard() {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-sm flex flex-col group relative">
      <div className="w-full h-40 relative overflow-hidden skeleton-shimmer flex-shrink-0" />

      <div className="p-4 border-x border-b border-neutral-200 rounded-b-xl flex flex-col gap-3 flex-grow">
        <div className="flex justify-between items-start gap-2">
          {/* Title and Description */}
          <div className="flex flex-col flex-1 min-w-0 gap-2 mt-1">
            <div className="skeleton-shimmer h-3.5 w-[85%] rounded" />
            <div className="skeleton-shimmer h-2 w-[100%] rounded mt-0.5" />
            <div className="skeleton-shimmer h-2 w-[60%] rounded" />
          </div>
          {/* Price */}
          <div className="skeleton-shimmer h-5 w-14 rounded shrink-0 mt-0.5" />
        </div>

        {/* Add to Cart Button */}
        <div className="w-full mt-auto skeleton-shimmer h-[34px] rounded-md" />
      </div>
    </div>
  );
}
