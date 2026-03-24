import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Professional Journey</h2>
        <p className="text-slate-400 font-medium">Evolution of my expertise from Full Stack Developer to Senior Tech Lead.</p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-12">
        {experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative glass-card group hover:shadow-2xl hover:shadow-sky-500/5 border-l-4 border-l-sky-500 shadow-xl shadow-slate-900/40"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-black text-white group-hover:text-sky-400 transition-colors">{exp.role}</h3>
                <div className="flex items-center gap-2 text-sky-500 font-bold uppercase tracking-widest text-sm">
                  <Briefcase size={16} />
                  <span>{exp.company}</span>
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-1">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/40 border border-slate-700/50 text-xs font-bold font-mono text-slate-400">
                  <Calendar size={14} className="text-sky-400" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs px-3 font-semibold">
                  <MapPin size={14} />
                  <span>Noida, India</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pr-4">
              {exp.highlights.map((highlight, idx) => (
                <div key={idx} className="flex gap-4 group/item">
                  <div className="mt-2.5 flex-shrink-0 w-1 h-1 rounded-full bg-sky-500/40 group-hover/item:bg-sky-500 transition-colors" />
                  <p className="text-slate-400 leading-relaxed font-medium group-hover/item:text-white transition-colors">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="absolute -left-7 top-8 w-14 h-14 rounded-full bg-slate-900 border-4 border-sky-500 flex items-center justify-center -translate-x-1/2 hidden md:flex ring-8 ring-slate-900/80 shadow-2xl">
              <CheckCircle2 className="text-sky-500" size={24} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
