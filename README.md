# fiko

**A minimal, layered CSS foundation you override by design, not by accident.**

[![npm](https://img.shields.io/npm/v/@toybreaker/fiko)](https://www.npmjs.com/package/@toybreaker/fiko)
[![MIT License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## The Problem

Modern CSS frameworks fall into two traps:

1. **Too much opinion** — ship components that look like every other site, forcing you to fight the framework to express your brand.
2. **Too much complexity** — utility-only systems (Tailwind, etc.) put all design decisions in HTML, making templates hard to read and refactor.

fiko takes a third path: a minimal, layered foundation you override by design, not by accident.

---

## Install

```bash
pnpm add @toybreaker/fiko
```

---

## Usage

### 1. Import the framework

```css
/* your project's index.css */
@import "@toybreaker/fiko";
```

This imports `omg/` — the brand-agnostic framework. It declares seven cascade layers and imports all `omg/` sheets in the correct order.

### 2. Add your brand (copy the template)

```bash
# copy the starter brand files into your project
cp node_modules/@toybreaker/fiko/template/branding/ src/assets/fiko/branding/ -r
```

Then import your brand tokens **after** the framework, inside the same layers:

```css
@import "@toybreaker/fiko";

/* brand palette — loads in the tokens layer */
@import url(./branding/palette.css) layer(tokens);

/* semantic aliases (surface, text, cta) — loads in the theme layer */
@import url(./branding/roles.css) layer(theme);

/* element defaults, heading scale — loads in the theme layer */
@import url(./branding/overrides.css) layer(theme);
```

### 3. Customize your brand

Edit `branding/palette.css` — change the hue angle for your brand color:

```css
--brand: oklch(0.55 0.19 28);   /* orange — change the hue (0–360) */
```

---

## Architecture: `omg/` vs `branding/`

```
fiko/
├── omg/          ← THE FRAMEWORK — brand-agnostic, versioned, never touch
│   ├── 0reset.css
│   ├── 1vars.css       ← layout, spacing, typography tokens
│   ├── 3base.css       ← element defaults
│   ├── 4layout.css     ← container, grid, nav
│   ├── 5components.css ← buttons, links, controls
│   ├── 6states.css     ← data-state helpers
│   └── utils/          ← atomic utility classes
│
└── branding/     ← YOUR BRAND — per-client, fully owned, never extracted
    ├── palette.css   ← raw brand colors (OKLCH tokens)
    ├── roles.css     ← semantic aliases (surface, text, cta…)
    └── overrides.css ← element defaults, heading scale, brand specifics
```

**The rule:** if it could work on any website → `omg/`. If it's specific to one brand → `branding/`.

---

## Cascade Layers

```css
@layer reset, tokens, base, theme, layout, components, utilities;
```

| Layer | Purpose | Your files |
|---|---|---|
| `reset` | Margin/padding zero, box-sizing, smooth scroll | — |
| `tokens` | CSS custom properties: spacing, type, color | `branding/palette.css` |
| `base` | Element defaults (h1–h6, p, blockquote) | — |
| `theme` | Semantic aliases + brand overrides | `branding/roles.css`, `branding/overrides.css` |
| `layout` | Body, container, grid, nav | — |
| `components` | Buttons, inputs, links | — |
| `utilities` | Atomic helpers: `.hide`, `.flex`, `.center`, etc. | — |

`@layer` makes specificity predictable. A utility class in `utilities` always beats a component in `components` — no `!important` wars.

**Why `theme` after `base`?** `base` sets sensible element defaults (e.g. `h1` size). Your `overrides.css` in `theme` always wins over them — no high-specificity selectors needed.

---

## OKLCH Colors

All color tokens use OKLCH:

```css
--brand: oklch(0.55 0.19 28);
/* L = lightness (0–1), C = chroma (0–0.37), H = hue (0–360) */
```

- **Perceptually uniform** — same L value = same perceived lightness across hues
- **Relative calculations** — `oklch(from var(--brand) calc(l + 0.08) c h)` = guaranteed lighter tint
- **Wide gamut** — P3 and Rec2020 renders richer colors automatically

---

## Utilities

| Class | Effect |
|---|---|
| `.hide` | `display: none` |
| `.flex` | `display: flex` |
| `.center` | flex center both axes |
| `.pad_block_sm` | block padding small |
| `.h1` – `.h6` | heading scale classes |
| `.dim` | secondary text color + smaller size |
| `.typewriter` | `font-family: var(--font_serif)` — "Courier New", Courier, monospace |
| `.prose` | `max-width: 66ch; margin-inline: auto` |
| `.aspect_square` | `aspect-ratio: 1` |
| `.aspect_video` | `aspect-ratio: 16/9` |

---

## What fiko Intentionally Does NOT Do

- **No dark mode** — permanent light mode
- **No JavaScript** — pure CSS
- **No component library** — no `.card`, `.modal`, `.navbar` in `omg/`
- **No magic class names** — every utility is obvious

---

## Local Development

```bash
# dev server — opens http://localhost:3000/demo/ automatically
pnpm dev

# build demo into dist/
pnpm build

# build + deploy to Netlify
pnpm deploy
```

`pnpm dev` serves the repo root (so `demo/index.html` can load `../index.css`) and opens the browser automatically. Edit any file in `omg/` or `demo/` and reload — no build step needed during development.

---

## Pairing with Astro

fiko was designed to pair with Astro scoped styles:

- fiko owns the global layer stack (reset → utilities)
- Astro components own their own layout via `<style>` blocks
- Zero specificity conflicts

---

## License

MIT — Copyright (c) 2024–2026 Toybreaker
