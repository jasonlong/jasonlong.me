# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Jason Long's personal website (jasonlong.me), built with Astro 5, TailwindCSS, and MDX. It's deployed to Netlify using server-side rendering.

## Commands

```bash
npm run dev      # Start development server (localhost:4321)
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

- **Astro 5** with SSR mode (`output: 'server'`) using Netlify adapter
- **Single page site** - `src/pages/index.mdx` is the only page, written in MDX
- **Layout** - `src/layouts/Layout.astro` wraps the page with global styles
- **Components** - `src/components/GitHubProject.astro` fetches GitHub API for repo star counts at request time

## Styling

- TailwindCSS with custom `PixelCode` monospace font as the primary body font
- Global styles in `Layout.astro` create a markdown-like visual theme (showing `#`, `##`, `**`, `_` decorators)
- Dark mode uses red accent color; light mode uses sky blue
- Custom oklch color for P3 display support

## Code Style

- No semicolons
- Single quotes
- 2-space indentation
- ESLint with astro plugin
