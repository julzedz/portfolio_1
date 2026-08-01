import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 text-xs font-semibold text-emerald-700 dark:text-emerald-300"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Academic foundations and continuous professional certifications.
          </p>
        </div>

        {/* Education Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 p-3 flex items-center justify-center text-white shadow-md">
                      {idx === 0 ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Highlights &amp; Achievements:
                  </p>
                  {edu.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
