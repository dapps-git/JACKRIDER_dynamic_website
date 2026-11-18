'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const { openBooking } = useTheme();

  const scrollToDestinations = () => {
    const el = document.getElementById('destinations-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero relative w-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] flex items-center overflow-hidden font-montserrat">
      
      {/* Background Images with Maximum Clarity: Panoramic for Desktop, Portrait for Mobile */}
      <div className="absolute inset-0 z-0">
        
        {/* Desktop View: Wide Panoramic Sunset Landscape */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/kerala-hero-panoramic-2k.jpg"
            alt="Kerala Tea Plantation Panoramic - Jack Rider Tours & Travels"
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover object-[center_45%] scale-100"
          />
        </div>

        {/* Mobile View: High-Definition Portrait Sunset View (Exact User Upload - No Loss of Clarity) */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/images/kerala-hero-mobile.jpg"
            alt="Kerala Tea Hills Sunset Mobile - Jack Rider Tours & Travels"
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover object-center scale-100"
          />
        </div>

        {/* Minimal subtle gradient to ensure text readability without dimming image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Area - Exact Typography & Spacing from Mockup */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 md:pt-28 pb-24 md:pb-32">
        <div className="max-w-2xl text-white space-y-2">
          
          {/* Tag: EXPLORE */}
          <p className="text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-white/95">
            E X P L O R E
          </p>

          {/* Heading: Kerala */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-white tracking-tight leading-none drop-shadow-sm">
            Kerala
          </h1>

          {/* Subtitle: with Jack Rider */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide drop-shadow-sm">
              with Jack Rider
            </h2>

            {/* Yellow accent curve underneath "with Jack Rider" - Exact match to Mockup */}
            <div className="pt-0.5">
              <svg
                className="w-24 sm:w-28 h-3 text-yellow-400"
                viewBox="0 0 120 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8.5C35 3.5 85 3 117 8.5"
                  stroke="#FACC15"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Bullet Subtitle Line */}
          <p className="text-xs sm:text-sm text-white/95 font-light tracking-wide pt-2 drop-shadow">
            Backwaters • Hills • Wildlife • Culture • Adventure
          </p>

          {/* Two Buttons: [ Explore Destinations → ] and [ Plan Your Trip ] */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToDestinations}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c5a3e] hover:bg-[#08432d] text-white font-normal text-xs sm:text-sm shadow-lg transition-all duration-300 hover:scale-[1.02] group"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => openBooking('package', 'Kerala Custom Tour')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/90 hover:border-white bg-black/20 hover:bg-black/40 text-white font-light text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Plan Your Trip</span>
            </button>
          </div>

        </div>
      </div>

      {/* The Scratch / Torn Paper Divider Overlay - Exact Match to Mockup */}
      <div className="absolute -bottom-1 left-0 right-0 w-full z-20 pointer-events-none leading-none select-none overflow-hidden">
        <Image
          src="/images/hero-scratch-divider-hd.png"
          alt="Torn Scratch Border"
          width={2560}
          height={280}
          className="w-full h-16 sm:h-24 md:h-32 object-fill object-bottom block"
          priority
        />
      </div>

    </section>
  );
}