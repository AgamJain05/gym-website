import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import BrandStatement from '@/components/BrandStatement';
import ServicesSection from '@/components/ServicesSection';
import MissionSection from '@/components/MissionSection';
import WhyShark from '@/components/WhyShark';
import GoalsSection from '@/components/GoalsSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PlansSection from '@/components/PlansSection';
import LocationSection from '@/components/LocationSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export const metadata: Metadata = {
  title: 'The Shark Fitness | Premium Gym in Indore, Madhya Pradesh',
  description:
    'The Shark Fitness is Indore\'s premium training ground. Strength training, muscle building, fat loss, personal training, and more. Located in Bijli Nagar, Indore. Open 6AM–11PM, Mon–Sat.',
  keywords: [
    'gym in Indore',
    'fitness center Indore',
    'best gym Indore',
    'The Shark Fitness',
    'personal training Indore',
    'muscle building Indore',
    'weight loss gym Indore',
    'Bijli Nagar gym',
    'Bicholi Hapsi gym',
  ],
  openGraph: {
    title: 'The Shark Fitness | Premium Gym in Indore',
    description:
      'Train harder. Move better. Get stronger. The Shark Fitness — Indore\'s premium gym for serious transformation.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'The Shark Fitness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Shark Fitness | Indore\'s Premium Gym',
    description: 'Train harder. Move better. Get stronger. Join The Shark Fitness in Indore.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      {/* Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SportsClub',
            name: 'The Shark Fitness',
            description: 'Premium gym and fitness center in Indore, Madhya Pradesh',
            url: 'https://thesharkfitness.in',
            telephone: '+91-92433-44758',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Plot No. 3, Bicholi Hapsi Main Rd',
              addressLocality: 'Bijli Nagar, Indore',
              addressRegion: 'Madhya Pradesh',
              postalCode: '452016',
              addressCountry: 'IN',
            },
            openingHours: ['Mo-Sa 06:00-23:00'],
            sameAs: ['https://www.instagram.com/thesharkfitness1_gym'],
            priceRange: '₹₹',
          }),
        }}
      />

      <Navbar />

      {/* 01 — Hero */}
      <HeroSection />

      {/* Motivational Marquee — no divider, intentionally flush with hero */}
      <MarqueeSection />

      <SectionDivider />

      {/* 02 — Brand Statement / Intro */}
      <BrandStatement />

      <SectionDivider label="Training" />

      {/* 03 — Services */}
      <ServicesSection />

      <SectionDivider label="Philosophy" />

      {/* Mission / Philosophy */}
      <MissionSection />

      <SectionDivider label="Why Us" />

      {/* 04 — Why The Shark Fitness */}
      <WhyShark />

      <SectionDivider label="Programs" />

      {/* 05 — Fitness Goals */}
      <GoalsSection />

      <SectionDivider label="Facility" />

      {/* 06 — Facility Gallery */}
      <GallerySection />

      <SectionDivider label="Reviews" />

      {/* 07 — Member Testimonials */}
      <TestimonialsSection />

      <SectionDivider label="Membership" />

      {/* 08 — Membership Plans */}
      <PlansSection />

      <SectionDivider label="Location" />

      {/* 08 — Location */}
      <LocationSection />

      <SectionDivider label="FAQ" />

      {/* 09 — FAQ */}
      <FAQSection />

      <SectionDivider label="Contact" />

      {/* 10 — Contact */}
      <ContactSection />

      <SectionDivider />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer — no divider, flows directly */}
      <Footer />
    </main>
  );
}
