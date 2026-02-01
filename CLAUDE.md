# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Jason Long's personal website (jasonlong.me), built with Astro 5, TailwindCSS, and MDX. It's deployed to Cloudflare Pages as a static site with daily rebuilds via GitHub Actions.

## Commands

```bash
npm run dev      # Start development server (localhost:4321)
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

- **Astro 5** with static output (`output: 'static'`) using Cloudflare adapter
- **Single page site** - `src/pages/index.mdx` is the only page, written in MDX
- **Layout** - `src/layouts/Layout.astro` wraps the page with global styles
- **Components** - `src/components/GitHubProject.astro` fetches GitHub API for repo star counts at build time

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
