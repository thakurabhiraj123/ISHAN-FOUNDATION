import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const focusAreas = [
    'Rural Healthcare Services',
    'Street Animal Welfare & Rescue',
    'Women Skill Centers & Vocational Aid',
    'Eco-Tourism & Sustainable Travels',
    'Emergency Health & Veterinary Camps',
    'Community Livelihood Workshops',
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Column - Placeholder Visual Panel */}
          <div className="lg:col-span-5 order-last lg:order-first flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] animate-float"
            >
              {/* Main Decorative frame */}
              <div className="absolute inset-0 bg-[#08203E]/5 rounded-3xl translate-x-3 translate-y-3" />
              
              <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl shadow-xl p-8 border border-slate-800 overflow-hidden group cursor-default">
                {/* Background lighting */}
                <div className="absolute -top-16 -left-16 w-48 h-48 bg-primary-500/25 rounded-full blur-2xl animate-pulse-slow" />
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '3s' }} />

                <div className="space-y-6 relative z-10">
                  <div className="inline-flex p-3 bg-white/10 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                    <HeartPulse className="h-8 w-8 text-emerald-400 animate-heartbeat" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-white">Our Commitments</h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed font-semibold">
                      We operate within Jalpaiguri, West Bengal, delivering health screening support, stray animal rescue, women's skill training, and eco-tourism travel promotions.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 space-y-4">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-slate-400">Headquarters</span>
                      <span className="font-bold text-slate-200 text-right">Jalpaiguri, WB</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-slate-400">Director</span>
                      <span className="font-bold text-slate-200">Arijit Sikdar</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-slate-400">Core Mission</span>
                      <span className="font-bold text-emerald-400">Community Welfare</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest block">
                About Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E]">
                Community Welfare With a Mission at Heart
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-600 leading-relaxed text-sm font-medium"
            >
              ISHAAN FOUNDATION is a non-governmental organization based in Surya Nagar, Jalpaiguri, West Bengal. We are committed to improving local lives and rural development. By bridging geographical and economic gaps, we drive progress across rural healthcare, street animal protection, women's skill empowerment, and sustainable eco-tourism travels.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 leading-relaxed text-sm font-medium"
            >
              Our core vision is centered around raising awareness and empowering local communities. We believe in providing reliable healthcare, rescuing strays, fostering self-reliance for women, and creating hospitality jobs for local youth.
            </motion.p>

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2"
            >
              {focusAreas.map((area, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center space-x-2.5 group cursor-default"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform duration-250" />
                  <span className="text-xs font-bold text-[#08203E] group-hover:text-emerald-700 transition-colors">{area}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <Link
                to="/about"
                className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-full shadow-md shadow-primary-500/15 hover:shadow-primary-600/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
