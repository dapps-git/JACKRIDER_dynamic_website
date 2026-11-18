'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Globe,
  Compass
} from 'lucide-react';

interface DestinationItem {
  id: string;
  name: string;
  location: string;
  duration: string;
  image: string;
  title: string;
  desc: string;
  highlights: string;
}

const DESTINATION_DATA: Record<'kerala' | 'india' | 'international', {
  title: string;
  subtitle: string;
  bgImage: string;
  bgAlt: string;
  items: DestinationItem[];
}> = {
  kerala: {
    title: "1. KERALA • God's Own Country",
    subtitle: 'Misty Tea Hills, Emerald Backwaters & Pristine Coastline',
    bgImage: '/images/bg-kerala-houseboat.jpg',
    bgAlt: 'Alleppey Backwaters Luxury Houseboat Kerala',
    items: [
      {
        id: 'kl-1',
        name: 'Munnar',
        location: 'Idukki, Kerala',
        duration: '3 Days / 2 Nights',
        image: '/images/dest-munnar.jpg',
        title: 'Misty Hills & Endless Tea Carpets',
        desc: 'Experience emerald tea contours, cool mountain breezes, Lockhart Gap vistas, and sunrise jeep tracks.',
        highlights: 'Eravikulam Park • Tea Museum • Mattupetty'
      },
      {
        id: 'kl-2',
        name: 'Alleppey',
        location: 'Alappuzha, Kerala',
        duration: '2 Days / 1 Night',
        image: '/images/dest-alleppey.jpg',
        title: 'Venetian Backwaters & Luxury Houseboats',
        desc: 'Drift along serene palm-fringed canals on a private air-conditioned houseboat with traditional sadhya.',
        highlights: 'Sunset Cruise • Village Canoeing • Vembanad Lake'
      },
      {
        id: 'kl-3',
        name: 'Wayanad',
        location: 'Wayanad, Kerala',
        duration: '3 Days / 2 Nights',
        image: '/images/dest-wayanad.jpg',
        title: 'Rainforest, Treehouses & Prehistoric Caves',
        desc: 'Discover Neolithic Edakkal caves, Banasura earthen dam, bamboo river rafting, and misty waterfalls.',
        highlights: 'Edakkal Caves • Chembra Peak • Treehouse Stay'
      },
      {
        id: 'kl-4',
        name: 'Kovalam',
        location: 'Thiruvananthapuram, Kerala',
        duration: '3 Days / 2 Nights',
        image: '/images/dest-kovalam.jpg',
        title: 'Golden Crescent Beach & Ayurvedic Spas',
        desc: 'Relax by the iconic red-and-white striped lighthouse, golden sands, and authentic Ayurvedic therapies.',
        highlights: 'Lighthouse Beach • Hawa Beach • Sunset Promenades'
      },
      {
        id: 'kl-5',
        name: 'Kumarakom',
        location: 'Kottayam, Kerala',
        duration: '2 Days / 1 Night',
        image: '/images/dest-kumarakom.jpg',
        title: 'Vembanad Mangrove & Bird Sanctuary',
        desc: 'A tranquil paradise of water lilies, mangrove canals, and migratory waterfowl on the edges of Vembanad.',
        highlights: 'Bird Sanctuary • Heritage Resorts • Village Life'
      },
      {
        id: 'kl-6',
        name: 'Thekkady',
        location: 'Periyar, Kerala',
        duration: '2 Days / 1 Night',
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
        title: 'Periyar Tiger Reserve & Wild Elephants',
        desc: 'Boat safari on Periyar Lake with wild elephant sightings, spice plantation walks, and martial arts.',
        highlights: 'Elephant Safari • Spice Gardens • Kathakali'
      },
      {
        id: 'kl-7',
        name: 'Varkala',
        location: 'Kollam, Kerala',
        duration: '3 Days / 2 Nights',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        title: 'Red Laterite Cliffs & Arabian Waves',
        desc: 'Towering cliff-top bohemian cafes overlooking the turquoise Arabian Sea with natural mineral springs.',
        highlights: 'Papanasam Beach • Cliff Cafes • Sunset Surfing'
      },
      {
        id: 'kl-8',
        name: 'Athirappilly',
        location: 'Thrissur, Kerala',
        duration: '2 Days / 1 Night',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        title: 'Niagara of India & Sholayar Rainforest',
        desc: 'Stand in awe before 80-foot thundering cascades surrounded by Western Ghats bio-diverse rainforest.',
        highlights: 'Bahubali Falls • Hornbill Trail • Jungle Safari'
      },
      {
        id: 'kl-9',
        name: 'Thrissur',
        location: 'Thrissur, Kerala',
        duration: '2 Days / 1 Night',
        image: '/images/dest-thrissur.jpg',
        title: 'Cultural Capital & Heritage Architecture',
        desc: 'Ancient temple architecture, vibrant percussion ensembles, classical arts, and rich historical legacy.',
        highlights: 'Vadakkunnathan • Heritage Museums • Mural Arts'
      }
    ]
  },
  india: {
    title: '2. ALL INDIA • Incredible Journeys',
    subtitle: 'From Himalayan Snows and Royal Palaces to Tropical Coral Islands',
    bgImage: '/images/bg-india-tajmahal.jpg',
    bgAlt: 'Taj Mahal Agra All India Background',
    items: [
      {
        id: 'in-1',
        name: 'Kashmir',
        location: 'Jammu & Kashmir',
        duration: '6 Days / 5 Nights',
        image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80',
        title: 'Paradise on Earth & Gulmarg Gondola',
        desc: 'Shimmering Dal Lake shikaras, Phase-2 snow-line cable cars, and pine-clad valleys of Pahalgam.',
        highlights: 'Dal Lake Houseboat • Gulmarg Snow • Betaab Valley'
      },
      {
        id: 'in-2',
        name: 'Himachal',
        location: 'Manali & Kasol',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        title: 'Alpine Magic, Snow Valleys & Atal Tunnel',
        desc: 'Breathtaking cedar forests, snow sports in Solang, engineering marvel Atal Tunnel, and Parvati river.',
        highlights: 'Solang Valley • Atal Tunnel • Kasol Riverside'
      },
      {
        id: 'in-3',
        name: 'Golden Triangle',
        location: 'Delhi, Agra & Jaipur',
        duration: '6 Days / 5 Nights',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        title: 'Mughal Wonder Taj Mahal & Rajput Royalty',
        desc: 'Sunrise at the marble masterpiece Taj Mahal, Amber Fort royal elephants, and pink palaces of Jaipur.',
        highlights: 'Taj Mahal Sunrise • Amber Fort • City Palace Jaipur'
      },
      {
        id: 'in-4',
        name: 'Goa',
        location: 'North & South Goa',
        duration: '4 Days / 3 Nights',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        title: 'Sun-Drenched Beaches & Portuguese Heritage',
        desc: 'Pristine white sand beaches, 16th-century cathedrals, spice farms, and lively sunset catamaran sails.',
        highlights: 'Palolem Beach • Old Goa Churches • Catamaran Cruise'
      },
      {
        id: 'in-5',
        name: 'Andaman',
        location: 'Havelock & Neil Island',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        title: 'Tropical Coral Islands & Scuba Diving',
        desc: 'Asia’s best Radhanagar beach, crystal turquoise waters, living coral reefs, and Cellular Jail history.',
        highlights: 'Radhanagar White Sands • Scuba Reefs • Light & Sound'
      },
      {
        id: 'in-6',
        name: 'Ladakh',
        location: 'Leh & Nubra Valley',
        duration: '7 Days / 6 Nights',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        title: 'Land of High Passes & Pangong Tso Lake',
        desc: 'Cross 18,380ft Khardung La pass, camp beside sapphire Pangong Lake, and explore ancient Buddhist gompas.',
        highlights: 'Pangong Tso • Khardung La 18,380ft • Nubra Dunes'
      }
    ]
  },
  international: {
    title: '3. INTERNATIONAL • World Escapes',
    subtitle: 'Futuristic Metropolises, Tropical Overwater Villas & Exotic Wonders',
    bgImage: '/images/bg-international-dubai.jpg',
    bgAlt: 'Dubai Burj Khalifa Skyline International Background',
    items: [
      {
        id: 'int-1',
        name: 'Dubai',
        location: 'United Arab Emirates',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        title: 'Burj Khalifa Skyline & Red Dune Desert Safari',
        desc: 'Panoramic views from 124th floor Burj Khalifa, 4x4 dune bashing, Arabian BBQ camps, and Marina cruises.',
        highlights: 'Burj Khalifa • 4x4 Dune Bashing • Marina Dhow Cruise'
      },
      {
        id: 'int-2',
        name: 'Bali',
        location: 'Indonesia',
        duration: '6 Days / 5 Nights',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        title: 'Tropical Island Temples & Nusa Penida Cliffs',
        desc: 'Ubud emerald jungle swings, dramatic Kelingking T-Rex cliffs, and Kecak fire dances atop sea cliffs.',
        highlights: 'Ubud Jungle Swing • Nusa Penida • Uluwatu Sunset'
      },
      {
        id: 'int-3',
        name: 'Thailand',
        location: 'Phuket & Krabi',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
        title: 'Emerald Lagoons & Phi Phi Island Speedboats',
        desc: 'Cruise to James Bond Island, snorkel in crystal lagoons of Maya Bay, and savor world-famous Thai street food.',
        highlights: 'Phi Phi Islands • Maya Bay • Speedboat Snorkeling'
      },
      {
        id: 'int-4',
        name: 'Singapore',
        location: 'Singapore',
        duration: '4 Days / 3 Nights',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
        title: 'Gardens by the Bay & Marina Bay Sands',
        desc: 'Futuristic Supertrees, Cloud Forest waterfall, nocturnal Night Safari, and Universal Studios Sentosa.',
        highlights: 'Supertree Grove • Marina Bay Sands • Sentosa'
      },
      {
        id: 'int-5',
        name: 'Maldives',
        location: 'Maldives Atolls',
        duration: '4 Days / 3 Nights',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
        title: 'Private Overwater Villas & Turquoise Atolls',
        desc: 'Step directly from your bedroom into crystal turquoise lagoons with private infinity pools and sunset dining.',
        highlights: 'Overwater Villa • Coral Snorkeling • Seaplane Transfer'
      },
      {
        id: 'int-6',
        name: 'Malaysia',
        location: 'Kuala Lumpur & Langkawi',
        duration: '5 Days / 4 Nights',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
        title: 'Petronas Twin Towers & Skybridge Views',
        desc: 'Gaze at gleaming twin towers, climb Batu Caves rainbow steps, and ride Langkawi world-steepest cable car.',
        highlights: 'Petronas Towers • Batu Caves • Langkawi SkyCab'
      }
    ]
  }
};

