# Module 1 — Generative AI Fundamentals: management adaptation

Source root: `/Users/felipecosse/Docker/Udacity Generative AI/1 - Generative AI Fundamentals`.

All 19 numbered directories were inventoried and representative Markdown read. The supplied archive skips number 3: do not invent a missing module. `Exercise/` contains companion implementation notebooks and is not a separate curriculum module. Videos/subtitles duplicate teaching material; they were not played. Preserve the order below while consolidating engineering demonstrations into management activities.

## Source inventory and coverage

| Source folder | Management lesson |
|---|---|
| 1 - Introduction to Generative AI Foundations | 1. What changes when AI can create? |
| 2 - Generative AI Overview | 1. What changes when AI can create? |
| 4 - Applications of Generative AI | 1. What changes when AI can create? |
| 5 - Introduction to Foundation Models | 2. One model, many jobs |
| 6 - Building Applications using Foundation Models | 2. One model, many jobs |
| 7 - How Generative AI Works | 3. How a model learns and generates |
| 8 - Evaluating Generative AI Models | 4. Evidence before enthusiasm |
| 9 - Implementing Evaluations for Generative AI Models | 4. Evidence before enthusiasm |
| 10 - Neural Networks and Multilayer Perceptrons | 5. Learning systems need accountable owners |
| 11 - Implementing Neural Networks using Pytorch | 5. Learning systems need accountable owners |
| 12 - Model Interpretability and Ethics | 5. Learning systems need accountable owners |
| 13 - Generating Text using LLMs | 6. Give AI a useful brief |
| 14 - Role-Based Prompting | 6. Give AI a useful brief |
| 15 - Implementing Role-Based Prompting with Python | 6. Give AI a useful brief |
| 16 - Adapting Foundation Models | 7. Prompt, retrieve, or fine-tune? |
| 17 - Applying PEFT on Foundation Models | 7. Prompt, retrieve, or fine-tune? |
| 18 - Post-Training Foundation Models | 8. Reward the outcome you actually want |
| 19 - Reinforcement Fine-tuning on Foundation Models | 8. Reward the outcome you actually want |
| 20 - Teaching an LLM to Count! | 8. Reward the outcome you actually want |

## 1. What changes when AI can create?

- **Objectives:** distinguish generation from classification/prediction; identify text, image, audio, video, and software use cases; choose a bounded workflow with reviewable outputs.
- **Explain:** Conventional predictive systems often classify or forecast. Generative models produce candidate content from learned patterns. A generative model can also classify when prompted, so these are task categories rather than a rigid tool boundary. Fluent output can be incorrect. Begin with frequent, reversible work whose quality can be checked, rather than handing over a high-consequence decision.
- **Tools:** ChatGPT, Claude, Gemini as examples of general-purpose assistants; ElevenLabs as a voice-generation example. Explain the job each category supports, without claiming that a particular version or plan has every capability.
- **Image:** a branching visual showing one business brief becoming a draft report, campaign image, narration, and video storyboard, each passing through a human review point.
- **Example:** A customer-support manager drafts response templates from approved policy. Staff verify the facts and tone before sending. Success is measured in handling time and correction rate together.
- **Activity:** Compare a product-description draft, an automatic refund approval, and a quarterly-demand forecast. Choose the best first generative-AI pilot and explain the review point.
- **Quiz A:** A team wants a first pilot. Which task fits best? (A) Draft descriptions for staff approval. (B) Automatically decide all refunds. (C) Replace the demand forecasting system without comparison. **Answer A.** It is a bounded generation task with a practical check before publication.
- **Quiz B:** An AI summary sounds confident but contradicts the source. What should the manager conclude? (A) Confidence proves expertise. (B) Fluency and factual reliability are different. (C) Longer prompts guarantee truth. **Answer B.** Generated language needs evidence and verification.
- **Sources:** `1 - Introduction to Generative AI Foundations/Course Introduction - Summary.md`; `2 - Generative AI Overview/What is Generative AI? - Summary.md`; `2 - Generative AI Overview/GenAI Capabilities and Concerns - Summary.md`; `4 - Applications of Generative AI/Real World Applications of Generative AI - Summary.md`.

