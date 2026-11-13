# Fieldwork glossary inventory for the implementation plan

Read-only audit of the current 24 lesson objects and tool guide. This is a candidate inventory, not the completed glossary or a claim that every definition has been independently verified. No course code or source archive was changed.

## Counts and scope

- **217 deduplicated candidate entries**, across 11 categories: **179 concept/workflow entries**, **36 named tools/model families/frameworks**, and **2 course-project names**.
- The current lesson data contains **84 concept appearances and 79 distinct concept labels**. Repeated labels are consolidated; combined labels such as PEFT and LoRA and retrieval precision and recall are split into separate entries.
- **80 candidate entries** align with an explicit concept definition (including the split combined labels); remaining entries are explained or mentioned in prose/tool roles and need a concise stand-alone definition written.
- Scope means AI, business-evaluation, operating, governance, media, and named-tool vocabulary used by the course. Ordinary English, organization names in fictional examples, and source filename words are excluded.
- Larger explanations are needed for every entry: why it matters to a manager, fictional example, common confusion, related terms, and lesson links. Existing short definitions are a starting point, not a finished glossary.
- Most entries have course-backed terminology; full expansions of abbreviations such as DPO, GRPO, LoRA, CLIP, CLAP, YOLO, OCR, PEFT, and LLM may require editorial supplementation and primary-reference verification. Expansions must not create separate duplicate glossary entries.

| Category | Candidates |
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

## Candidate inventory

Status **C**: explicit course concept definition available. **P**: present in explanatory prose/tool descriptions; write a stand-alone definition. **S**: supporting canonical label for an idea explained in prose, requiring editorial wording. The lesson references are discovery evidence, not the final automatic-highlight scope. Matching forms below are discovery candidates, not approved synonyms: ambiguous short words must be restricted to the relevant lessons or excluded from auto-highlighting. Follow the [implementation plan](04-glossary-plan.md) for the final interaction and coverage policy.

### Core concepts

| Canonical entry | Candidate aliases / forms | Lesson IDs | Status |
|---|---|---|---|
| Artificial intelligence | AI | f1, f2, f4, f5, f6, f7, f8, r6, m1, m5, m7 | P |
| Machine learning | ML | f1 | P |
| Deep learning | DL | f1 | P |
| Generative AI | GenAI; generative artificial intelligence | f1 | C |
| Foundation model | foundation models | f2 | C |
| Language model | language models | f3, f6, r1, m3 | C |
| Large language model | LLM; LLMs | r1 | P |
| Neural network | neural networks | f1, f5 | P |
| Perceptron | perceptrons | f5 | P |
| Multilayer network | multilayer perceptron; MLP | f5 | P |
| Model parameter | parameters; parameter | f2, f3, f5, f7, r6 | P |
| Model weights | weights | f2 | P |
| Training data | training examples | f1, f2, f7 | P |
| Tensor | tensors | f5 | P |
| Transformer | transformers | f3, m1, m2, m3 | C |
| Attention | transformer attention | r2, m1 | C |
| Model architecture | architecture | f3, m7 | P |

### Training and adaptation

| Canonical entry | Candidate aliases / forms | Lesson IDs | Status |
|---|---|---|---|
| Training | — | f1, f2, f3, f4, f5, f7, f8, r1, m3, m7, m8 | C |
| Pretraining | pre-training | f2, f3 | P |
| Post-training | post training | f8 | P |
| Inference | inference stage | f3, f8, m5 | C |
| Next-token prediction | next token | f3 | P |
| Diffusion | diffusion model; diffusion models | f3, m3 | C |
| Flow matching | flow-matching | f3 | P |
| Fine-tuning | fine tuning; fine-tune | f7, f8 | C |
| Supervised fine-tuning | SFT | f8 | C |
| Preference learning | preference-based; preferences | f3, f8 | C |
| Reinforcement learning | reinforcement approaches; reinforcement | f8 | P |
| Reward signal | reward signals; reward | f8 | C |
| Proxy objective | proxy | f8 | P |
| RLHF | reinforcement learning from human feedback | f8 | P |
| DPO | direct preference optimization | f8 | P |
| GRPO | group relative policy optimization | f8 | P |
| PEFT | parameter-efficient fine-tuning | f7 | C |
| LoRA | low-rank adaptation | f7 | C |
| Adapter | adapter components; adapters | f7 | P |
| Loss function | — | f5 | C |
| Backpropagation | back-propagation | f5 | P |
| Optimizer | — | f5 | C |
| Model compression | — | f7 | P |
| Distillation | — | f7 | P |
| Quantization | — | f7 | P |
| Pruning | — | f7 | P |
| Agent | agents | f7, m5 | C |

