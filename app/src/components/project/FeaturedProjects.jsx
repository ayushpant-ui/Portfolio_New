"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import projects from "@/src/data/projects";
import ProjectCard from "./ProjectCard";

const filters = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
];

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background Glow */}

      {/* <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" /> */}

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-(--accent)/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
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
            duration: .6,
          }}
          className="text-center"
        >
          <p className="mb-3 uppercase tracking-[6px] text-(--accent)">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My Recent Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A collection of responsive, scalable and modern web
            applications that showcase my frontend and backend
            development skills.
          </p>
        </motion.div>

        {/* Filter Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2 transition duration-300

                ${
                  activeFilter === filter
                    ? "border-(--accent) bg-(--accent) text-black"
                    : "border-white/10 bg-white/5 text-gray-300 hover:border-(--accent) hover:text-(--accent)"
                }

              `}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Grid */}

        <motion.div
          layout
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}
        </motion.div>

      </div>
    </section>
  );
}