## 2. One model, many jobs

- **Objectives:** explain what a foundation model is; distinguish a model from a product that wraps it; compare instructions-only and example-guided prompting; ask about data provenance and language coverage.
- **Explain:** A foundation model learns reusable patterns from broad training data and can support many tasks. An application adds instructions, data access, tools, permissions, and a user interface. Pretraining is not a live feed of company policy. Model performance can vary by language, domain, and population. Zero-shot means instructions without task examples; few-shot adds a handful of demonstrations, which can help but do not guarantee correctness.
- **Tools:** GPT, Gemini, Claude, Llama, and Qwen are model-family examples. Hugging Face provides a place to inspect model and dataset descriptions. Explain hosted access versus operating an open-weight model: the latter adds hosting, evaluation, licensing review, and maintenance responsibilities.
- **Image:** one foundation block supporting three workstreams—summarize, classify, and draft—with a surrounding application layer for access controls and review.
- **Example:** A service team sorts incoming messages into billing, delivery, and account categories. Adding one approved example for each category clarifies the task; ambiguous messages still go to a person.
- **Activity:** Read two short classification briefs, one vague and one containing label definitions and examples. Choose the brief that is easier to evaluate and name an ambiguous case.
- **Quiz A:** A generic model gives an outdated company policy. What is the best explanation? (A) Broad training means it knows every current internal fact. (B) The application has not supplied reliable current policy. (C) Open-weight models cannot summarize. **Answer B.** General training does not provide an automatic connection to internal or changing information.
- **Quiz B:** After adding three examples, classification improves. What next? (A) Skip evaluation. (B) Test representative and ambiguous messages. (C) Assume the examples permanently retrained the model. **Answer B.** Examples guide the current context; they do not guarantee accuracy or change model weights.
- **Sources:** `5 - Introduction to Foundation Models/What is a Foundation Model? - Summary.md`; `5 - Introduction to Foundation Models/Training Data for LLMs - Summary.md`; `6 - Building Applications using Foundation Models/Module Summary.md`.

## 3. How a model learns and generates

- **Objectives:** distinguish training from use; explain transformers, tokens, and diffusion without mathematics; connect probabilistic generation to testing and supervision.
- **Explain:** Training adjusts a model's internal parameters using examples. Inference uses the trained model to respond to an input. A text model builds output in tokens, which can be words or word fragments; the next token depends on context. Transformers connect information across that context. Diffusion models learn to turn noise into structured outputs through repeated refinement. Neither process supplies an automatic truth guarantee. Pretraining develops broad capability; later training can shape instruction-following and preferences.
- **Tools:** A chat assistant for text generation and an image-generation tool for visual exploration. Use a local explanatory animation, not a paid live call, to show token-by-token growth and noise-to-image refinement.
- **Image:** two parallel pipelines: context → token predictions → draft; noisy canvas → progressive refinement → image. Label both outputs as candidates requiring review.
- **Example:** The same campaign brief yields different headlines. The manager keeps variation for ideation but requires factual checks for product claims.
- **Activity:** Toggle between an exploratory brief and a constrained brief. Show prewritten outputs illustrating variability; label this a simulation rather than a live model.
- **Quiz A:** A manager sends a new prompt to an existing assistant. Which process normally happens? (A) Pretraining from scratch. (B) Inference. (C) A full company-data migration. **Answer B.** The trained model produces a response; ordinary prompting does not retrain it.
- **Quiz B:** Why may repeated requests produce different wording? (A) Generation can sample among plausible next tokens. (B) The tool must be broken. (C) Every response comes from a fixed document. **Answer A.** Probabilistic selection can create useful variation and inconsistent outputs.
- **Sources:** `7 - How Generative AI Works/Module Summary.md`; `7 - How Generative AI Works/GenAI Architectures.md`; `7 - How Generative AI Works/Training GenAI Models - Summary.md`.

