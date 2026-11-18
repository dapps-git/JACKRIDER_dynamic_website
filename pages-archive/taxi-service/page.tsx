'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { TAXI_FLEET } from '@/data/mockData';
import { Car } from 'lucide-react';

export default function TaxiServicePage() {
  const { openBooking } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFleet = TAXI_FLEET.filter((vehicle) => {
    if (selectedCategory === 'all') return true;
    return vehicle.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section (Matches Layout 2 in user reference) */}
      <section className="relative min-h-[55vh] lg:min-h-[65vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80"
          alt="Taxi Service Across Kerala"
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
                Taxi Service <br />
                <span className="font-normal text-emerald-400">Across Kerala</span>
              </h1>
              <p className="text-slate-200 text-sm sm:text-base max-w-lg font-light leading-relaxed">
                Travel your way, on your schedule.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openBooking('taxi', 'Innova Crysta MPV')}
                  className="px-7 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-normal text-xs tracking-wide shadow-md transition-all hover:scale-105"
                >
                  Book Your Ride &rarr;
                </button>
              </div>
            </div>

            {/* Right White Dropdown Card (Matches Layout 2 in reference) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 text-slate-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-emerald-800" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                    Vehicle Drop Down
                  </h3>
                </div>
                <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  4 Classes
                </span>
              </div>

              {/* Native Select Dropdown */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 cursor-pointer mb-3"
              >
                <option value="all">⭐ View All Vehicles</option>
                <option value="Sedan">1. Sedan</option>
                <option value="MPV">2. MPV</option>
                <option value="Traveller">3. Traveller</option>
                <option value="Bus">4. Bus</option>
              </select>

              {/* Vehicle Options List */}
              <div className="space-y-1.5 text-xs">
                {[
                  { name: '1. Sedan', sub: 'Dzire, Etios, Amaze', cap: '4 Seater', id: 'Sedan' },
                  { name: '2. MPV', sub: 'Innova Crysta, Ertiga', cap: '6 - 7 Seater', id: 'MPV' },
                  { name: '3. Traveller', sub: 'Force Tempo Traveller', cap: '12 - 20 Seater', id: 'Traveller' },
                  { name: '4. Bus', sub: 'Luxury Coach & Mini Bus', cap: '21 - 49 Seater', id: 'Bus' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedCategory(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors ${
                      selectedCategory === item.id
                        ? 'bg-emerald-800 text-white font-medium'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className={`text-[10px] ${selectedCategory === item.id ? 'text-emerald-200' : 'text-slate-400'}`}>
                        {item.sub}
                      </div>
                    </div>
                    <span className="text-[11px] font-medium">{item.cap}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Our Taxi Fleet Grid - Clean Image + Name Underneath (Matches Image 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900">
            Our Taxi Fleet
          </h2>

          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs font-normal text-emerald-800 hover:underline"
            >
              Show All Vehicles
            </button>
          )}
        </div>

        {/* 4 Cards Grid: Clean photo + name underneath */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredFleet.map((cab) => (
            <div
              key={cab.id}
              onClick={() => openBooking('taxi', cab.title)}
              className="cursor-pointer group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src={cab.image}
                  alt={cab.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Clean Centered Fleet Name */}
              <h3 className="mt-3 text-base sm:text-lg font-medium text-emerald-950 text-center tracking-tight group-hover:text-emerald-700 transition-colors">
                {cab.category}
              </h3>
              <p className="text-xs text-slate-500 text-center mt-0.5">
                {cab.models[0]} • {cab.capacity}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
