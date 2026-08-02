import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-300 dark:border-indigo-800/80 text-xs font-bold text-indigo-950 dark:text-indigo-300 shadow-sm"
          >
            <Briefcase className="w-3.5 h-3.5 text-indigo-800 dark:text-indigo-400" />
            <span>Career History</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-950 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-900 dark:text-slate-200 text-base sm:text-lg font-medium">
            Track record of shipping impactful software, leading frontend transformations, and scaling web applications.
          </p>
        </div>

        {/* Timeline List */}
        <div className="mt-16 relative">
          {/* Vertical central timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30" />

          <div className="space-y-12">
            {EXPERIENCES_DATA.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-4 border-indigo-600 items-center justify-center text-white shadow-lg z-10">
                    <Building2 className="w-4 h-4 text-indigo-300" />
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-300 dark:border-slate-800 shadow-xl">
                      
                      {/* Company Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-300 dark:border-slate-800">
                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-indigo-900 dark:text-indigo-400">
                            {exp.company}
                          </span>
                          <h3 className="font-heading font-extrabold text-xl text-slate-950 dark:text-white mt-0.5">
                            {exp.role}
                          </h3>
                        </div>

                        <div className="flex flex-col items-end space-y-1">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-950 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-800 dark:text-slate-400">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-sm text-slate-900 dark:text-slate-200 leading-relaxed font-medium">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mt-4 space-y-2">
                        <p className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-400">
                          Key Achievements:
                        </p>
                        {exp.achievements.map((achieve, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs font-medium text-slate-900 dark:text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-500 shrink-0 mt-0.5" />
                            <span>{achieve}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className="mt-6 pt-4 border-t border-slate-300 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-950 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
