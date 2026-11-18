import React, { useState, useEffect } from 'react';
import {
  Compass,
  Car,
  Camera,
  Mountain,
  Users,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  Phone,
  MessageSquare,
  Search,
  Filter,
  DollarSign,
  TrendingUp,
  MapPin,
  RefreshCw,
  Plus,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Sliders
} from 'lucide-react';

interface Booking {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  serviceType: string;
  selectedItem: string;
  travelDate: string;
  guests: number;
  pickupLocation: string;
  notes?: string;
  amount: number;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
  driverAssigned?: string;
}

const DEFAULT_BOOKINGS: Booking[] = [
  {
    id: "JR-882194",
    customerName: "Rahul Menon",
    phone: "+91 98471 23456",
    email: "rahul.menon@example.com",
    serviceType: "jeep",
    selectedItem: "Kolukkumalai World's Highest Tea Safari",
    travelDate: "2026-11-25",
    guests: 4,
    pickupLocation: "Munnar Town Hotel",
    notes: "Need early morning 4 AM sunrise slot. Request experienced driver.",
    amount: 3800,
    status: "Confirmed",
    driverAssigned: "Manoj Kumar (Thar KL-69-A-1234)",
    createdAt: "2026-11-16T14:20:00.000Z"
  },
  {
    id: "JR-551029",
    customerName: "Dr. Sarah Jenkins",
    phone: "+44 7911 123456",
    email: "sarah.j@travelworld.co.uk",
    serviceType: "package",
    selectedItem: "Munnar Misty Hills & Tea Haven",
    travelDate: "2026-12-05",
    guests: 2,
    pickupLocation: "Cochin International Airport (COK)",
    notes: "Pickup from airport around 10 AM. Interested in organic tea factory visit.",
    amount: 8999,
    status: "Pending",
    createdAt: "2026-11-17T06:10:00.000Z"
  },
  {
    id: "JR-449102",
    customerName: "Anand Varma",
    phone: "+91 94470 98765",
    email: "anand.varma@gmail.com",
    serviceType: "taxi",
    selectedItem: "Toyota Innova Crysta (MPV)",
    travelDate: "2026-11-28",
    guests: 6,
    pickupLocation: "Aluva Railway Station to Munnar",
    notes: "Family with 2 kids and senior parents. Need smooth driving.",
    amount: 4800,
    status: "Confirmed",
    driverAssigned: "Biju Varghese (Innova KL-07-CC-8890)",
    createdAt: "2026-11-15T18:45:00.000Z"
  },
  {
    id: "JR-339811",
    customerName: "Pooja & Rohan Sharma",
    phone: "+91 98201 44556",
    email: "rohansharma.arch@gmail.com",
    serviceType: "photography",
    selectedItem: "Kerala Wanderlust Solo & Couple Photo Reel",
    travelDate: "2026-12-10",
    guests: 2,
    pickupLocation: "Kolukkumalai & Mattupetty",
    notes: "Pre-wedding casual reel and sunset drone shots requested.",
    amount: 9999,
    status: "Pending",
    createdAt: "2026-11-17T08:30:00.000Z"
  }
];

const SAFARI_12 = [
  { name: '1. ANACHAAL', district: 'Idukki', price: 2800, duration: '3-4 Hrs', status: 'Available' },
  { name: '2. Munnar', district: 'Idukki', price: 3200, duration: '4-5 Hrs', status: 'Available' },
  { name: '3. Maryoor', district: 'Idukki', price: 3400, duration: '4 Hrs', status: 'Available' },
  { name: '4. Kolukkumalai', district: 'Border', price: 3800, duration: '5-6 Hrs', status: 'Peak Demand' },
  { name: '5. Meeshappulimala', district: 'Idukki', price: 4500, duration: '6-7 Hrs', status: 'Available' },
  { name: '6. Vagamon', district: 'Kottayam', price: 3000, duration: '3-4 Hrs', status: 'Available' },
  { name: '7. Chathurangappara', district: 'Udumbanchola', price: 3200, duration: '4 Hrs', status: 'Available' },
  { name: '8. Kanthalloor', district: 'Idukki', price: 3200, duration: '4 Hrs', status: 'Available' },
  { name: '9. Marayoor Dolmens', district: 'Idukki', price: 2900, duration: '3-4 Hrs', status: 'Available' },
  { name: '10. Mamalakkandam', district: 'Ernakulam', price: 3600, duration: '5 Hrs', status: 'Off-road' },
  { name: '11. Nelliyampathy', district: 'Palakkad', price: 3800, duration: '5 Hrs', status: 'Available' },
  { name: '12. Anakkulam', district: 'Mankulam', price: 3500, duration: '4-5 Hrs', status: 'Elephant Spotting' }
];

