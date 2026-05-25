import React from 'react';

import { SectionHeader } from '../components/SectionHeader';

import { ProjectCard } from '../components/ProjectCard';

import { profile } from '../content/profile';

export function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden

        py-32

        bg-gradient-to-b
        from-white
        to-slate-50

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
          title="Featured Projects"
          subtitle="A selection of premium projects, experiments, and real-world builds"
        />

        {/* Projects Grid */}
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3

            gap-8
          "
        >

          {profile.projects.map(
            (project, index) => (

              <ProjectCard
                key={project.title}

                title={project.title}
                tagline={project.tagline}
                description={project.description}

                tech={project.tech}

                image={project.image}

                links={project.links}

                index={index}
              />
            )
          )}

        </div>

      </div>
    </section>
  );
}