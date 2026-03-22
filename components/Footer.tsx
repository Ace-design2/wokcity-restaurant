import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-200 mt-auto shrink-0 relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 py-12 md:px-8 xl:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="flex-1 max-w-sm">
            <Link href="/" className="inline-block text-black font-bold text-2xl tracking-tighter hover:text-red-950 transition-colors">
              WokCity<span className="text-red-600">.</span>
            </Link>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Experience the art of the wok with authentic fusion flavors delivered straight to your door. Fresh ingredients, intense heat.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-black text-xs uppercase tracking-widest">Company</span>
              <div className="flex flex-col gap-3">
                <Link href="/about" className="text-sm text-neutral-500 hover:text-black hover:translate-x-1 transition-all">Our Story</Link>
                <Link href="/careers" className="text-sm text-neutral-500 hover:text-black hover:translate-x-1 transition-all">Careers</Link>
                <Link href="/locations" className="text-sm text-neutral-500 hover:text-black hover:translate-x-1 transition-all">Locations</Link>
                <Link href="/contact" className="text-sm text-neutral-500 hover:text-black hover:translate-x-1 transition-all">Contact Us</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-black text-xs uppercase tracking-widest">Legal</span>
              <div className="flex flex-col gap-3">
                <Link href="/privacy" className="text-sm text-neutral-500 hover:text-black hover:translate-x-1 transition-all">Privacy Policy</Link>
                <Link href="/terms" className="text-sm text-neutral-500 hover:text-black hover:translate-x-1 transition-all">Terms of Service</Link>
                <Link href="/cookies" className="text-sm text-neutral-500 hover:text-black hover:translate-x-1 transition-all">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-400 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} WokCity. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Icons Placeholder */}
            <a href="#" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-500 hover:bg-black hover:text-white transition-all transform hover:scale-110">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-500 hover:bg-black hover:text-white transition-all transform hover:scale-110">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-500 hover:bg-black hover:text-white transition-all transform hover:scale-110">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
