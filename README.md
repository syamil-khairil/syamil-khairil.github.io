# Muhammad Syamil — E-Portfolio

**Professional e-portfolio** for internship applications in network security.
Built for two UniSZA assignments simultaneously:
- **CSA30203** Special Topics in Computer Network Security (20%)
- **CSD34203** Special Topics in Software Development — GitHub Portfolio (20%)

Live demo: `https://syamil-khairil.github.io` 

---

## Features

| Feature | Details |
|---|---|
| Modal-based navigation | Each section opens as a spring-animated overlay — no page reloads |
| Animated particle background | Drifting node-network canvas, theme-aware, pauses when tab is hidden |
| Dark / Light mode | Toggle in nav — remembers preference via `localStorage`, reads system default on first visit |
| Skill bar animation | Bars animate from 0 → target each time the Skills modal opens |
| Fully responsive | Works on mobile, tablet, and desktop |
| Accessibility | ARIA roles, keyboard navigation, focus trapping in modals, `prefers-reduced-motion` respected |
| Zero dependencies | No frameworks, no bundlers, no `node_modules` — pure HTML / CSS / JS |

---

## Project Structure

```
portfolio/
│
├── index.html               # Entry point — semantic HTML shell, loads all assets
│
├── css/
│   ├── tokens.css           # ★ Design tokens: all colours, type, spacing, radii
│   ├── base.css             # Reset, body defaults, grid utilities
│   ├── nav.css              # Sticky navigation bar
│   ├── hero.css             # Landing hero: avatar, chips, section cards, animations
│   ├── modal.css            # Modal overlay, box, header, close button
│   ├── components.css       # Reusable UI: cards, tags, skill bars, timeline, tools, evidence cards
│   └── sections.css         # Section-specific styles: role banner, TM box, QA cards, SW grid
│
├── js/
│   ├── theme.js             # Dark / light mode toggle + localStorage persistence
│   ├── background.js        # Animated particle-network canvas
│   ├── modal.js             # Open / close / keyboard / focus management
│   ├── main.js              # Wires nav brand + section cards after DOM ready
│   └── sections/
│       ├── career.js        # Section 01 — Career Exploration content
│       ├── skills.js        # Section 02 — Personal Skills Assessment content
│       ├── plan.js          # Section 03 — Career Development Plan content
│       ├── evidence.js      # Section 04 — Evidence of Learning content
│       └── reflection.js    # Section 05 — Personal Reflection content
│
└── README.md
```

> Each `js/sections/*.js` file contains a `DATA` object at the top — **edit those objects to personalise content without touching any logic**.

---



## Technologies Used

- **HTML5** — semantic structure, ARIA attributes
- **CSS3** — custom properties, grid, flexbox, transitions, `@keyframes`
- **Vanilla JavaScript (ES6+)** — modules pattern, DOM injection, canvas API
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono
- **GitHub Pages** — static hosting

---

## Screenshots

> *(Add screenshots here after deployment — recommended: hero light mode, hero dark mode, one modal open)*

---

## License

This portfolio is for personal academic and professional use.
© 2025 Ahmad Zulhilmi bin Zakaria · UniSZA FIK
