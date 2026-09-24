'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Dumbbell, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const heroLines = [
  {
    eyebrow: '01 / THE SHARK FITNESS',
    line1: 'GET',
    line2: 'FIT.',
    line3: 'GET STRONG.',
    line4: 'STAY SHARK.',
  },
  {
    eyebrow: '01 / THE SHARK FITNESS',
    line1: 'TRAIN',
    line2: 'HARD.',
    line3: 'LIVE STRONG.',
    line4: 'STAY SHARK.',
  },
  {
    eyebrow: '01 / THE SHARK FITNESS',
    line1: 'BUILD',
    line2: 'POWER.',
    line3: 'BUILD DISCIPLINE.',
    line4: 'STAY SHARK.',
  },
];

export default function HeroSection() {
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroLines.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 82;
    const top =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth',
    });
  };

  const hero = heroLines[activeHero];

  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#030303]
        text-white
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base */}
        <div className="absolute inset-0 bg-[#030303]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)',
          }}
        />

        {/* Lime glow */}
        <div
          className="
            absolute
            -top-[20%]
            right-[-12%]
            w-[700px]
            h-[700px]
            rounded-full
            blur-[100px]
            opacity-20
          "
          style={{
            background:
              'radial-gradient(circle, rgba(198,255,0,0.22) 0%, rgba(198,255,0,0) 68%)',
          }}
        />

        <div
          className="
            absolute
            bottom-[-25%]
            left-[-10%]
            w-[520px]
            h-[520px]
            rounded-full
            blur-[100px]
            opacity-10
          "
          style={{
            background:
              'radial-gradient(circle, rgba(198,255,0,0.25) 0%, rgba(198,255,0,0) 70%)',
          }}
        />

        {/* Large diagonal lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="0"
            y1="760"
            x2="1440"
            y2="170"
            stroke="#C6FF00"
            strokeWidth="1"
          />
          <line
            x1="150"
            y1="900"
            x2="1440"
            y2="360"
            stroke="#C6FF00"
            strokeWidth="0.5"
          />
          <circle
            cx="1210"
            cy="150"
            r="210"
            fill="none"
            stroke="#C6FF00"
            strokeWidth="0.5"
          />
          <circle
            cx="1210"
            cy="150"
            r="330"
            fill="none"
            stroke="#C6FF00"
            strokeWidth="0.35"
          />
          <polygon
            points="70,760 250,530 365,760"
            fill="none"
            stroke="#C6FF00"
            strokeWidth="0.5"
          />
        </svg>

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-48
          "
          style={{
            background:
              'linear-gradient(to top, #030303 0%, rgba(3,3,3,0) 100%)',
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div
        className="
          relative
          z-10
          min-h-[100svh]
          container-shark
          flex
          flex-col
          pt-[220px]
          lg:pt-[260px]
          pb-[160px]
        "
      >
        <div
          className="
            w-full
            my-auto
            grid
            grid-cols-1
            lg:grid-cols-[1.08fr_0.92fr]
            gap-12
            xl:gap-20
            items-center
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="relative z-20 max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="block w-10 h-px bg-[#C6FF00]" />

              <span
                className="
                  text-[10px]
                  sm:text-[11px]
                  uppercase
                  tracking-[0.24em]
                  text-white/50
                  font-semibold
                "
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                }}
              >
                {hero.eyebrow}
              </span>

              <span className="text-[#C6FF00] text-[10px]">
                IND
              </span>
            </motion.div>

            {/* =================================================
                ANIMATED HEADLINE
            ================================================== */}
            <div className="relative min-h-[330px] sm:min-h-[390px] lg:min-h-[430px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHero}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <HeroHeadline hero={hero} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
              className="
                max-w-xl
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-white/55
                mt-6
              "
              style={{
                fontFamily: 'Inter, sans-serif',
              }}
            >
              A serious training environment for people who want to become
              stronger, fitter and more disciplined.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.55,
              }}
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
                mt-8
              "
            >
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  h-14
                  px-7
                  bg-[#C6FF00]
                  text-black
                  text-xs
                  font-bold
                  tracking-[0.16em]
                  uppercase
                  transition-all
                  duration-300
                  hover:bg-[#d5ff45]
                  hover:-translate-y-0.5
                "
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                }}
              >
                JOIN NOW

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('gallery')}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  h-14
                  px-7
                  border
                  border-white/15
                  bg-white/[0.02]
                  text-white
                  text-xs
                  font-bold
                  tracking-[0.16em]
                  uppercase
                  transition-all
                  duration-300
                  hover:border-[#C6FF00]/60
                  hover:text-[#C6FF00]
                  hover:bg-white/[0.04]
                "
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                }}
              >
                EXPLORE THE GYM

                <ArrowDownRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-[-10deg]
                  "
                />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.85,
                duration: 0.7,
              }}
              className="
                grid
                grid-cols-3
                max-w-2xl
                mt-12
                pt-8
                border-t
                border-white/[0.08]
              "
            >
              <HeroStat value="01" label="GOAL" />
              <HeroStat value="24/7" label="DISCIPLINE" />
              <HeroStat value="IND" label="LOCATION" />
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}
          <div className="relative hidden lg:flex min-h-[620px] items-center justify-center">
            {/* Giant SHARK watermark */}
            <div
              className="
                absolute
                right-[-10%]
                top-1/2
                -translate-y-1/2
                text-[210px]
                xl:text-[260px]
                leading-none
                font-bold
                text-white/[0.018]
                select-none
                whitespace-nowrap
              "
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                letterSpacing: '-0.03em',
              }}
            >
              SHARK
            </div>

            {/* Main visual frame */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.35,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                w-[390px]
                xl:w-[440px]
                h-[540px]
                xl:h-[590px]
              "
            >
              {/* Outer technical frame */}
              <div className="absolute inset-0 border border-white/10" />

              <div className="absolute -top-2 -left-2 w-14 h-14 border-t-2 border-l-2 border-[#C6FF00]" />
              <div className="absolute -bottom-2 -right-2 w-14 h-14 border-b-2 border-r-2 border-[#C6FF00]" />

              {/* Placeholder visual surface
                  Replace this with the actual Shark Fitness image */}
              <div
                className="
                  absolute
                  inset-4
                  overflow-hidden
                  bg-[#101010]
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at 70% 25%,
                        rgba(198,255,0,0.18),
                        transparent 28%
                      ),
                      linear-gradient(
                        145deg,
                        rgba(255,255,255,0.03),
                        transparent 48%
                      ),
                      linear-gradient(
                        180deg,
                        #161616 0%,
                        #070707 100%
                      )
                    `,
                  }}
                />

                {/* Abstract athlete silhouette */}
                <div
                  className="
                    absolute
                    left-1/2
                    bottom-0
                    -translate-x-1/2
                    w-[260px]
                    h-[430px]
                    opacity-20
                    blur-[1px]
                  "
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(198,255,0,0.35) 0%, rgba(198,255,0,0.08) 30%, transparent 68%)',
                  }}
                />

                {/* Vertical technical line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/[0.05]" />

                {/* Visual number */}
                <div
                  className="
                    absolute
                    bottom-8
                    left-8
                    text-[130px]
                    leading-none
                    text-white/[0.06]
                  "
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                  }}
                >
                  01
                </div>

                {/* Label */}
                <div className="absolute left-7 top-7">
                  <div
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      text-[#C6FF00]
                      mb-2
                    "
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                    }}
                  >
                    PERFORMANCE / 001
                  </div>

                  <div
                    className="
                      text-2xl
                      uppercase
                      text-white
                    "
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                    }}
                  >
                    TRAIN HARD.
                  </div>
                </div>
              </div>

              {/* Floating information card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  left-[-70px]
                  bottom-12
                  w-[190px]
                  bg-[#0b0b0b]/95
                  backdrop-blur-xl
                  border
                  border-white/10
                  p-4
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-white/35
                    "
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                    }}
                  >
                    TRAINING MODE
                  </div>

                  <Zap
                    size={13}
                    className="text-[#C6FF00]"
                  />
                </div>

                <div
                  className="
                    text-3xl
                    mt-2
                    text-white
                  "
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                  }}
                >
                  FULL POWER
                </div>

                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className={`
                        h-1.5
                        flex-1
                        ${i < 6
                          ? 'bg-[#C6FF00]'
                          : 'bg-white/10'
                        }
                      `}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating icon */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  right-[-28px]
                  top-20
                  w-14
                  h-14
                  bg-[#C6FF00]
                  text-black
                  flex
                  items-center
                  justify-center
                "
              >
                <Dumbbell size={21} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM SCROLL / SLIDE INDICATOR
      ========================================================== */}
      <div
        className="
          absolute
          left-0
          right-0
          bottom-5
          z-20
          container-shark
          flex
          items-end
          justify-between
          pointer-events-none
        "
      >
        <div
          className="
            hidden
            sm:block
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-white/25
          "
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
          }}
        >

        </div>

        <button
          type="button"
          onClick={() => scrollTo('marquee')}
          className="
            pointer-events-auto
            flex
            items-center
            gap-3
            text-white/35
            hover:text-[#C6FF00]
            transition-colors
          "
          aria-label="Scroll to next section"
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
            "
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
            }}
          >
            SCROLL
          </span>

          <ArrowRight
            size={15}
            className="rotate-90"
          />
        </button>

        {/* Hero slide indicator */}
        <div className="hidden sm:flex items-center gap-2">
          {heroLines.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveHero(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`
                h-[2px]
                transition-all
                duration-300
                ${activeHero === index
                  ? 'w-8 bg-[#C6FF00]'
                  : 'w-3 bg-white/20 hover:bg-white/50'
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   HEADLINE
============================================================= */

function HeroHeadline({
  hero,
}: {
  hero: (typeof heroLines)[number];
}) {
  return (
    <h1
      className="
        uppercase
        font-bold
        tracking-[-0.025em]
      "
      style={{
        fontFamily: 'Bebas Neue, sans-serif',
      }}
    >
      <span
        className="
          block
          text-[clamp(72px,11vw,150px)]
          leading-[0.78]
          text-white
        "
      >
        {hero.line1}
      </span>

      <span
        className="
          block
          text-[clamp(86px,13vw,175px)]
          leading-[0.78]
          text-[#C6FF00]
        "
      >
        {hero.line2}
      </span>

      <span
        className="
          block
          mt-2
          text-[clamp(48px,7vw,100px)]
          leading-[0.82]
          text-white
        "
      >
        {hero.line3}
      </span>

      <span
        className="
          block
          mt-2
          text-[clamp(48px,7vw,100px)]
          leading-[0.82]
          text-transparent
        "
        style={{
          WebkitTextStroke:
            '1px rgba(255,255,255,0.42)',
        }}
      >
        {hero.line4}
      </span>
    </h1>
  );
}

/* =============================================================
   STAT
============================================================= */

function HeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <div
        className="
          text-2xl
          sm:text-3xl
          text-[#C6FF00]
        "
        style={{
          fontFamily: 'Bebas Neue, sans-serif',
        }}
      >
        {value}
      </div>

      <div
        className="
          mt-1
          text-[9px]
          uppercase
          tracking-[0.18em]
          text-white/30
          font-semibold
        "
        style={{
          fontFamily: 'Barlow Condensed, sans-serif',
        }}
      >
        {label}
      </div>
    </div>
  );
}