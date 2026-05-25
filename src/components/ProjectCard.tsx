import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from './Card';

import { Button } from './Button';
import { Tag } from './Tag';

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    live?: string;
    repo?: string;
  };
  index: number;
}

export function ProjectCard({
  title,
  tagline,
  description,
  tech,
  image,
  links,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1
      }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Card
        className="
          overflow-hidden
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
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">

          {/* Overlay Glow */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/30
              to-transparent
              z-10
            "
          />

          <img
            src={image}
            alt={title}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
            loading="lazy"
          />

        </div>

        {/* Content */}
        <CardHeader className="pb-4">

          <CardTitle
            className="
              text-2xl
              font-semibold
              transition-colors
              duration-300

              group-hover:text-violet-600
              dark:group-hover:text-violet-400
            "
          >
            {title}
          </CardTitle>

          <CardDescription
            className="
              text-slate-500
              dark:text-slate-400
              text-base
            "
          >
            {tagline}
          </CardDescription>

        </CardHeader>

        <CardContent className="space-y-6">

          {/* Description */}
          <p
            className="
              text-slate-600
              dark:text-slate-300
              leading-relaxed
            "
          >
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">

            {tech.map((item) => (
              <Tag
                key={item}
                variant="primary"
                size="sm"
              >
                {item}
              </Tag>
            ))}

          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">

            {links.live && (
              <Button
                size="sm"
                variant="primary"
                className="flex-1"
                onClick={() =>
                  window.open(links.live, '_blank')
                }
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}

            {links.repo && (
              <Button
                size="sm"
                variant="secondary"
                className="flex-1"
                onClick={() =>
                  window.open(links.repo, '_blank')
                }
              >
                <Github className="w-4 h-4 mr-2" />
                Source
              </Button>
            )}

          </div>

        </CardContent>
      </Card>
    </motion.div>
  );
}