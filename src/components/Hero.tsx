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
          
          <div className="flex items-center gap-4 w-full sm:w-auto mt-2 sm:mt-0">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary h-[56px] px-6 flex items-center justify-center shadow-lg hover:shadow-sky-500/10 border-slate-700/50"
              aria-label="GitHub"
            >
              <Github size={24} className="text-slate-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary h-[56px] px-6 flex items-center justify-center shadow-lg hover:shadow-sky-500/10 border-slate-700/50"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-slate-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-5 h-8 rounded-full border border-slate-700 flex flex-col items-center justify-start p-1 bg-slate-800/20 backdrop-blur-sm">
          <div className="w-0.5 h-1.5 bg-slate-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
