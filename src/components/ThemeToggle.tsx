"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
}

// Default is the current dark theme. On first visit (no stored choice)
// the system preference wins; a stored choice always wins afterwards.
// The inline script in layout.tsx applies the same rule before paint
// so there is no dark-to-light flash on load.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Deferred (not synchronous) so the effect only syncs the external
    // DOM class and the already-applied pre-paint script, not a render.
    const timer = window.setTimeout(() => {
      const stored = window.localStorage.getItem("theme");
      const initial: Theme =
        stored === "light" || stored === "dark"
          ? stored
          : window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark";
      setTheme(initial);
      applyTheme(initial);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "light"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="inline-flex items-center justify-center gap-2 rounded-md border border-[#2a2e35] p-2.5 transition-colors hover:text-[#f2f1ec] active:scale-95"
    >
      {theme === "dark" ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
      <span className="sr-only">{theme === "dark" ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
