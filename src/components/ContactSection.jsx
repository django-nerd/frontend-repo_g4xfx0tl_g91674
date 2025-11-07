import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: '' });

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || 'Failed to send');
      setStatus({ loading: false, ok: true, msg: 'Message sent successfully! I\'ll get back soon.' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message || 'Something went wrong.' });
    }
  };

  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Get in Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 space-y-4 rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6 backdrop-blur-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-slate-300">Name</label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-300" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-cyan-500/30 bg-black/40 px-9 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-300">Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-300" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-cyan-500/30 bg-black/40 px-9 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-300">Message</label>
            <div className="relative">
              <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-cyan-300" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-md border border-cyan-500/30 bg-black/40 px-9 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                placeholder="How can I help?"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              {status.msg && (
                <span className={status.ok ? 'text-emerald-400' : 'text-rose-400'}>{status.msg}</span>
              )}
            </div>
            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex items-center gap-2 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20 disabled:opacity-50"
            >
              <Send size={16} /> {status.loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
