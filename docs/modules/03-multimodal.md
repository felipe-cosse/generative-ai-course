# Module 3 — Multimodal AI Applications

Audience: managers. Eight lessons, approximately 12 minutes each. All examples are fictional, all activities run locally, and no lesson displays implementation code. Tool names explain categories represented in the source; version, pricing, availability, and comparative performance are deliberately not claimed.

## Source inventory

- 1 - Introduction
- 2 - Multimodal AI Fundamentals
- 3 - Using Multimodal AI Technologies
- 4 - Transformers & Multimodal Processing
- 5 - Multimodal AI Tooling
- 6 - Introduction to Enterprise Visual Content Processing
- 7 - Vision Pre-processing Pipelines with HuggingFace
- 8 - Understanding Embeddings in Computer Vision
- 9 - Image Search using CLIP Embeddings
- 10 - Using Multimodal Model APIs for Vision
- 11 - Gemini Vision API Basics
- 12 - Vision Transformer Models & Architectures
- 13 - Using Vision Transformers
- 14 - Vision-Language Models
- 15 - Multimodal Vision Applications with CLIP
- 16 - Diffusion Models & Image Generation
- 17 - Introduction to Enterprise Audio Processing
- 18 - Audio Data Representation
- 19 - Audio Processing with librosa
- 20 - Sound Retrival and Classification
- 21 - Sound Retrieval and Classification with CLAP
- 22 - Speech Processing
- 23 - Implementing Speech Processing with Whisper & Gemini
- 24 - Audio Intelligence
- 25 - Audio Sentiment Analysis with Gemini
- 26 - Audio Classification and Moderation
- 27 - Building a Basic Voice Moderation System with Gemini
- 28 - Introduction to Enterprise Video Processing
- 29 - AI Models for Video Undestanding
- 30 - Implementing Object Recognition & Tracking
- 31 - Video Understanding & Search
- 32 - Video Understanding & Search with Gemini & Clip4Clip
- 33 - Video Classification & Moderation
- 34 - Video Classification & Moderation with Gemini
- 35 - Video Generation
- 36 - Video Generation with Veo 3
- 37 - Multimodal AI Deployment
- 38 - Implementation Tools and Serving Strategies
- 39 - Using Gradio and Pydantic AI
- 40 - Multimodal AI Performance Monitoring and Logging
- 41 - Logging and Performance Monitoring with Gradio and Arize Phoenix
- 42 - Evaluating Multimodal Applications
- 43 - Testing Multimodal Apps with Pydantic Evals
- 44 - Scaling Multimodal AI Architecture
- 45 - OmniTrainer Multimodal Customer Service Trainer

## Coverage and source notes

All 45 numbered folders were inventoried and representative Markdown from each was inspected. The eight lessons group adjacent concepts and their demos without changing their source sequence. API-key setup becomes budget/access ownership; programming becomes workflow decisions. Architecture details become vendor and operating-model choices. The source includes overbroad claims about current model modality support and a mistaken OpenAI/Gemini key sentence; do not reproduce these. Voice-emotion outputs are uncertain signals, not evidence of a person's true feelings. Detection confidence is not automatically a calibrated probability.

## Lesson plan

### 3.1 — See the whole picture

Source coverage: 1–5. Duration: 12 minutes.

**Objectives:** distinguish modalities; map business inputs to outputs; compare a unified service with specialized tools; explain attention and structured outputs in plain language.

**Explanation:** Multimodal AI works across text, images, sound, or video. A support request might include a written complaint, a product photo, and a voice note. A model translates each input into representations it can relate, then produces an answer or a structured result. Attention helps it connect relevant information; it does not give it human understanding. More modalities help only when they add information useful to the decision. A required output checklist improves consistency, but a neatly filled checklist can still be wrong.

**Tools to explain:** Gemini as a managed multimodal model family; Hugging Face as a model discovery and hosting ecosystem; Pydantic AI as a developer framework that coordinates model calls and structured results. Managers do not need to operate that framework to specify its business contract.

**Image:** four labeled input streams—message, photo, sound, video—meet at a model and separate into “draft answer,” “issue category,” and “human review.” Caption: “Choose inputs for the decision, then define what a useful output looks like.”

