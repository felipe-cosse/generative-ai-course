# Fieldwork — AI for decision-makers

An interactive, code-free Generative AI course for managers, adapted from the supplied local Udacity archive. Three modules, 24 lessons, original teaching prose, fictional business scenarios, tool explanations, generated illustrations, and accessible concept diagrams.

Includes 24 decision activities, 48 quiz questions with explanations and retries, a searchable 253-entry tool guide, a 217-entry management glossary with lesson definitions, saved progress, lesson reflections, and a downloadable six-part pilot playbook.

## Run locally

Requires Node.js 22.12+ (verified with Node 24).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally http://127.0.0.1:5173).

```sh
npm run build
npm run preview
npm test
```

The production output is `dist/`. It is a static application with hash-based navigation. No API keys, backend, or AI service are needed. Tool-guide documentation links are external; the learning activities use fixed examples.

To verify the original archive references as well as the portable content and state checks:

```sh
SOURCE_ARCHIVE='/Users/felipecosse/Docker/Udacity Generative AI' npm test
```

The archive check is skipped when that environment variable is absent, so the project remains portable. See [verification and browser review](docs/03-verification.md).

## Learning and saved work

Choose a module to expand its eight lessons, or use Start learning. Each lesson has Learn, Try it, and Knowledge check sections. Both quiz answers must be correct to complete a lesson; retrying never removes an existing completion. Continue learning resumes an unfinished lesson. Navigation remains open so learners can revisit topics freely.

Reflections and pilot fields save automatically, and the playbook exports a plain-text copy. Data stays in local browser storage under `fieldwork-course-v1`, scoped to the exact origin. It does not sync between devices, browser profiles, ports, or hostnames. Clearing browser data removes local work; downloaded playbooks remain independent copies. If storage fails or its existing format cannot be read safely, the app keeps the session usable and displays a warning rather than silently overwriting that stored data. Concurrent edits are not a collaborative editing system; the last save of the same field wins.

## Glossary and lesson definitions

Open Glossary from the navigation to search 217 concepts, tools, and management ideas by name, acronym, alias, or short definition. Category, module, and A–Z filters combine. Expand an entry for a fuller explanation, fictional business example, management relevance, common confusion, related terms, lesson links, and sources. Permanent links use `#/glossary/<term-id>`.

In lessons, dotted-underlined terms show a short definition on hover or keyboard focus. Click, Enter, Space, or tap opens the full entry in a dialog. Escape dismisses it; closing returns to the original term without clearing the lesson attempt or reflection. The preview stays open while the pointer moves onto it. The dialog's Close control remains reachable while reading on a phone.

Terms in this lesson provides all associated definitions on Learn, Try it, and Knowledge check. Highlights appear once per approved prose field. Ambiguous ordinary words such as context, attention, and training require explicit technical phrases for automatic highlighting. Answer controls, source paths, and personal notes remain plain. Definition lookup is open-book help and never selects or submits an answer. See the [coverage audit](docs/glossary-coverage.md) and [glossary verification](docs/05-glossary-verification.md).

## Plans and provenance

- [Course plan and refined prompt](docs/01-course-plan.md)
- [Interface plan](docs/02-interface-plan.md)
- [Glossary implementation plan](docs/04-glossary-plan.md), [original candidate inventory](docs/glossary-inventory.md), and [completed coverage audit](docs/glossary-coverage.md)
- [Tools guide review, scope, and verification](docs/06-tools-review.md)
- Detailed module plans: [Fundamentals](docs/modules/01-fundamentals.md), [LLMs & RAG](docs/modules/02-llms-and-rag.md), [Multimodal AI](docs/modules/03-multimodal.md)
- [Image prompts](docs/design/image-prompts.md), [dashboard concept](docs/design/dashboard-concept.png), [lesson concept](docs/design/lesson-concept.png)
- Final previews: [desktop](docs/design/desktop-preview.jpg), [lesson reader](docs/design/lesson-preview.jpg), [mobile](docs/design/mobile-preview.jpg)

Source archive: `/Users/felipecosse/Docker/Udacity Generative AI/`. All 82 available numbered source sections are mapped into the lesson data. Source #3 in Fundamentals is absent and was not invented. The archive remains read-only. The application includes original management adaptations and source references, not copies of original videos, notebooks, or full lessons. This is an independent educational resource, not affiliated with or endorsed by Udacity.

## Content editing

Module data lives in `src/data/`. Each lesson includes its outcome, three teaching sections, concept definitions, a semantic visual, tools, business case, activity, two quiz questions, takeaway, reflection prompt, and source mapping. `npm test` validates curriculum integrity. Generated decorative artwork lives in `public/images/`; diagram text stays in accessible HTML.

Tool descriptions link to official documentation checked on November 13, 2026. They explain roles, not pricing, rankings, or permanent availability promises. Fictional business examples and estimated lesson times are labeled accordingly.

Glossary entries live in `src/data/glossary.js`. Preserve stable IDs when editing a definition. Keep aliases unique, use valid related-entry and lesson IDs, and include primary links for named tools. Optional `inlineAliases` restrict automatic matching without removing search aliases or lesson-list access. Review ambiguous wording in its lesson context; do not add broad synonyms just to increase highlight counts. Update the inventory and coverage audit when changing catalog scope. `npm test` checks content completeness, concept coverage, references, search behavior, Unicode boundaries, overlapping phrases, and exact preservation of lesson text.

## Delivery history

Six branches capture the requested sequence: `codex/01-course-plan`, `codex/02-interface-plan`, `codex/03-content-plan`, `codex/04-course-implementation`, `codex/05-learning-interactions`, and `codex/06-verification`. Each step is committed and merged into local `main` with a merge commit. The repository has not been pushed or deployed.

The glossary extension follows `codex/07-glossary-plan`, `codex/08-glossary-content`, `codex/09-glossary-library`, `codex/10-inline-definitions`, and `codex/11-glossary-verification`. Each completed step is tested, committed, and merged into local `main`. See the glossary verification document for the checks and remaining browser limitations.
