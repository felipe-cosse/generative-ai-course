# Glossary coverage verification

Generated on November 13, 2026 from the actual glossary data and `segmentGlossaryText` implementation. This is a static corpus audit; browser interaction results are recorded separately.

## Scope and interpretation

- **217 glossary entries** are searchable by canonical term and have valid course lesson links. The catalog spans 11 categories and all 24 lessons.
- **84 existing lesson concept records** resolve to glossary entries associated with their lessons. Combined PEFT/LoRA and retrieval precision/recall records resolve to both constituent entries.
- Audited **591 approved prose fields**, with **474 inline occurrences**, **175 distinct glossary entries matched somewhere**, and **42 entries available only through lists/glossary in this lesson-prose audit**.
- The course has **496 lesson–term associations**: **324** have an inline occurrence in that lesson and **172** are list-only for that lesson. Every association is accounted for exactly once as matched or list-only.
- Fields match the corpus test in `tests/glossary-matcher.test.js`: teaching bodies, visual step details/captions, concept explanations, business-case context/decision/result, tool roles, takeaway, activity prompt/feedback, and submitted quiz explanations. Counts include all authored feedback variants; they are not a count of simultaneously visible buttons.
- Each term receives at most one highlight per prose field. Later repetitions and shorter terms contained in a longer matched phrase remain ordinary text. Original text is reproduced exactly.
- Tool/concept headings, navigation, question and answer controls, source paths, and user-authored notes are outside this prose audit. Their relevant vocabulary remains reachable through Terms in this lesson and the full glossary. Tool-guide prose is integrated but is outside these per-lesson counts.
- Coverage means specialist course vocabulary, not every English word or every occurrence. List-only entries are deliberate discovery coverage rather than invented highlights.

## Ambiguous words use phrase-only inline aliases

- **Attention:** `transformer attention`, `attention mechanism`, `attention mechanisms`.
- **Context:** `working context`, `model context`, `supplied context`.
- **Training:** `model training`, `training a model`, `training the model`.

Bare “context” can mean business circumstances, “attention” can mean human attention, and “training” can mean staff practice. Those bare words therefore remain searchable and available in the lesson term list, but do not automatically receive model-specific definitions. The technical phrases above still activate the appropriate definition.

## Per-lesson counts

| Lesson | Term-list entries | Distinct matched terms | Inline occurrences | List-only entries |
|---|---:|---:|---:|---:|
| f1 — What generative AI changes | 23 | 13 | 17 | 10 |
| f2 — One model, many jobs | 24 | 12 | 14 | 12 |
| f3 — How a model learns and generates | 21 | 16 | 26 | 5 |
| f4 — Evidence before enthusiasm | 20 | 12 | 15 | 8 |
| f5 — Learning systems need accountable owners | 27 | 19 | 21 | 8 |
| f6 — Give AI a useful brief | 12 | 4 | 5 | 8 |
| f7 — Prompt, retrieve, or fine-tune? | 25 | 18 | 34 | 7 |
| f8 — Reward the outcome you actually want | 26 | 19 | 23 | 7 |
| r1 — What a business chatbot actually knows | 16 | 8 | 12 | 8 |
| r2 — Brief the model like a colleague | 9 | 5 | 6 | 4 |
| r3 — Improve prompts with evidence | 12 | 7 | 15 | 5 |
| r4 — Tokens and search by meaning | 13 | 9 | 18 | 4 |
| r5 — Choose models by business value | 16 | 9 | 14 | 7 |
| r6 — Give AI the right business knowledge | 26 | 20 | 35 | 6 |
| r7 — Answers you can inspect | 15 | 9 | 14 | 6 |
| r8 — Evaluate and approve a knowledge assistant | 28 | 23 | 38 | 5 |
| m1 — See the whole picture | 15 | 10 | 14 | 5 |
| m2 — Turn images into useful decisions | 27 | 17 | 24 | 10 |
| m3 — Understand and create visual content | 22 | 10 | 14 | 12 |
| m4 — Make sound searchable | 22 | 15 | 25 | 7 |
| m5 — Govern voice intelligence | 22 | 14 | 18 | 8 |
| m6 — Find the important moments in video | 21 | 15 | 18 | 6 |
| m7 — Move from creative brief to pilot | 28 | 20 | 25 | 8 |
| m8 — Launch a multimodal pilot responsibly | 26 | 20 | 29 | 6 |
| **Total lesson–term associations / occurrences** | **496** | **324** | **474** | **172** |

## List-only terms and reasons

“List-only” is specific to the approved prose of that lesson. A term can have an inline occurrence in another lesson. In every case below, no approved unambiguous form receives a match in the audited prose; the reason explains where the term is discoverable or why the matcher leaves it plain.

### f1 — What generative AI changes

- **Authorization:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **ChatGPT:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Claude:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **ElevenLabs:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Gemini:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Hallucination:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Human review:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Prompt:** Named in a question or selectable answer; those controls stay plain, with definitions in the term list.
- **Training:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.

### f2 — One model, many jobs