### Prompting and conversation

| Canonical entry | Candidate aliases / forms | Lesson IDs | Status |
|---|---|---|---|
| Prompt | prompts; prompting | f1, f2, f3, f4, f5, f6, f7, f8, r1, r2, r3, r4, r5, r6, r7, r8, m1, m2, m3, m4, m5, m6, m7, m8 | C |
| Role-based prompting | role description; persona | f6, f7, r2, r3, r7 | C |
| Zero-shot prompting | zero-shot prompt | f2 | C |
| Few-shot prompting | few-shot prompt | f2, r2 | C |
| Context | working context | f1, f2, f3, f4, f5, f6, f7, f8, r1, r2, r3, r4, r5, r6, r7, r8, m1, m2, m3, m4, m5, m6, m7, m8 | C |
| Context window | context limit; context limits | r1 | C |
| Token | tokens | f3, f6, r4, r5 | C |
| Output format | response format | f6, r7, m2 | C |
| Structured output | structured outputs; structured fields | f3, m1 | C |
| Temperature | variety control | r2 | C |
| Prompt template | prompt templates | r2 | P |
| Prompt library | prompt libraries | r3 | P |
| Prompt version | prompt versions | r3 | C |
| Prompt refinement | prompt improvement | f4, r3 | P |
| Chat application | chatbot; chat interface | r1, r2 | C |
| Hallucination | hallucinations; unsupported claim | f1, f3, r7, r8 | C |

### Knowledge and retrieval

| Canonical entry | Candidate aliases / forms | Lesson IDs | Status |
|---|---|---|---|
| Retrieval-augmented generation | RAG; retrieval augmented generation | f7, r1, r6, r8 | C |
| Retrieval | — | f7, r1, r4, r6, r8, m2, m4 | P |
| Generation | — | f1, f3, f7, r1, r6, r8, m3, m7 | P |
| Grounding | grounded answer; grounded-answer; grounded | r6, r7 | C |
| Embedding | embeddings | f4, r4, m2, m4, m6 | C |
| Embedding model | embedding models | r4 | P |
| Vector search | vector retrieval | r4 | P |
| Semantic search | semantic retrieval | r4, r6 | C |
| Keyword search | keyword retrieval; keyword matching | r4, r6 | P |
| Hybrid search | hybrid retrieval | r6 | P |
| Chunking | chunks; chunk | r6 | C |
| Search index | index; indexes; indexed | r6 | P |
| Metadata | source metadata | r4, r6, r7, m6 | C |
| Vector database | vector databases | r6 | P |
| Reranking | rerank; re-ranking | r6 | C |
| Approximate search | approximate retrieval | r6 | P |
| Knowledge base | knowledge-base | r6 | P |
| Source freshness | freshness | f2, f7, r4, r6, r7 | P |
| Citation | citations; source references | f5, r7 | C |
| Source authority | authority rule | r7 | P |
| Prompt injection | — | r7 | C |

### Evaluation and quality

| Canonical entry | Candidate aliases / forms | Lesson IDs | Status |
|---|---|---|---|
| Evaluation rubric | quality rubric; review rubric; rubric | f4, f5, f8, r3 | C |
| Benchmark | benchmarks | f4, r5, r8 | C |
| Held-out evaluation | held-out cases; held-out test set; held-out | f4, f8, r3 | C |
| Evaluation set | test set; evaluation data | f4, f7, f8, r3, r8, m2, m4, m8 | C |
| Golden test set | golden set | r8 | C |
| Reference answer | reference answers; reference text | f4, r8 | P |
| Exact check | exact checks | f4 | P |
| Functional correctness | functional testing | f4 | C |
| Semantic comparison | meaning-oriented comparisons | f4 | P |
| ROUGE | word-overlap | f4 | P |
| AI judge | AI-as-a-judge; model-based judges; model judge | f4, r8 | C |
| Calibration | calibrate; calibrated | f4, r8, m6 | P |
| Retrieval precision | precision | r8 | C |
| Retrieval recall | recall | r8 | C |
| Faithfulness | faithful | r8 | C |
| Answer relevance | relevance | r6, r8 | P |
| Correctness | factual correctness | f3, f4, f8, r4, r7, r8, m5 | P |
| False positive | false positives; false alarms; unnecessary blocks | m2, m5, m6 | C |
| False negative | false negatives; missed detections; missed issues | m2, m5, m8 | C |
| Subgroup evaluation | — | f5 | C |
| Regression | regressions; regression testing | f7, f8, r8 | P |

