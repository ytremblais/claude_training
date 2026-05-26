var activeCategory = 'all';

var searchInput = document.getElementById('catalogSearch');
var searchClear = document.getElementById('searchClear');
var countEl = document.getElementById('catalogCount');
var emptyEl = document.getElementById('catalogEmpty');
var rows = document.querySelectorAll('#catalogBody tr');

function applyFilters() {
  var q = searchInput.value.trim().toLowerCase();
  var visible = 0;

  rows.forEach(function(row) {
    var cat = row.dataset.cat || '';
    var text = row.textContent.toLowerCase();
    var catMatch = activeCategory === 'all' || cat === activeCategory;
    var qMatch = !q || text.includes(q);
    if (catMatch && qMatch) {
      row.classList.remove('hidden');
      visible++;
    } else {
      row.classList.add('hidden');
    }
  });

  countEl.textContent = visible + ' skills';
  emptyEl.style.display = visible === 0 ? 'block' : 'none';
  searchClear.classList.toggle('visible', q.length > 0);
}

searchInput.addEventListener('input', applyFilters);

searchClear.addEventListener('click', function() {
  searchInput.value = '';
  applyFilters();
  searchInput.focus();
});

document.getElementById('filterBar').addEventListener('click', function(e) {
  var btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  activeCategory = btn.dataset.cat;
  applyFilters();
});
