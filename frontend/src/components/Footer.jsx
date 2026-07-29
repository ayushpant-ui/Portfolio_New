"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { HiArrowUp } from "react-icons/hi";

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/ayushpant-ui",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/feed/",
  },
  {
    icon: <SiFiverr />,
    href: "https://fiverr.com/yourusername",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:ayushpant2073@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816] ">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00FF7F]/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-16"
      >
        <div className="flex flex-col items-center text-center">

          <h2 className="text-3xl font-bold text-white">
            Ayush <span className="text-(--accent)">Pant</span>
          </h2>

          <p className="mt-4 max-w-xl text-gray-400">
            Creating beautiful, responsive and high-performance
            web applications using React, Next.js, NodeJS/Express and modern UI.
          </p>

          {/* Social */}

          <div className="mt-8 flex gap-6">

            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                }}
                whileTap={{ scale: .9 }}
                className="rounded-full border border-white/10 p-4 text-2xl text-white transition hover:border-(--accent) hover:text-(--accent)"
              >
                {item.icon}
              </motion.a>
            ))}

          </div>

          {/* Divider */}

          <div className="my-10 h-px w-full bg-white/10" />

          <div className="flex w-full flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} Ayush Pant.
              All rights reserved.
            </p>

            <motion.button
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 text-(--accent) cursor-pointer"
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