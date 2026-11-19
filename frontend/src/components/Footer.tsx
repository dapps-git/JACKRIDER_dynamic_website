'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Globe,
  Compass,
  Mountain
} from 'lucide-react';

export default function Footer() {
  const scrollToDestinations = () => {
    const el = document.getElementById('destinations-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#07432c] text-white pt-16 pb-10 font-montserrat font-light border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/15">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/jack-rider-logo-white.png"
                alt="Jack Rider Tours & Travels"
                width={170}
                height={45}
                className="h-10 w-auto object-contain brightness-100"
              />
            </Link>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
              Jack Rider Tours &amp; Travels is Kerala&apos;s premier bespoke travel collective. Crafting authentic Munnar adventures, luxury backwater houseboat cruises, All India tours, and exotic international holidays.
            </p>
          </div>

          {/* Quick Links: 1. KERALA */}
          <div className="space-y-3">
            <h4 className="text-xs font-normal text-white uppercase tracking-wider flex items-center gap-1.5">
              <Mountain className="w-3.5 h-3.5 text-emerald-300" />
              <span>1. KERALA Holidays</span>
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-light">
              <li><Link href="/jeep-safari" className="hover:text-white text-left transition-colors flex items-center gap-1">4x4 Jeep Safari (12 Routes) &rarr;</Link></li>
              <li><Link href="/taxi-service" className="hover:text-white text-left transition-colors flex items-center gap-1">Taxi Service (Sedan/MPV/Bus) &rarr;</Link></li>
              <li><Link href="/guide-trekking" className="hover:text-white text-left transition-colors flex items-center gap-1">Guide &amp; Trekking (8 Routes) &rarr;</Link></li>
              <li><button onClick={scrollToDestinations} className="hover:text-white text-left transition-colors">Munnar Tea Hills &amp; Mist</button></li>
              <li><button onClick={scrollToDestinations} className="hover:text-white text-left transition-colors">Alleppey Luxury Houseboats</button></li>
              <li><button onClick={scrollToDestinations} className="hover:text-white text-left transition-colors">Wayanad Rainforest &amp; Caves</button></li>
              <li><button onClick={scrollToDestinations} className="hover:text-white text-left transition-colors">Thekkady Tiger Reserve</button></li>
            </ul>
          </div>

          {/* All India & International */}
          <div className="space-y-3">
            <h4 className="text-xs font-normal text-white uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-300" />
              <span>India &amp; International</span>
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-light">
              <li><button onClick={scrollToDestinations} className="hover:text-white text-left transition-colors">Kashmir &amp; Gulmarg Gondola</button></li>
              <li><button onClick={scrollToDestinations} className="hover:text-white text-left transition-colors">Himachal &amp; Atal Tunnel</button></li>
              <li><button onClick={scrollToDestinations} className="hover:text-white text-left transition-colors">Taj Mahal Golden Triangle</button></li>
              <li><button onClick={scrollToDestinations} className="hover:text-white text-left transition-colors">Dubai Burj Khalifa &amp; Desert</button></li>
              <li><button onClick={scrollToDestinations} className="hover:text-white text-left transition-colors">Bali Jungle Swings &amp; Cliffs</button></li>
              <li><button onClick={scrollToDestinations} className="hover:text-white text-left transition-colors">Maldives Luxury Overwater</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-normal text-white uppercase tracking-wider">
              Contact &amp; Booking
            </h4>
            <div className="space-y-2.5 text-xs text-white/85 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0 mt-0.5" />
                <span>Head Office: Near KSRTC, Munnar, Kerala - 685612</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <a href="tel:+919847012345" className="hover:text-white transition-colors">+91 98470 12345</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span>booking@jackridertravels.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span>24/7 Traveler Assistance</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919847012345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-emerald-50 text-[#07432c] font-normal text-xs transition-colors shadow-md rounded-full group"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                <span>WhatsApp Live Chat</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 font-light gap-4">
          <p>© {new Date().getFullYear()} Jack Rider Tours &amp; Travels. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-white/70">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Kerala Specialist</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
