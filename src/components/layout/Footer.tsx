'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] border-t border-black pt-20 pb-12 text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.35em] uppercase text-[#faf8f5]">
                MAISON NOIR
              </span>
              <p className="text-[10px] uppercase tracking-[0.45em] text-[#e5cb9b] mt-1">
                Haute Parfumerie · Paris
              </p>
            </Link>
            <p className="text-xs text-[#a8a39d] leading-relaxed max-w-sm">
              Crafted in the clandestine shadows of haute perfumery. Each distillation
              marries ancient resins, rare botanicals, and hand-cut obsidian glass to
              summon the unforgettable.
            </p>
            <div className="pt-2 text-xs text-[#a8a39d] space-y-1">
              <p className="tracking-wider text-[#e5cb9b]">Flagship Atelier</p>
              <p>28 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p>India Concierge: concierge@maisonnoir.com · +91 22 6900 8800</p>
            </div>
          </div>

          {/* Collection Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#e5cb9b] font-medium">
              The Collection
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a8a39d]">
              <li>
                <Link
                  href="/shop?category=Eau%20de%20Parfum"
                  className="hover:text-[#faf8f5] transition-colors"
                >
                  Eau de Parfum
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=Eau%20de%20Toilette"
                  className="hover:text-[#faf8f5] transition-colors"
                >
                  Eau de Toilette
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=Parfum%20Extrait"
                  className="hover:text-[#faf8f5] transition-colors"
                >
                  Parfum Extrait
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?family=Oriental"
                  className="hover:text-[#faf8f5] transition-colors"
                >
                  Oriental Scents
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?family=Woody"
                  className="hover:text-[#faf8f5] transition-colors"
                >
                  Woody Accords
                </Link>
              </li>
            </ul>
          </div>

          {/* The Maison Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#e5cb9b] font-medium">
              The Maison
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a8a39d]">
              <li>
                <Link href="/about" className="hover:text-[#faf8f5] transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#faf8f5] transition-colors">
                  The Olfactory Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#faf8f5] transition-colors">
                  Private Boutique
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-[#faf8f5] transition-colors">
                  Client Profile & Vault
                </Link>
              </li>
              <li>
                <Link href="/profile?tab=orders" className="hover:text-[#faf8f5] transition-colors">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Inner Circle Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#e5cb9b] font-medium">
              The Inner Circle
            </h4>
            <p className="text-xs text-[#a8a39d] leading-relaxed">
              Receive private invitations to confidential harvest reserves and limited flacon releases.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Welcome to the Maison Noir Inner Circle.');
              }}
              className="space-y-2"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-[#171717] border border-white/10 px-3 py-2.5 text-xs text-[#faf8f5] placeholder:text-[#6e6962] focus:outline-none focus:border-[#e5cb9b] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-[#242424] border border-[#e5cb9b]/40 hover:bg-[#e5cb9b] hover:text-[#080808] text-[#e5cb9b] text-[11px] uppercase tracking-[0.25em] transition-all duration-300 font-medium cursor-pointer"
              >
                Join Sanctuary
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#716b64] space-y-4 sm:space-y-0">
          <div>
            © 2026 MAISON NOIR PARFUMS. All Rights Reserved. All
            Transactions processed via Razorpay in INR (₹).
          </div>
          <div className="flex items-center space-x-6 text-[#a8a39d]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#e5cb9b] flex items-center space-x-1"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#e5cb9b] flex items-center space-x-1"
            >
              <span>Pinterest</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <Link href="/contact" className="hover:text-[#e5cb9b]">
              Privacy & Discretion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
