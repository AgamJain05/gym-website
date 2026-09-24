'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const galleryItems = [
  { id: 1, label: 'STRENGTH ZONE', col: 'col-span-2', row: 'row-span-2', accent: true },
  { id: 2, label: 'CARDIO AREA', col: 'col-span-1', row: 'row-span-1', accent: false },
  { id: 3, label: 'FREE WEIGHTS', col: 'col-span-1', row: 'row-span-1', accent: false },
  { id: 4, label: 'MACHINES', col: 'col-span-1', row: 'row-span-2', accent: false },
  { id: 5, label: 'FUNCTIONAL', col: 'col-span-2', row: 'row-span-1', accent: true },
  { id: 6, label: 'TRAINING FLOOR', col: 'col-span-1', row: 'row-span-1', accent: false },
];

const zones = [
  { num: '01', label: 'STRENGTH ZONE', desc: 'Barbells, dumbbells, squat racks' },
  { num: '02', label: 'CARDIO', desc: 'Treadmills, bikes, rowing' },
  { num: '03', label: 'FUNCTIONAL', desc: 'Cables, kettlebells, sleds' },
  { num: '04', label: 'GROUP TRAINING', desc: 'Classes and team workouts' },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" className="relative bg-[#080808] overflow-hidden" style={{paddingTop:'140px', paddingBottom:'140px'}} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-30" />
      </div>

      <div className="container-shark relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#C6FF00]" />
              <span className="section-label">06 / The Facility</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-display"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(44px, 6vw, 80px)',
                lineHeight: 0.92,
              }}
            >
              <span className="text-white">STEP INSIDE</span>
              <br />
              <span className="text-[#C6FF00]">THE SHARK</span>
              <br />
              <span className="text-white">FITNESS.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/40 text-sm max-w-xs leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A facility designed for serious training. Add your real gym photos here.
          </motion.p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-12" style={{ gridAutoRows: '160px' }}>
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 + 0.2 }}
              className={`group relative overflow-hidden cursor-pointer ${item.col} ${item.row}`}
              style={{
                clipPath: i === 0
                  ? 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                  : 'none',
              }}
            >
              {/* Placeholder visual */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  background: item.accent
                    ? `linear-gradient(135deg, #0D0D0D 0%, #080808 100%)`
                    : `linear-gradient(135deg, #080808 0%, #050505 100%)`,
                }}
              />
              <div className="bg-grid absolute inset-0 opacity-70" />

              {/* Lime glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(198,255,0,0.06) 0%, transparent 70%)',
                }}
              />

              {/* Border */}
              <div className={`absolute inset-0 border transition-all duration-300 ${item.accent ? 'border-[#C6FF00]/15' : 'border-white/[0.05]'} group-hover:border-[#C6FF00]/30`} />

              {/* Decorative SVG - different for each */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {i % 3 === 0 && (
                    <>
                      <rect x="4" y="24" width="10" height="12" rx="1" stroke="#C6FF00" strokeWidth="1.5"/>
                      <rect x="14" y="18" width="6" height="24" rx="1" stroke="#C6FF00" strokeWidth="1.5"/>
                      <rect x="20" y="14" width="20" height="32" rx="1" stroke="#C6FF00" strokeWidth="1.5"/>
                      <rect x="40" y="18" width="6" height="24" rx="1" stroke="#C6FF00" strokeWidth="1.5"/>
                      <rect x="46" y="24" width="10" height="12" rx="1" stroke="#C6FF00" strokeWidth="1.5"/>
                    </>
                  )}
                  {i % 3 === 1 && (
                    <circle cx="30" cy="30" r="20" stroke="#C6FF00" strokeWidth="1.5" strokeDasharray="4 4"/>
                  )}
                  {i % 3 === 2 && (
                    <path d="M10 50 L30 10 L50 50 Z" stroke="#C6FF00" strokeWidth="1.5" fill="none"/>
                  )}
                </svg>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div
                  className="text-white/60 group-hover:text-[#C6FF00] transition-colors duration-200 font-condensed font-700 text-xs uppercase tracking-widest"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, letterSpacing: '0.18em', fontSize: '11px' }}
                >
                  {item.label}
                </div>
              </div>

              {/* Photo instruction overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="text-white/20 text-[10px] uppercase tracking-widest text-center px-4"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}
                >
                  Add gym photo
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Zone cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {zones.map((zone, i) => (
            <motion.div
              key={zone.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 + 0.6 }}
              className="group p-5 border border-white/[0.06] bg-[#0D0D0D] hover:border-[#C6FF00]/30 hover:bg-[#0D0D0D] transition-all duration-300"
            >
              <div
                className="text-[#C6FF00]/40 group-hover:text-[#C6FF00] font-display text-3xl mb-2 transition-colors duration-200"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}
              >
                {zone.num}
              </div>
              <div
                className="text-white font-condensed font-700 text-sm mb-1"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, letterSpacing: '0.08em' }}
              >
                {zone.label}
              </div>
              <div className="text-white/30 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                {zone.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
