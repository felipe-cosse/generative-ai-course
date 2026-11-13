# Verification record

Verified November 13, 2026 using Node 24.3.0, React 19.3.1, Vite 8.3.8, and the Codex in-app browser.

## Automated checks

- `npm run build`: successful production build.
- `SOURCE_ARCHIVE='/Users/felipecosse/Docker/Udacity Generative AI' npm test`: 24 passing tests, no skipped checks.
- Portable `npm test`: 23 passing tests; the archive-presence check is intentionally skipped without `SOURCE_ARCHIVE`.
- `git diff --check`: no whitespace errors.

Tests cover all 24 unique lesson IDs, exact coverage of all 82 source sections in order, substantive teaching text, all activity/quiz choices and feedback, accessible visual data, local image existence, safe module-relative source paths, and all 128 source-file references. State tests cover invalid or unavailable storage, unsupported versions, text limits, score validation, persistence round trips, and full playbook exports including a supplied current draft.

## Browser checks

The production build was served at `127.0.0.1:4173` for QA. A separate `localhost:4173` origin was retained as the user-facing preview with no test completion or notes. Browser verification used the in-app browser directly, including its supported Playwright locators; no standalone browser fallback was needed. The unused standalone Playwright dependency was removed.

| Workflow | Observed result |
|---|---|
| Start and module navigation | Start opens Fundamentals lesson 1; Next lesson advances through all three module boundaries in the intended order |
| All knowledge checks | All 24 lessons' 48 questions answered through the production UI; each returned 2 of 2; module transitions reached the final pilot brief |
| Incorrect attempt and retry | Fundamentals lesson 1 returned 0 of 2, displayed specific explanations, then passed after retry |
| Completion | Sidebar reached 24 of 24; all module rows showed 8 of 8; completion banner and playbook action appeared |
| Refresh | Completion and all six pilot fields remained after reload |
| Practice | Selecting different choices showed the relevant feedback and selected state |
| Reflections | A typed reflection survived route navigation and reload without needing a manual save |
| Playbook download | Browser produced `fieldwork-ai-playbook.txt`; file contents contained the six authored pilot fields. Note inclusion is covered by the export unit test |
| Tool search | Chroma search returned its entry; an unmatched query showed the empty state; reset restored tools; Evaluation category showed Ragas and Phoenix |
| Keyboard and focus | Skip link stayed on the lesson route; main received route focus; retry moved focus back to the first answer; tabs implement arrow/Home/End movement |
| Mobile menu | Open/close and selecting the active route worked; resizing an open mobile drawer to desktop restored usable main content |
| Layout | Desktop 1536×1024 and mobile 375×812 checked. DOM scroll widths stayed within viewport widths |
| Browser console | No captured errors or warnings in the production QA tab |

## Visual comparison

Both concept images and the final browser screenshots were opened with `view_image` in the same review pass. Desktop was checked at the concepts' 1536×1024 viewport; mobile was checked at 375×812. Browser screenshots can omit scrollbar pixels. Final evidence is retained in `design/desktop-preview.jpg`, `design/lesson-preview.jpg`, and `design/mobile-preview.jpg`.

| Comparison point | Evidence and disposition |
|---|---|
| Composition | Dashboard preserves the fixed left rail, top rule/breadcrumb, editorial introduction, split hero, and three horizontal module rows. Lesson retains tabs, article, and module outline |
| Above-the-fold copy | Dashboard heading, support sentence, hero title/body, 3-module/24-lesson count, no-coding statement, navigation, Start learning, and learning-path labels match the plan. Progress/resume labels reflect real state |
| Typography | Serif display headings and system sans-serif controls preserved. Enlarged navigation, module titles, and hero body after comparison. Mobile hero break was removed to avoid a stranded word |
| Palette and surfaces | Ivory background, near-white rail, forest-green controls, pale sage hero/visuals, and warm business-case accents preserved. No image color tint added |
| Artwork | Standalone generated loop sculpture and three module illustrations are stored in the project. Artwork uses its own rounded frame, an intentional difference from the concept's seamless composite |
| Spacing and containers | Open horizontal module rows and fine dividers retained; module thumbnails enlarged after review. Lesson text stays in an article instead of a grid of cards |
| Icon and control treatment | Consistent thin SVG icons, visible keyboard focus, selected tabs, radio groups, semantic progress, and explicit completion text. Lesson tab symbols use the shared icon set rather than the mockup's illustrative flask/question mark |
| Responsive behavior | Mobile uses a compact header, collapsible rail, stacked hero and diagrams, and full-width forms. No horizontal overflow observed |

The dashboard and lesson implementation were faithfully verified against the planned visual system, with the intentional content adaptations below. No remaining material layout mismatch or broken core interaction was observed in the checked browser.

## Intentional adaptations

- Audited lesson titles, outcomes, source-specific diagrams, and realistic time estimates replace illustrative lesson mockup copy. The first lesson's five-stage workflow replaces the concept's three-stage example to include input approval and measured outcomes.
- Lessons are longer than the illustrative mockup because they include full teaching, examples, tools, and provenance. The business case appears further down the page.
- The module outline includes generated module artwork; completion checks shown in the lesson screenshot reflect the QA run.
- Source references, activity/quiz states, tool filtering, autosaved reflections, and pilot fields implement the planned learning requirements in the same component system.
- Generated images are illustrative art, not model diagrams or evidence of real events. Concept diagrams remain selectable, accessible text.

## Scope of verification

No deployment or remote push was performed. No live model APIs, source videos, or notebooks were executed. Browser testing covered the in-app browser rather than a full Chrome/Firefox/Safari or assistive-technology matrix. Progress is local to a browser origin, not a hosted account or LMS record. The local source archive was only read.
