"use client";

import { motion } from "framer-motion";
import { FaReact, FaFigma, FaCode } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb"

const techStack = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
  {
    name:"NodeJS",
    icon: <TbBrandNodejs/>
  }
];

const stats = [
  {
    value: "2+",
    label: "Projects",
  },
  {
    value: "1+",
    label: "Years Learning",
  },
  {
    value: "100%",
    label: "Responsive",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] overflow-x-hidden px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-(--accent)">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Passionate Full-Stack Developer &
            <span className="text-(--accent)"> UI Designer</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            I'm Ayush Pant, a passionate Full-Stack Developer from Nepal, mastering backend and System Design.
            I enjoy transforming ideas into fast, responsive, and visually
            appealing web applications using modern technologies.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            My focus is writing clean code, creating intuitive user interfaces,
            and continuously improving my skills through real-world projects.
          </p>

          {/* Tech */}

          <div className="mt-10 flex flex-wrap gap-4">

            {techStack.map((tech) => (

              <motion.div
                key={tech.name}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur-md"
              >
                <span className="text-(--accent) text-xl">
                  {tech.icon}
                </span>

                {tech.name}
              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="absolute inset-0 rounded-3xl bg-(--accent)/10 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <div className="rounded-full bg-(--accent)/20 p-4 text-3xl text-(--accent)">
                  <FaCode />
                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-white">
                    Clean & Modern Development
                  </h3>

                  <p className="mt-2 text-gray-400">
                    I build scalable and maintainable applications
                    using React, Next.js, Tailwind CSS, NodeJS, ExpressJS, MySQL, MongoDB, and more.
                  </p>

                </div>

              </div>

            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-5">

              {stats.map((item) => (

                <motion.div
                  key={item.label}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  className="rounded-xl border border-white/10 bg-[#0E1325] p-5 text-center"
                >
                  <h3 className="text-3xl font-bold text-(--accent)">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-gray-400">
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