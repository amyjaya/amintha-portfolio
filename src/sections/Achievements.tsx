import React from 'react';
import { motion } from 'framer-motion';

import {
  Award,
  Star,
  Trophy,
  Zap
} from 'lucide-react';

import { SectionHeader } from '../components/SectionHeader';
import { Card, CardContent } from '../components/Card';

import { profile } from '../content/profile';

const achievementIcons = [
  Award,
  Trophy,
  Star,
  Zap
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="
        relative
        py-32
        overflow-hidden

        bg-gradient-to-b
        from-slate-50
        to-white

        dark:from-[#111827]
        dark:to-[#0B0F19]
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          top-20
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
          title="Achievements"
          subtitle="Recognition and milestones throughout my journey"
        />

        <div className="grid md:grid-cols-2 gap-8">

          {profile.achievements.map(
            (achievement, index) => {

              const Icon =
                achievementIcons[
                  index % achievementIcons.length
                ];

              return (
                <motion.div
                  key={achievement.role}
                  initial={{
                    opacity: 0,
                    y: 30
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12
                  }}
                  whileHover={{ y: -8 }}
                >

                  <Card
                    className="
                      h-full

                      border
                      border-slate-200/70
                      dark:border-white/10

                      bg-white/70
                      dark:bg-white/[0.03]

                      backdrop-blur-2xl

                      transition-all
                      duration-500

                      hover:border-violet-300
                      dark:hover:border-violet-500/30

                      hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]
                    "
                  >

                    <CardContent className="p-8">

                      <div className="flex items-start gap-5">

                        {/* Icon */}
                        <div className="relative flex-shrink-0">

                          {/* Glow */}
                          <div
                            className="
                              absolute
                              inset-0

                              bg-violet-500/20
                              blur-xl
                              rounded-2xl
                            "
                          />

                          <div
                            className="
                              relative
                              w-14
                              h-14

                              rounded-2xl

                              bg-gradient-to-br
                              from-violet-500
                              to-indigo-500

                              flex
                              items-center
                              justify-center

                              shadow-[0_10px_30px_rgba(124,58,237,0.25)]
                            "
                          >

                            <Icon
                              className="
                                w-7
                                h-7
                                text-white
                              "
                            />

                          </div>

                        </div>

                        {/* Content */}
                        <div className="flex-grow">

                          <h3
                            className="
                              text-2xl
                              font-semibold
                              tracking-tight
                              mb-2

                              text-slate-900
                              dark:text-white
                            "
                          >
                            {achievement.role}
                          </h3>

                          <p
                            className="
                              text-sm
                              font-medium
                              mb-3

                              text-violet-600
                              dark:text-violet-400
                            "
                          >
                            {achievement.org}
                          </p>

                          <p
                            className="
                              leading-relaxed

                              text-slate-600
                              dark:text-slate-300
                            "
                          >
                            {achievement.recognition}
                          </p>

                        </div>

                      </div>

                    </CardContent>

                  </Card>

                </motion.div>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
}