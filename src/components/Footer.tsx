import { profile } from "@/data/profile";
import CvDownload from "@/components/CvDownload";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2e35] bg-[#121417]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-8">
        <p className="text-sm text-[#a8adb6]">
          {profile.name} · {profile.locationLine}
        </p>
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            <li>
              <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.contacts.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={profile.contacts.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${profile.contacts.phone}`}>Call</a>
            </li>
            <li>
              <CvDownload />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