- **Authorization:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Claude:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Gemini:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **GPT:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Hugging Face:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Human review:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Llama:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Prompt:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Qwen:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Source freshness:** Named in a question or selectable answer; those controls stay plain, with definitions in the term list.
- **Training:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.

### f3 — How a model learns and generates

- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Hallucination:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Model architecture:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Preference learning:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Training:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.

### f4 — Evidence before enthusiasm

- **Artificial intelligence:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Calibration:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Correctness:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Evaluation set:** Named in a question or selectable answer; those controls stay plain, with definitions in the term list.
- **Held-out evaluation:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Human review:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Training:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.

### f5 — Learning systems need accountable owners

- **Authorization:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Evaluation rubric:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Human review:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Risk register:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Subgroup evaluation:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Training:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.

### f6 — Give AI a useful brief

- **Artificial intelligence:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **ChatGPT:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Claude:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Gemini:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Hugging Face:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Model card:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Role-based prompting:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.

### f7 — Prompt, retrieve, or fine-tune?

- **Artificial intelligence:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Authorization:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Generation:** A longer phrase owns the matching text, or the form does not satisfy the reviewed matching rules.
- **Hugging Face:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Role-based prompting:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Training:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.

### f8 — Reward the outcome you actually want

- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Fine-tuning:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Held-out evaluation:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Human review:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Proxy objective:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Training:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.

### r1 — What a business chatbot actually knows

- **ChatGPT:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Claude:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Context window:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Gemini:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Generation:** A longer phrase owns the matching text, or the form does not satisfy the reviewed matching rules.
- **Large language model:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Retrieval:** A longer phrase owns the matching text, or the form does not satisfy the reviewed matching rules.

### r2 — Brief the model like a colleague

- **Attention:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Chat application:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Prompt template:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.

### r3 — Improve prompts with evidence

- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Held-out evaluation:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Human review:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Prompt library:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Role-based prompting:** Named in a question or selectable answer; those controls stay plain, with definitions in the term list.

### r4 — Tokens and search by meaning

- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Embedding model:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Vector search:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.

### r5 — Choose models by business value

- **Batch processing:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Model routing:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Real-time processing:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Token:** Named in a question or selectable answer; those controls stay plain, with definitions in the term list.
- **Total cost of ownership:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.

### r6 — Give AI the right business knowledge

- **Artificial intelligence:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Chroma:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Knowledge base:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Pinecone:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Weaviate:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.

### r7 — Answers you can inspect

- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Hallucination:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Metadata:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Prompt injection:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Role-based prompting:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Trace:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.

### r8 — Evaluate and approve a knowledge assistant

- **Calibration:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Evaluation set:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Golden test set:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Hallucination:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.

### m1 — See the whole picture

- **Artificial intelligence:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Gemini:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Transformer:** A longer phrase owns the matching text, or the form does not satisfy the reviewed matching rules.

### m2 — Turn images into useful decisions

- **Authorization:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Evaluation set:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Gemini:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Hugging Face:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Hugging Face Transformers:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Human review:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Image classification:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Media compression:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Transformer:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.

### m3 — Understand and create visual content

- **CLIP:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Florence-2:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Image caption:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Image patch:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Language model:** A longer phrase owns the matching text, or the form does not satisfy the reviewed matching rules.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **RT-DETR:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **SAM:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Stable Diffusion:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Training:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Transformer:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.

### m4 — Make sound searchable

- **Authorization:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **CLIP:** A longer phrase owns the matching text, or the form does not satisfy the reviewed matching rules.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Embedding:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Evaluation set:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Media compression:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.

### m5 — Govern voice intelligence

- **Agent:** Named in a question or selectable answer; those controls stay plain, with definitions in the term list.
- **Artificial intelligence:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Authorization:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Gemini:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Pydantic AI:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Real-time processing:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.

### m6 — Find the important moments in video

- **Calibration:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **CoTracker:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Gemini:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Temporal understanding:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.

### m7 — Move from creative brief to pilot

- **Acceptance criteria:** Named in a question or selectable answer; those controls stay plain, with definitions in the term list.
- **Artificial intelligence:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **CLIP:** Named in a question or selectable answer; those controls stay plain, with definitions in the term list.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Model architecture:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Orchestration:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Training:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.

### m8 — Launch a multimodal pilot responsibly

- **Authorization:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Batch processing:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Context:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.
- **Gradio:** Named in a tool/concept/diagram/lesson heading; no inline match in the approved prose.
- **Prompt:** Related course vocabulary, but no approved unambiguous matching form appears in these prose fields.
- **Training:** Restricted to reviewed technical phrases; no such phrase receives an inline match in these prose fields.

## Validation performed

- Asserted 217 entries, 24 lessons, and 84 concept records.
- Asserted every entry is findable by canonical-name search and has only valid lesson links.
- Asserted every segmented field reconstructs the original string exactly.
- Asserted every marked term belongs to its current lesson.
- Asserted the matched and list-only sets are disjoint and their union is the complete lesson term list for every lesson.

No claim is made here about screen-reader output, pointer/focus behavior, or runtime UI state; those require the separate browser verification.
