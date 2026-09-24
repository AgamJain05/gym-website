'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const HOURS = [
  { day: 'Monday – Saturday', time: '6:00 AM – 11:00 PM' },
  { day: 'Sunday', time: 'Contact for timings' },
];

export default function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="location" className="relative bg-[#050505] overflow-hidden" style={{paddingTop:'140px', paddingBottom:'140px'}} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
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
            <span className="section-label">08 / Location</span>
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
                <div className="section-label mb-2">ADDRESS</div>
                <div className="text-white font-condensed font-700 text-lg mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>
                  Plot No. 3, Bicholi Hapsi Main Rd
                </div>
                <div className="text-white/50 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Bijli Nagar, Indore, Madhya Pradesh 452016
                </div>
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
                <div className="section-label mb-2">CONTACT</div>
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
                GET DIRECTIONS <Navigation size={14} />
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

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative w-full aspect-[4/3] overflow-hidden"
            style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#C6FF00] z-10" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#C6FF00] z-10" />

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
