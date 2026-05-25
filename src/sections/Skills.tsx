import { motion } from 'framer-motion';

import { SectionHeader } from '../components/SectionHeader';

import { Tag } from '../components/Tag';

import {
  Card,
  CardContent
} from '../components/Card';

import { profile } from '../content/profile';

export function Skills() {

  const skillGroups = [
    {
      title: 'Primary Skills',
      skills: profile.skills.primary,
      variant: 'primary' as const,
      proficiency: 4
    },

    {
      title: 'Libraries & Frameworks',
      skills: profile.skills.secondary,
      variant: 'secondary' as const,
      proficiency: 3
    },

    {
      title: 'Tools & Platforms',
      skills: profile.skills.tools,
      variant: 'accent' as const,
      proficiency: 4
    }
  ];

  const renderProficiencyDots = (
    level: number
  ) => {
    return (
      <div className="flex gap-2">

        {[1, 2, 3, 4, 5].map(
          (dot) => (

            <div
              key={dot}

              className={`
                w-2.5
                h-2.5

                rounded-full

                transition-all
                duration-300

                ${
                  dot <= level
                    ? `
                      bg-gradient-to-r
                      from-violet-500
                      to-indigo-500

                      shadow-[0_0_10px_rgba(139,92,246,0.8)]
                    `
                    : `
                      bg-slate-300
                      dark:bg-slate-700
                    `
                }
              `}
            />
          )
        )}

      </div>
    );
  };

  return (
    <section
      id="skills"

      className="
        relative
        overflow-hidden

        py-32

        bg-gradient-to-b
        from-slate-50
        to-white

        dark:from-[#020617]
        dark:to-[#0F172A]
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[900px]
          h-[900px]

          bg-violet-500/10
          blur-[180px]
          rounded-full

          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionHeader
          title="Skills & Technologies"
          subtitle="My technical stack, tools, and continuous learning journey"
        />

        {/* Skills Grid */}
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3

            gap-8
          "
        >

          {skillGroups.map(
            (
              group,
              groupIndex
            ) => (

              <motion.div
                key={group.title}

                initial={{
                  opacity: 0,
                  y: 30
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  duration: 0.6,
                  delay: groupIndex * 0.15
                }}

                whileHover={{
                  y: -10
                }}
              >

                <Card
                  className="
                    relative
                    overflow-hidden

                    h-full

                    border
                    border-white/10

                    bg-white/70
                    dark:bg-white/[0.03]

                    backdrop-blur-2xl

                    shadow-[0_10px_50px_rgba(0,0,0,0.08)]

                    hover:border-violet-500/30
                    hover:shadow-[0_20px_80px_rgba(139,92,246,0.15)]

                    transition-all
                    duration-500
                  "
                >

                  {/* Glow */}
                  <div
                    className="
                      absolute
                      top-0
                      right-0

                      w-40
                      h-40

                      bg-violet-500/10
                      blur-3xl
                      rounded-full
                    "
                  />

                  <CardContent
                    className="
                      relative
                      p-8
                    "
                  >

                    {/* Header */}
                    <div
                      className="
                        flex
                        items-center
                        justify-between

                        mb-8
                      "
                    >

                      <h3
                        className="
                          text-2xl
                          font-bold

                          tracking-tight

                          text-slate-900
                          dark:text-white
                        "
                      >
                        {group.title}
                      </h3>

                      {renderProficiencyDots(
                        group.proficiency
                      )}

                    </div>

                    {/* Tags */}
                    <div
                      className="
                        flex
                        flex-wrap
                        gap-3
                      "
                    >

                      {group.skills.map(
                        (
                          skill,
                          index
                        ) => (

                          <motion.div
                            key={skill.name}

                            initial={{
                              opacity: 0,
                              scale: 0.8
                            }}

                            whileInView={{
                              opacity: 1,
                              scale: 1
                            }}

                            viewport={{
                              once: true
                            }}

                            transition={{
                              duration: 0.3,

                              delay:
                                groupIndex * 0.1 +
                                index * 0.04
                            }}
                          >

                            <Tag
                              variant={group.variant}

                              className="
                                px-4
                                py-2

                                rounded-full

                                border
                                border-white/10

                                backdrop-blur-xl

                                hover:scale-105

                                transition-all
                                duration-300
                              "
                            >
                              {skill.name}
                            </Tag>

                          </motion.div>
                        )
                      )}

                    </div>

                  </CardContent>

                </Card>

              </motion.div>
            )
          )}

        </div>

      </div>
    </section>
  );
}