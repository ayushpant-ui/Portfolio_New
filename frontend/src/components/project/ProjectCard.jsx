"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const MAX_TECH = 5;

export default function ProjectCard({ project }) {
  const hasDemo = project.demo && project.demo !== "#";
  const hasGithub = project.github && project.github !== "#";
  const visibleTech = project.technologies.slice(0, MAX_TECH);
  const extra = project.technologies.length - MAX_TECH;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-colors duration-300 hover:border-(--accent)/60"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#050816]/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>

        <p className="mt-3 line-clamp-3 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-(--accent)/40 bg-(--accent)/10 px-3 py-1 text-xs text-(--accent)"
            >
              {tech}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
              +{extra}
            </span>
          )}
        </div>

        {/* Pushes the buttons to the bottom so all cards line up */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-3 pt-6">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition-colors hover:border-(--accent) hover:text-(--accent)"
              >
                <FaGithub />
                GitHub
              </a>
            )}

            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-(--accent) px-4 py-2 text-sm font-semibold text-[#050816] transition hover:scale-105"
              >
                Live Demo
                <HiOutlineExternalLink />
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-5 inline-block text-sm font-medium text-(--accent) transition-transform duration-300 hover:translate-x-1"
          >
            View Details →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}