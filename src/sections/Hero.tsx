import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Heart, Users, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBanner from '../assets/images/hero_banner.jpg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-0 lg:aspect-[16/9] flex items-center text-white border-b border-slate-900">
      {/* Background Wrapper: Full banner image in high clarity */}
      <div className="absolute inset-0 bg-[#08203E] overflow-hidden">
        <motion.img
          src={heroBanner}
          alt="Ishaan Foundation Core Banner"
          initial={{ scale: 1.0, opacity: 1.0 }}
          animate={{
            scale: [1.0, 1.05, 1.0],
            x: [0, -10, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full object-cover object-center pointer-events-none select-none filter brightness-105"
        />
        {/* Mobile Layout Overlay: overlay to keep text completely readable on small screens */}
        <div className="absolute inset-0 bg-[#08203E]/55 lg:hidden z-[1]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/25 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm"
            >
              <HeartPulse className="h-4 w-4 text-emerald-400 animate-heartbeat" />
              <span>Jalpaiguri, West Bengal</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-[1.1] tracking-tight"
            >
              Building a <span className="text-emerald-450">Healthier</span> <br />
              <span className="text-emerald-400">Rural India</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-medium"
            >
              Affordable, accessible and quality healthcare for underserved communities. We bring healthcare awareness, veterinary aid, women's self-reliance, and sustainable travel livelihoods directly to tea gardens and rural areas.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                to="/services"
                className="bg-transparent text-white border border-white/30 hover:bg-[#0b63e6] hover:border-[#0b63e6] px-7 py-3.5 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/volunteer"
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20 px-7 py-3.5 rounded-full font-bold shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Get Involved
              </Link>
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 max-w-xl"
            >
              <div className="flex items-center space-x-2 group cursor-default">
                <HeartPulse className="h-5 w-5 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-300">Healthcare</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-default">
                <Heart className="h-5 w-5 text-emerald-400 shrink-0 group-hover:scale-110 group-hover:fill-emerald-400 transition-all" />
                <span className="text-xs font-semibold text-slate-300">Animal Welfare</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-default">
                <Users className="h-5 w-5 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-300">Women Empowerment</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-default">
                <Compass className="h-5 w-5 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-300">Tour & Travels</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Empty spacer to let background image show clearly on desktop */}
          <div className="hidden lg:block lg:col-span-5 h-[360px]" />

        </div>
      </div>
    </section>
  );
}
