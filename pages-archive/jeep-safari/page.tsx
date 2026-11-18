'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { JEEP_SAFARI_LOCATIONS } from '@/data/mockData';
import { Compass, Search } from 'lucide-react';

export default function JeepSafariPage() {
  const { openBooking } = useTheme();
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredList = JEEP_SAFARI_LOCATIONS.filter((loc) => {
    const matchesDropdown = selectedLocation === 'all' || loc.slug === selectedLocation;
    const matchesSearch =
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDropdown && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section (Matches Layout 1 in user reference) */}
      <section className="relative min-h-[55vh] lg:min-h-[65vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-900">
        <Image
          src="/images/kerala-hero-panoramic.jpg"
          alt="Jeep Safari Adventures Kerala"
          fill
          priority
          className="object-cover object-center scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-3 text-white">
              <h1 className="text-4xl sm:text-6xl font-light tracking-tight leading-tight">
                Jeep Safari <br />
                <span className="font-normal text-emerald-400">Adventures</span>
              </h1>
              <p className="text-slate-200 text-sm sm:text-base max-w-lg font-light leading-relaxed">
                Feel the thrill, explore the unexplored.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openBooking('jeep', 'Munnar 4x4 Off-Road')}
                  className="px-7 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-normal text-xs tracking-wide shadow-md transition-all hover:scale-105"
                >
                  Book Now &rarr;
                </button>
              </div>
            </div>

            {/* Right White Dropdown Card (Matches Layout 1 in reference) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 text-slate-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-800" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                    Location Drop Down
                  </h3>
                </div>
                <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  12 Locations
                </span>
              </div>

              {/* Native Select Dropdown */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 cursor-pointer mb-3"
              >
                <option value="all">⭐ View All 12 Locations</option>
                <option value="anachaal">1. ANACHAAL</option>
                <option value="munnar">2. Munnar</option>
                <option value="maryoor">3. Maryoor</option>
                <option value="kolukkumalai">4. Kolukkumalai</option>
                <option value="meeshappulimala">5. Meeshappulima</option>
                <option value="vagamon">6. Vagomon</option>
                <option value="chathurangappara">7. Chathurangappara</option>
                <option value="kanthalloor">8. Kanthalloor</option>
                <option value="marayoor-dolmens">9. Marayoor</option>
                <option value="mamalakkandam">10. Mamalakkandam</option>
                <option value="nelliyampathy">11. Nelliyampathy</option>
                <option value="anakkulam">12. Anakkulam</option>
              </select>

              {/* Clean Location List */}
              <div className="max-h-56 overflow-y-auto space-y-1 text-xs pr-1">
                {[
                  { name: '1. ANACHAAL', slug: 'anachaal' },
                  { name: '2. Munnar', slug: 'munnar' },
                  { name: '3. Maryoor', slug: 'maryoor' },
                  { name: '4. Kolukkumalai', slug: 'kolukkumalai' },
                  { name: '5. Meeshappulima', slug: 'meeshappulimala' },
                  { name: '6. Vagomon', slug: 'vagamon' },
                  { name: '7. Chathurangappara', slug: 'chathurangappara' },
                  { name: '8. Kanthalloor', slug: 'kanthalloor' },
                  { name: '9. Marayoor', slug: 'marayoor-dolmens' },
                  { name: '10. Mamalakkandam', slug: 'mamalakkandam' },
                  { name: '11. Nelliyampathy', slug: 'nelliyampathy' },
                  { name: '12. Anakkulam', slug: 'anakkulam' }
                ].map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => setSelectedLocation(item.slug)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors ${
                      selectedLocation === item.slug
                        ? 'bg-emerald-800 text-white font-medium'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Featured Safari Packages Grid - Clean Photo + Name Underneath (Matches Image 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900">
            Featured Safari Locations
          </h2>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-emerald-600"
            />
          </div>
        </div>

        {/* 12 Locations Grid: Clean image + name underneath */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredList.map((loc) => (
            <div
              key={loc.id}
              onClick={() => openBooking('jeep', loc.name)}
              className="cursor-pointer group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Clean Centered Location Name */}
              <h3 className="mt-3 text-base sm:text-lg font-medium text-emerald-950 text-center tracking-tight group-hover:text-emerald-700 transition-colors">
                {loc.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
