# CLAUDE.md - claude_training

Mémoire projet chargée à chaque session. Garder < 150 lignes.

## Projet
- Site statique bilingue de formation aux plugins Claude pour Excel et PowerPoint, et aux Skills.
- HTML / CSS / JS vanilla, aucun build. Chaque page existe en paire FR + EN : `page.html` / `page-en.html`, avec `css/page(-en).css` et `js/page(-en).js`.

## Règles de contenu
- Parité stricte FR/EN : même structure, mêmes sections, même nombre de modules, cas d'usage et questions. Une modif FR = la même modif EN, et inversement.
- Ton : professionnel, phrases courtes. Pas de tirets cadratins.
- Infos produit Anthropic (modèles, fonctionnalités, liens) : vérifier sur docs.claude.com ou support.claude.com avant d'écrire. Ne rien inventer.

## Contraintes techniques
- CSP stricte dans `_headers` : pas de script inline, pas de ressource externe hors Google Fonts, `connect-src 'none'`. Ne pas l'assouplir.
- Progression utilisateur en localStorage : ne pas casser les clés existantes.
- Versions : `./scripts/release.sh <version>` puis compléter `js/changelog-data.js` (FR et EN).

## Workflow
- Branche de travail uniquement, jamais `git push`.
- Vérifier en local : `python3 -m http.server 8000` puis ouvrir les pages modifiées.
