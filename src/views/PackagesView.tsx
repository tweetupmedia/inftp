import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  MapPin, 
  Clock, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Send, 
  Search, 
  CheckCircle2, 
  Calendar, 
  UserCheck, 
  BadgeCheck, 
  CalendarSync, 
  Car, 
  MessageSquareHeart,
  SlidersHorizontal
} from 'lucide-react';
import { PageId, PackageItem, TravelStyle, RegionType } from '../types';
import { 
  PACKAGES, 
  TRANSPARENCY_SEALS, 
  COMPANY_DETAILS 
} from '../data/mockData';

interface PackagesViewProps {
  onNavigate: (page: PageId) => void;
  onSelectPackage: (pkg: PackageItem) => void;
  onOpenPlanModal: (destination?: string, packageTitle?: string) => void;
}

export const PackagesView: React.FC<PackagesViewProps> = ({
  onNavigate,
  onSelectPackage,
  onOpenPlanModal
}) => {
  // Filter Toolbar States
  const [filterRegion, setFilterRegion] = useState<string>('all');
  const [filterDuration, setFilterDuration] = useState<string>('all');
  const [filterStyle, setFilterStyle] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Bespoke Atelier Form State
  const [atelierDest, setAtelierDest] = useState('');
  const [atelierDates, setAtelierDates] = useState('');
  const [atelierOccasion, setAtelierOccasion] = useState('Anniversary / Honeymoon');
  const [atelierParty, setAtelierParty] = useState('2 Adults');
  const [atelierNotes, setAtelierNotes] = useState('');
  const [atelierSubmitted, setAtelierSubmitted] = useState(false);

  // Filtered & Sorted Packages
  const displayedPackages = useMemo(() => {
    let result = PACKAGES.filter((pkg) => {
      // Search
      const matchesSearch = 
        pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.waypoints.some((wp) => wp.toLowerCase().includes(searchTerm.toLowerCase()));

      // Region
      const matchesRegion = 
        filterRegion === 'all' ||
        (filterRegion === 'pilgrimage' && pkg.regionCategory === 'pilgrimage') ||
        (filterRegion === 'india' && pkg.region === 'India') ||
        (filterRegion === 'international' && pkg.region === 'International') ||
        (filterRegion === 'himalayas' && pkg.regionCategory === 'himalayas') ||
        (filterRegion === 'coastal' && pkg.regionCategory === 'coastal');

      // Duration
      let matchesDuration = true;
      if (filterDuration === 'day') matchesDuration = pkg.durationDays <= 3;
      else if (filterDuration === 'short') matchesDuration = pkg.durationDays >= 4 && pkg.durationDays <= 6;
      else if (filterDuration === 'medium') matchesDuration = pkg.durationDays >= 7 && pkg.durationDays <= 9;
      else if (filterDuration === 'long') matchesDuration = pkg.durationDays >= 10;

      // Style
      const matchesStyle = 
        filterStyle === 'all' || pkg.styleTags.includes(filterStyle as TravelStyle);

      return matchesSearch && matchesRegion && matchesDuration && matchesStyle;
    });

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.startingPriceINR - b.startingPriceINR);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.startingPriceINR - a.startingPriceINR);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      // Popularity (featured first, then review count)
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.reviewsCount - a.reviewsCount);
    }

    return result;
  }, [searchTerm, filterRegion, filterDuration, filterStyle, sortBy]);

  const handleAtelierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAtelierSubmitted(true);
  };

  const getSealIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'ReceiptCheck': return BadgeCheck;
      case 'UserCheck': return UserCheck;
      case 'CalendarSync': return CalendarSync;
      case 'Car': return Car;
      case 'MessageSquareHeart': return MessageSquareHeart;
      default: return ShieldCheck;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. HEADER BANNER */}
      <section className="bg-gradient-to-b from-[#071D3A]/5 via-[#FBFBF9] to-[#FBFBF9] pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071D3A]/10 text-[#071D3A] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#F15A24]" />
            <span>Curated Blueprints • Fully Customizable</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Vetted Packages with Upfront Pricing
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Browse ready-to-book routes or customize any day with your dedicated trip manager. No hidden surcharges, no surprise driver fees.
          </p>
        </div>
      </section>

      {/* 2. MULTI-FILTER TOOLBAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                id="package-search-input"
                type="text"
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
              />
            </div>

            {/* Region Dropdown */}
            <div>
              <select
                id="filter-region-select"
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
              >
                <option value="all">All Regions</option>
                <option value="pilgrimage">🛕 Pilgrimage & Spiritual Tours</option>
                <option value="india">India Highlights</option>
                <option value="international">International Escapes</option>
                <option value="himalayas">Himalayan Escapes</option>
                <option value="coastal">Coastal & Backwaters</option>
              </select>
            </div>

            {/* Duration Dropdown */}
            <div>
              <select
                id="filter-duration-select"
                value={filterDuration}
                onChange={(e) => setFilterDuration(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
              >
                <option value="all">All Durations</option>
                <option value="day">1 – 3 Days (Day & Weekend Trips)</option>
                <option value="short">4 – 6 Days (Quick Break)</option>
                <option value="medium">7 – 9 Days (Signature Pacing)</option>
                <option value="long">10+ Days (Grand Circuit)</option>
              </select>
            </div>

            {/* Travel Style Dropdown */}
            <div>
              <select
                id="filter-style-select"
                value={filterStyle}
                onChange={(e) => setFilterStyle(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
              >
                <option value="all">All Travel Styles</option>
                <option value="couples">Couples & Honeymoon</option>
                <option value="family">Family Friendly</option>
                <option value="luxury">Luxury & Villas</option>
                <option value="heritage">Royal Heritage</option>
                <option value="winter">Winter & Snow</option>
                <option value="relaxed">Relaxed & Wellness</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div>
              <select
                id="filter-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
              >
                <option value="popular">Sort: Most Popular</option>
                <option value="rating">Sort: Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
            <span>Showing <strong>{displayedPackages.length}</strong> vetted package blueprints</span>
            {(searchTerm || filterRegion !== 'all' || filterDuration !== 'all' || filterStyle !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterRegion('all');
                  setFilterDuration('all');
                  setFilterStyle('all');
                  setSortBy('popular');
                }}
                className="text-[#071D3A] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. ITINERARY CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {displayedPackages.map((pkg) => (
            <div
              key={pkg.id}
              id={`pkg-card-${pkg.id}`}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col lg:flex-row group"
            >
              {/* Photo & Duration badge */}
              <div className="lg:w-80 xl:w-96 relative bg-slate-900 shrink-0 min-h-[220px]">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#071D3A] text-white shadow-xs">
                    {pkg.region}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-xs font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#F15A24]" />
                      {pkg.durationDays} Days / {pkg.durationNights} Nights
                    </span>

                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-bold">{pkg.rating}</span>
                      <span className="text-slate-300">({pkg.reviewsCount})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-[#F15A24] uppercase tracking-wider">
                      {pkg.destination}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500">
                      Best: {pkg.bestSeason}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 leading-snug group-hover:text-[#071D3A] transition-colors">
                    {pkg.title}
                  </h3>

                  {/* Route Waypoints */}
                  <div className="mt-3 p-2.5 bg-slate-50 rounded-xl border border-slate-150 flex items-center gap-2 text-xs text-slate-700">
                    <MapPin className="w-4 h-4 text-[#F15A24] shrink-0" />
                    <span className="font-semibold text-slate-800">Route Waypoints:</span>
                    <span className="text-slate-600 truncate">{pkg.waypoints.join(' ➔ ')}</span>
                  </div>

                  {/* Hotel Tier */}
                  <div className="mt-2 text-xs text-slate-600 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#F15A24] shrink-0" />
                    <span>Hotel Standard: <strong className="text-slate-800">{pkg.hotelTier}</strong></span>
                  </div>

                  {/* Signature Highlights */}
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {pkg.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24] shrink-0" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Dual Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Starting Twin-Sharing Price</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#071D3A]">
                        ₹{pkg.startingPriceINR.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-500">/ person (All-inclusive land)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      id={`view-dayplan-btn-${pkg.id}`}
                      onClick={() => onSelectPackage(pkg)}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
                    >
                      View Day Plan
                    </button>

                    <button
                      id={`personalise-pkg-btn-${pkg.id}`}
                      onClick={() => onOpenPlanModal(pkg.destination, pkg.title)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#071D3A] hover:bg-[#05152B] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#F15A24]" />
                      <span>Personalise / Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TRANSPARENCY SEAL SECTION (6 CARDS) */}
      <section className="bg-[#071D3A]/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#071D3A] bg-[#071D3A]/10 px-3 py-1 rounded-full">
              Standard Inclusions
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
              The Info Tripp Transparency Seal
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every package comes with these 6 ironclad guarantees built into your quote.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRANSPARENCY_SEALS.map((seal) => {
              const Icon = getSealIcon(seal.icon);
              return (
                <div
                  key={seal.id}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F15A24]/10 text-[#F15A24] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-slate-900">
                    {seal.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {seal.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BESPOKE ATELIER FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F15A24] bg-[#F15A24]/10 px-3 py-1 rounded-full">
              Bespoke Atelier
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
              Can't Find Your Exact Route?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Have a multi-destination dream circuit or milestone celebration? Let our senior curators handcraft it from scratch.
            </p>
          </div>

          {atelierSubmitted ? (
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Atelier Request Submitted!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Our senior curator will assemble your day-by-day feasibility schedule and connect with you on WhatsApp shortly.
              </p>
              <button
                onClick={() => setAtelierSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleAtelierSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Dream Region or Multiple Stops
                  </label>
                  <input
                    id="atelier-dest-input"
                    type="text"
                    required
                    placeholder="e.g. Kashmir + Ladakh 12 Days, or Swiss + Paris"
                    value={atelierDest}
                    onChange={(e) => setAtelierDest(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimated Travel Month / Dates
                  </label>
                  <input
                    id="atelier-dates-input"
                    type="text"
                    required
                    placeholder="e.g. Oct 15 – Oct 26, or Diwali Break"
                    value={atelierDates}
                    onChange={(e) => setAtelierDates(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Occasion / Style
                  </label>
                  <select
                    id="atelier-occasion-select"
                    value={atelierOccasion}
                    onChange={(e) => setAtelierOccasion(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                  >
                    <option value="Anniversary / Honeymoon">Anniversary / Honeymoon Romance</option>
                    <option value="Multi-generational Family">Multi-generational Family Vacation</option>
                    <option value="Adventure & High Passes">Adventure, Photography & Trekking</option>
                    <option value="Executive Corporate Retreat">Executive Corporate Retreat</option>
                    <option value="Slow Travel & Wellness">Slow Travel, Heritage & Wellness</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Party Size
                  </label>
                  <input
                    id="atelier-party-input"
                    type="text"
                    placeholder="e.g. 2 Adults, 1 Child (Age 6)"
                    value={atelierParty}
                    onChange={(e) => setAtelierParty(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Requests (Villas, Diet, Pacing)
                </label>
                <textarea
                  id="atelier-notes-input"
                  rows={3}
                  placeholder="Share details like: preference for pool villa, need wheelchair-friendly vehicle, vegetarian meals, late check-outs..."
                  value={atelierNotes}
                  onChange={(e) => setAtelierNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Direct WhatsApp response from senior specialist within 4 mins.
                </span>

                <button
                  id="atelier-submit-btn"
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#071D3A] hover:bg-[#05152B] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Custom Atelier Blueprint</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
