# FIKO Roadmap

> **NEXT** (queued) · **LATER** (deferred) · **DONE** (shipped)

---

## NEXT

- [ ] **Aside nav** — soften borders; align visual style with ca/dv footer accordion
- [ ] **`currentColor` audit** — sweep remaining components for `var(--cta)` on decorative elements (markers, borders, icons); default to `currentColor`; expose `var(--cta)` as opt-in override
- [ ] `apple-touch-icon.png` auto-generated from `favicon.svg`
- [ ] Dark mode token layer (opt-in)

## LATER

- [ ] `.fiko` orb: third variant token
- [ ] Stagger animation utility

## DONE

- [x] Cascade layers — `reset → tokens → base → theme → layout → components → utilities`
- [x] OKLCH color tokens
- [x] `.accordion` + `.accordion_chevron` components
- [x] `.bento` grid with span modifiers
- [x] `.fiko` animated warm orb utility
- [x] Hamburger/aside nav — mobile overlay + desktop sidebar
- [x] snake_case audit — all class names standardised
- [x] `pnpm dev` auto-opens demo
- [x] Demo build pipeline (`scripts/build-demo.mjs` → `dist/`)
- [x] CLAUDE.md with CSS conventions
- [x] CNAME in `demo/` — survives CI rebuilds
- [x] Duplicate `publish.yml` removed
- [x] `@toybreaker/fiko@0.5.1` — live on npm + `fiko.junglestar.org`
- [x] `@toybreaker/fiko@0.5.2` — accordion summary alignment (flexbox, Safari-safe)
- [x] README npm syntax highlight fix
- [x] Unscoped `fiko` package deprecated → `@toybreaker/fiko`
- [x] `@toybreaker/fiko@0.5.3` — deploy switched to Netlify (instant propagation)
- [x] `@toybreaker/fiko@0.6.0` — commit format + preflight rules in CLAUDE.md; CA/DV/MOM upgraded
- [x] `@toybreaker/fiko@0.6.1` — accordion redesign: row-separator style, `currentColor` down-chevron, `margin-left: auto` right-align; `.dotted` opt-in modifier for dot leader (vertically centered); `accordion_chevron` switched to `currentColor`; demo mobile overflow fixed; aside nav plain-text summaries
