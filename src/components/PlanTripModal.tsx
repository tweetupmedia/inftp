import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Calendar, 
  Users, 
  MapPin, 
  Wallet, 
  Phone, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';
import { COMPANY_DETAILS, DESTINATIONS } from '../data/mockData';

interface PlanTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDestination?: string;
  preselectedPackageTitle?: string;
}

export const PlanTripModal: React.FC<PlanTripModalProps> = ({
  isOpen,
  onClose,
  preselectedDestination,
  preselectedPackageTitle
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    destination: preselectedDestination || 'Kashmir',
    departureMonth: 'Next 30 Days',
    duration: '6 – 8 Days',
    travelGroup: 'Couple / Honeymoon',
    style: 'Balanced (Relaxed + Sights)',
    hotelPreference: '4★ Handpicked Boutique / Heritage',
    budgetPerPerson: '₹35,000 – ₹55,000 / person',
    fullName: '',
    phone: '',
    email: '',
    notes: preselectedPackageTitle ? `Inquiring regarding package: ${preselectedPackageTitle}` : ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const generateWhatsAppUrl = () => {
    const text = `Hi Info Tripp Concierge! I would like to plan a trip with you.%0A%0A*Destination:* ${formData.destination}%0A*Departure:* ${formData.departureMonth}%0A*Duration:* ${formData.duration}%0A*Travelers:* ${formData.travelGroup}%0A*Budget Preference:* ${formData.budgetPerPerson}%0A*Hotel Tier:* ${formData.hotelPreference}%0A*Name:* ${formData.fullName || 'Traveler'}%0A*Phone:* ${formData.phone || 'Provided via form'}%0A*Special Notes:* ${formData.notes || 'Looking forward to hearing from a destination specialist.'}`;
    return `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${text}`;
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        id="plan-trip-modal-card"
        className="relative w-full max-w-2xl my-8 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800"
      >
        {/* Modal Header */}
        <div className="bg-[#071D3A] text-white p-6 sm:p-7 relative">
          <button
            id="close-plan-modal-btn"
            onClick={resetForm}
            className="absolute top-5 right-5 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F15A24] bg-[#F15A24]/20 px-3 py-1 rounded-full w-fit mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Human-Curated Concierge</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Plan Your Journey With Ease
          </h2>
          <p className="text-slate-200 text-sm mt-1 max-w-lg">
            Tell us what you love. A dedicated destination lead will craft your tailor-made route with transparent, upfront pricing.
          </p>

          {/* Progress Indicator */}
          {!isSubmitted && (
            <div className="flex items-center gap-2 mt-5">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#F15A24]' : 'bg-white/20'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#F15A24]' : 'bg-white/20'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-[#F15A24]' : 'bg-white/20'}`} />
              <span className="text-xs font-bold text-[#F15A24] ml-2">Step {step} of 3</span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-[#F15A24]/10 text-[#F15A24] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#071D3A]">
                Itinerary Request Received!
              </h3>
              <p className="text-slate-600 mt-2 max-w-md mx-auto text-sm sm:text-base">
                Thank you, <strong>{formData.fullName || 'Traveler'}</strong>. Your dedicated specialist for <strong>{formData.destination}</strong> will connect within <strong>4 minutes</strong> on WhatsApp with a customized blueprint.
              </p>

              <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs sm:text-sm text-slate-700 max-w-md mx-auto space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-semibold text-slate-900">{formData.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimated Window:</span>
                  <span className="font-semibold text-slate-900">{formData.departureMonth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Party Size:</span>
                  <span className="font-semibold text-slate-900">{formData.travelGroup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Budget Guidance:</span>
                  <span className="font-semibold text-slate-900">{formData.budgetPerPerson}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7">
                <a
                  id="open-whatsapp-direct-plan-btn"
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F15A24] hover:bg-[#D84815] text-white font-bold rounded-xl shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNext} className="space-y-6">
              {/* STEP 1: Destination & Timing */}
              {step === 1 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Where would you like to travel?
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                      <select
                        id="plan-destination-select"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#071D3A] focus:bg-white"
                        required
                      >
                        <option value="Mathura & Vrindavan">Mathura & Vrindavan (1 Day Trip from Delhi NCR)</option>
                        <option value="Ayodhya">Ayodhya (2 Days Ram Mandir & Saryu Aarti)</option>
                        <option value="Gangasagar">Gangasagar (1 Day Trip from Kolkata)</option>
                        <option value="Shirdi & Shani Shingnapur">Shirdi & Shani Shingnapur (Sai Baba Darshan)</option>
                        <option value="Khatu Shyam & Salasar Balaji">Khatu Shyam & Salasar Balaji (1N/2D from NCR)</option>
                        <option value="Kashmir">Kashmir (Dal Lake, Gulmarg, Pahalgam)</option>
                        <option value="Rajasthan">Rajasthan (Jaipur, Jodhpur, Udaipur, Dunes)</option>
                        <option value="Ladakh">Ladakh (Pangong Tso, Nubra Valley, Khardung La)</option>
                        <option value="Kerala">Kerala (Backwaters, Munnar Hills, Thekkady)</option>
                        <option value="Bali">Bali & Nusa Islands (Ubud Villas & Coastal Cliffs)</option>
                        <option value="Switzerland">Switzerland (Glacier Express, Zermatt, Lakes)</option>
                        <option value="Dubai">Dubai & Desert Safari</option>
                        <option value="Vietnam">Vietnam (Ha Long Bay & Lantern Towns)</option>
                        <option value="Japan">Japan (Tokyo, Kyoto, Mt. Fuji & Bullet Trains)</option>
                        <option value="Other / Multiple">Other / Custom Multi-Country Journey</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2">
                        Preferred Departure Month
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <select
                          id="plan-month-select"
                          value={formData.departureMonth}
                          onChange={(e) => setFormData({ ...formData, departureMonth: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#071D3A] focus:bg-white"
                        >
                          <option value="Next 30 Days">Immediate (Next 30 Days)</option>
                          <option value="Within 2-3 Months">Within 2 – 3 Months</option>
                          <option value="Upcoming Festive / Winter Season">Upcoming Festive / Winter Season</option>
                          <option value="Summer Holidays">Summer Holidays</option>
                          <option value="Just Exploring Options">Just Exploring Options</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2">
                        Ideal Duration
                      </label>
                      <select
                        id="plan-duration-select"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#071D3A] focus:bg-white"
                      >
                        <option value="4 – 5 Days (Short Break)">4 – 5 Days (Short Break)</option>
                        <option value="6 – 8 Days (Signature)">6 – 8 Days (Signature Itinerary)</option>
                        <option value="9 – 12 Days (Deep Exploration)">9 – 12 Days (Deep Exploration)</option>
                        <option value="14+ Days (Grand Tour)">14+ Days (Grand Tour)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Travel Group & Preferences */}
              {step === 2 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Who is travelling?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {['Couple / Honeymoon', 'Family with Kids', 'Group of Friends', 'Solo Traveler'].map((grp) => (
                        <button
                          key={grp}
                          type="button"
                          onClick={() => setFormData({ ...formData, travelGroup: grp })}
                          className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all text-center ${
                            formData.travelGroup === grp
                              ? 'bg-[#071D3A] text-white border-[#071D3A] shadow-xs'
                              : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {grp}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Preferred Stay Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { title: '4★ Handpicked', sub: 'Boutique & Heritage' },
                        { title: '5★ Luxury & Villas', sub: 'Palaces & Pool Villas' },
                        { title: 'Eco / Glamping', sub: 'Domes & Chalets' }
                      ].map((tier) => (
                        <button
                          key={tier.title}
                          type="button"
                          onClick={() => setFormData({ ...formData, hotelPreference: `${tier.title} (${tier.sub})` })}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            formData.hotelPreference.includes(tier.title)
                              ? 'bg-[#071D3A] text-white border-[#071D3A] shadow-xs'
                              : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <div className="font-semibold text-xs sm:text-sm">{tier.title}</div>
                          <div className={`text-[11px] ${formData.hotelPreference.includes(tier.title) ? 'text-slate-200' : 'text-slate-500'}`}>
                            {tier.sub}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Approx. Budget (per person excluding flights)
                    </label>
                    <div className="relative">
                      <Wallet className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <select
                        id="plan-budget-select"
                        value={formData.budgetPerPerson}
                        onChange={(e) => setFormData({ ...formData, budgetPerPerson: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#071D3A] focus:bg-white"
                      >
                        <option value="₹25,000 – ₹35,000 / person">₹25,000 – ₹35,000 / person (Comfort Domestic)</option>
                        <option value="₹35,000 – ₹55,000 / person">₹35,000 – ₹55,000 / person (Premium Curation)</option>
                        <option value="₹55,000 – ₹90,000 / person">₹55,000 – ₹90,000 / person (Southeast Asia / Luxury Domestic)</option>
                        <option value="₹1,20,000+ / person">₹1,20,000+ / person (Europe / Ultra Luxury)</option>
                        <option value="Recommend based on destination">Recommend based on destination best value</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Direct WhatsApp Connection */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="plan-fullname-input"
                      type="text"
                      required
                      placeholder="e.g. Ankit Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#071D3A] focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          id="plan-phone-input"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#071D3A] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        id="plan-email-input"
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#071D3A] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">
                      Any Special Wishes or Questions?
                    </label>
                    <textarea
                      id="plan-notes-textarea"
                      rows={2}
                      placeholder="e.g. Honeymoon floral decoration, vegetarian dining, senior citizen mobility..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#071D3A] focus:bg-white"
                    />
                  </div>

                  <p className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24]" />
                    No spam. Zero sales pressure. Only vetted transparent travel plans.
                  </p>
                </div>
              )}

              {/* Modal Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  id="plan-trip-submit-next-btn"
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F15A24] hover:bg-[#D84815] text-white font-bold rounded-xl text-sm shadow-md transition-all ml-auto"
                >
                  <span>{step === 3 ? 'Get Curated Itinerary' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
