import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

import projects from "@/src/data/projects";

const hasLink = (url) => Boolean(url) && url !== "#";

const statusStyles = {
  "In development": "border-amber-400/40 bg-amber-400/10 text-amber-300",
  Completed: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
};

// Pre-builds one page per project
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Ayush Pant`,
    description: project.description,
    openGraph: { images: [project.image] },
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;

  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const details = project.details ?? {};
  const stack = details.stack ?? [
    { label: "Technologies", items: project.technologies },
  ];

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const infoRows = [
    { label: "Category", value: project.category },
    { label: "Role", value: details.role },
    { label: "Status", value: details.status },
    { label: "Timeline", value: details.timeline },
  ].filter((row) => row.value);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-6 pb-24 pt-32 text-white">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-(--accent)/15 blur-[140px] transition-colors duration-500" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-(--accent)/10 blur-[140px] transition-colors duration-500" />

      <div className="relative mx-auto max-w-6xl">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-(--accent)"
        >
          <FaArrowLeft />
          Back to projects
        </Link>

        {/* Header */}
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-(--accent)/40 bg-(--accent)/10 px-3 py-1 text-xs font-medium text-(--accent)">
              {project.category}
            </span>
            {details.status && (
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  statusStyles[details.status] ??
                  "border-white/20 bg-white/5 text-gray-300"
                }`}
              >
                {details.status}
              </span>
            )}
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            <span className="bg-linear-to-r from-(--accent) to-white bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {hasLink(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-(--accent) hover:text-(--accent)"
              >
                <FaGithub />
                View Source
              </a>
            )}
            {hasLink(project.demo) && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-(--accent) px-6 py-3 font-semibold text-[#050816] shadow-[0_0_30px_-8px_var(--accent)] transition hover:scale-105"
              >
                Live Demo
                <HiOutlineExternalLink />
              </a>
            )}
          </div>
        </header>

        {/* Cover image */}
        <div className="relative mt-12 aspect-video overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Body */}
        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {/* Main column */}
          <div className="space-y-14 lg:col-span-2">
            {details.overview && (
              <section>
                <h2 className="text-2xl font-bold">Overview</h2>
                <p className="mt-4 leading-8 text-gray-400">
                  {details.overview}
                </p>
              </section>
            )}

            {details.features?.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold">Key Features</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {details.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors duration-300 hover:border-(--accent)/50"
                    >
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="shrink-0 text-(--accent)" />
                        <h3 className="font-semibold text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {details.screenshots?.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold">Screenshots</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {details.screenshots.map((src, i) => (
                    <div
                      key={src}
                      className="relative aspect-video overflow-hidden rounded-2xl border border-white/10"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {infoRows.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <h2 className="text-lg font-bold">Project Info</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {infoRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-gray-400">{row.label}</dt>
                      <dd className="text-right font-medium text-white">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h2 className="text-lg font-bold">Tech Stack</h2>
              <div className="mt-4 space-y-5">
                {stack.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs uppercase tracking-[3px] text-gray-500">
                      {group.label}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-(--accent)/40 bg-(--accent)/10 px-3 py-1 text-xs text-(--accent)"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Prev / Next */}
        {projects.length > 1 && (
          <nav className="mt-20 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-(--accent)/50"
            >
              <p className="text-xs uppercase tracking-[3px] text-gray-500">
                ← Previous
              </p>
              <p className="mt-2 font-semibold text-white transition-colors group-hover:text-(--accent)">
                {prev.title}
              </p>
            </Link>

            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-right transition-colors duration-300 hover:border-(--accent)/50"
            >
              <p className="text-xs uppercase tracking-[3px] text-gray-500">
                Next →
              </p>
              <p className="mt-2 font-semibold text-white transition-colors group-hover:text-(--accent)">
                {next.title}
              </p>
            </Link>
          </nav>
        )}
      </div>
    </main>
  );
}