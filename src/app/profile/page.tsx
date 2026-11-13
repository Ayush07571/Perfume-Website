'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useProfileStore } from '@/store/profileStore';
import {
  User,
  Package,
  Heart,
  CheckCircle,
  ShieldCheck,
  Truck,
  Sparkles,
} from 'lucide-react';

function ProfileContent() {
  const { profile, updateProfile, orders } = useProfileStore();

  const sanitizeProfile = (p: typeof profile) => {
    if (
      !p?.fullName ||
      p.fullName.toLowerCase().includes('ayush') ||
      p.email.toLowerCase().includes('ayush')
    ) {
      return {
        fullName: 'Alistair Sterling',
        email: 'alistair.sterling@sanctum.com',
        phone: '+91 98765 43210',
        address: 'Penthouse 4B, Malabar Hill',
        city: 'Mumbai',
        postalCode: '400006',
      };
    }
    return p;
  };

  const safeProfile = sanitizeProfile(profile);
  const [formProfile, setFormProfile] = useState(safeProfile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('maison-noir-profile');
        localStorage.removeItem('maison-noir-profile-v2');
      } catch (e) {
        // ignore
      }
    }
    const clean = sanitizeProfile(profile);
    if (clean.fullName !== profile.fullName || clean.email !== profile.email) {
      updateProfile(clean);
    }
    setFormProfile(clean);
  }, [profile, updateProfile]);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formProfile);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="pt-32 pb-36 min-h-screen bg-[#faf8f5] text-[#171717]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-[#716b64] mb-8">
          <Link href="/" className="hover:text-[#171717] transition-colors">
            Maison
          </Link>
          <span className="text-[#c7beaf]">/</span>
          <span className="text-[#b58d4b] font-medium">Patron Sanctum</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-black/[0.08] mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold flex items-center space-x-2">
              <User className="w-3.5 h-3.5" />
              <span>Patron Sanctum</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] mt-2 font-normal">
              {safeProfile.fullName || 'Patron Profile'}
            </h1>
            <p className="text-xs text-[#716b64] mt-1.5 font-mono">
              Member ID: MN-PRIV-{safeProfile.phone.slice(-4) || '8849'} · Tier: Private Vault
            </p>
          </div>

          {/* Quick links to separate pages */}
          <div className="flex items-center space-x-3 mt-6 md:mt-0 text-xs">
            <Link
              href="/orders"
              className="px-4 py-2 border border-black/10 bg-white text-[#716b64] hover:text-[#171717] hover:border-black/20 transition-all font-medium text-[11px] uppercase tracking-wider flex items-center space-x-1.5 shadow-2xs"
            >
              <Package className="w-3.5 h-3.5 text-[#b58d4b]" />
              <span>Orders ({orders.length})</span>
            </Link>
            <Link
              href="/wishlist"
              className="px-4 py-2 border border-black/10 bg-white text-[#716b64] hover:text-[#171717] hover:border-black/20 transition-all font-medium text-[11px] uppercase tracking-wider flex items-center space-x-1.5 shadow-2xs"
            >
              <Heart className="w-3.5 h-3.5 text-[#b58d4b]" />
              <span>Saved Wishlist</span>
            </Link>
          </div>
        </div>

        {/* Two-Column Profile & Membership Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Form: Patron & Delivery Information */}
          <div className="lg:col-span-8 bg-white border border-black/[0.08] p-8 md:p-10 shadow-sm">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/[0.06]">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl text-[#171717] font-normal">
                  Delivery Dossier & Credentials
                </h2>
                <p className="text-xs text-[#716b64] mt-1 font-light">
                  Stored securely on your client session for accelerated white-glove dispatch.
                </p>
              </div>
              <ShieldCheck className="w-5 h-5 text-[#b58d4b]" />
            </div>

            <form onSubmit={handleProfileSave} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alistair Sterling"
                  value={formProfile.fullName}
                  onChange={(e) =>
                    setFormProfile({ ...formProfile, fullName: e.target.value })
                  }
                  className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b] transition-colors"
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
                    placeholder="patron@sanctum.com"
                    value={formProfile.email}
                    onChange={(e) =>
                      setFormProfile({ ...formProfile, email: e.target.value })
                    }
                    className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    value={formProfile.phone}
                    onChange={(e) =>
                      setFormProfile({ ...formProfile, phone: e.target.value })
                    }
                    className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b] transition-colors"
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
                  placeholder="Penthouse 4B, Malabar Hill"
                  value={formProfile.address}
                  onChange={(e) =>
                    setFormProfile({ ...formProfile, address: e.target.value })
                  }
                  className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b] transition-colors"
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
                    placeholder="Mumbai"
                    value={formProfile.city}
                    onChange={(e) =>
                      setFormProfile({ ...formProfile, city: e.target.value })
                    }
                    className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                    Postal / PIN Code
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="400006"
                    value={formProfile.postalCode}
                    onChange={(e) =>
                      setFormProfile({ ...formProfile, postalCode: e.target.value })
                    }
                    className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b] transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-black/[0.06]">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#171717] text-[#faf8f5] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#2c2a29] transition-all cursor-pointer shadow-md"
                >
                  Save Dossier
                </button>
                {savedSuccess && (
                  <span className="text-xs text-[#557a46] flex items-center space-x-1.5 font-medium">
                    <CheckCircle className="w-4 h-4" />
                    <span>Dossier updated successfully.</span>
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Side Panel: Privileges & Security */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-black/[0.08] p-6 shadow-sm space-y-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#b58d4b] font-semibold flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Patron Privileges</span>
              </span>
              <h3 className="font-serif text-lg text-[#171717]">
                Haute Parfumerie Concierge
              </h3>
              <p className="text-xs text-[#716b64] leading-relaxed font-light">
                As a registered patron of Maison Noir, your flacons are hand-inspected
                and prepared under climate-controlled conditions prior to white-glove dispatch.
              </p>

              <div className="pt-4 border-t border-black/[0.06] space-y-3 text-xs text-[#171717]">
                <div className="flex items-start space-x-2.5">
                  <Truck className="w-4 h-4 text-[#b58d4b] flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] text-[#635e59]">
                    Complimentary priority courier across all Indian metros
                  </span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#b58d4b] flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] text-[#635e59]">
                    Certificate of authenticity with each numbered flacon
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#f4efe8] border border-black/[0.06] space-y-2">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#716b64] block font-semibold">
                Privacy Assurance
              </span>
              <p className="text-[11px] text-[#716b64] leading-relaxed">
                Your dossier details are never monetized or exposed. Data is used exclusively
                for order fulfillment and confidential dispatch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center text-[#b58d4b] text-xs uppercase tracking-widest">
          Loading Patron Sanctum...
        </div>
      }
    >
      <ProfileContent />
    </Suspense>
  );
}
