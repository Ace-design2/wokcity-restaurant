import React from 'react';
import NavbarFloating from '@/components/NavbarFloating';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | WokCity',
  description: 'Get in touch with WokCity for orders, inquiries, or support.',
};

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <NavbarFloating />

      {/* 1. Hero Section — Contact Introduction */}
      <section className="w-full h-[420px] md:h-auto relative flex items-center justify-start shrink-0 overflow-hidden bg-black pt-[88px]">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000" 
          alt="WokCity Restaurant Interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Dark gradient overlay matching the design system */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-8 md:py-16 xl:px-24">
          <div className="max-w-xl text-left">
            <span className="inline-block text-white text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-80">
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
              We’re Here to Help
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium mb-8 max-w-md leading-relaxed">
              Have a question, want to place an order, or need assistance? Our team is ready to help you.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="callto:+2348000000000" 
                className="inline-flex px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                Call Now
              </a>
              <Link 
                href="/" 
                className="inline-flex px-8 py-4 bg-transparent border border-white text-white text-sm font-semibold rounded-full hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
              >
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="w-full max-w-[1440px] mx-auto px-6 md:px-8 xl:px-24 py-16 flex flex-col gap-24 overflow-x-hidden">
        
        {/* 2. Contact Information Section — Core Details */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black tracking-tight mb-2">Get in Touch</h2>
            <p className="text-neutral-500 font-medium text-lg">Reach out to us through any of these channels.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone Card */}
            <div className="bg-white rounded-xl border border-neutral-200 hover:border-red-600 p-6 flex flex-col items-start hover:shadow-sm transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-neutral-100 text-black flex items-center justify-center shrink-0 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <PhoneIcon />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
              <p className="text-black font-semibold text-lg mb-1">+234 XXX XXX XXXX</p>
              <p className="text-neutral-500 font-medium text-sm">Available for orders and inquiries</p>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-xl border border-neutral-200 hover:border-red-600 p-6 flex flex-col items-start hover:shadow-sm transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-neutral-100 text-green-600 flex items-center justify-center shrink-0 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <WhatsAppIcon />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">WhatsApp</h3>
              <p className="text-neutral-500 font-medium text-sm mb-4">Chat with us instantly</p>
              <a href="#" className="mt-auto text-sm font-bold text-black hover:text-red-600 transition-colors inline-flex items-center gap-1">
                Send Message &rarr;
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl border border-neutral-200 hover:border-red-600 p-6 flex flex-col items-start hover:shadow-sm transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-neutral-100 text-red-600 flex items-center justify-center shrink-0 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <LocationIcon />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Visit Us</h3>
              <p className="text-black font-semibold text-base">WokCity Restaurant</p>
              <p className="text-neutral-500 font-medium text-sm">Abeokuta, Ogun State</p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl border border-neutral-200 hover:border-red-600 p-6 flex flex-col items-start hover:shadow-sm transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-neutral-100 text-black flex items-center justify-center shrink-0 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <EmailIcon />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
              <a href="mailto:support@wokcity.com" className="text-black font-medium text-base hover:text-red-600 transition-colors">
                support@wokcity.com
              </a>
            </div>
          </div>
        </section>

        {/* 3. & 4. Contact Form Section & Map Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Form */}
          <div className="w-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-black tracking-tight mb-8">Send Us a Message</h2>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-black">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe"
                    className="h-12 w-full px-4 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold text-black">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    placeholder="+234 XXX XXX XXXX"
                    className="h-12 w-full px-4 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-black">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="h-12 w-full px-4 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-bold text-black">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required 
                    placeholder="How can we help?"
                    className="h-12 w-full px-4 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-black">Message *</label>
                <textarea 
                  id="message" 
                  required 
                  placeholder="Your message here..."
                  className="min-h-[120px] w-full p-4 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-y"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="h-12 px-8 bg-black text-white text-base font-semibold rounded-lg hover:bg-neutral-800 transition-colors w-full md:w-auto self-start mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Map */}
          <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
            {/* Embedded Google Map using a generic Abeokuta link for demonstration */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126581.36449175294!2d3.267807755106606!3d7.147250689404288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4b9ee551a31d%3A0xe5a363abb3a763ac!2sAbeokuta%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1711223456789!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* 5. Opening Hours Section */}
        <section className="w-full flex justify-center">
          <div className="border border-neutral-200 rounded-xl p-8 md:p-12 text-center max-w-lg w-full bg-white shadow-sm">
            <h2 className="text-2xl font-bold text-black tracking-tight mb-6">Opening Hours</h2>
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <span className="font-medium text-neutral-500">Monday &mdash; Sunday</span>
              <span className="font-bold text-black text-lg">10:00 AM &mdash; 10:00 PM</span>
            </div>
            <p className="mt-6 text-sm text-neutral-400 font-medium">We are open every day of the week, including public holidays.</p>
          </div>
        </section>

        {/* 6. Quick Actions Section — Conversion Focus */}
        <section className="bg-neutral-50 -mx-6 md:-mx-8 xl:-mx-24 px-6 md:px-8 xl:px-24 py-16 border-t border-neutral-200 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-black tracking-tight mb-8">Ready or have more questions?</h2>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            {/* Primary Action */}
            <Link 
              href="/" 
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-black text-white text-base font-semibold hover:bg-neutral-800 transition-colors w-full sm:w-auto"
            >
              Order Now
            </Link>
            {/* Secondary Actions */}
            <a 
              href="callto:+2348000000000" 
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-transparent border border-neutral-300 text-black text-base font-semibold hover:border-black transition-colors w-full sm:w-auto"
            >
              Call Restaurant
            </a>
            <a 
              href="https://maps.google.com" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-transparent border border-neutral-300 text-black text-base font-semibold hover:border-black transition-colors w-full sm:w-auto"
            >
              Get Directions
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-transparent border border-neutral-300 text-black text-base font-semibold hover:border-black transition-colors w-full sm:w-auto"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>

      </main>
    </>
  );
}
