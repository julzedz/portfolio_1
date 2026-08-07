import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-300/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/40 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-300/80 dark:border-slate-800/60">
          
          {/* Brand & Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading font-bold text-slate-950 dark:text-white">
                {HERO_DATA.name}
              </p>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-400">
                {HERO_DATA.role}
              </p>
            </div>
          </div>

          {/* Nav quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-800 dark:text-slate-300">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-950/60 dark:hover:text-indigo-400 transition-colors border border-slate-300 dark:border-slate-700 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} {HERO_DATA.name}. Built with React, TypeScript &amp; Framer Motion.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-600 inline fill-rose-600" /> for web excellence
          </p>
        </div>
      </div>
    </footer>
  );
};
