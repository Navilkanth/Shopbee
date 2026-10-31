'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Award, CheckCircle2, ChevronRight, Compass, Flame, HeartHandshake, ShieldCheck, Sparkles, Store } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ERAS = [
  {
    year: '2004',
    title: 'The Artisan Loom Genesis',
    subtitle: 'Varanasi & Kanchipuram',
    badge: '100% Hand-operated Pit Looms',
    description:
      'ShopBee was born from a modest handloom cooperative in South India. Twelve master weaving families united under a shared mission: to preserve ancestral pit-loom silk weaving techniques and deliver genuine mulberry silk sarees directly to Indian households without exploitative middleman fees.',
    highlights: [
      'Pure certified mulberry silk spun by ancestral weaver families',
      'Hand-woven gold and silver zari borders taking up to 45 days per saree',
      'The initial promise that earned the trust of over 5,000 Chennai homes',
    ],
    metric: { value: '12', label: 'Founding Master Weavers' },
  },
  {
    year: '2010',
    title: 'The Fair-Trade & Purity Pledge',
    subtitle: 'Zero Middlemen Direct Network',
    badge: 'Silk Mark Certified Guarantee',
    description:
      'As commercial polyester flooded the market with imitation fabrics, ShopBee took an uncompromising stand. We instituted mandatory third-party Silk Mark India testing on every bolt of fabric and established direct pension and healthcare funds for our artisan weaving clusters.',
    highlights: [
      '100% verified pure silk guarantee with tamper-proof laboratory certification',
      'Direct fair-wage compensation paying 35% above regional handloom minimums',
      'Expanded catalog into organic combed cotton and festival dhoti sets',
    ],
    metric: { value: '50,000+', label: 'Families Clothed Across India' },
  },
  {
    year: '2018',
    title: 'Modern Bridal & Family Lifestyle',
    subtitle: 'Bridal Lehengas, Linen & Clean Cosmetics',
    badge: 'Cruelty-Free & Dermatologist Approved',
    description:
      'Evolving beyond traditional sarees, ShopBee unveiled curated fashion for every member of the family. From bespoke European flax linen shirts and children’s organic festival wear to clean, ayurvedic-infused botanic cosmetics that nourish delicate skin.',
    highlights: [
      'Launched ShopBee Botanical: 100% vegan, cruelty-free cosmetic pigments',
      'Handcrafted bridal lehenga salon with custom zardozi embroidery artisans',
      'Reached 250,000+ satisfied repeat orders with 99.4% customer satisfaction',
    ],
    metric: { value: '1,200+', label: 'Artisans & Craftsmen in Network' },
  },
  {
    year: '2024+',
    title: 'The Anna Salai Flagship & 3D Store',
    subtitle: 'Thousand Lights, Chennai & Global Digital House',
    badge: 'Next-Gen Physical + 3D Virtual Experience',
    description:
      'Celebrating two decades of steadfast trust, ShopBee inaugurated our 15,000 sq.ft physical flagship showroom on Anna Salai, Chennai, paired with our real-time 3D interactive virtual store allowing customers worldwide to explore handcrafted collections with immersive tactile fidelity.',
    highlights: [
      'Physical flagship in Thousand Lights, Chennai with on-demand master tailoring',
      '3D virtual exploration bringing the retail floor directly to phones and laptops',
      'Guaranteed 7-day doorstep size exchange with complimentary insured delivery',
    ],
    metric: { value: '500,000+', label: 'Trusted Customers Across Generations' },
  },
];

