import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

export function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-lg"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/10 to-slate-400/10 blur-xl -z-10 rounded-3xl opacity-50" />
          <div className="glass-card aspect-[4/5] w-full max-w-[400px] mx-auto md:ml-0 overflow-hidden relative group p-2 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/15 via-transparent to-slate-400/10 group-hover:opacity-60 transition-opacity" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-end bg-slate-900 border border-slate-700/50 shadow-2xl">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent">
                <p className="text-sky-400 font-mono text-[10px] uppercase tracking-[0.4em] font-bold mb-1">Scale & Security</p>
                <h3 className="text-2xl font-black text-white">{personalInfo.name}</h3>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h2 className="section-title">Senior Full Stack Impact</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-medium">
              Driven by delivering robust and scalable code, I specialize in building complex 
              full-stack applications with <span className="text-sky-400">Ruby on Rails</span> 
              and <span className="text-sky-400">React</span>.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-medium">
              With deep experience as a <span className="text-white">Tech Lead</span>, I bridge 
              technical vision with engineering reality, ensuring every deployment counts and 
              every integration is seamless.
            </p>
          </div>
          
          <div className="flex gap-12 pt-6 border-t border-slate-800/50 max-w-sm">
            <div className="space-y-1">
              <p className="text-sky-400 text-3xl font-black tracking-tight">3+</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-300 text-3xl font-black tracking-tight">Tech Lead</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Project Leadership</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
