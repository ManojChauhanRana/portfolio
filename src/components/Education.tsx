import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications } from '../data/portfolio';
import { GraduationCap, Award, BookOpen, ChevronRight } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="scroll-mt-32">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500">
              <GraduationCap size={28} />
            </div>
            <h2 className="section-title mb-0">Academic Base</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group hover:border-sky-500/30 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-2 p-1 bg-slate-900 w-fit rounded shadow-inner border border-slate-700/50">
                  <BookOpen size={14} className="text-sky-500 opacity-60" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">Manoj Chauhan</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-sky-400 transition-colors">{edu.degree}</h3>
                <p className="text-slate-500 mt-2 mb-4 font-bold text-sm">{edu.institution}</p>
                <div className="inline-block px-3 py-1 rounded bg-slate-900 border border-slate-700/50 text-[10px] font-black text-sky-400 uppercase tracking-widest leading-none">
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-slate-700/10 flex items-center justify-center text-slate-400">
              <Award size={28} />
            </div>
            <h2 className="section-title mb-0">Certifications</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 flex items-center justify-between group hover:bg-slate-800/60 shadow-xl transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <Award size={20} />
                  </div>
                  <span className="font-bold text-slate-300 group-hover:text-sky-400 transition-colors">{cert}</span>
                </div>
                <ChevronRight size={20} className="text-slate-600 group-hover:text-sky-400 opacity-0 group-hover:opacity-100 transition-all" />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 glass-card border-none bg-sky-900/10 p-8 shadow-inner border border-slate-700/20">
            <p className="text-sm text-slate-500 italic leading-relaxed font-medium">
              "Building high-impact software requires high-level discipline. I am 
              consistently sharpening my skills in distributed systems and Cloud Native architectures."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
