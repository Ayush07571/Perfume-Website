import ScrollReveal from '@/components/animations/ScrollReveal';
import ParallaxImage from '@/components/animations/ParallaxImage';
import ImageReveal from '@/components/animations/ImageReveal';
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
    <section className="py-28 md:py-36 bg-[#faf8f5] text-[#171717] border-b border-black/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold flex items-center justify-center space-x-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Geography of Rare Scents</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] mt-3 font-normal">
              Crafted From Earth's Rarest Flora
            </h2>
            <p className="text-xs text-[#635e59] mt-3 leading-relaxed tracking-wider font-light">
              We travel to remote corners of the globe to commission small, artisanal
              distillations unseen in conventional retail perfumery.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ing, idx) => (
            <ScrollReveal key={ing.name} delay={idx * 0.12}>
              <div className="group relative bg-white border border-black/[0.08] hover:border-[#b58d4b]/60 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-xs hover:shadow-2xl">
                <ImageReveal
                  curtainColor={idx % 2 === 0 ? '#b58d4b' : '#ede8e1'}
                  delay={idx * 0.1}
                  duration={1.1}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4efe8]">
                    <ParallaxImage
                      src={ing.image}
                      alt={ing.name}
                      parallaxSpeed={idx % 2 === 0 ? 0.22 : 0.12}
                      containerClassName="w-full h-full"
                      imageClassName="filter brightness-95 contrast-110 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 text-[9px] uppercase tracking-widest bg-white/90 backdrop-blur-md px-2.5 py-1 text-[#171717] border border-black/10 font-medium z-10">
                      {ing.origin}
                    </div>
                  </div>
                </ImageReveal>

                <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="font-serif text-lg text-[#171717] group-hover:text-[#b58d4b] transition-colors">
                      {ing.name}
                    </h3>
                    <p className="text-xs text-[#635e59] leading-relaxed mt-2 font-light">
                      {ing.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center space-x-1.5 text-[10px] uppercase tracking-widest text-[#b58d4b] font-medium">
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
