"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f5f5f0]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111111]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-6 px-6 py-5 sm:px-8">
          <div className="text-lg font-semibold uppercase tracking-[0.3em] text-[#fb8c00]">
            Jerry Neil
          </div>
          <nav className="hidden items-center gap-8 text-sm text-[#e8e8e8] lg:flex">
            <Link href="#home" className="transition hover:text-[#fb8c00]">
              Home
            </Link>
            <Link href="#about" className="transition hover:text-[#fb8c00]">
              About
            </Link>
            <Link href="#projects" className="transition hover:text-[#fb8c00]">
              Projects
            </Link>
            <Link href="#contact" className="transition hover:text-[#fb8c00]">
              Contact
            </Link>
          </nav>
          <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#f5f5f0] lg:flex">
            J
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden px-6 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-8">
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-[106px] rounded-full bg-white/5 blur-3xl" />
            <div className="relative mx-auto max-w-3xl rounded-full border border-white/10 bg-[#141414]/95 px-5 py-4 shadow-[0_30px_70px_rgba(0,0,0,0.25)]">
              <input
                type="search"
                placeholder="Search here"
                className="w-full bg-transparent text-sm text-[#e8e8e8] placeholder:text-[#7f7f7f] outline-none"
              />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="inline-flex rounded-full bg-[#fb8c00]/15 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#fb8c00]">
                  Premium portfolio
                </p>
                <h1 className="text-5xl font-semibold leading-tight text-[#f5f5f0] sm:text-6xl">
                  Think Inside the Box
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[#c7c7c7] sm:text-lg">
                  From the details of your brand to the experience of your product, I build polished digital portfolios and premium interfaces with bold color, refined motion, and clean structure.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.95fr_0.65fr]">
                <Link
                  href="#projects"
                  className="inline-flex min-h-[58px] items-center justify-center rounded-full bg-[#fb8c00] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] transition hover:bg-[#ff9d40]"
                >
                  View my work
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex min-h-[58px] items-center justify-center rounded-full border border-white/15 bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#f5f5f0] transition hover:border-[#fb8c00] hover:text-[#fb8c00]"
                >
                  Contact me
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181818] px-8 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,140,0,0.2),transparent_22%),linear-gradient(180deg,_rgba(255,255,255,0.02),rgba(0,0,0,0.55))]" />
              <div className="relative flex h-full flex-col justify-between gap-8 sm:flex-row sm:items-end">
                <div className="space-y-5">
                  <div className="rounded-[2rem] bg-[#282828] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.25)]">
                    <div className="h-28 w-28 rounded-[1.8rem] bg-[#1e1e1e] shadow-[0_24px_60px_rgba(0,0,0,0.35)]" />
                    <div className="mt-5 h-16 w-16 rounded-[1.25rem] bg-[#fb8c00] shadow-[0_18px_40px_rgba(251,140,0,0.5)]" />
                  </div>
                </div>
                <div className="space-y-4 text-[#e8e8e8]">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#fb8c00]">Need a portfolio?</p>
                  <p className="max-w-sm text-3xl font-semibold leading-tight text-[#f5f5f0] sm:text-4xl">
                    A refined portfolio system with sharp visuals and premium motion.
                  </p>
                  <p className="text-sm leading-7 text-[#b8b8b8]">
                    Visit the projects section below for a detailed showcase of work styled with charcoal, orange, grey, and off-white tones.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-[1300px] px-6 pb-16 sm:px-8 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
          className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-[#151515]/90 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.28)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#fb8c00]">About Jerry</p>
            <h2 className="mt-5 text-3xl font-semibold text-[#f5f5f0] sm:text-4xl">
              I design premium digital products with strong visual direction and purposeful motion.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#c7c7c7]">
              I’m Jerry Neil Dohinog, a passionate UI/UX designer and frontend creator. My work combines modern layout systems, elegant motion, and a polished aesthetic to help brands communicate clearly and stand out online.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                {
                  label: "Focus",
                  value: "Portfolio design, branding, motion",
                },
                {
                  label: "Approach",
                  value: "Strategic, premium, user-first",
                },
                {
                  label: "Style",
                  value: "Charcoal black, orange, grey, off-white",
                },
                {
                  label: "Goal",
                  value: "Memorable, polished digital experiences",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-white/10 bg-[#1b1b1b]/90 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#fb8c00]">{item.label}</p>
                  <p className="mt-3 text-sm leading-7 text-[#d3d3d3]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#171717]/90 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.22)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#fb8c00]">Signature</p>
            <h3 className="mt-4 text-3xl font-semibold text-[#f5f5f0]">Design systems with strong hierarchy and refined motion.</h3>
            <p className="mt-5 text-base leading-8 text-[#c7c7c7]">
              Every portfolio and interface is built with clear structure, premium spacing, and consistent branding to make the experience feel polished and memorable.
            </p>
            <div className="mt-10 space-y-5">
              {[
                "Brand direction that feels thoughtful and confident.",
                "Motion that guides attention without overwhelming.",
                "Typography and spacing that create elegant rhythm.",
              ].map((item) => (
                <div key={item} className="rounded-[1.75rem] bg-[#111111]/80 p-5 text-[#d3d3d3]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-[1300px] px-6 pb-16 sm:px-8 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.05 } }}
          className="space-y-10"
        >
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#fb8c00]">Featured projects</p>
              <h2 className="mt-3 text-4xl font-semibold text-[#f5f5f0]">A curated selection of portfolio work.</h2>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#fb8c00] bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#fb8c00] transition hover:bg-[#fb8c00]/10"
            >
              Let’s work together
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Nexa Studio",
                description: "A premium identity system with strong motion and editorial brand direction.",
              },
              {
                title: "Orbit Platform",
                description: "A data-driven interface with polished layouts and refined visual hierarchy.",
              },
              {
                title: "Aero Commerce",
                description: "A conversion-focused portfolio concept with premium product storytelling.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-[#141414]/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-[#fb8c00]">Featured</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#f5f5f0]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#c7c7c7]">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="mx-auto max-w-[1300px] px-6 pb-20 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.1 } }}
          className="rounded-[2rem] border border-white/10 bg-[#171717]/90 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.3)]"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#fb8c00]">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold text-[#f5f5f0]">Let’s build your next premium digital project.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7c7c7]">
                If you want a refined portfolio or a premium web experience, I’m available to collaborate. Reach out and let’s talk about your vision.
              </p>
            </div>
            <div className="space-y-5 rounded-[2rem] border border-white/10 bg-[#111111]/90 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#fb8c00]">Get in touch</p>
              <p className="text-sm leading-7 text-[#d3d3d3]">
                Email: <span className="text-[#f5f5f0]">jerry.neil.dohinog@example.com</span>
              </p>
              <p className="text-sm leading-7 text-[#d3d3d3]">
                Facebook: <a className="text-[#fb8c00] hover:text-[#ff9d40]" href="https://www.facebook.com/jerry.neil.dohinog" target="_blank" rel="noreferrer">facebook.com/jerry.neil.dohinog</a>
              </p>
              <Link
                href="mailto:jerry.neil.dohinog@example.com"
                className="inline-flex items-center justify-center rounded-full bg-[#fb8c00] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] transition hover:bg-[#ff9d40]"
              >
                Send message
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