**Example:** A fictional appliance business receives a blurry photo and a voice complaint. The assistant proposes a product category and requests a clearer image instead of asserting the defect.

**Decision activity:** Choose the minimum inputs for a damaged-package triage pilot: text only; photo plus order description; all customer videos and call history. Feedback favors photo plus description because they address the specific decision without unnecessary collection.

**Quiz 1:** A manager wants to classify visible shipping damage. Which pilot scope is most useful? A. Collect every customer recording. B. Use the package photo and relevant order description, then route uncertain cases to people. C. Ask a text-only model to guess damage from the order number. **Answer: B.** The inputs support the task and uncertainty has an owner.

**Quiz 2:** An assistant returns every required field. What has been established? A. The format is usable, but the content still needs evaluation. B. Every claim is correct. C. Human review is unnecessary. **Answer: A.** Structure controls output shape, not factual accuracy.

**Sources (relative to supplied archive root):**
- `3 - Multimodal AI Applications/1 - Introduction/Course Overview.md`
- `3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Fundamentals.md`
- `3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Demo: Showcasing API-based and Open-Source Models.md`
- `3 - Multimodal AI Applications/4 - Transformers & Multimodal Processing/Transformers & Multimodal Processing.md`
- `3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md`

### 3.2 — Turn images into useful decisions

Source coverage: 6–11. Duration: 12 minutes.

**Objectives:** distinguish classification, detection, segmentation, OCR, and visual search; explain embeddings; specify input quality and review criteria.

**Explanation:** Classification labels an entire picture. Detection locates objects. Segmentation outlines their regions. OCR extracts visible writing. Visual search finds similar images. An embedding is a compact representation that places related content near each other in a similarity space; it is not a factual description. CLIP connects images and text for retrieval. A search result is a candidate match, not proof. Blurry photographs, glare, cropping, and inconsistent preparation can change results before the model even starts.

**Tools to explain:** CLIP for image–text matching; Hugging Face Transformers for access to vision pipelines; Gemini for prompted image interpretation. Explain output types rather than API operations.

**Image:** a fictional warehouse photo shown through five output lenses: label, bounding box, outlined region, extracted label text, and similar package thumbnails. Caption: “Different questions require different vision tasks.”

**Example:** A retailer searches a large product catalog using “red carry-on suitcase.” A relevant-looking image might still be the wrong size or unavailable; catalog records remain the source for product facts.

**Decision activity:** Match “read the invoice total” to OCR, “locate a dent” to detection, and “find similar products” to visual search. Explain each mapping after selection.

**Quiz 1:** The warehouse wants to locate damaged corners in package photographs. Which output best fits? A. A whole-image label only. B. A free-form sales description. C. Marked locations of suspected damage. **Answer: C.** Location supports inspection and follow-up; an overall label does not show where to look.

**Quiz 2:** Visual search returns a suitcase resembling the customer's photo. What should happen before confirming the product? A. Check product identifiers and catalog attributes. B. Treat resemblance as exact identity. C. Ignore all structured product data. **Answer: A.** Embedding similarity helps retrieval but cannot establish exact identity or availability.

**Sources:**
- `3 - Multimodal AI Applications/6 - Introduction to Enterprise Visual Content Processing/Computer Vision Tasks.md`
- `3 - Multimodal AI Applications/7 - Vision Pre-processing Pipelines with HuggingFace/Demo: Huggingface Datasets and Transformers Pipelines.md`
- `3 - Multimodal AI Applications/8 - Understanding Embeddings in Computer Vision/Understanding Embeddings in Computer Vision.md`
- `3 - Multimodal AI Applications/9 - Image Search using CLIP Embeddings/Demo: Building Your First Image Search with CLIP.md`
- `3 - Multimodal AI Applications/10 - Using Multimodal Model APIs for Vision/Using Multimodal Model APIs for Vision.md`
- `3 - Multimodal AI Applications/11 - Gemini Vision API Basics/Exercise: Image Moderation with Gemini.md`

### 3.3 — Understand and create visual content

Source coverage: 12–16. Duration: 12 minutes.

