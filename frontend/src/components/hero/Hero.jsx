"use client";

import profile from "@/public/image/profilepic.png";
import { Link } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const message = encodeURIComponent(
  "Hi Ayush, I visited your portfolio and I'd like to discuss a project."
);

const socials = [
  { label: "GitHub", href: "https://github.com/ayushpant-ui", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/YOUR-USERNAME", Icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/YOUR-USERNAME", Icon: FaInstagram },
];

const primaryBtn =
  "inline-flex items-center justify-center rounded-full bg-(--accent) px-8 py-4 font-bold text-[#050816] " +
  "shadow-[0_0_30px_-5px_var(--accent)] transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_-5px_var(--accent)]";

const outlineBtn =
  "inline-flex cursor-pointer items-center justify-center rounded-full border border-(--accent) px-8 py-4 font-bold " +
  "text-(--accent) transition duration-300 hover:bg-(--accent) hover:text-[#050816] hover:scale-105";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] pt-20 text-white"
    >
      {/* Accent glow */}
      <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-(--accent)/25 blur-[120px] transition-colors duration-500" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center px-6 py-12 text-center">
        {/* Profile */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, y: [0, -10, 0] }}
          transition={{
            duration: 0.8,
            y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-(--accent) opacity-40 blur-2xl transition-colors duration-500" />
          <Image
            src={profile}
            alt="Ayush Pant"
            priority
            className="relative h-56 w-56 rounded-full border-4 border-(--accent) object-cover transition-colors duration-500 md:h-78 md:w-78"
          />
        </motion.div>

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-xl text-gray-300"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-2 text-5xl font-black leading-tight md:text-7xl"
        >
          Ayush{" "}
          <span className="bg-linear-to-r from-(--accent) to-white bg-clip-text text-transparent">
            Pant
          </span>
        </motion.h1>

        {/* Typing (fixed height so the page doesn't jump) */}
        <TypeAnimation
          sequence={[
            "Backend Engineer", 1000,
            "Frontend Developer", 1000,
            "ReactJS Developer", 1000,
            "NextJS Developer", 1000,
            "NodeJS Developer", 1000,
            "NestJS Developer", 1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="mt-6 block min-h-9 text-2xl font-semibold text-(--accent) transition-colors duration-500 md:min-h-12 md:text-4xl"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 max-w-xl text-lg leading-8 text-gray-400"
        >
          I build beautiful, fast and responsive web applications using ReactJS,
          NextJS, NodeJS, Express, NestJS, MySQL and PostgreSQL.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col gap-5 sm:flex-row"
        >
          <a
            href={`https://wa.me/9779766987980?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryBtn}
          >
            Hire Me
          </a>

          <a href="/Ayush-Pant-CV.pdf" download className={outlineBtn}>
            Download CV
          </a>

          <Link to="projects" smooth={true} duration={700} offset={-80} className={outlineBtn}>
            View Projects
          </Link>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex gap-7 text-3xl"
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/80 transition duration-300 hover:scale-125 hover:text-(--accent)"
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}