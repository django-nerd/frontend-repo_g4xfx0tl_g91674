import React from 'react';
import { motion } from 'framer-motion';
import { ServerCog, Cloud, Database, GitBranch, Gauge } from 'lucide-react';

const categories = [
  {
    icon: ServerCog,
    title: 'Backend Development',
    items: ['Python', 'Node.js', 'REST APIs', 'Serverless Architecture'],
  },
  {
    icon: Cloud,
    title: 'Cloud Technologies (AWS)',
    items: [
      'S3',
      'CloudFront',
      'CloudFormation',
      'CodePipeline',
      'Lambda',
      'API Gateway',
      'EC2',
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    items: ['PostgreSQL', 'DynamoDB'],
  },
  {
    icon: GitBranch,
    title: 'Collaboration',
    items: ['Git', 'ClickUp', 'Client Communication', 'Agile/Scrum'],
  },
  {
    icon: Gauge,
    title: 'Performance & Quality',
    items: ['Code Refactoring', 'Optimization', 'Automation', 'CI/CD'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-fuchsia-400/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Skills & Toolkit
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon: Icon, title, items }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6 backdrop-blur-sm"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-medium text-white">{title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-300">
                  {items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
