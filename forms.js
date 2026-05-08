(function () {
  function attach(form, formType) {
    if (!form || form.dataset.bound === '1') return;
    form.dataset.bound = '1';

    var statusEl = form.querySelector('[data-form-status]');
    var submitBtn = form.querySelector('[type="submit"]');

    function setStatus(message, kind) {
      if (!statusEl) return;
      statusEl.textContent = message || '';
      statusEl.className = 'form__status' + (kind ? ' form__status--' + kind : '');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var fields = {};
      var data = new FormData(form);
      data.forEach(function (value, key) {
        fields[key] = typeof value === 'string' ? value.trim() : value;
      });

      var originalLabel = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending…';
      }
      setStatus('', null);

      fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: formType, fields: fields }),
      })
        .then(function (res) {
          return res
            .json()
            .catch(function () { return {}; })
            .then(function (data) { return { ok: res.ok, data: data }; });
        })
        .then(function (r) {
          if (r.ok) {
            form.reset();
            setStatus("Got it — we'll be in touch within 1 hour.", 'ok');
          } else {
            var msg = (r.data && r.data.error) || 'Something went wrong. Please try again.';
            setStatus(msg, 'err');
          }
        })
        .catch(function () {
          setStatus(
            'Network error — please try again or email contact@softwarestrategists.com.',
            'err'
          );
        })
        .then(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalLabel;
          }
        });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-form]').forEach(function (form) {
      attach(form, form.getAttribute('data-form') || 'unknown');
    });
  });
})();
