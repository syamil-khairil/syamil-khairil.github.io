/**
 * js/sections/plan.js
 * ─────────────────────────────────────────────────────────────
 * Builds and injects the HTML content for the
 * Career Development Plan modal (section 03).
 * ─────────────────────────────────────────────────────────────
 */

/* ── Content data ─────────────────────────────────────────── */
const PLAN_DATA = {
  goals: {
    short: {
      timeframe: '2-year goal — short-term',
      title:     'Junior Network Security Analyst',
      body:      `Secure a full-time position at a Malaysian enterprise or telco.
        Obtain CompTIA Security+ and gain hands-on SOC experience with SIEM tools
        and real incident response workflows.`,
      accent: 'card-accent-blue',
    },
    long: {
      timeframe: '5-year goal — long-term',
      title:     'Senior Analyst / Security Engineer',
      body:      `Advance to senior analyst or Security Engineer holding CCNA Security or CEH,
        leading vulnerability assessments and contributing to enterprise security architecture.`,
      accent: 'card-accent-amber',
    },
  },

  timeline: [
    {
      active:  true,
      meta:    'Now — 2025 Q3 · Current',
      title:   'Foundation & internship preparation',
      body:    'Complete CSA30203 and networking coursework. Build home lab with Kali Linux + VirtualBox. Progress TryHackMe Pre-Security path. Apply for internship at TM or equivalent telco.',
      tags:    [
        { label: 'TryHackMe',           color: 'tag-teal'   },
        { label: 'Wireshark practice',  color: 'tag-blue'   },
        { label: 'Python for security', color: 'tag-teal'   },
      ],
    },
    {
      meta:  '2025 Q4 — 2026 Q1 · Target',
      title: 'Internship at Telekom Malaysia',
      body:  'Contribute to TM\'s network operations or security team. Gain real-world exposure to SIEM platforms, network monitoring, and incident response. Document all learning as portfolio evidence.',
      tags:  [
        { label: 'Industry experience', color: 'tag-amber' },
        { label: 'SIEM hands-on',       color: 'tag-amber' },
      ],
    },
    {
      meta:  '2026 Q2 — 2026 Q4',
      title: 'Graduate & certify',
      body:  'Complete CS degree at FIK UniSZA. Sit for CompTIA Security+ examination. Build 2–3 independent security projects for GitHub. Begin CCNA Security study materials.',
      tags:  [
        { label: 'CompTIA Security+', color: 'tag-purple' },
        { label: 'GitHub projects',   color: 'tag-blue'   },
      ],
    },
    {
      meta:  '2027 — 2028',
      title: 'Junior analyst role & CCNA Security',
      body:  'Join a SOC team full-time. Pursue CCNA Security certification. Participate in CTF competitions. Begin mentoring younger colleagues.',
      tags:  [
        { label: 'CCNA Security', color: 'tag-amber' },
        { label: 'SOC team',      color: 'tag-teal'  },
      ],
    },
    {
      meta:  '2029 — 2030',
      title: 'Senior Analyst / Security Engineer',
      body:  'Lead vulnerability assessment programmes. Explore CEH or OSCP for offensive security depth. Contribute to security architecture and mentor junior analysts.',
      tags:  [
        { label: 'CEH / OSCP',      color: 'tag-purple' },
        { label: 'Team leadership', color: 'tag-blue'   },
      ],
    },
  ],

  tools: [
    {
      name:  'Python',
      level: 'Intermediate',
      dots:  [true, true, true, false, false],
      color: 'on-blue',
      icon:  pythonIcon,
    },
    {
      name:  'Linux / Bash',
      level: 'Basic–Mid',
      dots:  [true, true, false, false, false],
      color: 'on-teal',
      icon:  linuxIcon,
    },
    {
      name:  'Wireshark',
      level: 'Learning',
      dots:  [true, true, false, false, false],
      color: 'on-blue',
      icon:  wiresharkIcon,
    },
    {
      name:  'Nmap',
      level: 'Beginner',
      dots:  [true, false, false, false, false],
      color: 'on-blue',
      icon:  nmapIcon,
    },
    {
      name:  'Splunk',
      level: 'Target',
      dots:  [false, false, false, false, false],
      color: 'on-amber',
      icon:  splunkIcon,
    },
    {
      name:  'Kali Linux',
      level: 'Learning',
      dots:  [true, false, false, false, false],
      color: 'on-blue',
      icon:  kaliIcon,
    },
    {
      name:  'Cisco PKT',
      level: 'Intermediate',
      dots:  [true, true, true, false, false],
      color: 'on-blue',
      icon:  ciscoIcon,
    },
    {
      name:  'AWS Security',
      level: 'Target',
      dots:  [false, false, false, false, false],
      color: 'on-amber',
      icon:  awsIcon,
    },
  ],
};

