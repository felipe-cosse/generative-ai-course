# Module 2: LLMs and Retrieval-Augmented Generation — manager adaptation

## Source audit and adaptation rules

Source root: `/Users/felipecosse/Docker/Udacity Generative AI/2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)`.

Audited all 18 numbered folders, Markdown titles throughout, and representative instructional Markdown in every folder. Preserve source order while replacing programming exercises with procurement, prompt review, and pilot decisions. No code shown to learners. Tool names below describe the archived material; do not claim current model versions, prices, plan entitlements, or benchmark leadership without verification.

Correct several source simplifications in the adaptation: RAG reduces but does not eliminate unsupported claims; low temperature does not guarantee correctness or identical responses; similarity is not truth; a cited answer can still misuse its source; evaluation thresholds depend on task and consequence; not every RAGAS metric requires a reference answer; self-hosting is not automatically cheaper or compliant. Model/context examples and pricing in the archive are historical. Do not carry forward its blanket $500,000 self-hosting recommendation or universal score thresholds.

## Complete source-folder inventory

| Source folder | Management lesson |
|---|---|
| 1 - Introduction to LLMs and Retrival Augmented Generation (RAG) | 1 |
| 2 - The Large Language Model Landscape | 1 |
| 3 - Implementing a Chatbot with an LLM | 1 |
| 4 - LLM Prompting & Inference | 2 |
| 5 - Applied Prompting and Inference | 2 |
| 6 - Prompt Instruction Refinement | 3 |
| 7 - Applying Prompt Instruction Refinement with Python | 3 |
| 8 - Tokens, Embeddings, and Vector Search | 4 |
| 9 - Implementing Tokens, Embeddings, and Vector Search | 4 |
| 10 - Strategic Model Selection & Economics | 5 |
| 11 - Applying Model Selection and Economics | 5 |
| 12 - Retrieval Augmented Generation (RAG) Workflow | 6 |
| 13 - Semantic Search with Vector Databases for RAG | 6 |
| 14 - Prompt Engineering for RAG Synthesis | 7 |
| 15 - Implementing RAG with Vector Databases | 7 |
| 16 - Evaluating RAG Systems | 8 |
| 17 - RAG Evaluation Implementation | 8 |
| 18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System | 8 |

## Lesson 1 — What a business chatbot actually knows

**Time:** 12 minutes. **Source folders:** 1–3.

**Outcome:** Distinguish a language model, a chat product, conversation context, and a connected knowledge source. Describe why a fluent response can be incorrect. Define a useful but limited customer-support assistant.

**Concepts:** A model generates likely continuations from its training and supplied context. A chat application supplies instructions, conversation history, and sometimes tools. Conversation context is finite: summaries and selected history can preserve important details but may omit information. A model does not automatically have current company policies or permission to take business actions. RAG is introduced as retrieval followed by generation, revisited later.

**Tools:** ChatGPT, Claude, and Gemini as examples of chat interfaces; an LLM provider as the underlying model service. Explain tool roles without a model ranking or version claims.

**Image:** A customer conversation beside three labeled information trays: general training, conversation, approved business knowledge. Highlight the company-policy tray as disconnected until the application supplies it. Accessible alt text describes the distinction; diagram labels remain selectable HTML.

**Business example:** A customer says a headset failed, then asks “Can I return it?” The assistant should retain the product context and consult the applicable return policy rather than invent a deadline.

**Decision activity:** Choose what a support pilot may do: draft replies, recommend a policy with a source, or issue refunds. Reveal that the first two can be reviewed in a bounded pilot; refunds require separate authorization, checks, and a controlled workflow.

**Quiz 1:** A chatbot confidently gives a return deadline absent from the supplied policy. What should the manager conclude? A. Confidence proves the policy is correct. B. The answer needs verification against an approved source. C. Increasing response length fixes it. **Answer: B.** Fluency is not evidence, and the missing policy must be retrieved or escalated.

**Quiz 2:** After a long conversation the bot forgets the product. What is the most relevant question for the team? A. How is relevant conversation context retained? B. Can we make the answer more creative? C. Can we hide the prior messages from the user? **Answer: A.** Context selection and summarization affect what the model receives; a longer visible chat does not guarantee all history is included.

