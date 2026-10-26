import { Brain, ChartColumn, ClipboardCheck, Code, Database } from "lucide-react";
import type { ProjectCategory } from "@/data/profile";

// Shared icon mapping, matching the hosted portfolio: one blue Lucide
// icon per skill group / project category. The blue (#3b82f6) is
// explicit so the icons stay visible in both dark and light mode.
const iconClass = "shrink-0 text-[#3b82f6]";

export function SkillGroupIcon({ title }: { title: string }) {
  switch (title) {
    case "Programming & tooling":
      return <Code size={22} className={iconClass} aria-hidden="true" />;
    case "Data engineering":
      return <Database size={22} className={iconClass} aria-hidden="true" />;
    case "AI & machine learning":
      return <Brain size={22} className={iconClass} aria-hidden="true" />;
    case "Analysis & visualisation":
      return <ChartColumn size={22} className={iconClass} aria-hidden="true" />;
    case "Evaluation & review":
      return <ClipboardCheck size={22} className={iconClass} aria-hidden="true" />;
    default:
      return null;
  }
}

export function ProjectCategoryIcon({ category }: { category: ProjectCategory }) {
  switch (category) {
    case "Data engineering and ETL":
      return <Database size={22} className={iconClass} aria-hidden="true" />;
    case "AI data training and LLM evaluation":
      return <Brain size={22} className={iconClass} aria-hidden="true" />;
    case "Data analysis and visualization":
      return <ChartColumn size={22} className={iconClass} aria-hidden="true" />;
    default:
      return null;
  }
}
