# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — TypeScript compile + Vite build (outputs to `/react-lessons` subpath for GitHub Pages)
- `npm run preview` — preview production build locally
- `npm run biome:check` — lint and format check
- `npm run biome:write` — auto-fix linting and formatting

No test suite is configured.

## Architecture

A React 18 SPA that demonstrates 23 numbered lessons about rendering performance patterns. Deployed to GitHub Pages at `audunru.github.io/react-lessons/`.

### Key directories

- `src/lessons/` — 23 numbered lesson modules, each in its own subfolder (`N-name/index.tsx`). Each lesson is assembled in the router as: Introduction + lesson component + `<Code />` showing the raw source via Vite's `?raw` import.
- `src/components/` — shared UI primitives (Button, Input, Stack, Container, Menu, RenderCount, etc.)
- `src/pages/` — static pages (About, worst-case scenario demo)
- `src/router.tsx` — hash-based React Router v7 config; lessons are grouped by topic (Props, State, Fetch, Flux, CSS) via `handle.group`
- `src/main.tsx` — entry point; wraps app in React Query `QueryClientProvider`

### Adding a lesson

1. Create `src/lessons/N-name/index.tsx`
2. Add a route entry to the `lessons` array in `src/router.tsx` with `path`, `element`, and `handle: { title, group? }`

### Tooling

- **Linter/formatter:** Biome (120-char line width, space indent). Runs as a pre-commit hook via Husky + lint-staged.
- **Routing:** Hash-based (`createHashRouter`) for GitHub Pages compatibility.
- **State examples:** Redux Toolkit (lessons 12/13/17/18), React Context (8/9), TanStack React Query (16), React Hook Form (11).
- **TypeScript:** Strict mode, `noUnusedLocals`, `noUnusedParameters` — all unused imports/vars must be removed.
