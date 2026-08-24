import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData, galleryCategories, type GalleryItem } from '../data/gallery';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryData.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const handleOpenLightbox = (id: string) => {
    const idx = filteredItems.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    } else if (lightboxIndex === 0) {
      setLightboxIndex(filteredItems.length - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    } else if (lightboxIndex === filteredItems.length - 1) {
      setLightboxIndex(0);
    }
  };

  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="pb-20 space-y-12">
      {/* Header Banner */}
      <div className="bg-[#08203E] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block">
            Media Archive
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Activity Gallery
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            A static archive of our campaigns, children's competitions, and volunteer sessions. Gradient panels are used as clear placeholders until official photography releases are finalized.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {galleryCategories.map(cat => (
            <motion.button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat.value
                  ? 'bg-emerald-500 text-[#08203E] shadow-md shadow-emerald-500/10'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                onClick={() => handleOpenLightbox(item.id)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100/80 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 text-left flex flex-col justify-between"
              >
                {/* Image container */}
                <div className="h-48 relative overflow-hidden text-white flex flex-col justify-between p-6">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.placeholderBg}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-[1]" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px] z-[2]">
                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/20">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <span className="relative z-10 text-[9px] bg-white/25 border border-white/25 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider self-start backdrop-blur-sm">
                    {item.category.replace('-', ' ')}
                  </span>
                  
                  <div className="relative z-10 text-[10px] text-slate-200 font-semibold flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Card description */}
                <div className="p-5 space-y-2">
                  <h3 className="font-heading font-extrabold text-base text-[#08203E] group-hover:text-primary-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between py-8 px-4"
          >
            {/* Top Bar */}
            <div className="max-w-6xl mx-auto w-full flex items-center justify-between text-white">
              <div className="flex items-center space-x-3 text-xs font-semibold text-slate-400">
                <Tag className="h-4 w-4 text-emerald-400" />
                <span className="uppercase tracking-wider">
                  {currentItem.category.replace('-', ' ')}
                </span>
              </div>
              <button
                onClick={handleCloseLightbox}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Center Slider Area */}
            <div className="max-w-4xl mx-auto w-full flex items-center justify-between my-auto py-8 relative">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-20 p-2 md:p-3 bg-black/40 border border-white/10 hover:bg-white/20 rounded-full transition-colors text-white backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              {/* Main Visual Panel */}
              <div className="w-full max-w-2xl px-12 md:px-16 flex justify-center">
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-md h-72 sm:h-96 rounded-3xl p-8 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden border border-white/10"
                >
                  {currentItem.image ? (
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="absolute inset-0 w-full h-full object-contain bg-[#061424]"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-tr ${currentItem.placeholderBg}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-[1]" />
                  
                  <div className="absolute top-4 right-4 bg-white/20 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider z-10 backdrop-blur-sm border border-white/10">
                    {currentItem.image ? 'Actual Photo' : 'Visual Placeholder'}
                  </div>
                  <div className="text-center my-auto space-y-4 z-10 relative">
                    {!currentItem.image && (
                      <span className="inline-flex p-4 bg-white/10 border border-white/10 rounded-full backdrop-blur-sm">
                        <Eye className="h-10 w-10 text-white animate-pulse" />
                      </span>
                    )}
                    <div>
                      <p className="font-heading font-extrabold text-2xl drop-shadow-md">{currentItem.title}</p>
                      <p className="text-emerald-300 text-xs mt-1 font-semibold tracking-wider uppercase drop-shadow-sm">
                        {currentItem.category.replace('-', ' ')}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-200 font-semibold border-t border-white/10 pt-4 z-10 relative">
                    <span>ISHAAN FOUNDATION</span>
                    <span>{currentItem.date}</span>
                  </div>
                </motion.div>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-20 p-2 md:p-3 bg-black/40 border border-white/10 hover:bg-white/20 rounded-full transition-colors text-white backdrop-blur-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            {/* Bottom Metadata Info */}
            <div className="max-w-3xl mx-auto w-full text-center text-white space-y-2 px-6">
              <h3 className="font-heading font-bold text-lg">{currentItem.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xl mx-auto">
                {currentItem.description}
              </p>
              <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider pt-2">
                Slide {lightboxIndex !== null ? lightboxIndex + 1 : 0} of {filteredItems.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
