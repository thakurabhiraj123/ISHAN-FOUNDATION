import React, { useState, useEffect, useCallback } from 'react';
import { Award, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

import awardLionsImg from '../assets/images/award_lions_blood_centre.jpg';
import awardSusaImg from '../assets/images/award_susa_certificate.jpg';
import awardSportsLoversImg from '../assets/images/award_sports_lovers_2026.jpg';

interface AwardItem {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  image: string;
}

const awardsData: AwardItem[] = [
  {
    id: 'award-lions-blood-centre',
    title: 'Blood Donation Camp Appreciation',
    subtitle: 'Recognition for organizing blood donation camp with New Boys Club',
    organization: 'Siliguri Terai Lions Blood Centre',
    image: awardLionsImg,
  },
  {
    id: 'award-susa-validation',
    title: 'Validation of Support',
    subtitle: 'Honorary certificate for active participation in Annual Program',
    organization: "Siliguri Umpires' & Scorers' Association",
    image: awardSusaImg,
  },
  {
    id: 'award-sports-lovers-2026',
    title: 'Token of Appreciation',
    subtitle: '32nd Foundation Day Voluntary Blood Donation Camp 2026',
    organization: "Sports Lovers' Unit",
    image: awardSportsLoversImg,
  },
];

export default function Awards() {
  const shouldReduceMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
      return prev === 0 ? awardsData.length - 1 : prev - 1;
    });
  }, []);

  const handleLightboxNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === awardsData.length - 1 ? 0 : prev + 1;
    });
  }, []);

  // Keyboard controls for Lightbox
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

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="h-4 w-4" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E] uppercase tracking-tight">
            AWARDS & RECOGNITION
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium tracking-wide">
            "Recognizing our journey of impact and service."
          </p>
        </motion.div>

        {/* 3 Equal-Width Award Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => handleOpenLightbox(index)}
              className="group bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-emerald-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer text-left"
            >
              {/* Image Container with light background and contain fit */}
              <div className="w-full h-72 sm:h-80 rounded-2xl bg-white border border-slate-100 p-4 flex items-center justify-center overflow-hidden relative shadow-inner">
                <img
                  src={award.image}
                  alt={award.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                  loading="lazy"
                />
                
                {/* Subtle zoom hint overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md p-2.5 rounded-full text-slate-800 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="h-5 w-5 text-emerald-600" />
                  </div>
                </div>
              </div>

              {/* Minimal Short Caption */}
              <div className="mt-5 space-y-1.5">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  {award.organization}
                </span>
                <h3 className="font-heading font-extrabold text-base text-[#08203E] group-hover:text-primary-500 transition-colors">
                  {award.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {award.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
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
              aria-label="Previous award"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleLightboxNext}
              className="absolute right-4 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Next award"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Full-size Image Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: shouldReduceMotion ? 1 : 0.95, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center p-2"
            >
              <img
                src={awardsData[lightboxIndex].image}
                alt={awardsData[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl bg-white/5 border border-white/10"
              />
              <div className="mt-4 text-center text-white space-y-1 max-w-xl">
                <p className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  {awardsData[lightboxIndex].title}
                </p>
                <p className="text-xs text-slate-300 font-medium">
                  {awardsData[lightboxIndex].organization} • {awardsData[lightboxIndex].subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
