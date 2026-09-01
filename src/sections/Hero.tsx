import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import heroBanner from '../assets/images/hero_banner.jpg';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative w-full min-h-[740px] sm:min-h-[760px] lg:min-h-[780px] overflow-hidden flex items-center text-white border-b border-slate-900 bg-[#08203E]">
      
      {/* 1. Full-Size Background Image Layer (True full cover edge-to-edge) */}
      <div
        className={`absolute inset-0 w-full h-full pointer-events-none select-none ${
          shouldReduceMotion ? '' : 'animate-hero-zoom'
        }`}
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 2. Left-Side Dark Navy Gradient Overlay (Above image, below text) */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, rgba(3, 25, 50, 0.95) 0%, rgba(3, 25, 50, 0.75) 28%, rgba(3, 25, 50, 0.25) 55%, rgba(3, 25, 50, 0) 75%)',
        }}
      />

      {/* Mobile / Tablet Gradient Overlay for complete text readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] lg:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(3, 25, 50, 0.85) 0%, rgba(3, 25, 50, 0.75) 50%, rgba(3, 25, 50, 0.65) 100%)',
        }}
      />

      {/* 3. Hero Text and Interactive Content Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left-Aligned Hero Content Box */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Location Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center space-x-1.5 bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full text-emerald-400 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
                <HeartPulse className="h-3.5 w-3.5 text-emerald-400" />
                <span>JALPAIGURI, WEST BENGAL</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight tracking-tight drop-shadow-sm"
            >
              Building a Healthier <br />
              <span className="text-emerald-400">Rural India</span>
            </motion.h1>

            {/* Description & Buttons Group shifted up together */}
            <div className="-mt-8 sm:-mt-10 space-y-5">
              {/* Short Mission Statement */}
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow-sm"
              >
                Creating healthier, stronger and more sustainable communities through healthcare, women empowerment, animal welfare and responsible tourism.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 pt-1"
              >
                <Link
                  to="/programs"
                  className="bg-white/10 hover:bg-primary-500 text-white font-bold border border-white/30 hover:border-primary-500 backdrop-blur-sm px-7 py-3.5 rounded-full text-sm shadow-sm hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Explore Our Programs</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/volunteer"
                  className="bg-white/15 hover:bg-white/25 text-white border border-white/25 hover:border-white/40 px-7 py-3.5 rounded-full text-sm font-bold shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center backdrop-blur-xs"
                >
                  Get Involved
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Spacer Column to allow vivid presentation of background photo */}
          <div className="hidden lg:block lg:col-span-5 h-[340px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
}
