// ===========================
// Mobile Nav Toggle
// ===========================
(function initNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is clicked
  links.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && nav.classList.contains('nav--open')) {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();


// ===========================
// Active Nav Link
// ===========================
(function highlightActiveLink() {
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav__link').forEach(function (link) {
    var href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (path === href || (href !== '/' && path.startsWith(href))) {
      link.classList.add('nav__link--active');
    }
  });
})();


// ===========================
// Scroll Fade-In Animations
// ===========================
(function initScrollAnimations() {
  var elements = document.querySelectorAll('.animate-in');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything immediately
    elements.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(function (el) { observer.observe(el); });
})();


// ===========================
// Footer Year
// ===========================
(function setFooterYear() {
  var el = document.querySelector('.footer__year');
  if (el) {
    el.textContent = new Date().getFullYear();
  }
})();
