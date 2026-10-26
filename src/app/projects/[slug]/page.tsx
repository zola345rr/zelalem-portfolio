import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/profile";

// No generateStaticParams: the project list is currently empty, and
// Next.js 16 with Cache Components requires at least one static param.
// This route is therefore dynamic; unknown slugs render not-found.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found | Zelalem Addisu" };
  return {
    title: `${project.title} | Zelalem Addisu`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-8 sm:py-12">
      <p className="text-sm text-[#3b82f6]">{project.category} · {project.status}</p>
      <h1 className="mt-3 text-[28px] font-semibold tracking-tight sm:text-3xl">{project.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-[#a8adb6]">{project.summary}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full border border-[#2a2e35] px-3 py-1 text-sm text-[#a8adb6]">
            {tag}
          </li>
        ))}
      </ul>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Problem &amp; objectives</h2>
        <p className="mt-3 leading-relaxed text-[#a8adb6]">{project.problem}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Approach &amp; implementation</h2>
        <p className="mt-3 leading-relaxed text-[#a8adb6]">{project.approach}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Results</h2>
        <p className="mt-3 leading-relaxed text-[#a8adb6]">{project.results}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Limitations</h2>
        <p className="mt-3 leading-relaxed text-[#a8adb6]">{project.limitations}</p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-md bg-[#3b82f6] px-4 py-2.5 font-medium text-white">
            GitHub repository
          </a>
        ) : null}
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="rounded-md border border-[#2a2e35] px-4 py-2.5 font-medium">
            Live demo
          </a>
        ) : null}
        <Link href="/projects" className="rounded-md border border-[#2a2e35] px-4 py-2.5 font-medium">
          All projects
        </Link>
      </div>
    </div>
  );
}
