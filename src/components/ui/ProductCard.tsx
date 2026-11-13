'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  dark?: boolean;
}

export default function ProductCard({
  product,
  priority = false,
  dark = false,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const addItem = useCartStore((state) => state.addItem);

  const price = product.prices[product.defaultVolume];

  // Subtle scroll parallax for the perfume flacon
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.03, 1.08]);

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
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex flex-col transition-all duration-500 shadow-xs hover:shadow-2xl ${
        dark
          ? 'bg-[#141414] border border-white/10 hover:border-[#b58d4b]/60'
          : 'bg-white border border-black/[0.07] hover:border-[#b58d4b]/60'
      }`}
    >
      {/* Top Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-1 pointer-events-none">
        {product.isBestSeller && (
          <span
            className={`text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 ${
              dark ? 'bg-[#b58d4b] text-[#080808]' : 'bg-[#171717] text-[#faf8f5]'
            }`}
          >
            Best Seller
          </span>
        )}
        {product.isNew && (
          <span
            className={`text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 font-medium backdrop-blur-md ${
              dark
                ? 'bg-white/10 text-[#faf8f5] border border-white/20'
                : 'bg-white/90 text-[#171717] border border-black/10'
            }`}
          >
            New Distillation
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleHeartClick}
        className={`absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-md transition-colors shadow-xs cursor-pointer ${
          dark
            ? 'bg-black/60 border border-white/10 text-[#faf8f5] hover:text-[#b58d4b] hover:border-[#b58d4b]/40'
            : 'bg-white/90 border border-black/10 text-[#171717] hover:text-[#b58d4b] hover:border-[#b58d4b]/40'
        }`}
        aria-label="Save to wishlist"
      >
        <Heart
          className={`w-4 h-4 transition-transform duration-300 ${
            isInWishlist
              ? 'fill-[#b58d4b] text-[#b58d4b] scale-110'
              : ''
          }`}
        />
      </button>

      {/* Image Container with Smooth Scroll Parallax */}
      <Link
        href={`/shop/${product.slug}`}
        className={`relative aspect-[3/4] w-full overflow-hidden block ${
          dark ? 'bg-[#1a1a1a]' : 'bg-[#f4efe8]'
        }`}
      >
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative w-full h-[112%] -top-[6%]"
        >
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <Image
            src={product.images.detail}
            alt={`${product.name} detail`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-opacity duration-500 absolute inset-0 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </motion.div>

        {/* Hover Quick Action Buttons */}
        <div className="absolute inset-x-4 bottom-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleQuickAdd}
            className={`flex-1 py-3 font-semibold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center space-x-1.5 transition-colors shadow-lg cursor-pointer ${
              dark
                ? 'bg-[#b58d4b] hover:bg-[#cb9f54] text-[#080808]'
                : 'bg-[#171717] hover:bg-[#2c2a29] text-[#faf8f5]'
            }`}
          >
            <ShoppingBag
              className={`w-3.5 h-3.5 ${dark ? 'text-[#080808]' : 'text-[#b58d4b]'}`}
            />
            <span>Add to Bag</span>
          </button>
        </div>
      </Link>

      {/* Info Container */}
      <div
        className={`p-6 flex flex-col flex-1 justify-between ${
          dark ? 'bg-[#141414]' : 'bg-white'
        }`}
      >
        <div>
          <div
            className={`flex items-center justify-between text-[10px] uppercase tracking-[0.25em] mb-2 font-medium ${
              dark ? 'text-[#a8a39d]' : 'text-[#716b64]'
            }`}
          >
            <span>{product.category}</span>
            <span className="text-[#b58d4b]">{product.family}</span>
          </div>

          <Link href={`/shop/${product.slug}`} className="block group/link">
            <h3
              className={`font-serif text-xl transition-colors ${
                dark
                  ? 'text-[#faf8f5] group-hover/link:text-[#b58d4b]'
                  : 'text-[#171717] group-hover/link:text-[#b58d4b]'
              }`}
            >
              {product.name}
            </h3>
          </Link>

          <p
            className={`text-xs italic mt-1 line-clamp-1 ${
              dark ? 'text-[#a8a39d]' : 'text-[#716b64]'
            }`}
          >
            "{product.tagline}"
          </p>
        </div>

        <div
          className={`pt-4 mt-4 flex items-center justify-between ${
            dark ? 'border-t border-white/5' : 'border-t border-black/[0.06]'
          }`}
        >
          <div className="flex items-baseline space-x-2">
            <span
              className={`font-serif text-base font-semibold ${
                dark ? 'text-[#faf8f5]' : 'text-[#171717]'
              }`}
            >
              {formatPrice(price)}
            </span>
            <span
              className={`text-[10px] ${dark ? 'text-[#716b64]' : 'text-[#918b84]'}`}
            >
              / {product.defaultVolume}
            </span>
          </div>

          <Link
            href={`/shop/${product.slug}`}
            className="text-[10px] uppercase tracking-[0.2em] text-[#b58d4b] hover:opacity-80 transition-opacity flex items-center space-x-1 font-semibold"
          >
            <span>Explore</span>
            <Eye className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
