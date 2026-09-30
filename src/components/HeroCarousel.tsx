"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// We'll create groups of 3 images for each slide mixing different phone models
const SLIDES = [
  {
    id: 1,
    images: [
      "/images/11/02-051-11.jpg",
      "/images/15 Pro Max/10-036-15PM.jpg",
      "/images/13 Pro/09-021-13P.jpg",
    ]
  },
  {
    id: 2,
    images: [
      "/images/15 Pro Max/12-020-15PM.jpg",
      "/images/13 Pro/10-046-13P.jpg",
      "/images/11/10-027-11.jpg",
    ]
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-16 max-w-[1400px] w-full mx-auto h-[400px] md:h-[500px] lg:h-[700px] rounded-[40px] overflow-hidden group shadow-xl bg-[#f5f5f7]">
      
      {/* Slides */}
      <div 
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div 
            key={slide.id} 
            className="w-full h-full flex-shrink-0 grid grid-cols-3 gap-2 md:gap-6 p-2 md:p-6"
          >
            {slide.images.map((src, idx) => (
              <div key={idx} className="relative w-full h-full rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm">
                <Image 
                  src={src} 
                  alt="Faith Case"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority={slide.id === 1}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-[#1d1d1f] w-6" : "bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
