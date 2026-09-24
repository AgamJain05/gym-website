'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative bg-black overflow-hidden" style={{paddingTop:'160px', paddingBottom:'160px'}} ref={ref}>
      {/* Full-bleed geometric background */}
      <div className="absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-60" />
        {/* Diagonal split visual */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #080808 40%, #050505 70%, #000000 100%)',
          }}
        />
        {/* Large lime glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(198,255,0,0.05) 0%, transparent 65%)',
          }}
        />
        {/* Diagonal SVG lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="1440" y2="700" stroke="#C6FF00" strokeWidth="1"/>
          <line x1="0" y1="350" x2="1440" y2="0" stroke="#C6FF00" strokeWidth="0.5"/>
          <line x1="720" y1="0" x2="720" y2="700" stroke="#C6FF00" strokeWidth="0.3"/>
          <circle cx="720" cy="350" r="280" fill="none" stroke="#C6FF00" strokeWidth="0.5"/>
          <circle cx="720" cy="350" r="180" fill="none" stroke="#C6FF00" strokeWidth="0.3" strokeDasharray="8 8"/>
        </svg>
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.7) 100%)' }} />
      </div>

      <div className="container-shark relative z-10 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="w-8 h-[1px] bg-[#C6FF00]" />
          <span className="section-label">Our Philosophy</span>
          <div className="w-8 h-[1px] bg-[#C6FF00]" />
        </motion.div>

        {/* Main statement */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="heading-display max-w-5xl mx-auto mb-8"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(40px, 7vw, 110px)',
            lineHeight: 0.92,
          }}
        >
          <span className="text-white">WE DON&apos;T JUST</span>
          <br />
          <span className="text-white">BUILD </span>
          <span className="text-[#C6FF00]">BODIES.</span>
          <br />
          <span
            style={{
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.3)',
            }}
          >
            WE BUILD DISCIPLINE.
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          At The Shark Fitness, we believe transformation is built in the decisions you make every day. Consistency beats intensity. Discipline builds character. And real results come from showing up — not once, but every single day.
        </motion.p>

        {/* Two floating feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            {
              title: 'BUILT FOR YOU',
              desc: 'Every member gets a personalized approach to training. Your body, your goals, your pace.',
              delay: 0.5,
            },
            {
              title: 'BUILT FOR RESULTS',
              desc: 'We focus on measurable progress. Not motivation, not aesthetics — real, lasting results.',
              delay: 0.65,
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: card.delay }}
              className="relative p-8 border border-white/[0.08] border-t-2 border-t-[#C6FF00] bg-[#0E0E0E] text-left hover:border-[#C6FF00]/40 transition-all duration-300 group shadow-lg"
              style={{ padding: '32px 28px' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 bg-[#C6FF00]" />
                <span className="text-[#C6FF00] text-[11px] font-mono tracking-widest uppercase">
                  PHILOSOPHY
                </span>
              </div>
              <h3
                className="text-white font-condensed font-700 mb-3 group-hover:text-[#C6FF00] transition-colors duration-200"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '24px', letterSpacing: '0.04em' }}
              >
                {card.title}
              </h3>
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
