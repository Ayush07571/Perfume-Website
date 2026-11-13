'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, Package, Sparkles } from 'lucide-react';
import { useProfileStore } from '@/store/profileStore';
import { formatPrice } from '@/lib/utils';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'MN-884920';

  const orders = useProfileStore((state) => state.orders);
  const currentOrder = orders.find((o) => o.orderId === orderId) || orders[0];

  return (
    <div className="pt-32 pb-36 min-h-screen bg-[#faf8f5] flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-6 sm:px-8">
        <div className="bg-white border border-black/[0.08] p-8 md:p-14 text-center shadow-xl relative overflow-hidden">
          {/* Subtle gold ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#b58d4b]/10 blur-3xl pointer-events-none rounded-full" />

          {/* Animated Gold Checkmark */}
          <div className="w-16 h-16 rounded-full border border-[#b58d4b] bg-[#b58d4b]/10 flex items-center justify-center text-[#b58d4b] mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.35em] text-[#b58d4b] font-semibold">
            Acquisition Confirmed
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#171717] mt-2 font-normal">
            Your Flacon Is Sealed
          </h1>

          <p className="text-xs text-[#635e59] max-w-md mx-auto mt-3 leading-relaxed font-light">
            Thank you for your patronage. Your order has been registered in the
            Maison Noir registry and is being prepared under museum-grade climate control.
          </p>

          {/* Order Details Card */}
          <div className="my-8 p-6 bg-[#faf8f5] border border-black/[0.06] text-left text-xs space-y-3">
            <div className="flex justify-between pb-3 border-b border-black/[0.06]">
              <span className="text-[#716b64]">Order Identifier</span>
              <span className="font-mono text-[#171717] font-bold">{orderId}</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-black/[0.06]">
              <span className="text-[#716b64]">Payment Engine</span>
              <span className="text-[#171717]">Razorpay (Prepaid INR)</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-black/[0.06]">
              <span className="text-[#716b64]">Estimated Dispatch</span>
              <span className="text-[#171717]">Within 24 Hours (Insured Courier)</span>
            </div>
            {currentOrder && (
              <div className="flex justify-between pt-1 font-serif text-sm">
                <span className="text-[#171717] font-medium">Total Paid</span>
                <span className="text-[#b58d4b] font-bold">
                  {formatPrice(currentOrder.total)}
                </span>
              </div>
            )}
          </div>

          {/* Complimentary Discovery Gift Note */}
          <div className="p-4 bg-[#b58d4b]/10 border border-[#b58d4b]/30 text-xs text-[#7d5e28] flex items-center justify-center space-x-2 mb-8 font-medium">
            <Sparkles className="w-4 h-4 text-[#b58d4b] flex-shrink-0" />
            <span>
              Two 2ml confidential discovery vials have been included with our compliments.
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/profile?tab=orders"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#171717] text-[#faf8f5] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#2c2a29] transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer"
            >
              <Package className="w-4 h-4 text-[#b58d4b]" />
              <span>Track in Client Profile</span>
            </Link>
            <Link
              href="/shop"
              className="w-full sm:w-auto px-8 py-3.5 border border-black/20 text-[#171717] hover:border-[#171717] text-xs uppercase tracking-[0.2em] transition-colors font-medium cursor-pointer"
            >
              Continue Exploring
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center text-[#b58d4b] text-xs uppercase tracking-widest">
          Verifying Vault Record...
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
