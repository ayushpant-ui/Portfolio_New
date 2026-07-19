"use client";

import { motion } from "framer-motion";
import { DiMongodb } from "react-icons/di"; 
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPython 
} from "react-icons/fa";

import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiJavascriptFill,
} from "react-icons/ri";

import {
  SiTypescript,
  SiExpress,
  SiMysql,
  SiPrisma,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptFill />,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-400",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: 'text-black'
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
    color: "text-white",
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
    color: "text-sky-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "text-gray-300",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-500",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    color: "text-cyan-300",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    color: "text-pink-400",
  },
  {
    name: "MongoDB",
    icon: <DiMongodb />,
    color: 'text-green-900'
  }
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#050816] overflow-x-hidden py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-(--accent)">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            These are the technologies I use to design and build
            modern, responsive and scalable web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition"
            >
              <div
                className={`text-5xl ${skill.color} transition duration-300 group-hover:rotate-12`}
              >
                {skill.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {skill.name}
              </h3>

              <div className="mt-4 h-1 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.05,
                  }}
                  className="h-full rounded-full bg-(--accent)"
                />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
export default Skills