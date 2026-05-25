import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  `
  inline-flex
  items-center
  justify-center
  whitespace-nowrap
  rounded-2xl
  font-medium
  transition-all
  duration-300
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-violet-500
  focus-visible:ring-offset-2
  disabled:pointer-events-none
  disabled:opacity-50
  active:scale-[0.98]
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-violet-600
          text-white
          shadow-lg
          shadow-violet-500/20
          hover:bg-violet-700
          hover:shadow-violet-500/30
          hover:-translate-y-0.5
        `,

        secondary: `
          bg-white/80
          backdrop-blur-xl
          text-slate-900
          border
          border-slate-200
          hover:bg-white
          hover:shadow-lg

          dark:bg-white/5
          dark:text-white
          dark:border-white/10
          dark:hover:bg-white/10
        `,

        ghost: `
          text-slate-700
          hover:bg-slate-100

          dark:text-slate-300
          dark:hover:bg-white/5
        `,

        link: `
          text-violet-600
          underline-offset-4
          hover:underline

          dark:text-violet-400
        `
      },

      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-9 px-4 py-2 text-sm',
        lg: 'h-14 px-8 py-4 text-lg',
        icon: 'h-10 w-10'
      }
    },

    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };