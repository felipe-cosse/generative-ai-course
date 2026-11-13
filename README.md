# Fieldwork — AI for decision-makers

An interactive, code-free Generative AI course for managers, adapted from the supplied local Udacity archive. Three modules, 24 lessons, original teaching prose, fictional business scenarios, tool explanations, generated illustrations, and accessible concept diagrams.

Includes 24 decision activities, 48 quiz questions with explanations and retries, a searchable 10-entry tool guide, saved progress, lesson reflections, and a downloadable six-part pilot playbook.

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

## Plans and provenance

- [Course plan and refined prompt](docs/01-course-plan.md)
- [Interface plan](docs/02-interface-plan.md)
- [Glossary implementation plan](docs/04-glossary-plan.md) and [217-entry candidate inventory](docs/glossary-inventory.md) — planning only; the glossary feature is not implemented yet
- Detailed module plans: [Fundamentals](docs/modules/01-fundamentals.md), [LLMs & RAG](docs/modules/02-llms-and-rag.md), [Multimodal AI](docs/modules/03-multimodal.md)
- [Image prompts](docs/design/image-prompts.md), [dashboard concept](docs/design/dashboard-concept.png), [lesson concept](docs/design/lesson-concept.png)
- Final previews: [desktop](docs/design/desktop-preview.jpg), [lesson reader](docs/design/lesson-preview.jpg), [mobile](docs/design/mobile-preview.jpg)

Source archive: `/Users/felipecosse/Docker/Udacity Generative AI/`. All 82 available numbered source sections are mapped into the lesson data. Source #3 in Fundamentals is absent and was not invented. The archive remains read-only. The application includes original management adaptations and source references, not copies of original videos, notebooks, or full lessons. This is an independent educational resource, not affiliated with or endorsed by Udacity.

## Content editing

Module data lives in `src/data/`. Each lesson includes its outcome, three teaching sections, concept definitions, a semantic visual, tools, business case, activity, two quiz questions, takeaway, reflection prompt, and source mapping. `npm test` validates curriculum integrity. Generated decorative artwork lives in `public/images/`; diagram text stays in accessible HTML.

Tool descriptions link to official documentation checked on November 13, 2026. They explain roles, not pricing, rankings, or permanent availability promises. Fictional business examples and estimated lesson times are labeled accordingly.

## Delivery history

Six branches capture the requested sequence: `codex/01-course-plan`, `codex/02-interface-plan`, `codex/03-content-plan`, `codex/04-course-implementation`, `codex/05-learning-interactions`, and `codex/06-verification`. Each step is committed and merged into local `main` with a merge commit. The repository has not been pushed or deployed.

The glossary extension starts with the planning branch `codex/07-glossary-plan`. Its plan separates content authoring, glossary browsing, inline definitions, and verification into subsequent branches, each to be checked and merged into local `main`.