/* ── Tool SVG icons ───────────────────────────────────────── */
function pythonIcon()     { return `<svg viewBox="0 0 24 24" style="stroke:var(--blue)"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 13 2 2-2 2"/></svg>`; }
function linuxIcon()      { return `<svg viewBox="0 0 24 24" style="stroke:var(--teal)"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`; }
function wiresharkIcon()  { return `<svg viewBox="0 0 24 24" style="stroke:var(--blue)"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>`; }
function nmapIcon()       { return `<svg viewBox="0 0 24 24" style="stroke:var(--blue)"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`; }
function splunkIcon()     { return `<svg viewBox="0 0 24 24" style="stroke:var(--amber)"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`; }
function kaliIcon()       { return `<svg viewBox="0 0 24 24" style="stroke:var(--purple)"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`; }
function ciscoIcon()      { return `<svg viewBox="0 0 24 24" style="stroke:var(--blue)"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`; }
function awsIcon()        { return `<svg viewBox="0 0 24 24" style="stroke:var(--amber)"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`; }

/* ── Builders ─────────────────────────────────────────────── */
function buildTimeline() {
  return PLAN_DATA.timeline.map(item => {
    const tags = item.tags
      .map(t => `<span class="tag ${t.color}">${t.label}</span>`)
      .join('');

    return `
      <div class="tl-item">
        <div class="tl-dot${item.active ? ' active' : ''}"></div>
        <div class="tl-meta">${item.meta}</div>
        <div class="tl-title">${item.title}</div>
        <div class="tl-body">${item.body}</div>
        <div class="tag-row" style="margin-top:.5rem">${tags}</div>
      </div>
    `;
  }).join('');
}

function buildToolDots(tool) {
  return tool.dots
    .map(on => `<div class="d${on ? ` ${tool.color}` : ''}"></div>`)
    .join('');
}

function buildTools() {
  return PLAN_DATA.tools.map(tool => `
    <div class="tool-card">
      ${tool.icon()}
      <div class="tool-name">${tool.name}</div>
      <div class="tool-lvl">${tool.level}</div>
      <div class="dot-row">${buildToolDots(tool)}</div>
    </div>
  `).join('');
}

/* ── Render ───────────────────────────────────────────────── */
function renderPlan() {
  const target = document.getElementById('plan-body');
  if (!target) return;

  const g = PLAN_DATA.goals;

  target.innerHTML = /* html */`
    <!-- 2yr / 5yr goals -->
    <div class="grid-2" style="margin-bottom:1.25rem">
      <div class="card ${g.short.accent}">
        <div class="mini-label">${g.short.timeframe}</div>
        <h3>${g.short.title}</h3>
        <p style="font-size:13px">${g.short.body}</p>
      </div>
      <div class="card ${g.long.accent}">
        <div class="mini-label">${g.long.timeframe}</div>
        <h3>${g.long.title}</h3>
        <p style="font-size:13px">${g.long.body}</p>
      </div>
    </div>

    <!-- Timeline -->
    <div class="card" style="margin-bottom:1.25rem">
      <div class="mini-label" style="margin-bottom:1rem">Career timeline</div>
      <div class="timeline">
        <div class="tl-spine"></div>
        ${buildTimeline()}
      </div>
    </div>

    <!-- Tools -->
    <div class="card">
      <div class="mini-label" style="margin-bottom:1rem">Tools — used, learning, and target</div>
      <div class="tool-grid">${buildTools()}</div>
    </div>
  `;
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', renderPlan);
