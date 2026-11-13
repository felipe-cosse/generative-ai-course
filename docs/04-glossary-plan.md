# Glossary and in-lesson definitions: implementation plan

Status: planning only. The glossary feature and its full definition catalog have not been implemented. Continue the existing workflow: one branch per delivery step, verification, then a merge into local main.

## 1. Intended result

Give a nontechnical manager a useful explanation of every specialist term encountered in the course without making them leave the lesson. Provide a substantial searchable glossary for deeper reading.

Interpret “all words” as all relevant AI concepts, acronyms, tool names, and management vocabulary in the 24 lessons and tool guide. Ordinary connective words and unrelated dictionary vocabulary are outside the glossary. Coverage is determined by a reviewed term inventory, not an arbitrary word-count target. The existing lessons contain 84 concept records, including repeated terms and combined labels; these are a starting point, not 84 unique final entries.

Use the current course as the primary context and the supplied Udacity archive for supporting explanations. Keep explanations original, accurate, code-free, and written for managers. Do not replace the existing lesson text with generated definitions at runtime.

The [candidate inventory](glossary-inventory.md) identifies **217 entries across 11 categories**: 179 concepts/workflows, 36 named tools/model families/frameworks, and two course projects. It includes lesson associations, candidate matching forms, ambiguity decisions, and eight sample content briefs. Eighty entries have an explicit course concept definition as a starting point; all 217 still need editorial review and the fuller entry content described below. The final count may change when unsupported aliases are removed or distinct concepts are separated.

| Coverage area | Candidate entries |
|---|---:|
| Core concepts | 17 |
| Training and adaptation | 27 |
| Prompting and conversation | 16 |
| Knowledge and retrieval | 21 |
| Evaluation and quality | 21 |
| Governance and responsible use | 16 |
| Economics and operations | 23 |
| Vision and multimodal | 16 |
| Audio and video | 22 |
| Tools and frameworks | 36 |
| Course projects | 2 |

## 2. What each glossary entry contains

| Field | Purpose |
|---|---|
| Term and stable ID | One canonical concept and a permanent link |
| Full name and aliases | Expand acronyms; connect common spellings, plurals, and abbreviations to the same entry |
| Category and relevant lessons | Browse by subject or by the three course modules |
| Short definition | Approximately 20–40 plain-language words for quick lookup |
| Deeper explanation | Approximately 80–150 words, as needed; explain the mechanism without code or equations |
| Business example | One specific, clearly fictional use in a manager’s workflow |
| Why it matters | The decision, cost, quality issue, or risk the manager should understand |
| Common confusion | A concrete distinction or limitation; use only when meaningful |
| Related terms | Two to four useful connections where available |
| Source references | Existing lesson/archive references and primary documentation where needed |

Avoid padding short concepts to reach a length target. Tool entries explain their job and limitations, with a verified documentation link; they do not promise current prices, rankings, or availability. Keep the tool guide and glossary descriptions consistent.

### Sample entry: Retrieval-augmented generation

- **Term:** Retrieval-augmented generation. **Alias:** RAG.
- **Short definition:** A workflow that finds relevant information in selected sources and supplies it to a generative model to help produce an answer.
- **In practice:** An employee asks about a travel policy. The application retrieves relevant passages from approved documents and gives those passages to the model along with the question. The model drafts an answer using that context. The team still needs to check which documents were retrieved, whether the user is allowed to see them, whether they are current, and whether the answer stays supported by them.
- **Business example:** A support assistant drafts an answer using the current returns policy and shows the relevant passage for staff review.
- **Why it matters:** The manager must assign ownership for document updates, access rules, answer quality, and escalation when evidence is missing.
- **Common confusion:** RAG supplies context; it does not by itself retrain the model or guarantee that an answer is true.
- **Related terms:** Retrieval, embedding, vector search, grounding.
- **Relevant lessons:** Fundamentals adaptation; RAG knowledge retrieval, inspectable answers, and evaluation.

