import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "@/components/BrandIcons";
import SectionHeading from "@/components/SectionHeading";
import EvaluationVisual from "@/components/EvaluationVisual";
import { EthiopiaFlag, UkFlag } from "@/components/Flags";
import { ProjectCategoryIcon, SkillGroupIcon } from "@/components/CategoryIcons";
import { profile, projectAreas } from "@/data/profile";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl min-w-0 px-5 py-12 sm:py-16">
      <section aria-labelledby="intro-heading">
        <p className="text-sm font-medium tracking-wide text-[#3b82f6]">
          {profile.greeting}
        </p>
        <h1 id="intro-heading" className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {profile.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#a8adb6]">
          {profile.introduction}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <p className="anim-pill-rise inline-flex min-w-0 flex-wrap items-center gap-2 rounded-full border border-[#2a2e35] px-4 py-2 text-sm text-[#a8adb6]" style={{ animationDelay: "0.05s" }}>
            <EthiopiaFlag /> Ethiopia · <UkFlag /> United Kingdom
          </p>
          <p className="anim-pill-rise inline-flex items-center gap-2 rounded-full border border-[#2a2e35] px-4 py-2 text-sm text-[#a8adb6]" style={{ animationDelay: "0.15s" }}>
            Remote · International
          </p>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3 lg:flex lg:flex-wrap">
          <Link
            href="/projects"
            className="anim-btn-blue lift inline-flex items-center justify-center gap-2 rounded-md bg-[#3b82f6] px-4 py-2.5 font-medium text-white transition-colors hover:bg-[#2563eb]"
          >
            View projects <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            className="anim-btn-linkedin lift inline-flex items-center justify-center gap-2 rounded-md bg-[#0a66c2] px-4 py-2.5 font-medium text-white"
            style={{ animationDelay: "0.1s" }}
          >
            <LinkedInIcon size={18} /> LinkedIn
          </a>
          <Link
            href="/about"
            className="anim-btn-teal lift inline-flex items-center justify-center gap-2 rounded-md bg-[#0f766e] px-4 py-2.5 font-medium text-white"
            style={{ animationDelay: "0.2s" }}
          >
            About me
          </Link>
          <a
            href={profile.contacts.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="anim-btn-green lift inline-flex items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 py-2.5 font-medium text-[#052e16]"
            style={{ animationDelay: "0.3s" }}
          >
            <WhatsAppIcon size={18} /> WhatsApp
          </a>
        </div>
      </section>

      <EvaluationVisual />

      <section className="anim-rise lift mt-10 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5" aria-label="How reviews are done">
        <p className="font-semibold">{profile.reviewNote}.</p>
        <p className="mt-2 text-sm leading-relaxed text-[#a8adb6]">
          Every response, label, fact and ranking is checked before delivery.
        </p>
      </section>

      <section className="mt-16" aria-labelledby="projects-heading">
        <SectionHeading title="Projects">
          {profile.projectsIntro}
        </SectionHeading>
        <ul className="grid gap-5 sm:grid-cols-2">
          {projectAreas.map((area, index) => (
            <li key={area.title} className="anim-rise lift min-w-0 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5 transition-colors hover:border-[#3b82f6]" style={{ animationDelay: `${index * 0.08}s` }}>
              <div className="mb-2"><ProjectCategoryIcon category={area.category} /></div>
              <p className="text-sm text-[#3b82f6]">{area.category}</p>
              <h3 className="mt-2 font-semibold">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a8adb6]">{area.summary}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[#a8adb6]">
          These cards describe what each type of work involves in practice. No
          client, date, metric or result is claimed for them. See the{" "}
          <Link href="/projects" className="text-[#f2f1ec] underline">
            Projects page
          </Link>{" "}
          to filter them by category.
        </p>
      </section>

      <section className="mt-16" aria-labelledby="skills-heading">
        <SectionHeading title="Skills">
          Tools Zelalem works with, grouped by area, plus the evaluation and
          review work behind the projects. No proficiency level is claimed for
          individual tools.
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2">
          {profile.skills.map((group, index) => (
            <article key={group.title} className={`anim-rise lift min-w-0 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5 ${group.wide ? "sm:col-span-2" : ""}`} style={{ animationDelay: `${index * 0.08}s` }}>
              <h3 className="flex items-center gap-2 font-semibold"><SkillGroupIcon title={group.title} />{group.title}</h3>
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

      <section className="mt-16" aria-labelledby="experience-heading">
        <SectionHeading title="Experience & education" />
        <div className="grid gap-5 sm:grid-cols-2">
          <article className="anim-rise lift min-w-0 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5">
            <h3 className="font-semibold">Experience</h3>
            {profile.experience.map((item) => (
              <div key={item.role} className="mt-3">
                <p>{item.role}</p>
                <p className="text-[#a8adb6]">{item.organisation}</p>
                <p className="mt-2 text-sm text-[#a8adb6]">{item.note}</p>
              </div>
            ))}
            <p className="mt-4 text-sm text-[#a8adb6]">
              Current work: {profile.currentWork}
            </p>
            <h4 className="mt-5 font-medium">Focus areas</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#a8adb6]">
              {profile.experienceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </article>
          <article className="anim-rise lift min-w-0 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5">
            <h3 className="font-semibold">Education</h3>
            <p className="mt-3">{profile.education.qualification}</p>
            <p className="text-[#a8adb6]">{profile.education.institution}</p>
            <p className="mt-2 text-sm text-[#a8adb6]">
              {profile.education.years} · GPA {profile.education.gpa}
            </p>
          </article>
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-6" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-[#a8adb6]">{profile.contactIntro}</p>
        <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
          <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer" className="anim-btn-linkedin lift inline-flex items-center justify-center gap-2 rounded-md bg-[#0a66c2] px-4 py-2.5 font-medium text-white">
            <LinkedInIcon size={18} /> LinkedIn
          </a>
          <a href={`tel:${profile.contacts.phone}`} className="anim-rise lift inline-flex items-center justify-center gap-2 rounded-md border border-[#2a2e35] px-4 py-2.5 font-medium">
            <Phone size={18} aria-hidden="true" /> Call
          </a>
          <a href={profile.contacts.whatsapp} target="_blank" rel="noreferrer" className="anim-btn-green lift inline-flex items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 py-2.5 font-medium text-[#052e16]">
            <WhatsAppIcon size={18} /> Message me on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
