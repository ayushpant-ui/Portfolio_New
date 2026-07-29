"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend/Backend Development",
    description:
      "Responsive websites using React, Next.js and Tailwind CSS.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    description:
      "Modern and user-friendly interfaces designed in Figma.",
  },
  {
    icon: <FaLaptopCode />,
    title: "React & Next.js",
    description:
      "Reusable components with clean and scalable architecture.",
  },
  {
    icon: <FaRocket />,
    title: "Performance",
    description:
      "Fast loading websites optimized for SEO and Core Web Vitals.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#050816] overflow-x-hidden py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="text-(--accent) uppercase tracking-[6px]">
            Services
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            What I Can Do
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            I create beautiful, responsive and high-performance
            websites with modern technologies.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
            >
              {/* Glow */}

              <div className="absolute inset-0 bg-[#00FF7F]/0 transition-all duration-500 group-hover:bg-(--accent)/10" />

              <div className="relative">

                <div className="mb-6 text-5xl text-(--accent)">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

                <button
                  className="mt-8 text-(--accent) transition group-hover:translate-x-2"
                >
                  Learn More →
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}