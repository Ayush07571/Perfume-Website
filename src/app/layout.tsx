import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import CustomCursor from '@/components/layout/CustomCursor';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MAISON NOIR | Haute Parfumerie · Paris',
  description:
    'Where darkness becomes desire. Ultra-luxury artisanal perfumery crafted in Grasse and Paris with ancient resins, rare ouds, and precious florals.',
  keywords: [
    'luxury perfume',
    'haute parfumerie',
    'niche fragrance',
    'oud',
    'amber',
    'Maison Noir',
    'parfum extrait',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#faf8f5] text-[#171717] antialiased min-h-screen flex flex-col font-sans">
        <CustomCursor />
        <Navbar />
        <CartDrawer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
