# 404.css Philosophy

## The Problem It Solves

Modern CSS frameworks fall into two traps:

1. **Too much opinion** — they ship components that look like every other site using them, forcing you to fight the framework to express your brand.
2. **Too much complexity** — utility-only systems (Tailwind, etc.) put all design decisions in HTML, making templates hard to read and refactor.

404.css takes a third path: **a minimal, layered foundation you override by design, not by accident.**

---

## The `omg/` vs `000/` Split

This is the core architectural decision. Everything flows from it.

```
404/
├── omg/          ← THE FRAMEWORK — brand-agnostic, never touch
│   ├── 0reset.css
│   ├── 1vars.css       ← layout, spacing, typography tokens
│   ├── 3base.css       ← element defaults
│   ├── 4layout.css     ← container, grid, nav
│   ├── 5components.css ← buttons, links, controls
│   ├── 6states.css     ← data-state helpers
│   └── utils/          ← atomic utility classes
│
└── 000/          ← YOUR BRAND — per-client, fully owned
    ├── 1client_vars.css      ← raw palette (OKLCH colors)
    ├── 2client_datatheme.css ← semantic aliases (surface, text, cta…)
    └── 3client_theme.css     ← element defaults, heading scale, brand specifics
```

**The rule:** if it could be used on any website, it lives in `omg/`. If it's specific to one brand, it lives in `000/`.

`omg/` is versioned and published to npm. `000/` lives in your project and is never extracted.

---

## The Six Cascade Layers

```css
@layer reset, tokens, theme, layout, components, utilities;
```

Declared in `index.css` before any `@import`. This single line establishes the entire specificity hierarchy for the project.

| Layer | Purpose | Files |
|---|---|---|
| `reset` | Margin/padding zero, box-sizing, smooth scroll | `omg/0reset.css` |
| `tokens` | CSS custom properties: spacing, type, color | `omg/1vars.css` + `000/1client_vars.css` |
| `theme` | Semantic aliases (surface, text, cta) + element defaults | `000/2client_datatheme.css` + `000/3client_theme.css` |
| `layout` | Body defaults, container, grid, nav, states | `omg/3base.css`, `4layout.css`, `6states.css` |
| `components` | Buttons, inputs, links | `omg/5components.css` |
| `utilities` | Atomic helpers (.hide, .flex, .center, etc.) | `omg/utils/*.css` |

**Why layers?** Because `@layer` makes specificity predictable. A utility class in the `utilities` layer always beats a component style in `components` — regardless of selector specificity. No `!important` wars. No deep nesting to win battles. The cascade is explicit.

---

## OKLCH Colors

All color tokens use the OKLCH color space:

```css
--brand: oklch(0.55 0.19 28);
/* L = lightness (0–1), C = chroma (0–0.37), H = hue (0–360) */
```

Why OKLCH:
- **Perceptually uniform** — oklch(0.55 0.19 28) and oklch(0.55 0.19 200) have the same perceived lightness. RGB can't do this.
- **Relative calculations** — `oklch(from var(--brand) calc(l + 0.08) c h)` produces a guaranteed lighter tint. No guesswork.
- **Wide gamut ready** — P3 and Rec2020 displays render richer colors automatically.
- **Future-proof** — the CSS Color Level 5 standard. The browser does the gamut mapping.

To change your brand color: change the hue angle. Keep the lightness and chroma roughly the same for a cohesive palette.

---

## Naming Conventions

- **Single underscore** `--tap_size`, `--font_size` — compound token names
- **Double underscore** `--surface_delivery`, `--brand_lighter` — variant/modifier
- **No camelCase** — snake_case throughout for consistency with CSS custom property conventions
- **Semantic layer**: `--surface`, `--text`, `--cta` are semantic aliases. Never use `--brand` directly in component styles — use `--primary` or `--cta` so the semantic meaning travels with the code.

---

## What 404.css Intentionally Does NOT Do

- **No dark mode** — permanent light mode. One surface, no `prefers-color-scheme` branching. This is a deliberate choice for hospitality and retail brands where ambient lighting controls mood, not the OS.
- **No JavaScript** — pure CSS. No build step required beyond a CSS bundler or `@import`.
- **No component library** — no `.card`, no `.modal`, no `.navbar` in `omg/`. Those live in your framework (Astro, React, etc.) with scoped styles.
- **No magic class names** — every utility class is obvious (`pad_block_sm`, `flex`, `hide`). No memorising framework-specific shorthand.

---

## The Scoped Styles Pairing

404.css was designed to pair with **Astro's scoped component styles**. The theory:

- 404.css owns the global layer stack (reset → utilities)
- Astro components own their own layout via `<style>` blocks (scoped by hash)
- Result: zero specificity conflicts between global framework styles and component styles

This is the reason `omg/` has no `.card`, `.header`, `.footer`. Those are component-level concerns that belong to the component file, not a global sheet.

---

## Versioning Policy

`omg/` follows semver. Breaking changes (removed tokens, renamed layers) bump the major version. New utilities are minor. Bug fixes are patch.

`000/` is yours — it's never versioned by this package. Copy it, own it, evolve it.

---

*404.css — Copyright (c) 2024–2025 Toybreaker — MIT License*
