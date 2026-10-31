'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Gift, Sparkles, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MODAL_DISMISSED_KEY = 'shopbee_auth_modal_dismissed';

export default function AuthPromptModal() {
  const [open, setOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    try {
      if (sessionStorage.getItem(MODAL_DISMISSED_KEY)) return;
    } catch {
      return;
    }

    // Trigger exactly after 15 seconds of browsing
    const timer = setTimeout(() => {
      setOpen(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(MODAL_DISMISSED_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-ink/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-gold/40 bg-cream p-8 shadow-2xl md:p-10"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-6 top-6 rounded-full border border-sand bg-white/80 p-2 text-charcoal/70 transition hover:bg-white hover:text-ink"
              aria-label="Close dialog"
              suppressHydrationWarning
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-ink">
                  <CheckCircle className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="mt-5 font-serif text-3xl text-ink">Welcome to the Club!</h3>
                <p className="mt-2 text-base text-charcoal/80">
                  Your 15% VIP welcome coupon code <strong className="text-ink">WELCOME15</strong> has been applied to your session.
                </p>
              </div>
            ) : (
              <div>
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                  VIP Member Privilege
                </div>

                <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
                  {isRegister ? 'Join the ShopBee Hive' : 'Welcome Back to ShopBee'}
                </h2>
                <p className="mt-2 text-sm text-charcoal/80 md:text-base">
                  {isRegister
                    ? 'Create your account now to unlock flat 15% OFF, early festival access, and complimentary insured delivery.'
                    : 'Sign in to access your saved order history, rewards, and custom tailoring requests.'}
                </p>

                {/* Offer Pill */}
                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-3.5">
                  <Gift className="h-6 w-6 text-gold flex-shrink-0" />
                  <p className="text-xs font-medium text-ink md:text-sm">
                    Special Gift: Use code <span className="font-bold tracking-wider text-ink">WELCOME15</span> for 15% off your first luxury order!
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1.5 w-full rounded-full border border-sand bg-white px-5 py-3 text-base text-ink shadow-sm focus:border-gold focus:outline-none"
                      suppressHydrationWarning
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1.5 w-full rounded-full border border-sand bg-white px-5 py-3 text-base text-ink shadow-sm focus:border-gold focus:outline-none"
                      suppressHydrationWarning
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-ink py-3.5 text-base font-semibold text-cream shadow-md transition duration-300 hover:bg-gold hover:text-ink"
                    suppressHydrationWarning
                  >
                    {isRegister ? 'Create Account & Claim 15% OFF' : 'Sign In to Account'}
                  </button>
                </form>

                {/* Toggle between Login and Register */}
                <div className="mt-6 flex items-center justify-between text-xs md:text-sm text-charcoal/70">
                  <button
                    type="button"
                    onClick={() => setIsRegister(!isRegister)}
                    className="font-medium text-ink underline hover:text-gold"
                    suppressHydrationWarning
                  >
                    {isRegister ? 'Already have an account? Sign In' : 'New here? Register with 15% OFF'}
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="hover:underline"
                    suppressHydrationWarning
                  >
                    Continue browsing
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

