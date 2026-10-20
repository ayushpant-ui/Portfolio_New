"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import projects from "@/src/data/projects";
import ProjectCard from "./ProjectCard";

// Built from the data, so a filter with no projects never appears
const filters = ["All", ...new Set(projects.map((p) => p.category))];

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] px-6 py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-(--accent)/15 blur-[140px] transition-colors duration-500" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-(--accent)/10 blur-[140px] transition-colors duration-500" />

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
            Portfolio
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            My Recent{" "}
            <span className="bg-linear-to-r from-(--accent) to-white bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A collection of responsive, scalable and modern web applications
            that showcase my frontend and backend development skills.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                activeFilter === filter
                  ? "border-(--accent) bg-(--accent) text-[#050816]"
                  : "border-white/10 bg-white/5 text-gray-300 hover:border-(--accent) hover:text-(--accent)"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}