import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact | Zelalem Addisu",
  description: "Contact Zelalem Addisu for remote data and AI opportunities.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl min-w-0 px-5 py-8 sm:py-12">
      <h1 className="text-[28px] font-semibold tracking-tight sm:text-3xl">Contact</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-[#a8adb6]">
        I&apos;m from Ethiopia and live in the United Kingdom. {profile.contactIntro}
      </p>
      <p className="mt-4 max-w-2xl text-sm text-[#a8adb6]">
        No contact form is included here — the links below are the direct contact options.
      </p>
      <ul className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
        <li>
          <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0a66c2] px-4 py-2.5 font-medium text-white sm:w-auto">
            <LinkedInIcon size={18} /> LinkedIn
          </a>
        </li>
        <li>
          <a href={`tel:${profile.contacts.phone}`} className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#2a2e35] px-4 py-2.5 font-medium sm:w-auto">
            <Phone size={18} aria-hidden="true" /> Call
          </a>
        </li>
        <li>
          <a href={profile.contacts.whatsapp} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 py-2.5 font-medium text-[#052e16] sm:w-auto">
            <WhatsAppIcon size={18} /> Message me on WhatsApp
          </a>
        </li>
        <li>
          <a href={profile.contacts.instagram} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#2a2e35] px-4 py-2.5 font-medium sm:w-auto">
            <InstagramIcon size={18} /> Instagram {profile.contacts.instagramHandle}
          </a>
        </li>
      </ul>
      <p className="mt-8 text-sm text-[#a8adb6]">
        {profile.contactLocationLine}. No email is listed on this site.
      </p>
    </div>
  );
}
