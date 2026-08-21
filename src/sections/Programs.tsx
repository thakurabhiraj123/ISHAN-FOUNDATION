import { Link } from 'react-router-dom';
import { Check, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { programsData } from '../data/programs';

// Helper component to render beautiful custom SVG vector indicators inside the card header
function ProgramVector({ id }: { id: string }) {
  if (id === 'blood-donation') {
    return (
      <svg className="absolute -right-4 -bottom-6 w-32 h-32 opacity-20 text-white animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
      </svg>
    );
  }
  if (id === 'eye-checkup') {
    return (
      <svg className="absolute -right-4 -bottom-6 w-32 h-32 opacity-20 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="10" strokeDasharray="3 3" className="animate-spin-slow" style={{ transformOrigin: 'center', animationDuration: '24s' }} />
        <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'general-health') {
    return (
      <svg className="absolute -right-4 bottom-2 w-36 h-20 opacity-25 text-white" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M0,20 L25,20 L30,10 L35,30 L40,6 L45,34 L50,20 L55,20 L60,15 L65,25 L70,20 L100,20" strokeLinecap="round" strokeLinejoin="round" className="animate-line-glow" />
      </svg>
    );
  }
  if (id === 'community-medical-camps') {
    return (
      <svg className="absolute -right-4 -bottom-6 w-32 h-32 opacity-20 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }
  if (id === 'health-awareness') {
    return (
      <svg className="absolute -right-4 -bottom-6 w-32 h-32 opacity-20 text-white animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 9v4M12 15h.01" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'children-activities') {
    return (
      <svg className="absolute -right-4 -bottom-6 w-32 h-32 opacity-20 text-white animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ animationDelay: '1.5s' }}>
        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" fill="currentColor" />
      </svg>
    );
  }
  return null;
}

export default function Programs() {
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
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest block">
            Impactful Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E]">
            Our Community Programs
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            By running focused community health camps, we bring direct care and screening to families, children, workers, and elderly citizens across Jalpaiguri.
          </p>
        </div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programsData.map((program) => {
            return (
              <motion.div
                key={program.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100/80 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Decorative Card Header Visual Placeholder */}
                  <div className={`h-40 bg-gradient-to-tr ${program.placeholderBg} p-6 flex flex-col justify-between text-white relative overflow-hidden`}>
                    
                    {/* SVG graphics matching program type */}
                    <ProgramVector id={program.id} />

                    {/* Small category overlay */}
                    <div className="flex items-center space-x-1.5 text-[10px] font-bold bg-black/15 self-start px-2.5 py-1 rounded-full backdrop-blur-sm z-10">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>CAMPAIGN</span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl leading-tight z-10 drop-shadow-sm group-hover:translate-x-0.5 transition-transform duration-300">
                      {program.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4 text-left">
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {program.description}
                    </p>
                    <ul className="space-y-2">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-[11px] text-slate-600 leading-snug">
                          <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mr-1.5 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                          <span className="font-semibold">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Explore CTA */}
        <div className="text-center mt-12">
          <Link
            to="/programs"
            className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-full text-sm font-semibold transition-colors shadow-md shadow-slate-900/10"
          >
            View Program & Timeline Details
          </Link>
        </div>

      </div>
    </section>
  );
}
