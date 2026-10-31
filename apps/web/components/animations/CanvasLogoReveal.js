/**
 * Procedural Canvas Logo Reveal Animation for ShopBee
 * Converts the orbital motion, collision burst, massive mascot reveal,
 * and specular shine into 100% pure canvas/UI animation logic.
 */
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, X } from 'lucide-react';
import { soundEngine } from '@/lib/audioSynthesizer';

const TOTAL_DURATION_MS = 5600;
const TIMELINE = {
  START: 0,
  ORBITAL_SPEEDUP: 1000,
  CONVERGENCE_START: 1500,
  COLLISION_BURST: 2000,
  MASCOT_EMERGE: 2100,
  MASCOT_SETTLE: 3000,
  TYPO_START: 2800,
  SPECULAR_SWEEP: 3600,
  TAGLINE_START: 4000,
  TAGLINE_SETTLE: 4700,
  FINISH: 5600,
};

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutBack(t) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function calculateOrbs(t, cx, cy, baseRadius = 110) {
  const time = clamp(t, 0, TIMELINE.COLLISION_BURST);
  let angleOffset = (time / 1000) * Math.PI * 1.6;

  if (time > TIMELINE.ORBITAL_SPEEDUP) {
    const accelT =
      (time - TIMELINE.ORBITAL_SPEEDUP) /
      (TIMELINE.CONVERGENCE_START - TIMELINE.ORBITAL_SPEEDUP);
    angleOffset += Math.pow(clamp(accelT, 0, 1), 2) * Math.PI * 1.2;
  }

  let orbitR = baseRadius;
  let opacity = 1;
  if (time > TIMELINE.CONVERGENCE_START) {
    const convT =
      (time - TIMELINE.CONVERGENCE_START) /
      (TIMELINE.COLLISION_BURST - TIMELINE.CONVERGENCE_START);
    const clampedConv = clamp(convT, 0, 1);
    orbitR = baseRadius * (1 - easeInOutCubic(clampedConv));
    if (clampedConv > 0.85) {
      opacity = (1 - clampedConv) / 0.15;
    }
  }

  const configs = [
    { baseAngle: 0, color: '#A855F7', glowColor: 'rgba(168, 85, 247, 0.75)', radius: 18 },
    { baseAngle: (2 * Math.PI) / 3, color: '#F97316', glowColor: 'rgba(249, 115, 22, 0.85)', radius: 20 },
    { baseAngle: (4 * Math.PI) / 3, color: '#FBBF24', glowColor: 'rgba(251, 191, 36, 0.85)', radius: 17 },
  ];

  return configs.map((cfg) => {
    const angle = cfg.baseAngle + angleOffset;
    return {
      x: cx + Math.cos(angle) * orbitR,
      y: cy + Math.sin(angle) * orbitR,
      radius: cfg.radius * ((orbitR / baseRadius) * 0.4 + 0.6),
      color: cfg.color,
      glowColor: cfg.glowColor,
      opacity: Math.max(0, opacity),
    };
  });
}

