'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Curated high-fashion editorial backgrounds cycling every 23 seconds
const HERO_BACKGROUNDS = [
  {
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2200&q=85',
    title: 'STYLE THAT MOVES WITH YOU.',
    tagline: 'New Season Haute Couture',
    subtitle: 'ShopBee curates modern Indian and international silhouettes for men, women, and kids.',
  },
  {
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=85',
    title: 'TIMELESS LUXURY SILHOUETTES.',
    tagline: 'Festive Banarasi & Organza Silks',
    subtitle: 'Handcrafted master weaves with pure zari borders designed for enduring elegance.',
  },
  {
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2200&q=85',
    title: 'CONTEMPORARY URBAN COUTURE.',
    tagline: 'Minimalist European Tailoring',
    subtitle: 'Bespoke linen blazers, relaxed pleated trousers, and premium Japanese selvedge denim.',
  },
  {
    url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=2200&q=85',
    title: 'BOTANICAL BEAUTY & GLOW.',
    tagline: 'Clean Cosmetic Formulations',
    subtitle: 'Nourishing botanical elixirs, velvet lipsticks, and niche unisex artisanal perfumes.',
  },
];

export default function Hero({ imageUrl }) {
  const reduce = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Background changes every 23 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 23000); // 23 seconds

    return () => clearInterval(timer);
  }, []);

  const current = HERO_BACKGROUNDS[currentIndex];

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-ink text-cream">
      {/* 23-second Smooth Transition Background Image Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.72, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={currentIndex === 0 && imageUrl ? imageUrl : current.url}
            alt="Editorial fashion photography"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Dark Gradients for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

      {/* 23-Second Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-white/10">
        <motion.div
          key={currentIndex}
          className="h-full bg-gold"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 23, ease: 'linear' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-24 pt-36 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-gold">
              {current.tagline}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1] md:text-7xl lg:text-8xl">
              {current.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/90 md:text-xl leading-relaxed">
              {current.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/men"
            className="rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-ink shadow-lg transition duration-300 hover:bg-gold/90 hover:scale-105"
          >
            Men&apos;s collection
          </Link>
          <Link
            href="/women"
            className="rounded-full bg-white/15 px-8 py-3.5 text-base font-semibold text-cream backdrop-blur-md transition duration-300 hover:bg-white/25 hover:scale-105"
          >
            Women&apos;s collection
          </Link>
          <Link
            href="/explore-store"
            className="rounded-full border border-gold/50 px-8 py-3.5 text-base font-semibold text-gold backdrop-blur-sm transition duration-300 hover:border-gold hover:bg-gold/15 hover:scale-105"
          >
            Explore 3D Store
          </Link>
        </div>

        {/* Carousel indicators */}
        <div className="mt-8 flex gap-2">
          {HERO_BACKGROUNDS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === i ? 'w-8 bg-gold' : 'w-2 bg-white/40'
              }`}
              aria-label={`Slide ${i + 1}`}
              suppressHydrationWarning
            />
          ))}
        </div>
      </div>
    </section>
  );
}
