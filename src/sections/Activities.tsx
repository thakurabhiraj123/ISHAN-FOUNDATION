import { useState } from 'react';
import { Calendar, Users, Heart, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { activitiesData } from '../data/activities';

// Separate component to handle active state hook unconditionally
function ActivityCarousel({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mt-4 space-y-3">
      {/* Main image container with modern aspect ratio and zoom on hover */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-900 aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center group/media">
        <img
          src={images[activeIndex]}
          alt={`${title} - Photo ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Navigation Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-3 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm opacity-0 group-hover/media:opacity-100 transition-all duration-200 transform -translate-x-2 group-hover/media:translate-x-0 hover:scale-105 active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4.5 w-4.5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm opacity-0 group-hover/media:opacity-100 transition-all duration-200 transform translate-x-2 group-hover/media:translate-x-0 hover:scale-105 active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight className="h-4.5 w-4.5" />
        </button>

        {/* Page indicator */}
        <div className="absolute bottom-3 right-3 bg-black/65 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-sm tracking-wider select-none">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Selector strip */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative h-11 w-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all snap-start ${
              activeIndex === idx ? 'border-emerald-500 scale-102 shadow-sm' : 'border-transparent hover:border-slate-300'
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            {activeIndex !== idx && <div className="absolute inset-0 bg-slate-900/10 hover:bg-transparent transition-colors" />}
          </button>
        ))}
      </div>
    </div>
  );
}

// Media dispatcher component
function ActivityMedia({ images, image, title }: { images?: string[]; image?: string; title: string }) {
  if (images && images.length > 0) {
    return <ActivityCarousel images={images} title={title} />;
  }

  if (image) {
    return (
      <div className="mt-3.5 rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-[#08203E]/5 flex justify-center max-h-[380px] hover:border-primary-250 transition-all duration-300">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-[380px] object-contain rounded-2xl hover:scale-[1.01] transition-transform duration-500"
        />
      </div>
    );
  }

  return null;
}


export default function Activities() {
  // Sort activities chronologically by parsed date or just display our ordered static array
  // The activitiesData is already ordered: Drawing Competition (Aug 31), Blood Donation (Oct 22), Balaka Club (Dec 30)

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest block">
            Our Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E]">
            Past Activities Timeline
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            A chronological timeline of verified community and healthcare operations conducted in Surya Nagar and the broader Jalpaiguri district.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line through timeline */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
            style={{ originY: 0 }}
            className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 via-primary-500 to-emerald-500 -translate-x-1/2"
          />

          <div className="space-y-12">
            {activitiesData.map((activity, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={activity.id}
                  className={`relative flex flex-col sm:flex-row ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } items-start sm:items-center`}
                >
                  {/* Circle Marker */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary-500 -translate-x-1/2 flex items-center justify-center z-10 shadow-md group hover:border-emerald-500 transition-colors duration-300"
                  >
                    {index === 0 && <Award className="h-3.5 w-3.5 text-primary-500 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-300" />}
                    {index === 1 && <Heart className="h-3.5 w-3.5 text-primary-500 group-hover:text-emerald-500 group-hover:scale-110 group-hover:fill-emerald-500 transition-all duration-300" />}
                    {index === 2 && <Users className="h-3.5 w-3.5 text-primary-500 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-300" />}
                  </motion.div>

                  {/* Spacer Column for alignment */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Card Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8"
                  >
                    <div className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-100/80 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 text-left space-y-4 cursor-default">
                      {/* Date & Category */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="flex items-center text-primary-500 group-hover:text-emerald-600 font-semibold space-x-1.5 transition-colors duration-300">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{activity.date}</span>
                        </span>
                        <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[9px]">
                          {activity.category}
                        </span>
                      </div>

                      {/* Title & details */}
                      <div className="space-y-2">
                        <h3 className="font-heading font-extrabold text-lg text-[#08203E] group-hover:text-primary-500 transition-colors">
                          {activity.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          {activity.details}
                        </p>
                        <ActivityMedia
                          images={activity.images}
                          image={activity.image}
                          title={activity.title}
                        />
                      </div>

                      {/* Metadata */}
                      {(activity.organizedWith || activity.stats) && (
                        <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-semibold text-[#08203E]">
                          {activity.stats && (
                            <div className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                              {activity.stats}
                            </div>
                          )}
                          {activity.organizedWith && (
                            <div className="text-slate-400 py-1">
                              With: <span className="text-slate-600 font-bold group-hover:text-primary-500 transition-colors duration-300">{activity.organizedWith}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
