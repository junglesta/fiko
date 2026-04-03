/**
 * FIKO — light/dark theme toggle
 *
 * Cycles: system → light → dark → system
 * Persists choice to localStorage.
 * Works with the data-theme pattern in branding/roles.css.
 *
 * Usage
 * ─────
 * 1. Add one or more toggle buttons anywhere in your HTML:
 *
 *      <button class="theme_toggle theme_toggle_labeled" aria-label="Toggle colour theme">light-mode</button>
 *
 * 2. Drop this script at the end of <body> (or as a module):
 *
 *      <script src="theme-toggle.js"></script>
 *
 * How it works
 * ────────────
 * - "system"  → removes data-theme from <html>; OS preference governs (via roles.css media query)
 * - "light"   → sets data-theme="light" on <html>; forces light regardless of OS
 * - "dark"    → sets data-theme="dark"  on <html>; forces dark regardless of OS
 *
 * Customise the icons by changing the ICONS object below.
 */

(function () {
    const STORAGE_KEY = 'fiko_theme';
    const CYCLE       = ['system', 'light', 'dark'];
    const LABELS      = { system: 'sys-mode', light: 'light-mode', dark: 'dark-mode' };

    const root = document.documentElement;

    function getTheme() {
        return root.dataset.theme || 'system';
    }

    /* Shows click intention (next state) as a word label. */
    function setLabel(btn, t) {
        const next = CYCLE[(CYCLE.indexOf(t) + 1) % CYCLE.length];
        btn.textContent = LABELS[next];
        btn.title = 'Switch to ' + next;
    }

    function applyTheme(t) {
        if (t === 'system') {
            delete root.dataset.theme;
        } else {
            root.dataset.theme = t;
        }
        document.querySelectorAll('.theme_toggle').forEach(btn => setLabel(btn, t));
        try { localStorage.setItem(STORAGE_KEY, t); } catch (_) {}
    }

    /* restore saved preference immediately to avoid flash */
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && CYCLE.includes(saved)) {
            applyTheme(saved);
        } else {
            document.querySelectorAll('.theme_toggle').forEach(btn => setLabel(btn, 'system'));
        }
    } catch (_) {
        document.querySelectorAll('.theme_toggle').forEach(btn => setLabel(btn, 'system'));
    }

    /* wire all toggle buttons */
    document.querySelectorAll('.theme_toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const next = CYCLE[(CYCLE.indexOf(getTheme()) + 1) % CYCLE.length];
            applyTheme(next);
        });
    });
})();
