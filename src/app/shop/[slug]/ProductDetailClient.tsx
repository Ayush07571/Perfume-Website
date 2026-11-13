'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, VolumeOption } from '@/data/products';
import ScentPyramid from '@/components/ui/ScentPyramid';
import ProductCard from '@/components/ui/ProductCard';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { formatPrice } from '@/lib/utils';
import {
  Star,
  Heart,
  ShoppingBag,
  Plus,
  Minus,
  ShieldCheck,
  Truck,
  ChevronRight,
} from 'lucide-react';

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: Props) {
  const [selectedVolume, setSelectedVolume] = useState<VolumeOption>(product.defaultVolume);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState<string>(product.images.main);

  const addItem = useCartStore((state) => state.addItem);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);

  const price = product.prices[selectedVolume];
  const volumeOptions: VolumeOption[] = ['30ml', '50ml', '100ml'];

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      volume: selectedVolume,
      price: price,
      quantity: quantity,
      image: product.images.main,
      category: product.category,
    });
  };

  const imagesList = [
    { label: 'Front View', url: product.images.main },
    { label: 'Flacon Detail', url: product.images.detail },
    { label: 'Atmosphere', url: product.images.lifestyle },
  ];

  return (
    <div className="pt-28 pb-36 min-h-screen bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-[#716b64] mb-10">
          <Link href="/" className="hover:text-[#171717]">
            Maison
          </Link>
          <ChevronRight className="w-3 h-3 text-[#c7beaf]" />
          <Link href="/shop" className="hover:text-[#171717]">
            Collection
          </Link>
          <ChevronRight className="w-3 h-3 text-[#c7beaf]" />
          <span className="text-[#b58d4b] font-medium">{product.name}</span>
        </nav>

        {/* Top Product Section: Gallery + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 border-b border-black/[0.08]">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/5] w-full bg-[#f4efe8] border border-black/[0.08] overflow-hidden group shadow-lg">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 text-[9px] uppercase tracking-widest bg-white/90 backdrop-blur-md px-3 py-1 text-[#171717] border border-black/10 font-semibold">
                {product.intensity} Concentration
              </div>
            </div>

            {/* Thumbnail Selection */}
            <div className="grid grid-cols-3 gap-4">
              {imagesList.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img.url)}
                  className={`relative aspect-[4/3] bg-[#f4efe8] border transition-all cursor-pointer overflow-hidden ${
                    activeImage === img.url
                      ? 'border-[#b58d4b] ring-2 ring-[#b58d4b]/40 shadow-sm'
                      : 'border-black/10 hover:border-black/30 opacity-75 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Purchasing & Specifications */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="uppercase tracking-[0.25em] text-[#b58d4b] font-semibold">
                  {product.category} · {product.family}
                </span>
                <div className="flex items-center space-x-1.5 text-xs text-[#716b64]">
                  <div className="flex items-center text-[#b58d4b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#b58d4b]" />
                    ))}
                  </div>
                  <span>({product.reviewCount} Patrons)</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] leading-tight font-normal">
                {product.name}
              </h1>
              <p className="font-serif italic text-base sm:text-lg text-[#b58d4b] mt-2 font-light">
                "{product.tagline}"
              </p>

              {/* Dynamic Price Display */}
              <div className="mt-6 flex items-baseline space-x-3">
                <span className="font-serif text-3xl sm:text-4xl text-[#171717] font-semibold">
                  {formatPrice(price)}
                </span>
                <span className="text-xs text-[#716b64] tracking-wider uppercase font-medium">
                  Inclusive of all taxes & insurance
                </span>
              </div>
            </div>

            {/* Volume Selector */}
            <div className="space-y-3 pt-6 border-t border-black/[0.08]">
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-widest text-[#716b64] font-medium">
                  Flacon Volume:
                </span>
                <span className="text-[#b58d4b] font-semibold">{selectedVolume}</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {volumeOptions.map((vol) => (
                  <button
                    key={vol}
                    onClick={() => setSelectedVolume(vol)}
                    className={`py-3 px-4 border text-center transition-all cursor-pointer ${
                      selectedVolume === vol
                        ? 'border-[#171717] bg-[#171717] text-[#faf8f5] shadow-sm font-semibold'
                        : 'border-black/10 bg-white text-[#716b64] hover:text-[#171717] hover:border-black/20'
                    }`}
                  >
                    <div className="text-xs tracking-wider uppercase">{vol}</div>
                    <div className={`text-[10px] mt-0.5 ${selectedVolume === vol ? 'text-[#e5cb9b]' : 'text-[#918b84]'}`}>
                      {formatPrice(product.prices[vol])}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4 pt-6 border-t border-black/[0.08]">
              <div className="flex space-x-4">
                {/* Qty Stepper */}
                <div className="flex items-center border border-black/15 bg-white shadow-2xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-12 flex items-center justify-center text-[#716b64] hover:text-[#171717] transition-colors cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-serif text-sm text-[#171717] font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-12 flex items-center justify-center text-[#716b64] hover:text-[#171717] transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Bag CTA */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-[#171717] text-[#faf8f5] font-semibold text-xs uppercase tracking-[0.25em] btn-shimmer hover:bg-[#2c2a29] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4 text-[#b58d4b]" />
                  <span>Add to Scent Wardrobe</span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-4 border transition-colors cursor-pointer ${
                    isInWishlist
                      ? 'border-[#b58d4b] bg-[#b58d4b]/10 text-[#b58d4b]'
                      : 'border-black/15 bg-white text-[#716b64] hover:text-[#171717]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart
                    className={`w-4 h-4 ${isInWishlist ? 'fill-[#b58d4b]' : ''}`}
                  />
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-4 pt-4 text-[11px] text-[#716b64]">
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-[#b58d4b]" />
                  <span>Complimentary Pan-India Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#b58d4b]" />
                  <span>Handcrafted Certificate Included</span>
                </div>
              </div>
            </div>

            {/* Performance Specifications Table */}
            <div className="p-5 bg-white border border-black/[0.08] space-y-3 shadow-xs">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#b58d4b] font-semibold">
                Technical Specifications
              </span>
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                <div className="p-2 border border-black/5 bg-[#faf8f5]">
                  <span className="text-[9px] uppercase tracking-wider text-[#716b64] block">
                    Intensity
                  </span>
                  <strong className="text-[#171717] mt-0.5 block font-serif">
                    {product.intensity}
                  </strong>
                </div>
                <div className="p-2 border border-black/5 bg-[#faf8f5]">
                  <span className="text-[9px] uppercase tracking-wider text-[#716b64] block">
                    Longevity
                  </span>
                  <strong className="text-[#171717] mt-0.5 block font-serif">
                    {product.longevity}
                  </strong>
                </div>
                <div className="p-2 border border-black/5 bg-[#faf8f5]">
                  <span className="text-[9px] uppercase tracking-wider text-[#716b64] block">
                    Sillage
                  </span>
                  <strong className="text-[#171717] mt-0.5 block font-serif">
                    {product.sillage}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Scent Pyramid & Scent Narrative */}
        <div className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-b border-black/[0.08]">
          <div className="lg:col-span-6">
            <ScrollReveal>
              <ScentPyramid notes={product.notes} />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal delay={0.2}>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold">
                  Behind the Formulation
                </span>
                <h3 className="font-serif text-3xl text-[#171717] mt-2">
                  The Origin Story
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#635e59] leading-relaxed tracking-wider font-light">
                {product.story}
              </p>

              <p className="text-xs sm:text-sm text-[#635e59] leading-relaxed tracking-wider font-light">
                {product.description}
              </p>

              {/* Ingredients Origins Table */}
              <div className="pt-6 border-t border-black/[0.06]">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#b58d4b] mb-4 font-semibold">
                  Ethically Harvested Raw Materials
                </h4>
                <div className="space-y-2">
                  {product.ingredients.map((ing) => (
                    <div
                      key={ing.name}
                      className="flex items-center justify-between p-3.5 bg-white border border-black/[0.06] text-xs shadow-2xs"
                    >
                      <span className="text-[#171717] font-medium">{ing.name}</span>
                      <span className="text-[#716b64] font-mono text-[11px]">
                        {ing.origin}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Section 3: "Complete Your Ritual" (Related Fragrances) */}
        <div className="pt-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold">
              Harmonious Complements
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#171717] mt-2">
              Complete Your Ritual
            </h3>
            <p className="text-xs text-[#716b64] mt-2 tracking-wider">
              Pair this flacon with an opposing accord to create a bespoke layered sillage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
