/**
 * main.js
 * ─────────────────────────────────────────────────────────────
 * Entry point loaded last (after all section scripts).
 * Responsibilities:
 *   - Wire nav-brand click → close all modals (back to hero)
 *   - Wire section cards on hero (click + keyboard)
 *   - Wire nav buttons (delegated via data-modal attribute)
 *   - Log ready state for debugging
 * ─────────────────────────────────────────────────────────────
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav brand → return to hero ─────────────────────────── */
  const navBrand = document.getElementById('nav-brand');
  navBrand?.addEventListener('click', closeAll);
  navBrand?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeAll();
    }
  });

  /* ── Section cards on hero ──────────────────────────────── */
  document.querySelectorAll('.sec-card[data-modal]').forEach(card => {
    const target = card.dataset.modal;

    card.addEventListener('click', () => openModal(target));

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(target);
      }
    });
  });

  /* ── Nav buttons ────────────────────────────────────────── */
  document.querySelectorAll('.nav-btn[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.modal));
  });

  console.info('[Portfolio] Initialised successfully.');
});
