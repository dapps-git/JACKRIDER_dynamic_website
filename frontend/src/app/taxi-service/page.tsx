'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { TAXI_FLEET } from '@/data/mockData';
import { ArrowRight, Users, Briefcase } from 'lucide-react';

export default function TaxiServicePage() {
  const { openBooking } = useTheme();

  const scrollToVehicles = () => {
    const el = document.getElementById('vehicle-options-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section with Scratch / Torn Paper Bottom Divider */}
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden font-montserrat">
        
        {/* Background Image: Black Luxury Sedan on Scenic Sunset Mountain Road */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/taxi-hero-kerala.jpg"
            alt="Reliable Taxi Service in Kerala - Jack Rider"
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 md:pt-28 pb-24 md:pb-32">
          <div className="max-w-2xl text-white space-y-2">
            
            <p className="text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-white/95">
              T A X I &nbsp; S E R V I C E
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight text-white tracking-tight leading-none drop-shadow-sm">
              Reliable Taxi <br />
              <span className="font-light">Service in Kerala</span>
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
              Comfortable • Safe • On Time
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToVehicles}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0d8259] hover:bg-[#096a47] text-white font-normal text-xs sm:text-sm shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>Book a Taxi</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openBooking('taxi', 'Kerala Taxi Quote')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/90 hover:border-white bg-black/20 hover:bg-black/40 text-white font-light text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Get a Quote</span>
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

      {/* 2. About Taxi Service Section (Matches Mockup) */}
      <section className="w-full bg-white py-12 md:py-16 font-montserrat">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Mobile-Only Heading (Placed First before Photo) */}
          <div className="md:hidden space-y-2 mb-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                TAXI SERVICE
              </span>
              <span className="w-12 h-0.5 bg-emerald-600/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight leading-tight">
              Travel in Comfort, Anywhere in Kerala
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Typography & Action Button */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    TAXI SERVICE
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Travel in Comfort, Anywhere in Kerala
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                Reliable and hassle-free taxi service for your local, outstation and airport transfers. Choose from a range of well-maintained vehicles with experienced drivers.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openBooking('taxi', 'Kerala Taxi Booking')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-800 text-emerald-900 hover:text-white font-normal text-xs sm:text-[13px] tracking-wide transition-all group"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Desktop Right / Mobile Middle: Innova Crysta Taxi Cutout */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center">
                <Image
                  src="/images/taxi-about-exact.jpg"
                  alt="Travel in Comfort Anywhere in Kerala - Jack Rider"
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

      {/* 3. Choose Your Ride Section (4 Vehicle Cards: Sedan, MPV, Traveller, Bus) */}
      <section id="vehicle-options-section" className="w-full bg-slate-50/60 py-14 md:py-20 font-montserrat border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center space-y-2 mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 text-emerald-800">
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
              <span className="text-xs font-normal tracking-wider uppercase">
                OUR VEHICLE OPTIONS
              </span>
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight">
              Choose Your Ride
            </h2>
          </div>

          {/* 4 Vehicle Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Sedan',
                desc: 'Ideal for couples & small families',
                image: '/images/taxi-sedan.jpg',
                btnText: 'Book Sedan'
              },
              {
                category: 'MPV',
                desc: 'Spacious & comfortable for family trips',
                image: '/images/taxi-mpv.jpg',
                btnText: 'Book MPV'
              },
              {
                category: 'Traveller',
                desc: 'Perfect for group travel (9–17 seater)',
                image: '/images/taxi-traveller.jpg',
                btnText: 'Book Traveller'
              },
              {
                category: 'Bus',
                desc: 'Best for large groups and tour packages',
                image: '/images/taxi-bus.jpg',
                btnText: 'Book Bus'
              }
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-slate-100 flex flex-col items-center text-center transition-all duration-300 group"
              >
                {/* Vehicle Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-50 mb-4">
                  <Image
                    src={v.image}
                    alt={v.category}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-normal text-slate-900 mb-1 tracking-tight">
                  {v.category}
                </h3>

                {/* Tagline / Subtitle */}
                <p className="text-xs text-slate-500 font-light leading-relaxed mb-5 min-h-[32px]">
                  {v.desc}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => openBooking('taxi', `Kerala Taxi - ${v.category}`)}
                  className="w-full mt-auto py-2 px-4 rounded-xl border border-slate-300 hover:border-emerald-800 hover:bg-emerald-800 hover:text-white text-slate-700 font-normal text-xs transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>{v.btnText}</span>
                  <span className="text-xs">&rarr;</span>
                </button>
              </div>
            ))}
          </div>

          {/* 4. Need a Custom Trip Plan Banner (Exact match to Mockup) */}
          <div className="mt-14 sm:mt-16 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            {/* Background Tea Hills */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/kerala-tea-plantation.jpg"
                alt="Kerala Tea Hills Jack Rider"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-emerald-950/85 backdrop-blur-[1px]" />
            </div>

            {/* Banner Content */}
            <div className="relative z-10 px-6 sm:px-10 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extralight tracking-tight">
                  Need a Custom Trip Plan?
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 font-light max-w-xl leading-relaxed">
                  Tell us your travel needs and we&apos;ll arrange the right vehicle and route for you.
                </p>
              </div>

              <button
                onClick={() => openBooking('taxi', 'Custom Taxi Route Request')}
                className="shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-emerald-950 hover:bg-emerald-50 font-normal text-xs sm:text-sm tracking-wide shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="w-4 h-4 text-emerald-800 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

