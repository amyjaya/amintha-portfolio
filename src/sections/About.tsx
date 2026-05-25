import React from 'react';
import { motion } from 'framer-motion';

import { SectionHeader } from '../components/SectionHeader';
import { Tag } from '../components/Tag';

import { profile } from '../content/profile';

export function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-32
        overflow-hidden

        bg-gradient-to-b
        from-white
        to-slate-50

        dark:from-[#0B0F19]
        dark:to-[#111827]
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[700px]
          h-[700px]

          bg-violet-500/10
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionHeader
          title="About Me"
          subtitle="Passionate about creating exceptional digital experiences"
        />

        <div
          className="
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >

            {/* Glow */}
            <div
              className="
                absolute
                -inset-6

                bg-gradient-to-r
                from-violet-500/20
                to-indigo-500/20

                blur-3xl
                rounded-[40px]
              "
            />

            {/* Card */}
            <div
              className="
                relative
                rounded-[32px]
                overflow-hidden

                border
                border-white/20

                bg-white/40
                dark:bg-white/[0.03]

                backdrop-blur-2xl

                shadow-[0_20px_60px_rgba(15,23,42,0.12)]
              "
            >

              <img
                src={profile.about.portrait}
                alt={profile.name}
                className="
                  w-full
                  h-full
                  object-cover
                  scale-[1.02]
                "
                loading="lazy"
              />

            </div>

          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15
            }}
            className="
              order-1
              lg:order-2
              space-y-10
            "
          >

            {/* Text */}
            <div className="space-y-6">

              <p
                className="
                  text-lg
                  leading-relaxed

                  text-slate-600
                  dark:text-slate-300
                "
              >
                {profile.about.text}
              </p>

            </div>

            {/* Highlights */}
            <div className="space-y-5">

              <h3
                className="
                  text-3xl
                  font-bold
                  tracking-tight

                  text-slate-900
                  dark:text-white
                "
              >
                Current Focus
              </h3>

              <div className="flex flex-wrap gap-3">

                {profile.about.highlights.map(
                  (highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{
                        opacity: 0,
                        scale: 0.8
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.08
                      }}
                    >
                      <Tag
                        variant="primary"
                        size="md"
                      >
                        {highlight}
                      </Tag>
                    </motion.div>
                  )
                )}

              </div>

            </div>

            {/* Stats */}
            <div
              className="
                grid
                grid-cols-2
                gap-6
                pt-4
              "
            >

              {/* Card 1 */}
              <div
                className="
                  rounded-3xl
                  p-8

                  border
                  border-slate-200/70
                  dark:border-white/10

                  bg-white/70
                  dark:bg-white/[0.03]

                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(15,23,42,0.08)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(124,58,237,0.10)]
                "
              >

                <div
                  className="
                    text-5xl
                    font-bold
                    mb-3

                    bg-gradient-to-r
                    from-violet-600
                    to-indigo-500

                    bg-clip-text
                    text-transparent
                  "
                >
                  3+
                </div>

                <div
                  className="
                    text-sm
                    font-medium
                    uppercase
                    tracking-wide

                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Years Learning
                </div>

              </div>

              {/* Card 2 */}
              <div
                className="
                  rounded-3xl
                  p-8

                  border
                  border-slate-200/70
                  dark:border-white/10

                  bg-white/70
                  dark:bg-white/[0.03]

                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(15,23,42,0.08)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(124,58,237,0.10)]
                "
              >

                <div
                  className="
                    text-5xl
                    font-bold
                    mb-3

                    bg-gradient-to-r
                    from-violet-600
                    to-indigo-500

                    bg-clip-text
                    text-transparent
                  "
                >
                  {profile.projects.length}+
                </div>

                <div
                  className="
                    text-sm
                    font-medium
                    uppercase
                    tracking-wide

                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Projects Built
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}