import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-x-hidden selection:bg-sky-500/30 selection:text-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-sky-500 z-50 origin-[0%]"
        style={{ scaleX }}
      />

      {/* Elegant Background Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sky-900/10 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-slate-800/20 blur-[120px]" />
      </div>

      <Navbar />
      
      <main className="container max-w-6xl mx-auto px-6 sm:px-8 space-y-24 md:space-y-32 py-24 md:py-32">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="py-12 text-center text-slate-500 border-t border-slate-800/50">
        <p className="text-sm font-medium tracking-tight">© {new Date().getFullYear()} Manoj Chauhan • Full Stack Development</p>
      </footer>
    </div>
  );
}

export default App;
