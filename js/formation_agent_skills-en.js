const MODULES = [

  // ── M0 ─────────────────────────────────────────────────────────────────────
  {
    id: 0, level: "Beginner", levelColor: "debutant", duration: "20 min",
    title: "What is a Skill?",
    theory: `
      <p>A <strong>Skill</strong> is a reusable workflow you can trigger with one click in the Claude for Excel or Claude for PowerPoint plugins. Rather than retyping the same instructions every session, a Skill executes them instantly, identically, every time.</p>
      <div class="info-box">
        <div class="info-label">Simple analogy</div>
        A Skill is like a <strong>macro</strong> — but in natural language. You describe once what Claude should do, then call it with a simple <code>/</code> in the panel, without having to rewrite everything.
      </div>
      <p>The fundamental difference from an ordinary prompt:</p>
      <div class="compare-grid">
        <div class="compare-col bad">
          <div class="col-label">Classic prompt</div>
          <ul>
            <li>Retype instructions every session</li>
            <li>Different wording = variable result</li>
            <li>Hard to share easily</li>
            <li>Time wasted on repetitive tasks</li>
          </ul>
        </div>
        <div class="compare-col good">
          <div class="col-label">Skill</div>
          <ul>
            <li>Triggered with one keystroke (<code>/name</code>)</li>
            <li>Consistent and reproducible result</li>
            <li>Shareable with the whole team</li>
            <li>Applicable to any open file</li>
          </ul>
        </div>
      </div>
      <p>Skills are configured once in your <strong>Claude settings</strong> (web or desktop) and automatically become available in the Excel and PowerPoint plugins.</p>
    `,
    prompts: [
      "Which Skills are available for this file?",
      "Explain what the /audit Skill does before I run it",
      "Is there a Skill suited for analyzing this type of data?"
    ],
    exercise: {
      scenario: "Every Monday morning, you open a new Excel report and perform the same checks: formula errors, hardcoded cells, total consistency. This takes you 20 minutes each time.",
      question: "Why is creating a Skill more relevant than a prompt saved in a text file?",
      choices: [
        { text: "Skills are more powerful than prompts", correct: false },
        { text: "A Skill is invoked directly in the plugin with one keystroke, applies to the open file, and produces an identical structured result every time — without copy-pasting from an external file", correct: true },
        { text: "Skills can modify Excel directly, prompts cannot", correct: false },
        { text: "Skills are free unlike prompts", correct: false }
      ],
      feedbackCorrect: "✓ Exactly! The Skill runs directly in the context of the open file, with no friction. No copy-pasting from a text file, no rephrasing — and the result is always structured the same way, making week-to-week comparison easy.",
      feedbackWrong: "Not quite. The real value of a Skill is not technical (Claude has the same capabilities in both cases) — it's ease of use: direct invocation in the plugin, application to the current file, and reproducibility of the result."
    },
    corrected: [
      { title: "Understanding triggering", desc: "In the Claude panel, typing / displays the list of available Skills. Select a Skill or type its full name.", prompt: "/", result: "The list of all Skills configured for this plugin appears. Skills not relevant to the current context may be filtered automatically." },
      { title: "Identifying the right use case", desc: "A Skill is worth creating if you repeat the same task more than 2-3 times a week, or if you need to guarantee an identical result each time.", prompt: null, result: null }
    ]
  },

  // ── M1 ─────────────────────────────────────────────────────────────────────
  {
    id: 1, level: "Beginner", levelColor: "debutant", duration: "25 min",
    title: "Skills in Excel",
    theory: `
      <p>In <strong>Claude for Excel</strong>, Skills are invoked with <code>/</code> in the side panel. Claude analyzes the currently open workbook and applies the Skill's workflow to its content.</p>
      <div class="info-box">
        <div class="info-label">How to invoke a Skill in Excel</div>
        1. Open the Claude panel (Home ribbon or Tools > Add-ins)<br>
        2. Type <strong>/</strong> in the input field<br>
        3. The list of available Skills appears<br>
        4. Select the Skill or keep typing its name to filter<br>
        5. Press Enter — Claude executes it on the open workbook
      </div>
      <p>The most useful Excel Skills cover <strong>structural and recurring tasks</strong>: model auditing, data cleaning, consistency checks, report generation in a standardized format.</p>
      <div class="warn-box">
        <div class="warn-label">⚠ Context limited to the open workbook</div>
        A Skill only applies to the file currently open in Excel. If you want to apply it to another workbook, close the current one and open the new one before running the Skill.
      </div>
      <p>You can <strong>specify the scope</strong> after the Skill name: <code>/audit Results tab only</code> or <code>/clean-up columns A to D</code>.</p>
    `,
    prompts: [
      "/audit — Run a full audit of the open workbook",
      "/clean-up columns B to F — Clean only the selected columns",
      "/audit Results tab — Apply the audit to a specific tab"
    ],
    exercise: {
      scenario: "Every week you receive a CSV export from your ERP, imported into Excel. It systematically contains duplicates, stray spaces in names and dates in the wrong format. You have created a /clean-erp Skill to handle these cases.",
      question: "How do you apply this Skill only to the Customer column (column C) without touching the other data?",
      choices: [
        { text: "Run /clean-erp and let Claude guess the scope", correct: false },
        { text: "Type /clean-erp column C only in the panel before confirming", correct: true },
        { text: "Select column C in Excel then run /clean-erp", correct: false },
        { text: "It is impossible to limit a Skill to a single column", correct: false }
      ],
      feedbackCorrect: "✓ Correct! By specifying the scope directly after the Skill name, you guide Claude on the extent of the action. The Skill applies its workflow only where you indicate.",
      feedbackWrong: "Not quite. The most direct way is to specify the scope in the text after the Skill name. Claude reads this specification and adapts its action accordingly."
    },
    corrected: [
      { title: "Invoke with scope specification", desc: "Add details after the Skill name to target a specific area.", prompt: "/clean-erp column C only — duplicates, spaces, date format", result: "Claude applies the cleanup only to column C without modifying the rest of the workbook." },
      { title: "Chain multiple Skills", desc: "Run a Skill, review the result, then run a second complementary Skill.", prompt: "/clean-erp\n(check the result)\n/audit Data tab", result: "Complete two-step workflow: cleanup then control audit." }
    ]
  },

  // ── M2 ─────────────────────────────────────────────────────────────────────
  {
    id: 2, level: "Beginner", levelColor: "debutant", duration: "20 min",
    title: "Skills in PowerPoint",
    theory: `
      <p>In <strong>Claude for PowerPoint</strong>, Skills work on the same principle — <code>/</code> in the side panel — but apply to the open presentation. They are particularly useful for compliance checks and structural overhauls.</p>
      <div class="info-box">
        <div class="info-label">Particularly useful Skills in PowerPoint</div>
        <span class="skill-tag">/deck-check</span> Checks brand compliance (colors, font, density)<br>
        <span class="skill-tag">/executive-summary</span> Generates an executive summary from the content<br>
        <span class="skill-tag">/storyline</span> Checks the narrative logic of the deck<br>
        <span class="skill-tag">/slide-audit</span> Identifies overloaded or out-of-format slides
      </div>
      <p>PowerPoint Skills are particularly powerful combined with the plugin's <strong>Persistent Instructions</strong>. A /deck-check Skill applied to a deck whose brand guidelines Claude already knows via the Instructions will be much more precise than a generic Skill.</p>
      <div class="warn-box">
        <div class="warn-label">⚠ Excel Skills ≠ PowerPoint Skills</div>
        Skills configured in your settings appear in both plugins. But some Skills designed for Excel don't make sense in PowerPoint (and vice versa). Name your Skills to indicate their context: /audit-excel, /check-ppt.
      </div>
    `,
    prompts: [
      "/deck-check — Check brand compliance of the open presentation",
      "/storyline — Analyze the narrative logic of the deck and suggest improvements",
      "/executive-summary — Generate a 3-slide executive summary from the content"
    ],
    exercise: {
      scenario: "You have a meeting in 2 hours. Your deck is almost ready but you need to verify it follows the brand guidelines: no more than 5 bullets per slide, action titles in 6 words max, accent color #0070C0.",
      question: "What is the fastest way to do this check with a Skill?",
      choices: [
        { text: "Ask Claude to read the deck and list all issues prompt by prompt", correct: false },
        { text: "Run /deck-check from the panel — Claude audits all slides in a single pass and lists non-compliant items", correct: true },
        { text: "Manually check each slide before the meeting", correct: false },
        { text: "Use Excel's /audit (same Skill, different context)", correct: false }
      ],
      feedbackCorrect: "✓ Exactly! A /deck-check Skill designed with the right brand rules checks the entire deck in a single pass and returns a structured report: number of violations per rule, affected slide numbers, suggested corrections.",
      feedbackWrong: "Not the right approach. Manual or prompt-by-prompt verification takes time. The /deck-check Skill does everything in one pass and structures its report so you can correct directly."
    },
    corrected: [
      { title: "Run /deck-check", desc: "The Skill checks the entire deck in one pass.", prompt: "/deck-check", result: "Structured report: slide 4 (7 bullets > 5 max), slide 8 (title 9 words > 6 max), slide 12 (color #FF0000 instead of #0070C0). 3 violations across 18 slides." },
      { title: "Fix with Claude", desc: "Use Claude to directly fix the identified violations.", prompt: "Fix the violations identified by /deck-check: reduce the bullets on slides 4 and 8, and replace the color on slide 12", result: "Claude applies the corrections directly in the open presentation." }
    ]
  },

  // ── M3 ─────────────────────────────────────────────────────────────────────
  {
    id: 3, level: "Intermediate", levelColor: "intermediaire", duration: "25 min",
    title: "Default available Skills",
    theory: `
      <p>Claude for Excel and Claude for PowerPoint offer a set of <strong>predefined Skills</strong> available from installation, without any configuration. They cover the most frequent use cases.</p>
      <div class="info-box">
        <div class="info-label">Default Excel Skills</div>
        <span class="skill-tag">/audit</span> Full audit: errors, hardcodes, broken references<br>
        <span class="skill-tag">/clean-up</span> Cleanup: duplicates, spaces, inconsistent formats<br>
        <span class="skill-tag">/debug</span> Diagnosis of a formula or specific error<br>
        <span class="skill-tag">/financial-model</span> Financial model verification (DCF, LBO, 3-statement)<br>
        <span class="skill-tag">/summarize</span> Structured summary of the workbook content
      </div>
      <div class="info-box">
        <div class="info-label">Default PowerPoint Skills</div>
        <span class="skill-tag">/deck-check</span> Brand compliance and structure audit<br>
        <span class="skill-tag">/storyline</span> Narrative logic verification<br>
        <span class="skill-tag">/executive-summary</span> Executive summary generation<br>
        <span class="skill-tag">/translate</span> Deck translation into another language<br>
        <span class="skill-tag">/slide-audit</span> Density and readability audit of each slide
      </div>
      <p>These default Skills are <strong>starting points</strong>. You can invoke them as-is, or adapt them by adding details after the name (<code>/audit LBO model only</code>). They do not replace custom Skills tailored to your specific processes.</p>
    `,
    prompts: [
      "/audit — What is the exact coverage of this audit?",
      "/financial-model — Suited for a comparable-based valuation model?",
      "/deck-check — What brand rules does this Skill check?"
    ],
    exercise: {
      scenario: "You have just received a cash flow forecast Excel model from a colleague. Before validating the assumptions, you want a quick overview: structure, possible errors, hardcoded cells.",
      question: "Which default Skill best covers this need?",
      choices: [
        { text: "/debug — to find formula errors", correct: false },
        { text: "/audit — full analysis: structure, errors, hardcodes and reference consistency", correct: true },
        { text: "/summarize — to get a content summary", correct: false },
        { text: "/financial-model — specialized for LBO/DCF models", correct: false }
      ],
      feedbackCorrect: "✓ Correct! /audit is the most comprehensive Skill for a first analysis. It covers: tab mapping, formula errors (#REF, #VALUE...), hardcoded cells, circular references and consistency of links between tabs. /debug is more targeted at a specific formula, /financial-model is specialized for DCF/LBO structures.",
      feedbackWrong: "Not the most appropriate choice. /debug targets a specific formula. /summarize summarizes content but doesn't check integrity. /financial-model is optimized for DCF/LBO structures, not a generic cash flow. /audit is the right entry point for a complete first analysis."
    },
    corrected: [
      { title: "Run /audit", desc: "Full audit on the received cash flow model.", prompt: "/audit", result: "Report: 3 tabs (Assumptions, Calculations, Summary). 2 #REF errors in column F. 7 hardcodes identified (fixed interest rates). Likely circular reference between B12 and D8." },
      { title: "Refine with /debug", desc: "Once the audit is done, target the most critical error.", prompt: "/debug #REF error column F", result: "Claude identifies the source: deletion of a row in the Assumptions tab broke the reference. Suggests the fix." }
    ]
  },

  // ── M4 ─────────────────────────────────────────────────────────────────────
  {
    id: 4, level: "Intermediate", levelColor: "intermediaire", duration: "45 min",
    title: "Create, import and test a Skill",
    theory: `
      <p>This module covers the three fundamental operations: <strong>creating a Skill from scratch</strong>, <strong>importing one shared by a colleague</strong>, then <strong>testing it in the plugin</strong> to verify it produces the expected result.</p>

      <div class="info-box">
        <div class="info-label">Where are the Skills settings?</div>
        <strong>On claude.ai:</strong> your profile icon (bottom left) → Settings → Skills<br>
        <strong>Desktop app:</strong> Claude menu → Preferences → Skills<br>
        <strong>In the Office plugin:</strong> Skills are read-only — creation and editing are done only from claude.ai or the desktop.
      </div>

      <p>A Skill is defined by three fields:</p>
      <div class="compare-grid">
        <div class="compare-col good">
          <div class="col-label">Name</div>
          <ul>
            <li>Short keyword, in lowercase</li>
            <li>Hyphens allowed (no spaces)</li>
            <li>E.g.: sales-report, weekly-audit</li>
            <li>This is what you type after /</li>
          </ul>
        </div>
        <div class="compare-col good">
          <div class="col-label">Description</div>
          <ul>
            <li>1 to 2 lines maximum</li>
            <li>Visible in the list after /</li>
            <li>Indicate the context (Excel, PPT)</li>
            <li>E.g.: "Weekly sales report – Excel"</li>
          </ul>
        </div>
      </div>
      <p>The third field, <strong>Instructions</strong>, is the full prompt Claude will execute. It must be self-contained: Claude relies on the file open in the plugin and applies the instructions exactly as written, without asking for anything more.</p>

      <div class="warn-box">
        <div class="warn-label">⚠ Skills appear in both Excel AND PowerPoint</div>
        A Skill created in settings is available in both plugins. If it is specific to one, specify it in the description (e.g.: "Excel only") to avoid running it in the wrong place.
      </div>
    `,
    prompts: [
      "Help me write the prompt for my /sales-report Skill so it is self-contained and precise",
      "Which fields are mandatory when I create a new Skill in settings?",
      "How do I verify that an imported Skill will work on my files before rolling it out?"
    ],
    exercise: {
      scenario: "A colleague shares the prompt for their /proposal-review Skill by email. You copy the text, create the Skill in your settings, and run /proposal-review in PowerPoint. The result is in French whereas your decks are in English.",
      question: "What is the right course of action?",
      choices: [
        { text: "Delete the Skill and ask your colleague to redo a French version", correct: false },
        { text: "Go back to settings, open the Skill, add 'Always reply in English.' at the beginning of the Instructions, save and rerun", correct: true },
        { text: "Add 'in English' after /proposal-review in the panel every time you use it", correct: false },
        { text: "Create a new Skill /proposal-review-en by copying the instructions and fully translating them", correct: false }
      ],
      feedbackCorrect: "✓ Exactly! Adding a single line at the beginning of the Instructions fixes the problem permanently, without starting from scratch. The imported Skill is your base — you adapt it to your context. No need to duplicate or retranslate the entire prompt.",
      feedbackWrong: "There is a simpler way. Going back to settings and adding 'Always reply in English.' at the top of the existing prompt is enough. No need to delete, recreate or duplicate — just adapt the imported prompt to your context."
    },
    corrected: [
      {
        title: "OPERATION 1 — Create a Skill from scratch",
        desc: "Full process from Claude settings.",
        prompt: "1. Open claude.ai in your browser\n2. Click on your profile icon (bottom left) → Settings\n3. Select the 'Skills' tab in the side menu\n4. Click 'New Skill' (button in the top right)\n5. Fill in the Name field: sales-report\n   (lowercase, hyphens, no spaces)\n6. Fill in the Description: Weekly sales report – Excel\n   (visible in the list after /)\n7. Write the Instructions in the large text field:\n   ────────────────────────────\n   Analyze this Excel workbook of sales data.\n   Calculate and display:\n   1. Total revenue (sum of the column whose header contains \"Revenue\" or \"Sales\")\n   2. Revenue per salesperson (group by Name column, sorted descending)\n   3. Top 5 customers by revenue\n   4. Variance vs. prior week if a \"Prior Week\" column exists\n   Format: structured table. Negative variances flagged with ⚠.\n   ────────────────────────────\n8. Click Save\n9. The Skill appears in the list — immediately available in Excel and PowerPoint",
        result: "The /sales-report Skill is created. It will be visible as soon as you type / in the Claude panel of an Office plugin."
      },
      {
        title: "OPERATION 2 — Import a Skill shared by a colleague",
        desc: "Your colleague sends you the name, description and prompt of their Skill by email or Confluence. Steps to import it.",
        prompt: "1. Copy the prompt text sent by your colleague\n   (select all the Instructions text, Ctrl+C)\n2. Open claude.ai → Settings → Skills → New Skill\n3. Enter the Name indicated by your colleague: proposal-review\n   (use exactly the same name for team consistency)\n4. Enter the Description: Commercial proposal audit – PowerPoint\n5. Click in the Instructions field and paste (Ctrl+V)\n6. Quickly read the pasted prompt — check:\n   • No references to local file paths\n   • No column names too specific to your colleague's file\n   • The language matches your usage\n7. Adapt if necessary (e.g.: add \"Always reply in English.\" on the first line)\n8. Click Save",
        result: "The /proposal-review Skill is available in both your plugins. You use the same workflow as your colleague, adapted to your context."
      },
      {
        title: "OPERATION 3 — Test the Skill in the plugin and read the result",
        desc: "Verify the Skill works as expected before using it in production.",
        prompt: "1. Open Excel (or PowerPoint) with a representative test file\n   → Ideally a real file, not an empty one\n2. Open the Claude panel (Home ribbon or Tools > Add-ins)\n3. Type / in the input field\n   → The list of available Skills appears\n   → Verify your new Skill appears in the list\n   → If it doesn't appear: wait 30 seconds and try again (sync)\n4. Click on the Skill or keep typing its name to filter\n5. Press Enter to run\n6. Read the result produced by Claude\n\nWhat to evaluate in the result:\n• Are all requested indicators present?\n• Does the output format match what was described?\n• Do the calculated values appear correct?\n• Is the language correct?\n• Are there errors or 'column not found' mentions?",
        result: "If the result is as expected → Skill ready to use.\nIf something is missing or incorrect → go back to Settings → Skills → click the Skill → modify the Instructions → Save → rerun in the plugin."
      }
    ]
  },

  // ── M5 ─────────────────────────────────────────────────────────────────────
  {
    id: 5, level: "Intermediate", levelColor: "intermediaire", duration: "25 min",
    title: "Skills and combined prompts",
    theory: `
      <p>A Skill is not a terminal — it is a <strong>conversation starting point</strong>. After running a Skill, you can continue interacting with Claude to refine, complete or redirect the analysis.</p>
      <div class="info-box">
        <div class="info-label">Common combination patterns</div>
        <strong>Skill → follow-up question:</strong> /audit then "which hardcode is most risky?"<br>
        <strong>Skill → corrective action:</strong> /deck-check then "fix slides 4 and 7"<br>
        <strong>Skill → new Skill:</strong> /clean-up then /audit to verify after cleanup<br>
        <strong>Skill + context:</strong> /sales-report North region only
      </div>
      <p>You can also <strong>pass additional context</strong> when triggering the Skill by adding text after the name: <code>/audit ignoring the Helper and Parameters tabs</code>. Claude integrates this context on top of the Skill's instructions.</p>
      <p>Skills are <strong>without memory between sessions</strong>. If you close the panel and reopen it, you start from a blank conversation. But within the same session, the results of a Skill remain accessible for subsequent prompts.</p>
    `,
    prompts: [
      "/audit — then: focus on the 3 most critical issues to fix first",
      "/deck-check — then: automatically fix all bullet density violations",
      "/sales-report South region — then: compare with North region from last week's report"
    ],
    exercise: {
      scenario: "You run /audit on a financial model. Claude identifies 12 issues: 3 critical errors, 5 hardcodes, 4 improvement suggestions. You have 15 minutes before your meeting.",
      question: "How do you use Claude effectively in this context after the Skill?",
      choices: [
        { text: "Close the panel and manually fix all 12 issues", correct: false },
        { text: "Ask Claude to fix only the 3 critical errors now, and to list the hardcodes to address after the meeting", correct: true },
        { text: "Rerun /audit to get a more detailed report", correct: false },
        { text: "Send the audit report to a colleague and ask them to fix it", correct: false }
      ],
      feedbackCorrect: "✓ Perfect! The Skill + follow-up prompt combination lets you prioritize. Claude already has the full context of the file and the 12 issues — you simply direct the action toward what is urgent. The hardcode list for after the meeting remains accessible in the same session.",
      feedbackWrong: "Not optimal. The real power is to use the Skill as a diagnosis, then dialogue with Claude to prioritize and fix directly. Claude already has all the context — make use of it in the same session."
    },
    corrected: [
      { title: "Prioritize after the Skill", desc: "Ask Claude to sort the results by urgency.", prompt: "/audit\n→ Of these 12 issues, which 3 must absolutely be fixed before a validation meeting?", result: "Claude identifies the 3 critical errors (broken reference, division by zero, inconsistent total) and presents them with their impact." },
      { title: "Fix on the fly", desc: "Directly chain the correction on the priority items.", prompt: "Fix these 3 critical errors now.", result: "Claude applies the corrections directly in the open file. The hardcodes remain listed in the conversation for later handling." }
    ]
  },

  // ── M6 ─────────────────────────────────────────────────────────────────────
  {
    id: 6, level: "Advanced", levelColor: "avance", duration: "30 min",
    title: "Writing an effective Skill",
    theory: `
      <p>The quality of a Skill depends entirely on the quality of its instructions. A poorly written Skill prompt produces inconsistent or unusable results — exactly what we're trying to avoid.</p>
      <div class="info-box">
        <div class="info-label">Anatomy of a good Skill prompt</div>
        <strong>1. Application context</strong>: "Analyze this HR data workbook..."<br>
        <strong>2. Precise actions</strong>: numbered list of what Claude must do<br>
        <strong>3. Concrete references</strong>: name the columns, tabs, formats<br>
        <strong>4. Output format</strong>: table, list, report, X-line summary<br>
        <strong>5. Business rules</strong>: thresholds, exceptions, specific definitions
      </div>
      <div class="compare-grid">
        <div class="compare-col bad">
          <div class="col-label">Ineffective Skill</div>
          <ul>
            <li>Analyze the data and make a report</li>
            <li>Check that everything is correct</li>
            <li>Clean up the file</li>
          </ul>
        </div>
        <div class="compare-col good">
          <div class="col-label">Effective Skill</div>
          <ul>
            <li>Calculate revenue by region (column D), sorted descending</li>
            <li>Identify rows where Margin (col. F) &lt; 10%</li>
            <li>Remove duplicates on the Customer ID key (col. A)</li>
          </ul>
        </div>
      </div>
      <p>Test your Skills on <strong>several different files</strong> before rolling them out to the team. A Skill may work perfectly on the file you designed it for, but fail on files with slightly different structures.</p>
    `,
    prompts: [
      "Help me improve this Skill prompt to make it more precise and reproducible",
      "What information is missing from this prompt for the Skill to work on any file?",
      "How do I make this Skill more robust if the file structure changes?"
    ],
    exercise: {
      scenario: "You wrote the /budget-check Skill with this prompt: 'Analyze the budget and tell me if everything is fine.' On your file it works. On your colleague's file, the result is vague and unusable.",
      question: "Which reformulation makes this Skill robust for different file structures?",
      choices: [
        { text: "Analyze the budget in detail and provide a complete report.", correct: false },
        { text: "Analyze this budget tracking workbook. Identify: 1) rows where Actual exceeds Budget by more than 10% (Budget and Actual columns — look for these headers), 2) the total of variances in absolute value, 3) the top 3 most over-budget line items. Format: table with columns Line Item, Budget, Actual, Variance%, Alert.", correct: true },
        { text: "Check the workbook budget and flag anomalies.", correct: false },
        { text: "Read the budget file and list the problems.", correct: false }
      ],
      feedbackCorrect: "✓ Perfect! This prompt looks for columns by their header (not by letter), defines the alert threshold (10%), lists 3 precise indicators and enforces a structured output format. It will work even if the Budget column is in C on one file and E on another.",
      feedbackWrong: "Still too vague. The robustness of a Skill comes from using column headers (not letters), explicitly defined thresholds, and a precise output format. Without these, the result depends on Claude's interpretation and varies from file to file."
    },
    corrected: [
      { title: "Reference by header, not by letter", desc: "Look for the 'Budget' column rather than column D — more robust if the structure changes.", prompt: "Identify the columns with headers 'Budget' and 'Actual'. If they don't exist, say so rather than guessing.", result: "The Skill works even if columns are reorganized from one file to another." },
      { title: "Define thresholds and exceptions", desc: "Specify business rules directly in the Skill.", prompt: "Alert threshold: variance > 10% AND absolute value > 5,000. Exclude rows with 'Out of scope' in the Status column.", result: "The Skill applies the same business rules on every execution, without depending on Claude's interpretation." },
      { title: "Specify the output format", desc: "Enforce a reusable result structure.", prompt: "Output format: Markdown table with columns Line Item | Budget | Actual | Variance% | Alert (✓/⚠). Followed by a 2-line summary.", result: "Identical result on every execution — easy to compare week to week." }
    ]
  },

  // ── M7 ─────────────────────────────────────────────────────────────────────
  {
    id: 7, level: "Advanced", levelColor: "avance", duration: "30 min",
    title: "Team-shared Skills",
    theory: `
      <p>Skills reach their full value when <strong>shared across a team</strong>. Each member works with the same standardized workflows, ensuring consistent and comparable results.</p>
      <div class="info-box">
        <div class="info-label">How to share a Skill</div>
        Skills are configured in each user's Claude settings. To share a Skill with a team:<br>
        1. Export the Skill instructions (copy the prompt)<br>
        2. Distribute via your usual channel (email, Confluence, SharePoint, Notion...)<br>
        3. Each member creates the Skill in their own settings with the same prompt<br>
        In an Enterprise context, Skills can be centrally deployed via the admin console.
      </div>
      <p>For a Skill to work for the whole team, its instructions must be <strong>machine- and account-independent</strong>: no local file paths, no references to data that only exists on your machine.</p>
      <div class="green-box">
        <div class="green-label">Team best practice</div>
        Maintain a <strong>team Skills registry</strong>: name, description, owner, last revision date. An unmaintained Skill can become obsolete if processes or file structures evolve.
      </div>
    `,
    prompts: [
      "How do I document this Skill so my colleagues know when to use it?",
      "What details should I add to the prompt so it works on everyone's files?",
      "Help me write the short description of this Skill for the team registry"
    ],
    exercise: {
      scenario: "You have created a /proposal-review Skill that audits your PowerPoint commercial proposals. It works perfectly on your files. You want to roll it out to the 8 salespeople on your team.",
      question: "What is the main risk before sharing this Skill with the team?",
      choices: [
        { text: "The Skill might be too slow on colleagues' computers", correct: false },
        { text: "The prompt may reference elements specific to your usage (your slide names, your specific brand guidelines, your personal criteria) that don't match other salespeople's files", correct: true },
        { text: "A Skill can only be used by its creator", correct: false },
        { text: "Other salespeople would need administrator access to add the Skill", correct: false }
      ],
      feedbackCorrect: "✓ Correct! Before sharing, verify the prompt does not contain references to your personal usage: slide names specific to your own decks, criteria that reflect your way of working rather than the team standard, file structures that only match yours.",
      feedbackWrong: "No. Performance and permissions are not the problem. The real risk is genericity: a Skill designed on your own files may fail or produce ill-suited results on your colleagues' files if it is too specific to your usage."
    },
    corrected: [
      { title: "Generalize the prompt", desc: "Remove references specific to your usage.", prompt: "Before sharing, re-read the prompt and replace:\n- Specific slide names → generic descriptions ('introduction slide', 'pricing slide')\n- Personal criteria → documented team standards\n- Your own formats → team standard formats", result: "The prompt works for all types of commercial proposals in the team." },
      { title: "Create a Skill sheet", desc: "Document the Skill for the team registry.", prompt: "Name: /proposal-review\nContext: PowerPoint — Commercial proposals\nUsage: Before sending to a client. Checks: narrative structure, visible pricing, clear next steps, brand compliance.\nOwner: [name] — Revision: [date]\nFull prompt: [paste the prompt]", result: "Salespeople know when to use it and the owner keeps the prompt up to date." }
    ]
  },

  // ── M8 ─────────────────────────────────────────────────────────────────────
  {
    id: 8, level: "Advanced", levelColor: "avance", duration: "25 min",
    title: "Integrating Skills into your workflow",
    theory: `
      <p>The ultimate goal is for Skills to become <strong>natural reflexes</strong> in your workflow — as automatic as pressing Ctrl+S before closing a file.</p>
      <div class="info-box">
        <div class="info-label">Examples of workflows with Skills</div>
        <strong>Before sending (Excel):</strong> /audit → fix errors → /clean-up → send<br>
        <strong>Friday evening (Excel):</strong> /weekly-report → copy the result → paste in the summary email<br>
        <strong>Before a meeting (PPT):</strong> /deck-check → fix violations → /storyline → finalize<br>
        <strong>On receipt (Excel):</strong> /audit received file → assess risks → reply to colleague
      </div>
      <p>Build your workflows progressively. Start with <strong>a single Skill</strong> on the most repetitive task. Once it is built into your reflex, add a second one. Too many new Skills at once blur habits.</p>
      <div class="green-box">
        <div class="green-label">Success indicator</div>
        A Skill is well integrated when you run it <strong>before even thinking about it consciously</strong> — like putting on headphones before listening to music. If you still have to look up its name or hesitate about the right moment, keep using it daily for a week.
      </div>
    `,
    prompts: [
      "For what type of weekly task is it most relevant to create a Skill?",
      "How do I know if a Skill is genuinely saving me time?",
      "Help me identify the 3 repetitive tasks in my week that deserve a Skill"
    ],
    exercise: {
      scenario: "You now have 7 Skills configured in your plugins. Some save you a lot of time, others you created 'just in case' and have never been used.",
      question: "How do you decide which ones to keep and which ones to delete?",
      choices: [
        { text: "Keep all Skills — they cost nothing to have", correct: false },
        { text: "Delete Skills unused for 30 days: a list that is too long slows down selection and dilutes attention away from truly useful Skills", correct: true },
        { text: "Keep only team-created Skills, delete personal ones", correct: false },
        { text: "Ask Claude which Skill is most useful", correct: false }
      ],
      feedbackCorrect: "✓ Correct! An overcrowded Skill list creates friction: finding the right Skill takes time, which cancels out the gain. Keep only regularly used Skills — 5 heavily used Skills are worth more than 20 Skills of which 15 are never used.",
      feedbackWrong: "Clutter has a real cost. When you type / in the panel, a long list slows down selection. Unused Skills create noise and dilute attention. A trimmed Skills portfolio is more effective."
    },
    corrected: [
      { title: "Audit your Skills portfolio", desc: "Review your Skills once a month.", prompt: "List of my Skills:\n/audit → used 4x/week → Keep\n/sales-report → used 1x/week → Keep\n/clean-erp → used 2x/week → Keep\n/competitive-analysis → used 0x → Delete\n/translate → used 1x 2 months ago → Delete", result: "Portfolio reduced from 7 to 3 Skills — the / list is faster to browse." },
      { title: "Identify the next Skill to create", desc: "Spot the repetitive task consuming the most time without a dedicated Skill.", prompt: "Think about the tasks you repeat each week in Excel or PowerPoint without a dedicated Skill. Which one takes the most time each time?", result: "Identification of the next Skill to create to maximize time savings." }
    ]
  }
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let _savedProgress = [];
try { _savedProgress = JSON.parse(localStorage.getItem('skills_office_completed') || '[]'); if (!Array.isArray(_savedProgress)) _savedProgress = []; } catch(e) { _savedProgress = []; }
const completed = new Set(_savedProgress);
let currentModuleId = null;
let exerciseAnswered = false;

function saveProgress() {
  localStorage.setItem('skills_office_completed', JSON.stringify([...completed]));
  updateProgressBar();
}

function updateProgressBar() {
  const pct = (completed.size / MODULES.length) * 100;
  document.getElementById('globalProg').style.width = pct + '%';
  document.getElementById('globalProgText').textContent = `${completed.size} / ${MODULES.length} modules`;
  MODULES.forEach(m => {
    const nav = document.getElementById('nav-m' + m.id);
    if (!nav) return;
    nav.classList.toggle('completed', completed.has(m.id));
  });
}

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (name === 'home') document.getElementById('nav-home').classList.add('active');
  if (name === 'ressources') document.getElementById('nav-ressources').classList.add('active');
}

