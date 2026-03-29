"use client";

import React, { useRef, useEffect, useState } from "react";

const CATEGORIES = ["All", "Appetizers", "Main Course", "Side Dishes", "Desserts", "Snacks"];

type DropdownProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
  align?: "left" | "right";
};

function MinimalDropdown({ label, value, options, onChange, align = "right" }: DropdownProps) {
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
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-neutral-100 transition-colors focus:outline-none text-sm whitespace-nowrap"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-neutral-500">{label}:</span>
        <span className="font-medium text-black">{value}</span>
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          role="listbox"
          className={`absolute top-full ${align === "left" ? "left-0" : "right-0"} mt-2 w-52 bg-white border border-neutral-100 rounded-xl shadow-xl shadow-black/[0.06] py-1.5 z-50`}
        >
          {options.map((opt) => (
            <button
              key={opt}
              role="option"
              aria-selected={value === opt}
              onClick={() => { onChange(opt); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                value === opt
                  ? "text-red-950 font-semibold bg-red-50/60"
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

type FiltersBarProps = {
  /** Currently selected categories. Empty array = show all ("All" is visually active). */
  activeCategories: string[];
  /** Toggle a category on/off. Passing "All" clears all selections. */
  toggleCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  priceRange: string;
  setPriceRange: (p: string) => void;
  sortOrder: string;
  setSortOrder: (s: string) => void;
};

/** Shared search input used in both desktop and mobile layouts */
function SearchInput({
  id,
  value,
  onChange,
}: {
  id: string;
  value: string;
  onChange: (q: string) => void;
}) {
  return (
    <div className="relative w-full">
      <label htmlFor={id} className="sr-only">Search meals</label>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
      </span>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search meals…"
        className="w-full h-9 pl-9 pr-8 rounded-lg border border-neutral-200 bg-neutral-50 text-sm text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500/25 focus:border-red-300 focus:bg-white transition-all"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors focus:outline-none"
          aria-label="Clear search"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function StickyFiltersBar({
  activeCategories,
  toggleCategory,
  searchQuery,
  setSearchQuery,
  priceRange,
  setPriceRange,
  sortOrder,
  setSortOrder,
}: FiltersBarProps) {
  const isAllActive = activeCategories.length === 0;

  const isActive = (cat: string) =>
    cat === "All" ? isAllActive : activeCategories.includes(cat);

  return (
    <div className="w-full mb-10">

      {/* ── Desktop: Single Row ──────────────────────────────────────── */}
      <div className="hidden lg:flex items-center gap-4 border-b border-neutral-200 pb-4">

        {/* LEFT — Category Tabs */}
        <div
          className="flex items-center gap-5 overflow-x-auto shrink-0 max-w-[340px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`whitespace-nowrap pb-3 text-sm transition-all duration-200 focus:outline-none border-b-2 ${
                isActive(cat)
                  ? "font-semibold text-black border-red-600"
                  : "font-medium text-neutral-400 hover:text-neutral-700 border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Divider */}
        <span className="w-px h-5 bg-neutral-200 shrink-0" aria-hidden="true" />

        {/* CENTER — Search */}
        <div className="flex-1 min-w-[200px]">
          <SearchInput
            id="menu-search-desktop"
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>

        {/* Divider */}
        <span className="w-px h-5 bg-neutral-200 shrink-0" aria-hidden="true" />

        {/* RIGHT — Price + Sort */}
        <div className="flex items-center gap-1 shrink-0">
          <MinimalDropdown
            label="Price"
            value={priceRange}
            options={["All Prices", "Under ₦20,000", "₦20,000 - ₦35,000", "Over ₦35,000"]}
            onChange={setPriceRange}
            align="right"
          />
          <span className="w-px h-4 bg-neutral-200 mx-1" aria-hidden="true" />
          <MinimalDropdown
            label="Sort"
            value={sortOrder}
            options={["Recommended", "Price: Ascending", "Price: Descending", "Alphabetical (A-Z)"]}
            onChange={setSortOrder}
            align="right"
          />
        </div>
      </div>

      {/* ── Mobile / Tablet ───────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 lg:hidden border-b border-neutral-200 pb-4">

        {/* ROW 1 — Category Tabs */}
        <div
          className="flex items-center gap-4 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`shrink-0 whitespace-nowrap pb-3 text-sm transition-all duration-200 focus:outline-none border-b-2 ${
                isActive(cat)
                  ? "font-semibold text-black border-red-600"
                  : "font-medium text-neutral-400 hover:text-neutral-700 border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ROW 2 — Search + Dropdowns */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 min-w-0">
            <SearchInput
              id="menu-search-mobile"
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <MinimalDropdown
              label="Price"
              value={priceRange}
              options={["All Prices", "Under ₦20,000", "₦20,000 - ₦35,000", "Over ₦35,000"]}
              onChange={setPriceRange}
              align="left"
            />
            <span className="w-px h-4 bg-neutral-200 mx-1" aria-hidden="true" />
            <MinimalDropdown
              label="Sort"
              value={sortOrder}
              options={["Recommended", "Price: Ascending", "Price: Descending", "Alphabetical (A-Z)"]}
              onChange={setSortOrder}
              align="right"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