const PURITY_TESTS = [
  {
    id: 'silk',
    title: '1. The Pure Silk Burn Test',
    icon: Flame,
    color: 'text-amber-400',
    tag: 'Authenticity Lab Test',
    summary:
      'Genuine silk is a natural protein fiber. When exposed to a gentle flame, authentic ShopBee silk threads burn slowly, smell like burning hair/feathers, and leave behind a soft, powdery black ash that crushes instantly with your fingertips.',
    contrast:
      'Synthetic polyester melts rapidly, smells of toxic plastic, and leaves a hard, unyielding black bead.',
  },
  {
    id: 'zari',
    title: '2. The Electroplated Zari Hallmark',
    icon: Award,
    color: 'text-gold',
    tag: 'Zari Quality Standard',
    summary:
      'Every bridal and festive ShopBee saree features real silver-electroplated and 24K micron gold-leaf zari threads. Our metallurgic testing ensures they will never oxidize, blacken, or tarnish when stored according to heritage care guidelines.',
    contrast:
      'Cheap copper-plastic metallic lurex loses its luster after 2-3 wears and causes skin chafing.',
  },
  {
    id: 'cotton',
    title: '3. Hypoallergenic Combed Cotton',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    tag: 'Skin-Safety Certification',
    summary:
      'Our men’s and kids’ garments are crafted from extra-long staple organic cotton, combed to remove short fibers and impurities. Colored with non-toxic AZO-free dyes, they remain silky-soft through 100+ machine washes.',
    contrast:
      'Industrial fast-fashion uses residual chemical sizing agents that frequently trigger contact dermatitis in children.',
  },
];

