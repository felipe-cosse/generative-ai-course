// Original management explanations; lessonIds link to the course and its archive provenance.
export const glossary = [
  {
    "id": "artificial-intelligence",
    "term": "Artificial intelligence",
    "fullName": "",
    "aliases": [
      "AI",
      "artificial-intelligence"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f1",
      "f2",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "r6",
      "m1",
      "m5",
      "m7"
    ],
    "definition": "A broad field of methods that enable computers to perform tasks such as recognizing patterns, making predictions, generating content, or supporting decisions.",
    "explanation": "AI describes a family of capabilities rather than one kind of product. Some systems follow explicitly designed rules; others learn patterns from examples. Generative models are one part of that family, so an AI project may involve prediction or classification without producing new content. Assess the task and workflow rather than treating the AI label as evidence of useful performance.",
    "example": "A retailer uses one system to forecast demand and another to draft product descriptions; both are AI applications with different success measures.",
    "whyItMatters": "Clear task definitions help a manager choose suitable evidence, review responsibilities, and measures of success.",
    "confusion": "AI is not synonymous with generative AI, and an AI-branded tool does not automatically understand the business.",
    "related": [
      "machine-learning",
      "generative-ai",
      "human-review"
    ],
    "sources": []
  },
  {
    "id": "machine-learning",
    "term": "Machine learning",
    "fullName": "",
    "aliases": [
      "ML"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f1"
    ],
    "definition": "An approach to AI in which a system learns patterns from examples to make predictions or other outputs, rather than relying only on individually written rules.",
    "explanation": "A training process adjusts a model so that it performs better on examples. The resulting model is then tested on different cases to see whether the patterns remain useful. Data quality, coverage, and the chosen objective all shape what it learns. A strong result on familiar examples is insufficient evidence that the system will work for new customers or changing conditions.",
    "example": "A service team trains a model using past labeled tickets, then checks its routing accuracy on recent tickets it has never seen.",
    "whyItMatters": "Managers need to fund representative data and evaluation, not just the initial model development.",
    "confusion": "Learning during training is different from a deployed model automatically learning from every user interaction.",
    "related": [
      "training",
      "training-data",
      "held-out-evaluation",
      "deep-learning"
    ],
    "sources": []
  },
  {
    "id": "deep-learning",
    "term": "Deep learning",
    "fullName": "",
    "aliases": [
      "DL"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f1"
    ],
    "definition": "A branch of machine learning that uses neural networks with multiple processing layers to learn representations and patterns from data.",
    "explanation": "The layers transform information through successive learned steps. This can support tasks involving text, images, or audio without a person specifying every useful feature in advance. The quality of the learned patterns still depends on data, objectives, and evaluation. More layers or a larger model can increase resource demands without guaranteeing a better result on a particular business task.",
    "example": "A manufacturer evaluates a layered image model for spotting surface defects, including unusual lighting and products absent from its training examples.",
    "whyItMatters": "The manager must weigh operating requirements and task performance rather than equating model size with value.",
    "confusion": "Deep refers to processing layers, not a guarantee of human-like understanding or reliable judgment.",
    "related": [
      "machine-learning",
      "neural-network",
      "multilayer-network",
      "training-data"
    ],
    "sources": []
  },
  {
    "id": "generative-ai",
    "term": "Generative AI",
    "fullName": "",
    "aliases": [
      "GenAI",
      "generative artificial intelligence"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f1"
    ],
    "definition": "AI that produces candidate content, such as text, images, audio, or video, using patterns learned from examples and the information supplied for a request.",
    "explanation": "The output is a newly generated candidate rather than an automatically verified business result. Generation can assist drafting, summarization, exploration, and many other tasks. The same model may also classify material when asked to choose a category. Useful adoption combines a bounded assignment, relevant approved inputs, and a review process suited to the consequences of an error.",
    "example": "A marketing manager asks an assistant for five campaign headlines, then checks the claims and tone before approving one.",
    "whyItMatters": "The value lies in improving the complete work process, including correction and approval effort.",
    "confusion": "A fluent paragraph or realistic image is not proof that its statements or depicted events are true.",
    "related": [
      "foundation-model",
      "hallucination",
      "synthetic-media",
      "human-review"
    ],
    "sources": []
  },
  {
    "id": "foundation-model",
    "term": "Foundation model",
    "fullName": "",
    "aliases": [
      "foundation models",
      "foundation-model"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f2"
    ],
    "definition": "A model trained on broad collections of examples so that its learned capabilities can be adapted to many tasks instead of one narrowly defined use.",
    "explanation": "Teams can reuse a foundation model for activities such as drafting, classification, or search-related work. Reuse avoids starting every task with a new training effort, but capabilities vary across domains and user groups. Business applications add instructions, information, and controls around the model. Broad training does not give it automatic access to current company policies or private systems.",
    "example": "A company evaluates one base model for both internal summaries and ticket routing, with separate instructions and tests for each workflow.",
    "whyItMatters": "Reusable capability can reduce development effort, while each actual use still needs its own evaluation and owner.",
    "confusion": "The foundation model is one component of an application, not the complete product or its permission system.",
    "related": [
      "language-model",
      "pretraining",
      "chat-application",
      "fine-tuning"
    ],
    "sources": []
  },
  {
    "id": "language-model",
    "term": "Language model",
    "fullName": "",
    "aliases": [
      "language models"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f3",
      "f6",
      "r1",
      "m3"
    ],
    "definition": "A model that learns patterns in language and uses supplied context to estimate or generate text, supporting tasks such as drafting, summarizing, and classification.",
    "explanation": "Many generative language models produce a response by repeatedly choosing a next token from possible continuations. Their learned patterns support useful language behavior, but do not independently verify every claim. Instructions and source material supplied for a request influence the output. The surrounding application determines what context and tools the model receives.",
    "example": "A support assistant uses a language model to turn approved incident notes into a concise customer update.",
    "whyItMatters": "Knowing what the model contributes helps teams separate generation quality from missing information or application-control failures.",
    "confusion": "A language model is not the same thing as the chat screen, document repository, or business workflow around it.",
    "related": [
      "large-language-model",
      "next-token-prediction",
      "context",
      "chat-application"
    ],
    "sources": []
  },
  {
    "id": "large-language-model",
    "term": "Large language model",
    "fullName": "",
    "aliases": [
      "LLM",
      "LLMs"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "r1"
    ],
    "definition": "A language model trained at substantial scale, usually with many learned parameters and extensive text data, that can support a broad range of language tasks.",
    "explanation": "LLM is a category rather than a precise universal size threshold. Such models may generate text, classify requests, extract information, or support other tasks through instructions. Scale can broaden capability but does not settle accuracy, suitability, or cost for a specific workflow. Compare models using representative work and the complete operating arrangement.",
    "example": "An operations team compares two LLMs on the same weekly-report task, measuring factual errors and review time as well as response speed.",
    "whyItMatters": "Task evidence is more useful for procurement than a parameter count or the broad LLM label.",
    "confusion": "Large does not mean current, factually reliable, or authorized to make decisions on behalf of the organization.",
    "related": [
      "language-model",
      "model-parameter",
      "foundation-model",
      "total-cost-of-ownership"
    ],
    "sources": []
  },
  {
    "id": "neural-network",
    "term": "Neural network",
    "fullName": "",
    "aliases": [
      "neural networks"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f1",
      "f5"
    ],
    "definition": "A machine-learning model made of connected processing units whose adjustable values transform inputs into outputs and can be trained using examples.",
    "explanation": "Connections and other learned values control how information moves through the network. Training adjusts those values to reduce a chosen error measure. Networks can differ greatly in size, structure, and the kind of data they handle. Their name suggests a loose inspiration from biology, but it does not mean they reproduce the workings or experiences of a human brain.",
    "example": "A team uses a neural network to classify customer messages, then checks difficult cases and underrepresented languages before launch.",
    "whyItMatters": "The model needs accountable evaluation because learned connections are not a readable set of business rules.",
    "confusion": "A neural network is a computational system, not evidence of human awareness or an explanation of every decision.",
    "related": [
      "model-weights",
      "training",
      "model-architecture",
      "deep-learning"
    ],
    "sources": []
  },
  {
    "id": "perceptron",
    "term": "Perceptron",
    "fullName": "",
    "aliases": [
      "perceptrons"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f5"
    ],
    "definition": "A simple artificial neuron that combines weighted inputs and applies a decision rule, often introduced as a basic building block for understanding neural networks.",
    "explanation": "A perceptron can separate certain simple patterns by adjusting how much influence each input receives. A single basic perceptron has limited ability to represent more complex relationships. Networks combine processing units and additional layers to learn richer patterns. For managers, the useful lesson is that a model uses learned numerical relationships rather than applying human judgment automatically.",
    "example": "A training demonstration combines delivery delay and missing-item indicators into a simple escalation decision, then shows where the rule fails.",
    "whyItMatters": "Understanding this building block makes the need for representative examples and limits easier to discuss.",
    "confusion": "A perceptron is not a small complete version of a modern conversational assistant.",
    "related": [
      "neural-network",
      "model-weights",
      "multilayer-network"
    ],
    "sources": []
  },
  {
    "id": "multilayer-network",
    "term": "Multilayer network",
    "fullName": "",
    "aliases": [
      "multilayer perceptron",
      "MLP"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f5"
    ],
    "definition": "A neural network with intermediate processing layers between its input and output, allowing it to learn more complex relationships than a single simple unit.",
    "explanation": "Each layer transforms the representation passed to the next. Learning adjusts values throughout the permitted parts of the network, using feedback from a training objective. A multilayer perceptron is one common form, but many other network architectures exist. Added complexity increases what a model can represent while also increasing the need for suitable data and testing.",
    "example": "A team compares a simple defect classifier with a multilayer network when several visual signals interact in ways a basic rule misses.",
    "whyItMatters": "Model complexity should be justified by an observed improvement on the actual task.",
    "confusion": "Multiple layers do not guarantee better generalization, lower error, or interpretable business reasoning.",
    "related": [
      "perceptron",
      "deep-learning",
      "model-architecture",
      "backpropagation"
    ],
    "sources": []
  },
  {
    "id": "model-parameter",
    "term": "Model parameter",
    "fullName": "",
    "aliases": [
      "parameters",
      "parameter"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f2",
      "f3",
      "f5",
      "f7",
      "r6"
    ],
    "definition": "A numerical value learned or adjusted within a model that influences how it transforms input into output; neural-network parameters include weights and biases.",
    "explanation": "Training changes eligible parameters to improve performance on an objective. Once a model is deployed, ordinary inference usually uses those learned values without updating them. Parameter count is one indication of model scale, but says little by itself about data quality or business usefulness. Fine-tuning changes some or all parameters; prompting supplies information for the current request.",
    "example": "A project lead learns that changing a support instruction is a prompt edit, while adapting the model using thousands of examples changes model parameters.",
    "whyItMatters": "This distinction separates a low-effort workflow adjustment from a training and model-maintenance commitment.",
    "confusion": "A model parameter is not the same as a user-facing setting such as response length or temperature.",
    "related": [
      "model-weights",
      "training",
      "inference",
      "fine-tuning"
    ],
    "sources": []
  },
  {
    "id": "model-weights",
    "term": "Model weights",
    "fullName": "",
    "aliases": [
      "weights"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f2"
    ],
    "definition": "The learned numerical values that control the strength of connections or transformations inside a neural network and carry much of its trained behavior.",
    "explanation": "Weights are adjusted during training and reused when the model handles new requests. They encode distributed patterns rather than a tidy, searchable collection of source documents. Releasing weights can let another organization run a model, subject to its terms and technical requirements. The weights alone do not include every ingredient needed to reproduce training or operate a useful application.",
    "example": "A company considering an open-weight model budgets for hosting, evaluation, and data connections in addition to downloading the weights.",
    "whyItMatters": "Access to weights changes operating options, but does not remove licensing, infrastructure, or quality responsibilities.",
    "confusion": "Open weights do not automatically mean open training data, unrestricted use, or a fully open-source system.",
    "related": [
      "model-parameter",
      "open-weights",
      "training",
      "self-hosting"
    ],
    "sources": []
  },
  {
    "id": "training-data",
    "term": "Training data",
    "fullName": "",
    "aliases": [
      "training examples"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f1",
      "f2",
      "f7"
    ],
    "definition": "The examples used to adjust a model during training, shaping the patterns, capabilities, and limitations it learns.",
    "explanation": "Examples may contain text, images, audio, labels, desired responses, or feedback, depending on the task. Their relevance and coverage matter as much as their quantity. Errors, unwanted patterns, or missing groups can influence later behavior. Teams should distinguish training examples from material reserved for independent evaluation and from information supplied only when answering a request.",
    "example": "A service team removes outdated policy examples from a proposed adaptation dataset and keeps a separate collection for final testing.",
    "whyItMatters": "Data ownership, quality, permissions, and representativeness are central investment and governance decisions.",
    "confusion": "Uploading a document as request context does not necessarily make it training data; handling depends on the product and arrangement.",
    "related": [
      "training",
      "held-out-evaluation",
      "bias",
      "context"
    ],
    "sources": []
  },
  {
    "id": "tensor",
    "term": "Tensor",
    "fullName": "",
    "aliases": [
      "tensors"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f5"
    ],
    "definition": "A structured numerical array that can represent values such as text embeddings, image pixels, audio measurements, or model parameters during machine-learning calculations.",
    "explanation": "A tensor organizes numbers along one or more dimensions. An image can have height, width, and color dimensions, while a group of images adds another dimension. Learning frameworks use these structures to perform calculations efficiently. A manager rarely needs to manipulate tensors, but their size and representation influence memory use and the practical cost of running a model.",
    "example": "An engineering team explains that processing larger batches of high-resolution images requires more device memory because the numerical arrays are larger.",
    "whyItMatters": "Tensor size helps explain hardware and capacity limits behind an apparently simple media request.",
    "confusion": "A tensor is a way to organize numerical data, not a separate intelligence capability or a guarantee of meaningful information.",
    "related": [
      "embedding",
      "model-weights",
      "resolution",
      "batch-processing"
    ],
    "sources": []
  },
  {
    "id": "transformer",
    "term": "Transformer",
    "fullName": "",
    "aliases": [
      "transformers"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "f3",
      "m1",
      "m2",
      "m3"
    ],
    "definition": "A neural-network architecture that uses attention mechanisms to relate parts of an input, supporting many language and multimodal models.",
    "explanation": "Attention helps the network combine information from different positions when constructing a representation. Transformers can be trained for tasks involving text and other suitably represented data. The architecture is a design choice; training data and the surrounding system still determine much of the practical behavior. Knowing that a product uses a transformer does not establish its accuracy on company work.",
    "example": "A manager asks a vendor to demonstrate its transformer-based assistant on actual policy questions rather than treating the architecture name as a quality score.",
    "whyItMatters": "Architecture terminology helps compare technical proposals while keeping the decision anchored to evidence.",
    "confusion": "Transformer is a model architecture; Hugging Face Transformers is a software library with a related name.",
    "related": [
      "attention",
      "model-architecture",
      "language-model",
      "hugging-face-transformers"
    ],
    "sources": [
      {
        "label": "Attention Is All You Need",
        "url": "https://arxiv.org/abs/1706.03762"
      }
    ]
  },
  {
    "id": "attention",
    "inlineAliases": ["transformer attention", "attention mechanism", "attention mechanisms"],
    "term": "Attention",
    "fullName": "",
    "aliases": [
      "transformer attention"
    ],
    "category": "Core concepts",
    "lessonIds": [
      "r2",
      "m1"
    ],
    "definition": "A mechanism that lets a model weigh relationships among parts of its input when forming a representation or generating an output.",
    "explanation": "For a sentence, different words can receive different influence depending on what the model is processing. This helps connect relevant information across a sequence. Attention is a learned computation, not a person choosing to concentrate. Its internal weights should not be treated as a complete explanation of why an answer is correct or suitable.",
    "example": "An assistant connects a later question about “it” to an earlier mention of a damaged headset when the relevant conversation is supplied.",
    "whyItMatters": "The mechanism explains why relevant context matters, while reminding managers that internal relevance is not verified evidence.",
    "confusion": "Machine attention is not human awareness, and an attention score is not a truth score.",
    "related": [
      "transformer",
      "context",
      "interpretability"
    ],
    "sources": [
      {
        "label": "Attention Is All You Need",
        "url": "https://arxiv.org/abs/1706.03762"
      }
    ]
  },
  {
    "id": "model-architecture",
    "term": "Model architecture",
    "fullName": "",
    "aliases": [],
    "category": "Core concepts",
    "lessonIds": [
      "f3",
      "m7"
    ],
    "definition": "The structural design of a model, including how its processing components connect and how information moves through them.",
    "explanation": "Architecture defines the kinds of computations a model can perform. Training then adjusts learned values within that design. Different designs suit different tasks and operating constraints, while models sharing an architecture can behave differently because of their data and training. Application architecture is broader and also includes interfaces, retrieval, tools, permissions, and monitoring.",
    "example": "A team compares a text-oriented model design with a model built to accept images, then evaluates both against the actual document-review task.",
    "whyItMatters": "Managers can ask whether the design supports the required inputs and operating limits without choosing every engineering detail.",
    "confusion": "Model architecture is not the same as the complete application design or the learned weights inside a model.",
    "related": [
      "transformer",
      "neural-network",
      "model-weights",
      "multimodal-ai"
    ],
    "sources": []
  },
  {
    "id": "training",
    "inlineAliases": ["model training", "training a model", "training the model"],
    "term": "Training",
    "fullName": "",
    "aliases": [],
    "category": "Training and adaptation",
    "lessonIds": [
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      "f7",
      "f8",
      "r1",
      "m3",
      "m7",
      "m8"
    ],
    "definition": "The process of adjusting a model’s learned values using examples and feedback so that its outputs better satisfy a chosen objective.",
    "explanation": "Training repeatedly measures performance and updates eligible parameters. What improves is defined by the objective and examples, which may only partly reflect the real business need. Teams then test on separate cases to check whether useful behavior carries over. Training can be a large initial effort or a smaller adaptation of an existing model.",
    "example": "A company adapts a routing model with labeled tickets, then tests it on untouched recent cases before allowing it to affect service queues.",
    "whyItMatters": "Approving training means funding data preparation, evaluation, computing resources, and maintenance of the resulting model.",
    "confusion": "Using a model to answer a question is inference, not automatically a new training run.",
    "related": [
      "inference",
      "training-data",
      "loss-function",
      "fine-tuning"
    ],
    "sources": []
  },
  {
    "id": "pretraining",
    "term": "Pretraining",
    "fullName": "",
    "aliases": [
      "pre-training"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f2",
      "f3"
    ],
    "definition": "An initial broad training phase in which a model learns general patterns from large collections of data before more focused adaptation or post-training.",
    "explanation": "Pretraining provides reusable capabilities rather than a complete business workflow. A language model may learn by predicting missing or subsequent text, while other model types use other objectives. The data and objective shape what the model becomes good at and what it misses. Later instructions and adaptation can influence behavior but do not erase every limitation of the starting model.",
    "example": "A project lead chooses a pretrained model as a starting point, then separately evaluates whether it handles the company’s terminology.",
    "whyItMatters": "Pretraining explains the reuse benefit and why a broadly capable model may still have domain gaps.",
    "confusion": "Pretraining does not mean the model has current access to every public source or any private company system.",
    "related": [
      "foundation-model",
      "training-data",
      "post-training",
      "next-token-prediction"
    ],
    "sources": []
  },
  {
    "id": "post-training",
    "term": "Post-training",
    "fullName": "",
    "aliases": [
      "post training"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f8"
    ],
    "definition": "Training performed after a model’s initial broad learning to refine capabilities or behavior, such as following instructions, using a desired style, or responding to feedback.",
    "explanation": "Post-training can use demonstrations, preference comparisons, or reward-based methods. Each method supplies a different kind of learning signal and has different data needs. The goal should be tied to a demonstrated weakness rather than a vague desire to improve the model. Evaluate the target behavior and other important behaviors because gains in one area can accompany regressions elsewhere.",
    "example": "A support team proposes post-training after repeated tests show that a model ignores an approved escalation format despite clear prompts.",
    "whyItMatters": "The manager needs evidence that the learning method addresses the observed problem and that its improvement survives independent evaluation.",
    "confusion": "Post-training is an umbrella term, not a single algorithm or a guarantee that the model is aligned with every business requirement.",
    "related": [
      "supervised-fine-tuning",
      "preference-learning",
      "reinforcement-learning",
      "regression"
    ],
    "sources": []
  },
  {
    "id": "inference",
    "term": "Inference",
    "fullName": "",
    "aliases": [
      "inference stage"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f3",
      "f8",
      "m5"
    ],
    "definition": "The use of an already trained model to produce an output from new input, normally without changing its learned parameters during that request.",
    "explanation": "When a user asks for a draft or classification, the model performs inference. Inputs, instructions, context, and supported generation settings influence the result. The application may perform several model calls and tool steps before presenting an answer. Response time and operating cost therefore depend on the entire workflow as well as the model.",
    "example": "A service assistant performs inference each time it drafts a response using a customer question and an approved policy passage.",
    "whyItMatters": "Inference volume, latency, and review effort determine recurring operating requirements after development.",
    "confusion": "A model receiving new context does not by itself mean its weights are being retrained.",
    "related": [
      "training",
      "context",
      "latency",
      "total-cost-of-ownership"
    ],
    "sources": []
  },
  {
    "id": "next-token-prediction",
    "term": "Next-token prediction",
    "fullName": "",
    "aliases": [
      "next token"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f3"
    ],
    "definition": "A task in which a model estimates the next token from preceding context; many text generators build responses by repeating this prediction step.",
    "explanation": "A token may be a word, part of a word, or another text unit. During training, predicting continuations helps the model learn language patterns. During generation, the model repeatedly selects a continuation using its learned distribution and applicable settings. Fluent continuation can be useful, but this process does not independently check a claim against an authoritative source.",
    "example": "A manager observes that an assistant finishes a familiar-sounding policy statement convincingly even though the actual exception was not provided.",
    "whyItMatters": "This mechanism helps explain why fluency and factual support must be evaluated separately.",
    "confusion": "Predicting a likely continuation is not the same as retrieving a verified answer or performing exact arithmetic.",
    "related": [
      "token",
      "language-model",
      "temperature",
      "hallucination"
    ],
    "sources": []
  },
  {
    "id": "diffusion",
    "term": "Diffusion",
    "fullName": "",
    "aliases": [
      "diffusion model",
      "diffusion models"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f3",
      "m3"
    ],
    "definition": "A generative approach that learns to reverse a noise-adding process, allowing a model to create a candidate sample through successive refinement steps.",
    "explanation": "During training, the model learns relationships between noisy examples and cleaner versions. Generation uses learned steps to transform a noisy starting point toward an output, often guided by a prompt. Image systems may perform this work in a compressed representation rather than directly on every displayed pixel. Results still need review for suitability, fidelity to the brief, and unwanted artifacts.",
    "example": "A design team generates rough campaign visuals from a written brief and reviews them before any asset enters production.",
    "whyItMatters": "The approach explains why generation involves an iterative process and why output quality and time depend on the workflow.",
    "confusion": "Diffusion is a model technique, not proof that a generated image records a real scene or has cleared usage rights.",
    "related": [
      "image-generation",
      "synthetic-media",
      "flow-matching",
      "stable-diffusion"
    ],
    "sources": []
  },
  {
    "id": "flow-matching",
    "term": "Flow matching",
    "fullName": "",
    "aliases": [
      "flow-matching"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f3"
    ],
    "definition": "A generative-model training method that learns how samples should move along a path from a simple starting distribution, such as noise, toward a data distribution.",
    "explanation": "The method learns directions of change along a chosen path. At generation time, following those learned directions transforms an initial sample into a candidate output. It is related to diffusion-based modeling, but the training construction and paths need not be identical. Managers should evaluate the resulting product’s quality and operating behavior rather than assuming that one technique name guarantees superiority.",
    "example": "A creative-tools team compares generated assets and response time from two model families using the same brief and review criteria.",
    "whyItMatters": "Understanding the term helps interpret a technical proposal without turning a modeling choice into an unsupported performance promise.",
    "confusion": "Flow matching is a generative training method, not business-process automation or ordinary workflow routing.",
    "related": [
      "diffusion",
      "training",
      "image-generation"
    ],
    "sources": [
      {
        "label": "Flow Matching for Generative Modeling",
        "url": "https://arxiv.org/abs/2210.02747"
      }
    ]
  },
  {
    "id": "fine-tuning",
    "term": "Fine-tuning",
    "fullName": "",
    "aliases": [
      "fine tuning",
      "fine-tune",
      "fine-tuned"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f7",
      "f8"
    ],
    "definition": "Additional training that changes some or all of an existing model’s parameters using selected examples to influence its behavior or capabilities.",
    "explanation": "Fine-tuning starts from a trained model rather than learning everything from scratch. It can address a persistent style or skill gap when simpler instructions and suitable context are insufficient. Preparing examples, holding out evaluation cases, and checking regressions remain necessary. Frequently changing facts often belong in maintained source material instead of being repeatedly encoded through training.",
    "example": "A service organization tests fine-tuning to make a model follow a recurring response structure, while retrieving current policy details separately.",
    "whyItMatters": "The decision creates ongoing responsibilities for training data, evaluation, model versions, and maintenance.",
    "confusion": "Fine-tuning changes learned values; a few examples inside a prompt guide the current request without ordinarily changing weights.",
    "related": [
      "few-shot-prompting",
      "peft",
      "training",
      "retrieval-augmented-generation"
    ],
    "sources": []
  },
  {
    "id": "supervised-fine-tuning",
    "term": "Supervised fine-tuning",
    "fullName": "",
    "aliases": [
      "SFT"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f8"
    ],
    "definition": "Fine-tuning with examples of desired input-to-output behavior, so a model learns to produce responses resembling the approved demonstrations.",
    "explanation": "Examples show both the task and an acceptable response. Their coverage, consistency, and correctness shape what the model learns. A narrow dataset may improve one format while missing exceptions or reducing performance elsewhere. Keep evaluation cases separate and compare the adapted model with the starting model and simpler alternatives.",
    "example": "A support team supplies reviewed examples of concise case summaries, including how to mark a missing customer identifier.",
    "whyItMatters": "Good demonstrations require subject-matter ownership; collecting more unreviewed examples can teach the wrong pattern.",
    "confusion": "Supervised fine-tuning uses demonstrations, while preference methods compare better and worse responses rather than requiring one target answer.",
    "related": [
      "fine-tuning",
      "training-data",
      "preference-learning",
      "held-out-evaluation"
    ],
    "sources": []
  },
  {
    "id": "preference-learning",
    "term": "Preference learning",
    "fullName": "",
    "aliases": [
      "preference-based"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f3",
      "f8"
    ],
    "definition": "Learning from judgments about which outputs or behaviors are preferred, using comparisons or related feedback to influence future model responses.",
    "explanation": "Reviewers may compare two responses to the same task and explain which better meets agreed criteria. A training method uses those judgments to encourage preferred behavior. The labels reflect the chosen rubric and reviewers, so disagreement and missing perspectives matter. Preference data can improve behavior without establishing that the resulting response is factually correct.",
    "example": "Service leads compare draft replies using correctness, completeness, and respectful tone rather than choosing whichever sounds friendliest.",
    "whyItMatters": "The quality definition and reviewer process can shape the model as strongly as the training technique.",
    "confusion": "Preferred does not mean universally correct, safe, or suitable for every group or situation.",
    "related": [
      "evaluation-rubric",
      "rlhf",
      "dpo",
      "bias"
    ],
    "sources": []
  },
  {
    "id": "reinforcement-learning",
    "term": "Reinforcement learning",
    "fullName": "",
    "aliases": [
      "reinforcement approaches",
      "reinforcement"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f8"
    ],
    "definition": "A learning approach that adjusts behavior using rewards from actions or generated outputs, encouraging choices that improve the chosen reward objective.",
    "explanation": "The learning system tries alternatives and receives a signal about their value. In language-model post-training, that signal may score generated responses rather than physical actions. The reward design determines what is encouraged and may omit important business requirements. A higher reward score must therefore be checked against independent examples and real task outcomes.",
    "example": "A team rewards answers that satisfy a verification check, then separately inspects whether they remain clear and useful to customers.",
    "whyItMatters": "Managers should ask what receives a reward, who chose the measure, and which harmful shortcuts it might permit.",
    "confusion": "Reinforcement learning does not require human feedback in every form; RLHF is one particular use of human-derived feedback.",
    "related": [
      "reward-signal",
      "proxy-objective",
      "rlhf",
      "grpo"
    ],
    "sources": []
  },
  {
    "id": "reward-signal",
    "term": "Reward signal",
    "fullName": "",
    "aliases": [
      "reward signals"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f8"
    ],
    "definition": "The feedback value used to encourage particular behavior during reward-based learning; it represents a measured objective rather than the whole business goal.",
    "explanation": "A signal might come from a verified outcome, a rule-based check, or a learned evaluator. The system uses it to favor behaviors that score better. A measure can be easy to optimize while leaving out correctness, fairness, or usefulness. Inspect high-scoring failures as well as the average score to understand whether learning is moving in the intended direction.",
    "example": "A response-length reward makes replies shorter, but a manager finds that they now omit necessary return-policy conditions.",
    "whyItMatters": "Reward design is a business-quality decision as well as a technical choice.",
    "confusion": "A high reward is evidence about the scoring rule, not automatic evidence of customer value or factual correctness.",
    "related": [
      "reinforcement-learning",
      "proxy-objective",
      "evaluation-rubric",
      "correctness"
    ],
    "sources": []
  },
  {
    "id": "proxy-objective",
    "term": "Proxy objective",
    "fullName": "",
    "aliases": [],
    "category": "Training and adaptation",
    "lessonIds": [
      "f8"
    ],
    "definition": "A measurable stand-in for a broader goal, used when the complete real-world outcome is difficult to express or observe directly.",
    "explanation": "Model training and evaluation often depend on simplified measures. Those measures can guide improvement but rarely capture every aspect of useful work. Optimizing the proxy too narrowly can encourage shortcuts that hurt the intended outcome. Keep independent checks for important requirements the measure omits, and revisit it when the workflow changes.",
    "example": "A team uses shorter handling time as a productivity measure, then checks that rushed summaries have not increased follow-up work.",
    "whyItMatters": "Managers must connect the metric to the actual outcome and inspect cases where the two disagree.",
    "confusion": "A convenient metric is not the goal itself; improving it can make the broader process worse.",
    "related": [
      "reward-signal",
      "acceptance-criteria",
      "evaluation-rubric"
    ],
    "sources": []
  },
  {
    "id": "rlhf",
    "term": "RLHF",
    "fullName": "Reinforcement learning from human feedback",
    "aliases": [],
    "category": "Training and adaptation",
    "lessonIds": [
      "f8"
    ],
    "definition": "Reinforcement learning from human feedback: an approach that uses human judgments to shape a reward signal and trains a model to favor responses that score better.",
    "explanation": "A common workflow collects comparisons between model responses, trains a reward model from those judgments, and then adjusts the language model using that reward. The details can vary, but the human feedback and quality criteria remain central. Reviewers can disagree or prefer confident language over accurate content. Independent evaluation is needed to check what the resulting model actually improves.",
    "example": "A support project collects reviewer preferences about drafted replies, then tests whether the adapted model handles policy exceptions correctly.",
    "whyItMatters": "The feedback process and its blind spots deserve as much scrutiny as the model-training budget.",
    "confusion": "RLHF does not mean a human checks every response in production, and it does not guarantee agreement with every user’s values.",
    "related": [
      "preference-learning",
      "reinforcement-learning",
      "reward-signal",
      "human-review"
    ],
    "sources": [
      {
        "label": "Training language models to follow instructions with human feedback",
        "url": "https://arxiv.org/abs/2203.02155"
      }
    ]
  },
  {
    "id": "dpo",
    "term": "DPO",
    "fullName": "Direct preference optimization",
    "aliases": [],
    "category": "Training and adaptation",
    "lessonIds": [
      "f8"
    ],
    "definition": "Direct preference optimization: a method that adjusts a language model directly from preferred and less-preferred response pairs, avoiding a separately trained reward model in its standard formulation.",
    "explanation": "DPO uses comparisons to increase the model’s relative preference for better-rated responses. It offers a different training approach from the common reward-model-plus-reinforcement-learning workflow. The training signal still depends on the quality and coverage of the comparisons. A simpler training setup does not remove the need to test correctness, unwanted behavior, and performance beyond the training examples.",
    "example": "A team evaluates DPO using reviewed pairs of support replies that differ in policy compliance and clarity.",
    "whyItMatters": "Managers should focus on whether the preference dataset represents the work and whether the improvement holds on new cases.",
    "confusion": "DPO is a preference-training method, not another name for every form of RLHF or a guarantee of better factual knowledge.",
    "related": [
      "preference-learning",
      "rlhf",
      "post-training"
    ],
    "sources": [
      {
        "label": "Direct Preference Optimization",
        "url": "https://arxiv.org/abs/2305.18290"
      }
    ]
  },
  {
    "id": "grpo",
    "term": "GRPO",
    "fullName": "Group relative policy optimization",
    "aliases": [],
    "category": "Training and adaptation",
    "lessonIds": [
      "f8"
    ],
    "definition": "Group relative policy optimization: a reinforcement-learning method that compares rewards within groups of generated responses to guide model updates.",
    "explanation": "The method generates multiple responses for an input and uses their relative rewards as a learning signal. In its original formulation, this avoids maintaining a separate learned value model used by some other reinforcement-learning approaches. The reward still determines which behavior is favored. Better scores within a group do not establish that the task’s quality measures capture the real business goal.",
    "example": "In a training experiment, several answers to a counting task are scored by a checkable result, while a separate evaluation assesses unfamiliar cases.",
    "whyItMatters": "The management question is whether the scoring method is trustworthy and the resulting capability transfers to useful work.",
    "confusion": "GRPO compares rewarded responses during training; it is not a group of people voting on each live answer.",
    "related": [
      "reinforcement-learning",
      "reward-signal",
      "proxy-objective"
    ],
    "sources": [
      {
        "label": "DeepSeekMath: Group Relative Policy Optimization",
        "url": "https://arxiv.org/abs/2402.03300"
      }
    ]
  },
  {
    "id": "peft",
    "term": "PEFT",
    "fullName": "Parameter-efficient fine-tuning",
    "aliases": [
      "parameter efficient fine tuning"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f7"
    ],
    "definition": "Parameter-efficient fine-tuning: a family of adaptation methods that train a relatively small subset of existing or added parameters instead of updating the entire model.",
    "explanation": "Keeping most of the base model fixed can reduce the resources needed for adaptation. Methods differ in which parameters they train and how the resulting change is used. LoRA is one approach within this family. Efficient training still requires suitable examples, independent evaluation, and a way to manage the adapted model over time.",
    "example": "A company tests a compact adaptation for its document-summary style before committing resources to a full-model training run.",
    "whyItMatters": "PEFT can change the economics of adaptation, but quality and maintenance costs still need to be measured.",
    "confusion": "PEFT describes a family of methods and also names a software library; it is not a synonym for LoRA alone.",
    "related": [
      "fine-tuning",
      "lora",
      "adapter",
      "model-parameter"
    ],
    "sources": [
      {
        "label": "Hugging Face PEFT documentation",
        "url": "https://huggingface.co/docs/peft/index"
      }
    ]
  },
  {
    "id": "lora",
    "term": "LoRA",
    "fullName": "Low-rank adaptation",
    "aliases": [
      "low rank adaptation"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f7"
    ],
    "definition": "Low-rank adaptation: a fine-tuning method that learns compact updates alongside fixed base weights, reducing the number of parameters trained for adaptation.",
    "explanation": "Instead of directly updating a large weight matrix, LoRA represents its change using smaller trainable components. The starting weights remain fixed during this adaptation. Compatible implementations can keep the learned update separate or combine it with the base weights for use. The smaller training footprint does not guarantee that every target behavior improves or that all deployment options have identical costs.",
    "example": "A team trains a LoRA adaptation for a consistent case-summary format and compares it with the unchanged model on held-out cases.",
    "whyItMatters": "This option can make experimentation more practical while preserving the need for version control and regression checks.",
    "confusion": "LoRA adapts learned behavior; it is not a document-retrieval system or an automatic way to keep business facts current.",
    "related": [
      "peft",
      "fine-tuning",
      "adapter",
      "regression"
    ],
    "sources": [
      {
        "label": "LoRA: Low-Rank Adaptation of Large Language Models",
        "url": "https://arxiv.org/abs/2106.09685"
      }
    ]
  },
  {
    "id": "adapter",
    "term": "Adapter",
    "fullName": "",
    "aliases": [
      "adapter components",
      "adapters"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f7"
    ],
    "definition": "In model adaptation, a relatively small trainable component or saved set of adaptation parameters used with a base model to influence its behavior.",
    "explanation": "An adapter lets an adapted capability be managed separately from much of the original model. The exact structure depends on the adaptation method; a LoRA update and a separately inserted adapter layer are not identical designs. Compatibility with the base model and serving setup must be checked. Teams still need evaluation before combining or switching adaptations.",
    "example": "A company maintains one approved summary-style adaptation for internal reports and tests it against the specific base-model version it will use.",
    "whyItMatters": "Small adaptation files can simplify distribution, but create compatibility and version-management responsibilities.",
    "confusion": "A model adapter is not the same as a connector that gives an application access to a business database.",
    "related": [
      "peft",
      "lora",
      "foundation-model",
      "regression"
    ],
    "sources": []
  },
  {
    "id": "loss-function",
    "term": "Loss function",
    "fullName": "",
    "aliases": [],
    "category": "Training and adaptation",
    "lessonIds": [
      "f5"
    ],
    "definition": "A mathematical measure of how far a model’s output is from the training objective, providing a signal that guides parameter updates.",
    "explanation": "During training, the system calculates loss on examples and tries to reduce it. Different losses express different goals, such as predicting a target correctly or favoring one response over another. A lower training loss shows improvement against that calculation on the examples used. It does not by itself establish that new cases or business outcomes will improve.",
    "example": "A model’s training loss falls steadily, but a service team rejects the update because performance on unfamiliar tickets deteriorates.",
    "whyItMatters": "Training progress needs to be paired with independent task evaluation before a manager treats it as a usable gain.",
    "confusion": "Loss is an optimization measure, not automatically a direct estimate of financial loss or user dissatisfaction.",
    "related": [
      "training",
      "optimizer",
      "proxy-objective",
      "held-out-evaluation"
    ],
    "sources": []
  },
  {
    "id": "backpropagation",
    "term": "Backpropagation",
    "fullName": "",
    "aliases": [
      "back-propagation"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f5"
    ],
    "definition": "A calculation used in training neural networks to work backward from an error measure and determine how model parameters contribute to that error.",
    "explanation": "The calculation provides information about how changes to parameters would affect the loss. An optimizer then uses that information to update eligible parameters. Repeating this process across examples helps the network learn patterns. It is a mathematical training procedure, not a model reflecting on its mistakes in a human sense.",
    "example": "An engineering lead explains that a training run adjusts internal values using errors on labeled examples before a separate team evaluates the resulting model.",
    "whyItMatters": "Knowing the distinction between computing error signals and validating real-world results helps managers interpret training reports.",
    "confusion": "Backpropagation computes learning signals; it is not the complete training process or an explanation offered to an end user.",
    "related": [
      "loss-function",
      "optimizer",
      "model-parameter",
      "training"
    ],
    "sources": []
  },
  {
    "id": "optimizer",
    "term": "Optimizer",
    "fullName": "",
    "aliases": [],
    "category": "Training and adaptation",
    "lessonIds": [
      "f5"
    ],
    "definition": "The training procedure that uses information about error to decide how eligible model parameters should be updated.",
    "explanation": "An optimizer translates learning signals into numerical changes. Its settings influence how quickly and reliably training progresses. Large or poorly chosen updates can make training unstable, while other choices may require more time. Engineers evaluate the settings alongside data and objectives; a manager should ask how the resulting model performs rather than choosing a procedure by name.",
    "example": "A team changes its training setup after updates oscillate without improving independent ticket-routing accuracy.",
    "whyItMatters": "Optimization choices affect training time and resource use, but business acceptance still depends on evaluated behavior.",
    "confusion": "An optimizer improves a specified mathematical objective, not every aspect of the company’s process automatically.",
    "related": [
      "backpropagation",
      "loss-function",
      "model-parameter",
      "proxy-objective"
    ],
    "sources": []
  },
  {
    "id": "model-compression",
    "term": "Model compression",
    "fullName": "",
    "aliases": [],
    "category": "Training and adaptation",
    "lessonIds": [
      "f7"
    ],
    "definition": "A set of techniques for reducing a model’s size or operating demands, potentially trading some capability for lower memory, computation, or latency.",
    "explanation": "Common approaches include distillation, quantization, and pruning. Each changes a different aspect of the model or its numerical representation. Savings depend on the deployment hardware and software, so a smaller file does not guarantee a faster application. Compare quality and cost on representative work before accepting the compressed version.",
    "example": "A team tests a smaller support model on routine and difficult cases, measuring correction effort as well as memory use.",
    "whyItMatters": "Compression can change operating economics, but hidden quality losses may consume the expected savings.",
    "confusion": "Model compression is different from shrinking an audio or image file, and compressed models need their own evaluation.",
    "related": [
      "distillation",
      "quantization",
      "pruning",
      "total-cost-of-ownership"
    ],
    "sources": []
  },
  {
    "id": "distillation",
    "term": "Distillation",
    "fullName": "",
    "aliases": [],
    "category": "Training and adaptation",
    "lessonIds": [
      "f7"
    ],
    "definition": "A training approach in which a student model learns from a teacher model’s outputs or other signals, often to obtain a smaller or more economical model.",
    "explanation": "The teacher provides behavior for the student to imitate on selected examples. The student may preserve useful capability for a narrower task while reducing operating requirements. It can also inherit errors or miss skills that were not covered in the training material. Evaluate the student independently rather than assuming that the teacher’s reputation transfers unchanged.",
    "example": "A company trains a smaller model using reviewed summaries from a larger model, then tests whether it preserves important exceptions.",
    "whyItMatters": "Distillation can lower serving costs when the resulting task quality remains acceptable.",
    "confusion": "A distilled model is not a lossless copy of its teacher and does not automatically retain every capability.",
    "related": [
      "model-compression",
      "training-data",
      "foundation-model",
      "evaluation-set"
    ],
    "sources": []
  },
  {
    "id": "quantization",
    "term": "Quantization",
    "fullName": "",
    "aliases": [],
    "category": "Training and adaptation",
    "lessonIds": [
      "f7"
    ],
    "definition": "Representing model values with lower numerical precision to reduce memory use and sometimes computation, with possible effects on output quality.",
    "explanation": "A model normally stores many numerical values, so using fewer bits per value can substantially change its footprint. The achievable speed and memory benefit depend on the hardware and supported software. Different parts of a model may tolerate reduced precision differently. Test the actual deployment configuration on representative and difficult cases before accepting it.",
    "example": "A team compares a lower-precision model with the original on document extraction, checking both device memory and missed fields.",
    "whyItMatters": "Quantization may make deployment practical on available hardware, but its quality tradeoff must be measured.",
    "confusion": "Lower precision is about numerical representation, not a deliberate reduction in the number of words a model can generate.",
    "related": [
      "model-compression",
      "model-weights",
      "evaluation-set",
      "self-hosting"
    ],
    "sources": []
  },
  {
    "id": "pruning",
    "term": "Pruning",
    "fullName": "",
    "aliases": [],
    "category": "Training and adaptation",
    "lessonIds": [
      "f7"
    ],
    "definition": "Reducing selected model connections, values, or components to make the model more compact or economical while trying to preserve useful behavior.",
    "explanation": "Pruning removes or disables parts judged less important under a chosen method. The remaining model may need further adjustment to recover performance. Operational gains depend on whether the serving system can exploit the resulting structure. Evaluate difficult and uncommon cases because removing apparently unimportant parts can still affect useful capabilities.",
    "example": "A team tests a pruned classifier on rare complaint categories before claiming that its smaller footprint is an acceptable improvement.",
    "whyItMatters": "The manager should require evidence of real operating savings and retained quality, including less frequent tasks.",
    "confusion": "Pruning model structure is not the same as deleting old source documents or removing unnecessary words from a prompt.",
    "related": [
      "model-compression",
      "fine-tuning",
      "regression",
      "evaluation-set"
    ],
    "sources": []
  },
  {
    "id": "agent",
    "term": "Agent",
    "fullName": "",
    "aliases": [
      "agents"
    ],
    "category": "Training and adaptation",
    "lessonIds": [
      "f7",
      "m5"
    ],
    "definition": "A system that uses a model to help choose and coordinate steps or tool actions toward a task within defined permissions and controls.",
    "explanation": "An agent may gather information, decide on another step, and use connected tools before producing a result. The surrounding system determines which actions are available and how approval or review works. Reading a record and changing it have different consequences. Start with the smallest useful autonomy and evaluate complete action sequences, including failures and handoffs.",
    "example": "A service agent looks up an order and drafts a proposed response, while a person must approve any refund action.",
    "whyItMatters": "Granting tool access introduces operating responsibilities beyond judging the wording of a response.",
    "confusion": "An agent label does not imply unrestricted autonomy, reliable planning, or permission to act on behalf of a user.",
    "related": [
      "authorization",
      "orchestration",
      "human-review",
      "escalation"
    ],
    "sources": []
  },
  {
    "id": "prompt",
    "term": "Prompt",
    "fullName": "",
    "aliases": [
      "prompts",
      "prompting"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "r1",
      "r2",
      "r3",
      "r4",
      "r5",
      "r6",
      "r7",
      "r8",
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ],
    "definition": "The instructions and contextual information supplied to a model for a request, describing the task, constraints, and desired form of the response.",
    "explanation": "A useful prompt communicates the work clearly: who the response is for, which information is relevant, and what should happen when facts are missing. Examples can clarify a format or difficult distinction. The prompt influences the current interaction but does not ordinarily update model weights. Evaluate its effect on realistic cases instead of judging only how sophisticated the wording sounds.",
    "example": "A manager asks for meeting decisions, named owners, and deadlines, with missing owners explicitly marked as unassigned.",
    "whyItMatters": "Clear prompts make expectations reviewable and can resolve some problems before more costly adaptation is considered.",
    "confusion": "A polished prompt is not a guarantee of correctness or a substitute for approved evidence.",
    "related": [
      "context",
      "few-shot-prompting",
      "output-format",
      "prompt-refinement"
    ],
    "sources": []
  },
  {
    "id": "role-based-prompting",
    "term": "Role-based prompting",
    "fullName": "",
    "aliases": [
      "role description"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "f6",
      "f7",
      "r2",
      "r3",
      "r7"
    ],
    "definition": "Using a stated role or perspective in a prompt to guide a model’s tone, priorities, and framing for a particular task.",
    "explanation": "A role can help establish the intended audience and viewpoint, such as an operations reviewer assessing a proposal. It works best alongside concrete criteria and relevant information. Asking the model to act as an expert does not supply missing qualifications, evidence, or authority. Evaluate what the response actually does rather than trusting the persona it presents.",
    "example": "A manager asks for a proposal review from an operations perspective, requiring comments on staffing, handoffs, and measurable service impact.",
    "whyItMatters": "Roles can improve relevance when they clarify the job, but must not create false confidence in expertise.",
    "confusion": "A prompted persona does not make the model a licensed professional or authorize it to make business decisions.",
    "related": [
      "prompt",
      "evaluation-rubric",
      "human-review"
    ],
    "sources": []
  },
  {
    "id": "zero-shot-prompting",
    "term": "Zero-shot prompting",
    "fullName": "",
    "aliases": [
      "zero-shot prompt"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "f2"
    ],
    "definition": "Giving a model task instructions without including demonstrations of the desired input-to-output behavior in that prompt.",
    "explanation": "The model uses its existing learned capabilities and the provided instructions to attempt the task. The prompt can still contain detailed context, constraints, and allowed categories. Starting without examples can reveal whether a clear brief is sufficient. If performance is weak, inspect the failure before deciding whether examples, retrieval, or another change is needed.",
    "example": "A team asks an assistant to categorize a ticket using defined billing, delivery, and account categories without supplying sample tickets.",
    "whyItMatters": "A zero-shot baseline helps determine whether added prompt complexity provides measurable value.",
    "confusion": "Zero-shot does not mean untrained; the model has already learned from its training data.",
    "related": [
      "prompt",
      "few-shot-prompting",
      "baseline",
      "pretraining"
    ],
    "sources": []
  },
  {
    "id": "few-shot-prompting",
    "term": "Few-shot prompting",
    "fullName": "",
    "aliases": [
      "few-shot prompt"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "f2",
      "r2"
    ],
    "definition": "Including a small number of demonstrations in a prompt to show the input-to-output behavior, judgment, or format expected for the current task.",
    "explanation": "Examples can clarify distinctions that instructions alone leave ambiguous. They should represent the actual task and include useful edge cases rather than only easy successes. The model receives these demonstrations as context for the request. Check performance on different examples so an apparent improvement is not just a fit to the demonstrations.",
    "example": "A routing prompt includes one delivery complaint, one billing complaint, and one ambiguous message that should go to a person.",
    "whyItMatters": "Well-chosen examples can improve clarity with less effort than training, while poor examples can teach an unwanted shortcut.",
    "confusion": "Examples inside a prompt do not ordinarily fine-tune the model or permanently update its parameters.",
    "related": [
      "prompt",
      "zero-shot-prompting",
      "context",
      "fine-tuning"
    ],
    "sources": []
  },
  {
    "id": "context",
    "inlineAliases": ["working context", "model context", "supplied context"],
    "term": "Context",
    "fullName": "",
    "aliases": [
      "working context"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "r1",
      "r2",
      "r3",
      "r4",
      "r5",
      "r6",
      "r7",
      "r8",
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8"
    ],
    "definition": "The information available to a model for the current response, including supplied instructions, conversation material, examples, and retrieved content.",
    "explanation": "The application chooses what to include in a request. Visible chat history or stored documents are not necessarily all supplied to the model. Relevant context can reduce information gaps, while conflicting or irrelevant material can make the task harder. Teams need a deliberate process for selecting, updating, and protecting the information used.",
    "example": "A support assistant receives the customer’s question, the relevant order details, and the current return policy before drafting a reply.",
    "whyItMatters": "Context quality and access rules directly affect usefulness, privacy, and the cost of a request.",
    "confusion": "Context is the supplied information; the context window is the model’s capacity limit, not a guarantee that everything visible was included.",
    "related": [
      "context-window",
      "prompt",
      "retrieval-augmented-generation",
      "authorization"
    ],
    "sources": []
  },
  {
    "id": "context-window",
    "term": "Context window",
    "fullName": "",
    "aliases": [
      "context limit",
      "context limits"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "r1"
    ],
    "definition": "The limit on how much information a model can handle within a request or interaction step, commonly measured in tokens according to the model’s rules.",
    "explanation": "Instructions, selected history, and supplied documents use available context capacity. Input and generated-output limits interact in model-specific ways. Applications may truncate, summarize, or retrieve material when the full information does not fit. Essential details can be lost even though users still see them in the chat interface, so long conversations need explicit evaluation.",
    "example": "A long-running service conversation loses an early product detail after history is summarized, prompting a manager to add a missing-context test.",
    "whyItMatters": "Capacity limits shape document handling, conversation continuity, operating cost, and the risk of omitted facts.",
    "confusion": "A large window is not proof that every included detail will be used correctly or that visible history equals model input.",
    "related": [
      "context",
      "token",
      "chunking",
      "chat-application"
    ],
    "sources": []
  },
  {
    "id": "token",
    "term": "Token",
    "fullName": "",
    "aliases": [
      "tokens"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "f3",
      "f6",
      "r4",
      "r5"
    ],
    "definition": "A unit used to represent text for a language model, which may be a whole word, part of a word, punctuation, or another text fragment.",
    "explanation": "The model’s tokenizer determines how text is divided into units. Different languages and writing styles can produce different token counts for similar-looking lengths. Tokens matter when estimating context use, output limits, and usage-based charges where applicable. Plain word counts are useful approximations only when their limits are understood.",
    "example": "A team finds that a multilingual policy bundle uses more context capacity than an English word-count estimate suggested.",
    "whyItMatters": "Token awareness helps managers interpret length constraints and usage estimates without assuming a fixed word-to-token ratio.",
    "confusion": "One token is not always one word, and token count alone does not measure the quality or value of a response.",
    "related": [
      "context-window",
      "next-token-prediction",
      "total-cost-of-ownership"
    ],
    "sources": []
  },
  {
    "id": "output-format",
    "term": "Output format",
    "fullName": "",
    "aliases": [
      "response format"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "f6",
      "r7",
      "m2"
    ],
    "definition": "The requested shape of a model’s response, such as a short paragraph, a list of actions, a comparison table, or clearly labeled fields.",
    "explanation": "A format tells the model how to organize the deliverable for its audience or downstream workflow. Useful instructions specify required items and how to mark missing information. A format can improve reviewability even when a person reads the result manually. Teams still need to check that the content is correct and that required sections are actually present.",
    "example": "A manager requests a decision table with an option, supporting evidence, risk, and owner for each proposed action.",
    "whyItMatters": "Consistent output makes review and handoffs easier and can reduce manual reformatting.",
    "confusion": "A neat table or valid-looking structure does not establish that its values are supported by evidence.",
    "related": [
      "prompt",
      "structured-output",
      "acceptance-criteria"
    ],
    "sources": []
  },
  {
    "id": "structured-output",
    "term": "Structured output",
    "fullName": "",
    "aliases": [
      "structured outputs",
      "structured fields"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "f3",
      "m1"
    ],
    "definition": "A response organized into predefined fields or another explicit structure so that people or software can consistently identify the information it contains.",
    "explanation": "Structure is useful when extracting document fields or passing a result into another workflow. Some systems can constrain outputs to a defined schema, while others only follow formatting instructions. Validation should check both the structure and the meaning of the values. Missing or uncertain information needs an explicit representation instead of a plausible invention.",
    "example": "An invoice-review assistant returns supplier name, invoice date, total, and fields requiring human review in a consistent form.",
    "whyItMatters": "Structure supports reliable handoffs, but the receiving process still needs checks before accepting the content.",
    "confusion": "A structurally valid response can still contain wrong, unsupported, or unauthorized information.",
    "related": [
      "output-format",
      "correctness",
      "human-review",
      "optical-character-recognition"
    ],
    "sources": []
  },
  {
    "id": "temperature",
    "term": "Temperature",
    "fullName": "",
    "aliases": [
      "variety control"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "r2"
    ],
    "definition": "A supported generation setting that changes how broadly a model samples among possible next outputs, influencing variation rather than verifying factual accuracy.",
    "explanation": "When the setting is available, higher values generally allow more varied choices and lower values concentrate choices more strongly. Suitable settings depend on the model and task. A brainstorming exercise and a repeated classification task may need different behavior. Neither a low value nor repeated agreement guarantees truth or perfectly identical responses.",
    "example": "A campaign team tests varied headline ideas while a routing team separately measures consistency on repeated ticket classifications.",
    "whyItMatters": "The setting should be evaluated against the desired balance of variety, consistency, and review effort.",
    "confusion": "Temperature is not a truth, safety, creativity-quality, or expertise control.",
    "related": [
      "next-token-prediction",
      "inference",
      "prompt",
      "hallucination"
    ],
    "sources": []
  },
  {
    "id": "prompt-template",
    "term": "Prompt template",
    "fullName": "",
    "aliases": [
      "prompt templates"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "r2"
    ],
    "definition": "A reusable prompt structure with defined places for task-specific information, helping a team apply consistent instructions across repeated requests.",
    "explanation": "A template separates the stable brief from changing inputs such as a customer question or meeting record. It can make required context and response expectations visible to users. The application must still distinguish instructions from untrusted inserted content. Changes to a shared template should be tested because they affect many requests at once.",
    "example": "A service team reuses a response brief with fields for the customer question, approved policy passage, audience, and escalation condition.",
    "whyItMatters": "Templates can reduce inconsistent prompting and make shared changes easier to review.",
    "confusion": "A template standardizes instructions; it does not validate inserted facts or prevent every prompt-injection attempt.",
    "related": [
      "prompt",
      "prompt-library",
      "prompt-version",
      "prompt-injection"
    ],
    "sources": []
  },
  {
    "id": "prompt-library",
    "term": "Prompt library",
    "fullName": "",
    "aliases": [
      "prompt libraries"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "r3"
    ],
    "definition": "A maintained collection of reusable prompts or templates for recurring tasks, with enough context for users to choose and apply them appropriately.",
    "explanation": "A useful library records purpose, required inputs, intended users, and known limits. Prompts should have owners and a review process rather than accumulating as unexplained snippets. Examples and evaluation results help users understand where an entry works. Retire or revise prompts when the task, source information, or model changes.",
    "example": "An operations group maintains separate reviewed templates for meeting summaries, incident updates, and proposal comparisons.",
    "whyItMatters": "A library can spread proven practices while making ownership and maintenance visible.",
    "confusion": "A shared collection is not evidence that every prompt has been tested or approved for every kind of data.",
    "related": [
      "prompt-template",
      "prompt-version",
      "evaluation-rubric",
      "regression"
    ],
    "sources": []
  },
  {
    "id": "prompt-version",
    "term": "Prompt version",
    "fullName": "",
    "aliases": [
      "prompt versions"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "r3"
    ],
    "definition": "A saved, identifiable revision of a prompt or template that lets a team compare behavior, trace changes, and return to an earlier instruction set.",
    "explanation": "Versioning connects an output or evaluation result with the instructions that produced it. Keep the model and test cases controlled when comparing prompt revisions. A change may improve one error category while harming another. Recording the revision and evidence helps teams decide whether to release it or restore a prior version.",
    "example": "A support team labels a revised routing prompt and compares it with the previous one using the same ticket set.",
    "whyItMatters": "Versions make prompt changes accountable and failures easier to diagnose.",
    "confusion": "A new version number documents a change; it does not prove that the change is an improvement.",
    "related": [
      "prompt-refinement",
      "prompt-template",
      "held-out-evaluation",
      "rollback"
    ],
    "sources": []
  },
  {
    "id": "prompt-refinement",
    "term": "Prompt refinement",
    "fullName": "",
    "aliases": [
      "prompt improvement"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "f4",
      "r3"
    ],
    "definition": "The process of changing instructions, examples, or supplied context to address observed failures, then evaluating whether the revised prompt improves the intended task.",
    "explanation": "Start with a specific failure and a clear definition of better performance. Change an identifiable part of the prompt and compare results on the same cases. Reserve additional cases that were not used to guide the edits. Repeated polishing without measurement can make a prompt longer while leaving the underlying problem unsolved.",
    "example": "A team clarifies the difference between billing and delivery complaints after reviewing routing errors, then tests the revision on unseen tickets.",
    "whyItMatters": "Refinement is a small experiment that can improve a workflow before more expensive adaptation is considered.",
    "confusion": "A response sounding more professional does not prove that accuracy or business usefulness improved.",
    "related": [
      "prompt-version",
      "evaluation-rubric",
      "held-out-evaluation",
      "baseline"
    ],
    "sources": []
  },
  {
    "id": "chat-application",
    "term": "Chat application",
    "fullName": "",
    "aliases": [
      "chatbot",
      "chat interface"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "r1",
      "r2"
    ],
    "definition": "The product surrounding a model that manages the conversation interface, instructions, selected history, data connections, and any available tools or controls.",
    "explanation": "The application decides what the model receives and how its output is displayed or acted on. It may summarize old messages, retrieve documents, or call external services. Two applications using the same underlying model can therefore behave differently. Evaluate the complete user workflow, including permissions, missing information, and escalation.",
    "example": "A company’s internal assistant connects an approved policy collection and limits access by employee role, while the underlying model provides language generation.",
    "whyItMatters": "Procurement and evaluation must consider the full product arrangement rather than the model name alone.",
    "confusion": "The conversation shown on screen is not necessarily the entire context supplied to the model for each response.",
    "related": [
      "language-model",
      "context",
      "authorization",
      "agent"
    ],
    "sources": []
  },
  {
    "id": "hallucination",
    "term": "Hallucination",
    "fullName": "",
    "aliases": [
      "hallucinations"
    ],
    "category": "Prompting and conversation",
    "lessonIds": [
      "f1",
      "f3",
      "r7",
      "r8"
    ],
    "definition": "A generated statement or other output that appears plausible but is unsupported by the relevant evidence or is factually incorrect.",
    "explanation": "A model can produce confident language while inventing a detail, citation, or relationship. The error may arise even when much of the response is useful. Check important claims against appropriate sources, and design a handoff when evidence is missing. Supplying relevant context and evaluating answers can reduce errors, but no prompt wording alone guarantees their elimination.",
    "example": "A service assistant invents a refund deadline that does not appear in the approved policy, so the reviewer rejects the draft.",
    "whyItMatters": "The cost of an unsupported claim determines the level of review, evidence, and escalation needed in the workflow.",
    "confusion": "Confident tone is not evidence of accuracy, and a citation-looking reference may itself be invented.",
    "related": [
      "correctness",
      "grounding",
      "citation",
      "human-review"
    ],
    "sources": []
  },
  {
    "id": "retrieval-augmented-generation",
    "term": "Retrieval-augmented generation",
    "fullName": "",
    "aliases": [
      "RAG",
      "retrieval augmented generation"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "f7",
      "r1",
      "r6",
      "r8"
    ],
    "definition": "A workflow that finds relevant material in selected sources and supplies it to a generative model as context for producing an answer.",
    "explanation": "Preparation makes approved documents searchable; answering then retrieves useful passages for a particular question. The model receives those passages alongside the request and drafts a response. Updating the searchable documents can change the available evidence without retraining the model. The workflow still needs permission checks, current sources, and separate evaluation of retrieval and answer quality.",
    "example": "A support manager pilots an assistant that retrieves the current returns policy before drafting a reply for staff review.",
    "whyItMatters": "Assign owners for the knowledge, permissions, answer quality, and escalation when evidence is missing.",
    "confusion": "RAG adds context at answer time; it does not by itself retrain a model or guarantee truth.",
    "related": [
      "retrieval",
      "grounding",
      "embedding",
      "knowledge-base"
    ],
    "sources": [
      {
        "label": "Original RAG research paper",
        "url": "https://arxiv.org/abs/2005.11401"
      }
    ]
  },
  {
    "id": "retrieval",
    "term": "Retrieval",
    "fullName": "",
    "aliases": [],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "f7",
      "r1",
      "r4",
      "r6",
      "r8",
      "m2",
      "m4"
    ],
    "definition": "The process of finding and returning information relevant to a request from a collection of documents, records, images, or other stored material.",
    "explanation": "A retrieval system selects candidate evidence before an assistant writes its answer. It may use exact words, similar meaning, metadata filters, or several signals together. Relevant material must also be permitted for the user and appropriate to the task. Inspecting retrieved items helps distinguish a search failure from a model that misused good evidence.",
    "example": "A manager asks why an assistant missed a regional exception and discovers that the search never returned the regional policy.",
    "whyItMatters": "Measure the quality of selected evidence before spending effort on a different answer-writing model.",
    "confusion": "Retrieval selects existing material; generation creates an output using available context and learned patterns.",
    "related": [
      "retrieval-augmented-generation",
      "generation",
      "retrieval-recall"
    ],
    "sources": []
  },
  {
    "id": "generation",
    "term": "Generation",
    "fullName": "",
    "aliases": [],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "f1",
      "f3",
      "f7",
      "r1",
      "r6",
      "r8",
      "m3",
      "m7"
    ],
    "definition": "The production of new text, images, audio, or other output by a model using learned patterns together with the instructions and context supplied.",
    "explanation": "A generated answer is assembled for the request rather than simply copied from a database record. Its content depends on the model, the supplied evidence, instructions, and generation settings. Useful synthesis can coexist with unsupported details. For a business workflow, define what may be created freely and what must be anchored to an approved source.",
    "example": "A communications lead allows alternative headline drafts but requires all product claims to match the approved launch brief.",
    "whyItMatters": "Set review rules around the consequences of invented or altered information.",
    "confusion": "A fluent generated statement is not evidence that the system retrieved or verified a fact.",
    "related": [
      "generative-ai",
      "retrieval",
      "hallucination",
      "grounding"
    ],
    "sources": []
  },
  {
    "id": "grounding",
    "term": "Grounding",
    "fullName": "",
    "aliases": [
      "grounded answer",
      "grounded-answer",
      "grounded"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r6",
      "r7"
    ],
    "definition": "Connecting an answer or action to relevant evidence or other authoritative context, so its claims can be checked against information supplied for the task.",
    "explanation": "In a knowledge assistant, grounding means using selected source material to support the response. Reviewers should be able to connect individual claims to the passages that justify them. Sources may still be incomplete, outdated, or inappropriate for the user. Grounding therefore works alongside freshness, authorization, and factual checks rather than replacing them.",
    "example": "A sales reviewer checks that a proposed feature claim matches the cited product brief before sending a customer response.",
    "whyItMatters": "Require inspectable support for business claims and a clear response when support is absent.",
    "confusion": "A citation can exist without supporting its attached claim; grounded wording is not automatically current or correct.",
    "related": [
      "citation",
      "faithfulness",
      "source-freshness",
      "correctness"
    ],
    "sources": []
  },
  {
    "id": "embedding",
    "term": "Embedding",
    "fullName": "",
    "aliases": [
      "embeddings"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "f4",
      "r4",
      "m2",
      "m4",
      "m6"
    ],
    "definition": "A numerical representation of content that makes selected patterns of similarity comparable, helping systems find related text, images, audio, or other material.",
    "explanation": "An embedding model turns content into a list of numbers. Compatible representations can be compared to find candidates that share meaning or other learned characteristics. The dimensions are not necessarily categories a person can interpret. Similarity is useful for finding candidates, but business rules must still check source, date, identity, and permission.",
    "example": "A policy search connects an employee’s phrase “time off” with documents titled “annual leave.”",
    "whyItMatters": "Test similar-looking but wrong results, not only successful matches with different wording.",
    "confusion": "Nearby representations do not prove that two statements are equivalent, true, or authorized for the same user.",
    "related": [
      "embedding-model",
      "vector-search",
      "semantic-search",
      "metadata"
    ],
    "sources": []
  },
  {
    "id": "embedding-model",
    "term": "Embedding model",
    "fullName": "",
    "aliases": [
      "embedding models"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r4"
    ],
    "definition": "A model that converts content into numerical representations intended to make useful relationships, such as similar meaning, measurable across compatible inputs.",
    "explanation": "The model determines which features the representation emphasizes. A model suitable for general text may behave differently on product codes, specialist language, or images. Stored content and incoming queries need a compatible representation method. Changing the model can require recreating stored embeddings and reevaluating search behavior.",
    "example": "A service team compares two embedding models on real support questions before rebuilding its policy-search collection.",
    "whyItMatters": "Treat a representation-model change as a retrieval change with cost and quality consequences.",
    "confusion": "An embedding model represents content; a generative language model’s main job is producing sequences of output.",
    "related": [
      "embedding",
      "vector-database",
      "semantic-search",
      "regression"
    ],
    "sources": []
  },
  {
    "id": "vector-search",
    "term": "Vector search",
    "fullName": "",
    "aliases": [
      "vector retrieval"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r4"
    ],
    "definition": "Search that compares numerical representations and returns nearby candidates under a chosen similarity measure, often used to find content related to a query.",
    "explanation": "The query and stored items are represented as compatible vectors, or lists of numbers. Search identifies items close to the query according to the chosen measure. The system may trade some completeness for speed on a large collection. Results still need task-specific filtering and evaluation because numerical closeness is only a relevance signal.",
    "example": "A procurement assistant finds purchasing policies whose embeddings are close to a question about supplier onboarding.",
    "whyItMatters": "Ask how the team handles similar documents with the wrong region, version, or access rights.",
    "confusion": "Vector search is a comparison method; semantic search is a goal that may combine several methods.",
    "related": [
      "embedding",
      "semantic-search",
      "approximate-search",
      "vector-database"
    ],
    "sources": []
  },
  {
    "id": "semantic-search",
    "term": "Semantic search",
    "fullName": "",
    "aliases": [
      "semantic retrieval"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r4",
      "r6"
    ],
    "definition": "Retrieval that aims to find information by related meaning rather than requiring the query and documents to contain exactly the same words.",
    "explanation": "Semantic search can connect different phrases describing a similar topic or intent. Embeddings are a common way to represent those relationships. Results should still respect exact identifiers, dates, and user permissions. Combining meaning-based retrieval with keyword matching can help when both paraphrases and precise names matter.",
    "example": "An employee searches “expense claim deadline” and finds a policy section named “reimbursement submission period.”",
    "whyItMatters": "Evaluate whether better language matching improves correct, usable answers for real users.",
    "confusion": "Meaning-related content is not necessarily the right policy or a complete answer.",
    "related": [
      "embedding",
      "keyword-search",
      "hybrid-search",
      "answer-relevance"
    ],
    "sources": []
  },
  {
    "id": "keyword-search",
    "term": "Keyword search",
    "fullName": "",
    "aliases": [
      "keyword retrieval",
      "keyword matching"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r4",
      "r6"
    ],
    "definition": "Retrieval based on words, phrases, or exact identifiers in a query and stored content, often ranking results according to how well those textual signals match.",
    "explanation": "Keyword search is useful when an exact product name, document number, or technical phrase matters. Search engines may account for spelling, word forms, or the importance of individual terms. It can miss a useful passage that expresses the same idea in different language. Its value depends on the collection and query, so compare it on representative tasks.",
    "example": "A technician searches an exact replacement-part number instead of relying only on a broad description of the equipment.",
    "whyItMatters": "Preserve exact-match behavior where a similar identifier would produce an operational mistake.",
    "confusion": "Keyword search is not automatically inferior to semantic search; some requests depend on exact wording.",
    "related": [
      "semantic-search",
      "hybrid-search",
      "search-index"
    ],
    "sources": []
  },
  {
    "id": "hybrid-search",
    "term": "Hybrid search",
    "fullName": "",
    "aliases": [
      "hybrid retrieval"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r6"
    ],
    "definition": "A retrieval approach that combines different search signals, commonly keyword matching and vector similarity, to create a single useful set of results.",
    "explanation": "Exact terms and related meaning can each recover information the other misses. A hybrid workflow retrieves candidates through more than one method and combines their rankings or scores. The combination needs evaluation on the actual collection and questions. Extra retrieval stages can also affect response time and operating cost.",
    "example": "A support search uses a product code to narrow exact matches while finding paraphrased descriptions of the reported problem.",
    "whyItMatters": "Choose the combination based on measured retrieval quality, not an assumption that more methods always help.",
    "confusion": "Combining search methods does not automatically resolve stale sources, permission failures, or weak answer generation.",
    "related": [
      "keyword-search",
      "vector-search",
      "reranking"
    ],
    "sources": [
      {
        "label": "Elastic hybrid search documentation",
        "url": "https://www.elastic.co/docs/solutions/search/hybrid-search"
      }
    ]
  },
  {
    "id": "chunking",
    "term": "Chunking",
    "fullName": "",
    "aliases": [
      "chunks",
      "chunk"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r6"
    ],
    "definition": "Dividing source material into meaningful pieces that can be indexed, retrieved, and supplied as context without losing the relationships needed to interpret them.",
    "explanation": "A whole manual may be too large or unfocused for a particular answer. Chunking creates passages while trying to preserve useful boundaries such as headings, rules, and exceptions. Very small passages can lose meaning; very large passages can bury relevant evidence. Evaluate the chosen boundaries with questions that require surrounding context.",
    "example": "A policy team keeps an eligibility rule and its exception in the same searchable passage after a test answer misses the exception.",
    "whyItMatters": "Require quality checks on document preparation, not only on the final model response.",
    "confusion": "Chunking is a document-processing decision, not the same as the model’s tokenization of text.",
    "related": [
      "token",
      "retrieval",
      "context-window",
      "search-index"
    ],
    "sources": []
  },
  {
    "id": "search-index",
    "term": "Search index",
    "fullName": "",
    "aliases": [
      "index",
      "indexes"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r6"
    ],
    "definition": "A prepared data structure that helps a system find stored material efficiently, using searchable representations and references back to the underlying content.",
    "explanation": "An index avoids scanning every source document from scratch for each request. It may organize keywords, vectors, or other searchable features alongside metadata. Updates and deletions must reach the index and any associated copies. A well-built index improves retrieval, but its contents still need owners and freshness checks.",
    "example": "A knowledge manager verifies that a retired travel policy disappears from search after its replacement is published.",
    "whyItMatters": "Include index refresh and deletion behavior in the service’s operating responsibilities.",
    "confusion": "Creating an index is not the same as teaching new facts into a model’s parameters.",
    "related": [
      "knowledge-base",
      "metadata",
      "vector-database",
      "source-freshness"
    ],
    "sources": []
  },
  {
    "id": "metadata",
    "term": "Metadata",
    "fullName": "",
    "aliases": [
      "source metadata"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r4",
      "r6",
      "r7",
      "m6"
    ],
    "definition": "Information describing content, such as its source, owner, version, date, region, or access rules, used to organize, filter, and interpret the material.",
    "explanation": "The same paragraph can mean different things depending on when and where it applies. Metadata preserves that business context separately from the passage itself. Search and review workflows can use it to select appropriate sources and explain their origin. Incorrect or missing metadata can make an otherwise accurate retrieval result unusable.",
    "example": "An expense assistant filters policy passages by country and effective date before presenting an answer.",
    "whyItMatters": "Assign responsibility for metadata quality wherever it determines applicability or access.",
    "confusion": "Metadata can describe a permission requirement, but access is protected only when the application enforces it.",
    "related": [
      "access-control",
      "source-freshness",
      "provenance",
      "retrieval"
    ],
    "sources": []
  },
  {
    "id": "vector-database",
    "term": "Vector database",
    "fullName": "",
    "aliases": [
      "vector databases"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r6"
    ],
    "definition": "A data system designed to store numerical representations and retrieve similar items, often with metadata filtering and references to the original content.",
    "explanation": "A vector database supports applications that search embeddings rather than only exact words. It manages stored representations and returns candidate matches for incoming queries. Capabilities vary, so the team must evaluate updates, filtering, access controls, scale, and reliability. The database is one component in a larger retrieval and answer workflow.",
    "example": "A service desk stores policy-passage embeddings with document IDs, regions, and effective dates for a knowledge assistant.",
    "whyItMatters": "Assess operational and permission requirements alongside search speed and relevance.",
    "confusion": "A vector database is neither the source of business truth nor the language model that writes the answer.",
    "related": [
      "vector-search",
      "embedding",
      "metadata",
      "retrieval-augmented-generation"
    ],
    "sources": []
  },
  {
    "id": "reranking",
    "term": "Reranking",
    "fullName": "",
    "aliases": [
      "rerank",
      "re-ranking"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r6"
    ],
    "definition": "Reordering an initial set of retrieved candidates using an additional relevance assessment, with the aim of placing the most useful evidence closer to the top.",
    "explanation": "The first search stage often prioritizes finding plausible candidates quickly. A second stage can examine those candidates more carefully in relation to the request. Only the candidates supplied to that stage can be reconsidered. Reranking may improve the final context but adds work, so measure the quality and latency tradeoff.",
    "example": "A policy assistant retrieves twenty possible passages and reranks them before sending the most relevant ones to its answer model.",
    "whyItMatters": "Check whether the extra stage improves useful answers enough to justify its cost and response time.",
    "confusion": "Reranking cannot recover a needed document that never entered the candidate set.",
    "related": [
      "retrieval",
      "retrieval-precision",
      "retrieval-recall",
      "latency"
    ],
    "sources": [
      {
        "label": "Elastic ranking and reranking documentation",
        "url": "https://www.elastic.co/docs/solutions/search/ranking"
      }
    ]
  },
  {
    "id": "approximate-search",
    "term": "Approximate search",
    "fullName": "",
    "aliases": [
      "approximate retrieval"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r6"
    ],
    "definition": "A search strategy that finds likely close matches quickly without exhaustively comparing every possible item, accepting a controlled possibility of missing some better matches.",
    "explanation": "Large vector collections can make exhaustive comparison expensive. Approximate methods reduce the amount of work needed to identify promising neighbors. Their settings influence the balance between speed, memory use, and retrieval completeness. Evaluation should include cases where the missed evidence would materially change the answer.",
    "example": "A knowledge team tests whether a faster index setting still finds the exception clauses needed for customer-policy decisions.",
    "whyItMatters": "Ask for measured retrieval and response-time tradeoffs before accepting a faster configuration.",
    "confusion": "Approximate does not mean randomly inaccurate; it describes a deliberate efficiency tradeoff that still needs testing.",
    "related": [
      "vector-search",
      "retrieval-recall",
      "latency",
      "search-index"
    ],
    "sources": []
  },
  {
    "id": "knowledge-base",
    "term": "Knowledge base",
    "fullName": "",
    "aliases": [
      "knowledge-base"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r6"
    ],
    "definition": "An organized collection of information maintained for a defined audience or purpose, such as approved policies, product instructions, and support procedures used by an assistant.",
    "explanation": "The value of a knowledge base depends on its ownership and maintenance, not just its size. Documents need clear applicability, useful structure, and a process for resolving conflicting versions. An AI workflow may index this collection and retrieve passages when answering. Missing or uncertain information should lead to an explicit handoff rather than an invented policy.",
    "example": "A support manager appoints policy owners and review dates before connecting a service assistant to the internal help library.",
    "whyItMatters": "Budget for ongoing content operations as well as the initial AI integration.",
    "confusion": "A large document folder is not automatically a reliable or authorized source collection.",
    "related": [
      "source-authority",
      "source-freshness",
      "metadata",
      "retrieval-augmented-generation"
    ],
    "sources": []
  },
  {
    "id": "source-freshness",
    "term": "Source freshness",
    "fullName": "",
    "aliases": [
      "freshness"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "f2",
      "f7",
      "r4",
      "r6",
      "r7"
    ],
    "definition": "The degree to which information remains current and applicable for the question being answered, considering effective dates, superseded versions, updates, and deletions.",
    "explanation": "A passage can be accurately quoted and still describe a policy that no longer applies. Freshness depends on the task: a historical question may need an old source, while current entitlement questions need current rules. The collection and search index should preserve dates and version relationships. Tests should cover publication, replacement, and removal of material.",
    "example": "A travel assistant stops citing last year’s meal allowance after the policy owner publishes a new effective version.",
    "whyItMatters": "Name the owner and update process for information that can change business decisions.",
    "confusion": "The newest upload is not always the authoritative or currently effective source.",
    "related": [
      "metadata",
      "source-authority",
      "faithfulness",
      "search-index"
    ],
    "sources": []
  },
  {
    "id": "citation",
    "term": "Citation",
    "fullName": "",
    "aliases": [
      "citations",
      "source references"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "f5",
      "r7"
    ],
    "definition": "A reference that points a reader to a source supporting a claim, enabling inspection of the original evidence rather than requiring trust in the generated answer alone.",
    "explanation": "A useful citation identifies the relevant source and ideally the passage needed to verify a statement. The reviewer must still check whether that passage actually supports the wording. Source date, authority, and scope also matter. Citation presence is therefore a starting point for inspection rather than a quality score by itself.",
    "example": "A reviewer follows a feature-availability citation and finds that the brochure describes a future plan, not a released capability.",
    "whyItMatters": "Require claim-to-evidence checks for consequential answers, not merely a minimum number of references.",
    "confusion": "A real citation can accompany an unsupported or misleading claim.",
    "related": [
      "grounding",
      "source-authority",
      "faithfulness",
      "provenance"
    ],
    "sources": []
  },
  {
    "id": "source-authority",
    "term": "Source authority",
    "fullName": "",
    "aliases": [
      "authority rule"
    ],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r7"
    ],
    "definition": "The degree to which a source is entitled and suitable to establish an answer for a particular question, according to its ownership, purpose, scope, and status.",
    "explanation": "An approved policy may govern an entitlement while an informal chat message does not. Authority is specific to the question and organization; an expert note may explain a topic without changing the official rule. When sources disagree, the workflow needs a documented way to resolve the conflict. If authority cannot be established, escalate to the responsible owner.",
    "example": "A purchasing assistant defers to the approved procurement policy when an older team memo suggests a different approval limit.",
    "whyItMatters": "Define which sources can establish business rules before allowing an assistant to make commitments.",
    "confusion": "A high search ranking, recent timestamp, or confident writing style does not establish authority.",
    "related": [
      "knowledge-base",
      "source-freshness",
      "citation",
      "escalation"
    ],
    "sources": []
  },
  {
    "id": "prompt-injection",
    "term": "Prompt injection",
    "fullName": "",
    "aliases": [],
    "category": "Knowledge and retrieval",
    "lessonIds": [
      "r7"
    ],
    "definition": "An attempt to make an AI system treat untrusted content as instructions that redirect its behavior, rather than as information to evaluate for the task.",
    "explanation": "An assistant may encounter such instructions in a retrieved document, message, image, or other input. The content might ask it to ignore its task, expose information, or perform an unauthorized action. Important permissions and action limits must be enforced by the surrounding application. Tests should include hostile content in otherwise useful sources and verify the complete workflow’s response.",
    "example": "A test policy document contains a sentence instructing the assistant to reveal another customer’s records; the application must keep that data inaccessible.",
    "whyItMatters": "Require evidence that untrusted material cannot bypass the system’s information and action boundaries.",
    "confusion": "A prompt asking the model to keep secrets is not a substitute for authorization controls.",
    "related": [
      "authorization",
      "access-control",
      "retrieval-augmented-generation",
      "sensitive-data"
    ],
    "sources": [
      {
        "label": "OWASP prompt-injection overview",
        "url": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
      }
    ]
  },
  {
    "id": "evaluation-rubric",
    "term": "Evaluation rubric",
    "fullName": "",
    "aliases": [
      "quality rubric",
      "review rubric",
      "rubric"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f4",
      "f5",
      "f8",
      "r3"
    ],
    "definition": "A shared set of criteria and scoring guidance used to judge an output or workflow consistently, including what counts as a useful result and a serious failure.",
    "explanation": "A rubric turns a broad request such as “good answers” into observable requirements. It can distinguish factual support, completeness, clarity, and handling of missing information. Examples help reviewers apply the criteria consistently. The rubric should reflect the business consequences of errors rather than rewarding polish alone.",
    "example": "A service team scores replies on policy accuracy, useful next steps, and unsupported commitments using the same reviewed examples.",
    "whyItMatters": "Agree on quality before comparing models, and resolve reviewer disagreements before relying on aggregate scores.",
    "confusion": "A numeric score is not automatically objective; it depends on the criteria and how they are applied.",
    "related": [
      "acceptance-criteria",
      "human-review",
      "ai-judge",
      "calibration"
    ],
    "sources": []
  },
  {
    "id": "benchmark",
    "term": "Benchmark",
    "fullName": "",
    "aliases": [
      "benchmarks"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f4",
      "r5",
      "r8"
    ],
    "definition": "A defined set of tasks, examples, and measures used to compare systems under stated conditions, which may differ from the work an organization actually needs done.",
    "explanation": "A benchmark offers a repeatable comparison point when the evaluation procedure is clear. Public benchmarks can help identify candidates for further investigation. Their tasks, languages, data, and scoring may not match a company’s workflow. Use representative internal evaluation before treating a benchmark advantage as a business advantage.",
    "example": "A manager shortlists models from published results, then compares them on the same anonymized support cases and review-time measures.",
    "whyItMatters": "Ask whether the comparison represents your task, constraints, and unacceptable errors.",
    "confusion": "The highest public benchmark score does not establish the best fit or lowest operating cost for your team.",
    "related": [
      "evaluation-set",
      "baseline",
      "cost-per-acceptable-task",
      "held-out-evaluation"
    ],
    "sources": []
  },
  {
    "id": "held-out-evaluation",
    "term": "Held-out evaluation",
    "fullName": "",
    "aliases": [
      "held-out cases",
      "held-out test set",
      "held-out"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f4",
      "f8",
      "r3"
    ],
    "definition": "Testing on examples deliberately kept separate from the material used to train, tune, select, or repeatedly improve a system, to assess performance on unfamiliar cases.",
    "explanation": "A team can improve a prompt until it handles familiar examples very well. That does not show whether the improvement generalizes. Reserving an untouched set provides a more credible final check. Once repeated inspection of that set informs changes, it is no longer an untouched assessment and the evaluation process should account for that exposure.",
    "example": "A product team develops a summarization prompt on one collection of reports and tests its release candidate on a separately reserved collection.",
    "whyItMatters": "Protect part of the evaluation from improvement cycles so success does not merely reflect familiarity with the test.",
    "confusion": "A test file is not truly held out if its failures are repeatedly used to tune the same candidate.",
    "related": [
      "evaluation-set",
      "benchmark",
      "regression",
      "fine-tuning"
    ],
    "sources": []
  },
  {
    "id": "evaluation-set",
    "term": "Evaluation set",
    "fullName": "",
    "aliases": [
      "test set",
      "evaluation data"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f4",
      "f7",
      "f8",
      "r3",
      "r8",
      "m2",
      "m4",
      "m8"
    ],
    "definition": "A collection of examples and expected assessment criteria used to test how a system behaves across representative tasks, difficult cases, and important failure conditions.",
    "explanation": "Examples may include an input, expected evidence, a reference answer, permission context, and a scoring rubric. Not every metric needs all of those fields. The set should include routine work and cases where the system should decline, clarify, or escalate. Review it when the workflow, sources, or incoming work changes.",
    "example": "A knowledge assistant is tested on ordinary questions, missing-policy questions, conflicting sources, and users with different document permissions.",
    "whyItMatters": "Fund the test data and review process as a core part of the product, not an afterthought.",
    "confusion": "A large evaluation set can still be misleading if it omits the situations that matter most.",
    "related": [
      "golden-test-set",
      "held-out-evaluation",
      "evaluation-rubric",
      "subgroup-evaluation"
    ],
    "sources": []
  },
  {
    "id": "golden-test-set",
    "term": "Golden test set",
    "fullName": "",
    "aliases": [
      "golden set"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "r8"
    ],
    "definition": "A carefully reviewed collection of examples used as a trusted reference for judging a workflow, with agreed answers, evidence, or expected behavior where appropriate.",
    "explanation": "The word “golden” reflects curation, not permanent perfection. Experts must resolve ambiguous examples and record what makes an acceptable result. Stable cases support comparison across versions, while controlled updates keep the set relevant to changing business rules. Preserve its history so a score change can be interpreted correctly.",
    "example": "A policy owner signs off a set of travel questions with current reference passages and expected escalation for unresolved conflicts.",
    "whyItMatters": "Know who reviewed the reference cases and when changes to them should trigger reassessment.",
    "confusion": "A golden set can contain mistakes or become outdated; it is not unquestionable ground truth forever.",
    "related": [
      "evaluation-set",
      "reference-answer",
      "source-freshness",
      "regression"
    ],
    "sources": []
  },
  {
    "id": "reference-answer",
    "term": "Reference answer",
    "fullName": "",
    "aliases": [
      "reference answers",
      "reference text"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f4",
      "r8"
    ],
    "definition": "A reviewed answer used as a comparison point during evaluation, describing the expected content or result for a particular input under stated assumptions.",
    "explanation": "A reference helps evaluators identify missing, incorrect, or unsupported information. Some tasks permit several valid phrasings or approaches, so matching a reference word for word may be inappropriate. Its sources and assumptions need to be clear. Review references when policies or expected behavior change.",
    "example": "A test question about return eligibility includes a reference answer explaining both the general rule and its regional exception.",
    "whyItMatters": "Validate the comparison target before treating differences from it as model errors.",
    "confusion": "A different wording is not necessarily a wrong answer, and a reference can itself be incomplete.",
    "related": [
      "golden-test-set",
      "exact-check",
      "semantic-comparison",
      "correctness"
    ],
    "sources": []
  },
  {
    "id": "exact-check",
    "term": "Exact check",
    "fullName": "",
    "aliases": [
      "exact checks"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f4"
    ],
    "definition": "An evaluation that compares an output with a precisely defined expected value or rule, useful when correctness can be determined without interpreting broad meaning.",
    "explanation": "Dates, required fields, allowed categories, and arithmetic results may support exact checks. The comparison must define any permitted formatting differences. An exact match can be a strong test for a narrow requirement. It does not establish that the whole response is useful, supported, or appropriate.",
    "example": "A document-extraction workflow checks whether the invoice date equals the date verified by a reviewer.",
    "whyItMatters": "Use deterministic checks where the requirement is precise, leaving nuanced judgments to an appropriate review method.",
    "confusion": "Exact textual similarity can reject valid paraphrases or accept a correct field inside an otherwise misleading answer.",
    "related": [
      "functional-correctness",
      "reference-answer",
      "structured-output",
      "evaluation-rubric"
    ],
    "sources": []
  },
  {
    "id": "functional-correctness",
    "term": "Functional correctness",
    "fullName": "",
    "aliases": [
      "functional testing"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f4"
    ],
    "definition": "Whether a system performs the intended task or action successfully according to its requirements, rather than merely producing an output that looks plausible.",
    "explanation": "The evaluation follows the result through the workflow. A scheduling assistant must create the correct permitted appointment, not simply claim that it did. Read-only tasks also have functions, such as extracting the right records or applying the right filters. Check side effects and failure behavior as well as the happy path.",
    "example": "A service workflow is tested to confirm that a requested case reassignment reaches the correct team and preserves the audit record.",
    "whyItMatters": "Ask for evidence that the business outcome occurred correctly, not just a convincing demonstration transcript.",
    "confusion": "A fluent confirmation is not proof that an action happened or that it was authorized.",
    "related": [
      "exact-check",
      "acceptance-criteria",
      "authorization",
      "trace"
    ],
    "sources": []
  },
  {
    "id": "semantic-comparison",
    "term": "Semantic comparison",
    "fullName": "",
    "aliases": [
      "meaning-oriented comparisons"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f4"
    ],
    "definition": "An evaluation of how closely two pieces of content express related meaning, rather than relying only on identical words or formatting.",
    "explanation": "Such comparisons can recognize that different wording conveys a similar idea. Embedding similarity is one possible approach. A small difference in a number, date, or negation may still change the business meaning substantially. Combine semantic comparison with factual and task-specific checks when those details determine correctness.",
    "example": "A summary evaluator accepts alternative wording but separately checks that the reported deadline remains Friday rather than Thursday.",
    "whyItMatters": "Make sure a high similarity score cannot hide a decision-changing factual error.",
    "confusion": "Semantic similarity is not the same as factual equivalence or correctness.",
    "related": [
      "embedding",
      "rouge",
      "correctness",
      "reference-answer"
    ],
    "sources": []
  },
  {
    "id": "rouge",
    "term": "ROUGE",
    "fullName": "Recall-Oriented Understudy for Gisting Evaluation",
    "aliases": [],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f4"
    ],
    "definition": "A family of text-evaluation measures that compare overlap between a generated response and reference text, often used as one signal when assessing summaries.",
    "explanation": "Different ROUGE measures consider different kinds of overlap, such as word sequences or shared subsequences. The result depends on the chosen measure and reference material. It can help compare coverage across many summaries. It should be paired with checks for factual accuracy and usefulness because shared wording alone cannot establish either.",
    "example": "A reporting team uses ROUGE to track summary overlap while reviewers separately check whether figures and conclusions are supported.",
    "whyItMatters": "Ask which variant is reported and what other checks cover errors the overlap score cannot detect.",
    "confusion": "ROUGE is a specific metric family; ordinary word overlap is not always a ROUGE calculation.",
    "related": [
      "reference-answer",
      "semantic-comparison",
      "correctness"
    ],
    "sources": [
      {
        "label": "ROUGE original paper",
        "url": "https://aclanthology.org/W04-1013/"
      }
    ]
  },
  {
    "id": "ai-judge",
    "term": "AI judge",
    "fullName": "",
    "aliases": [
      "AI-as-a-judge",
      "model-based judges",
      "model judge"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f4",
      "r8"
    ],
    "definition": "A model used to assess another output against stated criteria, offering scalable evaluation while introducing its own limitations, biases, and potential mistakes.",
    "explanation": "The judge receives an output and a task such as checking support or applying a rubric. Its decisions depend on its instructions, context, and model behavior. Compare those decisions with trusted human assessments and investigate disagreements. Recheck the evaluator when its model or rubric changes, just as you would the system being judged.",
    "example": "A manager uses an AI judge to flag likely unsupported support replies, then compares its ratings with a reviewed sample.",
    "whyItMatters": "Treat automated evaluation as a measured component with an owner and known failure patterns.",
    "confusion": "Using a second model does not make the evaluation independent of all bias or automatically correct.",
    "related": [
      "evaluation-rubric",
      "calibration",
      "human-review",
      "bias"
    ],
    "sources": []
  },
  {
    "id": "calibration",
    "term": "Calibration",
    "fullName": "",
    "aliases": [],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f4",
      "r8",
      "m6"
    ],
    "definition": "Checking and adjusting how a system’s scores or judgments relate to trusted observations, so their interpretation is appropriate for the task and decision being made.",
    "explanation": "In this course, calibrating an AI judge means comparing its assessments with examples already reviewed by people. Disagreements can reveal unclear criteria or systematic scoring errors. For confidence scores, calibration can instead concern whether stated likelihoods match observed outcomes. State which meaning and method apply before using the result to set a decision threshold.",
    "example": "A quality lead reviews cases where the automated judge approves replies that human reviewers consider unsupported and refines the rubric.",
    "whyItMatters": "Ensure a score has a tested relationship to the judgment or outcome the business cares about.",
    "confusion": "Calibration is not simply making all reviewers agree or turning a score into a guarantee.",
    "related": [
      "ai-judge",
      "evaluation-rubric",
      "human-review",
      "acceptance-criteria"
    ],
    "sources": []
  },
  {
    "id": "retrieval-precision",
    "term": "Retrieval precision",
    "fullName": "",
    "aliases": [
      "precision"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "r8"
    ],
    "definition": "A measure of how much of the retrieved material is relevant to the request, helping reveal whether useful evidence is being diluted by irrelevant candidates.",
    "explanation": "Precision focuses on the material returned, not all the evidence that could have been found. Its exact calculation depends on the evaluation method, including whether ranking matters. Review examples to define relevance consistently. High precision can coexist with missing evidence if the system returns only a small useful subset.",
    "example": "A policy search returns ten passages, but only four address the user’s region and question; the team investigates the irrelevant results.",
    "whyItMatters": "Reduce distracting context while checking that essential evidence is not lost.",
    "confusion": "Precision does not tell you whether all needed evidence was retrieved; that is a recall concern.",
    "related": [
      "retrieval-recall",
      "reranking",
      "evaluation-rubric"
    ],
    "sources": [
      {
        "label": "Ragas context precision documentation",
        "url": "https://docs.ragas.io/en/latest/concepts/metrics/available_metrics/context_precision/"
      }
    ]
  },
  {
    "id": "retrieval-recall",
    "term": "Retrieval recall",
    "fullName": "",
    "aliases": [
      "recall"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "r8"
    ],
    "definition": "A measure of how much relevant or required evidence the retrieval process finds, helping reveal missing material that could prevent a complete and supported answer.",
    "explanation": "Recall needs a way to determine what evidence should have been available for the request. That may come from reviewed passages or other reference information. A search can return plausible results while missing an essential exception. Evaluate such omissions separately from irrelevant material in the returned set.",
    "example": "A benefits assistant finds the general policy but misses the regional exception required to answer an employee’s question correctly.",
    "whyItMatters": "Look for missing decisive evidence, especially where an incomplete answer would appear convincing.",
    "confusion": "Returning many documents is not proof of high recall; the needed evidence must actually be among them.",
    "related": [
      "retrieval-precision",
      "reference-answer",
      "approximate-search"
    ],
    "sources": [
      {
        "label": "Ragas context recall documentation",
        "url": "https://docs.ragas.io/en/latest/concepts/metrics/available_metrics/context_recall/"
      }
    ]
  },
  {
    "id": "faithfulness",
    "term": "Faithfulness",
    "fullName": "",
    "aliases": [
      "faithful"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "r8"
    ],
    "definition": "Whether a generated answer’s claims are supported by the context supplied to the model, distinguishing supported synthesis from additions that the evidence does not justify.",
    "explanation": "A faithful response stays within what the supplied material supports. Evaluators may check individual claims against retrieved passages. That assesses the relationship between answer and context rather than whether the context itself is accurate or current. Pair it with correctness, source freshness, and relevance when deciding if an answer is usable.",
    "example": "An assistant accurately quotes last year’s travel allowance; it is faithful to that passage but wrong for a current-policy question.",
    "whyItMatters": "Diagnose unsupported generation separately from stale or incorrect source material.",
    "confusion": "Faithfulness to a source does not establish that the source is true or applicable today.",
    "related": [
      "grounding",
      "correctness",
      "source-freshness",
      "answer-relevance"
    ],
    "sources": [
      {
        "label": "Ragas faithfulness documentation",
        "url": "https://docs.ragas.io/en/latest/concepts/metrics/available_metrics/faithfulness/"
      }
    ]
  },
  {
    "id": "answer-relevance",
    "term": "Answer relevance",
    "fullName": "",
    "aliases": [
      "relevance"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "r6",
      "r8"
    ],
    "definition": "The degree to which a response addresses the user’s actual question and information need, instead of supplying related but unhelpful or distracting material.",
    "explanation": "A response can discuss the right topic without answering the requested decision. Relevance depends on the question, audience, and needed level of detail. Evaluation should distinguish missing the question from making an unsupported claim. A relevant answer still requires separate checks for accuracy and evidence.",
    "example": "Asked for a return deadline, an assistant gives a long description of the product but never states the applicable deadline.",
    "whyItMatters": "Judge whether the response helps the user complete the intended task.",
    "confusion": "An answer can be highly relevant and still contain false or unsupported statements.",
    "related": [
      "correctness",
      "faithfulness",
      "evaluation-rubric",
      "retrieval"
    ],
    "sources": []
  },
  {
    "id": "correctness",
    "term": "Correctness",
    "fullName": "",
    "aliases": [
      "factual correctness"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f3",
      "f4",
      "f8",
      "r4",
      "r7",
      "r8",
      "m5"
    ],
    "definition": "Whether the answer or result is accurate for the task and circumstances, using reliable evidence and the applicable rules rather than presentation quality alone.",
    "explanation": "Correctness may depend on dates, permissions, calculations, and the meaning of the request. Different tasks require different reference evidence and checks. A factual answer must reflect the relevant world or business rule, not merely repeat its supplied context. Record uncertainty when there is no dependable basis for a definitive answer.",
    "example": "A travel answer is checked against the currently effective policy for the employee’s location, not just the first retrieved document.",
    "whyItMatters": "Define what establishes the right answer before setting a launch threshold.",
    "confusion": "Correctness is distinct from faithfulness, relevance, confidence, and polished language.",
    "related": [
      "faithfulness",
      "reference-answer",
      "source-authority",
      "exact-check"
    ],
    "sources": []
  },
  {
    "id": "false-positive",
    "term": "False positive",
    "fullName": "",
    "aliases": [
      "false positives",
      "false alarms",
      "unnecessary blocks"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "m2",
      "m5",
      "m6"
    ],
    "definition": "A positive flag or detection raised when the condition being checked is actually absent, such as marking an acceptable item as a policy violation.",
    "explanation": "The meaning of positive must be defined for the task. False positives can create unnecessary review, blocked work, or unfair treatment. Their frequency depends partly on the decision threshold and the data being assessed. Examine them alongside missed issues rather than optimizing only one side of the tradeoff.",
    "example": "A training-call system flags a harmless discussion as prohibited content and sends it to a supervisor unnecessarily.",
    "whyItMatters": "Include the cost of unnecessary interventions and a process for contesting incorrect flags.",
    "confusion": "A false positive is an incorrect alert; a missed real issue is a false negative.",
    "related": [
      "false-negative",
      "moderation",
      "acceptance-criteria",
      "subgroup-evaluation"
    ],
    "sources": []
  },
  {
    "id": "false-negative",
    "term": "False negative",
    "fullName": "",
    "aliases": [
      "false negatives",
      "missed detections",
      "missed issues"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "m2",
      "m5",
      "m8"
    ],
    "definition": "A missed detection when the condition being checked is actually present, such as failing to flag a genuine policy violation or important object.",
    "explanation": "A false negative may let a problem pass through unnoticed. Its seriousness depends on what was missed and what action should have followed. Reducing missed issues can sometimes increase unnecessary alerts. Review representative examples and set the operating threshold according to the consequences of both types of error.",
    "example": "A content-review system fails to flag an actual disclosure of a customer account number in a practice recording.",
    "whyItMatters": "Account for the harm of missed cases and define a fallback for consequential decisions.",
    "confusion": "A false negative is not an incorrect warning; it is the absence of a warning that was warranted.",
    "related": [
      "false-positive",
      "moderation",
      "sensitive-data",
      "acceptance-criteria"
    ],
    "sources": []
  },
  {
    "id": "subgroup-evaluation",
    "term": "Subgroup evaluation",
    "fullName": "",
    "aliases": [],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f5"
    ],
    "definition": "Assessing system performance separately for relevant groups or conditions so an overall average does not hide concentrated errors, unequal quality, or gaps in coverage.",
    "explanation": "Useful groups may reflect language, region, input quality, or the people affected by a decision. The choice should follow the workflow and its potential harms. Compare both quality measures and specific failure patterns while noting small or unrepresentative samples. Finding a disparity is a starting point for investigation and corrective work.",
    "example": "A service manager finds that average transcription quality looks strong while one supported language has many more missed details.",
    "whyItMatters": "Require evidence about affected groups before expanding a system based on aggregate performance.",
    "confusion": "A good overall score does not establish good performance for every subgroup.",
    "related": [
      "bias",
      "evaluation-set",
      "false-positive",
      "false-negative"
    ],
    "sources": []
  },
  {
    "id": "regression",
    "term": "Regression",
    "fullName": "",
    "aliases": [
      "regressions",
      "regression testing"
    ],
    "category": "Evaluation and quality",
    "lessonIds": [
      "f7",
      "f8",
      "r8"
    ],
    "definition": "A previously working behavior that becomes worse after a change, or the practice of retesting known requirements to detect that kind of deterioration.",
    "explanation": "Changing a model, prompt, source collection, or application can improve one area while harming another. Regression checks rerun meaningful examples that represent existing requirements. Include earlier failures once they have been reviewed and fixed. Investigate new failures before treating an improved average as sufficient evidence for release.",
    "example": "A new prompt shortens support replies but stops including a required escalation step; the regression set exposes the omission.",
    "whyItMatters": "Keep evidence that improvements preserve important existing behavior.",
    "confusion": "In this course, regression concerns deteriorating behavior and its tests, not the statistical family of regression models.",
    "related": [
      "evaluation-set",
      "prompt-version",
      "rollback",
      "acceptance-criteria"
    ],
    "sources": []
  },
  {
    "id": "human-review",
    "term": "Human review",
    "fullName": "",
    "aliases": [
      "human reviewer"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f1",
      "f2",
      "f4",
      "f5",
      "f8",
      "r3",
      "r8",
      "m1",
      "m2",
      "m3",
      "m8"
    ],
    "definition": "Assessment by a person with appropriate knowledge and responsibility, used to inspect AI outputs, resolve uncertainty, and decide whether a result is suitable for use.",
    "explanation": "Review works best when the reviewer can inspect evidence, understands the acceptance criteria, and has enough time to challenge the result. Simply placing a person after an automated step does not ensure careful oversight. Define what must be checked and what the reviewer is allowed to change or stop. Measure review effort and recurring errors as part of the workflow.",
    "example": "A support specialist checks the policy passage and proposed commitment before sending an assistant’s draft to a customer.",
    "whyItMatters": "Plan reviewer capacity, training, authority, and escalation rather than assuming oversight happens automatically.",
    "confusion": "A human in the process is not a guarantee of correctness, especially when review is rushed or evidence is hidden.",
    "related": [
      "evaluation-rubric",
      "escalation",
      "acceptance-criteria",
      "cost-per-acceptable-task"
    ],
    "sources": []
  },
  {
    "id": "escalation",
    "term": "Escalation",
    "fullName": "",
    "aliases": [
      "human escalation",
      "escalation route"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f1",
      "f2",
      "f5",
      "r1",
      "r2",
      "r3",
      "r6",
      "r7",
      "r8",
      "m5",
      "m6",
      "m7"
    ],
    "definition": "A defined handoff to a person or process with the knowledge or authority to resolve an uncertain, exceptional, disputed, or consequential case.",
    "explanation": "An AI system should know when its permitted workflow is insufficient. Useful escalation preserves the question, relevant evidence, and reason for the handoff. The receiving team needs an owner and a response expectation. Test missing answers and conflicting sources so escalation works before users encounter them.",
    "example": "An assistant detects conflicting refund policies and routes the case to the policy owner instead of inventing a compromise.",
    "whyItMatters": "Make the fallback operationally usable and include its workload in the pilot plan.",
    "confusion": "Saying “ask a human” is not a complete escalation route if nobody owns the next step.",
    "related": [
      "human-review",
      "source-authority",
      "stop-condition",
      "pilot-charter"
    ],
    "sources": []
  },
  {
    "id": "acceptance-criteria",
    "term": "Acceptance criteria",
    "fullName": "",
    "aliases": [
      "acceptance review",
      "success criteria"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "r5",
      "r8",
      "m1",
      "m7"
    ],
    "definition": "Task-specific conditions used to decide whether a result, change, or pilot is acceptable, including required quality and any failures that prevent approval.",
    "explanation": "Criteria should be agreed before final evaluation so the team is not moving the goalposts after seeing results. They may cover accuracy, permissions, response time, cost, and appropriate escalation. Some critical failures need separate treatment rather than being averaged away. Document the evidence and responsible decision-maker when approving, revising, or stopping a pilot.",
    "example": "A sponsor requires verified permission enforcement and an agreed quality level before expanding a knowledge assistant beyond its pilot group.",
    "whyItMatters": "Turn promising demonstrations into accountable launch decisions with explicit evidence requirements.",
    "confusion": "A high average score cannot cancel a non-negotiable failure such as unauthorized information access.",
    "related": [
      "evaluation-rubric",
      "pilot-charter",
      "stop-condition",
      "golden-test-set"
    ],
    "sources": []
  },
  {
    "id": "bias",
    "term": "Bias",
    "fullName": "",
    "aliases": [
      "biased",
      "biases"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f1",
      "f4",
      "f5",
      "m8"
    ],
    "definition": "A systematic tendency in data, model behavior, evaluation, or deployment that can distort results, including patterns that produce harmful or unfair effects for particular groups.",
    "explanation": "Bias can arise from what is represented in training data, how a task is defined, or how outputs are used. It can also appear in the reference examples and reviewers used for evaluation. Inspect performance across relevant groups and contexts rather than relying only on aggregate scores. Addressing one measured disparity does not prove every source of bias has been removed.",
    "example": "A manager discovers that an automated quality scorer consistently rates one language variety lower despite equally accurate answers.",
    "whyItMatters": "Investigate unequal error patterns and involve people affected by the workflow’s decisions.",
    "confusion": "Bias is not only a problem in training data; task design, evaluation, and deployment can introduce it too.",
    "related": [
      "subgroup-evaluation",
      "evaluation-set",
      "ai-judge",
      "human-review"
    ],
    "sources": []
  },
  {
    "id": "interpretability",
    "term": "Interpretability",
    "fullName": "",
    "aliases": [
      "model interpretability"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f5"
    ],
    "definition": "The ability to understand aspects of how a system produces its behavior and what its output means, using evidence appropriate to the model and decision context.",
    "explanation": "Interpretability concerns understanding the system, not just receiving a plausible explanation from it. Different methods expose different aspects of behavior and have different limitations. Operational logs and source references can aid investigation without fully revealing internal model mechanisms. Ask what an explanation demonstrates and how that claim was validated.",
    "example": "A risk reviewer distinguishes an assistant’s written justification from independently inspectable records of its sources and actions.",
    "whyItMatters": "Require evidence suited to the decision rather than accepting a convincing narrative as proof.",
    "confusion": "A model-generated explanation is another output; it is not guaranteed to be a faithful record of internal reasoning.",
    "related": [
      "trace",
      "provenance",
      "human-review",
      "bias"
    ],
    "sources": [
      {
        "label": "NIST AI risks and trustworthiness",
        "url": "https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/"
      }
    ]
  },
  {
    "id": "consent",
    "term": "Consent",
    "fullName": "",
    "aliases": [],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f1"
    ],
    "definition": "An informed agreement to a particular use or activity, such as recording a voice or using someone’s likeness, with the scope and conditions made clear.",
    "explanation": "Teams need to distinguish permission for one purpose from permission for another. Recording a training session, generating a synthetic voice, and publishing that recording are different uses. Document the permitted purpose and who can resolve questions or withdrawal requests. The relevant organizational and legal requirements must be assessed for the actual setting.",
    "example": "A training manager obtains specific agreement before using an employee’s recorded voice in a simulated customer-service exercise.",
    "whyItMatters": "Confirm the intended use and ownership of the decision before collecting or repurposing personal material.",
    "confusion": "Possessing a recording or having access to a file does not establish consent for every new AI use.",
    "related": [
      "authorization",
      "synthetic-media",
      "provenance",
      "sensitive-data"
    ],
    "sources": []
  },
  {
    "id": "provenance",
    "term": "Provenance",
    "fullName": "",
    "aliases": [
      "provenance review"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f1",
      "f3",
      "f5"
    ],
    "definition": "Information about where content or data came from and how it was created, changed, or handled, helping people assess origin and trace responsibility.",
    "explanation": "Provenance can record a source document, creator, version, and relevant transformations. For generated media it can help distinguish authored, edited, and synthetic material. Its usefulness depends on the completeness and reliability of the records. A traceable origin supports review but does not by itself establish truth or permission for use.",
    "example": "A marketing team records the approved source image, generation tool, reviewer, and edit history for a campaign asset.",
    "whyItMatters": "Keep enough origin information to investigate errors, manage rights questions, and explain how material entered the workflow.",
    "confusion": "Knowing where something came from does not prove that it is accurate or that all intended uses are permitted.",
    "related": [
      "metadata",
      "citation",
      "consent",
      "synthetic-media"
    ],
    "sources": []
  },
  {
    "id": "retention",
    "term": "Retention",
    "fullName": "",
    "aliases": [
      "retention rules"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f5",
      "m2",
      "m5",
      "m8"
    ],
    "definition": "The policy and practice of keeping information for a defined purpose and period, then deleting or otherwise handling it according to the organization’s requirements.",
    "explanation": "AI workflows may create copies in uploads, logs, transcripts, indexes, and review exports. Retention decisions should account for those locations rather than only the original file. Teams need owners for deletion and verification when information is no longer needed. The appropriate period depends on the purpose and applicable organizational requirements.",
    "example": "A pilot team defines how long practice recordings and diagnostic transcripts remain available, then tests the removal process.",
    "whyItMatters": "Include generated copies and diagnostic records in data-lifecycle decisions.",
    "confusion": "Deleting an uploaded source does not automatically remove every indexed passage, log entry, or exported copy.",
    "related": [
      "sensitive-data",
      "knowledge-base",
      "trace",
      "access-control"
    ],
    "sources": []
  },
  {
    "id": "anonymization",
    "term": "Anonymization",
    "fullName": "",
    "aliases": [
      "anonymized"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "r3"
    ],
    "definition": "Transforming information so individuals cannot reasonably be identified in its intended release or use context, including through combinations of remaining details and available outside information.",
    "explanation": "Removing names is only one possible step. Roles, dates, locations, voices, or unusual events can still reveal who a record concerns. The team must assess re-identification possibilities in the actual context. Treat claims of anonymity cautiously and have qualified reviewers assess the release before using it as a basis for broader access.",
    "example": "A team preparing support examples removes direct identifiers and reviews combinations of details that could still identify a customer.",
    "whyItMatters": "Do not relax data controls solely because obvious names were removed.",
    "confusion": "Replacing names with consistent labels is not necessarily anonymization; records may remain linkable or identifiable.",
    "related": [
      "sensitive-data",
      "retention",
      "access-control",
      "provenance"
    ],
    "sources": []
  },
  {
    "id": "sensitive-data",
    "term": "Sensitive data",
    "fullName": "",
    "aliases": [
      "sensitive information"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f5",
      "m5"
    ],
    "definition": "Information whose exposure, misuse, or inaccurate handling could cause harm or violate obligations, including personal, confidential, security-related, or commercially restricted material.",
    "explanation": "Sensitivity depends on the information and its context. A single field may look harmless while a combination reveals a person or confidential decision. AI workflows can move sensitive content into prompts, retrieved passages, outputs, and logs. Limit collection and access to what the task requires and apply the organization’s data-handling rules.",
    "example": "A manager removes customer account details from a drafting pilot because they are unnecessary for testing response quality.",
    "whyItMatters": "Identify what data the workflow touches before deciding who may use or inspect it.",
    "confusion": "Sensitive data is not limited to passwords or names; context and combinations can make other information sensitive.",
    "related": [
      "anonymization",
      "access-control",
      "retention",
      "authorization"
    ],
    "sources": []
  },
  {
    "id": "access-control",
    "term": "Access control",
    "fullName": "",
    "aliases": [
      "access controls",
      "access limits"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f2",
      "f7",
      "r1",
      "m7"
    ],
    "definition": "The rules and enforcement mechanisms that restrict who or what can view information or perform actions, based on the permissions appropriate to the workflow.",
    "explanation": "A knowledge assistant should retrieve only the material its user is allowed to see. The application must enforce those limits before restricted data reaches an unauthorized model context or user. Controls need testing across different roles and source changes. Diagnostic tools and exports also need appropriate restrictions.",
    "example": "A staff assistant excludes executive-only documents from retrieval for an employee without the required permission.",
    "whyItMatters": "Treat permission failures as functional failures of the service, even when its answers are otherwise high quality.",
    "confusion": "A prompt instructing the model not to reveal a secret is not an access-control system.",
    "related": [
      "authorization",
      "sensitive-data",
      "metadata",
      "prompt-injection"
    ],
    "sources": []
  },
  {
    "id": "authorization",
    "term": "Authorization",
    "fullName": "",
    "aliases": [],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f1",
      "f2",
      "f5",
      "f7",
      "r1",
      "r4",
      "r6",
      "r7",
      "r8",
      "m2",
      "m4",
      "m5",
      "m7",
      "m8"
    ],
    "definition": "The decision that a particular user or system is permitted to access a resource or carry out an action under the applicable rules.",
    "explanation": "Knowing a user’s identity is different from knowing what that user may do. Authorization evaluates the requested action or information against relevant permissions. AI-assisted workflows need the same checks for retrieval, tool use, and resulting actions. Recheck permissions where the context changes rather than assuming an earlier approval covers every step.",
    "example": "A service assistant may draft a refund recommendation while only an authorized employee can approve and issue the refund.",
    "whyItMatters": "Define information access and action authority separately before connecting business tools.",
    "confusion": "Authorization is permission, not merely recognition of the user or possession of a document.",
    "related": [
      "access-control",
      "agent",
      "functional-correctness",
      "consent"
    ],
    "sources": []
  },
  {
    "id": "risk-register",
    "term": "Risk register",
    "fullName": "",
    "aliases": [
      "risk registers"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f5"
    ],
    "definition": "A maintained record of identified risks, their possible consequences, owners, planned controls, and review status, used to support decisions throughout a project’s life.",
    "explanation": "The register makes uncertainty and responsibility visible rather than leaving concerns in meeting notes. Entries should describe concrete failure scenarios and the evidence needed to assess or reduce them. Review the register as the pilot encounters new data or behavior. It supports action and decision-making rather than serving as proof that risks have been eliminated.",
    "example": "A sponsor records the risk of stale policy answers, assigns a content owner, and requires update tests before expanding access.",
    "whyItMatters": "Tie each material risk to an owner, a control, and a follow-up decision.",
    "confusion": "Listing a risk is not the same as controlling it or accepting it through an authorized decision.",
    "related": [
      "pilot-charter",
      "stop-condition",
      "monitoring",
      "acceptance-criteria"
    ],
    "sources": []
  },
  {
    "id": "misinformation",
    "term": "Misinformation",
    "fullName": "",
    "aliases": [],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f5"
    ],
    "definition": "False or misleading information presented or circulated as if it were accurate, regardless of whether the person or system sharing it intended to mislead.",
    "explanation": "Generated text and media can make unsupported claims appear polished and credible. Errors may spread through summaries, copied outputs, or synthetic assets without deliberate deception. Review evidence and context before publishing consequential claims. A correction process is useful when inaccurate material has already reached an audience.",
    "example": "A product team catches an AI-written launch note that announces an unreleased capability before it is sent to customers.",
    "whyItMatters": "Build factual review and correction responsibilities into content-production workflows.",
    "confusion": "Misinformation does not require malicious intent; an honest mistake can still mislead an audience.",
    "related": [
      "hallucination",
      "synthetic-media",
      "correctness",
      "provenance"
    ],
    "sources": []
  },
  {
    "id": "synthetic-media",
    "term": "Synthetic media",
    "fullName": "",
    "aliases": [
      "generated media"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f1",
      "f5"
    ],
    "definition": "Images, audio, video, or other media generated or substantially altered using computational models, including realistic content that may resemble actual people, places, or events.",
    "explanation": "Synthetic media can support design exploration, training, and communication. Its realism can also make invented scenes or speech easy to mistake for recorded evidence. Teams should track how assets were produced and obtain appropriate permission for likenesses or voices. Review the intended audience and use before distributing the material.",
    "example": "A training team uses a clearly identified fictional customer video to practice service responses without recording a real customer encounter.",
    "whyItMatters": "Plan permission, provenance, and review alongside the creative brief.",
    "confusion": "A realistic generated recording is not evidence that the depicted event happened.",
    "related": [
      "image-generation",
      "text-to-video",
      "consent",
      "provenance"
    ],
    "sources": []
  },
  {
    "id": "model-card",
    "term": "Model card",
    "fullName": "",
    "aliases": [
      "model cards"
    ],
    "category": "Governance and responsible use",
    "lessonIds": [
      "f6"
    ],
    "definition": "A document describing a model’s intended use, characteristics, evaluation, and known limitations, helping prospective users understand the evidence and conditions behind its release.",
    "explanation": "The details available vary by model publisher. A useful card can describe training or evaluation context, supported tasks, limitations, and license information. Read it alongside the relevant technical and usage documentation. Then test the actual workflow because a published description cannot establish fitness for every application.",
    "example": "A manager reviews a candidate model’s documented limitations before asking the team to evaluate it on multilingual support cases.",
    "whyItMatters": "Use model documentation to identify questions and test requirements during selection.",
    "confusion": "A model card is documentation, not a guarantee of safety, accuracy, or suitability for your organization.",
    "related": [
      "benchmark",
      "evaluation-set",
      "open-weights",
      "source-authority"
    ],
    "sources": [
      {
        "label": "Hugging Face model-card documentation",
        "url": "https://huggingface.co/docs/hub/model-cards"
      }
    ]
  },
  {
    "id": "total-cost-of-ownership",
    "term": "Total cost of ownership",
    "fullName": "",
    "aliases": [
      "TCO"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "r5"
    ],
    "definition": "The full cost of adopting and operating a workflow over a defined period, including service usage, infrastructure, integration, human review, maintenance, and change management.",
    "explanation": "A model’s usage charge is only one part of an AI service’s cost. Retries, retrieval, monitoring, support, and correction time can alter the comparison substantially. Separate one-time setup from recurring operating costs and state the assumed workload. Compare alternatives at a similar quality standard so cheap but unusable output does not look attractive.",
    "example": "A team discovers that a more expensive model reduces reviewer corrections enough to lower its monthly operating cost.",
    "whyItMatters": "Budget for the complete service and revisit assumptions when volume or review requirements change.",
    "confusion": "Lowest price per model request does not necessarily mean lowest total cost.",
    "related": [
      "cost-per-acceptable-task",
      "human-review",
      "self-hosting",
      "model-routing"
    ],
    "sources": []
  },
  {
    "id": "cost-per-acceptable-task",
    "term": "Cost per acceptable task",
    "fullName": "",
    "aliases": [
      "cost per acceptable completed task"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "r5"
    ],
    "definition": "The total cost of a workflow divided by the number of tasks completed to the required quality standard, making failed attempts and correction effort visible.",
    "explanation": "Count costs for unsuccessful requests, retries, retrieval, and review as well as successful outputs. Define what counts as acceptable before calculating the measure. Compare alternatives on equivalent tasks and quality requirements. This helps show when a seemingly inexpensive model creates expensive downstream work.",
    "example": "A pilot compares the cost of one hundred approved support replies, including rejected drafts and staff correction time.",
    "whyItMatters": "Use a denominator that reflects useful completed work rather than raw request volume.",
    "confusion": "Cost per request ignores whether the request produced a result anyone could actually use.",
    "related": [
      "total-cost-of-ownership",
      "acceptance-criteria",
      "human-review",
      "baseline"
    ],
    "sources": []
  },
  {
    "id": "baseline",
    "term": "Baseline",
    "fullName": "",
    "aliases": [
      "existing baseline"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "f1",
      "f8",
      "m7"
    ],
    "definition": "The existing process or a clearly defined reference approach used as the starting point for comparison, so improvements can be measured against something meaningful.",
    "explanation": "A baseline may be the current manual workflow, a simple search, or an established model configuration. Evaluate it on the same work and criteria as the proposed alternative. Record quality, time, cost, and important failures. Without that comparison, a compelling demonstration can be mistaken for a real improvement.",
    "example": "A team compares an AI-assisted reporting process with the current manual process on the same monthly reports.",
    "whyItMatters": "Determine whether the change improves the outcome enough to justify its added complexity and cost.",
    "confusion": "A comparison against an artificially weak alternative can exaggerate the value of a new system.",
    "related": [
      "benchmark",
      "evaluation-set",
      "cost-per-acceptable-task",
      "acceptance-criteria"
    ],
    "sources": []
  },
  {
    "id": "model-routing",
    "term": "Model routing",
    "fullName": "",
    "aliases": [],
    "category": "Economics and operations",
    "lessonIds": [
      "r5"
    ],
    "definition": "Sending different requests to different model options or workflows according to evaluated rules, such as task complexity, required capability, cost, or allowed data handling.",
    "explanation": "Routine work may fit one model while difficult or consequential cases need another route. The routing decision itself can fail and must be included in evaluation. A fallback may involve a different model, a question to the user, or human review. Monitor the complete workflow rather than assessing each candidate only in isolation.",
    "example": "A service pilot sends simple categorization to a smaller model and routes disputed cases to a reviewed specialist workflow.",
    "whyItMatters": "Include routing errors and fallback costs in the business case.",
    "confusion": "Using several models does not automatically improve quality or reduce total operating cost.",
    "related": [
      "total-cost-of-ownership",
      "escalation",
      "evaluation-set",
      "orchestration"
    ],
    "sources": []
  },
  {
    "id": "hosted-model-service",
    "term": "Hosted model service",
    "fullName": "",
    "aliases": [
      "hosted service"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "r5"
    ],
    "definition": "A service through which a provider operates model-serving infrastructure and an organization sends permitted requests to use the model’s capabilities.",
    "explanation": "The provider takes responsibility for some infrastructure operations, while the customer still owns its application and business decisions. Data handling, model changes, usage limits, reliability, and contractual terms need review. The service may simplify deployment without eliminating integration or evaluation work. The suitable option depends on the workflow and operating requirements.",
    "example": "A team uses a provider-operated model to test internal drafting, after reviewing which data can be sent and how changes are managed.",
    "whyItMatters": "Clarify the division of responsibility between provider operations and your team’s service ownership.",
    "confusion": "Hosted does not mean there is no maintenance, evaluation, or data-governance work for the customer.",
    "related": [
      "self-hosting",
      "quota",
      "rate-limit",
      "total-cost-of-ownership"
    ],
    "sources": []
  },
  {
    "id": "open-weights",
    "term": "Open weights",
    "fullName": "",
    "aliases": [
      "open-weight",
      "open-weight model"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "f2",
      "r5"
    ],
    "definition": "Model parameters made available for others to obtain and use under stated terms, without necessarily including every component or permission associated with an open-source release.",
    "explanation": "Access to weights can enable an organization to run or adapt a model in its own environment. The license, documentation, and available supporting materials determine what is permitted and practical. Operating the model still requires resources and expertise. Review the actual release instead of assuming that all models described as open have the same conditions.",
    "example": "A team evaluates a downloadable model’s license and operating needs before proposing an internal deployment.",
    "whyItMatters": "Assess permitted uses, support, infrastructure, and maintenance alongside the benefit of direct model access.",
    "confusion": "Open weights and open source are not interchangeable claims; available materials and permissions can differ.",
    "related": [
      "model-weights",
      "self-hosting",
      "model-card",
      "total-cost-of-ownership"
    ],
    "sources": [
      {
        "label": "Open Source Initiative AI definition",
        "url": "https://opensource.org/ai/open-source-ai-definition"
      }
    ]
  },
  {
    "id": "self-hosting",
    "term": "Self-hosting",
    "fullName": "",
    "aliases": [
      "self-hosted",
      "custom hosting"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "r5",
      "m1",
      "m7",
      "m8"
    ],
    "definition": "Operating a model or application on infrastructure managed by your organization or its chosen operators, taking responsibility for deployment and ongoing service operation.",
    "explanation": "Self-hosting can give a team more direct control over parts of its environment. It also brings responsibility for capacity, updates, security, monitoring, and recovery. Those needs may require specialist staff and substantial infrastructure. Compare the complete operating model with a hosted service rather than assuming control automatically means lower cost or suitability.",
    "example": "A company evaluates whether its infrastructure team can operate an internal model reliably before moving a document assistant onto it.",
    "whyItMatters": "Match the desired control with the team’s actual ability to run and support the service.",
    "confusion": "Self-hosting is not automatically cheaper, more secure, or compliant with every requirement.",
    "related": [
      "hosted-model-service",
      "open-weights",
      "capacity-planning",
      "monitoring"
    ],
    "sources": []
  },
  {
    "id": "latency",
    "term": "Latency",
    "fullName": "",
    "aliases": [
      "response time"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "r5",
      "r8",
      "m2",
      "m7",
      "m8"
    ],
    "definition": "The elapsed time between a request or event and the relevant response, measured at a clearly defined boundary such as the complete user task.",
    "explanation": "An AI workflow may spend time uploading data, waiting in a queue, retrieving evidence, and generating an answer. Measuring only the model call can miss much of the user’s experience. Different tasks tolerate different delays. Track both typical and slower requests under representative load.",
    "example": "A support assistant’s model responds quickly, but a slow document search makes users wait several seconds for the complete answer.",
    "whyItMatters": "Specify the response time that matters to the user and identify the stages contributing to it.",
    "confusion": "Latency is time per response; it is not the same as how many requests a service can complete overall.",
    "related": [
      "tail-latency",
      "queue",
      "trace",
      "real-time-processing"
    ],
    "sources": []
  },
  {
    "id": "tail-latency",
    "term": "Tail latency",
    "fullName": "",
    "aliases": [
      "high-percentile latency"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "m8"
    ],
    "definition": "The response times experienced by the slower portion of requests, often described using high percentiles to reveal delays hidden by an average.",
    "explanation": "Most requests can be fast while a small share are much slower. Those delays may be concentrated in particular inputs, users, or overloaded periods. High-percentile measurements help expose that experience. Define the measured interval and workload, then investigate the slow stages rather than relying only on a single average.",
    "example": "A pilot’s average response is acceptable, but the slowest few percent of video requests regularly interrupt live training sessions.",
    "whyItMatters": "Include slow-request experience in readiness decisions for interactive workflows.",
    "confusion": "A low average latency does not establish that most difficult or high-impact requests are acceptably fast.",
    "related": [
      "latency",
      "percentile",
      "trace",
      "capacity-planning"
    ],
    "sources": [
      {
        "label": "Google SRE monitoring guidance",
        "url": "https://sre.google/sre-book/monitoring-distributed-systems/"
      }
    ]
  },
  {
    "id": "percentile",
    "term": "Percentile",
    "fullName": "",
    "aliases": [
      "percentiles"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "m8"
    ],
    "definition": "A point in an ordered set of observations below which a specified percentage of measurements falls, useful for describing the distribution of response times.",
    "explanation": "For example, a 95th-percentile response time describes a boundary met by about 95 percent of the measured requests. The remaining requests may take longer. Results depend on the observation window, workload, sample size, and calculation method. Report those conditions so changes and comparisons remain meaningful.",
    "example": "A team tracks the 95th-percentile completion time alongside the median to see whether a small group of users waits much longer.",
    "whyItMatters": "Use distribution measures to reveal uneven service experience instead of treating an average as typical for everyone.",
    "confusion": "A 95th percentile is a position in observed measurements, not a 95 percent confidence statement or future guarantee.",
    "related": [
      "tail-latency",
      "latency",
      "monitoring"
    ],
    "sources": []
  },
  {
    "id": "batch-processing",
    "term": "Batch processing",
    "fullName": "",
    "aliases": [],
    "category": "Economics and operations",
    "lessonIds": [
      "r5",
      "m8"
    ],
    "definition": "Processing a collection of work items together or through a scheduled asynchronous workflow, where each result does not need to be returned during a live interaction.",
    "explanation": "Batch workflows suit tasks such as preparing summaries overnight or analyzing a backlog. They can make scheduling and resource use more flexible. They still need completion deadlines, failure handling, and checks for missing or duplicate results. A batch system should expose progress so someone can act when the work does not finish.",
    "example": "A reporting team summarizes approved call transcripts overnight and reviews the completed report the next morning.",
    "whyItMatters": "Choose a processing style that matches the real deadline instead of paying for unnecessary immediacy.",
    "confusion": "Batch processing is not defined solely by large volume; the key distinction is how work is grouped and when results are needed.",
    "related": [
      "real-time-processing",
      "queue",
      "capacity-planning",
      "total-cost-of-ownership"
    ],
    "sources": []
  },
  {
    "id": "real-time-processing",
    "term": "Real-time processing",
    "fullName": "",
    "aliases": [],
    "category": "Economics and operations",
    "lessonIds": [
      "r5",
      "m5"
    ],
    "definition": "Handling incoming work quickly enough to meet the timing requirements of an ongoing interaction or event, rather than waiting for a later scheduled batch.",
    "explanation": "The acceptable delay depends on the use case. A live training conversation has different timing needs from an overnight summary. The complete workflow must meet those expectations, including queues, retrieval, and fallback behavior. Define what users see when the service cannot respond in time.",
    "example": "A practice-call assistant needs to respond within the conversation’s rhythm, so the pilot measures complete turn-taking delays.",
    "whyItMatters": "Set explicit timing requirements and test under realistic concurrent demand.",
    "confusion": "Real-time does not necessarily mean instantaneous, and an ordinary interactive service is not automatically a strict timing-guaranteed system.",
    "related": [
      "latency",
      "batch-processing",
      "queue",
      "tail-latency"
    ],
    "sources": []
  },
  {
    "id": "queue",
    "term": "Queue",
    "fullName": "",
    "aliases": [
      "queues"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "m5",
      "m8"
    ],
    "definition": "A managed collection of work waiting to be processed, used to organize demand when requests arrive faster than available workers can handle them immediately.",
    "explanation": "Queues can absorb bursts and separate the arrival of work from its execution. Waiting time becomes part of the user’s total delay. The workflow also needs rules for priority, retries, failures, and work that has become too old to be useful. Monitor backlog age as well as the number of waiting items.",
    "example": "A training platform queues uploaded recordings for analysis and shows users which jobs are still waiting.",
    "whyItMatters": "Plan for overload and give users a realistic view of when work will finish.",
    "confusion": "A queue smooths demand but does not create processing capacity or guarantee that every job succeeds.",
    "related": [
      "latency",
      "capacity-planning",
      "batch-processing",
      "quota"
    ],
    "sources": []
  },
  {
    "id": "quota",
    "term": "Quota",
    "fullName": "",
    "aliases": [
      "quotas"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "m8"
    ],
    "definition": "An allowed limit on resource use or capacity within a service or account, such as a maximum number of concurrent jobs or an allocation for a period.",
    "explanation": "Quotas constrain what an application can request even when it has budget available. The exact resource, interval, and enforcement behavior depend on the service. Plan demand against the applicable limits and define what happens when a limit is reached. Changes in workload may require a review with the service owner or provider.",
    "example": "A pilot cannot analyze all workshop videos at once because its permitted number of concurrent jobs is limited.",
    "whyItMatters": "Check service limits before promising volume or expanding a pilot.",
    "confusion": "A quota is an allowance or cap; it does not necessarily describe how quickly individual requests may arrive.",
    "related": [
      "rate-limit",
      "capacity-planning",
      "queue",
      "hosted-model-service"
    ],
    "sources": []
  },
  {
    "id": "rate-limit",
    "term": "Rate limit",
    "fullName": "",
    "aliases": [
      "rate limits"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "m7"
    ],
    "definition": "A restriction on how much work or how many requests may be submitted during a specified time interval, used to control the pace of service usage.",
    "explanation": "Limits may apply to requests, tokens, or other units. A sudden burst can reach a rate limit even when the total daily workload is modest. The application needs suitable pacing, retry behavior, or a visible fallback. Evaluate those responses because uncontrolled retries can worsen the overload.",
    "example": "A document assistant spreads a large set of requests over time instead of repeatedly retrying them all at once.",
    "whyItMatters": "Include request pacing and limit handling in capacity and reliability reviews.",
    "confusion": "A rate limit is not the same as the model’s response speed or a promise of available capacity.",
    "related": [
      "quota",
      "queue",
      "capacity-planning",
      "latency"
    ],
    "sources": []
  },
  {
    "id": "capacity-planning",
    "term": "Capacity planning",
    "fullName": "",
    "aliases": [],
    "category": "Economics and operations",
    "lessonIds": [
      "r5"
    ],
    "definition": "Estimating and preparing the people, infrastructure, and service resources needed to meet expected demand and timing requirements, including peaks and failure conditions.",
    "explanation": "AI demand depends on more than the number of users. Input size, modality, model choice, concurrency, and review needs all affect the load. Measure representative work and account for provider limits and slow requests. Revisit the plan as the pilot expands rather than extrapolating from a single successful demonstration.",
    "example": "A manager estimates peak workshop uploads, analysis time, and reviewer hours before enrolling more training teams.",
    "whyItMatters": "Align rollout promises with both technical throughput and human operating capacity.",
    "confusion": "A system that works for one user is not proven ready for simultaneous demand from an entire organization.",
    "related": [
      "quota",
      "queue",
      "tail-latency",
      "human-review"
    ],
    "sources": []
  },
  {
    "id": "orchestration",
    "term": "Orchestration",
    "fullName": "",
    "aliases": [],
    "category": "Economics and operations",
    "lessonIds": [
      "m7"
    ],
    "definition": "Coordinating the sequence and connections between models, tools, data sources, and review steps so they work together as a complete application workflow.",
    "explanation": "A multimodal task may transcribe audio, inspect images, retrieve context, and then assemble a response. Orchestration determines which stages run, what information passes between them, and how failures are handled. Each transition can introduce delay or an error. Review the complete process and its fallback paths rather than judging each model separately.",
    "example": "A training application combines a transcript and selected video observations before producing a coaching summary for review.",
    "whyItMatters": "Assign ownership for the connections, failure paths, and final user result.",
    "confusion": "Orchestration is workflow coordination; it does not mean that a model should choose every action autonomously.",
    "related": [
      "agent",
      "trace",
      "model-routing",
      "multimodal-ai"
    ],
    "sources": []
  },
  {
    "id": "trace",
    "term": "Trace",
    "fullName": "",
    "aliases": [
      "traces"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "f3",
      "r7",
      "m8"
    ],
    "definition": "A connected record of the steps taken to complete one request, helping teams inspect which components ran, how long they took, and where failures occurred.",
    "explanation": "A trace can connect retrieval, model calls, tool actions, and other stages of the same workflow. It supports investigation of delays and errors across component boundaries. Record only the diagnostic content needed and protect sensitive inputs or outputs. A trace shows observable operations, not a complete explanation of a model’s internal reasoning.",
    "example": "A support engineer finds that a slow answer spent most of its time waiting for retrieval rather than generating text.",
    "whyItMatters": "Provide enough operating visibility to investigate failures without making customer content broadly accessible.",
    "confusion": "A trace is not guaranteed access to the model’s hidden reasoning or proof that each recorded step was correct.",
    "related": [
      "monitoring",
      "latency",
      "orchestration",
      "retention"
    ],
    "sources": []
  },
  {
    "id": "monitoring",
    "term": "Monitoring",
    "fullName": "",
    "aliases": [
      "performance monitoring"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "f2",
      "r5",
      "r8",
      "m7"
    ],
    "definition": "Ongoing observation of a running service’s behavior, such as quality, failures, response time, usage, and cost, so changes and problems can be detected and acted on.",
    "explanation": "Monitoring connects production behavior to operating decisions. It should cover the whole user task as well as important components. Select measures and alerts that have a clear owner and response. Use reviewed failures to improve evaluation rather than treating a successful launch test as permanent evidence of reliability.",
    "example": "A service owner notices a rise in unsupported policy answers after a document update and starts an investigation.",
    "whyItMatters": "Name who watches the service, what triggers action, and how the team will respond.",
    "confusion": "Collecting dashboards and logs is not effective monitoring if nobody reviews or acts on the signals.",
    "related": [
      "trace",
      "regression",
      "stop-condition",
      "source-freshness"
    ],
    "sources": []
  },
  {
    "id": "prototype",
    "term": "Prototype",
    "fullName": "",
    "aliases": [
      "prototypes"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "r6",
      "m7",
      "m8"
    ],
    "definition": "An early implementation built to explore feasibility, user needs, or a design assumption, usually with a narrower scope and fewer operating guarantees than a production service.",
    "explanation": "A prototype helps answer a specific question quickly. It may use fixed examples, limited users, or manual steps that would not suit wider operation. Record those limitations so a successful demonstration is interpreted correctly. Before expansion, evaluate real inputs, permissions, failures, costs, and support needs.",
    "example": "A team demonstrates a policy assistant on a small approved document set to test whether staff find evidence-linked answers useful.",
    "whyItMatters": "Decide what the prototype has proved and what still requires a pilot or operating review.",
    "confusion": "A convincing prototype is not evidence that the system is ready for unrestricted production use.",
    "related": [
      "pilot-charter",
      "acceptance-criteria",
      "capacity-planning",
      "evaluation-set"
    ],
    "sources": []
  },
  {
    "id": "pilot-charter",
    "term": "Pilot charter",
    "fullName": "",
    "aliases": [
      "pilot brief",
      "charter"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "f8",
      "r8"
    ],
    "definition": "A short agreement defining a limited trial’s purpose, users, scope, owners, measures, constraints, and decision rules for continuing, changing, expanding, or stopping it.",
    "explanation": "The charter connects an AI idea to a testable business objective. It identifies permitted data, responsible reviewers, budget, and success criteria. It should also name escalation paths and non-negotiable stop conditions. Use it to guide the review at the end of the trial rather than expanding by default.",
    "example": "A sponsor records a six-week internal support trial with a policy owner, review process, cost limit, and decision date.",
    "whyItMatters": "Make responsibilities and the expansion decision explicit before the pilot begins.",
    "confusion": "A pilot charter is a decision agreement, not a certification that the system is safe or effective.",
    "related": [
      "acceptance-criteria",
      "stop-condition",
      "risk-register",
      "baseline"
    ],
    "sources": []
  },
  {
    "id": "stop-condition",
    "term": "Stop condition",
    "fullName": "",
    "aliases": [
      "stop conditions"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "f8",
      "r8",
      "m8"
    ],
    "definition": "An agreed incident, result, or threshold that pauses a pilot or service, restricts its use, or triggers another defined response before further harm or waste occurs.",
    "explanation": "Stop conditions should be specific enough for the operating team to recognize and act on. They may address unauthorized data exposure, critical unsupported claims, repeated failures, or cost overruns. Name who can stop the workflow and what evidence is needed to resume. Test that the response is operationally possible.",
    "example": "A knowledge-assistant pilot pauses expansion after a test retrieves a document outside the user’s permissions.",
    "whyItMatters": "Prevent strong averages or schedule pressure from overriding critical failures.",
    "confusion": "A stop condition is useful only when it has an owner and a workable response, not just a statement in a slide deck.",
    "related": [
      "pilot-charter",
      "rollback",
      "monitoring",
      "acceptance-criteria"
    ],
    "sources": []
  },
  {
    "id": "rollback",
    "term": "Rollback",
    "fullName": "",
    "aliases": [
      "roll back"
    ],
    "category": "Economics and operations",
    "lessonIds": [
      "m8"
    ],
    "definition": "Returning a system or configuration to a previously accepted version after a harmful change, as part of restoring a usable and controlled service.",
    "explanation": "A rollback may restore a model selection, prompt version, application release, or source configuration. The team needs known versions, a tested procedure, and a decision owner. Check whether the older version still fits current data and requirements. Rolling back software does not necessarily reverse actions already taken or information already exposed.",
    "example": "After a prompt update removes a required escalation step, the service owner restores the previous prompt while investigating the regression.",
    "whyItMatters": "Prepare a recovery path before release and understand what it can and cannot undo.",
    "confusion": "Rollback is not a complete undo button for messages sent, records changed, or data disclosed.",
    "related": [
      "regression",
      "prompt-version",
      "stop-condition",
      "monitoring"
    ],
    "sources": []
  },
  {
    "id": "modality",
    "term": "Modality",
    "fullName": "",
    "aliases": [
      "modalities"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m1",
      "m6",
      "m8"
    ],
    "definition": "A type of information that a system receives or produces, such as written language, images, sound, or video. Different modalities carry different evidence about the same situation.",
    "explanation": "A photograph can show a damaged parcel while a written complaint explains what the customer expected. Combining them can improve a decision when both are relevant. Each additional modality also introduces capture, storage, access, and evaluation needs. Choose inputs according to the question, rather than collecting everything available.",
    "example": "A returns manager includes a package photo and order description in a damage-review pilot, but excludes unrelated call recordings.",
    "whyItMatters": "Input choices determine the evidence available and the operating responsibilities your team accepts.",
    "confusion": "Adding more types of data does not automatically produce a more accurate or useful answer.",
    "related": [
      "multimodal-ai",
      "sensitive-data",
      "evaluation-set"
    ],
    "sources": []
  },
  {
    "id": "multimodal-ai",
    "term": "Multimodal AI",
    "fullName": "",
    "aliases": [
      "multimodal model",
      "multimodal system"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m1"
    ],
    "definition": "AI that works with more than one type of information, such as text and images or speech and video, in its inputs, outputs, or both.",
    "explanation": "A multimodal workflow connects information across formats. It might answer a question about a photograph or combine a call recording with an order record. Models and applications differ in which combinations they support. Evaluate the complete combined task, including missing and contradictory inputs, because success on each format separately is insufficient.",
    "example": "A service team asks an assistant to compare a customer’s photo with a written installation checklist before suggesting the next review step.",
    "whyItMatters": "You must select useful input combinations and verify that the combined result supports the business decision.",
    "confusion": "A system that accepts several file types does not necessarily understand their relationship correctly.",
    "related": [
      "modality",
      "vision-language-model",
      "orchestration"
    ],
    "sources": []
  },
  {
    "id": "computer-vision",
    "term": "Computer vision",
    "fullName": "",
    "aliases": [
      "vision tasks"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m2"
    ],
    "definition": "A field of AI that analyzes images or video to identify patterns, objects, text, or relationships and produce information people or other systems can use.",
    "explanation": "Vision includes several tasks with different outputs. A classifier labels a whole picture, a detector locates objects, and segmentation identifies regions. Optical character recognition extracts visible text. Select the task according to the action a reviewer needs to take, and test the actual lighting, camera positions, and objects in the workflow.",
    "example": "A warehouse manager requests marked damage locations on package photos instead of a general damaged-or-intact label.",
    "whyItMatters": "A technically successful vision model can still deliver the wrong output for the operational task.",
    "confusion": "Computer vision is an analysis field; it is not the same activity as generating new images.",
    "related": [
      "image-classification",
      "object-detection",
      "segmentation",
      "optical-character-recognition"
    ],
    "sources": []
  },
  {
    "id": "image-classification",
    "term": "Image classification",
    "fullName": "",
    "aliases": [],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m2"
    ],
    "definition": "Assigning one or more category labels to an image as a whole, such as invoice, product photo, or damaged package, based on its visual content.",
    "explanation": "Classification answers what kind of image this is. The categories and review threshold must fit the workflow, and some images may deserve several labels or an uncertain result. A label does not identify the exact location of an object or defect. Test confusing categories as well as obvious examples.",
    "example": "A document team routes incoming images into receipts, invoices, and other documents, with an exception queue for uncertain cases.",
    "whyItMatters": "Choose categories that lead to useful actions and give ambiguous inputs a defined review path.",
    "confusion": "Classification does not provide the object locations supplied by detection or the pixel regions supplied by segmentation.",
    "related": [
      "computer-vision",
      "object-detection",
      "zero-shot-classification"
    ],
    "sources": []
  },
  {
    "id": "object-detection",
    "term": "Object detection",
    "fullName": "",
    "aliases": [
      "detection",
      "detection models",
      "object detections"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m2",
      "m3",
      "m5",
      "m6"
    ],
    "definition": "Identifying objects in an image and estimating where they are, commonly by placing labeled boxes around them. Detection can be applied to individual video frames.",
    "explanation": "A detector returns candidate objects, locations, and often confidence scores. Those outputs can help a reviewer locate an issue, but missed objects and false detections remain possible. Small, obscured, or unfamiliar objects can be especially difficult. Repeated detection in video does not by itself establish which observations belong to the same object.",
    "example": "A warehouse pilot marks possible dents in parcel photos so inspectors can review the relevant area.",
    "whyItMatters": "Detection quality affects missed issues, review workload, and whether downstream counts can be trusted.",
    "confusion": "A bounding box is not an exact outline, and detections across frames are not automatically unique objects.",
    "related": [
      "segmentation",
      "tracking",
      "false-positive",
      "false-negative"
    ],
    "sources": []
  },
  {
    "id": "segmentation",
    "term": "Segmentation",
    "fullName": "",
    "aliases": [
      "segmentation models",
      "image segmentation"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m2",
      "m3"
    ],
    "definition": "Dividing an image into meaningful regions, identifying which pixels belong to an object or category. It provides a more detailed spatial result than a bounding box.",
    "explanation": "Segmentation can separate a product from its background or mark a damaged region. Different approaches label categories or distinguish individual objects. Boundaries may still be wrong around reflections, transparent materials, or overlapping items. A precise-looking outline therefore needs evaluation against the use case rather than visual polish alone.",
    "example": "A catalog team checks whether automatically isolated furniture images preserve thin chair legs before approving them for publication.",
    "whyItMatters": "Boundary mistakes can affect measurements, editing quality, or the evidence shown to reviewers.",
    "confusion": "A segmented region indicates an estimated area; it does not by itself establish what caused a defect.",
    "related": [
      "object-detection",
      "sam",
      "computer-vision"
    ],
    "sources": []
  },
  {
    "id": "optical-character-recognition",
    "term": "Optical character recognition",
    "fullName": "",
    "aliases": [
      "OCR"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m2"
    ],
    "definition": "Technology that extracts visible writing from images or scanned documents into machine-readable text. The extracted text is an interpretation that may contain errors or missing content.",
    "explanation": "OCR makes photographed receipts and scanned forms searchable or easier to process. Its quality depends on handwriting, layout, language, resolution, and image clarity. A misread digit can matter more than many correctly extracted words. Keep the original document available and check consequential fields before acting on the extracted text.",
    "example": "An expense team extracts invoice amounts but requires a reviewer to confirm the total and supplier against the scan.",
    "whyItMatters": "Field-level accuracy and review effort determine whether document automation actually saves time.",
    "confusion": "OCR extracts visible text; it does not verify that the document’s statements are true.",
    "related": [
      "resolution",
      "preprocessing",
      "human-review"
    ],
    "sources": []
  },
  {
    "id": "visual-search",
    "term": "Visual search",
    "fullName": "",
    "aliases": [
      "image search"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m2"
    ],
    "definition": "Finding candidate images or items using visual content, often through similarity representations, with an image or a text description serving as the search request.",
    "explanation": "A visual search system compares representations rather than relying only on filenames or tags. It can surface items with similar appearance or scenes matching a description. Similarity may reflect color or background instead of the business attribute that matters. Combine results with authoritative records and test difficult near-matches.",
    "example": "A buyer searches a product catalog for red carry-on luggage, then checks dimensions and stock in the catalog record.",
    "whyItMatters": "The useful measure is whether users find the correct item, not whether returned images look plausible.",
    "confusion": "Visual similarity does not prove product identity, availability, authenticity, or permission to use an image.",
    "related": [
      "embedding",
      "clip",
      "semantic-search"
    ],
    "sources": []
  },
  {
    "id": "vision-transformer",
    "term": "Vision transformer",
    "fullName": "",
    "aliases": [
      "vision transformers",
      "ViT"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m3"
    ],
    "definition": "A model architecture that represents an image as a sequence of patches and uses relationships between those patches to process visual information.",
    "explanation": "Image patches act as input units, and position information helps preserve their arrangement. Attention allows a model to combine local details with broader context. The architecture can support different vision tasks, depending on its training and added components. Its name alone tells you little about performance on your organization’s images.",
    "example": "A manufacturer evaluates a vision model on its own equipment photographs instead of assuming general-image results will transfer.",
    "whyItMatters": "Architecture is useful context for technical discussions, while domain-specific evaluation remains the management decision.",
    "confusion": "A vision transformer is an architecture, not a single product or a guarantee of human-like visual understanding.",
    "related": [
      "transformer",
      "image-patch",
      "attention",
      "computer-vision"
    ],
    "sources": []
  },
  {
    "id": "image-patch",
    "term": "Image patch",
    "fullName": "",
    "aliases": [],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m3"
    ],
    "definition": "A small region of an image treated as an input unit by some vision models. A collection of patches lets the model process spatial detail and broader relationships.",
    "explanation": "Patch-based processing breaks a picture into manageable pieces and represents each piece numerically. Position information helps the model relate those pieces to their original locations. Resizing and patch size influence which details remain available. If a tiny label becomes unreadable during preparation, later reasoning cannot reliably restore the missing evidence.",
    "example": "A quality team checks that preprocessing preserves small warning labels before testing a model that reads equipment photos.",
    "whyItMatters": "Input preparation can remove the very detail the business task depends on.",
    "confusion": "A patch is a region of the input image, not a software update or necessarily a recognized object.",
    "related": [
      "vision-transformer",
      "resolution",
      "preprocessing"
    ],
    "sources": []
  },
  {
    "id": "zero-shot-classification",
    "term": "Zero-shot classification",
    "fullName": "",
    "aliases": [],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m3"
    ],
    "definition": "Choosing among labels or descriptions without additional task-specific training examples for those labels. The model relies on patterns learned earlier, so accuracy still requires testing.",
    "explanation": "A team may supply descriptions such as damaged packaging and intact packaging to a model that relates images and language. Changing those descriptions can change results. Unfamiliar categories or ambiguous examples can fail even when no training step is required. Compare proposed labels against reviewed examples from the real workflow.",
    "example": "A retail team tests descriptive product categories on a reviewed image set before using them to route catalog work.",
    "whyItMatters": "Fast setup can make a pilot convenient, but the evaluation burden remains.",
    "confusion": "Zero-shot means no task-specific example training for the supplied labels; it does not mean zero prior training or zero errors.",
    "related": [
      "zero-shot-prompting",
      "clip",
      "image-classification"
    ],
    "sources": []
  },
  {
    "id": "vision-language-model",
    "term": "Vision-language model",
    "fullName": "",
    "aliases": [
      "vision-language models",
      "VLM"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m3"
    ],
    "definition": "A model that connects visual information with language, supporting tasks such as image description, visual questions, image-text matching, or classification, depending on the model.",
    "explanation": "Some models compare images and descriptions; others generate text about an image. These are different capabilities, even though both connect vision and language. A generated answer can mix visible evidence with plausible assumptions. Test whether the model admits when a requested fact cannot be established from the supplied picture.",
    "example": "A catalog assistant describes a brown chair but leaves material and warranty to verified product records.",
    "whyItMatters": "You need to know which outputs are supported and which claims require another source of evidence.",
    "confusion": "Not every vision-language model generates conversation, and fluent visual descriptions are not automatically factual.",
    "related": [
      "clip",
      "florence-2",
      "image-caption",
      "multimodal-ai"
    ],
    "sources": []
  },
  {
    "id": "image-generation",
    "term": "Image generation",
    "fullName": "",
    "aliases": [
      "image-generation",
      "visual generation"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "f3",
      "m3"
    ],
    "definition": "Creating a new image from learned patterns, guided by instructions, reference images, or other inputs. The result is generated content that must be checked against its intended use.",
    "explanation": "Image generation helps teams explore visual concepts, illustrations, and draft assets. Models can invent details, distort text, or change a product’s appearance while producing a polished result. Review the output against the brief, approved references, and factual requirements. Keep generated scenes distinguishable from evidence of actual events.",
    "example": "A marketing team generates internal campaign concepts and reviews every product label before selecting a direction.",
    "whyItMatters": "Budget for iteration, approval, and correction rather than treating the first attractive output as finished work.",
    "confusion": "A convincing generated image is not a photograph of a real event or proof that a product can be manufactured.",
    "related": [
      "diffusion",
      "stable-diffusion",
      "synthetic-media",
      "provenance"
    ],
    "sources": []
  },
  {
    "id": "resolution",
    "term": "Resolution",
    "fullName": "",
    "aliases": [
      "image resolution"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m2"
    ],
    "definition": "The level of spatial detail represented in an image, commonly described by its pixel dimensions. More pixels can preserve useful detail, but do not guarantee a clear or informative picture.",
    "explanation": "Resolution influences whether small writing or defects remain visible. Blur, glare, poor focus, and compression can still make a large image unusable. Resizing for a model can remove information that was present in the original. Choose and test input dimensions according to the smallest important feature in the task.",
    "example": "An inspection pilot checks whether a resized photo still shows a hairline crack before accepting the model’s assessment.",
    "whyItMatters": "File handling decisions can determine whether the system ever receives the evidence it needs.",
    "confusion": "Increasing pixel dimensions after capture does not reliably recover factual detail that was never recorded.",
    "related": [
      "preprocessing",
      "image-patch",
      "media-compression"
    ],
    "sources": []
  },
  {
    "id": "preprocessing",
    "term": "Preprocessing",
    "fullName": "",
    "aliases": [
      "pre-processing"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m2"
    ],
    "definition": "Preparing inputs before analysis, such as resizing an image, correcting orientation, or adjusting an audio format, so the system receives usable and consistent data.",
    "explanation": "Preparation can make a workflow more reliable, but it can also remove or alter evidence. Cropping may discard a warning label; audio conversion may combine speakers into one stream. Apply consistent preparation during testing and operation. Record changes so quality regressions can be traced to the input pipeline as well as the model.",
    "example": "A receipt-processing team corrects image rotation while checking that totals near the edges are not cropped away.",
    "whyItMatters": "Changes before the model can create failures even when the model itself is unchanged.",
    "confusion": "Preprocessing is input preparation; it is not model training or a guarantee that poor evidence becomes usable.",
    "related": [
      "resolution",
      "audio-channel",
      "regression"
    ],
    "sources": []
  },
  {
    "id": "image-caption",
    "term": "Image caption",
    "fullName": "",
    "aliases": [
      "image captions"
    ],
    "category": "Vision and multimodal",
    "lessonIds": [
      "m3"
    ],
    "definition": "A written description of an image’s visible content. A generated caption is a proposed interpretation and should distinguish observable details from assumptions about unseen facts.",
    "explanation": "Captions can support cataloging, search, or accessibility descriptions. Their usefulness depends on the audience and the context in which the image appears. A model may confidently invent a material, identity, or action that the picture does not establish. Review meaningful omissions and unsupported details, especially where users rely on the description.",
    "example": "A content editor changes a generated caption from leather chair to brown chair because the photo does not prove the material.",
    "whyItMatters": "An inaccurate description can mislead users even if the image itself is correct.",
    "confusion": "An image caption describes a still image; synchronized captions represent speech and relevant sound over time.",
    "related": [
      "vision-language-model",
      "captions",
      "hallucination"
    ],
    "sources": []
  },
  {
    "id": "transcription",
    "term": "Transcription",
    "fullName": "",
    "aliases": [
      "transcribe",
      "transcribing"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m1",
      "m4",
      "m5"
    ],
    "definition": "A written record of spoken words, produced by a person or speech-recognition system. Automated transcripts are proposed records that may omit words, mishear names, or change meaning.",
    "explanation": "A transcript makes a recording easier to search and review. Timestamps can connect the text to the original audio for checking. Errors in negation, amounts, names, or instructions may matter more than the overall word accuracy. Confirm consequential details before using the transcript to trigger an action.",
    "example": "A support supervisor checks the recording when a transcript says cancel but the customer may have said do not cancel.",
    "whyItMatters": "Meaning-changing errors can produce costly actions even in an otherwise readable transcript.",
    "confusion": "Transcription records speech in text; translation changes its language, and summarization selects or condenses its content.",
    "related": [
      "speech-recognition",
      "timestamp",
      "translation"
    ],
    "sources": []
  },
  {
    "id": "speech-recognition",
    "term": "Speech recognition",
    "fullName": "",
    "aliases": [
      "speech-recognition"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m4"
    ],
    "definition": "Technology that converts spoken language into text. Its performance depends on factors such as language, accent, background noise, recording quality, and overlapping speakers.",
    "explanation": "A recognition system estimates which words were spoken from the audio signal. It can support transcription, captions, and spoken commands. A neat text result does not establish that names or instructions were heard correctly. Evaluate realistic recordings and define confirmation steps for commands that change customer records or other consequential information.",
    "example": "A service team tests its transcription pilot on calls from different regions and checks product names separately.",
    "whyItMatters": "Capture conditions and important error types affect whether speech automation is useful in practice.",
    "confusion": "Speech recognition does not establish a speaker’s identity, intent, or emotional state.",
    "related": [
      "transcription",
      "whisper",
      "captions"
    ],
    "sources": []
  },
  {
    "id": "translation",
    "term": "Translation",
    "fullName": "",
    "aliases": [
      "translated"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m4"
    ],
    "definition": "Expressing content in a different language while trying to preserve its meaning. In an audio workflow, translation may follow or accompany speech recognition and introduce additional interpretation errors.",
    "explanation": "An inaccurate transcript can lead to an inaccurate translation even when the translation step works as intended. Idioms, product names, and policy language can also be difficult to preserve. Review task-critical meaning with appropriate language expertise. Keep the source available when reviewers need to resolve an ambiguity.",
    "example": "A training team checks that a translated safety instruction preserves the original prohibition rather than only sounding fluent.",
    "whyItMatters": "A readable translation can still change an obligation, amount, or action that matters to the business.",
    "confusion": "Fluency in the target language is not proof of faithful meaning or suitability for every audience.",
    "related": [
      "transcription",
      "human-review",
      "correctness"
    ],
    "sources": []
  },
  {
    "id": "sample-rate",
    "term": "Sample rate",
    "fullName": "",
    "aliases": [
      "sampling rate"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m4"
    ],
    "definition": "The number of times per second a digital audio system measures a sound signal. It influences which frequency information can be represented and must suit the processing workflow.",
    "explanation": "Audio is stored as a sequence of measurements. A model or tool may expect those measurements at a particular rate, so conversion may be needed. Resampling changes the representation, not the original recording conditions. Increasing the rate cannot recover a sound that the microphone or earlier recording process failed to capture.",
    "example": "A team standardizes call recordings to the format its transcription service expects and retests the converted audio.",
    "whyItMatters": "Incorrect or inconsistent audio preparation can degrade model results before analysis begins.",
    "confusion": "Sample rate describes measurements over time; bit depth describes the precision of each measurement.",
    "related": [
      "bit-depth",
      "preprocessing",
      "audio-channel"
    ],
    "sources": []
  },
  {
    "id": "bit-depth",
    "term": "Bit depth",
    "fullName": "",
    "aliases": [
      "measurement precision"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m4"
    ],
    "definition": "The number of bits used to represent each sample in uncompressed digital audio, influencing the precision with which signal amplitude is stored.",
    "explanation": "Bit depth affects the range of amplitude levels that can be represented. It is one part of audio quality alongside sample rate, recording equipment, noise, and processing. Increasing stored precision after a poor recording does not restore lost information. Select an appropriate format and validate the actual sound reaching the model.",
    "example": "A facilities team compares recordings made with its actual microphones rather than choosing files solely by a larger bit-depth number.",
    "whyItMatters": "Format specifications are useful only when they preserve evidence relevant to the task.",
    "confusion": "Bit depth is not audio sample rate, file bitrate, or the bit precision used to quantize a model.",
    "related": [
      "sample-rate",
      "media-compression",
      "quantization"
    ],
    "sources": []
  },
  {
    "id": "audio-channel",
    "term": "Audio channel",
    "fullName": "",
    "aliases": [
      "channels"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m4"
    ],
    "definition": "A separate stream of audio information in a recording, such as a left or right stereo channel or independently recorded participants in a call.",
    "explanation": "Channels can preserve useful separation between sound sources. Combining them may simplify processing but make overlapping speakers harder to inspect. Stereo channels do not necessarily correspond to two different people. Check what each channel actually contains and keep preparation consistent with the tested workflow.",
    "example": "A contact-center team preserves separate caller and agent recordings when reviewing interruptions instead of mixing them immediately.",
    "whyItMatters": "Channel handling can affect transcription quality, evidence review, storage, and access decisions.",
    "confusion": "The number of channels is not automatically the number of speakers in a recording.",
    "related": [
      "preprocessing",
      "transcription",
      "sample-rate"
    ],
    "sources": []
  },
  {
    "id": "media-compression",
    "term": "Media compression",
    "fullName": "",
    "aliases": [],
    "category": "Audio and video",
    "lessonIds": [
      "m2",
      "m4"
    ],
    "definition": "Reducing the storage or transmission size of image, audio, or video files. Some methods preserve the original data, while lossy methods discard information to achieve smaller files.",
    "explanation": "Compression can reduce upload time and storage needs. It can also make small text unreadable or obscure quiet sounds when information is discarded. A workflow should test the actual formats and compression settings used in daily operation. Keep suitable original evidence available when reviewers need to inspect uncertain results.",
    "example": "A claims team finds that aggressively compressed photos hide fine scratches and changes its upload settings.",
    "whyItMatters": "Savings in bandwidth may be offset by missed evidence and increased review effort.",
    "confusion": "Media compression changes files; model compression changes the model used to process them.",
    "related": [
      "model-compression",
      "resolution",
      "preprocessing"
    ],
    "sources": []
  },
  {
    "id": "audio-embedding",
    "term": "Audio embedding",
    "fullName": "",
    "aliases": [
      "audio embeddings"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m4"
    ],
    "definition": "A compact numerical representation of sound that helps compare recordings, find similar audio, or connect audio with descriptions, depending on the model used.",
    "explanation": "An audio embedding captures patterns useful for a particular learned task. Search systems compare these representations to return candidate matches. Similarity may relate to background noise or recording conditions rather than the event a user cares about. Evaluate returned recordings against reviewed examples and keep a way to inspect the original sound.",
    "example": "A maintenance team searches for recordings similar to a rattling motor, then asks a technician to inspect the matches.",
    "whyItMatters": "Retrieval can make review faster without replacing diagnosis or evidence checking.",
    "confusion": "An embedding is not a transcript, and a close match does not prove the same cause or event.",
    "related": [
      "embedding",
      "clap",
      "sound-classification"
    ],
    "sources": []
  },
  {
    "id": "sound-classification",
    "term": "Sound classification",
    "fullName": "",
    "aliases": [
      "audio classification"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m4"
    ],
    "definition": "Assigning categories to audio, such as speech, alarm, engine noise, or music. It can identify non-speech events that transcription alone would not describe.",
    "explanation": "A classifier proposes labels based on acoustic patterns. Its categories and time windows must fit the operational event being detected. Background sounds, overlapping events, and unfamiliar equipment may produce errors. Review both missed important sounds and unnecessary alerts before relying on the labels for routing.",
    "example": "A facilities pilot flags recordings that may contain a smoke alarm so an operator can verify the event.",
    "whyItMatters": "Useful categories and an appropriate review process matter more than a broad list of detectable sounds.",
    "confusion": "Sound classification is not necessarily speech recognition or a reliable diagnosis of machinery faults.",
    "related": [
      "audio-embedding",
      "speech-recognition",
      "false-positive"
    ],
    "sources": []
  },
  {
    "id": "voice-intelligence",
    "term": "Voice intelligence",
    "fullName": "",
    "aliases": [
      "audio intelligence"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m5"
    ],
    "definition": "Analysis of spoken interactions that proposes information beyond a transcript, such as topics, explicit requests, follow-up actions, or uncertain sentiment signals.",
    "explanation": "These systems may combine recognized words with features of the recording. Some outputs, such as a quoted request, are easier to verify than inferred motivation or emotion. Tone varies with language, individual expression, context, and capture conditions. Use interpretations to organize review and check the underlying interaction before consequential decisions.",
    "example": "A supervisor reviews calls tagged as requiring follow-up and confirms the customer’s actual request before assigning an action.",
    "whyItMatters": "The team needs clear boundaries between observable evidence and uncertain interpretation.",
    "confusion": "A sentiment label is not a dependable measurement of a person’s internal feelings or intentions.",
    "related": [
      "sentiment-signal",
      "transcription",
      "human-review"
    ],
    "sources": []
  },
  {
    "id": "sentiment-signal",
    "term": "Sentiment signal",
    "fullName": "",
    "aliases": [
      "sentiment",
      "sentiment labels"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m5"
    ],
    "definition": "An uncertain interpretation of positive, negative, or other evaluative tone in language or audio. It is a model-produced signal rather than proof of a person’s feelings.",
    "explanation": "Sentiment systems infer patterns from language and sometimes audio. Sarcasm, cultural differences, context, and recording quality can change what the system predicts. The same label can mean different things across tasks or populations. Review concrete behavior and the full interaction rather than using the signal alone to judge an individual.",
    "example": "A service manager inspects the actual complaint behind a negative label instead of treating the label as an employee-performance score.",
    "whyItMatters": "Overinterpreting a weak signal can produce unfair or incorrect management decisions.",
    "confusion": "Negative wording, frustration, and intent are different concepts; one predicted label does not establish all three.",
    "related": [
      "voice-intelligence",
      "bias",
      "human-review"
    ],
    "sources": []
  },
  {
    "id": "moderation",
    "term": "Moderation",
    "fullName": "",
    "aliases": [
      "content moderation",
      "audio moderation",
      "video moderation"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m2",
      "m5",
      "m6",
      "m8"
    ],
    "definition": "A process for identifying and handling content that may violate a defined policy, using automated checks, human review, or both across text, images, audio, or video.",
    "explanation": "A moderation model can flag possible issues, but the organization must define the relevant policy and response. Missed issues and unnecessary blocks have different consequences. Preserve appropriate evidence, route disputed cases to reviewers, and evaluate realistic edge cases. A consistent report format improves routing without proving that a flag is correct.",
    "example": "A training platform flags a possible disclosure of customer information and sends the timestamp to an authorized reviewer.",
    "whyItMatters": "The policy, threshold, appeal route, and review owner shape the impact of automated flags.",
    "confusion": "Moderation is an operating workflow, not a universal definition of acceptable content or a guarantee of safety.",
    "related": [
      "false-positive",
      "false-negative",
      "escalation",
      "retention"
    ],
    "sources": []
  },
  {
    "id": "timestamp",
    "term": "Timestamp",
    "fullName": "",
    "aliases": [
      "timestamps"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m4",
      "m5",
      "m6"
    ],
    "definition": "A marker identifying a point or interval in a recording. It connects a transcript, search result, or automated flag to the moment a reviewer should inspect.",
    "explanation": "Timestamps reduce the effort needed to locate evidence in long recordings. Their usefulness depends on accurate alignment with the media and sufficient surrounding context. A flag at one moment may need a wider interval to interpret what happened. Check synchronization after editing, trimming, or converting files.",
    "example": "A supervisor opens the few seconds around a flagged phrase rather than scanning a full hour-long recording.",
    "whyItMatters": "Reviewable evidence makes automated results easier to confirm, correct, and explain.",
    "confusion": "A timestamp points to evidence; it does not establish that the accompanying interpretation is correct.",
    "related": [
      "transcription",
      "video-search",
      "moderation"
    ],
    "sources": []
  },
  {
    "id": "frame-sampling",
    "term": "Frame sampling",
    "fullName": "",
    "aliases": [
      "sampled frames"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m6"
    ],
    "definition": "Selecting only some frames from a video for analysis. It can reduce processing effort but may miss events that occur between the selected frames.",
    "explanation": "A system might inspect frames at regular intervals or choose them using another rule. The rule determines which moments the model can observe. Short or rapidly changing events may be absent from the sampled input. Test coverage against the duration and consequences of the events the business needs to detect.",
    "example": "A safety team rejects a ten-second sampling interval after a one-second incident is missed in its pilot.",
    "whyItMatters": "Lower processing cost must be evaluated alongside the risk of missing important evidence.",
    "confusion": "A summary of selected frames is not proof that the system observed everything in the recording.",
    "related": [
      "temporal-understanding",
      "false-negative",
      "timestamp"
    ],
    "sources": []
  },
  {
    "id": "tracking",
    "term": "Tracking",
    "fullName": "",
    "aliases": [
      "object tracking"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m6"
    ],
    "definition": "Following visual points or objects across video frames to estimate how they move or persist over time, instead of treating every observation as a new item.",
    "explanation": "Tracking links observations across a sequence. Objects can be confused when they look alike, overlap, leave the frame, or reappear. Business counting also needs a rule defining the event, such as crossing a line once. Evaluate identity errors separately from whether objects were detected in individual frames.",
    "example": "A conveyor pilot counts each suitcase crossing a boundary once rather than adding every frame-level detection.",
    "whyItMatters": "Without appropriate tracking and event rules, repeated observations can inflate operational counts.",
    "confusion": "Object detection locates an item in a frame; tracking attempts to maintain its identity or motion across frames.",
    "related": [
      "object-detection",
      "cotracker",
      "occlusion"
    ],
    "sources": []
  },
  {
    "id": "temporal-understanding",
    "term": "Temporal understanding",
    "fullName": "",
    "aliases": [],
    "category": "Audio and video",
    "lessonIds": [
      "m6"
    ],
    "definition": "Interpreting sequence, motion, duration, and change across a recording. It concerns how events relate over time rather than what appears in a single frame.",
    "explanation": "Some questions depend on whether one action happened before another or how long an event lasted. Isolated images can omit the information needed to answer those questions. Video representations and sequence models may help, but their sampled inputs and evaluation still matter. Test scenarios where changing the order changes the correct interpretation.",
    "example": "An operations team checks whether a worker closed a guard before starting a machine, rather than asking only whether both actions appear.",
    "whyItMatters": "Time-sensitive decisions require evidence that the system can distinguish order and duration.",
    "confusion": "A temporal embedding is one possible representation technique, not a synonym for understanding or proof of correct sequence reasoning.",
    "related": [
      "frame-sampling",
      "tracking",
      "video-search"
    ],
    "sources": []
  },
  {
    "id": "occlusion",
    "term": "Occlusion",
    "fullName": "",
    "aliases": [],
    "category": "Audio and video",
    "lessonIds": [
      "m6"
    ],
    "definition": "A situation in which part or all of an object is hidden from view by another object, a person, or the camera angle.",
    "explanation": "Occlusion reduces the visible evidence available to a vision system. It can cause a detector to miss an item or a tracker to lose its identity. The system may guess from context, but a plausible guess is not a direct observation. Include partial and complete occlusion in tests where it occurs in real operation.",
    "example": "A luggage-counting team tests bags that briefly disappear behind other bags before returning to view.",
    "whyItMatters": "Real-world visibility limits can undermine counts or inspection claims despite strong results on clear images.",
    "confusion": "An object hidden from the camera is not necessarily absent from the scene.",
    "related": [
      "object-detection",
      "tracking",
      "false-negative"
    ],
    "sources": []
  },
  {
    "id": "video-search",
    "term": "Video search",
    "fullName": "",
    "aliases": [
      "video retrieval"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m6"
    ],
    "definition": "Finding relevant recordings or moments using text, metadata, transcripts, visual content, or combinations of these signals. Results should lead back to inspectable media evidence.",
    "explanation": "Simple search may use titles and transcripts, while visual representations can help find events that nobody describes aloud. Search quality depends on indexing, sampling, and the meaning of the user’s query. A relevant-looking clip may still lack the exact requested event. Provide timestamps and surrounding context so a person can verify a result.",
    "example": "A training coordinator searches for a demonstration of a package handover and checks the returned moment before adding it to a lesson.",
    "whyItMatters": "Search value depends on useful evidence found and reviewer effort, not merely a list of plausible clips.",
    "confusion": "Video retrieval finds existing content; video generation creates new content.",
    "related": [
      "clip4clip",
      "timestamp",
      "semantic-search"
    ],
    "sources": []
  },
  {
    "id": "text-to-video",
    "term": "Text-to-video",
    "fullName": "",
    "aliases": [
      "text to video"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m7"
    ],
    "definition": "Generating a video from written instructions describing a scene, action, style, or other requirements. The output is a draft that may differ from the intended details.",
    "explanation": "A prompt guides a model toward a visual sequence. Motion, object consistency, text, and implied claims can still be incorrect. A useful brief identifies the audience, objective, constraints, and approval criteria. Plan for iteration and review before using generated footage externally.",
    "example": "A communications team explores a short internal concept of a delivery route and reviews the motion and labels before sharing it.",
    "whyItMatters": "Generation time is only part of the cost; revision and approval determine the useful output.",
    "confusion": "Text-to-video does not document an actual event merely because the result looks realistic.",
    "related": [
      "image-to-video",
      "veo",
      "runway",
      "synthetic-media"
    ],
    "sources": []
  },
  {
    "id": "image-to-video",
    "term": "Image-to-video",
    "fullName": "",
    "aliases": [
      "image to video"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m7"
    ],
    "definition": "Generating a video using a starting or reference image to guide its visual content. The reference gives direction but does not guarantee exact detail or consistent motion.",
    "explanation": "An image can anchor a product appearance, composition, or character more specifically than text alone. Generated frames may still alter logos, geometry, materials, or movement. Review the sequence against the approved reference and brief. Treat the result as a new generated asset, with its own approval needs.",
    "example": "A beverage team animates an approved bottle image and rejects a draft whose label changes halfway through.",
    "whyItMatters": "Reference control can reduce iteration while still requiring detailed brand and factual review.",
    "confusion": "Providing an image is not a guarantee that every frame faithfully preserves that image.",
    "related": [
      "text-to-video",
      "image-generation",
      "acceptance-criteria"
    ],
    "sources": []
  },
  {
    "id": "avatar-video",
    "term": "Avatar video",
    "fullName": "",
    "aliases": [
      "avatar-video"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m7"
    ],
    "definition": "Video featuring a digitally created or animated presenter, often delivering an approved script. The presenter may be fictional or based on a person whose likeness is appropriately authorized.",
    "explanation": "Avatar tools can help teams prepare training or communication drafts without filming every revision. Script accuracy, pronunciation, timing, and accessible captions still need review. A realistic presenter can make unsupported statements seem authoritative. Establish who approves the script and how the presenter’s synthetic nature and authorized use are handled.",
    "example": "A learning team produces a draft onboarding video with an approved virtual presenter and checks every policy statement before release.",
    "whyItMatters": "Presentation efficiency does not remove ownership of the message or permissions for voice and likeness.",
    "confusion": "A realistic avatar is not evidence that the represented person actually delivered or endorsed the statement.",
    "related": [
      "synthesia",
      "heygen",
      "consent",
      "captions"
    ],
    "sources": []
  },
  {
    "id": "captions",
    "term": "Captions",
    "fullName": "",
    "aliases": [
      "accessible captions",
      "captioning",
      "closed captions"
    ],
    "category": "Audio and video",
    "lessonIds": [
      "m4",
      "m6",
      "m7"
    ],
    "definition": "Text synchronized with audio or video that represents speech and relevant non-speech sound, helping viewers access the content without relying on hearing alone.",
    "explanation": "Captions need accurate wording, timing, and useful speaker or sound information. Automated output can miss names, overlap, or meaningful background sounds. Review captions in the finished video because edits can break alignment. A separate transcript can be useful too, but does not replace synchronized access during playback.",
    "example": "A training editor corrects a product name and adds an alarm cue to generated captions before publishing a safety video.",
    "whyItMatters": "Accessibility depends on the quality of the final experience, not simply the presence of an automatic-caption feature.",
    "confusion": "A static image caption describes a picture; media captions follow speech and relevant sound over time.",
    "related": [
      "transcription",
      "timestamp",
      "image-caption"
    ],
    "sources": []
  },
  {
    "id": "chatgpt",
    "term": "ChatGPT",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "f1",
      "f6",
      "r1"
    ],
    "definition": "OpenAI’s conversational AI application, used to ask questions, develop drafts, and work with supplied information. Its responses are generated suggestions that require review appropriate to the task.",
    "explanation": "ChatGPT provides a user-facing way to interact with AI models. The application includes a surrounding workflow and controls, so its behavior is not described solely by the model name. Managers can use approved examples to explore tasks and compare useful outputs. The organization’s data rules and review responsibilities still apply.",
    "example": "A manager supplies an approved, fictional project brief and asks for several meeting-agenda options, then edits the chosen draft.",
    "whyItMatters": "The application can help test a workflow, but output quality and permitted information need explicit ownership.",
    "confusion": "ChatGPT is an application; GPT refers to a model family and is not an interchangeable product name.",
    "related": [
      "gpt",
      "chat-application",
      "prompt",
      "human-review"
    ],
    "sources": [
      {
        "label": "ChatGPT official documentation",
        "url": "https://help.openai.com/en/articles/6783457-what-is-chatgpt"
      }
    ]
  },
  {
    "id": "claude",
    "term": "Claude",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "f1",
      "f2",
      "f6",
      "r1"
    ],
    "definition": "Anthropic’s AI model and assistant brand, used for conversational work such as drafting and analyzing supplied material. The exact capabilities depend on the model and application being used.",
    "explanation": "A team may encounter Claude through an assistant interface or an application built around its models. The surrounding tools, instructions, and available information influence the result. Evaluate the complete setup on approved business examples, including cases with missing evidence. A fluent answer still needs checking against the relevant sources and task requirements.",
    "example": "A project lead compares a Claude-generated risk summary with the approved project notes before bringing it to a meeting.",
    "whyItMatters": "Assess the actual workflow, data handling, and review effort rather than choosing by brand familiarity alone.",
    "confusion": "An assistant interface, a model, and a custom application using that model have different responsibilities and controls.",
    "related": [
      "chat-application",
      "foundation-model",
      "evaluation-set"
    ],
    "sources": [
      {
        "label": "Claude official documentation",
        "url": "https://claude.com/product/overview"
      }
    ]
  },
  {
    "id": "gemini",
    "term": "Gemini",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "f1",
      "f2",
      "f6",
      "r1",
      "m1",
      "m2",
      "m4",
      "m5",
      "m6"
    ],
    "definition": "Google’s AI model and product brand. In this course it primarily refers to model services used to interpret combinations of text, images, audio, and video.",
    "explanation": "The source lessons use Gemini to illustrate instructed multimodal workflows. The task still needs suitable inputs, a useful output format, and checks of the evidence. Different models and product interfaces can support different operations. Test the specific setup being considered rather than transferring a successful demonstration to every modality or use case.",
    "example": "A support pilot asks for a description of visible package damage and routes unclear photos to a person.",
    "whyItMatters": "Broad input support is useful only when the complete business task is accurate, reviewable, and manageable.",
    "confusion": "The Gemini brand does not guarantee that every model or interface supports the same files, limits, or behaviors.",
    "related": [
      "multimodal-ai",
      "structured-output",
      "human-review"
    ],
    "sources": [
      {
        "label": "Gemini official documentation",
        "url": "https://ai.google.dev/gemini-api/docs"
      }
    ]
  },
  {
    "id": "gpt",
    "term": "GPT",
    "fullName": "Generative Pre-trained Transformer",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "f2"
    ],
    "definition": "A family name used for OpenAI generative models. These models produce outputs from supplied context and instructions; a particular model’s capabilities and limits must be checked separately.",
    "explanation": "GPT expands to Generative Pre-trained Transformer. A model can be used through a user-facing application or as one part of a larger business workflow. Instructions, retrieved evidence, tools, and review steps all influence the final service. Model-family recognition does not establish suitability for a particular business task.",
    "example": "A team evaluates a selected GPT model on reviewed support questions before connecting it to a draft-response workflow.",
    "whyItMatters": "The model is one component of the operating system you are evaluating, with its own quality and cost tradeoffs.",
    "confusion": "GPT is not another name for the ChatGPT application, and family members are not interchangeable without testing.",
    "related": [
      "chatgpt",
      "foundation-model",
      "transformer"
    ],
    "sources": [
      {
        "label": "GPT official documentation",
        "url": "https://platform.openai.com/docs/models"
      }
    ]
  },
  {
    "id": "llama",
    "term": "Llama",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "f2"
    ],
    "definition": "Meta’s family of AI models, including released model weights that teams can evaluate and deploy under the terms applicable to each release.",
    "explanation": "Llama illustrates the option of working with available model weights rather than only a hosted assistant. Using those weights may give a team more deployment choices while adding infrastructure and maintenance responsibilities. Releases differ in capabilities and license conditions. Review the specific model, license, and full operating plan before selecting it.",
    "example": "A company evaluates a Llama model for an internally operated document assistant and estimates the staffing and infrastructure effort.",
    "whyItMatters": "Available weights shift some control and operating responsibility to the organization.",
    "confusion": "Open weights do not automatically mean unrestricted use, no operating cost, or the same license as every other release.",
    "related": [
      "open-weights",
      "self-hosting",
      "total-cost-of-ownership"
    ],
    "sources": [
      {
        "label": "Llama official documentation",
        "url": "https://github.com/meta-llama/llama-models"
      }
    ]
  },
  {
    "id": "qwen",
    "term": "Qwen",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "f2"
    ],
    "definition": "A family of language and multimodal models developed by the Qwen team at Alibaba. Models in the family serve different tasks and require release-specific evaluation.",
    "explanation": "Qwen appears in the course as an example of a model family teams may compare. Some releases focus on language while others include visual or audio capabilities. The family name does not establish what a specific model supports. Check the selected release’s documentation, license, inputs, and performance on approved examples.",
    "example": "A team tests a Qwen model on its own multilingual support examples before deciding whether it fits a pilot.",
    "whyItMatters": "Version and task suitability matter more than a general reputation attached to a family name.",
    "confusion": "A family containing multimodal models does not mean every model in that family accepts every modality.",
    "related": [
      "foundation-model",
      "multimodal-ai",
      "evaluation-set"
    ],
    "sources": [
      {
        "label": "Qwen official documentation",
        "url": "https://qwen.readthedocs.io/en/latest/"
      }
    ]
  },
  {
    "id": "hugging-face",
    "term": "Hugging Face",
    "fullName": "",
    "aliases": [
      "Huggingface"
    ],
    "category": "Tools and frameworks",
    "lessonIds": [
      "f2",
      "f6",
      "f7",
      "m1",
      "m2"
    ],
    "definition": "An ecosystem for discovering and sharing AI models, datasets, documentation, and demonstrations, with libraries and services that help teams use them.",
    "explanation": "The Hub gives teams a place to inspect model cards and other materials before trying a model. Different repositories have different owners, licenses, intended uses, and evidence. Availability on the platform is not a blanket quality or safety endorsement. Review the specific artifact and its requirements before including it in a business workflow.",
    "example": "A technical team compares model cards for image-analysis candidates and brings a shortlist with documented limitations to the pilot owner.",
    "whyItMatters": "Discovery becomes useful when it includes provenance, licensing, evaluation, and operating requirements.",
    "confusion": "Hugging Face is an ecosystem; Hugging Face Transformers is one particular library within it.",
    "related": [
      "model-card",
      "hugging-face-transformers",
      "provenance"
    ],
    "sources": [
      {
        "label": "Hugging Face official documentation",
        "url": "https://huggingface.co/docs/hub/index"
      }
    ]
  },
  {
    "id": "elevenlabs",
    "term": "ElevenLabs",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "f1"
    ],
    "definition": "A provider of audio AI tools, including speech generation and related voice workflows. The course uses it as an example of producing spoken content from instructions or text.",
    "explanation": "Audio generation can turn an approved script into a proposed spoken asset. The team still needs to check pronunciation, factual statements, pacing, and the permissions associated with a voice. A natural-sounding result can make an inaccurate script more persuasive. Evaluate the complete preparation and approval workflow, not just the sound of a demo.",
    "example": "A learning team creates draft narration from an approved onboarding script and reviews product names before release.",
    "whyItMatters": "Voice quality, authorization, accessibility, and review effort all affect whether the generated asset is usable.",
    "confusion": "Natural speech is not proof that a real person said or endorsed the words.",
    "related": [
      "synthetic-media",
      "consent",
      "captions"
    ],
    "sources": [
      {
        "label": "ElevenLabs official documentation",
        "url": "https://elevenlabs.io/docs/overview"
      }
    ]
  },
  {
    "id": "pytorch",
    "term": "PyTorch",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "f5"
    ],
    "definition": "A software framework developers use to build, train, and run machine-learning models. It provides numerical computation and learning tools rather than a ready-made business assistant.",
    "explanation": "PyTorch helps technical teams represent data and adjust model parameters during training. It also supports running trained models to produce predictions or generated outputs. A manager does not need its programming syntax to understand the project responsibilities. The framework still requires suitable data, evaluation, infrastructure, and operational ownership.",
    "example": "A pilot sponsor asks a PyTorch-based research team to demonstrate results on held-out examples before approving another training run.",
    "whyItMatters": "A framework choice affects engineering work, but does not establish the business value of the resulting model.",
    "confusion": "PyTorch is a development framework, not a specific trained model or a no-code application.",
    "related": [
      "training",
      "inference",
      "tensor"
    ],
    "sources": [
      {
        "label": "PyTorch official documentation",
        "url": "https://docs.pytorch.org/docs/stable/index.html"
      }
    ]
  },
  {
    "id": "unsloth",
    "term": "Unsloth",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "f8"
    ],
    "definition": "A framework used to run and train AI models, including fine-tuning workflows. It appears in the source course as tooling for adapting a model efficiently.",
    "explanation": "Unsloth can simplify parts of a technical adaptation workflow. The team must still select a suitable base model, prepare approved examples, and evaluate the adapted result. Efficiency depends on the model, method, and hardware, so a general speed claim is not a project estimate. Compare end-to-end effort and quality against the existing baseline.",
    "example": "A team uses an adaptation tool to test a consistent response style, then checks whether the improvement holds on new examples.",
    "whyItMatters": "Faster experimentation helps only when it produces a measurable, repeatable improvement worth operating.",
    "confusion": "An efficient training tool does not remove the need for good data, held-out evaluation, or model-license review.",
    "related": [
      "fine-tuning",
      "lora",
      "held-out-evaluation"
    ],
    "sources": [
      {
        "label": "Unsloth official documentation",
        "url": "https://docs.unsloth.ai/"
      }
    ]
  },
  {
    "id": "vllm",
    "term": "vLLM",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "f8"
    ],
    "definition": "A software engine for serving and running language-model inference efficiently. It helps technical teams handle model requests rather than authoring the underlying business knowledge or instructions.",
    "explanation": "A serving engine manages how inference work uses computing resources. Its performance depends on the model, hardware, request sizes, and traffic pattern. Managers should ask for measurements of cost and response time under realistic load. Quality, access controls, monitoring, and recovery remain responsibilities of the surrounding application.",
    "example": "An internal assistant team tests its serving setup with concurrent employee requests and measures slow responses as well as average speed.",
    "whyItMatters": "Serving choices affect capacity and operating cost after a model has been selected.",
    "confusion": "Inference serving is not model training, and higher throughput does not mean more accurate answers.",
    "related": [
      "inference",
      "capacity-planning",
      "tail-latency"
    ],
    "sources": [
      {
        "label": "vLLM official documentation",
        "url": "https://docs.vllm.ai/en/latest/"
      }
    ]
  },
  {
    "id": "chroma",
    "term": "Chroma",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "r6"
    ],
    "definition": "A data tool for storing and searching information used in AI retrieval workflows, including embeddings and associated metadata. It is one possible component of a knowledge assistant.",
    "explanation": "Chroma can help a system retrieve candidate content to supply to a model. The team still chooses how documents are prepared, represented, updated, and filtered. Useful search results require evaluation against the questions users actually ask. Access rules and evidence freshness must be designed into the surrounding workflow.",
    "example": "A support pilot indexes approved policy passages and checks whether retrieval returns the relevant version for each test question.",
    "whyItMatters": "The retrieval store is part of the system’s evidence pipeline and needs an owner.",
    "confusion": "A searchable vector store does not itself guarantee correct answers or permission-safe retrieval.",
    "related": [
      "vector-database",
      "embedding",
      "retrieval-augmented-generation"
    ],
    "sources": [
      {
        "label": "Chroma official documentation",
        "url": "https://docs.trychroma.com/docs/overview/introduction"
      }
    ]
  },
  {
    "id": "pinecone",
    "term": "Pinecone",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "r6"
    ],
    "definition": "A managed database service used for search and retrieval over representations such as vectors. It can supply candidate evidence to AI applications, including retrieval-augmented generation workflows.",
    "explanation": "A managed retrieval service can reduce some infrastructure work while leaving data preparation and application design with the team. The index must reflect the right documents, metadata, and update process. Test relevance and access filtering with realistic users and questions. Assess the complete operating cost rather than the database charge alone.",
    "example": "A product team searches approved manuals by meaning and filters results by the product version before drafting an answer.",
    "whyItMatters": "Retrieval quality, data governance, and service operation jointly determine usefulness.",
    "confusion": "The database retrieves content; the model and application still determine how that content becomes an answer.",
    "related": [
      "vector-search",
      "metadata",
      "source-freshness"
    ],
    "sources": [
      {
        "label": "Pinecone official documentation",
        "url": "https://docs.pinecone.io/guides/get-started/overview"
      }
    ]
  },
  {
    "id": "weaviate",
    "term": "Weaviate",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "r6"
    ],
    "definition": "A database and search platform used to organize and retrieve information for AI applications, including vector-based and combined search workflows.",
    "explanation": "Weaviate is one option for the retrieval layer in a knowledge application. Teams define the stored information, representations, metadata, and retrieval behavior. Search output must be evaluated on the intended questions and data boundaries. Model integration does not remove the need for source ownership, permissions, or answer review.",
    "example": "A service team combines keyword and semantic retrieval to find the right policy passage before generating a response.",
    "whyItMatters": "Choose the retrieval setup around tested requirements and operating responsibilities.",
    "confusion": "A retrieval platform is not a complete factuality guarantee for an assistant built on top of it.",
    "related": [
      "hybrid-search",
      "vector-database",
      "retrieval-augmented-generation"
    ],
    "sources": [
      {
        "label": "Weaviate official documentation",
        "url": "https://docs.weaviate.io/weaviate"
      }
    ]
  },
  {
    "id": "ragas",
    "term": "Ragas",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "r8"
    ],
    "definition": "An evaluation framework for AI applications, used in the source course to assess retrieval and generated answers through metrics and repeatable examples.",
    "explanation": "Ragas helps organize evaluation signals, including measures concerned with evidence retrieval and answer quality. Different metrics require different inputs and assumptions. Some assessments use models as judges, which can make mistakes or disagree with people. Inspect results on representative examples and calibrate automated judgments against reviewed cases.",
    "example": "A knowledge-assistant team compares retrieval and faithfulness results, then reviews cases where an automated score conflicts with a subject expert.",
    "whyItMatters": "A framework can make evaluation repeatable, but the launch criteria and interpretation remain management decisions.",
    "confusion": "Ragas is an evaluation tool; RAG is a retrieval-and-generation workflow. A high score is not a general guarantee of correctness.",
    "related": [
      "retrieval-precision",
      "retrieval-recall",
      "faithfulness",
      "ai-judge"
    ],
    "sources": [
      {
        "label": "Ragas official documentation",
        "url": "https://docs.ragas.io/en/stable/"
      }
    ]
  },
  {
    "id": "pydantic-ai",
    "term": "Pydantic AI",
    "fullName": "",
    "aliases": [
      "Pydantic.ai"
    ],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m1",
      "m5",
      "m7"
    ],
    "definition": "A developer framework for coordinating AI model interactions, tools, and structured results. It helps build an application workflow around models rather than replacing the models themselves.",
    "explanation": "Pydantic AI can help teams request consistent output fields and connect model calls with other application steps. Structured results are easier for software to process, but the values can still be wrong. Teams must define permissions, recovery behavior, evaluation, and monitoring. Review the complete workflow, including failed calls and incomplete inputs.",
    "example": "A support pilot returns an issue category, evidence summary, and review owner in consistent fields for the case queue.",
    "whyItMatters": "Coordination and output structure can reduce integration friction while preserving the need to validate meaning.",
    "confusion": "A valid result format is not proof that the result is factually correct or appropriate to act on.",
    "related": [
      "structured-output",
      "orchestration",
      "agent"
    ],
    "sources": [
      {
        "label": "Pydantic AI official documentation",
        "url": "https://ai.pydantic.dev/"
      }
    ]
  },
  {
    "id": "hugging-face-transformers",
    "term": "Hugging Face Transformers",
    "fullName": "",
    "aliases": [
      "Transformers library"
    ],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m2"
    ],
    "definition": "A developer library that provides access to many pretrained models and their processing tools for tasks involving language, images, audio, and other supported inputs.",
    "explanation": "The library helps technical teams load models and prepare the inputs those models expect. Supported models differ in purpose, license, resources, and output quality. Managers should ask which model and workflow are actually being evaluated. Using a common library does not make unrelated models equivalent or establish production readiness.",
    "example": "A team compares two vision models through the same tooling while using the same reviewed package-photo test set.",
    "whyItMatters": "Shared tooling can simplify experimentation, but model selection and validation remain separate decisions.",
    "confusion": "The Transformers library is a software product; a transformer is a model architecture.",
    "related": [
      "hugging-face",
      "transformer",
      "preprocessing"
    ],
    "sources": [
      {
        "label": "Hugging Face Transformers official documentation",
        "url": "https://huggingface.co/docs/transformers/index"
      }
    ]
  },
  {
    "id": "clip",
    "term": "CLIP",
    "fullName": "Contrastive Language-Image Pretraining",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m2",
      "m3",
      "m4",
      "m7"
    ],
    "definition": "A model approach that relates images and text in a shared representation space, enabling similarity-based matching and classification using descriptions.",
    "explanation": "CLIP compares an image with text descriptions rather than acting as a general conversational image assistant. It can help retrieve candidate images or choose among proposed labels. Wording and unfamiliar categories can affect the results. Evaluate near-matches and avoid treating a high similarity score as proof of identity or factual truth.",
    "example": "A catalog team searches for red carry-on suitcases and verifies each candidate against product records.",
    "whyItMatters": "Cross-format search can save review time when similarity is treated as a useful clue.",
    "confusion": "CLIP does not itself generate a detailed image caption, and the acronym is unrelated to an ordinary video clip.",
    "related": [
      "visual-search",
      "zero-shot-classification",
      "embedding"
    ],
    "sources": [
      {
        "label": "CLIP official documentation",
        "url": "https://github.com/openai/CLIP"
      }
    ]
  },
  {
    "id": "dinov2",
    "term": "DINOv2",
    "fullName": "",
    "aliases": [
      "DINO",
      "DINO models"
    ],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m3"
    ],
    "definition": "A family of vision models that produces useful image representations learned through self-supervised training. Those representations can support downstream analysis rather than directly providing a business decision.",
    "explanation": "DINOv2 illustrates learning visual features from images without a manually supplied label for every training example. A technical team can use the resulting representations in other vision tasks. The downstream method and domain still affect performance. Evaluate the full task on relevant images rather than assuming strong general representations solve the business problem.",
    "example": "A factory team tests whether image representations help organize unfamiliar equipment photographs before adding inspection rules.",
    "whyItMatters": "Representations can be reusable building blocks, but downstream evaluation and engineering work remain necessary.",
    "confusion": "DINOv2 is a particular model family; DINO and later related releases should not be treated as identical versions.",
    "related": [
      "embedding",
      "vision-transformer",
      "computer-vision"
    ],
    "sources": [
      {
        "label": "DINOv2 official documentation",
        "url": "https://github.com/facebookresearch/dinov2"
      }
    ]
  },
  {
    "id": "rt-detr",
    "term": "RT-DETR",
    "fullName": "Real-Time Detection Transformer",
    "aliases": [
      "RTDETR"
    ],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m3"
    ],
    "definition": "A transformer-based object-detection model family designed for real-time detection tasks, returning candidate objects and their locations in images.",
    "explanation": "RT-DETR appears in the source as an example of detection tooling. Its outputs can help locate items for inspection or a later tracking stage. Whether a workflow meets its response-time target depends on the model variant, hardware, inputs, and surrounding application. Test missed objects and false detections in the actual operating environment.",
    "example": "A warehouse pilot measures whether a detector finds small damaged areas quickly enough for its inspection queue.",
    "whyItMatters": "A real-time design goal still needs a measured end-to-end service result.",
    "confusion": "Detection locations are not exact segmentation boundaries or identities maintained across a video.",
    "related": [
      "object-detection",
      "tracking",
      "latency"
    ],
    "sources": [
      {
        "label": "RT-DETR official documentation",
        "url": "https://github.com/lyuwenyu/RT-DETR"
      }
    ]
  },
  {
    "id": "sam",
    "term": "SAM",
    "fullName": "Segment Anything Model",
    "aliases": [
      "SAM 2",
      "SAM2"
    ],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m3"
    ],
    "definition": "The Segment Anything Model, a promptable image-segmentation model that estimates object regions from cues such as points or boxes. Related releases include distinct versions with different capabilities.",
    "explanation": "SAM helps identify which pixels belong to a selected region. The original model targets images, while later family members such as SAM 2 extend the approach and should be evaluated separately. Prompts and ambiguous boundaries can influence the resulting mask. Inspect output quality on transparent, overlapping, or unusual objects relevant to the workflow.",
    "example": "A catalog team selects a product region and reviews the proposed cutout before removing its background.",
    "whyItMatters": "Precise region proposals can speed up review or editing, but boundaries still need task-specific checks.",
    "confusion": "SAM, SAM 2, and a generic segmentation task are related concepts, not interchangeable version names.",
    "related": [
      "segmentation",
      "object-detection",
      "human-review"
    ],
    "sources": [
      {
        "label": "SAM official documentation",
        "url": "https://github.com/facebookresearch/segment-anything"
      },
      {
        "label": "SAM 2 official repository",
        "url": "https://github.com/facebookresearch/sam2"
      }
    ]
  },
  {
    "id": "florence-2",
    "term": "Florence-2",
    "fullName": "",
    "aliases": [
      "Florence 2"
    ],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m3"
    ],
    "definition": "A Microsoft vision model that uses task prompts to support several image-understanding tasks, such as captions, detection, and region-related outputs.",
    "explanation": "Florence-2 illustrates a model that can serve several visual tasks through different instructions. Each task produces a different kind of result, so evaluation should match the requested output. A useful caption score does not establish precise object-location accuracy. The team must still prepare suitable images and review unsupported or uncertain results.",
    "example": "A document team compares extracted visual descriptions with marked regions to check that the selected task fits its review process.",
    "whyItMatters": "A shared model can simplify experimentation while leaving distinct quality checks for each task.",
    "confusion": "Supporting several vision tasks does not mean every task has equal accuracy in a new domain.",
    "related": [
      "vision-language-model",
      "image-caption",
      "object-detection"
    ],
    "sources": [
      {
        "label": "Florence-2 official documentation",
        "url": "https://huggingface.co/microsoft/Florence-2-large"
      }
    ]
  },
  {
    "id": "stable-diffusion",
    "term": "Stable Diffusion",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m3"
    ],
    "definition": "A family of generative image models associated with diffusion-based methods, used to create or modify images from instructions and other conditioning inputs.",
    "explanation": "Stable Diffusion illustrates image generation in the source course. Different releases and tools offer different controls and have their own usage conditions. A generated picture can be visually polished while changing text, product details, or physical relationships. Evaluate the exact workflow on an approved brief and plan for revision and human approval.",
    "example": "A design team explores packaging concepts and treats each generated image as a draft rather than a validated product specification.",
    "whyItMatters": "The practical output is an approved asset, so total review effort belongs in the pilot’s value assessment.",
    "confusion": "A model family name does not establish a particular license or guarantee exact reproduction of reference details.",
    "related": [
      "diffusion",
      "image-generation",
      "provenance"
    ],
    "sources": [
      {
        "label": "Stable Diffusion official documentation",
        "url": "https://github.com/Stability-AI/generative-models"
      }
    ]
  },
  {
    "id": "librosa",
    "term": "librosa",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m4"
    ],
    "definition": "A software library for audio and music analysis that helps developers load, prepare, and measure sound signals before or alongside AI processing.",
    "explanation": "librosa supports tasks such as handling audio representations and extracting useful signal features. It appears in the course as a preparation and analysis tool. Correct settings and consistent processing matter because changes can alter the evidence a model receives. The team should test the prepared recordings, not only the original files.",
    "example": "A facilities pilot standardizes audio input and checks that the preparation preserves the machine noise technicians need to hear.",
    "whyItMatters": "Preparation tools affect reproducibility and input quality without themselves solving the business interpretation task.",
    "confusion": "An audio-analysis library is not a complete speech-recognition assistant or automatic fault-diagnosis service.",
    "related": [
      "preprocessing",
      "sample-rate",
      "audio-embedding"
    ],
    "sources": [
      {
        "label": "librosa official documentation",
        "url": "https://librosa.org/doc/latest/index.html"
      }
    ]
  },
  {
    "id": "clap",
    "term": "CLAP",
    "fullName": "Contrastive Language-Audio Pretraining",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m4"
    ],
    "definition": "A contrastive language-audio approach that connects sound and text representations, supporting tasks such as finding recordings that match a description.",
    "explanation": "CLAP compares representations of audio and language in a shared space. A phrase such as rattling engine can help retrieve candidate recordings even without spoken words. Results depend on what the model learned and how the query is phrased. Review the original audio before treating similarity as evidence of a specific cause.",
    "example": "A maintenance analyst searches an approved recording library for sounds resembling a loose panel and asks a technician to inspect the candidates.",
    "whyItMatters": "Text-guided audio retrieval can organize review when speech transcription would miss the relevant sound.",
    "confusion": "CLAP is not a transcript generator, and matching a sound description does not confirm a mechanical diagnosis.",
    "related": [
      "audio-embedding",
      "sound-classification",
      "semantic-search"
    ],
    "sources": [
      {
        "label": "CLAP official documentation",
        "url": "https://github.com/LAION-AI/CLAP"
      }
    ]
  },
  {
    "id": "whisper",
    "term": "Whisper",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m4"
    ],
    "definition": "An OpenAI speech-recognition model family used for tasks such as transcription and speech translation. It appears in the course as an example of turning recordings into proposed text.",
    "explanation": "Whisper estimates spoken words from audio and can support multilingual workflows. Recording quality, overlapping voices, names, and language context can affect the output. Some output may be incorrect even when it reads smoothly. Evaluate critical meanings and connect important statements to the original recording before taking consequential action.",
    "example": "A support team checks names, cancellation instructions, and amounts in transcripts before using them to prepare case updates.",
    "whyItMatters": "The business risk often lies in a few important errors rather than the overall neatness of the transcript.",
    "confusion": "Speech recognition output is not proof of speaker identity, emotion, or factual truth.",
    "related": [
      "transcription",
      "speech-recognition",
      "translation"
    ],
    "sources": [
      {
        "label": "Whisper official documentation",
        "url": "https://github.com/openai/whisper"
      }
    ]
  },
  {
    "id": "yolo",
    "term": "YOLO",
    "fullName": "You Only Look Once",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m6"
    ],
    "definition": "A family name for vision models associated with efficient object detection. Different implementations and releases also support other tasks, which must be checked individually.",
    "explanation": "YOLO expands to You Only Look Once. In the course it illustrates locating objects within video frames. A detection result needs an appropriate tracking and event rule if the business goal is counting unique items. Evaluate the selected release on realistic objects, camera conditions, response-time targets, and error consequences.",
    "example": "A conveyor pilot detects bags in frames but uses a separate crossing rule to count each bag once.",
    "whyItMatters": "Fast detection helps only when the full workflow produces reliable operational measurements.",
    "confusion": "A detector’s repeated boxes are not automatically distinct objects, and all YOLO releases are not the same model.",
    "related": [
      "object-detection",
      "tracking",
      "false-negative"
    ],
    "sources": [
      {
        "label": "YOLO official documentation",
        "url": "https://docs.ultralytics.com/"
      },
      {
        "label": "Original YOLO paper",
        "url": "https://arxiv.org/abs/1506.02640"
      }
    ]
  },
  {
    "id": "cotracker",
    "term": "CoTracker",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m6"
    ],
    "definition": "A model for tracking selected visual points through video, estimating their movement across frames. Point tracks can support motion analysis but are not complete business interpretations.",
    "explanation": "CoTracker follows points together across a sequence, using relationships in the video. Tracking may be difficult when points are hidden, leave the frame, or become visually ambiguous. A point on a bag is not automatically a unique bag identifier. The application still needs rules that turn movement estimates into the desired operational result.",
    "example": "A process-improvement team follows points on a package to study motion, then checks the track against the original footage.",
    "whyItMatters": "Motion estimates need validation and a clear connection to the decision or measurement being proposed.",
    "confusion": "Point tracking differs from recognizing an object’s category or establishing a person’s identity.",
    "related": [
      "tracking",
      "occlusion",
      "temporal-understanding"
    ],
    "sources": [
      {
        "label": "CoTracker official documentation",
        "url": "https://github.com/facebookresearch/co-tracker"
      }
    ]
  },
  {
    "id": "clip4clip",
    "term": "CLIP4Clip",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m6"
    ],
    "definition": "A research model approach for matching text with video clips using CLIP-based representations. It illustrates retrieving existing video rather than generating new footage.",
    "explanation": "CLIP4Clip adapts image-language representations to a text-video retrieval task. A search request is compared with representations of candidate clips. The best match can still miss a crucial event or confuse similar scenes. Provide a path to the original clip and evaluate whether users find the actual requested content.",
    "example": "A training coordinator searches for a package handover demonstration and verifies that the retrieved clip shows the required action.",
    "whyItMatters": "Retrieval quality depends on useful matches and reviewable evidence, not only similarity scores.",
    "confusion": "CLIP4Clip is a named retrieval approach, not any short video clip or a synonym for CLIP itself.",
    "related": [
      "clip",
      "video-search",
      "embedding"
    ],
    "sources": [
      {
        "label": "CLIP4Clip official documentation",
        "url": "https://github.com/ArrowLuo/CLIP4Clip"
      }
    ]
  },
  {
    "id": "veo",
    "term": "Veo",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m7"
    ],
    "definition": "Google DeepMind’s video-generation model family, used in the source course as an example of creating video from a creative brief and supporting inputs.",
    "explanation": "Veo illustrates how a generated video can begin from written instructions or visual direction. Capabilities and access differ by release and product, so the selected setup must be checked. Motion, text, brand details, and implied claims still require review. Budget for draft generation, iteration, and approval as one creative workflow.",
    "example": "A marketing team develops an internal five-second concept and rejects drafts that distort the approved product packaging.",
    "whyItMatters": "A generation tool should be judged by approved outputs and total effort against the creative objective.",
    "confusion": "A generated scene is not evidence that a depicted event happened or that a product performs as shown.",
    "related": [
      "text-to-video",
      "image-to-video",
      "acceptance-criteria"
    ],
    "sources": [
      {
        "label": "Veo official documentation",
        "url": "https://deepmind.google/models/veo/"
      }
    ]
  },
  {
    "id": "runway",
    "term": "Runway",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m7"
    ],
    "definition": "A creative AI platform with tools for generating and working with visual media. The source course uses it as a video-generation example rather than a purchasing recommendation.",
    "explanation": "Runway represents a managed creative workflow in which a team can explore and revise generated media. The relevant features depend on the product and model being used. Teams still need an approved brief, reference assets, and output review. Compare usable results, iteration effort, permissions, and accessibility for the actual project.",
    "example": "A brand team compares several generated motion concepts and selects one for further editing after checking product details.",
    "whyItMatters": "Tool convenience matters alongside the effort needed to reach an approved deliverable.",
    "confusion": "A polished demo does not establish that the tool will preserve every brand detail or meet every production requirement.",
    "related": [
      "text-to-video",
      "image-to-video",
      "total-cost-of-ownership"
    ],
    "sources": [
      {
        "label": "Runway official documentation",
        "url": "https://help.runwayml.com/"
      }
    ]
  },
  {
    "id": "synthesia",
    "term": "Synthesia",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m7"
    ],
    "definition": "A platform for creating AI-presented video, including avatar-based communication and training content. It is a source-course example of a scripted presentation workflow.",
    "explanation": "An avatar video workflow can turn an approved script into a draft presentation. The team still owns the accuracy of the script, presenter authorization, pronunciation, and accessible delivery. Check the finished video rather than only the text entered into the tool. Evaluate whether updates and review are actually easier than the existing process.",
    "example": "A learning team drafts a policy explainer with a virtual presenter and has the policy owner review the final video.",
    "whyItMatters": "Efficient production still needs accountable approval and a usable experience for the intended audience.",
    "confusion": "A convincing presenter does not certify the accuracy of the message or establish a real person’s endorsement.",
    "related": [
      "avatar-video",
      "captions",
      "human-review"
    ],
    "sources": [
      {
        "label": "Synthesia official documentation",
        "url": "https://docs.synthesia.io/"
      }
    ]
  },
  {
    "id": "heygen",
    "term": "HeyGen",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m7"
    ],
    "definition": "A platform for AI video creation that includes avatar and voice-related workflows. The source course uses it to illustrate digitally presented video rather than endorse a specific service.",
    "explanation": "HeyGen can be considered when a team wants to prepare presenter-led video from approved content. The exact capabilities and conditions depend on the service selected. Review likeness and voice permissions, message accuracy, timing, and captions in the final asset. Measure the full preparation and approval process before expanding a pilot.",
    "example": "A communications team creates a draft update with an authorized avatar and checks names and figures before distribution.",
    "whyItMatters": "A faster draft is valuable only when the resulting communication is accurate, authorized, and accessible.",
    "confusion": "A synthetic presentation should not be mistaken for evidence that a person recorded or approved the exact statement.",
    "related": [
      "avatar-video",
      "consent",
      "captions"
    ],
    "sources": [
      {
        "label": "HeyGen official documentation",
        "url": "https://docs.heygen.com/"
      }
    ]
  },
  {
    "id": "gradio",
    "term": "Gradio",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m7",
      "m8"
    ],
    "definition": "A developer tool for building interactive interfaces around models and other functions, often used to demonstrate or pilot workflows with text, images, audio, or other inputs.",
    "explanation": "Gradio can make a technical experiment easier for users to try and discuss. The source course uses it for multimodal prototype interfaces. A working interface does not establish that upload handling, permissions, availability, or recovery meet production needs. Use the prototype to test a named business assumption and plan further controls as required.",
    "example": "A team lets a small approved group try a customer-training prototype and records whether the feedback is useful.",
    "whyItMatters": "A quick interface can shorten the learning cycle without settling the rollout decision.",
    "confusion": "A usable prototype is not automatically a production-ready service.",
    "related": [
      "prototype",
      "multimodal-ai",
      "acceptance-criteria"
    ],
    "sources": [
      {
        "label": "Gradio official documentation",
        "url": "https://www.gradio.app/docs"
      }
    ]
  },
  {
    "id": "arize-phoenix",
    "term": "Arize Phoenix",
    "fullName": "",
    "aliases": [
      "Phoenix"
    ],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m8"
    ],
    "definition": "An AI observability and evaluation tool that helps teams inspect traces, assess outputs, and investigate how an application behaves across its steps.",
    "explanation": "Phoenix can show how a request moves through model calls and other parts of a workflow. That visibility helps locate slow stages and investigate errors. Trace contents may include sensitive inputs or outputs, so collection, access, and retention need limits. Inspection supports a diagnosis but does not itself correct the failing behavior.",
    "example": "A pilot owner reviews a slow interaction with the technical team and finds that retrieval, rather than generation, caused most of the delay.",
    "whyItMatters": "Operational evidence helps teams fix the actual bottleneck while protecting diagnostic information.",
    "confusion": "A trace is evidence about execution, not proof that the final answer is accurate or appropriate.",
    "related": [
      "trace",
      "monitoring",
      "retention"
    ],
    "sources": [
      {
        "label": "Arize Phoenix official documentation",
        "url": "https://arize.com/docs/phoenix"
      }
    ]
  },
  {
    "id": "pydantic-evals",
    "term": "Pydantic Evals",
    "fullName": "",
    "aliases": [],
    "category": "Tools and frameworks",
    "lessonIds": [
      "m8"
    ],
    "definition": "A framework for organizing evaluation examples and checks for AI workflows. It helps teams run repeatable assessments and inspect results against chosen criteria.",
    "explanation": "Pydantic Evals supports evaluating cases using appropriate checks, including judgments where configured. The value depends on representative inputs and meaningful criteria. An automated judge can still misunderstand a case or reward the wrong behavior. Compare important results with human review and keep failures as regression examples.",
    "example": "A property-description pilot tests whether generated descriptions preserve visible features and avoid inventing amenities.",
    "whyItMatters": "Repeatable evaluation makes change review more credible when the examples reflect actual business risks.",
    "confusion": "An evaluation framework organizes evidence; it does not supply universal launch thresholds or guarantee impartial judgments.",
    "related": [
      "evaluation-set",
      "ai-judge",
      "regression"
    ],
    "sources": [
      {
        "label": "Pydantic Evals official documentation",
        "url": "https://ai.pydantic.dev/evals/"
      }
    ]
  },
  {
    "id": "omnitrainer",
    "term": "OmniTrainer",
    "fullName": "",
    "aliases": [],
    "category": "Course projects",
    "lessonIds": [
      "m8"
    ],
    "definition": "The source course’s multimodal customer-service training project, combining simulated customer interaction with content moderation. It is an educational project, not an endorsed commercial product.",
    "explanation": "The project brings text, images, sound, and video into a practice workflow. A management adaptation focuses on coaching usefulness, permitted data, review ownership, and operating limits. Test disputed flags, poor inputs, provider failures, and slow responses as well as convincing conversations. A simulation should stay distinct from communication with real customers.",
    "example": "A support-training pilot measures whether trainees find the coaching useful while a reviewer examines false blocks and missed issues.",
    "whyItMatters": "The project makes the complete launch decision visible: learning value, quality, operations, and accountability.",
    "confusion": "A successful educational demonstration does not establish readiness to automate real customer interactions.",
    "related": [
      "multimodal-ai",
      "moderation",
      "pilot-charter",
      "stop-condition"
    ],
    "sources": []
  },
  {
    "id": "nasa-mission-intelligence",
    "term": "NASA Mission Intelligence",
    "fullName": "",
    "aliases": [],
    "category": "Course projects",
    "lessonIds": [
      "r8"
    ],
    "definition": "The source course’s RAG capstone: a knowledge assistant using supplied Apollo 11, Apollo 13, and Challenger records. It is an educational project rather than an official NASA service.",
    "explanation": "The project combines retrieval, mission-specific information, and generated answers. A manager can review whether mission filters are correct, sources are traceable, and missing evidence is acknowledged. Retrieval quality and answer faithfulness should be assessed separately. The course adaptation uses the project to practice an evidence-based acceptance review.",
    "example": "A reviewer asks the assistant about one mission and checks that retrieved passages and cited claims do not come from another mission.",
    "whyItMatters": "The capstone connects technical quality measures with source ownership and a concrete launch decision.",
    "confusion": "Using NASA records in a course project does not imply NASA endorsement or an authoritative operational assistant.",
    "related": [
      "retrieval-augmented-generation",
      "faithfulness",
      "acceptance-criteria",
      "golden-test-set"
    ],
    "sources": []
  }
];
