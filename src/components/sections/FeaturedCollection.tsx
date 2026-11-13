import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { getFeaturedProducts } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCollection() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-28 md:py-36 bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/[0.08]">
          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] mt-2 tracking-wide">
              The Crown Flacons
            </h2>
            <p className="text-xs text-[#635e59] max-w-md mt-2 tracking-wider">
              Four signature creations that define the dark olfactory landscape of
              Maison Noir.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-6 md:mt-0">
            <Link
              href="/shop"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#b58d4b] hover:text-[#171717] group transition-colors font-medium"
            >
              <span>View All 8 Fragrances</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 0.15}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
