import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SKILLS_DATA } from '../data/portfolioData';
import {
  Code2,
  FileCode2,
  Atom,
  Gem,
  Server,
  Palette,
  Database,
  Share2,
  Container,
  Zap,
  GitBranch,
  Sparkles,
  Layers,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  FileCode2,
  Code2,
  Atom,
  Gem,
  Server,
  Palette,
  Database,
  Share2,
  Container,
  Zap,
  GitBranch,
  Sparkles,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps & Tools'];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800/80 text-xs font-semibold text-purple-700 dark:text-purple-300"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            A comprehensive overview of my technical stack, tools, and engineering capabilities.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'text-white shadow-md shadow-indigo-500/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="skillsCategoryTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Staggered Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill) => {
              const IconComponent = ICON_MAP[skill.icon] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-2.5 flex items-center justify-center text-white shadow-md`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {skill.level}%
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {skill.description}
                    </p>
                  </div>

                  {/* Level Progress Indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
