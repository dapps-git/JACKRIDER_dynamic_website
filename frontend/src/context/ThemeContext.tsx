'use client';

import React, { createContext, useContext, useState } from 'react';

interface BookingModalState {
  isOpen: boolean;
  serviceType: 'package' | 'jeep' | 'taxi' | 'trekking' | 'photography';
  initialItem?: string;
  initialAmount?: number;
}

interface ThemeContextType {
  bookingModal: BookingModalState;
  openBooking: (serviceType: 'package' | 'jeep' | 'taxi' | 'trekking' | 'photography', itemName?: string, amount?: number) => void;
  closeBooking: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [bookingModal, setBookingModal] = useState<BookingModalState>({
    isOpen: false,
    serviceType: 'package'
  });

  const openBooking = (
    serviceType: 'package' | 'jeep' | 'taxi' | 'trekking' | 'photography',
    itemName?: string,
    amount?: number
  ) => {
    setBookingModal({
      isOpen: true,
      serviceType,
      initialItem: itemName,
      initialAmount: amount
    });
  };

  const closeBooking = () => {
    setBookingModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <ThemeContext.Provider
      value={{
        bookingModal,
        openBooking,
        closeBooking
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}