function showModule(id) {
  currentModuleId = id;
  exerciseAnswered = false;
  const m = MODULES[id];
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('nav-m' + id).classList.add('active');
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-module').classList.add('active');

  const levelColors = { debutant: 'var(--debutant)', intermediaire: 'var(--intermediaire)', avance: 'var(--avance)' };
  const color = levelColors[m.levelColor];

  const correctedHTML = m.corrected.map((step, i) => `
    <div class="corrected-step">
      <div class="corrected-num">${i + 1}</div>
      <div class="corrected-content">
        <div class="step-title">${step.title}</div>
        <div class="step-desc">${step.desc}</div>
        ${step.prompt ? `<div class="corrected-prompt">${escHtml(step.prompt)}</div>` : ''}
        ${step.result ? `<div class="result-preview">${escHtml(step.result)}</div>` : ''}
      </div>
    </div>
  `).join('');

  const choicesHTML = m.exercise.choices.map((c, i) => `
    <div class="choice" onclick="answerExercise(${id}, ${i}, ${c.correct})">
      <span class="choice-letter">${String.fromCharCode(65 + i)}</span>
      ${escHtml(c.text)}
    </div>
  `).join('');

  const promptsHTML = m.prompts.map(p => `
    <div class="prompt-card" onclick="copyPrompt(this)">
      <span class="prompt-icon">→</span>
      <span class="prompt-text">${escHtml(p)}</span>
      <span class="copy-hint">copy</span>
    </div>
  `).join('');

  document.getElementById('module-content').innerHTML = `
    <div class="module-header">
      <div class="module-breadcrumb">
        <span style="cursor:pointer;color:var(--accent)" onclick="showScreen('home')">Office Skills</span>
        <span class="sep">/</span>
        <span style="color:${color}">${m.level}</span>
        <span class="sep">/</span>
        <span>${m.title}</span>
      </div>
      <h2 class="module-title">${m.title}</h2>
      <div class="module-meta">
        <span class="meta-pill" style="border-color:${color};color:${color}">${m.level}</span>
        <span class="meta-pill">⏱ ${m.duration}</span>
        <span class="meta-pill">Module ${m.id + 1} / ${MODULES.length}</span>
      </div>
    </div>

    <div class="lesson-section open">
      <div class="lesson-section-header" onclick="toggleSection(this)">
        <div class="section-icon icon-theory">📖</div>
        <span class="section-title">Theory</span>
        <span class="section-toggle">▾</span>
      </div>
      <div class="section-body">
        <div class="theory-content">${m.theory}</div>
      </div>
    </div>

    <div class="lesson-section">
      <div class="lesson-section-header" onclick="toggleSection(this)">
        <div class="section-icon icon-prompt">→</div>
        <span class="section-title">Prompts to try</span>
        <span class="section-toggle">▾</span>
      </div>
      <div class="section-body">
        <div class="prompt-list">${promptsHTML}</div>
      </div>
    </div>

    <div class="lesson-section">
      <div class="lesson-section-header" onclick="toggleSection(this)">
        <div class="section-icon icon-exercise">✏</div>
        <span class="section-title">Interactive exercise</span>
        <span class="section-toggle">▾</span>
      </div>
      <div class="section-body">
        <div class="exercise-wrapper">
          <div class="exercise-scenario">
            <div class="scenario-label">Scenario</div>
            ${escHtml(m.exercise.scenario)}
          </div>
          <div class="exercise-question">${escHtml(m.exercise.question)}</div>
          <div class="choices" id="choices-${id}">${choicesHTML}</div>
          <div class="feedback-box correct" id="feedback-correct-${id}">${m.exercise.feedbackCorrect}</div>
          <div class="feedback-box wrong" id="feedback-wrong-${id}">${m.exercise.feedbackWrong}</div>
          <div class="exercise-actions">
            <button class="btn btn-primary" onclick="completeModule(${id})" id="btn-complete-${id}" disabled>Mark as completed</button>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-section">
      <div class="lesson-section-header" onclick="toggleSection(this)">
        <div class="section-icon icon-corrected">✓</div>
        <span class="section-title">Detailed answer key</span>
        <span class="section-toggle">▾</span>
      </div>
      <div class="section-body">
        <div class="corrected-wrapper">${correctedHTML}</div>
      </div>
    </div>

    <div class="module-nav">
      ${id > 0 ? `<button class="btn" onclick="showModule(${id - 1})">← Previous</button>` : '<div></div>'}
      ${id < MODULES.length - 1
        ? `<button class="btn btn-primary" onclick="showModule(${id + 1})">Next →</button>`
        : `<button class="btn btn-primary" onclick="showCompletion()">Complete the training →</button>`
      }
    </div>
  `;

  if (completed.has(id)) {
    document.getElementById('btn-complete-' + id).disabled = false;
    document.getElementById('btn-complete-' + id).textContent = '✓ Completed';
  }

  window.scrollTo(0, 0);
}

