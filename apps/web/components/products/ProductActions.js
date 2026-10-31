'use client';

import { addToCart } from '@/lib/cart-store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProductActions({ product }) {
  const router = useRouter();
  const variants = product.variants || [];

  const availableSizes = [...new Set(variants.map((v) => v.size).filter(Boolean))];
  const availableColors = [...new Set(variants.map((v) => v.color).filter(Boolean))];

  const [selectedSize, setSelectedSize] = useState(availableSizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(availableColors[0] || 'Default');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, {
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2400);
  };

  const handleBuyNow = () => {
    addToCart(product, {
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    router.push('/checkout');
  };

  return (
    <div className="mt-8 space-y-6">
      {availableSizes.length > 0 && (
        <div>
          <p className="text-sm font-medium text-ink">Select Size</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {availableSizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedSize === size
                    ? 'bg-ink text-cream shadow-sm'
                    : 'border border-sand bg-white text-charcoal hover:border-ink/50'
                }`}
                suppressHydrationWarning
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {availableColors.length > 0 && availableColors[0] !== 'Default' && (
        <div>
          <p className="text-sm font-medium text-ink">Select Colour</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {availableColors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(color)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedColor === color
                    ? 'bg-ink text-cream shadow-sm'
                    : 'border border-sand bg-white text-charcoal hover:border-ink/50'
                }`}
                suppressHydrationWarning
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="text-sm font-medium text-ink">Quantity</p>
        <div className="mt-2 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sand bg-white text-lg font-medium hover:bg-sand/40"
            suppressHydrationWarning
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sand bg-white text-lg font-medium hover:bg-sand/40"
            suppressHydrationWarning
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className="rounded-full bg-ink px-8 py-3 text-sm font-semibold text-cream transition hover:bg-ink/90 active:scale-95"
          suppressHydrationWarning
        >
          {added ? '✓ Added to Cart!' : 'Add to cart'}
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink transition hover:bg-gold/90 active:scale-95"
          suppressHydrationWarning
        >
          Buy now
        </button>
      </div>

      {added && (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-800">
          Item added to your cart! You can view it in the{' '}
          <a href="/cart" className="font-semibold underline">
            Cart
          </a>{' '}
          or proceed to{' '}
          <a href="/checkout" className="font-semibold underline">
            Checkout
          </a>
          .
        </div>
      )}
    </div>
  );
}

