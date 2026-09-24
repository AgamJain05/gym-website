'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

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

          {/* Center: Real Facility Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 w-full max-w-[300px] mx-auto lg:mx-0"
          >
            <div
              className="relative aspect-[3/4] w-full overflow-hidden border border-white/[0.08] group"
              style={{
                clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
              }}
            >
              <Image
                src="https://res.cloudinary.com/dh05cgeok/image/upload/f_auto,q_auto/v1790264446/functional-turf_qvyxzk.png"
                alt="The Shark Fitness Functional Athletic Zone"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30" />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                <div className="flex justify-between items-center">
                  <span
                    className="px-2.5 py-1 bg-black/80 border border-[#C6FF00]/40 text-[#C6FF00] text-[10px] font-mono tracking-widest uppercase"
                  >
                    FACILITY PROVEN
                  </span>
                  <div className="w-2.5 h-2.5 bg-[#C6FF00]" />
                </div>

                <div>
                  <div
                    className="text-white font-display text-3xl leading-none mb-1"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    THE SHARK
                  </div>
                  <div
                    className="text-[#C6FF00] font-display text-xl tracking-widest"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    EXPERIENCE
                  </div>
                  <p className="text-white/60 text-xs mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Olympic platforms, turf &amp; personalized coaching
                  </p>
                </div>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C6FF00] z-20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C6FF00] z-20 pointer-events-none" />
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
      className={`group flex gap-5 items-start border border-white/[0.08] bg-[#0C0C0C] hover:border-[#C6FF00]/40 hover:bg-[#111111] transition-all duration-300 ${
        align === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left'
      }`}
      style={{ padding: '24px 22px' }}
    >
      {/* Lime circle */}
      <div className="flex-shrink-0 w-11 h-11 rounded-none border border-[#C6FF00]/30 flex items-center justify-center group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00]/10 transition-all duration-200">
        <span
          className="text-[#C6FF00] font-display text-base"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}
        >
          {reason.id}
        </span>
      </div>
      <div className="flex-1">
        <h3
          className="text-white font-condensed font-700 mb-2 group-hover:text-[#C6FF00] transition-colors duration-200"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.04em' }}
        >
          {reason.title}
        </h3>
        <p
          className="text-white/60 text-sm leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}
        >
          {reason.desc}
        </p>
      </div>
    </motion.div>
  );
}
