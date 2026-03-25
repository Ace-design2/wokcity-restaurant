import React from 'react';
import NavbarFloating from '@/components/NavbarFloating';
import Link from 'next/link';
import { Metadata } from 'next';
import JourneySlider, { SlideData } from '@/components/JourneySlider';

const journeySlides: SlideData[] = [
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200",
    year: "2019",
    description: "WokCity was founded"
  },
  {
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1200",
    year: "2020",
    description: "First kitchen opened"
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    year: "2022",
    description: "Expanded menu with new signature dishes"
  },
  {
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200",
    year: "2024",
    description: "Serving thousands of customers daily"
  }
];

export const metadata: Metadata = {
  title: 'Our Story | WokCity',
  description: 'Bringing the Art of the Wok to Abeokuta. Fresh ingredients, fast service, and bold flavors.',
};

// SVG Icons (reused visual language)
const LeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 14 6a7 7 0 0 1 7 7v7h-7Z" />
    <path d="M11 20c-5 0-9-4-9-9 0-3 1-5 2-7" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 7 2a1 1 0 0 1 1 1z" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function AboutPage() {
  return (
    <>
      <NavbarFloating />

      {/* 1. Hero Section — Story Introduction */}
      <section className="w-full h-[420px] md:h-auto relative flex items-center shrink-0 overflow-hidden bg-black">
        <img 
          src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=2000" 
          alt="Wok cooking in action" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Dark gradient overlay matching the design system */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-8 md:py-16 xl:px-24">
          <div className="max-w-xl text-left">
            <span className="inline-block text-white text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-80">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
              Bringing the Art of the Wok to Abeokuta
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium mb-8 max-w-md leading-relaxed">
              Fresh ingredients. Fast service. Bold flavors made for everyday life.
            </p>
            <Link 
              href="/" 
              className="inline-flex px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Main Container - same container width and spacing as the Shop page */}
      <main className="w-full max-w-[1440px] mx-auto px-6 md:px-8 xl:px-24 py-16 flex flex-col gap-24 overflow-x-hidden">
        
        {/* 2. Story Section — Main Narrative */}
        <section className="flex flex-col gap-12 lg:gap-16">
          <div className="max-w-[800px] mb-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 tracking-tight">Our Journey</h2>
            <div className="space-y-6 text-neutral-500 font-medium text-lg leading-relaxed">
              <p>
                WokCity started with a simple idea: great food shouldn't mean waiting in long lines or compromising on flavor. We wanted to create a place where anyone could enjoy authentic, wok-fired meals made exactly the way they should be—fast, fresh, and full of bold taste.
              </p>
              <p>
                Rooted in the heart of Abeokuta, our mission is to redefine fast-casual dining. We believe in the power of community, bringing people together over steaming bowls of perfectly balanced flavors.
              </p>
            </div>
          </div>
          <div className="w-full">
            <JourneySlider 
              images={journeySlides} 
              autoPlay={true} 
              interval={4000} 
              showDots={true} 
              showArrows={true} 
            />
          </div>
        </section>

        {/* 3. Highlight Points Section — Key Values */}
        <section>
          <div className="max-w-[600px] mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black tracking-tight mb-4">What Makes Us Different</h2>
            <p className="text-neutral-500 font-medium text-lg">We deliver excellence through a few core principles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HighlightCard 
              icon={<LeafIcon />} 
              title="Fresh Ingredients" 
              description="We use quality ingredients sourced daily." 
            />
            <HighlightCard 
              icon={<ClockIcon />} 
              title="Fast Service" 
              description="Quick meals without compromising taste." 
            />
            <HighlightCard 
              icon={<CheckIcon />} 
              title="Consistent Taste" 
              description="Every dish meets our quality standard." 
            />
            <HighlightCard 
              icon={<HeartIcon />} 
              title="Customer First" 
              description="Your satisfaction is our priority." 
            />
            <HighlightCard 
              icon={<ShieldIcon />} 
              title="Clean Environment" 
              description="High hygiene and food safety standards." 
            />
            <HighlightCard 
              icon={<StarIcon />} 
              title="Affordable Meals" 
              description="Great food at fair prices." 
            />
          </div>
        </section>

        {/* 4. Stats Section — Trust Indicators */}
        <section className="py-16 md:py-20 border-y border-neutral-100 bg-white/50 rounded-3xl">
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 md:gap-32 text-center px-4">
            <StatItem value="10,000+" label="Meals Served" />
            <StatItem value="5+" label="Years Experience" />
            <StatItem value="4.8★" label="Customer Rating" />
            <StatItem value="100%" label="Fresh Ingredients" />
          </div>
        </section>

        {/* 5. Mission & Vision Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-xl border border-neutral-200 bg-white p-8 lg:p-10 hover:shadow-sm transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-black mb-4">Mission</h3>
            <p className="text-neutral-500 font-medium text-lg leading-relaxed">
              To serve delicious, high-quality meals quickly while delivering excellent customer service every day.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-8 lg:p-10 hover:shadow-sm transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-black mb-4">Vision</h3>
            <p className="text-neutral-500 font-medium text-lg leading-relaxed">
              To become Abeokuta’s most trusted fast-casual restaurant known for flavor, speed, and consistency.
            </p>
          </div>
        </section>

        {/* 6. Team / Kitchen Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black tracking-tight mb-4">Meet Our Kitchen</h2>
            <p className="text-neutral-500 font-medium text-lg max-w-2xl mx-auto">
              The passionate professionals behind every wok-tossed creation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamCard 
              image="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
              name="Chef Michael"
              role="Head Chef"
            />
            <TeamCard 
              image="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=800"
              name="Sarah Johnson"
              role="Kitchen Manager"
            />
            <TeamCard 
              image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
              name="The Team"
              role="Service Team"
            />
          </div>
        </section>

        {/* 7. CTA Section — Conversion Focus */}
        <section className="text-center py-20 bg-neutral-100 rounded-[2rem] px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-black tracking-tight mb-8">
            Ready to taste the difference?
          </h2>
          <Link 
            href="/" 
            className="inline-block px-10 py-5 bg-black text-white text-base font-semibold rounded-full hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            Order Now
          </Link>
        </section>

      </main>
    </>
  );
}

// Reusable Components

const HighlightCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white rounded-xl border border-neutral-200 hover:border-red-600 p-6 flex flex-col gap-4 items-start hover:shadow-sm transition-all duration-300 group">
    <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
      <p className="text-neutral-500 font-medium text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="flex flex-col items-center justify-center gap-2">
    <span className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter">{value}</span>
    <span className="text-xs md:text-sm font-bold text-neutral-400 uppercase tracking-[0.15em]">{label}</span>
  </div>
);

const TeamCard = ({ image, name, role }: { image: string, name: string, role: string }) => (
  <div className="flex flex-col gap-5 group cursor-default">
    <div className="relative h-[380px] rounded-[1.5rem] overflow-hidden bg-neutral-100">
      <img 
        src={image} 
        alt={name} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" 
      />
    </div>
    <div className="text-center px-4">
      <h3 className="text-xl font-bold text-black tracking-tight mb-1">{name}</h3>
      <p className="text-sm font-bold text-red-600 uppercase tracking-wider">{role}</p>
    </div>
  </div>
);
