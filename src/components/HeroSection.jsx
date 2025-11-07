import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Code2, TerminalSquare, Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Full-width developer-themed Spline background (robotic arm following cursor) */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/xVcGsBa0crFDHR-t/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking readability gradients and ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-[120px]" />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs tracking-wider text-cyan-300 backdrop-blur">
            <Code2 size={14} /> Developer • Robotics • Cloud • Open Source
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Karthickumar P
          </h1>
          <p className="mt-3 max-w-xl text-slate-200/90">
            Backend-focused software engineer crafting reliable APIs, event-driven systems, and developer tooling. I love building with Python, Node.js, and AWS.
          </p>

          <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:max-w-md sm:grid-cols-3">
            <a
              href="https://github.com" target="_blank" rel="noreferrer"
              className="group flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 px-4 py-3 text-sm text-cyan-200 transition hover:from-cyan-500/20 hover:to-blue-500/20"
            >
              <Github size={16} className="text-cyan-300" /> GitHub
            </a>
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 px-4 py-3 text-sm text-cyan-200 transition hover:from-cyan-500/20 hover:to-blue-500/20"
            >
              <TerminalSquare size={16} className="text-cyan-300" /> Projects
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 px-4 py-3 text-sm text-cyan-200 transition hover:from-cyan-500/20 hover:to-blue-500/20"
            >
              <Code2 size={16} className="text-cyan-300" /> Contact
            </a>
          </div>

          <div className="mt-4 text-sm text-slate-300">
            Pondicherry, India • Building for the web • Always learning
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              'TypeScript',
              'Python',
              'Node.js',
              'AWS',
              'FastAPI',
              'PostgreSQL',
              'CI/CD',
              'Serverless',
              'Event-Driven',
              'Open Source',
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs text-sky-200"
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
          <div className="rounded-xl border border-cyan-400/20 bg-white/5 p-5 backdrop-blur">
            <div className="mb-3 text-xs uppercase tracking-widest text-slate-300">At a glance</div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-2xl font-semibold text-cyan-300">5+</div>
                <div className="text-[11px] text-slate-300">APIs</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-cyan-300">8+</div>
                <div className="text-[11px] text-slate-300">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-cyan-300">3</div>
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
