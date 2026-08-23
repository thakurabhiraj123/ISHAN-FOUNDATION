import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { beneficiariesData } from '../data/beneficiaries';

export default function Beneficiaries() {
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
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest block">
            Target Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E]">
            Who We Serve
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Our initiatives are focused on delivering healthcare, animal welfare, women's empowerment, and sustainable travel training to communities in North Bengal.
          </p>
        </div>

        {/* Beneficiaries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {beneficiariesData.map((beneficiary) => {
            const IconComponent = (Icons as any)[beneficiary.iconName] || Icons.User;

            return (
              <motion.div
                key={beneficiary.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="group bg-slate-50 hover:bg-emerald-50/15 rounded-3xl p-6 border border-slate-100 hover:border-emerald-100 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-300 flex items-start space-x-4 text-left cursor-default"
              >
                <div className="p-3 bg-white rounded-2xl text-emerald-600 shadow-sm border border-slate-200/50 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <IconComponent className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-base text-[#08203E] group-hover:text-emerald-700 transition-colors">
                    {beneficiary.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {beneficiary.description}
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
