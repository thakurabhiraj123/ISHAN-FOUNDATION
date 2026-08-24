import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { founderData } from '../data/team';
import founderImg from '../assets/images/founder.jpg';

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
          
          {/* Image/Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[360px] aspect-[3/4] sm:aspect-auto sm:h-[480px] rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden group cursor-default"
            >
              {/* Background Image */}
              <img
                src={founderImg}
                alt={founderData.name}
                className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Top Tags */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                <span className="text-[10px] bg-emerald-500 text-white px-3 py-1 rounded-full font-bold uppercase tracking-widest shadow-md">
                  NGO Director
                </span>
                <span className="text-[10px] bg-black/45 text-slate-100 px-3 py-1 rounded-full backdrop-blur-md tracking-wider font-semibold border border-white/10">
                  Jalpaiguri, WB
                </span>
              </div>

              {/* Bottom Card Information */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/75 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center z-10 hover:bg-slate-950/85 transition-all duration-300">
                <div className="text-center space-y-1">
                  <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {founderData.name}
                  </h3>
                  <p className="text-emerald-400 text-[10px] font-extrabold tracking-widest uppercase">
                    {founderData.role}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center space-x-2 text-xs font-bold text-slate-300">
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


