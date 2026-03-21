# Changelog

## 0.3.2 — 2026-03-21

### Fixed
- **Package renamed to `@toybreaker/fiko`** — the unscoped `fiko` name on npm belongs to a different package (Fiko classless CSS, v0.1.1–0.17.0). Scoped name prevents version collision and ensures correct package is installed.
- CI workflow: `npm publish --access public` (required for scoped packages)

## 0.3.1 — 2026-03-21

### Fixed
- **Cascade layer bug** — `3base.css` moved from `layout` layer to new `base` layer, inserted between `tokens` and `theme`. Client brand overrides in `3client_theme.css` now correctly win over framework element defaults (h1–h6, p, ol/ul, blockquote, hr). Layer order: `reset → tokens → base → theme → layout → components → utilities`.

## 0.3.0 — 2026-03-21

### New
- **Accordion component** — `details.accordion` / `summary` with CSS token icons (`--accordion_icon_closed` / `--accordion_icon_open`); scoped to `.accordion` class, never bleeds into bare `details`
- **`--brand_invert`** — computed complementary color `oklch(from var(--brand) l c calc(h + 180))`; auto-updates with `--brand`
- **Bento responsive** — `.bento` converted from `@media` viewport to `@container main-container` queries; 1→2→3→4 col breakpoints

### Demo
- Dark palette — black surface, white text, `--border_color` token for all borders
- Hero title — 50vw scale, `font-weight: 100`, `gradient_warm` fill, all-caps
- Brand changed to punchy OKLCH orange `oklch(0.68 0.26 38)`; `gradient_warm` updated to seamless linear OKLCH orange→yellow
- Resizable live previews on layout showcases (`resize: horizontal` + `container-type`)
- Accordion section with icon variant examples
- Font size floor raised to `1rem` throughout
- `.dim` opacity raised for dark bg legibility

### Fixed
- `a` link color kept out of fiko base — belongs in client theme layer, not the framework

## 0.1.1 — 2025-12-xx

- Unscoped npm package name `fiko` (was `@toybreaker/fiko`)
- GitHub Actions CI publish on `v*` tag
- Demo page + GitHub Pages deploy