### Governance and responsible use

| Canonical entry | Candidate aliases / forms | Lesson IDs | Status |
|---|---|---|---|
| Human review | human reviewer; reviewers | f1, f2, f4, f5, f8, r3, r8, m1, m2, m3, m8 | C |
| Escalation | human escalation; escalation route | f1, f2, f5, r1, r2, r3, r6, r7, r8, m5, m6, m7 | P |
| Acceptance criteria | acceptance review; success criteria | r5, r8, m1, m7 | C |
| Bias | biased; biases | f1, f4, f5, m8 | P |
| Interpretability | model interpretability | f5 | C |
| Consent | — | f1 | P |
| Provenance | provenance review | f1, f3, f5 | P |
| Retention | retention rules | f5, m2, m5, m8 | C |
| Anonymization | anonymized | r3 | P |
| Sensitive data | sensitive information | f5, m5 | P |
| Access control | access controls; access limits | f2, f7, r1, m7 | P |
| Authorization | authorized; permissions | f1, f2, f5, f7, r1, r4, r6, r7, r8, m2, m4, m5, m7, m8 | P |
| Risk register | risk registers | f5 | P |
| Misinformation | misinformation | f5 | P |
| Synthetic media | generated media | f1, f5 | P |
| Model card | model cards | f6 | P |

### Economics and operations

| Canonical entry | Candidate aliases / forms | Lesson IDs | Status |
|---|---|---|---|
| Total cost of ownership | TCO | r5 | C |
| Cost per acceptable task | cost per acceptable completed task | r5 | C |
| Baseline | existing baseline | f1, f8, m7 | P |
| Model routing | route routine cases | r5 | C |
| Hosted model service | hosted service | r5 | P |
| Open weights | open-weight; open-weight model | f2, r5 | C |
| Self-hosting | self-hosted; custom hosting | r5, m1, m7, m8 | P |
| Latency | response time | r5, r8, m2, m7, m8 | P |
| Tail latency | high-percentile latency | m8 | C |
| Percentile | percentiles; high-percentile | m8 | P |
| Batch processing | batch; overnight analysis | r5, m8 | P |
| Real-time processing | real-time; live interaction | r5, m5 | P |
| Queue | queues | m5, m8 | P |
| Quota | quotas | m8 | P |
| Rate limit | rate limits | m7 | P |
| Capacity planning | — | r5 | P |
| Orchestration | — | m7 | C |
| Trace | traces | f3, r7, m8 | C |
| Monitoring | performance monitoring | f2, r5, r8, m7 | P |
| Prototype | prototypes | r6, m7, m8 | P |
| Pilot charter | pilot brief; charter | f8, r8 | C |
| Stop condition | stop conditions | f8, r8, m8 | C |
| Rollback | roll back | m8 | P |

### Vision and multimodal

| Canonical entry | Candidate aliases / forms | Lesson IDs | Status |
|---|---|---|---|
| Modality | modalities | m1, m6, m8 | C |
| Multimodal AI | multimodal model; multimodal system | m1 | P |
| Computer vision | vision tasks | m2 | P |
| Image classification | — | m2 | S |
| Object detection | detection; detection models | m2, m3, m5, m6 | C |
| Segmentation | segmentation models | m2, m3 | C |
| Optical character recognition | OCR | m2 | C |
| Visual search | image search | m2 | P |
| Vision transformer | vision transformers; ViT | m3 | C |
| Image patch | patches; patch | m3 | P |
| Zero-shot classification | zero-shot classification | m3 | C |
| Vision-language model | vision-language models; VLM | m3 | P |
| Image generation | image-generation; visual generation | f3, m3 | P |
| Resolution | image resolution | m2 | P |
| Preprocessing | pre-processing | m2 | P |
| Image caption | caption; captions | m3 | P |

### Audio and video

