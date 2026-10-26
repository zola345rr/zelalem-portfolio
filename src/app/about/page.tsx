import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Workflow from "@/components/Workflow";
import { EthiopiaFlag, UkFlag } from "@/components/Flags";
import { ProjectCategoryIcon, SkillGroupIcon } from "@/components/CategoryIcons";
import { profile, projectAreas } from "@/data/profile";

export const metadata: Metadata = {
  title: "About | Zelalem Addisu",
  description: "Experience, education, and skills of Zelalem Addisu.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl min-w-0 px-5 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-[#a8adb6]">{profile.introduction}</p>
      <dl className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
        <div className="flex items-center gap-2 rounded-lg border border-[#2a2e35] bg-[#1a1d22] px-4 py-3 text-sm">
          <dt className="text-[#a8adb6]">Country:</dt>
          <dd className="flex items-center gap-2"><EthiopiaFlag /> Ethiopia</dd>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-[#2a2e35] bg-[#1a1d22] px-4 py-3 text-sm">
          <dt className="text-[#a8adb6]">Residence:</dt>
          <dd className="flex items-center gap-2"><UkFlag /> United Kingdom</dd>
        </div>
      </dl>
      <p className="mt-4 text-sm text-[#a8adb6]">{profile.locationLine}</p>

      <Workflow />

      <section className="mt-12" aria-labelledby="experience">
        <SectionHeading title="Experience" />
        {profile.experience.map((item) => (
          <article key={item.role} className="min-w-0 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5">
            <h2 className="font-semibold">{item.role}</h2>
            <p className="text-[#a8adb6]">{item.organisation}</p>
            <p className="mt-2 text-sm text-[#a8adb6]">{item.note}</p>
            <p className="mt-3 text-sm text-[#a8adb6]">Current work: {profile.currentWork}</p>
          </article>
        ))}
        <h2 className="mt-8 font-semibold">Focus areas</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-[#a8adb6]">
          {profile.experienceAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <h2 className="mt-8 font-semibold">Project areas</h2>
        <ul className="mt-3 grid gap-4 sm:grid-cols-2">
          {projectAreas.map((area) => (
            <li key={area.title} className="min-w-0 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-4 text-sm leading-relaxed text-[#a8adb6]">
              <div className="mb-2"><ProjectCategoryIcon category={area.category} /></div>
              <span className="font-semibold text-[#f2f1ec]">{area.title}</span> — {area.summary}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="education">
        <SectionHeading title="Education" />
        <article className="min-w-0 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5">
          <h2 className="font-semibold">{profile.education.qualification}</h2>
          <p className="text-[#a8adb6]">{profile.education.institution}</p>
          <p className="mt-2 text-sm text-[#a8adb6]">
            {profile.education.years} · GPA {profile.education.gpa}
          </p>
        </article>
      </section>

      <section className="mt-12" aria-labelledby="skills">
        <SectionHeading title="Skills" />
        <div className="grid gap-5 sm:grid-cols-2">
          {profile.skills.map((group) => (
            <article key={group.title} className={`min-w-0 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5 ${group.wide ? "sm:col-span-2" : ""}`}>
              <h2 className="flex items-center gap-2 font-semibold"><SkillGroupIcon title={group.title} />{group.title}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-[#2a2e35] px-3 py-1 text-sm text-[#a8adb6]">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
