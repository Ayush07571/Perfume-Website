'use client';

import { ScentNotes } from '@/data/products';
import { Wind, Heart, Anchor } from 'lucide-react';

interface ScentPyramidProps {
  notes: ScentNotes;
}

export default function ScentPyramid({ notes }: ScentPyramidProps) {
  const tiers = [
    {
      level: 'Top Notes',
      subtitle: 'The Opening Impression · 15–30 Minutes',
      icon: Wind,
      items: notes.top,
      color: 'border-[#b58d4b]/30 bg-white',
      accent: 'text-[#9e7838]',
    },
    {
      level: 'Heart Notes',
      subtitle: 'The Olfactory Soul · 2–6 Hours',
      icon: Heart,
      items: notes.heart,
      color: 'border-[#b76e79]/30 bg-white',
      accent: 'text-[#b76e79]',
    },
    {
      level: 'Base Notes',
      subtitle: 'The Lingering Memory · 12+ Hours',
      icon: Anchor,
      items: notes.base,
      color: 'border-[#7d5e28]/30 bg-white',
      accent: 'text-[#7d5e28]',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="text-center md:text-left mb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold">
          The Olfactory Architecture
        </span>
        <h3 className="font-serif text-2xl text-[#171717] mt-1">Scent Pyramid</h3>
      </div>

      <div className="space-y-3">
        {tiers.map((tier, idx) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.level}
              className={`p-5 rounded-none border ${tier.color} transition-all duration-300 hover:border-[#b58d4b]/60 shadow-xs`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-black/[0.06] mb-3">
                <div className="flex items-center space-x-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#faf8f5] border border-black/5 flex items-center justify-center text-[#b58d4b]">
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#171717]">
                      {tier.level}
                    </h4>
                    <p className="text-[10px] text-[#716b64] tracking-wider">
                      {tier.subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#b58d4b] font-semibold mt-1 sm:mt-0">
                  Tier 0{idx + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {tier.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 bg-[#faf8f5] border border-black/10 text-[#171717] rounded-none hover:border-[#b58d4b]/50 transition-colors font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
