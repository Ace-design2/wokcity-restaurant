import React from 'react';

export default function SkeletonFilters() {
  return (
    <div className="w-full mb-10">
      {/* ── Desktop: Two Rows ────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-col gap-3 border-b border-neutral-200 pb-4">
        {/* ROW 1 — All category tabs */}
        <div className="flex items-center gap-6 mt-1">
          <div className="skeleton-shimmer h-4 w-6 rounded mr-2" />
          <div className="skeleton-shimmer h-4 w-20 rounded" />
          <div className="skeleton-shimmer h-4 w-24 rounded" />
          <div className="skeleton-shimmer h-4 w-20 rounded" />
          <div className="skeleton-shimmer h-4 w-16 rounded" />
          <div className="skeleton-shimmer h-4 w-16 rounded" />
        </div>

        {/* ROW 2 — Search + Sort/Price */}
        <div className="flex items-center gap-3 mt-2">
          {/* Search */}
          <div className="flex-1 skeleton-shimmer h-9 rounded-lg" />

          {/* Divider */}
          <span className="w-px h-5 bg-neutral-200 shrink-0" />

          {/* Price + Sort */}
          <div className="flex items-center gap-1 shrink-0">
            <div className="skeleton-shimmer h-6 w-24 rounded-md mt-1 mb-1 mr-2" />
            <span className="w-px h-4 bg-neutral-200 mx-1" />
            <div className="skeleton-shimmer h-6 w-24 rounded-md mt-1 mb-1 ml-2" />
          </div>
        </div>
      </div>

      {/* ── Mobile / Tablet ───────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 lg:hidden border-b border-neutral-200 pb-4 mt-1">
        {/* ROW 1 — Category Tabs */}
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="skeleton-shimmer shrink-0 h-4 w-8 rounded mr-2" />
          <div className="skeleton-shimmer shrink-0 h-4 w-20 rounded" />
          <div className="skeleton-shimmer shrink-0 h-4 w-24 rounded" />
          <div className="skeleton-shimmer shrink-0 h-4 w-20 rounded" />
        </div>

        {/* ROW 2 — Search + Dropdowns */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 min-w-0 skeleton-shimmer h-9 rounded-lg" />

          <div className="flex items-center gap-1 shrink-0">
            <div className="skeleton-shimmer h-6 w-24 rounded-md mt-1 mb-1" />
            <span className="w-px h-4 bg-neutral-200 mx-1" />
            <div className="skeleton-shimmer h-6 w-24 rounded-md mt-1 mb-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