## 4. Evidence before enthusiasm

- **Objectives:** define acceptance criteria before a pilot; compare exact checks, reference similarity, human review, and AI judges; build a representative test set and track error severity.
- **Explain:** A pleasing demo is not sufficient evidence. Exact checks suit unambiguous answers. Word overlap measures resemblance, not necessarily correctness. Meaning similarity can recognize paraphrases but can still overlook a decisive factual error. Human reviewers assess practical usefulness and nuanced failures. AI judges can accelerate reviews but need calibration against trusted human judgments. Evaluate the whole workflow using realistic examples, difficult cases, and data that was not used to tune the system.
- **Tools:** Spreadsheet scorecards; review rubrics; an AI judge as an assistant to evaluation. Describe ROUGE as word-overlap scoring and embeddings as meaning-oriented representations without formulas or code.
- **Image:** four lenses over the same response—facts, meaning, usefulness, risk—feeding a pilot go/no-go decision.
- **Example:** Compare two support-summary tools on the same anonymized cases. Count missed commitments, invented facts, review time, and language coverage, rather than selecting by eloquence alone.
- **Activity:** Score two summaries of a short source: one elegant but inventing a refund, the other plain and accurate. Reveal how a factual error outweighs style for this task.
- **Quiz A:** A summary matches many source words but invents a delivery date. Which conclusion follows? (A) High overlap is sufficient. (B) Word overlap cannot establish factual correctness. (C) All automated evaluation is useless. **Answer B.** Surface similarity and factual reliability are different properties.
- **Quiz B:** An AI judge awards every response high marks. What should the manager do? (A) Accept the scores as objective truth. (B) Compare its judgments with human-reviewed examples and revise the rubric. (C) Remove difficult cases. **Answer B.** A judge is another model and needs calibration, including failure cases.
- **Sources:** `8 - Evaluating Generative AI Models/Module Summary.md`; `8 - Evaluating Generative AI Models/Evaluation Methods for GenAI Models.md`; `8 - Evaluating Generative AI Models/Benchmarking GenAI Models.md`; `9 - Implementing Evaluations for Generative AI Models/Module Summary.md`.

## 5. Learning systems need accountable owners

- **Objectives:** describe learning as error feedback without equations; explain why data and objective choices matter; assign accountability for bias, privacy, transparency, workforce effects, and resource use.
- **Explain:** Neural networks contain layers of adjustable relationships. Training compares outputs with a target, measures error, and changes parameters to improve future predictions. PyTorch is an engineering toolkit for this work, not a tool managers need to program. A training objective is a proxy for what people want; improving that score alone does not prove business usefulness. Model explanations are outputs to inspect, not direct access to the model's internal reasoning. Review different groups and languages, protect sensitive data, disclose synthetic media when appropriate, and maintain human escalation and an incident owner.
- **Tools:** PyTorch explained as a model-building framework; dataset documentation, risk registers, and human-review checklists as management tools.
- **Image:** a feedback loop of examples → model → output → error review → improvement, surrounded by owner checkpoints for data, fairness, and deployment.
- **Example:** A support classifier performs well overall but routes messages in a regional dialect incorrectly. The team investigates the data and measures that segment before expanding use.
- **Activity:** Assign a data owner, business owner, reviewer, and escalation owner to a proposed support pilot. Select the missing control in a scenario with good average accuracy but poor subgroup results.
- **Quiz A:** Overall accuracy is high but one customer language has frequent errors. What next? (A) Ship because the average is high. (B) Investigate and test performance for that group before expansion. (C) Hide the subgroup metric. **Answer B.** Aggregates can conceal concentrated harm and an unfit workflow.
- **Quiz B:** A model offers a detailed explanation for an incorrect recommendation. What does that prove? (A) Its internal reasoning is transparent. (B) The explanation itself must be checked. (C) A longer explanation makes the result safe. **Answer B.** A plausible narrative is not a faithful window into internal computation.
- **Sources:** `10 - Neural Networks and Multilayer Perceptrons/Module Summary.md`; `11 - Implementing Neural Networks using Pytorch/Module Summary.md`; `12 - Model Interpretability and Ethics/Module Summary.md`; `12 - Model Interpretability and Ethics/Interpretability in AI.md`; `12 - Model Interpretability and Ethics/Understanding and Mitigating Bias in AI.md`; `12 - Model Interpretability and Ethics/Environmental and Human Impacts of GenAI.md`.

