'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'What membership plans do you offer?',
    a: 'We offer flexible membership options including monthly, 3-month, and 6-month plans to suit different commitment levels and budgets. Contact us for current pricing.',
  },
  {
    q: 'Do you offer personal training?',
    a: 'Yes. Our certified trainers offer one-on-one personal training sessions. We design custom workout programs based on your specific fitness goals and current fitness level.',
  },
  {
    q: 'Can beginners join The Shark Fitness?',
    a: 'Absolutely. We welcome members of all fitness levels. Our trainers will guide beginners through the gym safely and help you build a solid foundation.',
  },
  {
    q: 'What are your gym timings?',
    a: 'We are open Monday to Saturday from 6:00 AM to 11:00 PM. Please contact us directly for Sunday availability.',
  },
  {
    q: 'What equipment do you have?',
    a: 'The Shark Fitness is equipped with a full range of free weights, barbells, cable machines, cardio equipment, functional training tools, and more — everything for a complete training experience.',
  },
  {
    q: 'Do you offer nutrition guidance?',
    a: 'Yes, we provide nutrition guidance as part of our premium membership and personal training packages to help you fuel your training properly.',
  },
  {
    q: 'Can I visit the gym before joining?',
    a: 'Yes, you\'re welcome to visit and take a tour of the facility. Contact us to schedule a visit or walk in during gym hours.',
  },
  {
    q: 'Where is The Shark Fitness located?',
    a: 'We are located at Plot No. 3, Bicholi Hapsi Main Rd, Bijli Nagar, Indore, Madhya Pradesh 452016. Call us at +91 92433 44758 for directions.',
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#080808] overflow-hidden" style={{paddingTop:'140px', paddingBottom:'140px'}} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-40" />
      </div>

      <div className="container-shark relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#C6FF00]" />
              <span className="section-label">09 / FAQ</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-display text-white mb-6"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(44px, 5vw, 72px)',
                lineHeight: 0.92,
              }}
            >
              FREQUENTLY
              <br />
              ASKED
              <br />
              <span className="text-[#C6FF00]">QUESTIONS.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/40 text-base leading-relaxed mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Have questions before joining? Find answers below, or reach out to our team directly.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-lime inline-flex"
            >
              CONTACT OUR TEAM <ArrowRight size={14} />
            </motion.a>
          </div>

          {/* Right: FAQ accordion */}
          <div className="border border-white/[0.08] bg-[#0A0A0A] divide-y divide-white/[0.06] overflow-hidden">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 + 0.2 }}
                  className={`transition-colors duration-200 ${
                    isOpen ? 'bg-[#111111]' : 'bg-transparent hover:bg-white/[0.02]'
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-6 text-left outline-none cursor-pointer group"
                    style={{ padding: '22px 24px' }}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    id={`faq-btn-${i}`}
                  >
                    <span
                      className={`font-condensed font-700 text-lg transition-colors duration-200 ${
                        isOpen ? 'text-[#C6FF00]' : 'text-white/80 group-hover:text-white'
                      }`}
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                        fontSize: '18px',
                      }}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? 'border border-[#C6FF00] bg-[#C6FF00]/15 text-[#C6FF00]'
                          : 'border border-white/10 text-white/50 group-hover:border-white/30 group-hover:text-white'
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={15} color="#C6FF00" />
                      ) : (
                        <Plus size={15} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div style={{ padding: '0 24px 24px 24px' }}>
                          <div className="w-8 h-[1px] bg-[#C6FF00]/40 mb-3" />
                          <p
                            className="text-white/70 text-sm md:text-base leading-relaxed"
                            style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.65 }}
                          >
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
