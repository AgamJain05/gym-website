'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const HERO_HEADLINES = ['TRAIN HARD.', 'LIVE STRONG.', 'STAY SHARK.'];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % HERO_HEADLINES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 60, skewY: 4 },
    visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const scrollToNext = () => {
    const el = document.getElementById('marquee');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Background: Geometric Abstract */}
      <div className="absolute inset-0 z-0">
        {/* Dark base */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-100" />

        {/* Lime atmospheric glow */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(198,255,0,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(198,255,0,0.05) 0%, transparent 70%)',
          }}
        />

        {/* Diagonal geometric lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="200" x2="1440" y2="600" stroke="#C6FF00" strokeWidth="1" />
          <line x1="0" y1="400" x2="1440" y2="900" stroke="#C6FF00" strokeWidth="0.5" />
          <line x1="400" y1="0" x2="1200" y2="900" stroke="#C6FF00" strokeWidth="0.5" />
          <line x1="1100" y1="0" x2="200" y2="900" stroke="#C6FF00" strokeWidth="0.5" />
          <circle cx="1200" cy="150" r="200" fill="none" stroke="#C6FF00" strokeWidth="0.5" />
          <circle cx="1200" cy="150" r="350" fill="none" stroke="#C6FF00" strokeWidth="0.3" />
          <polygon points="100,800 250,600 350,800" fill="none" stroke="#C6FF00" strokeWidth="0.5" />
        </svg>

        {/* Dark vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-shark w-full pt-48 pb-16 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline + CTA */}
            <div>
              {/* Section label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-[1px] bg-[#C6FF00]" />
                <span className="section-label">01 / Indore&apos;s Premium Gym</span>
              </motion.div>

              {/* Main headline */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mb-6"
              >
                <motion.div variants={lineVariants} className="overflow-hidden">
                  <h1
                    className="heading-display text-white"
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 'clamp(72px, 10vw, 140px)',
                      lineHeight: 0.9,
                    }}
                  >
                    GET
                    <span className="text-[#C6FF00]"> FIT.</span>
                  </h1>
                </motion.div>
                <motion.div variants={lineVariants} className="overflow-hidden">
                  <h1
                    className="heading-display text-white"
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 'clamp(72px, 10vw, 140px)',
                      lineHeight: 0.9,
                    }}
                  >
                    GET STRONG.
                  </h1>
                </motion.div>
                <motion.div variants={lineVariants} className="overflow-hidden">
                  <h1
                    className="heading-display"
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 'clamp(72px, 10vw, 140px)',
                      lineHeight: 0.9,
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                    }}
                  >
                    UNSTOPPABLE.
                  </h1>
                </motion.div>
              </motion.div>

              {/* Supporting copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-white/60 text-base md:text-lg mb-10 max-w-md leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                A place built for people who are serious about becoming stronger, fitter and better every day. Welcome to The Shark Fitness, Indore.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-lime"
                >
                  JOIN NOW <ArrowRight size={16} />
                </a>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-outline"
                >
                  EXPLORE THE GYM
                </a>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex gap-8 mt-12 pt-8 border-t border-white/[0.07]"
              >
                {[
                  { num: '500+', label: 'Active Members' },
                  { num: '6AM', label: 'Opens Daily' },
                  { num: '10+', label: 'Fitness Programs' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-[#C6FF00] font-display text-3xl"
                      style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}
                    >
                      {stat.num}
                    </div>
                    <div
                      className="text-white/40 text-xs uppercase tracking-widest mt-1"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.15em' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Fitness HUD */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:flex justify-end"
            >
              <FitnessHUD />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-[#C6FF00] transition-colors duration-200 cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest font-condensed" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.2em', fontSize: '10px' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}

function FitnessHUD() {
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(64);
      setStreak(7);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-sm animate-float">
      {/* Main HUD card */}
      <div
        className="bg-black/70 backdrop-blur-xl border border-white/10 p-6 relative overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
        }}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C6FF00]" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C6FF00]" />

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="section-label mb-1">TODAY&apos;S GOAL</div>
            <div
              className="text-white font-display text-4xl"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}
            >
              750 <span className="text-[#C6FF00] text-2xl">KCAL</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border border-[#C6FF00]/30 flex items-center justify-center animate-pulse-lime">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L13.5 8.5L20 9.27L15 14.14L16.18 20.73L11 17.77L5.82 20.73L7 14.14L2 9.27L8.5 8.5L11 2Z" fill="#C6FF00" />
            </svg>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/40 text-xs uppercase tracking-wider" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}>PROGRESS</span>
            <span className="text-[#C6FF00] font-condensed font-700 text-sm" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>
              {progress}% COMPLETE
            </span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#C6FF00] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.5, delay: 1.2, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'TRAINING INTENSITY', value: 'HIGH', color: '#C6FF00' },
            { label: 'WORKOUT STREAK', value: `${streak} DAYS`, color: '#fff' },
            { label: 'SESSIONS / WEEK', value: '5', color: '#fff' },
            { label: 'STATUS', value: 'ACTIVE', color: '#C6FF00' },
          ].map((metric) => (
            <div
              key={metric.label}
              className="bg-white/[0.03] border border-white/[0.06] p-3"
              style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 100% 100%, 0 100%)' }}
            >
              <div className="text-white/30 text-[9px] uppercase tracking-widest mb-1 font-condensed" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}>
                {metric.label}
              </div>
              <div
                className="font-condensed font-700 text-sm"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, color: metric.color }}
              >
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C6FF00] animate-pulse" />
          <span className="text-white/30 text-[10px] uppercase tracking-widest" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}>
            ILLUSTRATIVE METRICS
          </span>
        </div>
      </div>

      {/* Floating mini card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -bottom-6 -left-8 bg-[#C6FF00] px-4 py-3"
        style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
      >
        <div className="text-black font-display text-xs" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em' }}>
          MEMBERS TRAINING
        </div>
        <div className="text-black font-display text-2xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          120+ TODAY
        </div>
      </motion.div>
    </div>
  );
}
