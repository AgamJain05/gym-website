'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const goals = [
  {
    id: '01',
    title: 'WEIGHT LOSS',
    tagline: 'Burn fat. Stay strong.',
    desc: 'Strategic cardio, resistance training, and nutrition habits that create a real calorie deficit without sacrificing muscle.',
    color: '#C6FF00',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4L17 10L24 11L19 16L20 23L14 20L8 23L9 16L4 11L11 10L14 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M14 8L16 12.5L21 13.2L17.5 16.5L18.3 22L14 19.5L9.7 22L10.5 16.5L7 13.2L12 12.5L14 8Z" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
  {
    id: '02',
    title: 'MUSCLE BUILDING',
    tagline: 'Add size. Add strength.',
    desc: 'Progressive overload, volume training, and recovery strategies designed to build real, lasting muscle mass.',
    color: '#C6FF00',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="8" y="8" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="6" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="8" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="20" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: '03',
    title: 'GENERAL FITNESS',
    tagline: 'Move better. Live better.',
    desc: 'A balanced approach to strength, stamina, and mobility. Perfect for building a sustainable fitness lifestyle.',
    color: '#C6FF00',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 4 L14 14 L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: '04',
    title: 'PERFORMANCE',
    tagline: 'Train harder. Go further.',
    desc: 'Athletic conditioning, functional movement, and endurance training for those who want to push their physical ceiling.',
    color: '#C6FF00',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20L10 14L14 18L20 10L24 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 10L24 10L24 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: '05',
    title: 'NUTRITION',
    tagline: 'Fuel your training.',
    desc: 'Guidance on nutrition habits that support your training, recovery, and long-term body composition goals.',
    color: '#C6FF00',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4 Q8 8 8 14 Q8 20 14 24 Q20 20 20 14 Q20 8 14 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <line x1="14" y1="4" x2="14" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4"/>
      </svg>
    ),
  },
];

export default function GoalsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative bg-[#050505] overflow-hidden" style={{paddingTop:'140px', paddingBottom:'140px'}} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle, rgba(198,255,0,0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-shark relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C6FF00]" />
            <span className="section-label">05 / Fitness Goals</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(44px, 6.5vw, 96px)',
              lineHeight: 0.92,
            }}
          >
            <span className="text-white">YOUR GOAL.</span>
            <br />
            <span className="text-[#C6FF00]">YOUR PLAN.</span>
            <br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.25)' }}>
              YOUR PROGRESS.
            </span>
          </motion.h2>
        </div>

        {/* Goals grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              className={`group relative p-6 border border-white/[0.06] bg-[#0D0D0D] hover:border-[#C6FF00]/30 transition-all duration-300 cursor-pointer ${
                i === 1 ? 'lg:mt-8' : ''
              } ${i === 3 ? 'lg:mt-4' : ''}`}
              style={{
                padding: '30px 24px',
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
              }}
            >
              {/* Lime bar top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C6FF00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="text-[#C6FF00] opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                  {goal.icon}
                </div>
                <span
                  className="num-label opacity-40 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', color: '#C6FF00' }}
                >
                  {goal.id}
                </span>
              </div>

              {/* Content */}
              <h3
                className="text-white font-condensed font-800 mb-1 group-hover:text-[#C6FF00] transition-colors duration-200"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(22px, 2.5vw, 28px)',
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                }}
              >
                {goal.title}
              </h3>
              <p
                className="text-[#C6FF00]/60 text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.15em' }}
              >
                {goal.tagline}
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                {goal.desc}
              </p>

              <div className="flex items-center gap-2 text-white/20 group-hover:text-[#C6FF00] transition-colors duration-200">
                <span
                  className="text-[10px] uppercase tracking-widest"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.2em' }}
                >
                  ENQUIRE NOW
                </span>
                <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
