import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ParallaxImage from '@/components/animations/ParallaxImage';
import ImageReveal from '@/components/animations/ImageReveal';
import { ArrowRight, Compass, Shield, Feather, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Our Story & Philosophy | MAISON NOIR',
  description:
    'Discover the clandestine genesis of Maison Noir. Handcrafted in Paris and Grasse through patient, uncompromising cold maceration.',
};

export default function AboutPage() {
  const pillars = [
    {
      title: 'Artistry Without Clock',
      description:
        'We refuse artificial product release calendars. A fragrance is only bottled when the maceration reaches equilibrium—whether that requires eight months or three years.',
      icon: Compass,
    },
    {
      title: 'Obsidian Purity',
      description:
        'All botanical concentrates are distilled at peak harvest. We never dilute our formulations with synthetic scent boosters, chemical fixatives, or artificial colorants.',
      icon: Sparkles,
    },
    {
      title: 'Sustainable Sourcing',
      description:
        'We partner exclusively with indigenous harvest cooperatives from the forests of Kalimantan to the rose valleys of Bulgaria, ensuring sacred flora are safeguarded.',
      icon: Feather,
    },
    {
      title: 'Quiet Discretion',
      description:
        'True luxury needs no billboard. Our dark obsidian bottles bear no ostentatious labels—only hand-engraved batch numbers that whisper to those who know.',
      icon: Shield,
    },
  ];

  return (
    <div className="pt-28 pb-36 min-h-screen bg-[#faf8f5]">
      {/* Hero Header */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-black/[0.08] bg-[#f4efe8]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-hero.jpg"
            alt="Maison Noir Atelier"
            fill
            priority
            className="object-cover object-center filter contrast-110 brightness-90 opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4efe8] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#b58d4b] font-semibold">
              The Genesis
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#171717] mt-4 leading-none">
              In Pursuit of the Ephemeral
            </h1>
            <p className="font-serif italic text-lg sm:text-2xl text-[#b58d4b] mt-4 font-light">
              "We do not create perfumes to decorate rooms. We compose scents to haunt memories."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Chapter 1: The Paris Atelier (Light) */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold">
                Chapter I · 2019
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#171717] leading-tight">
                The Obsidian Vision
              </h2>
              <p className="text-xs sm:text-sm text-[#635e59] leading-relaxed tracking-wider font-light">
                Maison Noir took shape in a small vaulted atelier along Rue du Faubourg Saint-Honoré in Paris.
                Frustrated by modern commercial perfumery’s reliance on synthetic aroma-chemicals and hollow marketing,
                our founders resolved to return to the golden age of French perfumery.
              </p>
              <p className="text-xs sm:text-sm text-[#635e59] leading-relaxed tracking-wider font-light">
                We believe that human emotion is fundamentally tied to the primal sense of smell.
                A single droplet of aged Cambodian oud or night-blooming Grasse jasmine possesses the power
                to awaken dormant memories with a vividness no photograph or written word can replicate.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6">
            <ScrollReveal direction="left">
              <ImageReveal curtainColor="#b58d4b" duration={1.2}>
                <div className="relative aspect-[4/3] w-full border border-black/10 overflow-hidden shadow-2xl bg-[#f4efe8]">
                  <ParallaxImage
                    src="/images/about/atelier-craft.jpg"
                    alt="Maison Noir Fragrance Formulation"
                    parallaxSpeed={0.18}
                    containerClassName="w-full h-full"
                    imageClassName="filter contrast-110 brightness-95"
                  />
                </div>
              </ImageReveal>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Four Pillars (CONTRAST DARK SECTION) */}
      <section className="py-24 bg-[#0e0e0e] text-[#faf8f5] border-t border-b border-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <ScrollReveal>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#e5cb9b] font-semibold">
                The House Principles
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5] mt-2">
                Four Pillars of Haute Parfumerie
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={idx * 0.15}>
                  <div className="p-8 bg-[#141414] border border-white/10 hover:border-[#b58d4b]/60 transition-colors h-full flex flex-col justify-between shadow-xl">
                    <div>
                      <div className="w-10 h-10 border border-[#e5cb9b]/40 rounded-full flex items-center justify-center text-[#e5cb9b] mb-6">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-lg text-[#faf8f5] mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#a8a39d] leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#e5cb9b]/70 mt-6 pt-4 border-t border-white/5 font-mono">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chapter 3: The Flacon as Sculpture (Light) */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ScrollReveal direction="right">
              <ImageReveal curtainColor="#171717" duration={1.2}>
                <div className="relative aspect-[4/3] w-full border border-black/10 overflow-hidden shadow-2xl bg-[#f4efe8]">
                  <ParallaxImage
                    src="/images/about/about-flacon.jpg"
                    alt="Italian Smoked Flacon"
                    parallaxSpeed={0.18}
                    containerClassName="w-full h-full"
                    imageClassName="filter contrast-110 brightness-95"
                  />
                </div>
              </ImageReveal>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <ScrollReveal>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold">
                Chapter II · The Vessel
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#171717] leading-tight">
                Italian Smoked Crystal Flacons
              </h2>
              <p className="text-xs sm:text-sm text-[#635e59] leading-relaxed tracking-wider font-light">
                Light is the enemy of precious natural absolutes. UV radiation degrades the complex organic chains
                of ambergris, frankincense, and rose oil.
              </p>
              <p className="text-xs sm:text-sm text-[#635e59] leading-relaxed tracking-wider font-light">
                To shield our elixirs, each Maison Noir flacon is cast in Murano, Italy using ultra-dense smoked obsidian crystal
                that filters 99.8% of photo-destructive light. Capped with solid cold-forged brass and fitted with a micro-atomizer,
                every spray is a calibrated, velvet mist.
              </p>
              <div className="pt-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#b58d4b] hover:text-[#171717] transition-colors font-medium"
                >
                  <span>Discover the Complete Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
