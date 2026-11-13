import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, ARTICLES } from '@/data/articles';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ArrowLeft, Quote } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Essay Not Found | MAISON NOIR',
    };
  }

  return {
    title: `${article.title} | The Olfactory Journal`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="pt-28 pb-36 min-h-screen bg-[#faf8f5]">
      {/* Article Header & Hero */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-8 pb-12">
        <Link
          href="/journal"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#716b64] hover:text-[#171717] mb-10 transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal</span>
        </Link>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs text-[#b58d4b] uppercase tracking-widest font-semibold">
            <span>{article.category}</span>
            <span>·</span>
            <span className="text-[#716b64]">{article.date}</span>
            <span>·</span>
            <span className="text-[#716b64]">{article.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#171717] leading-tight font-normal">
            {article.title}
          </h1>

          <p className="font-serif italic text-base sm:text-xl text-[#b58d4b] font-light">
            {article.subtitle}
          </p>
        </div>
      </div>

      {/* Hero Full-bleed Image */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-16">
        <div className="relative aspect-[16/9] w-full border border-black/10 overflow-hidden shadow-xl bg-[#f4efe8]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content Body */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-12">
        {article.content.map((sec, idx) => (
          <ScrollReveal key={idx} className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#171717] pt-6 border-t border-black/[0.08]">
              {sec.sectionHeading}
            </h2>

            {sec.paragraphs.map((para, pIdx) => (
              <p
                key={pIdx}
                className="text-sm sm:text-base text-[#47433f] leading-relaxed tracking-wide font-light"
              >
                {para}
              </p>
            ))}

            {sec.quote && (
              <div className="p-8 my-8 bg-white border-l-3 border-[#b58d4b] space-y-3 shadow-xs">
                <Quote className="w-6 h-6 text-[#b58d4b]/40" />
                <p className="font-serif italic text-lg sm:text-xl text-[#171717] leading-relaxed">
                  "{sec.quote}"
                </p>
              </div>
            )}
          </ScrollReveal>
        ))}

        {/* Footer & Navigation to other articles */}
        <div className="pt-16 mt-16 border-t border-black/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-[#716b64] tracking-wider uppercase font-medium">
            Published by Maison Noir Atelier Research
          </div>

          <Link
            href="/shop"
            className="text-xs uppercase tracking-[0.25em] px-6 py-3.5 bg-[#171717] text-[#faf8f5] font-semibold hover:bg-[#2c2a29] transition-colors shadow-md"
          >
            Explore the Fragrances
          </Link>
        </div>
      </div>
    </article>
  );
}
