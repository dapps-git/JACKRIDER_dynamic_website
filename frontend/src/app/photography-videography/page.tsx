'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight, Camera, Film, Heart, Plane } from 'lucide-react';

export default function PhotographyVideographyIndexPage() {
  const { openBooking } = useTheme();

  const services = [
    {
      title: 'Travel Photography',
      subtitle: 'Discover the World Through Our Lens',
      desc: 'Capturing destinations, landscapes, wildlife, and authentic travel moments across Kerala, India, and global horizons.',
      href: '/photography-videography/travel-photography',
      image: '/images/travel-photography-lake.jpg',
      icon: Camera,
      cta: 'Explore Travel Photos'
    },
    {
      title: 'Event Photography',
      subtitle: 'Every Moment Deserves to Be Captured',
      desc: 'Weddings, celebrations, family gatherings and special events preserved with timeless grace and cinematic lighting.',
      href: '/photography-videography/event-photography',
      image: '/images/event-photography-wedding.jpg',
      icon: Heart,
      cta: 'Explore Event Photos'
    },
    {
      title: 'Travel Videography',
      subtitle: 'Your Journey. Our Cinematic Story.',
      desc: 'Travel films, destination videos, reels and cinematic highlights crafted with movie-grade color grading and soundtrack.',
      href: '/photography-videography/travel-videography',
      image: '/images/dest-munnar.jpg',
      icon: Film,
      cta: 'Watch Travel Films'
    },
    {
      title: 'Drone Videography',
      subtitle: 'See the World from a New Perspective',
      desc: 'Aerial landscape videos, destination footage and cinematic drone shots captured in 4K resolution by certified UAV pilots.',
      href: '/photography-videography/drone-videography',
      image: '/images/photo-gear-drone-camera.png',
      icon: Plane,
      cta: 'View Aerial Drone Shots'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section with Scratch / Torn Paper Bottom Divider */}
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden font-montserrat">
        
        {/* Background Image: High-Resolution Sunrise Panoramic View */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kerala-hero-panoramic-2k.jpg"
            alt="Photography & Videography in Kerala - Jack Rider"
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
              P H O T O G R A P H Y &nbsp; &amp; &nbsp; V I D E O G R A P H Y
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight text-white tracking-tight leading-none drop-shadow-sm">
              Capture the Journey. <br />
              <span className="font-light">Keep the Memories.</span>
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
              From breathtaking landscapes and unforgettable travel moments to special events, we capture your experiences through photography, cinematic videos and aerial drone shots.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/photography-videography/travel-photography"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0d8259] hover:bg-[#096a47] text-white font-normal text-xs sm:text-sm shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => openBooking('photography', 'Photography & Videography Shoot')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/90 hover:border-white bg-black/20 hover:bg-black/40 text-white font-light text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Book a Shoot</span>
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

      {/* 2. Four Services Grid */}
      <section className="w-full bg-white py-14 md:py-20 font-montserrat">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-2 mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-3 text-emerald-800">
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
              <span className="text-xs font-normal tracking-wider uppercase">
                OUR MEDIA SERVICES
              </span>
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight">
              Select Your Creative Service
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light max-w-md mx-auto">
              Professional visual documentation for tourists, couples, families, and luxury retreats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-50/70 rounded-2xl overflow-hidden border border-slate-100 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-normal uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                        Page 0{i + 1}
                      </span>
                    </div>

                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-normal text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-emerald-700 font-normal mt-0.5">
                        {item.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 font-light mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-normal text-xs transition-all shadow-sm group-hover:scale-[1.02]"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => openBooking('photography', item.title)}
                      className="text-xs text-slate-500 hover:text-emerald-800 font-light underline underline-offset-4"
                    >
                      Book Shoot
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
