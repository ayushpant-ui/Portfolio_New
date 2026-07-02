"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaGithub,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

import projects from "@/src/data/projects";

export default function ProjectDetails({ params }) {
  const project = projects.find(
    (item) => item.slug === params.slug
  );

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Background */}

      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-[#00FF7F]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        {/* Back */}

        <Link
          href="/projects"
          className="mb-12 inline-flex items-center gap-2 text-[#00FF7F] hover:underline"
        >
          <FaArrowLeft />

          Back to Projects
        </Link>

        {/* Hero */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-[450px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>

        {/* Title */}

        <motion.div
          initial={{
            opacity:0,
            y:40,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          transition={{
            delay:.2,
          }}
          className="mt-12"
        >

          <h1 className="text-5xl font-bold">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {project.description}
          </p>

        </motion.div>

        {/* Tech */}

        <div className="mt-8 flex flex-wrap gap-3">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="rounded-full border border-[#00FF7F]/40 bg-[#00FF7F]/10 px-4 py-2 text-[#00FF7F]"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-5">

          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 transition hover:border-[#00FF7F] hover:text-[#00FF7F]"
          >
            <FaGithub />

            GitHub
          </Link>

          <Link
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-[#00FF7F] px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Live Demo

            <HiOutlineExternalLink />
          </Link>

        </div>

        {/* Overview */}

        <motion.section
          initial={{
            opacity:0,
            y:30,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          className="mt-24"
        >

          <h2 className="mb-6 text-3xl font-bold">
            Project Overview
          </h2>

          <p className="max-w-4xl leading-8 text-gray-400">

            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloremque temporibus
            praesentium molestiae, eaque accusantium
            autem exercitationem quisquam architecto
            omnis deserunt.

          </p>

        </motion.section>

        {/* Features */}

        <motion.section
          initial={{
            opacity:0,
            y:30,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          className="mt-24"
        >

          <h2 className="mb-8 text-3xl font-bold">
            Features
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {[
              "Responsive Design",
              "Authentication",
              "Dark Mode",
              "Reusable Components",
              "REST API",
              "Animations",
            ].map((feature) => (

              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >

                <FaCheckCircle
                  className="text-[#00FF7F]"
                />

                {feature}

              </div>

            ))}

          </div>

        </motion.section>

        {/* Challenges */}

        <motion.section
          initial={{
            opacity:0,
            y:30,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          className="mt-24"
        >

          <h2 className="mb-6 text-3xl font-bold">
            Challenges
          </h2>

          <p className="max-w-4xl leading-8 text-gray-400">

            Describe the biggest challenges you faced
            while building this project and how you
            solved them.

          </p>

        </motion.section>

        {/* Learnings */}

        <motion.section
          initial={{
            opacity:0,
            y:30,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          className="mt-24"
        >

          <h2 className="mb-6 text-3xl font-bold">
            What I Learned
          </h2>

          <p className="max-w-4xl leading-8 text-gray-400">

            Mention what new concepts, frameworks,
            or best practices you learned while
            developing this project.

          </p>

        </motion.section>

      </div>
    </main>
  );
}