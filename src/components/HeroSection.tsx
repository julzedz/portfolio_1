import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA, STATS_DATA } from '../data/portfolioData';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const HeroSection: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-indigo-700 dark:text-indigo-300">
                {HERO_DATA.status}
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="gradient-text">{HERO_DATA.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Terminal className="w-6 h-6 text-indigo-500 inline" />
                <span>{HERO_DATA.role}</span>
              </h2>
            </div>

            {/* Sub-tagline & Bio */}
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {HERO_DATA.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-200"
              >
                <Mail className="w-5 h-5 text-indigo-500" />
                <span>Get In Touch</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </motion.a>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 flex items-center space-x-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              {[
                { icon: GithubIcon, href: HERO_DATA.github, label: 'GitHub' },
                { icon: LinkedinIcon, href: HERO_DATA.linkedin, label: 'LinkedIn' },
                { icon: TwitterIcon, href: HERO_DATA.twitter, label: 'Twitter' },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.a
                    key={idx}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/80 dark:border-slate-700/80 transition-colors shadow-sm"
                  >
                    <IconComp className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Dynamic Portrait Card / Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer Glowing Gradient Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-xl animate-pulse" />

              {/* Glassmorphism Code & Avatar Box */}
              <div className="relative glass-card rounded-3xl p-6 overflow-hidden border border-white/60 dark:border-slate-700/60 shadow-2xl">
                {/* Decorative Window Controls */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <Code className="w-3.5 h-3.5" /> developer.config.ts
                  </span>
                </div>

                {/* Simulated Code Snippet */}
                <div className="pt-4 font-mono text-xs sm:text-sm space-y-2 leading-relaxed text-slate-700 dark:text-slate-300">
                  <div>
                    <span className="text-purple-600 dark:text-purple-400 font-bold">const</span>{' '}
                    <span className="text-indigo-600 dark:text-indigo-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-600 dark:text-cyan-400">name:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">'{HERO_DATA.name}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-600 dark:text-cyan-400">role:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">'Full Stack Web Developer'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-600 dark:text-cyan-400">coreTech:</span> [
                  </div>
                  <div className="pl-8 text-amber-600 dark:text-amber-300">
                    'ReactJS', 'TypeScript', 'Ruby on Rails', 'PostgreSQL'
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-cyan-600 dark:text-cyan-400">coffeeLevel:</span>{' '}
                    <span className="text-rose-500 font-semibold">Infinity</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-600 dark:text-cyan-400">passion:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">'Crafting digital perfection'</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Quick Floating Badge Card */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="mt-6 p-4 rounded-2xl bg-indigo-50/90 dark:bg-indigo-950/80 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center space-x-3"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-indigo-900 dark:text-indigo-200">
                      Full-Stack Architecture
                    </p>
                    <p className="text-[11px] text-indigo-700 dark:text-indigo-400">
                      React + TS + Rails + Cloud
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 text-center hover:border-indigo-500/40 transition-colors"
            >
              <p className="text-3xl sm:text-4xl font-heading font-extrabold gradient-text">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
