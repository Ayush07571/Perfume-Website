'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const addItem = useCartStore((state) => state.addItem);

  const price = product.prices[product.defaultVolume];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      volume: product.defaultVolume,
      price: price,
      quantity: 1,
      image: product.images.main,
      category: product.category,
    });
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col bg-white border border-black/[0.07] hover:border-[#b58d4b]/60 transition-all duration-500 shadow-xs hover:shadow-xl"
    >
      {/* Top Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-1 pointer-events-none">
        {product.isBestSeller && (
          <span className="text-[9px] uppercase tracking-[0.2em] bg-[#171717] text-[#faf8f5] font-semibold px-2.5 py-1">
            Best Seller
          </span>
        )}
        {product.isNew && (
          <span className="text-[9px] uppercase tracking-[0.2em] bg-white/90 backdrop-blur-md text-[#171717] border border-black/10 px-2 py-0.5 font-medium">
            New Distillation
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleHeartClick}
        className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[#171717] hover:text-[#b58d4b] hover:border-[#b58d4b]/40 transition-colors shadow-xs cursor-pointer"
        aria-label="Save to wishlist"
      >
        <Heart
          className={`w-4 h-4 transition-transform duration-300 ${
            isInWishlist ? 'fill-[#b58d4b] text-[#b58d4b] scale-110' : ''
          }`}
        />
      </button>

      {/* Image Container on Soft Contrast Background */}
      <Link
        href={`/shop/${product.slug}`}
        className="relative aspect-[3/4] w-full overflow-hidden bg-[#f4efe8]"
      >
        <Image
          src={product.images.main}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-all duration-700 ${
            hovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
        <Image
          src={product.images.detail}
          alt={`${product.name} detail`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-all duration-700 absolute inset-0 ${
            hovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
          }`}
        />

        {/* Hover Quick Action Buttons */}
        <div className="absolute inset-x-4 bottom-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleQuickAdd}
            className="flex-1 py-3 bg-[#171717] hover:bg-[#2c2a29] text-[#faf8f5] font-semibold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center space-x-1.5 transition-colors shadow-lg cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#b58d4b]" />
            <span>Add to Bag</span>
          </button>
        </div>
      </Link>

      {/* Info Container */}
      <div className="p-6 flex flex-col flex-1 justify-between bg-white">
        <div>
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#716b64] mb-2 font-medium">
            <span>{product.category}</span>
            <span className="text-[#b58d4b]">{product.family}</span>
          </div>

          <Link href={`/shop/${product.slug}`} className="block group/link">
            <h3 className="font-serif text-xl text-[#171717] group-hover/link:text-[#b58d4b] transition-colors">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-[#716b64] italic mt-1 line-clamp-1">
            "{product.tagline}"
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="font-serif text-base text-[#171717] font-semibold">
              {formatPrice(price)}
            </span>
            <span className="text-[10px] text-[#918b84]">/ {product.defaultVolume}</span>
          </div>

          <Link
            href={`/shop/${product.slug}`}
            className="text-[10px] uppercase tracking-[0.2em] text-[#b58d4b] hover:text-[#171717] transition-colors flex items-center space-x-1 font-semibold"
          >
            <span>Explore</span>
            <Eye className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
