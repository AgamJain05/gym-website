'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { MapPin, Clock, Phone, Navigation, Building2, Map as MapIcon } from 'lucide-react';

const HOURS = [
  { day: 'Monday – Saturday', time: '6:00 AM – 11:00 PM' },
  { day: 'Sunday', time: 'Contact for timings' },
];

export default function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [viewMode, setViewMode] = useState<'facade' | 'map'>('facade');

  return (
    <section id="location" className="relative bg-[#050505] overflow-hidden" style={{paddingTop:'140px', paddingBottom:'140px'}} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(198,255,0,0.01))' }}
        />
      </div>

      <div className="container-shark relative z-10">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C6FF00]" />
            <span className="section-label">09 / Headquarters & Location</span>
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
            <span className="text-white">FIND YOUR</span>
            <br />
            <span className="text-[#C6FF00]">TRAINING GROUND.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Info */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-5 p-6 border border-white/[0.07] bg-[#0D0D0D]"
            >
              <div className="flex-shrink-0 w-10 h-10 border border-[#C6FF00]/30 flex items-center justify-center">
                <MapPin size={18} color="#C6FF00" />
              </div>
              <div>
                <div className="section-label mb-2">ADDRESS · LANDMARK</div>
                <div className="text-white font-condensed font-700 text-lg mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>
                  Plot No. 3, Bicholi Hapsi Main Rd
                </div>
                <div className="text-white/60 text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Bijli Nagar, Indore, Madhya Pradesh 452016
                </div>
                <span className="inline-block px-2.5 py-1 bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-[#C6FF00] text-xs font-mono">
                  📍 Located on 1st & 2nd Floor (Above HDFC Bank)
                </span>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-5 p-6 border border-white/[0.07] bg-[#0D0D0D]"
            >
              <div className="flex-shrink-0 w-10 h-10 border border-[#C6FF00]/30 flex items-center justify-center">
                <Clock size={18} color="#C6FF00" />
              </div>
              <div className="flex-1">
                <div className="section-label mb-3">TIMING</div>
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2 border-b border-white/[0.05] last:border-b-0">
                    <span className="text-white/50 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{h.day}</span>
                    <span className="text-white font-condensed font-600 text-sm" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-5 p-6 border border-white/[0.07] bg-[#0D0D0D]"
            >
              <div className="flex-shrink-0 w-10 h-10 border border-[#C6FF00]/30 flex items-center justify-center">
                <Phone size={18} color="#C6FF00" />
              </div>
              <div>
                <div className="section-label mb-2">DIRECT CONTACT</div>
                <a
                  href="tel:+919243344758"
                  className="text-white font-condensed font-700 text-xl hover:text-[#C6FF00] transition-colors duration-200"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}
                >
                  +91 92433 44758
                </a>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://maps.google.com/?q=Plot+No.+3,+Bicholi+Hapsi+Main+Rd,+Bijli+Nagar,+Indore,+Madhya+Pradesh+452016"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime"
              >
                OPEN GOOGLE MAPS <Navigation size={14} />
              </a>
              <a
                href="https://wa.me/919243344758"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WHATSAPP US
              </a>
            </motion.div>
          </div>

          {/* Right: Facade Photo & Map with Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2 self-start bg-[#0D0D0D] p-1 border border-white/[0.08]">
              <button
                onClick={() => setViewMode('facade')}
                className={`flex items-center gap-2 px-4 py-1.5 text-xs font-condensed font-700 uppercase tracking-wider transition-all duration-200 ${
                  viewMode === 'facade'
                    ? 'bg-[#C6FF00] text-black shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                <Building2 size={14} /> FACADE PHOTO
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-2 px-4 py-1.5 text-xs font-condensed font-700 uppercase tracking-wider transition-all duration-200 ${
                  viewMode === 'map'
                    ? 'bg-[#C6FF00] text-black shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                <MapIcon size={14} /> GOOGLE MAP
              </button>
            </div>

            {/* Display Box */}
            <div
              className="relative w-full aspect-[4/3] overflow-hidden border border-white/[0.08] bg-[#0A0A0A]"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#C6FF00] z-20 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#C6FF00] z-20 pointer-events-none" />

              {viewMode === 'facade' ? (
                <div className="relative w-full h-full group">
                  <Image
                    src="https://res.cloudinary.com/dh05cgeok/image/upload/f_auto,q_auto/v1790264445/facade-exterior_dgzlnu.png"
                    alt="The Shark Fitness Exterior Night Facade"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="px-2 py-0.5 bg-black/80 border border-[#C6FF00]/40 text-[#C6FF00] text-[10px] font-mono uppercase tracking-widest block w-fit mb-1">
                      ACTUAL PHYSICAL BUILDING
                    </span>
                    <div className="text-white font-display text-lg tracking-wide" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      THE SHARK FITNESS · 1ST & 2ND FLOOR
                    </div>
                    <div className="text-white/60 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Opposite Bijli Nagar, Bicholi Hapsi Main Road, Indore
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  title="The Shark Fitness Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.0!2d75.9!3d22.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzAwLjAiTiA3NcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(1) hue-rotate(175deg) saturate(0.5)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
