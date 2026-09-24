'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, Sparkles, MapPin } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  colSpan: string;
  aspect: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'FREE WEIGHTS & DUMBBELL COMBAT',
    category: 'STRENGTH ZONE',
    description: 'Heavy commercial dumbbells, incline benches, and Olympic squat stations with anti-impact flooring.',
    image: 'https://res.cloudinary.com/dh05cgeok/image/upload/f_auto,q_auto/v1790264446/free-weights_qbm8uc.png',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    aspect: 'aspect-[4/3] md:aspect-[16/10]',
  },
  {
    id: 2,
    title: 'CARDIO & HIGH-PERFORMANCE TURF',
    category: 'CARDIO FLOOR',
    description: 'Touchscreen digital treadmills, HIIT air bikes, and dedicated green sprint turf.',
    image: 'https://res.cloudinary.com/dh05cgeok/image/upload/f_auto,q_auto/v1790264445/cardio-zone_oy77zl.png',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    aspect: 'aspect-[4/3] md:aspect-[4/5]',
  },
  {
    id: 3,
    title: 'JERAI STRENGTH & CABLE SUITE',
    category: 'CABLE SYSTEMS',
    description: 'Engineered Jerai Fitness dual cable crossovers and multi-grip lat pulldown towers.',
    image: 'https://res.cloudinary.com/dh05cgeok/image/upload/f_auto,q_auto/v1790264446/strength-cables_e13hsd.png',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    aspect: 'aspect-[4/3] md:aspect-[4/5]',
  },
  {
    id: 4,
    title: 'OLYMPIC BUMPERS & FUNCTIONAL GEAR',
    category: 'FUNCTIONAL ATHLETICS',
    description: 'Full competition color bumper plates, tackle bags, slam medicine balls, and sled tracks.',
    image: 'https://res.cloudinary.com/dh05cgeok/image/upload/f_auto,q_auto/v1790264446/functional-turf_qvyxzk.png',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    aspect: 'aspect-[4/3] md:aspect-[4/5]',
  },
  {
    id: 5,
    title: 'BIOMECHANIC RESISTANCE MACHINES',
    category: 'HYPERTROPHY MACHINES',
    description: 'Selectorized weight stacks and ergonomic bench stations for targeted isolation work.',
    image: 'https://res.cloudinary.com/dh05cgeok/image/upload/f_auto,q_auto/v1790264447/resistance-machines_xkge0f.png',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    aspect: 'aspect-[4/3] md:aspect-[4/5]',
  },
  {
    id: 6,
    title: 'ARCHITECTURAL FACADE · NIGHT AMBIENCE',
    category: 'INDORE HEADQUARTERS',
    description: 'Multi-story glass facility illuminated on Bicholi Hapsi Main Road, Bijli Nagar.',
    image: 'https://res.cloudinary.com/dh05cgeok/image/upload/f_auto,q_auto/v1790264445/facade-exterior_dgzlnu.png',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    aspect: 'aspect-[4/3] md:aspect-[16/10]',
  },
];

const STATS = [
  { value: '100%', label: 'JERAI & COMMERCIAL EQUIPMENT' },
  { value: 'HOT & COLD', label: 'ICE BATH RECOVERY AVAILABLE' },
  { value: 'TURF & FREE', label: 'DEDICATED OLYMPIC & ATHLETIC ZONES' },
  { value: 'SCHEME 140', label: 'PRIME BICHOLI HAPSI LOCATION' },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section
      id="gallery"
      className="relative bg-[#070707] overflow-hidden"
      style={{ paddingTop: '140px', paddingBottom: '140px' }}
      ref={ref}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div
          className="absolute right-0 bottom-0 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle at bottom right, rgba(198,255,0,0.03) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-shark relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#C6FF00]" />
              <span className="section-label">06 / Real Gym Photography</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-display"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(44px, 6vw, 84px)',
                lineHeight: 0.92,
              }}
            >
              <span className="text-white">INSIDE THE</span>
              <br />
              <span className="text-[#C6FF00]">SHARK SANCTUARY.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-start md:items-end gap-3 max-w-sm"
          >
            <div className="flex items-center gap-2 text-[#C6FF00] text-xs font-mono tracking-widest uppercase">
              <Sparkles size={14} /> UNFILTERED FACILITY TOUR
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed text-left md:text-right"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Spacious training floors, top-grade Jerai machinery, Olympic turf, and spotless hygiene. Tap any image to expand.
            </p>
          </motion.div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative overflow-hidden border border-white/[0.08] hover:border-[#C6FF00]/60 transition-all duration-500 cursor-pointer bg-[#0A0A0A] ${item.colSpan}`}
              style={{
                clipPath: idx === 0
                  ? 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                  : 'none',
              }}
            >
              {/* Photo Container */}
              <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/40 group-hover:via-black/20 transition-all duration-300" />

                {/* Top Category Badge & Expand Icon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span
                    className="px-2.5 py-1 bg-black/70 border border-[#C6FF00]/40 text-[#C6FF00] text-[10px] font-condensed font-700 uppercase tracking-widest backdrop-blur-sm"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {item.category}
                  </span>

                  <div className="w-8 h-8 rounded-none bg-black/60 border border-white/20 flex items-center justify-center text-white/60 group-hover:text-[#C6FF00] group-hover:border-[#C6FF00] transition-colors duration-200">
                    <Maximize2 size={13} />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3
                    className="text-white group-hover:text-[#C6FF00] transition-colors duration-200 font-display text-xl md:text-2xl leading-tight mb-1"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-white/60 text-xs line-clamp-2 leading-relaxed font-light"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 + 0.6 }}
              className="p-5 border border-white/[0.06] bg-[#0E0E0E] flex flex-col justify-between"
            >
              <div
                className="text-[#C6FF00] font-display text-2xl md:text-3xl mb-1 tracking-wide"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/40 text-[11px] uppercase tracking-wider font-semibold"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.12em' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full bg-[#0A0A0A] border border-[#C6FF00]/40 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/80 border border-white/20 text-white hover:text-[#C6FF00] hover:border-[#C6FF00] flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="p-6 bg-[#0E0E0E] border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[#C6FF00] text-xs font-mono uppercase tracking-widest block mb-1">
                    {selectedPhoto.category}
                  </span>
                  <h4
                    className="text-white font-display text-2xl tracking-wide"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-white/60 text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {selectedPhoto.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs shrink-0">
                  <MapPin size={14} className="text-[#C6FF00]" />
                  <span>The Shark Fitness · Indore</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
