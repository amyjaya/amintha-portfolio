import React from 'react';

import { motion } from 'framer-motion';

import {
  ExternalLink,
  Users,
  Calendar,
  Award,
  Target
} from 'lucide-react';

import { SectionHeader } from '../components/SectionHeader';

import {
  Card,
  CardContent
} from '../components/Card';

import { Tag } from '../components/Tag';

import { Button } from '../components/Button';

import { profile } from '../content/profile';

export function LeadershipProjects() {
  return (
    <section
      id="leadership"
      className="
        relative
        overflow-hidden
        py-32

        bg-gradient-to-b
        from-slate-50
        to-white

        dark:from-[#0F172A]
        dark:to-[#020617]
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
          blur-[160px]
          rounded-full

          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionHeader
          title="Leadership Projects"
          subtitle="Leading teams, events, and impactful initiatives"
        />

        <div className="grid lg:grid-cols-2 gap-10">

          {profile.leadershipProjects.map(
            (project, index) => (

              <motion.div
                key={project.title}

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
                  delay: index * 0.15
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

                  {/* Gradient Glow */}
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

                  <CardContent className="relative p-8 space-y-8">

                    {/* Top */}
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-6
                      "
                    >

                      <div className="flex-1">

                        <h3
                          className="
                            text-3xl
                            font-bold
                            tracking-tight

                            text-slate-900
                            dark:text-white

                            mb-3
                          "
                        >
                          {project.title}
                        </h3>

                        <p
                          className="
                            text-lg
                            leading-relaxed

                            text-slate-600
                            dark:text-slate-400

                            mb-5
                          "
                        >
                          {project.tagline}
                        </p>

                        <div
                          className="
                            flex
                            flex-wrap
                            gap-4

                            text-sm
                            text-slate-500
                            dark:text-slate-400
                          "
                        >

                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-violet-500" />
                            <span>{project.role}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-violet-500" />
                            <span>{project.period}</span>
                          </div>

                        </div>

                      </div>

                      {/* Icon */}
                      <div
                        className="
                          w-16
                          h-16

                          rounded-2xl

                          bg-gradient-to-br
                          from-violet-500
                          to-indigo-500

                          flex
                          items-center
                          justify-center

                          shadow-lg
                          shadow-violet-500/30
                        "
                      >
                        <Award className="w-8 h-8 text-white" />
                      </div>

                    </div>

                    {/* Organization */}
                    <div
                      className="
                        inline-flex
                        items-center

                        px-4
                        py-2

                        rounded-full

                        bg-violet-500/10
                        border
                        border-violet-500/20

                        text-violet-700
                        dark:text-violet-300

                        text-sm
                        font-medium
                      "
                    >
                      {project.organization}
                    </div>

                    {/* Description */}
                    <p
                      className="
                        leading-relaxed
                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      {project.description}
                    </p>

                    {/* Responsibilities */}
                    <div>

                      <h4
                        className="
                          flex
                          items-center
                          gap-2

                          text-lg
                          font-semibold

                          text-slate-900
                          dark:text-white

                          mb-4
                        "
                      >
                        <Target className="w-5 h-5 text-violet-500" />
                        Responsibilities
                      </h4>

                      <ul className="space-y-3">

                        {project.responsibilities.map(
                          (
                            responsibility,
                            idx
                          ) => (

                            <li
                              key={idx}

                              className="
                                flex
                                items-start
                                gap-3

                                text-slate-600
                                dark:text-slate-400
                              "
                            >

                              <div
                                className="
                                  w-2
                                  h-2

                                  rounded-full

                                  bg-violet-500

                                  mt-2
                                  flex-shrink-0
                                "
                              />

                              <span>
                                {responsibility}
                              </span>

                            </li>
                          )
                        )}

                      </ul>

                    </div>

                    {/* Impact */}
                    <div>

                      <h4
                        className="
                          flex
                          items-center
                          gap-2

                          text-lg
                          font-semibold

                          text-slate-900
                          dark:text-white

                          mb-4
                        "
                      >
                        <Award className="w-5 h-5 text-indigo-500" />
                        Impact
                      </h4>

                      <ul className="space-y-3">

                        {project.impact.map(
                          (
                            impact,
                            idx
                          ) => (

                            <li
                              key={idx}

                              className="
                                flex
                                items-start
                                gap-3

                                text-slate-600
                                dark:text-slate-400
                              "
                            >

                              <div
                                className="
                                  w-2
                                  h-2

                                  rounded-full

                                  bg-indigo-500

                                  mt-2
                                  flex-shrink-0
                                "
                              />

                              <span>
                                {impact}
                              </span>

                            </li>
                          )
                        )}

                      </ul>

                    </div>

                    {/* Skills */}
                    <div>

                      <h4
                        className="
                          text-lg
                          font-semibold

                          text-slate-900
                          dark:text-white

                          mb-4
                        "
                      >
                        Skills
                      </h4>

                      <div className="flex flex-wrap gap-3">

                        {project.skills.map(
                          (skill, idx) => (

                            <Tag
                              key={idx}
                              variant="accent"
                              size="sm"

                              className="
                                !bg-violet-500/10
                                !text-violet-700

                                dark:!text-violet-300

                                border
                                border-violet-500/20

                                px-4
                                py-2
                              "
                            >
                              {skill}
                            </Tag>
                          )
                        )}

                      </div>

                    </div>

                    {/* Button */}
                    {project.links.live &&
                      project.links.live !== "#" && (

                      <div className="pt-4">

                        <Button
                          size="sm"

                          onClick={() =>
                            window.open(
                              project.links.live,
                              '_blank'
                            )
                          }

                          className="
                            rounded-full

                            bg-gradient-to-r
                            from-violet-600
                            to-indigo-600

                            hover:from-violet-500
                            hover:to-indigo-500

                            shadow-lg
                            shadow-violet-500/20
                          "
                        >

                          <ExternalLink className="w-4 h-4 mr-2" />

                          View Event

                        </Button>

                      </div>
                    )}

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