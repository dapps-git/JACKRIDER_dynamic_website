'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight, Heart, Calendar, Sparkles, MapPin, Award } from 'lucide-react';

export default function EventPhotographyPage() {
  const { openBooking } = useTheme();
  const [selectedType, setSelectedType] = useState<'all' | 'wedding' | 'celebration' | 'corporate'>('all');

  const scrollToGallery = () => {
    const el = document.getElementById('event-gallery-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const eventGalleries = [
    {
      title: 'Romantic Destination Weddings & Pheras',
      subtitle: 'Kerala Backwater Resorts & Royal Palaces',
      type: 'wedding',
      image: '/images/event-photography-wedding.jpg',
      tag: 'Weddings'
    },
    {
      title: 'Outdoor Garden Sunset Engagements',
      subtitle: 'Fairy Lights, Floral Arches & Golden Hour Glow',
      type: 'wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
      tag: 'Engagements'
    },
    {
      title: 'Family Reunions & Milestone Birthdays',
      subtitle: 'Unfiltered Smiles, Warm Hugs & Laughter',
      type: 'celebration',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
      tag: 'Family Gatherings'
    },
    {
      title: 'Cultural Festivals & Traditional Ceremonies',
      subtitle: 'Vibrant Rituals, Chenda Melam & Colors',
      type: 'celebration',
      image: '/images/dest-thrissur.jpg',
      tag: 'Cultural Ceremonies'
    },
    {
      title: 'Corporate Galas, Summits & Leadership Retreats',
      subtitle: 'Keynotes, Award Nights & Team Dinners',
      type: 'corporate',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
      tag: 'Corporate Events'
    },
    {
      title: 'Beachside Private Anniversaries & Dinners',
      subtitle: 'Candlelight on Kovalam & Varkala Cliffs',
      type: 'celebration',
      image: '/images/dest-kovalam.jpg',
      tag: 'Anniversaries'
    }
  ];

  const filteredEvents = eventGalleries.filter(item => 
    selectedType === 'all' ? true : item.type === selectedType
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section with Scratch / Torn Paper Bottom Divider */}
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden font-montserrat">
        
        {/* Background Image: Dreamy Sunset Wedding / Celebration */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
            alt="Event Photography in Kerala - Jack Rider"
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 md:pt-28 pb-24 md:pb-32">
          <div className="max-w-2xl text-white space-y-2">
            
            <p className="text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-white/95">
              E V E N T &nbsp; P H O T O G R A P H Y
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight text-white tracking-tight leading-none drop-shadow-sm">
              Every Moment Deserves <br />
              <span className="font-light">to Be Captured</span>
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
              Weddings, celebrations, family gatherings, and special events preserved with timeless grace and cinematic lighting.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToGallery}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0d8259] hover:bg-[#096a47] text-white font-normal text-xs sm:text-sm shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>View Event Gallery</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openBooking('photography', 'Event Photography Booking')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/90 hover:border-white bg-black/20 hover:bg-black/40 text-white font-light text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Book Event Photography</span>
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

      {/* 2. Spotlight Section: Wedding / Event Photographer with Natural Fading Edges */}
      <section className="w-full bg-white py-12 md:py-16 font-montserrat">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Mobile-Only Heading (Placed First before Photo) */}
          <div className="md:hidden space-y-2 mb-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                UNFORGETTABLE OCCASIONS
              </span>
              <span className="w-12 h-0.5 bg-emerald-600/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight leading-tight">
              Emotions Captured, Never Staged
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Typography & Highlights */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    UNFORGETTABLE OCCASIONS
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Emotions Captured, <br />
                  <span className="font-light">Never Staged</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                We believe the most memorable photographs happen in between poses: the spontaneous laughter of cousins, the proud tear of a parent, the golden evening glow over vows. Our experienced event crew blends into the celebration, documenting your milestone seamlessly.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Candid &amp; Emotion-Driven
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Dual Shooter Coverage
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    High-End Art Album
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openBooking('photography', 'Wedding & Event Photography')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-800 text-emerald-900 hover:text-white font-normal text-xs sm:text-[13px] tracking-wide transition-all group"
                >
                  <span>Book Event Photography</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Desktop Right / Mobile Middle: Wedding Event Photographer Cutout */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center">
                <Image
                  src="/images/event-photography-wedding.jpg"
                  alt="Professional Event Photographer at Sunset Wedding - Jack Rider"
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

      {/* 3. Event Photo Gallery Section */}
      <section id="event-gallery-section" className="w-full bg-slate-50/60 py-14 md:py-20 font-montserrat border-t border-slate-100">
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
              Event Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light max-w-md mx-auto">
              From intimate ceremonies to grand celebrations, browse our portfolio of cherished moments.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {[
              { id: 'all', label: 'All Celebrations' },
              { id: 'wedding', label: 'Weddings & Engagements' },
              { id: 'celebration', label: 'Family & Milestones' },
              { id: 'corporate', label: 'Corporate Events' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 font-normal ${
                  selectedType === tab.id
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
            {filteredEvents.map((item, idx) => (
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
                    <p className="text-xs text-slate-500 font-light mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-light">
                      Event Coverage
                    </span>
                    <button
                      onClick={() => openBooking('photography', `Event Shoot Inquiry - ${item.title}`)}
                      className="text-xs text-emerald-800 hover:text-emerald-950 font-normal inline-flex items-center gap-1"
                    >
                      <span>Inquire Date</span>
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
                alt="Event Photography Jack Rider"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-black/70" />
            </div>

            <div className="relative z-10 px-6 sm:px-10 py-10 sm:py-14 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-extralight tracking-tight">
                  Planning a Wedding or Celebration?
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 font-light">
                  Reserve our photo and cinema crew to capture every detail of your special day with grace, warmth and elegance.
                </p>
              </div>

              <button
                onClick={() => openBooking('photography', 'Wedding & Event Photography Package')}
                className="px-8 py-3 rounded-full bg-white hover:bg-emerald-50 text-emerald-950 font-normal text-xs sm:text-sm shadow-xl transition-all duration-300 hover:scale-[1.02] shrink-0"
              >
                Book Event Photography
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
