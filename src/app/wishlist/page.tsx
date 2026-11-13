'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import { PRODUCTS } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { Heart, ShoppingBag, Trash2, Sparkles, ArrowRight } from 'lucide-react';

export default function WishlistPage() {
  const { productIds, toggleWishlist } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);

  const wishlistedProducts = PRODUCTS.filter((p) => productIds.includes(p.id));

  return (
    <div className="pt-32 pb-36 min-h-screen bg-[#faf8f5] text-[#171717]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-[#716b64] mb-8">
          <Link href="/" className="hover:text-[#171717] transition-colors">
            Maison
          </Link>
          <span className="text-[#c7beaf]">/</span>
          <Link href="/profile" className="hover:text-[#171717] transition-colors">
            Patron Sanctum
          </Link>
          <span className="text-[#c7beaf]">/</span>
          <span className="text-[#b58d4b] font-medium">Saved Wishlist</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-black/[0.08]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold flex items-center space-x-2">
              <Heart className="w-3.5 h-3.5 fill-[#b58d4b]" />
              <span>Private Reserves</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] mt-2 font-normal">
              Your Curated Wishlist
            </h1>
            <p className="text-xs text-[#716b64] mt-2 font-light tracking-wide">
              Flacons saved to your personal vault for future acquisition or gifting.
            </p>
          </div>

          <div className="flex items-center space-x-3 mt-4 md:mt-0 text-xs">
            <span className="text-xs text-[#716b64] font-medium mr-2">
              <strong className="text-[#171717]">{wishlistedProducts.length}</strong> Flacons Saved
            </span>
            <Link
              href="/orders"
              className="px-4 py-2 border border-black/10 bg-white text-[#716b64] hover:text-[#171717] transition-colors font-medium text-[11px] uppercase tracking-wider"
            >
              Past Orders
            </Link>
            <Link
              href="/profile"
              className="px-4 py-2 border border-black/10 bg-white text-[#716b64] hover:text-[#171717] transition-colors font-medium text-[11px] uppercase tracking-wider"
            >
              Account
            </Link>
          </div>
        </div>

        {/* Wishlist Grid */}
        {wishlistedProducts.length === 0 ? (
          <div className="text-center py-24 bg-white border border-black/[0.08] p-8 shadow-xs max-w-xl mx-auto">
            <Heart className="w-12 h-12 text-[#b58d4b]/40 mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#171717]">Your Wishlist is Empty</h3>
            <p className="text-xs text-[#716b64] mt-2 leading-relaxed">
              Explore our clandestine collection and click the heart icon on any flacon to curate your private wishlist.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-8 py-3.5 bg-[#171717] text-[#faf8f5] font-semibold hover:bg-[#2c2a29] transition-colors shadow-md"
            >
              <span>Discover Fragrances</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-black/[0.08] flex flex-col justify-between group shadow-sm hover:shadow-xl hover:border-[#b58d4b]/40 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Image container */}
                  <Link
                    href={`/shop/${p.slug}`}
                    className="relative aspect-[3/4] w-full bg-[#f4efe8] block overflow-hidden"
                  >
                    <Image
                      src={p.images.main}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 text-[9px] uppercase tracking-widest bg-white/90 backdrop-blur-md px-2.5 py-1 text-[#171717] border border-black/10 font-semibold">
                      {p.category}
                    </div>
                  </Link>

                  <div className="p-5">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#716b64] mb-1">
                      <span>{p.intensity}</span>
                      <span className="text-[#b58d4b] font-medium">{p.family}</span>
                    </div>

                    <Link href={`/shop/${p.slug}`}>
                      <h3 className="font-serif text-lg text-[#171717] group-hover:text-[#b58d4b] transition-colors">
                        {p.name}
                      </h3>
                    </Link>

                    <p className="font-serif text-base text-[#171717] mt-2 font-semibold">
                      {formatPrice(p.prices[p.defaultVolume])}
                      <span className="text-xs text-[#716b64] font-normal ml-1 font-sans">
                        / {p.defaultVolume}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-5 pt-0 flex items-center space-x-2">
                  <button
                    onClick={() =>
                      addItem({
                        productId: p.id,
                        name: p.name,
                        volume: p.defaultVolume,
                        price: p.prices[p.defaultVolume],
                        quantity: 1,
                        image: p.images.main,
                        category: p.category,
                      })
                    }
                    className="flex-1 py-3 bg-[#171717] hover:bg-[#2c2a29] text-[#faf8f5] text-[10px] font-semibold uppercase tracking-[0.2em] flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#b58d4b]" />
                    <span>Move to Bag</span>
                  </button>
                  <button
                    onClick={() => toggleWishlist(p.id)}
                    className="p-3 border border-black/10 text-[#716b64] hover:text-[#b76e79] hover:border-[#b76e79]/30 transition-colors cursor-pointer"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
