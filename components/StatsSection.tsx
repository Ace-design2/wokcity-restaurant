"use client";

import React, { useEffect, useState, useRef } from 'react';

const UtensilsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const StarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const LeafIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 14 6a7 7 0 0 1 7 7v7h-7Z" />
    <path d="M11 20c-5 0-9-4-9-9 0-3 1-5 2-7" />
  </svg>
);

interface AnimatedCardProps {
  target: number;
  suffix: string;
  label: string;
  isFloat?: boolean;
  icon: React.ReactNode;
}

const AnimatedCard = ({ target, suffix, label, isFloat = false, icon }: AnimatedCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const duration = 1500; // slightly longer for smoother effect
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(easeProgress * target);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, target]);

  const displayValue = isFloat 
    ? count.toFixed(1) 
    : Math.floor(count).toLocaleString();

  return (
    <div 
      ref={ref}
      className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center justify-center gap-2 group"
    >
      <div className="text-neutral-400 mb-2 md:mb-4 group-hover:text-black transition-colors duration-300">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black flex items-end">
        <span>{displayValue}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm text-neutral-500 tracking-wide md:tracking-widest uppercase mt-2 font-semibold">
        {label}
      </div>
    </div>
  );
};

export default function StatsSection() {
  const stats = [
    { icon: <UtensilsIcon />, target: 10000, suffix: "+", label: "Meals Served" },
    { icon: <ClockIcon />, target: 5, suffix: "+", label: "Years Experience" },
    { icon: <StarIcon />, target: 4.8, suffix: "★", label: "Customer Rating", isFloat: true },
    { icon: <LeafIcon />, target: 100, suffix: "%", label: "Fresh Ingredients" },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
      <div className="rounded-3xl bg-neutral-50 p-4 sm:p-6 md:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <AnimatedCard key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
