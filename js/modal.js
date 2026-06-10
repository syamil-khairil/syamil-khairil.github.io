/**
 * modal.js
 * ─────────────────────────────────────────────────────────────
 * Controls all modal open / close behaviour:
 *   - openModal(id)  — opens a modal by id, closes others
 *   - closeModal(id) — closes a specific modal
 *   - closeAll()     — closes every modal
 *
 * Also handles:
 *   - Overlay click-outside to close
 *   - Escape key to close
 *   - Active state on nav buttons
 *   - Triggering skill bar animation when Skills modal opens
 *   - Focus management (moves focus into modal on open,
 *     returns it to the triggering element on close)
 * ─────────────────────────────────────────────────────────────
 */

/* ── Registry ─────────────────────────────────────────────── */
const MODALS = ['m-career', 'm-skills', 'm-plan', 'm-evidence', 'm-reflection'];

/** Map from modal id → nav button id */
const NAV_MAP = {
  'm-career':     'nb-career',
  'm-skills':     'nb-skills',
  'm-plan':       'nb-plan',
  'm-evidence':   'nb-evidence',
  'm-reflection': 'nb-reflection',
};

let lastFocusedElement = null;

/* ── Open ─────────────────────────────────────────────────── */
function openModal(id) {
  /* Remember who triggered this so we can restore focus */
  lastFocusedElement = document.activeElement;

  MODALS.forEach(mid => {
    const overlay = document.getElementById(mid);
    const navBtn  = document.getElementById(NAV_MAP[mid]);

    if (mid === id) {
      overlay.removeAttribute('hidden');
      /* Trigger reflow before adding .open so transition plays */
      requestAnimationFrame(() => {
        overlay.classList.add('open');
      });
      navBtn?.classList.add('active');

      /* Move focus to the close button */
      requestAnimationFrame(() => {
        const closeBtn = overlay.querySelector('.modal-close');
        closeBtn?.focus();
      });
    } else {
      _closeOverlay(mid);
    }
  });

  document.body.style.overflow = 'hidden';

  /* Trigger skill bar animation when skills modal opens */
  if (id === 'm-skills') {
    requestAnimationFrame(() => animateSkillBars());
  }
}

/* ── Close ────────────────────────────────────────────────── */
function closeModal(id) {
  _closeOverlay(id);
  document.body.style.overflow = '';

  /* Restore focus to the element that opened the modal */
  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }

  /* Reset skill bars so they re-animate next open */
  if (id === 'm-skills') resetSkillBars();
}

function _closeOverlay(id) {
  const overlay = document.getElementById(id);
  const navBtn  = document.getElementById(NAV_MAP[id]);

  overlay.classList.remove('open');
  navBtn?.classList.remove('active');

  /* Re-add hidden after transition ends */
  overlay.addEventListener('transitionend', function handler() {
    if (!overlay.classList.contains('open')) {
      overlay.setAttribute('hidden', '');
    }
    overlay.removeEventListener('transitionend', handler);
  });
}

function closeAll() {
  MODALS.forEach(id => _closeOverlay(id));
  document.body.style.overflow = '';
}

/* ── Skill bar animation ──────────────────────────────────── */
function animateSkillBars() {
  document.querySelectorAll('.skill-fill[data-width]').forEach(bar => {
    /* Start at zero */
    bar.style.width = '0';
    /* Animate to target on next frame */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.width = bar.dataset.width + '%';
      });
    });
  });
}

function resetSkillBars() {
  document.querySelectorAll('.skill-fill[data-width]').forEach(bar => {
    bar.style.width = '0';
  });
}

/* ── Overlay click-outside ────────────────────────────────── */
MODALS.forEach(id => {
  document.getElementById(id).addEventListener('click', function (e) {
    if (e.target === this) closeModal(id);
  });
});

/* ── Escape key ───────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const open = MODALS.find(id =>
      document.getElementById(id).classList.contains('open')
    );
    if (open) closeModal(open);
  }
});

/* ── Close buttons (data-close attribute) ─────────────────── */
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.close));
});

/* ── Expose globally so inline onclick attributes work ───── */
window.openModal  = openModal;
window.closeModal = closeModal;
window.closeAll   = closeAll;
