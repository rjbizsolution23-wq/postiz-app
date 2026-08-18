(function () {
  window.RJ = window.RJ || {};

  RJ.toast = function (message) {
    var el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(RJ._toastTimer);
    RJ._toastTimer = setTimeout(function () {
      el.classList.remove('show');
    }, 2200);
  };

  RJ.openModal = function (id) {
    var el = document.getElementById(id || 'modal');
    if (el) el.classList.add('show');
  };

  RJ.closeModal = function (id) {
    var el = document.getElementById(id || 'modal');
    if (el) el.classList.remove('show');
  };

  RJ.markActive = function (page) {
    document.querySelectorAll('.item[data-page]').forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('data-page') === page);
    });
  };

  document.addEventListener('click', function (event) {
    var closer = event.target.closest('[data-close]');
    if (closer) {
      event.preventDefault();
      RJ.closeModal(closer.getAttribute('data-close'));
    }
    var opener = event.target.closest('[data-open]');
    if (opener) {
      event.preventDefault();
      RJ.openModal(opener.getAttribute('data-open'));
    }
    var toast = event.target.closest('[data-toast]');
    if (toast) {
      event.preventDefault();
      RJ.toast(toast.getAttribute('data-toast'));
    }
  });
})();
