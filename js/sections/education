/**
 * js/sections/education.js
 * ─────────────────────────────────────────────────────────────
 * Builds and injects the HTML content for the
 * Education History modal (section 06).
 *
 * Edit the EDUCATION array below to update your details.
 * ─────────────────────────────────────────────────────────────
 */

/* ── Content data ─────────────────────────────────────────── */
const EDUCATION = [
  {
    type:        'current',
    logoText:    'UniSZA',
    logoColor:   'teal',
    institution: 'Universiti Sultan Zainal Abidin (UniSZA)',
    programme:   'Bachelor of Computer Science (Computer Network Security)',
    faculty:     'Faculty of Informatics and Computing (FIK)',
    status:      'active',
    statusLabel: '● Final Year',
    period:      '2023 — Present',
    year:        'Year 3, Semester 6',
    cgpa:        '3.69',
    cgpaMax:     '4.00',
    cgpaColor:   'teal',
    cgpaFill:    92,
    subjects: [
      { label: 'Special Topics in Network Security', color: 'tag-teal'   },
      { label: 'Special Topics in Software Dev',     color: 'tag-blue'   },
      { label: 'Computer Networks',                  color: 'tag-teal'   },
      { label: 'Cryptography & Network Security',    color: 'tag-purple' },
      { label: 'Operating Systems',                  color: 'tag-blue'   },
      { label: 'Database Systems',                   color: 'tag-blue'   },
    ],
  },
  {
    type:        'past',
    logoText:    'UiTM',
    logoColor:   'blue',
    institution: 'Universiti Teknologi MARA (UiTM) Kampus Dengkil',
    programme:   'Foundation in Science',
    faculty:     'Centre for Foundation Studies',
    status:      'completed',
    statusLabel: '✓ Completed',
    period:      'October 2022 — 2023',
    year:        '1 Year Programme',
    cgpa:        '3.00',
    cgpaMax:     '4.00',
    cgpaColor:   'blue',
    cgpaFill:    75,
    subjects: [
      { label: 'Biology',          color: 'tag-blue' },
      { label: 'Chemistry',        color: 'tag-blue' },
      { label: 'Physics',          color: 'tag-blue' },
      { label: 'Mathematics',      color: 'tag-teal' },
      { label: 'English',          color: 'tag-gray' },
      { label: 'Computer Science', color: 'tag-teal' },
    ],
  },
];

/* ── SVG helpers ──────────────────────────────────────────── */
const calendarIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
const locationIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
const layersIcon   = `<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;

/* ── Build a single education card ───────────────────────── */
function buildEduCard(item) {
  const subjectsHTML = item.subjects
    .map(s => `<span class="tag ${s.color}">${s.label}</span>`)
    .join('');

  return `
    <div class="edu-card ${item.type}">

      <div class="edu-card-header">
        <div class="edu-institution-row">
          <div class="edu-logo ${item.logoColor}">${item.logoText}</div>
          <div>
            <div class="edu-institution">${item.institution}</div>
            <div class="edu-programme">${item.programme}</div>
          </div>
        </div>
        <span class="edu-status-badge ${item.status}">${item.statusLabel}</span>
      </div>

      <div class="edu-meta-row">
        <span class="edu-meta-item">${calendarIcon} ${item.period}</span>
        <span class="edu-meta-item">${layersIcon}   ${item.year}</span>
        <span class="edu-meta-item">${locationIcon} ${item.faculty}</span>
      </div>

      <div class="edu-cgpa-row">
        <div class="edu-cgpa-block">
          <div class="edu-cgpa-val ${item.cgpaColor}">${item.cgpa}</div>
          <div class="edu-cgpa-lbl">CGPA / ${item.cgpaMax}</div>
        </div>
        <div class="edu-cgpa-bar-wrap">
          <div class="edu-cgpa-bar-lbl">Academic performance</div>
          <div class="edu-cgpa-track">
            <div
              class="edu-cgpa-fill ${item.cgpaColor}"
              data-edu-width="${item.cgpaFill}"
            ></div>
          </div>
        </div>
      </div>

      <div class="edu-subjects">
        <div class="edu-subjects-title">Key subjects</div>
        <div class="tag-row">${subjectsHTML}</div>
      </div>

    </div>
  `;
}

/* ── Animate CGPA bars when modal opens ───────────────────── */
function animateEduBars() {
  document.querySelectorAll('.edu-cgpa-fill[data-edu-width]').forEach(bar => {
    bar.style.width = '0';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.width = bar.dataset.eduWidth + '%';
      });
    });
  });
}

/* ── Render ───────────────────────────────────────────────── */
function renderEducation() {
  const target = document.getElementById('education-body');
  if (!target) return;

  const cardsHTML = EDUCATION.map(buildEduCard).join('');

  target.innerHTML = `
    <p style="font-size:13.5px;margin-bottom:1.25rem">
      Academic background — from Foundation in Science through to a final-year
      degree specialising in Computer Network Security.
    </p>
    <div style="display:flex;flex-direction:column;gap:1rem">
      ${cardsHTML}
    </div>
  `;

  /* Trigger bar animations after content is injected */
  requestAnimationFrame(animateEduBars);
}

/* ── Register modal open hook ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderEducation();

  /* Re-animate bars every time the education modal opens */
  const overlay = document.getElementById('m-education');
  if (overlay) {
    overlay.addEventListener('transitionend', e => {
      if (
        e.target === overlay.querySelector('.modal-box') &&
        overlay.classList.contains('open')
      ) {
        animateEduBars();
      }
    });
  }
});
