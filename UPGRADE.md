# Upgrade Guide

## v0.6.4 → v0.7.0

> Breaking changes only. Additive changes need no action.

### Renamed classes

| Was | Now | Files to search |
|-----|-----|-----------------|
| `.accordion_chevron` | `.accordion_pm` | HTML templates |

### New required imports (cherry-pickers only)

Consumers who import `index.css` directly: no action needed.
Consumers who import individual `omg/` files must add:

```css
@import url(omg/utils/animation.css)   layer(utilities);
@import url(omg/utils/transitions.css) layer(utilities);
```

### HTML changes

| Component | Before | After |
|-----------|--------|-------|
| Accordion plus/minus | `class="accordion accordion_chevron"` | `class="accordion accordion_pm"` |
| Theme toggle (labeled) | n/a | Add `theme_toggle_labeled` alongside `theme_toggle` on any button that should show icon + word label |

### JS changes

| File | Change |
|------|--------|
| `template/branding/theme-toggle.js` | New file — light/dark/system cycle; wire by adding `class="theme_toggle"` to any button |

### Behaviour changes

| Class | Before | After |
|-------|--------|-------|
| `details.accordion.accordion_pm` (was `accordion_chevron`) | Animated right-pointing SVG chevron, rotates 90° on open | `+` / `−` text swap, no rotation, `color: var(--primary)`, `font-size: 1.75em` |
| `nav` | `overflow-x: auto` only | `overflow-y: hidden` added — vertical scroll clipped |

### Agent search-and-replace

Run in order:

1. Replace `accordion_chevron` → `accordion_pm` in all HTML, JSX, and template files
