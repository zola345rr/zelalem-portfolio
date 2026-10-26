"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-[#2a2e35] bg-[#121417]">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {profile.name}
        </Link>
        <button
          type="button"
          className="rounded-md p-2 sm:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <div className="hidden items-center gap-6 sm:flex">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[#a8adb6] transition-colors hover:text-[#f2f1ec]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="anim-pulse-blue inline-flex items-center justify-center rounded-md bg-[#3b82f6] px-4 py-2 font-medium text-white transition-colors hover:bg-[#2563eb]"
          >
            Get in touch
          </Link>
        </div>
      </nav>
      {open ? (
        <ul className="space-y-3 border-t border-[#2a2e35] px-5 py-4 sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-[#3b82f6] px-4 py-2 font-medium text-white"
            >
              Get in touch
            </Link>
          </li>
        </ul>
      ) : null}
    </header>
  );
}