**Exact relative source Markdown:**
- `1 - Introduction to LLMs and Retrival Augmented Generation (RAG)/Course Outcomes.md`
- `2 - The Large Language Model Landscape/The LLM Landscape.md`
- `2 - The Large Language Model Landscape/The RAG Architecture: Key to Trust.md`
- `3 - Implementing a Chatbot with an LLM/Managing Conversations with an LLM.md`
- `3 - Implementing a Chatbot with an LLM/Chatbot Issues and Testing.md`

## Lesson 2 — Brief the model like a colleague

**Time:** 12 minutes. **Source folders:** 4–5.

**Outcome:** Write a useful plain-language brief and recognize the tradeoff between variety, brevity, and consistency. Separate an explanation from evidence of correctness.

**Concepts:** Prompts combine task, audience, context, constraints, examples, and output format. Zero-shot means describing the task; few-shot means adding examples. Break a complex task into reviewable stages and request a concise explanation or evidence checklist. Sampling settings influence variation when supported; they are not truth controls. Length limits can truncate an answer. Repeated model agreement is not independent verification.

**Tools:** A chat interface and prompt template; temperature and response length described as application controls, with availability depending on tool/model. No parameter syntax shown.

**Image:** A six-part briefing canvas: task → audience → context → constraints → example → output. A small “variety” dial contrasts brainstorming with policy classification without suggesting a correctness dial.

**Business example:** Replace “Summarize this meeting” with a request for a leadership summary, decisions, owners, deadlines, and explicitly marked unknowns from a supplied meeting record.

**Decision activity:** Select the stronger brief from three versions, then choose whether varied ideas or consistent structure better fits campaign brainstorming versus incident triage. Show fixed sample outputs, labeled illustrative rather than live AI.

**Quiz 1:** A model lists action owners that never appeared in the meeting. Which prompt change best addresses the problem? A. Ask for a more confident tone. B. Ask for twenty more actions. C. Require owners from the record and mark missing owners “unassigned.” **Answer: C.** Explicit source boundaries and an unknown state reduce pressure to invent, while review remains necessary.

**Quiz 2:** A team lowers temperature for a policy assistant. What can it reasonably expect? A. Less output variation, with accuracy still requiring checks. B. Guaranteed factual answers. C. Automatic access to the latest policy. **Answer: A.** Sampling affects variation, not source access or factual guarantees.

**Exact relative source Markdown:**
- `4 - LLM Prompting & Inference/What Is a Prompt?.md`
- `4 - LLM Prompting & Inference/Prompt Templating.md`
- `4 - LLM Prompting & Inference/Building Your Prompt Engineer Toolkit.md`
- `4 - LLM Prompting & Inference/Advanced LLM Inference.md`
- `5 - Applied Prompting and Inference/Exercise: LLM Inference Parameters.md`
- `5 - Applied Prompting and Inference/Solution: Prompt Chain of Thought.md`

## Lesson 3 — Improve prompts with evidence

**Time:** 10 minutes. **Source folders:** 6–7.

**Outcome:** Refine instructions systematically and compare versions against the same representative work. Define an acceptance rubric before selecting a prompt.

**Concepts:** Version prompts, change one meaningful element at a time, and test against realistic cases. Assess accuracy, completeness, format, tone, and appropriate escalation. Keep a held-out set so improvements on practice cases do not masquerade as general reliability. Examples should include ambiguous and out-of-scope cases, not just easy successes.

**Tools:** Prompt library, small review scorecard, and a chat interface. Technical prompt-optimization exercises become a side-by-side managerial review.

**Image:** A loop showing brief → sample outputs → human scorecard → targeted revision → retest, with an independent test set outside the loop.

**Business example:** A support inbox prompt overuses “billing issue.” Add category definitions and examples for billing, delivery, product defect, and uncertain; compare both versions on the same anonymized cases.

**Decision activity:** Review three sample tickets and two prompt versions. Score accuracy and escalation before revealing why the clearer category definitions help, while an ambiguous ticket still needs human review.

**Quiz 1:** Prompt B performs better than A, but each was tried on different tickets. What is the best next step? A. Ship B immediately. B. Compare both on the same representative cases. C. Pick whichever response is longer. **Answer: B.** A fair comparison controls the cases so the prompt change can be assessed.

**Quiz 2:** A refined prompt gets all five familiar examples right. What evidence is still missing? A. A more persuasive title. B. A longer role description. C. Performance on unseen and difficult cases. **Answer: C.** Fitting familiar examples does not establish reliable behavior across actual work.