export default function DynamicDestinationsSlider() {
  const { openBooking } = useTheme();
  const [activeCategory, setActiveCategory] = useState<'kerala' | 'india' | 'international'>('kerala');
  const [pageIndex, setPageIndex] = useState(0);

  const currentData = DESTINATION_DATA[activeCategory];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(currentData.items.length / itemsPerPage);

  const visibleItems = currentData.items.slice(
    pageIndex * itemsPerPage,
    pageIndex * itemsPerPage + itemsPerPage
  );

  const handleCategoryChange = (cat: 'kerala' | 'india' | 'international') => {
    setActiveCategory(cat);
    setPageIndex(0);
  };

  const handlePrev = () => {
    setPageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="tours-section" className="relative w-full py-20 overflow-hidden font-montserrat font-light transition-all duration-700">
      
      {/* Dynamic Background Image - Switches with smooth crossfade between Kerala Houseboat, Taj Mahal, and Dubai */}
      <div className="absolute inset-0 z-0">
        <Image
          key={currentData.bgImage}
          src={currentData.bgImage}
          alt={currentData.bgAlt}
          fill
          priority
          quality={95}
          className="object-cover object-center scale-100 transition-opacity duration-700 animate-fade-in"
        />

        {/* Cinematic dark tint overlay to make text and cards pop like Reference Image 1 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Category Selector (Above the cards as requested) */}
        <div className="text-center max-w-3xl mx-auto mb-10 text-white">
          <p className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase mb-2">
            INSPIRATION &amp; EXPERT ADVICE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-3">
            {currentData.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 font-light max-w-xl mx-auto leading-relaxed">
            {currentData.subtitle}
          </p>

          {/* Option Selector: 1. KERALA, 2. All India, 3. International (Strictly rounded-none) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleCategoryChange('kerala')}
              className={`px-6 py-3 text-xs uppercase tracking-wider font-medium transition-all rounded-none border ${
                activeCategory === 'kerala'
                  ? 'bg-white text-slate-950 border-white shadow-2xl scale-105'
                  : 'bg-black/50 text-white border-white/40 hover:border-white hover:bg-black/70'
              }`}
            >
              1. KERALA (Houseboats &amp; Hills)
            </button>

            <button
              onClick={() => handleCategoryChange('india')}
              className={`px-6 py-3 text-xs uppercase tracking-wider font-medium transition-all rounded-none border ${
                activeCategory === 'india'
                  ? 'bg-white text-slate-950 border-white shadow-2xl scale-105'
                  : 'bg-black/50 text-white border-white/40 hover:border-white hover:bg-black/70'
              }`}
            >
              2. All India (Taj Mahal &amp; Peaks)
            </button>

            <button
              onClick={() => handleCategoryChange('international')}
              className={`px-6 py-3 text-xs uppercase tracking-wider font-medium transition-all rounded-none border ${
                activeCategory === 'international'
                  ? 'bg-white text-slate-950 border-white shadow-2xl scale-105'
                  : 'bg-black/50 text-white border-white/40 hover:border-white hover:bg-black/70'
              }`}
            >
              3. International (Dubai &amp; Beyond)
            </button>
          </div>
        </div>

        {/* Slider Controls Bar: Shows Page Indicator and Swipe Arrow Buttons */}
        <div className="flex items-center justify-between mb-6 text-white border-b border-white/20 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span>Showing:</span>
            <span className="text-white font-medium">
              Places {pageIndex * itemsPerPage + 1} - {Math.min((pageIndex + 1) * itemsPerPage, currentData.items.length)}
            </span>
            <span>of {currentData.items.length}</span>
          </div>

          {/* Swipe Buttons (Previous & Next) - Strictly rounded-none */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Destinations"
              className="p-2.5 bg-black/60 hover:bg-white hover:text-black text-white border border-white/40 transition-all rounded-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono px-2 text-slate-300">
              {pageIndex + 1} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next Destinations"
              className="p-2.5 bg-black/60 hover:bg-white hover:text-black text-white border border-white/40 transition-all rounded-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 CARDS IN ONE ROW - Matches User Reference Image 1 (Strictly rounded-none) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openBooking('package', item.name)}
              className="cursor-pointer group bg-white shadow-2xl border-2 border-transparent hover:border-white transition-all duration-300 rounded-none flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Photo Header */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900 rounded-none">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-none"
                  />

                  {/* Destination Tag */}
                  <div className="absolute top-3 left-3 bg-black/80 text-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-none">
                    {item.name}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/95 text-slate-900 px-2 py-0.5 text-[10px] font-medium tracking-tight rounded-none">
                    {item.duration}
                  </div>
                </div>

                {/* White Content Box Underneath - Matches Image 1 */}
                <div className="p-6 text-slate-800 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-lg font-medium text-slate-950 tracking-tight group-hover:text-emerald-800 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-2 text-[11px] text-slate-500 font-light border-t border-slate-100 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-700 shrink-0" />
                    <span className="truncate">{item.highlights}</span>
                  </div>
                </div>
              </div>

              {/* Card Bottom Action */}
              <div className="p-6 pt-0">
                <div className="w-full py-2.5 border border-slate-900 bg-slate-50 group-hover:bg-slate-950 group-hover:text-white transition-all text-center text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 rounded-none">
                  <span>Explore &amp; Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Swipe Hint below cards */}
        <div className="mt-8 flex items-center justify-center gap-4 text-white/70 text-xs font-light">
          <span>Click Left &amp; Right swipe buttons to browse all {currentData.items.length} featured places</span>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPageIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 transition-all rounded-none ${
                  pageIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
