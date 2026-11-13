import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ParallaxImage from '@/components/animations/ParallaxImage';
import ImageReveal from '@/components/animations/ImageReveal';
import { ARTICLES } from '@/data/articles';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'The Olfactory Journal | MAISON NOIR',
  description:
    'Essays and musings on the art of slow perfumery, ancient distillation techniques, and the cultural history of scent.',
};

export default function JournalPage() {
  return (
    <div className="pt-32 pb-36 min-h-screen bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#b58d4b] font-semibold flex items-center justify-center space-x-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Essays & Musings</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] mt-3">
              The Olfactory Journal
            </h1>
            <p className="text-xs text-[#635e59] mt-3 tracking-wider leading-relaxed font-light">
              Dispatches from our harvest fields in Grasse, scent chemistry breakdowns,
              and reflections on the emotional power of fragrance.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured Main Essay */}
        <div className="mb-16">
          <ScrollReveal>
            <Link
              href={`/journal/${ARTICLES[0].slug}`}
              className="group block bg-white border border-black/[0.08] hover:border-[#b58d4b]/60 transition-all duration-500 overflow-hidden shadow-xs hover:shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-[460px] overflow-hidden bg-[#f4efe8]">
                  <ImageReveal curtainColor="#b58d4b" duration={1.2}>
                    <ParallaxImage
                      src={ARTICLES[0].image}
                      alt={ARTICLES[0].title}
                      priority
                      parallaxSpeed={0.16}
                      containerClassName="w-full h-full min-h-[300px] lg:min-h-[460px]"
                    />
                    <div className="absolute top-4 left-4 text-[9px] uppercase tracking-widest bg-white/90 backdrop-blur-md px-3 py-1 text-[#171717] border border-black/10 font-semibold z-10">
                      Featured Essay
                    </div>
                  </ImageReveal>
                </div>

                <div className="lg:col-span-5 p-8 lg:p-12 space-y-4">
                  <div className="flex items-center space-x-3 text-[10px] text-[#b58d4b] uppercase tracking-widest font-semibold">
                    <span>{ARTICLES[0].category}</span>
                    <span className="text-[#c7beaf]">·</span>
                    <span className="text-[#716b64]">{ARTICLES[0].readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#171717] group-hover:text-[#b58d4b] transition-colors leading-snug">
                    {ARTICLES[0].title}
                  </h2>
                  <p className="text-xs text-[#635e59] leading-relaxed font-light">
                    {ARTICLES[0].excerpt}
                  </p>
                  <div className="pt-4 flex items-center space-x-2 text-xs uppercase tracking-widest text-[#b58d4b] font-semibold">
                    <span>Read Full Essay</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.slice(1).map((article, idx) => (
            <ScrollReveal key={article.id} delay={idx * 0.15}>
              <Link
                href={`/journal/${article.slug}`}
                className="group block bg-white border border-black/[0.08] hover:border-[#b58d4b]/60 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between shadow-xs hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f4efe8]">
                    <ImageReveal curtainColor="#ede8e1" duration={1.1}>
                      <ParallaxImage
                        src={article.image}
                        alt={article.title}
                        parallaxSpeed={0.14}
                        containerClassName="w-full h-full"
                        imageClassName="filter brightness-95 contrast-105"
                      />
                      <div className="absolute top-4 left-4 text-[9px] uppercase tracking-widest bg-white/90 backdrop-blur-md px-3 py-1 text-[#171717] border border-black/10 font-semibold z-10">
                        {article.category}
                      </div>
                    </ImageReveal>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-3 text-[10px] text-[#716b64] uppercase tracking-widest mb-3">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#171717] group-hover:text-[#b58d4b] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#635e59] leading-relaxed mt-3 font-light">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0 flex items-center space-x-2 text-xs uppercase tracking-widest text-[#b58d4b] font-semibold">
                  <span>Explore Treatise</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
