/* nav.js — dropdown toggle for .nav__dropdown
   ----------------------------------------------------------------
   - Click trigger toggles aria-expanded + .is-open on the parent.
   - Click outside any open dropdown closes it.
   - Escape closes any open dropdown and returns focus to its trigger.
   - On desktop, CSS :hover/:focus-within already handles the reveal —
     this script provides the tap pattern for mobile + an explicit
     click-to-toggle affordance on desktop. The two systems compose
     cleanly because both flip the same visual state (.is-open also
     pins the panel open, matching :hover).
   ---------------------------------------------------------------- */
(function () {
  'use strict';

  var dropdowns = document.querySelectorAll('.nav__dropdown');
  if (!dropdowns.length) return;

  function closeAll(except) {
    dropdowns.forEach(function (dd) {
      if (dd === except) return;
      if (!dd.classList.contains('is-open')) return;
      dd.classList.remove('is-open');
      var btn = dd.querySelector('.nav__dropdown-trigger');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  dropdowns.forEach(function (dd) {
    var btn = dd.querySelector('.nav__dropdown-trigger');
    if (!btn) return;
    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      var willOpen = !dd.classList.contains('is-open');
      closeAll(dd);
      dd.classList.toggle('is-open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

  // Outside click closes everything.
  document.addEventListener('click', function (event) {
    var inside = event.target.closest && event.target.closest('.nav__dropdown');
    if (!inside) closeAll(null);
  });

  // Escape closes everything and returns focus to the last-open trigger.
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    var open = document.querySelector('.nav__dropdown.is-open');
    if (!open) return;
    var btn = open.querySelector('.nav__dropdown-trigger');
    closeAll(null);
    if (btn) btn.focus();
  });
}());
