import React from 'react';

import { SectionHeader } from '../components/SectionHeader';
import { TimelineItem } from '../components/TimelineItem';

import { profile } from '../content/profile';

export function Experience() {
  return (
    <section
      id="experience"
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
          top-0
          left-1/2
          -translate-x-1/2

          w-[800px]
          h-[800px]

          bg-violet-500/10
          blur-[160px]
          rounded-full

          pointer-events-none
        "
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionHeader
          title="Experience"
          subtitle="My professional journey and key accomplishments"
        />

        <div className="space-y-2">

          {profile.experience.map(
            (exp, index) => (
              <TimelineItem
                key={`${exp.org}-${index}`}
                org={exp.org}
                title={exp.title}
                period={exp.period}
                bullets={exp.bullets}
                isLast={
                  index ===
                  profile.experience.length - 1
                }
                index={index}
              />
            )
          )}

        </div>

      </div>
    </section>
  );
}