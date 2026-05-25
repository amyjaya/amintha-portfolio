import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '../hooks/useScrolled';
import { smoothScrollTo } from '../lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { SocialLinks } from './SocialLinks';

const navItems = [
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' }
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrolled();

  const handleNavClick = (href: string) => {
    smoothScrollTo(href);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `
            bg-white/70
            dark:bg-[#0B0F19]/70
            backdrop-blur-2xl
            border-b
            border-slate-200/60
            dark:border-white/10
            shadow-[0_8px_30px_rgba(15,23,42,0.06)]
          `
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => smoothScrollTo('hero')}
            className="
              text-3xl
              font-bold
              bg-gradient-to-r
              from-violet-600
              to-indigo-500
              bg-clip-text
              text-transparent
              tracking-tight
            "
          >
            AJ.
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">

            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="
                  px-4
                  py-2
                  rounded-xl
                  text-slate-700
                  dark:text-slate-300
                  hover:text-violet-600
                  dark:hover:text-violet-400
                  hover:bg-slate-100
                  dark:hover:bg-white/5
                  transition-all
                  duration-300
                  font-medium
                "
              >
                {item.label}
              </button>
            ))}

          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            <div
              className="
                flex
                items-center
                gap-3
                px-4
                py-2
                rounded-2xl
                bg-white/60
                dark:bg-white/[0.03]
                backdrop-blur-xl
                border
                border-slate-200/60
                dark:border-white/10
              "
            >
              <SocialLinks />
              <ThemeToggle />
            </div>

          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">

            <ThemeToggle />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                p-3
                rounded-2xl
                bg-white/70
                dark:bg-white/[0.05]
                backdrop-blur-xl
                border
                border-slate-200
                dark:border-white/10
                text-slate-700
                dark:text-slate-300
                hover:text-violet-600
                dark:hover:text-violet-400
                transition-all
              "
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="
              lg:hidden
              mt-2
              mb-4
              rounded-3xl
              bg-white/80
              dark:bg-[#111827]/80
              backdrop-blur-2xl
              border
              border-slate-200/60
              dark:border-white/10
              shadow-2xl
              overflow-hidden
            "
          >
            <div className="p-4 space-y-2">

              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="
                    block
                    w-full
                    text-left
                    px-5
                    py-3
                    rounded-2xl
                    text-slate-700
                    dark:text-slate-300
                    hover:text-violet-600
                    dark:hover:text-violet-400
                    hover:bg-slate-100
                    dark:hover:bg-white/5
                    transition-all
                    duration-300
                    font-medium
                  "
                >
                  {item.label}
                </button>
              ))}

              <div
                className="
                  pt-5
                  mt-4
                  border-t
                  border-slate-200
                  dark:border-white/10
                "
              >
                <SocialLinks />
              </div>

            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}