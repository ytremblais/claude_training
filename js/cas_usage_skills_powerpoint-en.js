function copyPrompt(el) {
  const text = el.textContent.replace(/Copy|✓/g, '').trim();
  navigator.clipboard.writeText(text).catch(() => {});
  el.classList.add('copied');
  setTimeout(() => el.classList.remove('copied'), 2000);
}

function filterAll(btn) {
  document.querySelectorAll('.cat-section').forEach(s => s.style.display = '');
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function filterCat(cat, btn) {
  document.querySelectorAll('.cat-section').forEach(s => {
    s.style.display = s.dataset.cat === cat ? '' : 'none';
  });
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

document.addEventListener('click', function (e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;
  if (action === 'filter-all') filterAll(el);
  else if (action === 'filter-cat') filterCat(el.dataset.cat, el);
  else if (action === 'copy-prompt') copyPrompt(el);
});
