# Changelog

## 0.6.3 — 2026-04-02

### Changed
- **`kitchen/index.html`** — new component testbed page; every framework class demonstrated in isolation, zero inline styles, resizable layout demos, source snippets open by default
- **Demo banner** — full-width top banner on `demo/index.html` linking to `/kitchen/`

---

## 0.6.2 — 2026-03-29

### Changed
- **`fiko_shake_vertical_lg` keyframe** — new animation variant (doubled span, 0.6s); applied to demo hero title and footer logo `.shake`
- **`cite` font-size** — adjusted from 66% to 77%
- **`template/branding/palette.css`** — `--brandT25` renamed to `--brandT75` (was 75% transparent); new `--brandT25` added (25% transparent); indentation standardised to 4-space
- **CSS formatting** — `omg/` source files reformatted to 4-space indentation; no functional changes
- **CLAUDE.md** — brand name corrected to UPPERCASE `FIKO` throughout

---

## 0.6.1 — 2026-03-24

### Changed
- **Default `details.accordion` redesigned** — removes outer box (`border`, `border-radius`, `overflow: hidden`); each row separated by `border-bottom`; down-chevron SVG via `::after` in `currentColor`, rotates 180° on open; chevron aligned right via `margin-left: auto`; chevron size `1.25em` (matches `accordion_chevron`)
- **`.dotted` modifier added** — opt-in dot leader between label and chevron (`details.accordion.dotted`); dots vertically centered; composable with `accordion_chevron`
- **`accordion_chevron` fixed** — `background-color: currentColor` (was `var(--cta)`); no consumer `:global()` overrides needed
- **Demo mobile overflow fixed** — `applyWidth()` guarded by `window.innerWidth >= 1024`; `resize` listener clears inline `padding-left` when dropping below 1024px
- **Demo aside nav** — summary `<a>` links replaced with plain text (no red, not clickable); `gap: 0` on nav; `::before` suppressed in aside context
- **Demo accordion section** — updated to show new row style; added `.dotted` and `accordion_chevron + dotted` examples; all three live blocks made resizable

---

## 0.6.0 — 2026-03-23

### Changed
- **Version bump to 0.6.0** — clean minor bump; commit format + preflight rules added to CLAUDE.md

---

## 0.5.3 — 2026-03-23

### Changed
- **Deploy target switched to Netlify** — removes GitHub Pages CDN cache problem (stale custom domain after deploy). `netlify.toml` added; `pages.yml` GitHub Actions workflow removed. npm publish workflow (`publish.yml`) unchanged.

## 0.5.2 — 2026-03-23

### Fixed
- **Accordion summary alignment** — switched from `display: grid` to `display: flex` on `<summary>` to fix Safari/WebKit rendering bug where text appeared top-left and chevron bottom-right. `<a>` inside summary now `flex: 1; display: flex; align-items: center` to reliably center content on both axes.
- **README code blocks** — changed `layer(tokens)` and `@layer` examples from ` ```css ` to ` ```text ` to prevent npm's syntax highlighter from falsely highlighting `to` inside `tokens` as a CSS gradient keyword.

## 0.5.1 — 2026-03-23

### Fixed
- **CNAME now copied to `dist/`** — custom domain `fiko.junglestar.org` no longer breaks on CI deploy
- **Homepage URL** — `package.json` homepage corrected to `https://fiko.junglestar.org`
- **Copyright year** — updated to 2024–2026 in README and LICENSE
- **Duplicate CI workflow removed** — two `publish.yml` files were both firing on tag push; kept the one with `--provenance`
- **gzip size badge** added to README (12.1 kB packed)

## 0.5.0 — 2026-03-22

### Breaking
- **All class names now snake_case** — any kebab-case class that was undocumented but used (e.g. `.bento-col-2`, `.clipped-circle`) must be updated to snake_case equivalents.

### New
- **`.accordion_chevron`** — modifier class for `details.accordion`: replaces `+`/`×` text icon with an animated SVG chevron via CSS `mask-image`. Rotates 90° on open. Pure CSS, no inline SVG needed.
- **`.fiko` utility** — animated warm orb glow background. Add to any element with dimensions. Override orb colors with `--fiko_orb_a` / `--fiko_orb_b`.
- **Hamburger nav** — `header` gets mobile hamburger button (top-right, animated 3-bar → ×). Full-screen overlay slides in on mobile; fixed 220px sidebar on desktop ≥1024px. Controlled by `body.nav_open`.
- **`CLAUDE.md`** — CSS conventions documented for AI-assisted development in this repo.

### Fixed
- **snake_case audit** — all class names across `omg/` and `demo/` renamed from kebab-case to snake_case (`.bento_col_2`, `.bento_full`, `.bento_row_2`, `.bento_row_3`, `.clipped_circle`, etc.).
- **`pnpm dev`** — now opens `http://localhost:3000/demo/` automatically via compound command + `serve.json` redirect.

### Next
- `apple-touch-icon.png` generation from `favicon.svg`

## 0.4.0 — 2026-03-22

### Breaking
- **Branding template files renamed** — `1client_vars.css` → `palette.css`, `2client_datatheme.css` → `roles.css`, `3client_theme.css` → `overrides.css`. Update your project's import paths accordingly.
- **`.typewriter` repurposed** — now sets `font-family: var(--font_serif)` (Courier New). The previous 66ch layout behaviour moves to new `.prose` class.

### New
- **`.prose`** — `max-width: 66ch; margin-inline: auto` (was `.typewriter`)
- **`.mono`** — `ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, monospace`
- **`.gradient_o`** — radial brand gradient (replaces `gradient_brand`)
- **`.gradient_h`** — horizontal linear brand gradient
- **`.gradient_v`** — vertical linear brand gradient

### Updated
- Gradient tokens `--gradient_brand` / `--gradient_linear` renamed to `--gradient_o` / `--gradient_h` / `--gradient_v`
- `--gradient_o` uses brand-only OKLCH colors (no warm tones)

### Demo
- Heading scale showcase: 2-col grid, label left / styled text right
- Text utilities: 2-col grid with semantic example phrases
- Shake animation on hero title (page load + click to replay)
- Shake animation on footer logo (1s after scroll into view)
- Hover shake on nav links, copy buttons, pills, feature cards
- SVG favicon + `scripts/build-demo.mjs` for self-contained `dist/`
- GitHub Pages workflow updated — builds `dist/`, deploys to `fiko.junglestar.org`

### Next
- `apple-touch-icon.png` generation from `favicon.svg`
- Consider `--gradient_o` center position as a token

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
