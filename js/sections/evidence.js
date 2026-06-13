/**
 * js/sections/evidence.js
 * ─────────────────────────────────────────────────────────────
 * Builds and injects the HTML content for the
 * Evidence of Learning modal (section 04).
 *
 * Add new evidence items to the EVIDENCE array below.
 * Each item renders as a card in the evidence grid.
 * ─────────────────────────────────────────────────────────────
 */

/* ── Content data ─────────────────────────────────────────── */
const EVIDENCE = [
  {
  accent: 'ev-teal',
  type:   'Final Year Project · CSA · UniSZA 2026',
  title:  'Detection of Steganographic Image Threats Using DNN',
  desc:   `Developed an intelligent web-based detection system that identifies steganographic
    threats hidden inside digital images — a cyberattack technique known as stegomalware.
    The system uses a custom 3-SubNet Deep Neural Network (DNN) architecture optimized with
    AdamW to classify images as "Clean" or "Malicious" by detecting hidden payloads embedded
    in pixel LSB (Least Significant Bit) data. Achieves target detection accuracy of 85%+
    with a False Positive Rate below 10%, processing images in under 2 seconds.`,
  highlights: [
    '44,000-image training dataset',
    '3-SubNet DNN architecture',
    'LSB Noise Map visualisation',
    'Real-time web GUI (drag & drop)',
    'AdamW optimizer for generalisation',
  ],
  tags: [
    { label: 'Python',           color: 'tag-teal'   },
    { label: 'Deep Learning',    color: 'tag-purple' },
    { label: 'DNN / AI',         color: 'tag-purple' },
    { label: 'Cybersecurity',    color: 'tag-teal'   },
    { label: 'Image Forensics',  color: 'tag-blue'   },
    { label: 'Steganalysis',     color: 'tag-blue'   },
    { label: 'Web GUI',          color: 'tag-blue'   },
  ],
},
  {
  accent: 'ev-purple',
  type:   'Certification',
  title:  'Cisco CCNA Certificate',
  desc:   `Completed the Cisco Certified Network Associate (CCNA) programme — covering
    network fundamentals, IP connectivity, IP services, security fundamentals, automation,
    and programmability. Validates hands-on ability to install, configure, and troubleshoot
    enterprise networks.`,
  certificate: {
    file:  'assets/CCNA_Certificate.pdf',
    label: 'View Certificate (PDF)',
  },
  tags: [
    { label: 'Cisco CCNA',           color: 'tag-purple' },
    { label: 'Network fundamentals', color: 'tag-blue'   },
    { label: 'Security fundamentals',color: 'tag-teal'   },
    { label: 'Certified',            color: 'tag-purple' },
  ],
},
  {
    accent: '',
    type:   'Coursework project · CSA30203',
    title:  'Network monitoring dashboard',
    desc:   `Built a Python tool using the Scapy library to capture and display live network
      packets, parse TCP/IP headers, and flag anomalous traffic patterns. Submitted as a
      practical lab assessment for the network security module.`,
    tags: [
      { label: 'Python',          color: 'tag-blue' },
      { label: 'Scapy',           color: 'tag-teal' },
      { label: 'Packet analysis', color: 'tag-blue' },
    ],
  },
  {
    accent: 'ev-amber',
    type:   'Workshop · Network Bootcamp',
    title:  'Cisco Packet Tracer Bootcamp',
    desc:   `Attended a hands-on network bootcamp led by a senior network analyst. Built and
      configured real enterprise network topologies using Cisco Packet Tracer — covering
      VLANs, inter-VLAN routing, subnetting, ACLs, and basic firewall rules. Learned
      directly from industry experience, not just textbooks.`,
    images: [
      { src: 'assets/NetworkBootcamp.JPG', alt: 'Bootcamp session — network lab activity' },
      { src: 'assets/NetworkBootcamp(1).JPG', alt: 'Bootcamp session — Cisco Packet Tracer exercise' },
    ],
    tags: [
      { label: 'Cisco Packet Tracer', color: 'tag-amber' },
      { label: 'VLAN & ACL',          color: 'tag-blue'  },
      { label: 'Industry mentor',     color: 'tag-amber' },
      { label: 'In-person workshop',  color: 'tag-teal'  },
    ],
  },
  {
    accent: 'ev-teal',
    type:   'Online learning platform',
    title:  'TryHackMe — Pre-Security path',
    desc:   `Completed foundation modules covering networking fundamentals, web security
      basics, and Linux command-line skills. Active profile with consistent room
      completions — evidence link available on request.`,
    tags: [
      { label: 'TryHackMe',   color: 'tag-teal' },
      { label: 'In progress', color: 'tag-teal' },
      { label: 'Linux',       color: 'tag-blue' },
    ],
  },
  {
    accent: 'ev-purple',
    type:   'Lab practical',
    title:  'Cisco Packet Tracer networking labs',
    desc:   `Designed and simulated enterprise network topologies including VLAN segmentation,
      inter-VLAN routing, ACL policies, and basic firewall rule configuration through
      structured university networking lab sessions.`,
    tags: [
      { label: 'Cisco',     color: 'tag-purple' },
      { label: 'VLAN',      color: 'tag-blue'   },
      { label: 'ACL rules', color: 'tag-blue'   },
    ],
  },
  {
    accent: 'ev-amber',
    type:   'Software project · CSD34203',
    title:  'Personal blog — GitHub Pages',
    desc:   `Designed and deployed a responsive personal blog with HTML, CSS, and JavaScript
      hosted on GitHub Pages. Features dark mode toggle, about and blog pages with 3 tech
      posts, organised repository structure, and a full README with demo link.`,
    tags: [
      { label: 'HTML · CSS · JS', color: 'tag-amber' },
      { label: 'GitHub Pages',    color: 'tag-amber' },
    ],
  },
  {
    accent: '',
    type:   'Independent practice',
    title:  'Wireshark packet analysis exercises',
    desc:   `Conducted manual packet capture and analysis on local network traffic using
      Wireshark. Identified HTTP, DNS, ARP, and TCP handshake patterns. Practised display
      filters to isolate and investigate suspicious traffic behaviour.`,
    tags: [
      { label: 'Wireshark',        color: 'tag-blue' },
      { label: 'PCAP',             color: 'tag-teal' },
      { label: 'Traffic analysis', color: 'tag-blue' },
    ],
  },
  {
    accent: 'ev-teal',
    type:   'Academic foundation',
    title:  'FIK UniSZA — CS degree (ongoing)',
    desc:   `Completed modules in Computer Networks, Database Systems, Operating Systems,
      Data Structures, and Special Topics in Network Security and Software Development.
      Actively pursuing the network security elective track.`,
    tags: [
      { label: 'UniSZA',         color: 'tag-teal' },
      { label: 'CS degree',      color: 'tag-blue' },
      { label: 'Security track', color: 'tag-teal' },
    ],
  },
];

