'use client';

import React, { useState, useEffect } from 'react';
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
  AlertCircle
} from 'lucide-react';

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
    notes: '',
    totalAmount: 0
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResponse, setSuccessResponse] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (bookingModal.isOpen) {
      setFormData(prev => ({
        ...prev,
        serviceType: bookingModal.serviceType,
        selectedItem: bookingModal.initialItem || '',
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
    const text = encodeURIComponent(
      `Hello Jack Rider Travels!\n\nI would like to inquire about a reservation:\n` +
      `• Service: ${formData.serviceType.toUpperCase()}\n` +
      `• Destination/Item: ${formData.selectedItem || 'General Inquiry'}\n` +
      `• Traveler Name: ${formData.customerName || 'Explorer'}\n` +
      `• Travel Date: ${formData.travelDate}\n` +
      `• Guests: ${formData.guests}\n` +
      `• Pickup: ${formData.pickupLocation || 'Munnar / Kerala'}\n` +
      `${formData.notes ? `• Notes: ${formData.notes}\n` : ''}`
    );
    window.open(`https://wa.me/919847012345?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in font-montserrat font-light">
      <div className="relative w-full max-w-lg bg-white rounded-none p-6 sm:p-7 shadow-2xl text-slate-800 border-2 border-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-emerald-800 uppercase bg-emerald-50 px-2.5 py-0.5 border border-emerald-200 rounded-none">
              Jack Rider Reservation
            </span>
            <h3 className="text-xl font-normal text-slate-900 mt-1.5">
              {formData.selectedItem || 'Book Your Experience'}
            </h3>
          </div>
          <button
            onClick={closeBooking}
            className="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors border border-transparent hover:border-slate-300 rounded-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Screen */}
        {successResponse ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center border border-emerald-200 rounded-none">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-normal text-slate-900">Booking Request Received!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Thank you, <span className="font-medium text-slate-900">{formData.customerName}</span>. Your booking reference is{' '}
              <span className="font-mono font-medium bg-slate-100 px-2 py-0.5 text-emerald-900 border border-slate-200 rounded-none">
                {successResponse.id}
              </span>.
            </p>
            <p className="text-[11px] text-slate-400">
              Our travel coordinator will contact you at {formData.phone} shortly.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={handleWhatsAppDirect}
                className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-normal text-xs flex items-center justify-center gap-2 transition-all shadow rounded-none border border-emerald-900"
              >
                <MessageSquare className="w-4 h-4" /> Open WhatsApp Confirmation
              </button>
              <button
                onClick={closeBooking}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-normal text-xs transition-colors rounded-none border border-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            {errorMessage && (
              <div className="p-2.5 bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200 rounded-none">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-normal text-slate-600 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.customerName}
                    onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="e.g. Rahul Menon"
                    className="w-full bg-slate-50 border border-slate-300 pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900 rounded-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-normal text-slate-600 mb-1">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98470 00000"
                    className="w-full bg-slate-50 border border-slate-300 pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900 rounded-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-normal text-slate-600 mb-1">
                  Travel Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={e => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 pl-9 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-slate-900 rounded-none cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-normal text-slate-600 mb-1">
                  Number of Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                    className="w-full bg-slate-50 border border-slate-300 pl-9 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-slate-900 rounded-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-normal text-slate-600 mb-1">
                Pickup Location / Resort / City
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={formData.pickupLocation}
                  onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
                  placeholder="e.g. Munnar, Cochin Airport, Aluva..."
                  className="w-full bg-slate-50 border border-slate-300 pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900 rounded-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-normal text-slate-600 mb-1">
                Special Requests / Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any special timing or requirements..."
                className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-900 rounded-none"
              />
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-2.5 px-4 bg-slate-950 hover:bg-black disabled:opacity-50 text-white font-medium text-xs flex items-center justify-center gap-2 shadow transition-all rounded-none border border-black"
              >
                <Send className="w-3.5 h-3.5" />
                {isSubmitting ? 'Submitting...' : 'Confirm Request'}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-normal text-xs flex items-center justify-center gap-1.5 transition-colors rounded-none border border-slate-300"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-800" />
                WhatsApp Direct
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}