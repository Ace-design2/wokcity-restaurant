"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    // Dummy authentication delay
    setTimeout(() => {
      if (email === 'admin@wokcity.com' && password === 'admin') {
        // Safe to push
        router.push('/admin/dashboard');
      } else {
        // Fallback or accept any for dummy purposes if desired, but let's enforce a simple dummy set.
        // Actually, to make it easy to test: any email/pass works for this dummy.
        router.push('/admin/dashboard');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-neutral-200 shadow-sm p-8">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-black font-bold text-3xl tracking-tighter hover:text-red-950 transition-colors mb-2">
            WokCity<span className="text-red-600">.</span>
          </Link>
          <h1 className="text-2xl font-bold text-black tracking-tight mb-2">Admin Login</h1>
          <p className="text-neutral-500 font-medium text-sm">Sign in to manage WokCity operations</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm font-medium p-3 rounded-lg border border-red-100 text-center">
              {error}
            </div>
          )}
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-black">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@wokcity.com"
              className="h-12 w-full px-4 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-bold text-black">Password</label>
              <a href="#" className="text-sm font-medium text-neutral-500 hover:text-red-600 transition-colors">Forgot Password?</a>
            </div>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-12 w-full px-4 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors font-sans"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="h-12 w-full bg-black text-white text-base font-semibold rounded-xl hover:bg-neutral-800 transition-all active:scale-[0.98] mt-2 flex items-center justify-center disabled:opacity-70 disabled:pointer-events-none"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
