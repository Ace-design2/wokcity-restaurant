"use client";

import React, { useState, useEffect } from 'react';

interface OrderDetailsModalProps {
  isOpen: boolean;
  order: any;
  onClose: () => void;
}

export default function OrderDetailsModal({ isOpen, order, onClose }: OrderDetailsModalProps) {
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (order) setStatus(order.status);
  }, [order]);

  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl shadow-xl border border-neutral-100 w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between shrink-0 bg-neutral-50/50">
          <div>
            <h2 className="text-xl font-bold text-black tracking-tight">Order {order.id}</h2>
            <p className="text-xs font-medium text-neutral-500 mt-1">{order.time}</p>
          </div>
          <button onClick={onClose} className="p-2 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-200 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6">
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Customer</span>
              <span className="text-sm font-bold text-black">{order.customer}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Phone</span>
              <span className="text-sm font-bold text-black">{order.phone}</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Delivery Address</span>
            <span className="text-sm font-medium text-neutral-700 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
              {order.address}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Order Items</span>
            <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-4 flex flex-col gap-3 font-medium text-sm text-neutral-700">
              <ul className="list-disc list-inside space-y-1">
                {order.items.split(', ').map((item: string, idx: number) => (
                  <li key={idx} className="marker:text-neutral-300">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
            <span className="text-sm font-bold text-black">Total Price</span>
            <span className="text-xl font-black text-black">{order.total}</span>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Update Status</label>
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-4 py-3 border border-neutral-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-white"
            >
              <option value="Pending">Pending</option>
              <option value="Preparing">Preparing</option>
              <option value="Ready">Ready</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between shrink-0">
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-bold text-neutral-600 hover:text-black transition-colors rounded-xl">
            Close
          </button>
          <button onClick={onClose} className="px-6 py-2.5 bg-black text-white text-sm font-bold rounded-xl hover:bg-neutral-800 transition-colors shadow-sm">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
