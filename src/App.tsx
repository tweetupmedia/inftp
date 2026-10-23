import React, { useState, useEffect } from 'react';
import { PageId, PackageItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PlanTripModal } from './components/PlanTripModal';
import { DayPlanModal } from './components/DayPlanModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { DestinationsView } from './views/DestinationsView';
import { PackagesView } from './views/PackagesView';
import { GalleryView } from './views/GalleryView';
import { ReviewsView } from './views/ReviewsView';
import { AboutView } from './views/AboutView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedPlanDestination, setSelectedPlanDestination] = useState<string | undefined>();
  const [selectedPlanPackage, setSelectedPlanPackage] = useState<string | undefined>();

  const [selectedPackageForDayPlan, setSelectedPackageForDayPlan] = useState<PackageItem | null>(null);

  // Scroll to top and sync page title + meta description on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const pageMetaMap: Record<PageId, { title: string; desc: string }> = {
      home: {
        title: 'Info Tripp — Travel. Simplified.',
        desc: 'Book flights, trains, buses, hotels, tour packages and pilgrimage trips with Info Tripp. Visa help and trip planning from Noida, with support on WhatsApp.'
      },
      services: {
        title: 'Our Services | Info Tripp',
        desc: "Everything for your trip, in one place. Tell us where you want to go, and we'll plan more for you. Flight, train, bus, hotel bookings, tour packages, pilgrimage trips, and visa services."
      },
      destinations: {
        title: 'Curated Destinations | Info Tripp',
        desc: 'Explore hand-picked, vetted destinations across India and international gateways with local specialists.'
      },
      packages: {
        title: 'Tour & Pilgrimage Packages | Info Tripp',
        desc: 'Browse bespoke, transparently priced travel itineraries, long weekends, and pilgrimage journeys.'
      },
      gallery: {
        title: 'Traveler Chronicles | Info Tripp',
        desc: 'Real guest stories, candid trip photographs, and verified reviews from travelers who trusted Info Tripp.'
      },
      reviews: {
        title: 'Verified Reviews & Trust | Info Tripp',
        desc: 'Discover verified traveler ratings, Google reviews, and real experiences with our 24/7 concierge.'
      },
      about: {
        title: 'About Us | Info Tripp',
        desc: 'Meet our dedicated travel curators, our philosophy of transparent pricing, and human-led trip planning.'
      },
      contact: {
        title: 'Contact Concierge Desk | Info Tripp',
        desc: 'Connect directly with our destination specialists via WhatsApp or call +91 83188 81779 in Noida.'
      }
    };

    const currentMeta = pageMetaMap[currentPage] || pageMetaMap.home;
    document.title = currentMeta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentMeta.desc);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentMeta.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', currentMeta.desc);
    }
  }, [currentPage]);

  const handleOpenPlanModal = (destination?: string, packageTitle?: string) => {
    setSelectedPlanDestination(destination);
    setSelectedPlanPackage(packageTitle);
    setIsPlanModalOpen(true);
  };

  const handleClosePlanModal = () => {
    setIsPlanModalOpen(false);
    setSelectedPlanDestination(undefined);
    setSelectedPlanPackage(undefined);
  };

  const handleSelectPackageForDayPlan = (pkg: PackageItem) => {
    setSelectedPackageForDayPlan(pkg);
  };

  const handleCloseDayPlanModal = () => {
    setSelectedPackageForDayPlan(null);
  };

  const handleInquireFromDayPlan = (pkg: PackageItem) => {
    setSelectedPackageForDayPlan(null);
    handleOpenPlanModal(pkg.destination, pkg.title);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-slate-800 font-sans selection:bg-[#F15A24]/20 selection:text-[#071D3A]">
      {/* 1. Global Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenPlanModal={() => handleOpenPlanModal()}
      />

      {/* 2. Main Page Content View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={(page) => setCurrentPage(page)}
            onSelectPackage={handleSelectPackageForDayPlan}
            onOpenPlanModal={handleOpenPlanModal}
          />
        )}

        {currentPage === 'services' && (
          <ServicesView
            onNavigate={(page) => setCurrentPage(page)}
            onOpenPlanModal={() => handleOpenPlanModal()}
          />
        )}

        {currentPage === 'destinations' && (
          <DestinationsView
            onNavigate={(page) => setCurrentPage(page)}
            onOpenPlanModal={handleOpenPlanModal}
          />
        )}

        {currentPage === 'packages' && (
          <PackagesView
            onNavigate={(page) => setCurrentPage(page)}
            onSelectPackage={handleSelectPackageForDayPlan}
            onOpenPlanModal={handleOpenPlanModal}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryView
            onNavigate={(page) => setCurrentPage(page)}
            onSelectPackage={handleSelectPackageForDayPlan}
            onOpenPlanModal={handleOpenPlanModal}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsView
            onNavigate={(page) => setCurrentPage(page)}
            onOpenPlanModal={() => handleOpenPlanModal()}
          />
        )}

        {(currentPage === 'about' || currentPage === 'contact') && (
          <AboutView
            currentPage={currentPage}
            onNavigate={(page) => setCurrentPage(page)}
            onOpenPlanModal={handleOpenPlanModal}
          />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer
        onNavigate={(page) => setCurrentPage(page)}
        onOpenPlanModal={() => handleOpenPlanModal()}
      />

      {/* 4. Sticky Floating WhatsApp Concierge */}
      <FloatingWhatsApp />

      {/* 5. Interactive 3-Step Plan Trip Inquiry Modal */}
      <PlanTripModal
        isOpen={isPlanModalOpen}
        onClose={handleClosePlanModal}
        preselectedDestination={selectedPlanDestination}
        preselectedPackageTitle={selectedPlanPackage}
      />

      {/* 6. Day-by-Day Itinerary Plan Modal */}
      <DayPlanModal
        packageItem={selectedPackageForDayPlan}
        onClose={handleCloseDayPlanModal}
        onPersonalise={handleInquireFromDayPlan}
      />
    </div>
  );
}
