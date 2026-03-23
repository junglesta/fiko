# fiko Roadmap

## DONE
- [x] Cascade layers (`reset → tokens → base → theme → layout → components → utilities`)
- [x] OKLCH color tokens
- [x] `.accordion` + `.accordion_chevron` components
- [x] `.bento` grid with span modifiers
- [x] `.fiko` animated warm orb utility class
- [x] Hamburger/aside nav (mobile overlay + desktop sidebar)
- [x] snake_case audit — all class names standardised
- [x] `pnpm dev` auto-opens demo URL
- [x] Demo build pipeline (`scripts/build-demo.mjs` → `dist/`)
- [x] CLAUDE.md with CSS conventions
- [x] CNAME in `demo/` — custom domain survives CI rebuilds
- [x] Single CI workflow — duplicate `publish.yml` removed
- [x] `@toybreaker/fiko@0.5.1` live on npm + deployed to `fiko.junglestar.org`
- [x] Accordion summary alignment fixed (flexbox, Safari-safe) — `@toybreaker/fiko@0.5.2`
- [x] README npm syntax highlight fix (`tokens` false `to` keyword)
- [x] Deprecate unscoped `fiko` npm package → redirect to `@toybreaker/fiko` (pending `npm login`)

## NEXT
- [ ] `apple-touch-icon.png` generated from `favicon.svg`
- [ ] Update CA/DV/mom monorepo packages to use `.accordion_chevron` (replace inline Accordion component)
- [ ] Update CA monorepo: `pnpm fiko:npm` to pull `@toybreaker/fiko@0.5.2`

## LATER
- [ ] Dark mode token layer (opt-in)
- [ ] `.fiko` orb: third orb variant token
- [ ] Stagger animation utility
