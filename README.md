# Millie Debanned — Portfolio

A single-page 3D portfolio built with React, TypeScript, Vite, React Three Fiber and Framer Motion.

## Stack

- **Vite + React + TypeScript**
- **React Three Fiber / drei / postprocessing** — the animated hero scene (distorted icosahedron core, orbiting shapes, bloom)
- **Tailwind CSS v4** — theme tokens live in `src/index.css` (`@theme` block)
- **Framer Motion** — scroll-in reveals and hover interactions
- **Lenis** — smooth scrolling

## Content

Project data lives in [`src/data/projects.ts`](src/data/projects.ts) — edit that file to add, remove or reorder projects. Everything else (bio, tags, socials) is inline in the section components under `src/components/`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploy

The `dist/` output is static and deploys as-is to Vercel, Netlify, or GitHub Pages. For Vercel:

```bash
npx vercel
```
