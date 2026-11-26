/* Lightweight contact helper — email copy and form handling. */
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


(() => {
  'use strict';
  const form = document.getElementById('workflow-inquiry');
  const task = document.getElementById('inquiry-task');
  const source = document.getElementById('inquiry-source');
  const context = form.querySelector('.inquiry-context');
  const submit = form.querySelector('[type="submit"]');
  const cases = form.querySelectorAll('[data-case]');
  const states = form.querySelectorAll('[data-state]');
  function showState(name) {
    states.forEach(el => { el.hidden = el.dataset.state !== name; });
  }
  function selectCase(name) {
    source.value = name;
    source.disabled = !name;
    context.hidden = !name;
    cases.forEach(el => { el.hidden = el.dataset.case !== name; });
  }
  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
      selectCase(link.dataset.inquiryCase || '');
      task.focus({ preventScroll: true });
    });
  });
  form.addEventListener('input', () => showState(''));
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submit.disabled) return;
    if (!task.value.trim()) {
      task.value = '';
      task.reportValidity();
      return;
    }
    const payload = new FormData(form);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    const email = form.elements.email;
    submit.disabled = true;
    task.readOnly = email.readOnly = true;
    showState('pending');
    try {
      const endpoint = new URL(form.action);
      endpoint.pathname = '/ajax' + endpoint.pathname;
      const response = await fetch(endpoint.href, {
        method: 'POST', headers: { Accept: 'application/json' }, body: payload, signal: controller.signal
      });
      const result = await response.json();
      if (!response.ok || String(result.success) !== 'true' || /activat|confirm your email/i.test(result.message || '')) {
        throw new Error('Delivery unconfirmed');
      }
      form.reset();
      selectCase('');
      showState('done');
    } catch {
      showState('error');
    } finally {
      clearTimeout(timeout);
      task.readOnly = email.readOnly = false;
      submit.disabled = false;
    }
  });
})();
