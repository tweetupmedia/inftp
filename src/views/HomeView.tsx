import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Compass, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Star, 
  Send, 
  Heart,
  ChevronRight,
  ChevronLeft,
  PhoneCall,
  Flame,
  Award,
  Luggage
} from 'lucide-react';
import { PageId, PackageItem, DestinationItem } from '../types';
import { 
  COMPANY_DETAILS, 
  PACKAGES, 
  DESTINATIONS, 
  REVIEWS, 
  CHRONICLES 
} from '../data/mockData';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onSelectPackage: (pkg: PackageItem) => void;
  onOpenPlanModal: (destination?: string, packageTitle?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectPackage,
  onOpenPlanModal
}) => {
  // Quick triage state
  const [triageDest, setTriageDest] = useState('Kashmir');
  const [triageStyle, setTriageStyle] = useState('Family & Scenic');
  const [triageMonth, setTriageMonth] = useState('Upcoming 30 Days');

  // Testimonial slider state
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const featuredPackages = PACKAGES.filter((p) => p.featured);
  const featuredDestinations = DESTINATIONS.filter((d) => d.featured).slice(0, 4);

  const handleTriageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenPlanModal(triageDest);
  };

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-24 overflow-hidden">
        {/* Cinematic Travel Photography Background with Layered Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=85"
            alt="Scenic mountain valley and turquoise alpine wanderlust landscape"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Deep Navy to Light Canvas Seamless Scrim */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071D3A]/90 via-[#0A2640]/80 to-[#FBFBF9]" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#071D3A]/30 to-[#071D3A]/80 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-sm">
              Travel, Simplified.
            </h1>

            {/* Subtext */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-xs">
              Handcrafted domestic &amp; international journeys backed by human destination leads, vetted boutique stays, and a 24/7 WhatsApp concierge who stays with you every kilometer.
            </p>
          </div>

          {/* Quick-Triage Widget */}
          <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
            <form 
              id="hero-quick-triage-form"
              onSubmit={handleTriageSubmit}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
            >
              {/* Where to go */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Where to go?
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#071D3A] absolute left-3 top-3" />
                  <select
                    id="triage-dest-select"
                    value={triageDest}
                    onChange={(e) => setTriageDest(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                  >
                    <option value="Kashmir">Kashmir (Srinagar, Gulmarg)</option>
                    <option value="Mathura & Vrindavan">Mathura & Vrindavan (1 Day from NCR)</option>
                    <option value="Ayodhya">Ayodhya (Ram Mandir & Saryu Aarti)</option>
                    <option value="Gangasagar">Gangasagar (1 Day from Kolkata)</option>
                    <option value="Shirdi">Shirdi & Shani Shingnapur (Sai Darshan)</option>
                    <option value="Khatu Shyam & Salasar Balaji">Khatu Shyam & Salasar (from NCR)</option>
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
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Travel Style
                </label>
                <div className="relative">
                  <Luggage className="w-4 h-4 text-[#F15A24] absolute left-3 top-3" />
                  <select
                    id="triage-style-select"
                    value={triageStyle}
                    onChange={(e) => setTriageStyle(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
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

              {/* Departure Month */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  When?
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#F15A24] absolute left-3 top-3" />
                  <select
                    id="triage-month-select"
                    value={triageMonth}
                    onChange={(e) => setTriageMonth(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                  >
                    <option value="Upcoming 30 Days">Next 30 Days</option>
                    <option value="Within 2-3 Months">Within 2 – 3 Months</option>
                    <option value="Upcoming Festive Holidays">Festive Season</option>
                    <option value="Summer Holidays">Summer Holidays</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 sm:pt-4 lg:pt-5">
                <button
                  id="hero-triage-submit-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#071D3A] hover:bg-[#05152B] text-white font-semibold rounded-xl text-sm shadow-md transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-[#F15A24]" />
                  <span>Find My Trip</span>
                </button>
              </div>
            </form>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-700 font-medium">
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24]" />
                Zero hidden taxes &amp; tolls
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24]" />
                Direct WhatsApp human lead
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24]" />
                Flexible date shifting
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="pt-3 md:pt-0">
            <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#071D3A]">
              {COMPANY_DETAILS.stats.travelers}
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Delighted Travelers</p>
            <span className="text-[11px] text-slate-400">Zero automated bot calls</span>
          </div>

          <div className="pt-3 md:pt-0">
            <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#071D3A] flex items-center justify-center gap-1">
              <span>{COMPANY_DETAILS.stats.rating}</span>
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Verified Guest Rating</p>
            <span className="text-[11px] text-slate-400">{COMPANY_DETAILS.stats.verifiedReviews} published reviews</span>
          </div>

          <div className="pt-3 md:pt-0">
            <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#F15A24]">
              24/7 Live
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">On-Trip Human Support</p>
            <span className="text-[11px] text-slate-400">Assigned personal WhatsApp manager</span>
          </div>

          <div className="pt-3 md:pt-0">
            <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#F15A24]">
              {COMPANY_DETAILS.stats.avgResponseMinutes}
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Avg. Concierge Response</p>
            <span className="text-[11px] text-slate-400">Real people, zero hold music</span>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (4 STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F15A24] bg-[#F15A24]/10 px-3 py-1 rounded-full">
            The Info Tripp Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
            How Simple Vacation Planning Should Be
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Four seamless steps from dream destination to touchdown with your private chauffeur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {[
            {
              step: '01',
              title: 'Choose a Destination',
              desc: 'Select from our regional directory of vetted domestic trails & international escapes.',
              icon: MapPin,
              color: 'text-[#071D3A]'
            },
            {
              step: '02',
              title: 'Find Your Package',
              desc: 'Browse blueprint itineraries with realistic driving times and handpicked boutique stays.',
              icon: Luggage,
              color: 'text-[#F15A24]'
            },
            {
              step: '03',
              title: 'Personalise Your Plan',
              desc: 'Tailor pacing, hotel tiers, and dietary preferences with your assigned destination lead.',
              icon: Sparkles,
              color: 'text-[#F15A24]'
            },
            {
              step: '04',
              title: 'Enquire with Ease',
              desc: 'Connect in seconds over WhatsApp with full transparent inclusions and 24/7 on-trip care.',
              icon: PhoneCall,
              color: 'text-[#071D3A]'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-xs relative transition-all hover:translate-y-[-2px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-serif font-black text-slate-200">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED SIGNATURE SPOTLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F15A24] mb-1">
              <Flame className="w-4 h-4" />
              <span>Signature Collections</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Vetted Journeys Ready for Departure
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Inspected properties, balanced day pacing, and transparent twin-sharing starting prices.
            </p>
          </div>

          <button
            id="view-all-packages-home-btn"
            onClick={() => onNavigate('packages')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#071D3A] hover:text-[#05152B] transition-colors group"
          >
            <span>Explore All {PACKAGES.length} Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPackages.map((pkg) => (
            <div
              key={pkg.id}
              id={`featured-pkg-${pkg.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col group"
            >
              {/* Image banner */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-[#071D3A] text-white">
                  {pkg.region}
                </span>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                    {pkg.durationDays}D / {pkg.durationNights}N
                  </span>
                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="font-bold">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900 leading-snug group-hover:text-[#071D3A] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {pkg.subtitle}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#F15A24] shrink-0" />
                      <span className="line-clamp-1 font-medium text-slate-700">{pkg.hotelTier}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{pkg.bestSeason}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Starting from</span>
                    <span className="text-base font-bold text-[#071D3A]">
                      ₹{pkg.startingPriceINR.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-slate-400"> / person</span>
                  </div>

                  <button
                    id={`open-dayplan-btn-${pkg.id}`}
                    onClick={() => onSelectPackage(pkg)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#071D3A] text-slate-700 hover:text-white text-xs font-semibold transition-colors"
                  >
                    View Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY INFOTRIPP (3 COLUMNS) */}
      <section className="bg-[#071D3A]/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#071D3A] bg-[#071D3A]/10 px-3 py-1 rounded-full">
              The Anti-Algorithm Promise
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
              Why Discerning Travelers Choose Info Tripp
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We replaced cold algorithms and automated call centers with genuine regional mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Prop 1 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#071D3A]/10 text-[#071D3A] flex items-center justify-center font-serif text-xl font-bold">
                1
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900">
                Curated Choices, Zero Tourist Traps
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We do not list 10,000 mediocre hotels. Every property on our platform is personally visited and verified by our destination leads for genuine hospitality, cleanliness, and scenic charm.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 pt-2 font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24]" />
                  <span>Verified 4-5★ boutique & heritage properties</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24]" />
                  <span>Sanitized chauffeur cars with courteous local drivers</span>
                </li>
              </ul>
            </div>

            {/* Value Prop 2 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F15A24]/10 text-[#F15A24] flex items-center justify-center font-serif text-xl font-bold">
                2
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900">
                Direct Human Specialist Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You work with one assigned human expert—like Priya for Kashmir or Rohan for Bali. When you have a question or need to change plans on the road, message them on WhatsApp and get replies in 4 minutes.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 pt-2 font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24]" />
                  <span>Single point of contact from day 1 to arrival</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24]" />
                  <span>24/7 on-ground assistance and emergency rerouting</span>
                </li>
              </ul>
            </div>

            {/* Value Prop 3 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F15A24]/10 text-[#F15A24] flex items-center justify-center font-serif text-xl font-bold">
                3
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900">
                Simple, Transparent Upfront Pricing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tired of checkout totals jumping 30% for taxes, driver night allowances, or tourist permits? What you see is what you pay. Our quote itemizes all inclusions clearly with zero surprises.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 pt-2 font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24]" />
                  <span>All state taxes, tolls & allowances included</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24]" />
                  <span>Flexible rescheduling guidance if flights shift</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl font-serif text-slate-900 italic leading-relaxed">
              "{REVIEWS[testimonialIdx].comment}"
            </blockquote>

            <div className="pt-2">
              <div className="font-bold text-slate-900 text-base">
                {REVIEWS[testimonialIdx].travelerName}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {REVIEWS[testimonialIdx].city} • Travelled to {REVIEWS[testimonialIdx].destination} ({REVIEWS[testimonialIdx].tripType})
              </div>
              <div className="inline-block mt-2 px-3 py-1 rounded-full bg-[#F15A24]/10 text-[#F15A24] text-[11px] font-semibold">
                ✓ Verified Booking: {REVIEWS[testimonialIdx].packageTitle}
              </div>
            </div>

            {/* Slider controls */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                id="prev-testimonial-btn"
                onClick={prevTestimonial}
                className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-semibold text-slate-400">
                {testimonialIdx + 1} / {REVIEWS.length}
              </span>
              <button
                id="next-testimonial-btn"
                onClick={nextTestimonial}
                className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#071D3A] to-[#05152B] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F15A24] text-white inline-block">
              Start In 2 Minutes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Ready to Escape the Planning Overwhelm?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Connect with a human travel specialist today. Share your vibe, group size, and dates—we’ll have your tailor-made blueprint ready on WhatsApp in minutes.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                id="cta-plan-trip-home-btn"
                onClick={() => onOpenPlanModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#F15A24] hover:bg-[#D84815] text-white shadow-lg transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Plan Your Custom Trip</span>
              </button>

              <button
                id="cta-whatsapp-home-btn"
                onClick={() => {
                  const text = `Hello Info Tripp! I'd like to talk to a travel specialist about an upcoming vacation.`;
                  window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 83188 81779)</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