export default function CanvasLogoReveal({ onComplete, onDismiss, hideBee = false }) {
  const canvasRef = useRef(null);
  const brandImgRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const burstParticlesRef = useRef([]);
  const pollenParticlesRef = useRef([]);
  const soundPlayedRef = useRef({});
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const pollen = [];
    for (let i = 0; i < 45; i++) {
      pollen.push({
        id: i,
        x: Math.random() * 1200,
        y: Math.random() * 800,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.2 - Math.random() * 0.5,
        size: 1.5 + Math.random() * 3,
        color: i % 3 === 0 ? '#FBBF24' : i % 3 === 1 ? '#F59E0B' : '#E879F9',
        alpha: 0.15 + Math.random() * 0.45,
      });
    }
    pollenParticlesRef.current = pollen;

    const img = new Image();
    img.src = '/assets/brand/shopbee_brand_mark.png';
    img.onload = () => {
      brandImgRef.current = img;
    };
  }, []);

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    soundEngine.setMuted(next);
    if (!next) {
      soundEngine.resume();
    }
  };

  const render = useCallback(
    (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const t = timestamp - startTimeRef.current;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2 - 40;

      // Sound triggers
      if (!muted) {
        if (t > 250 && !soundPlayedRef.current.orbHum) {
          soundPlayedRef.current.orbHum = true;
          soundEngine.playOrbHum(1400);
        }
        if (t >= TIMELINE.COLLISION_BURST && !soundPlayedRef.current.burst) {
          soundPlayedRef.current.burst = true;
          soundEngine.playCollisionBurst();
        }
        if (t >= TIMELINE.SPECULAR_SWEEP && !soundPlayedRef.current.shine) {
          soundPlayedRef.current.shine = true;
          soundEngine.playSpecularShine();
        }
      }

      // 1. Dark Studio Gradient Background
      ctx.save();
      const bgGrad = ctx.createRadialGradient(cx, cy, 50, cx, cy, 650);
      bgGrad.addColorStop(0, '#221e1a');
      bgGrad.addColorStop(0.45, '#0e0c0b');
      bgGrad.addColorStop(1, '#050505');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Ambient Pollen Dust
      pollenParticlesRef.current.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx + Math.sin(t / 900 + p.id) * 0.25;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.save();
        ctx.globalAlpha = p.alpha * 0.8;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 3. Central Ambient Honey Aura
      const glowT = Math.sin(t / 800) * 0.15 + 0.85;
      const centerGlow = ctx.createRadialGradient(cx, cy, 20, cx, cy, 320);
      centerGlow.addColorStop(0, `rgba(245, 158, 11, ${0.25 * glowT})`);
      centerGlow.addColorStop(0.65, `rgba(168, 85, 247, ${0.1 * glowT})`);
      centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      // 4. Phase 1: Orbital Triad Dance
      if (t < TIMELINE.COLLISION_BURST + 150) {
        const orbs = calculateOrbs(t, cx, cy, 110);

        if (t < TIMELINE.CONVERGENCE_START) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(cx, cy, 110, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(244, 185, 66, 0.15)';
          ctx.setLineDash([4, 6]);
          ctx.stroke();
          ctx.restore();
        }

        orbs.forEach((orb, idx) => {
          if (orb.opacity <= 0) return;

          const trailLength = 8;
          for (let i = 1; i <= trailLength; i++) {
            const pastT = Math.max(0, t - i * 26);
            const pastOrbs = calculateOrbs(pastT, cx, cy, 110);
            const past = pastOrbs[idx];
            ctx.save();
            ctx.globalAlpha = (1 - i / trailLength) * 0.4 * orb.opacity;
            ctx.fillStyle = orb.color;
            ctx.beginPath();
            ctx.arc(past.x, past.y, orb.radius * (1 - i / (trailLength + 2)), 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }

          ctx.save();
          ctx.globalAlpha = orb.opacity;
          ctx.shadowColor = orb.glowColor;
          ctx.shadowBlur = 28;

          const orbGrad = ctx.createRadialGradient(
            orb.x - orb.radius * 0.3,
            orb.y - orb.radius * 0.3,
            orb.radius * 0.1,
            orb.x,
            orb.y,
            orb.radius
          );
          orbGrad.addColorStop(0, '#FFFFFF');
          orbGrad.addColorStop(0.35, orb.color);
          orbGrad.addColorStop(1, orb.color);

          ctx.fillStyle = orbGrad;
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }

      // 5. Phase 2: Collision Shockwave & Spark Burst
      if (t >= TIMELINE.COLLISION_BURST) {
        const burstAge = (t - TIMELINE.COLLISION_BURST) / 1000;

        if (burstParticlesRef.current.length === 0) {
          const burst = [];
          const colors = ['#FBBF24', '#F97316', '#A855F7', '#FFFFFF', '#FDE047'];
          for (let i = 0; i < 80; i++) {
            const angle = (Math.PI * 2 * i) / 80 + (Math.random() - 0.5) * 0.3;
            const speed = 3 + Math.random() * 8.5;
            burst.push({
              x: cx,
              y: cy,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              size: 2 + Math.random() * 4.5,
              color: colors[Math.floor(Math.random() * colors.length)],
              life: 0,
              maxLife: 60 + Math.random() * 40,
            });
          }
          burstParticlesRef.current = burst;
        }

        if (burstAge < 0.9) {
          ctx.save();
          const ringRadius = burstAge * 340;
          const ringAlpha = Math.max(0, 1 - burstAge / 0.9);
          ctx.globalAlpha = ringAlpha * 0.85;
          ctx.strokeStyle = '#FBBF24';
          ctx.lineWidth = Math.max(1, 5 * (1 - burstAge / 0.9));
          ctx.shadowColor = '#F59E0B';
          ctx.shadowBlur = 24;
          ctx.beginPath();
          ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        burstParticlesRef.current.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.95;
          p.vy *= 0.95;
          p.life++;
          const progress = p.life / p.maxLife;
          const alpha = Math.max(0, 1 - progress);

          if (alpha > 0) {
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * (1 - progress * 0.4), 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        });
      }

      // 6. Phase 3: Large Logo & Typography Reveal
      if (t >= TIMELINE.COLLISION_BURST) {
        const emergeT = clamp(
          (t - TIMELINE.COLLISION_BURST) /
            (TIMELINE.MASCOT_SETTLE - TIMELINE.COLLISION_BURST),
          0,
          1
        );
        const scale = easeOutBack(emergeT);
        const opacity = clamp(emergeT * 2, 0, 1);
        const hoverY = Math.sin((t / 1000) * 3) * 5;

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.translate(cx, cy + hoverY);
        ctx.scale(scale, scale);

        // EXTRA LARGE Circular Emblem (targetSize = 220px)
        const targetSize = 220;

        // Circular Emblem Outer Halo
        ctx.save();
        ctx.beginPath();
        ctx.arc(0, -60, targetSize / 2, 0, Math.PI * 2);
        ctx.strokeStyle = '#F4B942';
        ctx.lineWidth = 4.5;
        ctx.shadowColor = '#F4B942';
        ctx.shadowBlur = 28;
        ctx.stroke();
        ctx.restore();

        // If not hidden (before bee takes flight), draw the brand mark
        if (!hideBee && brandImgRef.current) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(0, -60, targetSize / 2, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(
            brandImgRef.current,
            -targetSize / 2,
            -60 - targetSize / 2,
            targetSize,
            targetSize
          );
          ctx.restore();
        } else {
          // If bee has taken off: ring stands empty with golden ambient honey glow!
          ctx.save();
          const emptyGrad = ctx.createRadialGradient(0, -60, 10, 0, -60, targetSize / 2);
          emptyGrad.addColorStop(0, 'rgba(244, 185, 66, 0.25)');
          emptyGrad.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
          ctx.fillStyle = emptyGrad;
          ctx.beginPath();
          ctx.arc(0, -60, targetSize / 2 - 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // LARGE Brand Title: "ShopBee" (82px font size)
        if (t >= TIMELINE.TYPO_START) {
          const typoT = clamp(
            (t - TIMELINE.TYPO_START) /
              (TIMELINE.SPECULAR_SWEEP - TIMELINE.TYPO_START),
            0,
            1
          );
          const typoScale = easeOutCubic(typoT);

          ctx.save();
          ctx.globalAlpha = opacity * typoScale;
          ctx.font = 'bold 84px Fraunces, Georgia, serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#FDFBF7';
          ctx.shadowColor = 'rgba(244, 185, 66, 0.55)';
          ctx.shadowBlur = 24;
          ctx.fillText('ShopBee', 0, 105);
          ctx.restore();
        }

        // LARGE Subtitle & Tagline
        if (t >= TIMELINE.TAGLINE_START) {
          const tagT = clamp(
            (t - TIMELINE.TAGLINE_START) /
              (TIMELINE.TAGLINE_SETTLE - TIMELINE.TAGLINE_START),
            0,
            1
          );
          const easedTag = easeOutCubic(tagT);

          ctx.save();
          ctx.globalAlpha = opacity * easedTag;
          ctx.font = '600 17px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#F4B942';
          ctx.shadowColor = '#F4B942';
          ctx.shadowBlur = 12;
          ctx.fillText('DISCOVER YOUR STYLE · BEYOND FASHION', 0, 160);

          const lineW = easedTag * 90;
          ctx.strokeStyle = '#F4B942';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(-240 - lineW, 154);
          ctx.lineTo(-240, 154);
          ctx.moveTo(240, 154);
          ctx.lineTo(240 + lineW, 154);
          ctx.stroke();
          ctx.restore();
        }

        // Specular Shine Sweep across the large title
        if (t >= TIMELINE.SPECULAR_SWEEP && t <= TIMELINE.SPECULAR_SWEEP + 1200) {
          const specT = (t - TIMELINE.SPECULAR_SWEEP) / 1200;
          const sweepX = -280 + specT * 560;

          ctx.save();
          ctx.beginPath();
          ctx.rect(-260, 40, 520, 85);
          ctx.clip();

          const sweepGrad = ctx.createLinearGradient(
            sweepX - 60,
            0,
            sweepX + 60,
            0
          );
          sweepGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
          sweepGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.85)');
          sweepGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.fillStyle = sweepGrad;
          ctx.fillRect(-260, 40, 520, 85);
          ctx.restore();
        }

        ctx.restore(); // end mascot transform
      }

      ctx.restore(); // end main frame

      if (t < TOTAL_DURATION_MS) {
        rafRef.current = requestAnimationFrame(render);
      } else {
        if (onComplete) onComplete();
      }
    },
    [muted, onComplete, hideBee]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [render]);

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="block h-full w-full object-cover"
        style={{ touchAction: 'none' }}
      />

      <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
        <button
          type="button"
          onClick={toggleSound}
          className="flex items-center gap-2 rounded-full border border-gold/40 bg-ink/80 px-4 py-2 text-xs font-semibold tracking-wider text-sand backdrop-blur-md transition hover:border-gold hover:text-gold shadow-lg"
          aria-label={muted ? 'Unmute sound effects' : 'Mute sound effects'}
          suppressHydrationWarning
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-gold" />}
          <span>{muted ? 'Sound Off' : 'Sound On'}</span>
        </button>

        <button
          type="button"
          onClick={onDismiss}
          className="flex items-center gap-1.5 rounded-full border border-gold/40 bg-ink/80 px-4 py-2 text-xs font-semibold tracking-wider text-sand backdrop-blur-md transition hover:border-gold hover:text-gold shadow-lg"
          aria-label="Skip animation"
          suppressHydrationWarning
        >
          <span>Skip Intro</span>
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
