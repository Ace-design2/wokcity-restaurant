"use client";

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';

const CATEGORIES = ["All", "Appetizers", "Main Course", "Side Dishes", "Desserts", "Snacks"];

const MOCK_PRODUCTS = Array.from({ length: 24 }).map((_, i) => ({
  id: `prod-${i}`,
  name: `Wok Meal ${i + 1}`,
  description: 'A delicious customized wok meal to enjoy...',
  category: CATEGORIES[(i % 5) + 1], // Map to 1-5 (skipping 0 'All')
  price: Math.round((Math.random() * 40 + 10) * 100) / 100, // Two decimals $10 to $50
  imageUrl: `/images/food${(i % 10) + 1}.jpg`,
}));

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [sortOrder, setSortOrder] = useState("Recommended");

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];

    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }

    if (priceRange === "Under $20") {
      result = result.filter(p => p.price < 20);
    } else if (priceRange === "$20 - $35") {
      result = result.filter(p => p.price >= 20 && p.price <= 35);
    } else if (priceRange === "Over $35") {
      result = result.filter(p => p.price > 35);
    }

    if (sortOrder === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "Alphabetical (A-Z)") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, priceRange, sortOrder]);

  return (
    <div className="w-full">
      {/* Filters & Sorting Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-neutral-200">
        
        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none ${
                activeCategory === cat 
                  ? "bg-red-950 text-white shadow-md shadow-red-950/20" 
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dropdowns (Price & Sort) */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <select 
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 outline-none focus:ring-2 focus:ring-red-950 cursor-pointer flex-1 lg:flex-none"
          >
            <option value="All">All Prices</option>
            <option value="Under $20">Under $20</option>
            <option value="$20 - $35">$20 - $35</option>
            <option value="Over $35">Over $35</option>
          </select>

          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 outline-none focus:ring-2 focus:ring-red-950 cursor-pointer flex-1 lg:flex-none"
          >
            <option value="Recommended">Recommended</option>
            <option value="Price: Low to High">Price: Ascending</option>
            <option value="Price: High to Low">Price: Descending</option>
            <option value="Alphabetical (A-Z)">Alphabetical (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
        <div className="py-24 text-center text-neutral-500 bg-white rounded-xl border border-dashed border-neutral-300">
          <p className="text-xl">No products found matching your criteria.</p>
          <button 
            onClick={() => { setActiveCategory("All"); setPriceRange("All"); setSortOrder("Recommended"); }} 
            className="mt-4 text-red-600 font-medium hover:underline focus:outline-none"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