**Objectives:** describe how image patches and vision-language models work; distinguish understanding from generation; review generated assets against a brief.

**Explanation:** A vision transformer divides an image into patches and learns relationships between them. Vision-language systems connect visual features with words, enabling questions, captions, or labels. “Zero-shot” classification means selecting among descriptions without training specifically on those labels; it does not mean zero errors. A diffusion model learns to reverse a noise-adding process and uses that learning to generate new imagery from noise. It creates plausible content, not documentary evidence. Product appearance, embedded text, and fine details require checking.

**Tools to explain:** DINOv2 for image representations; RT-DETR for detection; SAM for segmentation; Florence-2 for vision-language tasks; CLIP for matching; Stable Diffusion as a diffusion-model example. These are source examples, not a ranked buying guide.

**Image:** three-panel educational illustration: a photo divided into patches; a photo linked with descriptive words; noise progressively becoming an original chair concept. Caption: “Understanding extracts signals; generation proposes new content.”

**Example:** A furniture team creates three concept images for an unreleased chair. The manager evaluates the visual direction but prohibits the team from presenting generated details as confirmed product specifications.

**Decision activity:** Review an imagined catalog caption: “This oak chair supports 150 kg.” Only the color and broad shape are visible. Select claims that need product-record verification: material and load rating. Feedback distinguishes visible evidence from inferred specifications.

**Quiz 1:** A generated product image looks convincing. What does that establish? A. The item can be manufactured at the shown cost. B. The visual concept communicates an idea. C. Every depicted component exists. **Answer: B.** A plausible picture can support concept discussion without validating engineering or commercial claims.

**Quiz 2:** A zero-shot model correctly labels ten sample images. What is the next management step? A. Launch without further review. B. Assume it understands every domain. C. Test a representative set, including ambiguous and poor-quality inputs. **Answer: C.** A small clean sample does not establish performance across operating conditions.

**Sources:**
- `3 - Multimodal AI Applications/12 - Vision Transformer Models & Architectures/How Vision Transformers Work.md`
- `3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md`
- `3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: Object Detection with RT-DETR + Segmentation with SAM2.1.md`
- `3 - Multimodal AI Applications/14 - Vision-Language Models/Vision-Language Models Overview.md`
- `3 - Multimodal AI Applications/15 - Multimodal Vision Applications with CLIP/Demo: Zero-Shot Image Classification with CLIP & Florence-2 Tasks.md`
- `3 - Multimodal AI Applications/16 - Diffusion Models & Image Generation/Diffusion Models.md`

### 3.4 — Make sound searchable

Source coverage: 17–23. Duration: 12 minutes.

**Objectives:** separate transcription from sound classification; explain capture quality, sampling, and compression; select review measures for a speech workflow.

**Explanation:** Audio can be turned into words, matched to other sounds, or classified by type. Sample rate describes how often sound is measured; bit depth affects measurement precision; channels separate audio streams. Greater file size does not automatically produce greater business value. Poor microphones, background noise, accents, and overlapping voices can harm results. A speech transcript may miss a name or reverse meaning by dropping “not.” Audio embeddings can retrieve sounds even when no words are spoken.

**Tools to explain:** librosa for audio preparation and analysis; CLAP for text–sound matching; Whisper for speech recognition; Gemini as a source example for transcription workflows. Avoid unsupported claims of perfect accuracy or universal language support.

**Image:** one recording branches into a transcript, a sound-type label, and a searchable archive. Include a clear “quality check” before the branches. Caption: “First preserve the signal; then choose the task.”

**Example:** A facilities team searches machine recordings for fan noise while a service team searches call transcripts for a product issue. The former needs sound matching; the latter needs speech transcription and text search.

**Decision activity:** Choose the evaluation set for a contact-center transcript pilot: studio narration; actual approved calls with accents, noise, overlapping speech, and important product terms; only short greetings. Feedback favors representative approved calls and targeted review of meaning-changing errors.

**Quiz 1:** A manager wants to find recordings of a motor rattling, with no speech. Which capability fits best? A. Sound matching or classification. B. Translation of spoken words. C. Summarizing meeting notes. **Answer: A.** The business signal is a non-speech sound, so transcription alone will miss it.