**Exact relative source Markdown:**
- `6 - Prompt Instruction Refinement/Prompt Instruction Refinement.md`
- `6 - Prompt Instruction Refinement/Prompt Instruction Refinement Best Practices.md`
- `6 - Prompt Instruction Refinement/Examples: Prompt Instruction Refinement.md`
- `7 - Applying Prompt Instruction Refinement with Python/Exercise: Prompt Refinement.md`
- `7 - Applying Prompt Instruction Refinement with Python/Summary: Prompt Instruction Refinement.md`

## Lesson 4 — Tokens and search by meaning

**Time:** 12 minutes. **Source folders:** 8–9.

**Outcome:** Explain tokens as processing units, embeddings as numerical representations, and semantic search as finding related content. Identify what similarity cannot prove.

**Concepts:** Tokens can be words, parts of words, or punctuation; counts depend on language and model. They affect context limits and often usage cost. Embeddings represent content as numbers useful for comparing patterns of meaning. Vector search finds similar representations. Similar statements can disagree, be outdated, or belong to an unauthorized document. Keyword and semantic search can complement each other, especially for exact identifiers.

**Tools:** Token counter, embedding model, and vector search. Describe OpenAI embeddings as a source example and avoid implying a specific dimensionality is universal.

**Image:** A semantic neighborhood: “time off,” “annual leave,” and “vacation policy” near each other, with “leave a review” elsewhere. Caption says the layout is an explanatory analogy rather than an actual embedding plot.

**Business example:** An employee searches “How much time off can I take?” Semantic search can find a document titled “Annual Leave Entitlement,” but region and effective date must still be checked.

**Decision activity:** Sort four search results for an employee in one region. A meaning match with the wrong region is rejected; a current authorized policy is preferred. Reveal that semantic similarity alone is insufficient.

**Quiz 1:** Why can a search for “time off” find a document titled “Annual Leave”? A. Embeddings can capture related meaning. B. Both phrases always have identical tokens. C. The database rewrites company policy. **Answer: A.** Semantic retrieval can connect related language beyond exact word matches.

**Quiz 2:** Two passages receive a high similarity score. What does that establish? A. Both are current and correct. B. The user may access both. C. Their representations are similar; truth and access need separate checks. **Answer: C.** Similarity is useful for retrieval, not a correctness or authorization guarantee.

**Exact relative source Markdown:**
- `8 - Tokens, Embeddings, and Vector Search/Tokenization.md`
- `8 - Tokens, Embeddings, and Vector Search/Embeddings.md`
- `8 - Tokens, Embeddings, and Vector Search/Vectors and Vector Search.md`
- `9 - Implementing Tokens, Embeddings, and Vector Search/Demo: Tokenization.md`
- `9 - Implementing Tokens, Embeddings, and Vector Search/Demo: Embeddings and Vector Search.md`

## Lesson 5 — Choose models by business value

**Time:** 14 minutes. **Source folders:** 10–11.

**Outcome:** Compare candidates using quality, speed, total cost, and control. Explain why the cheapest request or highest benchmark score may not deliver the best business result.

**Concepts:** Test models on the actual task. Total cost includes input/output usage, retries, retrieval, infrastructure, monitoring, integration, and human review. Hosted APIs and self-hosting have different operating responsibilities; neither guarantees compliance or lower cost. Model routing can send simpler work to a smaller candidate and escalate difficult cases if evaluations support it. Use cost per successfully completed task and acceptable error rates.

**Tools:** Vendor/model scorecard, usage estimator, evaluation dataset; API services and open-weight deployments as categories. Model pricing is deliberately hypothetical; current quotes must be checked separately.

**Image:** A balanced four-axis decision compass: quality, speed, cost, control, with a highlighted business objective in the center.

**Business example:** For 10,000 draft replies per month, candidate A costs a fictional $100 in model usage but requires $900 of review; B costs $250 plus $400 of review. B has lower modeled total cost, assuming comparable quality and the stated review estimates.

**Decision activity:** Adjust request volume and review time in a clearly hypothetical total-cost comparison. Then select the candidate meeting the required quality and latency constraints. Do not make calculator output a procurement recommendation.

**Quiz 1:** Candidate A has the lowest token price but needs many retries and corrections. What should determine the decision? A. Token price alone. B. Total cost per acceptable completed task. C. Provider logo size. **Answer: B.** Rework, retries, and operational costs can outweigh a cheap request.

