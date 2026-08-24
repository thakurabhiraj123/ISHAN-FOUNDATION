import { useState } from 'react';
import { CheckCircle, Calendar, ClipboardList } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'established' | 'planned'>('all');

  const filteredProjects = projectsData.filter(project => {
    if (activeTab === 'all') return true;
    return project.status === activeTab;
  });

  return (
    <div className="pb-20 space-y-12">
      {/* Header Banner */}
      <div className="bg-[#08203E] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block">
            Our Roadmap
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Projects & Initiatives
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Transparency is our core standard. Review our completed foundational milestones and our detailed future action plans.
          </p>
        </div>
      </div>

      {/* Projects Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tab Filter Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1.5 rounded-2xl md:rounded-full border border-slate-200/50 flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-0 md:space-x-2">
            {(['all', 'established', 'planned'] as const).map(tab => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {tab === 'all' && 'All Projects'}
                {tab === 'established' && 'Established / Completed'}
                {tab === 'planned' && 'Planned Initiatives'}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isPlanned = project.status === 'planned';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="bg-white rounded-3xl p-8 border border-slate-100/80 hover:border-slate-200 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-default"
                >
                  {/* Status indicator bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isPlanned ? 'bg-primary-500' : 'bg-emerald-500'
                  }`} />

                  <div className="space-y-6">
                    {/* Header info */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        isPlanned
                          ? 'bg-primary-50 text-primary-700 border border-primary-100'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      }`}>
                        {isPlanned ? 'Planned Initiative' : 'Established & Active'}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        {isPlanned ? 'Future Phase' : 'Completed'}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-[#08203E] flex items-center group-hover:text-primary-500 transition-colors">
                      {isPlanned ? (
                        <Calendar className="h-5 w-5 text-primary-500 mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                      )}
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {project.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="font-heading font-bold text-xs text-[#08203E] flex items-center">
                        <ClipboardList className="h-4 w-4 mr-1.5 text-slate-400" />
                        Key Specifics:
                      </h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-xs text-slate-600 leading-normal group-hover:text-slate-900 transition-colors">
                            <span className="mr-2 text-slate-450 mt-0.5">•</span>
                            <span className="font-semibold text-slate-650">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </section>
    </div>
  );
}
