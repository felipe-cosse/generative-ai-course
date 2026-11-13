# Deep review of the tools guide

## Scope and findings

The original guide had 10 entries. A review of the three source modules identified **253 distinct named tools, libraries, apps, model families, platforms, infrastructure components, datasets/benchmarks, and example systems** for the expanded guide. This includes all 36 named tool identities and both educational projects already represented in the glossary.

The module audits reviewed 647 authored text, notebook-source, and direct-dependency files: 187 Fundamentals, 159 LLM/RAG, and 301 Multimodal. Notebook code was inspected only to identify components; the learner-facing guide remains code-free. The supplied archive remains read-only.

The full canonical inventory, aliases, representative archive evidence, and lesson associations are in [tools-inventory.json](tools-inventory.json). [tools-exclusions.json](tools-exclusions.json) records 35 module-level exclusion decisions. A name excluded in one module may still be included globally when another module provides clear evidence; for example, Gradio and Hugging Face Tokenizers.

Inclusions cover named teaching examples and directly imported or declared project dependencies. Background models, optional services, datasets, and case-study systems are labeled by their role; inclusion does not mean a tool is used hands-on in every related lesson or is recommended for purchase. Families consolidate ordinary version aliases while materially different tools remain separate.

Exclusions cover standard-library helpers, local exercise functions, frozen-environment-only/transitive dependencies, publisher/company names without a distinct tool, algorithms without a concrete implementation, and unrelated cybersecurity examples inside a proposal template. Raw videos, subtitles, binary assets, and every transitive environment package were not audited. Their presence is not used to claim additional catalog coverage.

## Corrections and identity decisions

- Keep ChatGPT, GPT model families, the OpenAI API, and its Python SDK distinct: an end-user app, a model, a service, and a client library have different operating roles.
- Keep Hugging Face's platform, Transformers, Datasets, Tokenizers, Evaluate, PEFT, TRL, Accelerate, and Hub client distinct. The original guide combined several of these under a single ecosystem entry.
- Distinguish the Triton GPU compiler from NVIDIA Triton Inference Server.
- Identify `pylance` in the source dependency context as **Lance**, not Microsoft's Pylance editor extension.
- Use the original YOLO project context and distinguish model-family ideas from a particular implementation or package.
- Do not repeat the archive's blanket claim that PostgreSQL/MySQL cannot support vector search. Capabilities depend on the deployment, service, extensions, and version.
- Mark TorchServe as archived/no longer maintained when presenting it as historical source tooling.
- Describe Weights & Biases as an optional reporting destination mentioned by a source example that disables reporting; do not imply the example sends data there.
- Include MBUX Virtual Assistant and Google Cloud's Automotive AI Agent as named **example systems**, with case-study context, not generic tools to install.
- Verify the identity of SeC against its original Segment Concept project.
- Retain **Frozen**, **MedicalClip**, and **IBM Watson Video Analysis** as unresolved source references in the exclusions audit. Do not silently map them to Frozen in Time, MedCLIP, or an invented current IBM service.

## Delivery steps

1. `codex/12-tools-audit`: source inventory, explicit scope, identity decisions, and archive/reference validation.
2. `codex/13-tools-catalog`: original management descriptions, fictional examples, questions, limitations, source context, primary links, normalized roles/types, and content-integrity tests.
3. `codex/14-tools-guide`: searchable directory with role/type/module filters, expandable decision guidance, related lessons/glossary links, accessible controls, browser regression checks, and maintenance instructions.

Each step is checked, committed, and merged into local `main`. No remote push is included in this work.

## Audit validation

The inventory has 253 unique canonical IDs. Every representative source path points to an existing file in the supplied archive, and every related lesson ID resolves in the 24-lesson course. Existing glossary tools and educational projects are accounted for through canonical names or reviewed aliases.

## Catalog and primary-source review

All 253 entries have an original role explanation, fictional management example, decision question, specific limitation, archive context, aliases where relevant, related lessons, and representative source paths. The catalog uses nine role categories and twelve entry types. All 38 existing glossary tool/project identities have related glossary links. The two educational projects have no invented external product URL; the other 251 entries link to primary documentation, owner repositories, original research, or dataset homes.

Primary references were checked on November 13, 2026. Where extraction failed, an official repository or author paper was used instead: examples include FAISS, Uvicorn, ImageNet, and IMDb. Kling's app shell and OpenAI Tokenizer expose little readable text; first-party announcements/help pages corroborated their identities and roles. These checks establish reference destinations and descriptions, not feature-by-feature trials of the products.

Fourteen entries carry status notes visible before expansion. These distinguish discontinued services from archived original research implementations or maintenance-mode libraries. Key evidence includes [Sora discontinuation](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation), [OpenAI API retirements and announced shutdowns](https://developers.openai.com/api/docs/deprecations), [TorchServe's archived repository](https://github.com/pytorch/serve), [HELM maintenance mode](https://github.com/stanford-crfm/helm), [TorchAudio maintenance](https://docs.pytorch.org/audio/stable/index.html), and [wheel's changed build role](https://wheel.readthedocs.io/en/stable/). Downloadable Whisper models are explicitly distinguished from the hosted whisper-1 API lifecycle. Original BERT, ALBERT, ELECTRA, GPT-2, TimeSformer, and nest-asyncio repository notes do not imply that every downstream implementation has retired.

No prices, model rankings, unsupported performance promises, or installation instructions were added. PostgreSQL/MySQL vector-search descriptions depend on the deployed implementation. Case studies do not inherit unsupported camera-access or vehicle-control claims from the source material.

Step 13 validation: 48 tests passed with the original archive available, including exact inventory coverage, all glossary tool/project links, safe source paths, and required lifecycle notes. Production build passed. An isolated headless Chrome check rendered all 253 entries, confirmed all 14 visible lifecycle notices, and checked the historical Sora description and the educational project's absent external URL. No browser console errors occurred. A separate content review corrected SeC's type to Framework.
