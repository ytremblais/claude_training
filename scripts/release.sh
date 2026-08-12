#!/usr/bin/env bash
set -euo pipefail

# ─── release.sh ──────────────────────────────────────────────────────────────
# Bumps the training platform to a new version.
#
# What it does:
#   1. Adds a skeleton version entry to js/changelog-data.js
#   2. Updates the version link on both homepages (index.html / index-en.html)
#
# Usage:
#   ./scripts/release.sh 1.5.0
#   ./scripts/release.sh 1.5.0 "15 septembre 2026" "September 15, 2026"
#
# If dates are omitted, today's date is used (formatted automatically).
# After running, edit js/changelog-data.js to fill in the change entries.
# ─────────────────────────────────────────────────────────────────────────────

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DATA="$ROOT/js/changelog-data.js"
INDEX_FR="$ROOT/index.html"
INDEX_EN="$ROOT/index-en.html"

if [ $# -lt 1 ]; then
  echo "Usage: $0 <version> [date_fr] [date_en]"
  echo "  e.g. $0 1.5.0"
  echo "  e.g. $0 1.5.0 \"15 septembre 2026\" \"September 15, 2026\""
  exit 1
fi

VERSION="$1"

# ─── Generate dates if not provided ─────────────────────────────────────────
if [ $# -ge 3 ]; then
  DATE_FR="$2"
  DATE_EN="$3"
else
  DAY=$(date +%d | sed 's/^0//')
  MONTH_NUM=$(date +%m)
  YEAR=$(date +%Y)

  MONTHS_FR=("" "janvier" "février" "mars" "avril" "mai" "juin" "juillet" "août" "septembre" "octobre" "novembre" "décembre")
  MONTHS_EN=("" "January" "February" "March" "April" "May" "June" "July" "August" "September" "October" "November" "December")

  DATE_FR="${DAY} ${MONTHS_FR[$MONTH_NUM]} ${YEAR}"
  DATE_EN="${MONTHS_EN[$MONTH_NUM]} ${DAY}, ${YEAR}"
fi

echo "╭──────────────────────────────────────╮"
echo "│  Release v${VERSION}"
echo "│  FR: ${DATE_FR}"
echo "│  EN: ${DATE_EN}"
echo "╰──────────────────────────────────────╯"
echo

# ─── 1. Inject new version entry into changelog-data.js ─────────────────────
# Insert after "const VERSIONS = [\n" (i.e. after the first empty line following the opening bracket)
SKELETON=$(cat <<ENTRY

  {
    version: "${VERSION}",
    date_fr: "${DATE_FR}",
    date_en: "${DATE_EN}",
    sections: [
      {
        cat_fr: "TODO",
        cat_en: "TODO",
        items_fr: [
          'TODO : décrire les changements avec liens <a href="page.html" class="change-link">nom</a>'
        ],
        items_en: [
          'TODO: describe changes with links <a href="page-en.html" class="change-link">name</a>'
        ]
      }
    ]
  },
ENTRY
)

# Insert the skeleton after the first line that starts with "const VERSIONS = ["
# The new entry goes right after the opening bracket line
sed -i "/^const VERSIONS = \[$/r /dev/stdin" "$DATA" <<< "$SKELETON"

echo "✓ Nouvelle entrée v${VERSION} ajoutée dans js/changelog-data.js"

# ─── 2. Update homepage version links ───────────────────────────────────────
sed -i "s|>v[0-9]\+\.[0-9]\+\.[0-9]\+ — Voir les nouveautés</a>|>v${VERSION} — Voir les nouveautés</a>|" "$INDEX_FR"
sed -i "s|>v[0-9]\+\.[0-9]\+\.[0-9]\+ — What's new</a>|>v${VERSION} — What's new</a>|" "$INDEX_EN"

echo "✓ Version mise à jour sur index.html et index-en.html"

echo
echo "┌─────────────────────────────────────────────────────────┐"
echo "│  Prochaine étape :                                      │"
echo "│  Ouvrir js/changelog-data.js et remplacer les TODO      │"
echo "│  de l'entrée v${VERSION} par les vrais changements.     │"
echo "└─────────────────────────────────────────────────────────┘"
