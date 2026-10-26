// Drawn SVG flags (not emoji), kept small and simple so they stay
// legible at pill size on both mobile and desktop.
export function EthiopiaFlag({ label = "Ethiopia" }: { label?: string }) {
  return (
    <svg width="22" height="15" viewBox="0 0 60 40" role="img" aria-label={label} aria-hidden={false} className="shrink-0 rounded-[2px]">
      <rect width="60" height="13.33" fill="#078930" />
      <rect y="13.33" width="60" height="13.33" fill="#fcdd09" />
      <rect y="26.66" width="60" height="13.34" fill="#da121a" />
      <circle cx="30" cy="20" r="8" fill="#0f47af" />
      <circle cx="30" cy="20" r="4.5" fill="#fcdd09" />
    </svg>
  );
}

export function UkFlag({ label = "United Kingdom" }: { label?: string }) {
  return (
    <svg width="22" height="15" viewBox="0 0 60 40" role="img" aria-label={label} aria-hidden={false} className="shrink-0 rounded-[2px]">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#ffffff" strokeWidth="8" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#c8102e" strokeWidth="3" />
      <path d="M30 0 V40 M0 20 H60" stroke="#ffffff" strokeWidth="13" />
      <path d="M30 0 V40 M0 20 H60" stroke="#c8102e" strokeWidth="8" />
    </svg>
  );
}
