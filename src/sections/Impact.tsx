import { CheckCircle2, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { impactData } from '../data/impact';

export default function Impact() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest block">
            Our Goals & Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E]">
            Our Impact
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            By focusing on tangible community actions rather than funding metrics, we measure our success through localized healthcare accessibility and social wellness.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {impactData.map((category, index) => {
            return (
              <motion.div
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-100/80 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between text-left cursor-default"
              >
                <div className="space-y-6">
                  {/* Category Header with specific icon */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                    <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      {index === 0 && <Heart className="h-5 w-5 group-hover:scale-110 group-hover:fill-white transition-all duration-300" />}
                      {index === 1 && <Award className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />}
                      {index === 2 && <CheckCircle2 className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />}
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-[#08203E] group-hover:text-emerald-700 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {category.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 pt-2">
                    {category.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mr-2.5 mt-0.5 group-hover:scale-110 group-hover:text-emerald-600 transition-all duration-200" />
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
