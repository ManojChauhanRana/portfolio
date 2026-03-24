import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="section-title">Technical Proficiency</h2>
          <p className="text-slate-400 max-w-xl font-medium">
            Highly specialized in the Ruby on Rails ecosystem and modern React 
            frameworks for building enterprise-grade Full Stack applications.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-1.5 grayscale opacity-50">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className="w-1.5 h-1.5 rounded-full bg-sky-500"
              style={{ opacity: 1 - (i * 0.15) }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={skillGroup.category}
            variants={itemVariants}
            className="group glass-card hover:bg-slate-800/60 transition-all duration-300 shadow-xl hover:shadow-sky-500/5 h-full flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                <skillGroup.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors uppercase tracking-tight">{skillGroup.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2.5 mt-auto">
              {skillGroup.items.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 rounded-lg bg-slate-900/40 border border-slate-700/50 text-[11px] font-bold text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-all duration-300 tracking-wide uppercase"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
