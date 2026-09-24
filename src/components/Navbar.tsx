'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Plans', href: '#plans' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const LOGO_URL =
  'https://res.cloudinary.com/dh05cgeok/image/upload/f_auto,q_auto/v1790265082/69c5568b-7395-4d41-8f18-a14bd4ac3e8b.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  /*
   * Scroll state
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * Lock body scroll when mobile menu is open
   */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  /*
   * Close menu with Escape
   */
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  /*
   * Active section tracking
   */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace('#', '')))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveLink(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-25% 0px -60% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /*
   * Smooth scroll with fixed-header offset
   */
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const id = href.replace('#', '');
    const element = document.getElementById(id);

    setActiveLink(id);
    setMenuOpen(false);

    if (!element) return;

    const navbarOffset = 88;
    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth',
    });

    /*
     * Keep URL/hash in sync without jumping the browser
     */
    window.history.replaceState(null, '', href);
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed top-0 left-0 right-0 z-[120]
          h-[76px] md:h-[82px]
          transition-all duration-300
          ${scrolled || menuOpen
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.25)]'
            : 'bg-black/10 backdrop-blur-[2px]'
          }
        `}
      >
        <div className="w-full pl-1 pr-4 sm:px-8 xl:px-12 h-full flex items-center justify-between">
          {/* =========================
              LOGO
          ========================== */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="The Shark Fitness - Home"
            className="
              relative
              flex items-center
              shrink-0
              h-full
              group
              focus:outline-none
            "
          >
            {/* 
              Using an explicit image box instead of a generic fill layout
              makes the logo positioning much more predictable.
            */}
            <div
              className="
                relative
                w-[150px] h-[42px]
                sm:w-[170px] sm:h-[46px]
                md:w-[185px] md:h-[50px]
              "
            >
              <Image
                src={LOGO_URL}
                alt="The Shark Fitness"
                fill
                priority
                sizes="(max-width: 640px) 150px, (max-width: 768px) 170px, 185px"
                className="
                  object-contain
                  object-left-center
                  scale-[1.04]
                  origin-left
                  transition-transform duration-300
                  group-hover:scale-[1.07]
                "
              />
            </div>
          </a>

          {/* =========================
              DESKTOP NAV
              lg instead of md
          ========================== */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeLink === id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    relative
                    py-2
                    text-[12px]
                    xl:text-[13px]
                    uppercase
                    tracking-[0.15em]
                    font-semibold
                    transition-colors duration-200
                    ${isActive
                      ? 'text-[#C6FF00]'
                      : 'text-white/65 hover:text-white'
                    }
                  `}
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                  }}
                >
                  {link.label}

                  {/* Active underline */}
                  <span
                    className={`
                      absolute
                      left-0
                      right-0
                      -bottom-1
                      h-[1px]
                      bg-[#C6FF00]
                      transition-all duration-300
                      origin-center
                      ${isActive
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0'
                      }
                    `}
                  />
                </a>
              );
            })}
          </div>

          {/* =========================
              RIGHT SIDE
          ========================== */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="
                hidden lg:flex
                items-center justify-center
                gap-2
                h-11
                px-5
                bg-[#C6FF00]
                text-black
                text-[12px]
                font-bold
                uppercase
                tracking-[0.12em]
                rounded-sm
                transition-all duration-300
                hover:bg-[#d4ff38]
                hover:-translate-y-[1px]
                hover:shadow-[0_8px_25px_rgba(198,255,0,0.15)]
                active:translate-y-0
              "
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
              }}
            >
              JOIN NOW
              <ArrowRight size={15} strokeWidth={2} />
            </a>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-btn"
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                lg:hidden
                flex items-center justify-center
                w-11 h-11
                text-white
                border border-white/10
                bg-white/[0.03]
                rounded-sm
                transition-all duration-200
                hover:border-[#C6FF00]/50
                hover:text-[#C6FF00]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C6FF00]
              "
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={21} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={21} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[100]
              lg:hidden
              bg-[#030303]
              pt-[76px]
            "
          >
            {/* subtle background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-[320px]
                  h-[320px]
                  rounded-full
                  blur-3xl
                  opacity-10
                "
                style={{
                  background:
                    'radial-gradient(circle, #C6FF00 0%, transparent 70%)',
                }}
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  h-[45%]
                  opacity-[0.04]
                "
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(198,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,0,0.5) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            <div className="relative h-full overflow-y-auto">
              <div className="min-h-full flex flex-col px-6 sm:px-8 pt-8 pb-8">
                {/* Mobile nav links */}
                <div className="flex-1">
                  {navLinks.map((link, i) => {
                    const id = link.href.replace('#', '');
                    const isActive = activeLink === id;

                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.045,
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="
                          group
                          flex items-center justify-between
                          py-4
                          border-b border-white/[0.08]
                        "
                      >
                        <span
                          className={`
                            text-[42px]
                            sm:text-[48px]
                            leading-none
                            uppercase
                            transition-colors duration-200
                            ${isActive
                              ? 'text-[#C6FF00]'
                              : 'text-white/85 group-hover:text-[#C6FF00]'
                            }
                          `}
                          style={{
                            fontFamily: 'Bebas Neue, sans-serif',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {link.label}
                        </span>

                        <ArrowRight
                          size={20}
                          className={`
                            transition-all duration-200
                            ${isActive
                              ? 'text-[#C6FF00] translate-x-0'
                              : 'text-white/25 -translate-x-2 group-hover:text-[#C6FF00] group-hover:translate-x-0'
                            }
                          `}
                        />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                  className="pt-8"
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="
                      flex items-center justify-center
                      gap-2
                      w-full
                      h-14
                      bg-[#C6FF00]
                      text-black
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      rounded-sm
                      transition-all duration-300
                      hover:bg-[#d4ff38]
                    "
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                    }}
                  >
                    JOIN NOW
                    <ArrowRight size={17} />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}