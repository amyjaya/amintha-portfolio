import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className = ''
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-24 ${className}`}
    >

      {/* Title */}
      <h2
        className="
          text-5xl
          md:text-6xl
          lg:text-7xl
          font-bold
          tracking-tight
          leading-tight
          mb-8
        "
      >
        <span
          className="
            bg-gradient-to-r
            from-slate-900
            via-violet-700
            to-indigo-600

            dark:from-white
            dark:via-violet-300
            dark:to-indigo-400

            bg-clip-text
            text-transparent
          "
        >
          {title}
        </span>
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="
            max-w-3xl
            mx-auto
            text-lg
            md:text-xl
            leading-relaxed
            text-slate-600
            dark:text-slate-400
            font-normal
          "
        >
          {subtitle}
        </p>
      )}

    </motion.div>
  );
}