const TAXI_4 = [
  { category: 'Sedan', models: 'Dzire / Etios / Amaze', capacity: '4 Pax', ratePerKm: 14, minKm: 100, activeVehicles: 12 },
  { category: 'MPV', models: 'Innova Crysta / Ertiga / Hycross', capacity: '7 Pax', ratePerKm: 19, minKm: 120, activeVehicles: 18 },
  { category: 'Traveller', models: 'Force Tempo Traveller 12/17/20', capacity: '12-20 Pax', ratePerKm: 26, minKm: 150, activeVehicles: 8 },
  { category: 'Bus', models: 'Mini Coach & 49-Seater Luxury AC Coach', capacity: '21-49 Pax', ratePerKm: 45, minKm: 200, activeVehicles: 4 }
];

export default function AdminApp() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'safari' | 'fleet' | 'new-booking'>('bookings');
  const [bookings, setBookings] = useState<Booking[]>(DEFAULT_BOOKINGS);
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // New Booking State
  const [newBooking, setNewBooking] = useState({
    customerName: '',
    phone: '',
    email: '',
    serviceType: 'jeep',
    selectedItem: 'Kolukkumalai World\'s Highest Tea Safari',
    travelDate: new Date().toISOString().split('T')[0],
    guests: 2,
    pickupLocation: 'Munnar Town',
    amount: 3800,
    notes: ''
  });

  // Fetch real data from backend
  const fetchBookings = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('http://localhost:5001/api/bookings');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setBookings(data);
        }
      }
    } catch (e) {
      console.log('Using local bookings store');
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleStatusChange = async (id: string, newStatus: Booking['status']) => {
    setBookings(prev =>
      prev.map(b => (b.id === id ? { ...b, status: newStatus } : b))
    );

    try {
      await fetch(`http://localhost:5001/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (e) {
      // ignore offline fallback
    }
  };

  const handleCreateBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    const created: Booking = {
      id: 'JR-' + Math.floor(100000 + Math.random() * 900000),
      ...newBooking,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    setBookings([created, ...bookings]);

    try {
      await fetch('http://localhost:5001/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBooking)
      });
    } catch (e) {
      // offline fallback
    }

    setActiveTab('bookings');
  };

  // WhatsApp helper
  const openWhatsAppCustomer = (b: Booking) => {
    const text = encodeURIComponent(
      `Hello ${b.customerName}!\nThis is Jack Rider Tours & Travels confirming your booking (${b.id}).\n` +
      `• Service: ${b.selectedItem}\n` +
      `• Date: ${b.travelDate}\n` +
      `• Guests: ${b.guests}\n` +
      `• Status: ${b.status}\n` +
      (b.driverAssigned ? `• Assigned Driver: ${b.driverAssigned}\n` : '') +
      `Our team is ready to welcome you to Kerala! Please reply for any special assistance.`
    );
    window.open(`https://wa.me/${b.phone.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  // Filter bookings
  const filteredBookings = bookings.filter(b => {
    const matchesSearch =
      b.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.phone.includes(searchQuery) ||
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.selectedItem.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesService = serviceFilter === 'all' || b.serviceType === serviceFilter;
    const matchesStatus = statusFilter === 'all' || b.status === statusFilter;
    return matchesSearch && matchesService && matchesStatus;
  });

  // Calculate Metrics
  const totalBookings = bookings.length;
  const confirmedCount = bookings.filter(b => b.status === 'Confirmed' || b.status === 'Completed').length;
  const pendingCount = bookings.filter(b => b.status === 'Pending').length;
  const totalRevenue = bookings
    .filter(b => b.status === 'Confirmed' || b.status === 'Completed')
    .reduce((sum, b) => sum + (Number(b.amount) || 0), 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* Top Navbar */}
      <header className="bg-slate-900 border-b border-emerald-900/40 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="bg-white px-3 py-1 rounded-xl flex items-center shadow">
              <img
                src="/images/jack-rider-logo.png"
                alt="Jack Rider"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                Admin Panel
              </span>
              <span className="hidden sm:inline text-xs text-slate-400">
                Kerala Fleet & Safari Control Center
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchBookings}
              disabled={isRefreshing}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors border border-slate-700"
              title="Refresh Bookings"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-emerald-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Sync Data</span>
            </button>

            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
            >
              <span>View User Frontend</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* KPI Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-5 shadow-lg flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400">Total Inquiries</span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">{totalBookings}</div>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5 font-medium">
                <TrendingUp className="w-3 h-3" /> Live synchronization
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-5 shadow-lg flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400">Confirmed</span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">{confirmedCount}</div>
              <span className="text-[10px] text-slate-400 mt-0.5">Vehicles / Safaris active</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-slate-900/90 border border-amber-500/20 rounded-2xl p-5 shadow-lg flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400">Pending Actions</span>
              <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">{pendingCount}</div>
              <span className="text-[10px] text-amber-400 mt-0.5">Needs driver assignment</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-5 shadow-lg flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400">Gross Booking Value</span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-300 mt-1">₹{totalRevenue.toLocaleString()}</div>
              <span className="text-[10px] text-emerald-400 mt-0.5">Includes packages & taxis</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
              activeTab === 'bookings'
                ? 'bg-slate-900 text-emerald-400 border-t-2 border-emerald-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Bookings & Inquiries ({bookings.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('safari')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
              activeTab === 'safari'
                ? 'bg-slate-900 text-emerald-400 border-t-2 border-emerald-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>12 Jeep Safari Trails</span>
          </button>

          <button
            onClick={() => setActiveTab('fleet')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
              activeTab === 'fleet'
                ? 'bg-slate-900 text-emerald-400 border-t-2 border-emerald-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Taxi Fleet (Sedan, MPV, Traveller, Bus)</span>
          </button>

          <button
            onClick={() => setActiveTab('new-booking')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ml-auto ${
              activeTab === 'new-booking'
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-950/60 text-emerald-300 hover:bg-emerald-900/60 border border-emerald-500/30'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>+ Manual Booking Entry</span>
          </button>
        </div>

        {/* Tab 1: Bookings Management */}
        {activeTab === 'bookings' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden space-y-4 p-5">
            
            {/* Filter & Search Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search by customer name, phone, ID..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <select
                value={serviceFilter}
                onChange={e => setServiceFilter(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="all">All Service Types</option>
                <option value="package">Tour Packages</option>
                <option value="jeep">12 Jeep Safari</option>
                <option value="taxi">Taxi Fleet</option>
                <option value="trekking">Guide & Trekking</option>
                <option value="photography">Photography & Drone</option>
              </select>

              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="all">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">ID & Customer</th>
                    <th className="p-3.5">Service & Route</th>
                    <th className="p-3.5">Date & Pax</th>
                    <th className="p-3.5">Amount</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3.5">
                        <div className="font-mono font-bold text-amber-300">{b.id}</div>
                        <div className="font-semibold text-white mt-0.5">{b.customerName}</div>
                        <div className="text-[11px] text-slate-400">{b.phone}</div>
                      </td>
                      <td className="p-3.5 max-w-xs">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                          {b.serviceType}
                        </span>
                        <div className="font-medium text-slate-200 mt-1 line-clamp-1">{b.selectedItem}</div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-500" /> {b.pickupLocation}
                        </div>
                      </td>
                      <td className="p-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-1 text-slate-200 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-emerald-400" /> {b.travelDate}
                        </div>
                        <div className="text-slate-400 mt-0.5">{b.guests} Guests</div>
                      </td>
                      <td className="p-3.5 whitespace-nowrap">
                        <div className="font-bold text-emerald-400 text-sm">
                          ₹{Number(b.amount || 0).toLocaleString()}
                        </div>
                      </td>
                      <td className="p-3.5 whitespace-nowrap">
                        <select
                          value={b.status}
                          onChange={(e: any) => handleStatusChange(b.id, e.target.value)}
                          className={`text-xs font-bold rounded-lg px-2.5 py-1 border focus:outline-none cursor-pointer ${
                            b.status === 'Confirmed'
                              ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                              : b.status === 'Pending'
                              ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                              : b.status === 'Completed'
                              ? 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                              : 'bg-red-950/80 text-red-300 border-red-500/40'
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                        {b.driverAssigned && (
                          <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                            Driver: {b.driverAssigned}
                          </div>
                        )}
                      </td>
                      <td className="p-3.5 text-right whitespace-nowrap">
                        <button
                          onClick={() => openWhatsAppCustomer(b)}
                          className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors shadow"
                          title="WhatsApp Customer Confirmation"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* Tab 2: 12 Jeep Safari Control */}
        {activeTab === 'safari' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                12 Jeep Safari Locations Fleet Management
              </h3>
              <span className="text-xs text-slate-400">All 12 destinations active</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SAFARI_12.map((s, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                        Trail #{idx + 1}
                      </span>
                      <span className="text-[11px] font-semibold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded">
                        {s.status}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">{s.name}</h4>
                    <p className="text-xs text-slate-400">{s.district} • {s.duration}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Fixed Fare</span>
                      <span className="text-base font-black text-emerald-400">₹{s.price}</span>
                    </div>
                    <button
                      onClick={() => {
                        setNewBooking(prev => ({ ...prev, serviceType: 'jeep', selectedItem: s.name, amount: s.price }));
                        setActiveTab('new-booking');
                      }}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg font-semibold transition-colors"
                    >
                      Book Dispatch &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Taxi Fleet Control */}
        {activeTab === 'fleet' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Car className="w-5 h-5 text-emerald-400" />
              Kerala Taxi Fleet (Sedan, MPV, Traveller, Bus)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TAXI_4.map((t) => (
                <div key={t.category} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                      {t.category} Class
                    </span>
                    <span className="text-xs font-bold text-slate-300">
                      {t.activeVehicles} Cabs Ready in Fleet
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white">{t.models}</h4>

                  <div className="grid grid-cols-3 gap-2 text-xs pt-1">
                    <div className="bg-slate-800/60 p-2 rounded-xl text-center">
                      <span className="text-slate-400 block text-[10px]">Capacity</span>
                      <span className="font-bold text-white">{t.capacity}</span>
                    </div>
                    <div className="bg-slate-800/60 p-2 rounded-xl text-center">
                      <span className="text-slate-400 block text-[10px]">Per Km Rate</span>
                      <span className="font-bold text-emerald-400">₹{t.ratePerKm}/km</span>
                    </div>
                    <div className="bg-slate-800/60 p-2 rounded-xl text-center">
                      <span className="text-slate-400 block text-[10px]">Min Km/Day</span>
                      <span className="font-bold text-amber-300">{t.minKm} km</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => {
                        setNewBooking(prev => ({ ...prev, serviceType: 'taxi', selectedItem: `${t.category} - ${t.models}`, amount: t.ratePerKm * 150 }));
                        setActiveTab('new-booking');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                    >
                      Assign {t.category}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Manual Booking Creation */}
        {activeTab === 'new-booking' && (
          <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 shadow-xl max-w-2xl mx-auto space-y-5">
            <div>
              <h3 className="text-xl font-black text-white">Create Direct Booking / Dispatch</h3>
              <p className="text-xs text-slate-400">Add an offline walk-in or phone call booking to the Jack Rider system.</p>
            </div>

            <form onSubmit={handleCreateBooking} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Customer Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newBooking.customerName}
                    onChange={e => setNewBooking({ ...newBooking, customerName: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white"
                    placeholder="e.g. Vignesh Nair"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={newBooking.phone}
                    onChange={e => setNewBooking({ ...newBooking, phone: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white"
                    placeholder="+91 98470 12345"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Service Type</label>
                  <select
                    value={newBooking.serviceType}
                    onChange={e => setNewBooking({ ...newBooking, serviceType: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white"
                  >
                    <option value="jeep">Jeep Safari (12 Locations)</option>
                    <option value="taxi">Taxi Service (Sedan, MPV, Traveller, Bus)</option>
                    <option value="package">Tour Packages (Kerala, India, Int)</option>
                    <option value="trekking">Guide & Trekking</option>
                    <option value="photography">Photography & Drone</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Route / Destination Selected</label>
                  <input
                    type="text"
                    required
                    value={newBooking.selectedItem}
                    onChange={e => setNewBooking({ ...newBooking, selectedItem: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={newBooking.travelDate}
                    onChange={e => setNewBooking({ ...newBooking, travelDate: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Guests</label>
                  <input
                    type="number"
                    min={1}
                    value={newBooking.guests}
                    onChange={e => setNewBooking({ ...newBooking, guests: parseInt(e.target.value) || 1 })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Amount (₹)</label>
                  <input
                    type="number"
                    value={newBooking.amount}
                    onChange={e => setNewBooking({ ...newBooking, amount: parseInt(e.target.value) || 0 })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Pickup Location</label>
                <input
                  type="text"
                  value={newBooking.pickupLocation}
                  onChange={e => setNewBooking({ ...newBooking, pickupLocation: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white"
                  placeholder="e.g. Munnar Town, Aluva Station..."
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('bookings')}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg"
                >
                  Save & Confirm Booking
                </button>
              </div>
            </form>
          </div>
        )}

      </main>

      {/* Admin Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        Jack Rider Tours & Travels Internal Operations System • God&apos;s Own Country, Kerala
      </footer>
    </div>
  );
}
