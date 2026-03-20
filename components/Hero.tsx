import React from 'react';

export default function Hero() {
  return (
    <section className="w-full h-96 relative flex items-center justify-center shrink-0">
      {/* Background Image from public folder */}
      <img 
        src="/images/hero.jpg" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Visual background gradient wrapper overlaid on image */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
