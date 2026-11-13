'use client';

import { useRef } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps extends Omit<ImageProps, 'className'> {
  containerClassName?: string;
  imageClassName?: string;
  parallaxSpeed?: number; // e.g. 0.2 for gentle, 0.4 for dramatic
}

export default function ParallaxImage({
  containerClassName = '',
  imageClassName = '',
  parallaxSpeed = 0.18,
  alt,
  ...props
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Calculate translation range based on parallax speed
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${parallaxSpeed * 100}%`, `${parallaxSpeed * 100}%`]
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.06, 1.12]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <motion.div
        style={{ y, scale }}
        className="relative w-full h-[125%] -top-[12.5%]"
      >
        <Image
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover ${imageClassName}`}
          {...props}
        />
      </motion.div>
    </div>
  );
}