**Quiz 2:** A transcript changes “do not cancel” to “cancel.” What is the useful evaluation response? A. Ignore it because most words are correct. B. Track meaning-changing errors and require confirmation before account actions. C. Increase file storage without testing again. **Answer: B.** Business harm depends on the meaning of errors, not only a global word-accuracy score.

**Sources:**
- `3 - Multimodal AI Applications/17 - Introduction to Enterprise Audio Processing/Enterprise Applications of Audio Processing.md`
- `3 - Multimodal AI Applications/18 - Audio Data Representation/How Audio is Represented Digitally.md`
- `3 - Multimodal AI Applications/19 - Audio Processing with librosa/Demo: Audio Processing with librosa.md`
- `3 - Multimodal AI Applications/20 - Sound Retrival and Classification/Understanding Audio Features and Embeddings.md`
- `3 - Multimodal AI Applications/21 - Sound Retrieval and Classification with CLAP/Demo: Sound-to-Sound and Text-to-Sound Similarity and Classification.md`
- `3 - Multimodal AI Applications/22 - Speech Processing/Whisper.md`
- `3 - Multimodal AI Applications/23 - Implementing Speech Processing with Whisper & Gemini/Demo: Speech Transcription with Whisper.md`

### 3.5 — Govern voice intelligence

Source coverage: 24–27. Duration: 12 minutes.

**Objectives:** evaluate voice assistants and sentiment outputs; design a personal-information moderation workflow; separate model signals from employee judgments.

**Explanation:** Voice intelligence adds interpretation to recordings: topics, proposed next actions, possible policy issues, or sentiment signals. Tone is culturally and contextually variable. An emotion label is an uncertain model output, not a reliable window into someone's feelings. A moderation system can flag likely personal information, but both missed detections and unnecessary blocks matter. Managers define acceptable data use, review ownership, retention, and escalation with their organization's responsible teams. Time-sensitive conversations and after-call review have different latency needs.

**Tools to explain:** Gemini for combined audio analysis in the source; Pydantic AI for consistent issue fields and reasons; specialist speech services as a category. Explain the moderation report as “flag, evidence, rationale, reviewer action.”

**Image:** call excerpt flows to possible issue, redacted review excerpt, reviewer decision, and feedback. A separate dotted “sentiment signal” leads to review rather than an automatic personnel decision.

**Example:** A fictional support call includes an account number. A monitoring system flags the segment for review and redaction. It does not copy the full call into an unrestricted analytics dashboard.

**Decision activity:** Set a pilot policy by choosing who reviews flags, what recording excerpt is retained, and when recordings are deleted. Show why unrestricted retention and automatic employee scoring are poor defaults.

**Quiz 1:** A model labels an agent's voice “angry.” What should the manager do? A. Automatically lower the agent's performance rating. B. Treat it as uncertain context and review the actual interaction before any consequential judgment. C. Publish the label to the whole company. **Answer: B.** Tone inference is fallible and context-dependent; it does not establish intent or performance.

**Quiz 2:** A call moderation tool flags a possible customer identifier. Which workflow is best? A. Store the entire unredacted call in every dashboard. B. Assume the flag is certainly correct. C. Restrict access, review the relevant excerpt, and follow the organization's redaction and retention policy. **Answer: C.** The workflow must manage the data and the model's uncertainty together.

**Sources:**
- `3 - Multimodal AI Applications/24 - Audio Intelligence/Audio Intelligence.md`
- `3 - Multimodal AI Applications/25 - Audio Sentiment Analysis with Gemini/Demo: Audio Sentiment Analysis with Pydantic AI and Gemini.md`
- `3 - Multimodal AI Applications/26 - Audio Classification and Moderation/Voice Content Moderation.md`
- `3 - Multimodal AI Applications/27 - Building a Basic Voice Moderation System with Gemini/Exercise: Personal Information Detection.md`

### 3.6 — Find the important moments in video

Source coverage: 28–34. Duration: 12 minutes.

**Objectives:** explain frames, time, sampling, detection, tracking, and video search; choose suitable review thresholds; understand what sampled footage cannot establish.

