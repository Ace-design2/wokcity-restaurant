import React from 'react';

export default function CartPanel() {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-neutral-200 bg-neutral-50/50">
        <h2 className="text-xl font-bold text-black flex items-center justify-between">
          Your Cart
          <span className="bg-red-950 text-white text-xs px-2 py-1 rounded-full">3</span>
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
        {/* Mock Cart Item */}
        <div className="flex items-center gap-4">
          <img src="/images/food1.jpg" alt="Wok Meal 1" className="w-16 h-16 rounded-md object-cover" />
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-black">Spicy Basil Wok</h4>
            <p className="text-xs text-neutral-500 mt-1">Extra spicy</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-bold text-red-950">$24.99</span>
              <div className="flex items-center gap-2 text-sm bg-neutral-100 rounded-md px-2 py-1">
                <button className="text-neutral-500 hover:text-black">-</button>
                <span className="font-medium text-black">1</span>
                <button className="text-neutral-500 hover:text-black">+</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mock Cart Item */}
        <div className="flex items-center gap-4">
          <img src="/images/food2.jpg" alt="Wok Meal 2" className="w-16 h-16 rounded-md object-cover" />
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-black">Teriyaki Chicken</h4>
            <p className="text-xs text-neutral-500 mt-1">No onions</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-bold text-red-950">$29.99</span>
              <div className="flex items-center gap-2 text-sm bg-neutral-100 rounded-md px-2 py-1">
                <button className="text-neutral-500 hover:text-black">-</button>
                <span className="font-medium text-black">2</span>
                <button className="text-neutral-500 hover:text-black">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-neutral-200 bg-neutral-50">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-neutral-500">Subtotal</span>
          <span className="text-sm font-semibold text-black">$84.97</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-neutral-500">Delivery</span>
          <span className="text-sm font-semibold text-green-600">Free</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-base font-bold text-black">Total</span>
          <span className="text-xl font-bold text-red-950">$84.97</span>
        </div>
        <button className="w-full py-3 bg-red-600 hover:bg-red-700 transition-colors rounded-lg text-white font-bold flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
          Checkout Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
