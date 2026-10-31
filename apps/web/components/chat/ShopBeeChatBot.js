'use client';

import { queryKnowledgeBase } from '@/lib/ai-knowledge';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  ExternalLink,
  MessageCircle,
  Minimize2,
  RotateCcw,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const INITIAL_MESSAGES = [
  {
    id: 'welcome-1',
    sender: 'bot',
    text: "Bzz! 🐝 Welcome to **ShopBee**. I'm **BeeBot**, your AI Concierge with complete knowledge of our 20+ year handloom heritage, pure silks, active discount coupons, store locations, and shipping policies.\n\nHow can I help you today? You can ask any question or ask me to navigate to any section!",
    actions: [
      { label: '🏷️ 30% Festive Coupons', path: '/festival-offers' },
      { label: '🏛️ Tour 3D Virtual Store', path: '/explore-store' },
      { label: '👗 Banarasi & Katan Silks', path: '/women' },
      { label: '📜 Our 20-Year Legacy', path: '/about' },
      { label: '🚚 Shipping & Returns', path: '/policies/shipping' },
      { label: '📍 Chennai Store Address', path: '/explore-store' },
    ],
    products: [],
  },
];

const SUGGESTIONS = [
  'Show active discount coupons',
  'Do you have pure silk sarees?',
  'Where is your Chennai store located?',
  'What is your shipping policy?',
  'How do I exchange my size?',
  'Tell me about your 20-year heritage',
  'Take me to the 3D virtual store',
  'Wholesale bulk pricing tiers',
];

