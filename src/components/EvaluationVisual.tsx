import { Check, TriangleAlert } from "lucide-react";

// Portfolio-based animated panel (CSS only, no video files): data
// quality in action. No scores, clients or results are claimed.
const criteria = ["Accuracy", "Relevance", "Instructions"];

export default function EvaluationVisual() {
  return (
    <section
      aria-label="Data quality in action"
      className="anim-rise mt-8 overflow-hidden rounded-lg border border-[#2a2e35] bg-[#1a1d22] p-5 sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold tracking-widest text-[#3b82f6]">DATA QUALITY</p>
        <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#a8adb6]">
          <span className="anim-dot inline-block h-2 w-2 rounded-full bg-[#3b82f6]" aria-hidden="true" />
          QUALITY CHECK
        </p>
      </div>
      <h2 className="mt-4 text-xl font-semibold leading-snug sm:text-2xl">
        Work samples, checked side by side — then ranked.
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#a8adb6]">
        Two samples of the same work, assessed on accuracy, relevance and
        instruction following, with claims checked against sources.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          {
            rank: "#1 · Ranked first",
            label: "Sample A",
            tone: "border-[#3b82f6]",
            rankClass: "bg-[#2563eb] text-white",
            barClass: "bg-[#3b82f6]",
            checkClass: "text-[#3b82f6]",
            bars: [96, 94, 97],
            tags: [
              { label: "Accurate", tone: "border-[#bbf7d0] bg-[#f0fdf4] text-[#166534]", icon: "check" },
              { label: "On-topic", tone: "border-[#bbf7d0] bg-[#f0fdf4] text-[#166534]", icon: "check" },
            ],
          },
          {
            rank: "#2 · Ranked second",
            label: "Sample B",
            tone: "border-[#2a2e35]",
            rankClass: "bg-[#e5e7eb] text-[#4b5563]",
            barClass: "bg-[#94a3b8]",
            checkClass: "text-[#94a3b8]",
            bars: [54, 62, 48],
            tags: [
              { label: "Claim to verify", tone: "border-[#fde68a] bg-[#fffbeb] text-[#92400e]", icon: "alert" },
              { label: "Misses the brief", tone: "border-[#fde68a] bg-[#fffbeb] text-[#92400e]", icon: "alert" },
            ],
          },
        ].map((response) => (
          <article key={response.label} className={`anim-rise lift min-w-0 rounded-lg border ${response.tone} bg-[#121417] p-4`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">{response.label}</p>
              <p className={`rounded-full px-3 py-1 text-xs font-semibold ${response.rankClass}`}>{response.rank}</p>
            </div>
            <ul className="mt-4 space-y-3">
              {criteria.map((criterion, index) => (
                <li key={criterion} className="flex items-center gap-2 text-sm text-[#a8adb6]">
                  <Check size={16} className={`shrink-0 ${response.checkClass}`} aria-hidden="true" />
                  <span className="w-24 shrink-0 text-[#f2f1ec]">{criterion}</span>
                  <span className="anim-bar-loop-combined block h-2 flex-1 rounded-full bg-[#2a2e35]" style={{ animationDelay: `${index * 0.2}s` }} aria-hidden="true">
                    <span className={`block h-full rounded-full ${response.barClass}`} style={{ width: `${response.bars[index]}%` }} />
                  </span>
                  <span className="shrink-0 text-xs">Checked</span>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {response.tags.map((tag) => (
                <li key={tag.label} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tag.tone}`}>
                  {tag.icon === "check" ? (
                    <Check size={14} aria-hidden="true" />
                  ) : (
                    <TriangleAlert size={14} aria-hidden="true" />
                  )}
                  {tag.label}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {["Fact-checking", "Ranking", "No guessing"].map((tag) => (
          <li key={tag} className="rounded-full border border-[#2a2e35] px-3 py-1 text-xs text-[#a8adb6]">
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}
