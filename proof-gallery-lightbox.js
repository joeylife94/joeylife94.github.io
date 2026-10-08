/* Proof Gallery V2 — expandable images with keyboard-accessible native dialog.
   Works with featured proof viewers, supporting carousels, and single proof
   screenshots without changing existing autoplay/slide navigation logic. */
(() => {
  'use strict';

  const groups = Array.from(document.querySelectorAll('.proof-viewer, .project-card-img'));
  const labelRefreshers = [];
  if (!groups.length || typeof HTMLDialogElement === 'undefined') return;

  const translations = {
    ko: { title: '프로젝트 이미지 확대', close: '확대 이미지 닫기', previous: '이전 이미지', next: '다음 이미지', open: '이미지 확대하기', hint: '클릭·터치하여 확대 ↗', missing: '이미지를 불러오지 못했습니다.' },
    en: { title: 'Expanded project screenshot', close: 'Close expanded image', previous: 'Previous image', next: 'Next image', open: 'Expand image', hint: 'Click or tap to enlarge ↗', missing: 'Could not load image.' },
    ja: { title: 'プロジェクト画像の拡大', close: '拡大画像を閉じる', previous: '前の画像', next: '次の画像', open: '画像を拡大', hint: 'クリック・タップで拡大 ↗', missing: '画像を読み込めませんでした。' }
  };
  const labels = () => translations[document.documentElement.lang] || translations.ko;

  const dialog = document.createElement('dialog');
  dialog.className = 'proof-zoom-dialog';
  dialog.id = 'proof-zoom-dialog';
  dialog.innerHTML =
    '<div class="proof-zoom-dialog__inner">' +
      '<div class="proof-zoom-dialog__top">' +
        '<span class="proof-zoom-dialog__count" aria-live="polite"></span>' +
        '<button type="button" class="proof-zoom-dialog__close">×</button>' +
      '</div>' +
      '<div class="proof-zoom-dialog__image-stage">' +
        '<button type="button" class="proof-zoom-dialog__arrow proof-zoom-dialog__arrow--prev">‹</button>' +
        '<div class="proof-zoom-dialog__image-viewport"><img class="proof-zoom-dialog__image" alt="" /></div>' +
        '<button type="button" class="proof-zoom-dialog__arrow proof-zoom-dialog__arrow--next">›</button>' +
      '</div>' +
      '<p class="proof-zoom-dialog__caption"></p>' +
    '</div>';
  document.body.appendChild(dialog);

  const viewport = dialog.querySelector('.proof-zoom-dialog__image-viewport');
  const zoomImage = dialog.querySelector('.proof-zoom-dialog__image');
  const counter = dialog.querySelector('.proof-zoom-dialog__count');
  const caption = dialog.querySelector('.proof-zoom-dialog__caption');
  const closeButton = dialog.querySelector('.proof-zoom-dialog__close');
  const previousButton = dialog.querySelector('.proof-zoom-dialog__arrow--prev');
  const nextButton = dialog.querySelector('.proof-zoom-dialog__arrow--next');

  let openImages = [];
  let openGallery = null;
  let lastFocus = null;
  let activeIndex = 0;
  let originalOverflow = '';

  function translateDialog() {
    const t = labels();
    dialog.setAttribute('aria-label', t.title);
    closeButton.setAttribute('aria-label', t.close);
    previousButton.setAttribute('aria-label', t.previous);
    nextButton.setAttribute('aria-label', t.next);
  }

  function displayImage(index) {
    if (!openImages.length) return;
    activeIndex = (index + openImages.length) % openImages.length;
    const source = openImages[activeIndex];
    const mediaCaption = source.closest('.proof-viewer__slide')?.querySelector('.proof-caption')?.textContent?.trim();
    // Very tall screenshots need readable width and their own vertical
    // scroll area. Fitting their entire height into the modal would make
    // them smaller than the preview, defeating click-to-expand.
    const portrait = (source.naturalHeight || 0) > (source.naturalWidth || 0) * 1.35;
    viewport.classList.toggle('proof-zoom-dialog__image-viewport--portrait', portrait);
    viewport.scrollTop = 0;
    zoomImage.onload = () => {
      viewport.classList.toggle(
        'proof-zoom-dialog__image-viewport--portrait',
        zoomImage.naturalHeight > zoomImage.naturalWidth * 1.35
      );
    };
    zoomImage.alt = source.alt || '';
    zoomImage.src = source.currentSrc || source.src;
    caption.textContent = mediaCaption || source.alt || labels().missing;
    counter.textContent = (activeIndex + 1) + ' / ' + openImages.length;
    const single = openImages.length < 2;
    previousButton.hidden = single;
    nextButton.hidden = single;
  }

  function openZoom(images, gallery, index, trigger) {
    if (dialog.open) return;
    openImages = images;
    openGallery = gallery;
    lastFocus = trigger;
    originalOverflow = document.body.style.overflow;
    translateDialog();
    displayImage(index);
    // Existing galleries stop their timers on mouseenter.
    gallery.dispatchEvent(new Event('mouseenter'));
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  }

  closeButton.addEventListener('click', () => dialog.close());
  previousButton.addEventListener('click', () => displayImage(activeIndex - 1));
  nextButton.addEventListener('click', () => displayImage(activeIndex + 1));
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      displayImage(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
    }
    // Escape is handled by the native dialog cancel behavior.
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = originalOverflow;
    if (openGallery) openGallery.dispatchEvent(new Event('mouseleave'));
    if (lastFocus?.isConnected) lastFocus.focus({ preventScroll: true });
    openGallery = null;
    openImages = [];
    lastFocus = null;
  });

  groups.forEach(group => {
    const items = Array.from(group.querySelectorAll('.proof-viewer__slide img, .card-carousel__img, .project-card-img > img'));
    // A supporting card is itself the project-card-img container; direct children
    // are included only when the carousel selector does not already capture them.
    if (!items.length) return;
    let blockClickUntil = 0;
    let startX = 0;
    group.addEventListener('touchstart', event => {
      startX = event.changedTouches[0]?.clientX || 0;
    }, { passive: true });
    group.addEventListener('touchend', event => {
      if (Math.abs((event.changedTouches[0]?.clientX || 0) - startX) > 36) {
        blockClickUntil = Date.now() + 450;
      }
    }, { passive: true });

    const updateTabStops = () => {
      items.forEach(img => {
        const slide = img.closest('.proof-viewer__slide');
        const active = slide
          ? slide.classList.contains('proof-viewer__slide--active')
          : (!img.classList.contains('card-carousel__img') || img.classList.contains('card-carousel__img--active'));
        img.tabIndex = active ? 0 : -1;
      });
    };

    const hintTarget = group.classList.contains('proof-viewer')
      ? group.querySelector('.proof-viewer__track')
      : group;
    const syncLabels = () => {
      if (hintTarget) hintTarget.dataset.zoomHint = labels().hint;
      items.forEach((img, index) => {
        img.setAttribute('aria-label', labels().open + ': ' + (img.alt || (index + 1)));
        img.title = labels().open;
      });
    };
    labelRefreshers.push(syncLabels);

    items.forEach((img, index) => {
      img.setAttribute('role', 'button');
      img.setAttribute('aria-haspopup', 'dialog');
      img.setAttribute('aria-controls', dialog.id);
      img.addEventListener('click', event => {
        if (Date.now() < blockClickUntil) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        openZoom(items, group, index, img);
      });
      img.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          event.stopPropagation();
          openZoom(items, group, index, img);
        }
      });
    });
    updateTabStops();
    syncLabels();
    if (items.length > 1) {
      const observer = new MutationObserver(updateTabStops);
      observer.observe(group, { subtree: true, attributes: true, attributeFilter: ['class'] });
    }
  });

  // Keep the visible hint and screen-reader control names aligned with the
  // active KO/EN/JA language after in-page language switching.
  const languageObserver = new MutationObserver(() => {
    labelRefreshers.forEach(refresh => refresh());
    if (dialog.open) translateDialog();
  });
  languageObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
  });
})();
