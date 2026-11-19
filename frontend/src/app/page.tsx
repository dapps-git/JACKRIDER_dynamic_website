'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const { openBooking } = useTheme();

  // Destination list for the Mobile "Train Animation" Marquee
  const tourPlacesTrain = [
    { name: 'Munnar', tag: 'Tea Hills', image: '/images/dest-ref-munnar.jpg' },
    { name: 'Alleppey', tag: 'Backwaters', image: '/images/dest-ref-alleppey.jpg' },
    { name: 'Wayanad', tag: 'Waterfalls', image: '/images/dest-ref-wayanad.jpg' },
    { name: 'Kovalam', tag: 'Beach', image: '/images/dest-ref-kovalam.jpg' },
    { name: 'Thrissur', tag: 'Heritage', image: '/images/dest-ref-thrissur.jpg' },
    { name: 'Kashmir', tag: 'Valleys', image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Goa', tag: 'Coast', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Rajasthan', tag: 'Palaces', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80' },
    { name: 'Himachal', tag: 'Peaks', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80' },
    { name: 'Dubai', tag: 'Skyline', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bali', tag: 'Tropical', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' },
    { name: 'Maldives', tag: 'Overwater', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80' },
    { name: 'Thailand', tag: 'Islands', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kolukkumalai', tag: 'Sunrise Peak', image: '/images/jeep-kolukkumalai.jpg' },
    { name: 'Vagamon', tag: 'Pine Forest', image: '/images/jeep-vagamon.jpg' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section with Scratch / Torn Paper Bottom Divider */}
      <HeroSection />

      {/* 2. Core Services Strip (Directly underneath the scratch design) - In 1 Single Row Across All Devices */}
      <section id="services-section" className="w-full bg-white pt-4 pb-6 sm:pb-10 font-montserrat">
        <div className="max-w-6xl mx-auto px-1 sm:px-4 md:px-6">
          <div className="grid grid-cols-5 divide-x divide-slate-200 text-center items-center">
            
            {/* 1. Jeep Safari */}
            <Link
              href="/jeep-safari"
              className="py-2.5 px-0.5 sm:py-3.5 sm:px-2 md:py-4 md:px-3 flex flex-col items-center justify-center group hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-9 md:w-11 md:h-10 relative flex items-center justify-center mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/icon-service-jeep.png"
                  alt="Jeep Safari Icon"
                  width={44}
                  height={44}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain"
                  unoptimized
                />
              </div>
              <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-[13px] font-normal leading-tight text-slate-800 group-hover:text-emerald-800 transition-colors px-0.5">
                Jeep Safari
              </span>
            </Link>

            {/* 2. Taxi Service */}
            <Link
              href="/taxi-service"
              className="py-2.5 px-0.5 sm:py-3.5 sm:px-2 md:py-4 md:px-3 flex flex-col items-center justify-center group hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-9 md:w-11 md:h-10 relative flex items-center justify-center mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/icon-service-taxi.png"
                  alt="Taxi Service Icon"
                  width={44}
                  height={44}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain"
                  unoptimized
                />
              </div>
              <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-[13px] font-normal leading-tight text-slate-800 group-hover:text-emerald-800 transition-colors px-0.5">
                Taxi Service
              </span>
            </Link>

            {/* 3. Guide & Trekking */}
            <Link
              href="/guide-trekking"
              className="py-2.5 px-0.5 sm:py-3.5 sm:px-2 md:py-4 md:px-3 flex flex-col items-center justify-center group hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-9 md:w-11 md:h-10 relative flex items-center justify-center mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/icon-service-guide.png"
                  alt="Guide & Trekking Icon"
                  width={44}
                  height={44}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain"
                  unoptimized
                />
              </div>
              <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-[13px] font-normal leading-tight text-slate-800 group-hover:text-emerald-800 transition-colors px-0.5">
                Guide &amp; Trekking
              </span>
            </Link>

            {/* 4. Photography */}
            <Link
              href="/photography-videography/travel-photography"
              className="py-2.5 px-0.5 sm:py-3.5 sm:px-2 md:py-4 md:px-3 flex flex-col items-center justify-center group hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-9 md:w-11 md:h-10 relative flex items-center justify-center mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/icon-service-photography.png"
                  alt="Photography Icon"
                  width={44}
                  height={44}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain"
                  unoptimized
                />
              </div>
              <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-[13px] font-normal leading-tight text-slate-800 group-hover:text-emerald-800 transition-colors px-0.5">
                Photography
              </span>
            </Link>

            {/* 5. Drone Video */}
            <Link
              href="/photography-videography/drone-videography"
              className="py-2.5 px-0.5 sm:py-3.5 sm:px-2 md:py-4 md:px-3 flex flex-col items-center justify-center group hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-9 md:w-11 md:h-10 relative flex items-center justify-center mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/icon-service-drone.png"
                  alt="Drone Video Icon"
                  width={44}
                  height={44}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain"
                  unoptimized
                />
              </div>
              <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-[13px] font-normal leading-tight text-slate-800 group-hover:text-emerald-800 transition-colors px-0.5">
                Drone Video
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* MOBILE-ONLY TRAIN ANIMATION: Pure White Background, Only Place Names */}
      <div className="md:hidden w-full overflow-hidden bg-white py-3">
        <div className="overflow-hidden w-full">
          <div className="animate-train flex gap-2.5 px-2">
            {[...tourPlacesTrain, ...tourPlacesTrain].map((place, i) => (
              <div
                key={i}
                onClick={() => openBooking('package', `${place.name} Tour Package`)}
                className="w-28 sm:w-32 shrink-0 aspect-[4/3] rounded-lg overflow-hidden relative shadow-sm border border-slate-100 bg-white cursor-pointer group"
              >
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="130px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-1.5 left-1 right-1 text-center">
                  <span className="block text-[11px] font-normal text-white leading-tight drop-shadow-sm truncate">
                    {place.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. About Jack Rider Section (Mobile Ordered: Heading First -> Photo -> Text & Button) */}
      <motion.section
        id="about-section"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-white py-12 md:py-20 font-montserrat"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile-Only Heading (Placed First before Photo) */}
          <div className="md:hidden space-y-2 mb-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                ABOUT JACK RIDER
              </span>
              <span className="w-12 h-0.5 bg-emerald-600/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight leading-tight">
              We Turn Travel Dreams Into Memorable Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-14 items-center">
            
            {/* Image (Placed between Heading and Text on Mobile, Left on Desktop) */}
            <div className="md:col-span-7 lg:col-span-7 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[260px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[480px] flex items-center justify-center">
                <Image
                  src="/images/about-jackrider-kerala.jpg"
                  alt="Jack Rider Tours & Travels - Kerala Exploration"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain object-center scale-100 sm:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Content Area (Desktop shows Heading here; Mobile shows Paragraph + Button) */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    ABOUT JACK RIDER
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extralight text-slate-900 tracking-tight leading-tight">
                  We Turn Travel Dreams Into Memorable Experiences
                </h2>
              </div>

              {/* User Content Paragraph 1 */}
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                From Kerala&apos;s misty mountains and serene backwaters to destinations across India and beyond, Jack Rider Tours &amp; Travels offers customised tours, jeep safaris, taxi services, trekking, and travel experiences designed around you.
              </p>

              {/* User Content Paragraph 2 (Tagline) */}
              <p className="text-xs sm:text-sm text-emerald-950 font-normal leading-relaxed pt-1">
                Travel with comfort, explore with confidence, and make every journey unforgettable.
              </p>

              {/* Pill Button: [ Plan Your Trip → ] */}
              <div className="pt-2">
                <button
                  onClick={() => openBooking('package', 'About Jack Rider Consultation')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-800 text-emerald-900 hover:text-white font-normal text-xs sm:text-[13px] tracking-wide transition-all group"
                >
                  <span>Plan Your Trip</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </motion.section>

      {/* 4. POPULAR DESTINATIONS Section (Reduced Border Radius: rounded-lg on All Cards) */}
      <motion.section
        id="destinations-section"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-white py-12 md:py-16 font-montserrat"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          
          {/* A. EXPLORE KERALA / Kerala's Best Destinations */}
          <div>
            <div className="text-center space-y-2 mb-8 sm:mb-10">
              <div className="flex items-center justify-center gap-3 text-emerald-800">
                <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
                <span className="text-xs font-normal tracking-wider uppercase">
                  EXPLORE KERALA
                </span>
                <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight">
                Kerala&apos;s Best Destinations
              </h2>
            </div>

            {/* 5 Kerala Cards (Sleeker rounded-lg border radius) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-5">
              {[
                { id: 'munnar', name: 'Munnar', image: '/images/dest-ref-munnar.jpg', alt: 'Munnar Tea Hills Kerala' },
                { id: 'alleppey', name: 'Alleppey', image: '/images/dest-ref-alleppey.jpg', alt: 'Alleppey Houseboat Backwaters Kerala' },
                { id: 'wayanad', name: 'Wayanad', image: '/images/dest-ref-wayanad.jpg', alt: 'Wayanad Waterfalls Kerala' },
                { id: 'kovalam', name: 'Kovalam', image: '/images/dest-ref-kovalam.jpg', alt: 'Kovalam Golden Beach Kerala' },
                { id: 'thrissur', name: 'Thrissur', image: '/images/dest-ref-thrissur.jpg', alt: 'Thrissur Temple Kerala Heritage' }
              ].map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => openBooking('package', `${dest.name} Tour Package`)}
                  className="group cursor-pointer flex flex-col items-center"
                >
                  <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                    <Image
                      src={dest.image}
                      alt={dest.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-light text-slate-900 group-hover:text-emerald-800 transition-colors tracking-tight text-center">
                    {dest.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* B. All India & International (Reduced rounded-lg border radius on All Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 pt-4 border-t border-slate-100">
            
            {/* Left Column: EXPLORE ALL INDIA / Incredible India */}
            <div>
              <div className="space-y-1.5 mb-6 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2.5 text-emerald-800">
                  <span className="text-[11px] sm:text-xs font-normal tracking-wider uppercase">
                    EXPLORE ALL INDIA
                  </span>
                  <span className="w-8 sm:w-10 h-0.5 bg-emerald-600/70" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight">
                  Incredible India
                </h3>
              </div>

              {/* 4 Cards: Goa, Rajasthan, Himachal, Kashmir (rounded-lg) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                {[
                  { name: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80' },
                  { name: 'Rajasthan', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80' },
                  { name: 'Himachal', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80' },
                  { name: 'Kashmir', image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=600&q=80' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => openBooking('package', `${item.name} Tour Package`)}
                    className="group cursor-pointer flex flex-col items-center"
                  >
                    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <span className="mt-2 text-xs sm:text-[13px] font-light text-slate-900 group-hover:text-emerald-800 transition-colors tracking-tight text-center">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: EXPLORE INTERNATIONAL / Global Getaways */}
            <div>
              <div className="space-y-1.5 mb-6 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2.5 text-emerald-800">
                  <span className="text-[11px] sm:text-xs font-normal tracking-wider uppercase">
                    EXPLORE INTERNATIONAL
                  </span>
                  <span className="w-8 sm:w-10 h-0.5 bg-emerald-600/70" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight">
                  Global Getaways
                </h3>
              </div>

              {/* 4 Cards: Dubai, Bali, Maldives, Thailand (rounded-lg) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                {[
                  { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
                  { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
                  { name: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80' },
                  { name: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => openBooking('package', `${item.name} Holiday Package`)}
                    className="group cursor-pointer flex flex-col items-center"
                  >
                    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <span className="mt-2 text-xs sm:text-[13px] font-light text-slate-900 group-hover:text-emerald-800 transition-colors tracking-tight text-center">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </motion.section>

      {/* 5. JEEP SAFARI Feature Spotlight (Mobile Ordered: Heading First -> Photo -> Paragraph & Buttons) */}
      <motion.section
        id="jeep-safari-section"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-white py-12 md:py-20 font-montserrat border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Mobile-Only Heading (Placed First before Photo) */}
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Typography & Buttons */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    JEEP SAFARI
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Off-Road Adventures in Kerala
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                Experience Kerala&apos;s wild beauty with our exciting jeep safaris. Drive through tea estates, forest trails, mountain viewpoints and untouched villages with our expert local drivers.
              </p>

              {/* Action Buttons: [ View All Safari Places → ] and [ Book Your Jeep Safari ] */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/jeep-safari"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c5a3e] hover:bg-[#08432d] text-white font-normal text-xs sm:text-[13px] tracking-wide shadow-md transition-all group"
                >
                  <span>View All Safari Places</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => openBooking('jeep', 'Munnar 4x4 Jeep Safari')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-50 text-emerald-900 font-light text-xs sm:text-[13px] tracking-wide transition-all"
                >
                  <span>Book Now</span>
                </button>
              </div>

            </div>

            {/* Desktop Right / Mobile Middle: 4x4 Jeep Safari Artwork Cutout */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center">
                <Image
                  src="/images/jeep-about-white.jpg"
                  alt="Off-Road 4x4 Jeep Safari Adventures Kerala"
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
      </motion.section>

      {/* 6. TAXI SERVICE Feature Spotlight (Mobile Ordered: Heading First -> Photo -> Paragraph & Buttons) */}
      <motion.section
        id="taxi-section"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-white py-12 md:py-20 font-montserrat border-t border-slate-100"
      >
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Content & Action Buttons */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    TAXI SERVICE
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Travel in Comfort, Anywhere in Kerala
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                Reliable and hassle-free taxi service for your local, outstation and airport transfers. Choose from a range of well-maintained vehicles with experienced drivers.
              </p>

              {/* Action Buttons: [ View All Taxi Services → ] and [ Book Now ] */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/taxi-service"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c5a3e] hover:bg-[#08432d] text-white font-normal text-xs sm:text-[13px] tracking-wide shadow-md transition-all group"
                >
                  <span>View All Taxi Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => openBooking('taxi', 'Kerala Taxi Transfer')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-50 text-emerald-900 font-light text-xs sm:text-[13px] tracking-wide transition-all"
                >
                  <span>Book Now</span>
                </button>
              </div>

            </div>

            {/* Photo (Between Heading and Text on Mobile, Right on Desktop - Enlarged to match About Us) */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center">
                <Image
                  src="/images/taxi-about-exact.jpg"
                  alt="Comfortable Taxi and MPV Service in Kerala"
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
      </motion.section>

      {/* 7. GUIDE & TREKKING Feature Spotlight (Mobile Ordered: Heading First -> Photo -> Paragraph -> 2 Buttons in 1 Row) */}
      <motion.section
        id="trekking-section"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-slate-50/60 py-12 md:py-20 font-montserrat border-t border-slate-100"
      >
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Content & Action Buttons */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    GUIDE &amp; TREKKING
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Experience Nature, Safely with Experts
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                Discover Kerala&apos;s stunning trekking trails with the support of our experienced local guides. From serene hill walks to challenging treks, we ensure a safe, informative and memorable outdoor experience.
              </p>

              {/* Action Buttons: TWO BUTTONS IN 1 SINGLE ROW ON MOBILE */}
              <div className="pt-2 grid grid-cols-2 gap-2 w-full max-w-sm sm:flex sm:flex-wrap sm:items-center sm:gap-3">
                <Link
                  href="/guide-trekking"
                  className="inline-flex items-center justify-center gap-1 px-2.5 py-2 rounded-full bg-[#0c5a3e] hover:bg-[#08432d] text-white font-normal text-[11px] sm:text-[13px] tracking-wide shadow-md transition-all text-center truncate"
                >
                  <span className="truncate">All Routes</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>

                <button
                  onClick={() => openBooking('trekking', 'Kerala Guided Trekking')}
                  className="inline-flex items-center justify-center gap-1 px-2.5 py-2 rounded-full border border-emerald-800 hover:bg-emerald-50 text-emerald-900 font-light text-[11px] sm:text-[13px] tracking-wide transition-all text-center truncate"
                >
                  <span className="truncate">Book a Trek</span>
                </button>
              </div>

            </div>

            {/* Desktop Right / Mobile Middle: Photo (Enlarged to match About Us) */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center group">
                <Image
                  src="/images/guide-about-white.jpg"
                  alt="Experience Nature, Safely with Experts - Jack Rider"
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
      </motion.section>

      {/* 8. PHOTOGRAPHY & VIDEOGRAPHY (Mobile Ordered: Heading First -> Photo -> Paragraph & Badges & Buttons) */}
      <motion.section
        id="photography-section"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-white py-12 md:py-20 font-montserrat border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Mobile-Only Heading (Placed First before Photo) */}
          <div className="md:hidden space-y-2 mb-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                PHOTOGRAPHY &amp; VIDEOGRAPHY
              </span>
              <span className="w-12 h-0.5 bg-emerald-600/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight leading-tight">
              Capture the Journey. Keep the Memories.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Content & Action Buttons */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    PHOTOGRAPHY &amp; VIDEOGRAPHY
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Capture the Journey. <br className="hidden sm:inline" />
                  <span className="font-light">Keep the Memories.</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                From breathtaking landscapes and unforgettable travel moments to special events, we capture your experiences through photography, cinematic videos and aerial drone shots.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {[
                  { title: 'Travel Photo', href: '/photography-videography/travel-photography' },
                  { title: 'Event Photo', href: '/photography-videography/event-photography' },
                  { title: 'Travel Film', href: '/photography-videography/travel-videography' },
                  { title: 'Drone 4K', href: '/photography-videography/drone-videography' },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="px-2 py-1.5 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-[11px] font-normal text-center border border-slate-100 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Action Buttons: [ Explore Our Work → ] and [ Book a Shoot ] */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/photography-videography/travel-photography"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c5a3e] hover:bg-[#08432d] text-white font-normal text-xs sm:text-[13px] tracking-wide shadow-md transition-all group"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => openBooking('photography', 'Travel & Event Photography Shoot')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-50 text-emerald-900 font-light text-xs sm:text-[13px] tracking-wide transition-all"
                >
                  <span>Book a Shoot</span>
                </button>
              </div>

            </div>

            {/* Desktop Right / Mobile Middle: Travel Photographer + Drone */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center group">
                <Image
                  src="/images/photo-about-exact.jpg"
                  alt="Capture the Journey. Keep the Memories. Jack Rider Photography"
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
      </motion.section>

      {/* 6. Events & Experiences Section (Added right after Photography) */}
      <motion.section
        id="events-section"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-slate-50/60 py-12 md:py-16 font-montserrat border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Mobile-Only Heading (Placed First before Photo) */}
          <div className="md:hidden space-y-2 mb-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                EVENTS &amp; EXPERIENCES
              </span>
              <span className="w-12 h-0.5 bg-emerald-600/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-slate-900 tracking-tight leading-tight">
              Curated Kerala Events &amp; Authentic Activities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Typography & Buttons */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 order-2 md:order-1">
              
              {/* Desktop-Only Heading */}
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-emerald-800 tracking-wider uppercase">
                    EVENTS &amp; EXPERIENCES
                  </span>
                  <span className="w-12 h-0.5 bg-emerald-600/70" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extralight text-slate-900 tracking-tight leading-tight">
                  Curated Events &amp; <br />
                  <span className="font-light">Authentic Activities</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                From high-altitude glass bridges and wild elephant waterhole safaris to traditional honey &amp; spice farms, Kathakali martial shows, boating, and starlit campfire grilling.
              </p>

              {/* 4 Quick Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {[
                  { title: 'Honey Farm', href: '/events' },
                  { title: 'Glass Bridge', href: '/events' },
                  { title: 'Kathakali', href: '/events' },
                  { title: 'Campfire BBQ', href: '/events' },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="px-2 py-1.5 rounded-lg bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-[11px] font-normal text-center border border-slate-200 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c5a3e] hover:bg-[#08432d] text-white font-normal text-xs sm:text-[13px] tracking-wide shadow-md transition-all group"
                >
                  <span>Explore All Events</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => openBooking('events', 'Curated Kerala Event & Activity')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-50 text-emerald-900 font-light text-xs sm:text-[13px] tracking-wide transition-all"
                >
                  <span>Book an Activity</span>
                </button>
              </div>

            </div>

            {/* Desktop Right / Mobile Middle: Events About Us Cutout Image */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center group">
                <Image
                  src="/images/events-about-white.jpg"
                  alt="Curated Kerala Events & Activities - Jack Rider"
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
      </motion.section>

    </div>
  );
}