**Explanation:** Video contains a sequence of images and often audio. Detection finds an object in a frame; tracking tries to follow the same object across frames. Sampling saves processing effort but may miss brief events. Search can start with titles, transcripts, and timestamps, then add visual or temporal embeddings where they improve retrieval. A model that describes a selected frame has not necessarily understood the entire sequence. Moderation combines signals and routes uncertain or consequential cases to reviewers.

**Tools to explain:** YOLO for object detection; CoTracker or tracking systems for motion; CLIP4Clip for video–text matching; Gemini for video description and policy-review workflows. Licensing and capabilities require checking for the actual tool selected.

**Image:** a video timeline with sampled frames and a brief event between two samples. A second line illustrates continuous object identity across frames. Caption: “Sampling reduces cost; it also changes what can be observed.”

**Example:** An airport pilot counts luggage crossing a conveyor line. Counting detections in every frame overcounts the same suitcase; tracking and a crossing rule match the actual business question.

**Decision activity:** Choose a review strategy for a one-second safety event in a long clip. Feedback explains why sparse fixed sampling may miss it and why a representative test set with brief incidents is necessary.

**Quiz 1:** A system counts the same suitcase in twenty frames. What is missing? A. A longer description of the suitcase. B. More copies of each frame. C. Tracking and a rule for counting a crossing once. **Answer: C.** Detection alone does not distinguish repeated sightings from unique items.

**Quiz 2:** No policy issue appears in one frame sampled every ten seconds. What can the manager conclude? A. No issue appeared in the sampled frames; brief events could have been missed. B. The entire recording is safe. C. Audio review is unnecessary. **Answer: A.** The evidence is limited by the sampling strategy and modalities examined.

**Sources:**
- `3 - Multimodal AI Applications/28 - Introduction to Enterprise Video Processing/How AI "Watches" Videos.md`
- `3 - Multimodal AI Applications/29 - AI Models for Video Undestanding/AI Models for Video Understanding.md`
- `3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Exercise: Luggage Counting on a Conveyor Belt.md`
- `3 - Multimodal AI Applications/31 - Video Understanding & Search/Video Search Fundamentals.md`
- `3 - Multimodal AI Applications/32 - Video Understanding & Search with Gemini & Clip4Clip/Demo: Video Search with CLIP4CLIP.md`
- `3 - Multimodal AI Applications/33 - Video Classification & Moderation/Video Moderation.md`
- `3 - Multimodal AI Applications/34 - Video Classification & Moderation with Gemini/Demo: Safety Equipment Video Moderation with Pydantic AI.md`

### 3.7 — Move from creative brief to pilot

Source coverage: 35–39. Duration: 12 minutes.

**Objectives:** compare text-to-video and image-to-video; write a reviewable creative brief; distinguish unified service, multiple specialist services, and custom hosting.

**Explanation:** Video generation creates new scenes from instructions or a starting image. Text-to-video supports exploration; image-to-video can anchor an approved visual but does not guarantee exact product fidelity. A useful brief names the audience, objective, scene, style, duration target, constraints, and approval criteria. Iteration adds time and cost. For delivery, a unified service reduces integration work; several specialists may improve a task while adding coordination; custom hosting adds control and operational responsibility. Prototype ease is not evidence of production readiness.

**Tools to explain:** Veo and Runway as generative-video examples; Synthesia and HeyGen as avatar-video examples from the source; Gradio for quick prototype interfaces; Pydantic AI for coordination and output structure. Do not reproduce historical product rankings or version claims.

**Image:** storyboard with brief, generated draft, brand/factual review, and approved asset; below it, three simple deployment routes with their distinct ownership costs.

**Example:** A fictional beverage team creates a five-second concept clip for internal review. An approved product reference helps visual direction; a person checks logos, packaging details, motion, and implied product claims before publication.

**Decision activity:** Given a small pilot team and an unproven use case, select a managed prototype with an explicit test plan, a custom multi-model platform, or immediate rollout. Feedback favors testing the business assumption before committing to infrastructure.

**Quiz 1:** A generated marketing clip contains a distorted product label. What should happen? A. Publish because the overall mood is good. B. Revise and review the asset against the approved product reference. C. Claim image-to-video guarantees exact branding. **Answer: B.** A reference improves direction but does not replace output review.

