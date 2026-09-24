'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const GOALS = ['Weight Loss', 'Muscle Building', 'General Fitness', 'Personal Training', 'Performance', 'Nutrition', 'Other'];
const TIMES = ['Early Morning (6–9 AM)', 'Morning (9 AM–12 PM)', 'Afternoon (12–4 PM)', 'Evening (4–8 PM)', 'Night (8–11 PM)'];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: '',
    time: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic — connect to your backend/WhatsApp here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-black overflow-hidden" style={{paddingTop:'140px', paddingBottom:'140px'}} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          style={{ background: 'radial-gradient(circle, rgba(198,255,0,0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-shark relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#C6FF00]" />
              <span className="section-label">10 / Contact</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-display mb-6"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(48px, 7vw, 96px)',
                lineHeight: 0.92,
              }}
            >
              <span className="text-white">READY TO</span>
              <br />
              <span className="text-[#C6FF00]">START</span>
              <br />
              <span className="text-white">TRAINING?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/50 text-base leading-relaxed mb-8 max-w-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Fill in your details below and we&apos;ll get back to you to discuss your goals and how we can help.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col gap-4"
            >
              <a
                href="tel:+919243344758"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-[#C6FF00]/30 flex items-center justify-center group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00]/10 transition-all duration-200">
                  <Phone size={18} color="#C6FF00" />
                </div>
                <div>
                  <div className="section-label mb-0.5">CALL US</div>
                  <div className="text-white font-condensed font-700 text-lg group-hover:text-[#C6FF00] transition-colors duration-200" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>
                    +91 92433 44758
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/919243344758"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-[#C6FF00]/30 flex items-center justify-center group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00]/10 transition-all duration-200">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0.5C4.3 0.5 0.5 4.3 0.5 9c0 1.6.4 3.1 1.2 4.4L0.5 17.5l4.3-1.1c1.2.7 2.7 1.1 4.2 1.1 4.7 0 8.5-3.8 8.5-8.5S13.7 0.5 9 0.5zm0 15.5c-1.4 0-2.7-.4-3.8-1L5 14.8l-2.6.7.6-2.5-.3-.5C2 11.5 1.5 10.3 1.5 9c0-4.1 3.4-7.5 7.5-7.5S16.5 4.9 16.5 9s-3.4 7-7.5 7z" fill="#C6FF00"/>
                    <path d="M12.5 10.8c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0s-.8-.3-1.5-.9c-.5-.5-.9-1-1-1.2-.1-.2 0-.3.1-.4l.3-.3.2-.3.1-.3-1-2.4c-.1-.1-.2-.2-.4-.2H6c-.2 0-.4.1-.6.3-.2.2-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1.2 1.8 2.8 2.6.4.2.7.3 1 .4.4.1.8.1 1.1.1.4-.1 1.2-.5 1.3-1s.1-.9 0-1z" fill="#C6FF00"/>
                  </svg>
                </div>
                <div>
                  <div className="section-label mb-0.5">WHATSAPP</div>
                  <div className="text-white font-condensed font-700 text-lg group-hover:text-[#C6FF00] transition-colors duration-200" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>
                    CHAT WITH US
                  </div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/thesharkfitness1_gym"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-[#C6FF00]/30 flex items-center justify-center group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00]/10 transition-all duration-200">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="16" height="16" rx="4" stroke="#C6FF00" strokeWidth="1.5"/>
                    <circle cx="9" cy="9" r="3.5" stroke="#C6FF00" strokeWidth="1.5"/>
                    <circle cx="13.5" cy="4.5" r="0.75" fill="#C6FF00"/>
                  </svg>
                </div>
                <div>
                  <div className="section-label mb-0.5">INSTAGRAM</div>
                  <div className="text-white font-condensed font-700 text-lg group-hover:text-[#C6FF00] transition-colors duration-200" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>
                    @thesharkfitness1_gym
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {submitted ? (
              <div
                className="p-8 border border-[#C6FF00]/30 bg-[#0D0D0D] text-center"
                style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
              >
                <div className="text-[#C6FF00] font-display text-5xl mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  SUBMITTED!
                </div>
                <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We&apos;ll be in touch shortly. In the meantime, you can call us at +91 92433 44758.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-white/[0.07] bg-[#0D0D0D] flex flex-col gap-5"
                style={{ padding: '36px 32px', clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
              >
                {/* Corner accents */}
                <div className="relative">
                  <div className="absolute -top-8 -right-8 w-5 h-5 border-t border-r border-[#C6FF00]/30" />
                </div>

                <h3
                  className="font-condensed font-700 text-white text-2xl"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, letterSpacing: '0.02em' }}
                >
                  GET STARTED
                </h3>

                {/* Name */}
                <div>
                  <label className="section-label block mb-2" htmlFor="contact-name">YOUR NAME</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-black/50 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#C6FF00]/50 transition-colors duration-200 placeholder:text-white/20"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="section-label block mb-2" htmlFor="contact-phone">PHONE NUMBER</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-black/50 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#C6FF00]/50 transition-colors duration-200 placeholder:text-white/20"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                {/* Goal */}
                <div>
                  <label className="section-label block mb-2" htmlFor="contact-goal">FITNESS GOAL</label>
                  <select
                    id="contact-goal"
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#C6FF00]/50 transition-colors duration-200 appearance-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="" disabled>Select your goal</option>
                    {GOALS.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>

                {/* Preferred time */}
                <div>
                  <label className="section-label block mb-2" htmlFor="contact-time">PREFERRED TRAINING TIME</label>
                  <select
                    id="contact-time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#C6FF00]/50 transition-colors duration-200 appearance-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="" disabled>Preferred time</option>
                    {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <button type="submit" className="btn-lime mt-2 w-full justify-center">
                  SEND ENQUIRY <ArrowRight size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