**Quiz 2:** A vendor tops a public benchmark. What should the manager do before selection? A. Test it on representative tasks and required data controls. B. Skip the pilot. C. Assume it is best for every workflow. **Answer: A.** A broad benchmark does not establish fit for the organization's task, constraints, or risk tolerance.

**Exact relative source Markdown:**
- `10 - Strategic Model Selection & Economics/Model Selection.md`
- `10 - Strategic Model Selection & Economics/Metrics for Evaluation.md`
- `10 - Strategic Model Selection & Economics/Model Economics.md`
- `10 - Strategic Model Selection & Economics/Selection Process and Resources.md`
- `11 - Applying Model Selection and Economics/Exercise: Prompt Cost.md`
- `11 - Applying Model Selection and Economics/Exercise: Model Selection.md`

## Lesson 6 — Give AI the right business knowledge

**Time:** 14 minutes. **Source folders:** 12–13.

**Outcome:** Explain the RAG workflow and identify the operational decisions that make business knowledge usable. Distinguish document retrieval from model retraining.

**Concepts:** Prepare and chunk documents; create embeddings; index them; retrieve relevant authorized passages; generate an answer from context. Chunking should preserve meaningful units. Metadata helps constrain region, source, date, and access. Hybrid search combines keyword and semantic signals; reranking reorders candidate passages. Approximate search trades some exactness for speed at scale. Freshness, document ownership, deletion, and retrieval permissions are ongoing responsibilities.

**Tools:** Chroma as the archived prototype vector store; Pinecone and Weaviate as additional vector-search examples named in the source. Explain what a vector database does without setup or API instructions.

**Image:** A two-lane RAG diagram: preparation lane “documents → passages → searchable index”; question lane “question → retrieve permitted passages → answer + sources.” An explicit access-control gate precedes retrieval.

**Business example:** A policy assistant returns the right topic but last year's regional policy. The problem is knowledge freshness/filtering, not necessarily model intelligence.

**Decision activity:** Step through a sample policy question. Select region and date filters, see which passages remain, and choose a coherent passage boundary. The result is a transparent simulation with fixed documents.

**Quiz 1:** A RAG assistant retrieves the wrong year's policy. What should be investigated first? A. Its writing style. B. Whether the model needs a larger name. C. Document freshness, metadata, and retrieval filters. **Answer: C.** The generator cannot reliably correct stale or inappropriate evidence it was given.

**Quiz 2:** HR and public documents share an index. Where must access control be enforced? A. Only in a sentence asking the model to keep secrets. B. In the application and retrieval authorization controls. C. Only after a user complains. **Answer: B.** Prompts are not a substitute for enforcing which source material a user is allowed to retrieve.

**Exact relative source Markdown:**
- `12 - Retrieval Augmented Generation (RAG) Workflow/RAG Workflow.md`
- `12 - Retrieval Augmented Generation (RAG) Workflow/RAG Workflow Concepts.md`
- `13 - Semantic Search with Vector Databases for RAG/Vector Databases.md`
- `13 - Semantic Search with Vector Databases for RAG/Vector Databases and Semantic Search for RAG.md`
- `13 - Semantic Search with Vector Databases for RAG/Retrieval, Ranking.md`

## Lesson 7 — Answers you can inspect

**Time:** 12 minutes. **Source folders:** 14–15.

**Outcome:** Define a grounded-answer contract covering evidence, uncertainty, conflicts, and citations. Inspect whether a source actually supports a claim.

**Concepts:** Supply selected passages with clear source identities. Require answers to stay within evidence, cite support, and state when evidence is missing or conflicting. Keep trusted application instructions separate from retrieved content; documents can contain misleading instructions. A citation is a pointer, not proof. Test update/delete behavior and filtered retrieval so obsolete or prohibited passages do not persist into answers.

**Tools:** Grounded-answer template, source viewer, knowledge-base metadata filters. Chroma appears as the example behind the index; manager-facing activity displays only documents and outputs.

**Image:** An answer with three claims linked to source passages: two supported links and one unsupported claim highlighted. Caption invites the learner to trace the evidence.

**Business example:** A sales assistant says a product supports a feature and cites a brochure that only says the feature is planned. The citation exists, but the availability claim is unsupported.

**Decision activity:** Review a fixed answer against two source excerpts; label each claim supported, contradicted, or missing. Rewrite the conclusion using a provided choice, including an honest uncertainty statement.

