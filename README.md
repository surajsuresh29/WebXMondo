# [Agency Name] — Marketing Website

A production-ready static marketing website built with [Astro](https://astro.build). Six-page site covering home, services, work (with case studies), about, contact, and a custom 404.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy the env example and fill in your Formspree ID
cp .env.example .env
# Edit .env and set PUBLIC_FORMSPREE_ID=your_id_here

# 3. Start the dev server
npm run dev
# Or run in background mode:
# npx astro dev --background
# (manage with npx astro dev status / logs / stop)
# Open http://localhost:4321
```

---

## Building for production

```bash
npm run build
# Output goes to /dist
# Preview locally:
npm run preview
```

---

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `PUBLIC_FORMSPREE_ID` | Yes (for form) | Your Formspree endpoint ID, found at [formspree.io](https://formspree.io). In dev, the form will show a success state without submitting if this is unset. |

---

## Adding a case study

1. Create a new `.md` file in `src/content/work/`.
2. Use this frontmatter template:

```md
---
title: "Project Title"
client: "Client Name"
tagline: "One sentence — what changed for them."
services: ["Brand Identity", "Web Development"]
problem: "≤120 words describing the problem."
approach: "≤120 words describing your approach."
outcome: "≤120 words describing measurable results."
coverSrc: "/images/your-cover.jpg"   # optional — 3:2 ratio works best
coverAlt: "Descriptive alt text for the cover image"
order: 4   # controls sort order and prev/next links
---
```

3. Place any cover image in `public/images/`.
4. The case study will appear automatically in `/work` and `/work/your-slug`.

---

## Project structure

```
src/
├── components/       # Reusable Astro components
│   ├── Dot.astro       — Brand orange dot motif
│   ├── Button.astro    — Primary / secondary button
│   ├── Header.astro    — Sticky nav + mobile menu
│   ├── Footer.astro    — Footer
│   ├── Seo.astro       — Title, meta, OG, JSON-LD
│   ├── ServiceRow.astro — Hairline service row
│   ├── ProjectCard.astro — Work grid card
│   ├── TeamMember.astro — About page bio
│   ├── ProcessStep.astro — About page process step
│   └── ContactForm.astro — Full contact form
├── content.config.ts — Content collection schema
├── content/
│   └── work/           — Case study markdown files
├── layouts/
│   ├── Base.astro      — Root HTML shell
│   └── CaseStudy.astro — Case study chrome + prev/next
├── pages/              — One file per route
├── scripts/
│   └── reveal.js       — IntersectionObserver utility (reference copy)
└── styles/
    └── global.css      — All design tokens + global styles
```

---

## Design system

Colour tokens, typography, and motion are defined in `src/styles/global.css` as CSS custom properties on `:root`. Dark mode is handled automatically via `@media (prefers-color-scheme: dark)`.

**Never use orange for body text on light backgrounds.** The `--color-accent` orange is reserved for the `<Dot />` component, focus rings, and text inside dark sections only.

---

## Deployment

### Netlify
Push to your connected repo — `netlify.toml` handles the build command and publish directory automatically.

### Vercel
```bash
npx vercel --prod
```
Or connect the repo in the Vercel dashboard. Build command: `npm run build`. Output directory: `dist`.

---

## Adding pages

1. Create `src/pages/your-page.astro`.
2. Import and use the `Base` layout.
3. Add a `<Seo />` entry via `Base` props.
4. Add the route to the nav in `Header.astro` and `Footer.astro`.
