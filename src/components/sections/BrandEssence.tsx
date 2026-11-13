import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BrandEssence() {
  return (
    <section className="py-28 md:py-36 bg-[#0e0e0e] text-[#faf8f5] relative overflow-hidden border-t border-b border-black">
      {/* Dark Ambient Atmosphere */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#b58d4b]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none border border-white/10 overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/atelier-craft.jpg"
                  alt="Maison Noir Atelier Craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover filter contrast-110 brightness-95 hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-60" />

                {/* Floating caption card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141414]/90 backdrop-blur-md border border-white/10">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#e5cb9b]">
                    Atelier Maceration · Grasse
                  </span>
                  <p className="text-xs text-[#faf8f5] mt-0.5 font-serif italic">
                    "Perfume is the art of immortalizing ephemeral beauty."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Poetic Narrative in Contrast Dark */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="right">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#e5cb9b] font-semibold flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The House Manifesto</span>
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#faf8f5] leading-tight">
                  Born from an obsession with the invisible presence.
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#a8a39d] leading-relaxed tracking-wider font-light">
                In an era of mass-market syntheses and rushed releases, Maison Noir was
                founded upon a single solemn vow: we formulate without timeline or
                compromise. Every harvest of jasmine is collected at the stroke of 3 AM;
                every block of agarwood has aged at least a quarter-century.
              </p>

              <p className="text-xs sm:text-sm text-[#a8a39d] leading-relaxed tracking-wider font-light">
                Our compositions do not shout for attention; they command respect through
                an undeniable gravity. Once applied to warm skin, they evolve throughout
                the night, unfurling hidden facets of velvet, smoke, and resin.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6 border-t border-white/10">
                <div>
                  <h4 className="font-serif text-2xl text-[#e5cb9b]">Zero Synthetics</h4>
                  <p className="text-[11px] text-[#8a8580] uppercase tracking-wider mt-1">
                    Organic Botanicals Only
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-[#e5cb9b]">Bespoke Flacons</h4>
                  <p className="text-[11px] text-[#8a8580] uppercase tracking-wider mt-1">
                    Italian Smoked Crystal
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#e5cb9b] hover:text-[#faf8f5] group transition-colors"
                >
                  <span>Explore the Atelier Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
