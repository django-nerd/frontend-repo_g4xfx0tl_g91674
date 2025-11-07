import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Serverless Image Pipeline',
    description:
      'On-demand image processing with AWS Lambda, S3, and CloudFront. Caching strategy for sub-100ms delivery.',
    tags: ['AWS', 'Lambda', 'S3', 'CloudFront'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Task API with Auth',
    description:
      'FastAPI/Node hybrid service with JWT auth, role-based access, and PostgreSQL. CI/CD on CodePipeline.',
    tags: ['FastAPI', 'Node.js', 'JWT', 'PostgreSQL'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Insights Dashboard',
    description:
      'Real-time metrics dashboard using WebSockets and DynamoDB streams with responsive, accessible UI.',
    tags: ['DynamoDB', 'WebSockets', 'React'],
    live: '#',
    repo: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-20 h-60 w-60 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6 backdrop-blur-sm"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl" />

              {/* Visual header */}
              <div className="relative mb-4 flex h-36 items-center justify-center overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-tr from-slate-900/60 via-slate-900/30 to-slate-900/10">
                <Rocket className="h-8 w-8 text-cyan-300" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent" />
              </div>

              <h3 className="text-lg font-medium text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 text-xs text-sky-200">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-200 transition hover:bg-cyan-500/20"
                >
                  <ExternalLink size={14} /> Live
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-200 transition hover:bg-cyan-500/20"
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