/* ── Render ───────────────────────────────────────────────── */
function renderEvidence() {
  const target = document.getElementById('evidence-body');
  if (!target) return;

  const cardsHTML = EVIDENCE.map(item => {
    const tagsHTML = item.tags
      .map(t => `<span class="tag ${t.color}">${t.label}</span>`)
      .join('');

    const imagesHTML = item.images
      ? item.images.map(img =>
          `<img class="ev-card-img" src="${img.src}" alt="${img.alt}" loading="lazy" />`
        ).join('')
      : '';

    const highlightsHTML = item.highlights
      ? `<div class="ev-highlights">
          ${item.highlights.map(h => `<span class="ev-highlight-pill">${h}</span>`).join('')}
        </div>`
      : '';

    const certHTML = item.certificate
      ? `<a class="ev-cert-link"
            href="${item.certificate.file}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open ${item.title} certificate PDF">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            ${item.certificate.label}
         </a>`
      : '';

    return `
      <div class="ev-card ${item.accent}">
        ${imagesHTML}
        <div class="ev-type">${item.type}</div>
        <div class="ev-title">${item.title}</div>
        <div class="ev-desc">${item.desc}</div>
        ${highlightsHTML}
        <div class="tag-row" style="margin-top:.75rem">${tagsHTML}</div>
        ${certHTML}
      </div>
    `;
  }).join('');

  target.innerHTML = /* html */`
    <p style="font-size:13.5px;margin-bottom:1.25rem">
      Real projects, lab work, and learning activities that demonstrate applied
      knowledge — not just academic theory.
    </p>
    <div class="ev-grid">${cardsHTML}</div>
  `;
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', renderEvidence);

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', renderEvidence);
