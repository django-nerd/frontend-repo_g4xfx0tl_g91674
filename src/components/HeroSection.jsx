import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const playAreaRef = useRef(null);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Full-width interactive Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability gradient and glow (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/25 via-blue-500/15 to-fuchsia-500/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-600/25 via-sky-500/15 to-cyan-400/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-16 md:flex-row md:items-center md:py-24">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full md:w-2/3"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs tracking-wider text-cyan-300 backdrop-blur">
            Glassy • Interactive • Modern • Vibrant Tech
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Karthickumar P
          </h1>
          <p className="mt-3 max-w-xl text-slate-200/90">
            Associate Software Engineer — building scalable, high-performance backend systems with Python, Node.js, and AWS serverless.
          </p>

          <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:max-w-md sm:grid-cols-3">
            <a
              href="mailto:karthickumar1810@gmail.com"
              className="group flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 px-4 py-3 text-sm text-cyan-200 transition hover:from-cyan-500/20 hover:to-blue-500/20"
            >
              <Mail size={16} className="text-cyan-300" /> Email
            </a>
            <a
              href="tel:+919655499572"
              className="group flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 px-4 py-3 text-sm text-cyan-200 transition hover:from-cyan-500/20 hover:to-blue-500/20"
            >
              <Phone size={16} className="text-cyan-300" /> Call
            </a>
            <a
              href="https://www.linkedin.com" target="_blank" rel="noreferrer"
              className="group flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 px-4 py-3 text-sm text-cyan-200 transition hover:from-cyan-500/20 hover:to-blue-500/20"
            >
              <Linkedin size={16} className="text-cyan-300" /> LinkedIn
            </a>
          </div>

          <div className="mt-4 text-sm text-slate-300">
            Pondicherry, India • Tamil (Native), English (Professional)
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              'Python',
              'Node.js',
              'AWS Lambda',
              'API Gateway',
              'CloudFormation',
              'S3',
              'CloudFront',
              'PostgreSQL',
              'DynamoDB',
              'CI/CD',
              'Agile',
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs text-sky-200"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Mini Play Area: draggable, tappable orbs */}
          <div ref={playAreaRef} className="mt-10 h-28 w-full max-w-xl rounded-xl border border-cyan-400/20 bg-white/5 p-3 backdrop-blur">
            <div className="mb-2 flex items-center justify-between px-1 text-xs text-slate-300">
              <span>Playground</span>
              <span className="text-cyan-300">drag • hover • tap</span>
            </div>
            <div className="relative h-16 w-full">
              <motion.div
                drag
                dragConstraints={playAreaRef}
                dragElastic={0.6}
                whileHover={{ scale: 1.1, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-2 top-2 grid h-10 w-10 place-items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.35)]"
              >
                ●
              </motion.div>
              <motion.div
                drag
                dragConstraints={playAreaRef}
                dragElastic={0.5}
                whileHover={{ scale: 1.1, rotate: -8 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-16 top-6 grid h-10 w-10 place-items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-200 shadow-[0_0_24px_rgba(232,121,249,0.35)]"
              >
                ◆
              </motion.div>
              <motion.div
                drag
                dragConstraints={playAreaRef}
                dragElastic={0.7}
                whileHover={{ scale: 1.1, rotate: 12 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-32 top-1 grid h-10 w-10 place-items-center rounded-full border border-blue-400/40 bg-blue-400/10 text-blue-200 shadow-[0_0_24px_rgba(96,165,250,0.35)]"
              >
                ■
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
