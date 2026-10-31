'use client';

import { useCart } from '@/lib/cart-store';
import { formatInr } from '@/lib/money';
import { ArrowRight, Check, ShoppingBag, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { items, loaded, subtotal, updateQuantity, removeItem } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'DIWALI30') {
      setDiscountPercent(30);
      setCouponApplied('DIWALI30 (30% Festive Discount Applied)');
    } else if (code === 'FESTIVE20') {
      setDiscountPercent(20);
      setCouponApplied('FESTIVE20 (20% Off Applied)');
    } else if (code === 'FREESHIP') {
      setDiscountPercent(5);
      setCouponApplied('FREESHIP (Special Shipping Discount)');
    } else {
      setCouponError('Invalid coupon code. Try DIWALI30 or FESTIVE20');
    }
  };

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 150;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  if (!loaded) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-6">
        <p className="font-serif text-2xl text-ink">Loading your shopping bag…</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24 text-center md:px-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sand">
          <ShoppingBag className="h-10 w-10 text-charcoal/60" />
        </div>
        <h1 className="mt-6 font-serif text-4xl text-ink">Your bag is empty</h1>
        <p className="mt-3 text-charcoal/70">
          Discover our new season pieces across menswear, womenswear, and artisanal cosmetics.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/women"
            className="rounded-full bg-ink px-8 py-3 text-sm font-semibold text-cream transition hover:bg-ink/90"
          >
            Explore Women
          </Link>
          <Link
            href="/men"
            className="rounded-full border border-sand bg-white px-8 py-3 text-sm font-semibold text-ink transition hover:border-ink/50"
          >
            Explore Men
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="flex items-baseline justify-between border-b border-sand pb-6">
        <h1 className="font-serif text-4xl text-ink md:text-5xl">Shopping Bag</h1>
        <p className="text-sm text-charcoal/70">{items.length} unique items</p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        {/* Item List */}
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-3xl border border-sand bg-white p-4 transition md:p-6"
            >
              <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-sand md:h-36 md:w-32">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gold">{item.brand}</p>
                      <Link
                        href={`/products/${item.slug}`}
                        className="font-serif text-lg font-medium text-ink hover:underline md:text-xl"
                      >
                        {item.name}
                      </Link>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="rounded-full p-2 text-charcoal/40 transition hover:bg-sand/60 hover:text-red-600"
                      aria-label="Remove item"
                      suppressHydrationWarning
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="mt-1 text-xs text-charcoal/70">
                    Size: <span className="font-semibold text-ink">{item.size}</span> · Colour:{' '}
                    <span className="font-semibold text-ink">{item.color}</span>
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-sand bg-sand/30 font-medium hover:bg-sand"
                      suppressHydrationWarning
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-sand bg-sand/30 font-medium hover:bg-sand"
                      suppressHydrationWarning
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-base font-semibold text-ink">
                      {formatInr(item.price * item.quantity)}
                    </p>
                    {item.regularPrice > item.price && (
                      <p className="text-xs text-charcoal/50 line-through">
                        {formatInr(item.regularPrice * item.quantity)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-sand/80 bg-white/60 p-4 text-xs text-charcoal/70">
            🚚 <span className="font-semibold text-ink">ShopBee Express Delivery:</span> Orders above ₹999 qualify for complimentary domestic express courier.
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div>
          <div className="rounded-[2rem] border border-sand bg-white p-6 shadow-soft md:p-8">
            <h2 className="font-serif text-2xl text-ink">Order Summary</h2>

            {/* Promo code */}
            <form onSubmit={handleApplyCoupon} className="mt-6">
              <label htmlFor="coupon" className="text-xs uppercase tracking-widest text-charcoal/60">
                Promotional Code
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="coupon"
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="e.g. DIWALI30"
                  className="w-full rounded-full border border-sand bg-cream/50 px-4 py-2 text-sm uppercase outline-none focus:border-gold"
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cream transition hover:bg-ink/90"
                  suppressHydrationWarning
                >
                  Apply
                </button>
              </div>
              {couponApplied && (
                <p className="mt-2 flex items-center gap-1 text-xs text-emerald-700">
                  <Check className="h-3 w-3" /> {couponApplied}
                </p>
              )}
              {couponError && <p className="mt-2 text-xs text-rose-600">{couponError}</p>}
            </form>

            <dl className="mt-6 space-y-3 border-t border-sand pt-6 text-sm">
              <div className="flex justify-between text-charcoal/80">
                <dt>Subtotal</dt>
                <dd className="font-medium text-ink">{formatInr(subtotal)}</dd>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <dt>Promo Discount ({discountPercent}%)</dt>
                  <dd className="font-medium">- {formatInr(discountAmount)}</dd>
                </div>
              )}

              <div className="flex justify-between text-charcoal/80">
                <dt>Estimated Shipping</dt>
                <dd className="font-medium text-ink">
                  {shipping === 0 ? <span className="text-emerald-700">FREE</span> : formatInr(shipping)}
                </dd>
              </div>

              <div className="flex justify-between text-charcoal/80">
                <dt>Taxes & GST (included)</dt>
                <dd className="font-medium text-ink">{formatInr(Math.round(grandTotal * 0.05))}</dd>
              </div>

              <div className="flex justify-between border-t border-sand pt-4 text-base font-bold text-ink">
                <dt>Estimated Total</dt>
                <dd className="text-xl text-ink">{formatInr(grandTotal)}</dd>
              </div>
            </dl>

            <Link
              href="/checkout"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 text-center text-sm font-bold text-ink transition hover:bg-gold/90 active:scale-95"
            >
              Proceed to Checkout <ArrowRight className="h-4 w-4" />
            </Link>

            <p className="mt-4 text-center text-[11px] text-charcoal/60">
              Guaranteed Safe Checkout · 7-Day Hassle-Free Returns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
