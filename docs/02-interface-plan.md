# Interface plan

## Visual direction

Fieldwork is a calm editorial learning workspace for people who make decisions. Follow `design/dashboard-concept.png` and `design/lesson-concept.png`. Concepts were generated before implementation; the task authorizes proceeding through the plans without a separate approval gate.

Use an ivory canvas (#f7f8f2), near-white navigation rail (#fbfcf8), forest text (#153f35), sage surfaces (#e3e9df), fine muted green rules (#cbd5cc), and small terracotta details (#be613c). Serif headings use Georgia and system serif; UI and body copy use system sans-serif. Avoid remote font dependencies. Body line height 1.65, headings 1.08. Headings scale from 48px desktop to 34px mobile; controls 14–16px, captions 13px, article prose 17px. Use 8/12/16/24/32/40px spacing, 8px buttons, 22px hero corners, and minimal shadows.

## Screens and behavior

1. **My learning:** a persistent 248–264px rail, top breadcrumb, editorial heading, split hero with generated loop sculpture and Start learning/Continue learning, then three horizontal module rows. Each module expands to its eight lesson links. Display actual quiz-derived completion and resume the last visited lesson.
2. **Lesson reader:** breadcrumb/back link, lesson number and estimated time, title and outcome, Learn/Try it/Knowledge check tabs, readable article and an eight-lesson outline. Learn includes concepts, accessible visual flow, named tool roles, fictional business example, takeaway, and expandable source provenance. Try it shows a decision scenario and specific feedback. Knowledge check reveals explanations on submission, supports retries, and unlocks completion after both answers are correct.
3. **Tool guide:** searchable tool categories represented in the course, plain-language job, manager question, limitations, and official documentation link. The guide is educational, not a product ranking. Use open divided rows rather than a decorative tile grid.
4. **My playbook:** saved lesson reflections plus a small pilot brief (business problem, intended users, approved inputs, success measure, risk/reviewer, stop condition). Explicit Save feedback, downloadable plain-text brief, and actual progress. No simulated server synchronization.

## Shared components and assets

Sidebar, breadcrumb/header, buttons, module rows, lesson tabs, outline, semantic concept flow, case-study callout, decision options, quiz feedback, form fields. Small custom SVG line icons: open book, stacked layers, document, arrow, check, menu, close, search. Consistent 20px viewBox, 1.7px strokes, rounded caps, currentColor; avoid emoji as UI icons. Fieldwork is a typographic wordmark. No decorative mark invented from the lesson mockup.

Production assets: `public/images/hero.png`, `fundamentals.png`, `rag.png`, `multimodal.png`. Preserve native art without tint; hero artwork has a separate softly rounded frame because the standalone image background differs slightly from the panel. Module imagery is decorative; lesson-specific explanatory diagrams use labeled HTML. They are described in the content plans and are not screenshots of UI.

## Responsive and accessibility plan

On narrow screens, use a compact top bar and expandable navigation; turn module rows into stacked text/thumbnail rows and place the lesson outline after the article. No fixed widths that overflow a 375px viewport. Keyboard-visible focus, skip link, semantic landmarks, labeled radio groups and form fields, active navigation states, status announcements for quiz/save results, sufficient contrast, and reduced-motion support. All essential content remains text. No activity depends on hover or color alone.

## Implementation inventory and effects

Empty repository: no existing callers, data, exports, fixtures, or dependencies to preserve. Scope reaches package/build config, HTML entry, React app shell, shared stylesheet, module data, lesson renderer, activity/quiz state, storage helper, tool catalog, playbook, tests, and documentation. Use React + Vite and browser APIs, no UI framework, router, backend, or AI SDK. Hash URLs make navigation and refresh work on static hosts. Local storage has versioned keys and validates known lesson IDs and scores; saving failure must be visible. Keep user text escaped by React. Export only on explicit action. No telemetry or remote requests during normal learning.

## Design deviations already justified by the curriculum

The generated lesson concept contains illustrative outline names; replace them with the audited curriculum titles. Render actual lesson duration estimates instead of the mockup's 8-minute examples. Expandable source notes, tool guide, activity/quiz states, and playbook are functional requirements using the same visual system. Do not reproduce every illustrative phrase as authoritative course content.

## Verification

Compare dashboard and lesson screenshots against both concepts: composition, copy, type hierarchy, palette, art framing, row density, and spacing. Use Browser/IAB first; use Playwright if browser access is unavailable. Verify desktop, 375px mobile, navigation, a failed quiz/retry/pass, refresh/resume, tool filtering, saved notes, export, and course completion. Record evidence in the final verification document.
