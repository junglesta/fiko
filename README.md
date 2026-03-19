# 404.css

**A minimal, layered CSS foundation you override by design, not by accident.**

[![npm](https://img.shields.io/npm/v/@toybreaker/fiko)](https://www.npmjs.com/package/@toybreaker/fiko)
[![MIT License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## The Problem

Modern CSS frameworks fall into two traps:

1. **Too much opinion** — ship components that look like every other site, forcing you to fight the framework to express your brand.
2. **Too much complexity** — utility-only systems (Tailwind, etc.) put all design decisions in HTML, making templates hard to read and refactor.

404.css takes a third path: a minimal, layered foundation you override by design, not by accident.

---

## Install

```bash
npm install @toybreaker/fiko
# or
pnpm add @toybreaker/fiko
```

---

## Usage

### 1. Import the framework

```css
/* your project's index.css */
@import "@toybreaker/fiko";
```

This imports `omg/` — the brand-agnostic framework. It declares six cascade layers and imports all `omg/` sheets in the correct order.

### 2. Add your brand (copy the template)

```bash
# copy the starter brand files into your project
cp node_modules/@toybreaker/fiko/template/000/ src/assets/404/000/ -r
```

Then import your brand tokens **after** the framework, inside the same layers:

```css
@import "@toybreaker/fiko";

/* brand palette — loads in the tokens layer */
@import url(./000/1client_vars.css) layer(tokens);

/* semantic aliases (surface, text, cta) — loads in the theme layer */
@import url(./000/2client_datatheme.css) layer(theme);

/* element defaults, heading scale — loads in the theme layer */
@import url(./000/3client_theme.css) layer(theme);
```

### 3. Customize your brand

Edit `000/1client_vars.css` — change the hue angle for your brand color:

```css
--brand: oklch(0.55 0.19 28);   /* orange — change the hue (0–360) */
```

---

## Architecture: `omg/` vs `000/`

```
404/
├── omg/          ← THE FRAMEWORK — brand-agnostic, versioned, never touch
│   ├── 0reset.css
│   ├── 1vars.css       ← layout, spacing, typography tokens
│   ├── 3base.css       ← element defaults
│   ├── 4layout.css     ← container, grid, nav
│   ├── 5components.css ← buttons, links, controls
│   ├── 6states.css     ← data-state helpers
│   └── utils/          ← atomic utility classes
│
└── 000/          ← YOUR BRAND — per-client, fully owned, never extracted
    ├── 1client_vars.css      ← raw palette (OKLCH colors)
    ├── 2client_datatheme.css ← semantic aliases (surface, text, cta…)
    └── 3client_theme.css     ← element defaults, heading scale, brand specifics
```

**The rule:** if it could work on any website → `omg/`. If it's specific to one brand → `000/`.

---

## Cascade Layers

```css
@layer reset, tokens, theme, layout, components, utilities;
```

| Layer | Purpose |
|---|---|
| `reset` | Margin/padding zero, box-sizing, smooth scroll |
| `tokens` | CSS custom properties: spacing, type, color |
| `theme` | Semantic aliases + element defaults |
| `layout` | Body, container, grid, nav |
| `components` | Buttons, inputs, links |
| `utilities` | Atomic helpers: `.hide`, `.flex`, `.center`, etc. |

`@layer` makes specificity predictable. A utility class in `utilities` always beats a component in `components` — no `!important` wars.

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
| `.typewriter` | `max-width: 66ch; margin-inline: auto` |
| `.aspect_square` | `aspect-ratio: 1` |
| `.aspect_video` | `aspect-ratio: 16/9` |

---

## What 404.css Intentionally Does NOT Do

- **No dark mode** — permanent light mode
- **No JavaScript** — pure CSS
- **No component library** — no `.card`, `.modal`, `.navbar` in `omg/`
- **No magic class names** — every utility is obvious

---

## Pairing with Astro

404.css was designed to pair with Astro scoped styles:

- 404.css owns the global layer stack (reset → utilities)
- Astro components own their own layout via `<style>` blocks
- Zero specificity conflicts

---

## License

MIT — Copyright (c) 2024–2025 Toybreaker
