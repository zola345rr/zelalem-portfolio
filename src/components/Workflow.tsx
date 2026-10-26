import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Workflow() {
  return (
    <section aria-labelledby="workflow-heading" className="mt-12">
      <h2 id="workflow-heading" className="text-xl font-semibold tracking-tight sm:text-2xl">How the work flows</h2>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profile.workflow.map((step, index) => (
          <li key={step.step} className="anim-rise lift min-w-0 rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5" style={{ animationDelay: `${index * 0.1}s` }}>
            <p className="flex items-center justify-between gap-2 text-sm font-semibold text-[#3b82f6]">
              Step {index + 1}
              {index < profile.workflow.length - 1 ? (
                <ArrowRight size={16} className="hidden shrink-0 lg:inline" aria-hidden="true" />
              ) : null}
            </p>
            <p className="mt-3 font-semibold">{step.step}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#a8adb6]">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