export default function ShopBeeChatBot() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [unreadCount, setUnreadCount] = useState(1);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
      setHasOpened(true);
    }
  }, [isOpen, messages, isTyping]);

  // Subtle web audio chime for message responses
  const playChime = () => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      /* Audio not allowed or unavailable */
    }
  };

  const handleSend = async (queryText) => {
    const textToSend = queryText || input;
    if (!textToSend.trim()) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate smart thinking delay
    setTimeout(() => {
      const response = queryKnowledgeBase(userMsg.text);

      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        actions: response.actions || [],
        products: response.products || [],
        autoNavigate: response.autoNavigate,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      playChime();

      // Handle auto-navigation if detected
      if (response.autoNavigate) {
        setTimeout(() => {
          router.push(response.autoNavigate);
        }, 1200);
      }
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setInput('');
  };

  const handleActionClick = (path) => {
    if (!path) return;
    if (path.startsWith('http') || path.startsWith('tel:') || path.startsWith('mailto:')) {
      window.location.href = path;
    } else {
      router.push(path);
      // On mobile screens, close window after navigation
      if (typeof window !== 'undefined' && window.innerWidth < 640) {
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="hidden lg:flex items-center gap-2 mr-3 rounded-full border border-gold/40 bg-ink/90 px-3.5 py-1.5 text-xs text-cream shadow-xl backdrop-blur-md cursor-pointer hover:border-gold"
            onClick={() => setIsOpen(true)}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="font-medium text-sand">Ask ShopBee AI</span>
          </motion.div>
        )}

        <button
          type="button"
          aria-label={isOpen ? 'Close Chatbot' : 'Open ShopBee AI Chat'}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/80 bg-gradient-to-tr from-[#16120e] via-[#241a12] to-ink text-gold shadow-2xl transition-all duration-300 hover:scale-110 hover:border-gold hover:shadow-[0_0_25px_rgba(244,185,66,0.5)] focus:outline-none"
        >
          {/* Animated Mascot Bee */}
          <div className="relative h-7 w-7">
            <svg viewBox="0 0 100 100" className="h-7 w-7 drop-shadow-[0_0_6px_rgba(244,185,66,0.9)]">
              <ellipse cx="50" cy="52" rx="15" ry="21" fill="#F4B942" stroke="#151515" strokeWidth="2.5" />
              <path d="M 38 46 Q 50 49 62 46" stroke="#151515" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 37 54 Q 50 57 63 54" stroke="#151515" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 40 62 Q 50 65 60 62" stroke="#151515" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="50" cy="34" r="8" fill="#151515" />
              <circle cx="47" cy="33" r="1.5" fill="#FFFFFF" />
              <circle cx="53" cy="33" r="1.5" fill="#FFFFFF" />
            </svg>
          </div>

          {/* Unread indicator */}
          {!isOpen && unreadCount > 0 && !hasOpened && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white shadow-md">
              1
            </span>
          )}
        </button>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 flex h-[600px] max-h-[85vh] w-[94vw] sm:w-[420px] flex-col overflow-hidden rounded-[2rem] border border-gold/40 bg-gradient-to-b from-[#18130e] via-[#1f1610] to-[#120e0b] shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-cream backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gold/20 bg-black/40 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-gold/15">
                  <Bot className="h-5 w-5 text-gold" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-ink bg-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif text-base font-bold text-cream">BeeBot AI</h3>
                    <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold border border-gold/30">
                      Concierge
                    </span>
                  </div>
                  <p className="text-[11px] text-sand/70">ShopBee 20+ Yr Knowledge Expert</p>
                </div>
              </div>

              {/* Header Controls */}
              <div className="flex items-center gap-1 text-sand/70">
                <button
                  type="button"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  title={soundEnabled ? 'Mute Chime' : 'Enable Chime'}
                  className="rounded-full p-2 transition hover:bg-white/10 hover:text-gold"
                >
                  {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset Conversation"
                  className="rounded-full p-2 transition hover:bg-white/10 hover:text-gold"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close Chat"
                  className="rounded-full p-2 transition hover:bg-white/10 hover:text-gold"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Quick Suggestion Chips (horizontal slider) */}
            <div className="border-b border-white/5 bg-black/20 px-4 py-2.5 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 w-max">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSend(suggestion)}
                    className="whitespace-nowrap rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium text-sand transition hover:border-gold hover:bg-gold/20 hover:text-cream"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                  >
                    {/* Message Bubble */}
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                        isUser
                          ? 'bg-gradient-to-r from-gold via-amber-400 to-amber-500 text-ink font-medium shadow-md rounded-br-none'
                          : 'bg-white/10 border border-gold/20 text-cream/95 backdrop-blur-md rounded-bl-none shadow-sm'
                      }`}
                    >
                      <div className="whitespace-pre-line">
                        {msg.text.split('\n').map((line, idx) => {
                          // Simple bold parser
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={idx} className={idx > 0 ? 'mt-1.5' : ''}>
                              {parts.map((part, pIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return (
                                    <strong key={pIdx} className={isUser ? 'text-black' : 'text-gold font-bold'}>
                                      {part.slice(2, -2)}
                                    </strong>
                                  );
                                }
                                return part;
                              })}
                            </p>
                          );
                        })}
                      </div>

                      {/* Auto-navigate countdown notice */}
                      {msg.autoNavigate && (
                        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-gold font-bold">
                          <Sparkles className="h-3 w-3 animate-spin" />
                          <span>Navigating to page now...</span>
                        </div>
                      )}
                    </div>

                    {/* Action Navigation Buttons */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                        {msg.actions.map((act, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleActionClick(act.path)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-3 py-1.5 text-[11px] font-semibold text-gold transition hover:bg-gold hover:text-ink shadow-sm"
                          >
                            <span>{act.label}</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Product Recommendation Cards */}
                    {msg.products && msg.products.length > 0 && (
                      <div className="mt-3 grid grid-cols-2 gap-2 w-full max-w-[95%]">
                        {msg.products.map((p) => (
                          <div
                            key={p.id}
                            className="flex flex-col justify-between overflow-hidden rounded-xl border border-gold/20 bg-black/40 p-2 text-left"
                          >
                            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-black/20">
                              <Image
                                src={typeof p.images?.[0] === 'string' ? p.images[0] : p.images?.[0]?.url || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80'}
                                alt={p.name || p.title || 'ShopBee Product'}
                                fill
                                sizes="(max-width: 640px) 120px, 150px"
                                className="object-cover transition duration-300 hover:scale-105"
                              />
                              {(p.badge || p.tags?.[0]) && (
                                <span className="absolute top-1 left-1 rounded bg-gold/90 px-1 py-0.5 text-[8px] font-bold text-ink">
                                  {p.badge || p.tags?.[0]}
                                </span>
                              )}
                            </div>
                            <p className="mt-1.5 text-[11px] font-semibold text-cream line-clamp-1">
                              {p.name || p.title}
                            </p>
                            <p className="text-[10px] text-gold font-bold">
                              ₹{(p.price ?? p.salePrice ?? p.regularPrice ?? 0).toLocaleString('en-IN')}
                            </p>
                            <button
                              type="button"
                              onClick={() => handleActionClick(`/products/${p.slug}`)}
                              className="mt-1.5 inline-flex w-full items-center justify-center rounded-lg bg-gold/20 py-1 text-[10px] font-semibold text-gold transition hover:bg-gold hover:text-ink"
                            >
                              View Item
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 rounded-2xl border border-gold/20 bg-white/10 px-4 py-2.5 text-xs text-sand/80 w-max">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1 text-[11px] text-gold">BeeBot is searching knowledge...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="border-t border-gold/20 bg-black/50 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about silks, coupons, 3D store, Chennai..."
                  className="flex-1 rounded-full border border-gold/30 bg-white/10 px-4 py-2.5 text-xs text-cream placeholder-sand/50 focus:border-gold focus:bg-white/15 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink transition hover:bg-gold/90 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-md"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <div className="mt-1.5 text-center">
                <span className="text-[10px] text-sand/40">
                  ShopBee AI Assistant · Trained on 20+ Years of Handloom Heritage
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
