import React from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold tracking-tight text-white"
        >
          Karthickumar<span className="text-cyan-400">.dev</span>
        </motion.div>
        <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
          {[
            { id: 'home', label: 'Home' },
            { id: 'skills', label: 'Skills' },
            { id: 'experience', label: 'Experience' },
            { id: 'certs', label: 'Certifications' },
          ].map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="rounded-md px-2 py-1 transition hover:text-cyan-300"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <a
          href="mailto:karthickumar1810@gmail.com"
          className="hidden rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 px-3 py-1.5 text-xs text-cyan-200 transition hover:from-cyan-500/20 hover:to-blue-500/20 sm:block"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default NavBar;
