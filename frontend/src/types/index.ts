export interface TourPackage {
  id: string;
  title: string;
  category: 'kerala' | 'all-india' | 'international';
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
  locations: string[];
  highlights: string[];
  description: string;
  isFeatured?: boolean;
}

export interface JeepSafariRoute {
  id: string;
  slug: string;
  name: string;
  district: string;
  altitude: string;
  duration: string;
  bestTime: string;
  pricePerJeep: number;
  maxGuests: number;
  image: string;
  highlights: string[];
  description: string;
  features: string[];
}

export interface TaxiVehicle {
  id: string;
  category: 'Sedan' | 'MPV' | 'Traveller' | 'Bus';
  title: string;
  models: string[];
  capacity: string;
  luggage: string;
  ac: string;
  ratePerKm: number;
  minDayKm: number;
  airportCochinMunnar: number;
  dailyRate: number;
  image: string;
  badge: string;
  features: string[];
}

export interface TrekkingRoute {
  id: string;
  title: string;
  difficulty: string;
  duration: string;
  altitude: string;
  price: number;
  guideLanguage: string[];
  image: string;
  includes: string[];
  description: string;
}

export interface PhotographyPackage {
  id: string;
  category: 'Travel' | 'Events';
  title: string;
  duration: string;
  price: number;
  badge: string;
  image: string;
  deliverables: string[];
  equipment: string;
}

export interface BookingSubmission {
  customerName: string;
  phone: string;
  email?: string;
  serviceType: 'package' | 'jeep' | 'taxi' | 'trekking' | 'photography' | 'events' | 'hotel';
  selectedItem: string;
  travelDate: string;
  guests: number;
  pickupLocation: string;
  hotelCategory?: string;
  notes?: string;
  amount?: number;
}

export type DesignThemeId =
  | 'emerald-highlands'
  | 'mist-glass'
  | 'wayanad-dark'
  | 'kerala-royale'
  | 'alpine-3d'
  | 'golden-hour'
  | 'neo-travel'
  | 'monsoon-dew'
  | 'safari-expedition'
  | 'cyber-kerala';

export interface DesignTheme {
  id: DesignThemeId;
  name: string;
  tagline: string;
  primaryColor: string;
  accentColor: string;
  bgGradient: string;
  glassStyle: string;
  cardStyle: string;
  heroOverlay: string;
  textColor: string;
  pillColor: string;
}

