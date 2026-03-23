# fiko — Claude Code Instructions

## CSS Naming Convention: snake_case only

**CRITICAL**: Always use snake_case (underscores) for ALL CSS class names and custom properties. Never kebab-case.

```css
/* correct */
.accordion_chevron
.bento_col_2
.bento_full
.clipped_circle
.fiko_nav_hamburger
--bento_cols
--accordion_icon_closed
--font_family

/* wrong */
.accordion-chevron
.bento-col-2
.fiko-nav-hamburger
--bento-cols
```

## Architecture

fiko is a pure CSS framework — no JS, no preprocessor. Two parts:

- `omg/` — the published framework (snake_case classes, OKLCH tokens, cascade layers)
- `demo/` — the demo page (not published to npm, served via `pnpm dev`)
- `template/branding/` — starter files for consumers

## Cascade Layers

```css
@layer reset, tokens, base, theme, layout, components, utilities;
```

Add new styles to the correct layer. Never use `!important` except in `utilities` layer.

## Colors

OKLCH only. Never hex or rgb for new colors.

```css
/* correct */
oklch(0.55 0.19 28)
color-mix(in oklch, var(--brand), transparent 20%)

/* wrong */
#e05a00
rgb(224, 90, 0)
```

## Key Principles

1. **Snake_case only** — underscores everywhere, no exceptions
2. **Design token-driven** — CSS custom properties, not magic numbers
3. **OKLCH colors** — perceptually uniform, never hex/rgb for new colors
4. **Mobile-first** — start with mobile, enhance for larger screens
5. **Container queries** — `.container { container-type: inline-size }` for component responsiveness
6. **Accessibility first** — `prefers-reduced-motion`, contrast, touch targets (`var(--tap_size)`)
7. **No preprocessor** — plain CSS only
8. **`!important` only in utilities** — never in component or theme styles

## Dev workflow

```sh
pnpm dev      # serve + open http://localhost:3000/demo/
pnpm build    # build demo → dist/
pnpm deploy   # build + deploy to Netlify
```

## Preflight — run before every commit

Use the `/preflight` skill. Steps:

1. `pnpm build` — must be clean
2. Bump `version` in `package.json` (semver: patch/minor/major)
3. Update `CHANGELOG.md`
4. Update `ROADMAP.md` — tick done items, populate NEXT (never leave it empty)
5. Propose commit message, stop. Do NOT commit until approved.

## Commit message format

```
0.5.3 | fix accordion alignment, switch deploy to Netlify
```

One version number, one pipe, short description. No conventional-commit prefixes (`feat:`, `fix:`, etc.).

## Publishing

1. Edit source in `omg/`
2. Run preflight (`/preflight`) — bumps version, updates CHANGELOG + ROADMAP
3. Commit with the format above
4. Push a `vX.Y.Z` tag — GitHub Actions publishes to npm automatically
