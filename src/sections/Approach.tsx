import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { approachData } from '../data/approach';

export default function Approach() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest block">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E]">
            Our Approach
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            A holistic, community-centered journey that moves from identifying local needs to establishing sustainable health, animal welfare, and travel livelihoods.
          </p>
        </div>

        {/* Approach Visual Journey Layout */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative"
        >
          
          {approachData.map((step, index) => {
            const IconComponent = (Icons as any)[step.iconName] || Icons.Check;

            return (
              <motion.div
                key={step.step}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl p-5 border border-slate-100/80 hover:border-emerald-100 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-300 relative flex flex-col justify-between text-left cursor-default"
              >
                {/* Connection line helper (only for screens that don't warp layout drastically) */}
                {index < 6 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10 text-slate-300 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300">
                    <Icons.ArrowRight className="h-4 w-4" />
                  </div>
                )}

                <div className="space-y-4">
                  {/* Step counter and Icon */}
                  <div className="flex justify-between items-center">
                    <div className="inline-flex p-2 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-2xl font-black text-slate-100 font-heading group-hover:text-emerald-100 transition-colors">
                      0{step.step}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-heading font-extrabold text-sm text-[#08203E] group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 leading-relaxed font-semibold">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}
