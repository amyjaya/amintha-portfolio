import React, { useEffect } from 'react';

import { Navbar } from './components/Navbar';

import { Hero } from './sections/Hero';

import { AnimatedSkillsBar } from './components/AnimatedSkillsBar';

import { About } from './sections/About';

import { Experience } from './sections/Experience';

import { Projects } from './sections/Projects';

import { Certifications } from './sections/Certifications';

import { Achievements } from './sections/Achievements';

import { Skills } from './sections/Skills';

import { Contact } from './sections/Contact';

import { Footer } from './sections/Footer';

function App() {

  useEffect(() => {

    /* Theme Init */
    const savedTheme =
      localStorage.getItem('theme') ||
      'system';

    const root =
      document.documentElement;

    root.classList.remove(
      'light',
      'dark'
    );

    if (savedTheme === 'system') {

      const systemTheme =
        window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches
          ? 'dark'
          : 'light';

      root.classList.add(systemTheme);

    } else {

      root.classList.add(savedTheme);

    }

  }, []);

  return (

    <div
      className="
        relative
        overflow-hidden

        min-h-screen

        bg-white
        text-slate-900

        dark:bg-[#020617]
        dark:text-white

        transition-colors
        duration-500
      "
    >

      {/* Global Background Glow */}
      <div
        className="
          fixed
          top-[-300px]
          left-1/2
          -translate-x-1/2

          w-[1200px]
          h-[1200px]

          bg-violet-500/10
          blur-[220px]

          rounded-full

          pointer-events-none
          z-0
        "
      />

      {/* Secondary Glow */}
      <div
        className="
          fixed
          bottom-[-400px]
          right-[-200px]

          w-[900px]
          h-[900px]

          bg-indigo-500/10
          blur-[220px]

          rounded-full

          pointer-events-none
          z-0
        "
      />

      {/* Content */}
      <div className="relative z-10">

        <Navbar />

        <main>

          <Hero />

          <AnimatedSkillsBar />

          <About />

          <Experience />

          <Projects />

          <Certifications />

          <Achievements />

          <Skills />

          <Contact />

        </main>

        <Footer />

      </div>

    </div>

  );

}

export default App;