"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-[#fb8c00]">About Jerry</p>
            <h1 className="text-4xl font-semibold leading-tight text-[#f5f5f0] sm:text-5xl">
              Crafted design systems, thoughtful motion, and product strategy for brands that want to stand out.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[#c7c7c7]">
              I create polished digital products with a premium look and refined interaction design. My work blends creative direction, user-first UX, and beautiful visual rhythm to help businesses communicate clearly and grow with confidence.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-[#171717]/90 p-6 text-[#f5f5f0] shadow-lg shadow-black/30 sm:max-w-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-[#fb8c00]">Profile</p>
            <ul className="mt-6 space-y-4 text-sm text-[#d3d3d3]">
              <li>
                <span className="font-semibold text-[#f5f5f0]">Name:</span> Jerry Neil Dohinog
              </li>
              <li>
                <span className="font-semibold text-[#f5f5f0]">Role:</span> Product Designer & Frontend Developer
              </li>
              <li>
                <span className="font-semibold text-[#f5f5f0]">Location:</span> Philippines
              </li>
            </ul>
          </div>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#f5f5f0]">Design philosophy</h2>
              <p className="text-base leading-8 text-[#c7c7c7]">
                I believe great product design is simple, intentional, and beautifully rhythmic. Every choice should support usability while creating an emotional connection with the user.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Human-centered",
                  description:
                    "Every interface is designed for clarity, ease of use, and meaningful experience across devices.",
                },
                {
                  title: "Motion-led",
                  description:
                    "Subtle animation guides attention and adds a premium feel without distracting from content.",
                },
                {
                  title: "Brand forward",
                  description:
                    "Visual systems are crafted to make brands feel distinct, confident, and memorable.",
                },
                {
                  title: "Modern execution",
                  description:
                    "Clean layouts, strong typography, and bold color make experiences feel premium and polished.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[24px] border border-white/10 bg-[#111111]/80 p-6">
                  <h3 className="text-lg font-semibold text-[#f5f5f0]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#c7c7c7]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
            <div>
              <h2 className="text-3xl font-semibold text-[#f5f5f0]">Creative process</h2>
              <p className="mt-4 text-base leading-8 text-[#c7c7c7]">
                I combine research, strategy, and design systems to build experiences that feel effortless, look refined, and perform beautifully.
              </p>
            </div>
            <div className="space-y-5">
              {[
                {
                  step: "Discover",
                  detail: "Understand product goals, audience needs, and brand momentum through research and conversation.",
                },
                {
                  step: "Design",
                  detail: "Shape strategic interfaces, motion, and layouts that communicate clearly and delight users.",
                },
                {
                  step: "Deliver",
                  detail: "Refine every interaction, hand off polished assets, and support quality execution with attention to detail.",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-[24px] border border-white/10 bg-[#111111]/80 p-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#fb8c00]">{item.step}</p>
                  <p className="mt-3 text-sm leading-7 text-[#c7c7c7]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[32px] border border-white/10 bg-[#171717]/85 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#fb8c00]">Drive results</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f5f5f0]">I help teams elevate their digital presence with thoughtful design systems.</h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#fb8c00] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] transition hover:bg-[#ff9d40]"
            >
              Let’s connect
            </Link>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
