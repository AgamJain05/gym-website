'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, CheckCircle2, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  badge: string;
  timeAgo: string;
  rating: number;
  highlight: string;
  quote: string;
  tag: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Prabhat Rajput',
    badge: 'Local Guide · 8 reviews · 4 photos',
    timeAgo: '7 months ago',
    rating: 5,
    highlight: 'Best gym in Indore 😅🔥',
    quote:
      'Solid gym with great equipment and a motivating atmosphere! Clean facilities, helpful staff, and a good vibe overall. 100% I recommend to friends!',
    tag: 'Cleanliness & Atmosphere',
  },
  {
    name: 'Girikshit Hargod',
    badge: '4 reviews · 1 photo',
    timeAgo: '6 months ago',
    rating: 5,
    highlight: 'Huge, never feels crowded & top-tier owner',
    quote:
      'Great gym with a fantastic atmosphere. It’s huge, never feels crowded, and the owner is a top-tier guy. If you want a friendly environment to hit your goals, this is it.',
    tag: 'Spacious & Friendly',
  },
  {
    name: 'BRICx',
    badge: 'Local Guide · 16 reviews',
    timeAgo: '6 months ago',
    rating: 5,
    highlight: 'Trainers treat you like your own brother',
    quote:
      'I joined around 2 months ago and the environment is amazing, and the trainers are like best — they treat you like your own brother, also the owner. Equipment are best like always. If you live around Bengali Square, Mangal Nagar, Bijli Nagar, or Scheme No 140, you must visit The Shark Fitness.',
    tag: 'Scheme 140 & Community',
  },
  {
    name: 'SHIVANI HARGOD',
    badge: '5 reviews',
    timeAgo: '6 months ago',
    rating: 5,
    highlight: 'Really good environment for all fitness levels',
    quote:
      'Love the energy here. It’s clean, spacious and has a really good environment for all fitness levels. The owner makes an effort to say hello and ensure everyone is happy.',
    tag: 'All Fitness Levels',
  },
  {
    name: 'lucky paryani',
    badge: '3 reviews',
    timeAgo: '10 months ago',
    rating: 5,
    highlight: 'Brand-new machines & hot and cold ice bath tub 🤩',
    quote:
      'The infrastructure is very good and premium as well. Brand-new machines. A different concept is hot and cold - ice bath tub so overall very good experience.',
    tag: 'Recovery & Ice Bath',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews"
      className="relative bg-[#050505] overflow-hidden"
      style={{ paddingTop: '140px', paddingBottom: '140px' }}
      ref={ref}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(198,255,0,0.04) 0%, transparent 70%)',
          }}
        />
        {/* Large Decorative Number */}
        <div
          className="absolute right-8 top-12 font-display text-[180px] md:text-[280px] leading-none select-none pointer-events-none opacity-20"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(198,255,0,0.2)',
          }}
        >
          5.0
        </div>
      </div>

      <div className="container-shark relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#C6FF00]" />
              <span className="section-label">07 / Google Verified Reviews</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-display"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(44px, 6vw, 84px)',
                lineHeight: 0.92,
              }}
            >
              <span className="text-white">PROVEN BY</span>
              <br />
              <span className="text-[#C6FF00]">REAL RESULTS.</span>
              <br />
              <span className="text-white/40">VERIFIED MEMBERS.</span>
            </motion.h2>
          </div>

          {/* Google Rating Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-6 border border-white/[0.08] bg-[#0A0A0A] flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
            }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#C6FF00]/10 border border-[#C6FF00]/30 flex items-center justify-center">
                <Award size={28} className="text-[#C6FF00]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#C6FF00" className="text-[#C6FF00]" />
                  ))}
                  <span
                    className="ml-2 font-display text-2xl text-white tracking-wide"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    4.9 / 5.0
                  </span>
                </div>
                <div
                  className="text-white/50 text-xs tracking-wider uppercase"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.12em' }}
                >
                  Indore&apos;s Highest Rated Gym · Google Reviews
                </div>
              </div>
            </div>

            <div className="h-8 w-[1px] bg-white/[0.1] hidden sm:block" />

            <div className="text-white/40 text-xs leading-relaxed max-w-[220px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Real reviews from athletes, beginners, and lifters in Bijli Nagar & Scheme 140.
            </div>
          </motion.div>
        </div>

        {/* Featured Testimonial Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mb-12 p-8 md:p-12 border border-[#C6FF00]/20 bg-gradient-to-br from-[#0F0F0F] via-[#0A0A0A] to-[#050505] overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
          }}
        >
          {/* Subtle Corner Brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C6FF00]" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C6FF00]" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-[#C6FF00] text-xs uppercase tracking-widest font-condensed font-700">
                <CheckCircle2 size={13} /> {TESTIMONIALS[activeIndex].tag}
              </span>
              <span className="text-white/30 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                {TESTIMONIALS[activeIndex].timeAgo}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className="w-10 h-10 border border-white/10 hover:border-[#C6FF00] hover:text-[#C6FF00] text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-white/40 text-xs px-2 font-mono">
                0{activeIndex + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className="w-10 h-10 border border-white/10 hover:border-[#C6FF00] hover:text-[#C6FF00] text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative z-10 max-w-4xl">
            <Quote size={48} className="text-[#C6FF00]/20 mb-4" />
            <h3
              className="text-white font-condensed text-2xl md:text-3xl font-700 mb-4 leading-tight tracking-wide"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}
            >
              &ldquo;{TESTIMONIALS[activeIndex].highlight}&rdquo;
            </h3>
            <p
              className="text-white/75 text-base md:text-xl leading-relaxed mb-8 font-light"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {TESTIMONIALS[activeIndex].quote}
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
              <div className="w-12 h-12 rounded-none bg-[#161616] border border-[#C6FF00]/40 flex items-center justify-center text-[#C6FF00] font-display text-xl">
                {TESTIMONIALS[activeIndex].name.charAt(0)}
              </div>
              <div>
                <div
                  className="text-white font-bold text-base tracking-wide"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {TESTIMONIALS[activeIndex].name}
                </div>
                <div className="text-white/40 text-xs flex items-center gap-2">
                  <span>{TESTIMONIALS[activeIndex].badge}</span>
                  <span>•</span>
                  <span className="text-[#C6FF00]">Google Review</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4-Card Grid for Quick Scanning */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.slice(0, 4).map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * idx + 0.4 }}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                activeIndex === idx
                  ? 'border-[#C6FF00] bg-[#111111] shadow-[0_0_25px_rgba(198,255,0,0.1)]'
                  : 'border-white/[0.06] bg-[#0A0A0A] hover:border-white/20 hover:bg-[#0E0E0E]'
              }`}
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#C6FF00" className="text-[#C6FF00]" />
                  ))}
                  <span className="text-white/30 text-[11px] ml-1">{item.timeAgo}</span>
                </div>

                <p
                  className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div
                    className="text-white text-xs font-semibold uppercase tracking-wider"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.08em' }}
                  >
                    {item.name}
                  </div>
                  <div className="text-white/30 text-[10px]">Verified Member</div>
                </div>
                <span className="text-[10px] uppercase font-mono text-[#C6FF00]/80 px-2 py-0.5 border border-[#C6FF00]/20 bg-[#C6FF00]/5">
                  {item.tag.split(' ')[0]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
