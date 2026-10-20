"use client";

import { motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { socialLinks } from "@/src/data/socials";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-(--accent)/15 blur-[120px] transition-colors duration-500" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--accent) to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-16"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white">
            Ayush <span className="text-(--accent)">Pant</span>
          </h2>

          <p className="mt-4 max-w-xl text-gray-400">
            Building beautiful, responsive and high-performance web
            applications with React, Next.js, Node.js, NestJS and modern UI.
          </p>

          <div className="mt-8 flex gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full border border-white/10 p-4 text-2xl text-white transition-colors duration-300 hover:border-(--accent) hover:text-(--accent)"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          <div className="my-10 h-px w-full bg-white/10" />

          <div className="flex w-full flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">
            <p>© {new Date().getFullYear()} Ayush Pant. All rights reserved.</p>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              className="flex cursor-pointer items-center gap-2 text-(--accent)"
            >
              Back to Top
              <HiArrowUp />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}