'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MapPin, Navigation, Phone, Mail, Clock } from 'lucide-react';
import StoreMap2D from './StoreMap2D';

const StoreScene = dynamic(() => import('./StoreScene'), {
  ssr: false,
  loading: () => (
    <div className="grid h-[560px] place-items-center rounded-[2rem] bg-ink text-cream">
      Loading ShopBee Fashion House 3D Virtual Model…
    </div>
  ),
});

export default function ExploreStoreExperience({ layout, phone, email }) {
  const [selected, setSelected] = useState(null);
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const ok = !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      setWebgl(ok);
    } catch {
      setWebgl(false);
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Physical Flagship Store</p>
          <h1 className="mt-2 font-serif text-5xl text-ink">Explore our store</h1>
          <p className="mt-3 max-w-2xl text-charcoal/80 text-base">{layout.disclaimer}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://maps.google.com/?q=Anna+Salai,+Thousand+Lights,+Chennai,+Tamil+Nadu+600002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream hover:bg-gold hover:text-ink transition shadow-sm"
          >
            <Navigation className="h-4 w-4" />
            Get Driving Directions
          </a>
        </div>
      </div>

      {/* 3D/2D Floor Experience */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        {webgl ? (
          <StoreScene layout={layout} selectedId={selected?.id} onSelect={setSelected} />
        ) : (
          <div className="rounded-[2rem] bg-sand p-6">
            <p className="mb-4 text-sm">WebGL is unavailable, so a 2D floor map is shown instead.</p>
            <StoreMap2D layout={layout} selectedId={selected?.id} onSelect={setSelected} />
          </div>
        )}

        <aside className="rounded-[2rem] border border-sand bg-white p-6 shadow-soft flex flex-col justify-between">
          {selected ? (
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Department</p>
              <h2 className="mt-2 font-serif text-3xl text-ink">{selected.name}</h2>
              <p className="mt-3 text-charcoal/75 text-base">{selected.description}</p>
              <p className="mt-4 text-sm font-medium text-charcoal/60">
                Ground Floor · ShopBee Flagship Fashion House, Chennai
              </p>
              {selected.categorySlug ? (
                <Link
                  href={`/${selected.categorySlug}`}
                  className="mt-6 inline-block rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-cream hover:bg-gold hover:text-ink transition"
                >
                  Shop {selected.name} online
                </Link>
              ) : (
                <p className="mt-6 text-sm text-charcoal/70 bg-cream/70 p-3 rounded-2xl border border-sand">
                  Billing counters & styling lounges are located next to the main atrium.
                </p>
              )}
            </div>
          ) : (
            <div>
              <h2 className="font-serif text-3xl text-ink">Walk the house</h2>
              <p className="mt-3 text-charcoal/75 text-base">
                Rotate 360°, zoom in, or tap any department (Men, Women, Kids, Cosmetics, Accessories, or Billing) to inspect the retail floor.
              </p>
              <div className="mt-4">
                <StoreMap2D layout={layout} selectedId={selected?.id} onSelect={setSelected} />
              </div>
            </div>
          )}

          {/* Contact quick strip */}
          <div className="mt-8 border-t border-sand/70 pt-5 text-xs text-charcoal/70 space-y-1.5">
            <p className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-gold" />
              <span>Direct Concierge: +91 {phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-gold" />
              <span>Inquiries: {email}</span>
            </p>
          </div>
        </aside>
      </div>

      {/* Chennai Flagship Location & Interactive Map Section */}
      <section className="mt-16 rounded-[2.5rem] border border-sand bg-white p-6 md:p-10 shadow-soft">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="lg:max-w-md">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-ink">
              <MapPin className="h-3.5 w-3.5 text-amber-700" />
              Chennai Flagship Store
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink">Visit Us in Chennai</h2>
            <p className="mt-4 text-base text-charcoal/80 leading-relaxed">
              Experience the physical grandeur of ShopBee Fashion House. Spanning over 15,000 sq.ft of experiential retail in Thousand Lights, Chennai, featuring live master-tailoring studios, luxury fitting suites, and artisanal cosmetic counters.
            </p>

            <div className="mt-6 space-y-3.5 text-sm text-charcoal/85">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ink">ShopBee Flagship Fashion House</p>
                  <p className="text-charcoal/75">No. 42 Anna Salai, Thousand Lights, Chennai, Tamil Nadu 600002</p>
                  <p className="text-xs text-charcoal/60 mt-0.5">(Opposite Thousand Lights Mosque / Near Mount Road)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold flex-shrink-0" />
                <div>
                  <span className="font-semibold text-ink">Opening Hours:</span> Monday–Saturday 10:00 AM – 8:30 PM · Sunday 11:00 AM – 7:00 PM
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <div>
                  <span className="font-semibold text-ink">Store Desk:</span> +91 90870 35510
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Anna+Salai,+Thousand+Lights,+Chennai,+Tamil+Nadu+600002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold/90 transition shadow-sm"
              >
                <Navigation className="h-4 w-4" />
                Open in Google Maps
              </a>
              <Link
                href="/festival-offers"
                className="inline-flex items-center gap-2 rounded-full border border-sand bg-cream/50 px-6 py-3 text-sm font-semibold text-charcoal hover:bg-sand transition"
              >
                In-Store Offers
              </Link>
            </div>
          </div>

          {/* Embedded Google Map of Chennai Address */}
          <div className="w-full lg:w-[620px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-sand shadow-inner bg-sand/30">
            <iframe
              title="ShopBee Chennai Flagship Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.586221568478!2d80.25203367507797!3d13.06198908726219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526615b3c3b5bb%3A0x63351b8dc2287968!2sAnna%20Salai%2C%20Thousand%20Lights%2C%20Chennai%2C%20Tamil%20Nadu%20600002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
