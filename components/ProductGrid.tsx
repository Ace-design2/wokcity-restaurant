"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import ProductCard from './ProductCard';

const CATEGORIES = ["All", "Appetizers", "Main Course", "Side Dishes", "Desserts", "Snacks"];

const MOCK_PRODUCTS = Array.from({ length: 24 }).map((_, i) => ({
  id: `prod-${i}`,
  name: `Wok Meal ${i + 1}`,
  description: 'A delicious customized wok meal to enjoy...',
  category: CATEGORIES[(i % 5) + 1],
  price: Math.floor(15000 + ((i * 37) % 30000)),
  imageUrl: `/images/food${(i % 10) + 1}.jpg`,
}));

type DropdownProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
};

// Custom Tooltip Dropdown Component
function MinimalDropdown({ label, value, options, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-neutral-100 transition-colors focus:outline-none"
      >
        <span className="text-sm text-neutral-500">{label}:</span>
        <span className="text-sm font-medium text-black">{value}</span>
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-neutral-100/80 rounded-lg shadow-xl shadow-black-[0.03] py-2 z-50">
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                value === opt 
                  ? "text-red-950 font-semibold bg-red-50/50" 
                  : "text-neutral-600 hover:text-black hover:bg-neutral-50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All Prices");
  const [sortOrder, setSortOrder] = useState("Recommended");

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];

    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }

    if (priceRange === "Under ₦20,000") {
      result = result.filter(p => p.price < 20000);
    } else if (priceRange === "₦20,000 - ₦35,000") {
      result = result.filter(p => p.price >= 20000 && p.price <= 35000);
    } else if (priceRange === "Over ₦35,000") {
      result = result.filter(p => p.price > 35000);
    }

    if (sortOrder === "Price: Ascending") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "Price: Descending") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "Alphabetical (A-Z)") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, priceRange, sortOrder]);

  return (
    <div className="w-full">
      {/* Filters & Sorting Minimal Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        
        {/* Category Minimal Links */}
        <div className="flex gap-4 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap pb-1.5 text-sm font-medium transition-all focus:outline-none border-b-2 ${
                activeCategory === cat 
                  ? "border-red-950 text-black" 
                  : "border-transparent text-neutral-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Custom Minimal Tooltips (Price & Sort) */}
        <div className="flex items-center gap-1 w-full lg:w-auto mt-2 lg:mt-0 pt-4 lg:pt-0 border-t border-neutral-200 lg:border-t-0">
          <MinimalDropdown 
            label="Price"
            value={priceRange}
            options={["All Prices", "Under ₦20,000", "₦20,000 - ₦35,000", "Over ₦35,000"]}
            onChange={setPriceRange}
          />
          <span className="w-px h-4 bg-neutral-200 mx-2" />
          <MinimalDropdown 
            label="Sort"
            value={sortOrder}
            options={["Recommended", "Price: Ascending", "Price: Descending", "Alphabetical (A-Z)"]}
            onChange={setSortOrder}
          />
        </div>
      </div>

      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 sm:gap-x-8 gap-y-6 sm:gap-y-10">
          {filteredAndSortedProducts.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-xl text-neutral-400 font-light">No products found matching your criteria.</p>
          <button 
            onClick={() => { setActiveCategory("All"); setPriceRange("All Prices"); setSortOrder("Recommended"); }} 
            className="mt-6 text-sm text-black border-b border-black font-medium hover:text-neutral-600 hover:border-neutral-600 transition-colors pb-0.5 focus:outline-none"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
