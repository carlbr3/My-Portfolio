import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  ArrowRight,
  Rocket,
  Gamepad2,
  Music2,
  Palette,
  Sun,
  Moon,
  Code2,
  Sparkles
} from "lucide-react";

// ----------------------------------------------------
// Cool Portfolio Homepage — single-file React component
// TailwindCSS required. Uses framer-motion + lucide-react.
// ----------------------------------------------------

const CONTENT = {
  name: "Brandon Carlson",
  email: "brandon.carlson2089@gmail.com",
  resumeUrl: "",
  socials: {
    github: "https://github.com/carlbr3",
    linkedin: ""
  },
  projects: [
    {
      title: "ReelRank — Social Movie Rankings",
      description:
        "Full‑stack app for building and sharing ranked movie & TV lists. React (Vite) + Tailwind on the front end, Node/Express + PostgreSQL/Sequelize on the back end, real‑time comparisons via WebSockets, TMDb for data, and KinoCheck trailers.",
      tags: ["React", "Vite", "Tailwind", "Node", "Express", "PostgreSQL", "Sequelize", "WebSockets"],
      links: {
        live: "",
        github: ""
      }
    },
    {
      title: "Guitar Tab Editor",
      description:
        "A fast, guitar‑focused tab editor with real‑time playback, alternate tunings, scale/chord highlighting, metronome, and export (MIDI, text, PDF). 2D fretboard UI, dark mode, and mobile‑friendly design.",
      tags: ["TypeScript", "React", "Audio", "Vite"],
      links: {
        live: "",
        github: ""
      }
    },
    {
      title: "Social Network API",
      description:
        "NoSQL backend for a social platform with Users, Thoughts, Reactions, and Friends. Express + MongoDB/Mongoose with robust CRUD routes validated in Insomnia.",
      tags: ["Node", "Express", "MongoDB", "Mongoose", "REST"],
      links: {
        live: "",
        github: ""
      }
    }
  ]
};

const projects = CONTENT.projects;

const skills = [
  "JavaScript/TypeScript",
  "React (Vite)",
  "Node.js / Express",
  "PostgreSQL / Sequelize",
  "MongoDB / Mongoose",
  "GraphQL",
  "Tailwind CSS",
  "Cypress",
  "WebSockets",
  "JWT Auth",
  "Vite",
];

function useThemeToggle() {
  const prefersDark = useMemo(
    () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
    []
  );
  const [dark, setDark] = useState(prefersDark);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);
  return { dark, setDark } as const;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-medium border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
      {children}
    </span>
  );
}

