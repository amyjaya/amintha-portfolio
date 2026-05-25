import React from 'react';
import { motion } from 'framer-motion';

import {
  Award,
  ExternalLink
} from 'lucide-react';

import { SectionHeader } from '../components/SectionHeader';
import {
  Card,
  CardContent
} from '../components/Card';

const certifications = [
  {
    title: 'Microsoft Build 2026',
    issuer: 'Microsoft Learn',
    description:
      'Verified learning achievements and technical progress through Microsoft Learn.',
    link:
      'https://learn.microsoft.com/en-gb/users/aminthajayasooriya-7651/'
  },

  {
    title: 'Credly Profile',
    issuer: 'Credly',
    description:
      'Digital badges and certifications showcasing technical skills and continuous learning.',
    link:
      'https://www.credly.com/users/amintha-jayasooriya'
  }
];

export function Certifications() {
  return (
    <section
      id="certifications"
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
          top-10
          left-1/2
          -translate-x-1/2

          w-[700px]
          h-[700px]

          bg-indigo-500/10
          blur-[140px]
          rounded-full

          pointer-events-none
        "
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionHeader
          title="Certifications"
          subtitle="Learning achievements and professional milestones"
        />

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert, index) => (

            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"

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

              className="block group"
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

                  overflow-hidden
                  relative
                "
              >

                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500

                    bg-gradient-to-br
                    from-violet-500/5
                    to-indigo-500/5
                  "
                />

                <CardContent className="relative p-8">

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

                        <Award
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

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          mb-2
                        "
                      >

                        <h3
                          className="
                            text-2xl
                            font-semibold
                            tracking-tight

                            text-slate-900
                            dark:text-white
                          "
                        >
                          {cert.title}
                        </h3>

                        <ExternalLink
                          className="
                            w-5
                            h-5

                            text-slate-400

                            group-hover:text-violet-500

                            transition-colors
                            duration-300
                          "
                        />

                      </div>

                      <p
                        className="
                          text-sm
                          font-medium
                          mb-4

                          text-violet-600
                          dark:text-violet-400
                        "
                      >
                        {cert.issuer}
                      </p>

                      <p
                        className="
                          leading-relaxed

                          text-slate-600
                          dark:text-slate-300
                        "
                      >
                        {cert.description}
                      </p>

                    </div>

                  </div>

                </CardContent>

              </Card>

            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}