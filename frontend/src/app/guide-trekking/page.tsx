'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight, MapPin, ChevronDown, Compass, Mountain, ShieldCheck } from 'lucide-react';

export default function GuideTrekkingPage() {
  const { openBooking } = useTheme();
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const scrollToRoutes = () => {
    const el = document.getElementById('trekking-routes-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trekkingDestinations = [
    {
      id: 'anamudi',
      name: 'Anamudi',
      district: 'Munnar, Idukki',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      difficulty: 'Moderate'
    },
    {
      id: 'meeshappulimala',
      name: 'Meeshappulimala',
      district: 'Rhodo Valley, Idukki',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      difficulty: 'Challenging'
    },
    {
      id: 'kolukkumalai',
      name: 'Kolukkumalai',
      district: 'High Ranges, Idukki',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      difficulty: 'Moderate'
    },
    {
      id: 'vagamon',
      name: 'Vagamon',
      district: 'Pine Valley & Meadows',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
      difficulty: 'Easy to Moderate'
    },
    {
      id: 'chembra-peak',
      name: 'Chembra Peak',
      district: 'Heart Lake, Wayanad',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      difficulty: 'Moderate'
    },
    {
      id: 'nelliyampathy',
      name: 'Nelliyampathy',
      district: 'Seethargundu Ridge, Palakkad',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      difficulty: 'Moderate'
    },
    {
      id: 'mamalakkandam',
      name: 'Mamalakkandam',
      district: 'Virgin Forest River Trail',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
      difficulty: 'Adventure River'
    },
    {
      id: 'anakkulam',
      name: 'Anakkulam',
      district: 'Elephant Waterhole Trail',
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80',
      difficulty: 'Easy Nature Walk'
    }
  ];

  const filteredList = trekkingDestinations.filter((item) => {
    if (selectedLocation === 'all') return true;
    return item.id === selectedLocation || item.name.toLowerCase().includes(selectedLocation.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section with Scratch / Torn Paper Bottom Divider */}
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden font-montserrat">
        
        {/* Background Image: Hikers at sunrise mountain summit */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1920&q=80"
            alt="Guided Treks in Kerala - Jack Rider"
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 md:pt-28 pb-24 md:pb-32">
          <div className="max-w-2xl text-white space-y-2">
            
            <p className="text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-white/95">
              G U I D E &nbsp; S E R V I C E &nbsp; &amp; &nbsp; T R E K K I N G
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight text-white tracking-tight leading-none drop-shadow-sm">
              Guided Treks <br />
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
              Explore scenic trails, hidden hills and nature routes with experienced local guides.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToRoutes}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0d8259] hover:bg-[#096a47] text-white font-normal text-xs sm:text-sm shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>Explore Treks</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openBooking('trekking', 'Kerala Guided Trek')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/90 hover:border-white bg-black/20 hover:bg-black/40 text-white font-light text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Plan Your Trek</span>
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

      {/* 2. About Guide & Trekking Section (Matches Mockup) */}
      <section className="w-full bg-white py-12 md:py-16 font-montserrat">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Mobile-Only Heading (Placed First before Photo) */}
          <div className="md:hidden space-y-2 mb-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                GUIDE &amp; TREKKING
              </span>
              <span className="w-12 h-0.5 bg-emerald-600/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight leading-tight">
              Experience Nature, Safely with Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Typography & 3 Feature Badges */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    GUIDE &amp; TREKKING
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Experience Nature, Safely with Experts
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                Discover Kerala&apos;s stunning trekking trails with the support of our experienced local guides. From serene hill walks to challenging treks, we ensure a safe, informative and memorable outdoor experience.
              </p>

              {/* 3 Badges (Experienced Local Guides | Scenic Trekking Routes | Safe & Well-Planned) */}
              <div className="pt-2 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                
                <div className="flex flex-col items-center text-center space-y-1.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Experienced <br /> Local Guides
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Scenic <br /> Trails
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Safe &amp; <br /> Verified
                  </span>
                </div>

              </div>

            </div>

            {/* Desktop Right / Mobile Middle: Scenic Trekking Nature Artwork */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center group">
                <Image
                  src="/images/guide-about-white.jpg"
                  alt="Experience Nature Safely with Experts - Jack Rider"
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

      {/* 3. Popular Trekking Destinations Section (8 Locations + Filter Dropdown) */}
      <section id="trekking-routes-section" className="w-full bg-slate-50/60 py-14 md:py-20 font-montserrat border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center space-y-2 mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 text-emerald-800">
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
              <span className="text-xs font-normal tracking-wider uppercase">
                TREKKING LOCATIONS
              </span>
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight">
              Popular Trekking Destinations
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
                <option value="all">Select Location (All Destinations)</option>
                <option value="anamudi">1. Anamudi</option>
                <option value="meeshappulimala">2. Meeshappulimala</option>
                <option value="kolukkumalai">3. Kolukkumalai</option>
                <option value="vagamon">4. Vagamon</option>
                <option value="chembra-peak">5. Chembra Peak</option>
                <option value="nelliyampathy">6. Nelliyampathy</option>
                <option value="mamalakkandam">7. Mamalakkandam</option>
                <option value="anakkulam">8. Anakkulam</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* 8 Location Cards Grid (Matches Mockup: 4 cols on desktop, 2 on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredList.map((loc) => (
              <div
                key={loc.id}
                onClick={() => openBooking('trekking', `${loc.name} Guided Trek`)}
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

                {/* Pill at Bottom with Location Pin */}
                <div className="p-3 sm:p-3.5 flex items-center gap-1.5 text-slate-800 group-hover:text-emerald-800 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-normal tracking-tight truncate">
                    {loc.name}
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

