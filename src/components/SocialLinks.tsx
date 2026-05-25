import React from 'react';
import {
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react';

import { profile } from '../content/profile';

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({
  className = ''
}: SocialLinksProps) {
  const socialItems = [
    {
      icon: Github,
      href: profile.links.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: profile.links.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: ExternalLink,
      href: profile.links.website,
      label: 'Website'
    }
  ];

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
    >
      {socialItems.map(
        ({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="
              group
              relative
              p-3
              rounded-2xl

              bg-white/70
              dark:bg-white/[0.04]

              backdrop-blur-xl

              border
              border-slate-200/70
              dark:border-white/10

              text-slate-600
              dark:text-slate-400

              hover:text-violet-600
              dark:hover:text-violet-400

              hover:border-violet-300
              dark:hover:border-violet-500/30

              hover:shadow-[0_10px_30px_rgba(124,58,237,0.18)]

              transition-all
              duration-300

              hover:-translate-y-1
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-2xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300

                bg-gradient-to-br
                from-violet-500/10
                to-indigo-500/10
              "
            />

            <Icon
              className="
                relative
                z-10
                h-5
                w-5
              "
            />

          </a>
        )
      )}
    </div>
  );
}