## 6. Give AI a useful brief

- **Objectives:** construct a role, task, context, format, and example brief; understand context and token limits; compare persona consistency with factual correctness.
- **Explain:** A useful prompt says what job to do, for whom, using what evidence, under which constraints, and in what form. A role helps shape viewpoint and tone but does not grant credentials or knowledge. Tokens are pieces of text; context capacity and output limits affect how much material can be considered in one request. Ask for source-backed claims, missing-information flags, and a concise reviewable deliverable. Check outputs over multiple cases, including cases where the right response is to ask for missing information.
- **Tools:** ChatGPT, Claude, or Gemini for a business brief; Hugging Face as a model-discovery ecosystem, including model cards. No code or notebook screens.
- **Image:** an editable business brief broken into five labeled layers: role, task, context, format, examples; an output beside it highlights which parts are grounded.
- **Example prompt:** “Act as an operations analyst preparing a director's weekly update. Use only the supplied service figures. Summarize two trends, list missing information, and suggest one question for the team. Use three short bullets. Do not invent causes.” This is natural-language workplace instruction, not programming.
- **Activity:** Assemble the five parts of a brief, then compare a vague simulated output with a constrained one. Explicitly label outputs as illustrative and prewritten.
- **Quiz A:** A prompt says “Act as a finance expert.” What else is essential for a reliable report? (A) A more impressive title. (B) Relevant source facts, a clear task, and verification. (C) A longer fictional biography. **Answer B.** Persona does not supply facts or replace review.
- **Quiz B:** The source has no explanation for a sales decline. What should the brief require? (A) Invent a likely cause. (B) State the gap and suggest a follow-up question. (C) Hide the decline. **Answer B.** Explicit uncertainty is more useful than an unsupported explanation.
- **Sources:** `13 - Generating Text using LLMs/Module Summary.md`; `13 - Generating Text using LLMs/Demo: Generating Text.md`; `14 - Role-Based Prompting/Crafting a Good Role-Based Prompt.md`; `14 - Role-Based Prompting/Evaluating Agent Personas.md`; `15 - Implementing Role-Based Prompting with Python/Summary.md`.

## 7. Prompt, retrieve, or fine-tune?

- **Objectives:** diagnose instruction, information, and behavior gaps; distinguish prompting, RAG, and fine-tuning; explain parameter-efficient adaptation and operating tradeoffs.
- **Explain:** Start with a clear prompt and evaluate. If information is missing or changes often, retrieval can bring approved current documents into the model's context. If a stable skill or style remains inconsistent after a good prompt, fine-tuning may help by adjusting parameters using examples. Parameter-efficient fine-tuning (PEFT), including LoRA adapters, changes a smaller set of parameters and can reduce training resources; it still needs data, evaluation, and maintenance. Compression reduces deployment demands with tradeoffs to test. Agents add tools and actions, requiring scoped permissions and approvals for consequential actions. These approaches can be combined rather than treated as mutually exclusive products.
- **Tools:** Hugging Face PEFT/LoRA as engineering mechanisms; a retrieval-backed knowledge assistant as a product pattern; an adaptation decision matrix as the management tool.
- **Image:** a decision tree: unclear instruction → improve brief; missing/changing knowledge → retrieve approved sources; persistent stable behavior gap → evaluate fine-tuning. Every branch ends in testing.
- **Example:** A return policy changes monthly while brand tone is stable. Use retrieval for policy, prompt examples for tone first, and consider fine-tuning only if measured consistency remains inadequate.
- **Activity:** Sort three problems—vague output format, outdated policy, and persistent specialized response style—into their likely first interventions. Reveal that all choices still require evidence.
- **Quiz A:** Company policies change each week. Which first design best addresses freshness? (A) Retrieve the approved current policy. (B) Retrain a model after every edit without comparison. (C) Add “be current” to every prompt. **Answer A.** Retrieval supplies changing information at use time; it still needs access controls and freshness checks.
- **Quiz B:** What does LoRA primarily change? (A) It eliminates evaluation. (B) It trains small adapter components instead of all base-model parameters. (C) It gives the model unrestricted live internet access. **Answer B.** It is an efficient adaptation method, not a knowledge feed or quality guarantee.
- **Sources:** `16 - Adapting Foundation Models/Module Summary.md`; `16 - Adapting Foundation Models/Model Adaptation Tradeoffs.md`; `16 - Adapting Foundation Models/Parameter Efficient Fine-Tuning.md`; `16 - Adapting Foundation Models/More Model Adaptation Techniques.md`; `17 - Applying PEFT on Foundation Models/Module Summary.md`.

