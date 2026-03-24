import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl border-slate-700/50 py-3 shadow-2xl' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <nav className="container max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700/50 flex items-center justify-center p-[2px] shadow-2xl overflow-hidden group-hover:border-sky-500 transition-all duration-300">
            <img src={personalInfo.profileImage} alt="Manoj" className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" />
          </div>
          <span className="text-xl font-black tracking-tight hidden sm:block text-white uppercase group-hover:text-sky-400 transition-colors">
            MANOJ <span className="text-slate-500 font-light italic tracking-widest text-sm">CHAUHAN</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-sky-400 transition-colors py-2 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn-primary py-1.5 px-6 text-[10px] font-black uppercase tracking-widest shadow-sky-900/10"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-sky-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-2xl border-b border-slate-700/50 p-8 shadow-2xl md:hidden flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-black uppercase tracking-[0.2em] text-slate-400 hover:text-sky-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary w-full text-center py-3 text-sm font-black uppercase tracking-widest shadow-sky-900/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
