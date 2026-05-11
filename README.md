# Rishikesh Kumar — Portfolio

Personal portfolio website for **Rishikesh Kumar**, Python & Django Backend Developer.

Built with: Next.js 16 · Three.js · Framer Motion · Tailwind CSS v4 · TypeScript

---

## Setup

### Prerequisites
- Node.js 20+
- npm

### Install & Run

```bash
npm install
npm run dev        # http://localhost:3000
```

### Build for Production

```bash
npm run build      # generates static /out directory
```

---

## CV File — IMPORTANT

The Download CV button links to `/RishikeshKumarCV.pdf`. You must add this file manually:

1. Export your CV as a PDF
2. Name it exactly **`RishikeshKumarCV.pdf`**
3. Place it at **`/public/RishikeshKumarCV.pdf`**
4. Delete `public/CV_PLACEHOLDER.txt`

The `<a>` tag uses `download="Rishikesh_Kumar_CV.pdf"` so it saves with that name. Works on both GitHub Pages and Vercel.

---

## Contact Form (Formspree)

The contact form uses Formspree. To activate it:

1. Go to https://formspree.io and create a free account
2. Create a new form → copy the form ID
3. Open `components/Contact/index.tsx`
4. Replace `YOUR_FORM_ID` in `FORMSPREE_ENDPOINT` with your actual form ID

```ts
// TODO: Replace with your actual Formspree form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
```

---

## Deployment — GitHub Pages

This project auto-deploys to GitHub Pages via GitHub Actions on every push to `main`.

### One-time Setup

1. Push this repo to `github.com/codebyrishi3075/codebyrishi3075.github.io`
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Push a commit to `main` — the workflow triggers automatically

The site will be live at: `https://codebyrishi3075.github.io`

### Deployment Config (next.config.ts)

```ts
output: 'export'       // static HTML/CSS/JS in /out
trailingSlash: true    // /about → /about/index.html
images: { unoptimized: true }  // required for static export
```

---

## Project Structure

```
/app
  layout.tsx          Root layout (fonts + metadata)
  page.tsx            Main page (imports all sections)
  globals.css         CSS variables + Tailwind theme
/components
  /Navbar             Sticky navbar + mobile drawer
  /Hero               Full-screen hero + Three.js particle cloud
  /About              Bio + info grid + animated stats
  /Skills             Categorized skill grid
  /Projects           Project cards with 3D tilt
  /Experience         Animated vertical timeline
  /Education          Education cards
  /Contact            Contact form (Formspree) + social links
  /Footer             Footer
/lib
  constants.ts        All content data
/public
  RishikeshKumarCV.pdf  ← ADD YOUR CV HERE
/.github/workflows
  deploy.yml          GitHub Pages auto-deploy
```

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| Animation | Framer Motion 12 |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Fonts | Syne (headings) + DM Sans (body) |
| Form | React Hook Form + Formspree |
| Language | TypeScript |

---

© 2026 Rishikesh Kumar
