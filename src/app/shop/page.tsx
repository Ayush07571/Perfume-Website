'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ui/ProductCard';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { PRODUCTS } from '@/data/products';
import { Search, Sparkles, X } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialFamily = searchParams.get('family') || 'All';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedFamily, setSelectedFamily] = useState<string>(initialFamily);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = ['All', 'Eau de Parfum', 'Eau de Toilette', 'Parfum Extrait'];
  const families = ['All', 'Oriental', 'Woody', 'Floral', 'Smoky-Oriental', 'Leather-Oud'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      if (selectedFamily !== 'All' && !product.family.includes(selectedFamily)) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesTagline = product.tagline.toLowerCase().includes(query);
        const matchesNotes = [
          ...product.notes.top,
          ...product.notes.heart,
          ...product.notes.base,
        ].some((n) => n.toLowerCase().includes(query));

        return matchesName || matchesTagline || matchesNotes;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.prices[a.defaultVolume] - b.prices[b.defaultVolume];
      }
      if (sortBy === 'price-desc') {
        return b.prices[b.defaultVolume] - a.prices[a.defaultVolume];
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return a.featured ? -1 : 1;
    });
  }, [selectedCategory, selectedFamily, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedFamily('All');
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'All' || selectedFamily !== 'All' || searchQuery !== '';

  return (
    <div className="pt-32 pb-36 min-h-screen bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#b58d4b] font-semibold">
              The Complete Wardrobe
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] mt-3">
              The Collection
            </h1>
            <p className="text-xs text-[#635e59] mt-3 tracking-wider leading-relaxed font-light">
              Every flacon is individually numbered, hand-poured in small batches,
              and sealed with hand-buffed obsidian caps.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter and Control Bar */}
        <div className="p-6 bg-white border border-black/[0.08] mb-12 space-y-6 shadow-xs">
          {/* Top row: Categories & Search */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] uppercase tracking-[0.2em] px-4 py-2 transition-all cursor-pointer font-medium ${
                    selectedCategory === cat
                      ? 'bg-[#171717] text-[#faf8f5] shadow-xs'
                      : 'bg-[#faf8f5] text-[#716b64] hover:text-[#171717] border border-black/[0.06]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-[#716b64] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search notes, ingredients, name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#faf8f5] border border-black/10 pl-9 pr-8 py-2 text-xs text-[#171717] placeholder:text-[#918b84] focus:outline-none focus:border-[#b58d4b]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#716b64] hover:text-[#171717]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Bottom row: Scent Family tags + Sorting + Clear */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-black/[0.06] text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[#716b64] text-[11px] uppercase tracking-wider mr-1">
                Family:
              </span>
              {families.map((fam) => (
                <button
                  key={fam}
                  onClick={() => setSelectedFamily(fam)}
                  className={`text-[10px] uppercase tracking-wider px-2.5 py-1 transition-colors cursor-pointer ${
                    selectedFamily === fam
                      ? 'text-[#b58d4b] border-b-2 border-[#b58d4b] font-semibold'
                      : 'text-[#716b64] hover:text-[#171717]'
                  }`}
                >
                  {fam}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4 self-end sm:self-auto">
              <div className="flex items-center space-x-2">
                <span className="text-[#716b64] text-[11px]">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#faf8f5] border border-black/10 text-xs text-[#171717] py-1.5 px-3 focus:outline-none focus:border-[#b58d4b] cursor-pointer"
                >
                  <option value="featured">Featured Curations</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-[10px] uppercase tracking-widest text-[#b58d4b] hover:underline font-semibold cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Product Count Banner */}
        <div className="flex items-center justify-between text-xs text-[#716b64] mb-8">
          <span>
            Displaying <strong className="text-[#171717]">{filteredProducts.length}</strong> of{' '}
            {PRODUCTS.length} Fragrances
          </span>
          <span className="text-[10px] tracking-widest uppercase font-medium">
            All Prices in INR (₹) · Tax Included
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white border border-black/[0.08] p-8">
            <Sparkles className="w-10 h-10 text-[#b58d4b]/40 mx-auto mb-4" />
            <h3 className="font-serif text-xl text-[#171717]">No Flacons Matched</h3>
            <p className="text-xs text-[#716b64] mt-2 max-w-sm mx-auto">
              No fragrances in our vault match your specific search criteria.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 text-xs uppercase tracking-[0.2em] px-6 py-2.5 bg-[#171717] text-[#faf8f5] font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <ScrollReveal key={product.id} delay={(idx % 4) * 0.1}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center text-[#b58d4b] text-xs uppercase tracking-widest">
          Opening Scent Vault...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
