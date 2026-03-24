import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolio';
import { Mail, Phone, MapPin, ArrowUpRight, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-32">
      <div className="relative glass-card bg-slate-800/20 backdrop-blur-xl border border-slate-700/50 p-12 md:p-20 overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-sky-500/10 transition-colors duration-1000" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/5 rounded-full blur-[80px] -ml-32 -mb-32 group-hover:bg-slate-500/10 transition-colors duration-1000" />
        
        <div className="relative grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="section-title">Let's Build Something High-Impact</h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-md italic">
                Currently open to senior opportunities that push the boundaries 
                of Full Stack development and cloud architecture.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group/item">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover/item:bg-sky-500 group-hover/item:text-white transition-all duration-500 shadow-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] font-black text-slate-500 mb-1">Direct Outreach</p>
                  <p className="text-xl md:text-2xl font-black text-white group-hover/item:text-sky-400 transition-colors break-all leading-none">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group/item">
                <div className="w-14 h-14 rounded-2xl bg-slate-700/10 flex items-center justify-center text-slate-400 group-hover/item:bg-slate-700 group-hover/item:text-white transition-all duration-500 shadow-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] font-black text-slate-500 mb-1">Base of Operations</p>
                  <p className="text-xl md:text-2xl font-black text-white group-hover/item:text-slate-300 transition-colors leading-none">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-500 shadow-2xl hover:scale-110"
                  aria-label={link.name}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 lg:text-right lg:items-end"
          >
            <div className="space-y-6">
              <div className="px-8 py-10 rounded-3xl bg-slate-900/60 border border-slate-700/50 shadow-2xl relative overflow-hidden group/card hover:bg-slate-900 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-2 h-full bg-sky-500 opacity-20 group-hover/card:opacity-100 transition-opacity" />
                <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">Looking for a Senior Full Stack Engineer?</h4>
                <p className="text-slate-400 font-medium leading-relaxed max-w-sm ml-auto">
                  I specialize in turning complex architectural requirements into high-performance web products. 
                  Let's discuss how my experience in the Rails/React ecosystem can scale your infrastructure.
                </p>
                <div className="mt-10 flex justify-end">
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="btn-primary flex items-center gap-2 px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] shadow-sky-900/20"
                  >
                    Send Message
                    <Send size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
