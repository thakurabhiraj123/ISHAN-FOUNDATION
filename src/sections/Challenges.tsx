import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { challengesData } from '../data/challenges';

export default function Challenges() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading and Illustration Panel */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 text-left"
          >
            <span className="text-sm font-bold text-red-600 uppercase tracking-widest block animate-pulse">
              Gaps in Rural Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E] leading-tight">
              Healthcare Should Reach Every Community
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Rural communities and tea garden workers in Jalpaiguri face critical roadblocks to basic healthcare. These gaps motivate our mission to deliver localized clinical screenings, camp organizations, and awareness programs.
            </p>

            {/* Illustration Frame */}
            <div className="group bg-gradient-to-tr from-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-red-950/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse-slow" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-3 text-red-400 font-bold text-sm uppercase tracking-wider">
                  <Icons.AlertTriangle className="h-5 w-5 animate-bounce" style={{ animationDuration: '3s' }} />
                  <span>Critical Care Barriers</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  Financial barriers combined with remote geographic locations often result in delayed detection of treatable illnesses, leading to severe health complications.
                </p>
                <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-[10px] text-slate-500 font-semibold tracking-wider">
                  <span>Jalpaiguri District Survey</span>
                  <span>North Bengal Region</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Challenge Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {challengesData.map((challenge) => {
              const IconComponent = (Icons as any)[challenge.iconName] || Icons.HelpCircle;

              return (
                <motion.div
                  key={challenge.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group bg-slate-50 hover:bg-red-50/15 rounded-2xl p-5 border border-slate-100 hover:border-red-100 hover:shadow-md hover:shadow-red-500/5 transition-all duration-300 flex flex-col justify-between cursor-default"
                >
                  <div className="space-y-3 space-x-0 text-left">
                    <div className="inline-flex p-2.5 bg-white rounded-xl text-red-500 shadow-sm border border-slate-200/50 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-heading font-extrabold text-base text-[#08203E] group-hover:text-red-600 transition-colors">
                      {challenge.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
