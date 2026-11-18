'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight, Camera, Sparkles, MapPin, Eye, Compass } from 'lucide-react';

export default function TravelPhotographyPage() {
  const { openBooking } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'kerala' | 'india' | 'international'>('all');

  const scrollToGallery = () => {
    const el = document.getElementById('gallery-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryItems = [
    {
      title: 'Misty Tea Hills & Winding Mountain Road',
      location: 'Munnar & Mattupetty, Kerala',
      category: 'kerala',
      image: '/images/travel-photography-tea-road.jpg',
      tag: 'Landscape'
    },
    {
      title: 'Backwaters Golden Hour Houseboat',
      location: 'Alleppey Backwaters, Kerala',
      category: 'kerala',
      image: '/images/dest-alleppey.jpg',
      tag: 'Heritage & Water'
    },
    {
      title: 'Wayanad Cloud Forest & Waterfalls',
      location: 'Meenmutty & Chembra, Kerala',
      category: 'kerala',
      image: '/images/dest-wayanad.jpg',
      tag: 'Wild Nature'
    },
    {
      title: 'Kovalam Lighthouse Ocean Sunset',
      location: 'Kovalam Beach, Kerala',
      category: 'kerala',
      image: '/images/dest-kovalam.jpg',
      tag: 'Coastal Sunset'
    },
    {
      title: 'Thrissur Heritage & Cultural Temple Fest',
      location: 'Thrissur Pooram Heritage, Kerala',
      category: 'kerala',
      image: '/images/dest-thrissur.jpg',
      tag: 'Cultural Stories'
    },
    {
      title: 'Majestic Taj Mahal Sunrise Glow',
      location: 'Agra, Uttar Pradesh',
      category: 'india',
      image: '/images/bg-india-tajmahal.jpg',
      tag: 'Iconic Heritage'
    },
    {
      title: 'Himalayan High Altitude Passes & Valleys',
      location: 'Ladakh & Spiti Valley, India',
      category: 'india',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      tag: 'Mountain Peaks'
    },
    {
      title: 'Golden Sand Dunes & Royal Palaces',
      location: 'Jaisalmer & Udaipur, Rajasthan',
      category: 'india',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
      tag: 'Royal Heritage'
    },
    {
      title: 'Dubai Futuristic Skyline & Desert Oasis',
      location: 'Dubai & Arabian Desert, UAE',
      category: 'international',
      image: '/images/bg-international-dubai.jpg',
      tag: 'Modern Architecture'
    },
    {
      title: 'Tropical Emerald Islands & Reefs',
      location: 'Bali & Nusa Penida, Indonesia',
      category: 'international',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      tag: 'Island Escapes'
    },
    {
      title: 'Alpine Glacial Lakes & Pine Horizons',
      location: 'Swiss Alps & Dolomites',
      category: 'international',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
      tag: 'Glacial Horizons'
    },
    {
      title: 'Overwater Villas & Cyan Lagoons',
      location: 'South Ari Atoll, Maldives',
      category: 'international',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
      tag: 'Cyan Atolls'
    }
  ];

  const filteredGallery = galleryItems.filter(item => 
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section with Scratch / Torn Paper Bottom Divider */}
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden font-montserrat">
        
        {/* Background Image: High-Resolution Sunrise Panoramic View */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kerala-hero-panoramic-2k.jpg"
            alt="Travel Photography - Jack Rider"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 md:pt-28 pb-24 md:pb-32">
          <div className="max-w-2xl text-white space-y-2">
            
            <p className="text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-white/95">
              P H O T O G R A P H Y &nbsp; S E R V I C E S
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight text-white tracking-tight leading-none drop-shadow-sm">
              Discover the World <br />
              <span className="font-light">Through Our Lens</span>
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
              Capturing destinations, landscapes, wildlife, and authentic travel moments across Kerala, India, and the globe.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToGallery}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0d8259] hover:bg-[#096a47] text-white font-normal text-xs sm:text-sm shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>View Gallery</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openBooking('photography', 'Travel Photography Package')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/90 hover:border-white bg-black/20 hover:bg-black/40 text-white font-light text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Book Travel Photography</span>
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

      {/* 2. Spotlight Section (Natural Fading Edges Cutout) */}
      <section className="w-full bg-white py-12 md:py-16 font-montserrat">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Mobile-Only Heading (Placed First before Photo) */}
          <div className="md:hidden space-y-2 mb-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                DESTINATION STORYTELLING
              </span>
              <span className="w-12 h-0.5 bg-emerald-600/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight leading-tight">
              Authentic Moments, Enduring Memories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Typography & Highlights */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    DESTINATION STORYTELLING
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Authentic Moments, <br />
                  <span className="font-light">Enduring Memories</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                Whether you are trekking high into the Western Ghats, sailing on tranquil backwaters, or venturing to distant continents, our travel photographers accompany you to capture raw, candid and stunning photographs without interrupting your journey.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    High-Res RAW &amp; Color Graded
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Personalized Route Coverage
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Prompt Delivery Within 48h
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openBooking('photography', 'Travel Photography Session')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-800 text-emerald-900 hover:text-white font-normal text-xs sm:text-[13px] tracking-wide transition-all group"
                >
                  <span>Book a Session</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Desktop Right / Mobile Middle: Travel Photographer Cutout */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center">
                <Image
                  src="/images/photo-about-exact.jpg"
                  alt="Professional Travel Photographer Jack Rider"
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

      {/* 3. Destination Photos Gallery with Categories (Kerala · India · International) */}
      <section id="gallery-section" className="w-full bg-slate-50/60 py-14 md:py-20 font-montserrat border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center space-y-2 mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 text-emerald-800">
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
              <span className="text-xs font-normal tracking-wider uppercase">
                PORTFOLIO
              </span>
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight">
              Destination Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light max-w-md mx-auto">
              Explore our captured journeys across backwaters, mist-cloaked peaks, royal palaces and international horizons.
            </p>
          </div>

          {/* Category Tabs: All · Kerala · India · International */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'kerala', label: 'Kerala' },
              { id: 'india', label: 'India' },
              { id: 'international', label: 'International' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 font-normal ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-emerald-800 hover:text-emerald-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
              >
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-light">
                    {item.tag}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-normal text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-light mt-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-light">
                      Jack Rider Lens
                    </span>
                    <button
                      onClick={() => openBooking('photography', `Travel Photo Shoot - ${item.location}`)}
                      className="text-xs text-emerald-800 hover:text-emerald-950 font-normal inline-flex items-center gap-1"
                    >
                      <span>Book Shoot</span>
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
                alt="Kerala Landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-black/70" />
            </div>

            <div className="relative z-10 px-6 sm:px-10 py-10 sm:py-14 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-extralight tracking-tight">
                  Ready to Document Your Journey?
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 font-light">
                  Reserve a dedicated travel photographer for your family vacation, couple getaway or expedition across India and beyond.
                </p>
              </div>

              <button
                onClick={() => openBooking('photography', 'Custom Travel Photography Package')}
                className="px-8 py-3 rounded-full bg-white hover:bg-emerald-50 text-emerald-950 font-normal text-xs sm:text-sm shadow-xl transition-all duration-300 hover:scale-[1.02] shrink-0"
              >
                Book Travel Photography
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
