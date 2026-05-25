import React from 'react';
import { motion } from 'framer-motion';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from './Card';

interface TimelineItemProps {
  org: string;
  title: string;
  period: string;
  bullets: string[];
  isLast?: boolean;
  index: number;
}

export function TimelineItem({
  org,
  title,
  period,
  bullets,
  isLast = false,
  index
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15
      }}
      className="relative flex gap-6"
    >

      {/* Timeline */}
      <div className="flex flex-col items-center">

        {/* Dot */}
        <div
          className="
            relative
            w-5
            h-5
            rounded-full

            bg-gradient-to-br
            from-violet-500
            to-indigo-500

            border-4
            border-white
            dark:border-[#0B0F19]

            shadow-[0_0_25px_rgba(124,58,237,0.45)]

            z-10
          "
        >

          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-violet-500/40
              blur-md
              scale-150
            "
          />

        </div>

        {/* Line */}
        {!isLast && (
          <div
            className="
              w-[2px]
              flex-grow
              mt-3

              bg-gradient-to-b
              from-violet-500
              via-violet-300
              to-transparent

              dark:from-violet-500
              dark:via-violet-800
            "
          />
        )}

      </div>

      {/* Content */}
      <div className="flex-grow pb-10">

        <Card
          className="
            transition-all
            duration-500

            hover:-translate-y-1

            hover:border-violet-300
            dark:hover:border-violet-500/30

            hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)]
          "
        >

          <CardHeader>

            <div
              className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-4
              "
            >

              {/* Title */}
              <CardTitle
                className="
                  text-slate-900
                  dark:text-white
                  text-2xl
                "
              >
                {title}
              </CardTitle>

              {/* Period */}
              <span
                className="
                  inline-flex
                  items-center
                  justify-center

                  px-4
                  py-2

                  rounded-full

                  bg-violet-100/80
                  text-violet-700

                  border
                  border-violet-200

                  dark:bg-violet-500/10
                  dark:text-violet-300
                  dark:border-violet-500/20

                  text-sm
                  font-medium

                  whitespace-nowrap

                  backdrop-blur-xl
                "
              >
                {period}
              </span>

            </div>

            {/* Organization */}
            <CardDescription
              className="
                text-base
                font-medium
                text-slate-500
                dark:text-slate-400
              "
            >
              {org}
            </CardDescription>

          </CardHeader>

          <CardContent>

            <ul className="space-y-4">

              {bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="
                    flex
                    items-start
                    gap-3

                    text-slate-600
                    dark:text-slate-300

                    leading-relaxed
                  "
                >

                  {/* Bullet */}
                  <span
                    className="
                      mt-2
                      w-2
                      h-2
                      rounded-full

                      bg-gradient-to-br
                      from-violet-500
                      to-indigo-500

                      flex-shrink-0
                    "
                  />

                  {bullet}

                </li>
              ))}

            </ul>

          </CardContent>

        </Card>

      </div>
    </motion.div>
  );
}