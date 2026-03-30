"use client";

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import StickyFiltersBar from './StickyFiltersBar';

// Skeletons
import SkeletonFilters from './skeletons/SkeletonFilters';
import SkeletonProductCard from './skeletons/SkeletonProductCard';

type ProductGridProps = {
  showFilters?: boolean;
  showCards?: boolean;
};

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
};

const CATEGORIES = ["All", "Appetizers", "Main Course", "Side Dishes", "Desserts", "Snacks"];

const MOCK_PRODUCTS = Array.from({ length: 24 }).map((_, i) => ({
  id: `prod-${i}`,
  name: `Wok Meal ${i + 1}`,
  description: 'A delicious customized wok meal to enjoy...',
  category: CATEGORIES[(i % 5) + 1],
  price: Math.floor(15000 + ((i * 37) % 30000)),
  imageUrl: `/images/food${(i % 10) + 1}.jpg`,
}));

export default function ProductGrid({ showFilters = true, showCards = true }: ProductGridProps) {
  /**
   * activeCategories — empty = "All" (show everything).
   * Multiple categories can be selected; products matching
   * any selected category are shown (union).
   */
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState("All Prices");
  const [sortOrder, setSortOrder] = useState("Recommended");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  /** Toggle a category on/off. "All" always resets to empty (show everything). */
  const toggleCategory = (cat: string) => {
    if (cat === "All") {
      setActiveCategories([]);
      return;
    }
    setActiveCategories(prev =>
      prev.includes(cat)
        ? prev.filter(c => c !== cat)   // deselect
        : [...prev, cat]                // select
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];

    // Search — matches name or category
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }

    // Category — union of all selected, empty = all
    if (activeCategories.length > 0) {
      result = result.filter(p => activeCategories.includes(p.category));
    }

    // Price
    if (priceRange === "Under ₦20,000") result = result.filter(p => p.price < 20000);
    else if (priceRange === "₦20,000 - ₦35,000") result = result.filter(p => p.price >= 20000 && p.price <= 35000);
    else if (priceRange === "Over ₦35,000") result = result.filter(p => p.price > 35000);

    // Sort
    if (sortOrder === "Price: Ascending") result.sort((a, b) => a.price - b.price);
    else if (sortOrder === "Price: Descending") result.sort((a, b) => b.price - a.price);
    else if (sortOrder === "Alphabetical (A-Z)") result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [activeCategories, priceRange, sortOrder, searchQuery]);

  return (
    <div className="w-full">
      <div className="relative z-10">
        <div className={`transition-opacity duration-300 ${showFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <StickyFiltersBar
            activeCategories={activeCategories}
            toggleCategory={toggleCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>
        <div className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${showFilters ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <SkeletonFilters />
        </div>
      </div>

      {/* Active search summary */}
      {searchQuery.trim() && (
        <p className="text-sm text-neutral-500 mb-6">
          Results for{" "}
          <span className="font-semibold text-black">&ldquo;{searchQuery}&rdquo;</span>{" — "}
          <span className="font-medium text-black">{filteredProducts.length}</span>{" "}
          {filteredProducts.length === 1 ? "item" : "items"} found
          <button
            onClick={() => setSearchQuery("")}
            className="ml-3 text-xs text-neutral-400 hover:text-black underline transition-colors focus:outline-none"
          >
            Clear
          </button>
        </p>
      )}

      {/* Grid */}
      <div className="relative z-0">
        <div className={`transition-opacity duration-300 ${showCards ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 sm:gap-x-8 lg:gap-x-4 xl:gap-x-8 gap-y-6 sm:gap-y-10 lg:gap-y-6 xl:gap-y-10">
              {filteredProducts.map(product => (
                <div key={product.id} className="flex justify-center">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    onClick={() => setSelectedProduct(product)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-xl text-neutral-400 font-light">No products found matching your criteria.</p>
              <button
                onClick={() => { setActiveCategories([]); setPriceRange("All Prices"); setSortOrder("Recommended"); setSearchQuery(""); }}
                className="mt-6 text-sm text-black border-b border-black font-medium hover:text-neutral-600 hover:border-neutral-600 transition-colors pb-0.5 focus:outline-none"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
        
        {/* Skeleton Grid */}
        <div className={`absolute top-0 left-0 w-full transition-opacity duration-300 pointer-events-none ${showCards ? 'opacity-0' : 'opacity-100'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 sm:gap-x-8 lg:gap-x-4 xl:gap-x-8 gap-y-6 sm:gap-y-10 lg:gap-y-6 xl:gap-y-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex justify-center">
                <SkeletonProductCard />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </div>
  );
}
