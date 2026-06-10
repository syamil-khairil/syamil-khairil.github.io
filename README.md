# Ahmad Zulhilmi — E-Portfolio

**Professional e-portfolio** for internship applications in network security.
Built for two UniSZA assignments simultaneously:
- **CSA30203** Special Topics in Computer Network Security (20%)
- **CSD34203** Special Topics in Software Development — GitHub Portfolio (20%)

Live demo: `https://zulhilmi-zakaria.github.io` *(update with your actual URL)*

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

## Quick Start

### Run locally
No build step required. Just open the file:
```bash
# Option 1 — open directly
open index.html

# Option 2 — serve with Python (avoids some browser CORS quirks)
python3 -m http.server 8080
# then visit http://localhost:8080
```

### Deploy to GitHub Pages
1. Create a repository named `<your-username>.github.io`
2. Push all files to the `main` branch root
3. Go to **Settings → Pages → Source → main / root**
4. Portfolio is live at `https://<your-username>.github.io`

---

## Personalisation Guide

### 1. Your name and contacts — `index.html`
Search for `Ahmad Zulhilmi` and replace with your full name.
Update the email and GitHub URL in the `.hero-contacts` block.

### 2. Section content — `js/sections/*.js`
Every section file has a `DATA` constant object at the top.
Edit the strings inside — the render function reads from that object automatically.

| File | What to edit |
|---|---|
| `career.js` | Role description, responsibilities, required skills, salary info |
| `skills.js` | Skill bar names and percentages, soft skills, gap matrix items |
| `plan.js` | 2yr/5yr goals, timeline items, tool proficiency dots |
| `evidence.js` | Project cards — add or remove items from the `EVIDENCE` array |
| `reflection.js` | Company name/description, QA answers, strengths, weaknesses |

### 3. Colour palette — `css/tokens.css`
All colours are defined as CSS custom properties. Change the hex values under
`[data-theme="light"]` and `[data-theme="dark"]` — everything else inherits automatically.

### 4. Add a new section
1. Add a modal wrapper in `index.html` (copy an existing one, change the id)
2. Create `js/sections/yourSection.js` following the same pattern
3. Add a `<script src="...">` tag at the bottom of `index.html`
4. Add a nav button and a `.sec-card` pointing at the new modal id

---

## Assignment Rubric Coverage

### CSA30203 — Network Security E-Portfolio (20 marks)

| Criterion | Marks | Where |
|---|---|---|
| Career Understanding | 4 | Career Exploration modal — role, responsibilities, skills, relevance |
| Skills Assessment | 4 | Skills Assessment modal — skill bars, gap matrix, soft skills |
| Career Development Plan | 4 | Dev Plan modal — 2yr/5yr goals, timeline, tools roadmap |
| Evidence of Learning | 3 | Evidence modal — 6 project/course cards |
| Reflection Quality | 3 | Reflection modal — 4 interview-style QA cards |
| Organisation & Presentation | 2 | Professional layout, dark/light modes, modal navigation |

### CSD34203 — GitHub Portfolio (20 marks)

| Criterion | Marks | Where |
|---|---|---|
| Initiative | 10 | Modal UX, animated background, dark/light mode beyond requirements |
| Creativity & Innovation | — | Particle canvas, spring-animated modals, unique layout |
| Problem-Solving Skills | — | Modular JS architecture, focus trapping, reduced-motion support |
| Planning & Organisation | — | Structured file tree, separation of concerns, commented code |
| Communication (README) | — | This README with full structure, screenshots, and usage guide |
| Commitment & Effort | — | Git commits for each section/file change |

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
