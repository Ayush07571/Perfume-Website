'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useProfileStore } from '@/store/profileStore';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const router = useRouter();
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    shipping,
    total,
    clearCart,
  } = useCartStore();

  const addOrder = useProfileStore((state) => state.addOrder);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const sub = subtotal();
  const ship = shipping();
  const grandTotal = total();
  const freeShippingThreshold = 4000;
  const progressPercent = Math.min(100, (sub / freeShippingThreshold) * 100);

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setIsCheckingOut(true);

    setTimeout(() => {
      const orderId = `MN-${Math.floor(100000 + Math.random() * 900000)}`;
      const newOrder = {
        orderId,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }),
        items: [...items],
        subtotal: sub,
        shipping: ship,
        total: grandTotal,
        status: 'Confirmed' as const,
        paymentId: `pay_rzp_mock_${Math.random().toString(36).substring(2, 9)}`,
      };

      addOrder(newOrder);
      clearCart();
      closeCart();
      setIsCheckingOut(false);
      router.push(`/order/success?orderId=${orderId}`);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer - Contrast Dark Vault */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[460px] bg-[#0e0e0e] text-[#faf8f5] border-l border-white/10 z-50 flex flex-col justify-between shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg tracking-[0.2em] uppercase text-[#faf8f5]">
                  Your Scent Wardrobe
                </h3>
                <p className="text-[11px] text-[#a8a39d] uppercase tracking-widest mt-0.5">
                  {items.length} {items.length === 1 ? 'Fragrance' : 'Fragrances'} Selected
                </p>
              </div>
              <button
                onClick={closeCart}
                className="text-white/60 hover:text-[#e5cb9b] transition-colors p-1 cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free shipping progress bar */}
            {items.length > 0 && (
              <div className="px-6 py-3 bg-[#171717] border-b border-white/5">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-[#a8a39d] flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#e5cb9b]" />
                    <span>
                      {sub >= freeShippingThreshold
                        ? 'Complimentary Express Courier Unlocked'
                        : `Add ${formatPrice(freeShippingThreshold - sub)} for Free Delivery`}
                    </span>
                  </span>
                  <span className="text-[#e5cb9b] text-[10px] tracking-wider font-semibold">
                    {Math.round(progressPercent)}%
                  </span>
                </div>
                <div className="w-full h-1 bg-black rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#b58d4b] to-[#e5cb9b] transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full border border-dashed border-[#e5cb9b]/30 flex items-center justify-center text-[#e5cb9b] mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg tracking-wider text-[#faf8f5] mb-2">
                    Your Wardrobe is Empty
                  </h4>
                  <p className="text-xs text-[#a8a39d] max-w-xs leading-relaxed mb-6 font-light">
                    Each flacon is an invitation into the clandestine world of haute
                    parfumerie.
                  </p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#e5cb9b] border border-[#e5cb9b]/40 px-6 py-3 hover:bg-[#e5cb9b] hover:text-[#080808] transition-all duration-300 font-semibold"
                  >
                    <span>Discover Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 pb-6 border-b border-white/5 group"
                  >
                    <div className="relative w-20 h-24 bg-[#171717] border border-white/10 overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-[#e5cb9b]">
                              {item.category}
                            </span>
                            <h4 className="font-serif text-base text-[#faf8f5]">
                              {item.name}
                            </h4>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[#716b64] hover:text-[#b76e79] transition-colors p-1 cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="inline-block mt-1 text-[11px] text-[#a8a39d] border border-white/10 px-2 py-0.5 rounded-sm">
                          {item.volume}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-white/10 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#a8a39d] hover:text-[#faf8f5] transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs text-[#faf8f5]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#a8a39d] hover:text-[#faf8f5] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif text-sm text-[#faf8f5] font-semibold">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-[#141414] space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-[#a8a39d]">
                    <span>Subtotal</span>
                    <span className="text-[#faf8f5]">{formatPrice(sub)}</span>
                  </div>
                  <div className="flex justify-between text-[#a8a39d]">
                    <span>Insured White-Glove Shipping</span>
                    <span className="text-[#e5cb9b]">
                      {ship === 0 ? 'Complimentary' : formatPrice(ship)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t border-white/5 text-[#faf8f5]">
                    <span className="font-medium tracking-wide">Total (INR)</span>
                    <span className="font-serif text-base text-[#e5cb9b] font-bold">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-4 bg-gradient-to-r from-[#9e7838] via-[#b58d4b] to-[#e5cb9b] text-[#080808] font-bold text-xs uppercase tracking-[0.25em] btn-shimmer hover:opacity-95 transition-opacity flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer shadow-lg"
                >
                  {isCheckingOut ? (
                    <span>Securing Vault Order...</span>
                  ) : (
                    <>
                      <span>Proceed to Razorpay Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-2 text-[10px] text-[#716b64] tracking-wider uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#e5cb9b]" />
                  <span>256-Bit Encrypted · Authentic Certified · Razorpay</span>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
