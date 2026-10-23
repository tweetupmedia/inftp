import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Users, 
  Award, 
  HeartHandshake, 
  ArrowRight,
  Headphones
} from 'lucide-react';
import { PageId, SpecialistItem } from '../types';
import { SPECIALISTS, COMPANY_DETAILS } from '../data/mockData';
import { Logo } from '../components/Logo';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanModal: (destination?: string) => void;
  currentPage?: PageId;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenPlanModal,
  currentPage
}) => {
  // Auto-scroll to contact section if navigated to Contact Us
  React.useEffect(() => {
    if (currentPage === 'contact') {
      const el = document.getElementById('contact-hub');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentPage]);
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Kashmir',
    travelMonth: 'Next 30 Days',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const openSpecialistWhatsApp = (specialist: SpecialistItem) => {
    const text = `Hello ${specialist.name}! I saw your profile on Info Tripp as the ${specialist.regionSpecialty || 'destination'} specialist. I would like to plan a trip with your guidance.`;
    const waNumber = specialist.whatsapp || COMPANY_DETAILS.whatsapp;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. ORIGIN NARRATIVE HERO */}
      <section className="bg-gradient-to-b from-[#071D3A]/5 via-[#FBFBF9] to-[#FBFBF9] pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex justify-center mb-2">
              <Logo className="h-16 sm:h-20 w-auto" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071D3A]/10 text-[#071D3A] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#F15A24]" />
              <span>Our Philosophy & Origin</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              We Built Info Tripp Because Vacation Planning Was Broken.
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Planning a trip used to mean spending weeks juggling 50 open browser tabs, dodging spam calls from faceless portal algorithms, and arriving to find the "luxury view" was a construction site.
            </p>
          </div>

          {/* Narrative Split Card */}
          <div className="mt-10 max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F15A24]">
                The Human Alternative
              </span>
              <h3 className="font-serif font-bold text-2xl text-slate-900 leading-snug">
                Travel Should Feel Effortless Long Before You Pack.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Info Tripp is a boutique collective of regional specialists. We don’t sell every hotel on earth. We personally visit boutique properties, test hotel beds, vet courteous drivers, and design itineraries that leave room to breathe.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you plan with us, you are never passed to an offshore call center. You get a direct WhatsApp channel to an expert who knows every bend in the road.
              </p>
            </div>

            <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-150 text-xs">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1">
                Our 4 Non-Negotiable Rules
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F15A24] shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong>Zero Hidden Taxes:</strong> Drivers' night allowances, toll taxes, and permits are itemized upfront.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F15A24] shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong>No Aggressive Tele-calling:</strong> We respect your peace. All quotes delivered digitally on WhatsApp & email.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F15A24] shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong>Human On-Trip Concierge:</strong> 24/7 WhatsApp response under 4 minutes if your flight delays or plans change.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F15A24] shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong>Vetted Boutique Stays:</strong> Stays chosen for authentic character, scenic viewpoints, and top sanitation.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEET THE DESTINATION SPECIALISTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#071D3A] bg-[#071D3A]/10 px-3 py-1 rounded-full">
            Real Regional Masters
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
            Meet Your Destination Specialists
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Connect directly with the human being responsible for your route, hotel inspections, and on-ground logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALISTS.map((spec) => (
            <div
              key={spec.id}
              id={`specialist-card-${spec.id}`}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={spec.avatar || spec.photo}
                  alt={spec.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#071D3A] text-white">
                    {spec.experience}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif font-bold text-lg text-white">
                    {spec.name}
                  </h3>
                  <span className="text-xs text-[#F15A24] font-semibold block">
                    {spec.role}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{spec.quote || spec.bio}"
                  </p>

                  <div className="p-2 bg-slate-50 rounded-xl text-[11px] text-slate-600">
                    <strong className="text-slate-800">Specialty:</strong> {spec.regionSpecialty || spec.specialty}
                  </div>
                </div>

                <button
                  id={`chat-specialist-btn-${spec.id}`}
                  onClick={() => openSpecialistWhatsApp(spec)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#25D366] hover:text-white text-slate-800 font-semibold text-xs transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] group-hover/btn:text-white group-hover/btn:fill-white" />
                  <span>Chat with {spec.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MULTI-CHANNEL CONTACT HUB */}
      <section id="contact-hub" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left info column (5 cols) */}
          <div className="lg:col-span-5 bg-[#071D3A] text-white p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F15A24] text-white inline-block">
                  Direct Contact Desk
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
                  Let’s Start Crafting Your Journey
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm mt-2 leading-relaxed">
                  Have a specific itinerary in mind, or simply want guidance on the best season for your family? Reach out through your preferred channel.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#F15A24] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold">Specialist Hotline & WhatsApp:</strong>
                    <a 
                      href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} 
                      className="text-white hover:text-[#F15A24] transition-colors underline-offset-2 hover:underline"
                    >
                      {COMPANY_DETAILS.phone} (Direct Concierge)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#F15A24] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold">Concierge Email:</strong>
                    <a 
                      href={`mailto:${COMPANY_DETAILS.email}`} 
                      className="text-white hover:text-[#F15A24] transition-colors underline-offset-2 hover:underline"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F15A24] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold">Experience Studio:</strong>
                    <span>{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#F15A24] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold">Consultation Hours:</strong>
                    <span>{COMPANY_DETAILS.hours} (24/7 WhatsApp during active trips)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action button */}
            <button
              onClick={() => {
                const text = `Hi Info Tripp team, I'd like to consult with a destination specialist regarding my upcoming vacation.`;
                window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Launch Instant WhatsApp Chat</span>
            </button>
          </div>

          {/* Right interactive form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-2">
              Send a Detailed Trip Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill out this quick brief and your assigned destination specialist will reply with an itemized plan within 4 minutes.
            </p>

            {formSubmitted ? (
              <div className="text-center py-10 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Your inquiry for <strong>{formData.destination}</strong> has been assigned to our senior destination specialist. We will connect on WhatsApp at {formData.phone || 'your number'} shortly!
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      id="contact-phone-input"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      placeholder="e.g. vikram@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Destination
                    </label>
                    <select
                      id="contact-destination-select"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                    >
                      <option value="Kashmir">Kashmir (Srinagar, Gulmarg, Pahalgam)</option>
                      <option value="Rajasthan">Rajasthan (Jaipur, Udaipur, Jodhpur)</option>
                      <option value="Bali">Bali (Ubud, Nusa Penida, Seminyak)</option>
                      <option value="Switzerland">Switzerland (Interlaken, Zermatt, Zurich)</option>
                      <option value="Ladakh">Ladakh (Leh, Nubra, Pangong)</option>
                      <option value="Kerala">Kerala (Munnar, Alleppey, Kochi)</option>
                      <option value="Vietnam">Vietnam (Ha Long Bay, Da Nang, Hanoi)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tell us your vision (Group size, duration, dates, preferences)
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    placeholder="e.g. Traveling with spouse and 2 kids in mid-October for 7 days. Looking for scenic, relaxed pacing with nice views and private cab..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#071D3A]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    No spam. Zero bot calls. Human response guaranteed.
                  </span>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#071D3A] hover:bg-[#05152B] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