**Quiz 1:** An answer includes three citations. What is the best verification step? A. Check that each cited passage supports its associated claim. B. Count citations and approve any answer with three. C. Remove uncertainty to make it persuasive. **Answer: A.** Citation presence alone does not establish entailment, freshness, or correctness.

**Quiz 2:** The retrieved documents disagree on eligibility and neither is clearly authoritative. What should the assistant do? A. Invent a compromise. B. Report the conflict and route to an owner. C. Choose whichever passage is longer. **Answer: B.** The system should expose unresolved evidence rather than silently manufacture a policy.

**Exact relative source Markdown:**
- `14 - Prompt Engineering for RAG Synthesis/Prompt Engineering for RAG.md`
- `14 - Prompt Engineering for RAG Synthesis/Prompting Patterns for RAG.md`
- `14 - Prompt Engineering for RAG Synthesis/RAG Context and Citations.md`
- `15 - Implementing RAG with Vector Databases/Demo: Vector Database Operations.md`
- `15 - Implementing RAG with Vector Databases/Testing RAG Implementation.md`
- `15 - Implementing RAG with Vector Databases/Solution: RAG System.md`

## Lesson 8 — Evaluate and approve a knowledge assistant

**Time:** 16 minutes. **Source folders:** 16–18.

**Outcome:** Diagnose retrieval versus generation failures and write an evidence-based pilot decision. Adapt NASA Mission Intelligence into a managerial acceptance review without building code.

**Concepts:** A golden test set contains representative questions, reviewed reference answers, and relevant evidence where needed. Retrieval precision asks how useful retrieved material is; recall asks whether needed material was found. Faithfulness asks whether the answer is supported by supplied context; relevance asks whether it addresses the question. Correctness needs trustworthy reference evidence. Automated/model-based judges are fallible and require human calibration. Track subgroup failures, latency, cost, abstention, and unauthorized access separately; averages can hide serious failures.

**Tools:** RAGAS as an evaluation framework, a human-reviewed test set, and a pilot scorecard. Avoid universal launch thresholds or the claim all RAGAS metrics require reference answers.

**Image:** A split diagnostic dashboard: “Did we find the evidence?” and “Did we use it faithfully?” feeding a launch/revise decision with an owner and stop criteria.

**Business example:** The source NASA Mission Intelligence project becomes a sponsor review: an assistant answers questions across Apollo 11, Apollo 13, and Challenger records. The learner checks mission filtering, dated source citations, missing-answer handling, and separate retrieval/generation results. No invented historical details are needed for the activity.

**Decision activity:** Given a fictional pilot scorecard with strong average relevance but unauthorized retrieval and unsupported mission claims, choose revise/pause and assign corrective actions. Finish a one-page pilot charter: user, knowledge owner, evaluation cases, success criteria, human escalation, monitoring owner, and stop condition.

**Quiz 1:** The correct passage was retrieved, but the answer adds an unsupported fact. Which component most directly failed? A. Generation faithfulness. B. Document upload speed. C. Search recall alone. **Answer: A.** The evidence was available; the answer failed to stay supported by it.

**Quiz 2:** A pilot averages 95% helpful answers but exposes restricted documents in one test. What is the sound launch decision? A. Launch because the average is high. B. Remove that test from the score. C. Fix authorization and retest before broad rollout. **Answer: C.** A high average cannot compensate for a critical access-control failure.

**Exact relative source Markdown:**
- `16 - Evaluating RAG Systems/RAG Evaluation.md`
- `16 - Evaluating RAG Systems/Evaluating the Retriever.md`
- `16 - Evaluating RAG Systems/Evaluating the Generator.md`
- `16 - Evaluating RAG Systems/The Evaluation Dataset.md`
- `17 - RAG Evaluation Implementation/Guide to RAGAS Metrics.md`
- `17 - RAG Evaluation Implementation/Exercise: RAG Evaluation.md`
- `18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Project Overview.md`
- `18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Rubric.md`

## Implementation handoff

Eight lessons total, approximately 102 minutes, 16 scenario questions, eight concept diagrams, and eight bounded decision activities. Reuse the course lesson/quiz components. Store original prose and fixed examples, not copied notebooks. Images support explanation; substantive labels and content remain accessible text. Simulated activities must say they use fixed examples, not imply live AI. Tool links or current capability claims require a later primary-source check.
