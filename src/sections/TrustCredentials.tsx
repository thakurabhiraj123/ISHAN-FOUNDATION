import { ShieldCheck, Calendar, FileText } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function TrustCredentials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-12 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 text-emerald-700 bg-emerald-100/70 border border-emerald-200/60 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Official Registrations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E] uppercase tracking-tight">
            TRUST & CREDENTIALS
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium tracking-wide">
            "Transparency, credibility and commitment to our community."
          </p>
        </motion.div>

        {/* Central Credential Card */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {/* Card Header: NGO DARPAN */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4 text-center sm:text-left">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 border border-emerald-100">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-[#08203E] tracking-tight">
                  NGO DARPAN
                </h3>
                <span className="text-xs font-semibold text-emerald-600 tracking-wide">
                  Government of India • NITI Aayog Portal
                </span>
              </div>
            </div>
            <div className="inline-flex items-center space-x-1.5 bg-slate-100 px-3 py-1 rounded-full text-slate-700 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Verified Entity</span>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-6">
            {/* DARPAN ID Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100/90 flex items-start space-x-3.5">
              <div className="p-2.5 bg-white rounded-xl text-slate-600 border border-slate-200/60 shadow-xs shrink-0 mt-0.5">
                <FileText className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  DARPAN ID
                </span>
                <span className="text-base sm:text-lg font-mono font-extrabold text-[#08203E] tracking-wider block">
                  WB/2025/0885343
                </span>
              </div>
            </div>

            {/* DARPAN Registration Date Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100/90 flex items-start space-x-3.5">
              <div className="p-2.5 bg-white rounded-xl text-slate-600 border border-slate-200/60 shadow-xs shrink-0 mt-0.5">
                <Calendar className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  DARPAN REGISTRATION DATE
                </span>
                <span className="text-base sm:text-lg font-heading font-extrabold text-[#08203E] block">
                  15 November 2025
                </span>
              </div>
            </div>
          </div>

          {/* Trust Registration Date */}
          <div className="bg-gradient-to-r from-slate-50 via-slate-50/80 to-slate-50 rounded-2xl p-5 border border-slate-100/90 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-white rounded-xl text-slate-600 border border-slate-200/60 shadow-xs shrink-0">
                <Calendar className="h-5 w-5 text-[#08203E]" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                TRUST REGISTRATION DATE
              </span>
            </div>
            <div className="text-base sm:text-lg font-heading font-extrabold text-[#08203E]">
              15 May 2025
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
