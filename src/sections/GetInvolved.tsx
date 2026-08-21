import { Link } from 'react-router-dom';
import { HeartHandshake, Shield, Stethoscope, Ambulance } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GetInvolved() {
  const supportAreas = [
    { title: 'Medical Camps', icon: Stethoscope, color: 'text-blue-500 bg-blue-50' },
    { title: 'Community Health Programs', icon: Shield, color: 'text-emerald-500 bg-emerald-50' },
    { title: 'Healthcare Equipment', icon: HeartHandshake, color: 'text-purple-500 bg-purple-50' },
    { title: 'Emergency Support', icon: Ambulance, color: 'text-rose-500 bg-rose-50' },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-br from-[#08203E] to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-white/5"
        >
          {/* Backdrops */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />

          <div className="relative z-10 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block animate-pulse">
                Support Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white max-w-2xl mx-auto leading-tight">
                Help Us Strengthen Healthcare Access
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed font-medium">
                Join our efforts to improve health awareness, screen patients, and coordinate vital clinic facilities for communities in Jalpaiguri, North Bengal.
              </p>
            </div>

            {/* Support Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              {supportAreas.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between space-y-4 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 cursor-default"
                  >
                    <div className="p-2.5 rounded-xl bg-white/10 self-start text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-200 group-hover:text-white transition-colors duration-300 leading-snug">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/volunteer"
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-3.5 rounded-full shadow-lg shadow-emerald-500/15 hover:shadow-emerald-600/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Become a Volunteer
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-3.5 rounded-full hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Contact Us to Support
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
