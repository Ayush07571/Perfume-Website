'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  const openCart = useCartStore((state) => state.openCart);
  const totalItems = useCartStore((state) => state.totalItems());
  const wishlistCount = useWishlistStore((state) => state.productIds.length);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Collection', href: '/shop' },
    { label: 'Brand Story', href: '/about' },
    { label: 'The Journal', href: '/journal' },
    { label: 'Boutique', href: '/contact' },
  ];

  // If on homepage and not scrolled: dark hero mode (light text on dark background)
  // Otherwise: light luxury mode (dark text on light background)
  const isDarkNav = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#faf8f5]/90 backdrop-blur-xl border-b border-black/[0.06] shadow-sm py-4'
            : isDarkNav
            ? 'bg-transparent py-6'
            : 'bg-[#faf8f5]/80 backdrop-blur-md py-6 border-b border-black/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden p-1 transition-colors ${
              isDarkNav
                ? 'text-[#faf8f5] hover:text-[#e5cb9b]'
                : 'text-[#171717] hover:text-[#b58d4b]'
            }`}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Left Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 2).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.25em] transition-colors relative py-1 ${
                    active
                      ? isDarkNav
                        ? 'text-[#e5cb9b] font-medium'
                        : 'text-[#b58d4b] font-medium'
                      : isDarkNav
                      ? 'text-[#faf8f5]/80 hover:text-[#e5cb9b]'
                      : 'text-[#171717]/80 hover:text-[#b58d4b]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="navIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                        isDarkNav ? 'bg-[#e5cb9b]' : 'bg-[#b58d4b]'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Centered Brand Wordmark */}
          <Link
            href="/"
            className="text-center group flex flex-col items-center justify-center"
          >
            <span
              className={`font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.35em] uppercase transition-colors duration-300 ${
                isDarkNav
                  ? 'text-[#faf8f5] group-hover:text-[#e5cb9b]'
                  : 'text-[#171717] group-hover:text-[#b58d4b]'
              }`}
            >
              MAISON NOIR
            </span>
            <span
              className={`text-[9px] uppercase tracking-[0.45em] font-medium mt-0.5 ${
                isDarkNav ? 'text-[#e5cb9b]' : 'text-[#b58d4b]'
              }`}
            >
              Haute Parfumerie · Paris
            </span>
          </Link>

          {/* Right Desktop Nav Links + Actions */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <nav className="hidden md:flex items-center space-x-8 mr-2">
              {navLinks.slice(2).map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-[0.25em] transition-colors relative py-1 ${
                      active
                        ? isDarkNav
                          ? 'text-[#e5cb9b] font-medium'
                          : 'text-[#b58d4b] font-medium'
                        : isDarkNav
                        ? 'text-[#faf8f5]/80 hover:text-[#e5cb9b]'
                        : 'text-[#171717]/80 hover:text-[#b58d4b]'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="navIndicator"
                        className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                          isDarkNav ? 'bg-[#e5cb9b]' : 'bg-[#b58d4b]'
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Wishlist Link */}
            <Link
              href="/profile?tab=wishlist"
              className={`transition-colors relative p-1 ${
                isDarkNav
                  ? 'text-[#faf8f5]/80 hover:text-[#e5cb9b]'
                  : 'text-[#171717]/80 hover:text-[#b58d4b]'
              }`}
              aria-label="Wishlist"
            >
              <Heart className="w-[18px] h-[18px]" />
              {wishlistCount > 0 && (
                <span
                  className={`absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center ${
                    isDarkNav
                      ? 'bg-[#e5cb9b] text-[#080808]'
                      : 'bg-[#171717] text-[#faf8f5]'
                  }`}
                >
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Profile Link */}
            <Link
              href="/profile"
              className={`transition-colors p-1 ${
                pathname === '/profile'
                  ? isDarkNav
                    ? 'text-[#e5cb9b]'
                    : 'text-[#b58d4b]'
                  : isDarkNav
                  ? 'text-[#faf8f5]/80 hover:text-[#e5cb9b]'
                  : 'text-[#171717]/80 hover:text-[#b58d4b]'
              }`}
              aria-label="User Profile"
            >
              <User className="w-[18px] h-[18px]" />
            </Link>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className={`relative transition-colors flex items-center space-x-2 py-1.5 px-3 rounded-full cursor-pointer shadow-xs ${
                isDarkNav
                  ? 'bg-black/40 border border-white/20 text-[#faf8f5] hover:border-[#e5cb9b]/60'
                  : 'bg-white border border-black/10 text-[#171717] hover:border-[#b58d4b]/60'
              }`}
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-[16px] h-[16px]" />
              <span
                className={`text-xs tracking-wider font-semibold pr-0.5 ${
                  isDarkNav ? 'text-[#e5cb9b]' : 'text-[#b58d4b]'
                }`}
              >
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-[#faf8f5] border-r border-black/10 z-50 p-8 flex flex-col justify-between md:hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-black/10">
                  <span className="font-serif text-lg tracking-[0.25em] text-[#171717]">
                    MAISON NOIR
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#171717]/60 hover:text-[#b58d4b]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm uppercase tracking-[0.3em] text-[#171717] hover:text-[#b58d4b] transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-black/10 flex flex-col space-y-4">
                    <Link
                      href="/profile?tab=wishlist"
                      className="text-xs uppercase tracking-[0.2em] text-[#b58d4b] flex items-center space-x-2 font-medium"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Wishlist ({wishlistCount})</span>
                    </Link>
                    <Link
                      href="/profile"
                      className="text-xs uppercase tracking-[0.2em] text-[#171717]/70 hover:text-[#b58d4b] flex items-center space-x-2"
                    >
                      <User className="w-4 h-4" />
                      <span>My Profile & Orders</span>
                    </Link>
                  </div>
                </nav>
              </div>

              <div className="pt-8 border-t border-black/10 text-xs text-[#716b64] tracking-widest">
                <p className="font-serif text-[#171717]">PARFUMS D'EXCEPTION</p>
                <p className="text-[10px] text-[#918b84] mt-1">₹ INR Currency Selected</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
