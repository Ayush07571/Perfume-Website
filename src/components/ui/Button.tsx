import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary:
        'bg-[#171717] text-[#faf8f5] hover:bg-[#2c2a29] btn-shimmer font-semibold shadow-md',
      gold:
        'bg-gradient-to-r from-[#9e7838] via-[#b58d4b] to-[#e5cb9b] text-[#080808] hover:opacity-95 btn-shimmer font-bold shadow-md',
      outline:
        'border border-[#171717]/30 text-[#171717] bg-transparent hover:bg-[#171717] hover:text-[#faf8f5]',
      ghost:
        'text-[#171717]/80 hover:text-[#b58d4b] bg-transparent hover:bg-black/[0.03]',
      dark:
        'bg-[#0c0c0c] border border-white/10 text-[#faf8f5] hover:border-[#b58d4b]/50 hover:bg-[#171717]',
    };

    const sizes = {
      sm: 'text-[10px] px-4 py-2.5',
      md: 'text-xs px-6 py-3.5',
      lg: 'text-xs px-8 py-4.5',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
