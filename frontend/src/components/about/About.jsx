"use client";

import { motion } from "framer-motion";
import { FaReact, FaFigma, FaCode } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { SiTypescript, SiExpress, SiMysql, SiNestjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const techStack = [
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "NodeJS", icon: <TbBrandNodejs /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
];

const stats = [
  { value: "4+", label: "Projects" },
  { value: "2+", label: "Years Learning" },
  { value: "100%", label: "Responsive" },
];

const gradientText =
  "box-decoration-clone bg-linear-to-r from-(--accent) to-white bg-clip-text text-transparent";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] px-6 py-24"
    >
      {/* Soft accent glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-(--accent)/15 blur-[140px] transition-colors duration-500" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[6px] text-(--accent)">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Passionate <span className={gradientText}>Backend Engineer</span>{" "}
            &amp; <span className={gradientText}>Frontend Developer</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            I&apos;m Ayush Pant, a passionate Frontend Developer and Backend
            Engineer from Nepal, mastering{" "}
            <span className="font-medium text-(--accent)">
              backend and system design.
            </span>{" "}
            I enjoy transforming ideas into fast, responsive, and visually
            appealing web applications using modern technologies.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            My focus is writing clean code, creating intuitive user interfaces,
            and continuously improving my skills through real-world projects.
          </p>

          {/* Tech */}
          <div className="mt-10 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -4 }}
                className="flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white backdrop-blur-md transition-colors duration-300 hover:border-(--accent)/60 hover:bg-(--accent)/10"
              >
                <span className="text-xl text-(--accent)">{tech.icon}</span>
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-(--accent)/15 blur-3xl transition-colors duration-500" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-10">
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--accent) to-transparent" />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="w-fit shrink-0 rounded-2xl bg-(--accent)/15 p-4 text-3xl text-(--accent)">
                <FaCode />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Clean &amp; Modern Development
                </h3>
                <p className="mt-2 leading-7 text-gray-400">
                  I build scalable and maintainable applications using React,
                  Next.js, Tailwind CSS, NodeJS, ExpressJS, NestJS, MySQL,
                  PostgreSQL and more.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-white/10 bg-[#0A0F24] p-4 text-center transition-colors duration-300 hover:border-(--accent)/50 md:p-5"
                >
                  <h3 className="text-2xl font-bold text-(--accent) md:text-3xl">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 md:text-sm">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}