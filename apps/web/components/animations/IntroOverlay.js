'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CanvasLogoReveal from './CanvasLogoReveal';

const SESSION_KEY = 'shopbee_init_canvas_v3';

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [beeFly, setBeeFly] = useState(false);
  const [hideCanvasBee, setHideCanvasBee] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        setVisible(false);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const handleDismiss = () => {
    // 1. Hide the bee from inside the canvas circle so it leaves behind an empty ring
    setHideCanvasBee(true);
    // 2. Launch the big bee horizontally across the right side of the webpage
    setBeeFly(true);

    // 3. Smooth fade-out after the bee completes its horizontal flight across to the right
    setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        /* ignore */
      }
    }, 1400);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black text-cream overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* Procedural Canvas Animation with extra large logo & text */}
          <CanvasLogoReveal
            onComplete={handleDismiss}
            onDismiss={handleDismiss}
            hideBee={hideCanvasBee}
          />

          {/* 
            BIG BEE HORIZONTAL FLIGHT TO THE RIGHT:
            The bee breaks out of the center emblem, expands, and zooms horizontally
            across the right side of the viewport into the home page!
          */}
          {beeFly && (
            <motion.div
              className="pointer-events-none fixed z-[1000] flex items-center justify-center will-change-transform"
              initial={{
                top: 'calc(50% - 100px)',
                left: 'calc(50% - 45px)',
                scale: 2.2,
                opacity: 1,
                rotate: 0,
              }}
              animate={{
                top: ['calc(50% - 100px)', 'calc(50% - 130px)', 'calc(50% - 90px)', 'calc(50% - 110px)'],
                left: ['calc(50% - 45px)', '60vw', '82vw', '115vw'],
                scale: [2.2, 2.5, 2.2, 1.8],
                rotate: [0, 15, 25, 20],
                opacity: [1, 1, 1, 0.8],
              }}
              transition={{
                duration: 1.35,
                times: [0, 0.35, 0.75, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative flex items-center justify-center">
                {/* Golden Stardust Glow */}
                <div className="absolute inset-0 -m-5 rounded-full bg-gold/50 blur-xl" />

                {/* Big Golden Bee Mascot */}
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="relative filter drop-shadow-[0_0_25px_#F4B942]"
                >
                  {/* Rapid Wing Flap */}
                  <motion.ellipse
                    cx="10"
                    cy="11"
                    rx="6.5"
                    ry="3.5"
                    transform="rotate(-25 10 11)"
                    fill="#FFFFFF"
                    fillOpacity="0.95"
                    stroke="#F4B942"
                    strokeWidth="0.8"
                    animate={{ scaleY: [1, 0.4, 1] }}
                    style={{ transformOrigin: '10px 11px' }}
                    transition={{ repeat: Infinity, duration: 0.1 }}
                  />
                  <motion.ellipse
                    cx="22"
                    cy="11"
                    rx="6.5"
                    ry="3.5"
                    transform="rotate(25 22 11)"
                    fill="#FFFFFF"
                    fillOpacity="0.95"
                    stroke="#F4B942"
                    strokeWidth="0.8"
                    animate={{ scaleY: [1, 0.4, 1] }}
                    style={{ transformOrigin: '22px 11px' }}
                    transition={{ repeat: Infinity, duration: 0.1 }}
                  />

                  {/* Bee Body */}
                  <ellipse cx="16" cy="18" rx="7.5" ry="10" fill="#F4B942" />

                  {/* Black Stripes */}
                  <path
                    d="M10 15h12M9 18h14M10 21h12"
                    stroke="#151515"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />

                  {/* Stinger */}
                  <polygon points="16,28 14.5,25.5 17.5,25.5" fill="#151515" />

                  {/* Head */}
                  <circle cx="16" cy="9.5" r="4.2" fill="#151515" />
                  <circle cx="14.5" cy="9" r="1.1" fill="#FFFFFF" />
                  <circle cx="17.5" cy="9" r="1.1" fill="#FFFFFF" />
                  <path
                    d="M14 6.5 C13 4, 11.5 4, 11 5 M18 6.5 C19 4, 20.5 4, 21 5"
                    stroke="#151515"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
