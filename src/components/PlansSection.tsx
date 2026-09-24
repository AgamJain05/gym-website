'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    id: 'basic',
    name: 'BASIC',
    duration: '1 Month',
    price: '₹X',
    tagline: 'Start your journey.',
    desc: 'Perfect for those beginning their fitness journey with full gym access.',
    features: [
      'Full gym floor access',
      'Cardio equipment',
      'Locker room access',
      'Monday – Saturday',
      '6 AM – 11 PM timings',
    ],
    popular: false,
    cta: 'GET STARTED',
  },
  {
    id: 'standard',
    name: 'STANDARD',
    duration: '3 Months',
    price: '₹X',
    tagline: 'Train consistently.',
    desc: 'For regular gym-goers who want better value and more commitment.',
    features: [
      'Full gym floor access',
      'Cardio + strength equipment',
      'Basic fitness assessment',
      'Workout plan guidance',
      'Priority locker access',
      'Monday – Saturday',
    ],
    popular: true,
    cta: 'MOST POPULAR',
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    duration: '6 Months',
    price: '₹X',
    tagline: 'Maximum results.',
    desc: 'For members serious about transformation with expert support.',
    features: [
      'Full gym floor access',
      'Personal training sessions',
      'Custom workout program',
      'Nutrition guidance',
      'Body composition tracking',
      'Priority scheduling',
      'Monday – Saturday',
    ],
    popular: false,
    cta: 'GO PREMIUM',
  },
];

export default function PlansSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [hoveredPlan, setHoveredPlan] = useState<string | null>('standard');

  return (
    <section id="plans" className="relative bg-black overflow-hidden" style={{paddingTop:'140px', paddingBottom:'140px'}} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle, rgba(198,255,0,0.04) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle, rgba(198,255,0,0.03) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-shark relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C6FF00]" />
            <span className="section-label">07 / Membership</span>
            <div className="w-8 h-[1px] bg-[#C6FF00]" />
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
            <span className="text-white">CHOOSE YOUR</span>
            <br />
            <span className="text-[#C6FF00]">TRAINING PLAN.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/40 text-base mt-4 max-w-lg mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Prices shown are illustrative. Contact us for current membership pricing.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan, i) => {
            const isActive = hoveredPlan === plan.id || (hoveredPlan === null && plan.popular);
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 + 0.2 }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan('standard')}
                className={`relative flex flex-col transition-all duration-400 cursor-pointer ${
                  plan.popular ? 'md:-mt-6 md:mb-6' : ''
                }`}
                style={{
                  transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div
                    className="flex items-center justify-center gap-2 py-2 bg-[#C6FF00] mb-0"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%)' }}
                  >
                    <Star size={12} fill="black" color="black" />
                    <span
                      className="text-black font-condensed font-700 text-xs uppercase tracking-widest"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, letterSpacing: '0.2em', fontSize: '11px' }}
                    >
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div
                  className={`flex flex-col flex-1 p-6 transition-all duration-300 ${
                    isActive
                      ? 'bg-[#0D0D0D] border border-[#C6FF00]/40'
                      : 'bg-[#080808] border border-white/[0.07]'
                  }`}
                  style={{
                    padding: '36px 28px',
                    boxShadow: isActive ? '0 0 40px rgba(198,255,0,0.08)' : 'none',
                  }}
                >
                  {/* Plan header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div
                          className={`font-display text-sm mb-1 transition-colors duration-200 ${isActive ? 'text-[#C6FF00]' : 'text-white/30'}`}
                          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.15em' }}
                        >
                          {plan.duration}
                        </div>
                        <h3
                          className="text-white font-display"
                          style={{
                            fontFamily: 'Bebas Neue, sans-serif',
                            fontSize: 'clamp(32px, 4vw, 48px)',
                            letterSpacing: '0.05em',
                            lineHeight: 1,
                          }}
                        >
                          {plan.name}
                        </h3>
                      </div>
                      <div className={`w-8 h-8 border flex items-center justify-center transition-colors duration-200 ${isActive ? 'border-[#C6FF00]/40' : 'border-white/10'}`}>
                        <span
                          className={`text-xs font-condensed font-700 transition-colors duration-200 ${isActive ? 'text-[#C6FF00]' : 'text-white/20'}`}
                          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}
                        >
                          0{i + 1}
                        </span>
                      </div>
                    </div>

                    <p className="text-white/40 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {plan.tagline}
                    </p>

                    {/* Price placeholder */}
                    <div className="flex items-end gap-2 py-4 border-y border-white/[0.06]">
                      <span
                        className={`font-display transition-colors duration-200 ${isActive ? 'text-[#C6FF00]' : 'text-white/30'}`}
                        style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '48px', lineHeight: 1 }}
                      >
                        {plan.price}
                      </span>
                      <span className="text-white/20 text-sm mb-1 font-condensed" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600 }}>
                        / MONTH
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-3 flex-1 mb-6">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200 ${isActive ? 'bg-[#C6FF00]/20' : 'bg-white/[0.06]'}`}>
                          <Check size={10} color={isActive ? '#C6FF00' : 'rgba(255,255,255,0.3)'} />
                        </div>
                        <span
                          className={`text-sm transition-colors duration-200 ${isActive ? 'text-white/70' : 'text-white/30'}`}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className={`flex items-center justify-center gap-2 py-4 font-condensed font-700 text-sm uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? 'bg-[#C6FF00] text-black hover:bg-[#D4FF00]'
                        : 'bg-white/[0.04] text-white/40 border border-white/[0.08] hover:border-white/20 hover:text-white/60'
                    }`}
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, letterSpacing: '0.12em' }}
                  >
                    {plan.cta} <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-white/20 text-xs mt-8 uppercase tracking-widest"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.18em' }}
        >
          Contact the gym for current pricing and availability
        </motion.p>
      </div>
    </section>
  );
}