export default function HeritageShowcase() {
  const [activeEra, setActiveEra] = useState(0);
  const [activeTest, setActiveTest] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance timeline unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveEra((prev) => (prev + 1) % ERAS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentEra = ERAS[activeEra];
  const currentTest = PURITY_TESTS[activeTest];

  return (
    <div
      className="mt-16 overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-br from-[#14100c] via-[#211710] to-[#120e0b] p-6 text-cream shadow-2xl md:p-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header Eyebrow & Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gold/20 pb-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-gold shadow-sm">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-gold" />
            Interactive Heritage & Craftsmanship Journey
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-cream font-bold">
            20 Years of Weaving Trust: 2004 to Today
          </h2>
          <p className="mt-2 text-sm md:text-base text-sand/80 max-w-2xl">
            Explore the four milestone eras that transformed a humble handloom weaving collective into South India’s most trusted family fashion house.
          </p>
        </div>

        {/* Live Flying Bee Mascot Indicator */}
        <div className="flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold/10 px-4 py-2.5 backdrop-blur-sm">
          <div className="relative h-8 w-8">
            <motion.div
              animate={{
                y: [-2, 3, -2],
                rotate: [-4, 4, -4],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 100 100" className="h-8 w-8 drop-shadow-[0_0_8px_rgba(244,185,66,0.8)]">
                {/* Wings */}
                <motion.ellipse
                  cx="50"
                  cy="32"
                  rx="18"
                  ry="9"
                  fill="rgba(255,255,255,0.85)"
                  stroke="#F4B942"
                  strokeWidth="2"
                  animate={{ scaleY: [0.6, 1.2, 0.6] }}
                  transition={{ duration: 0.15, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ transformOrigin: '50px 38px' }}
                />
                {/* Body */}
                <ellipse cx="50" cy="52" rx="15" ry="21" fill="#F4B942" stroke="#151515" strokeWidth="2.5" />
                <path d="M 38 46 Q 50 49 62 46" stroke="#151515" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 37 54 Q 50 57 63 54" stroke="#151515" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 40 62 Q 50 65 60 62" stroke="#151515" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Head & Eyes */}
                <circle cx="50" cy="34" r="8" fill="#151515" />
                <circle cx="47" cy="33" r="1.5" fill="#FFFFFF" />
                <circle cx="53" cy="33" r="1.5" fill="#FFFFFF" />
              </svg>
            </motion.div>
          </div>
          <div className="text-left">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gold">ShopBee Guardian</p>
            <p className="text-xs text-cream/90 font-medium">Auto-cycling every 7s (Hover to pause)</p>
          </div>
        </div>
      </div>

      {/* Era Navigation Tabs */}
      <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 md:gap-3">
        {ERAS.map((era, index) => {
          const isActive = index === activeEra;
          return (
            <button
              key={era.year}
              type="button"
              onClick={() => setActiveEra(index)}
              className={`group relative rounded-2xl border p-4 text-left transition-all duration-300 ${
                isActive
                  ? 'border-gold bg-gold/20 shadow-[0_0_20px_rgba(244,185,66,0.25)]'
                  : 'border-white/10 bg-white/5 hover:border-gold/50 hover:bg-white/10'
              }`}
            >
              {/* Top Row: Year & Glow */}
              <div className="flex items-center justify-between">
                <span
                  className={`font-serif text-2xl font-bold transition ${
                    isActive ? 'text-gold' : 'text-cream/70 group-hover:text-gold'
                  }`}
                >
                  {era.year}
                </span>
                {isActive && (
                  <span className="flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-gold opacity-75" />
                    <span className="relative h-2 w-2 rounded-full bg-gold" />
                  </span>
                )}
              </div>
              <p
                className={`mt-1.5 text-xs font-semibold leading-tight line-clamp-1 transition ${
                  isActive ? 'text-cream' : 'text-sand/70'
                }`}
              >
                {era.title}
              </p>
              <p className="mt-0.5 text-[11px] text-sand/50">{era.subtitle}</p>

              {/* Progress bar under active button */}
              {isActive && (
                <motion.div
                  layoutId="eraProgressBar"
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gold"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Era Story Card (Animated Transition) */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEra.year}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid gap-8 rounded-3xl border border-gold/30 bg-[#19130d]/80 p-6 backdrop-blur-md lg:grid-cols-[1.5fr_1fr] md:p-8"
          >
            {/* Left Story Column */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-gold border border-gold/30">
                  {currentEra.badge}
                </span>
                <span className="text-xs text-sand/60">Era Landmark: {currentEra.year}</span>
              </div>

              <h3 className="mt-4 font-serif text-2xl md:text-3xl text-cream font-bold">
                {currentEra.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-sand/85 leading-relaxed">
                {currentEra.description}
              </p>

              <div className="mt-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">Key Heritage Milestones:</p>
                {currentEra.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-sand/90">
                    <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metric & Interactive Showcase */}
            <div className="flex flex-col justify-between rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 via-transparent to-black/40 p-6 text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-sand/70 font-semibold">Decade Impact Metric</p>
                <p className="mt-4 font-serif text-4xl md:text-5xl font-bold text-gold">
                  {currentEra.metric.value}
                </p>
                <p className="mt-2 text-xs md:text-sm text-sand/80 font-medium">
                  {currentEra.metric.label}
                </p>
              </div>

              {/* Dynamic Action Trigger */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-sand/70 mb-3">Experience our living heritage:</p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/explore-store"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold text-ink transition hover:bg-gold/90 shadow-sm"
                  >
                    <Store className="h-4 w-4" />
                    Explore Chennai Flagship in 3D
                  </Link>
                  <Link
                    href="/festival-offers"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-sand/40 bg-white/5 px-5 py-2 text-xs font-semibold text-cream transition hover:bg-white/15"
                  >
                    Browse Handcrafted Silks
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* The ShopBee Fabric Purity & Trust Lab */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <h4 className="font-serif text-xl font-bold text-cream flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gold" />
              The ShopBee 3-Fold Fabric Purity Lab
            </h4>
            <p className="mt-1 text-xs text-sand/75">
              How we test and protect every silk strand, silver zari thread, and cotton bolt before it earns the ShopBee seal.
            </p>
          </div>

          {/* Test Tabs */}
          <div className="flex items-center gap-2">
            {PURITY_TESTS.map((test, idx) => {
              const isSelected = idx === activeTest;
              const Icon = test.icon;
              return (
                <button
                  key={test.id}
                  type="button"
                  onClick={() => setActiveTest(idx)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    isSelected
                      ? 'bg-gold text-ink font-bold shadow-sm'
                      : 'border border-white/15 bg-white/5 text-sand/80 hover:bg-white/10'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isSelected ? 'text-ink' : test.color}`} />
                  <span>Test 0{idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Test Details */}
        <div className="mt-5 grid gap-5 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold">{currentTest.tag}</span>
            <h5 className="mt-1 font-serif text-lg font-bold text-cream">{currentTest.title}</h5>
            <p className="mt-2 text-xs md:text-sm text-sand/85 leading-relaxed">
              {currentTest.summary}
            </p>
          </div>

          <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300">Commercial Imitation Risk</span>
            <h5 className="mt-1 text-sm font-bold text-rose-100">Why Cheap Synthetics Fail</h5>
            <p className="mt-2 text-xs text-sand/75 leading-relaxed">
              {currentTest.contrast}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

