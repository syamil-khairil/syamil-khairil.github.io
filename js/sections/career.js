/**
 * js/sections/career.js
 * ─────────────────────────────────────────────────────────────
 * Builds and injects the HTML content for the
 * Career Exploration modal (section 01).
 *
 * To customise this section, edit the strings in the
 * DATA object at the top of this file.
 * ─────────────────────────────────────────────────────────────
 */

/* ── Content data ─────────────────────────────────────────── */
const CAREER_DATA = {
  roleTitle: 'Network Security Analyst',
  roleCourse: 'CSA30203 — Chosen Career Role',
  roleDesc: `A Network Security Analyst is the frontline guardian of an organisation's digital
    infrastructure. They monitor network traffic in real-time, detect anomalies and intrusions,
    respond to security incidents, and harden systems against evolving cyber threats — making them
    one of the most critical and in-demand roles in Malaysia's growing cybersecurity sector.`,

  responsibilities: [
    '🛡️ Monitor network traffic and SIEM alerts 24/7',
    '🔍 Conduct vulnerability and risk assessments',
    '🚨 Respond to and contain security incidents',
    '🔧 Maintain firewall, IDS/IPS, and ACL rule sets',
    '📊 Produce threat intelligence and incident reports',
    '📋 Enforce security policies and regulatory compliance',
    '🤝 Collaborate with IT teams on security architecture',
  ],

  techSkills: [
    { label: 'TCP/IP & OSI Model',        color: 'tag-blue'   },
    { label: 'Wireshark',                  color: 'tag-blue'   },
    { label: 'SIEM (Splunk / QRadar)',     color: 'tag-teal'   },
    { label: 'IDS / IPS',                  color: 'tag-blue'   },
    { label: 'Linux CLI',                  color: 'tag-teal'   },
    { label: 'Firewalls — Cisco / Palo Alto', color: 'tag-blue' },
    { label: 'Python scripting',           color: 'tag-teal'   },
    { label: 'Nmap / Nessus',              color: 'tag-blue'   },
    { label: 'VPN & PKI',                  color: 'tag-teal'   },
    { label: 'OWASP Top 10',               color: 'tag-blue'   },
    { label: 'Log analysis',               color: 'tag-blue'   },
  ],

  certifications: [
    'CompTIA Security+',
    'CCNA Security',
    'CEH',
    'CompTIA CySA+',
    'OSCP',
  ],

  relevance: `Malaysia's digital economy is expanding rapidly under MyDIGITAL and the National
    Cyber Security Policy 2.0. Network Security Analysts are critical in protecting national
    infrastructure, banking systems, telecommunications providers like TM, and e-government
    platforms from ransomware, APTs, and supply-chain attacks. Bank Negara's RMiT framework and
    PDPA enforcement are driving enterprise demand for trained security professionals — placing
    this role among Malaysia's fastest-growing tech careers.`,

  salaryLabel: 'Talent demand indicator — Malaysia (2024–2025)',
  salaryValue: 'RM 4,500 – RM 9,000 / month (mid-level) · High demand, critical talent gap',
};

/* ── Render ───────────────────────────────────────────────── */
function renderCareer() {
  const target = document.getElementById('career-body');
  if (!target) return;

  const responsibilitiesHTML = CAREER_DATA.responsibilities
    .map(r => `<li>${r}</li>`)
    .join('');

  const techSkillsHTML = CAREER_DATA.techSkills
    .map(s => `<span class="tag ${s.color}">${s.label}</span>`)
    .join('');

  const certsHTML = CAREER_DATA.certifications
    .map(c => `<span class="tag tag-amber">${c}</span>`)
    .join('');

  target.innerHTML = /* html */`
    <!-- Role banner -->
    <div class="role-banner">
      <div class="role-title-row">
        <div class="role-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div>
          <div class="role-name">${CAREER_DATA.roleTitle}</div>
          <div class="role-sub">${CAREER_DATA.roleCourse}</div>
        </div>
      </div>
      <p class="role-desc">${CAREER_DATA.roleDesc}</p>
    </div>

    <!-- Info grid -->
    <div class="grid-2" style="margin-bottom:1rem">

      <div class="card">
        <div class="mini-label">Core responsibilities</div>
        <ul style="list-style:none;font-size:13.5px;color:var(--text-2);line-height:2.1">
          ${responsibilitiesHTML}
        </ul>
      </div>

      <div class="card">
        <div class="mini-label">Required technical skills</div>
        <div class="tag-row">${techSkillsHTML}</div>

        <div class="mini-label" style="margin-top:1rem">Industry certifications</div>
        <div class="tag-row">${certsHTML}</div>
      </div>

    </div>

    <!-- Relevance card -->
    <div class="card">
      <div class="mini-label">Relevance to modern cybersecurity in Malaysia</div>
      <p style="font-size:13.5px;margin:0">${CAREER_DATA.relevance}</p>
      <div class="sal-wrap">
        <div class="sal-lbl">${CAREER_DATA.salaryLabel}</div>
        <div class="sal-track"><div class="sal-fill"></div></div>
        <div class="sal-val">${CAREER_DATA.salaryValue}</div>
      </div>
    </div>
  `;
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', renderCareer);
