# yogendrabhardwaj.runs-on.dev

Personal brand site of Yogendra Bhardwaj — AI & Data Solutions Architect.
Static site built with [Astro](https://astro.build), deployed to GitHub Pages by GitHub Actions.

## Run locally

```sh
npm install
npm run dev        # http://localhost:4321 — drafts are visible here
npm run build      # writes static HTML to dist/ (drafts excluded)
npm run preview    # serve dist/ locally
```

## Edit content

| What | Where |
|---|---|
| Profile, metrics, skills, experience, lab, speaking topics | `src/data/profile.ts` |
| Case studies | `src/content/work/*.md` |
| Teaching sessions (one file each) | `src/content/sessions/*.md` — remove `placeholder: true` once real |
| Notes / blog | `src/content/notes/*.md(x)` — set `draft: false` to publish |
| Share image (LinkedIn preview) | `node scripts/og.mjs` regenerates `public/og.png` |

### Add a teaching session

```md
---
institution: Example Institute of Technology
department: Department of Computer Science
topic: Building AI agents with MCP
format: Hands-on lab        # Guest lecture | Workshop | Hands-on lab | Panel | Webinar | Keynote
theme: GenAI & Agents       # GenAI & Agents | Data & Cloud | Careers & Industry
date: 2026-03-14
audience: 80 final-year students
slides: https://…           # optional
testimonial:                # optional
  quote: …
  by: Prof. …, Head of Department
---

Two or three sentences on what you covered and what students took away.
```

## Deploy

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`.
Custom domain: `yogendrabhardwaj.runs-on.dev` (CNAME → `yogendrabhardwaj-tech.github.io`, set at runs-on.dev/manage).
