# AI Website-Building Agent — Core Guidelines

These are standing principles the agent must silently apply to every website it builds, step by step, using **Next.js (TypeScript) + Tailwind CSS + Framer Motion**.

## 1. Design Principles (Clean, Quality UI)
- **Visual hierarchy first**: Every screen must have one clear focal point (headline, hero image, or CTA). Use size, weight, and color contrast to establish hierarchy.
- **Whitespace is a feature**: Consistent spacing scale (4/8/16/24/32/64px).
- **Typography discipline**: Max 2 font families, consistent type scale (`text-sm / base / lg / xl / 2xl / 3xl / 5xl`), line-height 1.4–1.6 for body text.
- **Color system**: Define a cohesive palette in theme/CSS variables — never hardcode random one-off hex colors in components.
- **Consistency over creativity-per-page**: Buttons, cards, inputs look and behave the same everywhere. Build UI primitives first.
- **Contrast & accessibility**: WCAG AA contrast ratio (4.5:1 body, 3:1 large text).
- **Mobile-first**: Design for 375px width first, scale up using Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`).

## 2. Layout Principles
- Use responsive grid / flex utilities.
- Consistent max-width container (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- Section rhythm: consistent vertical padding (`py-16 md:py-24`).
- Group related content visually with consistent gap spacing.
- Above-the-fold content must communicate value and CTA within 3 seconds.

## 3. Code Quality (Next.js + TypeScript)
- **App Router by default** (`app/`), Server Components unless interactivity requires `"use client"`.
- **Strict TypeScript**: No `any`, proper `interface`/`type` for props, `strict: true` in `tsconfig.json`.
- **Component structure**:
  - One component per file, PascalCase filenames (`Navbar.tsx`, `HeroSection.tsx`).
  - Keep components modular (< ~150 lines).
  - Reusable UI primitives in `components/ui/`.
  - Page sections in `components/sections/`.
  - Layout components in `components/layout/`.
- **Folder structure convention**:
  - `src/app/`
  - `src/components/ui/`, `src/components/sections/`, `src/components/layout/`
  - `src/lib/` (utils, helpers, constants)
  - `src/types/` (shared TS types)
  - `public/` (static assets)
- **No inline magic values** — use constants for repeated values.
- **Meaningful naming** & proper error/loading state handling.

## 4. Tailwind CSS Best Practices
- Extend theme tokens in CSS / config rather than using arbitrary values repeatedly.
- Keep utility classes organized: **layout → spacing → typography → color → state**.
- Use `clsx` and `tailwind-merge` via `cn()` helper for conditional classes.

## 5. Framer Motion — Purposeful Animation Only
- Animation must support usability (150–400ms micro-interactions, up to 600ms section reveals).
- Natural easing (`easeOut` or cubic-bezier).
- Respect `prefers-reduced-motion`.
- Animate `transform` / `opacity` instead of layout-shifting properties (`width`, `height`).
- Use `staggerChildren` for lists/grids.

## 6. Performance
- Use `next/image` for images and `next/font` for fonts.
- Code-split heavy client components with `next/dynamic`.
- Prefer Server Components to keep JS bundle sizes small.

## 7. SEO Practices
- Metadata API (`title`, `description`, `openGraph`, `twitter`) per page.
- Semantic HTML (`<h1>`, `<nav>`, `<main>`, `<footer>`, `<article>`).
- Descriptive alt text on images.
- Clean URLs, sitemaps (`app/sitemap.ts`), and `robots.txt` (`app/robots.ts`).
