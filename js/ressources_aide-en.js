function switchTab(id, el) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  if (el) el.classList.add('active');
}

function toggleFaq(el) {
  el.closest('.faq-item').classList.toggle('open');
}

document.addEventListener('click', function (e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;
  if (action === 'switch-tab') switchTab(el.dataset.tab, el);
  else if (action === 'toggle-faq') toggleFaq(el);
});
