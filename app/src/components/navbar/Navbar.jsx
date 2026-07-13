"use client";

import { useState } from "react";
import {Link} from "react-scroll";
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      // initial={{ y: -80 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 0.5 }}
      className="fixed overflow-x-hidden top-0 inset-x-0 z-50 w-full border-b border-white/10 bg-(--accent) backdrop-blur-lg"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <motion.h1
          whileHover={{ y:-3}}
          className="text-3xl font-bold text-black hover:cursor-pointer hover:text-white hover:font-bold"
        >
          <Link to='home'
          smooth={true}
          duration={700}
          >
          Ayush
          </Link>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:items-center md:gap-8 md:flex">
            {navItems.map((item) => (
            <li key={item}>

              <Link
                to={item}
                spy={true}
                smooth={true}
                duration={700}
                offset={-80}
                activeClass="text-(--accent)"
                className="cursor-pointer capitalize text-black transition hover:text-white"
              >
                {item}
              </Link>

            </li>
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
              {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                duration={700}
                offset={-80}
                activeClass="text-(--accent)"
                className="cursor-pointer capitalize text-black transition hover:text-white"
              >
                {item}
              </Link>
            </li>
          ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}