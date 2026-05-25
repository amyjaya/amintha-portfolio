import React from 'react';
import { cn } from '../lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md';
  className?: string;
}

export function Tag({
  children,
  variant = 'secondary',
  size = 'md',
  className
}: TagProps) {

  const baseClasses = `
    inline-flex
    items-center
    rounded-full
    font-medium
    transition-all
    duration-300
    border
    backdrop-blur-xl
    tracking-wide
  `;

  const variantClasses = {

    primary: `
      bg-violet-100/80
      text-violet-700
      border-violet-200

      dark:bg-violet-500/10
      dark:text-violet-300
      dark:border-violet-500/20

      hover:bg-violet-200
      dark:hover:bg-violet-500/20
    `,

    secondary: `
      bg-slate-100/80
      text-slate-700
      border-slate-200

      dark:bg-white/[0.04]
      dark:text-slate-300
      dark:border-white/10

      hover:bg-slate-200
      dark:hover:bg-white/[0.08]
    `,

    accent: `
      bg-indigo-100/80
      text-indigo-700
      border-indigo-200

      dark:bg-indigo-500/10
      dark:text-indigo-300
      dark:border-indigo-500/20

      hover:bg-indigo-200
      dark:hover:bg-indigo-500/20
    `
  };

  const sizeClasses = {
    sm: `
      px-3
      py-1
      text-xs
    `,

    md: `
      px-4
      py-1.5
      text-sm
    `
  };

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}