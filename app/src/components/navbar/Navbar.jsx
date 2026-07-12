"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Services", url: "/services" },
  { label: "Resume", url: "/resume" },
  { label: "Projects", url: "/projects" },
  { label: "Skills", url: "/skills" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      // initial={{ y: -80 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-(--accent) backdrop-blur-lg"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <motion.h1
          whileHover={{ y:-3}}
          className="text-3xl font-bold text-black hover:cursor-pointer hover:text-white hover:font-bold"
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
                className="text-black transition hover:text-[#F5F5F5] hover:font-bold"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="text-black md:hidden"
        >
          {open ? <HiX className='cursor-pointer' size={30} /> : <HiOutlineMenuAlt3 className='cursor-pointer' size={30} />}
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
            className="overflow-hidden bg-(--accent) md:hidden"
          >
            <ul className="flex flex-col gap-6 py-6 text-center">
              {navLinks.map((link) => (
                <motion.li
                  key={link.url}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  whileHover={{y:-3}}
                >
                  <Link
                    href={link.url}
                    onClick={() => setOpen(false)}
                    className="text-lg text-black hover:text-white hover:font-bold"
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