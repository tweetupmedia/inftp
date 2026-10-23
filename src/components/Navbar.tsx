import React, { useState } from 'react';
import { 
  MessageCircle, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/mockData';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPlanModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenPlanModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'packages', label: 'Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Info Tripp! I'd like to consult with a destination specialist for my upcoming trip.`;
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Main Global Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus:outline-hidden py-1"
            aria-label="InfoTripp Home"
          >
            <Logo className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-102" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#071D3A] font-bold bg-[#071D3A]/5 shadow-2xs border-b-2 border-[#F15A24]'
                      : 'text-slate-600 hover:text-[#071D3A] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-plan-trip-cta-btn"
              onClick={onOpenPlanModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-[#F15A24] hover:bg-[#D84815] shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-plan-trip-cta-btn"
              onClick={onOpenPlanModal}
              className="px-3 py-1.5 rounded-lg bg-[#F15A24] text-white text-xs font-bold"
            >
              Plan Trip
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#071D3A] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fadeIn"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`mobile-nav-link-${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                currentPage === link.id
                  ? 'bg-[#071D3A] text-white font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-drawer-plan-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#F15A24] text-white font-bold rounded-xl text-sm shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Plan Your Trip</span>
            </button>

            <button
              id="mobile-drawer-whatsapp-btn"
              onClick={handleWhatsAppDirect}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#071D3A] text-white font-medium rounded-xl text-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#F15A24]" />
              <span>Chat Directly on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
