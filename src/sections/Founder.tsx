import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { founderData } from '../data/team';
import founderImg from '../assets/images/founder.jpg';

export default function Founder() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Founder Photo Card (38-40% width on desktop) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[4/5] sm:h-[440px] rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden group cursor-default"
            >
              {/* Founder Image */}
              <img
                src={founderImg}
                alt={founderData.name}
                className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Simplified Bottom Info Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-slate-950/80 border border-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl text-center z-10">
                <span className="text-emerald-400 text-[10px] font-bold tracking-wider uppercase block">
                  {founderData.role}
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white mt-0.5">
                  {founderData.name}
                </h3>
                <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-center space-x-1.5 text-[11px] text-slate-300 font-medium">
                  <GraduationCap className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Qualification: {founderData.qualification}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Founder Profile Content (60-62% width on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Header Area */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-widest block">
                NGO Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E] tracking-tight">
                Founder & Director Profile
              </h2>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium">
              {founderData.bio}
            </p>

            {/* Key Leadership Strengths (4 items in 2x2 grid) */}
            <div className="space-y-3 pt-1">
              <h3 className="font-heading font-extrabold text-base text-[#08203E] flex items-center">
                <Award className="h-4.5 w-4.5 text-emerald-500 mr-2 shrink-0" />
                Key Leadership Strengths
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {founderData.strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2.5 group cursor-default"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-950 transition-colors">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Concise Subtle Disclaimer */}
            <p className="text-[11px] text-slate-400 italic font-medium pt-2">
              * Profile information based on official Foundation records.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
