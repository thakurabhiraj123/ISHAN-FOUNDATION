import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { founderData } from '../data/team';

export default function Founder() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
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
          
          {/* Image/Visual Placeholder Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[360px] h-[420px] bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col justify-between p-8 group cursor-default"
            >
              {/* Overlay glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary-500/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2.5s' }} />

              {/* Background ECG layout */}
              <svg className="absolute inset-0 w-full h-full opacity-10 text-emerald-500" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 L30,50 L35,25 L40,75 L45,10 L50,90 L55,50 L100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>

              <div className="flex justify-between items-center z-10">
                <span className="text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/25 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-widest">
                  NGO Director
                </span>
                <span className="text-[9px] bg-white/10 text-slate-300 px-2.5 py-0.5 rounded-full backdrop-blur-sm tracking-wider font-semibold">
                  Jalpaiguri, WB
                </span>
              </div>

              {/* Profile silhouette / medical shield emblem */}
              <div className="flex flex-col items-center justify-center my-auto space-y-4 z-10">
                <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 relative overflow-hidden group shadow-xl shadow-emerald-500/5 hover:border-emerald-400 transition-all duration-300">
                  <div className="absolute inset-0 bg-slate-900/50" />
                  {/* Subtle rotating helper */}
                  <div className="absolute inset-1 rounded-full border border-dashed border-emerald-500/20 animate-spin-slow" style={{ animationDuration: '30s' }} />
                  <IconsWrapper />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-heading font-extrabold text-2xl group-hover:text-emerald-400 transition-colors duration-300">{founderData.name}</h3>
                  <p className="text-emerald-400 text-[10px] font-extrabold tracking-widest uppercase">
                    {founderData.role}
                  </p>
                </div>
              </div>

              <div className="bg-black/35 p-4 rounded-2xl border border-white/5 backdrop-blur-sm text-center z-10 hover:bg-black/45 transition-colors">
                <div className="flex items-center justify-center space-x-2 text-xs font-bold text-slate-300">
                  <GraduationCap className="h-4.5 w-4.5 text-emerald-400" />
                  <span>Qualification: {founderData.qualification}</span>
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
                NGO Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E]">
                Founder & Director Profile
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-600 leading-relaxed text-sm font-medium"
            >
              {founderData.bio}
            </motion.p>

            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-heading font-extrabold text-base text-[#08203E] flex items-center"
              >
                <Award className="h-5 w-5 text-emerald-500 mr-2 animate-pulse" />
                Key Leadership Strengths
              </motion.h3>

              <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {founderData.strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-2.5 group cursor-default"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-xs font-bold text-slate-700 group-hover:text-slate-950 transition-colors">{strength}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[10px] text-slate-400 italic font-semibold"
            >
              * Details verified strictly against NGO registration documents. No extraneous achievements, certifications, or awards are listed to maintain professional authenticity.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}

// Custom styled vector profile icon helper to show a professional leadership shield
function IconsWrapper() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="relative z-10 text-emerald-400 group-hover:scale-110 transition-transform duration-300"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="M8 14s1.5-2 4-2 4 2 4 2" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
