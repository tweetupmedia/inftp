import React, { useState } from 'react';
import { 
  Plane, 
  Building2, 
  Luggage, 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRightLeft, 
  ArrowRight, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  X, 
  ChevronDown, 
  BedDouble, 
  Send,
  PlaneTakeoff,
  PlaneLanding
} from 'lucide-react';
import { COMPANY_DETAILS, DESTINATIONS, PACKAGES } from '../data/mockData';
import { PageId } from '../types';

interface HeroSearchWidgetProps {
  onOpenPlanModal: (destination?: string, packageTitle?: string) => void;
  onNavigate: (page: PageId) => void;
}

type SearchTab = 'flights' | 'hotels' | 'packages';
type FlightTripType = 'one-way' | 'round-trip';

export const HeroSearchWidget: React.FC<HeroSearchWidgetProps> = ({
  onOpenPlanModal,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<SearchTab>('flights');

  // Flight search states
  const [flightTripType, setFlightTripType] = useState<FlightTripType>('one-way');
  const [flightFrom, setFlightFrom] = useState('New Delhi (DEL)');
  const [flightTo, setFlightTo] = useState('Srinagar, Kashmir (SXR)');
  const [flightDepartDate, setFlightDepartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  });
  const [flightReturnDate, setFlightReturnDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().split('T')[0];
  });
  const [flightTravelers, setFlightTravelers] = useState('2 Adults');
  const [flightClass, setFlightClass] = useState('Economy');
  const [flightResults, setFlightResults] = useState<Array<{
    airline: string;
    flightNo: string;
    departTime: string;
    arrivalTime: string;
    duration: string;
    stops: string;
    price: number;
    badge?: string;
  }> | null>(null);

  // Hotel search states
  const [hotelCity, setHotelCity] = useState('Ayodhya');
  const [hotelCheckIn, setHotelCheckIn] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 5);
    return d.toISOString().split('T')[0];
  });
  const [hotelCheckOut, setHotelCheckOut] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  });
  const [hotelGuests, setHotelGuests] = useState('2 Guests, 1 Room');
  const [hotelTier, setHotelTier] = useState('4★ Handpicked Boutique');
  const [hotelResults, setHotelResults] = useState<Array<{
    name: string;
    tier: string;
    rating: number;
    reviews: number;
    pricePerNight: number;
    inclusions: string;
    image: string;
  }> | null>(null);

  // Package triage states
  const [packageDest, setPackageDest] = useState('Mathura & Vrindavan');
  const [packageStyle, setPackageStyle] = useState('Pilgrimage & Sacred');
  const [packageTiming, setPackageTiming] = useState('Upcoming 30 Days');

  // Handle Flight Search
  const handleFlightSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real-time flight quotes calculation
    setFlightResults([
      {
        airline: 'IndiGo 6E',
        flightNo: '6E-5032',
        departTime: '06:15 AM',
        arrivalTime: '07:45 AM',
        duration: '1h 30m',
        stops: 'Non-stop',
        price: 3450,
        badge: 'Lowest Available Fare'
      },
      {
        airline: 'Air India',
        flightNo: 'AI-825',
        departTime: '10:30 AM',
        arrivalTime: '12:05 PM',
        duration: '1h 35m',
        stops: 'Non-stop',
        price: 4120,
        badge: 'Includes Hot Meal'
      },
      {
        airline: 'Vistara / Air India Express',
        flightNo: 'IX-114',
        departTime: '04:40 PM',
        arrivalTime: '06:10 PM',
        duration: '1h 30m',
        stops: 'Non-stop',
        price: 3890,
        badge: 'Popular Evening Flight'
      }
    ]);
  };

  // Handle Hotel Search
  const handleHotelSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHotelResults([
      {
        name: `Heritage Boutique Retreat (${hotelCity})`,
        tier: hotelTier,
        rating: 4.9,
        reviews: 218,
        pricePerNight: 2850,
        inclusions: 'Free Breakfast • Free Cancellation • Station/Airport Assistance',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: `Grand Palace & Temple View Residency (${hotelCity})`,
        tier: '5★ Luxury Collection',
        rating: 4.95,
        reviews: 340,
        pricePerNight: 4950,
        inclusions: 'Buffet Breakfast & Dinner • VIP Darshan Coordination • Sanitized Cab',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      }
    ]);
  };

  // Swap flight origin and destination
  const handleSwapAirports = () => {
    const temp = flightFrom;
    setFlightFrom(flightTo);
    setFlightTo(temp);
  };

  const handleBookFlightWhatsApp = (flightDetails?: string) => {
    const details = flightDetails 
      ? ` regarding ${flightDetails}`
      : ` from ${flightFrom} to ${flightTo} on ${flightDepartDate} (${flightTripType === 'round-trip' ? `return ${flightReturnDate}, ` : ''}${flightTravelers}, ${flightClass})`;
    const text = `Hello Info Tripp! I would like to book / lock fares for flights${details}. Please share live availability and fares.`;
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleBookHotelWhatsApp = (hotelDetails?: string) => {
    const details = hotelDetails
      ? ` for ${hotelDetails}`
      : ` in ${hotelCity} from ${hotelCheckIn} to ${hotelCheckOut} (${hotelGuests}, ${hotelTier})`;
    const text = `Hello Info Tripp! I would like to book a vetted stay${details}. Please share confirmed rates with taxes included.`;
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div id="hero-unified-search-widget" className="max-w-4xl mx-auto">
      {/* 1. TOP TABS */}
      <div className="flex items-center gap-2 mb-2 sm:mb-3 overflow-x-auto pb-1 no-scrollbar">
        <button
          id="search-tab-flights"
          type="button"
          onClick={() => {
            setActiveTab('flights');
            setFlightResults(null);
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs ${
            activeTab === 'flights'
              ? 'bg-[#F0671D] text-white shadow-md scale-102'
              : 'bg-white/90 hover:bg-white text-[#031E3D] backdrop-blur-md'
          }`}
        >
          <Plane className="w-4 h-4" />
          <span>Flight Booking</span>
        </button>

        <button
          id="search-tab-hotels"
          type="button"
          onClick={() => {
            setActiveTab('hotels');
            setHotelResults(null);
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs ${
            activeTab === 'hotels'
              ? 'bg-[#F0671D] text-white shadow-md scale-102'
              : 'bg-white/90 hover:bg-white text-[#031E3D] backdrop-blur-md'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Hotel Booking</span>
        </button>

        <button
          id="search-tab-packages"
          type="button"
          onClick={() => setActiveTab('packages')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs ${
            activeTab === 'packages'
              ? 'bg-[#F0671D] text-white shadow-md scale-102'
              : 'bg-white/90 hover:bg-white text-[#031E3D] backdrop-blur-md'
          }`}
        >
          <Luggage className="w-4 h-4" />
          <span>Tour &amp; Temple Packages</span>
        </button>
      </div>

      {/* 2. MAIN SEARCH CARD */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/70 text-slate-800">
        
        {/* ================= FLIGHT SEARCH TAB ================= */}
        {activeTab === 'flights' && (
          <form onSubmit={handleFlightSearch} className="space-y-4">
            {/* Trip Type Radios & Quick Cities */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4 font-semibold text-slate-700">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="flightTripType"
                    checked={flightTripType === 'one-way'}
                    onChange={() => setFlightTripType('one-way')}
                    className="accent-[#F0671D]"
                  />
                  <span>One Way</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="flightTripType"
                    checked={flightTripType === 'round-trip'}
                    onChange={() => setFlightTripType('round-trip')}
                    className="accent-[#F0671D]"
                  />
                  <span>Round Trip</span>
                </label>
              </div>

              <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                <span className="hidden sm:inline">Quick routes:</span>
                <button
                  type="button"
                  onClick={() => {
                    setFlightFrom('New Delhi (DEL)');
                    setFlightTo('Ayodhya (AYJ)');
                  }}
                  className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-[#031E3D] font-medium"
                >
                  DEL → AYJ
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFlightFrom('New Delhi (DEL)');
                    setFlightTo('Srinagar (SXR)');
                  }}
                  className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-[#031E3D] font-medium"
                >
                  DEL → SXR
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFlightFrom('Mumbai (BOM)');
                    setFlightTo('Shirdi (SAG)');
                  }}
                  className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-[#031E3D] font-medium"
                >
                  BOM → SAG
                </button>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
              {/* FROM (3 cols) */}
              <div className="lg:col-span-3 space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <PlaneTakeoff className="w-3.5 h-3.5 text-[#F0671D]" />
                  <span>From (Origin)</span>
                </label>
                <div className="relative">
                  <input
                    id="flight-from-input"
                    type="text"
                    required
                    value={flightFrom}
                    onChange={(e) => setFlightFrom(e.target.value)}
                    placeholder="e.g. New Delhi (DEL)"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#031E3D]"
                  />
                </div>
              </div>

              {/* SWAP BUTTON (1 col on lg) */}
              <div className="hidden lg:flex lg:col-span-1 items-center justify-center pt-5">
                <button
                  type="button"
                  onClick={handleSwapAirports}
                  title="Swap Origin and Destination"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all hover:rotate-180"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* TO (3 cols) */}
              <div className="lg:col-span-3 space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <PlaneLanding className="w-3.5 h-3.5 text-[#F0671D]" />
                  <span>To (Destination)</span>
                </label>
                <div className="relative">
                  <input
                    id="flight-to-input"
                    type="text"
                    required
                    value={flightTo}
                    onChange={(e) => setFlightTo(e.target.value)}
                    placeholder="e.g. Srinagar (SXR), Ayodhya (AYJ)"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#031E3D]"
                  />
                </div>
              </div>

              {/* DATES (3 cols) */}
              <div className={`${flightTripType === 'round-trip' ? 'lg:col-span-3' : 'lg:col-span-3'} space-y-1`}>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F0671D]" />
                  <span>{flightTripType === 'round-trip' ? 'Depart & Return' : 'Departure Date'}</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    id="flight-depart-date"
                    type="date"
                    required
                    value={flightDepartDate}
                    onChange={(e) => setFlightDepartDate(e.target.value)}
                    className="w-full px-2.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#031E3D]"
                  />
                  {flightTripType === 'round-trip' && (
                    <input
                      id="flight-return-date"
                      type="date"
                      required
                      value={flightReturnDate}
                      onChange={(e) => setFlightReturnDate(e.target.value)}
                      className="w-full px-2.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#031E3D]"
                    />
                  )}
                </div>
              </div>

              {/* SEARCH BUTTON (2 cols) */}
              <div className="lg:col-span-2 pt-1 sm:pt-4">
                <button
                  id="hero-search-flights-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#031E3D] hover:bg-[#062952] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-98"
                >
                  <Search className="w-4 h-4 text-[#F0671D]" />
                  <span>Search Flights</span>
                </button>
              </div>
            </div>

            {/* Travelers & Cabin Class Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <select
                    value={flightTravelers}
                    onChange={(e) => setFlightTravelers(e.target.value)}
                    className="bg-transparent font-medium text-slate-800 focus:outline-hidden"
                  >
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults">2 Adults</option>
                    <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                    <option value="Family (4+ Persons)">Family (4+ Persons)</option>
                    <option value="Group (6+ Persons)">Group (6+ Persons)</option>
                  </select>
                </div>

                <span>•</span>

                <div>
                  <select
                    value={flightClass}
                    onChange={(e) => setFlightClass(e.target.value)}
                    className="bg-transparent font-medium text-slate-800 focus:outline-hidden"
                  >
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business Class">Business Class</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#F0671D]" /> Zero Hidden Fare Surcharges
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#F0671D]" /> Direct WhatsApp Fare Lock
                </span>
              </div>
            </div>

            {/* Flight Results Drawer */}
            {flightResults && (
              <div className="mt-4 pt-4 border-t border-slate-200 animate-fadeIn space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-[#031E3D] uppercase tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#F0671D]" />
                    <span>Live Available Flights: {flightFrom} ➔ {flightTo}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFlightResults(null)}
                    className="text-slate-400 hover:text-slate-600 text-xs"
                  >
                    Close
                  </button>
                </div>

                <div className="space-y-2">
                  {flightResults.map((fl, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 hover:bg-slate-100/80 p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#031E3D]/10 flex items-center justify-center font-bold text-xs text-[#031E3D]">
                          ✈️
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#031E3D] flex items-center gap-2">
                            <span>{fl.airline}</span>
                            <span className="text-[11px] font-mono text-slate-500 font-normal">{fl.flightNo}</span>
                            {fl.badge && (
                              <span className="text-[10px] px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                                {fl.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-600 mt-0.5">
                            {fl.departTime} ➔ {fl.arrivalTime} • {fl.duration} ({fl.stops})
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                        <div className="text-left sm:text-right">
                          <span className="text-[10px] text-slate-400 block">From</span>
                          <span className="text-base font-extrabold text-[#031E3D]">₹{fl.price.toLocaleString('en-IN')}</span>
                          <span className="text-[10px] text-slate-500"> / seat</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleBookFlightWhatsApp(`${fl.airline} (${fl.flightNo}) at ₹${fl.price}`)}
                          className="px-3.5 py-2 rounded-lg bg-[#F0671D] hover:bg-[#d85514] text-white font-bold text-xs shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5"
                        >
                          <Send className="w-3 h-3" />
                          <span>Lock Fare on WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => handleBookFlightWhatsApp()}
                    className="text-xs font-semibold text-[#031E3D] hover:text-[#F0671D] transition-colors underline underline-offset-2"
                  >
                    Need international flights or bulk group booking? Chat with flight desk →
                  </button>
                </div>
              </div>
            )}
          </form>
        )}

        {/* ================= HOTEL SEARCH TAB ================= */}
        {activeTab === 'hotels' && (
          <form onSubmit={handleHotelSearch} className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-slate-700">Handpicked, physically inspected stays with zero algorithms:</span>
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span>Popular:</span>
                {['Ayodhya', 'Mathura', 'Shirdi', 'Kashmir', 'Rajasthan'].map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setHotelCity(city)}
                    className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-[#031E3D] font-medium"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
              {/* City / Destination (4 cols) */}
              <div className="lg:col-span-4 space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F0671D]" />
                  <span>City or Destination</span>
                </label>
                <div className="relative">
                  <input
                    id="hotel-city-input"
                    type="text"
                    required
                    value={hotelCity}
                    onChange={(e) => setHotelCity(e.target.value)}
                    placeholder="e.g. Ayodhya, Mathura, Shirdi, Goa, Kashmir"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#031E3D]"
                  />
                </div>
              </div>

              {/* Check-In & Check-Out (4 cols) */}
              <div className="lg:col-span-4 space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F0671D]" />
                  <span>Check-in &amp; Check-out</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    id="hotel-checkin-date"
                    type="date"
                    required
                    value={hotelCheckIn}
                    onChange={(e) => setHotelCheckIn(e.target.value)}
                    className="w-full px-2.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#031E3D]"
                  />
                  <input
                    id="hotel-checkout-date"
                    type="date"
                    required
                    value={hotelCheckOut}
                    onChange={(e) => setHotelCheckOut(e.target.value)}
                    className="w-full px-2.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#031E3D]"
                  />
                </div>
              </div>

              {/* Guests & Tier (2 cols) */}
              <div className="lg:col-span-2 space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <BedDouble className="w-3.5 h-3.5 text-[#F0671D]" />
                  <span>Rooms &amp; Guests</span>
                </label>
                <select
                  value={hotelGuests}
                  onChange={(e) => setHotelGuests(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#031E3D]"
                >
                  <option value="1 Guest, 1 Room">1 Guest, 1 Room</option>
                  <option value="2 Guests, 1 Room">2 Guests, 1 Room</option>
                  <option value="3 Guests, 1 Room">3 Guests, 1 Room</option>
                  <option value="4 Guests, 2 Rooms">4 Guests, 2 Rooms</option>
                  <option value="Family Suite (4+ Guests)">Family Suite (4+ Guests)</option>
                </select>
              </div>

              {/* SEARCH BUTTON (2 cols) */}
              <div className="lg:col-span-2 pt-1 sm:pt-4">
                <button
                  id="hero-search-hotels-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#031E3D] hover:bg-[#062952] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-98"
                >
                  <Search className="w-4 h-4 text-[#F0671D]" />
                  <span>Search Stays</span>
                </button>
              </div>
            </div>

            {/* Hotel Preferences Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-slate-400">Category:</span>
                <select
                  value={hotelTier}
                  onChange={(e) => setHotelTier(e.target.value)}
                  className="bg-transparent font-medium text-slate-800 focus:outline-hidden"
                >
                  <option value="Budget Room">Clean Budget (₹1,500 – ₹2,500)</option>
                  <option value="4★ Handpicked Boutique">4★ Handpicked Boutique (₹2,800 – ₹5,000)</option>
                  <option value="5★ Luxury Resort">5★ Luxury Resort / Palace (₹6,000+)</option>
                  <option value="Temple View Guest House">Temple View Dharamshala / Guest House</option>
                </select>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#F0671D]" /> Bed &amp; Hygiene Inspected
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#F0671D]" /> Free Rescheduling Available
                </span>
              </div>
            </div>

            {/* Hotel Results Drawer */}
            {hotelResults && (
              <div className="mt-4 pt-4 border-t border-slate-200 animate-fadeIn space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-[#031E3D] uppercase tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#F0671D]" />
                    <span>Verified Stays in {hotelCity} ({hotelCheckIn} to {hotelCheckOut})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHotelResults(null)}
                    className="text-slate-400 hover:text-slate-600 text-xs"
                  >
                    Close
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {hotelResults.map((hotel, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-col justify-between gap-3 hover:border-[#031E3D]/30 transition-all"
                    >
                      <div className="flex gap-3">
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          className="w-20 h-20 rounded-lg object-cover shrink-0"
                        />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#F0671D] bg-[#F0671D]/10 px-2 py-0.5 rounded-full inline-block">
                            {hotel.tier}
                          </span>
                          <h4 className="font-bold text-sm text-[#031E3D] mt-1 line-clamp-1">
                            {hotel.name}
                          </h4>
                          <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">
                            {hotel.inclusions}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                        <div>
                          <span className="text-base font-bold text-[#031E3D]">₹{hotel.pricePerNight.toLocaleString('en-IN')}</span>
                          <span className="text-[10px] text-slate-400"> / night + tax</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleBookHotelWhatsApp(`${hotel.name} at ₹${hotel.pricePerNight}/night`)}
                          className="px-3.5 py-2 rounded-lg bg-[#F0671D] hover:bg-[#d85514] text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1"
                        >
                          <Send className="w-3 h-3" />
                          <span>Reserve on WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </form>
        )}

        {/* ================= PACKAGES SEARCH TAB ================= */}
        {activeTab === 'packages' && (
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              onOpenPlanModal(packageDest);
            }} 
            className="space-y-4"
          >
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-700">Find bespoke vacation blueprints &amp; spiritual day trips:</span>
              <button
                type="button"
                onClick={() => onNavigate('packages')}
                className="text-xs font-bold text-[#031E3D] hover:text-[#F0671D] transition-colors"
              >
                Browse All 14 Packages →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
              {/* Where to go */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Where to go?
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#031E3D] absolute left-3 top-3" />
                  <select
                    id="triage-dest-select"
                    value={packageDest}
                    onChange={(e) => setPackageDest(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#031E3D]"
                  >
                    <option value="Mathura & Vrindavan">Mathura & Vrindavan (1 Day from NCR)</option>
                    <option value="Ayodhya">Ayodhya (2 Days Ram Mandir & Saryu Aarti)</option>
                    <option value="Gangasagar">Gangasagar (1 Day from Kolkata)</option>
                    <option value="Shirdi">Shirdi & Shani Shingnapur (Sai Darshan)</option>
                    <option value="Khatu Shyam & Salasar Balaji">Khatu Shyam & Salasar (from NCR)</option>
                    <option value="Kashmir">Kashmir (Srinagar, Gulmarg)</option>
                    <option value="Rajasthan">Rajasthan (Havelis & Palaces)</option>
                    <option value="Bali">Bali (Villas & Nusa Islands)</option>
                    <option value="Switzerland">Switzerland (Scenic Alps Rail)</option>
                    <option value="Ladakh">Ladakh (High Passes & Domes)</option>
                    <option value="Kerala">Kerala (Houseboats & Hills)</option>
                    <option value="Vietnam">Vietnam (Ha Long Bay Karsts)</option>
                  </select>
                </div>
              </div>

              {/* Travel Style */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Travel Style
                </label>
                <div className="relative">
                  <Luggage className="w-4 h-4 text-[#F0671D] absolute left-3 top-3" />
                  <select
                    id="triage-style-select"
                    value={packageStyle}
                    onChange={(e) => setPackageStyle(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#031E3D]"
                  >
                    <option value="Pilgrimage & Sacred">Pilgrimage & Sacred Darshan</option>
                    <option value="Family & Scenic">Family & Scenic Leisure</option>
                    <option value="Romantic Honeymoon">Romantic Honeymoon & Luxury</option>
                    <option value="Heritage & Royal Culture">Heritage & Royal Culture</option>
                    <option value="Mountain Adventure">Mountain Adventure & Snow</option>
                    <option value="Wellness & Backwaters">Wellness, Ayurveda & Spa</option>
                  </select>
                </div>
              </div>

              {/* When */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  When?
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#F0671D] absolute left-3 top-3" />
                  <select
                    id="triage-month-select"
                    value={packageTiming}
                    onChange={(e) => setPackageTiming(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#031E3D]"
                  >
                    <option value="Upcoming 30 Days">Next 30 Days</option>
                    <option value="Within 2-3 Months">Within 2 – 3 Months</option>
                    <option value="Upcoming Festive Holidays">Festive Season</option>
                    <option value="Summer Holidays">Summer Holidays</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-1 sm:pt-4">
                <button
                  id="hero-triage-submit-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#031E3D] hover:bg-[#062952] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-98"
                >
                  <Sparkles className="w-4 h-4 text-[#F0671D]" />
                  <span>Find My Trip</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* Trust Badges Strip Under Widget */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-medium">
        <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200 shadow-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#F0671D]" />
          Zero hidden taxes &amp; tolls
        </span>
        <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200 shadow-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#F0671D]" />
          Direct WhatsApp human specialist
        </span>
        <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200 shadow-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#F0671D]" />
          100% Vetted Stays &amp; Verified Chauffeurs
        </span>
      </div>
    </div>
  );
};
