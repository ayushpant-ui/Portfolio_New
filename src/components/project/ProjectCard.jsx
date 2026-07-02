"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import { FaGithub } from "react-icons/fa";

import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -10,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#00FF7F]"
    >
      {/* IMAGE */}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}

      <div className="space-y-5 p-6">
        <h2 className="text-2xl font-bold text-white">
          {project.title}
        </h2>

        <p className="text-gray-400">
          {project.description}
        </p>

        {/* TECHNOLOGIES */}

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#00FF7F]/40 bg-[#00FF7F]/10 px-3 py-1 text-sm text-[#00FF7F]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}

        <div className="flex gap-4 pt-3">
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-white transition hover:border-[#00FF7F] hover:text-[#00FF7F]"
          >
            <FaGithub />

            GitHub
          </Link>

          <Link
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 rounded-lg bg-[#00FF7F] px-4 py-2 font-semibold text-black transition hover:scale-105"
          >
            Live Demo

            <HiOutlineExternalLink />
          </Link>
        </div>

        {/* DETAILS */}

        <Link
          href={`/projects/${project.slug}`}
          className="inline-block pt-2 font-medium text-[#00FF7F] hover:underline"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}