## 3. Glossary page

Add **Glossary** to the existing desktop and mobile navigation, using the current Fieldwork palette, serif headings, and divided-row layout.

- A search field accepts canonical terms, full names, acronyms, and aliases. Rank exact term/alias matches before prefix and substring matches. Also search the short definition; preserve the entered query when changing filters.
- A category filter, module filter, and A–Z letter filter make a large catalog manageable. Letters are filter controls, not fragment links that would break the existing hash router. Clear filters is always available.
- Each result initially shows the term, acronym, category, and short definition. Expanding a result reveals its fuller explanation, example, management relevance, related terms, and lesson links.
- Show the actual result count and a helpful no-results state. Do not invent matches or suggest nonexistent entries.
- Support `#/glossary` and `#/glossary/<stable-id>`. A direct term link opens and focuses that term. Invalid IDs get a useful recovery link to the glossary.
- Use semantic headings and definition lists. Do not add infinite scrolling, a virtualized list, pagination, or an external search service unless measured performance requires one.

## 4. Definitions inside a lesson

### Appearance and repetition

Use a subtle dotted underline for glossary terms, with the existing sage hover treatment and visible keyboard focus. Preserve the text’s original spelling, capitalization, punctuation, font size, and baseline. Long phrases must fit a narrow reading column.

Highlight the first occurrence of each approved term within each teaching section or equivalent content block. Later repetitions remain ordinary text. In addition, provide a compact **Terms in this lesson** list so every relevant definition stays discoverable. This avoids turning every repeated “AI” or “model” into another keyboard stop.

### Mouse and keyboard preview

Hover opens a small card containing the canonical term, expanded acronym if relevant, and short definition. Use a short initial hover delay, approximately 200 ms, to avoid distracting flashes. Keyboard focus opens the same definition immediately.

The preview contains text only. The pointer can move from the word onto the preview without closing it. It remains while the trigger or preview is hovered, or while the trigger retains keyboard focus. Escape dismisses it and does not immediately reopen it until a new hover/focus interaction. Position it within the viewport, flip above/below as needed, and update positioning on scroll/resize. Opening it must not move the lesson text.

These requirements follow the dismissible, hoverable, and persistent behavior described by [WCAG 2.2, Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html). Associate the short description with its trigger; do not rely on a browser title attribute alone.

### Click, tap, and deeper reading

Clicking a term, pressing Enter/Space on it, or tapping it opens the full entry in a dialog. The same entry component supplies the glossary page and dialog so definitions cannot diverge. The dialog includes a visible Close button and related-term controls, and can be dismissed with Escape. On a phone it uses a readable sheet-like layout with a scrollable body.

Opening and closing a definition does not change the lesson route, reset a selected quiz answer, clear an activity choice, erase a reflection, or change progress. Return focus to the original term when the dialog closes. Related terms can be explored inside the dialog; they must not replace the remembered original focus target.

Every inline trigger is a button with an explicit `type="button"`, so lookup cannot accidentally submit a surrounding form. Use one shared overlay outside clipping containers. Close it when the lesson, lesson tab, route, or mobile navigation changes; the existing lesson tabs stay mounted while hidden, so route cleanup alone is insufficient. If the original trigger is no longer visible, use the newly active page/panel heading as the focus destination.

Keep interactive links/buttons in the dialog rather than the hover preview. WAI’s [tooltip pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) distinguishes a text tooltip from a popup containing focusable content; that APG tooltip pattern is explicitly marked as work in progress. Use the established native [HTML dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) for the full entry and verify focus/close behavior against the [WAI dialog guidance](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/). Do not treat native dialog support as proof of accessibility without testing the actual implementation.

### Where highlighting applies

