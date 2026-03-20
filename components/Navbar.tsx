import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full h-[80px] bg-white/90 backdrop-blur-md border-b border-neutral-100 flex items-center justify-center">
      <div className="w-full max-w-[1440px] px-8 xl:px-24 flex items-center justify-between">
        <Link href="/" className="text-black font-bold text-2xl tracking-tighter hover:text-red-950 transition-colors">
          WokCity<span className="text-red-600">.</span>
        </Link>
        <nav className="flex items-center gap-10">
          <Link href="/shop" className="text-sm font-medium text-black hover:text-red-600 transition-colors">
            Menu
          </Link>
          <Link href="/about" className="text-sm font-medium text-neutral-500 hover:text-black transition-colors">
            Our Story
          </Link>
          <Link href="/contact" className="text-sm font-medium text-neutral-500 hover:text-black transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
