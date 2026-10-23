import React, { useState, useMemo } from 'react';
import { 
  Camera, 
  Sparkles, 
  Heart, 
  Star, 
  MapPin, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  Grid3X3, 
  Columns3, 
  Film, 
  Send, 
  Gift, 
  Upload,
  Calendar,
  UserCheck
} from 'lucide-react';
import { PageId, ChronicleStory, PackageItem } from '../types';
import { CHRONICLES, PACKAGES } from '../data/mockData';

interface GalleryViewProps {
  onNavigate: (page: PageId) => void;
  onSelectPackage: (pkg: PackageItem) => void;
  onOpenPlanModal: (destination?: string, packageTitle?: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  onNavigate,
  onSelectPackage,
  onOpenPlanModal
}) => {
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [activeViewMode, setActiveViewMode] = useState<'chronicles' | 'masonry' | 'reels'>('chronicles');
  const [expandedStory, setExpandedStory] = useState<ChronicleStory | null>(null);

  // Creator Submission Form State
  const [creatorName, setCreatorName] = useState('');
  const [creatorDest, setCreatorDest] = useState('Kashmir');
  const [creatorHandle, setCreatorHandle] = useState('');
  const [creatorStory, setCreatorStory] = useState('');
  const [creatorSubmitted, setCreatorSubmitted] = useState(false);

  const storyOfTheMonth = CHRONICLES[0]; // The Verma Family in Kashmir & Ladakh

  // Filtered stories
  const filteredChronicles = useMemo(() => {
    if (selectedDestination === 'all') return CHRONICLES;
    return CHRONICLES.filter((c) => 
      c.destination.toLowerCase().includes(selectedDestination.toLowerCase())
    );
  }, [selectedDestination]);

  const handleCreatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCreatorSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. HERO METRIC BANNER */}
      <section className="bg-gradient-to-b from-[#071D3A]/5 via-[#FBFBF9] to-[#FBFBF9] pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071D3A]/10 text-[#071D3A] text-xs font-semibold">
            <Camera className="w-3.5 h-3.5 text-[#F15A24]" />
            <span>Living Travel Chronicles</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            24,800+ Unfiltered Moments Captured
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Authentic photo journals and unscripted memories recorded by real travelers who traded stressful spreadsheets for Info Tripp journeys.
          </p>

          {/* Metric Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-slate-700 text-xs sm:text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span><strong>4.94 / 5</strong> Community Rating</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span><strong>98.4%</strong> Recommendation Rate</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <Camera className="w-4 h-4 text-[#F15A24]" />
              <span><strong>100%</strong> Genuine Traveler Photography</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STORY OF THE MONTH EDITORIAL SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md flex flex-col lg:flex-row">
          {/* Main Visual */}
          <div className="lg:w-1/2 relative bg-slate-900 min-h-[340px] sm:min-h-[440px]">
            <img
              src={storyOfTheMonth.image}
              alt={storyOfTheMonth.title}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#F15A24] text-white shadow-xs">
                ★ Story of the Month
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs text-slate-300 block">{storyOfTheMonth.travelerNames}</span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mt-1">
                {storyOfTheMonth.title}
              </h3>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#071D3A]">
                <MapPin className="w-4 h-4 text-[#F15A24]" />
                <span>{storyOfTheMonth.destination} • {storyOfTheMonth.dateTravelled}</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-500">{storyOfTheMonth.stayTag}</span>
              </div>

              <blockquote className="p-4 rounded-2xl bg-slate-50 border-l-4 border-[#071D3A] text-slate-700 italic text-sm sm:text-base leading-relaxed">
                "{storyOfTheMonth.quote}"
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {storyOfTheMonth.fullStory}
              </p>

              {/* Gallery Thumbnails */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Trip Snapshots
                </span>
                <div className="flex gap-2">
                  {storyOfTheMonth.galleryImages.map((img, idx) => (
                    <div key={idx} className="w-20 h-16 rounded-lg overflow-hidden border border-slate-200">
                      <img src={img} alt="Trip snapshot" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Package Link */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-slate-400 block">Itinerary Booked:</span>
                <span className="font-semibold text-slate-800 text-xs sm:text-sm">{storyOfTheMonth.packageTitle}</span>
              </div>

              <button
                id="book-story-package-btn"
                onClick={() => {
                  const pkg = PACKAGES.find((p) => p.id === storyOfTheMonth.packageBookedId);
                  if (pkg) onSelectPackage(pkg);
                  else onOpenPlanModal(storyOfTheMonth.destination);
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#071D3A] hover:bg-[#05152B] text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <span>View Booked Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VIEW SWITCHER & FILTER PILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          {/* Destination filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'Kashmir', label: 'Kashmir' },
              { id: 'Rajasthan', label: 'Rajasthan' },
              { id: 'Bali', label: 'Bali' },
              { id: 'Switzerland', label: 'Switzerland' },
              { id: 'Ladakh', label: 'Ladakh' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDestination(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedDestination === tab.id
                    ? 'bg-[#071D3A] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* View switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl w-fit">
            <button
              onClick={() => setActiveViewMode('chronicles')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeViewMode === 'chronicles' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>Chronicles</span>
            </button>
            <button
              onClick={() => setActiveViewMode('masonry')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeViewMode === 'masonry' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Columns3 className="w-3.5 h-3.5" />
              <span>Photo Grid</span>
            </button>
            <button
              onClick={() => setActiveViewMode('reels')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeViewMode === 'reels' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Moments</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. TRAVEL CHRONICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeViewMode === 'chronicles' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredChronicles.map((story) => (
              <div
                key={story.id}
                id={`chronicle-card-${story.id}`}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#071D3A] text-white">
                      {story.destination}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-xs text-white">
                      {story.travelerType}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-slate-200">{story.travelerNames} • {story.dateTravelled}</span>
                    <h3 className="font-serif font-bold text-lg text-white mt-0.5">
                      {story.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <blockquote className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                      "{story.quote}"
                    </blockquote>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3">
                      {story.fullStory}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      Stay: <strong className="text-slate-800">{story.stayTag}</strong>
                    </span>

                    <button
                      id={`book-route-btn-${story.id}`}
                      onClick={() => onOpenPlanModal(story.destination, story.packageTitle)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#071D3A] hover:bg-[#05152B] text-white text-xs font-semibold transition-colors"
                    >
                      <span>Book This Route</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : activeViewMode === 'masonry' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredChronicles.flatMap((c) => [c.image, ...c.galleryImages]).map((img, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden group bg-slate-100 aspect-square">
                <img
                  src={img}
                  alt="Travel memory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                  <span>#TravelSimplified</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Phase II Gondola Ride in Gulmarg',
                duration: '0:42',
                traveler: 'Verma Family',
                views: '4.2k views',
                img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Private Catamaran into Nusa Penida',
                duration: '0:55',
                traveler: 'Karan & Meera',
                views: '6.8k views',
                img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Glacier Express Crossing the Landwasser Viaduct',
                duration: '1:12',
                traveler: 'Devendra Patel',
                views: '8.1k views',
                img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80'
              }
            ].map((reel, rIdx) => (
              <div key={rIdx} className="bg-slate-900 rounded-3xl overflow-hidden relative aspect-9/16 max-h-[500px] shadow-lg group">
                <img src={reel.img} alt={reel.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
                
                <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-semibold">
                  {reel.duration}
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
                  <h4 className="font-serif font-bold text-base text-white leading-snug">
                    {reel.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>{reel.traveler}</span>
                    <span>{reel.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. COMMUNITY STREAM & CREATOR PROGRAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#071D3A] to-[#0A2640] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Prompt */}
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F15A24] text-white inline-block">
                Traveler Community Program
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Share Your Journey, Earn a ₹5,000 Travel Voucher
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                Travelled with Info Tripp recently? Tag us on Instagram <strong className="text-white">@InfoTrippJourneys</strong> with hashtag <strong className="text-[#F15A24]">#TravelSimplified</strong>, or submit your 3 favourite trip shots below. Approved essays receive a ₹5,000 credit for your next holiday!
              </p>

              <div className="pt-2 flex items-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-[#F15A24]" />
                  <span>₹5,000 Voucher</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F15A24]" />
                  <span>Featured on Website</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Priority Specialist Concierge</span>
                </div>
              </div>
            </div>

            {/* Right Submission Module */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white">
              {creatorSubmitted ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-12 h-12 text-[#F15A24] mx-auto mb-2" />
                  <h4 className="text-lg font-serif font-bold text-white">Submission Received!</h4>
                  <p className="text-xs text-slate-200 mt-1">
                    Our editorial team will review your photos and WhatsApp your ₹5,000 travel voucher within 48 hours.
                  </p>
                  <button
                    onClick={() => setCreatorSubmitted(false)}
                    className="mt-4 px-4 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-xs font-semibold"
                  >
                    Submit another memory
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCreatorSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Your Name</label>
                    <input
                      id="creator-name-input"
                      type="text"
                      required
                      placeholder="e.g. Priya Nair"
                      value={creatorName}
                      onChange={(e) => setCreatorName(e.target.value)}
                      className="w-full px-3 py-2 bg-white/15 border border-white/30 rounded-xl text-xs text-white placeholder:text-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#F15A24]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">Destination</label>
                      <select
                        id="creator-dest-select"
                        value={creatorDest}
                        onChange={(e) => setCreatorDest(e.target.value)}
                        className="w-full px-3 py-2 bg-[#071D3A] border border-white/30 rounded-xl text-xs text-white focus:outline-hidden focus:ring-1 focus:ring-[#F15A24]"
                      >
                        <option value="Kashmir">Kashmir</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Bali">Bali</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="Kerala">Kerala</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">Instagram Handle</label>
                      <input
                        id="creator-handle-input"
                        type="text"
                        placeholder="@yourhandle"
                        value={creatorHandle}
                        onChange={(e) => setCreatorHandle(e.target.value)}
                        className="w-full px-3 py-2 bg-white/15 border border-white/30 rounded-xl text-xs text-white placeholder:text-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#F15A24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Favorite Memory / Quote</label>
                    <textarea
                      id="creator-story-input"
                      rows={2}
                      placeholder="What was the most magical highlight of your trip?"
                      value={creatorStory}
                      onChange={(e) => setCreatorStory(e.target.value)}
                      className="w-full px-3 py-2 bg-white/15 border border-white/30 rounded-xl text-xs text-white placeholder:text-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#F15A24]"
                    />
                  </div>

                  <button
                    id="submit-creator-story-btn"
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#F15A24] hover:bg-[#D84815] text-white font-semibold text-xs transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Submit & Claim Voucher</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
