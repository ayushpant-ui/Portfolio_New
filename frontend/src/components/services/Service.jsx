"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaCode, FaPaintBrush, FaLaptopCode, FaRocket } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend/Backend Development",
    description:
      "Responsive websites using React, Next.js and Tailwind CSS, Backend development with Node.js, Express, NestJS and databases like MySQL and PostgreSQL.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    description: "Modern and user-friendly interfaces designed in Figma.",
  },
  {
    icon: <FaLaptopCode />,
    title: "React & Next.js",
    description: "Reusable components with clean and scalable architecture.",
  },
  {
    icon: <FaRocket />,
    title: "Performance",
    description: "Fast loading websites optimized for SEO and Core Web Vitals.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050816] px-6 py-24"
    >
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-(--accent)/15 blur-[140px] transition-colors duration-500" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-(--accent)">
            Services
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            What I Can{" "}
            <span className="bg-linear-to-r from-(--accent) to-white bg-clip-text text-transparent">
              Do
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            I create beautiful, responsive and high-performance websites with
            modern technologies.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors duration-300 hover:border-(--accent)/50"
            >
              {/* Hover glow + top line */}
              <div className="absolute inset-0 bg-(--accent)/0 transition-colors duration-500 group-hover:bg-(--accent)/10" />
              <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-linear-to-r from-transparent via-(--accent) to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative flex flex-1 flex-col">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--accent)/15 text-2xl text-(--accent) transition-all duration-300 group-hover:bg-(--accent) group-hover:text-[#050816]">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-gray-400">
                  {service.description}
                </p>

                <Link
                  to="contact"
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className="mt-8 inline-block w-fit cursor-pointer text-sm font-semibold text-(--accent) transition-transform duration-300 group-hover:translate-x-2"
                >
                  Get in touch →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}