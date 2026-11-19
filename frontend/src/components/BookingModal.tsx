'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  X,
  Calendar,
  User,
  Phone,
  MapPin,
  Users,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';

const KERALA_ACTIVITIES = [
  'Honey Farm Visit & Hive Extraction',
  'Tea Garden Walk & Plucking Experience',
  'Speed Boating & Scenic Lake Cruise',
  'Authentic Ayurvedic Massage & Therapy',
  'Kathakali & Kalaripayattu Martial Show',
  'Spice Garden & Aroma Plantation Tour',
  'Wild Elephant Jungle Safari',
  'Adventure Park & Treetop Ropeway',
  'Skywalk Glass Bridge Walk Experience',
  'Mountain Tent Camping Under Stars',
  'Riverside Campfire Grilling & BBQ Night',
  'Live Cultural Music & Festival Night',
  'Custom Activity / Full Day Package'
];

const JEEP_ROUTES = [
  'Kolukkumalai Sunrise Peak Safari',
  'Meeshappulimala 4x4 Mountain Trail',
  'Vagamon Pine Valley & Meadows Safari',
  'Anachaal Off-Road Forest Trail',
  'Marayoor Sandalwood & Waterfalls',
  'Mamalakkandam Dense Jungle River Crossing',
  'Nelliyampathy Orange & Tea Hill Safari',
  'Anakkulam Wild Elephant Stream Trail',
  'Kanthalloor Fruit Orchards Safari',
  'Chathurangappara Windmill Viewpoint'
];

const TREK_DESTINATIONS = [
  'Meeshappulimala Summit Trek (2,640m)',
  'Kolukkumalai Cloud Walk & Organic Tea Trek',
  'Chembra Peak & Heart Lake (Wayanad)',
  'Anamudi Shola Rainforest Trail',
  'Vagamon Pine Forest Ridge Hike',
  'Nelliyampathy Seethargundu Cliff Walk',
  'Mamalakkandam Virgin River Trail',
  'Anakkulam Elephant Waterhole Trek'
];

const PHOTO_SHOOTS = [
  'Travel Photography Session',
  'Destination Wedding & Event Photography',
  '4K Drone Aerial Cinematography Shoot',
  'Cinematic Travel Film & Reels Shoot'
];

