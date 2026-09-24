'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    id: '01',
    title: 'EXPERT GUIDANCE',
    desc: 'Train with knowledgeable coaches who ensure you train correctly, safely, and effectively.',
    side: 'left',
  },
  {
    id: '02',
    title: 'MODERN EQUIPMENT',
    desc: 'Access equipment designed to support serious, progressive training at every level.',
    side: 'left',
  },
  {
    id: '03',
    title: 'PERSONALIZED TRAINING',
    desc: 'Programs designed around your individual goals, fitness level, and schedule.',
    side: 'left',
  },
  {
    id: '04',
    title: 'RESULTS-FOCUSED',
    desc: 'Every session is designed around measurable, meaningful improvement.',
    side: 'right',
  },
  {
    id: '05',
    title: 'SUPPORTIVE COMMUNITY',
    desc: 'Train alongside people who push themselves — and each other — every day.',
    side: 'right',
  },
  {
    id: '06',
    title: 'FLEXIBLE SCHEDULE',
    desc: 'Open 6AM to 11PM, Monday to Saturday. Train when it works for you.',
    side: 'right',
  },
];

export default function WhyShark() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const leftReasons = reasons.filter((r) => r.side === 'left');
  const rightReasons = reasons.filter((r) => r.side === 'right');

  return (
    <section className="relative bg-[#080808] overflow-hidden" style={{paddingTop:'140px', paddingBottom:'140px'}} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(198,255,0,0.03) 0%, transparent 60%)',
          }}
        />
        {/* Large faint background text */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display select-none pointer-events-none whitespace-nowrap"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(80px, 18vw, 260px)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.015)',
            letterSpacing: '0.05em',
          }}
        >
          SHARK
        </div>
      </div>

      <div className="container-shark relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C6FF00]" />
            <span className="section-label">04 / Why Us</span>
            <div className="w-8 h-[1px] bg-[#C6FF00]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-white"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(40px, 6vw, 80px)',
              lineHeight: 0.92,
            }}
          >
            WHY{' '}
            <span className="text-[#C6FF00]">THE SHARK FITNESS</span>
            <br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.3)',
              }}
            >
              IS YOUR RIGHT FIT.
            </span>
          </motion.h2>
        </div>

        {/* Three-column layout: reasons | image | reasons */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Left reasons */}
          <div className="flex flex-col gap-6">
            {leftReasons.map((reason, i) => (
              <ReasonCard key={reason.id} reason={reason} inView={inView} delay={i * 0.1 + 0.2} align="right" />
            ))}
          </div>

          {/* Center: Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-shrink-0 w-full max-w-[280px] mx-auto lg:mx-0"
          >
            <div
              className="relative aspect-[3/4] w-full overflow-hidden"
              style={{
                clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
              }}
            >
              {/* Abstract athlete visual */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, #0D0D0D 0%, #080808 60%, #050505 100%)',
                }}
              />
              <div className="bg-grid absolute inset-0" />

              {/* Central graphic */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Shark fin silhouette shape */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-32 h-32 mb-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Abstract fin-inspired shape */}
                  <path
                    d="M100 180 L30 180 L30 120 Q30 40 100 20 Q110 60 140 100 L180 80 L160 180 Z"
                    fill="rgba(198,255,0,0.08)"
                    stroke="#C6FF00"
                    strokeWidth="1"
                  />
                  <path
                    d="M100 180 L60 180 L60 140 Q60 80 100 60 Q115 90 130 120 L150 110 L140 180 Z"
                    fill="rgba(198,255,0,0.06)"
                    stroke="#C6FF00"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  {/* Diagonal slashes */}
                  <line x1="40" y1="180" x2="100" y2="20" stroke="#C6FF00" strokeWidth="0.5" strokeOpacity="0.3" />
                  <line x1="60" y1="180" x2="140" y2="60" stroke="#C6FF00" strokeWidth="0.3" strokeOpacity="0.2" />
                </svg>

                <div
                  className="text-[#C6FF00] font-display text-center"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.1em', lineHeight: 1 }}
                >
                  THE SHARK
                </div>
                <div
                  className="text-white/20 text-xs uppercase tracking-widest mt-2"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}
                >
                  Indore, MP
                </div>

                {/* Replace with athlete photo */}
                <div
                  className="mt-6 text-white/15 text-[10px] text-center uppercase tracking-widest"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}
                >
                  Add trainer photo here
                </div>
              </div>

              {/* Lime glow bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{ background: 'linear-gradient(to top, rgba(198,255,0,0.06), transparent)' }}
              />
            </div>
          </motion.div>

          {/* Right reasons */}
          <div className="flex flex-col gap-6">
            {rightReasons.map((reason, i) => (
              <ReasonCard key={reason.id} reason={reason} inView={inView} delay={i * 0.1 + 0.35} align="left" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  inView,
  delay,
  align,
}: {
  reason: { id: string; title: string; desc: string };
  inView: boolean;
  delay: number;
  align: 'left' | 'right';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'right' ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay }}
      className={`group flex gap-4 items-start p-5 border border-white/[0.06] bg-[#0D0D0D]/50 hover:border-[#C6FF00]/30 hover:bg-[#0D0D0D] transition-all duration-300 ${
        align === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left'
      }`}
    >
      {/* Lime circle */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#C6FF00]/30 flex items-center justify-center group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00]/10 transition-all duration-200">
        <span
          className="text-[#C6FF00] font-display text-sm"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}
        >
          {reason.id}
        </span>
      </div>
      <div className="flex-1">
        <h3
          className="text-white font-condensed font-700 mb-1 group-hover:text-[#C6FF00] transition-colors duration-200"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '16px', letterSpacing: '0.05em' }}
        >
          {reason.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          {reason.desc}
        </p>
      </div>
    </motion.div>
  );
}
