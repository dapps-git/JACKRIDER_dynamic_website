'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight, Film, Play, Sparkles, Video, Volume2 } from 'lucide-react';

export default function TravelVideographyPage() {
  const { openBooking } = useTheme();
  const [selectedFormat, setSelectedFormat] = useState<'all' | 'film' | 'reel' | 'highlights'>('all');

  const scrollToGallery = () => {
    const el = document.getElementById('video-gallery-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const videoFilms = [
    {
      title: 'Misty Mountains & Tea Horizon (4K Cinematic Film)',
      subtitle: '4-Minute Cinematic Journey through Munnar High Ranges',
      duration: '4:15 min',
      format: 'film',
      image: '/images/dest-munnar.jpg',
      tag: '4K Travel Film'
    },
    {
      title: 'Golden Backwaters Houseboat Odyssey',
      subtitle: 'Gentle ripples, coconut groves and sunset backwater serenity',
      duration: '3:30 min',
      format: 'film',
      image: '/images/dest-alleppey.jpg',
      tag: 'Cinematic Travel'
    },
    {
      title: 'Wild Ghats Trek & Waterfalls Reel',
      subtitle: 'Fast-paced rhythmic reel optimized for 9:16 Instagram & TikTok',
      duration: '0:45 sec',
      format: 'reel',
      image: '/images/dest-wayanad.jpg',
      tag: 'Social Reel'
    },
    {
      title: 'Kerala Off-Road 4x4 Jeep Safari Highlights',
      subtitle: 'Adrenaline mud drifts, hill climbs & raw engine sound',
      duration: '1:10 min',
      format: 'highlights',
      image: '/images/jeep-about-scenic.jpg',
      tag: 'Action Reel'
    },
    {
      title: 'Dubai Desert Safari & Neon Skyline Film',
      subtitle: 'Red dune bashing, luxury yacht cruise and Burj Khalifa light show',
      duration: '5:00 min',
      format: 'film',
      image: '/images/bg-international-dubai.jpg',
      tag: 'International Film'
    },
    {
      title: 'Royal Rajasthan Heritage & Palace Teaser',
      subtitle: 'Folk dancers, ancient fort walls and camel caravan at sunset',
      duration: '1:45 min',
      format: 'highlights',
      image: '/images/bg-india-tajmahal.jpg',
      tag: 'Teaser Highlight'
    }
  ];

  const filteredFilms = videoFilms.filter(item => 
    selectedFormat === 'all' ? true : item.format === selectedFormat
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section with Scratch / Torn Paper Bottom Divider */}
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden font-montserrat">
        
        {/* Background Image: Panoramic Sunset Lake & Hills */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kerala-hero-panoramic-2k.jpg"
            alt="Travel Videography in Kerala - Jack Rider"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 md:pt-28 pb-24 md:pb-32">
          <div className="max-w-2xl text-white space-y-2">
            
            <p className="text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-white/95">
              T R A V E L &nbsp; V I D E O G R A P H Y
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight text-white tracking-tight leading-none drop-shadow-sm">
              Your Journey. <br />
              <span className="font-light">Our Cinematic Story.</span>
            </h1>

            {/* Yellow accent curve underneath title */}
            <div className="pt-1">
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

            <p className="text-xs sm:text-sm text-white/95 font-light tracking-wide pt-2 drop-shadow">
              Travel films, destination videos, reels and cinematic highlights crafted with movie-grade color grading and immersive sound design.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToGallery}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0d8259] hover:bg-[#096a47] text-white font-normal text-xs sm:text-sm shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>Watch Travel Films</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openBooking('photography', 'Travel Videography Package')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/90 hover:border-white bg-black/20 hover:bg-black/40 text-white font-light text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Book Videography</span>
              </button>
            </div>

          </div>
        </div>

        {/* Scratch / Torn Paper Divider at Base */}
        <div className="absolute -bottom-1 left-0 right-0 w-full z-20 pointer-events-none select-none overflow-hidden leading-none">
          <Image
            src="/images/hero-scratch-divider-hd.png"
            alt="Torn edge divider"
            width={2400}
            height={80}
            className="w-full h-10 sm:h-14 md:h-20 lg:h-24 object-fill object-bottom brightness-100"
            priority
          />
        </div>

      </section>

      {/* 2. Spotlight Section: Cinematic Gear & Storytelling */}
      <section className="w-full bg-white py-12 md:py-16 font-montserrat">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Mobile-Only Heading (Placed First before Photo) */}
          <div className="md:hidden space-y-2 mb-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                CINEMATIC PRODUCTION
              </span>
              <span className="w-12 h-0.5 bg-emerald-600/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight leading-tight">
              Turn Your Vacation Into a Motion Picture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Typography & Highlights */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    CINEMATIC PRODUCTION
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Turn Your Vacation <br />
                  <span className="font-light">Into a Motion Picture</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                We produce high-definition travel documentaries, dynamic short reels and highlight films for travelers, honeymooners and adventurers who want to relive their holiday like a feature film.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Film className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    4K 10-Bit Cinematic Log
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Volume2 className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Custom Foley &amp; Soundtrack
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Vertical Reels &amp; 16:9 Cuts
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openBooking('photography', 'Travel Film Videography')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-800 text-emerald-900 hover:text-white font-normal text-xs sm:text-[13px] tracking-wide transition-all group"
                >
                  <span>Book Videography</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Desktop Right / Mobile Middle: Camera & Drone on Rock in Tea Hills Cutout */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center">
                <Image
                  src="/images/photo-gear-drone-camera.png"
                  alt="Cinema Grade Travel Video Equipment - Jack Rider"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain object-center scale-105 sm:scale-110 md:scale-115 hover:scale-[1.18] transition-transform duration-500"
                  priority
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Video Showcase Gallery */}
      <section id="video-gallery-section" className="w-full bg-slate-50/60 py-14 md:py-20 font-montserrat border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center space-y-2 mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 text-emerald-800">
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
              <span className="text-xs font-normal tracking-wider uppercase">
                SHOWREEL
              </span>
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight">
              Video Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light max-w-md mx-auto">
              Sample cuts and highlight films created for our travelers across South India and international destinations.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {[
              { id: 'all', label: 'All Films' },
              { id: 'film', label: 'Cinematic Films (16:9)' },
              { id: 'reel', label: 'Social Media Reels (9:16)' },
              { id: 'highlights', label: 'Teasers & Highlights' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedFormat(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 font-normal ${
                  selectedFormat === tab.id
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-emerald-800 hover:text-emerald-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFilms.map((film, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
              >
                {/* Video Thumbnail with Play Button Overlay */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer">
                  <Image
                    src={film.image}
                    alt={film.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="w-13 h-13 rounded-full bg-white/90 group-hover:bg-white text-emerald-800 shadow-xl flex items-center justify-center pl-1 transition-transform group-hover:scale-110">
                      <Play className="w-6 h-6 fill-emerald-800" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-light">
                    {film.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] px-2 py-0.5 rounded font-light">
                    {film.duration}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-normal text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {film.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light mt-1">
                      {film.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-light">
                      4K Ultra-HD
                    </span>
                    <button
                      onClick={() => openBooking('photography', `Travel Film Request - ${film.title}`)}
                      className="text-xs text-emerald-800 hover:text-emerald-950 font-normal inline-flex items-center gap-1"
                    >
                      <span>Request Shoot</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-14 sm:mt-16 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/kerala-tea-plantation.jpg"
                alt="Travel Videography Jack Rider"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-black/70" />
            </div>

            <div className="relative z-10 px-6 sm:px-10 py-10 sm:py-14 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-extralight tracking-tight">
                  Want Your Own Travel Film?
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 font-light">
                  Hire our videographer to travel alongside your trip and craft custom social media reels and 4K cinema films of your adventure.
                </p>
              </div>

              <button
                onClick={() => openBooking('photography', 'Cinematic Videography Shoot')}
                className="px-8 py-3 rounded-full bg-white hover:bg-emerald-50 text-emerald-950 font-normal text-xs sm:text-sm shadow-xl transition-all duration-300 hover:scale-[1.02] shrink-0"
              >
                Book Videography
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
