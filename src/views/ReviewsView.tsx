import React, { useState, useMemo } from 'react';
import { 
  Star, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  Filter, 
  Play, 
  HelpCircle, 
  HeartHandshake, 
  PhoneCall, 
  MapPin, 
  Calendar,
  ThumbsUp
} from 'lucide-react';
import { PageId, ReviewItem, CaseStudy } from '../types';
import { 
  REVIEWS, 
  CASE_STUDIES, 
  COMPANY_DETAILS 
} from '../data/mockData';

interface ReviewsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanModal: () => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({
  onNavigate,
  onOpenPlanModal
}) => {
  const [selectedTripFilter, setSelectedTripFilter] = useState<string>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  // Filter reviews
  const filteredReviews = useMemo(() => {
    if (selectedTripFilter === 'all') return REVIEWS;
    return REVIEWS.filter((r) => r.tripType.toLowerCase() === selectedTripFilter.toLowerCase());
  }, [selectedTripFilter]);

  // Rating Distribution breakdown
  const ratingBreakdown = [
    { stars: 5, percentage: 94, count: '1,740' },
    { stars: 4, percentage: 5, count: '92' },
    { stars: 3, percentage: 1, count: '18' },
    { stars: 2, percentage: 0, count: '0' },
    { stars: 1, percentage: 0, count: '0' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. TRUST & VERIFICATION HEADER */}
      <section className="bg-gradient-to-b from-[#071D3A]/5 via-[#FBFBF9] to-[#FBFBF9] pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F15A24]/15 text-[#F15A24] text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F15A24]" />
              <span>Independent Verification & Safety Compliance</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              Honest Feedback from Verified Travelers
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">
              Every review on Info Tripp is tied to an actual booking voucher and confirmed travel itinerary. No paid endorsements.
            </p>
          </div>

          {/* Rating Aggregate & Trust Badges Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Big Rating Score (4 cols) */}
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-baseline justify-center lg:justify-start gap-2">
                <span className="text-5xl sm:text-6xl font-serif font-black text-[#071D3A]">4.9</span>
                <span className="text-xl text-slate-400 font-bold">/ 5.0</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                Overall Rating from {COMPANY_DETAILS.stats.verifiedReviews} Verified Bookings
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                98.4% of guests rate our on-trip human concierge as "Exceeds Expectations"
              </p>
            </div>

            {/* Rating distribution bars (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              {ratingBreakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs text-slate-600">
                  <span className="w-12 font-medium flex items-center gap-1 shrink-0">
                    {row.stars} <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#F15A24] rounded-full" 
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="w-12 text-right font-medium text-slate-400">{row.count}</span>
                </div>
              ))}
            </div>

            {/* Platform Badges (3 cols) */}
            <div className="lg:col-span-3 space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-150 text-xs">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">
                Accreditations
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F15A24]" />
                <span>WTTC Safe Travels Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#071D3A]" />
                <span>Google Reviews 4.9★ (850+)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F15A24]" />
                <span>TripAdvisor Travelers' Choice</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F15A24]" />
                <span>Trustpilot 4.8★ Excellent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITOR'S HIGHLIGHT STORIES (ON-GROUND PROBLEM SOLVING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F15A24] bg-[#F15A24]/10 px-3 py-1 rounded-full">
            Real Crisis Management
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
            When Things Don’t Go As Planned
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            The true test of a travel agency isn't when the sun is shining. It's how quickly your concierge acts when strikes, weather, or illness occur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all"
            >
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#071D3A]/10 text-[#071D3A]">
                  {cs.destination}
                </span>

                <h3 className="font-serif font-bold text-lg text-slate-900 leading-snug">
                  {cs.title}
                </h3>

                <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 text-xs text-rose-900">
                  <strong>The Challenge:</strong> {cs.challenge}
                </div>

                <div className="text-xs text-slate-700 leading-relaxed space-y-1.5">
                  <strong className="text-slate-900 block font-semibold">How Info Tripp Solved It:</strong>
                  <p>{cs.howWeSolvedIt}</p>
                </div>

                <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-150 text-xs text-emerald-900 font-medium">
                  <strong>Outcome:</strong> {cs.outcome}
                </div>
              </div>

              <blockquote className="pt-3 border-t border-slate-100 text-xs text-slate-600 italic">
                "{cs.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VIDEO DIARY TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F15A24] bg-[#F15A24]/20 px-3 py-1 rounded-full">
              Live Video Diaries
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
              Unfiltered Feedback on the Road
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Watch real travelers sharing their impressions straight from their houseboats, alpine gondolas, and luxury villas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                id: 'vid-1',
                traveler: 'Ananya & Sahil Verma',
                route: 'Kashmir Saffron Circuit',
                snippet: '"Our houseboat deck on Nigeen lake was paradise. Priya arranged our Gondola tickets when everything was sold out online!"',
                img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80',
                length: '1:18 min'
              },
              {
                id: 'vid-2',
                traveler: 'Rohan & Srishti Chhabra',
                route: 'Bali Ubud Private Pool Villa',
                snippet: '"Floating breakfast in Ubud and the fast boat to Nusa Penida went like clockwork. The WhatsApp support is real!"',
                img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
                length: '0:54 min'
              },
              {
                id: 'vid-3',
                traveler: 'The Gupta Family (6 Pax)',
                route: 'Royal Rajasthan Heritage Circuit',
                snippet: '"Chauffeur Bhanwar Singh treated our parents like royal guests. Incredible hotels with pure vegetarian gourmet dining."',
                img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
                length: '1:42 min'
              }
            ].map((vid) => (
              <div 
                key={vid.id}
                onClick={() => setActiveVideoModal(vid.id)}
                className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-[#F15A24] transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={vid.img} alt={vid.traveler} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-75" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#071D3A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-[#071D3A] ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-[10px] text-white">
                    {vid.length}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="font-bold text-sm text-white">{vid.traveler}</h4>
                    <span className="text-[11px] text-[#F15A24] font-medium block">{vid.route}</span>
                    <p className="text-xs text-slate-300 italic mt-2">
                      {vid.snippet}
                    </p>
                  </div>
                  <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-700/60">
                    Recorded live during trip
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Video modal preview */}
          {activeVideoModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
              <div className="bg-slate-900 text-white rounded-2xl p-6 max-w-md w-full border border-slate-700 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#F15A24]/20 text-[#F15A24] flex items-center justify-center mx-auto">
                  <Play className="w-6 h-6 fill-[#F15A24]" />
                </div>
                <h4 className="font-serif font-bold text-lg">Verified Traveler Video Diary</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Video playback is optimized for mobile playback. In full production, this streams 1080p recorded traveler diary clips directly from secure storage.
                </p>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="px-5 py-2 rounded-xl bg-[#F15A24] hover:bg-[#D84815] text-white text-xs font-semibold"
                >
                  Close Video Preview
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. VERIFIED REVIEW FEED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-serif font-bold text-2xl text-slate-900">
              Recent Traveler Experiences
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Filter by your party type to see relevant insights.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-xl w-fit">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'Honeymoon', label: 'Honeymoon' },
              { id: 'Family', label: 'Family' },
              { id: 'Solo', label: 'Solo' },
              { id: 'Offsite', label: 'Corporate / Friends' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTripFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedTripFilter === tab.id
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#F15A24]/10 text-[#F15A24]">
                    ✓ Verified Stay
                  </span>
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </blockquote>

                <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] text-slate-600 space-y-0.5">
                  <div className="flex items-center gap-1 text-slate-700 font-medium">
                    <MapPin className="w-3 h-3 text-[#F15A24]" />
                    <span>{rev.destination} ({rev.tripType})</span>
                  </div>
                  <div className="text-slate-500">
                    Stay: {rev.stayTag}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-slate-900 block font-semibold">{rev.travelerName}</strong>
                  <span className="text-slate-400 text-[11px]">{rev.city} • {rev.travelDate}</span>
                </div>

                <span className="text-[11px] text-slate-400">
                  {rev.packageTitle.split(':')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOOKING GUARANTEES FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 text-center space-y-4">
          <HeartHandshake className="w-10 h-10 text-[#F15A24] mx-auto" />
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
            The Info Tripp Trust Commitment
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            We operate with zero hidden charges, transparent hotel confirmations, verified chauffeurs, and dedicated human managers who answer on WhatsApp 24/7.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenPlanModal}
              className="px-6 py-3 rounded-xl bg-[#071D3A] hover:bg-[#05152B] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
            >
              Start Your Journey with Peace of Mind
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
