# Claude Training — Site de formation aux plugins Claude Office

Plateforme de formation interactive pour apprendre à utiliser les plugins officiels Anthropic dans **Excel** et **PowerPoint**. Le site est bilingue (français / anglais), entièrement statique, et conçu pour être hébergé sur Cloudflare Pages ou intégré dans un environnement SharePoint.

---

## Contenu du site

### Page d'accueil
`index.html` — Point d'entrée. Présente les six sections du site avec une navigation vers chaque module.

### Formations interactives (`formations.html`)
Trois parcours d'autoformation progressifs, chacun structuré en 9 modules répartis sur 3 niveaux (Débutant / Intermédiaire / Avancé) :

| Formation | Durée | Contenu |
|---|---|---|
| **Claude for Excel** | ~7h | Formules, analyse de données, macros VBA, rapports automatisés |
| **Claude for PowerPoint** | ~7h | Création de decks, restructuration de slides, graphiques natifs, templates corporate |
| **Skills Office** | ~4h | Invoquer, créer, partager et intégrer des Skills (workflows réutilisables) dans Excel et PowerPoint |

Chaque module contient : théorie, prompts pratiques à tester, exercice QCM et corrigé détaillé. La progression est sauvegardée localement (localStorage).

### Cas d'usage
Bibliothèques de cas d'usage filtrables par catégorie métier :

- `cas_usage_excel.html` — Ce que Claude peut faire dans Excel (analyse, formules, VBA…)
- `cas_usage_powerpoint.html` — Ce que Claude peut faire dans PowerPoint (création, édition, visuels…)
- `cas_usage_skills_excel.html` — Skills Excel par domaine (Finance, RH, Marketing, IT, Direction…)
- `cas_usage_skills_powerpoint.html` — Skills PowerPoint par domaine métier

### Ressources & Aide (`ressources_aide.html`)
Documentation pratique organisée en quatre onglets :
- **PowerPoint** — Guide d'installation pas à pas du plugin
- **Excel** — Guide d'installation pas à pas du plugin
- **Skills** — Comment configurer et partager des Skills
- **Formations Claude** — Ressources officielles Anthropic (Claude 101, Skilljar, documentation, claude.ai)

Contient aussi une section sur les capacités du modèle : raisonnement complexe, longue fenêtre de contexte, multilinguisme, génération de code.

---

## Structure des fichiers

```
claude_training/
├── index.html / index-en.html               # Accueil
├── formations.html / formations-en.html     # Hub formations
├── formation_claude_excel.html / -en.html   # Formation Excel
├── formation_claude_powerpoint.html / -en   # Formation PowerPoint
├── formation_agent_skills.html / -en.html   # Formation Skills
├── cas_usage_excel.html / -en.html          # Cas d'usage Excel
├── cas_usage_powerpoint.html / -en.html     # Cas d'usage PowerPoint
├── cas_usage_skills_excel.html / -en.html   # Skills Excel par métier
├── cas_usage_skills_powerpoint.html / -en   # Skills PowerPoint par métier
├── ressources_aide.html / -en.html          # Ressources & Aide
├── js/
│   ├── sharepoint-nav.js                    # Navigation SharePoint (partagé)
│   └── *.js                                 # Scripts par page
├── css/
│   └── *.css                                # Styles par page
└── _headers                                 # En-têtes de sécurité Cloudflare
```

## Stack technique

- HTML / CSS / JavaScript vanilla — aucune dépendance externe
- Polices Google Fonts (DM Mono, Syne, DM Sans)
- localStorage pour la persistance de la progression
- Compatible SharePoint (script de navigation automatique inclus)
- Déployé sur Cloudflare Pages

## Sécurité

Les en-têtes HTTP sont configurés dans `_headers` (format Cloudflare Pages) :

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' fonts.googleapis.com; ...
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

---

# Claude Training — Office Plugin Training Site

Interactive training platform for learning to use Anthropic's official plugins in **Excel** and **PowerPoint**. The site is bilingual (French / English), fully static, and designed to be hosted on Cloudflare Pages or embedded in a SharePoint environment.

---

## Site Contents

### Home Page
`index-en.html` — Entry point. Presents the six sections of the site with navigation to each module.

### Interactive Training (`formations-en.html`)
Three self-paced training paths, each structured in 9 modules across 3 levels (Beginner / Intermediate / Advanced):

| Training | Duration | Content |
|---|---|---|
| **Claude for Excel** | ~7h | Formulas, data analysis, VBA macros, automated reports |
| **Claude for PowerPoint** | ~7h | Deck creation, slide restructuring, native charts, corporate templates |
| **Office Skills** | ~4h | Invoking, creating, sharing, and integrating Skills (reusable workflows) in Excel and PowerPoint |

Each module includes: theory, practical prompts to try, a multiple-choice exercise, and a detailed answer key. Progress is saved locally (localStorage).

### Use Cases
Filterable use-case libraries by business category:

- `cas_usage_excel-en.html` — What Claude can do in Excel (analysis, formulas, VBA…)
- `cas_usage_powerpoint-en.html` — What Claude can do in PowerPoint (creation, editing, visuals…)
- `cas_usage_skills_excel-en.html` — Excel Skills by domain (Finance, HR, Marketing, IT, Management…)
- `cas_usage_skills_powerpoint-en.html` — PowerPoint Skills by business domain

### Resources & Help (`ressources_aide-en.html`)
Practical documentation organized in four tabs:
- **PowerPoint** — Step-by-step plugin installation guide
- **Excel** — Step-by-step plugin installation guide
- **Skills** — How to configure and share Skills
- **Claude Training** — Official Anthropic resources (Claude 101, Skilljar, documentation, claude.ai)

Also includes a section on model capabilities: complex reasoning, long context window, multilingual support, code generation.

---

## File Structure

```
claude_training/
├── index.html / index-en.html               # Home
├── formations.html / formations-en.html     # Training hub
├── formation_claude_excel.html / -en.html   # Excel training
├── formation_claude_powerpoint.html / -en   # PowerPoint training
├── formation_agent_skills.html / -en.html   # Skills training
├── cas_usage_excel.html / -en.html          # Excel use cases
├── cas_usage_powerpoint.html / -en.html     # PowerPoint use cases
├── cas_usage_skills_excel.html / -en.html   # Excel Skills by domain
├── cas_usage_skills_powerpoint.html / -en   # PowerPoint Skills by domain
├── ressources_aide.html / -en.html          # Resources & Help
├── js/
│   ├── sharepoint-nav.js                    # SharePoint navigation (shared)
│   └── *.js                                 # Per-page scripts
├── css/
│   └── *.css                                # Per-page stylesheets
└── _headers                                 # Cloudflare security headers
```

## Tech Stack

- Vanilla HTML / CSS / JavaScript — no external dependencies
- Google Fonts (DM Mono, Syne, DM Sans)
- localStorage for progress persistence
- SharePoint-compatible (automatic navigation script included)
- Deployed on Cloudflare Pages

## Security

HTTP headers are configured in `_headers` (Cloudflare Pages format):

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' fonts.googleapis.com; ...
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```
