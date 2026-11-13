# Glossary delivery and verification

## Step 8 — reviewed content

Branch: `codex/08-glossary-content`.

Authored all 217 inventory entries in `src/data/glossary.js`: 179 concepts/workflows, 36 named tools/model families/frameworks, and two educational projects. Every entry has a short definition, a fuller explanation, a fictional management example, management relevance, a common confusion, related terms, and lesson associations. All 36 tool entries include primary documentation or repository links checked on November 13, 2026. Specialized concepts include additional primary references; lesson links provide the existing local-archive provenance.

Removed broad discovery phrases from aliases where they were not equivalent concepts, including word-overlap/ROUGE, temporal embeddings/temporal understanding, and image captions/accessibility captions. Retained SAM 2 as a link to the SAM family discussion, which distinguishes versions. Content remains original, code-free, and free of pricing or model-ranking promises.

Validation: all 28 automated tests passed with `SOURCE_ARCHIVE` set, including 217-entry inventory parity, complete content, collision-free aliases, related/lesson reference integrity, all 84 original concept records, and existing progress/storage tests. Production build passed. Existing course browser smoke test passed in isolated headless Chrome at 1440 × 1000 with no console warnings/errors; the glossary interface is delivered in the following step.

Browser tooling: the Browser plugin skill is not available in this session. Used the existing local Playwright installation with installed Chrome in an isolated temporary profile. No new project dependencies were installed.

## Step 9 — glossary library

Branch: `codex/09-glossary-library`.

Added navigation, 217 expandable entries, acronym/alias/definition search, category/module/A–Z filters, related terms and lessons, primary sources, stable entry routes, and invalid-entry recovery. Direct entry navigation focuses the entry heading. Search and filter selections remain available when returning from a term.

Validation: 30 portable tests passed with the optional source-archive check skipped; production build passed. The static glossary adds approximately 73 kB gzip to the application. Vite reports a non-blocking chunk-size advisory for the combined bundle; no dependency was added.

Headless Chrome checks passed at 1440 × 1000 and 375 × 812: page identity, meaningful content, no framework overlay, no console warnings/errors, acronym ranking, expanded explanations, permanent and related links, direct-entry focus, combined filters, empty results, invalid IDs, mobile navigation, and no horizontal overflow. Browser testing identified unclear implicit filter labeling; explicit label associations were added and verified. Screenshots were captured outside the repository in `/tmp/fieldwork-glossary-desktop.png` and `/tmp/fieldwork-glossary-mobile.png`.

## Step 10 — definitions inside lessons

Branch: `codex/10-inline-definitions`.

Added original-text-preserving, Unicode-aware whole-phrase matching; first occurrence per prose field; case-sensitive ambiguous acronyms/products; and a shared definition preview/dialog. Hover and focus show a short definition; click, Enter, Space, and touch open the full entry without changing the lesson route. One Terms in this lesson list serves all three tabs. Scenario and submitted-answer explanations are annotated; answer controls, source paths, and user reflections remain intact.

Independent review caught ordinary uses of context, attention, and training. Their `inlineAliases` now require explicit technical phrases, while all canonical names remain searchable and reachable in lesson lists. The tool guide names Hugging Face Transformers explicitly to avoid confusing the software library with the model architecture.

Browser review caught and fixed preview suppression after a fresh focus event. Same-lesson links dismiss the dialog even when the URL does not change. The mobile Close control stays reachable while the dialog scrolls. Related-term exploration retains the original return-focus target; tab, route, and navigation changes clear overlays.

Validation: all 41 automated tests passed with the source archive enabled; production build passed. Browser checks passed for correct preview content, no layout shift, pointer movement into the preview, Escape suppression, fresh focus, Enter/Space activation, inert background, related entries, focus/scroll restoration, same-lesson links, quiz selections, activity choices, notes and scores after reload, all 24 lesson lists/highlights, all 48 correct quiz answers, and tool-guide definitions. The same run found no nested interactive controls or source-path highlights and no browser console warnings/errors. A separate 375 × 812 touch-emulation run passed tap lookup, dialog scrolling/closing, no lingering tooltip, scroll unlock, navigation, search, and expanded entries.

Native modal dialogs allow focus into browser controls while keeping the application inert; this is expected [HTML dialog accessibility behavior](https://w3c.github.io/wcag/techniques/html/H102.html), not a reason to add a custom focus trap.
