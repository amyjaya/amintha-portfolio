import React from 'react';
import { cn } from '../lib/utils';

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        `
        rounded-3xl
        border
        border-slate-200/80
        bg-white/80
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(15,23,42,0.08)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]

        dark:border-white/10
        dark:bg-white/[0.03]
        dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        dark:hover:bg-white/[0.05]
        `,
        className
      )}
      {...props}
    />
  )
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col space-y-2 p-7',
        className
      )}
      {...props}
    />
  )
);

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      `
      text-xl
      font-semibold
      leading-tight
      tracking-tight
      text-slate-900

      dark:text-white
      `,
      className
    )}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      `
      text-sm
      leading-relaxed
      text-slate-500

      dark:text-slate-400
      `,
      className
    )}
    {...props}
  />
));

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'p-7 pt-0',
        className
      )}
      {...props}
    />
  )
);

CardContent.displayName = 'CardContent';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
};