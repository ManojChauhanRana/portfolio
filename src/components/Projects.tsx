import React from 'react';
import { motion } from 'framer-motion';
import { projects, personalInfo } from '../data/portfolio';
import { ExternalLink, Github, Code, ArrowRight } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div>
          <h2 className="section-title">Case Studies & Solutions</h2>
          <p className="text-slate-400 max-w-2xl mt-4 font-medium">
            Selected projects that demonstrate my ability to engineer 
            scalable high-performance SaaS applications and complex cloud 
            migrations.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-12 text-slate-500 text-sm">
          <div className="text-center group pointer-events-none">
            <span className="block text-3xl font-black text-white group-hover:text-sky-400 transition-colors">Rails</span>
            <span className="uppercase tracking-[0.3em] text-[10px] font-extrabold">Primary Core</span>
          </div>
          <div className="text-center group pointer-events-none">
            <span className="block text-3xl font-black text-white group-hover:text-slate-300 transition-colors">React</span>
            <span className="uppercase tracking-[0.3em] text-[10px] font-extrabold">Frontend Stack</span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -5 }}
            className="group glass-card overflow-hidden hover:border-sky-500/50 flex flex-col h-full bg-slate-800/20 shadow-xl hover:shadow-sky-500/10 transition-all duration-500"
          >
            <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden rounded-xl mb-6 shadow-inner border border-slate-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-slate-400/10 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute inset-4 rounded-lg flex items-center justify-center bg-slate-900/60 backdrop-blur-sm group-hover:scale-105 transition-transform duration-700">
                <div className="text-center space-y-4 px-8 relative overflow-hidden">
                  <motion.div 
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-600 to-sky-900 flex items-center justify-center text-white mx-auto shadow-2xl relative z-10"
                  >
                    <Code size={32} />
                  </motion.div>
                  <h4 className="text-xl font-bold line-clamp-1 relative z-10 text-white group-hover:text-sky-400 transition-colors capitalize">{project.title}</h4>
                </div>
              </div>
              
              {project.status && (
                <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-sky-500 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg border border-sky-400/50 backdrop-blur-md">
                  {project.status}
                </div>
              )}
            </div>

            <div className="flex-1 space-y-4 px-2">
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((skill) => (
                  <span key={skill} className="px-2 py-0.5 rounded text-[10px] font-black uppercase text-sky-400/80 tracking-widest leading-none border border-sky-500/20 bg-sky-500/5 group-hover:bg-sky-500/10 group-hover:text-sky-400 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            <div className="pt-8 flex items-center gap-4 px-2">
              {project.url ? (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary py-2 px-6 text-xs flex items-center gap-2 group/btn shadow-sky-900/10"
                >
                  Visit Solution
                  <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              ) : project.sourceUrl ? (
                <div className="flex items-center gap-3">
                  <div className="btn-secondary py-2 px-6 text-xs opacity-50 cursor-not-allowed">
                    Private Project
                  </div>
                  <a 
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-sky-400 transition-colors"
                  >
                    <Github size={14} />
                    Reference Architecture
                    <ArrowRight size={10} />
                  </a>
                </div>
              ) : (
                <div className="btn-secondary py-2 px-6 text-xs opacity-40 cursor-not-allowed">
                  Private Project
                </div>
              )}
              <div className="flex-1" />
              {!project.sourceUrl && (
                <div className="flex items-center gap-2 bg-slate-900 p-2 rounded-lg opacity-40 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                  <a 
                    href={personalInfo.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-sky-400 transition-colors hover:scale-110"
                  >
                    <Github size={18} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
