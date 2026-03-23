"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';

export interface SlideData {
  image: string;
  year: string;
  description: string;
}

interface JourneySliderProps {
  images: SlideData[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export default function JourneySlider({
  images,
  autoPlay = true,
  interval = 4000,
  showDots = true,
  showArrows = true,
}: JourneySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const touchStartX = useRef<number>(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay && !isHovered && !isSwiping) {
      autoPlayRef.current = setInterval(nextSlide, interval);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, interval, isHovered, isSwiping, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setIsSwiping(false);
  };

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="relative w-full h-[260px] md:h-[340px] lg:h-[420px] rounded-[2rem] overflow-hidden shadow-lg border border-neutral-100 group touch-pan-y bg-neutral-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Our Journey Image Slider"
      role="region"
    >
      {/* Slider Track */}
      <div 
        className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((slide, index) => (
          <div key={index} className="w-full h-full shrink-0 relative">
            <img 
              src={slide.image} 
              alt={slide.description} 
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              draggable={false}
            />
            {/* Gradient Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10 text-left">
              <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full mb-3 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]">
                {slide.year}
              </span>
              <p className="text-white font-semibold text-lg md:text-xl lg:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button 
            onClick={(e) => { e.preventDefault(); prevSlide(); }}
            className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-400 hover:bg-black/50 focus:outline-none focus:opacity-100 z-20 shadow-md"
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); nextSlide(); }}
            className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-400 hover:bg-black/50 focus:outline-none focus:opacity-100 z-20 shadow-md"
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && (
        <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex gap-2 sm:gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full focus:outline-none ${
                currentIndex === index 
                  ? 'w-8 bg-white opacity-100 shadow-[0_0_10px_rgba(255,255,255,0.7)]' 
                  : 'w-2 bg-white/50 opacity-60 hover:opacity-100 hover:bg-white/80'
              } h-2`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
