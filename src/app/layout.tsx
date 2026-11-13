import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import CustomCursor from '@/components/layout/CustomCursor';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
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
