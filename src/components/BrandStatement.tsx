'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const useReveal = (threshold = 0.2) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return { ref, inView };
};

export default function BrandStatement() {
  const { ref, inView } = useReveal();

  return (
    <section id="about" className="relative bg-[#050505] overflow-hidden" style={{paddingTop: '120px', paddingBottom: '120px'}} ref={ref}>
      {/* Background geometry */}
      <div className="absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div
          className="absolute right-0 top-0 w-[50%] h-full"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(198,255,0,0.02) 50%, transparent 100%)',
          }}
        />
        {/* Large faint number */}
        <div
          className="absolute top-8 right-8 font-display text-[200px] md:text-[320px] leading-none select-none pointer-events-none"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.03)',
          }}
        >
          02
        </div>
      </div>

      <div className="container-shark relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-[1px] bg-[#C6FF00]" />
              <span className="section-label">02 / Brand Statement</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-display text-white mb-8"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(48px, 7vw, 96px)',
                lineHeight: 0.92,
              }}
            >
              WHERE{' '}
              <span className="text-[#C6FF00]">DISCIPLINE</span>
              <br />
              MEETS
              <br />
              TRANSFORMATION.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lime-line-left mb-8"
            >
              <p className="text-white/60 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                The Shark Fitness isn&apos;t just a gym — it&apos;s a training ground. Built in the heart of Indore for people who take their fitness seriously, we provide the environment, equipment, and expertise you need to push past your limits.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-white/50 text-base leading-relaxed mb-10"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Whether you&apos;re just starting out or pushing your personal best, our community, coaching, and facility are built around one goal: your transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {['Strength', 'Conditioning', 'Personal Training', 'Nutrition', 'Community'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-white/10 text-white/50 text-xs uppercase tracking-widest hover:border-[#C6FF00]/40 hover:text-[#C6FF00] transition-colors duration-200"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.15em' }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual composition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            {/* Real gym photo showcase */}
            <div
              className="relative w-full aspect-[4/5] overflow-hidden group"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
              }}
            >
              <Image
                src="https://res.cloudinary.com/dh05cgeok/image/upload/f_auto,q_auto/v1790264446/strength-cables_e13hsd.png"
                alt="The Shark Fitness Cable and Strength Zone"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark athletic vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30" />

              {/* Top watermark badge */}
              <div className="absolute top-5 left-5 z-10">
                <span
                  className="px-3 py-1 bg-black/80 border border-[#C6FF00]/40 text-[#C6FF00] text-[11px] font-condensed font-700 tracking-widest uppercase backdrop-blur-sm"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  JERAI PERFORMANCE APPARATUS · INDORE
                </span>
              </div>

              {/* Bottom text overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div
                  className="text-white font-display text-2xl md:text-3xl tracking-wide leading-none mb-1"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  ENGINEERED FOR PEAK OUTPUT
                </div>
                <p className="text-white/60 text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Multi-cable stacks, heavy Olympic bars, and pristine biometric machines.
                </p>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#C6FF00] z-20 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#C6FF00] z-20 pointer-events-none" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-[#121212] border border-[#C6FF00]/20 p-5"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            >
              <div className="section-label mb-1">LOCATION</div>
              <div className="text-white font-condensed font-700 text-base" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>
                Bijli Nagar, Indore
              </div>
              <div className="text-white/40 text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                Madhya Pradesh
              </div>
            </motion.div>

            {/* Top-right float */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-[#C6FF00] p-4"
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
            >
              <div className="text-black font-display text-3xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                6AM
              </div>
              <div className="text-black/70 text-[10px] uppercase tracking-widest" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>
                Opens Daily
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
