'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  Compass,
  CheckCircle2,
  ChevronDown,
  Flame,
  Tent,
  Mountain,
  Heart,
  Music,
  Trees,
  ShieldCheck
} from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  category: 'all' | 'culture' | 'farm' | 'water' | 'adventure' | 'camping';
  location: string;
  image: string;
  duration: string;
  badge: string;
  description: string;
  highlights: string[];
}

export default function EventsPage() {
  const { openBooking } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'culture' | 'farm' | 'water' | 'adventure' | 'camping'>('all');
  const [selectedEventId, setSelectedEventId] = useState<string>('all');

  const scrollToEvents = () => {
    const el = document.getElementById('events-grid-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const allEvents: EventItem[] = [
    {
      id: 'honey-farm',
      title: 'Honey Farm Visit & Hive Extraction',
      category: 'farm',
      location: 'Munnar & Marayoor, Kerala',
      image: '/images/event-honey-farm.jpg',
      duration: '2 - 3 Hours',
      badge: 'Farm Experience',
      description: 'Step into pristine bee sanctuaries, explore natural hive keeping, and taste pure raw forest honey straight from natural comb extractions.',
      highlights: ['Organic Bee Boxes', 'Pure Raw Honey Tasting', 'Guided Extraction Tour']
    },
    {
      id: 'tea-garden',
      title: 'Tea Garden Walk & Plucking Experience',
      category: 'farm',
      location: 'Munnar & Kolukkumalai, Kerala',
      image: '/images/event-tea-garden.jpg',
      duration: '3 - 4 Hours',
      badge: 'Signature Trail',
      description: 'Walk through emerald terraced hills with local tea estate pluckers, learn orthodox tea processing, and savor freshly brewed single-estate tea.',
      highlights: ['Hands-on Plucking Experience', 'Heritage Tea Factory Tour', 'Panoramic Hillside Viewpoints']
    },
    {
      id: 'boating-watersports',
      title: 'Speed Boating & Scenic Lake Cruise',
      category: 'water',
      location: 'Mattupetty, Kundala & Periyar Lakes',
      image: '/images/event-boating.jpg',
      duration: '1 - 2 Hours',
      badge: 'Lakeside Thrill',
      description: 'Glide across misty mountain lakes on speed boats, family cruises, or water sports surrounded by dense evergreen shola forests.',
      highlights: ['High-Speed Boat Thrills', 'Scenic Forest Shorelines', 'Life-Jacket Certified Safety']
    },
    {
      id: 'ayurvedic-massage',
      title: 'Authentic Ayurvedic Massage & Therapy',
      category: 'culture',
      location: 'Munnar & Kumarakom Wellness Hubs',
      image: '/images/event-ayurvedic-massage.jpg',
      duration: '60 - 90 Minutes',
      badge: 'Holistic Wellness',
      description: 'Traditional Kerala Ayurvedic healing with medicated herbal oils (Abhyanga & Kizhi), relaxing fatigued muscles and restoring full-body vitality.',
      highlights: ['Certified Vaidya Therapists', 'Pure Medicated Herbal Oils', 'Rejuvenating Herbal Steam']
    },
    {
      id: 'kathakali-kalari',
      title: 'Kathakali & Kalaripayattu Martial Show',
      category: 'culture',
      location: 'Munnar & Thekkady Heritage Theatres',
      image: '/images/event-kathakali.jpg',
      duration: '2 Hours (Evening)',
      badge: 'Living Heritage',
      description: 'Witness Kerala’s world-renowned classical dance-drama with vibrant facial makeup and mudras, followed by ancient Kalaripayattu weapon combat.',
      highlights: ['Live Facial Makeup Demonstration', 'Classical Kathakali Drama', 'Kalaripayattu Weapon Sparring']
    },
    {
      id: 'spice-garden',
      title: 'Spice Garden & Aroma Plantation Tour',
      category: 'farm',
      location: 'Thekkady & Munnar Valleys',
      image: '/images/event-spice-garden.jpg',
      duration: '2 Hours',
      badge: 'Botanical Walk',
      description: 'A guided aromatic walking tour through organic plantations of cardamom, black pepper, cinnamon, nutmeg, cloves, vanilla, and medicinal herbs.',
      highlights: ['Aromatherapy Guided Walk', 'Organic Spices Tasting', 'Direct Farm-to-Kitchen Purchases']
    },
    {
      id: 'elephant-safari',
      title: 'Wild Elephant Jungle Safari',
      category: 'adventure',
      location: 'Periyar & Anakkulam Forest Trails',
      image: '/images/event-elephant-safari.jpg',
      duration: '4 Hours (Afternoon/Evening)',
      badge: 'Wild Nature',
      description: 'Safe open-top 4x4 forest trail excursions to observe wild elephant herds drinking at natural mineral waterholes and roaming jungle corridors.',
      highlights: ['Natural Waterhole Observation', 'Certified Forest Escort', 'Ethical Wildlife Viewing']
    },
    {
      id: 'adventure-park',
      title: 'Adventure Park & Treetop Ropeway',
      category: 'adventure',
      location: 'Munnar & Wayanad Adventure Hubs',
      image: '/images/event-adventure-park.jpg',
      duration: 'Half Day / Full Day',
      badge: 'High Thrills',
      description: 'High-flying ziplines over tea valleys, aerial suspension rope bridges, Burma bridges, giant swings, and tree-top obstacle courses.',
      highlights: ['Valley Zipline Crossing', 'Treetop Rope Obstacles', 'International Safety Harnesses']
    },
    {
      id: 'glass-bridge',
      title: 'Skywalk Glass Bridge Walk Experience',
      category: 'adventure',
      location: 'Vagamon & Wayanad High Peaks',
      image: '/images/event-glass-bridge.jpg',
      duration: '1 - 2 Hours',
      badge: 'Iconic Wonder',
      description: 'Step onto India’s breathtaking cantilevered glass skywalk extending over sheer 1,000-foot mountain valleys for an unforgettable view.',
      highlights: ['Cantilevered Glass Walkway', 'Panoramic Mountain Abyss', 'Unmatched Photography Point']
    },
    {
      id: 'tent-camping',
      title: 'Mountain Tent Camping Under Stars',
      category: 'camping',
      location: 'Kolukkumalai & Suryanelli Hills',
      image: '/images/event-tent-camping.jpg',
      duration: 'Overnight (Sunset to Sunrise)',
      badge: 'Starlit Peak',
      description: 'Premium all-weather dome tents pitched high above the clouds with panoramic sunrise views, foam mattresses, clean amenities, and hot tea.',
      highlights: ['Above-the-Clouds Campsite', 'Dome Tents & Clean Sleeping Gear', 'Breathtaking Sunrise Wake-Up']
    },
    {
      id: 'campfire-grilling',
      title: 'Riverside Campfire Grilling & BBQ Night',
      category: 'camping',
      location: 'Hillside & Riverside Campgrounds',
      image: '/images/event-campfire-grill.jpg',
      duration: '3 - 4 Hours (Night)',
      badge: 'Warm Evening',
      description: 'Gather around glowing wood-fired riverside campfires under starry skies with freshly grilled barbecue, acoustic music, and travel tales.',
      highlights: ['Wood-Fired Open Campfire', 'Fresh Veg / Non-Veg Barbecue', 'Acoustic Music & Stargazing']
    },
    {
      id: 'cultural-fest',
      title: 'Live Cultural Music & Festival Night',
      category: 'culture',
      location: 'Kerala Cultural Centers & Resorts',
      image: '/images/event-cultural-fest.jpg',
      duration: '2 - 3 Hours (Night)',
      badge: 'Music & Arts',
      description: 'Immerse yourself in traditional Kerala folk music, energetic Chenda Melam percussion, and evening cultural celebrations with local artists.',
      highlights: ['Chenda Melam Percussion', 'Live Traditional Folk Music', 'Family Festive Atmosphere']
    }
  ];

  const filteredEvents = allEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesDropdown = selectedEventId === 'all' || event.id === selectedEventId;
    return matchesCategory && matchesDropdown;
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-montserrat font-light">
      
      {/* 1. Hero Section with Panoramic View & Scratch Edge */}
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden font-montserrat">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kerala-hero-panoramic-2k.jpg"
            alt="Kerala Events & Curated Activities - Jack Rider"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 md:pt-28 pb-24 md:pb-32">
          <div className="max-w-2xl text-white space-y-2">
            
            <p className="text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-white/95">
              E V E N T S &nbsp; &amp; &nbsp; E X P E R I E N C E S
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight text-white tracking-tight leading-none drop-shadow-sm">
              Discover Authentic <br />
              <span className="font-light">Kerala Activities</span>
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
              From sky-high glass bridges and wild elephant safaris to serene tea plucking, ancient Kathakali shows, and campfire barbecues under the stars.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToEvents}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0d8259] hover:bg-[#096a47] text-white font-normal text-xs sm:text-sm shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span>Explore Activities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openBooking('events', 'Curated Kerala Event')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/90 hover:border-white bg-black/20 hover:bg-black/40 text-white font-light text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Book an Event</span>
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

      {/* 2. About Events Section (Uses Exact Uploaded Boat Cutout Fading to White) */}
      <section className="w-full bg-white py-12 md:py-16 font-montserrat">
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
              Create Unforgettable Kerala Memories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Desktop Left / Mobile Below Photo: Typography & Feature Badges */}
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
                  Create Unforgettable <br />
                  <span className="font-light">Kerala Memories</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-lg">
                Immerse yourself in authentic God&apos;s Own Country encounters. From traditional honey and spice plantations to pulse-pounding glass bridge walks, Kathakali shows, and starlit campfires, we curate every activity with verified local hosts.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Authentic <br /> Traditions
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    Curated <br /> Adventures
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-slate-800 leading-tight">
                    100% Verified <br /> Safety
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openBooking('events', 'Custom Curated Activity')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-800 hover:bg-emerald-800 text-emerald-900 hover:text-white font-normal text-xs sm:text-[13px] tracking-wide transition-all group"
                >
                  <span>Inquire for Activity</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Desktop Right / Mobile Middle: Events About Cutout Artwork */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center">
                <Image
                  src="/images/events-about-white.jpg"
                  alt="Curated Kerala Events & Activities Jack Rider"
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

      {/* 3. All 12 Curated Events & Activities Section */}
      <section id="events-grid-section" className="w-full bg-slate-50/60 py-14 md:py-20 font-montserrat border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center space-y-2 mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 text-emerald-800">
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
              <span className="text-xs font-normal tracking-wider uppercase">
                CURATED ACTIVITIES
              </span>
              <span className="w-10 sm:w-12 h-0.5 bg-emerald-600/70" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extralight text-slate-900 tracking-tight">
              Popular Events &amp; Experiences
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light max-w-lg mx-auto">
              Select an activity below to reserve individual experiences, family packages, or customized private tour schedules.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {[
              { id: 'all', label: 'All Activities' },
              { id: 'farm', label: 'Farm & Plantations' },
              { id: 'adventure', label: 'Adventure & Thrills' },
              { id: 'water', label: 'Lakes & Boating' },
              { id: 'culture', label: 'Cultural & Wellness' },
              { id: 'camping', label: 'Camping & Nightlife' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCategory(tab.id as any);
                  setSelectedEventId('all');
                }}
                className={`px-4 py-2 rounded-full text-xs transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-700 hover:text-emerald-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Dropdown Selector */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-800">
                <MapPin className="w-4 h-4" />
              </div>
              <select
                value={selectedEventId}
                onChange={(e) => setSelectedEventId(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-normal text-slate-800 shadow-sm focus:outline-none focus:border-emerald-600 appearance-none cursor-pointer transition-colors"
              >
                <option value="all">Quick Select Event (All 12 Activities)</option>
                {allEvents.map(evt => (
                  <option key={evt.id} value={evt.id}>
                    {evt.title} ({evt.location.split(',')[0]})
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-normal uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {event.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-normal">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>

                    <h3 className="text-lg font-normal text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                      {event.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {event.description}
                    </p>

                    {/* Highlights tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {event.highlights.map((hl, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-100 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{hl}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-light flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{event.duration}</span>
                    </span>

                    <button
                      onClick={() => openBooking('events', event.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white font-normal text-xs transition-all shadow-sm group-hover:scale-105"
                    >
                      <span>Book Activity</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
