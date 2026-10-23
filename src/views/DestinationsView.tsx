import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  Calendar, 
  Compass, 
  Sparkles, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Send,
  HelpCircle,
  TrendingUp,
  Table
} from 'lucide-react';
import { PageId, DestinationItem, TravelStyle, RegionType } from '../types';
import { 
  DESTINATIONS, 
  COMPARISON_MATRIX, 
  DESTINATION_FAQS, 
  COMPANY_DETAILS 
} from '../data/mockData';

interface DestinationsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanModal: (destination?: string) => void;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({
  onNavigate,
  onOpenPlanModal
}) => {
  // Search & Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RegionType>('all');
  const [selectedStyle, setSelectedStyle] = useState<TravelStyle>('all');

  // Matchmaker interactive states
  const [matchmakerSeason, setMatchmakerSeason] = useState('Immediate / Next 60 Days');
  const [matchmakerType, setMatchmakerType] = useState('couple');
  const [matchmakerVibe, setMatchmakerVibe] = useState('mountains');
  const [matchmakerBudget, setMatchmakerBudget] = useState('moderate');
  const [matchedResult, setMatchedResult] = useState<{
    destination: string;
    reason: string;
    bestPkg: string;
    route: string;
  } | null>(null);

  // FAQ Accordion states
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Filter logic
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((dest) => {
      // Keyword match
      const matchesSearch = 
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

      // Category match
      const matchesCategory = 
        selectedCategory === 'all' || 
        (selectedCategory === 'pilgrimage' && dest.category === 'pilgrimage') ||
        (selectedCategory === 'india' && dest.country === 'India') ||
        (selectedCategory === 'international' && dest.country !== 'India') ||
        (selectedCategory === 'himalayas' && dest.category === 'himalayas') ||
        (selectedCategory === 'coastal' && dest.category === 'coastal');

      // Style match
      const matchesStyle = 
        selectedStyle === 'all' || dest.styles.includes(selectedStyle);

      return matchesSearch && matchesCategory && matchesStyle;
    });
  }, [searchTerm, selectedCategory, selectedStyle]);

  // Handle matchmaker calculation
  const handleMatchmaker = (e: React.FormEvent) => {
    e.preventDefault();
    if (matchmakerVibe === 'mountains' && matchmakerBudget === 'luxury') {
      setMatchedResult({
        destination: 'Switzerland Alpine Wonderland',
        reason: 'Perfect for world-class panoramic mountain railways, 5-star alpine chalets, and Jungfraujoch glacier summits with seamless 1st class Swiss passes.',
        bestPkg: 'Swiss Grandeur: Glaciers, Rails & Alpine Lakes',
        route: 'Zurich ➔ Lucerne ➔ Interlaken ➔ Zermatt'
      });
    } else if (matchmakerVibe === 'mountains' || matchmakerVibe === 'snow') {
      setMatchedResult({
        destination: 'Kashmir Paradise',
        reason: 'Unmatched alpine beauty with handcrafted Dal Lake houseboats, private Shikaras, and high-altitude gondola snow meadows at great value.',
        bestPkg: 'Kashmir: Saffron Meadows & Alpine Stays',
        route: 'Srinagar ➔ Gulmarg ➔ Pahalgam ➔ Sonamarg'
      });
    } else if (matchmakerVibe === 'heritage') {
      setMatchedResult({
        destination: 'Royal Rajasthan',
        reason: 'Regal living with authentic 19th-century havelis, private lake cruises in Udaipur, and Thar desert luxury camping under starlit skies.',
        bestPkg: 'Royal Rajasthan: Forts, Dunes & Havelis',
        route: 'Jaipur ➔ Pushkar ➔ Jodhpur ➔ Udaipur'
      });
    } else if (matchmakerVibe === 'beaches' && matchmakerBudget === 'luxury') {
      setMatchedResult({
        destination: 'Bali & Nusa Islands',
        reason: 'Sensational private infinity pool villas in Ubud combined with turquoise catamaran charters to Nusa Penida and sunset cliff temples.',
        bestPkg: 'Bali Serenity: Ubud Cascades & Ocean Cliffs',
        route: 'Ubud ➔ Nusa Penida ➔ Seminyak ➔ Uluwatu'
      });
    } else {
      setMatchedResult({
        destination: 'Kerala Backwaters & Munnar',
        reason: 'Soothing emerald backwaters on your private Kettuvallam houseboat, mist-covered tea plantations, and restorative Ayurvedic therapies.',
        bestPkg: 'Kerala: Backwater Serenades & Munnar Mist',
        route: 'Kochi ➔ Munnar ➔ Thekkady ➔ Alleppey'
      });
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. HERO & SEARCH HEADER */}
      <section className="bg-gradient-to-b from-[#071D3A]/5 via-[#FBFBF9] to-[#FBFBF9] pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071D3A]/10 text-[#071D3A] text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-[#F15A24]" />
            <span>Regional Directory & Curated Circuits</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Explore Destinations by Climate, Season & Vibe
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Every region is backed by a verified local specialist who monitors road conditions, permit requirements, and seasonal weather daily.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                id="destination-search-input"
                type="text"
                placeholder="Search by state, country, or keyword (e.g. Kashmir, Bali, Snow, Alps)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-2xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A] shadow-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-slate-600 font-semibold px-2 py-0.5 rounded-md bg-slate-100"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Pill Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'pilgrimage', label: '🛕 Pilgrimage & Spiritual' },
              { id: 'india', label: 'India Highlights' },
              { id: 'international', label: 'International Escapes' },
              { id: 'himalayas', label: 'Himalayan Escapes' },
              { id: 'coastal', label: 'Coastal & Islands' }
            ].map((cat) => (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id as RegionType)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#071D3A] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Travel Style Tag Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
            <span className="text-slate-400 font-medium mr-1 hidden sm:inline">Travel Style:</span>
            {[
              { id: 'all', label: 'All Styles' },
              { id: 'pilgrimage', label: 'Pilgrimage & Sacred' },
              { id: 'family', label: 'Ideal for Families' },
              { id: 'couples', label: 'Couples & Honeymoon' },
              { id: 'relaxed', label: 'Relaxed & Wellness' },
              { id: 'active', label: 'Active & Adventure' },
              { id: 'heritage', label: 'Heritage & Royalty' },
              { id: 'winter', label: 'Autumn / Winter' }
            ].map((st) => (
              <button
                key={st.id}
                id={`filter-style-${st.id}`}
                onClick={() => setSelectedStyle(st.id as TravelStyle)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedStyle === st.id
                    ? 'bg-[#F15A24] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DESTINATION GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{filteredDestinations.length}</strong> curated destinations
          </p>
          {(searchTerm || selectedCategory !== 'all' || selectedStyle !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedStyle('all');
              }}
              className="text-xs font-semibold text-[#071D3A] hover:underline"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-slate-800">No destinations found</h3>
            <p className="text-xs text-slate-500 mt-1">Try relaxing your search terms or filter selection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                id={`dest-card-${dest.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3.5 left-3.5 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#071D3A] text-white shadow-xs">
                      {dest.country}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <h3 className="font-serif font-bold text-xl text-white">
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-200 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#F15A24]" />
                        {dest.recommendedDuration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#F15A24]" />
                        {dest.bestMonths}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {dest.shortDescription}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-150 text-[11px] text-slate-600">
                      <strong className="text-slate-800">Climate Note:</strong> {dest.climateNote}
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Key Highlights:
                      </span>
                      <div className="grid grid-cols-1 gap-1">
                        {dest.keyHighlights.slice(0, 3).map((hl, idx) => (
                          <div key={idx} className="text-xs text-slate-700 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24] shrink-0" />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Starting from</span>
                      <span className="text-base font-bold text-[#071D3A]">
                        ₹{dest.startingPriceINR.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-slate-400"> / person</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        id={`plan-dest-btn-${dest.id}`}
                        onClick={() => onOpenPlanModal(dest.name)}
                        className="px-3.5 py-2 rounded-xl bg-[#071D3A] hover:bg-[#05152B] text-white text-xs font-semibold transition-colors shadow-xs"
                      >
                        Plan This Route
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. 10-MINUTE TRIP MATCHMAKER INTERACTIVE FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F15A24] bg-[#F15A24]/10 px-3 py-1 rounded-full">
              Decision Assistant
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
              The 10-Minute Trip Matchmaker
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Unsure whether domestic or international fits your travel month and party? Answer 4 quick questions for an honest recommendation.
            </p>
          </div>

          <form onSubmit={handleMatchmaker} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Q1: Timing */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 block">
                1. When are you traveling?
              </label>
              <select
                id="matchmaker-season-select"
                value={matchmakerSeason}
                onChange={(e) => setMatchmakerSeason(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
              >
                <option value="Immediate / Next 60 Days">Immediate (Next 60 Days)</option>
                <option value="Upcoming Summer">Summer Holidays (May – Jul)</option>
                <option value="Festive / Autumn">Festive / Autumn (Sep – Nov)</option>
                <option value="Winter Snow">Winter Snow Season (Dec – Feb)</option>
              </select>
            </div>

            {/* Q2: Group */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 block">
                2. Who is traveling?
              </label>
              <select
                id="matchmaker-type-select"
                value={matchmakerType}
                onChange={(e) => setMatchmakerType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
              >
                <option value="couple">Couple / Honeymoon</option>
                <option value="family">Family with Children / Parents</option>
                <option value="friends">Friends Group</option>
                <option value="solo">Solo Traveler</option>
              </select>
            </div>

            {/* Q3: Vibe */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 block">
                3. What vibe do you crave?
              </label>
              <select
                id="matchmaker-vibe-select"
                value={matchmakerVibe}
                onChange={(e) => setMatchmakerVibe(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
              >
                <option value="mountains">Misty Mountains & Valleys</option>
                <option value="snow">Snow, Glaciers & Gondolas</option>
                <option value="heritage">Royal Palaces & Desert Havelis</option>
                <option value="beaches">Tropical Beaches & Pool Villas</option>
                <option value="backwaters">Tranquil Backwaters & Tea Hills</option>
              </select>
            </div>

            {/* Q4: Budget Comfort */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 block">
                4. Budget Comfort Tier
              </label>
              <select
                id="matchmaker-budget-select"
                value={matchmakerBudget}
                onChange={(e) => setMatchmakerBudget(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
              >
                <option value="moderate">Smart Value (₹25k – ₹40k / person)</option>
                <option value="premium">Premium Boutique (₹45k – ₹75k / person)</option>
                <option value="luxury">Luxury International (₹1L+ / person)</option>
              </select>
            </div>

            {/* Trigger Button */}
            <div className="sm:col-span-2 lg:col-span-4 pt-3 flex justify-end">
              <button
                id="matchmaker-submit-btn"
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#071D3A] hover:bg-[#05152B] text-white font-semibold text-sm shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#F15A24]" />
                <span>Calculate Best Match</span>
              </button>
            </div>
          </form>

          {/* Matched Result Display */}
          {matchedResult && (
            <div className="mt-8 p-6 bg-gradient-to-br from-[#071D3A]/5 to-[#F15A24]/10 rounded-2xl border border-[#F15A24]/30 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F15A24]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Your Recommended Match</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">
                    {matchedResult.destination}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {matchedResult.reason}
                  </p>
                  <div className="text-xs text-slate-700 font-medium pt-1">
                    Suggested Circuit: <strong className="text-[#071D3A]">{matchedResult.route}</strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                  <button
                    id="matchmaker-plan-now-btn"
                    onClick={() => onOpenPlanModal(matchedResult.destination)}
                    className="px-5 py-2.5 rounded-xl bg-[#071D3A] hover:bg-[#05152B] text-white text-xs font-semibold shadow-xs transition-colors text-center"
                  >
                    Inquire on WhatsApp
                  </button>
                  <button
                    id="matchmaker-view-packages-btn"
                    onClick={() => onNavigate('packages')}
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-medium transition-colors text-center"
                  >
                    Browse Packages
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. SEASON & BUDGET DECISION MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#071D3A] bg-[#071D3A]/10 px-3 py-1 rounded-full">
            Transparent Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
            Season & Budget Decision Matrix
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Compare key parameters side-by-side to make the right choice before committing.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-4 px-4 font-semibold text-slate-900">Destination</th>
                <th className="py-4 px-4 font-semibold">Best Months</th>
                <th className="py-4 px-4 font-semibold">Pacing Duration</th>
                <th className="py-4 px-4 font-semibold">Travel Vibe</th>
                <th className="py-4 px-4 font-semibold">Approx. Cost / Person</th>
                <th className="py-4 px-4 font-semibold">Specialist Pro Tip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {COMPARISON_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-4 font-serif font-bold text-slate-900">
                    {row.destination}
                  </td>
                  <td className="py-4 px-4 text-slate-600 font-medium">
                    {row.bestMonths}
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    {row.duration}
                  </td>
                  <td className="py-4 px-4 text-slate-600">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium">
                      {row.vibe}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-bold text-[#071D3A]">
                    {row.approxCostINR}
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-500 italic max-w-xs">
                    "{row.conciergeTip}"
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. DESTINATION FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F15A24] mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Destination Planning Clarity
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Common questions answered directly by our destination leads.
          </p>
        </div>

        <div className="space-y-3">
          {DESTINATION_FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-[#071D3A] text-sm sm:text-base transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#071D3A] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
