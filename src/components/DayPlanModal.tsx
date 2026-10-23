import React from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Coffee, 
  Hotel, 
  Send, 
  Share2, 
  Sparkles, 
  CheckCircle 
} from 'lucide-react';
import { PackageItem } from '../types';
import { COMPANY_DETAILS } from '../data/mockData';

interface DayPlanModalProps {
  packageItem: PackageItem | null;
  onClose: () => void;
  onPersonalise: (packageItem: PackageItem) => void;
}

export const DayPlanModal: React.FC<DayPlanModalProps> = ({
  packageItem,
  onClose,
  onPersonalise
}) => {
  if (!packageItem) return null;

  const handleWhatsAppBooking = () => {
    const message = `Hello Info Tripp! I am interested in booking / customizing the "${packageItem.title}" (${packageItem.durationDays}D/${packageItem.durationNights}N) starting at ₹${packageItem.startingPriceINR.toLocaleString('en-IN')}/person.%0A%0ACould you please share availability and custom options?`;
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div 
        id="day-plan-modal-container"
        className="relative w-full max-w-3xl my-8 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 flex flex-col max-h-[90vh]"
      >
        {/* Header with image banner */}
        <div className="relative h-48 sm:h-60 overflow-hidden bg-slate-900 shrink-0">
          <img
            src={packageItem.image}
            alt={packageItem.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <button
            id="close-day-plan-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#F15A24] text-white">
                {packageItem.region} • {packageItem.destination}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-xs flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {packageItem.durationDays} Days / {packageItem.durationNights} Nights
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-snug">
              {packageItem.title}
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm mt-0.5">
              Route: {packageItem.waypoints.join(' ➔ ')}
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Quick specs bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm">
            <div>
              <span className="text-slate-500 block text-[11px]">Hotel Tier</span>
              <span className="font-semibold text-slate-800">{packageItem.hotelTier}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Best Travel Season</span>
              <span className="font-semibold text-slate-800">{packageItem.bestSeason}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-500 block text-[11px]">Starting Price (Twin Sharing)</span>
              <span className="font-bold text-[#071D3A] text-base">₹{packageItem.startingPriceINR.toLocaleString('en-IN')}</span>
              <span className="text-slate-500 text-[11px]"> / person</span>
            </div>
          </div>

          {/* Key Inclusions Strip */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F15A24]" />
              <span>Standard Package Inclusions</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {packageItem.inclusions.map((inc, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-150">
                  <CheckCircle className="w-3.5 h-3.5 text-[#F15A24] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day by Day Breakdown */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#071D3A]" />
              <span>Day-By-Day Curated Schedule</span>
            </h4>

            <div className="space-y-4 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
              {packageItem.itinerary.map((dayPlan) => (
                <div key={dayPlan.day} className="relative pl-9 group">
                  {/* Timeline dot */}
                  <div className="absolute left-1.5 top-1 w-5 h-5 rounded-full bg-[#071D3A] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                    {dayPlan.day}
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 hover:border-[#F15A24] shadow-xs transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                      <h5 className="font-semibold text-slate-900 text-sm sm:text-base">
                        Day {dayPlan.day}: {dayPlan.title}
                      </h5>
                      <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
                        {dayPlan.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5 my-2.5">
                      {dayPlan.activities.map((act, aIdx) => (
                        <li key={aIdx} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F15A24] mt-1.5 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-4 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Hotel className="w-3.5 h-3.5 text-slate-400" />
                        <span>Stay: <strong className="text-slate-700">{dayPlan.stay}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Coffee className="w-3.5 h-3.5 text-slate-400" />
                        <span>Meals: <strong className="text-slate-700">{dayPlan.mealsIncluded}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            <span className="text-slate-500 block">Need custom dates, flight additions, or hotel upgrades?</span>
            <span className="font-semibold text-slate-800">We tailor every day to your exact comfort.</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              id="dayplan-personalise-btn"
              onClick={() => {
                onClose();
                onPersonalise(packageItem);
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors"
            >
              Personalise This Plan
            </button>
            <button
              id="dayplan-whatsapp-btn"
              onClick={handleWhatsAppBooking}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#F15A24] hover:bg-[#D84815] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
