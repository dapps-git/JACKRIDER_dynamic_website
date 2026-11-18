'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { PHOTOGRAPHY_PACKAGES } from '@/data/mockData';
import { Camera } from 'lucide-react';

export default function PhotographyPage() {
  const { openBooking } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Travel' | 'Events'>('all');

  const filteredPackages = PHOTOGRAPHY_PACKAGES.filter((pkg) => {
    if (selectedCategory === 'all') return true;
    return pkg.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section (Matches Layout 4 in user reference) */}
      <section className="relative min-h-[55vh] lg:min-h-[65vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80"
          alt="Capture Your Moments Kerala Photography"
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
                Capture Your <br />
                <span className="font-normal text-emerald-400">Moments</span>
              </h1>
              <p className="text-slate-200 text-sm sm:text-base max-w-lg font-light leading-relaxed">
                Professional Photography, Videography & Drone Services.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openBooking('photography', 'Cinematic 4K Drone Kerala')}
                  className="px-7 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-normal text-xs tracking-wide shadow-md transition-all hover:scale-105"
                >
                  Book Now &rarr;
                </button>
              </div>
            </div>

            {/* Right White Dropdown Card (Matches Layout 4 in reference) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 text-slate-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-emerald-800" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                    Category Drop Down
                  </h3>
                </div>
                <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  Services
                </span>
              </div>

              {/* Native Select Dropdown */}
              <select
                value={selectedCategory}
                onChange={(e: any) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 cursor-pointer mb-3"
              >
                <option value="all">⭐ View Both Travel & Events</option>
                <option value="Travel">1. Travel Photography & Reels</option>
                <option value="Events">2. Events & Weddings</option>
              </select>

              {/* Options list matching Layout 4 */}
              <div className="space-y-1.5 text-xs">
                {[
                  { name: '1. Photography', sub: 'Travel & Events candid photos', cat: 'all' },
                  { name: '2. Travel Reels', sub: 'Solo, couple & family 4K reels', cat: 'Travel' },
                  { name: '3. Events & Weddings', sub: 'Destination wedding & corporate coverage', cat: 'Events' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(item.cat as any)}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors ${
                      selectedCategory === item.cat
                        ? 'bg-emerald-800 text-white font-medium'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className={`text-[10px] ${selectedCategory === item.cat ? 'text-emerald-200' : 'text-slate-400'}`}>
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

      {/* 2. Featured Photography Work Grid - Clean Image + Name Underneath (Matches Image 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900">
            Featured Work
          </h2>

          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs font-normal text-emerald-800 hover:underline"
            >
              Show All Work
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => openBooking('photography', pkg.title)}
              className="cursor-pointer group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Clean Centered Title */}
              <h3 className="mt-3 text-sm sm:text-base font-medium text-emerald-950 text-center tracking-tight group-hover:text-emerald-700 transition-colors">
                {pkg.title}
              </h3>
              <p className="text-xs text-slate-500 text-center mt-0.5">
                {pkg.category} • {pkg.badge}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
