import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'ShopBee — Shop Your Style. Explore Beyond Fashion.',
    template: '%s · ShopBee',
  },
  description:
    'ShopBee is a fashion store for clothing, cosmetics, and wholesale. Discover collections and explore the physical store experience.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans min-h-screen bg-cream text-ink antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
