# Blog plan (v0.1, 2026-11-20; revisit around 2026-12-20)

## How it works today
- Write a post as `.md` in this folder (Markdown, or raw HTML after the frontmatter; see `_TEMPLATE-html.md`).
- `draft: true` → visible only in `npm run dev`. Flip to `false` and push to `main` → GitHub Pages deploys it.
- Images go in `./images/` and are referenced as `./images/name.jpg`. Astro resizes them and serves WebP.
- URLs: `/blog/`, `/blog/<file-name>/`, `/blog/category/<learn|utility|how-to-become>/`, `/blog/tag/<tag>/`, feed at `/blog/rss.xml`.
- Read time, table of contents (3+ sections), prev/next and related posts are automatic. Zero client JS.

## Why Markdown (with an HTML option) and not a CMS or plain .html pages
- Lightest workflow: one file per post, no database, no admin UI, no build plugins.
- The output is already static HTML, so readers get the same weight either way.
- Raw `.html` pages would bypass the layout, SEO tags, RSS and listings, and you'd have to wire each one by hand.
  HTML-in-`.md` keeps all of that.

## Notes vs Blog
- **Notes** (`/notes/`): enterprise architecture writing (agentic AI, RAG, governance). Professional audience.
- **Blog** (`/blog/`): learning logs, utilities, career roadmaps. Broader audience.
- Decide at the revisit: keep both, or merge Notes into the blog as a 4th category ("architecture").

## Open questions for the revisit (around 2026-12-20)
1. Categories: are learn / utility / how-to-become right? Add "architecture" or "tools"?
2. Cadence: target 1 post a week? A series (e.g. "How to become…" × 5 roles)?
3. Homepage: show the latest 3 blog posts on the home page?
4. Pagination: needed after ~12 posts (Astro `paginate()`; no JS).
5. Search: client-side search (Pagefind, static, ~0 KB until used) once there are 20+ posts?
6. Per-post social images (OG) from the cover image.
7. Newsletter: RSS only for now; add Buttondown/Substack email later if readers ask.
8. Comments: none for now (LinkedIn discussion link); Giscus (GitHub Discussions) is a lightweight option.