| Canonical entry | Candidate aliases / forms | Lesson IDs | Status |
|---|---|---|---|
| Transcription | transcribe; transcribing | m1, m4, m5 | C |
| Speech recognition | speech-recognition | m4 | P |
| Translation | translated | m4 | P |
| Sample rate | sampling rate | m4 | C |
| Bit depth | measurement precision | m4 | P |
| Audio channel | channels | m4 | P |
| Media compression | compression | m2, m4 | P |
| Audio embedding | audio embeddings | m4 | C |
| Sound classification | audio classification | m4 | P |
| Voice intelligence | audio intelligence | m5 | P |
| Sentiment signal | sentiment; sentiment labels | m5 | C |
| Moderation | content moderation; audio moderation; video moderation | m2, m5, m6, m8 | P |
| Timestamp | timestamps | m4, m5, m6 | P |
| Frame sampling | sampled frames | m6 | C |
| Tracking | object tracking | m6 | C |
| Temporal understanding | temporal embeddings | m6 | C |
| Occlusion | occlusion | m6 | P |
| Video search | video retrieval | m6 | P |
| Text-to-video | text to video | m7 | C |
| Image-to-video | image to video | m7 | C |
| Avatar video | avatar-video | m7 | P |
| Captions | accessible captions; captioning | m4, m6, m7 | P |

### Tools and frameworks

| Canonical entry | Candidate aliases / forms | Lesson IDs | Status |
|---|---|---|---|
| ChatGPT | — | f1, f6, r1 | P |
| Claude | — | f1, f2, f6, r1 | P |
| Gemini | — | f1, f2, f6, r1, m1, m2, m4, m5, m6 | P |
| GPT | — | f2 | P |
| Llama | — | f2 | P |
| Qwen | — | f2 | P |
| Hugging Face | Huggingface | f2, f6, f7, m1, m2 | P |
| ElevenLabs | — | f1 | P |
| PyTorch | Pytorch | f5 | P |
| Unsloth | — | f8 | P |
| vLLM | — | f8 | P |
| Chroma | — | r6 | P |
| Pinecone | — | r6 | P |
| Weaviate | — | r6 | P |
| Ragas | RAGAS | r8 | P |
| Pydantic AI | Pydantic.ai | m1, m5, m7 | P |
| Hugging Face Transformers | Transformers library | m2 | P |
| CLIP | — | m2, m3, m4, m7 | P |
| DINOv2 | DINO; DINO models | m3 | P |
| RT-DETR | RTDETR | m3 | P |
| SAM | Segment Anything Model; SAM2 | m3 | P |
| Florence-2 | Florence 2 | m3 | P |
| Stable Diffusion | — | m3 | P |
| librosa | — | m4 | P |
| CLAP | — | m4 | P |
| Whisper | — | m4 | P |
| YOLO | — | m6 | P |
| CoTracker | — | m6 | P |
| CLIP4Clip | Clip4Clip | m6 | P |
| Veo | — | m7 | P |
| Runway | — | m7 | P |
| Synthesia | — | m7 | P |
| HeyGen | — | m7 | P |
| Gradio | — | m7, m8 | P |
| Arize Phoenix | Phoenix | m8 | P |
| Pydantic Evals | — | m8 | P |

### Course projects

| Canonical entry | Candidate aliases / forms | Lesson IDs | Status |
|---|---|---|---|
| OmniTrainer | — | m8 | P |
| NASA Mission Intelligence | — | r8 | P |

## Ambiguity and deduplication decisions

1. **Model versus application:** keep language model/foundation model separate from chat application. ChatGPT is an application name; GPT is a model-family name. Do not define them as identical.
2. **Open weights:** consolidate open-weight model/open weights. Do not treat open source as an automatic synonym; licenses and released components differ.
3. **Context / context window / token:** keep separate; context is information supplied, a window is its capacity, and a token is a representation unit. Match the longer phrase first.
4. **Prompt / prompt template / role-based prompting / few-shot prompting:** retain separate definitions for the base concept and specific techniques. A single occurrence receives one annotation, never nested buttons.
5. **Grounding / faithfulness / correctness / source freshness / relevance:** maintain distinct entries and cross-links. A faithful answer can quote an outdated policy.
6. **Precision / recall:** define in the retrieval context and scope short aliases to RAG evaluation. Do not present everyday precision as the metric everywhere.
7. **Detection / tracking / segmentation / classification:** distinct vision tasks. Classification in a text-routing example must not receive an image-only definition. Use canonical Image classification and context-aware matching.
8. **Image caption / captions:** an image description differs from synchronized speech/text accessibility captions. Limit short caption matches by lesson context; avoid an unqualified global alias.
9. **Compression:** keep model compression separate from media compression. Do not globally map compression to quantization.
10. **Sampling / sample rate / frame sampling:** audio sample rate is not video frame selection or probabilistic token selection. Do not use bare sampling as a global alias for any of them.
11. **Transformer / Hugging Face Transformers:** architecture versus named software library. Prefer the complete product name; never redefine every plural transformers as the library.
12. **CLIP / CLAP / SAM / GPT / AI:** preserve acronym case for auto-matching when a lowercase form could be an ordinary word or proper name. Match CLIP4Clip as a whole rather than inside CLIP. Treat RAG and Ragas as separate entries.
13. **Evaluation set / held-out evaluation / golden test set:** distinguish collection, evaluation discipline, and trusted reference examples; aliases cannot collapse all three.
14. **Veo / Runway / OmniTrainer / NASA Mission Intelligence:** video tool names are historical source examples with no current capability promise. OmniTrainer and NASA Mission Intelligence are course projects, not endorsed commercial platforms.
15. **Access control / authorization / consent / retention / provenance:** related governance concepts, not interchangeable labels. Full definitions must be clear without prescribing jurisdiction-specific legal requirements.
16. **Descriptive wording versus aliases:** word-overlap is broader than ROUGE, and temporal embeddings are a technique rather than a synonym for temporal understanding. Keep such phrases as editorial discovery evidence until their own entries or context-specific treatment are decided. Similarly, a family entry may explain SAM and SAM 2 without asserting that the versions are identical.

