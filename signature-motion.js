/* Signature Motion v1 — lightweight, accessible and dependency-free.
   Arc parallax, reading progress and scroll reveals; content remains accessible
   with JavaScript disabled or reduced-motion settings. */
(() => {
  'use strict';
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine = window.matchMedia('(pointer: fine) and (hover: hover)');
  const progress = document.getElementById('scroll-progress');
  let ticking = false;

  const updateProgress = () => {
    ticking = false;
    if (!progress) return;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const ratio = Math.max(0, Math.min(1, window.scrollY / max));
    progress.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
  };
  const queueProgress = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateProgress);
  };
  window.addEventListener('scroll', queueProgress, { passive: true });
  window.addEventListener('resize', queueProgress, { passive: true });
  queueProgress();

  if (fine.matches && !media.matches) {
    for (const surface of document.querySelectorAll('.identity-stage, .signature-panel')) {
      let pointerFrame = 0;
      surface.addEventListener('pointermove', event => {
        if (pointerFrame) return;
        const rect = surface.getBoundingClientRect();
        const cx = (event.clientX - rect.left) / rect.width - .5;
        const cy = (event.clientY - rect.top) / rect.height - .5;
        pointerFrame = window.requestAnimationFrame(() => {
          surface.style.setProperty('--arc-shift-x', (cx * 17).toFixed(1) + 'px');
          surface.style.setProperty('--arc-shift-y', (cy * 13).toFixed(1) + 'px');
          pointerFrame = 0;
        });
      }, { passive: true });
      surface.addEventListener('pointerleave', () => {
        window.cancelAnimationFrame(pointerFrame);
        pointerFrame = 0;
        surface.style.setProperty('--arc-shift-x', '0px');
        surface.style.setProperty('--arc-shift-y', '0px');
      });
    }
  }

  if (!media.matches && 'IntersectionObserver' in window && fine.matches) {
    const targets = document.querySelectorAll(
      '.icp-card, .card-inner, .case-block, .experience-item, .project-card, .proof-next-step'
    );
    targets.forEach(el => el.classList.add('reveal-item'));
    document.body.classList.add('motion-enabled');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.09, rootMargin: '0px 0px 38px 0px' });
    targets.forEach(el => observer.observe(el));
  }
})();
