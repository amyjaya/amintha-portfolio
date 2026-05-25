import React from 'react';

import {
  Moon,
  Sun
} from 'lucide-react';

import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(
      theme === 'dark'
        ? 'light'
        : 'dark'
    );
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={
        theme === 'dark'
          ? 'Switch to light mode'
          : 'Switch to dark mode'
      }
      className="
        relative
        flex
        items-center
        justify-center

        w-12
        h-12

        rounded-2xl

        bg-white/70
        dark:bg-white/[0.05]

        backdrop-blur-xl

        border
        border-slate-200/70
        dark:border-white/10

        text-slate-700
        dark:text-slate-300

        hover:text-violet-600
        dark:hover:text-violet-400

        hover:border-violet-300
        dark:hover:border-violet-500/30

        hover:shadow-[0_10px_30px_rgba(124,58,237,0.18)]

        transition-all
        duration-300

        hover:-translate-y-1
      "
    >

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-2xl
          opacity-0
          hover:opacity-100
          transition-opacity
          duration-300

          bg-gradient-to-br
          from-violet-500/10
          to-indigo-500/10
        "
      />

      {/* Sun */}
      <Sun
        className="
          absolute
          h-5
          w-5

          rotate-0
          scale-100

          transition-all
          duration-500

          dark:-rotate-90
          dark:scale-0
        "
      />

      {/* Moon */}
      <Moon
        className="
          absolute
          h-5
          w-5

          rotate-90
          scale-0

          transition-all
          duration-500

          dark:rotate-0
          dark:scale-100
        "
      />

    </button>
  );
}