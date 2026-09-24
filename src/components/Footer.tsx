'use client';

import { MapPin, Clock, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Plans', href: '#plans' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/thesharkfitness1_gym',
    svg: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="4" r="0.75" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    svg: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10.5 5.5H9a1 1 0 0 0-1 1V15M8 9h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    svg: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="3.5" width="14" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6.5 6L10.5 8L6.5 10V6Z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black overflow-hidden pt-20 pb-8">
      {/* Giant background wordmark */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-0 select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display whitespace-nowrap"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(60px, 15vw, 220px)',
            letterSpacing: '0.08em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.04)',
            lineHeight: 0.85,
          }}
        >
          THE SHARK FITNESS
        </span>
      </div>

      <div className="container-shark relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 pb-16 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span
                className="font-display text-white block"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '0.1em', lineHeight: 1 }}
              >
                THE SHARK
              </span>
              <span
                className="font-display text-[#C6FF00] block"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '0.18em', lineHeight: 1 }}
              >
                FITNESS
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-6 max-w-[200px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Indore&apos;s premium training ground. Built for people serious about transformation.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-[#C6FF00] hover:bg-[#C6FF00]/10 transition-all duration-200 group text-white/40 hover:text-[#C6FF00]"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="section-label mb-5"
            >
              NAVIGATION
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-white/40 hover:text-[#C6FF00] transition-colors duration-200 text-sm font-condensed font-600 uppercase tracking-widest cursor-pointer"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.12em', fontSize: '13px' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label mb-5">CONTACT</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <MapPin size={14} className="text-[#C6FF00] flex-shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Plot No. 3, Bicholi Hapsi Main Rd, Bijli Nagar, Indore, MP 452016
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={14} className="text-[#C6FF00] flex-shrink-0" />
                <a
                  href="tel:+919243344758"
                  className="text-white/40 hover:text-[#C6FF00] text-sm transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  +91 92433 44758
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={14} className="text-[#C6FF00] flex-shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Mon – Sat: 6:00 AM – 11:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Legal + CTA */}
          <div>
            <h4 className="section-label mb-5">QUICK LINKS</h4>
            <div className="flex flex-col gap-3 mb-6">
              {['Privacy Policy', 'Terms of Use'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/30 hover:text-white/60 text-sm transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="btn-lime text-sm"
            >
              JOIN NOW
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6H11M7 2L11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © 2026 The Shark Fitness. All Rights Reserved. Indore, Madhya Pradesh.
          </p>
          <p
            className="text-white/10 text-xs uppercase tracking-widest"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.18em', fontSize: '10px' }}
          >
            TRAIN HARD. LIVE STRONG. STAY SHARK.
          </p>
        </div>
      </div>
    </footer>
  );
}
