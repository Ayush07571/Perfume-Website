import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ARTICLES } from '@/data/articles';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function EditorialPreview() {
  const mainArticle = ARTICLES[0];
  const sideArticles = ARTICLES.slice(1, 3);

  return (
    <section className="py-28 md:py-36 bg-[#faf8f5] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/[0.08]">
          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold flex items-center space-x-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>The Olfactory Journal</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] mt-2">
              Chronicles of Scent
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-6 md:mt-0">
            <Link
              href="/journal"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#b58d4b] hover:text-[#171717] group transition-colors font-medium"
            >
              <span>Explore All Essays</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Feature */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <Link
                href={`/journal/${mainArticle.slug}`}
                className="group block bg-white border border-black/[0.08] hover:border-[#b58d4b]/60 transition-all duration-500 overflow-hidden shadow-xs hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f4efe8]">
                  <Image
                    src={mainArticle.image}
                    alt={mainArticle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 text-[9px] uppercase tracking-widest bg-white/90 backdrop-blur-md px-3 py-1 text-[#171717] border border-black/10 font-medium">
                    {mainArticle.category}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 text-[10px] text-[#716b64] uppercase tracking-widest mb-3">
                    <span>{mainArticle.date}</span>
                    <span>·</span>
                    <span>{mainArticle.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] group-hover:text-[#b58d4b] transition-colors leading-snug">
                    {mainArticle.title}
                  </h3>
                  <p className="text-xs text-[#635e59] leading-relaxed mt-3 font-light">
                    {mainArticle.excerpt}
                  </p>
                  <div className="mt-6 flex items-center space-x-2 text-xs uppercase tracking-widest text-[#b58d4b] font-medium">
                    <span>Read Full Essay</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* Secondary Features */}
          <div className="lg:col-span-5 space-y-8">
            {sideArticles.map((article, idx) => (
              <ScrollReveal key={article.id} delay={0.2 * (idx + 1)}>
                <Link
                  href={`/journal/${article.slug}`}
                  className="group flex flex-col sm:flex-row gap-6 p-6 bg-white border border-black/[0.08] hover:border-[#b58d4b]/60 transition-all duration-500 shadow-xs hover:shadow-xl"
                >
                  <div className="relative aspect-square sm:w-36 overflow-hidden flex-shrink-0 bg-[#f4efe8] border border-black/5">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="150px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 text-[10px] text-[#b58d4b] uppercase tracking-widest mb-1.5 font-medium">
                        <span>{article.category}</span>
                        <span className="text-[#c7beaf]">·</span>
                        <span className="text-[#716b64]">{article.readTime}</span>
                      </div>
                      <h4 className="font-serif text-lg text-[#171717] group-hover:text-[#b58d4b] transition-colors leading-snug">
                        {article.title}
                      </h4>
                    </div>
                    <span className="text-[10px] text-[#918b84] tracking-wider mt-3">
                      {article.date}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