**Quiz 2:** A team combines three specialist AI services. What operating cost should be planned? A. Coordination, separate failure handling, and end-to-end monitoring. B. None, because each service works alone. C. Only the subscription price of the cheapest service. **Answer: A.** The whole workflow must align outputs, latency, access, and failures across services.

**Sources:**
- `3 - Multimodal AI Applications/35 - Video Generation/Video Generation.md`
- `3 - Multimodal AI Applications/35 - Video Generation/Video Generation Tools.md`
- `3 - Multimodal AI Applications/36 - Video Generation with Veo 3/Demo: Generate a Marketing Video with Veo 3.md`
- `3 - Multimodal AI Applications/37 - Multimodal AI Deployment/Multimodal Architecture Approaches.md`
- `3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md`
- `3 - Multimodal AI Applications/39 - Using Gradio and Pydantic AI/Demo: Building a Multimodal Gradio Chatbot with Pydantic AI.md`

### 3.8 — Launch a multimodal pilot responsibly

Source coverage: 40–45. Duration: 15 minutes.

**Objectives:** define end-to-end quality, cost, and latency measures; compare automated evaluation and human review; write launch and rollback criteria; adapt the OmniTrainer project into a management capstone.

**Explanation:** A multimodal application is only as useful as its full workflow. Track quality and delays for each modality and for the final outcome. Average response time can hide slow cases; high-percentile latency highlights the experience of slower requests. Record the minimum diagnostic data needed, with controlled access. Automated checks catch repeatable problems, while human review handles nuanced and consequential cases. A model used as a judge also makes mistakes. Retest when models, prompts, inputs, or policies change. Scale only after the pilot meets defined business and operating thresholds.

**Tools to explain:** Arize Phoenix for inspecting traces; Pydantic Evals for repeatable evaluation sets; Gradio for the source prototype interface; the OmniTrainer reference project as a customer-service training system with text, image, audio, and video moderation.

**Image:** pilot launch board with four gates—quality, business value, operating cost, accountable review—feeding a limited launch or revise decision. Include feedback returning real failures to the evaluation set.

**Example:** OmniTrainer helps staff practice with a simulated customer. Moderation flags likely personal information or unprofessional content. A manager tests whether the trainer improves coaching, examines false blocks and missed issues, and keeps the simulation distinct from real customer communication.

**Decision activity:** Complete a launch brief: business owner, users, permitted data, success measure, evaluation sample, escalation owner, budget limit, and stop condition. Use fictional values only. Download the completed brief for discussion. A readiness checklist should flag missing essentials, not claim certification or guaranteed safety.

**Quiz 1:** The average response time is fast, but some trainees wait a minute. What should the team inspect? A. Only the average again. B. High-percentile latency and traces by modality. C. Only the interface color. **Answer: B.** Tail latency and stage-level traces reveal slow experiences and bottlenecks hidden by averages.

**Quiz 2:** An automated judge approves every answer in the pilot. Is launch justified? A. Yes, automated judges are objective. B. Yes, if the demo looked polished. C. Only after representative checks, human review, and the agreed business and operational gates also pass. **Answer: C.** A judge is one evaluation signal, not a substitute for the complete launch decision.

**Sources:**
- `3 - Multimodal AI Applications/40 - Multimodal AI Performance Monitoring and Logging/Multimodal Performance Monitoring and Logging.md`
- `3 - Multimodal AI Applications/41 - Logging and Performance Monitoring with Gradio and Arize Phoenix/Demo: Logging and Monitoring a Multimodal Application.md`
- `3 - Multimodal AI Applications/42 - Evaluating Multimodal Applications/Testing Multimodal Applications.md`
- `3 - Multimodal AI Applications/42 - Evaluating Multimodal Applications/User Feedback Systems for Multimodal Applications.md`
- `3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/Exercise: Building a Real Estate Description System with Evaluations.md`
- `3 - Multimodal AI Applications/44 - Scaling Multimodal AI Architecture/Scaling Multimodal AI Architecture.md`
- `3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Project Overview.md`
- `3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Rubric.md`
