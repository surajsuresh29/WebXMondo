/**
 * reveal.js — Shared IntersectionObserver utility
 * Watches [data-reveal] elements.
 * Adds .is-visible at ~15% visibility threshold.
 * Unobserves after firing (once per element).
 * Stagger: sets --stagger-delay on siblings found in [data-reveal-group].
 * Total size: ~800 bytes gzipped.
 */

(function () {
  // Apply stagger delays to grouped siblings
  document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
    var children = group.querySelectorAll('[data-reveal]');
    children.forEach(function (el, i) {
      el.style.setProperty('--stagger-delay', i * 80 + 'ms');
    });
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    observer.observe(el);
  });
})();
