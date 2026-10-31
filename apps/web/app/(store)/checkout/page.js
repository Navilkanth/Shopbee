'use client';

import { useCart } from '@/lib/cart-store';
import { formatInr } from '@/lib/money';
import { CheckCircle2, CreditCard, ShieldCheck, Truck, Wallet } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [loading, setLoading] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const [form, setForm] = useState({
    firstName: 'Navin',
    lastName: 'Kumar',
    email: 'navin@example.com',
    phone: '9876543210',
    address: '42, Avinashi Road, Peelamedu',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641004',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 150;
  const grandTotal = subtotal + shipping;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      orderId: `SB-${Date.now().toString().slice(-6)}`,
      customer: form,
      items,
      paymentMethod,
      total: grandTotal,
      createdAt: new Date().toISOString(),
    };

    try {
      const RAW_API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      await fetch(`${RAW_API}/api/v1/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      }).catch(() => {});
    } catch {
      /* ignore network fallback */
    }

    // Save order in localStorage for Account order tracking
    try {
      const savedOrders = JSON.parse(localStorage.getItem('shopbee_orders') || '[]');
      savedOrders.unshift(orderData);
      localStorage.setItem('shopbee_orders', JSON.stringify(savedOrders));
    } catch {
      /* ignore */
    }

    setLoading(false);
    setCompletedOrder(orderData);
    clear();
  };

  if (completedOrder) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center md:px-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold font-semibold">Order Placed Successfully</p>
        <h1 className="mt-2 font-serif text-4xl text-ink">Thank you, {completedOrder.customer.firstName}!</h1>
        <p className="mt-3 text-charcoal/80">
          Your order ID is <span className="font-mono font-bold text-ink">{completedOrder.orderId}</span>. A confirmation email and tracking link will be sent to {completedOrder.customer.email}.
        </p>

        <div className="mt-8 rounded-3xl border border-sand bg-white p-6 text-left">
          <h2 className="font-serif text-xl border-b border-sand pb-3">Delivery Summary</h2>
          <div className="mt-4 space-y-2 text-sm text-charcoal/80">
            <p>
              <strong className="text-ink">Recipient:</strong> {completedOrder.customer.firstName} {completedOrder.customer.lastName} ({completedOrder.customer.phone})
            </p>
            <p>
              <strong className="text-ink">Address:</strong> {completedOrder.customer.address}, {completedOrder.customer.city}, {completedOrder.customer.state} - {completedOrder.customer.pincode}
            </p>
            <p>
              <strong className="text-ink">Payment Method:</strong> {completedOrder.paymentMethod.toUpperCase()} · Status: <span className="text-emerald-700 font-semibold">Confirmed</span>
            </p>
            <p>
              <strong className="text-ink">Amount:</strong> {formatInr(completedOrder.total)}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/account"
            className="rounded-full bg-ink px-8 py-3 text-sm font-semibold text-cream transition hover:bg-ink/90"
          >
            View in My Orders
          </Link>
          <Link
            href="/"
            className="rounded-full border border-sand bg-white px-8 py-3 text-sm font-semibold text-ink transition hover:border-ink/50"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="font-serif text-4xl text-ink md:text-5xl">Checkout</h1>
      <p className="mt-2 text-charcoal/70">Complete your shipping and payment details.</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        {/* Checkout Form */}
        <form onSubmit={handlePlaceOrder} className="space-y-8">
          <div className="rounded-[2rem] border border-sand bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-2 text-lg font-semibold text-ink">
              <Truck className="h-5 w-5 text-gold" /> 1. Shipping Address
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal/70">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal/70">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal/70">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal/70">Mobile Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  suppressHydrationWarning
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-wider text-charcoal/70">Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal/70">City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal/70">State</label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal/70">PIN Code</label>
                <input
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-full border border-sand bg-cream/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  suppressHydrationWarning
                />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-sand bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-2 text-lg font-semibold text-ink">
              <CreditCard className="h-5 w-5 text-gold" /> 2. Payment Method
            </div>

            <div className="mt-4 space-y-3">
              <label
                className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${
                  paymentMethod === 'upi' ? 'border-ink bg-sand/30 font-semibold' : 'border-sand'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                    className="accent-ink"
                    suppressHydrationWarning
                  />
                  <span>UPI / QR (Google Pay, PhonePe, Paytm, BHIM)</span>
                </div>
                <Wallet className="h-5 w-5 text-charcoal/60" />
              </label>

              <label
                className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${
                  paymentMethod === 'card' ? 'border-ink bg-sand/30 font-semibold' : 'border-sand'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="accent-ink"
                    suppressHydrationWarning
                  />
                  <span>Credit / Debit Card (Visa, MasterCard, RuPay)</span>
                </div>
                <CreditCard className="h-5 w-5 text-charcoal/60" />
              </label>

              <label
                className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${
                  paymentMethod === 'cod' ? 'border-ink bg-sand/30 font-semibold' : 'border-sand'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="accent-ink"
                    suppressHydrationWarning
                  />
                  <span>Cash on Delivery (Pay at your doorstep)</span>
                </div>
                <Truck className="h-5 w-5 text-charcoal/60" />
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || items.length === 0}
            className="w-full rounded-full bg-gold py-4 text-center text-base font-bold text-ink transition hover:bg-gold/90 active:scale-95 disabled:opacity-50"
            suppressHydrationWarning
          >
            {loading ? 'Processing Order…' : `Confirm & Place Order (${formatInr(grandTotal)})`}
          </button>
        </form>

        {/* Cart Review Sidebar */}
        <div>
          <div className="rounded-[2rem] border border-sand bg-white p-6 shadow-soft md:p-8">
            <h2 className="font-serif text-xl text-ink">Order Items ({items.length})</h2>
            <div className="mt-4 max-h-72 space-y-4 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between border-b border-sand/60 pb-3 text-sm">
                  <div>
                    <p className="font-medium text-ink">{item.name}</p>
                    <p className="text-xs text-charcoal/60">
                      Qty: {item.quantity} · Size: {item.size}
                    </p>
                  </div>
                  <p className="font-semibold text-ink">{formatInr(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>

            <dl className="mt-6 space-y-3 border-t border-sand pt-4 text-sm">
              <div className="flex justify-between text-charcoal/80">
                <dt>Subtotal</dt>
                <dd className="font-medium text-ink">{formatInr(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-charcoal/80">
                <dt>Shipping</dt>
                <dd className="font-medium text-ink">
                  {shipping === 0 ? <span className="text-emerald-700 font-semibold">FREE</span> : formatInr(shipping)}
                </dd>
              </div>
              <div className="flex justify-between border-t border-sand pt-3 text-base font-bold text-ink">
                <dt>Total Payable</dt>
                <dd className="text-lg">{formatInr(grandTotal)}</dd>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-2 rounded-xl bg-sand/40 p-3 text-xs text-charcoal/80">
              <ShieldCheck className="h-5 w-5 text-emerald-700 flex-shrink-0" />
              <span>100% Encrypted Transactions. ShopBee Certified Buyer Protection.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
