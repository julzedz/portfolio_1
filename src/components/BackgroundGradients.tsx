import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const BackgroundGradients: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 transition-colors duration-700">
      {/* Background base layer */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          theme === 'dark'
            ? 'bg-slate-950 text-slate-100'
            : 'bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/40 text-slate-800'
        }`}
      />

      {/* Floating Animated Blob 1 */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-40 transition-colors duration-700 ${
          theme === 'dark' ? 'bg-indigo-600/35' : 'bg-indigo-400/40'
        }`}
      />

      {/* Floating Animated Blob 2 */}
      <motion.div
        animate={{
          x: [0, -70, 60, 0],
          y: [0, 80, -50, 0],
          scale: [1, 1.15, 0.85, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-35 transition-colors duration-700 ${
          theme === 'dark' ? 'bg-purple-600/30' : 'bg-purple-300/45'
        }`}
      />

      {/* Floating Animated Blob 3 */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.25, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute bottom-10 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-30 transition-colors duration-700 ${
          theme === 'dark' ? 'bg-cyan-600/25' : 'bg-sky-300/40'
        }`}
      />

      {/* Grid Pattern Overlay */}
      <div
        className={`absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]`}
      />
    </div>
  );
};
