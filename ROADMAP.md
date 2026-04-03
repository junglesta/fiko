# FIKO Roadmap

> **NEXT** (queued) · **LATER** (deferred) · **DONE** (shipped)

---

## NEXT

- [ ] **Kitchen: replace `.k_*` shims with framework classes** — now that `.weight_*`, `.flex_wrap`, `.align_*`, `.fill`, `.w_full` are in the framework, remove the kitchen shim versions and use the real classes directly
- [ ] `@starting-style` — browser support note (baseline 2024); consider `@supports` guard in docs
- [ ] `apple-touch-icon.png` auto-generated from `favicon.svg`
- [ ] **Kitchen: theme toggle demo section** — add `#util_theme` section documenting `.theme_toggle` / `.theme_toggle_labeled` as a component with live demo + source

## LATER

- [ ] `.fiko_glow` orb: third variant token
- [ ] Stagger animation utility
- [ ] `.fiko` shake: horizontal variant (`.fiko_x`, `.fiko_x_hover`)
- [ ] `@layer print` — print styles layer for clean print output
- [ ] **Aside nav** — soften borders; align visual style with accordion
- [ ] **`@toybreaker/fiko` v1.0** — API freeze, full docs site

## DONE

- [x] Cascade layers — `reset → tokens → base → theme → layout → components → utilities`
- [x] OKLCH color tokens
- [x] `.accordion` + `.accordion_chevron` components
- [x] `.bento` grid with span modifiers
- [x] Hamburger/aside nav — mobile overlay + desktop sidebar
- [x] snake_case audit — all class names standardised
- [x] Demo build pipeline (`scripts/build-demo.mjs` → `dist/`)
- [x] CLAUDE.md with CSS conventions
- [x] `@toybreaker/fiko@0.5.1` → `0.7.0` — see git log for details
- [x] `color-scheme: light dark` in `omg/1vars.css`
- [x] Light / dark mode — kitchen tokens + `@media (prefers-color-scheme: dark)` + `[data-theme]` three-state toggle; consumer pattern in `template/branding/roles.css`
- [x] Light / dark toggle button in kitchen — cycles system → light → dark, persists to `localStorage`; top nav (icon-only) + footer (icon + word label via `.theme_toggle_labeled`)
- [x] Kitchen promoted to sole dev + demo page; root `index.html`
- [x] `.fiko_glow` + `.fiko_orbital` + `.fiko` shake utilities
- [x] **CSS architecture refactor** — semantic-only layer files; all utility classes in `omg/utils/`
- [x] `--borderpx` default `1px`; nav redesign (single scrollable row)
- [x] **Missing tokens** — `--mono`, `--sticky_z`, `--radius_sm` added to `omg/1vars.css`
- [x] **Missing utility classes** — `.weight_*`, `.flex_wrap`, `.flex_1`, `.fill`, `.w_full`, `.align_*`, `.justify_*` added to `utils/layout.css` + `utils/text.css`
- [x] **CSS logical properties** — `padding-top/bottom` → `padding-block-start/end`; `margin-left/right` → `margin-inline` across all `omg/`
- [x] **Form elements** — inputs, textarea, select, `.field` wrapper, focus/disabled/invalid states; `.select_wrap` with `currentColor` chevron mask
- [x] **Skip-to-content** — `.skip_to_content` in `utils/visibility.css`
- [x] **`@starting-style` enter animations** — `.fade_in`, `.slide_up`, `.slide_down`, `.scale_in` in `utils/animation.css`
- [x] **View Transitions helpers** — `.vt_hero`, `.vt_header`, `.vt_image`, `.vt_title`, `.vt_card`, `.vt_custom`, `.vt_page` in `utils/transitions.css`
- [x] **`accordion_chevron` → `accordion_pm`** — plus/minus swap (`content: "+"/"−"`), brand color, larger size; old chevron rotation removed
- [x] **`nav` overflow fix** — `overflow-y: hidden` added; vertical scroll clipped
- [x] **Sticky nav scroll offset** — `scroll-margin-top: var(--k_nav_h)` on all `[id]` targets; `--k_nav_h` measured live via `ResizeObserver`
- [x] **`theme-toggle.js`** — `template/branding/theme-toggle.js`; consumer snippet; `.theme_toggle_labeled` modifier for icon + word display
- [x] **Breaking Changes Cheat Sheet** — `UPGRADE.md` at repo root; `/breaking-changes` skill standardises the process; `/preflight` updated to run it before version bump
- [x] **`currentColor` audit** — no hardcoded colors outside tokens; SVG data-URIs use mask pattern throughout
