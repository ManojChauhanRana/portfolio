import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Download, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="relative pt-12 lg:pt-24 min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-8"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
          </span>
          Senior Full Stack Engineer
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight md:leading-tight">
          Specializing in <br />
          <span className="text-gradient">Scalable SaaS</span> <br />
          Experience
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Hi, I'm <span className="text-white">Manoj Chauhan</span>. I build high-performance 
          web applications with <span className="text-sky-400">Ruby on Rails</span>, 
          <span className="text-sky-400"> React</span>, and modern cloud infrastructures.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#projects" className="btn-primary group w-full sm:w-auto shadow-sky-900/10">
            Showcase of Work
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          
          <div className="flex items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-[64px] h-[64px] rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-sky-500/50 hover:bg-sky-500/5 transition-all duration-500 shadow-xl"
              aria-label="GitHub"
            >
              <Github size={26} className="text-slate-400 group-hover:text-white transition-colors" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-[64px] h-[64px] rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-sky-500/50 hover:bg-sky-500/5 transition-all duration-500 shadow-xl"
              aria-label="LinkedIn"
            >
              <Linkedin size={26} className="text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 rotate-90 origin-left translate-x-3 translate-y-10">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-slate-700/50 flex flex-col items-center justify-start p-1 bg-slate-800/10 backdrop-blur-sm mt-8">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-sky-500/50 rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}
