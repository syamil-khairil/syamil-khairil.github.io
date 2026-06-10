/**
 * background.js
 * ─────────────────────────────────────────────────────────────
 * Animated particle-network canvas background.
 * Nodes drift slowly; nearby nodes are connected by faint lines.
 * Colours update when the theme changes.
 * Respects prefers-reduced-motion: if the user has requested
 * reduced motion, the canvas stays blank.
 * ─────────────────────────────────────────────────────────────
 */

(function () {
  /* ── Abort if user prefers reduced motion ─────────────────── */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  /* ── Config ───────────────────────────────────────────────── */
  const NODE_COUNT = 55;
  const MAX_DIST   = 140;   // px — max distance for a connecting line
  const SPEED      = 0.45;  // max velocity per axis

  let W, H, nodes = [], animId;

  /* ── Resize ───────────────────────────────────────────────── */
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  /* ── Node factory ─────────────────────────────────────────── */
  function createNode() {
    return {
      x:          Math.random() * W,
      y:          Math.random() * H,
      vx:         (Math.random() - 0.5) * SPEED,
      vy:         (Math.random() - 0.5) * SPEED,
      r:          Math.random() * 2 + 1.5,
      phase:      Math.random() * Math.PI * 2,
      phaseSpeed: 0.018 + Math.random() * 0.02,
    };
  }

  function initNodes() {
    nodes = Array.from({ length: NODE_COUNT }, createNode);
  }

  /* ── Resolve colours from CSS custom properties ───────────── */
  function getColors() {
    const style = getComputedStyle(document.documentElement);
    return {
      node: style.getPropertyValue('--particle-node').trim() || 'rgba(24,95,165,0.28)',
      line: style.getPropertyValue('--particle-line').trim() || 'rgba(24,95,165,0.07)',
    };
  }

  /* ── Animation loop ───────────────────────────────────────── */
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const col = getColors();

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.phase += n.phaseSpeed;
      const pr = n.r + Math.sin(n.phase) * 0.7;

      /* Draw connecting lines to nearby nodes */
      for (let j = i + 1; j < nodes.length; j++) {
        const m  = nodes[j];
        const dx = n.x - m.x;
        const dy = n.y - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.15;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = col.line;
          ctx.globalAlpha = alpha;
          ctx.lineWidth   = 0.7;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }

      /* Draw node */
      ctx.beginPath();
      ctx.arc(n.x, n.y, pr, 0, Math.PI * 2);
      ctx.fillStyle = col.node;
      ctx.fill();

      /* Move */
      n.x += n.vx;
      n.y += n.vy;

      /* Wrap at edges */
      if (n.x < -10) n.x = W + 10;
      if (n.x > W + 10) n.x = -10;
      if (n.y < -10) n.y = H + 10;
      if (n.y > H + 10) n.y = -10;
    }

    animId = requestAnimationFrame(draw);
  }

  /* ── Init & event listeners ───────────────────────────────── */
  resize();
  initNodes();
  draw();

  window.addEventListener('resize', () => {
    resize();
    initNodes();
  });

  /* Pause when tab is hidden, resume on visibility */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      draw();
    }
  });
})();
