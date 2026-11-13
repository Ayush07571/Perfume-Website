'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useProfileStore } from '@/store/profileStore';
import { formatPrice } from '@/lib/utils';
import { Package, Truck, ShieldCheck, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

export default function OrdersPage() {
  const { orders, profile } = useProfileStore();

  return (
    <div className="pt-32 pb-36 min-h-screen bg-[#faf8f5] text-[#171717]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
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
          <span className="text-[#b58d4b] font-medium">Orders & Tracking</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-black/[0.08]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold flex items-center space-x-2">
              <Package className="w-3.5 h-3.5" />
              <span>Acquisition History</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#171717] mt-2 font-normal">
              Your Orders & Courier Tracking
            </h1>
            <p className="text-xs text-[#716b64] mt-1.5 font-light">
              Dispatched via white-glove insured courier for patron{' '}
              <strong className="text-[#171717] font-medium">{profile.fullName || 'Alistair Sterling'}</strong>
            </p>
          </div>

          <div className="flex items-center space-x-3 mt-4 md:mt-0 text-xs">
            <Link
              href="/wishlist"
              className="px-4 py-2 border border-black/10 bg-white text-[#716b64] hover:text-[#171717] transition-colors font-medium text-[11px] uppercase tracking-wider"
            >
              Saved Wishlist
            </Link>
            <Link
              href="/profile"
              className="px-4 py-2 border border-black/10 bg-white text-[#716b64] hover:text-[#171717] transition-colors font-medium text-[11px] uppercase tracking-wider"
            >
              Account Details
            </Link>
          </div>
        </div>

        {/* Orders Listing */}
        {orders.length === 0 ? (
          <div className="text-center py-24 bg-white border border-black/[0.08] p-8 shadow-xs">
            <Package className="w-12 h-12 text-[#b58d4b]/40 mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#171717]">No Vault Orders Found</h3>
            <p className="text-xs text-[#716b64] mt-2 max-w-md mx-auto leading-relaxed">
              You haven’t placed an order yet. Explore our confidentiality reserves and
              acquire your first signature flacon.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-8 py-3.5 bg-[#171717] text-[#faf8f5] font-semibold hover:bg-[#2c2a29] transition-colors shadow-md"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((ord) => (
              <div
                key={ord.orderId}
                className="bg-white border border-black/[0.08] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Order Top Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-black/[0.06] text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#716b64] block font-medium">
                      Order ID
                    </span>
                    <strong className="font-mono text-sm text-[#171717] mt-0.5 block">
                      {ord.orderId}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#716b64] block font-medium">
                      Date Sealed
                    </span>
                    <span className="text-[#171717] font-medium mt-0.5 block">
                      {ord.date}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#716b64] block font-medium">
                      Total Billed
                    </span>
                    <span className="font-serif text-sm text-[#b58d4b] font-semibold mt-0.5 block">
                      {formatPrice(ord.total)}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#716b64] block font-medium">
                      Dispatch Status
                    </span>
                    <span className="inline-flex items-center space-x-1 mt-1 text-[10px] uppercase tracking-widest px-2.5 py-0.5 bg-[#557a46]/10 text-[#557a46] border border-[#557a46]/20 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{ord.status}</span>
                    </span>
                  </div>
                </div>

                {/* Items in Order */}
                <div className="py-6 space-y-4">
                  {ord.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 pb-4 border-b border-black/[0.04] last:border-none last:pb-0"
                    >
                      <div className="relative w-16 h-20 bg-[#f4efe8] border border-black/10 flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/shop/${item.productId}`}
                          className="font-serif text-base text-[#171717] hover:text-[#b58d4b] transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-[#716b64] mt-0.5">
                          {item.volume} · Quantity: {item.quantity} · {formatPrice(item.price)} each
                        </p>
                        <span className="text-[10px] uppercase tracking-wider text-[#b58d4b] mt-1 inline-block font-medium">
                          {item.category}
                        </span>
                      </div>
                      <span className="font-serif text-base text-[#171717] font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer notes */}
                <div className="pt-4 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#716b64] gap-2">
                  <div className="flex items-center space-x-2">
                    <Truck className="w-3.5 h-3.5 text-[#b58d4b]" />
                    <span>White-Glove Temperature-Controlled Courier</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-mono">Ref: {ord.paymentId}</span>
                    <span className="text-[#b58d4b] font-medium flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Insured</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
