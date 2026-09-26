# Richardson Dughan — Personal Site

A React + TypeScript + Tailwind CSS rebuild of the personal brand / conversion
site, split into reusable components with all copy and links centralized in
`src/data/content.ts`.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

- `src/data/content.ts` — every link (WhatsApp, email, socials, the Almanac
  channel) and all section copy lives here. Update contact details in one
  place and they propagate through the whole site.
- `src/components/` — one component per section (Nav, Hero, ProofStrip,
  CapabilitySection, ProjectSection, KaizenSection, CaseStudy,
  CommunicationSection, SpeakingSection, WritingSection, ExperienceSection,
  AboutSection, BookingSection, CTASection, Footer).
- `src/assets/images/` — portrait and speaking photos, imported directly so
  Vite hashes and optimizes them at build time.
- `src/index.css` — design tokens (colors, type) plus the section-level CSS.
  Tailwind is wired in for utility classes; most layout uses the hand-tuned
  classes ported from the original static build.

## Updating contact details

Open `src/data/content.ts` and edit the `links` object at the top — the
WhatsApp number, email, and social URLs all flow from there into every CTA
on the site.

## Deploying

This is a standard Vite React app. `npm run build` outputs a static `dist/`
folder you can deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Note on this environment

This project was assembled in a sandboxed environment without registry
access, so the build could not be run end-to-end here. Run `npm install`
in your own environment to pull dependencies and verify the build.