| Surface | Behavior |
|---|---|
| Learn: explanation paragraphs | Inline term definitions |
| Learn: concepts, examples, tool descriptions, takeaway | Inline definitions in descriptive text; reuse glossary definition where it is truly the same concept |
| Diagram descriptions and captions | Highlight readable descriptions where space allows; short diagram labels remain plain |
| Try it: scenario and feedback | Inline definitions in ordinary prose |
| Activity answer buttons | Keep the button label intact; offer relevant terms outside the answer controls |
| Knowledge check | Make generic glossary definitions available through the adjacent lesson-term list; do not insert buttons inside radio labels or use answer-specific hints |
| Tool guide descriptions | Reuse the same term renderer in prose; keep existing external links intact |
| Navigation, lesson titles, buttons, URLs, source paths | Do not insert inline triggers |
| User reflections and pilot text | Treat as user-authored content; do not transform it |
| Glossary definitions | Do not automatically create recursive hover definitions; use explicit related-term links |

Knowledge checks remain open-book practice, as fits a self-paced management course. Definition lookup must not select an answer, submit a form, or reveal correctness before the learner checks their answers.

## 5. Content audit and matching rules

1. Inventory every existing concept record, named tool, acronym, and specialist phrase in all lesson fields and the tool guide. Split combined labels such as “PEFT and LoRA” into separate concepts; merge genuine duplicates.
2. Review definitions against the supplied materials. Keep distinctions explicit: token versus word; training versus inference; model versus application; open weights versus open source; grounding/faithfulness versus factual correctness; precision versus recall.
3. Write and review the short definition first, then the example and deeper explanation. Unexplained jargon inside a definition must itself have an entry or be replaced with plain language.
4. Record explicit aliases, plural variants, and hyphen variants. Do not guess inflections, use unrestricted substring matches, or treat all similarly named things as the same concept.
5. Match complete phrases and word boundaries, choosing the longest valid phrase at a given text position. For example, “vision transformer” wins over “transformer,” and “Pydantic AI” wins over “AI.” “RAG” must not match inside “Ragas.”
6. Preserve case for acronyms and ambiguous product names where needed: CLIP, SAM, RAG, and Whisper are not safe replacements for every ordinary occurrence of clip, sam, rag, or whisper. Use reviewed lesson context for ambiguous terms such as attention, model, inference, and alignment.
7. Detect aliases that map to multiple concepts and resolve them explicitly before release. Do not silently choose whichever entry happens to be first.
8. Render segments from original text offsets as ordinary React text and term controls. No HTML string replacement, DOM rewriting, or `dangerouslySetInnerHTML`. Glossary content is static local data; no network request is needed to show a definition.
9. Produce a coverage report by lesson. Every approved term must either be matched correctly in its intended context or have a documented reason for being available only through the lesson-term list or glossary.

## 6. Implementation boundaries

Use React, existing styles, and browser features already available to this application. No new glossary library, UI framework, backend, model API, or search dependency is planned.

| File or area | Planned change |
|---|---|
| `src/data/glossary.js` (new) | Reviewed entries, aliases, categories, related IDs, lesson associations, provenance |
| `src/glossary.js` (new) | Pure text segmentation, alias validation, and search/filter helpers; compile match patterns once |
| `src/components/Glossary.jsx` (new) | Searchable glossary page and term deep links |
| `src/components/GlossaryEntry.jsx` (new) | Shared expanded entry body for the page and dialog |
| `src/components/GlossaryText.jsx` (new) | Render original text plus accessible term triggers |
| `src/components/GlossaryOverlay.jsx` (new) | One active hover preview/full-entry dialog and its focus/position lifecycle |
| `src/App.jsx` | Glossary navigation, explicit glossary routes, page title/focus handling, shared overlay wiring |
| `src/components/Lesson.jsx` | Apply the renderer to approved reading fields and expose Terms in this lesson |
| `src/components/Exercises.jsx` | Annotate ordinary scenario/feedback prose; keep answer controls structurally unchanged |
| `src/components/ToolGuide.jsx` | Annotate descriptions using the same renderer |
| `src/components/Icon.jsx`, `src/styles.css` | A consistent glossary icon, underlines, previews, glossary rows, dialog, and responsive behavior |
| `tests/glossary.test.js` and small text fixtures (new) | Content integrity, matching edge cases, filters, and coverage assertions |
| `tests/content.test.js` | Check glossary references against existing concepts and valid lesson IDs |
| `README.md` and verification document | Explain lookup behavior, content maintenance, and validation evidence |

