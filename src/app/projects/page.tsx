"use client";

import { useState } from "react";
import { projectAreas, projectCategories, profile, type ProjectCategory } from "@/data/profile";
import { ProjectCategoryIcon } from "@/components/CategoryIcons";

type Filter = "All" | ProjectCategory;

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projectAreas : projectAreas.filter((p) => p.category === filter);

  return (
    <div className="mx-auto max-w-5xl min-w-0 px-5 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-[#a8adb6]">
        {profile.projectsIntro}
      </p>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {(["All", ...projectCategories] as Filter[]).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              filter === category
                ? "bg-[#3b82f6] text-white"
                : "border border-[#2a2e35] text-[#a8adb6] hover:text-[#f2f1ec]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {visible.map((area) => (
          <li key={area.title} className="min-w-0 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5 transition-colors hover:border-[#3b82f6]">
            <div className="mb-2"><ProjectCategoryIcon category={area.category} /></div>
            <p className="text-sm text-[#3b82f6]">{area.category}</p>
            <h2 className="mt-2 font-semibold">{area.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#a8adb6]">{area.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {area.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-[#2a2e35] px-2.5 py-0.5 text-xs text-[#a8adb6]">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-8 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5 text-sm text-[#a8adb6]">
        These are descriptive areas of work, not completed case studies: no
        client, date, metric or result is claimed for them. Full case studies
        will appear only when their real details are supplied.
      </p>
    </div>
  );
}
