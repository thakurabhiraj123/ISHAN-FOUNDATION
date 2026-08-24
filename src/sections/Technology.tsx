import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { technologyData } from '../data/technology';

export default function Technology() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest block">
            Modern NGO Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E]">
            Technology for Community Empowerment
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            By leveraging digital patient charting, stray rescue mapping, tailoring equipment, and travel booking portals, we optimize and scale our community outreach.
          </p>
        </div>

        {/* Technology Cards Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {technologyData.map((tech) => {
            const IconComponent = (Icons as any)[tech.iconName] || Icons.Cpu;

            return (
              <motion.div
                key={tech.id}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-3xl p-5 border border-slate-100/80 hover:border-primary-100 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 flex flex-col justify-between text-left cursor-default"
              >
                <div className="space-y-4">
                  <div className="inline-flex p-2.5 bg-primary-50 text-primary-500 rounded-2xl group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-5 w-5 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="font-heading font-extrabold text-sm text-[#08203E] group-hover:text-primary-500 transition-colors leading-snug">
                    {tech.title}
                  </h3>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-semibold">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