export default function BookingModal() {
  const { bookingModal, closeBooking } = useTheme();
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    travelDate: '',
    guests: 2,
    serviceType: 'package',
    selectedItem: '',
    pickupLocation: '',
    dropLocation: '',
    taxiVehicle: 'Toyota Innova Crysta (MPV - 7 Seats)',
    tripType: 'One-Way',
    timeSlot: 'Morning (09:00 AM)',
    notes: '',
    totalAmount: 0
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResponse, setSuccessResponse] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bookingModal.isOpen) {
      let defaultItem = bookingModal.initialItem || '';
      if (!defaultItem) {
        if (bookingModal.serviceType === 'events') defaultItem = KERALA_ACTIVITIES[0];
        else if (bookingModal.serviceType === 'jeep') defaultItem = JEEP_ROUTES[0];
        else if (bookingModal.serviceType === 'trekking') defaultItem = TREK_DESTINATIONS[0];
        else if (bookingModal.serviceType === 'photography') defaultItem = PHOTO_SHOOTS[0];
        else if (bookingModal.serviceType === 'taxi') defaultItem = 'Kerala Taxi Service';
        else defaultItem = 'Kerala Tour Package';
      }

      setFormData(prev => ({
        ...prev,
        serviceType: bookingModal.serviceType,
        selectedItem: defaultItem,
        totalAmount: bookingModal.initialAmount || 0,
        travelDate: new Date(Date.now() + 86400000).toISOString().split('T')[0]
      }));
      setSuccessResponse(null);
      setErrorMessage(null);
    }
  }, [bookingModal]);

  if (!bookingModal.isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('http://localhost:5001/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to submit reservation. Please try WhatsApp directly.');
      }

      const data = await res.json();
      setSuccessResponse(data.booking);
    } catch (err: any) {
      setErrorMessage(err.message || 'Error processing request');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const isTaxi = formData.serviceType === 'taxi';
    const isEvent = formData.serviceType === 'events';
    const text = encodeURIComponent(
      `Hello Jack Rider Travels!\n\nI would like to inquire about a reservation:\n` +
      `• Service: ${formData.serviceType.toUpperCase()}\n` +
      `• Selection: ${formData.selectedItem || 'General Inquiry'}\n` +
      (isTaxi
        ? `• Vehicle Class: ${formData.taxiVehicle}\n` +
          `• Pickup (From): ${formData.pickupLocation || 'Munnar / Cochin'}\n` +
          `• Drop-off (To): ${formData.dropLocation || 'Kerala Destination'}\n` +
          `• Trip Type: ${formData.tripType}\n`
        : '') +
      (isEvent ? `• Preferred Slot: ${formData.timeSlot}\n` : '') +
      (!isTaxi ? `• Pickup Location: ${formData.pickupLocation || 'Munnar / Kerala'}\n` : '') +
      `• Traveler Name: ${formData.customerName || 'Explorer'}\n` +
      `• Travel Date: ${formData.travelDate}\n` +
      `• Guests: ${formData.guests}\n` +
      `${formData.notes ? `• Special Requests: ${formData.notes}\n` : ''}`
    );
    window.open(`https://wa.me/919847012345?text=${text}`, '_blank');
  };

  const getModalTitle = () => {
    switch (formData.serviceType) {
      case 'taxi': return 'Kerala Taxi Booking';
      case 'events': return 'Book an Activity / Event';
      case 'jeep': return '4x4 Jeep Safari Booking';
      case 'trekking': return 'Guided Trekking Booking';
      case 'photography': return 'Photography & Drone Shoot';
      default: return formData.selectedItem || 'Book Experience';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fade-in font-montserrat font-light">
      <div className="relative w-full max-w-md bg-white rounded-none p-4 sm:p-5 shadow-2xl text-slate-800 border-2 border-slate-900 max-h-[92vh] flex flex-col">
        
        {/* Header - Compact */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 shrink-0">
          <div>
            <span className="text-[9px] font-mono tracking-widest text-emerald-800 uppercase bg-emerald-50 px-2 py-0.5 border border-emerald-200">
              Jack Rider Reservation
            </span>
            <h3 className="text-base sm:text-lg font-normal text-slate-900 mt-0.5 leading-snug truncate max-w-[280px] sm:max-w-xs">
              {getModalTitle()}
            </h3>
          </div>
          <button
            onClick={closeBooking}
            className="p-1 hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors border border-transparent hover:border-slate-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Success Screen */}
        {successResponse ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center border border-emerald-200">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-normal text-slate-900">Booking Request Received!</h4>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Thank you, <span className="font-medium text-slate-900">{formData.customerName}</span>. Booking ref:{' '}
              <span className="font-mono font-medium bg-slate-100 px-2 py-0.5 text-emerald-900 border border-slate-200">
                {successResponse.id}
              </span>.
            </p>
            <p className="text-[11px] text-slate-400">
              We will contact you at {formData.phone} shortly.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={handleWhatsAppDirect}
                className="py-2 px-3 bg-emerald-800 hover:bg-emerald-700 text-white font-normal text-xs flex items-center justify-center gap-1.5 transition-all shadow border border-emerald-900"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
              </button>
              <button
                onClick={closeBooking}
                className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-normal text-xs transition-colors border border-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="overflow-y-auto pr-1 space-y-2.5 text-xs">
            {errorMessage && (
              <div className="p-2 bg-red-50 text-red-700 text-[11px] flex items-center gap-1.5 border border-red-200">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Row 1: Full Name & Phone in 1 compact row */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-normal text-slate-600 mb-0.5">
                  Full Name *
                </label>
                <div className="flex items-center w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 focus-within:border-slate-900 px-2.5 gap-2 transition-colors">
                  <User className="w-3.5 h-3.5 text-slate-400 shrink-0 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={formData.customerName}
                    onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="Rahul Menon"
                    className="w-full bg-transparent border-none p-0 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 min-w-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-normal text-slate-600 mb-0.5">
                  Phone / WhatsApp *
                </label>
                <div className="flex items-center w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 focus-within:border-slate-900 px-2.5 gap-2 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98470 00000"
                    className="w-full bg-transparent border-none p-0 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 min-w-0"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Travel Date & Number of Guests in 1 compact row */}
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-7">
                <label className="block text-[11px] font-normal text-slate-600 mb-0.5">
                  Travel Date *
                </label>
                <div 
                  onClick={() => {
                    try {
                      if (dateInputRef.current && 'showPicker' in HTMLInputElement.prototype) {
                        dateInputRef.current.showPicker();
                      } else {
                        dateInputRef.current?.focus();
                      }
                    } catch {
                      dateInputRef.current?.focus();
                    }
                  }}
                  className="flex items-center w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 focus-within:border-slate-900 px-2.5 gap-2 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0 pointer-events-none" />
                  <input
                    ref={dateInputRef}
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.travelDate}
                    onChange={e => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-transparent border-none p-0 text-xs text-slate-800 focus:outline-none focus:ring-0 cursor-pointer min-w-0"
                  />
                </div>
              </div>

              <div className="col-span-5">
                <label className="block text-[11px] font-normal text-slate-600 mb-0.5">
                  Guests
                </label>
                <div className="flex items-center w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 focus-within:border-slate-900 px-2.5 gap-2 transition-colors">
                  <Users className="w-3.5 h-3.5 text-slate-400 shrink-0 pointer-events-none" />
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                    className="w-full bg-transparent border-none p-0 text-xs text-slate-800 focus:outline-none focus:ring-0 min-w-0"
                  />
                </div>
              </div>
            </div>

            {/* SERVICE SPECIFIC OPTIONS */}
            
            {/* 1. TAXI SERVICE FIELDS */}
            {formData.serviceType === 'taxi' && (
              <div className="space-y-2 pt-1 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5">
                      Vehicle Class *
                    </label>
                    <select
                      value={formData.taxiVehicle}
                      onChange={e => setFormData({ ...formData, taxiVehicle: e.target.value })}
                      className="w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 px-2 text-xs text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
                    >
                      <option value="Toyota Innova Crysta (MPV - 7 Seats)">Innova Crysta (7 Seats)</option>
                      <option value="Sedan (Dzire / Etios - 4 Seats)">Sedan (4 Seats)</option>
                      <option value="Tempo Traveller (12 to 20 Seats)">Tempo Traveller (12-20)</option>
                      <option value="Luxury Tourist Bus (30 to 45 Seats)">Tourist Bus (30-45)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5">
                      Trip Type *
                    </label>
                    <div className="grid grid-cols-2 gap-1 h-8 sm:h-9">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, tripType: 'One-Way' })}
                        className={`h-full text-[11px] font-normal border transition-colors flex items-center justify-center ${
                          formData.tripType === 'One-Way'
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-slate-50 text-slate-700 border-slate-300'
                        }`}
                      >
                        One-Way
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, tripType: 'Round-Trip' })}
                        className={`h-full text-[11px] font-normal border transition-colors flex items-center justify-center ${
                          formData.tripType === 'Round-Trip'
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-slate-50 text-slate-700 border-slate-300'
                        }`}
                      >
                        Round-Trip
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5">
                      Pickup (From) *
                    </label>
                    <div className="flex items-center w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 focus-within:border-slate-900 px-2.5 gap-2 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-emerald-800 shrink-0 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={formData.pickupLocation}
                        onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
                        placeholder="Airport / City"
                        className="w-full bg-transparent border-none p-0 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 min-w-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5">
                      Drop-off (To) *
                    </label>
                    <div className="flex items-center w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 focus-within:border-slate-900 px-2.5 gap-2 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={formData.dropLocation}
                        onChange={e => setFormData({ ...formData, dropLocation: e.target.value })}
                        placeholder="Resort / City"
                        className="w-full bg-transparent border-none p-0 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 min-w-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ACTIVITY & EVENTS FIELDS (User requested options for book an activity) */}
            {formData.serviceType === 'events' && (
              <div className="space-y-2 pt-1 border-t border-slate-200">
                <div>
                  <label className="block text-[11px] font-normal text-slate-700 mb-0.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-700" />
                    <span>Choose Activity / Event *</span>
                  </label>
                  <select
                    value={formData.selectedItem}
                    onChange={e => setFormData({ ...formData, selectedItem: e.target.value })}
                    className="w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 px-2 text-xs text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
                  >
                    {KERALA_ACTIVITIES.map((act, idx) => (
                      <option key={idx} value={act}>
                        {idx + 1}. {act}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>Preferred Slot</span>
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 px-2 text-xs text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
                    >
                      <option value="Morning (09:00 AM)">Morning (9:00 AM)</option>
                      <option value="Afternoon (02:00 PM)">Afternoon (2:00 PM)</option>
                      <option value="Sunset / Evening (05:00 PM)">Sunset / Evening (5:00 PM)</option>
                      <option value="Night Campfire (07:30 PM)">Night Campfire (7:30 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>Resort / Area</span>
                    </label>
                    <input
                      type="text"
                      value={formData.pickupLocation}
                      onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
                      placeholder="e.g. Munnar, Thekkady"
                      className="w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 px-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 3. JEEP SAFARI FIELDS */}
            {formData.serviceType === 'jeep' && (
              <div className="space-y-2 pt-1 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5">
                      Safari Route *
                    </label>
                    <select
                      value={formData.selectedItem}
                      onChange={e => setFormData({ ...formData, selectedItem: e.target.value })}
                      className="w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 px-2 text-xs text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
                    >
                      {JEEP_ROUTES.map((route, i) => (
                        <option key={i} value={route}>{route.split(' ')[0]} Safari</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5">
                      Pickup Resort / Town
                    </label>
                    <input
                      type="text"
                      value={formData.pickupLocation}
                      onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
                      placeholder="e.g. Munnar Town"
                      className="w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 px-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 4. TREKKING FIELDS */}
            {formData.serviceType === 'trekking' && (
              <div className="space-y-2 pt-1 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5">
                      Trek Route *
                    </label>
                    <select
                      value={formData.selectedItem}
                      onChange={e => setFormData({ ...formData, selectedItem: e.target.value })}
                      className="w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 px-2 text-xs text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
                    >
                      {TREK_DESTINATIONS.map((trek, i) => (
                        <option key={i} value={trek}>{trek.split(' ')[0]} Trek</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5">
                      Pickup / Base Camp
                    </label>
                    <input
                      type="text"
                      value={formData.pickupLocation}
                      onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
                      placeholder="e.g. Munnar Base"
                      className="w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 px-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 5. PHOTOGRAPHY / DRONE FIELDS */}
            {formData.serviceType === 'photography' && (
              <div className="space-y-2 pt-1 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5">
                      Shoot Type *
                    </label>
                    <select
                      value={formData.selectedItem}
                      onChange={e => setFormData({ ...formData, selectedItem: e.target.value })}
                      className="w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 px-2 text-xs text-slate-800 focus:outline-none focus:border-slate-900 cursor-pointer"
                    >
                      {PHOTO_SHOOTS.map((shoot, i) => (
                        <option key={i} value={shoot}>{shoot}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-normal text-slate-700 mb-0.5">
                      Shoot Location
                    </label>
                    <input
                      type="text"
                      value={formData.pickupLocation}
                      onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
                      placeholder="e.g. Tea Estate, Resort"
                      className="w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 px-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 6. GENERAL TOUR PACKAGE */}
            {formData.serviceType === 'package' && (
              <div>
                <label className="block text-[11px] font-normal text-slate-600 mb-0.5">
                  Pickup Location / City
                </label>
                <div className="flex items-center w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 focus-within:border-slate-900 px-2.5 gap-2 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 pointer-events-none" />
                  <input
                    type="text"
                    value={formData.pickupLocation}
                    onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="Munnar, Cochin Airport, Aluva..."
                    className="w-full bg-transparent border-none p-0 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 min-w-0"
                  />
                </div>
              </div>
            )}

            {/* Special Requests - Compact 1-line */}
            <div>
              <label className="block text-[11px] font-normal text-slate-600 mb-0.5">
                Special Requests / Timings (Optional)
              </label>
              <input
                type="text"
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                placeholder="e.g. Sunrise timing, infant seat, flight no..."
                className="w-full h-8 sm:h-9 bg-slate-50 border border-slate-300 px-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900"
              />
            </div>

            {/* Action buttons - Compact side-by-side */}
            <div className="pt-2 grid grid-cols-2 gap-2 shrink-0">
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2 px-3 bg-slate-950 hover:bg-black disabled:opacity-50 text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow transition-all border border-black"
              >
                <Send className="w-3 h-3" />
                <span>{isSubmitting ? 'Sending...' : 'Confirm Request'}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-normal text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-300"
              >
                <MessageSquare className="w-3 h-3 text-emerald-800" />
                <span>WhatsApp Direct</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
