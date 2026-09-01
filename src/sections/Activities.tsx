import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import susaHealthCampGroupImg from '../assets/images/susa_health_camp_group.jpg';
import susaAppreciationPlaqueImg from '../assets/images/susa_appreciation_plaque.jpg';
import susaHealthCampChequeImg from '../assets/images/susa_health_camp_cheque.jpg';
import susaTrophyPresentationImg from '../assets/images/susa_trophy_presentation.jpg';
import susaHealthCampTeamImg from '../assets/images/susa_health_camp_team_selfie.jpg';
import bloodCampWelcomeImg from '../assets/images/blood_camp_welcome.jpg';
import medicalCheckupImg from '../assets/images/medical_checkup.jpg';
import bloodDonorThumbsupImg from '../assets/images/blood_donor_thumbsup.jpg';
import bloodDonorsBedImg from '../assets/images/blood_donors_bed.jpg';
import childrenDrawingImg from '../assets/images/children_drawing_competition.jpg';
import bloodDonationImg from '../assets/images/blood_donation_camp.jpg';
import footballTeamImg from '../assets/images/football_team.jpg';
import footballPlayersImg from '../assets/images/football_players.jpg';

const activityPhotos = [
  susaHealthCampGroupImg,
  susaAppreciationPlaqueImg,
  susaHealthCampChequeImg,
  susaTrophyPresentationImg,
  susaHealthCampTeamImg,
  bloodCampWelcomeImg,
  medicalCheckupImg,
  bloodDonorThumbsupImg,
  bloodDonorsBedImg,
  childrenDrawingImg,
  bloodDonationImg,
  footballTeamImg,
  footballPlayersImg,
];

export default function Activities() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Update scroll state and active dot indicator
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const itemWidth = clientWidth / (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1);
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(index, activityPhotos.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Smooth scroll left / right
  const scrollPrev = () => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({ left: -clientWidth * 0.75, behavior: 'smooth' });
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({ left: clientWidth * 0.75, behavior: 'smooth' });
  };

  const scrollToDot = (idx: number) => {
    if (!scrollRef.current) return;
    const { clientWidth, scrollWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const targetScroll = (idx / (dotsCount - 1)) * maxScroll;
    scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  // Lightbox handlers
  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handleLightboxPrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? activityPhotos.length - 1 : prev - 1;
    });
  }, []);

  const handleLightboxNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === activityPhotos.length - 1 ? 0 : prev + 1;
    });
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseLightbox();
      } else if (e.key === 'ArrowLeft') {
        handleLightboxPrev();
      } else if (e.key === 'ArrowRight') {
        handleLightboxNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleCloseLightbox, handleLightboxPrev, handleLightboxNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  // Number of pagination dots
  const dotsCount = Math.min(8, activityPhotos.length);
  const activeDotIndex = Math.min(
    Math.round((activeIndex / (activityPhotos.length - 1)) * (dotsCount - 1)),
    dotsCount - 1
  );

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean, minimal Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#08203E] tracking-tight">
            Past Activities
          </h2>
        </div>

        {/* Carousel Container with Left/Right Arrow Buttons */}
        <div className="relative group/carousel">
          {/* Left Arrow Button */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollLeft}
            className={`absolute -left-2 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-white/95 text-slate-800 shadow-lg border border-slate-200/80 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm ${
              !canScrollLeft
                ? 'opacity-0 pointer-events-none'
                : 'opacity-90 hover:opacity-100 hover:bg-white hover:border-emerald-500/50'
            }`}
            aria-label="Previous photos"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-slate-800" />
          </button>

          {/* Horizontal Photo Slider */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 px-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {activityPhotos.map((photo, index) => (
              <div
                key={index}
                onClick={() => handleOpenLightbox(index)}
                className="flex-shrink-0 w-[78%] sm:w-[calc(50%-10px)] lg:w-[calc(25%-18px)] aspect-[4/3] snap-start cursor-pointer group"
              >
                <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm group-hover:shadow-xl group-hover:border-emerald-500/40 transition-all duration-300 relative">
                  <img
                    src={photo}
                    alt={`Activity photo ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={scrollNext}
            disabled={!canScrollRight}
            className={`absolute -right-2 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-white/95 text-slate-800 shadow-lg border border-slate-200/80 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm ${
              !canScrollRight
                ? 'opacity-0 pointer-events-none'
                : 'opacity-90 hover:opacity-100 hover:bg-white hover:border-emerald-500/50'
            }`}
            aria-label="Next photos"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-slate-800" />
          </button>
        </div>

        {/* Small Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6">
          {Array.from({ length: dotsCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                activeDotIndex === idx
                  ? 'w-6 sm:w-7 h-2 bg-emerald-500 shadow-sm shadow-emerald-500/30'
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 select-none"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handleLightboxPrev}
              className="absolute left-4 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleLightboxNext}
              className="absolute right-4 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Full-size Image Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] flex items-center justify-center"
            >
              <img
                src={activityPhotos[lightboxIndex]}
                alt={`Activity photo ${lightboxIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
