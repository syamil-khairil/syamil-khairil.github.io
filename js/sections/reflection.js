/**
 * js/sections/reflection.js
 * ─────────────────────────────────────────────────────────────
 * Builds and injects the HTML content for the
 * Personal Reflection modal (section 05).
 * ─────────────────────────────────────────────────────────────
 */

/* ── Content data ─────────────────────────────────────────── */
const REFLECTION_DATA = {
  company: {
    acronym: 'TM',
    name:    'Telekom Malaysia Berhad',
    desc:    `Malaysia's national telecommunications company — backbone of the country's
      digital infrastructure, serving millions of Malaysians and enterprise clients with
      broadband, cloud, and cybersecurity services.`,
  },

  qa: [
    {
      question: 'Why do you want to work for TM?',
      answer:   `Telekom Malaysia operates at the intersection of national infrastructure and
        digital transformation — the environment where network security is most impactful and
        most challenging. TM's systems protect millions of everyday Malaysians, government
        platforms, and enterprise clients simultaneously. I want to be part of an organisation
        where my analytical work directly contributes to the security of my country's digital
        backbone. TM's investment in cybersecurity talent, scale of infrastructure, and
        alignment with Malaysia's MyDIGITAL agenda make it my ideal first step into the profession.`,
    },
    {
      question: 'What value can I bring to TM?',
      answer:   `I bring current academic knowledge in network security, Python scripting ability
        that enables task automation, and a hands-on curiosity that drives me to learn beyond what
        coursework requires — evidenced by my TryHackMe progress and independent Wireshark practice.
        I ask "why" before "how," which produces analysts who understand threats rather than just
        following procedures. My bilingual ability in Bahasa Malaysia and English also means I can
        communicate technical findings clearly to both local and international stakeholders within
        TM's diverse teams.`,
    },
    {
      question: 'Why should TM hire me?',
      answer:   `I combine intellectual honesty with drive. I am transparent about my current gaps
        — limited enterprise SIEM exposure and real-world incident response — and have already built
        a concrete plan to address them, starting during internship. I do not just complete assignments;
        I document what I learn, connect concepts across subjects, and take initiative on self-directed
        projects. TM's SOC teams need analysts who grow fast, communicate clearly, and take ownership
        of their development. That is precisely how I operate, and this portfolio is the evidence.`,
    },
    {
      question: 'What skills make me suitable for this role?',
      answer:   `My suitability rests on the combination of networking theory (TCP/IP, OSI model,
        DNS, routing protocols), Python scripting, hands-on Linux familiarity, and an analytical
        mindset developed through lab work and coursework projects. I understand packet structure at
        the byte level, can navigate Wireshark captures to identify anomalies, and can write Python
        scripts to parse and flag network data. I remain calm under technical pressure and communicate
        findings in plain language — both essential in a SOC environment where speed and clarity
        save systems.`,
    },
  ],

  strengths: [
    'Strong networking theory foundation (TCP/IP, OSI, routing)',
    'Self-motivated — pursues knowledge outside of class',
    'Python scripting for automation and analysis',
    'Detail-oriented and analytical by nature',
    'Bilingual — Bahasa Malaysia and English',
    'Transparent and professional communicator',
  ],

  weaknesses: [
    'Limited enterprise SIEM exposure → studying Splunk fundamentals now',
    'No industry certifications yet → targeting Security+ in 12 months',
    'Limited real-world incident response → internship bridges this gap',
    'Penetration testing depth → progressing TryHackMe Jr Pentester path',
  ],
};

/* ── Render ───────────────────────────────────────────────── */
function renderReflection() {
  const target = document.getElementById('reflection-body');
  if (!target) return;

  const { company, qa, strengths, weaknesses } = REFLECTION_DATA;

  const qaHTML = qa.map(item => `
    <div class="qa-card">
      <div class="qa-q">${item.question}</div>
      <div class="qa-a">${item.answer}</div>
    </div>
  `).join('');

  const strengthsHTML = strengths
    .map(s => `<li>${s}</li>`)
    .join('');

  const weaknessesHTML = weaknesses
    .map(w => `<li>${w}</li>`)
    .join('');

  target.innerHTML = /* html */`
    <!-- Company box -->
    <div class="tm-box">
      <div class="tm-logo">${company.acronym}</div>
      <div>
        <div class="tm-company-name">${company.name}</div>
        <div class="tm-company-desc">${company.desc}</div>
      </div>
    </div>

    <!-- QA cards -->
    <div class="qa-list" style="margin-bottom:1.25rem">
      ${qaHTML}
    </div>

    <!-- Strengths & Weaknesses -->
    <div class="sw-row">
      <div class="sw-box sw-s">
        <div class="sw-lbl s">Strengths</div>
        <ul class="sw-ul s">${strengthsHTML}</ul>
      </div>
      <div class="sw-box sw-w">
        <div class="sw-lbl w">Weaknesses &amp; how I'm addressing them</div>
        <ul class="sw-ul w">${weaknessesHTML}</ul>
      </div>
    </div>
  `;
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', renderReflection);
