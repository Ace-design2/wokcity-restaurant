import React from 'react';
import Sidebar from '@/components/admin/Sidebar';
import AdminNavbar from '@/components/admin/AdminNavbar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-neutral-50 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden p-4 md:p-8">
        <AdminNavbar />
        {/* Main Content Area */}
        <main className="mt-8 w-full max-w-[1200px] mx-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
