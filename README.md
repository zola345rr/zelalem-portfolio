# Zelalem Addisu — Data & AI Portfolio

Next.js + TypeScript + Tailwind CSS portfolio for Zelalem Addisu, a Computer Science
graduate targeting remote international opportunities in data engineering, AI data
training, and LLM evaluation.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deploy

Deploy as a standard Next.js app, e.g. on Vercel by importing this repository,
or with `npm run build && npm run start` on a Node host.

## Content — edit in one place

All professional content lives in `src/data/profile.ts`:

- Name, headline, introduction, country / residence
- Education: University of Gondar, BSc Computer Science, 2022–2025, GPA 3.4
- Experience: AI Data Trainer and Data Engineering Intern at Eyoha
- Skills, grouped by category (no proficiency level is claimed per tool)
- Contacts: LinkedIn, phone, Instagram, WhatsApp — no email, no platform names
- Footer-only Download CV button: generates a professional, white,
  one-page A4 CV in the browser and downloads it to local storage
  (`Zelalem_Addisu_CV_A4.html`). The CV contains no extra instruction note.
- Projects page shows six descriptive project areas (not invented case studies)

## Still needed — not invented

- **GitHub URL** — no GitHub link is rendered until one is supplied.
- **External CV PDF** — not supplied as a file; the in-site CV download now
  exists instead, so no external CV link is claimed.
- **Eyoha dates and responsibilities** — omitted, not invented.
- **Full project case studies** — `projects` in `src/data/profile.ts` is empty.
  Add real case studies there with title, summary, category, status
  (`in progress` or `planned`), tags, problem, approach, results, and
  limitations. Leave GitHub/demo URLs empty if none exist.
- **Email** — intentionally not listed, per Zelalem's earlier portfolio instruction.
- **Domain / canonical URL** — not set, so no canonical or social-sharing URL
  is claimed in metadata yet.

## Deploy

Ready for GitHub + Vercel: push this repository to GitHub, import it in
Vercel with the default Next.js settings, and deploy. Vercel redeploys
automatically on later pushes.