The glossary is read-only learning content. It does not require a progress-schema change or a new local-storage key. Existing scores, notes, pilot fields, lesson IDs, and module ordering retain their meaning. Overlay state is temporary UI state and must be cleared on lesson/tab/route changes and when mobile navigation opens. Deliberate navigation to the full glossary follows the current page-navigation behavior; quick definitions use the same-route overlay to preserve an unfinished attempt.

Avoid a general-purpose rich-text engine. The current content fields are strings, so a focused string-to-React renderer is sufficient. Scope repeated-term tracking to one explicit content block; do not mutate shared tracking state during rendering, which would behave unpredictably under React Strict Mode.

## 7. Delivery branches and gates

| Step | Branch | Deliverable and merge gate |
|---|---|---|
| Plan | `codex/07-glossary-plan` | This plan and the candidate inventory; documentation checks only |
| Content | `codex/08-glossary-content` | Full reviewed catalog, alias rules, lesson mappings, provenance, and content-integrity tests |
| Glossary page | `codex/09-glossary-library` | Navigation, A–Z/search/category/module filtering, full entries, related terms, direct links, mobile layout |
| Lesson integration | `codex/10-inline-definitions` | Safe matching, hover/focus definitions, click/tap dialog, lesson-term list, all intended lesson/tool prose |
| Verification | `codex/11-glossary-verification` | Editorial review, keyboard/touch/screen-reader checks, regression fixes, screenshots, updated instructions |

For each implementation branch: run appropriate focused tests and the production build, review the result in the browser, commit the completed step, and merge into main. Keep each step independently reviewable. No remote push or deployment is part of this plan.

## 8. Definition of done

- The reviewed inventory covers all three modules and all 24 lessons, including every existing concept record after deduplication/splitting and every named tool that needs explanation.
- Every published entry has a useful short definition, deeper explanation, management example/relevance, valid lesson references, and no unresolved aliases or broken related-term links.
- A manager can search “LLM,” “large language model,” or a supported plural and reach the same concept. Category, module, and letter filters combine correctly and can be cleared.
- Hover and keyboard focus reveal the correct short definition. Click, Enter/Space, and touch reveal the fuller entry. Escape and Close work; focus and reading position return correctly.
- Preview content remains reachable by the pointer and does not vanish while it is being read. It does not get clipped off-screen or immediately reopen after Escape.
- Matching handles overlaps, punctuation, apostrophes, case, hyphens, Unicode letters, and ambiguous aliases without corrupting the underlying lesson text.
- Tests confirm that concatenating rendered text segments reproduces the exact original input and that user text resembling HTML remains text.
- No nested interactive controls appear in lesson buttons, radio labels, links, or glossary previews. Lookup cannot change quiz selections or completion.
- All existing content/state tests still pass. Score, note, and pilot persistence survive the change without migration.
- Browser QA covers desktop, 375px mobile, 200% zoom, mouse-to-preview movement, keyboard traversal, focus restoration, long terms, viewport edges, lesson/tab changes, and a real screen-reader spot check where available. Record any untested assistive technology explicitly.
- There is no measurable typing lag in glossary search or repeated parsing on hover. Measure before adding caching layers or list virtualization.

## 9. Deliberate scope limits

No dictionary of ordinary English, automatic translation, spoken pronunciation, flashcards, new quizzes, favorites, live-generated definitions, or account synchronization in this change. The requested value is a comprehensive, accurate glossary and effortless access while learning. Additional teaching features can be evaluated after that is working.