function ProjectCard({ p, i }: { p: typeof projects[number]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 shadow-sm hover:shadow-xl backdrop-blur"
    >
      {/* Decorative gradient stripe */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-500 via-sky-500 to-emerald-500" />

      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">
            {p.title}
          </h3>
          <Sparkles className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">{p.description}</p>
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <a
            href={p.links.live}
            className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
          >
            <ExternalLink className="w-4 h-4" /> Live demo
          </a>
          <a
            href={p.links.github}
            className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
          >
            <Github className="w-4 h-4" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioHomepage() {
  const { dark, setDark } = useThemeToggle();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-60 dark:opacity-40 bg-fuchsia-400/40" />
      <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full blur-3xl opacity-60 dark:opacity-40 bg-sky-400/40" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl opacity-40 bg-emerald-400/40" />

      {/* Navbar */}
      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-4 mb-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-white/10 shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 16 }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-sky-500 text-white shadow"
                >
                  <Rocket className="w-5 h-5" />
                </motion.div>
                <span className="font-semibold tracking-tight">{CONTENT.name}</span>
              </div>

              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#projects" className="hover:underline">Projects</a>
                <a href="#about" className="hover:underline">About</a>
                <a href="#contact" className="hover:underline">Contact</a>
              </nav>

              <div className="flex items-center gap-2">
                <a
                  href={CONTENT.resumeUrl || '#resume'}
                  className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-3 py-2 text-sm font-medium hover:shadow"
                >
                  <Download className="w-4 h-4" /> Resume
                </a>
                <button
                  onClick={() => setDark(!dark)}
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 p-2 hover:shadow"
                  aria-label="Toggle theme"
                >
                  {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-10 md:pt-10 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Building delightful&nbsp;
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-sky-500 to-emerald-500">web experiences</span>
            </motion.h1>
            <p className="mt-4 text-base md:text-lg text-black/70 dark:text-white/70 max-w-xl">
              I’m a full‑stack developer focused on React, Node, and data‑driven UX. I love crafting fast, accessible interfaces and scalable backends.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-sky-500 to-emerald-500 shadow hover:opacity-95"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={CONTENT.email ? `mailto:${CONTENT.email}` : '#contact'}
                className="inline-flex items-center gap-2 rounded-2xl border border-black/10 dark:border-white/10 px-4 py-3 text-sm font-semibold hover:shadow"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </a>
              <div className="flex items-center gap-2 ml-1">
                {CONTENT.socials.github && (
                <a href={CONTENT.socials.github} className="inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 p-2 hover:shadow" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              )}
                {CONTENT.socials.linkedin && (
                <a href={CONTENT.socials.linkedin} className="inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 p-2 hover:shadow" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge><Code2 className="w-3.5 h-3.5 mr-1.5 inline" /> TypeScript</Badge>
              <Badge><Palette className="w-3.5 h-3.5 mr-1.5 inline" /> Tailwind</Badge>
              <Badge><Gamepad2 className="w-3.5 h-3.5 mr-1.5 inline" /> Vite</Badge>
              <Badge><Music2 className="w-3.5 h-3.5 mr-1.5 inline" /> Web Audio</Badge>
            </div>
          </div>

          {/* Showcase panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[320px] md:h-[420px] rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-xl overflow-hidden backdrop-blur"
          >
            <div className="absolute inset-0 grid grid-cols-6 gap-px p-6">
              {Array.from({ length: 18 }).map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.01 * idx }}
                  className="rounded-xl bg-gradient-to-br from-white/90 to-white/60 dark:from-white/10 dark:to-white/5 border border-black/5 dark:border-white/5"
                />
              ))}
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium bg-black/80 text-white px-3 py-2 rounded-xl shadow">
              <Sparkles className="w-4 h-4" /> Smooth motion, crisp UI
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        <div className="mb-8 md:mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-sm md:text-base text-black/70 dark:text-white/70">A few things I’ve been building lately.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold hover:underline">
            See all <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow backdrop-blur">
              <div className="aspect-[4/3]" />
              <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                <div>
                  <p className="text-sm text-black/70 dark:text-white/70">Portrait placeholder</p>
                  <p className="text-xs text-black/50 dark:text-white/50">(Drop a photo or illustration here)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About Me</h2>
            <p className="mt-3 text-sm md:text-base text-black/70 dark:text-white/70 leading-relaxed">
              I’m Brandon, a developer who enjoys turning complex ideas into elegant, performant products. I’ve shipped full‑stack apps, crafted component systems, and built reliable APIs. When I’m not coding, I’m probably playing guitar or exploring new UI patterns.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 md:p-10 shadow backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">Let’s build something great</h3>
              <p className="mt-2 text-sm md:text-base text-black/70 dark:text-white/70 max-w-prose">
                I’m available for full‑time roles, contract work, and open‑source collaboration.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CONTENT.email ? `mailto:${CONTENT.email}` : '#contact'}
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-sky-500 to-emerald-500 shadow hover:opacity-95"
              >
                <Mail className="w-4 h-4" /> Email Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-black/10 dark:border-white/10 px-4 py-3 text-sm font-semibold hover:shadow"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-black/10 dark:border-white/10 px-4 py-3 text-sm font-semibold hover:shadow"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 pb-10">
        <div className="mt-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-4 text-xs text-black/60 dark:text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {CONTENT.name}. All rights reserved.</span>
          <span className="inline-flex items-center gap-2">
            <span className="hidden sm:inline">Built with</span>
            <span className="inline-flex items-center gap-1"><Code2 className="w-3.5 h-3.5" /> React</span>
            <span className="inline-flex items-center gap-1"><Palette className="w-3.5 h-3.5" /> Tailwind</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
