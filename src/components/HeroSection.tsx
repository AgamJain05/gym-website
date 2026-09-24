'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const HERO_IMAGE =
  'https://res.cloudinary.com/dh05cgeok/image/upload/v1790283632/Front_Image_tyazvk.png';

const heroLines = [
  {
    eyebrow: '01 / THE SHARK FITNESS',
    line1: 'REACH YOUR',
    line2: 'BEST SHAPE.',
  },
  {
    eyebrow: '01 / THE SHARK FITNESS',
    line1: 'TRAIN HARD.',
    line2: 'LIVE STRONG.',
  },
  {
    eyebrow: '01 / THE SHARK FITNESS',
    line1: 'BUILD POWER.',
    line2: 'BUILD DISCIPLINE.',
  },
];

export default function HeroSection() {
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroLines.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 82;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

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

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.35) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.35) 1px,
                transparent 1px
              )
            `,
            backgroundSize: '72px 72px',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)',
          }}
        />

        {/* Top lime atmosphere */}
        <div
          className="
            absolute
            -top-[25%]
            left-1/2
            -translate-x-1/2
            w-[800px]
            h-[800px]
            rounded-full
            blur-[140px]
            opacity-15
          "
          style={{
            background:
              'radial-gradient(circle, rgba(198,255,0,0.28) 0%, rgba(198,255,0,0) 68%)',
          }}
        />

        {/* Bottom dark fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[45%]
          "
          style={{
            background:
              'linear-gradient(to top, #030303 0%, rgba(3,3,3,0) 100%)',
          }}
        />

        {/* Subtle diagonal */}
        <div
          className="
            absolute
            left-[-10%]
            bottom-[15%]
            w-[120%]
            h-px
            rotate-[-8deg]
            bg-[#C6FF00]/[0.08]
          "
        />

        <div
          className="
            absolute
            left-[-10%]
            bottom-[12%]
            w-[120%]
            h-px
            rotate-[-8deg]
            bg-white/[0.04]
          "
        />
      </div>

      {/* =========================================================
    GIANT BACKGROUND TYPOGRAPHY
    THIS LAYER IS BEHIND THE PEOPLE
========================================================== */}

      <div
        className="
    absolute
    inset-x-0
    top-[7vh]
    sm:top-[8vh]
    lg:top-[5vh]
    z-30
    lg:z-10
    pointer-events-none
    select-none
    px-4
    sm:px-8
    lg:px-10
  "
      >
        <div className="container-shark mx-auto">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
        flex
        items-center
        justify-center
        gap-3
        mb-4
        sm:mb-6
      "
          >
            <span className="w-8 sm:w-10 h-px bg-[#C6FF00]" />

            <span
              className="
          text-[9px]
          sm:text-[10px]
          uppercase
          tracking-[0.25em]
          text-white/40
          font-semibold
        "
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              {hero.eyebrow}
            </span>

            <span
              className="
          text-[#C6FF00]
          text-[9px]
          sm:text-[10px]
          tracking-[0.2em]
        "
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              IND
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeHero}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <HeroHeadline hero={hero} />
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* =========================================================
    ATHLETE IMAGE
    THIS IS IN FRONT OF THE TEXT
========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 45,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
    absolute
    z-20
    pointer-events-none

    top-[4vh]
    left-0
    right-0
    h-[70vh]
    sm:h-[80vh]
    lg:h-full
    max-w-none

    z-[5]
    lg:z-20
  "
      >
        <Image
          src={HERO_IMAGE}
          alt="Athletes training at The Shark Fitness"
          fill
          priority
          sizes="
            (max-width: 640px) 110vw,
            (max-width: 1024px) 90vw,
            780px
          "
          className="
            object-cover
            object-top
            drop-shadow-[0_0_45px_rgba(198,255,0,0.08)]
          "
        />
      </motion.div>
      {/* =========================================================
          SUPPORTING COPY
      ========================================================== */}

      <div
        className="
          absolute
          z-30

          left-5
          right-5
          bottom-[145px]

          sm:left-8
          sm:right-8

          lg:left-auto
          lg:right-[7vw]
          lg:bottom-[28%]

          xl:right-[9vw]
          xl:bottom-[27%]

          max-w-[330px]
          sm:max-w-[360px]
          lg:max-w-[300px]
          xl:max-w-[350px]
        "
      >
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.65,
            duration: 0.7,
          }}
          className="
            border-l
            border-[#C6FF00]/60
            pl-4
            sm:pl-5
          "
        >
          <p
            className="
              text-xs
              sm:text-sm
              lg:text-[14px]
              leading-relaxed
              text-white/60
            "
            style={{
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Train with purpose. Build strength, discipline
            and confidence in an environment designed for
            people who want more from themselves.
          </p>
        </motion.div>
      </div>

      {/* =========================================================
          CTA
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.6,
        }}
        className="
          absolute
          z-40

          left-5
          sm:left-8
          lg:left-[5vw]
          xl:left-[7vw]

          bottom-6
          sm:bottom-10
          lg:bottom-12

          flex
          flex-row
          gap-2
          sm:gap-3
        "
      >
        {/* Primary */}
        <button
          type="button"
          onClick={() => scrollTo('contact')}
          className="
            group
            inline-flex
            items-center
            justify-center
            gap-2

            h-10
            sm:h-12
            lg:h-14

            px-4
            sm:px-6
            lg:px-7

            bg-[#C6FF00]
            text-black

            text-[10px]
            sm:text-[11px]
            lg:text-xs

            font-bold
            uppercase
            tracking-[0.14em]
            sm:tracking-[0.16em]

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

        {/* Secondary */}
        <button
          type="button"
          onClick={() => scrollTo('gallery')}
          className="
            group
            inline-flex
            items-center
            justify-center
            gap-2

            h-10
            sm:h-12
            lg:h-14

            px-4
            sm:px-6
            lg:px-7

            border
            border-white/15

            bg-white/[0.02]

            text-white

            text-[10px]
            sm:text-[11px]
            lg:text-xs

            font-bold
            uppercase
            tracking-[0.14em]
            sm:tracking-[0.16em]

            transition-all
            duration-300

            hover:border-[#C6FF00]/60
            hover:text-[#C6FF00]
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

      {/* =========================================================
          BOTTOM INFO
      ========================================================== */}

      <div
        className="
          absolute
          z-40
          right-5
          sm:right-8
          lg:right-[5vw]
          xl:right-[7vw]

          bottom-8
          sm:bottom-10
          lg:bottom-12

          flex
          items-center
          gap-4
          sm:gap-6
        "
      >
        {/* Slide indicator */}
        <div className="flex items-center gap-2">
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

        {/* Scroll */}
        <button
          type="button"
          onClick={() => scrollTo('marquee')}
          className="
            hidden
            sm:flex
            items-center
            gap-3

            text-white/30
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
            size={14}
            className="rotate-90"
          />
        </button>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="
          absolute
          z-25
          inset-x-0
          bottom-0
          h-32
          pointer-events-none
        "
        style={{
          background:
            'linear-gradient(to top, #030303 0%, transparent 100%)',
        }}
      />
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
        text-center
        font-bold
        tracking-[-0.04em]
        whitespace-nowrap
      "
      style={{
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Line 1 — white */}
      <span
        className="
          block
          text-[11vw]
          sm:text-[12vw]
          md:text-[11vw]
          lg:text-[9.5vw]
          xl:text-[8.5vw]
          leading-[0.85]
          text-white
        "
      >
        {hero.line1}
      </span>

      {/* Line 2 — gradient fade */}
      <span
        className="
          block
          text-[8vw]
          sm:text-[12vw]
          md:text-[11vw]
          lg:text-[9.5vw]
          xl:text-[8.5vw]
          leading-[0.85]
          mt-1
          bg-gradient-to-b
          from-white
          via-white
          to-white/30
          bg-clip-text
          text-transparent
        "
      >
        {hero.line2}
      </span>
    </h1>
  );
}