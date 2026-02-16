// ===========================
// Project Filtering
// ===========================
(function initFilters() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(function (b) { b.classList.remove('filter-btn--active'); });
      btn.classList.add('filter-btn--active');

      // Show/hide cards
      cards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-type') === filter) {
          card.setAttribute('data-visible', 'true');
          card.style.display = '';
        } else {
          card.setAttribute('data-visible', 'false');
          card.style.display = 'none';
        }
      });
    });
  });
})();


// ===========================
// QR Code Modal
// ===========================
(function initQRModal() {
  var modal = document.getElementById('qr-modal');
  if (!modal) return;

  var overlay = modal.querySelector('.modal__overlay');
  var closeBtn = modal.querySelector('.modal__close');
  var qrImg = modal.querySelector('.modal__qr');

  // Open modal when QR button is clicked
  document.addEventListener('click', function (e) {
    var qrBtn = e.target.closest('[data-qr-src]');
    if (!qrBtn) return;

    e.preventDefault();
    var src = qrBtn.getAttribute('data-qr-src');
    if (qrImg) qrImg.src = src;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    // Focus the close button
    if (closeBtn) closeBtn.focus();
  });

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (qrImg) qrImg.src = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });
})();
