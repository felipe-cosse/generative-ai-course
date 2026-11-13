# Fieldwork: Generative AI for decision-makers

## Refined brief

Build an interactive, self-paced web course for managers using the supplied Udacity Generative AI archive. Preserve the three main modules and the source topic order. Translate programming labs into plain-language tool explanations, visual models, business cases, and decisions. Do not show code to learners. Provide accessible illustrations, interactive activities, two scenario questions per lesson with explanatory feedback, persistent progress, and a personal playbook. Plan the curriculum, then the interface, then all lesson content before implementation. Create, verify, and merge a separate Git branch into main for each delivery step.

## Audience and outcome

For managers of teams, products, operations, and change. No programming or machine-learning prerequisites. On completion, learners should be able to explain what generative AI does, choose an appropriate workflow and tool category, question a vendor demo, specify meaningful evaluations, and write a bounded pilot brief with human accountability.

## Curriculum

The source contains 82 numbered sections: 19 Fundamentals sections (number 3 is absent), 18 LLM/RAG sections, and 45 Multimodal sections. Consolidate adjacent concepts and engineering labs into 24 substantial lessons, eight per main module. Preserve complete source-folder coverage in the detailed plans. Reading and exercise times are editorial estimates, not measured completion data.

| Module | Eight management lessons, in order | Practical outcome |
|---|---|---|
| 1. Generative AI fundamentals | What generative AI changes; One model, many jobs; How a model learns and generates; Evidence before enthusiasm; Accountable owners; Give AI a useful brief; Prompt, retrieve, or fine-tune; Reward the right outcome | Choose a useful, reviewable first pilot and define evidence of success |
| 2. LLMs and retrieval-augmented generation | What a chatbot knows; Brief the model; Improve prompts with evidence; Tokens and search by meaning; Model economics; Business knowledge and retrieval; Inspectable answers; Evaluate a knowledge assistant | Specify a grounded knowledge assistant, its access boundaries, and a go/no-go review |
| 3. Multimodal AI applications | See the whole picture; Useful image decisions; Understand and create visuals; Make sound searchable; Govern voice intelligence; Important video moments; Creative brief to pilot; Launch and monitor responsibly | Design a multimodal pilot with clear inputs, consent, review, monitoring, and rollback |

## Learning pattern

Every lesson contains an outcome, original explanatory prose, key concepts, a labeled visual model, named tools explained by role, a fictional business example, a fixed-example decision activity, two scenario questions with feedback, and a manager takeaway. A lesson completes after both quiz answers are correct; retries are allowed. Learners can revisit every lesson and navigate freely. The final lesson connects to an editable pilot brief in the playbook.

## Delivery sequence and branches

1. `codex/01-course-plan`: refined brief, coverage, outcomes, acceptance criteria.
2. `codex/02-interface-plan`: desktop and lesson concepts, design system, generated images.
3. `codex/03-content-plan`: all module content/image/activity/quiz plans and source mapping.
4. `codex/04-course-implementation`: React/Vite app, original course content, generated assets, responsive navigation, lesson reading and tool guide.
5. `codex/05-learning-interactions`: decision activities, checked quizzes, persisted progress, notes, pilot brief, export.
6. `codex/06-verification`: content integrity and functional tests, browser review, fixes, run instructions.

Each step is committed on its named branch and merged with a merge commit into main. Work remains local unless publishing is requested.

## Acceptance criteria

- All three modules and all 82 available source sections have traceable coverage.
- 24 complete lessons, 24 decision activities, 48 scenario questions, explanatory feedback, and visual explanations.
- No learner-facing code, raw API examples, fabricated model responses presented as live, or unverified performance claims.
- Generated hero and module art stored in the repository; diagrams have accessible text.
- Working mobile and desktop navigation, keyboard access, quiz retries, resume, tool search, notes, and downloadable playbook.
- Progress is based on quiz mastery and survives reload. Invalid or unavailable browser storage fails safely.
- Production build and focused tests pass; desktop/mobile and a complete learning flow are browser checked.

## Scope and editorial boundaries

This starts as a client-side course, with no accounts, payments, live AI service, analytics, or learning-management-system integration. No learner data leaves the browser. The supplied archive is read-only and source media are not copied. Lessons are original management adaptations, not a reproduction of Udacity lessons or an official Udacity product. Provider names illustrate tool categories; avoid prices, model rankings, version promises, and universal launch thresholds. Review tool documentation before a real procurement decision.
