"use client";

import { motion } from "framer-motion";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiMysql, SiPrisma, SiNestjs } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { AiOutlineKubernetes } from "react-icons/ai"

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <RiJavascriptFill />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <RiNextjsFill />, color: "text-white" },
      { name: "Tailwind", icon: <RiTailwindCssFill />, color: "text-sky-400" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
      { name: "NestJS", icon: <SiNestjs />, color: "text-red-500" },
      { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
      { name: "PostgreSQL", icon: <BiLogoPostgresql />, color: "text-sky-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
      { name: "MongoDB", icon: <DiMongodb />, color: "text-green-500" },
      { name: "Prisma", icon: <SiPrisma />, color: "text-cyan-300" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "Figma", icon: <FaFigma />, color: "text-pink-400" },
      { name: "Docker", icon : <FaDocker />, color: "text-blue-500"},
      { name: "Kubernets", icon : <SiKubernetes/>, color : "text-blue-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] px-6 py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-(--accent)/15 blur-[140px] transition-colors duration-500" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-(--accent)">
            Skills
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Technologies I{" "}
            <span className="bg-linear-to-r from-(--accent) to-white bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            These are the technologies I use to design and build modern,
            responsive and scalable web applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mt-16 space-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-6 flex items-center gap-4 text-sm font-semibold uppercase tracking-[3px] text-white/70"
              >
                {category.title}
                <span className="h-px flex-1 bg-linear-to-r from-(--accent)/50 to-transparent" />
              </motion.h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-colors duration-300 hover:border-(--accent)/50 hover:bg-(--accent)/10"
                  >
                    <div
                      className={`text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="mt-4 font-semibold text-white">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}