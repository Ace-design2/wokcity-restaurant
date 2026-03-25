"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminNavbar() {
  const pathname = usePathname();

  // Helper to format the page title based on the URL
  const getPageTitle = () => {
    const path = pathname.split('/').pop() || 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-neutral-200 px-6 h-[64px] flex items-center justify-between sticky top-4 z-40">
      
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle (optional if we make it fully responsive) */}
        <button className="md:hidden text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="hidden md:block font-medium text-neutral-500 text-sm">Overview / </span>
        <h1 className="font-bold text-black text-lg">{getPageTitle()}</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 shrink-0">
        
        {/* Notifications */}
        <button className="relative p-2 text-neutral-500 hover:text-black transition-colors rounded-full hover:bg-neutral-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full border-2 border-white"></span>
        </button>

        <div className="w-px h-6 bg-neutral-200 hidden sm:block"></div>

        {/* Profile / Logout */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm shrink-0">
            A
          </div>
          <Link href="/admin" className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors">
            Logout
          </Link>
        </div>
        
      </div>
    </nav>
  );
}
