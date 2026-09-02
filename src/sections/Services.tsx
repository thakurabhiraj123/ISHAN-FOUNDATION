import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E]">
            Our Core Initiatives
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We deliver dedicated community services focusing on rural healthcare, street animal welfare, women's empowerment workshops, and sustainable tour & homestay travels in North Bengal.
          </p>
        </div>

        {/* Services 3x3 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {servicesData.map((service, index) => {
            // Dynamically resolve icons
            const IconComponent = (Icons as any)[service.iconName] || Icons.Heart;
            const isNinthCard = index === 8;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-100/80 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 flex flex-col justify-between h-full cursor-default ${
                  isNinthCard
                    ? 'md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto w-full lg:col-span-1 lg:max-w-none lg:mx-0'
                    : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3 bg-primary-50 text-primary-500 rounded-2xl group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-6 w-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-[#08203E] group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center text-sm font-bold text-primary-500 hover:text-primary-600 hover:underline transition-colors"
          >
            Read details about our medical activities &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
