import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Heart, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-[#F1F5F9] to-emerald-50/50 py-16 lg:py-24 border-b border-slate-100">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-primary-100/30 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-80 w-80 rounded-full bg-emerald-100/20 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full text-emerald-700 text-xs font-semibold uppercase tracking-wider"
            >
              <HeartPulse className="h-4 w-4 text-emerald-600 animate-heartbeat" />
              <span>Jalpaiguri, West Bengal</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#08203E] leading-[1.1] tracking-tight"
            >
              Building a <span className="text-primary-500 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Healthier</span> <br />
              <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Rural India</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              Affordable, accessible and quality healthcare for underserved communities. We bring healthcare awareness, preventive clinics, and medical support directly to tea gardens and rural areas.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                to="/services"
                className="bg-primary-500 text-white hover:bg-primary-600 px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-primary-500/20 hover:shadow-primary-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/volunteer"
                className="bg-white text-slate-800 border border-slate-200 hover:border-primary-500 hover:text-primary-500 px-7 py-3.5 rounded-full font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Get Involved
              </Link>
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 max-w-lg"
            >
              <div className="flex items-center space-x-2 group cursor-default">
                <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-700">Medical Camps</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-default">
                <Heart className="h-5 w-5 text-emerald-500 shrink-0 group-hover:scale-110 group-hover:fill-emerald-500 transition-all" />
                <span className="text-xs font-semibold text-slate-700">Blood Drives</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-default">
                <Shield className="h-5 w-5 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-700">Health Awareness</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Illustration / Graphical Element */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[400px] h-[380px] lg:max-w-[440px] lg:h-[420px] animate-float"
            >
              {/* Main premium placeholder visual panel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-emerald-600 rounded-3xl shadow-2xl p-8 flex flex-col justify-between overflow-hidden text-white border border-white/10">
                {/* Decorative glowing gradient ring */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse-slow" />
                <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-emerald-300/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '3s' }} />

                {/* Top header decoration */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm tracking-wider uppercase font-semibold">
                    NGO Medical Drive
                  </span>
                </div>

                {/* Center visual: Premium Medical Camp Emblem */}
                <div className="flex flex-col items-center justify-center my-auto py-6 z-10 space-y-4">
                  <div className="bg-white/10 p-5 rounded-full border border-white/20 shadow-inner backdrop-blur-md relative group hover:scale-105 transition-transform duration-300">
                    <HeartPulse className="h-16 w-16 text-white animate-heartbeat" />
                    <div className="absolute bottom-0 right-0 bg-emerald-500 p-1.5 rounded-full border border-white">
                      <Heart className="h-4 w-4 fill-white text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-extrabold text-2xl tracking-tight">ISHAAN FOUNDATION</p>
                    <p className="text-emerald-200 text-xs mt-1 font-medium tracking-wide">Surya Nagar, Jalpaiguri, WB</p>
                  </div>
                </div>

                {/* Bottom stats representation */}
                <div className="grid grid-cols-2 gap-4 bg-black/15 p-4 rounded-2xl backdrop-blur-sm border border-white/10 text-center z-10 hover:bg-black/25 transition-colors">
                  <div>
                    <span className="block text-2xl font-black text-white">50+</span>
                    <span className="text-[10px] text-slate-200 font-semibold uppercase tracking-wider">Drawing Children</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-emerald-300">15 Units</span>
                    <span className="text-[10px] text-slate-200 font-semibold uppercase tracking-wider">Blood Collected</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
