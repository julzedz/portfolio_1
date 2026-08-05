import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../types';
import { FolderGit2, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-300 dark:border-pink-800/80 text-xs font-bold text-pink-950 dark:text-pink-300 shadow-sm"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-pink-800 dark:text-pink-400" />
            <span>Featured Portfolio</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-950 dark:text-white">
            Highlighted <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-900 dark:text-slate-200 text-base sm:text-lg font-medium">
            Selected full-stack web applications engineered for scalability, performance, and user engagement.
          </p>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'text-white shadow-md shadow-indigo-500/20'
                    : 'text-slate-900 dark:text-slate-200 hover:text-indigo-900 dark:hover:text-white bg-slate-200/90 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="projectsCategoryTab"
                    className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-800 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Category pill */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/90 backdrop-blur-md text-white border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick View Button Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/50 backdrop-blur-xs transition-opacity duration-300">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-950 dark:bg-slate-900 dark:text-white shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading font-extrabold text-xl text-slate-950 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-black text-indigo-900 dark:text-indigo-400">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-900 dark:text-slate-300 line-clamp-3 leading-relaxed font-medium">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold bg-slate-200 dark:bg-slate-800/80 text-slate-950 dark:text-slate-200 border border-slate-300 dark:border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold text-slate-800 dark:text-slate-400">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-300 dark:border-slate-800/80 mt-4">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-black text-indigo-900 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <Sparkles className="w-3 h-3" />
                  </button>

                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-950 dark:text-slate-200 hover:text-indigo-700 dark:hover:text-indigo-400 border border-slate-300 dark:border-slate-700 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-400 hover:bg-indigo-200 border border-indigo-300 dark:border-indigo-800 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal Overlay */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
