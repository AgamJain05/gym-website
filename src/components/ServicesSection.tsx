'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Zap, Dumbbell, Heart, Users, Target, Activity } from 'lucide-react';

const services = [
  {
    id: '01',
    icon: Dumbbell,
    title: 'STRENGTH TRAINING',
    desc: 'Build raw power and muscle using free weights, barbells, and progressive overload programs.',
    tags: ['Deadlifts', 'Squats', 'Bench Press'],
  },
  {
    id: '02',
    icon: Target,
    title: 'MUSCLE BUILDING',
    desc: 'Hypertrophy-focused training to pack on size and sculpt your physique.',
    tags: ['Hypertrophy', 'Volume', 'Nutrition'],
  },
  {
    id: '03',
    icon: Zap,
    title: 'FAT LOSS',
    desc: 'Strategic cardio and resistance training combined to torch fat while preserving muscle.',
    tags: ['Cardio', 'HIIT', 'Circuit'],
  },
  {
    id: '04',
    icon: Users,
    title: 'PERSONAL TRAINING',
    desc: 'One-on-one sessions with expert trainers. Your goals, your program, your results.',
    tags: ['Custom Plans', '1-on-1', 'Expert Coaching'],
  },
  {
    id: '05',
    icon: Activity,
    title: 'FUNCTIONAL FITNESS',
    desc: 'Train movements that carry over to real life. Build stability, mobility, and power.',
    tags: ['Mobility', 'Athletic', 'Performance'],
  },
  {
    id: '06',
    icon: Heart,
    title: 'WEIGHT MANAGEMENT',
    desc: 'Science-backed approach to reaching and maintaining your ideal body weight.',
    tags: ['Sustainable', 'Holistic', 'Long-term'],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="relative bg-black overflow-hidden" style={{paddingTop:'140px', paddingBottom:'140px'}} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-30" />
        {/* Diagonal band */}
        <div
          className="absolute right-0 top-0 w-[30%] h-full"
          style={{ background: 'linear-gradient(180deg, rgba(198,255,0,0.015) 0%, transparent 100%)' }}
        />
      </div>

      <div className="container-shark relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#C6FF00]" />
              <span className="section-label">03 / Training Programs</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-display text-white"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(48px, 6vw, 88px)',
                lineHeight: 0.92,
              }}
            >
              TRAIN{' '}
              <span className="text-[#C6FF00]">YOUR</span>
              <br />
              WAY.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/50 text-base max-w-xs leading-relaxed md:text-right"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Every program is built around what actually works. No fluff, no filler.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hovered === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 + 0.2 }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative p-6 cursor-pointer transition-all duration-350 ${
                  isHovered
                    ? 'bg-[#0D0D0D] border border-[#C6FF00]/30'
                    : 'bg-[#0D0D0D] border border-white/[0.06]'
                }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 8px 40px rgba(198,255,0,0.08)' : 'none',
                }}
              >
                {/* Corner bracket */}
                <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r transition-colors duration-200 ${isHovered ? 'border-[#C6FF00]' : 'border-white/10'}`} />

                {/* Number */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="num-label"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', letterSpacing: '0.1em', color: isHovered ? '#C6FF00' : 'rgba(198,255,0,0.4)' }}
                  >
                    {service.id}
                  </span>
                  <div
                    className={`w-10 h-10 flex items-center justify-center border transition-all duration-200 ${
                      isHovered ? 'border-[#C6FF00] bg-[#C6FF00]/10' : 'border-white/10 bg-white/[0.03]'
                    }`}
                  >
                    <Icon size={18} color={isHovered ? '#C6FF00' : 'rgba(255,255,255,0.4)'} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`font-condensed font-800 mb-3 transition-colors duration-200 ${isHovered ? 'text-white' : 'text-white/80'}`}
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(20px, 2vw, 26px)',
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-white/40 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] uppercase tracking-widest px-2 py-1 border transition-colors duration-200 ${
                        isHovered ? 'border-[#C6FF00]/30 text-[#C6FF00]/70' : 'border-white/[0.08] text-white/30'
                      }`}
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.15em' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Arrow */}
                <div className={`flex items-center gap-2 transition-all duration-200 ${isHovered ? 'text-[#C6FF00]' : 'text-white/20'}`}>
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.15em', fontSize: '11px' }}
                  >
                    LEARN MORE
                  </span>
                  <ArrowRight size={14} style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s ease' }} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-outline"
          >
            START YOUR PROGRAM <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
