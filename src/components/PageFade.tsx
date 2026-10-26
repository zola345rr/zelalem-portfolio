"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Remounts on every route change so the page fade animation
// replays when Home / Projects / About / Contact is clicked.
export default function PageFade({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="anim-page">
      {children}
    </div>
  );
}
