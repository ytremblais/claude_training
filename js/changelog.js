
(function () {
  var lang = document.documentElement.lang === 'en' ? 'en' : 'fr';
  var container = document.getElementById('changelog-entries');
  if (!container || typeof VERSIONS === 'undefined') return;

  container.innerHTML = VERSIONS.map(function (v, i) {
    var date = lang === 'fr' ? v.date_fr : v.date_en;
    var latestLabel = lang === 'fr' ? 'dernière version' : 'latest';
    var latestBadge = i === 0
      ? '<span class="version-badge-latest">' + latestLabel + '</span>'
      : '';

    var sectionsHTML = v.sections.map(function (s) {
      var cat = lang === 'fr' ? s.cat_fr : s.cat_en;
      var items = lang === 'fr' ? s.items_fr : s.items_en;
      return '<div class="change-category">' + cat + '</div>'
        + '<ul class="change-list">'
        + items.map(function (item) { return '<li>' + item + '</li>'; }).join('')
        + '</ul>';
    }).join('');

    return '<div class="version-entry">'
      + '<div class="version-dot"></div>'
      + '<div class="version-header">'
      + '<span class="version-tag">v' + v.version + '</span>'
      + '<span class="version-date">' + date + '</span>'
      + latestBadge
      + '</div>'
      + '<div class="version-body">' + sectionsHTML + '</div>'
      + '</div>';
  }).join('');
})();
