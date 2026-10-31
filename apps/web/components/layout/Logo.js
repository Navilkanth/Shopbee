'use client';

import { useState } from 'react';

export default function Logo({ className = '', animated = true, size = 'default' }) {
  const [hovered, setHovered] = useState(false);

  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  const badgeSize = isSmall ? 'h-9 w-9' : isLarge ? 'h-12 w-12' : 'h-11 w-11';
  const textSize = isSmall ? 'text-xl' : isLarge ? 'text-3xl' : 'text-2xl';

  return (
    <span
      className={`group inline-flex items-center gap-3 transition duration-300 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 
        The Circular Emblem Ring:
        The mascot bee has flown away into the user's cursor during initialization!
        So this ring stands empty as a clean golden honey-ring halo, while the brand typography stands proud.
      */}
      <span
        className={`relative grid ${badgeSize} place-items-center rounded-full border-2 border-gold/70 bg-gradient-to-tr from-gold/15 to-transparent shadow-sm transition duration-500 group-hover:scale-105 group-hover:border-gold`}
      >
        {/* Subtle pulsating golden honey nucleus */}
        <span className="h-2.5 w-2.5 rounded-full bg-gold/60 transition-transform duration-300 group-hover:scale-125" />
        <span
          className={`pointer-events-none absolute inset-0 rounded-full bg-gold/20 opacity-0 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : ''
          }`}
        />
      </span>

      {/* Brand Text Name */}
      <span className={`font-serif ${textSize} font-bold tracking-tight text-ink transition group-hover:text-gold`}>
        ShopBee
      </span>
    </span>
  );
}
