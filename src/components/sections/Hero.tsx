'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808] text-[#faf8f5]">
      {/* Full-bleed Background Image with Cinematic Vignettes */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bottle.jpg"
          alt="Maison Noir Luxury Perfume Flacon"
          fill
          priority
          className="object-cover object-center filter contrast-125 brightness-75 scale-105 animate-float"
        />
        {/* Layered dark gradients for readability and drama */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,141,75,0.08)_0%,transparent_75%)]" />
      </div>

      {/* Floating Gold Ambient Spheres */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#b58d4b]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#b76e79]/10 blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 pt-32 pb-20 text-center flex flex-col items-center">
        {/* Overline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 border border-[#e5cb9b]/30 bg-black/50 backdrop-blur-md rounded-full mb-8 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#e5cb9b]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#e5cb9b] font-medium">
            Autumn / Winter Confidential Reserves
          </span>
        </motion.div>

        {/* Main Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.2em] uppercase text-[#faf8f5] leading-none mb-6 drop-shadow-md"
        >
          MAISON NOIR
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif italic text-lg sm:text-2xl text-[#e5cb9b] max-w-xl mx-auto mb-8 font-light tracking-wide"
        >
          "Where darkness becomes desire."
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xs sm:text-sm text-[#d4cfc7] max-w-2xl mx-auto leading-relaxed mb-12 tracking-wider font-light drop-shadow-sm"
        >
          Artisanal fragrances distilled in Paris and Grasse. Extrait concentrations
          infused with wild Kalimantan ouds, Baltic amber resin, and nocturnal florals
          bottled in hand-polished obsidian glass.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#9e7838] via-[#b58d4b] to-[#e5cb9b] text-[#080808] text-xs font-bold uppercase tracking-[0.25em] btn-shimmer hover:opacity-95 transition-opacity shadow-2xl flex items-center justify-center space-x-2"
          >
            <span>Enter the Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-black/40 backdrop-blur-sm text-[#faf8f5] hover:bg-white/10 hover:border-white/40 text-xs uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>The Brand Story</span>
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 mt-16 border-t border-white/10 w-full text-center"
        >
          <div className="flex flex-col items-center">
            <span className="text-[#e5cb9b] font-serif text-2xl tracking-wider font-semibold">
              35%
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#a8a39d] mt-1 font-medium">
              Pure Fragrance Extrait
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#e5cb9b] font-serif text-2xl tracking-wider font-semibold">
              18 Months
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#a8a39d] mt-1 font-medium">
              Cold Barrel Maceration
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#e5cb9b] font-serif text-2xl tracking-wider font-semibold">
              Razorpay
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#a8a39d] mt-1 font-medium">
              Secure INR Payments
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none opacity-60">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#a8a39d]">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#e5cb9b] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
