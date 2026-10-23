import React from 'react';
import { 
  Plane, 
  Train, 
  Bus, 
  Building2, 
  Luggage, 
  Landmark, 
  FileCheck2, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/mockData';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanModal: () => void;
}

interface ServiceCardItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  emoji: string;
  description: string;
  buttonLabel: string;
  whatsappMessage: string;
  badge?: string;
  hasViewPackagesOption?: boolean;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigate,
  onOpenPlanModal
}) => {
  const services: ServiceCardItem[] = [
    {
      id: 'flight-booking',
      title: 'Flight Booking',
      icon: <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0671D]" />,
      emoji: '✈️',
      description: 'Domestic and international flights at the best available fares.',
      buttonLabel: 'Enquire Now',
      whatsappMessage: 'Hello Info Tripp! I would like to enquire about Flight Booking services.',
      badge: 'Best Fare Guarantee'
    },
    {
      id: 'train-booking',
      title: 'Train Booking',
      icon: <Train className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0671D]" />,
      emoji: '🚆',
      description: 'IRCTC tickets for you and your family, booked hassle-free.',
      buttonLabel: 'Enquire Now',
      whatsappMessage: 'Hello Info Tripp! I would like to enquire about Train Booking services.',
      badge: 'IRCTC Authorized'
    },
    {
      id: 'bus-booking',
      title: 'Bus Booking',
      icon: <Bus className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0671D]" />,
      emoji: '🚌',
      description: 'Comfortable bus tickets to popular routes across India.',
      buttonLabel: 'Enquire Now',
      whatsappMessage: 'Hello Info Tripp! I would like to enquire about Bus Booking services.',
      badge: 'AC Sleeper & Volvo'
    },
    {
      id: 'hotel-booking',
      title: 'Hotel Booking',
      icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0671D]" />,
      emoji: '🏨',
      description: 'Stays for every budget, from budget rooms to premium hotels.',
      buttonLabel: 'Enquire Now',
      whatsappMessage: 'Hello Info Tripp! I would like to enquire about Hotel Booking services.',
      badge: '100% Vetted Stays'
    },
    {
      id: 'tour-packages',
      title: 'Tour Packages',
      icon: <Luggage className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0671D]" />,
      emoji: '🧳',
      description: 'Ready-made and custom trips, including long weekends, domestic and international.',
      buttonLabel: 'View Packages',
      whatsappMessage: 'Hello Info Tripp! I would like to enquire about Tour Packages.',
      badge: 'Bespoke & Ready-made',
      hasViewPackagesOption: true
    },
    {
      id: 'pilgrimage-packages',
      title: 'Pilgrimage Packages',
      icon: <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0671D]" />,
      emoji: '🛕',
      description: 'Ayodhya, Shirdi, Varanasi, Char Dham and more, with stay and travel arranged.',
      buttonLabel: 'View Packages',
      whatsappMessage: 'Hello Info Tripp! I would like to enquire about Pilgrimage Packages.',
      badge: 'Senior Citizen Friendly',
      hasViewPackagesOption: true
    },
    {
      id: 'visa-utility-services',
      title: 'Visa & Other Utility Services',
      icon: <FileCheck2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0671D]" />,
      emoji: '🛂',
      description: 'Visa help, travel documents and other travel-related support.',
      buttonLabel: 'Get Help',
      whatsappMessage: 'Hello Info Tripp! I would like to get help with Visa & Other Utility Services.',
      badge: 'Express Guidance'
    }
  ];

  const handleOpenWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encoded}`, '_blank');
  };

  const handleGeneralWhatsApp = () => {
    const msg = `Hello Info Tripp! Everything for your trip, in one place. I'd like to get support with planning my upcoming travel.`;
    handleOpenWhatsApp(msg);
  };

  return (
    <div id="services-page" className="min-h-screen bg-[#F5F7FA] text-slate-800">
      {/* 1. HERO HEADER SECTION */}
      <section className="bg-[#031E3D] text-white pt-14 pb-16 sm:pb-20 relative overflow-hidden">
        {/* Subtle decorative background shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F0671D] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#F5F7FA] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F0671D]" />
            <span>End-to-End Travel Concierge</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight drop-shadow-xs">
            Our Services
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            Everything for your trip, in one place. Tell us where you want to go, and we'll plan more for you.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F0671D]" /> 4-Minute Human Response
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#F0671D]" /> Zero Hidden Charges
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#F0671D]" /> Direct WhatsApp Support
            </span>
          </div>
        </div>
      </section>

      {/* 2. SERVICES CARD GRID */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 pb-16 relative z-20">
        {/* Layout: 2 cards per row on mobile, 3 to 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-[#031E3D]/30"
            >
              <div>
                {/* Top icon and badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F5F7FA] border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <span className="hidden sm:inline-block text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-[#031E3D]/5 text-[#031E3D] text-right truncate max-w-[110px]">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-sm sm:text-lg text-[#031E3D] leading-snug group-hover:text-[#F0671D] transition-colors">
                  <span className="mr-1.5 text-base sm:text-lg">{service.emoji}</span>
                  {service.title}
                </h3>

                {/* 1-line Description */}
                <p className="mt-2 text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {service.description}
                </p>
              </div>

              {/* Action Button Section */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  id={`service-btn-${service.id}`}
                  onClick={() => handleOpenWhatsApp(service.whatsappMessage)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#F0671D] hover:bg-[#d85514] active:scale-98 shadow-2xs hover:shadow-sm transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{service.buttonLabel}</span>
                </button>

                {service.hasViewPackagesOption && (
                  <button
                    onClick={() => {
                      onNavigate('packages');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-center text-[10px] sm:text-xs text-[#031E3D] hover:text-[#F0671D] font-semibold py-1 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Browse packages catalog</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* 8th Card: Custom Concierge Booking & Itinerary Crafting */}
          <div
            id="service-card-custom-itinerary"
            className="bg-gradient-to-br from-[#031E3D] to-[#072d5b] text-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0671D]" />
              </div>

              <h3 className="font-serif font-bold text-sm sm:text-lg text-white leading-snug">
                Need a Custom Plan?
              </h3>

              <p className="mt-2 text-[11px] sm:text-xs text-slate-200 leading-relaxed">
                Combine flights, hotels, trains, and curated sightseeing into one seamless itinerary.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/15">
              <button
                id="service-btn-custom-plan"
                onClick={onOpenPlanModal}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#031E3D] bg-white hover:bg-[#F5F7FA] active:scale-98 shadow-sm transition-all"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROMINENT BOTTOM "CHAT ON WHATSAPP" SECTION */}
      <section className="bg-white border-t border-slate-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#031E3D] text-[#F0671D] flex items-center justify-center mx-auto mb-4 shadow-sm">
            <MessageCircle className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#031E3D]">
            Have a Specific Query or Need Immediate Booking?
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our human travel specialists are live on WhatsApp right now. No chatbots, no long phone trees.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              id="services-bottom-whatsapp-btn"
              onClick={handleGeneralWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base text-white bg-[#031E3D] hover:bg-[#062952] active:scale-98 shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 text-[#F0671D]" />
              <span>Chat on WhatsApp</span>
            </button>

            <a
              id="services-bottom-call-link"
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#031E3D] bg-[#F5F7FA] hover:bg-slate-200 border border-slate-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F0671D]" />
              <span>Call Us: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            Support Email:{' '}
            <a 
              href={`mailto:${COMPANY_DETAILS.email}`} 
              className="text-[#031E3D] hover:text-[#F0671D] font-semibold underline underline-offset-2"
            >
              {COMPANY_DETAILS.email}
            </a>
            {' '}• Office in Techzone 4, Greater Noida West
          </div>
        </div>
      </section>
    </div>
  );
};
