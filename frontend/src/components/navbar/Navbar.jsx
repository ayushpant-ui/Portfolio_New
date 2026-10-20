"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  "home",
  "about",
  "services",
  "skills",
  "resume",
  "projects",
  "contact",
];

const linkClass =
  "relative cursor-pointer capitalize text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white " +
  "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-(--accent) " +
  "after:transition-all after:duration-300 hover:after:w-full";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
          <Link
            to="home"
            smooth={true}
            duration={700}
            className="cursor-pointer text-3xl font-bold text-white"
          >
            Ayush<span className="text-(--accent)">.</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                duration={700}
                offset={-80}
                activeClass="!text-(--accent) after:!w-full"
                className={linkClass}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="cursor-pointer text-white transition-colors hover:text-(--accent) md:hidden"
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
            className="overflow-hidden border-t border-white/10 bg-[#050816]/90 md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-80}
                    activeClass="!text-(--accent) after:!w-full"
                    onClick={() => setOpen(false)}
                    className={linkClass}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}