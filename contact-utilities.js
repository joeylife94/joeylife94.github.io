/* Lightweight contact helper — no API service, trackers or new dependencies. */
(() => {
  'use strict';
  const button = document.getElementById('copy-inquiry-email');
  const status = document.getElementById('copy-email-status');
  const emailLink = document.querySelector('.contact-fallback-email');
  if (!button || !status || !emailLink) return;

  const messages = {
    ko: { success: '이메일 주소를 복사했어요.', failure: '자동 복사가 안 됐어요. 위 이메일 주소를 직접 복사해 주세요.' },
    en: { success: 'Email address copied.', failure: 'Copy failed. Please select the email address above.' },
    ja: { success: 'メールアドレスをコピーしました。', failure: 'コピーできませんでした。上のメールアドレスを直接コピーしてください。' }
  };
  const state = { result: null };
  function lang() {
    return Object.prototype.hasOwnProperty.call(messages, document.documentElement.lang)
      ? document.documentElement.lang : 'ko';
  }
  function renderStatus() {
    status.textContent = state.result ? messages[lang()][state.result] : '';
    status.dataset.copyResult = state.result || '';
  }

  // Legacy fallback is only attempted if secure Clipboard API is unavailable
  // or rejects (for example due to browser permissions).
  function copyLegacy(value) {
    const field = document.createElement('textarea');
    field.value = value;
    field.setAttribute('readonly', '');
    field.setAttribute('aria-hidden', 'true');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    field.style.pointerEvents = 'none';
    document.body.appendChild(field);
    field.focus();
    field.select();
    let copied = false;
    try {
      copied = document.execCommand('copy');
    } finally {
      field.remove();
    }
    return copied;
  }

  button.addEventListener('click', async () => {
    const email = emailLink.textContent.trim();
    button.disabled = true;
    let copied = false;
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        try {
          await navigator.clipboard.writeText(email);
          copied = true;
        } catch (error) {
          copied = copyLegacy(email);
        }
      } else {
        copied = copyLegacy(email);
      }
    } catch (error) {
      copied = false;
    } finally {
      button.disabled = false;
    }
    state.result = copied ? 'success' : 'failure';
    renderStatus();
  });

  new MutationObserver(renderStatus).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
  });
})();
