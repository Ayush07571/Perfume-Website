'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { TESTIMONIALS } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-28 md:py-36 bg-[#faf8f5] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#b58d4b] font-semibold">
            Patron Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] mt-2">
            The Scent Impression
          </h2>
        </ScrollReveal>

        <div className="relative p-8 md:p-14 bg-white border border-black/[0.08] shadow-xl">
          <Quote className="w-12 h-12 text-[#b58d4b]/20 mb-6" />

          {/* Stars */}
          <div className="flex items-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#b58d4b] text-[#b58d4b]" />
            ))}
          </div>

          {/* Quote Body */}
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#171717] leading-relaxed italic mb-8 font-light min-h-[140px] flex items-center">
            "{current.quote}"
          </p>

          {/* Author Details & Controls */}
          <div className="pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-base text-[#171717] font-semibold">
                {current.name}
              </h4>
              <p className="text-xs text-[#716b64] tracking-wider mt-0.5">
                {current.location} · Verified Patron
              </p>
              <p className="text-[11px] text-[#b58d4b] tracking-widest uppercase mt-1 font-medium">
                Wearing: {current.product}
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-black/15 hover:border-[#b58d4b] hover:text-[#b58d4b] text-[#171717] flex items-center justify-center transition-colors cursor-pointer bg-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#716b64] font-mono tracking-widest px-1">
                {currentIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-black/15 hover:border-[#b58d4b] hover:text-[#b58d4b] text-[#171717] flex items-center justify-center transition-colors cursor-pointer bg-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
