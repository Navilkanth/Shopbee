'use client';

import { useCart } from '@/lib/cart-store';
import { Heart, Menu, Search, ShoppingBag, Sparkles, User, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Logo from './Logo';

const PRIMARY_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/men', label: 'Men' },
  { href: '/women', label: 'Women' },
  { href: '/kids', label: 'Kids' },
  { href: '/cosmetics', label: 'Cosmetics' },
  { href: '/accessories', label: 'Accessories' },
];

const SECONDARY_LINKS = [
  { href: '/festival-offers', label: 'Festival Offers', highlight: true },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/explore-store', label: 'Explore 3D Store' },
  { href: '/about', label: 'About Us' },
];

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar({ storeName = 'ShopBee' }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const { count } = useCart();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = open || searchOpen ? 'hidden' : '';
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [open, searchOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/80 bg-cream/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 md:px-6">
        {/* Mobile Hamburger */}
        <button
          type="button"
          className="rounded-full p-2.5 transition hover:bg-sand/60 lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          suppressHydrationWarning
        >
          <Menu className="h-6 w-6 text-ink" />
        </button>

        {/* Brand Logo (Upgraded Size & Text) */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 xl:gap-2 text-[15.5px] font-medium text-charcoal lg:flex">
          {PRIMARY_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap hover:text-ink hover:bg-sand/50 ${
                  active ? 'font-bold text-ink bg-sand/70 shadow-sm' : 'text-charcoal/85'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <span className="mx-1 h-4 w-px bg-sand/80" />

          {SECONDARY_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-[14.5px] transition-all duration-200 whitespace-nowrap ${
                  link.highlight
                    ? 'font-semibold text-amber-900 bg-gold/25 hover:bg-gold/40 border border-gold/40'
                    : 'text-charcoal/80 hover:text-ink hover:bg-sand/50'
                } ${active && !link.highlight ? 'font-bold text-ink bg-sand/70' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons (Headers / Controls) */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search Button */}
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-charcoal transition hover:bg-sand/60 hover:text-ink"
            aria-label="Search catalog"
            onClick={() => setSearchOpen(true)}
            suppressHydrationWarning
          >
            <Search className="h-5 w-5" />
            <span className="hidden xl:inline font-medium">Search</span>
          </button>

          {/* Account Icon */}
          <Link
            href="/account"
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-charcoal transition hover:bg-sand/60 hover:text-ink"
            aria-label="My Account"
            suppressHydrationWarning
          >
            <User className="h-5 w-5" />
            <span className="hidden xl:inline font-medium">Account</span>
          </Link>

          {/* Wishlist / Offers */}
          <Link
            href="/festival-offers"
            className="hidden sm:flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm text-charcoal transition hover:bg-sand/60 hover:text-ink"
            aria-label="Festival Offers"
            suppressHydrationWarning
          >
            <Sparkles className="h-5 w-5 text-gold" />
          </Link>

          {/* Shopping Cart Button */}
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream shadow-sm transition duration-200 hover:bg-gold hover:text-ink hover:scale-105"
            aria-label="Cart"
            suppressHydrationWarning
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="hidden sm:inline">Bag</span>
            {mounted && count > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Slide-out Drawer for Mobile */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity"
              onClick={() => setOpen(false)}
            />
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-cream p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-sand pb-4">
                <Logo size="sm" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-charcoal hover:bg-sand"
                  aria-label="Close menu"
                  suppressHydrationWarning
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                <p className="px-3 text-xs font-semibold uppercase tracking-wider text-charcoal/50">
                  Shop Categories
                </p>
                {PRIMARY_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-2xl px-4 py-3 text-base font-medium transition ${
                      isActive(pathname, link.href)
                        ? 'bg-ink font-bold text-cream'
                        : 'text-charcoal hover:bg-sand/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-charcoal/50">
                  Discover More
                </p>
                {SECONDARY_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-2xl px-4 py-3 text-base font-medium transition ${
                      link.highlight
                        ? 'bg-gold/25 text-amber-900 font-semibold'
                        : 'text-charcoal hover:bg-sand/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto border-t border-sand pt-6 space-y-2">
                <Link
                  href="/account"
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-charcoal hover:bg-sand/60"
                >
                  <User className="h-5 w-5" />
                  My Account
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Search Overlay Modal */}
      {searchOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20">
            <div
              className="fixed inset-0 bg-ink/60 backdrop-blur-sm"
              onClick={() => setSearchOpen(false)}
            />
            <div className="relative w-full max-w-2xl rounded-[2.5rem] border border-sand bg-cream p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-3">
                <h3 className="font-serif text-2xl text-ink">Search ShopBee Collections</h3>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="rounded-full p-2 text-charcoal hover:bg-sand"
                  aria-label="Close search"
                  suppressHydrationWarning
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const q = searchQuery.trim();
                  setSearchOpen(false);
                  if (q) {
                    router.push(`/search?q=${encodeURIComponent(q)}`);
                  }
                }}
                className="mt-3 flex items-center gap-2 rounded-full border border-sand bg-white px-5 py-3 shadow-inner"
              >
                <Search className="h-5 w-5 text-charcoal/50" />
                <input
                  type="text"
                  name="q"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search banarasi saree, linen shirts, fragrances, bags…"
                  autoFocus
                  className="w-full bg-transparent text-base text-ink placeholder-charcoal/50 focus:outline-none"
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cream hover:bg-gold hover:text-ink transition"
                  suppressHydrationWarning
                >
                  Search
                </button>
              </form>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
