"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import AdminNavbar from '@/components/admin/AdminNavbar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-neutral-50 font-sans">
      <Sidebar isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden p-4 md:p-8">
        <AdminNavbar onToggleMobileNav={() => setIsMobileNavOpen(!isMobileNavOpen)} />
        {/* Main Content Area */}
        <main className="mt-8 w-full max-w-[1200px] mx-auto flex-1">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {isMobileNavOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-md"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}
    </div>
  );
}
