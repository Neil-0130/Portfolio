"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projectList = [
  {
    title: "Nexa Studio",
    subtitle: "Luxury digital experience",
    description:
      "A polished brand identity and website concept for a creative studio, featuring textured dark surfaces, elegant motion, and strong visual contrast.",
    role: "Product Design, Motion, UI Strategy",
  },
  {
    title: "Orbit Platform",
    subtitle: "Enterprise dashboard UX",
    description:
      "Designed a streamlined web platform with clear hierarchy, premium data layouts, and focused interactions for enterprise users.",
    role: "UX Design, Visual Direction, Interaction Design",
  },
  {
    title: "Aero Commerce",
    subtitle: "Modern ecommerce flow",
    description:
      "Built a conversion-focused ecommerce experience with refined product storytelling and a seamless checkout journey.",
    role: "UI/UX, Branding, Frontend polish",
  },
  {
    title: "Vanta Launch",
    subtitle: "Campaign landing page",
    description:
      "Created a premium launch page with attention-grabbing motion, dynamic content sections, and elegant visual pacing.",
    role: "Design Systems, Motion, UX Copy",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        className="mx-auto max-w-6xl"
      >
        <header className="mb-10 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[#fb8c00]">Projects</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#f5f5f0] sm:text-5xl">
            Work designed for clarity, motion, and premium digital presence.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#c7c7c7]">
            Each project is crafted with strategic content, polished visuals, and interactions that feel intentional. These case studies showcase premium UX design for modern brands.
          </p>
        </header>

        <div className="grid gap-6">
          {projectList.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.08 } }}
              className="rounded-[32px] border border-white/10 bg-[#171717]/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.22)]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#fb8c00]">{project.subtitle}</p>
                  <h2 className="mt-3 text-3xl font-semibold text-[#f5f5f0]">{project.title}</h2>
                </div>
                <p className="rounded-full border border-white/10 bg-[#ffffff]/5 px-4 py-2 text-sm text-[#d3d3d3]">
                  {project.role}
                </p>
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-[#c7c7c7]">{project.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-[#fb8c00]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#fb8c00]">
                  Premium motion
                </span>
                <span className="rounded-full bg-[#ffffff]/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#d3d3d3]">
                  Refined interface
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <section className="mt-12 flex flex-col gap-5 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#fb8c00]">Next step</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f5f5f0]">Want a brand experience that feels premium and memorable?</h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#fb8c00] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] transition hover:bg-[#ff9d40]"
          >
            Start a project
          </Link>
        </section>
      </motion.div>
    </main>
  );
}
