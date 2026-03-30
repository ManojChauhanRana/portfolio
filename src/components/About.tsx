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
          <div className="relative">
            {/* Seamless Shadow/Depth - No Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-black/40 blur-[100px] -z-10" />
            
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative aspect-[4/5] w-full max-w-[360px] mx-auto md:ml-0 overflow-hidden rounded-[4rem]"
              style={{
                maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
              }}
            >
              {/* Image with theme-blending overlays */}
              <div className="relative w-full h-full group">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-115 transition-transform duration-1000 ease-out"
                />
                
                {/* Theme Blending Overlays */}
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply transition-opacity group-hover:opacity-0 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                
                {/* Minimalist Name Only Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-12 text-center">
                  <h3 className="text-3xl font-black text-white leading-none tracking-tight">{personalInfo.name}</h3>
                </div>
              </div>
            </motion.div>
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
              <p className="text-sky-400 text-3xl font-black tracking-tight">3</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-300 text-3xl font-black tracking-tight">Full Stack</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Engineer with Lead</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
