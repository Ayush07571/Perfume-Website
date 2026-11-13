'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useProfileStore } from '@/store/profileStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import { PRODUCTS } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import {
  User,
  Package,
  Heart,
  Sliders,
  Sparkles,
  ShoppingBag,
  Trash2,
  CheckCircle,
} from 'lucide-react';

function ProfileContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'details';
  const [activeTab, setActiveTab] = useState<'details' | 'orders' | 'wishlist' | 'preferences'>(
    (initialTab as any) || 'details'
  );

  const { profile, orders, scentPreferences, updateProfile, toggleScentPreference } =
    useProfileStore();
  const { productIds, toggleWishlist } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);

  const [formProfile, setFormProfile] = useState(profile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setFormProfile(profile);
  }, [profile]);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formProfile);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const wishlistedProducts = PRODUCTS.filter((p) => productIds.includes(p.id));

  const scentFamilies = [
    'Oriental',
    'Woody',
    'Floral',
    'Smoky-Oriental',
    'Fresh-Floral',
    'Spicy-Woody',
    'Green-Floral',
    'Leather-Oud',
  ];

  return (
    <div className="pt-32 pb-36 min-h-screen bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-black/[0.08] mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold">
              Client Sanctum
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#171717] mt-1 font-normal">
              {profile.fullName || 'Patron Profile'}
            </h1>
            <p className="text-xs text-[#716b64] mt-1 font-mono">
              Member ID: MN-PRIV-{profile.phone.slice(-4) || '8849'}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            <button
              onClick={() => setActiveTab('details')}
              className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'details'
                  ? 'border-[#171717] bg-[#171717] text-[#faf8f5] font-semibold shadow-xs'
                  : 'border-black/10 bg-white text-[#716b64] hover:text-[#171717]'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'orders'
                  ? 'border-[#171717] bg-[#171717] text-[#faf8f5] font-semibold shadow-xs'
                  : 'border-black/10 bg-white text-[#716b64] hover:text-[#171717]'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>Orders ({orders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('wishlist')}
              className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'wishlist'
                  ? 'border-[#171717] bg-[#171717] text-[#faf8f5] font-semibold shadow-xs'
                  : 'border-black/10 bg-white text-[#716b64] hover:text-[#171717]'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Wishlist ({wishlistedProducts.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('preferences')}
              className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'preferences'
                  ? 'border-[#171717] bg-[#171717] text-[#faf8f5] font-semibold shadow-xs'
                  : 'border-black/10 bg-white text-[#716b64] hover:text-[#171717]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Olfactory Taste</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Details */}
        {activeTab === 'details' && (
          <div className="max-w-2xl bg-white border border-black/[0.08] p-8 md:p-10 shadow-xl">
            <h2 className="font-serif text-2xl text-[#171717] mb-2 font-normal">
              Patron & Delivery Information
            </h2>
            <p className="text-xs text-[#716b64] mb-8">
              Stored locally on your device for fast white-glove dispatch.
            </p>

            <form onSubmit={handleProfileSave} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formProfile.fullName}
                  onChange={(e) =>
                    setFormProfile({ ...formProfile, fullName: e.target.value })
                  }
                  className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formProfile.email}
                    onChange={(e) =>
                      setFormProfile({ ...formProfile, email: e.target.value })
                    }
                    className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formProfile.phone}
                    onChange={(e) =>
                      setFormProfile({ ...formProfile, phone: e.target.value })
                    }
                    className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                  Shipping Address
                </label>
                <input
                  type="text"
                  required
                  value={formProfile.address}
                  onChange={(e) =>
                    setFormProfile({ ...formProfile, address: e.target.value })
                  }
                  className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={formProfile.city}
                    onChange={(e) =>
                      setFormProfile({ ...formProfile, city: e.target.value })
                    }
                    className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                    Postal / PIN Code
                  </label>
                  <input
                    type="text"
                    required
                    value={formProfile.postalCode}
                    onChange={(e) =>
                      setFormProfile({ ...formProfile, postalCode: e.target.value })
                    }
                    className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b]"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#171717] text-[#faf8f5] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#2c2a29] transition-all cursor-pointer shadow-md"
                >
                  Save Dossier
                </button>
                {savedSuccess && (
                  <span className="text-xs text-[#557a46] flex items-center space-x-1 font-medium">
                    <CheckCircle className="w-4 h-4" />
                    <span>Dossier updated successfully.</span>
                  </span>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Tab 2: Orders */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {orders.length === 0 ? (
              <div className="text-center py-20 bg-white border border-black/[0.08] p-8 shadow-xs">
                <Package className="w-10 h-10 text-[#b58d4b]/40 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-[#171717]">No Vault Orders Found</h3>
                <p className="text-xs text-[#716b64] mt-1 max-w-sm mx-auto">
                  Your acquisitions will be cataloged here once you checkout.
                </p>
                <Link
                  href="/shop"
                  className="mt-6 inline-block text-xs uppercase tracking-widest px-6 py-3 bg-[#171717] text-[#faf8f5] font-semibold"
                >
                  Explore Collection
                </Link>
              </div>
            ) : (
              orders.map((ord) => (
                <div
                  key={ord.orderId}
                  className="bg-white border border-black/[0.08] p-6 md:p-8 space-y-6 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-black/[0.06] gap-2 text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#716b64] block font-medium">
                        Order Identifier
                      </span>
                      <strong className="font-mono text-sm text-[#171717]">
                        {ord.orderId}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#716b64] block font-medium">
                        Date Placed
                      </span>
                      <span className="text-[#171717] font-medium">{ord.date}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#716b64] block font-medium">
                        Amount Paid
                      </span>
                      <span className="font-serif text-sm text-[#b58d4b] font-semibold">
                        {formatPrice(ord.total)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#716b64] block font-medium">
                        Courier Status
                      </span>
                      <span className="inline-block mt-0.5 text-[10px] uppercase tracking-widest px-2.5 py-0.5 bg-[#557a46]/10 text-[#557a46] border border-[#557a46]/20 font-semibold">
                        {ord.status}
                      </span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="space-y-4">
                    {ord.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 pb-4 border-b border-black/[0.04] last:border-none"
                      >
                        <div className="relative w-14 h-16 bg-[#f4efe8] border border-black/10 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-serif text-sm text-[#171717]">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-[#716b64]">
                            {item.volume} · Qty: {item.quantity} · {formatPrice(item.price)}
                          </p>
                        </div>
                        <span className="font-serif text-sm text-[#171717] font-semibold">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-[#918b84] flex items-center justify-between pt-2">
                    <span>Razorpay Reference: {ord.paymentId}</span>
                    <span className="text-[#b58d4b] font-medium">Insured Signature Delivery</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 3: Wishlist */}
        {activeTab === 'wishlist' && (
          <div>
            {wishlistedProducts.length === 0 ? (
              <div className="text-center py-20 bg-white border border-black/[0.08] p-8 shadow-xs">
                <Heart className="w-10 h-10 text-[#b58d4b]/40 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-[#171717]">Your Wishlist is Empty</h3>
                <p className="text-xs text-[#716b64] mt-1 max-w-sm mx-auto">
                  Click the heart icon on any flacon to curate your private wishlist.
                </p>
                <Link
                  href="/shop"
                  className="mt-6 inline-block text-xs uppercase tracking-widest px-6 py-3 bg-[#171717] text-[#faf8f5] font-semibold"
                >
                  Explore Fragrances
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishlistedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white border border-black/[0.08] p-5 flex flex-col justify-between group shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div>
                      <div className="relative aspect-[3/4] w-full bg-[#f4efe8] overflow-hidden mb-4">
                        <Image
                          src={p.images.main}
                          alt={p.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-[#b58d4b] font-semibold">
                        {p.category}
                      </span>
                      <h3 className="font-serif text-lg text-[#171717] mt-0.5">{p.name}</h3>
                      <p className="font-serif text-sm text-[#171717] mt-2 font-semibold">
                        {formatPrice(p.prices[p.defaultVolume])}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center space-x-2">
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
                        className="flex-1 py-2.5 bg-[#171717] hover:bg-[#2c2a29] text-[#faf8f5] text-[10px] font-semibold uppercase tracking-wider flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3 text-[#b58d4b]" />
                        <span>Move to Bag</span>
                      </button>
                      <button
                        onClick={() => toggleWishlist(p.id)}
                        className="p-2.5 border border-black/10 text-[#716b64] hover:text-[#b76e79] hover:border-[#b76e79]/30 cursor-pointer"
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
        )}

        {/* Tab 4: Scent Preferences */}
        {activeTab === 'preferences' && (
          <div className="max-w-2xl bg-white border border-black/[0.08] p-8 md:p-10 space-y-6 shadow-xl">
            <div>
              <h2 className="font-serif text-2xl text-[#171717] font-normal">
                Bespoke Olfactory Profile
              </h2>
              <p className="text-xs text-[#716b64] mt-1">
                Select the families you naturally favor. Our perfumers will customize
                complimentary discovery samples sent with your acquisitions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {scentFamilies.map((fam) => {
                const isSelected = scentPreferences.includes(fam);
                return (
                  <button
                    key={fam}
                    onClick={() => toggleScentPreference(fam)}
                    className={`p-4 border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#171717] bg-[#171717] text-[#faf8f5] font-semibold shadow-xs'
                        : 'border-black/10 bg-[#faf8f5] text-[#716b64] hover:text-[#171717] hover:border-black/20'
                    }`}
                  >
                    <span className="text-xs uppercase tracking-wider block">
                      {fam}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest mt-1 block opacity-60">
                      {isSelected ? '✓ Favored' : '+ Select'}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p-4 bg-[#faf8f5] border border-black/5 text-xs text-[#635e59] flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#b58d4b] flex-shrink-0" />
              <span>
                Based on your taste, our nose recommends exploring{' '}
                <strong className="text-[#171717]">Noir Absolu</strong> and{' '}
                <strong className="text-[#171717]">Le Dernier Mot</strong>.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center text-[#b58d4b] text-xs uppercase tracking-widest">
          Accessing Client Sanctum...
        </div>
      }
    >
      <ProfileContent />
    </Suspense>
  );
}
