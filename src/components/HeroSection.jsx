import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Code2, TerminalSquare, Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Full-width Spline background: dark, abstract, modern (web app developer vibe) */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking readability gradients and ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-16 md:flex-row md:items-center md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full md:w-2/3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs tracking-wider text-yellow-300 backdrop-blur">
            <Code2 size={14} /> Web App Developer • Frontend & Backend • Cloud
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Karthickumar P
          </h1>
          <p className="mt-3 max-w-xl text-slate-200/90">
            I craft modern, performant web apps with React, TypeScript, and Node — pairing elegant UI with reliable APIs and cloud-native workflows.
          </p>

          <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:max-w-md sm:grid-cols-3">
            <a
              href="https://github.com" target="_blank" rel="noreferrer"
              className="group flex items-center justify-center gap-2 rounded-lg border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 px-4 py-3 text-sm text-yellow-200 transition hover:from-yellow-500/20 hover:to-amber-500/20"
            >
              <Github size={16} className="text-yellow-300" /> GitHub
            </a>
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-lg border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 px-4 py-3 text-sm text-yellow-200 transition hover:from-yellow-500/20 hover:to-amber-500/20"
            >
              <TerminalSquare size={16} className="text-yellow-300" /> Projects
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 rounded-lg border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 px-4 py-3 text-sm text-yellow-200 transition hover:from-yellow-500/20 hover:to-amber-500/20"
            >
              <Code2 size={16} className="text-yellow-300" /> Contact
            </a>
          </div>

          <div className="mt-4 text-sm text-slate-300">
            Remote • Building for the web • Always learning
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              'React',
              'TypeScript',
              'Node.js',
              'FastAPI',
              'Tailwind CSS',
              'MongoDB',
              'PostgreSQL',
              'AWS',
              'CI/CD',
              'Design Systems',
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quick stats / badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3"
        >
          <div className="rounded-xl border border-yellow-400/20 bg-white/5 p-5 backdrop-blur">
            <div className="mb-3 text-xs uppercase tracking-widest text-slate-300">At a glance</div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-2xl font-semibold text-yellow-300">10+</div>
                <div className="text-[11px] text-slate-300">Web Apps</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-yellow-300">5+</div>
                <div className="text-[11px] text-slate-300">APIs</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-yellow-300">3</div>
                <div className="text-[11px] text-slate-300">Certs</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
