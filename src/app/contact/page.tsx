'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Phone, Mail, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bespoke Olfactory Consultation',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-36 min-h-screen bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#b58d4b] font-semibold">
              Personal Concierge
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717] mt-3">
              Private Boutique & Inquiries
            </h1>
            <p className="text-xs text-[#635e59] mt-3 tracking-wider leading-relaxed font-light">
              Whether reserving a private consultation at our Saint-Honoré atelier or
              seeking guidance from our fragrance curatorial team in India.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form on Light Theme */}
          <div className="lg:col-span-7 bg-white border border-black/[0.08] p-8 md:p-12 shadow-xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#b58d4b] mx-auto" />
                <h3 className="font-serif text-2xl text-[#171717]">
                  Inquiry Received with Discretion
                </h3>
                <p className="text-xs text-[#635e59] max-w-md mx-auto leading-relaxed">
                  A Maison Noir Senior Concierge will contact you within four business
                  hours to arrange your bespoke request.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-widest text-[#b58d4b] underline font-semibold cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#171717] mb-2 font-normal">
                    Request Private Consultation
                  </h3>
                  <p className="text-xs text-[#716b64]">
                    Complete the dossier below to connect directly with our head of private clients.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Lorde Harrington"
                      className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] placeholder:text-[#918b84] focus:outline-none focus:border-[#b58d4b]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                      Electronic Mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] placeholder:text-[#918b84] focus:outline-none focus:border-[#b58d4b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                      Contact Number (India or International)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 00000"
                      className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] placeholder:text-[#918b84] focus:outline-none focus:border-[#b58d4b]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                      Desired Concierge Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#b58d4b] cursor-pointer"
                    >
                      <option>Bespoke Olfactory Consultation</option>
                      <option>Vault Flacon Reservation</option>
                      <option>Corporate & Private Gifting</option>
                      <option>Atelier Visit · Paris</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#716b64] font-medium">
                    Particular Notes or Preferences
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the scent profiles you gravitate towards or specific questions regarding our formulations..."
                    className="w-full bg-[#faf8f5] border border-black/10 px-4 py-3 text-xs text-[#171717] placeholder:text-[#918b84] focus:outline-none focus:border-[#b58d4b]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#171717] text-[#faf8f5] font-semibold text-xs uppercase tracking-[0.25em] btn-shimmer hover:bg-[#2c2a29] transition-all cursor-pointer shadow-lg"
                >
                  Transmit Inquiry to Concierge
                </button>
              </form>
            )}
          </div>

          {/* Salons & Details - DARK CONTRAST CARD */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#0e0e0e] text-[#faf8f5] border border-white/10 space-y-6 shadow-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#e5cb9b] font-semibold flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Salons & Flagships</span>
              </span>

              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="font-serif text-lg text-[#faf8f5]">Paris Flagship Atelier</h4>
                  <p className="text-[#a8a39d] mt-1">28 Rue du Faubourg Saint-Honoré, 75008 Paris, France</p>
                  <p className="text-[11px] text-[#e5cb9b] mt-0.5">By Private Appointment Only</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-serif text-lg text-[#faf8f5]">India Private Client Salon</h4>
                  <p className="text-[#a8a39d] mt-1">The Heritage Suite, Altamount Road, Cumballa Hill, Mumbai 400026</p>
                  <p className="text-[11px] text-[#e5cb9b] mt-0.5">Discreet Tastings · Tuesday to Sunday</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-black/[0.08] space-y-4 text-xs text-[#635e59] shadow-xs">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#b58d4b]" />
                <span>India Direct: +91 22 6900 8800</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#b58d4b]" />
                <span>Private Concierge: concierge@maisonnoir.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#b58d4b]" />
                <span>Hours: 10:00 – 20:00 IST (Monday through Saturday)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
