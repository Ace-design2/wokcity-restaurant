import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({
  name,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="w-48 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group relative">
      <div className="w-full h-40 relative overflow-hidden bg-neutral-100 flex-shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <button 
          className="absolute top-2.5 right-2.5 w-6 h-6 bg-red-950 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none z-10" 
          aria-label="Add to favorites"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="p-4 border-x border-b border-neutral-200 rounded-b-xl flex flex-col gap-3 flex-grow">
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col flex-1 min-w-0 gap-0.5">
            <h3 className="text-black text-xs font-normal underline truncate hover:text-red-950 cursor-pointer transition-colors">
              {name}
            </h3>
            <p className="text-neutral-500 text-[10px] leading-tight truncate">
              {description}
            </p>
          </div>
          <div className="text-red-950 text-base font-bold shrink-0">
            ₦{price.toLocaleString()}
          </div>
        </div>

        <button className="w-full mt-auto px-3 py-1.5 bg-red-600 hover:bg-red-700 active:scale-[0.98] transition-all rounded-md flex justify-center items-center gap-1.5 focus:outline-none">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="9" cy="21" r="1.5" />
            <circle cx="20" cy="21" r="1.5" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="text-white text-xs font-bold tracking-wide">add to cart</span>
        </button>
      </div>
    </div>
  );
}
