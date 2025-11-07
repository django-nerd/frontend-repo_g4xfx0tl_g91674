import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: 'Designing Serverless APIs with AWS',
    date: 'Oct 2024',
    excerpt: 'Patterns for resilient, scalable APIs on Lambda, API Gateway, and DynamoDB — with IaC tips.',
    url: '#',
  },
  {
    title: 'FastAPI Best Practices',
    date: 'Aug 2024',
    excerpt: 'Type-safe routes, dependency injection, background tasks, and testing strategies that scale.',
    url: '#',
  },
  {
    title: 'Playwright for Backend Engineers',
    date: 'Jun 2024',
    excerpt: 'Scrape dynamic pages responsibly, schedule runs, and pipe data into your services.',
    url: '#',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-20 h-60 w-60 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Blog & Notes
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative block overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6 backdrop-blur-sm"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-cyan-300 opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                  <CalendarDays size={14} /> {p.date}
                </div>
                <p className="mt-3 text-sm text-slate-300">{p.excerpt}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
