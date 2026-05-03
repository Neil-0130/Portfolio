"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        className="mx-auto max-w-5xl"
      >
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-[#fb8c00]">Contact</p>
            <h1 className="text-4xl font-semibold text-[#f5f5f0] sm:text-5xl">
              Bring your next project to life with elegant design and focused motion.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[#c7c7c7]">
              Whether you need a full portfolio refresh, a landing page, or product interface design, I’m ready to help you shape a premium digital experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-white/10 bg-[#171717]/85 p-8">
              <div className="space-y-5">
                <div>
                  <h2 className="text-2xl font-semibold text-[#f5f5f0]">Let’s talk about your project</h2>
                  <p className="mt-3 text-sm leading-7 text-[#c7c7c7]">
                    Share your goals, timeline, or inspiration, and I’ll respond with a creative approach tailored to your brand.
                  </p>
                </div>
                <div className="space-y-4 text-sm text-[#d3d3d3]">
                  <div>
                    <p className="font-semibold text-[#f5f5f0]">Email</p>
                    <p>jerry.neil.dohinog@example.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#f5f5f0]">Social</p>
                    <a
                      href="https://www.facebook.com/jerry.neil.dohinog"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#fb8c00] transition hover:text-[#ff9d40]"
                    >
                      facebook.com/jerry.neil.dohinog
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <div className="space-y-5">
                <div className="rounded-[24px] bg-[#111111]/80 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#fb8c00]">Voice of the brand</p>
                  <p className="mt-3 text-sm leading-7 text-[#c7c7c7]">
                    I design with intention so every interaction feels confident, refined, and aligned with a premium audience.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-[#c7c7c7]">What I value</p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-[#d3d3d3]">
                      <li>• Clear product direction</li>
                      <li>• High-end digital rhythm</li>
                      <li>• Engaging motion systems</li>
                      <li>• Thoughtful branding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[28px] border border-white/10 bg-[#111111]/80 p-8 text-[#f5f5f0]">
            <h2 className="text-xl font-semibold">Ready to begin?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#c7c7c7]">
              Tell me about your project and the experience you want to create. I’ll respond with a tailored design approach that fits your timeline and brand vision.
            </p>
            <Link
              href="mailto:romeodohinog@gmail.com"
              className="mt-8 inline-flex rounded-full bg-[#fb8c00] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] transition hover:bg-[#ff9d40]"
            >
              Send a message
            </Link>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
