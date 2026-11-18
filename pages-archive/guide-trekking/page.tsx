'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { TREKKING_ROUTES } from '@/data/mockData';
import { Mountain } from 'lucide-react';

export default function GuideTrekkingPage() {
  const { openBooking } = useTheme();
  const [selectedTrekLocation, setSelectedTrekLocation] = useState<string>('all');

  const filteredTreks = TREKKING_ROUTES.filter((trek) => {
    if (selectedTrekLocation === 'all') return true;
    return trek.id === selectedTrekLocation;
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section (Matches Layout 3 in user reference) */}
      <section className="relative min-h-[55vh] lg:min-h-[65vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
          alt="Trekking & Guide Service Kerala"
          fill
          priority
          className="object-cover object-center scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-3 text-white">
              <h1 className="text-4xl sm:text-6xl font-light tracking-tight leading-tight">
                Trekking & <br />
                <span className="font-normal text-emerald-400">Guide Service</span>
              </h1>
              <p className="text-slate-200 text-sm sm:text-base max-w-lg font-light leading-relaxed">
                Discover hidden trails with expert local guides.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openBooking('trekking', 'Meeshappulimala Summit Trek')}
                  className="px-7 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-normal text-xs tracking-wide shadow-md transition-all hover:scale-105"
                >
                  Explore Trails &rarr;
                </button>
              </div>
            </div>

            {/* Right White Dropdown Card (Matches Layout 3 in reference) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 text-slate-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-emerald-800" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                    Location Drop Down
                  </h3>
                </div>
                <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  Summits
                </span>
              </div>

              {/* Native Select Dropdown */}
              <select
                value={selectedTrekLocation}
                onChange={(e) => setSelectedTrekLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 cursor-pointer mb-3"
              >
                <option value="all">⭐ View All Trekking Destinations</option>
                <option value="tk-01">Munnar (Meeshappulimala 2,640m Summit)</option>
                <option value="tk-02">Kolukkumalai (Cloud Walk & Organic Tea)</option>
                <option value="tk-03">Wayanad (Chembra Peak Heart Lake)</option>
                <option value="tk-04">Idukki (Anamudi Shola Rainforest)</option>
              </select>

              {/* Location options matching Layout 3 */}
              <div className="space-y-1.5 text-xs">
                {[
                  { name: 'Munnar Trekking', sub: 'Meeshappulimala Summit', id: 'tk-01' },
                  { name: 'Wayanad Trekking', sub: 'Chembra Heart Lake', id: 'tk-03' },
                  { name: 'Idukki Trekking', sub: 'Anamudi Shola Rainforest', id: 'tk-04' },
                  { name: 'Kolukkumalai Cloud Walk', sub: 'High Organic Tea Trail', id: 'tk-02' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedTrekLocation(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors ${
                      selectedTrekLocation === item.id
                        ? 'bg-emerald-800 text-white font-medium'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className={`text-[10px] ${selectedTrekLocation === item.id ? 'text-emerald-200' : 'text-slate-400'}`}>
                        {item.sub}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Popular Trekking Destinations Grid (Matches Image 5 Aesthetic) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900">
            Popular Trekking Destinations
          </h2>

          {selectedTrekLocation !== 'all' && (
            <button
              onClick={() => setSelectedTrekLocation('all')}
              className="text-xs font-normal text-emerald-800 hover:underline"
            >
              Show All Trails
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredTreks.map((trek) => (
            <div
              key={trek.id}
              onClick={() => openBooking('trekking', trek.title)}
              className="cursor-pointer group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src={trek.image}
                  alt={trek.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Clean Centered Trail Name */}
              <h3 className="mt-3 text-base sm:text-lg font-medium text-emerald-950 text-center tracking-tight group-hover:text-emerald-700 transition-colors">
                {trek.title.split(' ')[0]} {trek.title.split(' ')[1]}
              </h3>
              <p className="text-xs text-slate-500 text-center mt-0.5">
                {trek.altitude} • {trek.difficulty}
              </p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
