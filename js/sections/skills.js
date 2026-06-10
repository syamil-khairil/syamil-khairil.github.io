/**
 * js/sections/skills.js
 * ─────────────────────────────────────────────────────────────
 * Builds and injects the HTML content for the
 * Personal Skills Assessment modal (section 02).
 *
 * Skill bars animate from 0 → target width each time the
 * modal opens (controlled by modal.js → animateSkillBars).
 * ─────────────────────────────────────────────────────────────
 */

/* ── Content data ─────────────────────────────────────────── */
const SKILLS_DATA = {
  technical: [
    { name: 'Networking fundamentals (TCP/IP, DNS)', pct: 70, color: 'sf-teal'   },
    { name: 'Python (scripting & automation)',        pct: 65, color: 'sf-blue'   },
    { name: 'Cisco Packet Tracer / lab networking',   pct: 65, color: 'sf-blue'   },
    { name: 'Java / C++ fundamentals',                pct: 60, color: 'sf-purple' },
    { name: 'Linux CLI & Bash scripting',             pct: 55, color: 'sf-teal'   },
    { name: 'Wireshark / packet analysis',            pct: 45, color: 'sf-amber'  },
    { name: 'SIEM / SOC tools',                       pct: 20, color: 'sf-dim', dimPct: true },
  ],

  softSkills: [
    { name: 'Problem solving',   level: 'Strong', color: 'var(--blue)',   icon: problemSolvingIcon },
    { name: 'Teamwork',          level: 'Strong', color: 'var(--teal)',   icon: teamworkIcon       },
    { name: 'Communication',     level: 'Good',   color: 'var(--purple)', icon: communicationIcon  },
    { name: 'Time management',   level: 'Good',   color: 'var(--amber)',  icon: timeIcon           },
    { name: 'Self-learning',     level: 'Strong', color: 'var(--blue)',   icon: bookIcon           },
    { name: 'Attention to detail', level: 'Strong', color: 'var(--teal)', icon: searchIcon         },
  ],

  gapMatrix: {
    have:  ['Python', 'TCP/IP fundamentals', 'Linux basics', 'Networking concepts', 'Packet Tracer labs', 'Coursework projects'],
    need:  ['SIEM (Splunk / QRadar)', 'IDS/IPS configuration', 'Firewall management', 'Penetration testing depth'],
    learn: ['CompTIA Security+', 'CCNA Security', 'TryHackMe / CTF practice'],
  },
};

/* ── SVG icon helpers ─────────────────────────────────────── */
function problemSolvingIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" style="stroke:var(--blue)">
    <path d="M2 20h.01M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/>
  </svg>`;
}
function teamworkIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" style="stroke:var(--teal)">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>`;
}
function communicationIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" style="stroke:var(--purple)">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>`;
}
function timeIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" style="stroke:var(--amber)">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>`;
}
function bookIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" style="stroke:var(--blue)">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>`;
}
function searchIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" style="stroke:var(--teal)">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>`;
}

/* ── Build skill bars ─────────────────────────────────────── */
function buildSkillBars() {
  return SKILLS_DATA.technical.map(skill => `
    <div class="skill-item">
      <div class="skill-hd">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-pct${skill.dimPct ? ' dim' : ''}">${skill.pct}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill ${skill.color}" data-width="${skill.pct}"></div>
      </div>
    </div>
  `).join('');
}

/* ── Build soft skills grid ───────────────────────────────── */
function buildSoftGrid() {
  return SKILLS_DATA.softSkills.map(s => `
    <div class="soft-card">
      ${s.icon()}
      <div class="soft-name">${s.name}</div>
      <div class="soft-lvl" style="color:${s.color}">${s.level}</div>
    </div>
  `).join('');
}

/* ── Build gap matrix ─────────────────────────────────────── */
function buildGapMatrix() {
  const haveTags  = SKILLS_DATA.gapMatrix.have.map(t  => `<span class="gap-tag gap-have">✓ ${t}</span>`).join('');
  const needTags  = SKILLS_DATA.gapMatrix.need.map(t  => `<span class="gap-tag gap-need">⚠ ${t}</span>`).join('');
  const learnTags = SKILLS_DATA.gapMatrix.learn.map(t => `<span class="gap-tag gap-learn">→ ${t}</span>`).join('');
  return haveTags + needTags + learnTags;
}

/* ── Render ───────────────────────────────────────────────── */
function renderSkills() {
  const target = document.getElementById('skills-body');
  if (!target) return;

  target.innerHTML = /* html */`
    <p style="font-size:13.5px;margin-bottom:1.25rem">
      An honest evaluation of current abilities against industry requirements —
      identifying strengths and clear targets for growth.
    </p>

    <div class="grid-2" style="margin-bottom:1rem">

      <div class="card">
        <div class="mini-label">Technical skills — current level</div>
        ${buildSkillBars()}
      </div>

      <div class="card">
        <div class="mini-label">Soft skills</div>
        <div class="soft-grid">${buildSoftGrid()}</div>
      </div>

    </div>

    <div class="card">
      <div class="mini-label">Skills gap matrix — current vs. industry requirement</div>
      <div class="gap-wrap">${buildGapMatrix()}</div>
      <div style="display:flex;gap:.75rem;margin-top:.75rem;flex-wrap:wrap">
        <span class="gap-tag gap-have"  style="font-size:11px">✓ I have this</span>
        <span class="gap-tag gap-need"  style="font-size:11px">⚠ Need to develop</span>
        <span class="gap-tag gap-learn" style="font-size:11px">→ Actively learning</span>
      </div>
    </div>
  `;
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', renderSkills);
