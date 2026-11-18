'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { JEEP_SAFARI_LOCATIONS } from '@/data/mockData';
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react';

export default function JeepSafariPage() {
  const { openBooking } = useTheme();
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const scrollToRoutes = () => {
    const el = document.getElementById('jeep-routes-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredLocations = JEEP_SAFARI_LOCATIONS.filter((loc) => {
    if (selectedLocation === 'all') return true;
    return loc.slug === selectedLocation || loc.name.toLowerCase().includes(selectedLocation.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section with Scratch / Torn Paper Bottom Divider */}
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden font-montserrat">
        
        {/* Background Image: 4x4 Jeep in Munnar Hills (Exact User Uploaded Image) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jeep-hero-kerala.jpg"
            alt="Jeep Safari in Kerala - Jack Rider"
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
          {/* Subtle gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 md:pt-28 pb-24 md:pb-32">
          <div className="max-w-2xl text-white space-y-2">
            
            <p className="text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-white/95">
              J E E P &nbsp; S A F A R I
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight text-white tracking-tight leading-none drop-shadow-sm">
              Jeep Safari <br />
              <span className="font-light">in Kerala</span>
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
              Rugged Trails • Misty Hills • Hidden Landscapes
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToRoutes}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0d8259] hover:bg-[#096a47] text-white font-normal text-xs sm:text-sm shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>Explore Jeep Safaris</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openBooking('jeep', 'Munnar 4x4 Jeep Safari')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/90 hover:border-white bg-black/20 hover:bg-black/40 text-white font-light text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Plan Your Trip</span>
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

      {/* 2. About Jeep Safari Section (Matches Mockup - Clean Cutout, No Border Box) */}
      <section className="w-full bg-white py-12 md:py-16 font-montserrat">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Mobile-Only Heading (Placed First before Photo - Matches User Mockup) */}
          <div className="md:hidden space-y-2 mb-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                JEEP SAFARI
              </span>
              <span className="w-12 h-0.5 bg-emerald-600/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight leading-tight">
              Off-Road Adventures in Kerala
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Typography & Action Button */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    JEEP SAFARI
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Off-Road Adventures in Kerala
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                Experience Kerala&apos;s wild beauty with our exciting jeep safaris. Drive through tea estates, forest trails, mountain viewpoints and untouched villages with our expert local drivers.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openBooking('jeep', 'Kerala 4x4 Off-Road Safari')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-800 text-emerald-900 hover:text-white font-normal text-xs sm:text-[13px] tracking-wide transition-all group"
                >
                  <span>Book Your Jeep Safari</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Desktop Right / Mobile Middle: 4x4 Jeep Safari Artwork Cutout */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center">
                <Image
                  src="/images/jeep-about-white.jpg"
                  alt="Off-Road Adventures in Kerala - Jack Rider"
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

      {/* 3. Popular Jeep Safari Routes Section (12 Locations + Filter Dropdown) */}
      <section id="jeep-routes-section" className="w-full bg-slate-50/60 py-14 md:py-20 font-montserrat border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center space-y-2 mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 text-emerald-800">
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
              <span className="text-xs font-normal tracking-wider uppercase">
                JEEP SAFARI LOCATIONS
              </span>
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight">
              Popular Jeep Safari Routes
            </h2>
          </div>

          {/* Location Dropdown Filter Bar (Matches Mockup) */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-800">
                <MapPin className="w-4 h-4" />
              </div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-normal text-slate-800 shadow-sm focus:outline-none focus:border-emerald-600 appearance-none cursor-pointer transition-colors"
              >
                <option value="all">Select Location (All 12 Routes)</option>
                <option value="anachaal">1. ANACHAAL</option>
                <option value="munnar">2. Munnar</option>
                <option value="maryoor">3. Maryoor</option>
                <option value="kolukkumalai">4. Kolukkumalai</option>
                <option value="meeshappulima">5. Meeshappulima</option>
                <option value="vagamon">6. Vagomon</option>
                <option value="chathurangappara">7. Chathurangappara</option>
                <option value="kanthalloor">8. Kanthalloor</option>
                <option value="marayoor">9. Marayoor</option>
                <option value="mamalakkandam">10. Mamalakkandam</option>
                <option value="nelliyampathy">11. Nelliyampathy</option>
                <option value="anakkulam">12. Anakkulam</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* 12 Location Cards Grid (Matches Mockup with Location Pill below each card) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredLocations.map((loc) => (
              <div
                key={loc.id}
                onClick={() => openBooking('jeep', `${loc.name} Safari`)}
                className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Pill at Bottom with Location Pin - Exact to Mockup */}
                <div className="p-3 sm:p-3.5 flex items-center gap-1.5 text-slate-800 group-hover:text-emerald-800 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-normal tracking-tight truncate">
                    {{
                      anachaal: 'Anachaal',
                      munnar: 'Munnar',
                      maryoor: 'Maryoor',
                      kolukkumalai: 'Kolukkumalai',
                      meeshappulimala: 'Meeshappulima',
                      vagamon: 'Vagomon',
                      chathurangappara: 'Chathurangappara',
                      kanthalloor: 'Kanthalloor',
                      'marayoor-dolmens': 'Marayoor',
                      mamalakkandam: 'Mamalakkandam',
                      nelliyampathy: 'Nelliyampathy',
                      anakkulam: 'Anakkulam'
                    }[loc.slug] || loc.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

