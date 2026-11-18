'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight, Plane, Play, Shield, Wind, Sparkles, Video } from 'lucide-react';

export default function DroneVideographyPage() {
  const { openBooking } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'landscape' | 'resort' | 'adventure'>('all');

  const scrollToGallery = () => {
    const el = document.getElementById('drone-gallery-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const droneShots = [
    {
      title: 'Soaring Over Anamudi & Misty Western Ghats',
      location: 'Munnar High Altitude Peaks',
      category: 'landscape',
      altitude: '120m AGL',
      image: '/images/drone-pilot-kerala.jpg',
      tag: 'Aerial Landscape'
    },
    {
      title: 'Top-Down Birds-Eye of Emerald Backwater Canals',
      location: 'Alleppey Lotus & Paddy Lagoons',
      category: 'landscape',
      altitude: '80m AGL',
      image: '/images/dest-alleppey.jpg',
      tag: 'Water Patterns'
    },
    {
      title: 'Scenic Tea Valley Curvature & High Pass Flyover',
      location: 'Munnar Tea Estates, Kerala',
      category: 'landscape',
      altitude: '90m AGL',
      image: '/images/travel-photography-tea-road.jpg',
      tag: 'Aerial Cinema'
    },
    {
      title: '4x4 Off-Road Jeep Ridge Chase Drone Footage',
      location: 'Kolukkumalai & Meeshappulimala High Passes',
      category: 'adventure',
      altitude: 'Dynamic Track',
      image: '/images/jeep-hero-kerala.jpg',
      tag: 'Dynamic Follow'
    },
    {
      title: 'River Rapids & Dense Rainforest Canopy Flight',
      location: 'Mamalakkandam Virgin Forest',
      category: 'adventure',
      altitude: 'FPV Canopy',
      image: '/images/jeep-mamalakkandam.jpg',
      tag: 'FPV Action'
    },
    {
      title: 'Luxury Heritage Resort & Cliffside Villas Fly-Through',
      location: 'Kovalam & Wayanad Private Estates',
      category: 'resort',
      altitude: '40m AGL',
      image: '/images/dest-kovalam.jpg',
      tag: 'Property Showcase'
    }
  ];

  const filteredShots = droneShots.filter(item => 
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section with Scratch / Torn Paper Bottom Divider */}
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden font-montserrat">
        
        {/* Background Image: High-Altitude Panoramic Sunrise */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kerala-hero-panoramic-2k.jpg"
            alt="Drone Videography & Aerial Cinematography in Kerala - Jack Rider"
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
              D R O N E &nbsp; C I N E M A T O G R A P H Y
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight text-white tracking-tight leading-none drop-shadow-sm">
              See the World <br />
              <span className="font-light">from a New Perspective</span>
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
              Aerial landscape videos, destination footage, and cinematic drone sweeps captured in 4K resolution by certified UAV pilots.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToGallery}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0d8259] hover:bg-[#096a47] text-white font-normal text-xs sm:text-sm shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>Watch Aerial Reel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openBooking('photography', 'Aerial Drone Shoot Request')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/90 hover:border-white bg-black/20 hover:bg-black/40 text-white font-light text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Request Drone Shoot</span>
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

      {/* 2. Spotlight Section: Drone & Camera on Rock in Tea Hills */}
      <section className="w-full bg-white py-12 md:py-16 font-montserrat">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Mobile-Only Heading (Placed First before Photo) */}
          <div className="md:hidden space-y-2 mb-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                AERIAL CINEMATOGRAPHY
              </span>
              <span className="w-12 h-0.5 bg-emerald-600/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight leading-tight">
              Sky-High Angles, Unmatched Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Typography & Highlights */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    AERIAL CINEMATOGRAPHY
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Sky-High Angles, <br />
                  <span className="font-light">Unmatched Scale</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                Gain perspectives impossible from ground level. Our certified drone operators execute smooth panoramic sweeps, dramatic top-down reveals, and high-speed follow tracks across mountains, beaches, waterfalls and luxury properties.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Plane className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    DGCA Compliant &amp; Licensed
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    4K 60fps HDR Stabilization
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Safe Multi-Sensor Navigation
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openBooking('photography', '4K Aerial Drone Shoot')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-800 text-emerald-900 hover:text-white font-normal text-xs sm:text-[13px] tracking-wide transition-all group"
                >
                  <span>Request Drone Shoot</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Desktop Right / Mobile Middle: 4K Drone & Camera Cutout */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center">
                <Image
                  src="/images/drone-about-white.jpg"
                  alt="4K Aerial Drone Cinematography Jack Rider"
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

      {/* 3. Drone Video Gallery Section */}
      <section id="drone-gallery-section" className="w-full bg-slate-50/60 py-14 md:py-20 font-montserrat border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center space-y-2 mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 text-emerald-800">
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
              <span className="text-xs font-normal tracking-wider uppercase">
                AERIAL PORTFOLIO
              </span>
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight">
              Drone Video Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light max-w-md mx-auto">
              Breathtaking bird-eye perspectives of Kerala&apos;s Western Ghats, backwater lagoons, and architectural retreats.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {[
              { id: 'all', label: 'All Aerial Footage' },
              { id: 'landscape', label: 'Landscapes & Peaks' },
              { id: 'resort', label: 'Resorts & Estates' },
              { id: 'adventure', label: 'Action & FPV' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 font-normal ${
                  selectedCategory === tab.id
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-emerald-800 hover:text-emerald-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShots.map((shot, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer">
                  <Image
                    src={shot.image}
                    alt={shot.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-13 h-13 rounded-full bg-white/90 group-hover:bg-white text-emerald-800 shadow-xl flex items-center justify-center pl-1 transition-transform group-hover:scale-110">
                      <Play className="w-6 h-6 fill-emerald-800" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-light">
                    {shot.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] px-2 py-0.5 rounded font-light flex items-center gap-1">
                    <Plane className="w-3 h-3" />
                    <span>{shot.altitude}</span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-normal text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {shot.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light mt-1">
                      {shot.location}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-light">
                      4K Aerial Footage
                    </span>
                    <button
                      onClick={() => openBooking('photography', `Drone Shoot Request - ${shot.title}`)}
                      className="text-xs text-emerald-800 hover:text-emerald-950 font-normal inline-flex items-center gap-1"
                    >
                      <span>Book Drone Pilot</span>
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
                alt="Drone Videography Jack Rider"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-black/70" />
            </div>

            <div className="relative z-10 px-6 sm:px-10 py-10 sm:py-14 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-extralight tracking-tight">
                  Elevate Your Story to the Sky
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 font-light">
                  Hire a licensed drone pilot for your resort, documentary, destination wedding, or off-road adventure.
                </p>
              </div>

              <button
                onClick={() => openBooking('photography', 'Drone Videography Package')}
                className="px-8 py-3 rounded-full bg-white hover:bg-emerald-50 text-emerald-950 font-normal text-xs sm:text-sm shadow-xl transition-all duration-300 hover:scale-[1.02] shrink-0"
              >
                Request Drone Shoot
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
