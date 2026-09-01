import { HeartPulse, Heart, Users, Compass, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { programsData } from '../data/programs';

// Helper icon component for consistent visual design
function ProgramIcon({ id }: { id: string }) {
  switch (id) {
    case 'rural-healthcare':
      return <HeartPulse className="h-6 w-6" />;
    case 'animal-rescue':
      return <Heart className="h-6 w-6" />;
    case 'women-empowerment':
      return <Users className="h-6 w-6" />;
    case 'tour-travels':
      return <Compass className="h-6 w-6" />;
    default:
      return <HeartPulse className="h-6 w-6" />;
  }
}

export default function Programs() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3"
        >
          <span className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-widest block">
            OUR PROGRAMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E] tracking-tight">
            Creating Impact Through Action
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            "Our initiatives focus on healthcare, animal welfare, women empowerment and sustainable community development."
          </p>
        </motion.div>

        {/* Balanced 2x2 Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {programsData.map((program) => {
            return (
              <motion.div
                key={program.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group bg-slate-50 hover:bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 ${program.themeColor.hoverBorder} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-default text-left`}
              >
                <div className="space-y-5">
                  {/* Top Row: Icon & Category Label */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl border ${program.themeColor.iconBg} shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                      <ProgramIcon id={program.id} />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${program.themeColor.badge}`}>
                      {program.category}
                    </span>
                  </div>

                  {/* Program Title & Short Description */}
                  <div className="space-y-2.5">
                    <h3 className="font-heading font-extrabold text-xl text-[#08203E] group-hover:text-primary-500 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="mt-6 pt-5 border-t border-slate-200/60">
                  <ul className="space-y-2.5">
                    {program.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-700 leading-snug">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 mr-2 mt-0.5 ${program.themeColor.checkColor} group-hover:scale-110 transition-transform duration-200`} />
                        <span className="font-medium text-slate-600">{detail}</span>
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
