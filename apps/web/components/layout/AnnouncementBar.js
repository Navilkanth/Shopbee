'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const OFFERS = [
  { text: '✨ FESTIVE LUXURY SALE: Flat 30% OFF on Banarasi & Katan Silks with code DIWALI30', href: '/festival-offers' },
  { text: '🚚 Complimentary Express Doorstep Delivery Across All PIN Codes in India on Orders Above ₹999', href: '/festival-offers' },
  { text: '🎁 20+ Years of Craftsmanship & Trust: Join the ShopBee Club for 15% OFF (Code: WELCOME15)', href: '/about' },
  { text: '💄 Beauty Special: Buy Any 2 Luxury Cosmetics & Get 1 Artisan Fragrance Free (Code: GLOWBEE)', href: '/cosmetics' },
  { text: '🧵 Bespoke Master Tailoring & Physical 3D Store Experience at Thousand Lights, Chennai', href: '/explore-store' },
  { text: '🏷️ Wholesale & Bulk Fabric Inquiries: Direct Manufacturer Tier Pricing Now Active', href: '/wholesale' },
];

export default function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-ink via-[#241a12] to-ink py-2 text-xs font-medium text-cream border-b border-gold/30 select-none">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-10 pr-10">
          {OFFERS.map((item, i) => (
            <Link
              key={`a-${i}`}
              href={item.href}
              className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-gold"
            >
              <Sparkles className="h-3 w-3 text-gold flex-shrink-0 animate-pulse" />
              <span>{item.text}</span>
            </Link>
          ))}
        </div>

        {/* Track 2 (seamless infinite duplicate) */}
        <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
          {OFFERS.map((item, i) => (
            <Link
              key={`b-${i}`}
              href={item.href}
              className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-gold"
            >
              <Sparkles className="h-3 w-3 text-gold flex-shrink-0 animate-pulse" />
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
