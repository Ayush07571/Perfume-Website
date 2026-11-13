'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  curtainColor?: string;
  delay?: number;
  duration?: number;
  direction?: 'bottom-to-top' | 'left-to-right';
}

export default function ImageReveal({
  children,
  className = '',
  curtainColor = '#171717',
  delay = 0.1,
  duration = 1.1,
  direction = 'bottom-to-top',
}: ImageRevealProps) {
  const isVertical = direction === 'bottom-to-top';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Content image wrapper that gently zooms out */}
      <motion.div
        initial={{ scale: 1.15, filter: 'blur(3px)' }}
        whileInView={{ scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration: duration * 1.2,
          delay: delay + 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>

      {/* Shutter curtain overlay */}
      <motion.div
        initial={isVertical ? { scaleY: 1 } : { scaleX: 1 }}
        whileInView={isVertical ? { scaleY: 0 } : { scaleX: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration,
          delay,
          ease: [0.76, 0, 0.24, 1], // cinematic wipe ease
        }}
        style={{
          backgroundColor: curtainColor,
          transformOrigin: isVertical ? 'top' : 'right',
        }}
        className="absolute inset-0 z-20 pointer-events-none"
      />
    </div>
  );
}
