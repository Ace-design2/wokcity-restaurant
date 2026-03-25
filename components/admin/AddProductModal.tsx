"use client";

import React from 'react';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl shadow-xl border border-neutral-100 w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between shrink-0">
          <h2 className="text-xl font-bold text-black tracking-tight">Add New Product</h2>
          <button onClick={onClose} className="p-2 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-5">
          {/* Image Upload */}
          <div className="w-full h-32 border-2 border-dashed border-neutral-200 rounded-xl flex flex-col items-center justify-center text-neutral-500 hover:bg-neutral-50 hover:border-black transition-colors cursor-pointer group">
            <svg className="w-8 h-8 mb-2 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span className="text-sm font-medium group-hover:text-black">Click to upload image</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-black">Product Name *</label>
            <input type="text" placeholder="e.g. Spicy Wok Noodles" className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-black">Category *</label>
              <select className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-white appearance-none">
                <option>Signature Woks</option>
                <option>Noodles</option>
                <option>Specials</option>
                <option>Drinks</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-black">Price (₦) *</label>
              <input type="number" placeholder="0.00" className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-black">Description</label>
            <textarea placeholder="Brief details about the product..." className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black resize-y min-h-[80px]"></textarea>
          </div>

          <div className="flex items-center justify-between py-2">
            <div>
              <label className="text-sm font-bold text-black block">Availability</label>
              <span className="text-xs font-medium text-neutral-500">Is this product currently in stock?</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-end gap-3 shrink-0">
          <button onClick={onClose} className="px-5 py-2 text-sm font-bold text-neutral-600 hover:text-black transition-colors rounded-xl">
            Cancel
          </button>
          <button onClick={onClose} className="px-5 py-2 bg-black text-white text-sm font-bold rounded-xl hover:bg-neutral-800 transition-colors shadow-sm">
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}
