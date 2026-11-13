'use client';

import { ReactNode } from 'react';

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
}: ImageRevealProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
