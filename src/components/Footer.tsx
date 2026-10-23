import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Send, 
  Heart,
  Globe2,
  Lock
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS, DESTINATIONS } from '../data/mockData';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPlanModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#071D3A] text-slate-300 pt-16 pb-10 border-t border-[#0A2640]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          
          {/* Brand Col (2 spans on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="py-1">
              <Logo variant="light" className="h-10 sm:h-12 w-auto" showTagline />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              We rescue travelers from endless research tabs and opaque booking algorithms. Discover vetted itineraries backed by real regional specialists, transparent pricing, and 24/7 WhatsApp care.
            </p>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#F15A24]" />
                <span>100% Vetted Stays</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">
                <Award className="w-4 h-4 text-[#F15A24]" />
                <span>IATA &amp; WTTC Partner</span>
              </div>
            </div>

            {/* Social / Direct reachout */}
            <div className="pt-1 text-xs text-slate-400">
              WhatsApp Concierge: <span className="text-white font-medium">+91 83188 81779</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Explore Journeys
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white font-medium text-slate-200 transition-colors flex items-center gap-1.5"
                >
                  <span>Our Services</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-[#F0671D] text-white font-bold uppercase">All In One</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors"
                >
                  Regional Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="hover:text-white transition-colors"
                >
                  Curated Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Traveler Chronicles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors"
                >
                  Verified Reviews &amp; Trust
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPlanModal}
                  className="text-[#F15A24] hover:text-[#F15A24]/80 font-bold transition-colors"
                >
                  Bespoke Trip Inquiry →
                </button>
              </li>
            </ul>
          </div>

          {/* Signature Destinations */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Top Destinations
            </h4>
            <ul className="space-y-2 text-sm">
              {DESTINATIONS.slice(0, 5).map((dest) => (
                <li key={dest.id}>
                  <button
                    onClick={() => onNavigate('destinations')}
                    className="hover:text-white transition-colors text-left flex items-center justify-between w-full"
                  >
                    <span>{dest.name}</span>
                    <span className="text-[11px] text-slate-400">{dest.recommendedDuration}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address & Direct Contacts */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Concierge HQ
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F15A24] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {COMPANY_DETAILS.address}
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F15A24] shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phone} / {COMPANY_DETAILS.secondaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F15A24] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-700/40">
                Hours: {COMPANY_DETAILS.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter & Sub-footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h5 className="text-white font-serif font-bold text-base">
              Join Our Private Wanderlust Journal
            </h5>
            <p className="text-xs text-slate-400 mt-0.5">
              Receive handpicked seasonal flight alerts, secret haveli stays, and honest weather windows. No spam.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 px-4 py-2 bg-[#F15A24]/20 text-[#F15A24] border border-[#F15A24]/40 rounded-xl text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>You are subscribed! Welcome to the Info Tripp family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F15A24] w-64"
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="px-4 py-2.5 bg-[#F15A24] hover:bg-[#D84815] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Info Tripp Pvt. Ltd. All rights reserved. Travel. Simplified.
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
            <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
              Our Services
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('reviews')} className="hover:text-white transition-colors">
              Trust & Security
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
              Our Mission
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Contact Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