## 8. Reward the outcome you actually want

- **Objectives:** distinguish demonstrations from preference/reward feedback; understand reward design and unintended optimization; write a management pilot brief replacing the engineering counting project.
- **Explain:** Supervised fine-tuning learns from examples of desired responses. Preference methods compare better and worse responses; reinforcement methods reward measured outcomes. RLHF, DPO, and GRPO are related post-training approaches, not interchangeable algorithms. If a reward measures the wrong behavior, a model can improve the score while failing the real goal. The source counting project illustrates that confident language is not the same as exact execution. For exact arithmetic or counting in a business workflow, a verified deterministic tool may be more appropriate than retraining a language model. Model improvement is a hypothesis to test, not a guaranteed consequence of training.
- **Tools:** A quality rubric, held-out test set, and reward review; Hugging Face training tools, Unsloth, and vLLM explained as developer infrastructure for adaptation and efficient serving, without installation or performance promises.
- **Image:** a balanced scorecard around a feedback loop: correctness, usefulness, safety, and cost; show a warning when only response length is rewarded.
- **Example:** A support model rewarded solely for short replies omits important next steps. The team revises the rubric to require correctness and resolution guidance, then compares unseen cases before release.
- **Activity:** Create a one-page pilot charter with the workflow, baseline, target, representative test cases, review owner, data boundary, cost limit, and stop condition. For the counting example, choose a reliable calculator/tool and evaluate the complete workflow before considering retraining.
- **Quiz A:** A model improves its “short reply” score but omits refund conditions. What failed? (A) The reward did not represent the full desired outcome. (B) Concision is always harmful. (C) All fine-tuning must be abandoned. **Answer A.** A narrow proxy can reward behavior that undermines the actual task.
- **Quiz B:** A workflow requires exact counts and a reliable counting tool already exists. What should a manager ask first? (A) Can a verified tool perform the exact step? (B) Can we train the largest model available? (C) Can we accept confident estimates? **Answer A.** Use the simplest reliable mechanism for the exact subtask and evaluate its integration.
- **Sources:** `18 - Post-Training Foundation Models/Module Summary.md`; `18 - Post-Training Foundation Models/Supervised Fine-Tuning.md`; `18 - Post-Training Foundation Models/Reinforcement Fine-Tuning.md`; `19 - Reinforcement Fine-tuning on Foundation Models/Module Summary.md`; `20 - Teaching an LLM to Count!/Project Overview.md`; `20 - Teaching an LLM to Count!/The Acceleration Stack: A Primer.md`.

## Editorial accuracy cautions

The source includes broad or questionable claims that should not be repeated literally: closed-model parameter counts; all commercial models handling all modalities concurrently; prompting guaranteeing deterministic output; retrieval ensuring accuracy; post-training necessarily being ethical; specific speed/memory multipliers; and a misleading source decision-tree caption that swaps knowledge/behavior remedies. Use stable conceptual explanations above, preserve uncertainty, and verify any current vendor capability claims against official documentation. The course is an independent management adaptation of a local study archive, not an official Udacity course or credential.
