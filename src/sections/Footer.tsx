import React from 'react';

import { motion } from 'framer-motion';

import {
  ArrowUp,
  Heart
} from 'lucide-react';

import { Button } from '../components/Button';
import { SocialLinks } from '../components/SocialLinks';

import { smoothScrollTo } from '../lib/utils';

import { profile } from '../content/profile';

const footerLinks = [
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Leadership', href: 'achievements' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' }
];

export function Footer() {

  const handleLinkClick = (
    href: string
  ) => {
    smoothScrollTo(href);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden

        bg-[#060816]
        text-white
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

      <div
        className="
          relative
          max-w-7xl
          mx-auto

          px-5
          sm:px-6
          lg:px-8

          py-24
        "
      >

        {/* Main Grid */}
        <div
          className="
            grid
            md:grid-cols-3
            gap-16
          "
        >

          {/* Brand */}
          <div className="space-y-6">

            <motion.div
              whileHover={{
                scale: 1.05
              }}
              onClick={scrollToTop}
              className="
                inline-block

                text-5xl
                font-black
                tracking-tight

                cursor-pointer

                bg-gradient-to-r
                from-violet-400
                to-indigo-400

                bg-clip-text
                text-transparent
              "
            >
              AJ.
            </motion.div>

            <p
              className="
                leading-relaxed
                text-slate-400
                max-w-sm
              "
            >
              {profile.summary}
            </p>

            <SocialLinks />

          </div>

          {/* Links */}
          <div className="space-y-6">

            <h3
              className="
                text-xl
                font-semibold
                text-white
              "
            >
              Navigation
            </h3>

            <ul className="space-y-4">

              {footerLinks.map(link => (

                <li key={link.href}>

                  <button
                    onClick={() =>
                      handleLinkClick(link.href)
                    }
                    className="
                      text-slate-400

                      hover:text-violet-400

                      transition-all
                      duration-300

                      hover:translate-x-1
                    "
                  >
                    {link.label}
                  </button>

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div className="space-y-6">

            <h3
              className="
                text-xl
                font-semibold
                text-white
              "
            >
              Contact
            </h3>

            <div
              className="
                space-y-4
                text-slate-400
              "
            >

              <p>
                {profile.location}
              </p>

              <a
                href={`mailto:${profile.links.email}`}
                className="
                  block

                  hover:text-violet-400

                  transition-colors
                "
              >
                {profile.links.email}
              </a>

              <a
                href={`tel:${profile.links.phone}`}
                className="
                  block

                  hover:text-violet-400

                  transition-colors
                "
              >
                {profile.links.phone}
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div
          className="
            mt-16
            pt-8

            border-t
            border-white/10

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-6
          "
        >

          {/* Copyright */}
          <div
            className="
              flex
              items-center
              gap-2

              text-slate-500
            "
          >

            <span>
              © 2026 {profile.name}.
              Crafted with
            </span>

            <Heart
              className="
                w-4
                h-4
                text-red-500
              "
            />

            <span>
              using React & Tailwind
            </span>

          </div>

          {/* Top Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}

            className="
              rounded-full

              border
              border-white/10

              bg-white/[0.03]

              hover:bg-white/[0.06]

              text-slate-300

              backdrop-blur-xl
            "
          >

            <ArrowUp className="w-4 h-4 mr-2" />

            Back to top

          </Button>

        </div>

      </div>
    </footer>
  );
}