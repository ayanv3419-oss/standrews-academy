/* SPEC (Sardar Patel Education Campus) — demo interactivity layer.
   Makes every not-yet-built button/link show a styled "Coming soon" toast,
   so the demo never has a dead-end click. Real navigation links (index.html,
   notices.html, dashboard.html, etc.) are left untouched and navigate normally. */
(function () {
  var ICON_LABELS = {
    chevron_left: 'Previous', chevron_right: 'Next', more_vert: 'Options',
    menu: 'Menu', search: 'Search', add: 'New Enrollment', share: 'Share', public: 'Website'
  };

  function injectStyles() {
    if (document.getElementById('demo-toast-style')) return;
    var s = document.createElement('style');
    s.id = 'demo-toast-style';
    s.textContent =
      ".demo-toast-wrap{position:fixed;bottom:26px;left:50%;transform:translateX(-50%);z-index:99999;display:flex;flex-direction:column;gap:12px;align-items:center;pointer-events:none;font-family:'DM Sans',system-ui,sans-serif;}" +
      ".demo-toast{pointer-events:auto;min-width:300px;max-width:92vw;background:#1d2022;color:#e0e3e5;border:1px solid rgba(233,195,73,.30);border-left:4px solid #e9c349;border-radius:12px;padding:14px 18px;box-shadow:0 22px 60px -16px rgba(0,0,0,.7);display:flex;gap:14px;align-items:center;opacity:0;transform:translateY(14px) scale(.98);transition:all .3s cubic-bezier(.2,.85,.25,1);}" +
      ".demo-toast.show{opacity:1;transform:translateY(0) scale(1);}" +
      ".demo-toast .ico{width:38px;height:38px;flex:none;border-radius:9px;background:rgba(233,195,73,.15);color:#e9c349;display:flex;align-items:center;justify-content:center;font-size:20px;}" +
      ".demo-toast .ttl{font-weight:700;color:#fff;font-size:14px;line-height:1.25;}" +
      ".demo-toast .sub{font-size:12px;color:#c6c6cd;margin-top:3px;}";
    document.head.appendChild(s);
  }

  var wrap;
  function getWrap() {
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'demo-toast-wrap';
      document.body.appendChild(wrap);
    }
    return wrap;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function showComingSoon(label) {
    var name = (label && label.length) ? label : 'This feature';
    if (name.length > 42) name = name.slice(0, 40) + '…';
    var t = document.createElement('div');
    t.className = 'demo-toast';
    t.innerHTML = '<div class="ico">&#10024;</div><div><div class="ttl">' +
      escapeHtml(name) + '</div><div class="sub">Coming soon &middot; demo preview</div></div>';
    getWrap().appendChild(t);
    requestAnimationFrame(function () { t.classList.add('show'); });
    setTimeout(function () {
      t.classList.remove('show');
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 320);
    }, 2600);
  }

  function cleanLabel(el) {
    var clone = el.cloneNode(true);
    clone.querySelectorAll('.material-symbols-outlined, svg, .ico').forEach(function (n) { n.remove(); });
    var txt = (clone.textContent || '').replace(/\s+/g, ' ').trim();
    if (txt) return txt;
    var iconEl = el.querySelector('[data-icon]') || el.querySelector('.material-symbols-outlined');
    if (iconEl) {
      var key = (iconEl.getAttribute('data-icon') || iconEl.textContent || '').trim();
      if (ICON_LABELS[key]) return ICON_LABELS[key];
    }
    return 'This feature';
  }

  function isDeadLink(a) {
    var href = a.getAttribute('href');
    if (href === null) return true; // anchors without href
    var h = href.trim();
    if (h === '' || h === '#' || h.charAt(0) === '#') return true;
    if (h.indexOf('yournumber') !== -1) return true; // placeholder WhatsApp number
    if (h.toLowerCase().indexOf('javascript:') === 0) return true;
    return false;
  }

  function attach() {
    injectStyles();
    getWrap();

    document.querySelectorAll('a').forEach(function (a) {
      if (a.dataset.demoBound) return;
      if (a.getAttribute('onclick')) return; // already has real behavior
      if (isDeadLink(a)) {
        a.dataset.demoBound = '1';
        a.addEventListener('click', function (e) {
          e.preventDefault();
          showComingSoon(cleanLabel(a));
        });
      }
    });

    document.querySelectorAll('button').forEach(function (b) {
      if (b.dataset.demoBound) return;
      if (b.disabled) return;
      if (b.getAttribute('onclick')) return; // already has real behavior (e.g. print, scroll)
      b.dataset.demoBound = '1';
      b.addEventListener('click', function (e) {
        e.preventDefault();
        showComingSoon(cleanLabel(b));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }
})();
