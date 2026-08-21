import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

export default function Projects() {
  // Get a preview subset: 2 established and 2 planned
  const establishedProjects = projectsData.filter(p => p.status === 'established').slice(0, 2);
  const plannedProjects = projectsData.filter(p => p.status === 'planned').slice(0, 2);

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="text-left max-w-2xl space-y-3">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest block">
              Our Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#08203E]">
              Our Projects & Initiatives
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We separate our projects into completed foundation building blocks and upcoming initiatives to maintain complete transparency about our rural health operations.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center text-sm font-bold text-primary-500 hover:text-primary-600 transition-colors shrink-0"
          >
            View All Projects
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Split Grid: Established vs Planned */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          
          {/* Established Projects Col */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Established / Active
              </span>
              <h3 className="font-heading font-extrabold text-xl text-[#08203E]">
                Completed Infrastructure
              </h3>
            </div>

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
              className="space-y-6"
            >
              {establishedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="group bg-slate-50 hover:bg-emerald-50/10 rounded-2xl p-6 border border-slate-100/80 hover:border-emerald-100 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-300 space-y-3 cursor-default"
                >
                  <h4 className="font-heading font-extrabold text-base text-[#08203E] flex items-center group-hover:text-emerald-700 transition-colors">
                    <CheckCircle className="h-4.5 w-4.5 text-emerald-500 mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Planned Initiatives Col */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Future / Planned
              </span>
              <h3 className="font-heading font-extrabold text-xl text-[#08203E]">
                Planned Roadmaps
              </h3>
            </div>

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
              className="space-y-6"
            >
              {plannedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="group bg-slate-50 hover:bg-primary-50/10 rounded-2xl p-6 border border-slate-100/80 hover:border-primary-100 hover:shadow-md hover:shadow-primary-500/5 transition-all duration-300 space-y-3 cursor-default"
                >
                  <h4 className="font-heading font-extrabold text-base text-[#08203E] flex items-center group-hover:text-primary-600 transition-colors">
                    <Calendar className="h-4.5 w-4.5 text-primary-500 mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
