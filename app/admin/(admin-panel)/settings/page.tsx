"use client";

import React, { useState } from 'react';

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 800);
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-black tracking-tight">Restaurant Settings</h2>
        <p className="text-sm font-medium text-neutral-500 mt-1">Manage core configuration and operational details.</p>
      </div>

      <form onSubmit={handleSave} className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
        
        <div className="p-6 md:p-8 flex flex-col gap-8">
          
          {/* General Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-black border-b border-neutral-100 pb-2">General Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Restaurant Name</label>
                <input type="text" defaultValue="WokCity" className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Currency</label>
                <select className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-white appearance-none">
                  <option value="NGN">NGN (₦)</option>
                  <option value="USD">USD ($)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Phone Number</label>
                <input type="tel" defaultValue="+234 800 000 0000" className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Email Address</label>
                <input type="email" defaultValue="admin@wokcity.com" className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-black">Main Address</label>
              <textarea defaultValue="Abeokuta, Ogun State, Nigeria" className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black resize-y min-h-[80px]"></textarea>
            </div>
          </div>

          {/* Operations */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-black border-b border-neutral-100 pb-2">Operations & Delivery</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Opening Hours</label>
                <input type="text" defaultValue="10:00 AM - 10:00 PM (Mon-Sun)" className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Base Delivery Fee</label>
                <input type="number" defaultValue="1500" className="px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-100">
              <div>
                <span className="block text-sm font-bold text-black">Accepting Orders</span>
                <span className="text-xs font-medium text-neutral-500">Toggle off to temporarily stop receiving new orders.</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-end gap-4 shrink-0">
          {saved && <span className="text-sm font-bold text-green-600 animate-pulse">Settings saved successfully!</span>}
          <button 
            type="submit" 
            disabled={loading}
            className="px-8 py-3 bg-black text-white text-sm font-bold rounded-xl hover:bg-neutral-800 transition-all shadow-sm disabled:opacity-70 flex items-center gap-2"
          >
            {loading ? 'Saving...' : 'Save Settings'}
          </button>
        </div>

      </form>
    </div>
  );
}
