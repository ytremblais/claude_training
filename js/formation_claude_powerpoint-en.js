const MODULES = [

  // M0 - Installation
  {
    id: 0, level: "Beginner", levelColor: "debutant", duration: "30 min",
    timing: { theory: "10 min", prompts: "8 min", exercise: "9 min", corrected: "3 min" },
    title: "Installation and sign-in",
    theory: `
      <p>Claude for PowerPoint is an official Anthropic add-in available on the <strong>Microsoft Marketplace</strong>. It integrates directly into the PowerPoint <strong>Home</strong> ribbon as an interactive side panel.</p>
      <div class="info-box">
        <div class="info-label">Compatible versions</div>
        PowerPoint Web · PowerPoint Windows (Microsoft 365, build 16.0.13127+) · PowerPoint Mac (v16.46+)
      </div>
      <p>Once installed, the Claude panel appears in your ribbon. Each user must sign in with their Claude account (Pro, Max, Team or Enterprise). <strong>Conversation history is not saved between sessions</strong> — each time you open the add-in you start from a blank conversation.</p>
      <div class="warn-box">
        <div class="warn-label">⚠ Important limitation</div>
        Claude can only read the presentation <strong>currently open</strong> in PowerPoint. Closed files and other documents are not accessible. iPad and Android versions are not supported.
      </div>
    `,
    prompts: [
      "Describe the structure of this presentation and the purpose of each section",
      "How many slides does this deck have and what is the main thread?",
      "What can you do with this presentation?"
    ],
    exercise: {
      scenario: "Claude for PowerPoint has already been installed on your machine. Before you start using it, you need to make sure the plugin is present and active in PowerPoint.",
      question: "What is the correct way to verify that Claude for PowerPoint is available and active?",
      choices: [
        { text: "Open PowerPoint and wait for the Claude panel to appear automatically on startup", correct: false },
        { text: "Go to the Home ribbon > Add-ins and verify that 'Claude by Anthropic' appears in the list of active add-ins", correct: true },
        { text: "Search for 'Claude' in the PowerPoint search bar", correct: false },
        { text: "Restart the computer and see if Claude appears in the ribbon", correct: false }
      ],
      feedbackCorrect: "✓ Perfect! The verification goes through Home > Add-ins (Windows) or Tools > Add-ins (Mac). That is where you confirm the plugin is active and that the Claude panel can appear on the right side of the screen.",
      feedbackWrong: "Not quite. Claude for PowerPoint does not appear automatically on startup and is not accessible via the search bar. The correct method is to verify its presence in Add-ins from the Home ribbon (Windows) or the Tools menu (Mac)."
    },
    corrected: [
      { title: "Verify the plugin is present", desc: "Windows: Home > Add-ins, verify that 'Claude by Anthropic' appears in the list. Mac: Tools > Add-ins. If absent, relaunch the installation from marketplace.microsoft.com.", prompt: null, result: null },
      { title: "Activate in PowerPoint", desc: "Select 'Claude by Anthropic' from the add-ins list to enable the panel. The Claude panel appears on the right side of the screen.", prompt: null, result: null },
      { title: "Sign in", desc: "Enter your Claude credentials (Pro/Max/Team/Enterprise required). The session is linked to your existing account.", prompt: null, result: null },
      { title: "First contact with the deck", desc: "Before any action, ask for an overview of the presentation.", prompt: "Describe the structure of this deck, the purpose of each section and the main message", result: "Claude analyses all slides, cites the key elements and gives you a complete map in a few seconds." }
    ]
  },

  // M1 - Generate a deck
  {
    id: 1, level: "Beginner", levelColor: "debutant", duration: "30 min",
    timing: { theory: "10 min", prompts: "8 min", exercise: "9 min", corrected: "3 min" },
    title: "Generate a complete deck",
    theory: `
      <p>Claude can generate a complete presentation from a <strong>natural-language description</strong>. It automatically builds a logical structure, slide titles and content suited to your objective.</p>
      <p>The quality of the result depends directly on the precision of your prompt. The more context you give (audience, number of slides, objective, format), the more adapted the generated deck will be.</p>
      <div class="info-box">
        <div class="info-label">Key elements to specify in your prompt</div>
        Number of slides · Target audience · Presentation objective · Desired structure · Tone (formal / concise / storytelling)
      </div>
      <div class="warn-box">
        <div class="warn-label">⚠ Always review before sharing</div>
        Claude can make content, interpretation or structural errors. Generation is a <strong>first draft</strong>, not a final deliverable.
      </div>
    `,
    prompts: [
      "Create a 10-slide internal project update: progress status, milestones reached, blockers and next steps for Q3",
      "Build a 12-slide go-to-market strategy deck for a B2B SaaS product targeting HR Directors",
      "Create a 6-slide executive summary on our Q2 performance with key indicators and recommendations"
    ],
    exercise: {
      scenario: "You need to prepare an 8-slide presentation to convince your leadership to invest in a new product. The audience is made up of non-technical decision-makers. You have 20 minutes.",
      question: "Which prompt will produce the most suitable deck for this situation?",
      choices: [
        { text: "Create a presentation about our new product", correct: false },
        { text: "Create an 8-slide investment pitch deck for non-technical executives: problem, solution, market size, ROI, risks and next steps. Tone: concise and business-focused.", correct: true },
        { text: "Make some slides about product investment for management", correct: false },
        { text: "Generate a deck with all the information about the product", correct: false }
      ],
      feedbackCorrect: "✓ Excellent! This prompt gives Claude all the necessary elements: number of slides, audience, expected structure, and tone. The result will be far more precise and usable than a vague prompt.",
      feedbackWrong: "This prompt is too vague. Claude will generate something, but without constraints on slide count, audience or structure, the result will be generic and will require a lot of rework."
    },
    corrected: [
      { title: "Open a blank deck", desc: "Create a new empty PowerPoint presentation BEFORE requesting generation. Claude works on the open file.", prompt: null, result: null },
      { title: "Write a precise prompt", desc: "Include: number of slides, audience, objective, desired sections, tone.", prompt: "Create an 8-slide investment pitch deck for non-technical executives: problem, solution, market size, ROI, risks, next steps. Concise and business-focused tone.", result: "Claude generates a structured deck with titles, subtitles and content adapted to a decision-making audience." },
      { title: "Evaluate the structure", desc: "Verify: narrative logic, section breakdown, text density per slide.", prompt: null, result: null },
      { title: "Iterate if necessary", desc: "Use Ctrl+Z / Cmd+Z to undo and rephrase with more precision if the result is not satisfactory.", prompt: null, result: null }
    ]
  },

  // M2 - Edit a slide
  {
    id: 2, level: "Beginner", levelColor: "debutant", duration: "30 min",
    timing: { theory: "10 min", prompts: "8 min", exercise: "9 min", corrected: "3 min" },
    title: "Editing an existing slide",
    theory: `
      <p>Claude can make <strong>targeted edits</strong> on one or more slides without regenerating the entire deck. Simply select the slide and formulate a precise instruction.</p>
      <p>The more <strong>specific</strong> the instruction (quantified, bounded), the more faithful the edit will be to your intention. Avoid vague wording such as "improve this slide".</p>
      <div class="info-box">
        <div class="info-label">Good formulation of an edit</div>
        Action verb + precise object + measurable constraint. Example: "Simplify the text on this slide — max 3 bullet points of fewer than 10 words each"
      </div>
      <p>Claude has an <strong>overwrite protection</strong> mechanism: it warns you before overwriting existing data. Always read this warning before confirming.</p>
    `,
    prompts: [
      "Simplify the text on this slide — maximum 3 bullet points, each fewer than 10 words",
      "Add a chart showing the quarterly trend: Q1=120, Q2=145, Q3=132, Q4=178",
      "Rewrite the title of this slide in a more action-oriented way, in fewer than 6 words"
    ],
    exercise: {
      scenario: "You have a slide with 8 very dense bullet points on the product strategy. Your manager says: 'Too much text, we're losing the audience'. You need to simplify without losing the 3 key messages.",
      question: "Which prompt gives Claude the best instructions to simplify this slide?",
      choices: [
        { text: "Improve this slide", correct: false },
        { text: "Simplify this slide", correct: false },
        { text: "Reduce this slide to a maximum of 3 bullet points keeping the 3 most important strategic messages. Each bullet should be fewer than 12 words.", correct: true },
        { text: "Improve the appearance of this slide for the executives", correct: false }
      ],
      feedbackCorrect: "✓ Perfect! This prompt is precise on 3 dimensions: the number of bullets (max 3), the selection criterion (most important messages) and the length constraint (12 words). Claude can execute with precision.",
      feedbackWrong: "This prompt is too vague. Claude will simplify in one way or another, but without precise constraints, the result may not match your expectations. Always quantify your requests."
    },
    corrected: [
      { title: "Select the target slide", desc: "Click the slide to edit in the left panel BEFORE sending the prompt. Claude acts on the active slide.", prompt: null, result: null },
      { title: "Write a precise instruction", desc: "Include: action, object, measurable constraint.", prompt: "Reduce this slide to a maximum of 3 bullet points keeping the 3 most important strategic messages. Each bullet fewer than 12 words.", result: "Claude simplifies by retaining the 3 priority messages and formats according to the length constraint." },
      { title: "Check the overwrite protection", desc: "If Claude warns you before overwriting content, read carefully before confirming. If in doubt, cancel.", prompt: null, result: null },
      { title: "Ctrl+Z if necessary", desc: "PowerPoint keeps the full undo history. Ctrl+Z (Windows) or Cmd+Z (Mac) to go back at any time.", prompt: null, result: null }
    ]
  },

  // M3 - Templates
  {
    id: 3, level: "Intermediate", levelColor: "intermediaire", duration: "50 min",
    timing: { theory: "18 min", prompts: "12 min", exercise: "15 min", corrected: "5 min" },
    title: "Working with corporate templates",
    theory: `
      <p>Claude automatically reads the <strong>slide master</strong> of your presentation: fonts, colours, available layouts, colour scheme. It uses these elements during any generation or edit.</p>
      <p>To get slides that conform to your brand guidelines, the golden rule is simple: <strong>apply the template BEFORE requesting generation</strong>. Claude cannot apply a template after the fact on already-generated slides.</p>
      <div class="info-box">
        <div class="info-label">How Claude reads your template</div>
        It analyses: layout names (e.g. "Two Content", "Title Only"), slide master fonts, the theme colour palette, and title and body text styles.
      </div>
      <div class="info-box">
        <div class="info-label">Group standard template</div>
        Always open PowerPoint with the Group standard template loaded <strong>before</strong> generating. Mention in your prompts <em>"using the currently loaded template"</em> or cite the exact name of the desired layout. Claude will automatically follow the fonts, colours and layouts of your brand guidelines.
      </div>
      <div class="warn-box">
        <div class="warn-label">⚠ Template watch-outs</div>
        Complex templates (custom gradients, SVG icons, 3D effects) may not be perfectly respected. Always verify brand compliance after generation.
      </div>
    `,
    prompts: [
      "Add an executive summary slide using the 'One Column' layout from this template",
      "Create a market size section — 3 slides covering TAM, SAM, SOM — using the colours and fonts of this deck",
      "Generate a competitive landscape slide for 4 players, following the two-column layout of this template"
    ],
    exercise: {
      scenario: "You need to create a client deck with your corporate template already loaded. You want a 'Recommendations' section of 3 slides. The template has a layout named 'Two Content' that you want to use.",
      question: "Which prompt best guarantees template compliance?",
      choices: [
        { text: "Create 3 recommendation slides", correct: false },
        { text: "Create 3 recommendation slides with the 'Two Content' layout from this template, the accent colour for titles and single-line bullets", correct: true },
        { text: "Add 3 professional recommendation slides with good design", correct: false },
        { text: "Generate a recommendations section following our brand guidelines", correct: false }
      ],
      feedbackCorrect: "✓ Very good! Explicitly naming the layout ('Two Content'), the colour (accent) and the format (one-line bullets) gives Claude precise and verifiable instructions. The result will be faithful to the template.",
      feedbackWrong: "This prompt leaves too much freedom to Claude. Without naming the layout, the colour or the bullet format, Claude will interpret according to its own standards — not necessarily yours."
    },
    corrected: [
      { title: "Load the Group standard template", desc: "Open PowerPoint with the Group standard template already applied. Never start from a blank file — Claude cannot apply the template after generation.", prompt: null, result: null },
      { title: "Identify the layout names", desc: "In PowerPoint: right-click a slide > Layout. Note the exact names (e.g. 'Two Content', 'Title Only') to cite in your prompts.", prompt: null, result: null },
      { title: "Generate with the named layout", desc: "Explicitly mention the layout name in the prompt.", prompt: "Create 3 recommendation slides with the 'Two Content' layout, accent colour for titles, single-line bullets.", result: "Claude generates 3 compliant slides with the correct layout and formatting constraints." },
      { title: "Verify compliance", desc: "Compare the generated slides with your template on 3 criteria: font, dominant colour, title style. Correct via a refinement prompt if necessary.", prompt: null, result: null }
    ]
  },

  // M4 - Native charts
  {
    id: 4, level: "Intermediate", levelColor: "intermediaire", duration: "50 min",
    timing: { theory: "18 min", prompts: "12 min", exercise: "15 min", corrected: "5 min" },
    title: "Creating native charts and diagrams",
    theory: `
      <p>Claude can convert textual content into <strong>native PowerPoint visuals</strong>: SmartArt diagrams, data charts (bar, line, pie) and process flows. These objects are fully <strong>editable</strong> — they are not images.</p>
      <p>For data charts, it is essential to <strong>provide the exact values</strong> in the prompt. Claude does not guess numbers and should not invent them.</p>
      <div class="info-box">
        <div class="info-label">Visual choice rule</div>
        Process / flow → SmartArt diagram · Comparison → bar chart · Distribution → pie chart · Evolution over time → line chart · Hierarchy → org chart
      </div>
      <div class="warn-box">
        <div class="warn-label">⚠ Check editability</div>
        After generation, double-click the object. If an editor opens (Excel chart or SmartArt), it is native. If nothing happens, it is a static image — rephrase with "native PowerPoint chart".
      </div>
    `,
    prompts: [
      "Transform these bullets into a process flow diagram: Collection → Cleaning → Analysis → Report",
      "Create a bar chart comparing Q1-Q4 performance: Q1=120, Q2=145, Q3=132, Q4=178",
      "Add a pie chart showing market shares: Company A 45%, B 30%, C 15%, Others 10%"
    ],
    exercise: {
      scenario: "Your 'Performance 2024' slide contains 4 bullet points: 'Q1: +12%', 'Q2: +18%', 'Q3: -4%', 'Q4: +22%'. Your manager wants an immediately readable visual to show the annual trend.",
      question: "Which type of visual and which prompt should you choose?",
      choices: [
        { text: "Transform these bullets into a diagram to visualise the data", correct: false },
        { text: "Create a native PowerPoint line chart showing quarterly growth: Q1=+12%, Q2=+18%, Q3=-4%, Q4=+22%. Highlight Q3 in red as the negative quarter.", correct: true },
        { text: "Make a chart with the quarterly data", correct: false },
        { text: "Create a pie chart showing 2024 quarterly performance", correct: false }
      ],
      feedbackCorrect: "✓ Excellent! A line chart is the right choice for a time evolution. The prompt is precise: chart type, native format, exact values and a highlight instruction for Q3. The pie chart would have been wrong — it shows shares, not a trend.",
      feedbackWrong: "This prompt has a problem. Either it is too vague (Claude does not know which chart type to use), or the chosen type (pie chart) is ill-suited to a time evolution. For data over time, a line chart is the right choice."
    },
    corrected: [
      { title: "Choose the right visual type", desc: "Time evolution → line chart. Do not use a pie chart for chronological data.", prompt: null, result: null },
      { title: "Provide the exact values", desc: "Always include the numerical values in the prompt. Claude must not invent data.", prompt: "Create a native PowerPoint line chart: Q1=+12%, Q2=+18%, Q3=-4%, Q4=+22%. Highlight Q3 in red.", result: "Claude generates an editable line chart with the Q3 highlight." },
      { title: "Verify editability", desc: "Double-click the generated chart. The embedded Excel editor should open — modify a value to confirm.", prompt: null, result: null },
      { title: "If static image: rephrase", desc: "If the double-click does not react, add 'native PowerPoint chart, not an image' in the next prompt.", prompt: "Create a native PowerPoint line chart (not an image, must be editable): Q1=+12%, Q2=+18%, Q3=-4%, Q4=+22%", result: null }
    ]
  },

  // M5 - Restructure
  {
    id: 5, level: "Intermediate", levelColor: "intermediaire", duration: "50 min",
    timing: { theory: "18 min", prompts: "12 min", exercise: "15 min", corrected: "5 min" },
    title: "Restructuring a complete deck",
    theory: `
      <p>Claude can act on <strong>multiple slides at once</strong>: reorganise the order, merge two slides, add transition slides, or rewrite the narrative logic of an entire section.</p>
      <p>The <strong>Pyramid Principle logic</strong> (recommendations first, context next, data in support) is particularly suited to decision-making audiences. Claude can apply it automatically on request.</p>
      <div class="info-box">
        <div class="info-label">Precision on slide ranges</div>
        Always cite precise slide numbers: "slides 4-7" rather than "the middle slides". Claude counts slides in the order of the navigation panel.
      </div>
      <div class="warn-box">
        <div class="warn-label">⚠ Auto-compaction on long decks</div>
        On decks of 30+ slides with a long session, Claude may automatically start a new conversation to avoid context overflow. The deck content remains intact.
      </div>
    `,
    prompts: [
      "Reorganise the slides: recommendations first, then context, then supporting data",
      "Restructure the narrative thread of slides 4 to 7 to create a clearer logic",
      "Add transition slides between each main section and update the agenda slide to reflect the new structure"
    ],
    exercise: {
      scenario: "Your 15-slide deck presents data first, then analysis, then recommendations. Your director wants to see the recommendations in 30 seconds. You need to restructure without losing any content.",
      question: "Which sequence of prompts is the most effective?",
      choices: [
        { text: "Completely restructure this presentation", correct: false },
        { text: "1) Reorganise the slides: recommendations first (slides 12-15), then analysis (6-11), then data (1-5). 2) Update the agenda slide. 3) Add a 1-slide executive summary at the beginning.", correct: true },
        { text: "Move the recommendations to the beginning of the deck", correct: false },
        { text: "Reorganise this deck in a more logical way", correct: false }
      ],
      feedbackCorrect: "✓ Perfect! This sequence is effective for 3 reasons: it cites the exact slide ranges, it requests an agenda update (often forgotten), and it adds an executive summary — all in a single structured session.",
      feedbackWrong: "This prompt is too vague. Without precise slide numbers or a defined logic, Claude will interpret 'restructure' in its own way — which may not correspond to the expected Pyramid Principle order."
    },
    corrected: [
      { title: "Note the current slide order", desc: "Before any restructuring, note the slide numbers by section so you can compare and validate the result.", prompt: null, result: null },
      { title: "Apply the Pyramid logic", desc: "Reorganise by putting recommendations first.", prompt: "Reorganise the slides: recommendations first (slides 12-15), then analysis (6-11), then data (1-5).", result: "Claude reorganises the deck by moving the sections into the requested order." },
      { title: "Update the agenda", desc: "Always update the agenda slide after a restructuring — often forgotten.", prompt: "Update the agenda slide to reflect the new order: Recommendations / Analysis / Supporting Data.", result: null },
      { title: "Add an executive summary", desc: "For time-pressed audiences, add a summary slide at the beginning of the deck.", prompt: "Add a 1-slide executive summary at the beginning with the 3 key recommendations as bullets.", result: "Restructured deck with complete Pyramid Principle logic and executive summary." }
    ]
  },

  // M6 - Persistent instructions
  {
    id: 6, level: "Advanced", levelColor: "avance", duration: "60 min",
    timing: { theory: "21 min", prompts: "15 min", exercise: "18 min", corrected: "6 min" },
    title: "Persistent instructions and customisation",
    theory: `
      <p>The <strong>Instructions</strong> field in the Claude panel lets you define preferences that apply to <strong>all PowerPoint conversations</strong>, without having to repeat them in every prompt.</p>
      <p>The most effective instructions are <strong>measurable and specific</strong>: "max 6 words per title" is better than "keep titles short". "Use #0070C0 for accent" is better than "use our brand blue".</p>
      <div class="info-box">
        <div class="info-label">Examples of effective instructions</div>
        Use single-line bullets only · Slide titles: max 6 words, action-oriented · Accent colour #0070C0 for key data · Audience: senior executives, no technical jargon · Always include a "So what?" on recommendation slides
      </div>
      <div class="warn-box">
        <div class="warn-label">⚠ PowerPoint Instructions ≠ Excel Instructions</div>
        Instructions set in PowerPoint do NOT affect Excel, and vice versa. Each add-in has its own independent instructions field.
      </div>
      <p><strong>Skills</strong> can be invoked via the <code>/</code> command in the panel. They apply automatically when relevant, or manually on request (e.g. <code>/deck-check</code>).</p>
    `,
    prompts: [
      "Create a 5-slide competitive analysis covering 4 competitors",
      "Add an executive summary using our standard format",
      "/deck-check — verify that this deck follows our brand guidelines"
    ],
    exercise: {
      scenario: "You are a consultant and produce an average of 3 client decks per week. Each deck must respect: single-line bullets max, action-oriented titles of 6 words max, accent colour #C8102E, non-technical decision-maker audience.",
      question: "Which persistent instructions should you configure to automate these constraints?",
      choices: [
        { text: "Use a professional design and stay concise for executives", correct: false },
        { text: "Use single-line bullets only. Titles: max 6 words, action-oriented. Accent colour #C8102E for key data. Audience: senior decision-makers, no jargon. Add 'So what?' on all recommendation slides.", correct: true },
        { text: "Keep slides simple and follow our brand guidelines", correct: false },
        { text: "Generate professional slides for an executive audience", correct: false }
      ],
      feedbackCorrect: "✓ Perfect! These instructions cover 5 measurable dimensions: bullet format, title length, exact colour code, audience and recommendation slide structure. Claude will apply them systematically without you having to repeat them.",
      feedbackWrong: "These instructions are too vague to be applied consistently. 'Concise', 'professional', 'simple' are subjective terms. Prefer measurable constraints: word count, hex colour code, bullet format."
    },
    corrected: [
      { title: "Open the Instructions field", desc: "In the Claude for PowerPoint panel, click the gear icon or 'Instructions' at the bottom of the panel.", prompt: null, result: null },
      { title: "Enter measurable instructions", desc: "Write precise and quantified constraints.", prompt: null, result: "Use single-line bullets only. Titles: max 6 words, action-oriented. Accent colour #C8102E for key data. Audience: senior decision-makers, no jargon. Add 'So what?' on recommendation slides." },
      { title: "Test the effect", desc: "Generate a test deck and verify that each instruction was respected. Rephrase any ignored instructions.", prompt: "Create a 5-slide competitive analysis covering 4 competitors", result: "Claude generates the slides respecting all instructions without them being mentioned in the prompt." },
      { title: "Explore Skills with /", desc: "Type / in the panel to see available Skills. Invoke /deck-check to verify brand compliance.", prompt: null, result: null },
      { title: "Customise design, tone and vocabulary", desc: "In the Instructions field (gear icon), define design preferences, the expected tone and the Group's official vocabulary. These settings apply automatically to all generations without having to repeat them in every prompt.", prompt: null, result: "Tone: professional and direct, no technical jargon. Single-line bullets. Titles: max 6 words, action-oriented. Group vocabulary: 'employees', 'strategic priorities', 'action plan'. Accent colour: #0070C0 for key data." }
    ]
  },

  // M7 - Connectors
  {
    id: 7, level: "Advanced", levelColor: "avance", duration: "60 min",
    timing: { theory: "21 min", prompts: "15 min", exercise: "18 min", corrected: "6 min" },
    title: "Connectors and external data",
    theory: `
      <p><strong>Connectors</strong> allow Claude to access data from your external tools (Google Drive, Gmail, etc.) to enrich your slide content without manual copy-paste.</p>
      <p>To use a connector, click the connector icon in the Claude sidebar and enable the desired service. Claude can then access the documents you indicate to it <strong>explicitly in the prompt</strong>.</p>
      <div class="info-box">
        <div class="info-label">Best practice: name the source document</div>
        Claude does not automatically browse your entire Drive. Always name the source document in the prompt: "Based on the file named 'Competitive Review Q2' in my Drive..."
      </div>
      <div class="warn-box">
        <div class="warn-label">⚠ Custom connectors (MCP): read the security docs</div>
        Custom connectors can introduce prompt injection risks. Before enabling an unofficial connector, consult the Anthropic security documentation on remote MCPs.
      </div>
      <p>Cross-checking is mandatory: always verify that the figures in the slides match the source data — Claude may paraphrase or round numbers.</p>
    `,
    prompts: [
      "Based on the file 'Competitive Intelligence Q2' in my Google Drive, create a 6-slide deck on the competitive landscape with one slide per competitor",
      "From the sales report in my Drive, generate a 3-slide performance summary with key indicators and trends",
      "Update slide 3 with the pricing data from the same Drive document"
    ],
    exercise: {
      scenario: "You have a 20-page market intelligence report in your Google Drive named 'Market Watch Q3 2025'. You need to create an 8-slide deck for your Executive Committee from this report.",
      question: "Which prompt should you use to generate the deck from this document?",
      choices: [
        { text: "Create an 8-slide Executive Committee deck from my Drive report", correct: false },
        { text: "Based on the document 'Market Watch Q3 2025' in my Google Drive, create an 8-slide Executive Committee deck: 1 slide per key insight, 1 competitive summary slide, 1 recommendations slide. Use only data explicitly mentioned in the document.", correct: true },
        { text: "Read my Google Drive and make a presentation on market trends", correct: false },
        { text: "Create a market overview deck from my Drive files", correct: false }
      ],
      feedbackCorrect: "✓ Excellent! This prompt names the exact source document, specifies the number of slides, the desired structure and — crucially — asks Claude to use only data from the document. This last instruction prevents Claude from supplementing with invented information.",
      feedbackWrong: "This prompt is insufficient. Without an exact file name, Claude does not know which document to use. Without a precise structure, the deck will be generic. And without the instruction 'data from the document only', Claude risks inventing information."
    },
    corrected: [
      { title: "Enable the Google Drive connector", desc: "In the Claude panel, click the connector icon and enable Google Drive. Authorise access on first use.", prompt: null, result: null },
      { title: "Name the source document explicitly", desc: "Always cite the exact file name in the prompt.", prompt: "Based on the document 'Market Watch Q3 2025' in my Google Drive, create an 8-slide Executive Committee deck with key insights, a competitive summary and recommendations. Use only data from the document.", result: "Claude reads the Drive report and generates a deck based on the actual data in the document." },
      { title: "Cross-check the figures", desc: "After generation, verify each numerical data point in the slides against the source document. Claude may round or paraphrase.", prompt: null, result: null },
      { title: "Iterate on a specific section", desc: "After validation, enrich a slide with additional data from the same document.", prompt: "Update the competitive summary slide with the price comparison table from the same Drive document", result: null }
    ]
  },

  // M8 - Security
  {
    id: 8, level: "Advanced", levelColor: "avance", duration: "60 min",
    timing: { theory: "21 min", prompts: "15 min", exercise: "18 min", corrected: "6 min" },
    title: "Security and professional best practices",
    theory: `
      <p>Claude for PowerPoint has <strong>specific risks</strong> related to its read/write access on your presentations. The official Anthropic documentation identifies several risk scenarios.</p>
      <p>The main risk is <strong>prompt injection</strong>: malicious instructions hidden in an external file (downloaded template, supplier file) can cause Claude to execute unwanted actions on your deck.</p>
      <div class="warn-box">
        <div class="warn-label">⚠ Unverified external files = high risk</div>
        Never use Claude for PowerPoint with templates downloaded from the internet, files received from unverified third parties, or collaborative shared documents whose entire content you do not control.
      </div>
      <div class="info-box">
        <div class="info-label">Data retention</div>
        Inputs and outputs are deleted by Anthropic within 30 days. No history is saved between sessions. Enterprise audit logs do not yet cover Claude for PowerPoint.
      </div>
      <p>Claude for PowerPoint is <strong>not recommended</strong> for: final client deliverables without human review, presentations with regulated data without appropriate controls, replacement of human judgement on narrative and design.</p>
    `,
    prompts: [
      "Verify the accuracy of this deck before I share it with the client",
      "Check this presentation for brand compliance and flag anything outside the template",
      "Summarise the risks or gaps in the content of this deck"
    ],
    exercise: {
      scenario: "Your team is considering 4 uses of Claude for PowerPoint. As an advanced user, you need to assess the risk level of each scenario.",
      question: "Which scenario is the MOST risky according to the official Anthropic documentation?",
      choices: [
        { text: "Generate a first-draft internal deck from a validated corporate template, then manually review before sharing", correct: false },
        { text: "Use a template downloaded from an external website to automatically generate a client deck delivered without review", correct: true },
        { text: "Use Google Drive to enrich a deck with anonymised aggregated data", correct: false },
        { text: "Configure persistent instructions to automate slide formatting", correct: false }
      ],
      feedbackCorrect: "✓ Correct! This scenario combines 3 risks identified by Anthropic: (1) unverified external template = prompt injection risk, (2) direct delivery without human review = explicitly not recommended, (3) use on client deliverables = mandatory human validation required.",
      feedbackWrong: "That is not the riskiest scenario. The green-light or amber-light scenarios include sufficient precautions (validated internal template, human review, aggregated data). Maximum risk combines unverified external file AND delivery without review."
    },
    corrected: [
      { title: "Rule 1: trusted files only", desc: "Only use Claude for PowerPoint with validated internal files or templates whose entire content you control.", prompt: null, result: null },
      { title: "Rule 2: systematic human review", desc: "Any client deliverable or regulated deliverable must go through human validation before sharing. Claude generates a first draft — not a final deliverable.", prompt: null, result: null },
      { title: "Rule 3: cross-check sensitive data", desc: "Verify all figures, names, dates and citations in generated slides. Claude can hallucinate details.", prompt: "Verify the accuracy of this deck and flag any claim that seems uncertain or should be confirmed", result: "Claude identifies sections to verify and flags claims requiring confirmation." },
      { title: "Rule 4: organisation data policy", desc: "Before using confidential data (financial, HR, client), verify that your organisation's data policy authorises the use of Claude for PowerPoint.", prompt: null, result: "Data deleted within 30 days on Anthropic's side · No cross-session history · Audit logs not currently available" }
    ]
  }

];