## Eight priority entry examples

These are illustrative content briefs based on current lesson definitions, not a complete 217-entry draft.

| Entry | Short definition for hover | More on full entry | Business example | Common confusion |
|---|---|---|---|---|
| RAG | Finding relevant source material and supplying it to a model as context for an answer. | Why source ownership, permissions, freshness, retrieval quality, and answer evaluation matter; link f7, r6–r8. | A support assistant retrieves the approved return policy before drafting a response. | RAG does not retrain the model or guarantee that its answer is correct. |
| Embedding | A compact numerical representation that helps compare content by similarity. | Text, image, and audio uses; relation to semantic and vector search; link r4, m2, m4. | Search for time-off policy using vacation-related wording. | Similarity is not proof of identity, truth, or permission to view a document. |
| Token | A unit of text representation that may be a word, word fragment, or punctuation. | Context capacity, length limits, and usage estimation; link f3, f6, r4. | A long policy bundle consumes more of the assistant's available input space. | One token is not always one word; ordinary prompting does not retrain the model. |
| Hallucination | A plausible generated statement that is unsupported or incorrect. | How to inspect evidence, review sensitive claims, and design an escalation route; link f1 and r7. | A fluent summary invents a refund promise not present in the case. | Confident tone is not evidence of factual reliability. |
| Fine-tuning | Changing model parameters using additional examples to influence skills or behavior. | When it addresses a recurring behavior gap; compare prompting, retrieval, and efficient adaptation; link f7–f8. | Teach a consistent approved response style after testing a simpler prompt. | It is not the default way to keep changing policies current. |
| Faithfulness | Whether an answer's claims are supported by the context supplied to the model. | Separate it from correctness, relevance, and freshness; link r8. | The answer accurately quotes an old travel policy, but that policy no longer applies. | Faithfulness alone cannot establish that today's business answer is correct. |
| False positive | A flag raised when the reviewed issue is not actually present. | Explain threshold tradeoffs and pair with false negative; link m5. | A harmless training conversation is incorrectly flagged as a policy violation. | It is not a missed issue; a missed issue is a false negative. |
| Total cost of ownership | The full cost of running a workflow, beyond the model's usage charge. | Include review, retries, retrieval, integration, hosting, and monitoring; link r5. | A cheaper model needs so much correction that its cost per acceptable task is higher. | Lowest token price does not mean lowest useful operating cost. |

## Content authoring and coverage gates

- One canonical stable ID per entry; acronyms, capitalization variants, singular/plural forms, and alternate spelling resolve to it.
- Every distinct existing concept label must map to one or more entries; every named tool used in a lesson must map to a tool entry or an explicitly excluded generic category.
- Distinguish authored explanations from exact matches. Full-name acronym expansions and new supporting vocabulary need source verification before publication.
- No vendor pricing, model ranking, or availability claims are needed in definitions. Tool entries describe the role in the source course and link to the existing tool guide where available.
- Inventory coverage is not the same as highlighting every occurrence. Avoid quizzes' selectable answers, navigation text, user-authored notes, and ordinary-word matches unless the final UX policy explicitly allows them.
- Before implementation, review high-frequency aliases (model, context, generation, index, inference, trace, attention, training, precision, recall) in actual paragraphs and use lesson-level scopes when the meaning is ambiguous.
