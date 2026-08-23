import { Compass, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-3xl p-8 border border-slate-100/80 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-500/5 flex flex-col justify-between text-left transition-all duration-300 relative overflow-hidden cursor-default"
          >
            {/* Soft decorative background glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-100/30 rounded-full blur-2xl animate-pulse-slow" />

            <div className="space-y-6 relative z-10">
              <div className="inline-flex p-3 bg-primary-50 text-primary-500 rounded-2xl group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                <Compass className="h-6 w-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="space-y-3">
                <h3 className="font-heading font-extrabold text-2xl text-[#08203E] group-hover:text-primary-500 transition-colors">
                  OUR VISION
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                  "To build a healthier, more empowered rural community by ensuring accessible healthcare, animal welfare, women's self-reliance, and sustainable travel livelihoods reach every corner of North Bengal."
                </p>
              </div>
            </div>
            
            <div className="pt-6 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-bold tracking-widest uppercase">
              Ishaan Foundation Long-term Outlook
            </div>
          </motion.div>
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-3xl p-8 border border-slate-100/80 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col justify-between text-left transition-all duration-300 relative overflow-hidden cursor-default"
          >
            {/* Soft decorative background glow */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-emerald-100/30 rounded-full blur-2xl animate-pulse-slow" />

            <div className="space-y-6 relative z-10">
              <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <Target className="h-6 w-6 group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="space-y-3">
                <h3 className="font-heading font-extrabold text-2xl text-[#08203E] group-hover:text-emerald-700 transition-colors">
                  OUR MISSION
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                  "To deliver immediate healthcare services, safeguard stray animals, empower women with professional skill development, and promote community-led eco-tourism and travel opportunities."
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-bold tracking-widest uppercase">
              Ishaan Foundation Operations Framework
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
