"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Services", url: "#services" },
  { label: "Resume", url: "#resume" },
  { label: "Projects", url: "#projects" },
  { label: "Skills", url: "#skills" },
  { label: "Testimonials", url: "#testimonials" },
  { label: "Contact", url: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#715de0] backdrop-blur-lg"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold text-[#000066] hover:cursor-pointer"
        >
          <Link href='/'>
          Ayush
          </Link>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.li
              key={link.url}
              whileHover={{ y: -3 }}
            >
              <Link
                href={link.url}
                className="text-[#000066] transition hover:text-[#000066] hover:font-bold"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden bg-neutral-900 md:hidden"
          >
            <ul className="flex flex-col gap-6 py-6 text-center">
              {navLinks.map((link) => (
                <motion.li
                  key={link.url}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                >
                  <Link
                    href={link.url}
                    onClick={() => setOpen(false)}
                    className="text-lg text-white hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}