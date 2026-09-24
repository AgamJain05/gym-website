'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative overflow-hidden bg-[#050505]" style={{paddingTop:'160px', paddingBottom:'160px'}} ref={ref}>
      {/* Background geometry */}
      <div className="absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-60" />
        {/* Lime glow center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(198,255,0,0.06) 0%, transparent 70%)',
          }}
        />
        {/* Diagonal lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="100" x2="1440" y2="400" stroke="#C6FF00" strokeWidth="1"/>
          <line x1="0" y1="300" x2="1440" y2="0" stroke="#C6FF00" strokeWidth="0.5"/>
          <line x1="400" y1="0" x2="800" y2="500" stroke="#C6FF00" strokeWidth="0.5"/>
        </svg>
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)' }} />
      </div>

      <div className="container-shark relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-8 h-[1px] bg-[#C6FF00]" />
          <span className="section-label">The Next Step Is Yours</span>
          <div className="w-8 h-[1px] bg-[#C6FF00]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="heading-display mb-4"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(60px, 12vw, 180px)',
            lineHeight: 0.9,
          }}
        >
          <span className="text-white">STOP</span>
          <br />
          <span className="text-[#C6FF00]">WAITING.</span>
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="heading-display mb-12"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(60px, 12vw, 180px)',
            lineHeight: 0.9,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.25)',
          }}
        >
          START TRAINING.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/50 text-base md:text-lg mb-10 max-w-lg mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Your transformation starts the moment you walk through our doors. The Shark Fitness is ready. Are you?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-lime text-base px-10 py-5"
          >
            JOIN THE SHARK FITNESS <ArrowRight size={16} />
          </a>
          <a
            href="tel:+919243344758"
            className="btn-outline text-base px-10 py-5"
          >
            CALL NOW
          </a>
        </motion.div>
      </div>
    </section>
  );
}
