import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_DATA, STATS_DATA } from '../data/portfolioData';
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Terminal,
  Code,
  Video,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'code'>('video');
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        if (hasEnded || videoRef.current.ended) {
          videoRef.current.currentTime = 0;
          setHasEnded(false);
        }
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-300/80 dark:border-indigo-800/80 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600 dark:bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wide text-indigo-950 dark:text-indigo-300">
                {HERO_DATA.status}
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="gradient-text">{HERO_DATA.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Terminal className="w-6 h-6 text-indigo-600 dark:text-indigo-400 inline" />
                <span>{HERO_DATA.role}</span>
              </h2>
            </div>

            {/* Sub-tagline & Bio */}
            <p className="text-lg text-slate-800 dark:text-slate-200 max-w-2xl leading-relaxed font-normal">
              {HERO_DATA.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setActiveTab('video');
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    setHasEnded(false);
                    videoRef.current.play();
                    setIsPlaying(true);
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-indigo-950 dark:text-slate-100 bg-indigo-100/90 dark:bg-indigo-950/70 hover:bg-indigo-200/90 dark:hover:bg-indigo-900/80 border border-indigo-300 dark:border-indigo-700 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <Video className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Watch Video Intro</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-900 dark:text-slate-100 bg-white/90 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 shadow-sm transition-all duration-200"
              >
                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Get In Touch</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/assets/Resume.pdf"
                download="Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-indigo-950 dark:text-slate-100 bg-white/90 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-slate-700/80 border-2 border-indigo-600 dark:border-indigo-500/80 shadow-md transition-all duration-200"
              >
                <Download className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />
                <span>Resume (PDF)</span>
              </motion.a>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 flex items-center space-x-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400">
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
                    className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-300/80 dark:border-slate-700/80 transition-colors shadow-sm"
                  >
                    <IconComp className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Dynamic Video Greeting & Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer Glowing Gradient Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-xl animate-pulse" />

              {/* Glassmorphism Container */}
              <div className="relative glass-card rounded-3xl p-5 sm:p-6 overflow-hidden border border-slate-300 dark:border-slate-700/60 shadow-2xl">
                {/* Header Bar with Tabs */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-300/80 dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>

                  <div className="flex items-center gap-1.5 bg-slate-200/80 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-300/80 dark:border-slate-700/80">
                    <button
                      onClick={() => setActiveTab('video')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                        activeTab === 'video'
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" /> Video
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                        activeTab === 'code'
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300'
                      }`}
                    >
                      <Code className="w-3.5 h-3.5" /> config.ts
                    </button>
                  </div>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'video' ? (
                    <motion.div
                      key="video-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 space-y-4"
                    >
                      {/* Video Player Frame */}
                      <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-300 dark:border-slate-800 shadow-md group">
                        <video
                          ref={videoRef}
                          src="/assets/Dev.mp4"
                          playsInline
                          autoPlay
                          muted={isMuted}
                          onEnded={handleVideoEnded}
                          className="w-full aspect-video sm:aspect-[4/3] object-cover"
                        />

                        {/* Interactive Play/Pause & Sound Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20 opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3.5">
                          <div className="flex justify-between items-center">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/20">
                              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                              Live Intro
                            </span>

                            <button
                              onClick={toggleMute}
                              className="p-2 rounded-full bg-slate-900/80 backdrop-blur-md text-white hover:bg-indigo-600 border border-white/20 transition-all cursor-pointer"
                              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                            >
                              {isMuted ? (
                                <VolumeX className="w-4 h-4 text-amber-400" />
                              ) : (
                                <Volume2 className="w-4 h-4 text-emerald-400" />
                              )}
                            </button>
                          </div>

                          <div className="flex items-center justify-between">
                            <button
                              onClick={togglePlay}
                              className="p-2.5 rounded-full bg-indigo-600/90 text-white hover:bg-indigo-500 shadow-lg backdrop-blur-sm transition-all cursor-pointer flex items-center gap-1 text-xs font-bold px-3"
                            >
                              {hasEnded ? (
                                <>
                                  <RotateCcw className="w-4 h-4" /> Replay
                                </>
                              ) : isPlaying ? (
                                <>
                                  <Pause className="w-4 h-4" /> Pause
                                </>
                              ) : (
                                <>
                                  <Play className="w-4 h-4 fill-white" /> Play
                                </>
                              )}
                            </button>

                            {isMuted && (
                              <button
                                onClick={toggleMute}
                                className="text-[11px] font-bold text-amber-300 bg-amber-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/40 hover:bg-amber-900 transition-all cursor-pointer flex items-center gap-1 animate-pulse"
                              >
                                <VolumeX className="w-3 h-3" /> Tap to Unmute
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Video Subtitle & Quote Box */}
                      <div className="p-3.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80">
                        <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed italic">
                          "Hi, I am Jules Edozie. I am a full stack developer. I build fast, scalable websites. Let's build something amazing together."
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="code-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 font-mono text-xs sm:text-sm space-y-2 leading-relaxed text-slate-900 dark:text-slate-200"
                    >
                      <div>
                        <span className="text-purple-700 dark:text-purple-400 font-bold">const</span>{' '}
                        <span className="text-indigo-700 dark:text-indigo-300 font-bold">developer</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-700 dark:text-cyan-400 font-bold">name:</span>{' '}
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">'{HERO_DATA.name}'</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-700 dark:text-cyan-400 font-bold">role:</span>{' '}
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">'Full Stack Web Developer'</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-700 dark:text-cyan-400 font-bold">coreTech:</span> [
                      </div>
                      <div className="pl-8 text-amber-700 dark:text-amber-300 font-semibold">
                        'ReactJS', 'NextJS', 'TypeScript', 'Ruby-On-Rails', 'Laravel'
                      </div>
                      <div className="pl-4">],</div>
                      <div className="pl-4">
                        <span className="text-cyan-700 dark:text-cyan-400 font-bold">coffeeLevel:</span>{' '}
                        <span className="text-rose-600 font-bold">Infinity</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-700 dark:text-cyan-400 font-bold">passion:</span>{' '}
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">'Crafting digital perfection'</span>
                      </div>
                      <div>&#125;;</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Quick Floating Badge Card */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="mt-5 p-3.5 rounded-2xl bg-indigo-100/90 dark:bg-indigo-950/80 border border-indigo-300 dark:border-indigo-800/60 flex items-center space-x-3"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-950 dark:text-indigo-200">
                      Full-Stack Architecture
                    </p>
                    <p className="text-[11px] font-semibold text-indigo-800 dark:text-indigo-400">
                      React + TS + Rails + Laravel
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
              className="glass-panel p-5 rounded-2xl border border-slate-300/80 dark:border-slate-800/80 text-center hover:border-indigo-500/40 transition-colors"
            >
              <p className="text-3xl sm:text-4xl font-heading font-extrabold gradient-text">
                {stat.value}
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                {stat.label}
              </p>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-400 mt-0.5">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

