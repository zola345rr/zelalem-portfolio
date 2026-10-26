"use client";

import { Download } from "lucide-react";
import { cvHeadline, profile, projectAreas } from "@/data/profile";

function cvHtml(): string {
  const skills = profile.skills
    .map((g) => `<h3>${g.title}</h3><p>${g.items.join(" · ")}</p>`)
    .join("");
  const areas = projectAreas
    .map((a) => `<div class="area"><h3>${a.title}</h3><p>${a.summary}</p></div>`)
    .join("");
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Zelalem Addisu — CV</title><style>
body{margin:0;background:#e5e7eb;color:#111827;font-family:Arial,Helvetica,sans-serif}
.page{max-width:210mm;margin:0 auto;background:#fff;padding:14mm 15mm;box-sizing:border-box}
h1{margin:0;font-size:26px;color:#0f2a5c}h2{margin:16px 0 6px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#2563eb;border-bottom:1px solid #d1d5db;padding-bottom:4px}
h3{margin:8px 0 2px;font-size:13px}p{margin:0 0 6px;font-size:13px;line-height:1.45}
.headline{font-size:14px;color:#2563eb;line-height:1.4}.contact{font-size:12px;color:#4b5563;overflow-wrap:anywhere}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.area{background:#f3f4f6;padding:8px 10px;border-radius:6px}
.banner{margin-top:14px;background:#0f2a5c;color:#fff;padding:10px 12px;border-radius:6px;font-size:13px}
@media(max-width:600px){.page{padding:18px}.grid{grid-template-columns:1fr}body{font-size:15px}}
@page{size:A4;margin:12mm}@media print{body{background:#fff}.page{padding:0;max-width:none}h2{font-size:11px}h3,p{font-size:10.5px}.headline{font-size:12px}}
</style></head><body><main class="page">
<h1>Zelalem Addisu</h1><p class="headline">${cvHeadline}</p>
<p class="contact">Country: Ethiopia · Residence: United Kingdom · Remote · International<br>Phone: ${profile.contacts.phone} · LinkedIn: ${profile.contacts.linkedin} · Instagram: ${profile.contacts.instagramHandle} · WhatsApp: ${profile.contacts.phone}</p>
<h2>Profile</h2><p>${profile.introduction} I check every response, label, fact and ranking before delivery.</p>
<h2>Experience</h2><p><strong>AI Data Trainer and Data Engineering Intern — Eyoha</strong><br>Current work: ${profile.currentWork}.</p>
<h2>Project work</h2><div class="grid">${areas}</div>
<h2>Skills</h2>${skills}
<h2>Education</h2><p><strong>${profile.education.qualification} — ${profile.education.institution}</strong><br>${profile.education.years} · GPA ${profile.education.gpa}</p>
<div class="banner">Available for remote work in data engineering, AI data training and LLM evaluation — for one-off projects or ongoing work.</div>
</main></body></html>`;
}

export default function CvDownload({ className = "" }: { className?: string }) {
  const download = () => {
    const blob = new Blob([cvHtml()], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Zelalem_Addisu_CV_A4.html";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };
  return (
    <button
      type="button"
      onClick={download}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#3b82f6] px-4 py-2.5 font-medium text-white transition-colors hover:bg-[#2563eb] sm:w-auto ${className}`}
    >
      <Download size={18} aria-hidden="true" /> Download CV
    </button>
  );
}
