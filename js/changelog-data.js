const VERSIONS = [

  {
    version: "1.4.0",
    date_fr: "12 août 2026",
    date_en: "August 12, 2026",
    sections: [
      {
        cat_fr: "Alignement Claude 101",
        cat_en: "Claude 101 alignment",
        items_fr: [
          'Mise à jour de la description de <a href="ressources_aide.html" class="change-link">Claude 101</a> pour refléter le contenu actuel (Projects, Artifacts, Skills, Enterprise Search, Research)',
          'Ajout de 3 nouveaux cours Skilljar avec badge "Nouveau" dans <a href="ressources_aide.html" class="change-link">Ressources &amp; Aide</a> : Introduction to Agent Skills, Introduction to Claude Cowork, Claude Code 101'
        ],
        items_en: [
          'Updated <a href="ressources_aide-en.html" class="change-link">Claude 101</a> description to reflect actual content (Projects, Artifacts, Skills, Enterprise Search, Research)',
          'Added 3 new Skilljar courses with "New" badge in <a href="ressources_aide-en.html" class="change-link">Resources &amp; Help</a>: Introduction to Agent Skills, Introduction to Claude Cowork, Claude Code 101'
        ]
      },
      {
        cat_fr: "Formation Skills",
        cat_en: "Skills training",
        items_fr: [
          'Ajout de 4 concepts dans les <a href="formation_agent_skills.html" class="change-link">ressources officielles Skills</a> : fichier SKILL.md et frontmatter, triggers, progressive disclosure, partage via plugins (7 &rarr; 11 concepts)',
          'Checklist de partage enrichie avec le frontmatter'
        ],
        items_en: [
          'Added 4 concepts to the <a href="formation_agent_skills-en.html" class="change-link">official Skills resources</a>: SKILL.md file and frontmatter, triggers, progressive disclosure, sharing via plugins (7 &rarr; 11 concepts)',
          'Sharing checklist enriched with frontmatter requirement'
        ]
      },
      {
        cat_fr: "Modèles",
        cat_en: "Models",
        items_fr: [
          'Mise à jour des noms de modèles vers les versions actuelles : Haiku 4.5, Sonnet 5, Opus 5'
        ],
        items_en: [
          'Updated model names to current versions: Haiku 4.5, Sonnet 5, Opus 5'
        ]
      }
    ]
  },

  {
    version: "1.3.0",
    date_fr: "26 mai 2026",
    date_en: "May 26, 2026",
    sections: [
      {
        cat_fr: "Skills",
        cat_en: "Skills",
        items_fr: [
          'Ajout de 5 templates de marque dans les <a href="cas_usage_skills_powerpoint.html" class="change-link">Skills PowerPoint</a> : Arbonne, Dr Pierre Ricaud, SABON, Yves Rocher, Groupe Rocher',
          'Ajout du <a href="skills_catalog.html" class="change-link">Catalogue des Skills</a> (172 Skills) avec recherche et filtres par catégorie',
          'Ajout de l\'accordéon Skills dans les pages <a href="ressources_aide.html" class="change-link">Ressources &amp; Aide</a>',
          'Nouvelle carte <a href="index.html" class="change-link">Catalogue des Skills</a> sur la page d\'accueil'
        ],
        items_en: [
          'Added 5 brand templates to <a href="cas_usage_skills_powerpoint-en.html" class="change-link">PowerPoint Skills</a>: Arbonne, Dr Pierre Ricaud, SABON, Yves Rocher, Groupe Rocher',
          'Added the <a href="skills_catalog-en.html" class="change-link">Skills Catalog</a> (172 Skills) with search and category filters',
          'Added Skills accordion to <a href="ressources_aide-en.html" class="change-link">Resources &amp; Help</a> pages',
          'New <a href="index-en.html" class="change-link">Skills Catalog</a> card on the homepage'
        ]
      }
    ]
  },

  {
    version: "1.2.0",
    date_fr: "24 mai 2026",
    date_en: "May 24, 2026",
    sections: [
      {
        cat_fr: "Sécurité",
        cat_en: "Security",
        items_fr: [
          'Remplacement de tous les <code>onclick</code> inline par une délégation d\'événements (CSP)',
          'Hardening des en-têtes de sécurité Cloudflare'
        ],
        items_en: [
          'Replaced all inline <code>onclick</code> handlers with event delegation (CSP compliance)',
          'Cloudflare security headers hardening'
        ]
      },
      {
        cat_fr: "Formation Skills",
        cat_en: "Skills training",
        items_fr: [
          'Ajout de l\'écran <a href="formation_agent_skills.html" class="change-link">Ressources officielles</a> dans la formation Skills (concepts Anthropic, checklist de partage)'
        ],
        items_en: [
          'Added the <a href="formation_agent_skills-en.html" class="change-link">Official resources</a> screen to Skills training (Anthropic concepts, sharing checklist)'
        ]
      }
    ]
  },

  {
    version: "1.1.0",
    date_fr: "21 mai 2026",
    date_en: "May 21, 2026",
    sections: [
      {
        cat_fr: "Contenu",
        cat_en: "Content",
        items_fr: [
          'Ajout de l\'onglet <a href="ressources_aide.html" class="change-link">Skills</a> dans les pages Ressources &amp; Aide (Excel + PowerPoint)',
          'Ajout des cas d\'usage Skills par domaine métier : <a href="cas_usage_skills_excel.html" class="change-link">Excel</a> (18 Skills, 6 domaines) et <a href="cas_usage_skills_powerpoint.html" class="change-link">PowerPoint</a> (23 Skills, 7 domaines)',
          'Nouvelles cartes Skills Excel et Skills PowerPoint sur la <a href="index.html" class="change-link">page d\'accueil</a>'
        ],
        items_en: [
          'Added the <a href="ressources_aide-en.html" class="change-link">Skills</a> tab to Resources &amp; Help pages (Excel + PowerPoint)',
          'Added Skills use cases by business domain: <a href="cas_usage_skills_excel-en.html" class="change-link">Excel</a> (18 Skills, 6 domains) and <a href="cas_usage_skills_powerpoint-en.html" class="change-link">PowerPoint</a> (23 Skills, 7 domains)',
          'New Skills Excel and Skills PowerPoint cards on the <a href="index-en.html" class="change-link">homepage</a>'
        ]
      },
      {
        cat_fr: "Internationalisation",
        cat_en: "Internationalization",
        items_fr: [
          'Ajout du toggle FR/EN sur toutes les pages avec traductions complètes',
          'Mélange aléatoire des réponses de QCM à chaque affichage',
          'Fil d\'Ariane dans la sidebar des formations'
        ],
        items_en: [
          'Added FR/EN language toggle on all pages with full translations',
          'Random shuffle of quiz answers on each display',
          'Breadcrumb navigation in the training sidebar'
        ]
      }
    ]
  },

  {
    version: "1.0.0",
    date_fr: "12 mai 2026",
    date_en: "May 12, 2026",
    sections: [
      {
        cat_fr: "Lancement",
        cat_en: "Launch",
        items_fr: [
          'Publication de la <a href="formation_claude_excel.html" class="change-link">formation Claude for Excel</a> (14 modules, 3 niveaux, ~7h)',
          'Publication de la <a href="formation_claude_powerpoint.html" class="change-link">formation Claude for PowerPoint</a> (9 modules, 3 niveaux, ~7h)',
          'Publication de la <a href="formation_agent_skills.html" class="change-link">formation Office Skills</a> (9 modules, 3 niveaux, ~4h)',
          'Ajout de la page <a href="ressources_aide.html" class="change-link">Ressources &amp; Aide</a> avec installation, limites et FAQ',
          'Ajout des <a href="cas_usage_excel.html" class="change-link">cas d\'usage Excel</a> (20 cas) et <a href="cas_usage_powerpoint.html" class="change-link">cas d\'usage PowerPoint</a> (20 cas)',
          'Déploiement sur Cloudflare Pages avec compatibilité SharePoint'
        ],
        items_en: [
          'Published <a href="formation_claude_excel-en.html" class="change-link">Claude for Excel training</a> (14 modules, 3 levels, ~7h)',
          'Published <a href="formation_claude_powerpoint-en.html" class="change-link">Claude for PowerPoint training</a> (9 modules, 3 levels, ~7h)',
          'Published <a href="formation_agent_skills-en.html" class="change-link">Office Skills training</a> (9 modules, 3 levels, ~4h)',
          'Added <a href="ressources_aide-en.html" class="change-link">Resources &amp; Help</a> page with installation, limitations and FAQ',
          'Added <a href="cas_usage_excel-en.html" class="change-link">Excel use cases</a> (20 cases) and <a href="cas_usage_powerpoint-en.html" class="change-link">PowerPoint use cases</a> (20 cases)',
          'Deployed on Cloudflare Pages with SharePoint compatibility'
        ]
      }
    ]
  }

];
