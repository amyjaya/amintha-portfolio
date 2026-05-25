import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import { Button } from '../components/Button';
import { smoothScrollTo } from '../lib/utils';
import { profile } from '../content/profile';

export function Hero() {
  const handleCTAClick = (href: string) => {
    if (href.startsWith('#')) {
      smoothScrollTo(href.substring(1));
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f8fafc]
        dark:bg-[#020617]
        flex
        items-center
        justify-center
      "
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-violet-500/10 to-transparent" />

        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="
            absolute
            top-20
            left-10
            w-[400px]
            h-[400px]
            bg-violet-500/20
            rounded-full
            blur-3xl
          "
        />

        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="
            absolute
            bottom-10
            right-0
            w-[450px]
            h-[450px]
            bg-cyan-400/20
            rounded-full
            blur-3xl
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            dark:opacity-[0.06]
          "
          style={{
            backgroundImage:
              'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          {/* Main Title */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-black
              tracking-tight
              leading-[0.95]
              max-w-6xl
              mx-auto
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-slate-900
                via-violet-700
                to-cyan-500

                dark:from-white
                dark:via-violet-300
                dark:to-cyan-300

                bg-clip-text
                text-transparent
              "
            >
              {profile.hero.headline}
            </span>
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="
              mt-8
              text-lg
              md:text-2xl
              leading-relaxed
              text-slate-600
              dark:text-slate-400
              max-w-3xl
              mx-auto
              font-medium
            "
          >
            {profile.hero.subheadline}
          </motion.p>

          {/* Profile Card */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="
              mt-12
              inline-flex
              flex-col
              items-center
              gap-3
              px-10
              py-8
              rounded-[32px]
              bg-white/70
              dark:bg-white/5
              backdrop-blur-2xl
              border
              border-white/40
              dark:border-white/10
              shadow-2xl
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {profile.name}
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
              {profile.role}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <div className="w-2 h-2 bg-violet-500 rounded-full" />

              <span className="text-sm text-slate-500 dark:text-slate-500">
                {profile.location}
              </span>
            </div>
          </motion.div>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-5
              mt-14
            "
          >
            <Button
              size="lg"
              onClick={() =>
                handleCTAClick(profile.hero.ctaPrimary.href)
              }
              className="
                px-10
                h-14
                rounded-2xl
                text-base
                font-semibold
                shadow-2xl
                hover:scale-105
                transition-all
                bg-gradient-to-r
                from-violet-600
                to-indigo-600
                hover:from-violet-700
                hover:to-indigo-700
                border-0
              "
            >
              {profile.hero.ctaPrimary.label}
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                handleCTAClick(profile.hero.ctaSecondary.href)
              }
              className="
                px-10
                h-14
                rounded-2xl
                text-base
                font-semibold
                border
                border-slate-300
                dark:border-white/10
                bg-white/70
                dark:bg-white/5
                backdrop-blur-xl
                hover:scale-105
                transition-all
              "
            >
              {profile.hero.ctaSecondary.label}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Icon */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="
            absolute
            bottom-10
            left-1/2
            -translate-x-1/2
          "
        >
          <motion.button
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            onClick={() => smoothScrollTo('about')}
            className="
              p-4
              rounded-full
              bg-white/70
              dark:bg-white/5
              backdrop-blur-xl
              border
              border-white/30
              dark:border-white/10
              shadow-xl
              hover:scale-110
              transition-all
            "
          >
            <ArrowDown className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}