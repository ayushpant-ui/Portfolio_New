"use client";

import { motion } from "framer-motion";
import GPAChart from "@/src/components/GPACharts.jsx";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

const resume = [
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Computer Science",
    year: "2024 - Present (Undergraduate)",
    place: "Far-Western University",
    description:
      "Focusing on system design to build scalable and efficient software systems through hands-on projects.",
  },
  {
    icon: <FaBriefcase />,
    title: "Frontend Developer / Backend Engineer",
    year: "2025 - Present",
    place: "Freelance & Personal Projects",
    description:
      "Building modern responsive websites using React, Next.js, Tailwind CSS, Node.js, Express, NestJS, MySQL and PostgreSQL.",
  },
  {
    icon: <FaCertificate />,
    title: "Web Development",
    year: "2025",
    place: "Self Learning (W3Schools & Videos)",
    description: "Completed responsive web development learning.",
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[#050816] px-6 py-24"
    >
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-(--accent)/15 blur-[140px] transition-colors duration-500" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-(--accent)">
            Resume
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Education &amp;{" "}
            <span className="bg-linear-to-r from-(--accent) to-white bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            My educational journey and professional experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-linear-to-b from-(--accent)/60 via-(--accent)/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {resume.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-14 flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Card */}
              <div className="group ml-14 flex-1 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-colors duration-300 hover:border-(--accent)/50 md:ml-0 md:w-[45%] md:flex-none">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-(--accent)/15 text-2xl text-(--accent)">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-(--accent)">
                  {item.year}
                </p>
                <p className="mt-1 text-gray-300">{item.place}</p>
                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>

              {/* Dot */}
              <div className="absolute left-5 top-8 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#050816] bg-(--accent) shadow-[0_0_15px_var(--accent)] md:left-1/2" />
            </motion.div>
          ))}
        </div>

        <GPAChart />
      </div>
    </section>
  );
}