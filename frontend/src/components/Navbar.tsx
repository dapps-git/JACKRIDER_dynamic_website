'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import {
  ChevronDown,
  Menu,
  X,
  MapPin,
  Compass,
  Globe,
  Camera,
  Film,
  Plane,
  Hotel
} from 'lucide-react';

export default function Navbar() {
  const { openBooking } = useTheme();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (key: string) => {
    setActiveDropdown(prev => (prev === key ? null : key));
  };

  const toggleMobileDropdown = (key: string) => {
    setMobileDropdown(prev => (prev === key ? null : key));
  };

  const scrollToSection = (id: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-montserrat ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-1.5 sm:py-2'
          : 'bg-transparent border-transparent py-2 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 sm:h-12">
          
          {/* Logo Section - Hiker in Green + Jack Rider Tours & Travels (Reduced Sleek Size on Mobile) */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/jack-rider-logo-transparent.png"
              alt="Jack Rider Tours & Travels"
              width={140}
              height={36}
              className={`h-6 sm:h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation Links - Montserrat Light / Regular (300-400), No Bold, No Italic */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[12.5px] font-normal">
            
            {/* Home with active underline indicator */}
            <div className="relative py-2">
              <Link
                href="/"
                className={`transition-colors ${
                  scrolled
                    ? 'text-emerald-900 font-normal'
                    : 'text-white font-normal'
                }`}
              >
                Home
              </Link>
              <span
                className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-colors ${
                  scrolled ? 'bg-emerald-800' : 'bg-emerald-400'
                }`}
              />
            </div>

            {/* Kerala ⌵ Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('kerala')}
                onMouseEnter={() => setActiveDropdown('kerala')}
                className={`flex items-center gap-1 font-normal transition-colors py-2 ${
                  scrolled
                    ? 'text-slate-700 hover:text-emerald-800'
                    : 'text-white/95 hover:text-white'
                }`}
              >
                <span>Kerala</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'kerala' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'kerala' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-100 rounded-xl p-3 shadow-xl text-slate-800 animate-fade-in z-50 font-montserrat"
                >
                  <div className="text-[11px] font-normal text-emerald-800 uppercase tracking-wider px-2 py-1 border-b border-slate-100">
                    Kerala Destinations
                  </div>
                  <div className="mt-1 space-y-0.5 text-xs font-normal">
                    {['Munnar', 'Alleppey', 'Wayanad', 'Kovalam', 'Thekkady', 'Thrissur', 'Varkala'].map((item, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToSection('destinations-section')}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-800 transition-colors flex items-center gap-2 font-normal text-slate-700"
                      >
                        <MapPin className="w-3 h-3 text-emerald-700" />
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* All India ⌵ Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('india')}
                onMouseEnter={() => setActiveDropdown('india')}
                className={`flex items-center gap-1 font-normal transition-colors py-2 ${
                  scrolled
                    ? 'text-slate-700 hover:text-emerald-800'
                    : 'text-white/95 hover:text-white'
                }`}
              >
                <span>All India</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'india' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'india' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-60 bg-white border border-slate-100 rounded-xl p-3 shadow-xl text-slate-800 animate-fade-in z-50 font-montserrat"
                >
                  <div className="text-[11px] font-normal text-emerald-800 uppercase tracking-wider px-2 py-1 border-b border-slate-100">
                    All India Circuits
                  </div>
                  <div className="mt-1 space-y-0.5 text-xs font-normal">
                    {['Kashmir Paradise', 'Himachal Valleys', 'Golden Triangle', 'Goa Beaches', 'Andaman Islands', 'Ladakh Passes'].map((item, i) => (
                      <button
                        key={i}
                        onClick={() => openBooking('package', item)}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-800 transition-colors flex items-center gap-2 font-normal text-slate-700"
                      >
                        <Globe className="w-3 h-3 text-emerald-700" />
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* International ⌵ Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('international')}
                onMouseEnter={() => setActiveDropdown('international')}
                className={`flex items-center gap-1 font-normal transition-colors py-2 ${
                  scrolled
                    ? 'text-slate-700 hover:text-emerald-800'
                    : 'text-white/95 hover:text-white'
                }`}
              >
                <span>International</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'international' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'international' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-60 bg-white border border-slate-100 rounded-xl p-3 shadow-xl text-slate-800 animate-fade-in z-50 font-montserrat"
                >
                  <div className="text-[11px] font-normal text-emerald-800 uppercase tracking-wider px-2 py-1 border-b border-slate-100">
                    World Holidays
                  </div>
                  <div className="mt-1 space-y-0.5 text-xs font-normal">
                    {['Dubai Skyline', 'Bali Island Haven', 'Thailand Getaways', 'Singapore City', 'Maldives Overwater', 'Malaysia Explorer'].map((item, i) => (
                      <button
                        key={i}
                        onClick={() => openBooking('package', item)}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-800 transition-colors flex items-center gap-2 font-normal text-slate-700"
                      >
                        <Globe className="w-3 h-3 text-emerald-700" />
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services ⌵ Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                onMouseEnter={() => setActiveDropdown('services')}
                className={`flex items-center gap-1 font-normal transition-colors py-2 ${
                  scrolled
                    ? 'text-slate-700 hover:text-emerald-800'
                    : 'text-white/95 hover:text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'services' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-100 rounded-xl p-3 shadow-xl text-slate-800 animate-fade-in z-50 font-montserrat"
                >
                  <div className="text-[11px] font-normal text-emerald-800 uppercase tracking-wider px-2 py-1 border-b border-slate-100">
                    Our Core Services
                  </div>
                  <div className="mt-1 space-y-0.5 text-xs font-normal">
                    <Link
                      href="/jeep-safari"
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-800 transition-colors flex items-center gap-2 font-normal text-slate-700"
                    >
                      <Compass className="w-3 h-3 text-emerald-700" />
                      <span>Jeep Safari (12 Locations)</span>
                    </Link>
                    <Link
                      href="/taxi-service"
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-800 transition-colors flex items-center gap-2 font-normal text-slate-700"
                    >
                      <Compass className="w-3 h-3 text-emerald-700" />
                      <span>Taxi Service (Sedan/MPV/Bus)</span>
                    </Link>
                    <Link
                      href="/guide-trekking"
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-800 transition-colors flex items-center gap-2 font-normal text-slate-700"
                    >
                      <Compass className="w-3 h-3 text-emerald-700" />
                      <span>Guide & Trekking (8 Routes)</span>
                    </Link>
                    <button
                      onClick={() => {
                        setActiveDropdown(null);
                        openBooking('hotel', 'Kerala Hotel & Stay Booking');
                      }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-800 transition-colors flex items-center gap-2 font-normal text-slate-700"
                    >
                      <Hotel className="w-3 h-3 text-emerald-700" />
                      <span>Hotel &amp; Stay Booking</span>
                    </button>
                    <div className="pt-1 mt-1 border-t border-slate-100 text-[10.5px] font-normal text-emerald-800 uppercase tracking-wider px-2">
                      Photography &amp; Videography
                    </div>
                    <Link
                      href="/photography-videography/travel-photography"
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-800 transition-colors flex items-center gap-2 font-normal text-slate-700"
                    >
                      <Camera className="w-3 h-3 text-emerald-700" />
                      <span>Travel Photography</span>
                    </Link>
                    <Link
                      href="/photography-videography/event-photography"
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-800 transition-colors flex items-center gap-2 font-normal text-slate-700"
                    >
                      <Camera className="w-3 h-3 text-emerald-700" />
                      <span>Event Photography</span>
                    </Link>
                    <Link
                      href="/photography-videography/travel-videography"
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-800 transition-colors flex items-center gap-2 font-normal text-slate-700"
                    >
                      <Film className="w-3 h-3 text-emerald-700" />
                      <span>Travel Videography</span>
                    </Link>
                    <Link
                      href="/photography-videography/drone-videography"
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-emerald-800 transition-colors flex items-center gap-2 font-normal text-slate-700"
                    >
                      <Plane className="w-3 h-3 text-emerald-700" />
                      <span>Drone Videography</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Events & Activities */}
            <Link
              href="/events"
              className={`font-normal transition-colors py-2 ${
                scrolled
                  ? 'text-slate-700 hover:text-emerald-800'
                  : 'text-white/95 hover:text-white'
              }`}
            >
              Events
            </Link>

            {/* About Us */}
            <button
              onClick={() => scrollToSection('about-section')}
              className={`font-normal transition-colors py-2 ${
                scrolled
                  ? 'text-slate-700 hover:text-emerald-800'
                  : 'text-white/95 hover:text-white'
              }`}
            >
              About Us
            </button>

          </nav>

          {/* Mobile Menu Toggle (White on hero, dark on scroll) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Only the 6 core content items matching desktop navbar) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-5 py-3 space-y-2 font-montserrat animate-fade-in shadow-xl text-slate-800">
          
          {/* 1. Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-normal text-emerald-900 border-b border-slate-100"
          >
            Home
          </Link>

          {/* 2. Kerala ⌵ */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => toggleMobileDropdown('kerala')}
              className="w-full text-left py-2 text-sm font-normal text-slate-700 hover:text-emerald-800 flex items-center justify-between"
            >
              <span>Kerala</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'kerala' ? 'rotate-180 text-emerald-800' : 'text-slate-400'}`} />
            </button>
            {mobileDropdown === 'kerala' && (
              <div className="pl-3 pb-2 pt-1 space-y-1.5 text-xs text-slate-600 bg-slate-50/60 rounded-lg mb-2">
                {['Munnar', 'Alleppey', 'Wayanad', 'Kovalam', 'Thekkady', 'Thrissur', 'Varkala'].map((dest, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection('destinations-section')}
                    className="block w-full text-left py-1 hover:text-emerald-800"
                  >
                    {dest}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3. All India ⌵ */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => toggleMobileDropdown('india')}
              className="w-full text-left py-2 text-sm font-normal text-slate-700 hover:text-emerald-800 flex items-center justify-between"
            >
              <span>All India</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'india' ? 'rotate-180 text-emerald-800' : 'text-slate-400'}`} />
            </button>
            {mobileDropdown === 'india' && (
              <div className="pl-3 pb-2 pt-1 space-y-1.5 text-xs text-slate-600 bg-slate-50/60 rounded-lg mb-2">
                {['Goa Beach Holiday', 'Rajasthan Royal Heritage', 'Himachal Mountain Escape', 'Kashmir Paradise'].map((dest, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openBooking('package', dest);
                    }}
                    className="block w-full text-left py-1 hover:text-emerald-800"
                  >
                    {dest}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4. International ⌵ */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => toggleMobileDropdown('international')}
              className="w-full text-left py-2 text-sm font-normal text-slate-700 hover:text-emerald-800 flex items-center justify-between"
            >
              <span>International</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'international' ? 'rotate-180 text-emerald-800' : 'text-slate-400'}`} />
            </button>
            {mobileDropdown === 'international' && (
              <div className="pl-3 pb-2 pt-1 space-y-1.5 text-xs text-slate-600 bg-slate-50/60 rounded-lg mb-2">
                {['Dubai Luxury Getaway', 'Bali Island Escape', 'Maldives Overwater Resort', 'Thailand Tropical Tour'].map((dest, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openBooking('package', dest);
                    }}
                    className="block w-full text-left py-1 hover:text-emerald-800"
                  >
                    {dest}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 5. Services ⌵ */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => toggleMobileDropdown('services')}
              className="w-full text-left py-2 text-sm font-normal text-slate-700 hover:text-emerald-800 flex items-center justify-between"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'services' ? 'rotate-180 text-emerald-800' : 'text-slate-400'}`} />
            </button>
            {mobileDropdown === 'services' && (
              <div className="pl-3 pb-2 pt-1 space-y-1.5 text-xs text-slate-600 bg-slate-50/60 rounded-lg mb-2">
                <Link
                  href="/jeep-safari"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-emerald-800"
                >
                  Jeep Safari
                </Link>
                <Link
                  href="/taxi-service"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-emerald-800"
                >
                  Taxi Service
                </Link>
                <Link
                  href="/guide-trekking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-emerald-800"
                >
                  Guide &amp; Trekking
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBooking('hotel', 'Kerala Hotel & Stay Booking');
                  }}
                  className="block py-1 hover:text-emerald-800 text-left w-full"
                >
                  Hotel &amp; Stay Booking
                </button>
                <Link
                  href="/photography-videography"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-emerald-800"
                >
                  Photography &amp; Videography
                </Link>
                <Link
                  href="/events"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-emerald-800"
                >
                  Events &amp; Activities
                </Link>
              </div>
            )}
          </div>

          {/* 6. About Us */}
          <button
            onClick={() => scrollToSection('about-section')}
            className="w-full text-left py-2 text-sm font-normal text-slate-700 hover:text-emerald-800"
          >
            About Us
          </button>

        </div>
      )}
    </header>
  );
}