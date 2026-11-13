import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Compass, Sparkles } from 'lucide-react';

export default function ScentStory() {
  const ingredients = [
    {
      name: 'Baltic Amber Resin',
      origin: 'Klaipėda, Lithuania',
      description: 'Fossilized pine resin steeped in dark vanilla and bourbon, radiating an ancient, sun-trapped golden warmth.',
      image: '/images/ingredients/amber-resin.jpg',
    },
    {
      name: 'Cambodian Wild Agarwood',
      origin: 'Koh Kong Jungle, Cambodia',
      description: 'Matured for a quarter-century in dark earthen jars; deeply resinous, leathery, and monastic in presence.',
      image: '/images/ingredients/agarwood.jpg',
    },
    {
      name: 'Grasse Jasmine Grandiflorum',
      origin: 'Provence, France',
      description: 'Hand-picked exclusively at 3:00 AM under moonlight before daylight oxidizes the fragile essential oils.',
      image: '/images/ingredients/jasmine-harvest.jpg',
    },
    {
      name: 'Florentine Orris Butter',
      origin: 'Tuscany, Italy',
      description: 'The world’s most precious floral extract, dried for three full years to yield a powdery, violet-velvet nuance.',
      image: '/images/ingredients/orris-butter.jpg',
    },
  ];

  return (
    <section className="py-28 md:py-36 bg-[#0c0c0c] text-[#faf8f5] border-t border-b border-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b58d4b]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#e5cb9b] font-semibold flex items-center justify-center space-x-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Geography of Rare Scents</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#faf8f5] mt-3">
              Crafted From Earth's Rarest Flora
            </h2>
            <p className="text-xs text-[#a8a39d] mt-3 leading-relaxed tracking-wider">
              We travel to remote corners of the globe to commission small, artisanal
              distillations unseen in conventional retail perfumery.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ing, idx) => (
            <ScrollReveal key={ing.name} delay={idx * 0.15}>
              <div className="group relative bg-[#141414] border border-white/10 hover:border-[#b58d4b]/60 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={ing.image}
                    alt={ing.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 right-3 text-[9px] uppercase tracking-widest bg-[#0c0c0c]/85 backdrop-blur-md px-2.5 py-1 text-[#e5cb9b] border border-white/10">
                    {ing.origin}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-[#faf8f5] group-hover:text-[#e5cb9b] transition-colors">
                      {ing.name}
                    </h3>
                    <p className="text-xs text-[#a8a39d] leading-relaxed mt-2 font-light">
                      {ing.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center space-x-1.5 text-[10px] uppercase tracking-widest text-[#e5cb9b]/90">
                    <Sparkles className="w-3 h-3" />
                    <span>Single-Origin Distillation</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
