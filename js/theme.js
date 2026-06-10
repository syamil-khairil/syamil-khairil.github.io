/**
 * theme.js
 * ─────────────────────────────────────────────────────────────
 * Handles dark / light mode toggling.
 * Priority order:
 *   1. User's saved preference (localStorage)
 *   2. System OS preference (prefers-color-scheme)
 *   3. Default: light
 * ─────────────────────────────────────────────────────────────
 */

const STORAGE_KEY = 'portfolio-theme';

const root       = document.documentElement;
const toggleBtn  = document.getElementById('theme-toggle');
const themeIcon  = document.getElementById('theme-icon');

/**
 * Apply a theme and update the icon.
 * @param {'light'|'dark'} theme
 */
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/**
 * Resolve the initial theme from storage or system preference.
 * @returns {'light'|'dark'}
 */
function resolveInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') return saved;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

/** Toggle between dark and light, persist the choice. */
function toggleTheme() {
  const current = root.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
}

/* ── Init ─────────────────────────────────────────────────── */
applyTheme(resolveInitialTheme());
toggleBtn.addEventListener('click', toggleTheme);
