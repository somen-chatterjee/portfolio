# Somen Chatterjee — Portfolio

Personal portfolio site. Mobile Engineer focused on Android native, Flutter, and Flutter Desktop. Dark futuristic UI with cursor-tracking glow, glass surfaces, animated reveals, bento grids, and 3D tilt cards. Zero runtime deps beyond React + Tailwind.

**Live:** https://somen-chatterjee.github.io/portfolio/

## Stack

- **React 19** + **Vite 6**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Inter** + **Space Grotesk** (Google Fonts)
- Pure CSS animations, no framer-motion, no motion libs
- Native IntersectionObserver, pointer events, requestAnimationFrame

## Features

- Cursor-tracking radial spotlight overlay (page-wide + per-card)
- Gradient border glow on hover
- 3D tilt on cards (mouse-position based)
- Scroll-reveal with staggered delays (single global IO)
- Auto-hide header on scroll, active tab tracking
- Count-up stats on intersection
- Marquee tech chip strip
- Bento project grid, slide-swap social buttons per-brand color
- Fully responsive, `prefers-reduced-motion` respected

## Project structure

```
src/
├── HomePage.jsx           # Page composition
├── main.jsx               # React entry
├── index.css              # Global tokens, effects, keyframes
├── assets/                # SVGs + man.png + imports barrel
├── components/            # PrimaryBtn, SecondaryBtn, Stat, Tilt
├── data/portfolio.js      # Profile, skills, experience, projects, socials
├── hooks/                 # useReveal, useGlobalCursor, useCountUp
├── sections/              # Home, About, Skills, Experience, Projects, Process, Contact, Header
└── utils/scroll.js        # scrollTo with per-section offset map
```

## Local setup

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

Output in `dist/`.

## Deploy (GitHub Pages)

Auto-deploys on push to `main` via `.github/workflows/deploy.yml`. Configure:

1. Repo → Settings → Pages → Source: **GitHub Actions**
2. `vite.config.js` sets `base: "/portfolio/"` — matches repo name
3. Push to `main` → live in ~2 min

## Customize

All content lives in [`src/data/portfolio.js`](src/data/portfolio.js) — edit `profile`, `stats`, `skills`, `experience`, `projects`, `process`, `socials`. Design tokens in [`src/index.css`](src/index.css) `:root`.

## License

MIT
