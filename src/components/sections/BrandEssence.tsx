import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BrandEssence() {
  return (
    <section className="py-28 md:py-36 bg-[#faf8f5] text-[#171717] relative overflow-hidden border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition on Light Pedestal */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none border border-black/10 overflow-hidden shadow-2xl bg-[#f4efe8]">
                <Image
                  src="/images/about/atelier-craft.jpg"
                  alt="Maison Noir Atelier Craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover filter contrast-110 brightness-95 hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Floating caption card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-black/10 shadow-lg">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#b58d4b] font-semibold">
                    Atelier Maceration · Grasse
                  </span>
                  <p className="text-xs text-[#171717] mt-0.5 font-serif italic">
                    "Perfume is the art of immortalizing ephemeral beauty."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Poetic Narrative in Light Theme */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="right">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The House Manifesto</span>
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] leading-tight font-normal">
                  Born from an obsession with the invisible presence.
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#635e59] leading-relaxed tracking-wider font-light">
                In an era of mass-market syntheses and rushed releases, Maison Noir was
                founded upon a single solemn vow: we formulate without timeline or
                compromise. Every harvest of jasmine is collected at the stroke of 3 AM;
                every block of agarwood has aged at least a quarter-century.
              </p>

              <p className="text-xs sm:text-sm text-[#635e59] leading-relaxed tracking-wider font-light">
                Our compositions do not shout for attention; they command respect through
                an undeniable gravity. Once applied to warm skin, they evolve throughout
                the night, unfurling hidden facets of velvet, smoke, and resin.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6 border-t border-black/[0.08]">
                <div>
                  <h4 className="font-serif text-2xl text-[#171717] font-semibold">
                    Zero Synthetics
                  </h4>
                  <p className="text-[11px] text-[#716b64] uppercase tracking-wider mt-1 font-medium">
                    Organic Botanicals Only
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-[#171717] font-semibold">
                    Bespoke Flacons
                  </h4>
                  <p className="text-[11px] text-[#716b64] uppercase tracking-wider mt-1 font-medium">
                    Italian Smoked Crystal
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#b58d4b] hover:text-[#171717] group transition-colors font-semibold"
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
