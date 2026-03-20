import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full h-[80px] bg-red-950 flex items-center justify-center">
      <div className="w-full max-w-[1440px] px-24 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-2xl tracking-wide">
          WokCity
        </Link>
        <nav className="flex items-center gap-12">
          <Link href="/shop" className="text-white hover:text-red-200 transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-white hover:text-red-200 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-red-200 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
