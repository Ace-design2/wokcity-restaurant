"use client";

import React from 'react';

export default function PerformancePage() {
  // Simple mock data for styling lightweight charts
  const weeklyRevenue = [120, 180, 150, 240, 290, 310, 260];
  const maxRev = Math.max(...weeklyRevenue);

  const popularItems = [
    { name: 'Classic Wok Stir-Fry', orders: 420 },
    { name: 'Chef Special Noodles', orders: 385 },
    { name: 'Sweet & Sour Chicken', orders: 250 },
    { name: 'Spring Rolls (4pcs)', orders: 210 },
  ];
  const maxOrders = popularItems[0].orders;

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-black tracking-tight">Performance Overview</h2>
        <p className="text-sm font-medium text-neutral-500 mt-1">Lightweight operational analytics for the past 7 days.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Revenue Trend (Bar Chart) */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-black mb-6 tracking-tight">Revenue Trend</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {weeklyRevenue.map((val, idx) => (
              <div key={idx} className="w-full relative flex flex-col justify-end h-full">
                <div 
                  className="w-full bg-red-100 hover:bg-red-200 transition-colors rounded-t-md relative group cursor-pointer"
                  style={{ height: `${(val / maxRev) * 100}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    ₦{(val * 1000).toLocaleString()}
                  </div>
                </div>
                <div className="text-center text-xs font-bold text-neutral-400 mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Items (Horizontal Bars) */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-black mb-6 tracking-tight">Popular Items</h3>
          <div className="flex flex-col gap-5 flex-1 justify-center">
            {popularItems.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-black">{item.name}</span>
                  <span className="text-neutral-500">{item.orders} orders</span>
                </div>
                <div className="w-full h-3 bg-neutral-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black rounded-full"
                    style={{ width: `${(item.orders / maxOrders) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Daily Orders Summary */}
      <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-black mb-4 tracking-tight">Daily Orders Snapshot</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
            <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Dine-in</span>
            <span className="text-2xl font-black text-black">45%</span>
          </div>
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
            <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Takeaway</span>
            <span className="text-2xl font-black text-black">35%</span>
          </div>
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
            <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Delivery</span>
            <span className="text-2xl font-black text-black">20%</span>
          </div>
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
            <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Avg Order Val</span>
            <span className="text-2xl font-black text-black">₦5.2k</span>
          </div>
        </div>
      </div>

    </div>
  );
}
