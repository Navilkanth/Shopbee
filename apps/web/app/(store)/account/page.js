'use client';

import { formatInr } from '@/lib/money';
import { CheckCircle2, Clock, MapPin, Package, Shield, Truck, User } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SEED_ORDERS = [
  {
    orderId: 'SB-892401',
    createdAt: '2026-10-24T10:30:00Z',
    status: 'Delivered',
    paymentMethod: 'UPI',
    total: 3499,
    items: [
      {
        name: 'Indigo Selvedge Raw Denim',
        size: '32',
        color: 'Deep Indigo',
        quantity: 1,
        price: 3499,
      },
    ],
  },
  {
    orderId: 'SB-874102',
    createdAt: '2026-10-18T14:15:00Z',
    status: 'In Transit',
    paymentMethod: 'Card',
    total: 8998,
    items: [
      {
        name: 'Heritage Banarasi Katan Silk Saree',
        size: 'Free Size',
        color: 'Crimson Gold',
        quantity: 1,
        price: 7499,
      },
      {
        name: 'Gilded Satin Matte Lip Colour',
        size: 'Standard',
        color: 'Berry Nude',
        quantity: 1,
        price: 799,
      },
    ],
  },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const localOrders = JSON.parse(localStorage.getItem('shopbee_orders') || '[]');
      setOrders([...localOrders, ...SEED_ORDERS]);
    } catch {
      setOrders(SEED_ORDERS);
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      {/* Header Profile Summary */}
      <div className="flex flex-col gap-4 rounded-[2rem] border border-sand bg-white p-6 shadow-soft md:flex-row md:items-center md:justify-between md:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand text-ink">
            <User className="h-8 w-8" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-2xl text-ink">Dev Customer</h1>
              <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-bold text-ink">
                ShopBee Gold Member
              </span>
            </div>
            <p className="mt-1 text-xs text-charcoal/70">
              dev.customer@shopbee.local · +91 90870 35510
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              activeTab === 'orders' ? 'bg-ink text-cream' : 'border border-sand bg-white text-charcoal'
            }`}
            suppressHydrationWarning
          >
            My Orders ({orders.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              activeTab === 'profile' ? 'bg-ink text-cream' : 'border border-sand bg-white text-charcoal'
            }`}
            suppressHydrationWarning
          >
            Addresses & Settings
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-10">
        {activeTab === 'orders' ? (
          <div>
            <h2 className="font-serif text-3xl text-ink">Order History</h2>
            <p className="mt-1 text-sm text-charcoal/70">
              Track active deliveries and view receipts of past purchases.
            </p>

            <div className="mt-6 space-y-6">
              {orders.map((ord) => (
                <div
                  key={ord.orderId}
                  className="rounded-3xl border border-sand bg-white p-6 shadow-soft transition"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sand/60 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-charcoal/60">
                        Order #{ord.orderId}
                      </p>
                      <p className="text-xs text-charcoal/60 mt-0.5">
                        Placed on {new Date(ord.createdAt).toLocaleDateString('en-IN', { dateStyle: 'medium' })}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                        {ord.status === 'Delivered' ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        ) : (
                          <Truck className="h-3.5 w-3.5 text-gold" />
                        )}
                        {ord.status || 'Confirmed'}
                      </span>
                      <span className="text-base font-bold text-ink">{formatInr(ord.total)}</span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="mt-4 space-y-2">
                    {ord.items.map((it, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-charcoal/80">
                          {it.quantity}x <strong className="text-ink">{it.name}</strong> ({it.size || 'M'})
                        </span>
                        <span className="font-medium text-ink">{formatInr(it.price * (it.quantity || 1))}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-sand/60 pt-4 text-xs text-charcoal/60">
                    <span>Paid via {ord.paymentMethod?.toUpperCase() || 'ONLINE'}</span>
                    <button
                      type="button"
                      onClick={() => alert(`Invoice downloaded for Order #${ord.orderId}`)}
                      className="font-medium text-gold underline hover:text-ink"
                      suppressHydrationWarning
                    >
                      Download Tax Invoice (PDF)
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-sand bg-white p-6 shadow-soft md:p-8">
              <h3 className="font-serif text-2xl text-ink flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" /> Saved Delivery Addresses
              </h3>
              <div className="mt-6 rounded-2xl border border-sand bg-cream/40 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">Primary Residence</span>
                  <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-[10px] font-bold text-ink">
                    Default
                  </span>
                </div>
                <p className="mt-2 text-sm text-charcoal/80">
                  ShopBee Fashion House, Ground Floor, MG Road
                </p>
                <p className="text-sm text-charcoal/80">Coimbatore, Tamil Nadu 641001</p>
                <p className="mt-2 text-xs text-charcoal/60">Contact: +91 90870 35510</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-sand bg-white p-6 shadow-soft md:p-8">
              <h3 className="font-serif text-2xl text-ink flex items-center gap-2">
                <Shield className="h-5 w-5 text-gold" /> Account & Security
              </h3>
              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <p className="text-xs uppercase text-charcoal/60">Email Address</p>
                  <p className="font-medium text-ink">dev.customer@shopbee.local</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-charcoal/60">Phone</p>
                  <p className="font-medium text-ink">+91 90870 35510</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-charcoal/60">Two-Factor Authentication</p>
                  <p className="text-emerald-700 font-medium">SMS OTP Verified</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