function answerExercise(moduleId, choiceIndex, isCorrect) {
  if (exerciseAnswered) return;
  exerciseAnswered = true;
  const choices = document.querySelectorAll(`#choices-${moduleId} .choice`);
  choices.forEach((c, i) => {
    if (i === choiceIndex) c.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
    else if (MODULES[moduleId].exercise.choices[i].correct) c.classList.add('reveal-correct');
  });
  document.getElementById('feedback-correct-' + moduleId).classList.add('show');
  if (!isCorrect) document.getElementById('feedback-wrong-' + moduleId).classList.add('show');
  document.getElementById('btn-complete-' + moduleId).disabled = false;
}

function completeModule(id) {
  completed.add(id);
  saveProgress();
  const btn = document.getElementById('btn-complete-' + id);
  btn.textContent = '✓ Completed';
  btn.disabled = true;
  document.getElementById('nav-m' + id).classList.add('completed');
  if (id < MODULES.length - 1) setTimeout(() => showModule(id + 1), 400);
  else setTimeout(() => showCompletion(), 400);
}

function showCompletion() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-module').classList.add('active');
  document.getElementById('module-content').innerHTML = `
    <div class="completion-screen">
      <div class="completion-icon">🏆</div>
      <div class="completion-title">Training completed!</div>
      <p class="completion-desc">You now know how to use, create, share and integrate Skills into your Claude for Excel and Claude for PowerPoint plugins. Less repetition, more efficiency.</p>
      <button class="btn btn-primary" onclick="showScreen('home')">Back to home</button>
    </div>
  `;
}

function toggleSection(header) { header.parentElement.classList.toggle('open'); }

function copyPrompt(card) {
  const text = card.querySelector('.prompt-text').textContent;
  navigator.clipboard.writeText(text).catch(() => {
    card.querySelector && (card.querySelector('.copy-hint').textContent = '⚠ Manual copy');
  });
  card.classList.add('copied');
  card.querySelector('.copy-hint').textContent = 'copied!';
  setTimeout(() => { card.classList.remove('copied'); card.querySelector('.copy-hint').textContent = 'copy'; }, 1500);
}

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

updateProgressBar();