// ─── SHUFFLE QUIZ ANSWERS ────────────────────────────────────────────────────
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
MODULES.forEach(m => { m.exercise.choices = shuffleArray([...m.exercise.choices]); });

// ─── STATE ────────────────────────────────────────────────────────────────────
const completed = new Set();
let currentModule = null;
let exerciseAnswered = false;

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (id === 'home') document.getElementById('nav-home').classList.add('active');
}

function showModule(idx) {
  currentModule = idx;
  exerciseAnswered = false;
  const m = MODULES[idx];
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-module').classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('nav-m' + idx).classList.add('active');
  renderModule(m);
  window.scrollTo(0, 0);
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
function renderModule(m) {
  const levelLabel = { debutant: '🟢 Beginner', intermediaire: '🟡 Intermediate', avance: '🔴 Advanced' };
  const levelDot = { debutant: 'var(--debutant)', intermediaire: 'var(--intermediaire)', avance: 'var(--avance)' };

  const html = `
    <div class="module-header">
      <div class="module-breadcrumb">
        <span onclick="showScreen('home')" style="cursor:pointer;color:var(--accent2)">Training</span>
        <span class="sep">›</span>
        <span style="color:${levelDot[m.levelColor]}">${levelLabel[m.levelColor]}</span>
        <span class="sep">›</span>
        <span>Module ${m.id + 1}</span>
      </div>
      <h2 class="module-title">${m.title}</h2>
      <div class="module-meta">
        <span class="meta-pill">⏱ ${m.duration}</span>
        <span class="meta-pill level-badge badge-${m.levelColor === 'debutant' ? 'debutant' : m.levelColor === 'intermediaire' ? 'inter' : 'avance'}">${levelLabel[m.levelColor].replace('🟢 ','').replace('🟡 ','').replace('🔴 ','')}</span>
      </div>
    </div>

    <div class="lesson-section open" id="sec-theory">
      <div class="lesson-section-header" onclick="toggleSection('sec-theory')">
        <div class="section-icon icon-theory">📖</div>
        <div class="section-title">Theory &amp; key concepts</div>
        <span class="meta-pill" style="font-size:10px;padding:2px 8px;margin-left:auto;margin-right:8px;">⏱ ${m.timing.theory}</span>
        <div class="section-toggle">▼</div>
      </div>
      <div class="section-body">
        <div class="theory-content">${m.theory}</div>
      </div>
    </div>

    <div class="lesson-section" id="sec-prompts">
      <div class="lesson-section-header" onclick="toggleSection('sec-prompts')">
        <div class="section-icon icon-prompt">💬</div>
        <div class="section-title">Prompts to practise</div>
        <span class="meta-pill" style="font-size:10px;padding:2px 8px;margin-left:auto;margin-right:8px;">⏱ ${m.timing.prompts}</span>
        <div class="section-toggle">▼</div>
      </div>
      <div class="section-body">
        <div class="prompt-list">
          ${m.prompts.map((p, i) => `
            <div class="prompt-card" onclick="copyPrompt(this, '${p.replace(/'/g, "\\'")}')" id="pc-${m.id}-${i}">
              <span class="prompt-icon">›</span>
              <span class="prompt-text">"${p}"</span>
              <span class="copy-hint">Copy</span>
            </div>
          `).join('')}
        </div>
        <p style="font-size:12px;color:var(--muted);margin-top:14px;">Click a prompt to copy it, then paste it into the Claude for PowerPoint panel.</p>
      </div>
    </div>

    <div class="lesson-section" id="sec-exercise">
      <div class="lesson-section-header" onclick="toggleSection('sec-exercise')">
        <div class="section-icon icon-exercise">🎯</div>
        <div class="section-title">Interactive exercise</div>
        <span class="meta-pill" style="font-size:10px;padding:2px 8px;margin-left:auto;margin-right:8px;">⏱ ${m.timing.exercise}</span>
        <div class="section-toggle">▼</div>
      </div>
      <div class="section-body">
        <div class="exercise-wrapper">
          <div class="exercise-scenario">
            <div class="scenario-label">📋 Scenario</div>
            ${m.exercise.scenario}
          </div>
          <div class="exercise-question">${m.exercise.question}</div>
          <div class="choices" id="choices-${m.id}">
            ${m.exercise.choices.map((c, i) => `
              <div class="choice" onclick="selectChoice(${m.id}, ${i}, ${c.correct})" id="choice-${m.id}-${i}">
                <span class="choice-letter">${String.fromCharCode(65+i)}</span>
                ${c.text}
              </div>
            `).join('')}
          </div>
          <div class="feedback-box correct" id="fb-correct-${m.id}">${m.exercise.feedbackCorrect}</div>
          <div class="feedback-box wrong" id="fb-wrong-${m.id}">${m.exercise.feedbackWrong}</div>
          <div class="exercise-actions">
            <button class="btn btn-primary" id="btn-validate-${m.id}" onclick="validateExercise(${m.id})" disabled>Submit</button>
            <button class="btn" id="btn-reset-${m.id}" onclick="resetExercise(${m.id})" style="display:none">Try again</button>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-section" id="sec-corrected">
      <div class="lesson-section-header" onclick="toggleSection('sec-corrected')">
        <div class="section-icon icon-corrected">✅</div>
        <div class="section-title">Detailed answer key</div>
        <span class="meta-pill" style="font-size:10px;padding:2px 8px;margin-left:auto;margin-right:8px;">⏱ ${m.timing.corrected}</span>
        <div class="section-toggle">▼</div>
      </div>
      <div class="section-body">
        <div class="corrected-wrapper">
          ${m.corrected.map((s, i) => `
            <div class="corrected-step">
              <div class="corrected-num">${i+1}</div>
              <div class="corrected-content">
                <div class="step-title">${s.title}</div>
                <div class="step-desc">${s.desc}</div>
                ${s.prompt ? `<div class="corrected-prompt">"${s.prompt}"</div>` : ''}
                ${s.result ? `<div class="result-preview">${s.result}</div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="module-nav">
      <button class="btn" onclick="${m.id > 0 ? 'showModule(' + (m.id-1) + ')' : "showScreen('home')"}" >
        ← ${m.id > 0 ? 'Previous module' : 'Home'}
      </button>
      <button class="module-complete-btn" onclick="completeModule(${m.id})">
        ${completed.has(m.id) ? '✓ Module completed' : 'Mark as complete →'}
      </button>
    </div>
  `;

  document.getElementById('module-content').innerHTML = html;
  if (completed.has(m.id)) {
    document.querySelector('.module-complete-btn').style.background = 'linear-gradient(135deg, var(--green), #0ea572)';
  }
}

// ─── INTERACTIONS ─────────────────────────────────────────────────────────────
function toggleSection(id) {
  document.getElementById(id).classList.toggle('open');
}

function copyPrompt(el, text) {
  navigator.clipboard.writeText(text).catch(() => {
    el.querySelector('.copy-hint').textContent = '⚠ Manual copy';
  });
  el.classList.add('copied');
  el.querySelector('.copy-hint').textContent = '✓ Copied';
  setTimeout(() => {
    el.classList.remove('copied');
    el.querySelector('.copy-hint').textContent = 'Copy';
  }, 2000);
}

let selectedChoice = null;
function selectChoice(moduleId, idx, correct) {
  if (exerciseAnswered) return;
  selectedChoice = { idx, correct };
  document.querySelectorAll(`#choices-${moduleId} .choice`).forEach(c => {
    c.classList.remove('selected-correct', 'selected-wrong');
  });
  const el = document.getElementById(`choice-${moduleId}-${idx}`);
  el.classList.add(correct ? 'selected-correct' : 'selected-wrong');
  document.getElementById(`btn-validate-${moduleId}`).disabled = false;
}

function validateExercise(moduleId) {
  if (!selectedChoice) return;
  exerciseAnswered = true;
  const { idx, correct } = selectedChoice;
  const m = MODULES[moduleId];
  m.exercise.choices.forEach((c, i) => {
    if (c.correct) document.getElementById(`choice-${moduleId}-${i}`).classList.add('reveal-correct');
  });
  document.getElementById(`fb-${correct ? 'correct' : 'wrong'}-${moduleId}`).classList.add('show');
  document.getElementById(`btn-validate-${moduleId}`).disabled = true;
  document.getElementById(`btn-reset-${moduleId}`).style.display = 'inline-block';
  if (correct) {
    completed.add(moduleId);
    updateProgress();
    markNavComplete(moduleId);
  }
}

function resetExercise(moduleId) {
  exerciseAnswered = false;
  selectedChoice = null;
  document.querySelectorAll(`#choices-${moduleId} .choice`).forEach(c => {
    c.classList.remove('selected-correct', 'selected-wrong', 'reveal-correct');
  });
  document.getElementById(`fb-correct-${moduleId}`).classList.remove('show');
  document.getElementById(`fb-wrong-${moduleId}`).classList.remove('show');
  document.getElementById(`btn-validate-${moduleId}`).disabled = true;
  document.getElementById(`btn-reset-${moduleId}`).style.display = 'none';
}

function completeModule(id) {
  completed.add(id);
  updateProgress();
  markNavComplete(id);
  const btn = document.querySelector('.module-complete-btn');
  btn.textContent = '✓ Module completed';
  btn.style.background = 'linear-gradient(135deg, var(--green), #0ea572)';
  if (id < MODULES.length - 1) {
    setTimeout(() => showModule(id + 1), 800);
  }
}

function markNavComplete(id) {
  const nav = document.getElementById(`nav-m${id}`);
  if (nav) nav.classList.add('completed');
}

function updateProgress() {
  const pct = Math.round((completed.size / MODULES.length) * 100);
  document.getElementById('globalProg').style.width = pct + '%';
  document.getElementById('globalProgText').textContent = completed.size + ' / ' + MODULES.length + ' modules';
}
