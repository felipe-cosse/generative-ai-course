# Fieldwork — AI for decision-makers

An interactive, code-free Generative AI course for managers, adapted from the supplied local Udacity archive. Three modules, 24 lessons, original teaching prose, fictional business scenarios, tool explanations, generated illustrations, and accessible concept diagrams.

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

## Plans and provenance

- [Course plan and refined prompt](docs/01-course-plan.md)
- [Interface plan](docs/02-interface-plan.md)
- Detailed module plans: [Fundamentals](docs/modules/01-fundamentals.md), [LLMs & RAG](docs/modules/02-llms-and-rag.md), [Multimodal AI](docs/modules/03-multimodal.md)
- [Image prompts](docs/design/image-prompts.md), [dashboard concept](docs/design/dashboard-concept.png), [lesson concept](docs/design/lesson-concept.png)

Source archive: `/Users/felipecosse/Docker/Udacity Generative AI/`. All 82 available numbered source sections are mapped into the lesson data. Source #3 in Fundamentals is absent and was not invented. The archive remains read-only. The application includes original management adaptations and source references, not copies of original videos, notebooks, or full lessons. This is an independent educational resource, not affiliated with or endorsed by Udacity.

## Content editing

Module data lives in `src/data/`. Each lesson includes its outcome, three teaching sections, concept definitions, a semantic visual, tools, business case, activity, two quiz questions, takeaway, reflection prompt, and source mapping. `npm test` validates curriculum integrity. Generated decorative artwork lives in `public/images/`; diagram text stays in accessible HTML.

Tool descriptions link to official documentation checked on November 13, 2026. They explain roles, not pricing, rankings, or permanent availability promises. Fictional business examples and estimated lesson times are labeled accordingly.
