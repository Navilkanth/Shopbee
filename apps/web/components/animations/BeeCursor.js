'use client';

import { useEffect, useState } from 'react';

export default function BeeCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState([]);
  const [flapping, setFlapping] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only run on devices with a fine pointer (mouse/trackpad, not touch)
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let flapInterval = setInterval(() => {
      setFlapping((f) => !f);
    }, 120);

    const handleMouseMove = (e) => {
      setVisible(true);
      const { clientX: x, clientY: y } = e;
      setPos({ x, y });

      // Trail pollen particles
      setTrail((prev) => {
        const next = [...prev, { x, y, id: Math.random(), age: 0 }];
        return next.slice(-6); // Keep last 6 particles for smooth golden trail
      });

      // Detect if hovering over clickable elements
      const target = e.target;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          window.getComputedStyle(target).cursor === 'pointer')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      clearInterval(flapInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Pollen Trail */}
      {trail.map((p, idx) => (
        <span
          key={p.id}
          className="pointer-events-none fixed rounded-full bg-gold transition-all duration-300"
          style={{
            left: p.x - 2,
            top: p.y - 2,
            width: `${Math.max(2, (idx + 1) * 1.2)}px`,
            height: `${Math.max(2, (idx + 1) * 1.2)}px`,
            opacity: ((idx + 1) / trail.length) * 0.6,
            filter: 'blur(0.5px)',
            transform: `translate(${idx % 2 === 0 ? '-3px' : '3px'}, 4px)`,
          }}
        />
      ))}

      {/* Bee Avatar Cursor */}
      <div
        className="fixed transition-transform duration-75 ease-out will-change-transform"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-2px, -2px) scale(${isPointer ? 1.25 : 1})`,
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 32 32"
          fill="none"
          className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
        >
          {/* Animated Flapping Wings */}
          <ellipse
            cx="10"
            cy="11"
            rx="6.5"
            ry={flapping ? '2.5' : '4.5'}
            transform="rotate(-25 10 11)"
            fill="#FFFFFF"
            fillOpacity="0.9"
            stroke="#F4B942"
            strokeWidth="0.8"
          />
          <ellipse
            cx="22"
            cy="11"
            rx="6.5"
            ry={flapping ? '2.5' : '4.5'}
            transform="rotate(25 22 11)"
            fill="#FFFFFF"
            fillOpacity="0.9"
            stroke="#F4B942"
            strokeWidth="0.8"
          />

          {/* Bee Body */}
          <ellipse cx="16" cy="18" rx="7" ry="10" fill="#F4B942" />

          {/* Black Stripes */}
          <path d="M10 15h12M9 18h14M10 21h12" stroke="#151515" strokeWidth="2.2" strokeLinecap="round" />

          {/* Stinger Pointer Tip */}
          <polygon points="16,28 14.5,25.5 17.5,25.5" fill="#151515" />

          {/* Head & Antennae */}
          <circle cx="16" cy="9.5" r="4.2" fill="#151515" />
          <circle cx="14.5" cy="9" r="1" fill="#FFFFFF" />
          <circle cx="17.5" cy="9" r="1" fill="#FFFFFF" />
          <path
            d="M14 6.5 C13 4, 11.5 4, 11 5 M18 6.5 C19 4, 20.5 4, 21 5"
            stroke="#151515"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

