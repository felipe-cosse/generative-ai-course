export const toolsReviewedOn = "November 13, 2026";

export const toolGuide = [
  {
    id: "a2a",
    name: "A2A",
    aliases: ["Agent2Agent", "Google A2A"],
    category: "Applications & orchestration",
    kind: "Standard / protocol",
    job: "An open protocol that lets separate AI agent applications exchange tasks, status and results. It provides a common communication agreement when teams build agents using different software platforms.",
    example:
      "A procurement assistant delegates a supplier-document check to another department’s agent, then receives a reviewable result before continuing the purchase workflow.",
    question:
      "Which agents may exchange information, and who approves actions that cross departmental boundaries?",
    limit:
      "A shared protocol does not establish trust, permission or answer quality; participating agents still need compatible implementations and clear operating responsibilities.",
    context:
      "The tooling overview names Agent2Agent alongside frameworks. It is classified here as a protocol rather than an agent-building framework.",
    statusNote: null,
    url: "https://a2a-protocol.org/latest/",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
    ],
    glossaryId: null,
  },
  {
    id: "aime",
    name: "AIME",
    aliases: ["AIME 2024"],
    category: "Evaluation & observability",
    kind: "Dataset / benchmark",
    job: "A mathematics competition whose published problems are reused to test model reasoning. It provides a demanding, narrowly defined assessment with checkable answers, helping teams examine mathematical problem solving separately from broader business usefulness.",
    example:
      "A procurement manager compares vendors claiming strong reasoning, then asks each to solve representative company planning problems alongside published mathematics benchmarks.",
    question:
      "Which exam year, scoring method, and attempts per question produced this result?",
    limit:
      "A high score on competition mathematics does not establish reliable business judgment; repeated attempts and exposure to published questions can affect comparisons.",
    context:
      "The fundamentals benchmarking lesson cites AIME 2024 as a reasoning benchmark, not as a tool used by the course application.",
    statusNote: null,
    url: "https://maa.org/maa-invitational-competitions/",
    lessonIds: ["f4"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/8 - Evaluating Generative AI Models/Benchmarking GenAI Models.md",
      "1 - Generative AI Fundamentals/8 - Evaluating Generative AI Models/Benchmarking GenAI Models - Summary.md",
    ],
    glossaryId: null,
  },
  {
    id: "albert",
    name: "ALBERT",
    aliases: [],
    category: "Assistants & models",
    kind: "Model family",
    job: "An earlier language-understanding model family designed to use parameters efficiently. It helps explain how a model learns text representations and why its matching tokenizer matters when adapting a model for classification or search.",
    example:
      "A support director asks analysts to compare a compact language classifier with a larger model before funding ticket-routing automation.",
    question:
      "Does this historical model meet our classification target with a supported implementation and the correct tokenizer?",
    limit:
      "The original research repository is archived. Treat it as a historical model example; new deployments need maintained tooling and task-specific validation.",
    context:
      "The tokenization lesson names ALBERT as background for model and tokenizer compatibility; it is not a configured course service.",
    statusNote:
      "The original Google research repository is archived. This does not mean every ALBERT implementation is retired.",
    url: "https://github.com/google-research/albert",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
    ],
    glossaryId: null,
  },
  {
    id: "alexnet",
    name: "AlexNet",
    aliases: [],
    category: "Images & vision",
    kind: "Model family",
    job: "A historical image-classification neural network that helped demonstrate the value of deep learning on large image datasets. It provides context for understanding why shared benchmarks can reveal advances in model capability.",
    example:
      "A retail manager uses the AlexNet example to distinguish progress on an image benchmark from evidence that a system recognizes today’s store products.",
    question:
      "How closely does the benchmark resemble the images and decisions in our actual workflow?",
    limit:
      "Its historical benchmark significance does not make it a suitable modern production choice, and classification does not supply a full business workflow.",
    context:
      "The evaluation lesson uses AlexNet as a historical example in the development of image benchmarks.",
    statusNote: null,
    url: "https://proceedings.neurips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
    lessonIds: ["f4"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/8 - Evaluating Generative AI Models/Benchmarking GenAI Models.md",
      "1 - Generative AI Fundamentals/8 - Evaluating Generative AI Models/Benchmarking GenAI Models - Summary.md",
    ],
    glossaryId: null,
  },
  {
    id: "amazon-bedrock",
    name: "Amazon Bedrock",
    aliases: ["AWS Bedrock"],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "A managed AWS service for accessing foundation models and building generative AI applications. It gives an organization a cloud service boundary for model access, with supporting controls and capabilities selected according to the workload.",
    example:
      "A service director asks the platform team to pilot a policy assistant using approved models within the company’s AWS environment.",
    question:
      "Which model, region, access controls, and operating responsibilities are included in our proposed setup?",
    limit:
      "Managed model access does not make application answers reliable by itself; model availability, quotas, regional support, and data handling require explicit review.",
    context:
      "Named in the RAG model-selection comparison and multimodal deployment discussions as a managed cloud option.",
    statusNote: null,
    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html",
    lessonIds: ["r5", "m1", "m7"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/10 - Strategic Model Selection & Economics/Selection Process and Resources.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "amazon-ec2",
    name: "Amazon EC2",
    aliases: ["AWS g4dn", "g4dn.xlarge"],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "Provides virtual computing machines in AWS, including instance types that can run AI workloads on GPUs. A team controls the software environment and capacity while retaining responsibility for operating systems, access, deployment, and utilization.",
    example:
      "A training manager funds a temporary GPU machine for an adaptation experiment and requires it to stop when the experiment ends.",
    question:
      "Who owns capacity selection, machine shutdown, patching, and the budget for idle GPU time?",
    limit:
      "An available cloud machine does not ensure that a model fits its memory. Access, quotas, drivers, and regional capacity also constrain delivery.",
    context:
      "A project README names an AWS g4dn host; identifying EC2 as its underlying service is an explicit infrastructure inference.",
    statusNote: null,
    url: "https://aws.amazon.com/ec2/",
    lessonIds: ["f8"],
    sourcePaths: ["1 - Generative AI Fundamentals/Exercise/project/README.md"],
    glossaryId: null,
  },
  {
    id: "amazon-ec2-auto-scaling",
    name: "Amazon EC2 Auto Scaling",
    aliases: ["AWS Auto Scaling Groups"],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "An AWS service that adjusts the number of virtual servers in an application group according to configured policies and health checks. It helps operations teams match computing capacity to changing workloads.",
    example:
      "A document-processing team adds worker capacity during a monthly upload surge and reduces it when the processing queue returns to normal.",
    question:
      "Which workload signal should trigger scaling, and what spending and capacity boundaries will we enforce?",
    limit:
      "Adding servers cannot fix slow external model APIs or unsuitable application design; new capacity also takes time to become usable.",
    context:
      "The multimodal scaling discussion names Auto Scaling groups as an infrastructure option, rather than a course deployment already running in AWS.",
    statusNote: null,
    url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
    lessonIds: ["m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/44 - Scaling Multimodal AI Architecture/Scaling Multimodal AI Architecture.md",
    ],
    glossaryId: null,
  },
  {
    id: "amazon-rekognition",
    name: "Amazon Rekognition",
    aliases: ["Amazon Rekognition Video"],
    category: "Images & vision",
    kind: "Platform / service",
    job: "A managed service that analyzes images and videos for signals such as objects, text, and potentially unsafe content. Teams can incorporate these signals into cataloging or review workflows without operating the underlying vision models themselves.",
    example:
      "A marketplace manager pilots automatic flags on seller videos, with reviewers confirming uncertain or consequential moderation decisions before taking action.",
    question:
      "What false-positive and missed-content rates are acceptable for each review category?",
    limit:
      "Detected labels are probabilistic and context dependent; moderation thresholds need representative testing and a process for reviewing consequential errors.",
    context:
      "The video moderation lesson names Rekognition as a specialized managed analysis service, alongside foundation-model approaches.",
    statusNote: null,
    url: "https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html",
    lessonIds: ["m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/33 - Video Classification & Moderation/Video Moderation.md",
      "3 - Multimodal AI Applications/31 - Video Understanding & Search/Video Understanding with Foundation models.md",
    ],
    glossaryId: null,
  },
  {
    id: "amazon-sqs",
    name: "Amazon SQS",
    aliases: ["SQS"],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "A managed message queue that lets applications hand work to background workers. It separates incoming demand from processing speed, helping an AI service absorb bursts without requiring every request to finish immediately.",
    example:
      "A retailer queues uploaded product videos overnight so analysis workers can process the backlog within an agreed completion window.",
    question:
      "What happens to delayed, repeated, or failed messages, and how will customers see the processing status?",
    limit:
      "Queues do not create processing capacity. Workers need retry handling, duplicate protection, backlog monitoring, and a plan for messages that repeatedly fail.",
    context:
      "Named in the multimodal deployment discussion as an option for decoupling workload intake from processing.",
    statusNote: null,
    url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",
    lessonIds: ["m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/44 - Scaling Multimodal AI Architecture/Scaling Multimodal AI Architecture.md",
    ],
    glossaryId: null,
  },
  {
    id: "amazon-textract",
    name: "Amazon Textract",
    aliases: ["Textract"],
    category: "Knowledge & retrieval",
    kind: "Platform / service",
    job: "A managed document-analysis service that extracts printed or handwritten text and structures such as tables and forms. Its output can feed search and document workflows that need machine-readable evidence.",
    example:
      "A facilities team extracts equipment inspection forms into a searchable archive, with staff checking uncertain readings before the records become authoritative.",
    question:
      "Which extracted fields require human verification before they enter our knowledge base?",
    limit:
      "Extraction can misread layout, handwriting or numbers; downstream summaries may repeat those errors unless the original page remains available for review.",
    context:
      "Some supplied NASA text files identify Textract as their extraction source. The course project consumes that text; it does not demonstrate calling Textract.",
    statusNote: null,
    url: "https://docs.aws.amazon.com/textract/latest/dg/what-is.html",
    lessonIds: ["r8"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Project-NASA-Mission-Intelligence-Starter/embedding_pipeline.py",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/Exercise/Project-NASA-Mission-Intelligence-Starter/embedding_pipeline.py",
    ],
    glossaryId: null,
  },
  {
    id: "amazon-web-services",
    name: "Amazon Web Services",
    aliases: ["AWS"],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "A cloud platform offering computing, storage, networking, and managed services that can support AI applications. Managers choose an operating arrangement across these services, including who maintains models, protects information, and responds to failures.",
    example:
      "An operations leader compares running a speech model on cloud compute with buying a managed transcription service for support recordings.",
    question:
      "Which parts will our team operate, and which parts does the selected AWS service manage?",
    limit:
      "Choosing a cloud provider does not specify an AI architecture; reliability, permissions, resource limits, and costs depend on the actual services configured.",
    context:
      "The multimodal material names AWS as infrastructure and a source of cloud alternatives, distinct from individual services such as Bedrock.",
    statusNote: null,
    url: "https://aws.amazon.com/",
    lessonIds: ["m1", "m4", "m6", "m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/22 - Speech Processing/Whisper.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Demo: Pydantic.ai.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
      "3 - Multimodal AI Applications/33 - Video Classification & Moderation/Video Moderation.md",
    ],
    glossaryId: null,
  },
  {
    id: "ann-benchmarks",
    name: "ANN Benchmarks",
    aliases: ["ann-benchmarks"],
    category: "Evaluation & observability",
    kind: "Dataset / benchmark",
    job: "A benchmarking project for approximate nearest-neighbor search methods. It compares retrieval speed, result recall, and resource tradeoffs, giving teams a starting point for investigating the search component behind a vector-based application.",
    example:
      "A knowledge manager asks engineers to compare retrieval recall and response time before selecting search infrastructure for a policy assistant.",
    question:
      "Do these benchmark conditions resemble our vector sizes, filtering needs, hardware, and acceptable missed-result rate?",
    limit:
      "Published benchmark results are not a production guarantee. Dataset, hardware, index settings, and metadata filters can materially change the outcome.",
    context:
      "Linked as a resource in the retrieval material for comparing approximate vector-search approaches.",
    statusNote: null,
    url: "https://github.com/erikbern/ann-benchmarks",
    lessonIds: ["r6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Retrieval, Ranking.md",
    ],
    glossaryId: null,
  },
  {
    id: "annoy",
    name: "Annoy",
    aliases: [],
    category: "Knowledge & retrieval",
    kind: "Library",
    job: "A library for finding approximate nearest neighbors among numerical representations of items. It supports similarity search by building an index that can be saved and reused by an application.",
    example:
      "A catalog team tests whether similar-product search can find useful alternatives among product embeddings without comparing every item individually for each query.",
    question:
      "What search-quality loss is acceptable in exchange for faster retrieval?",
    limit:
      "Approximate matches can miss relevant items, and the library does not provide a complete document-permission, update or search-governance system.",
    context:
      "The retrieval material links Annoy as a further-learning implementation of similarity search; it is not the main course database.",
    statusNote: null,
    url: "https://github.com/spotify/annoy",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Vectors and Vector Search.md",
    ],
    glossaryId: null,
  },
  {
    id: "apache-airflow",
    name: "Apache Airflow",
    aliases: ["Airflow"],
    category: "Applications & orchestration",
    kind: "Framework",
    job: "A system for scheduling and monitoring workflows made of dependent tasks. It helps teams coordinate recurring data preparation, model evaluation, and batch processing, while recording whether each stage completed or needs attention.",
    example:
      "A knowledge manager schedules nightly document ingestion, embedding updates, and retrieval checks, with alerts when a required upstream stage fails.",
    question:
      "Which tasks may safely retry, and who owns recovery when the scheduled workflow stops?",
    limit:
      "Airflow primarily coordinates workflows; it does not supply model quality or replace application logic, and operational setup can be substantial.",
    context:
      "Listed in the multimodal serving-strategies lesson as an orchestration option for batch workflows.",
    statusNote: null,
    url: "https://airflow.apache.org/docs/apache-airflow/stable/index.html",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "apache-kafka",
    name: "Apache Kafka",
    aliases: ["Kafka"],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "An event-streaming platform that stores streams of records and lets different applications consume them independently. In an AI workflow, it can connect ingestion, analysis, and downstream actions while supporting processing at different speeds.",
    example:
      "A logistics director connects camera-event intake, incident analysis, and reporting teams through an event stream with defined retention and ownership.",
    question:
      "Which teams need to replay events, and who owns stream retention, access, and consumer recovery?",
    limit:
      "Kafka adds operating and data-governance responsibilities. A stream is not an AI model, and message delivery alone does not guarantee correct downstream actions.",
    context:
      "Named in the multimodal serving discussion as messaging infrastructure for backpressure and asynchronous workloads.",
    statusNote: null,
    url: "https://kafka.apache.org/",
    lessonIds: ["m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/44 - Scaling Multimodal AI Architecture/Scaling Multimodal AI Architecture.md",
    ],
    glossaryId: null,
  },
  {
    id: "apple-metal-performance-shaders",
    name: "Apple Metal Performance Shaders",
    aliases: ["MPS"],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "Apple’s GPU computation framework, which can support accelerated machine learning through compatible software such as PyTorch. It helps explain how a local Apple computer can participate in model experimentation.",
    example:
      "A training manager lets analysts explore a small model on approved Apple laptops before requesting a shared accelerator environment for larger experiments.",
    question:
      "Which parts of our workflow run reliably on the available Apple hardware?",
    limit:
      "Supported operations and memory limits differ from other GPU environments, so results and runtime compatibility require testing on the actual machine.",
    context:
      "Local setup instructions and device-selection examples discuss the MPS acceleration backend on Apple hardware.",
    statusNote: null,
    url: "https://developer.apple.com/documentation/metalperformanceshaders",
    lessonIds: ["f5", "f6", "f7", "f8", "m3", "m4", "m6"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/Exercise/README.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Demo: YOLOv9 Video Object Detection.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Exercise: Luggage Counting on a Conveyor Belt.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Solution: Luggage Counting on a Conveyor Belt.md",
    ],
    glossaryId: null,
  },
  {
    id: "argo-workflows",
    name: "Argo Workflows",
    aliases: ["Argo"],
    category: "Applications & orchestration",
    kind: "Framework",
    job: "A workflow engine that runs coordinated tasks on Kubernetes. It is useful when an organization already packages processing steps into containers and needs to manage their dependencies, parallel execution, and completion across shared computing resources.",
    example:
      "A media operations manager asks the platform team to coordinate video conversion, transcription, and quality checks across an existing Kubernetes cluster.",
    question:
      "Does our team already have the Kubernetes expertise and ownership needed to operate these workflows?",
    limit:
      "Argo Workflows depends on a Kubernetes operating environment; container execution and retries do not guarantee correct outputs or safe repeated actions.",
    context:
      "The deployment material lists Argo Workflows as a batch orchestration option rather than implementing it in a course project.",
    statusNote: null,
    url: "https://argo-workflows.readthedocs.io/en/latest/",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "arize-phoenix",
    name: "Arize Phoenix",
    aliases: ["Phoenix", "arize-phoenix"],
    category: "Evaluation & observability",
    kind: "Platform / service",
    job: "An observability and evaluation toolkit for inspecting AI application traces. It helps teams follow prompts, model calls, retrieval, and results to investigate failures and compare behavior across changes instead of judging only the final answer.",
    example:
      "A support manager reviews failed answer traces to distinguish missing documents from a model that ignored the retrieved evidence.",
    question:
      "Which failures can we trace to their cause, and what sensitive information will those traces retain?",
    limit:
      "Traces can contain confidential inputs and outputs. Monitoring also requires meaningful evaluation cases; collecting more traces does not establish answer quality.",
    context:
      "Used in the multimodal project stack to inspect application behavior and support evaluation.",
    statusNote: null,
    url: "https://arize.com/docs/phoenix",
    lessonIds: ["m1", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Rubric.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Instructions.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Project Overview.md",
    ],
    glossaryId: "arize-phoenix",
  },
  {
    id: "audiofile",
    name: "audiofile",
    aliases: [],
    category: "Audio & video",
    kind: "Library",
    job: "A Python library for reading and writing audio files and inspecting information such as duration and sampling rate. It prepares recordings for analysis without itself recognizing speech or generating sound.",
    example:
      "A service-quality team checks that consented call samples have consistent formats before engineers compare two transcription approaches on the same recordings.",
    question:
      "Are we preserving the audio characteristics needed to evaluate the original recording fairly?",
    limit:
      "Loading a recording successfully does not establish its quality, consent status or suitability for the model that will process it.",
    context:
      "The audio exercises use audiofile as a supporting media-input dependency, not as a speech model.",
    statusNote: null,
    url: "https://audeering.github.io/audiofile/",
    lessonIds: ["m4"],
    sourcePaths: [
      "3 - Multimodal AI Applications/23 - Implementing Speech Processing with Whisper & Gemini/Demo: Audio Transcription with Gemini.md",
      "3 - Multimodal AI Applications/23 - Implementing Speech Processing with Whisper & Gemini/4-gemini demo.ipynb",
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l3/demos/4-gemini/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "azure-ai-video-indexer",
    name: "Azure AI Video Indexer",
    aliases: ["Microsoft Azure Video Indexer"],
    category: "Audio & video",
    kind: "Platform / service",
    job: "A Microsoft service for extracting searchable information from video and audio, including transcripts and other supported insights. It helps turn a media collection into an organized resource for discovery, review, and downstream applications.",
    example:
      "A learning manager wants staff to find relevant moments in approved training recordings without watching every video from the beginning.",
    question:
      "Which insights, languages, and deployment option are required for our actual media collection?",
    limit:
      "Cloud and Azure Arc offerings differ; transcription and visual insights still require validation, especially for unfamiliar terminology or difficult recordings.",
    context:
      "Named in the video-understanding lesson as a specialized indexing service that can complement foundation-model analysis.",
    statusNote: null,
    url: "https://learn.microsoft.com/en-us/azure/azure-video-indexer/video-indexer-overview",
    lessonIds: ["m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/31 - Video Understanding & Search/Video Understanding with Foundation models.md",
    ],
    glossaryId: null,
  },
  {
    id: "azure-openai",
    name: "Azure OpenAI",
    aliases: ["Azure OpenAI Service"],
    category: "Assistants & models",
    kind: "Platform / service",
    job: "Provides access to OpenAI models through Microsoft Azure infrastructure and service controls. It is an integration route for teams building their own applications, with deployment choices and operational arrangements that differ from using a conversational app.",
    example:
      "An enterprise architecture manager evaluates an Azure model deployment for an internal assistant that must fit existing cloud operations.",
    question:
      "Which model deployment, region, access controls, and service commitments meet this application’s requirements?",
    limit:
      "Model availability and deployment options vary. An Azure relationship does not automatically grant every model, capacity level, or required data-handling arrangement.",
    context:
      "Named in platform-selection resources. Current Microsoft documentation groups this offering within Foundry models sold by Azure.",
    statusNote: null,
    url: "https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure",
    lessonIds: ["r5"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/10 - Strategic Model Selection & Economics/Selection Process and Resources.md",
    ],
    glossaryId: null,
  },
  {
    id: "bart",
    name: "BART",
    aliases: [],
    category: "Assistants & models",
    kind: "Model family",
    job: "A language-model family built around encoding input text and generating output text, with applications such as summarization after suitable training. It also illustrates why models and their text-processing components must fit together.",
    example:
      "A knowledge manager compares a document-summary prototype with the original report to check whether key exceptions survive the compression into a shorter narrative.",
    question:
      "Which model variant and matching text-processing components does the proposed solution actually use?",
    limit:
      "A model-family name does not specify task readiness; a chosen checkpoint may require adaptation and can omit or invent information in summaries.",
    context:
      "The tokenizer comparison names BART as a background example. The archive does not configure it as a course production service.",
    statusNote: null,
    url: "https://huggingface.co/facebook/bart-large",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
    ],
    glossaryId: null,
  },
  {
    id: "beir",
    name: "BEIR",
    aliases: ["BEIR Benchmark"],
    category: "Evaluation & observability",
    kind: "Dataset / benchmark",
    job: "A collection of information-retrieval datasets and evaluation tools for comparing search methods across different tasks. It helps teams examine whether a retrieval approach transfers beyond the specific dataset on which it was developed.",
    example:
      "A knowledge platform owner asks the team to compare search approaches on BEIR and on a separate set of internal questions.",
    question:
      "Which retrieval tasks resemble our documents and users, and where do the benchmark conditions differ?",
    limit:
      "Public retrieval benchmarks may not represent private terminology, access restrictions, or document freshness; internal relevance judgments remain necessary for launch decisions.",
    context:
      "The RAG retrieval material links BEIR as an evaluation resource; it is not the course’s production knowledge base.",
    statusNote: null,
    url: "https://github.com/beir-cellar/beir",
    lessonIds: ["r6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Retrieval, Ranking.md",
    ],
    glossaryId: null,
  },
  {
    id: "bert",
    name: "BERT",
    aliases: ["bert-base-uncased", "textattack/bert-base-uncased-imdb"],
    category: "Assistants & models",
    kind: "Model family",
    job: "A language-understanding model family that represents words in their surrounding context. It is often adapted for classification and information extraction, helping managers distinguish analytical text models from assistants designed to generate conversational responses.",
    example:
      "A service director tests whether a BERT-based classifier can route customer messages into agreed issue categories with fewer manual corrections.",
    question:
      "How well does the adapted classifier handle our language, ambiguous messages, and categories absent from training?",
    limit:
      "The original Google research repository is archived. BERT models can still be used through other implementations, but they require task-specific adaptation and validation.",
    context:
      "Introduced through Hugging Face examples, including sentiment classification, and named in the tokenizer comparison.",
    statusNote:
      "The original Google research repository is archived. BERT models remain available through other implementations.",
    url: "https://github.com/google-research/bert",
    lessonIds: ["f6", "r4", "r6"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.ipynb",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases.md",
    ],
    glossaryId: null,
  },
  {
    id: "bge",
    name: "BGE",
    aliases: ["bge-large-en-v1.5"],
    category: "Knowledge & retrieval",
    kind: "Model family",
    job: "A family of embedding models that turns text into numerical representations for tasks such as retrieval. A suitable BGE variant can help search connect questions with passages that express related ideas.",
    example:
      "A policy team tests whether an employee’s everyday wording retrieves the correct policy paragraph even when the paragraph uses formal terminology.",
    question:
      "Which languages, document lengths and question styles must our embedding evaluation cover?",
    limit:
      "Embedding similarity is not factual validation; different BGE variants have different intended inputs and must be evaluated with the actual retrieval workflow.",
    context:
      "The retrieval lessons name BGE as an embedding-model alternative, rather than assuming every example uses this family.",
    statusNote: null,
    url: "https://huggingface.co/BAAI/bge-large-en-v1.5",
    lessonIds: ["r6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases and Semantic Search for RAG.md",
    ],
    glossaryId: null,
  },
  {
    id: "bitsandbytes",
    name: "bitsandbytes",
    aliases: [],
    category: "Training & adaptation",
    kind: "Library",
    job: "A library that helps reduce the memory needed for supported model operations through lower-precision representations and optimizer components. It can make certain training or inference workloads fit available hardware, subject to model and platform compatibility.",
    example:
      "A training manager asks whether a smaller memory footprint would let a pilot adaptation experiment run on the team’s existing GPUs.",
    question:
      "How much memory is saved, and what accuracy or compatibility changes appear on our workload?",
    limit:
      "Lower precision can affect results, and supported operations depend on hardware and software versions; memory savings are not automatic speed improvements.",
    context:
      "Declared directly in the fundamentals counting-model project requirements as part of its acceleration and training environment.",
    statusNote: null,
    url: "https://huggingface.co/docs/bitsandbytes/index",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/Exercise/project/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "bloom",
    name: "BLOOM",
    aliases: [],
    category: "Assistants & models",
    kind: "Model family",
    job: "A multilingual language model created through the BigScience research collaboration. It illustrates a downloadable foundation model whose generated text and language coverage can be studied or adapted through an engineering workflow.",
    example:
      "A research manager uses a multilingual model demonstration to discuss why performance must be evaluated separately for each supported customer language.",
    question:
      "Which languages and task types have reliable evidence for our intended use, and what does the model license permit?",
    limit:
      "Language coverage does not mean equal quality across languages. The model card and license require review, and deployment brings substantial engineering responsibilities.",
    context:
      "Named in the fundamentals material as a foundation-model example rather than a managed course service.",
    statusNote: null,
    url: "https://huggingface.co/bigscience/bloom",
    lessonIds: ["f2"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/What is a Foundation Model?.md",
    ],
    glossaryId: null,
  },
  {
    id: "bytetrack",
    name: "ByteTrack",
    aliases: [],
    category: "Audio & video",
    kind: "Library",
    job: "An object-tracking method and implementation that links object detections across video frames. It helps an application follow a moving object over time instead of treating each frame as an unrelated image.",
    example:
      "A warehouse operations team estimates how carts move through a loading area while reviewing examples where vehicles overlap or leave the camera view.",
    question:
      "How will we detect and handle a track that switches from one object to another?",
    limit:
      "Occlusion, missed detections and camera changes can break tracks; a tracking identifier is not proof of a real-world person or object’s identity.",
    context:
      "The video exercises use ByteTrack through the supervision tooling to associate detections over time.",
    statusNote: null,
    url: "https://github.com/FoundationVision/ByteTrack",
    lessonIds: ["m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Demo: YOLOv9 Video Object Detection.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Exercise: Luggage Counting on a Conveyor Belt.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Solution: Luggage Counting on a Conveyor Belt.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "canva",
    name: "Canva",
    aliases: ["Canva Enterprise"],
    category: "Images & vision",
    kind: "Application",
    job: "A visual design platform for creating presentations, graphics, and media with templates, editing tools, and AI features. It can help business teams turn approved messages and assets into coordinated materials without assembling a custom model application.",
    example:
      "A sales enablement manager creates a consistent launch presentation and supporting social graphics, routing drafts through the company’s normal brand review.",
    question:
      "Which brand controls, collaboration permissions, and asset approvals does our team need?",
    limit:
      "Generated content and third-party assets still need factual, brand, and usage review; specific AI features depend on the selected product and plan.",
    context:
      "The video-generation overview mentions Canva in enterprise media workflows; the archive does not provide a hands-on Canva exercise.",
    statusNote: null,
    url: "https://www.canva.com/",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/35 - Video Generation/Video Generation Tools.md",
    ],
    glossaryId: null,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    aliases: [],
    category: "Assistants & models",
    kind: "Application",
    job: "A conversational application for working with generative models through an interface. Managers can use approved inputs to explore ideas, draft material, summarize information, and refine requests through dialogue, while retaining responsibility for the result.",
    example:
      "A department head drafts three versions of an internal announcement, then checks every policy statement against the approved source document.",
    question:
      "Which inputs are approved for this workspace, and who will verify the output before it is used?",
    limit:
      "Fluent answers can still be wrong or incomplete. Available features and data controls depend on the workspace and settings, so verify the actual environment.",
    context:
      "Introduced as a packaged generative AI assistant in fundamentals and language-model material.",
    statusNote: null,
    url: "https://help.openai.com/en/articles/6783457-what-is-chatgpt",
    lessonIds: ["f1", "f2", "f6", "r1", "r2", "r3"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/14 - Role-Based Prompting/Apply Role-Based Prompts to Different Domains.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/What Is a Prompt?.md",
      "1 - Generative AI Fundamentals/14 - Role-Based Prompting/Evaluating Agent Personas.md",
      "1 - Generative AI Fundamentals/4 - Applications of Generative AI/Real World Applications of Generative AI.md",
    ],
    glossaryId: "chatgpt",
  },
  {
    id: "chirp",
    name: "Chirp",
    aliases: ["Google Chirp", "Universal Speech Model", "USM"],
    category: "Audio & video",
    kind: "Model family",
    job: "Google’s speech-recognition model family available through its speech services. It converts spoken audio into text, with supported capabilities depending on the model generation and service configuration selected by the team.",
    example:
      "A regional support team evaluates transcription on consented calls containing product names, background noise and the languages its agents actually handle.",
    question:
      "Which model configuration meets our language coverage and transcription-error requirements?",
    limit:
      "Language, regional availability and feature support vary by model version; successful generic speech recognition does not guarantee accurate names or specialist vocabulary.",
    context:
      "The audio material names Chirp as a model-family option. Google Cloud Speech-to-Text is the separate service through which teams use such models.",
    statusNote: null,
    url: "https://docs.cloud.google.com/speech-to-text/docs/models/chirp-3",
    lessonIds: ["m1", "m5"],
    sourcePaths: [
      "3 - Multimodal AI Applications/24 - Audio Intelligence/Audio Intelligence.md",
      "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Technologies.md",
    ],
    glossaryId: null,
  },
  {
    id: "chroma",
    name: "Chroma",
    aliases: ["chromadb"],
    category: "Knowledge & retrieval",
    kind: "Database / storage",
    job: "A database and retrieval system for storing embeddings with documents and metadata, then finding relevant items. In a RAG application, it helps supply source material to the model before an answer is drafted.",
    example:
      "A policy owner pilots an assistant that retrieves current travel rules, filtered by region, before preparing an answer for employees.",
    question:
      "How will we maintain source freshness, access filtering, and retrieval quality as the document collection changes?",
    limit:
      "Similarity does not prove relevance or truth; ingestion quality, metadata filters, backup arrangements, and deployment choices determine the resulting application behavior.",
    context:
      "Used directly in RAG exercises and the NASA Mission Intelligence project to store and retrieve document evidence.",
    statusNote: null,
    url: "https://docs.trychroma.com/docs/overview/introduction",
    lessonIds: ["r1", "r6", "r7", "r8"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Solution: RAG Evaluation.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/15 - Implementing RAG with Vector Databases/Solution: RAG System.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Retrieval, Ranking.md",
    ],
    glossaryId: "chroma",
  },
  {
    id: "clap",
    name: "CLAP",
    aliases: ["CLAPS", "laion/clap-htsat-unfused"],
    category: "Audio & video",
    kind: "Model family",
    job: "Connects audio and text in a shared representation space. A system can compare a sound recording with written descriptions to support sound search or classification, without treating the recording solely as speech to transcribe.",
    example:
      "A facilities manager pilots searching maintenance recordings for sounds resembling a loose belt, then asks technicians to verify retrieved examples.",
    question:
      "Can it distinguish the sounds that matter in our recording conditions, and how will uncertain matches be reviewed?",
    limit:
      "Audio similarity is not a diagnosis or an event guarantee. Noise, recording devices, and the wording of candidate descriptions can alter matches.",
    context:
      "Introduced in multimodal audio processing and used with sound-classification examples.",
    statusNote: null,
    url: "https://github.com/LAION-AI/CLAP",
    lessonIds: ["m1", "m4"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/20 - Sound Retrival and Classification/Understanding Audio Features and Embeddings.md",
      "3 - Multimodal AI Applications/21 - Sound Retrieval and Classification with CLAP/Exercise: Fan OnOff Detection using CLAP.md",
      "3 - Multimodal AI Applications/21 - Sound Retrieval and Classification with CLAP/Solution: Fan OnOff Detection using CLAP.md",
    ],
    glossaryId: "clap",
  },
  {
    id: "claude",
    name: "Claude",
    aliases: [
      "Claude Sonnet 4",
      "Claude Sonnet",
      "Claude Opus",
      "claude-2",
      "Claude 4",
    ],
    category: "Assistants & models",
    kind: "Model family",
    job: "Anthropic’s family of AI models, also available through a conversational assistant bearing the same name. Managers should distinguish using the packaged assistant from integrating a selected model into a controlled business application.",
    example:
      "A strategy team drafts a comparison of approved supplier proposals and asks reviewers to verify every conclusion against the uploaded source documents.",
    question:
      "Are we buying an assistant workspace or operating an application built on a model API?",
    limit:
      "Capabilities and data controls depend on the product and model selected; fluent analysis can still misread sources or produce unsupported conclusions.",
    context:
      "The course names Claude in assistant examples and foundation-model comparisons. It does not imply all examples use the same product interface.",
    statusNote: null,
    url: "https://platform.claude.com/docs/en/intro",
    lessonIds: [
      "f1",
      "f2",
      "f6",
      "r1",
      "r2",
      "r3",
      "r5",
      "m1",
      "m2",
      "m5",
      "m6",
      "m7",
      "m8",
    ],
    sourcePaths: [
      "1 - Generative AI Fundamentals/14 - Role-Based Prompting/Introduction to Role-Based Prompting.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Advanced LLM Inference.md",
      "3 - Multimodal AI Applications/24 - Audio Intelligence/Audio Intelligence.md",
      "1 - Generative AI Fundamentals/4 - Applications of Generative AI/Real World Applications of Generative AI.md",
    ],
    glossaryId: "claude",
  },
  {
    id: "clip",
    name: "CLIP",
    aliases: ["openai/clip-vit-base-patch32"],
    category: "Images & vision",
    kind: "Model family",
    job: "A model approach that places images and text in comparable representations. This enables searches such as finding pictures from a description and selecting among candidate labels without training a new classifier for every label set.",
    example:
      "A retail content manager searches an image catalog for outdoor dining scenes and reviews the matches before selecting campaign assets.",
    question:
      "Do the retrieved images match our business meaning across lighting, styles, and underrepresented categories?",
    limit:
      "Similarity scores are not calibrated truth probabilities; wording, training-data biases, and specialized imagery can materially change the results.",
    context:
      "The multimodal course uses CLIP for image search and classification demonstrations and to explain shared image-text representations.",
    statusNote: null,
    url: "https://github.com/openai/CLIP",
    lessonIds: ["m1", "m2", "m3", "m4", "m5", "m6", "m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/14 - Vision-Language Models/Vision-Language Models Overview.md",
      "3 - Multimodal AI Applications/31 - Video Understanding & Search/Video Search Fundamentals.md",
      "3 - Multimodal AI Applications/33 - Video Classification & Moderation/Video classification.md",
    ],
    glossaryId: "clip",
  },
  {
    id: "clip4clip",
    name: "CLIP4Clip",
    aliases: [],
    category: "Audio & video",
    kind: "Model family",
    job: "A research model for matching video clips with text descriptions, building on CLIP representations. It illustrates how a written request can retrieve relevant footage by comparing learned representations rather than relying only on manually assigned tags.",
    example:
      "A learning manager searches an approved training-video collection for demonstrations of equipment setup and checks whether the returned clips cover the request.",
    question:
      "Does retrieval find the relevant action across our clip lengths, editing styles, and camera conditions?",
    limit:
      "A matching clip can omit the important moment or sequence. Evaluate retrieval on representative footage and do not treat similarity as complete video understanding.",
    context:
      "Named in the video-understanding material as a text-video retrieval approach.",
    statusNote: null,
    url: "https://github.com/ArrowLuo/CLIP4Clip",
    lessonIds: ["m1", "m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/31 - Video Understanding & Search/Video Search with CLIP4Clip.md",
      "3 - Multimodal AI Applications/32 - Video Understanding & Search with Gemini & Clip4Clip/Demo: Video Search with CLIP4CLIP.md",
      "3 - Multimodal AI Applications/4 - Transformers & Multimodal Processing/How Transformers Became the Jack of All Trades (Part 2).md",
    ],
    glossaryId: "clip4clip",
  },
  {
    id: "coco",
    name: "COCO",
    aliases: [],
    category: "Images & vision",
    kind: "Dataset / benchmark",
    job: "A collection of images and annotations used for tasks including object detection and segmentation. It supplies a common resource for learning how vision systems identify objects and outline their regions.",
    example:
      "A facilities manager reviews a vision demo trained around common object categories, then asks for tests on the equipment actually present at company sites.",
    question:
      "Which important objects and viewing conditions are absent from this dataset?",
    limit:
      "Benchmark categories and images may differ substantially from a business setting; strong COCO results alone cannot establish operational accuracy or coverage.",
    context:
      "The vision material uses COCO-related examples and models as a dataset resource, rather than presenting COCO as a software application.",
    statusNote: null,
    url: "https://cocodataset.org/",
    lessonIds: ["m3", "m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Demo: YOLOv9 Video Object Detection.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: Object Detection with RT-DETR + Segmentation with SAM2.1.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Solution: Luggage Counting on a Conveyor Belt.md",
      "3 - Multimodal AI Applications/15 - Multimodal Vision Applications with CLIP/Exercise: Auto-labeling Pipeline for Driving Scenes.md",
    ],
    glossaryId: null,
  },
  {
    id: "common-crawl",
    name: "Common Crawl",
    aliases: [],
    category: "Data & analysis",
    kind: "Dataset / benchmark",
    job: "A public repository of web-crawl data used in research and large-scale data processing, including model-training pipelines. It supplies raw material that teams must select, clean, document, and assess before using for a particular purpose.",
    example:
      "A data strategy manager asks a model vendor to explain how web-derived training material was filtered and assessed for the intended audience.",
    question:
      "What filtering, provenance, and usage review were applied to the particular data selected?",
    limit:
      "Being publicly accessible does not make every page accurate, representative, current, or suitable for unrestricted reuse in a model-training workflow.",
    context:
      "The fundamentals training-data lesson discusses Common Crawl as a source of web-scale material, not as a curated business knowledge base.",
    statusNote: null,
    url: "https://commoncrawl.org/",
    lessonIds: ["f2"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/Training Data for LLMs.md",
    ],
    glossaryId: null,
  },
  {
    id: "conda",
    name: "Conda",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Developer tool",
    job: "An environment and package manager that keeps a project’s software dependencies organized. It helps technical teams create separate working environments so one AI experiment’s requirements do not unexpectedly interfere with another project.",
    example:
      "A project manager requires analysts to record a reproducible environment before transferring a retrieval prototype to another team for review.",
    question:
      "Can another team recreate this environment, and who approves the package sources and updates?",
    limit:
      "Environment isolation does not validate packages or model behavior. Repository terms, dependency compatibility, and an update process still need explicit ownership.",
    context:
      "Mentioned as an alternative environment setup option in the Chroma-related material.",
    statusNote: null,
    url: "https://docs.conda.io/en/latest/",
    lessonIds: ["r7"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/Exercise/Implementing RAG with Vector Databases/exercises/starter/README.md",
    ],
    glossaryId: null,
  },
  {
    id: "cotracker",
    name: "CoTracker",
    aliases: [],
    category: "Audio & video",
    kind: "Model family",
    job: "A video model that follows selected visual points across a sequence of frames. It helps analyze how visible locations move, supporting tasks where point trajectories matter more than a single image description.",
    example:
      "A packaging team follows points on a moving box during a controlled conveyor test to investigate where motion becomes irregular before handoff.",
    question:
      "What evidence will show when a tracked point has been lost or drifted?",
    limit:
      "Occlusion, motion blur and scene changes can disrupt trajectories; following a visual point does not explain the cause of the movement.",
    context:
      "The video lessons name CoTracker for point tracking, distinct from object detectors and whole-video description models.",
    statusNote: null,
    url: "https://github.com/facebookresearch/co-tracker",
    lessonIds: ["m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/29 - AI Models for Video Undestanding/AI Models for Video Understanding.md",
    ],
    glossaryId: "cotracker",
  },
  {
    id: "crewai",
    name: "CrewAI",
    aliases: ["Crew.ai", "Crew AI"],
    category: "Applications & orchestration",
    kind: "Framework",
    job: "A framework for coordinating AI agents and workflows, with components for assigning work, providing tools, and tracking execution. It can help structure a multistep application when different model-assisted roles need to cooperate toward a defined outcome.",
    example:
      "A research manager prototypes separate collection and review roles for a supplier briefing, requiring a person to approve the final recommendation.",
    question:
      "Which steps truly need agent judgment, and which should remain predictable rules or human approvals?",
    limit:
      "Adding agents can multiply errors, delays, and model calls; permissions, stopping conditions, and evaluation remain application design responsibilities.",
    context:
      "Named in the multimodal tooling landscape among application frameworks; the source uses the spelling Crew.ai.",
    statusNote: null,
    url: "https://docs.crewai.com/",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
    ],
    glossaryId: null,
  },
  {
    id: "cursor",
    name: "Cursor",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Application",
    job: "An AI-assisted development environment where engineers work with project files and model assistance. For managers, it is an example of generative AI embedded in an existing professional workflow, with productivity dependent on review and integration.",
    example:
      "An engineering manager runs a small pilot measuring completed, reviewed maintenance tasks rather than counting how many suggestions developers accept.",
    question:
      "How will we measure reviewed delivery improvements while controlling repository access and sensitive project context?",
    limit:
      "Suggestions and agent actions need engineering review. Access to a repository can expose important context, and generated changes may introduce subtle defects.",
    context:
      "Named in the fundamentals material as an application example; the management course does not teach its coding interface.",
    statusNote: null,
    url: "https://cursor.com/docs",
    lessonIds: ["f1"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/2 - Generative AI Overview/GenAI Capabilities and Concerns.md",
      "1 - Generative AI Fundamentals/2 - Generative AI Overview/GenAI Capabilities and Concerns - Summary.md",
    ],
    glossaryId: null,
  },
  {
    id: "cut-cross-entropy",
    name: "Cut Cross-Entropy",
    aliases: ["cut-cross-entropy"],
    category: "Training & adaptation",
    kind: "Library",
    job: "A training-efficiency component that reduces memory used when calculating a language model’s cross-entropy loss. It belongs beneath the training workflow, helping engineers fit compatible experiments within available computing resources.",
    example:
      "A model-development lead asks engineers whether memory savings could enable a planned adaptation experiment on existing hardware without changing its evaluation criteria.",
    question:
      "Have memory savings and training results been measured together on our actual model?",
    limit:
      "Compatibility and gains depend on the training stack; reducing one calculation’s memory use does not remove every training bottleneck or quality risk.",
    context:
      "The focused fundamentals capstone requirements explicitly include this library as supporting training infrastructure.",
    statusNote: null,
    url: "https://github.com/apple-aiml-research/ml-cross-entropy",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "dall-e",
    name: "DALL-E",
    aliases: ["DALL·E"],
    category: "Images & vision",
    kind: "Model family",
    job: "A historical OpenAI image-generation model family that helped demonstrate how natural-language descriptions could guide visual creation. Its role in the course is to explain the development of multimodal generation and the distinction between interpreting images and producing them.",
    example:
      "A creative director reviews a past DALL-E pilot to document useful prompting lessons before planning a migration to a supported image model.",
    question:
      "Which lessons transfer to a supported replacement, and which outputs must be regenerated and reviewed?",
    limit:
      "DALL-E API models are retired; existing course examples are historical references and must not be treated as instructions for a new deployment.",
    context:
      "The archive discusses DALL-E in the history of image generation. Current OpenAI documentation marks DALL-E 3 shut down and removed from the API.",
    statusNote:
      "Historical model family: DALL-E 2 and 3 API models were retired in May 2026.",
    url: "https://developers.openai.com/api/docs/deprecations",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/4 - Transformers & Multimodal Processing/How Transformers Became the Jack of All Trades (Part 1).md",
      "3 - Multimodal AI Applications/4 - Transformers & Multimodal Processing/How Transformers Became the Jack of All Trades (Part 2).md",
    ],
    glossaryId: null,
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek R1",
    aliases: ["DeepSeek-R1", "DeepSeek"],
    category: "Assistants & models",
    kind: "Model family",
    job: "A reasoning-oriented model family presented as an example of training models to work through demanding problems. It helps frame discussions about evaluation, reinforcement learning, and the difference between apparent reasoning and a verified business result.",
    example:
      "A planning manager compares candidate models on anonymized scheduling problems, recording both correct decisions and the time required for review.",
    question:
      "Does the model solve our representative problems accurately enough to justify its latency and operating requirements?",
    limit:
      "A detailed reasoning-style response can still reach an incorrect conclusion. Different variants and deployment providers also have different capabilities and operating conditions.",
    context:
      "Named in evaluation and reinforcement fine-tuning discussions as a model example.",
    statusNote: null,
    url: "https://github.com/deepseek-ai/DeepSeek-R1",
    lessonIds: ["f4", "f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/18 - Post-Training Foundation Models/Reinforcement Fine-Tuning.md",
      "1 - Generative AI Fundamentals/8 - Evaluating Generative AI Models/Benchmarking GenAI Models.md",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "dino",
    name: "DINO",
    aliases: ["DINOv2", "DINOv3"],
    category: "Images & vision",
    kind: "Model family",
    job: "A family of visual-representation models learned through self-supervised training. Their image features can support comparison, retrieval and other vision tasks, while a separate application turns those features into a useful decision workflow.",
    example:
      "A merchandising team groups visually similar product photographs, then checks whether the groups reflect useful product distinctions rather than backgrounds or lighting.",
    question:
      "Do the learned visual similarities correspond to the distinctions our business needs?",
    limit:
      "Useful image features do not automatically provide labels, explanations or factual identification; downstream tasks require their own validation and often additional components.",
    context:
      "The source exercises use DINOv2 and discuss later DINO-family models. Versions are grouped here without assuming identical capabilities.",
    statusNote: null,
    url: "https://github.com/facebookresearch/dinov2",
    lessonIds: ["m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md",
      "3 - Multimodal AI Applications/12 - Vision Transformer Models & Architectures/Vision Transformer Models for Enterprise Applications.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/3-dinov2.ipynb",
      "3 - Multimodal AI Applications/Exercise/l2/demos/3-dinov2/demo.ipynb",
    ],
    glossaryId: "dinov2",
  },
  {
    id: "distilbert",
    name: "DistilBERT",
    aliases: [],
    category: "Assistants & models",
    kind: "Model family",
    job: "A compact language-model family produced through knowledge distillation from BERT. It is commonly used as a foundation for tasks such as classifying or extracting information from text, where a smaller model may suit a focused workflow.",
    example:
      "A support manager asks whether a compact classifier can route incoming tickets accurately before considering a larger conversational model for the task.",
    question:
      "What accuracy and response-time tradeoff appears on our actual ticket categories and language mix?",
    limit:
      "Its text-understanding design does not make it a general conversational assistant; useful performance depends on the chosen checkpoint and task adaptation.",
    context:
      "The tokenization lesson names DistilBERT to illustrate model and tokenizer compatibility; it is background context rather than a configured course service.",
    statusNote: null,
    url: "https://huggingface.co/docs/transformers/model_doc/distilbert",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
    ],
    glossaryId: null,
  },
  {
    id: "distilgpt2",
    name: "DistilGPT2",
    aliases: [],
    category: "Assistants & models",
    kind: "Model family",
    job: "A smaller distilled version of GPT-2 used to demonstrate text generation. It makes the relationship between model size and generated behavior easier to explore, while representing an educational historical model rather than a modern business assistant.",
    example:
      "A learning lead uses a small generation demo to show why plausible sentence continuation differs from following a company instruction accurately.",
    question:
      "Are we using this model to teach a concept or claiming it is ready for a business-facing task?",
    limit:
      "The model is an older text-completion example with limited instruction-following behavior. Its outputs can be biased, inaccurate, or unsuitable for direct publication.",
    context:
      "Used in a fundamentals text-generation demonstration to make token-by-token continuation concrete.",
    statusNote: null,
    url: "https://huggingface.co/distilbert/distilgpt2",
    lessonIds: ["f6"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Generating Text.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Generating Text.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "docutils",
    name: "Docutils",
    aliases: [],
    category: "Data & analysis",
    kind: "Library",
    job: "A text-processing toolkit that converts structured plain-text documentation into formats such as web pages. It supports documentation preparation rather than supplying an AI model or deciding whether the written material is correct.",
    example:
      "A product team publishes consistently formatted internal reference material so employees and the knowledge-search system can access the same reviewed instructions.",
    question:
      "Who owns the accuracy and review process for the documentation being transformed?",
    limit:
      "Format conversion can preserve incorrect or outdated content; successful processing does not establish the authority of the resulting document.",
    context:
      "Docutils appears as a direct supporting environment dependency in the course materials, not as the central AI workflow.",
    statusNote: null,
    url: "https://docutils.sourceforge.io/",
    lessonIds: ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"],
    sourcePaths: ["3 - Multimodal AI Applications/Exercise/requirements.txt"],
    glossaryId: null,
  },
  {
    id: "domoai",
    name: "DomoAI",
    aliases: [],
    category: "Audio & video",
    kind: "Application",
    job: "A creative service for generating and transforming visual media, including video restyling and image-to-video workflows. It can help a production team explore visual directions or adapt existing assets while retaining a separate editorial review process.",
    example:
      "An agency manager tests two visual treatments of an approved product clip, then asks the client to compare consistency and message clarity.",
    question:
      "Can the proposed workflow preserve product details and approved identity while producing the desired style?",
    limit:
      "Restyling can alter faces, objects, or motion in unintended ways; test representative clips and review asset permissions before approving publication.",
    context:
      "Named in the video-generation tools lesson as an option for style transformation and creative variations.",
    statusNote: null,
    url: "https://www.domoai.app/",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/35 - Video Generation/Video Generation Tools.md",
    ],
    glossaryId: null,
  },
  {
    id: "einops",
    name: "einops",
    aliases: [],
    category: "Data & analysis",
    kind: "Library",
    job: "A supporting library for rearranging and combining multidimensional arrays used by models. It helps engineers express how image patches, audio features, or batches are organized, reducing confusion when information moves between model components.",
    example:
      "A vision project lead asks engineers to document preprocessing assumptions so a change in image dimensions does not silently alter evaluation results.",
    question:
      "Which data-shape assumptions could change model behavior when we replace an input format or component?",
    limit:
      "Correctly rearranged arrays do not establish that their meaning is correct. Model inputs still need documented dimensions, ordering, and representative validation examples.",
    context:
      "Listed as a direct multimodal exercise dependency; it is supporting software rather than a manager-facing app.",
    statusNote: null,
    url: "https://einops.rocks/",
    lessonIds: ["m2", "m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l2/demos/5-clip-and-florence/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "electra",
    name: "ELECTRA",
    aliases: [],
    category: "Assistants & models",
    kind: "Model family",
    job: "A historical text-encoder model family trained by detecting replaced words, useful for understanding language representations and model-specific tokenization. It provides a contrast with language models designed primarily to generate extended responses.",
    example:
      "A customer-insight manager examines a text-classification proposal and asks whether it needs a compact encoder or an assistant that generates written answers.",
    question:
      "Does this task need classification, text representation or generation, and why was this model chosen?",
    limit:
      "The original implementation repository is archived; model suitability and maintenance of the selected runtime need separate review before any operational use.",
    context:
      "The tokenizer discussion names ELECTRA as a background model. Its original repository was archived in April 2026.",
    statusNote:
      "Original research implementation archived in April 2026; this does not mean every downstream model integration is discontinued.",
    url: "https://github.com/google-research/electra",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
    ],
    glossaryId: null,
  },
  {
    id: "eleutherai-lm-evaluation-harness",
    name: "EleutherAI LM Evaluation Harness",
    aliases: ["lm-evaluation-harness", "EleutherAI Evaluation Harness"],
    category: "Evaluation & observability",
    kind: "Framework",
    job: "An open evaluation framework for running language models against defined tasks using repeatable configurations. It helps technical teams compare model behavior under recorded conditions and reduces the work needed to assemble each benchmark experiment from scratch.",
    example:
      "An AI program manager requests reproducible evaluation reports for two candidate models before approving a separate test with internal business examples.",
    question:
      "Are prompts, task versions, model settings, and scoring rules recorded consistently across the comparison?",
    limit:
      "Reproducible benchmark execution does not guarantee representative tasks; configuration choices, contamination, and business-specific failure costs still influence interpretation.",
    context:
      "The strategic model-selection lesson links the harness as a resource for systematic language-model comparison.",
    statusNote: null,
    url: "https://github.com/EleutherAI/lm-evaluation-harness",
    lessonIds: ["r5"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/10 - Strategic Model Selection & Economics/Selection Process and Resources.md",
    ],
    glossaryId: null,
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    aliases: ["Eleven Labs", "Eleven v3"],
    category: "Audio & video",
    kind: "Platform / service",
    job: "A platform for generating and working with synthetic speech and voices. It can support narrated content and voice-based experiences, with managers responsible for voice authorization, script approval, and assessing the result for the intended audience.",
    example:
      "A training manager creates approved narration for a new onboarding module and has regional reviewers check pronunciation and tone before release.",
    question:
      "Do we have permission to use the voice, and who approves the spoken content and audience disclosure?",
    limit:
      "Voice generation can mispronounce important terms or imply a person spoke words they never approved. Rights, consent, and final listening review remain necessary.",
    context:
      "Named in real-world applications and multimodal audio material as a specialized speech-generation option.",
    statusNote: null,
    url: "https://elevenlabs.io/docs/overview",
    lessonIds: ["f1", "m1", "m4", "m5"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/4 - Applications of Generative AI/Real World Applications of Generative AI.md",
      "3 - Multimodal AI Applications/22 - Speech Processing/Whisper.md",
      "1 - Generative AI Fundamentals/4 - Applications of Generative AI/Real World Applications of Generative AI - Summary.md",
      "3 - Multimodal AI Applications/24 - Audio Intelligence/Audio Intelligence.md",
    ],
    glossaryId: "elevenlabs",
  },
  {
    id: "esc-50",
    name: "ESC-50",
    aliases: ["ESC50"],
    category: "Audio & video",
    kind: "Dataset / benchmark",
    job: "A labeled environmental-sound dataset used to study sound classification. It helps learners compare how models distinguish sound categories, while providing a bounded benchmark rather than a complete picture of real-world acoustic conditions.",
    example:
      "A facilities team tests a sound-recognition concept on labeled examples before collecting representative recordings from its own equipment and workplaces.",
    question:
      "Do the dataset’s sound categories and recording conditions match the events we need to detect?",
    limit:
      "A small curated sound benchmark cannot establish reliability in noisy workplaces, and licensing conditions must be checked for the intended dataset use.",
    context:
      "The audio lessons use ESC-50 as a sound-classification resource, rather than as an audio application or model.",
    statusNote: null,
    url: "https://github.com/karolpiczak/ESC-50",
    lessonIds: ["m4"],
    sourcePaths: [
      "3 - Multimodal AI Applications/21 - Sound Retrieval and Classification with CLAP/Demo: Sound-to-Sound and Text-to-Sound Similarity and Classification.md",
      "3 - Multimodal AI Applications/21 - Sound Retrieval and Classification with CLAP/demo.ipynb",
      "3 - Multimodal AI Applications/Exercise/l3/demos/2-clap/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "faiss",
    name: "FAISS",
    aliases: ["Facebook AI Similarity Search"],
    category: "Knowledge & retrieval",
    kind: "Library",
    job: "A library for finding similar vectors and clustering large collections of numerical representations. It supplies efficient search building blocks that engineers can use inside image-search, recommendation, or document-retrieval systems, with different speed and accuracy tradeoffs.",
    example:
      "A catalog manager asks the team to compare approximate search settings against an accurate reference before expanding visual search to more products.",
    question:
      "How much retrieval accuracy are we trading for faster responses or lower memory use?",
    limit:
      "FAISS is a search library, so persistence, access control, metadata handling, and service operations need surrounding application design.",
    context:
      "Linked in vector-search and multimodal material as a way to search embedding collections; it is distinct from a full database service.",
    statusNote: null,
    url: "https://github.com/facebookresearch/faiss",
    lessonIds: ["r4", "r6", "m1", "m6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Vectors and Vector Search.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Retrieval, Ranking.md",
      "3 - Multimodal AI Applications/32 - Video Understanding & Search with Gemini & Clip4Clip/Demo: Video Search with CLIP4CLIP.md",
    ],
    glossaryId: null,
  },
  {
    id: "fashion-mnist",
    name: "Fashion-MNIST",
    aliases: ["FashionMNIST"],
    category: "Training & adaptation",
    kind: "Dataset / benchmark",
    job: "A labeled collection of small clothing images used for learning and comparing classification methods. Its consistent format makes it useful for illustrating how training choices affect measured performance without starting with a complex commercial image collection.",
    example:
      "A learning manager compares training runs on clothing images to discuss why validation results, training time, and experimental consistency all matter.",
    question:
      "What does this controlled benchmark teach us, and which differences prevent applying its score directly to our product images?",
    limit:
      "These simplified images do not represent real retail photography, changing inventories, or production lighting. Success here does not demonstrate readiness for a commercial classifier.",
    context:
      "Used in fundamentals exercises comparing neural-network training optimizers.",
    statusNote: null,
    url: "https://github.com/zalandoresearch/fashion-mnist",
    lessonIds: ["f5"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Exercise Solution: Optimizer Bakeoff.md",
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Exercise: Optimizer Bakeoff.md",
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Exercise: Optimizer Bakeoff.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "fastapi",
    name: "FastAPI",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Framework",
    job: "A Python web framework for exposing application capabilities through APIs. In an AI solution, it can receive requests, validate their structure and connect users or other systems to the underlying model workflow.",
    example:
      "A support platform sends an approved ticket to an internal classification service and receives a structured suggestion that an agent can review.",
    question:
      "What authentication, response-time targets and failure behavior must the service provide?",
    limit:
      "The framework does not make model outputs correct or automatically supply production operations; access controls, scaling and monitoring still require deliberate implementation.",
    context:
      "The multimodal architecture material names FastAPI as an option for serving application workflows, not as an AI model.",
    statusNote: null,
    url: "https://fastapi.tiangolo.com/",
    lessonIds: ["m1", "m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Introduction to Pydantic AI.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Project Overview.md",
      "3 - Multimodal AI Applications/44 - Scaling Multimodal AI Architecture/Scaling Multimodal AI Architecture.md",
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "ffmpeg",
    name: "FFmpeg",
    aliases: [],
    category: "Audio & video",
    kind: "Developer tool",
    job: "A media-processing toolkit for decoding, converting, recording, and streaming audio and video. AI applications often depend on it to prepare files in the formats and timing conventions expected by analysis or generation components.",
    example:
      "A media manager standardizes uploaded training videos before transcription, then checks that the converted files retain readable captions and synchronized sound.",
    question:
      "Which formats, quality settings, and timing checks must the media preparation pipeline preserve?",
    limit:
      "Conversion can reduce quality or introduce timing differences; codec availability and licensing requirements vary with the chosen build and deployment.",
    context:
      "The multimodal showcase and media-processing exercises use FFmpeg-related tooling, including access through ImageIO.",
    statusNote: null,
    url: "https://ffmpeg.org/",
    lessonIds: ["m1", "m4", "m5", "m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Exercise: Multimodal AI Showcase.md",
      "3 - Multimodal AI Applications/19 - Audio Processing with librosa/Exercise: Music Analysis with librosa.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Demo: YOLOv9 Video Object Detection.md",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Demo: Showcasing API-based and Open-Source Models.md",
    ],
    glossaryId: null,
  },
  {
    id: "filetype",
    name: "filetype",
    aliases: [],
    category: "Data & analysis",
    kind: "Library",
    job: "A small utility that infers a file’s likely format from its binary signature. It helps a media workflow select appropriate processing paths instead of relying entirely on the filename a user supplied.",
    example:
      "A service manager requires an upload workflow to check whether files labeled as images actually resemble supported image formats before processing.",
    question:
      "What additional validation follows format detection before an uploaded file reaches the model or media decoder?",
    limit:
      "A recognizable file signature does not prove the file is safe, complete, or suitable for processing. Size limits and deeper validation are separate controls.",
    context:
      "Imported or directly declared in multimodal project tooling for handling uploaded media.",
    statusNote: null,
    url: "https://github.com/h2non/filetype.py",
    lessonIds: ["m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/39 - Using Gradio and Pydantic AI/Demo: Building a Multimodal Gradio Chatbot with Pydantic AI.md",
      "3 - Multimodal AI Applications/39 - Using Gradio and Pydantic AI/demo.ipynb",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/starter/pyproject.toml",
      "3 - Multimodal AI Applications/41 - Logging and Performance Monitoring with Gradio and Arize Phoenix/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "flashattention",
    name: "FlashAttention",
    aliases: ["flash-attn"],
    category: "Workspaces & infrastructure",
    kind: "Library",
    job: "An implementation of attention computation designed to use accelerator memory and data movement efficiently. It can help compatible models run or train more efficiently without changing the business task they are asked to perform.",
    example:
      "An engineering manager compares a model’s response time and memory use before and after an attention optimization using the same representative evaluation cases.",
    question:
      "Are the measured gains reproducible on our specific hardware, model and workload?",
    limit:
      "Benefits and compatibility depend on hardware and model details; a faster attention operation does not guarantee faster end-to-end application responses.",
    context:
      "The source environment includes FlashAttention as an optimization component beneath the model workflow.",
    statusNote: null,
    url: "https://github.com/Dao-AILab/flash-attention",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/Exercise/l1/demos/1-showcase/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l1/demos/2-pydantic-ai/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l1/exercises/1-showcase-exercise/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l1/exercises/2-pydantic-ai/starter/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "florence-2",
    name: "Florence-2",
    aliases: [],
    category: "Images & vision",
    kind: "Model family",
    job: "A Microsoft vision-language model family that uses task instructions to perform image analysis such as captioning, text recognition, and localization. It demonstrates how one model can support several related visual tasks within an application.",
    example:
      "A content operations manager tests automatic image descriptions and receipt-text extraction, with reviewers checking accessibility wording and important numerical fields.",
    question:
      "Which of our visual tasks pass separate quality checks, rather than sharing one overall score?",
    limit:
      "Capability varies by task and image conditions; small text, unusual scenes, and inaccurate descriptions require targeted testing and review.",
    context:
      "The CLIP and Florence-2 demonstration applies it to richer image tasks after introducing zero-shot image classification.",
    statusNote: null,
    url: "https://huggingface.co/microsoft/Florence-2-large",
    lessonIds: ["m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/15 - Multimodal Vision Applications with CLIP/Demo: Zero-Shot Image Classification with CLIP & Florence-2 Tasks.md",
      "3 - Multimodal AI Applications/15 - Multimodal Vision Applications with CLIP/demo.ipynb",
      "3 - Multimodal AI Applications/Exercise/l2/demos/5-clip-and-florence/demo.ipynb",
    ],
    glossaryId: "florence-2",
  },
  {
    id: "flux",
    name: "FLUX",
    aliases: ["FLUX.1"],
    category: "Images & vision",
    kind: "Model family",
    job: "An image-generation model family from Black Forest Labs. It turns a creative brief into candidate visual material through supported implementations, allowing teams to explore concepts before selecting, reviewing, and refining assets for use.",
    example:
      "A merchandising manager generates visual directions for a fictional seasonal campaign, then has designers check brand fit and remove misleading product details.",
    question:
      "Which exact model and license cover our proposed workflow, and what must designers verify before publishing the image?",
    limit:
      "Variants can have different licenses and operating requirements. Generated details may be inaccurate, and a convincing image is not evidence that a depicted product exists.",
    context:
      "Named among creative image-generation alternatives in the multimodal material.",
    statusNote: null,
    url: "https://github.com/black-forest-labs/flux",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Technologies.md",
    ],
    glossaryId: null,
  },
  {
    id: "food-101",
    name: "Food-101",
    aliases: ["Food101"],
    category: "Images & vision",
    kind: "Dataset / benchmark",
    job: "A labeled food-image dataset for image-classification research and demonstrations. It supplies examples for learning how models map photographs to categories, rather than a complete catalog of every cuisine or restaurant menu.",
    example:
      "A hospitality team tests a menu-image classification demo, then evaluates photos from its own kitchens before considering an inventory or labeling workflow.",
    question:
      "Which menu items and presentation styles are missing from the evaluation examples?",
    limit:
      "Photos may not reveal ingredients, allergens or portion details, and performance on dataset categories does not establish suitability for those decisions.",
    context:
      "The vision exercises use Food-101 as a classification dataset and learning resource.",
    statusNote: null,
    url: "https://data.vision.ee.ethz.ch/cvl/datasets_extra/food-101/",
    lessonIds: ["m2"],
    sourcePaths: [
      "3 - Multimodal AI Applications/7 - Vision Pre-processing Pipelines with HuggingFace/Demo: Huggingface Datasets and Transformers Pipelines.md",
      "3 - Multimodal AI Applications/7 - Vision Pre-processing Pipelines with HuggingFace/demo.ipynb",
      "3 - Multimodal AI Applications/Exercise/l2/demos/1-vision-preprocessing/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "gemini",
    name: "Gemini",
    aliases: [
      "Gemini 2.5 Pro",
      "Google Gemini",
      "Gemini Flash",
      "Gemini Flash-Lite",
    ],
    category: "Assistants & models",
    kind: "Model family",
    job: "Google’s family of models for language and supported multimodal tasks. Gemini also names an assistant application, so a business proposal should specify whether staff use that interface or a custom application accesses a particular model through a service.",
    example:
      "A training manager tests whether an approved model can summarize slides and recorded demonstrations while preserving important procedural warnings.",
    question:
      "Which model and access route are proposed, and what input types and data controls do they support?",
    limit:
      "Capabilities and limits differ across models and access routes; fluent summaries can still omit details or misinterpret images and recordings.",
    context:
      "Introduced in fundamentals and model selection, then used extensively in the multimodal exercises through developer services.",
    statusNote: null,
    url: "https://ai.google.dev/gemini-api/docs",
    lessonIds: [
      "f2",
      "f6",
      "r1",
      "r2",
      "r3",
      "r5",
      "m1",
      "m2",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8",
    ],
    sourcePaths: [
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/What is a Foundation Model?.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/3 - Implementing a Chatbot with an LLM/Demo: LLM Chatbot.md",
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/What is a Foundation Model? - Summary.md",
    ],
    glossaryId: "gemini",
  },
  {
    id: "gemma",
    name: "Gemma",
    aliases: [],
    category: "Assistants & models",
    kind: "Model family",
    job: "A Google model family with downloadable model resources for teams building their own AI systems. It illustrates the choice between running a model in a controlled environment and consuming a managed assistant or hosted model service.",
    example:
      "A product manager evaluates whether a smaller locally operated model can handle a narrow drafting task on an approved set of examples.",
    question:
      "Can the selected variant meet our quality target on the hardware and operational support we can provide?",
    limit:
      "Access to model weights does not remove deployment work or usage terms. Capabilities differ across variants, and local operation alone does not guarantee data protection.",
    context:
      "Named when the fundamentals material explores models available through Hugging Face.",
    statusNote: null,
    url: "https://deepmind.google/models/gemma/",
    lessonIds: ["f6"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "git",
    name: "Git",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Developer tool",
    job: "A version-control system that records changes to project files and supports branches, review and merging. It helps teams track which software and content changes produced a particular version of an AI application.",
    example:
      "A course owner reviews a proposed lesson update on a branch and merges it only after checks confirm the examples and references still work.",
    question:
      "Can we identify and restore the exact reviewed version behind a released application?",
    limit:
      "Version control does not validate a change’s correctness or safely store secrets, and large datasets or model files may need separate storage workflows.",
    context:
      "The source setup uses repository checkout and versioned dependencies. Git is separate from the GitHub hosting service.",
    statusNote: null,
    url: "https://git-scm.com/docs",
    lessonIds: ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"],
    sourcePaths: ["3 - Multimodal AI Applications/Exercise/requirements.txt"],
    glossaryId: null,
  },
  {
    id: "github",
    name: "GitHub",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "A platform for storing software projects, reviewing changes, tracking work, and coordinating development. For an AI initiative, it can preserve the history of application changes and evaluation assets so teams can review, reproduce, and maintain what they build.",
    example:
      "An AI program manager requires reviewed changes and recorded test results before a new assistant release is accepted into the main project.",
    question:
      "Who reviews changes, and can we connect each released version to its evaluation evidence?",
    limit:
      "Hosting a project does not make it secure or well maintained; repository visibility, permissions, dependency review, and release practices need ownership.",
    context:
      "The archive links GitHub starter repositories and primary open-tool projects across all three modules.",
    statusNote: null,
    url: "https://docs.github.com/en/get-started/start-your-journey/what-is-github",
    lessonIds: ["f2", "f4", "f6", "r1", "r8", "m1", "m8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Generating Text.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Instructions.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.md",
    ],
    glossaryId: null,
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    aliases: ["Copilot"],
    category: "Workspaces & infrastructure",
    kind: "Application",
    job: "An AI assistant integrated into software-development workflows. It helps engineers work with tasks and project context, while managers should evaluate completed, reviewed work and the surrounding controls rather than treating generated suggestions as finished delivery.",
    example:
      "An engineering lead compares review effort and defect rates during a Copilot pilot on a small set of routine maintenance tasks.",
    question:
      "Does adoption improve reviewed delivery outcomes, and are repository access and generated changes governed appropriately?",
    limit:
      "Generated work can contain errors or unsuitable dependencies. Human review, testing, and access controls remain necessary even when the assistant completes a task confidently.",
    context:
      "Named in fundamentals as a real-world generative AI application rather than taught as a programming exercise.",
    statusNote: null,
    url: "https://docs.github.com/en/copilot",
    lessonIds: ["f1"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/2 - Generative AI Overview/GenAI Capabilities and Concerns.md",
      "1 - Generative AI Fundamentals/2 - Generative AI Overview/GenAI Capabilities and Concerns - Summary.md",
    ],
    glossaryId: null,
  },
  {
    id: "google-ai-studio",
    name: "Google AI Studio",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Application",
    job: "A web workspace for exploring Gemini capabilities and preparing access to the Gemini API. It lets teams try prompts and inspect responses before engineers build those interactions into an application.",
    example:
      "A customer-operations lead compares several instructions for describing approved product photos and records failure cases before commissioning an integrated support feature.",
    question:
      "Which trial examples and review criteria will determine whether this prototype should progress?",
    limit:
      "A successful interactive trial does not establish production permissions, workload capacity or consistent quality across the inputs customers will actually provide.",
    context:
      "The multimodal exercises reference AI Studio for experimentation and API-access setup, distinct from the Google Gen AI SDK.",
    statusNote: null,
    url: "https://aistudio.google.com/docs/ai-studio-quickstart",
    lessonIds: ["m1", "m5", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Environment Setup.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Exercise: Broken Wire Detector with Pydantic.ai.md",
      "3 - Multimodal AI Applications/25 - Audio Sentiment Analysis with Gemini/Demo: Audio Sentiment Analysis with Pydantic AI and Gemini.md",
      "3 - Multimodal AI Applications/25 - Audio Sentiment Analysis with Gemini/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "google-cloud",
    name: "Google Cloud",
    aliases: ["GCP"],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "A cloud platform providing infrastructure and managed services for applications, data, and AI workloads. It offers several ways to operate an AI solution, from running chosen models on compute resources to using managed model and media-analysis services.",
    example:
      "A media director compares managed video analysis with a custom processing pipeline using the company’s existing Google Cloud environment.",
    question:
      "Which services, regions, identity controls, and operational responsibilities are part of the proposed design?",
    limit:
      "Platform selection alone does not resolve data residency, workload reliability, or model quality; those depend on the services and configuration actually chosen.",
    context:
      "The multimodal tooling and deployment material names Google Cloud as an infrastructure and managed-service option.",
    statusNote: null,
    url: "https://docs.cloud.google.com/docs/overview",
    lessonIds: ["m1", "m6", "m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
      "3 - Multimodal AI Applications/37 - Multimodal AI Deployment/Understanding Multimodal AI Deployment.md",
      "3 - Multimodal AI Applications/31 - Video Understanding & Search/Video Understanding with Foundation models.md",
    ],
    glossaryId: null,
  },
  {
    id: "google-cloud-automotive-ai-agent",
    name: "Google Cloud Automotive AI Agent",
    aliases: ["Automotive AI Agent"],
    category: "Applications & orchestration",
    kind: "Example system",
    job: "An automotive conversational AI solution illustrated through its relationship with the Mercedes-Benz MBUX Virtual Assistant. It shows how a specialized customer experience can combine a model service with domain information and an existing product interface.",
    example:
      "A mobility manager studies the navigation-assistant example to separate the conversation service, domain information, and vehicle interface when discussing a proposed partnership.",
    question:
      "Which responsibilities belong to the model provider, domain-data provider, and product operator in this integrated experience?",
    limit:
      "This is an industry integration example, not a general course app. Do not infer vehicle-control permissions or camera capabilities from the deployment story.",
    context:
      "Cited in the multimodal deployment lesson; the official announcement supports conversational navigation and the MBUX relationship.",
    statusNote: null,
    url: "https://blog.google/feed/mercedes-google-cloud-automotive-ai-agent/",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/37 - Multimodal AI Deployment/Understanding Multimodal AI Deployment.md",
    ],
    glossaryId: null,
  },
  {
    id: "google-cloud-speech-to-text",
    name: "Google Cloud Speech-to-Text",
    aliases: ["Speech-to-Text"],
    category: "Audio & video",
    kind: "Platform / service",
    job: "A managed service that converts audio into text using configurable speech-recognition models. It provides an application interface for transcription, while the business workflow determines consent, review, storage and the handling of uncertain results.",
    example:
      "A training team transcribes consented interview recordings into searchable notes, with reviewers correcting participant names and statements that influence course content.",
    question:
      "How will we evaluate transcription accuracy for our speakers, audio conditions and specialist terms?",
    limit:
      "Misheard words and omitted speech can change meaning; service configuration and language support must be checked for the selected recognition model.",
    context:
      "The course names this service in a multi-service application example. Chirp is a separate model-family entry.",
    statusNote: null,
    url: "https://docs.cloud.google.com/speech-to-text/docs",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/37 - Multimodal AI Deployment/Understanding Multimodal AI Deployment.md",
    ],
    glossaryId: null,
  },
  {
    id: "google-cloud-video-intelligence",
    name: "Google Cloud Video Intelligence",
    aliases: ["Video Intelligence API"],
    category: "Audio & video",
    kind: "Platform / service",
    job: "A managed API for extracting supported signals from videos, such as labels, shot boundaries, and other annotations. It helps applications organize or inspect media using task-specific analysis rather than relying solely on open-ended model descriptions.",
    example:
      "A video archive manager tests automatic shot and topic annotations to help editors locate material for a new training series.",
    question:
      "Which annotations are useful enough to save editor time, and how will incorrect annotations be corrected?",
    limit:
      "Supported features and input constraints vary; annotation quality must be measured on actual footage, and task-specific output does not capture every context.",
    context:
      "Named in the course overview and video-understanding material as a specialized video-analysis option.",
    statusNote: null,
    url: "https://docs.cloud.google.com/video-intelligence/docs",
    lessonIds: ["m1", "m6", "m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/37 - Multimodal AI Deployment/Understanding Multimodal AI Deployment.md",
      "3 - Multimodal AI Applications/31 - Video Understanding & Search/Video Understanding with Foundation models.md",
    ],
    glossaryId: null,
  },
  {
    id: "google-colab",
    name: "Google Colab",
    aliases: ["Colab"],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "A hosted notebook environment for running experiments and sharing analysis without managing a local workstation setup. Technical teams can explore models and data interactively, making it useful for demonstrations and early learning activities.",
    example:
      "A training coordinator prepares a shared experiment notebook so participants can review model behavior without configuring separate laptops during the workshop.",
    question:
      "Are the data approved for this environment, and can the session limits support the planned learning activity?",
    limit:
      "Compute resources and session duration are not guaranteed. Temporary environments need deliberate saving, data controls, and a separate plan for dependable production operation.",
    context:
      "A source project dependency profile explicitly supports running in Google Colab.",
    statusNote: null,
    url: "https://research.google.com/colaboratory/faq.html",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/Exercise/project/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "google-gen-ai-sdk",
    name: "Google Gen AI SDK",
    aliases: ["google-genai", "google.genai"],
    category: "Applications & orchestration",
    kind: "Library",
    job: "A client library that gives an application access to Google generative AI services. It handles the developer-facing request interface while the selected service and model determine supported inputs, generation behavior and account controls.",
    example:
      "A retail prototype sends an approved item photo and task instructions to a model, then presents its draft description to a catalog reviewer.",
    question:
      "Which service endpoint and model does the application actually call, and how are failures handled?",
    limit:
      "The SDK is not a model or data-governance policy; API permissions, model behavior and service availability remain separate responsibilities.",
    context:
      "The source notebooks directly use the Google generation client library to call model services.",
    statusNote: null,
    url: "https://googleapis.github.io/python-genai/",
    lessonIds: ["m1", "m2", "m4", "m6", "m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Get a Vocareum Gemini API Key.md",
      "3 - Multimodal AI Applications/11 - Gemini Vision API Basics/Exercise: Image Moderation with Gemini.md",
      "3 - Multimodal AI Applications/11 - Gemini Vision API Basics/Solution: Image Moderation with Gemini.md",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Exercise: Multimodal AI Showcase.md",
    ],
    glossaryId: null,
  },
  {
    id: "google-vertex-ai",
    name: "Google Vertex AI",
    aliases: ["Vertex AI"],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "The Google Cloud AI platform named in the archive for developing, deploying, and accessing models. It represents a managed platform approach that brings model work into a cloud environment with organizational infrastructure and operating controls.",
    example:
      "A data science manager evaluates a managed environment for training a custom model and exposing a reviewed version to an internal application.",
    question:
      "Which lifecycle stages are managed for us, and what governance must our team still configure?",
    limit:
      "Current documentation and product naming have evolved; confirm supported capabilities, regions, and migration paths rather than relying on archived screenshots or examples.",
    context:
      "Named in RAG model selection and multimodal deployment. The checked legacy documentation link redirects into Google’s Gemini Enterprise Agent Platform documentation.",
    statusNote: null,
    url: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    lessonIds: ["r1", "r5", "m6", "m7"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/2 - The Large Language Model Landscape/Navigating the LLM Landscape.md",
      "3 - Multimodal AI Applications/31 - Video Understanding & Search/Video Search Fundamentals.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/10 - Strategic Model Selection & Economics/Selection Process and Resources.md",
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "gpqa",
    name: "GPQA",
    aliases: [],
    category: "Evaluation & observability",
    kind: "Dataset / benchmark",
    job: "A benchmark of challenging graduate-level science questions used to study model capability. It gives a structured comparison on a particular type of expert question, helping managers distinguish a published benchmark result from evidence on their own workflow.",
    example:
      "A research director uses a reported GPQA result as one comparison point, then commissions a separate evaluation on approved internal scientific questions.",
    question:
      "What does performance on these expert questions tell us about our task, and what important behaviors remain untested?",
    limit:
      "A benchmark score does not establish reliability on business decisions, tool use, or local documents. Contamination and evaluation settings can also affect comparisons.",
    context:
      "Named in the fundamentals discussion of model evaluation and capability measurement.",
    statusNote: null,
    url: "https://github.com/idavidrein/gpqa",
    lessonIds: ["f4"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/8 - Evaluating Generative AI Models/Benchmarking GenAI Models.md",
      "1 - Generative AI Fundamentals/8 - Evaluating Generative AI Models/Benchmarking GenAI Models - Summary.md",
    ],
    glossaryId: null,
  },
  {
    id: "gpt",
    name: "GPT",
    aliases: [
      "GPT-5",
      "GPT-5 mini",
      "GPT-5 nano",
      "GPT-4o",
      "GPT-4.1",
      "OpenAI GPT models",
      "GPT-2",
      "GPT-3",
      "GPT-4",
      "gpt-3.5-turbo",
      "gpt-4o-mini",
      "gpt-4.1-mini",
      "gpt-4.1-nano",
      "GPT-4V",
    ],
    category: "Assistants & models",
    kind: "Model family",
    job: "OpenAI’s GPT model family used for tasks such as drafting, classification and multimodal interpretation, depending on the chosen model. An application adds instructions, permitted data access and review around the underlying model capability.",
    example:
      "A service manager evaluates draft ticket summaries against original conversations before letting staff use the feature during routine handovers between shifts.",
    question:
      "Which chosen model meets our quality, response-time and information-handling requirements on representative tasks?",
    limit:
      "A family name does not guarantee particular features or reliable facts; supported inputs and operating behavior vary across specific model versions.",
    context:
      "The notebooks and teaching examples use several GPT versions. They are grouped as a model family, separate from ChatGPT and the OpenAI SDK.",
    statusNote: null,
    url: "https://developers.openai.com/api/docs/models",
    lessonIds: [
      "f1",
      "f2",
      "f4",
      "f6",
      "r1",
      "r2",
      "r3",
      "r4",
      "r5",
      "r7",
      "r8",
      "m1",
      "m2",
      "m5",
      "m6",
      "m7",
      "m8",
    ],
    sourcePaths: [
      "1 - Generative AI Fundamentals/15 - Implementing Role-Based Prompting with Python/Solution: Historical Figure Persona.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Prompt Templating.md",
      "3 - Multimodal AI Applications/24 - Audio Intelligence/Audio Intelligence.md",
      "1 - Generative AI Fundamentals/4 - Applications of Generative AI/Demo: LLM Assisted Coding.md",
    ],
    glossaryId: "gpt",
  },
  {
    id: "gpt-image",
    name: "GPT Image",
    aliases: ["GPT Image 1"],
    category: "Images & vision",
    kind: "Model family",
    job: "OpenAI’s image-generation model family for creating and editing images from instructions and supported visual inputs. Teams can use it inside creative workflows to explore concepts, produce variations, and revise assets against a brief.",
    example:
      "A campaign manager requests several illustrated onboarding scenes, then reviews layout, brand details, and factual consistency before choosing the final assets.",
    question:
      "What checks will confirm that generated or edited visuals preserve the details our audience must understand?",
    limit:
      "Generated visuals can contain inaccurate details and inconsistent elements; model selection, revision cycles, and human approval remain necessary for business use.",
    context:
      "The multimodal fundamentals lesson names GPT Image as a creative-generation option; historical versions are examples within the family.",
    statusNote: null,
    url: "https://developers.openai.com/api/docs/guides/image-generation",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Technologies.md",
    ],
    glossaryId: null,
  },
  {
    id: "gpt-2",
    name: "GPT-2",
    aliases: ["gpt2"],
    category: "Assistants & models",
    kind: "Model family",
    job: "An earlier downloadable language model that predicts and generates text continuations. It provides a concrete way to teach generation and sampling, while helping managers distinguish historical completion models from current instruction-following assistant products.",
    example:
      "A course facilitator compares several continuations of the same opening sentence to illustrate how sampling can change wording without guaranteeing accuracy.",
    question:
      "Is this demonstration teaching generation behavior, or are we mistakenly treating sentence continuation as reliable instruction following?",
    limit:
      "The original repository is archived. This historical model can produce biased or inaccurate continuations and should not be presented as a current business assistant.",
    context:
      "Used in fundamentals text-generation demonstrations and retained as a historical teaching example.",
    statusNote:
      "The original OpenAI research repository is archived; retained here as a historical model example.",
    url: "https://github.com/openai/gpt-2",
    lessonIds: ["f6"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Generating Text.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Exercise Solution: One Token at a Time.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Exercise: One Token at a Time.md",
    ],
    glossaryId: null,
  },
  {
    id: "gpt-oss",
    name: "gpt-oss",
    aliases: [],
    category: "Assistants & models",
    kind: "Model family",
    job: "OpenAI’s open-weight reasoning-model family, which teams can run through compatible infrastructure. It offers a different operating arrangement from a hosted model API because the team or its provider manages deployment and runtime resources.",
    example:
      "A research operations team assesses whether a self-hosted assistant can answer internal process questions with acceptable accuracy on the hardware it controls.",
    question:
      "Who will own hosting, updates, access controls and ongoing quality evaluation?",
    limit:
      "Access to model weights does not make deployment effortless or outputs trustworthy; runtime capacity, configuration and task evaluation still matter.",
    context:
      "The Hugging Face introduction names gpt-oss as an available model-family example, without deploying it in the lesson.",
    statusNote: null,
    url: "https://openai.com/open-models/",
    lessonIds: ["f6"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "gradio",
    name: "Gradio",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Framework",
    job: "A framework for building interactive web interfaces around model workflows, including text, image, and audio inputs. It helps teams turn an experiment into a demonstrable application so nontechnical reviewers can try representative tasks and give feedback.",
    example:
      "A customer-service manager tests a prototype that accepts a question and an image, recording cases where the response fails the review rubric.",
    question:
      "What must be added before this demonstration is suitable for our real users and data?",
    limit:
      "A working demo does not establish production readiness; authentication, access controls, capacity, error handling, and user research require separate attention.",
    context:
      "Used throughout multimodal demonstrations and the chatbot work to expose model workflows through a usable interface.",
    statusNote: null,
    url: "https://gradio.app/docs",
    lessonIds: ["m1", "m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Rubric.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Instructions.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Project Overview.md",
    ],
    glossaryId: "gradio",
  },
  {
    id: "guidance",
    name: "Guidance",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Library",
    job: "A library for directing language-model generation through templates and constraints. It helps developers request particular output structures and control parts of a generation workflow, which can make results easier for another application to consume.",
    example:
      "An operations manager asks a team to extract incident categories into a fixed format before sending reviewed records into a reporting system.",
    question:
      "Which output properties are constrained, and how do we separately verify that the extracted facts are correct?",
    limit:
      "Structural constraints do not ensure factual accuracy. Supported controls depend on the model integration, and failure handling is needed when requirements cannot be satisfied.",
    context:
      "Named in the language-model material as a way to control generation and structured output.",
    statusNote: null,
    url: "https://guidance.readthedocs.io/en/latest/",
    lessonIds: ["r1"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/2 - The Large Language Model Landscape/Navigating the LLM Landscape.md",
    ],
    glossaryId: null,
  },
  {
    id: "haystack",
    name: "Haystack",
    aliases: [],
    category: "Knowledge & retrieval",
    kind: "Framework",
    job: "A framework for assembling document-search and generative AI pipelines from components such as retrievers and generators. It helps developers connect the stages that turn a question into retrieved evidence and a proposed answer.",
    example:
      "A maintenance team pilots a manual-search assistant that retrieves relevant repair passages and presents a draft answer with links to the source pages.",
    question:
      "How will we evaluate retrieval and answer quality separately when the system makes a mistake?",
    limit:
      "A pipeline framework does not ensure current documents, correct permissions or supported answers; each component and the complete workflow need evaluation.",
    context:
      "The retrieval material presents Haystack as an application-building option, rather than the required framework for every course exercise.",
    statusNote: null,
    url: "https://docs.haystack.deepset.ai/docs/intro",
    lessonIds: ["r6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/12 - Retrieval Augmented Generation (RAG) Workflow/RAG Workflow Concepts.md",
    ],
    glossaryId: null,
  },
  {
    id: "helm",
    name: "HELM",
    aliases: ["Holistic Evaluation of Language Models"],
    category: "Evaluation & observability",
    kind: "Framework",
    job: "Stanford’s Holistic Evaluation of Language Models initiative provides a framework and results for examining models across multiple dimensions. It encourages managers to look beyond one accuracy score when discussing capabilities, limitations, and tradeoffs.",
    example:
      "An AI steering group uses a multidimensional scorecard to compare candidates, then adds internal tests for the decisions their assistant will support.",
    question:
      "Which dimensions matter to our use case, and which are missing from the published evaluation?",
    limit:
      "The framework is in maintenance mode. Published results depend on scenarios and model versions, and cannot replace evaluation of your own workflows.",
    context:
      "Linked in the RAG model-selection lessons as a resource for broader model assessment, not as an application runtime dependency.",
    statusNote: "Framework entered maintenance mode in June 2026.",
    url: "https://github.com/stanford-crfm/helm",
    lessonIds: ["r1", "r5"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/10 - Strategic Model Selection & Economics/Model Selection.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/10 - Strategic Model Selection & Economics/Metrics for Evaluation.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/2 - The Large Language Model Landscape/Navigating the LLM Landscape.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/10 - Strategic Model Selection & Economics/Selection Process and Resources.md",
    ],
    glossaryId: null,
  },
  {
    id: "heygen",
    name: "HeyGen",
    aliases: [],
    category: "Audio & video",
    kind: "Platform / service",
    job: "A platform for creating avatar-led and generated video content. It can turn an approved script into a presentation-style asset, making repeatable communication easier while keeping editorial responsibility with the team publishing the result.",
    example:
      "A training director creates a fictional presenter for an onboarding video and asks subject experts to approve the script and final delivery.",
    question:
      "Who has approved the presenter’s likeness, voice, script, and the way viewers will understand the content was generated?",
    limit:
      "Avatar realism does not establish authenticity or permission. Pronunciation, visual artifacts, and misleading impressions need review before the video reaches an audience.",
    context:
      "Named alongside Synthesia in the multimodal video-generation landscape.",
    statusNote: null,
    url: "https://docs.heygen.com/",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/35 - Video Generation/Video Generation Tools.md",
    ],
    glossaryId: "heygen",
  },
  {
    id: "hnswlib",
    name: "hnswlib",
    aliases: [],
    category: "Knowledge & retrieval",
    kind: "Library",
    job: "A library implementing graph-based approximate nearest-neighbor search for numerical vectors. It helps a system find similar representations efficiently and is one implementation of the HNSW search approach, rather than a complete database service.",
    example:
      "A knowledge-search team compares retrieval speed and missed relevant passages while testing a new index for a large collection of internal articles.",
    question:
      "What retrieval-quality target must the index meet at our expected collection size?",
    limit:
      "Approximate search can miss neighbors, and the library alone does not manage document access policies, business records or application-level data freshness.",
    context:
      "The retrieval source names hnswlib as an indexing implementation. The HNSW algorithm remains a separate concept.",
    statusNote: null,
    url: "https://github.com/nmslib/hnswlib",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Vectors and Vector Search.md",
    ],
    glossaryId: null,
  },
  {
    id: "hugging-face",
    name: "Hugging Face",
    aliases: ["HuggingFace", "Hugging Face Hub", "Hugging Face Model Hub"],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "A platform and ecosystem for discovering and sharing models, datasets, and related documentation. Model and dataset cards help teams inspect intended use and provenance, while separate libraries and services support building and running applications.",
    example:
      "A product manager asks the team to shortlist models with clear documentation and suitable licenses before approving an internal proof of concept.",
    question:
      "Who published this artifact, what does its documentation establish, and what obligations apply to our intended use?",
    limit:
      "Availability on the Hub is not a quality endorsement; documentation, licenses, dependencies, and suitability vary across individual artifacts and publishers.",
    context:
      "Used across the source modules for discovering models, datasets, and documentation; distinct from libraries such as Transformers or Evaluate.",
    statusNote: null,
    url: "https://huggingface.co/docs/hub/index",
    lessonIds: [
      "f2",
      "f6",
      "f7",
      "r2",
      "r4",
      "r5",
      "r6",
      "r8",
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
    ],
    sourcePaths: [
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Generating Text.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Advanced LLM Inference.md",
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.md",
    ],
    glossaryId: "hugging-face",
  },
  {
    id: "hugging-face-accelerate",
    name: "Hugging Face Accelerate",
    aliases: ["accelerate"],
    category: "Training & adaptation",
    kind: "Library",
    job: "A supporting library that helps model workloads run across computing devices and configurations. It reduces some of the coordination work around training and inference, allowing an engineering team to manage how a model uses available hardware.",
    example:
      "A project lead asks engineers to measure whether a larger training setup reduces turnaround enough to justify additional computing resources.",
    question:
      "What measured improvement does the chosen device setup provide, and can the team reproduce the same evaluation afterward?",
    limit:
      "Coordinating devices does not eliminate memory limits or communication overhead. Hardware compatibility, reproducibility, and the actual workload determine whether a configuration is worthwhile.",
    context:
      "A direct dependency in focused training-project requirements and multimodal exercise environments.",
    statusNote: null,
    url: "https://huggingface.co/docs/accelerate/index",
    lessonIds: ["f8", "m1", "m2", "m3"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l2/demos/3-dinov2/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l1/demos/1-showcase/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "hugging-face-datasets",
    name: "Hugging Face Datasets",
    aliases: ["datasets"],
    category: "Data & analysis",
    kind: "Library",
    job: "A library for loading, organizing and processing datasets used in machine learning. It gives technical teams a consistent way to prepare examples for training and evaluation, including data held locally or supplied through repositories.",
    example:
      "A support team organizes reviewed examples into separate training and evaluation collections so a new model is tested on cases it did not learn from.",
    question:
      "Who confirms that our dataset splits, labels and permitted uses match the business evaluation?",
    limit:
      "Convenient loading does not establish data quality, consent or licensing, and careless preparation can leak evaluation examples into training.",
    context:
      "The course directly uses this library for classification data, adaptation exercises and evaluation examples across modules.",
    statusNote: null,
    url: "https://huggingface.co/docs/datasets/index",
    lessonIds: ["f2", "f6", "f7", "f8", "r8", "m2", "m3", "m4", "m5"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Solution: RAG Evaluation.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "hugging-face-evaluate",
    name: "Hugging Face Evaluate",
    aliases: ["evaluate"],
    category: "Evaluation & observability",
    kind: "Library",
    job: "A library for computing evaluation measurements through reusable modules. It helps teams apply documented metrics to model outputs consistently, while leaving the choice of suitable measures and interpretation of results to the evaluation design.",
    example:
      "A summarization project manager compares model revisions using automated text metrics and a separate reviewer rubric for important omissions.",
    question:
      "Does this metric measure the outcome we care about, and how does it relate to reviewer judgments?",
    limit:
      "A metric can reward superficial similarity while missing factual errors; reference quality and representative examples are essential to interpreting the score.",
    context:
      "The fundamentals evaluation exercises use Evaluate for measurements such as ROUGE; it also appears in the multimodal environment.",
    statusNote: null,
    url: "https://huggingface.co/docs/evaluate/index",
    lessonIds: ["f4", "m3"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Demo: Evaluating GenAI Models.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md",
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Exercise Solution: Evaluating GenAI Models.md",
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Exercise: Evaluating GenAI Models.md",
    ],
    glossaryId: null,
  },
  {
    id: "hugging-face-hub-client",
    name: "Hugging Face Hub client",
    aliases: ["huggingface-hub", "huggingface_hub"],
    category: "Workspaces & infrastructure",
    kind: "Library",
    job: "A Python client for accessing repositories on the Hugging Face Hub. It helps applications download and manage model or dataset files, connecting a reproducible workflow to particular repository resources rather than relying only on manual browsing.",
    example:
      "A model-governance manager asks the team to record the exact approved repository revision used in a customer-service experiment before sharing results.",
    question:
      "Can we identify the exact downloaded revision, access permissions, and terms for every model and dataset artifact?",
    limit:
      "A successful download does not verify an artifact’s safety, quality, or license suitability. Repository provenance, pinned revisions, and access handling still require review.",
    context:
      "Explicitly declared in focused capstone requirements as supporting infrastructure for model resources.",
    statusNote: null,
    url: "https://huggingface.co/docs/huggingface_hub/index",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "hugging-face-peft",
    name: "Hugging Face PEFT",
    aliases: ["peft"],
    category: "Training & adaptation",
    kind: "Library",
    job: "A library for adapting supported models through methods that train a relatively small set of parameters. It implements techniques such as LoRA, helping engineers explore specialization with lower training-resource requirements than updating all model weights.",
    example:
      "A service team tests whether an adapter improves the structure of internal case summaries while preserving performance on a held-out review set.",
    question:
      "What measurable behavior should adaptation improve, and what regressions would stop the rollout?",
    limit:
      "Efficient adaptation does not repair unsuitable training data or guarantee retained capabilities; adapters also depend on compatible base models and deployment support.",
    context:
      "The fine-tuning notebooks directly use the PEFT library. The general idea of parameter-efficient fine-tuning is broader than this software.",
    statusNote: null,
    url: "https://huggingface.co/docs/peft/index",
    lessonIds: ["f7", "f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/17 - Applying PEFT on Foundation Models/Demo: Teach an LLM a New Skill.ipynb",
      "1 - Generative AI Fundamentals/17 - Applying PEFT on Foundation Models/Exercise: Teach an LLM to Spell.ipynb",
      "1 - Generative AI Fundamentals/19 - Reinforcement Fine-tuning on Foundation Models/Demo: Teaching an LLM to Count.ipynb",
    ],
    glossaryId: "peft",
  },
  {
    id: "hugging-face-tokenizers",
    name: "Hugging Face Tokenizers",
    aliases: ["tokenizers"],
    category: "Data & analysis",
    kind: "Library",
    job: "A library for converting text into the token sequences expected by language models and converting those sequences back. It provides reusable tokenizer implementations and supporting operations that help applications handle text consistently with their chosen models.",
    example:
      "A multilingual service manager investigates why similarly sized customer messages consume different token counts before agreeing a usage forecast.",
    question:
      "Are our estimates and text preparation using the tokenizer that actually matches the deployed model?",
    limit:
      "Token counts and segmentation vary by model and language; swapping a tokenizer independently can break compatibility or distort estimates.",
    context:
      "The RAG tokenization lesson links this library as a practical resource for understanding tokenizer implementations.",
    statusNote: null,
    url: "https://huggingface.co/docs/tokenizers/index",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
    ],
    glossaryId: null,
  },
  {
    id: "hugging-face-transformers",
    name: "Hugging Face Transformers",
    aliases: ["transformers"],
    category: "Assistants & models",
    kind: "Library",
    job: "A library for working with pretrained models and their matching input processors. It gives technical teams common ways to load and run language, vision, and audio models, while leaving model selection and application evaluation to the team.",
    example:
      "A learning-platform manager compares a text classifier and an audio transcriber through demonstrations prepared by the same technical team.",
    question:
      "Which model and matching processor are actually being used, and what evidence supports the chosen task and input types?",
    limit:
      "The library does not make every model interchangeable or production-ready. Each model has its own capabilities, terms, hardware requirements, and validation needs.",
    context:
      "Used throughout the source exercises for model loading and inference; distinct from the Transformer architecture and the Hugging Face website.",
    statusNote: null,
    url: "https://huggingface.co/docs/transformers/index",
    lessonIds: ["f6", "f7", "f8", "r2", "m1", "m2", "m3", "m4", "m6"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Generating Text.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Advanced LLM Inference.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.md",
    ],
    glossaryId: "hugging-face-transformers",
  },
  {
    id: "hugging-face-trl",
    name: "Hugging Face TRL",
    aliases: ["trl", "Transformers Reinforcement Learning"],
    category: "Training & adaptation",
    kind: "Library",
    job: "A training library for post-training language models with approaches such as supervised learning and reinforcement-based methods. It provides trainers that connect example data, feedback or rewards with the model-adjustment process.",
    example:
      "A training lead compares a supervised baseline with a reward-driven experiment and requires reviewers to check both task success and unintended shortcuts.",
    question:
      "Does the reward or training objective actually represent the outcome we want?",
    limit:
      "A model may optimize a flawed reward without improving real usefulness; training runs require held-out tests and inspection of unexpected behavior.",
    context:
      "The adaptation and reinforcement fine-tuning exercises use TRL trainers, including supervised and GRPO workflows.",
    statusNote: null,
    url: "https://huggingface.co/docs/trl/index",
    lessonIds: ["f7", "f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/19 - Reinforcement Fine-tuning on Foundation Models/Demo: Teaching an LLM to Count.md",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/17 - Applying PEFT on Foundation Models/Demo: Teach an LLM a New Skill.ipynb",
      "1 - Generative AI Fundamentals/17 - Applying PEFT on Foundation Models/Exercise: Teach an LLM to Spell.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "hydra",
    name: "Hydra",
    aliases: ["hydra-core"],
    category: "Workspaces & infrastructure",
    kind: "Framework",
    job: "A framework for managing application and experiment settings through reusable configurations. It helps technical teams assemble related settings, vary them across runs, and keep complex model experiments organized without manually editing every setting each time.",
    example:
      "A vision project manager requests comparable trials across three model settings, with each result linked to the configuration that produced it.",
    question:
      "Can the team reproduce each reported result from its recorded configuration and input data?",
    limit:
      "Configuration organization does not guarantee reproducibility; model files, data versions, environment details, and random behavior also need to be recorded.",
    context:
      "The YOLOv9 video-detection demonstration uses Hydra to load and configure its model stack.",
    statusNote: null,
    url: "https://hydra.cc/docs/intro/",
    lessonIds: ["m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Demo: YOLOv9 Video Object Detection.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Exercise: Luggage Counting on a Conveyor Belt.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Solution: Luggage Counting on a Conveyor Belt.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "imagebind",
    name: "ImageBind",
    aliases: [],
    category: "Images & vision",
    kind: "Model family",
    job: "A research model that places different types of information into a shared representation space. It illustrates cross-modal retrieval, where an input such as sound can help find related visual material through learned similarity.",
    example:
      "A media-archive manager asks researchers to test whether a sound description can retrieve relevant approved images without manually tagging every file.",
    question:
      "Does cross-modal similarity retrieve the intended content, and which input types have actually been validated for our collection?",
    limit:
      "Shared representations do not guarantee complete understanding or accurate explanations. Research capabilities, available checkpoints, and permitted uses must be checked before a commercial deployment.",
    context:
      "Introduced in the multimodal foundations discussion as a shared-embedding research example.",
    statusNote: null,
    url: "https://github.com/facebookresearch/ImageBind",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/4 - Transformers & Multimodal Processing/How Transformers Became the Jack of All Trades (Part 2).md",
    ],
    glossaryId: null,
  },
  {
    id: "imageio",
    name: "ImageIO",
    aliases: ["imageio-ffmpeg"],
    category: "Audio & video",
    kind: "Library",
    job: "A library for reading and writing image and video data through compatible media backends. It helps convert stored media into frames or arrays that other tools can inspect, transform or analyze.",
    example:
      "A quality team samples frames from approved production-line footage so reviewers and a vision model examine the same moments in each test recording.",
    question:
      "Are decoding, frame timing and image quality preserved well enough for our evaluation?",
    limit:
      "Codec support depends on installed backends, and extracting frames can lose timing or audio context needed to interpret an event correctly.",
    context:
      "The multimodal environment uses ImageIO for media handling, including video support through its FFmpeg-related tooling.",
    statusNote: null,
    url: "https://imageio.readthedocs.io/en/stable/",
    lessonIds: ["m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/demo.ipynb",
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l4/demos/1-yolo/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l4/exercises/1-object-counting/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "imagenet",
    name: "ImageNet",
    aliases: [],
    category: "Evaluation & observability",
    kind: "Dataset / benchmark",
    job: "A large labeled image collection and associated benchmark history that shaped computer-vision development. It gives researchers shared tasks for training and comparing recognition models, helping explain why common evaluation datasets matter when assessing progress.",
    example:
      "A quality manager asks why a model with strong image-recognition benchmarks still misses defects in close-up photographs from their factory.",
    question:
      "How closely do the benchmark images and labels resemble the conditions and decisions in our application?",
    limit:
      "Broad object-recognition results do not establish performance on specialized imagery; dataset coverage, label assumptions, and usage terms must be considered.",
    context:
      "The fundamentals benchmarking lesson uses ImageNet as a historical example of shared evaluation; it is not the business dataset for the course app.",
    statusNote: null,
    url: "https://arxiv.org/abs/1409.0575",
    lessonIds: ["f4"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/8 - Evaluating Generative AI Models/Benchmarking GenAI Models.md",
      "1 - Generative AI Fundamentals/8 - Evaluating Generative AI Models/Benchmarking GenAI Models - Summary.md",
    ],
    glossaryId: null,
  },
  {
    id: "imdb-sentiment-dataset",
    name: "IMDb sentiment dataset",
    aliases: ["IMDb"],
    category: "Data & analysis",
    kind: "Dataset / benchmark",
    job: "A collection of movie reviews with sentiment labels used to study text classification. It provides a familiar example of learning to separate positive and negative opinions while exposing the importance of labeling choices and domain-specific language.",
    example:
      "A customer-experience manager reviews movie-review classification results, then requests a separate labeled sample of support messages before approving a customer sentiment pilot.",
    question:
      "How different is the language in these movie reviews from the messages where we intend to use the classifier?",
    limit:
      "Movie-review sentiment is a limited proxy for customer intent. Sarcasm, mixed opinions, and domain vocabulary can cause a classifier to transfer poorly.",
    context:
      "Used in the Hugging Face sentiment-classification demonstration in the fundamentals module.",
    statusNote: null,
    url: "https://aclanthology.org/P11-1015/",
    lessonIds: ["f6"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "internvl",
    name: "InternVL",
    aliases: ["InternVL 2.5"],
    category: "Images & vision",
    kind: "Model family",
    job: "A family of vision-language models that connects visual inputs with language tasks such as answering questions about images. It can serve as a component inside a larger research or business application.",
    example:
      "A document team evaluates whether a vision-language model can describe visible diagram relationships while staff verify the result against the original technical page.",
    question:
      "Which visual reasoning errors would make this model unsuitable for our review process?",
    limit:
      "Image interpretation can miss small details or invent relationships; family variants differ and require testing with representative visual material.",
    context:
      "The source names InternVL as a component in the SeC video-segmentation research discussion, rather than a separately deployed course assistant.",
    statusNote: null,
    url: "https://internvl.readthedocs.io/en/latest/internvl2.5/quick_start.html",
    lessonIds: ["m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/29 - AI Models for Video Undestanding/AI Models for Video Understanding.md",
    ],
    glossaryId: null,
  },
  {
    id: "ipykernel",
    name: "ipykernel",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "The Python execution component that connects a Python environment to a Jupyter notebook interface. It lets a notebook run its calculations in a selected environment, making the environment choice an important part of reproducing an experiment.",
    example:
      "A project lead asks why a notebook works for one analyst but fails for another, and the team checks their selected environments.",
    question:
      "Is the notebook using the intended environment with the required versions and access permissions?",
    limit:
      "A notebook interface can connect to the wrong environment; selecting a kernel does not verify that dependencies, hardware, or credentials are correct.",
    context:
      "Explicitly installed and registered in the counting-model notebook setup and included in the multimodal workspace dependencies.",
    statusNote: null,
    url: "https://ipykernel.readthedocs.io/en/stable/",
    lessonIds: ["f8", "m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l2/demos/2-clip/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l3/demos/2-clap/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "ipython",
    name: "IPython",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "An interactive Python environment that supports exploration, rich display, and notebook execution. It lets analysts inspect intermediate results and present experiments, providing part of the working environment beneath many educational and research notebooks.",
    example:
      "A team lead reviews an analyst’s notebook showing sample images, intermediate results, and evaluation tables before deciding whether the experiment warrants a larger pilot.",
    question:
      "Can the experiment run from a clean start with the same inputs and produce the reported results?",
    limit:
      "Interactive sessions can retain hidden state from earlier work. A polished display does not prove that the experiment is reproducible or ready for unattended operation.",
    context:
      "Used through notebook display and interactive execution features across the technical exercises.",
    statusNote: null,
    url: "https://ipython.org/",
    lessonIds: ["f6", "m1", "m4", "m5", "m6", "m7"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Generating Text.md",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Exercise: Multimodal AI Showcase.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Introduction to HuggingFace.md",
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Generating Text.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "ipython-autotime",
    name: "ipython-autotime",
    aliases: ["autotime"],
    category: "Workspaces & infrastructure",
    kind: "Developer tool",
    job: "A notebook extension that reports how long cells take to execute. It gives learners a simple view of experiment duration and can help identify slow steps before a more detailed performance investigation.",
    example:
      "A project lead compares the time spent preparing data, training and evaluating a small adaptation experiment before deciding where engineering effort could help.",
    question:
      "Which measured step is slowing the overall experiment, and was the comparison made under similar conditions?",
    limit:
      "Cell timing is a rough local measurement; it does not isolate every hardware, caching or external-service effect behind a delay.",
    context:
      "The fundamentals capstone explicitly loads this extension to display notebook execution times.",
    statusNote: null,
    url: "https://github.com/cpcloud/ipython-autotime",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "ipywidgets",
    name: "ipywidgets",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Library",
    job: "A library of interactive controls for Jupyter notebooks, such as sliders, selectors, and buttons. It helps analysts expose experiment settings and visual results to reviewers who need to explore behavior without changing the underlying implementation.",
    example:
      "A manager adjusts a threshold slider in a notebook demonstration to see how many images would be sent for human review.",
    question:
      "Does this control reveal the business tradeoff clearly, including the cases hidden by the default setting?",
    limit:
      "Notebook controls are useful for exploration but do not by themselves provide the deployment, accessibility, and access-management features of a production application.",
    context:
      "Declared in the multimodal exercise requirements as supporting notebook interactivity rather than a standalone AI service.",
    statusNote: null,
    url: "https://ipywidgets.readthedocs.io/en/stable/",
    lessonIds: ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l2/demos/2-clip/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l3/demos/2-clap/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l4/demos/1-yolo/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "jinja",
    name: "Jinja",
    aliases: ["jinja2"],
    category: "Applications & orchestration",
    kind: "Library",
    job: "A template engine that combines reusable text patterns with changing values. In an AI application it can assemble consistent prompts, helping a team separate standard instructions from the case-specific information supplied for each request.",
    example:
      "A service manager approves one response-assistance template with clearly separated policy instructions and customer details, then reviews outputs across several representative cases.",
    question:
      "Which parts of this prompt are controlled instructions, and which fields contain untrusted or variable information?",
    limit:
      "Consistent formatting does not prevent prompt injection or factual errors. Templates also need input handling and tests for missing, contradictory, or unusually long values.",
    context:
      "Named in the language-model material for assembling repeatable prompts with variable inputs.",
    statusNote: null,
    url: "https://jinja.palletsprojects.com/en/stable/",
    lessonIds: ["r2", "r3"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Prompt Templating.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/7 - Applying Prompt Instruction Refinement with Python/Exercise: Prompt Refinement.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/7 - Applying Prompt Instruction Refinement with Python/Solution: Prompt Refinement.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/7 - Applying Prompt Instruction Refinement with Python/lesson-3-prompt-instruction-refinement.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "jupyter",
    name: "Jupyter",
    aliases: ["JupyterLab", "Jupyter Notebook", "Jupyter Notebooks"],
    category: "Workspaces & infrastructure",
    kind: "Application",
    job: "An interactive notebook environment that combines explanatory text, executable analysis and displayed results in one workspace. It supports exploration and demonstrations, helping teams inspect how data and models behave during an experiment.",
    example:
      "A model-review meeting uses a prepared notebook to examine sample predictions, error cases and charts alongside the assumptions behind the evaluation.",
    question:
      "Can another team reproduce these results from a clean, documented environment?",
    limit:
      "Notebook state can depend on execution order and local files; a persuasive demonstration is not automatically a reproducible experiment or production application.",
    context:
      "The course uses Jupyter notebooks throughout its technical source exercises. Management lessons explain the workflow without requiring learners to run code.",
    statusNote: null,
    url: "https://jupyter.org/",
    lessonIds: [
      "f1",
      "f2",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "r1",
      "r3",
      "m1",
      "m2",
      "m4",
      "m5",
      "m6",
      "m8",
    ],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/7 - Applying Prompt Instruction Refinement with Python/Exercise: Prompt Refinement.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Demo: Pydantic.ai.md",
      "1 - Generative AI Fundamentals/Exercise/README.md",
    ],
    glossaryId: null,
  },
  {
    id: "kling",
    name: "Kling",
    aliases: ["Kling 2.1"],
    category: "Audio & video",
    kind: "Application",
    job: "A Kuaishou video-generation platform and model family for creating visual sequences from supported prompts and reference inputs. It can support concept development and production experiments where teams want to explore motion before committing to final footage.",
    example:
      "A marketing manager commissions draft product-story scenes from approved references, then compares continuity and brand fidelity before authorizing further production.",
    question:
      "Can the selected model preserve our subject and intended motion across the scenes we need?",
    limit:
      "Generated motion and object details may drift; supported inputs, duration, and controls depend on the chosen version and access route.",
    context:
      "The multimodal fundamentals and video-generation lessons discuss Kling as a creative alternative; archived duration claims are not carried forward.",
    statusNote: null,
    url: "https://kling.ai/App",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Technologies.md",
    ],
    glossaryId: null,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "A platform for coordinating containerized applications across computing infrastructure. It can schedule workloads, manage service instances, and support recovery when components fail, helping teams operate model services alongside the rest of an application.",
    example:
      "A platform manager evaluates how several model services will share capacity and recover during a planned infrastructure outage rehearsal.",
    question:
      "Does our team have the operational skills and workload scale to justify managing this orchestration platform?",
    limit:
      "Kubernetes does not supply model quality or automatic cost efficiency. Cluster operations, GPU scheduling, security, and application-level failure handling remain responsibilities of the team.",
    context:
      "Named in multimodal deployment material as an option for operating and scaling custom model services.",
    statusNote: null,
    url: "https://kubernetes.io/docs/concepts/overview/",
    lessonIds: ["m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/44 - Scaling Multimodal AI Architecture/Scaling Multimodal AI Architecture.md",
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "lance",
    name: "Lance",
    aliases: ["PyLance", "Lance Python SDK"],
    category: "Data & analysis",
    kind: "Database / storage",
    job: "A data format and supporting Python tooling for storing and working with AI-oriented datasets, including vectors and multimodal data. Its SDK exposes dataset files, versions and indices for teams building data infrastructure.",
    example:
      "A visual-search team keeps a versioned collection of product images and embeddings so an evaluation can be traced to the exact data used.",
    question:
      "How will dataset versioning, access control and updates fit our existing data ownership process?",
    limit:
      "The low-level format and SDK do not supply a complete managed application; operational responsibilities remain with the surrounding storage and service design.",
    context:
      "The course manifest names the Lance Python package. This is distinct from the similarly named Pylance editor extension and from the higher-level LanceDB product.",
    statusNote: null,
    url: "https://lance.org/quickstart/pylance/",
    lessonIds: ["m2", "m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/Exercise/l2/demos/2-clip/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l2/demos/3-dinov2/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l2/exercises/2-clip/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l2/exercises/4-grand-finale/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "langchain",
    name: "LangChain",
    aliases: [
      "langchain_core",
      "langchain_openai",
      "langchain-openai",
      "langchain-core",
    ],
    category: "Applications & orchestration",
    kind: "Framework",
    job: "A framework with integrations for connecting models to prompts, data, tools, and application workflows. It helps developers assemble model-assisted systems from reusable components, while the organization still defines the business process and acceptable behavior.",
    example:
      "A service manager pilots a workflow that retrieves policy evidence, drafts an answer, and records the source material used for review.",
    question:
      "Which components are necessary for our workflow, and how will the team trace and test failures between them?",
    limit:
      "An orchestration framework does not make model outputs correct; abstractions, integrations, and version changes can add operational and debugging complexity.",
    context:
      "The RAG source links LangChain for prompts and workflows; its OpenAI integration is a direct NASA project dependency.",
    statusNote: null,
    url: "https://docs.langchain.com/oss/python/langchain/overview",
    lessonIds: ["r1", "r2", "r4", "r6", "r8", "m1"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Prompt Templating.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Solution: RAG Evaluation.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/2 - The Large Language Model Landscape/Navigating the LLM Landscape.md",
    ],
    glossaryId: null,
  },
  {
    id: "langgraph",
    name: "LangGraph",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Framework",
    job: "A framework for coordinating stateful AI workflows and agents. It helps developers define steps, preserve workflow state, and add interruption or recovery behavior, making the sequence of model calls and actions easier to manage.",
    example:
      "A purchasing manager prototypes a workflow that gathers supplier information, drafts a comparison, and pauses for approval before recording a recommendation.",
    question:
      "Where does the workflow stop for human review, and what state is preserved when a step fails or resumes?",
    limit:
      "Orchestration does not make an agent trustworthy. Permissions, stopping conditions, repeatable evaluations, and protection against repeating external actions must be designed separately.",
    context:
      "Named in the multimodal tooling landscape as an agent and workflow orchestration option.",
    statusNote: null,
    url: "https://docs.langchain.com/oss/python/langgraph/overview",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
    ],
    glossaryId: null,
  },
  {
    id: "librispeech",
    name: "LibriSpeech",
    aliases: [],
    category: "Audio & video",
    kind: "Dataset / benchmark",
    job: "A speech dataset built from English audiobook recordings and accompanying text, widely used for speech-recognition research. It gives teams a common resource for measuring transcription behavior under defined dataset conditions.",
    example:
      "A learning team studies transcription errors on benchmark recordings, then repeats the assessment on consented workplace audio before choosing a meeting-transcription approach.",
    question:
      "How different are our speakers and recording conditions from the audiobook material in this dataset?",
    limit:
      "Read speech differs from spontaneous meetings, accents and overlapping speakers; benchmark results do not establish accuracy for a particular workplace.",
    context:
      "The audio material uses LibriSpeech examples in transcription demonstrations. It is a dataset, not a transcription service.",
    statusNote: null,
    url: "https://www.openslr.org/12",
    lessonIds: ["m4"],
    sourcePaths: [
      "3 - Multimodal AI Applications/23 - Implementing Speech Processing with Whisper & Gemini/Demo: Audio Transcription with Gemini.md",
      "3 - Multimodal AI Applications/23 - Implementing Speech Processing with Whisper & Gemini/Demo: Speech Transcription with Whisper.md",
      "3 - Multimodal AI Applications/23 - Implementing Speech Processing with Whisper & Gemini/4-gemini demo.ipynb",
      "3 - Multimodal AI Applications/23 - Implementing Speech Processing with Whisper & Gemini/3-whisper demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "librosa",
    name: "librosa",
    aliases: [],
    category: "Audio & video",
    kind: "Library",
    job: "A Python library for analyzing audio and music signals, including transformations and features that describe sound. It helps teams prepare recordings and inspect patterns before or alongside speech and audio models in a larger application.",
    example:
      "A training-content manager asks an analyst to compare recording levels and silence patterns before sending a batch of lessons for transcription.",
    question:
      "Which signal checks improve our downstream outcome, and have they been validated on representative recordings?",
    limit:
      "Audio features describe signals rather than meaning; speech understanding, speaker interpretation, and business judgments require additional models or review.",
    context:
      "The audio-processing lessons use librosa directly for loading, inspecting, and transforming recordings.",
    statusNote: null,
    url: "https://librosa.org/doc/latest/index.html",
    lessonIds: ["m1", "m4", "m5"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/19 - Audio Processing with librosa/Demo: Audio Processing with librosa.md",
      "3 - Multimodal AI Applications/19 - Audio Processing with librosa/Exercise: Music Analysis with librosa.md",
      "3 - Multimodal AI Applications/19 - Audio Processing with librosa/Solution: Music Analysis with librosa.md",
    ],
    glossaryId: "librosa",
  },
  {
    id: "litellm",
    name: "LiteLLM",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Library",
    job: "A common interface and gateway layer for connecting applications to different model providers. It can reduce integration differences and centralize some operating controls, helping a team compare or route models through a shared application pathway.",
    example:
      "A product manager compares two approved providers on the same support-answer evaluation without asking the application team to rebuild each integration.",
    question:
      "Which differences between providers remain visible in our evaluation, data handling, failure behavior, and output format?",
    limit:
      "A shared interface does not make models equivalent. Provider-specific features, request limits, privacy arrangements, and output behavior still need separate testing and governance.",
    context:
      "Used in source notebooks as a common interface for calling model providers.",
    statusNote: null,
    url: "https://docs.litellm.ai/",
    lessonIds: ["f1", "f2", "f4"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/4 - Applications of Generative AI/Demo: LLM Assisted Coding.md",
      "1 - Generative AI Fundamentals/6 - Building Applications using Foundation Models/Demo: Build a Sentiment Classifier.md",
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Exercise Solution: Evaluating GenAI Models.md",
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Exercise: Evaluating GenAI Models.md",
    ],
    glossaryId: null,
  },
  {
    id: "lj-speech",
    name: "LJ Speech",
    aliases: ["LJSpeech"],
    category: "Audio & video",
    kind: "Dataset / benchmark",
    job: "A dataset of recorded speech and text from a single speaker, useful for speech demonstrations and research. It provides reusable examples for examining audio processing while representing a deliberately narrow range of voices.",
    example:
      "A training-content team uses sample recordings to learn how an audio pipeline works before evaluating representative voices and recording styles from approved company material.",
    question:
      "What additional speakers and speaking conditions are needed before the results inform our decision?",
    limit:
      "A single-speaker dataset cannot establish performance across voices, accents or conversational settings, and dataset permissions do not authorize unrelated voice imitation.",
    context:
      "The source exercises use LJ Speech as demonstration audio rather than as an audio-generation application.",
    statusNote: null,
    url: "https://keithito.com/LJ-Speech-Dataset/",
    lessonIds: ["m1", "m4"],
    sourcePaths: [
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Demo: Pydantic.ai.md",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Exercise: Multimodal AI Showcase.md",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Solution: Multimodal AI Showcase.md",
      "3 - Multimodal AI Applications/19 - Audio Processing with librosa/Demo: Audio Processing with librosa.md",
    ],
    glossaryId: null,
  },
  {
    id: "llama",
    name: "Llama",
    aliases: ["Llama 4", "Llama Scout", "Llama Maverick"],
    category: "Assistants & models",
    kind: "Model family",
    job: "A Meta model family whose released weights allow supported models to be run on chosen infrastructure under their applicable licenses. It provides an alternative operating arrangement to consuming a model only through a proprietary hosted interface.",
    example:
      "A technology manager evaluates running a suitable Llama model in an approved environment for an internal document assistant pilot.",
    question:
      "Do the model license, hardware needs, and operational responsibilities fit our intended use?",
    limit:
      "Access to weights does not remove licensing conditions or operating work; security, serving capacity, evaluation, and maintenance remain team responsibilities.",
    context:
      "Introduced as a foundation-model family and referenced in prompting and deployment comparisons; versions are grouped under the family.",
    statusNote: null,
    url: "https://github.com/meta-llama/llama-models",
    lessonIds: ["f2", "r2", "m1", "m5", "m7"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/Training Data for LLMs.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/5 - Applied Prompting and Inference/Solution: Prompt Chain of Thought.md",
      "3 - Multimodal AI Applications/24 - Audio Intelligence/Audio Intelligence.md",
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/What is a Foundation Model?.md",
    ],
    glossaryId: "llama",
  },
  {
    id: "llamaindex",
    name: "LlamaIndex",
    aliases: ["llama-index"],
    category: "Knowledge & retrieval",
    kind: "Framework",
    job: "A framework for connecting AI applications to data through ingestion, indexing, retrieval, and related workflows. It helps teams assemble document-grounded applications, while the organization still defines which sources are authoritative and who may access them.",
    example:
      "A compliance manager asks a team to build a policy assistant that retrieves approved documents and exposes the evidence behind each draft answer.",
    question:
      "How are document permissions, freshness, source citations, and retrieval failures enforced throughout the workflow?",
    limit:
      "Connecting documents does not guarantee grounded answers. Parsing errors, stale indexes, unsuitable retrieval settings, and missing access controls can undermine the entire application.",
    context:
      "Linked in RAG resources for indexing, retrieval, and evaluation concepts.",
    statusNote: null,
    url: "https://developers.llamaindex.ai/python/framework/",
    lessonIds: ["r4", "r6", "r8"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/12 - Retrieval Augmented Generation (RAG) Workflow/RAG Workflow Concepts.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Resources for Further Learning.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/ragas_rag_evaluation.py",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/Exercise/RAG Evaluation Implementation/exercises/starter/README.md",
    ],
    glossaryId: null,
  },
  {
    id: "llava",
    name: "LLaVA",
    aliases: [],
    category: "Images & vision",
    kind: "Model family",
    job: "A family of vision-language models that combines visual representations with language instruction following. It supports research and prototypes that ask questions about images or produce descriptions using both visual input and text instructions.",
    example:
      "A field-service team tests draft photo descriptions for equipment inspections and has technicians verify whether the visible evidence supports each stated observation.",
    question:
      "Which visual details must the system recognize reliably, and when should it defer to a reviewer?",
    limit:
      "Fluent descriptions can invent objects or miss fine details, and results depend on the selected model variant and image conditions.",
    context:
      "The multimodal lessons present LLaVA as an example of connecting a vision encoder with a language model.",
    statusNote: null,
    url: "https://llava-vl.github.io/",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/4 - Transformers & Multimodal Processing/How Transformers Became the Jack of All Trades (Part 1).md",
    ],
    glossaryId: null,
  },
  {
    id: "macos",
    name: "macOS",
    aliases: ["Apple Silicon"],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "Apple’s operating system for Mac computers, used as a local development environment in the archive. It affects which software packages, hardware acceleration options, and setup steps are available when a team tries to reproduce an AI experiment.",
    example:
      "A department manager checks whether a demonstration can run on staff Mac laptops or needs a separate approved cloud workspace.",
    question:
      "Has the proposed workflow been tested on the specific Mac hardware and software versions our team uses?",
    limit:
      "Local compatibility differs from a Linux GPU server; Apple hardware does not run NVIDIA CUDA workloads through the same acceleration stack.",
    context:
      "The fundamentals exercise README documents local Apple Silicon setup; macOS is an environment, not an AI model or course requirement for managers.",
    statusNote: null,
    url: "https://support.apple.com/macos",
    lessonIds: ["f5", "f6", "f7", "f8"],
    sourcePaths: ["1 - Generative AI Fundamentals/Exercise/README.md"],
    glossaryId: null,
  },
  {
    id: "magicbrush",
    name: "MagicBrush",
    aliases: [],
    category: "Images & vision",
    kind: "Dataset / benchmark",
    job: "A research dataset of source images, editing instructions, and target images for instruction-guided image editing. It helps teams study whether an editing model changes the requested detail while preserving the rest of the scene.",
    example:
      "A creative-operations manager asks evaluators to check whether changing a product background also alters the logo, shape, or other details that must remain consistent.",
    question:
      "How will our evaluation measure both the requested edit and the unintended changes elsewhere in the image?",
    limit:
      "Dataset performance does not guarantee accurate brand or product editing. Commercial image rights, subtle distortions, and the team’s real editing instructions need separate review.",
    context:
      "Used as a named image-editing learning resource in multimodal source examples.",
    statusNote: null,
    url: "https://osu-nlp-group.github.io/MagicBrush/",
    lessonIds: ["m2"],
    sourcePaths: [
      "3 - Multimodal AI Applications/7 - Vision Pre-processing Pipelines with HuggingFace/Exercise: Resizing and Normalizing Images.md",
      "3 - Multimodal AI Applications/7 - Vision Pre-processing Pipelines with HuggingFace/Solution: Resizing and Normalizing Images.md",
      "3 - Multimodal AI Applications/7 - Vision Pre-processing Pipelines with HuggingFace/exercise.ipynb",
      "3 - Multimodal AI Applications/Exercise/l2/exercises/1-vision-processing/starter/exercise.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "matplotlib",
    name: "Matplotlib",
    aliases: ["pyplot"],
    category: "Data & analysis",
    kind: "Library",
    job: "A plotting library for turning numerical results into charts and images. In AI work, it helps teams inspect training progress, compare evaluations and communicate patterns that may be difficult to notice in raw tables.",
    example:
      "A program manager reviews a chart of model errors by document type and directs the next pilot toward the categories with the largest gaps.",
    question:
      "Do the chart’s scale, grouping and underlying sample sizes support the decision we are making?",
    limit:
      "A clear chart can still mislead if the data, labels or aggregation are wrong; visualization does not replace statistical or contextual review.",
    context:
      "The source notebooks directly use Matplotlib for training curves, evaluation results and multimodal data displays.",
    statusNote: null,
    url: "https://matplotlib.org/stable/",
    lessonIds: ["f5", "f8", "r4", "r5", "r8", "m1", "m2", "m3", "m4", "m6"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Demo: Comparing PyTorch Optimizers.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/ragas_rag_evaluation.py",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Demo: Pydantic.ai.md",
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Demo: Introduction to PyTorch.md",
    ],
    glossaryId: null,
  },
  {
    id: "mbux-virtual-assistant",
    name: "MBUX Virtual Assistant",
    aliases: [],
    category: "Assistants & models",
    kind: "Example system",
    job: "A Mercedes-Benz vehicle assistant used in the course as an example of embedding conversational AI into an existing product. It illustrates how a user-facing assistant depends on domain information, integration, and the surrounding product experience.",
    example:
      "A mobility product manager studies the case to define how a future travel assistant should answer contextual questions within an existing customer journey.",
    question:
      "Which information and actions can the assistant reliably access in the actual product environment?",
    limit:
      "A vendor case study does not prove every imagined capability; availability and behavior depend on the vehicle, product version, and integration.",
    context:
      "The deployment lesson cites Mercedes-Benz and Google Cloud. The checked announcement supports conversational place information; unverified camera-context claims are omitted.",
    statusNote: null,
    url: "https://blog.google/feed/mercedes-google-cloud-automotive-ai-agent/",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/37 - Multimodal AI Deployment/Understanding Multimodal AI Deployment.md",
    ],
    glossaryId: null,
  },
  {
    id: "meld",
    name: "MELD",
    aliases: [],
    category: "Audio & video",
    kind: "Dataset / benchmark",
    job: "A research dataset combining dialogue text, audio, and visual information with emotion labels. It supports experiments on emotion recognition in conversations, helping managers examine how contextual signals and human labeling affect an evaluation.",
    example:
      "A service-training manager uses a research demonstration to discuss ambiguous emotional cues, then rejects using its labels as automatic judgments of employee behavior.",
    question:
      "Are these labels suitable for our purpose, and how will we avoid treating a model’s emotion label as a person’s inner state?",
    limit:
      "The dataset uses scripted television dialogue. Its labels and performance should not be treated as reliable measurements of real customers’ or employees’ emotions.",
    context:
      "Used in audio sentiment examples in the multimodal source material.",
    statusNote: null,
    url: "https://affective-meld.github.io/",
    lessonIds: ["m5"],
    sourcePaths: [
      "3 - Multimodal AI Applications/25 - Audio Sentiment Analysis with Gemini/Demo: Audio Sentiment Analysis with Pydantic AI and Gemini.md",
      "3 - Multimodal AI Applications/25 - Audio Sentiment Analysis with Gemini/demo.ipynb",
      "3 - Multimodal AI Applications/Exercise/l3/demos/5-sentiment-analysis/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "metaclip",
    name: "MetaCLIP",
    aliases: [],
    category: "Images & vision",
    kind: "Model family",
    job: "An image-text representation model family that studies how curated training data supports visual-language alignment. Its representations can help applications compare an image with text descriptions or perform similarity-based visual retrieval.",
    example:
      "A catalog team searches approved product images using descriptive phrases, then checks whether the results reflect actual product attributes rather than incidental scenery.",
    question:
      "Do text-image matches remain useful across our product categories and photography styles?",
    limit:
      "Image-text similarity does not establish identity or a factual product attribute, and training-data choices can affect which associations the model learns.",
    context:
      "The multimodal model landscape names MetaCLIP as an image-text model alternative and research example.",
    statusNote: null,
    url: "https://github.com/facebookresearch/MetaCLIP",
    lessonIds: ["m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/14 - Vision-Language Models/Vision-Language Models Overview.md",
    ],
    glossaryId: null,
  },
  {
    id: "microsoft-azure",
    name: "Microsoft Azure",
    aliases: ["Azure"],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "A cloud platform for running applications and accessing infrastructure, data, and managed AI services. It gives organizations several operating choices, from custom model hosting to specialized services, with responsibilities determined by the particular architecture.",
    example:
      "A service operations manager compares a managed media-analysis service with a custom model deployment in the organization’s existing Azure environment.",
    question:
      "Which service owns each operational responsibility, and how does it fit our existing identity and data controls?",
    limit:
      "Azure is a platform rather than one model; capabilities, data handling, reliability, and resource limits vary across services and configurations.",
    context:
      "The speech and deployment lessons name Azure as a cloud alternative; it is separate from individual services such as Video Indexer.",
    statusNote: null,
    url: "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure",
    lessonIds: ["m1", "m4", "m6", "m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/22 - Speech Processing/Whisper.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
      "3 - Multimodal AI Applications/33 - Video Classification & Moderation/Video Moderation.md",
      "3 - Multimodal AI Applications/31 - Video Understanding & Search/Video Understanding with Foundation models.md",
    ],
    glossaryId: null,
  },
  {
    id: "microsoft-azure-ai-services",
    name: "Microsoft Azure AI services",
    aliases: ["Azure AI services", "Foundry Tools"],
    category: "Applications & orchestration",
    kind: "Platform / service",
    job: "A collection of managed AI capabilities used to add functions such as language, speech, and vision processing to applications. It illustrates assembling specialized hosted services when a single general model is not the right operational fit.",
    example:
      "An operations director compares separate speech and document-processing services for a pilot that converts approved service recordings into reviewed case summaries.",
    question:
      "Which individual services, regions, data controls, and service commitments match each step of our workflow?",
    limit:
      "This is an umbrella collection, not one interchangeable model. Capabilities and availability differ by service; current Microsoft documentation uses the Foundry Tools name.",
    context:
      "Named as Azure AI services in the multimodal implementation discussion; retain that source label while explaining the current documentation branding.",
    statusNote: null,
    url: "https://learn.microsoft.com/en-us/azure/ai-services/what-are-ai-services",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "microsoft-copilot-studio",
    name: "Microsoft Copilot Studio",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Platform / service",
    job: "A platform for creating and managing agents connected to business knowledge and actions. It gives teams visual building tools and integration options while the organization defines the agent’s scope, permissions and review requirements.",
    example:
      "An HR operations team builds an agent that finds approved leave-policy information and routes unusual cases to staff instead of approving requests automatically.",
    question:
      "Which connections and actions should this agent have, and who is accountable for their use?",
    limit:
      "A visual builder does not remove the need for permission design, content ownership and evaluation; connected actions can still have real operational consequences.",
    context:
      "The tooling landscape names Copilot Studio as an enterprise agent-building option, rather than an installed course dependency.",
    statusNote: null,
    url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "midjourney",
    name: "Midjourney",
    aliases: ["Midjourney V7"],
    category: "Images & vision",
    kind: "Application",
    job: "A creative application for generating and refining images from prompts and visual references, with related motion features. It helps teams explore art direction, composition, and variations before selecting work for further editing and business review.",
    example:
      "A brand manager explores three illustration styles for an internal campaign, comparing the resulting assets against approved visual guidelines.",
    question:
      "How will we control visual consistency, confidentiality, and final asset approval within the chosen workflow?",
    limit:
      "Attractive outputs can misrepresent products or include inconsistent details; review rights, privacy settings, and factual content before using generated assets.",
    context:
      "Named in the multimodal fundamentals lesson as an image-generation option; specific archived version labels do not imply current availability.",
    statusNote: null,
    url: "https://docs.midjourney.com/hc/en-us/articles/33329261836941-Getting-Started-Guide",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Technologies.md",
    ],
    glossaryId: null,
  },
  {
    id: "milvus",
    name: "Milvus",
    aliases: [],
    category: "Knowledge & retrieval",
    kind: "Database / storage",
    job: "A vector database for storing and searching learned representations. It helps retrieval applications find semantically similar items, giving teams infrastructure for searching large collections while leaving the meaning and quality of those representations to the embedding model.",
    example:
      "A knowledge-platform manager tests whether a document assistant can retrieve relevant passages quickly as the approved collection grows across departments.",
    question:
      "Can the search system meet recall, filtering, update, and response-time requirements on our actual collection?",
    limit:
      "Fast similarity search cannot repair poor embeddings or missing documents. Deployment operations, index configuration, and access filtering still determine whether retrieval is useful and controlled.",
    context:
      "Referenced in the RAG material as one option for vector-based retrieval infrastructure.",
    statusNote: null,
    url: "https://milvus.io/docs/overview.md",
    lessonIds: ["r4", "r6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Vectors and Vector Search.md",
    ],
    glossaryId: null,
  },
  {
    id: "minilm",
    name: "MiniLM",
    aliases: ["sentence-transformers/all-MiniLM-L6-v2", "all-MiniLM-L6-v2"],
    category: "Knowledge & retrieval",
    kind: "Model family",
    job: "A compact model family represented in the course by a sentence-embedding model. That model turns short text into vectors so a workflow can compare meaning or retrieve related passages without asking a chatbot to judge every pair.",
    example:
      "A training manager groups similar learner questions and reviews whether the clusters capture shared needs before assigning new lesson topics.",
    question:
      "What kinds of similar wording or different meaning must our evaluation distinguish?",
    limit:
      "The course embedding variant is not a general-purpose assistant; similarity scores can obscure negation, specialized terminology or important factual differences.",
    context:
      "The evaluation and retrieval notebooks use all-MiniLM-L6-v2 through Sentence Transformers. MiniLM is the model family; Sentence Transformers is the library.",
    statusNote: null,
    url: "https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2",
    lessonIds: ["f4", "r6", "r7", "r8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Demo: Evaluating GenAI Models.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/15 - Implementing RAG with Vector Databases/Demo: Vector Database Operations.md",
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Demo: Evaluating GenAI Models.ipynb",
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Exercise: Evaluating GenAI Models.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "mistral",
    name: "Mistral",
    aliases: ["Mistral Small 3.2"],
    category: "Assistants & models",
    kind: "Model family",
    job: "A family of models developed by Mistral AI for language and other supported tasks. Teams can consider particular models within the family when comparing capabilities, deployment options, and the fit between a model and a defined business workload.",
    example:
      "A European support manager compares candidate models on multilingual ticket summaries using the same reviewer rubric and representative customer vocabulary.",
    question:
      "Which specific model, license, and deployment route meet our quality and operating requirements?",
    limit:
      "The family name does not guarantee a common license or capability set; open-weight and hosted offerings require separate checks for the selected model.",
    context:
      "The fundamentals foundation-model overview includes Mistral among model choices; its historical examples are grouped under the family.",
    statusNote: null,
    url: "https://docs.mistral.ai/",
    lessonIds: ["f2"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/What is a Foundation Model?.md",
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/What is a Foundation Model? - Summary.md",
    ],
    glossaryId: null,
  },
  {
    id: "molmo",
    name: "Molmo",
    aliases: [],
    category: "Images & vision",
    kind: "Model family",
    job: "A vision-language model family from Allen Institute for AI that connects image content with language. It is discussed for interpreting images and referring to locations, illustrating how visual evidence can support an assistant’s response.",
    example:
      "A warehouse manager tests whether a model can identify the relevant part of a damaged-package photo before a human reviews the suggested explanation.",
    question:
      "Does the model reliably identify the visual evidence needed for our task across realistic image quality and scene variation?",
    limit:
      "An image-based answer can still misidentify objects or locations. Validate the selected checkpoint and do not treat confident visual language as evidence of reliable perception.",
    context:
      "Named in multimodal model comparisons as an image-understanding option.",
    statusNote: null,
    url: "https://github.com/allenai/molmo",
    lessonIds: ["m1", "m5"],
    sourcePaths: [
      "3 - Multimodal AI Applications/24 - Audio Intelligence/Audio Intelligence.md",
      "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Technologies.md",
    ],
    glossaryId: null,
  },
  {
    id: "mteb",
    name: "MTEB",
    aliases: ["MTEB Leaderboard"],
    category: "Evaluation & observability",
    kind: "Dataset / benchmark",
    job: "A benchmark suite and leaderboard for evaluating embedding models across multiple tasks. It helps teams investigate model behavior beyond a single similarity example, while providing a starting point for a task-specific shortlist.",
    example:
      "A search project lead reviews embedding benchmark results, then tests shortlisted models against real internal questions and access-controlled documents before selecting one.",
    question:
      "Which benchmark tasks resemble our retrieval workload, and which important conditions are missing?",
    limit:
      "A leaderboard position does not predict every business task; dataset languages, evaluation settings and resource constraints can change the practical choice.",
    context:
      "The retrieval material points to MTEB as an embedding-evaluation resource, rather than prescribing the highest-ranked model.",
    statusNote: null,
    url: "https://huggingface.co/spaces/mteb/leaderboard",
    lessonIds: ["r6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Retrieval, Ranking.md",
    ],
    glossaryId: null,
  },
  {
    id: "mysql",
    name: "MySQL",
    aliases: [],
    category: "Data & analysis",
    kind: "Database / storage",
    job: "A relational database system for organizing and querying structured records such as customers, products, and transactions. In AI systems it may supply trusted operational data or participate in retrieval, depending on the selected product and available features.",
    example:
      "A customer-service manager asks the team to combine approved policy answers with current order details held in the company’s database.",
    question:
      "Can our actual MySQL deployment support the required retrieval pattern without compromising transactional performance or access rules?",
    limit:
      "Vector capabilities depend on the MySQL product, version, and service configuration; neither universal support nor universal inability should be assumed.",
    context:
      "The vector-database lesson uses MySQL as a comparison point. The guide corrects the source’s blanket claim that relational databases cannot support vector search.",
    statusNote: null,
    url: "https://dev.mysql.com/doc/",
    lessonIds: ["r6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases.md",
    ],
    glossaryId: null,
  },
  {
    id: "nasa-mission-intelligence",
    name: "NASA Mission Intelligence",
    aliases: ["NASA RAG Chat Project", "NASA RAG Chat"],
    category: "Knowledge & retrieval",
    kind: "Example system",
    job: "The course’s document-grounded chat capstone built around NASA mission material. It combines retrieval and generated answers to demonstrate how a knowledge assistant should find supporting information, handle gaps, and expose evidence for review.",
    example:
      "A program manager adapts the project pattern to an approved engineering archive and tests questions whose answers require citing specific source passages.",
    question:
      "Can the assistant show sufficient supporting evidence and acknowledge when the approved archive cannot answer the question?",
    limit:
      "This is an educational course project, not an official NASA service. A successful demonstration does not establish production access controls, accuracy, or operating readiness.",
    context:
      "Named in the RAG module outcomes and capstone starter project as NASA Mission Intelligence or NASA RAG Chat.",
    statusNote: null,
    url: null,
    lessonIds: ["r8"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/1 - Introduction to LLMs and Retrival Augmented Generation (RAG)/Course Outcomes.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Project-NASA-Mission-Intelligence-Starter/README.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Project-NASA-Mission-Intelligence-Starter/chat.py",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Project-NASA-Mission-Intelligence-Starter/llm_client.py",
    ],
    glossaryId: "nasa-mission-intelligence",
  },
  {
    id: "nest-asyncio",
    name: "nest-asyncio",
    aliases: ["nest_asyncio"],
    category: "Workspaces & infrastructure",
    kind: "Library",
    job: "A small compatibility utility that permits certain nested asynchronous execution patterns in Python notebooks. It appears in older experimental environments where notebook execution and asynchronous libraries otherwise compete over the same event loop.",
    example:
      "A team maintaining a legacy demonstration records why this compatibility patch exists before engineers replace it with a supported notebook execution pattern.",
    question:
      "Can we remove this compatibility workaround when updating the exercise environment?",
    limit:
      "The original repository is archived, and patching execution behavior can hide compatibility problems rather than solve the underlying application design issue.",
    context:
      "The source environment uses this notebook helper. Its repository was archived in March 2024, so it is documented as legacy support tooling.",
    statusNote:
      "Original repository archived in March 2024; retained as legacy notebook support tooling.",
    url: "https://github.com/erdewit/nest_asyncio",
    lessonIds: ["m1", "m2", "m5", "m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Demo: Pydantic.ai.md",
      "3 - Multimodal AI Applications/11 - Gemini Vision API Basics/Exercise: Image Moderation with Gemini.md",
      "3 - Multimodal AI Applications/11 - Gemini Vision API Basics/Solution: Image Moderation with Gemini.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Exercise: Broken Wire Detector with Pydantic.ai.md",
    ],
    glossaryId: null,
  },
  {
    id: "num2words",
    name: "num2words",
    aliases: [],
    category: "Data & analysis",
    kind: "Library",
    job: "A library that converts numbers into written words for supported languages and formats. It is a supporting text-preparation component, useful when a downstream speech or text workflow needs a controlled verbal form of a numeric value.",
    example:
      "A communications manager asks the team to verify that scripted training narration reads quantities and monetary amounts in the intended local format.",
    question:
      "Which languages and number formats must be tested to preserve the meaning of our messages?",
    limit:
      "Written number forms depend on language and context; dates, identifiers, currencies, and decimals can require different treatment and targeted checks.",
    context:
      "Explicitly declared in the multimodal exercise requirements; the source does not present it as an independent generative model.",
    statusNote: null,
    url: "https://github.com/savoirfairelinux/num2words",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l1/demos/1-showcase/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l1/exercises/1-showcase-exercise/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "numpy",
    name: "NumPy",
    aliases: ["np"],
    category: "Data & analysis",
    kind: "Library",
    job: "A foundational library for numerical arrays and calculations in Python. It supports operations on embeddings, model inputs, measurements, and evaluation results, providing much of the numerical groundwork beneath higher-level AI and scientific tools.",
    example:
      "An analytics manager asks the team to reproduce a similarity calculation and explain how missing values or normalization affect the reported retrieval comparison.",
    question:
      "Are the data types, dimensions, units, and missing-value rules consistent across the calculations behind our results?",
    limit:
      "Accurate arithmetic can still produce a misleading result when inputs, units, or assumptions are wrong. Numerical calculations need validation against the intended business meaning.",
    context:
      "Used across source modules for numerical data, similarity calculations, training support, and evaluation analysis.",
    statusNote: null,
    url: "https://numpy.org/doc/stable/",
    lessonIds: [
      "f4",
      "f5",
      "f8",
      "r1",
      "r4",
      "r5",
      "r7",
      "r8",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
    ],
    sourcePaths: [
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Demo: Comparing PyTorch Optimizers.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/9 - Implementing Tokens, Embeddings, and Vector Search/Exercise: Embeddings and Vector Search.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "nvidia-canary-qwen",
    name: "NVIDIA Canary-Qwen",
    aliases: ["Canary-Qwen-2.5B"],
    category: "Audio & video",
    kind: "Model family",
    job: "A speech-language model represented here by Canary-Qwen-2.5B, designed for English speech recognition and related transcript processing. It can support a self-managed transcription workflow when a team supplies suitable runtime infrastructure.",
    example:
      "A service-quality team evaluates a locally hosted transcription pilot on consented English calls, checking product names and noisy segments against human-reviewed transcripts.",
    question:
      "Does the model handle our English speech conditions reliably enough for the intended review task?",
    limit:
      "The cited model is English-focused; its benchmark performance does not establish multilingual reliability or accuracy on long, noisy and overlapping conversations.",
    context:
      "The audio source names Canary-Qwen as a self-hosted speech-recognition alternative. This entry describes the cited model rather than all NVIDIA speech products.",
    statusNote: null,
    url: "https://huggingface.co/nvidia/canary-qwen-2.5b",
    lessonIds: ["m4"],
    sourcePaths: [
      "3 - Multimodal AI Applications/22 - Speech Processing/Whisper.md",
    ],
    glossaryId: null,
  },
  {
    id: "nvidia-cuda",
    name: "NVIDIA CUDA",
    aliases: ["CUDA"],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "NVIDIA’s GPU computing platform and development environment, used by many AI libraries to accelerate supported calculations. It connects compatible hardware with the software stack that trains and runs models, making compatibility part of deployment planning.",
    example:
      "A project manager checks whether the proposed training environment supports the required GPU software before booking resources for a pilot.",
    question:
      "Are the GPU, drivers, runtime, and model libraries tested together as one supported environment?",
    limit:
      "CUDA depends on compatible NVIDIA hardware and software; installing a package does not guarantee available acceleration or sufficient GPU memory.",
    context:
      "The fundamentals acceleration primer and project environment explain CUDA; multimodal exercises also select it when compatible hardware is available.",
    statusNote: null,
    url: "https://developer.nvidia.com/cuda",
    lessonIds: ["f5", "f6", "f7", "f8", "m1", "m2", "m3", "m4", "m6"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/The Acceleration Stack: A Primer.md",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Solution: Multimodal AI Showcase.md",
      "1 - Generative AI Fundamentals/Exercise/project/README.md",
      "3 - Multimodal AI Applications/9 - Image Search using CLIP Embeddings/Exercise: Image to Image Search with CLIP.md",
    ],
    glossaryId: null,
  },
  {
    id: "nvidia-system-management-interface",
    name: "NVIDIA System Management Interface",
    aliases: ["nvidia-smi", "NVSMI"],
    category: "Workspaces & infrastructure",
    kind: "Developer tool",
    job: "A utility for inspecting and managing supported NVIDIA GPU devices. It reports information such as memory use, device utilization, and running processes, helping technical teams investigate whether computing resources are available and being used as expected.",
    example:
      "A project manager asks engineers to explain why an experiment is slow and whether the allocated GPU is busy, idle, or out of memory.",
    question:
      "What do the device measurements reveal about the bottleneck, and what additional application evidence supports that diagnosis?",
    limit:
      "Device utilization is not a measure of model quality or business value. Short snapshots can also miss bottlenecks outside the GPU, such as data loading.",
    context:
      "Named in source environment checks for GPU availability, memory, and active processes.",
    statusNote: null,
    url: "https://docs.nvidia.com/deploy/nvidia-smi/index.html",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/Instructions.md",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
      "1 - Generative AI Fundamentals/Exercise/project/README.md",
    ],
    glossaryId: null,
  },
  {
    id: "nvidia-t4",
    name: "NVIDIA T4",
    aliases: ["Tesla T4", "T4"],
    category: "Workspaces & infrastructure",
    kind: "Hardware",
    job: "A GPU accelerator used for machine-learning workloads, including the course’s model-adaptation environment. It illustrates the role of hardware capacity in determining which models, training configurations and batch sizes an experiment can support.",
    example:
      "A project sponsor asks the engineering team to demonstrate that a planned small-model experiment fits its allocated GPU before approving a larger training schedule.",
    question:
      "What workload fits the available accelerator memory and acceptable experiment duration?",
    limit:
      "A hardware name alone does not establish capacity for a model; memory use, numerical formats and software compatibility determine practical limits.",
    context:
      "The fundamentals project explicitly names the T4 as an example accelerator environment, not as a current purchasing recommendation.",
    statusNote: null,
    url: "https://www.nvidia.com/en-us/data-center/tesla-t4/",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/The Acceleration Stack: A Primer.md",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
      "1 - Generative AI Fundamentals/Exercise/project/README.md",
    ],
    glossaryId: null,
  },
  {
    id: "nvidia-tensorrt",
    name: "NVIDIA TensorRT",
    aliases: ["TensorRT"],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "An NVIDIA toolkit and runtime for optimizing and executing supported trained models for inference. Teams use it to improve deployment efficiency on compatible hardware while checking that converted models retain the behavior required by the application.",
    example:
      "A factory analytics manager asks whether an optimized vision model can meet response-time targets on the hardware installed at each site.",
    question:
      "Does the optimized model retain acceptable accuracy under the same inputs used to measure latency?",
    limit:
      "Optimization depends on supported model operations and hardware; conversion, numerical precision, and runtime compatibility can change behavior or constrain portability.",
    context:
      "The vision-model and serving material names TensorRT as an optimization and export option rather than a guaranteed acceleration step.",
    statusNote: null,
    url: "https://docs.nvidia.com/deeplearning/tensorrt/latest/",
    lessonIds: ["m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/12 - Vision Transformer Models & Architectures/Vision Transformer Models for Enterprise Applications.md",
    ],
    glossaryId: null,
  },
  {
    id: "nvidia-triton-inference-server",
    name: "NVIDIA Triton Inference Server",
    aliases: ["Triton", "tritonserver"],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "A server for running trained models behind application endpoints, with support for coordinating inference requests and model execution. It helps engineering teams manage model serving as an operational service rather than as an isolated experiment.",
    example:
      "A platform manager compares serving configurations for a vision service, measuring response time during normal use and a realistic burst of uploads.",
    question:
      "Which batching, concurrency, and model-management settings meet our response-time target without exceeding the available capacity?",
    limit:
      "Serving configuration can trade throughput against latency. This product is separate from the Triton GPU programming language/compiler and still needs capacity planning and application monitoring.",
    context:
      "Named in the multimodal serving discussion as a custom inference-serving option.",
    statusNote: null,
    url: "https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/",
    lessonIds: ["m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/44 - Scaling Multimodal AI Architecture/Scaling Multimodal AI Architecture.md",
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "ollama",
    name: "Ollama",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "A tool for running supported models through a local or managed model runtime interface. It can simplify experimentation with downloadable models while leaving model selection, resource capacity and access restrictions to the application owner.",
    example:
      "A document-review team pilots a local vision model on approved sample scans and compares its answers with a hosted alternative using the same rubric.",
    question:
      "Where will requests and model files reside, and who maintains the runtime and access controls?",
    limit:
      "Local execution does not guarantee privacy or accuracy by itself; hardware limits, network exposure and the selected model’s behavior still need review.",
    context:
      "The multimodal evaluation exercises use Ollama with Qwen vision models to explore local model execution.",
    statusNote: null,
    url: "https://docs.ollama.com/",
    lessonIds: ["m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/Demo: Testing Multimodal AI Systems with Pydantic Evals.md",
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/Exercise: Building a Real Estate Description System with Evaluations.md",
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/Solution: Building a Real Estate Description System with Evaluations.md",
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "omegaconf",
    name: "OmegaConf",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Library",
    job: "A configuration library for organizing, combining, and accessing application settings. It supports structured configurations so technical teams can manage related model and workflow options consistently, including settings reused across development and experiment runs.",
    example:
      "A vision program manager asks for a clear record of which detection thresholds and model settings were active during an acceptance test.",
    question:
      "Can we inspect the effective settings after all defaults and overrides have been combined?",
    limit:
      "Well-organized configuration does not establish sensible settings; defaults, overrides, missing values, and environment differences still need review and validation.",
    context:
      "Used with model configuration in the YOLOv9 exercise stack, alongside Hydra.",
    statusNote: null,
    url: "https://omegaconf.readthedocs.io/en/latest/",
    lessonIds: ["m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Demo: YOLOv9 Video Object Detection.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/demo.ipynb",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/exercise.ipynb",
      "3 - Multimodal AI Applications/Exercise/l4/demos/1-yolo/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "omnitrainer",
    name: "OmniTrainer",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Example system",
    job: "The course’s multimodal customer-service training capstone combines simulated practice with text, image, audio, and video handling. It provides a concrete setting for discussing moderation, structured outputs, evaluation, and operating responsibilities before a broader pilot.",
    example:
      "A service-training lead pilots simulated customer interactions with a small volunteer group and reviews coaching quality, inappropriate outputs, and unresolved cases each week.",
    question:
      "What learning outcome are we measuring, and who reviews disputed coaching, moderation errors, and unexpected model behavior?",
    limit:
      "This is an educational simulation, not a validated employee-assessment system. Training results should not become automatic performance judgments or real customer messages.",
    context:
      "Named in the multimodal capstone directory and management lesson; supporting source files implement the training and moderation workflow.",
    statusNote: null,
    url: null,
    lessonIds: ["m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Rubric.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Instructions.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Project Overview.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Environment Setup.md",
    ],
    glossaryId: "omnitrainer",
  },
  {
    id: "onnx",
    name: "ONNX",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Standard / protocol",
    job: "An open format for representing machine-learning models so compatible tools can exchange them. It helps explain model portability between development and deployment systems, without requiring every stage to use the same framework.",
    example:
      "An operations manager asks whether a trained classifier can move into the company’s preferred inference runtime without losing important behavior.",
    question:
      "Which model operations and accuracy checks must pass when exporting to the target runtime?",
    limit:
      "An export format does not guarantee that every model operation is supported or that conversion preserves numerical behavior across all runtimes.",
    context:
      "The architecture discussion names ONNX as a model-export option. ONNX is distinct from the separate ONNX Runtime execution engine.",
    statusNote: null,
    url: "https://onnx.ai/",
    lessonIds: ["m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/12 - Vision Transformer Models & Architectures/Vision Transformer Models for Enterprise Applications.md",
    ],
    glossaryId: null,
  },
  {
    id: "openai-api",
    name: "OpenAI API",
    aliases: ["OpenAI Chat Completions API", "OpenAI Platform"],
    category: "Assistants & models",
    kind: "Platform / service",
    job: "A developer service through which applications access supported OpenAI models and capabilities. It enables a team to integrate model behavior into its own workflow, separately from the ChatGPT interface and separately from the client library used to connect.",
    example:
      "A support manager pilots an internal application that drafts responses from approved evidence, with staff reviewing the answer before it reaches customers.",
    question:
      "Which endpoints and model versions are approved, and how will we handle errors, usage limits, and future retirements?",
    limit:
      "Available endpoints and models change over time; an old course request may need migration, and application safeguards remain the builder’s responsibility.",
    context:
      "Called throughout the source exercises, sometimes through course-managed Vocareum routing. Archived examples are not promises of current endpoint or model availability.",
    statusNote: null,
    url: "https://developers.openai.com/api/docs",
    lessonIds: [
      "f1",
      "f2",
      "f6",
      "r1",
      "r2",
      "r3",
      "r4",
      "r5",
      "r6",
      "r7",
      "r8",
      "m1",
    ],
    sourcePaths: [
      "1 - Generative AI Fundamentals/4 - Applications of Generative AI/Demo: LLM Assisted Coding.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Prompt Templating.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
      "1 - Generative AI Fundamentals/6 - Building Applications using Foundation Models/Demo: Build a Sentiment Classifier.md",
    ],
    glossaryId: null,
  },
  {
    id: "openai-embedding-models",
    name: "OpenAI embedding models",
    aliases: [
      "text-embedding-3-small",
      "text-embedding-3-large",
      "text-embedding-ada-002",
    ],
    category: "Knowledge & retrieval",
    kind: "Model family",
    job: "Convert text into numerical representations that support semantic search, grouping, and comparison. In a retrieval application, the same compatible representation scheme connects a user’s question with potentially relevant document passages before an answer is generated.",
    example:
      "A knowledge manager tests whether employees can find the right policy passage when their question uses different wording from the document.",
    question:
      "Which embedding model, chunking approach, and retrieval evaluation support our languages and document collection?",
    limit:
      "Embeddings capture similarity rather than truth or permissions. Changing models can require rebuilding stored vectors, and incompatible embeddings should not be mixed in one search.",
    context:
      "Used in retrieval exercises and the NASA project; named model versions are source examples, not automatic current deployment recommendations.",
    statusNote: null,
    url: "https://developers.openai.com/api/docs/guides/embeddings",
    lessonIds: ["r1", "r4", "r6", "r7", "r8"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Solution: RAG Evaluation.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/15 - Implementing RAG with Vector Databases/Solution: RAG System.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/1 - Introduction to LLMs and Retrival Augmented Generation (RAG)/Prerequisites and Environment.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases and Semantic Search for RAG.md",
    ],
    glossaryId: null,
  },
  {
    id: "openai-o-series",
    name: "OpenAI o-series",
    aliases: ["o1", "o1-mini", "o1-preview", "o4-mini"],
    category: "Assistants & models",
    kind: "Model family",
    job: "A family of OpenAI reasoning models discussed for tasks that benefit from more deliberate problem solving. The family illustrates a model-selection tradeoff among task success, response time and the resources spent producing an answer.",
    example:
      "A planning team compares a reasoning model with its existing assistant on difficult scheduling scenarios and checks the resulting plans against explicit business constraints.",
    question:
      "Does additional reasoning improve outcomes enough on our difficult cases to justify its operational tradeoffs?",
    limit:
      "Reasoning-oriented models can still make unsupported assumptions or calculation errors; family labels do not establish superiority for every task or current version availability.",
    context:
      "The model-selection material uses o-series versions as reasoning examples. Consult current model documentation before choosing a deployment version.",
    statusNote: null,
    url: "https://developers.openai.com/api/docs/guides/reasoning",
    lessonIds: ["r5"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/11 - Applying Model Selection and Economics/Exercise: Model Selection.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/11 - Applying Model Selection and Economics/Solution: Model Selection.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/11 - Applying Model Selection and Economics/model_selection.py",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/Exercise/Strategic Model Selection & Economics /exercise-model-selection/starter/README.md",
    ],
    glossaryId: null,
  },
  {
    id: "openai-python-sdk",
    name: "OpenAI Python SDK",
    aliases: ["openai", "OpenAI SDK"],
    category: "Applications & orchestration",
    kind: "Library",
    job: "The official Python client library for communicating with the OpenAI API. It gives developers reusable request and response handling, helping an application connect to model services without making the client library itself responsible for the model’s intelligence.",
    example:
      "An application owner asks the team to update a service integration while retaining the same reviewed user workflow and failure-handling behavior.",
    question:
      "How will a client-library update be tested against our configured endpoint and expected responses?",
    limit:
      "A compatible client cannot guarantee server capabilities or model quality; API changes, proxies, and version mismatches still require integration testing.",
    context:
      "Used directly in chatbot, RAG, and evaluation exercises; some course setups point the client at an approved access proxy.",
    statusNote: null,
    url: "https://github.com/openai/openai-python",
    lessonIds: ["f6", "r1", "r2", "r3", "r4", "r5", "r7", "r8", "m1"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/15 - Implementing Role-Based Prompting with Python/Exercise: Historical Figure Persona.ipynb",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Solution: RAG Evaluation.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/11 - Applying Model Selection and Economics/Exercise: Model Selection.md",
    ],
    glossaryId: null,
  },
  {
    id: "openai-speech-models",
    name: "OpenAI speech models",
    aliases: ["gpt-4o-mini-tts", "gpt-4o-transcribe"],
    category: "Audio & video",
    kind: "Model family",
    job: "Hosted models for converting speech to text or generating spoken output. They provide components for voice applications, with distinct transcription and speech-generation tasks that must be evaluated against the recording conditions and intended listening experience.",
    example:
      "A support manager pilots transcription of approved training calls and checks whether names, action items, and important numbers survive the conversion accurately.",
    question:
      "Which transcription or speech-generation model is supported for our workflow, and what migration plan covers its lifecycle?",
    limit:
      "Course examples gpt-4o-mini-tts and gpt-4o-transcribe are deprecated, with announced shutdowns on January 6 and February 26, 2027 respectively. Confirm replacements before building.",
    context:
      "Named as specialized audio components. Deprecation status checked against official OpenAI documentation on November 13, 2026.",
    statusNote:
      "Specific course APIs are deprecated: gpt-4o-mini-tts ends January 6, 2027; gpt-4o-transcribe ends February 26, 2027. The broader speech family is not retired.",
    url: "https://developers.openai.com/api/docs/deprecations",
    lessonIds: ["m1", "m5"],
    sourcePaths: [
      "3 - Multimodal AI Applications/24 - Audio Intelligence/Audio Intelligence.md",
      "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Technologies.md",
    ],
    glossaryId: null,
  },
  {
    id: "openai-tokenizer",
    name: "OpenAI Tokenizer",
    aliases: ["OpenAI Tokenizer Tool", "Tokenizer visualization"],
    category: "Data & analysis",
    kind: "Developer tool",
    job: "An interactive tool for inspecting how text is divided into model tokens. It helps managers see why character counts, words and tokens differ when discussing context limits and the amount of text an application processes.",
    example:
      "A course designer compares a short policy paragraph with a dense table to understand why similar-looking content can occupy different amounts of model context.",
    question:
      "Are we estimating input size using the tokenizer that matches our selected model?",
    limit:
      "Token boundaries differ across models, and a text-only exploration does not account for every image, audio or hidden application input.",
    context:
      "The tokenization lesson links this official visualizer as an exploratory resource, separate from tokenizer libraries used inside applications.",
    statusNote: null,
    url: "https://platform.openai.com/tokenizer",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Resources for Further Learning.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/9 - Implementing Tokens, Embeddings, and Vector Search/Solution: Tokenization.md",
    ],
    glossaryId: null,
  },
  {
    id: "openclip",
    name: "OpenCLIP",
    aliases: ["open_clip", "open_clip_torch"],
    category: "Images & vision",
    kind: "Library",
    job: "An open implementation and model collection for learning comparable image and text representations. It lets technical teams use or train CLIP-style models for tasks such as semantic image search, while choosing the particular model and training provenance.",
    example:
      "A merchandising manager compares image-search results from two documented checkpoints before selecting one for a private product-catalog experiment.",
    question:
      "Which checkpoint and training data support our use case, and how were retrieval errors assessed?",
    limit:
      "Different checkpoints have different licenses, data, and performance; the implementation’s openness does not establish suitability or fairness for every collection.",
    context:
      "The vision-language overview names OpenCLIP as part of the image-text model ecosystem, distinct from the original CLIP release.",
    statusNote: null,
    url: "https://github.com/mlfoundations/open_clip",
    lessonIds: ["m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/14 - Vision-Language Models/Vision-Language Models Overview.md",
    ],
    glossaryId: null,
  },
  {
    id: "opencv",
    name: "OpenCV",
    aliases: ["cv2", "opencv-python", "opencv-python-headless"],
    category: "Images & vision",
    kind: "Library",
    job: "A computer-vision library for working with images and video, including loading, transformations, and visual analysis. It often supplies the processing steps around a model, such as reading frames or preparing the image region the model will inspect.",
    example:
      "A quality manager asks a team to document how camera frames are resized and sampled before a defect-detection model sees them.",
    question:
      "Could image preparation or frame sampling remove the evidence our model needs to detect the event correctly?",
    limit:
      "Preprocessing can distort colors, dimensions, or timing and affect results. The library’s availability does not supply a validated model or solve camera-quality limitations.",
    context:
      "Used directly in multimodal video exercises for frame access and computer-vision processing.",
    statusNote: null,
    url: "https://docs.opencv.org/",
    lessonIds: ["m2", "m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Demo: YOLOv9 Video Object Detection.md",
      "3 - Multimodal AI Applications/32 - Video Understanding & Search with Gemini & Clip4Clip/Demo: Video Search with CLIP4CLIP.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Exercise: Luggage Counting on a Conveyor Belt.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Solution: Luggage Counting on a Conveyor Belt.md",
    ],
    glossaryId: null,
  },
  {
    id: "openinference",
    name: "OpenInference",
    aliases: ["openinference-instrumentation-pydantic-ai"],
    category: "Evaluation & observability",
    kind: "Standard / protocol",
    job: "Instrumentation and tracing conventions for recording the steps of AI workflows in a consistent form. It helps observability tools interpret model calls, retrieval operations and related context when teams investigate application behavior.",
    example:
      "A support-assistant owner follows a trace from a user question through retrieved passages to the final answer to locate the source of an error.",
    question:
      "Which trace details are necessary for diagnosis, and which sensitive fields should be excluded or protected?",
    limit:
      "Collecting traces does not determine whether an answer is correct, and trace payloads can expose prompts or documents without careful data handling.",
    context:
      "The observability material names OpenInference as instrumentation around AI workflows, rather than as a model or a standalone monitoring dashboard.",
    statusNote: null,
    url: "https://github.com/Arize-ai/openinference",
    lessonIds: ["m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/41 - Logging and Performance Monitoring with Gradio and Arize Phoenix/Demo: Logging and Monitoring a Multimodal Application.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/starter/pyproject.toml",
      "3 - Multimodal AI Applications/41 - Logging and Performance Monitoring with Gradio and Arize Phoenix/demo.ipynb",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/starter/multimodal_moderation/tracing.py",
    ],
    glossaryId: null,
  },
  {
    id: "opentelemetry",
    name: "OpenTelemetry",
    aliases: ["OTLP"],
    category: "Evaluation & observability",
    kind: "Framework",
    job: "An open observability framework for creating and exporting signals such as traces, metrics, and logs. It helps teams follow activity across application components so they can investigate delays, failures, and the sequence of operations behind a result.",
    example:
      "A customer-service application owner reviews a trace to determine whether a slow conversation came from moderation, retrieval, or a model request.",
    question:
      "Can we trace important user journeys while limiting sensitive content captured in telemetry?",
    limit:
      "Instrumentation does not provide useful monitoring by itself; signal selection, storage, access, retention, and an analysis backend still need design.",
    context:
      "The OmniTrainer project rubric requires tracing for conversation, moderation, and feedback operations, alongside Arize Phoenix.",
    statusNote: null,
    url: "https://opentelemetry.io/docs/what-is-opentelemetry/",
    lessonIds: ["m6", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Rubric.md",
      "3 - Multimodal AI Applications/41 - Logging and Performance Monitoring with Gradio and Arize Phoenix/Demo: Logging and Monitoring a Multimodal Application.md",
      "3 - Multimodal AI Applications/41 - Logging and Performance Monitoring with Gradio and Arize Phoenix/demo.ipynb",
      "3 - Multimodal AI Applications/32 - Video Understanding & Search with Gemini & Clip4Clip/2-video-understanding-with-fm.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "oxford-iiit-pet",
    name: "Oxford-IIIT Pet",
    aliases: ["Oxford Pets"],
    category: "Images & vision",
    kind: "Dataset / benchmark",
    job: "A labeled image dataset of cat and dog breeds with annotations for visual tasks. It supports learning about image classification and segmentation, offering a defined set of examples for checking how a vision workflow behaves.",
    example:
      "A course manager uses pet-image results to demonstrate why a model can classify familiar examples well yet struggle with different backgrounds and image conditions.",
    question:
      "What does performance on these animal images demonstrate, and which conditions in our business imagery remain untested?",
    limit:
      "The dataset does not represent a company’s products, defects, or camera setup. Good benchmark performance should not be used as evidence of business-task accuracy.",
    context: "Used as a named image dataset in multimodal exercises.",
    statusNote: null,
    url: "https://www.robots.ox.ac.uk/~vgg/data/pets/",
    lessonIds: ["m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/3-dinov2.ipynb",
      "3 - Multimodal AI Applications/Exercise/l2/demos/3-dinov2/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "pandas",
    name: "pandas",
    aliases: [],
    category: "Data & analysis",
    kind: "Library",
    job: "A library for working with tabular data such as evaluation records, experiment summaries and labeled examples. It helps analysts organize, filter and aggregate results before presenting evidence to a decision maker.",
    example:
      "A service manager compares model accuracy by ticket category and customer channel using a table of reviewed predictions from a pilot.",
    question:
      "Are joins, missing values and category definitions changing the conclusions in this analysis?",
    limit:
      "Tabular processing can silently distort results when identifiers or missing data are mishandled; the library does not validate the business meaning of records.",
    context:
      "The source notebooks directly use pandas for datasets, evaluation results and experiment comparisons across the course.",
    statusNote: null,
    url: "https://pandas.pydata.org/docs/",
    lessonIds: ["f4", "f6", "f8", "r1", "r4", "r5", "r7", "r8", "m4", "m7"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/13 - Generating Text using LLMs/Demo: Generating Text.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/1 - Introduction to LLMs and Retrival Augmented Generation (RAG)/Prerequisites and Environment.md",
      "3 - Multimodal AI Applications/39 - Using Gradio and Pydantic AI/Demo: Building a Multimodal Gradio Chatbot with Pydantic AI.md",
      "1 - Generative AI Fundamentals/19 - Reinforcement Fine-tuning on Foundation Models/Demo: Teaching an LLM to Count.md",
    ],
    glossaryId: null,
  },
  {
    id: "pillow",
    name: "Pillow",
    aliases: ["PIL"],
    category: "Images & vision",
    kind: "Library",
    job: "A Python image-processing library for opening, transforming, and saving images. It prepares visual inputs and outputs for AI workflows through operations such as resizing or format conversion, without itself interpreting the image’s business meaning.",
    example:
      "A content manager checks that uploaded product images are resized consistently without cropping away labels needed by the analysis model.",
    question:
      "Which image transformations preserve the details our model and reviewers need to see?",
    limit:
      "Image preparation can discard important detail or orientation; file support, color handling, and input validation must match the application’s requirements.",
    context:
      "Used directly in multimodal image exercises and Pydantic AI demonstrations to prepare images for model workflows.",
    statusNote: null,
    url: "https://pillow.readthedocs.io/en/stable/",
    lessonIds: ["m1", "m2", "m3", "m6", "m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Demo: Pydantic.ai.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md",
      "3 - Multimodal AI Applications/11 - Gemini Vision API Basics/Exercise: Image Moderation with Gemini.md",
      "3 - Multimodal AI Applications/11 - Gemini Vision API Basics/Solution: Image Moderation with Gemini.md",
    ],
    glossaryId: null,
  },
  {
    id: "pinecone",
    name: "Pinecone",
    aliases: [],
    category: "Knowledge & retrieval",
    kind: "Database / storage",
    job: "A managed vector-search service that stores representations and retrieves similar items for applications. It can provide part of a retrieval system’s infrastructure, while the team defines embeddings, metadata filters, source freshness, and evaluation criteria.",
    example:
      "A knowledge manager compares search results from approved policy documents and checks that department restrictions remain effective when employees ask broad questions.",
    question:
      "How will retrieval quality, document updates, metadata filtering, and access requirements be tested before users depend on the service?",
    limit:
      "Managed infrastructure does not guarantee relevant or authorized results. Poor source content, weak embeddings, and incorrect filtering can still make a retrieval application fail.",
    context:
      "Compared in retrieval lessons and named in the multimodal architecture landscape.",
    statusNote: null,
    url: "https://docs.pinecone.io/guides/get-started/overview",
    lessonIds: ["r2", "r4", "r6", "m1"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Prompt Templating.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Vectors and Vector Search.md",
    ],
    glossaryId: "pinecone",
  },
  {
    id: "pip",
    name: "pip",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Developer tool",
    job: "The standard Python package installer used to add software libraries to an environment. It explains how the course’s technical components are assembled, while compatibility and reproducibility depend on the versions and environment practices the team chooses.",
    example:
      "A project manager asks engineers to reproduce a demonstration in a clean environment before handing the prototype to another team for evaluation.",
    question:
      "Can we recreate the same reviewed environment without relying on one developer’s machine?",
    limit:
      "Installing packages successfully does not prove compatibility, maintenance or correct behavior, and unreviewed dependency changes can alter a working application.",
    context:
      "The exercise setup repeatedly uses pip to install declared dependencies; managers are not asked to execute installation commands.",
    statusNote: null,
    url: "https://pip.pypa.io/en/stable/",
    lessonIds: ["f8", "r1", "r4", "r7", "r8", "m2", "m6", "m8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/15 - Implementing RAG with Vector Databases/Solution: RAG System.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Environment Setup.md",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "pollo-ai",
    name: "Pollo AI",
    aliases: [],
    category: "Audio & video",
    kind: "Application",
    job: "A creative platform that brings image and video generation and transformation tools into one interface. It can help a business team test visual concepts and compare supported generation options without building separate integrations for every experiment.",
    example:
      "A creative operations manager prepares several draft motion treatments from approved brand images and compares them before commissioning final editing.",
    question:
      "Which underlying model and terms apply to the particular feature we plan to use?",
    limit:
      "An aggregation interface does not make all models equivalent; controls, quality, data handling, and usage terms can differ by feature.",
    context:
      "The video-generation tools lesson names Pollo AI for style transformations and creative adaptations of existing clips.",
    statusNote: null,
    url: "https://pollo.ai/",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/35 - Video Generation/Video Generation Tools.md",
    ],
    glossaryId: null,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    aliases: ["Postgres"],
    category: "Knowledge & retrieval",
    kind: "Database / storage",
    job: "A relational database for storing structured records and querying relationships between them. It can also participate in AI systems, including vector-search workflows through suitable extensions, allowing teams to consider retrieval alongside existing application data.",
    example:
      "A data-platform manager asks whether an existing PostgreSQL environment can support a policy-search pilot without introducing an additional database to operate.",
    question:
      "Can the proposed extension and index configuration meet our retrieval needs while preserving the reliability of existing workloads?",
    limit:
      "Vector search requires an appropriate implementation and workload testing. Do not assume either that relational databases cannot support it or that every workload belongs in one database.",
    context:
      "Used as a comparison point in retrieval material; the guide corrects the source’s overly broad claim about relational systems and vector search.",
    statusNote: null,
    url: "https://www.postgresql.org/docs/current/intro-whatis.html",
    lessonIds: ["r4", "r6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization Steps.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases.md",
    ],
    glossaryId: null,
  },
  {
    id: "powershell",
    name: "PowerShell",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Developer tool",
    job: "A command shell and automation environment commonly used for Windows administration and development tasks. It appears around environment preparation rather than as an AI model or a user-facing course application.",
    example:
      "A training coordinator ensures that the setup guide accounts for colleagues using Windows so environment preparation does not block a scheduled technical workshop.",
    question:
      "Are the setup instructions appropriate for each operating environment our team supports?",
    limit:
      "Commands and environment behavior can differ across shells; copying setup steps without platform review can produce inconsistent or unintended results.",
    context:
      "The source setup instructions mention PowerShell as a shell option for running environment preparation tasks.",
    statusNote: null,
    url: "https://learn.microsoft.com/en-us/powershell/scripting/overview",
    lessonIds: ["m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/starter/project_proposal.md",
      "3 - Multimodal AI Applications/Exercise/project/starter/project_proposal.md",
    ],
    glossaryId: null,
  },
  {
    id: "prefect",
    name: "Prefect",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Framework",
    job: "A workflow orchestration system that helps teams run, schedule, and monitor coordinated tasks, including data and AI processing. It records execution state and supports recovery patterns so an application workflow can be operated more reliably.",
    example:
      "A knowledge operations manager schedules document updates and evaluation runs, asking for alerts and controlled retries when an external service is unavailable.",
    question:
      "Which failures should retry automatically, and which require a person to investigate or approve recovery?",
    limit:
      "Retries can repeat costly or consequential actions unless tasks are designed for them; orchestration alone does not guarantee real-time response targets.",
    context:
      "Named in serving strategies as an orchestration option. The guide avoids treating the source’s batch-versus-real-time grouping as an absolute product boundary.",
    statusNote: null,
    url: "https://www.prefect.io/docs/v3/get-started",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "project-gutenberg",
    name: "Project Gutenberg",
    aliases: [],
    category: "Data & analysis",
    kind: "Dataset / benchmark",
    job: "A public digital library of books, discussed as a source of text for language-model learning. It helps managers understand how existing written collections can become training material and why provenance, permissions, and representativeness matter.",
    example:
      "A learning manager uses a book collection to explain how training text can reflect historical language and viewpoints that differ from today’s customers.",
    question:
      "What are the provenance, applicable usage terms, and representational limitations of the texts selected for this experiment?",
    limit:
      "Availability online does not settle every intended-use question. Text age, jurisdiction, collection terms, and selection bias need review before using a corpus in a project.",
    context:
      "Named in fundamentals when discussing sources of language-model training data.",
    statusNote: null,
    url: "https://www.gutenberg.org/about/",
    lessonIds: ["f2"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/What is a Foundation Model?.md",
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/What is a Foundation Model? - Summary.md",
    ],
    glossaryId: null,
  },
  {
    id: "promptlayer",
    name: "PromptLayer",
    aliases: [],
    category: "Evaluation & observability",
    kind: "Platform / service",
    job: "A platform for managing and evaluating prompts, including reusable templates and their variables. It helps teams track how instructions change and connect a prompt version with the behavior observed in an AI application.",
    example:
      "A support team reviews a revised response template against representative tickets and keeps a record of which version was approved for the pilot.",
    question:
      "Who can change production prompts, and what evaluation evidence is required before a version is released?",
    limit:
      "Prompt versioning does not guarantee better answers, and captured requests may contain sensitive business data that requires access and retention controls.",
    context:
      "The prompt-engineering material links PromptLayer’s template-variable documentation as a prompt-management resource, not a mandatory course integration.",
    statusNote: null,
    url: "https://docs.promptlayer.com/features/prompt-registry/template-variables",
    lessonIds: ["r2"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Prompt Templating.md",
    ],
    glossaryId: null,
  },
  {
    id: "protocol-buffers",
    name: "Protocol Buffers",
    aliases: ["protobuf"],
    category: "Workspaces & infrastructure",
    kind: "Standard / protocol",
    job: "A structured message format and supporting tooling for exchanging data between software components. Teams define a shared message structure so systems can encode and read information consistently, including some components inside AI and media-processing toolchains.",
    example:
      "A platform manager coordinates an update between two services and asks the team to preserve compatibility with existing message consumers.",
    question:
      "How will changes to the message structure remain compatible with systems that upgrade at different times?",
    limit:
      "Consistent serialization does not validate business meaning; schema evolution, version compatibility, and handling of missing or unexpected fields require care.",
    context:
      "The multimodal requirements explicitly include protobuf as a supporting toolchain dependency; it is not an AI model or application.",
    statusNote: null,
    url: "https://protobuf.dev/overview/",
    lessonIds: ["m2", "m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l2/demos/5-clip-and-florence/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "pydantic",
    name: "Pydantic",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Library",
    job: "A data-validation library for checking that information follows defined structures and constraints. It helps applications handle model outputs and other inputs consistently, making missing fields or invalid values easier to detect before subsequent processing.",
    example:
      "An operations manager requires an extracted incident report to contain an allowed category, a date, and a review status before entering the reporting workflow.",
    question:
      "Which checks validate format, and which separate checks establish that the report’s statements are accurate and appropriate?",
    limit:
      "Valid structure does not mean truthful content. A model can produce a perfectly formatted but incorrect report, so factual and business-rule checks remain separate.",
    context:
      "Used at multimodal application boundaries; distinct from the Pydantic AI agent framework and Pydantic Evals evaluation library.",
    statusNote: null,
    url: "https://pydantic.dev/docs/validation/latest/get-started/",
    lessonIds: ["m1", "m2", "m5", "m6", "m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Demo: Pydantic.ai.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Introduction to Pydantic AI.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Rubric.md",
    ],
    glossaryId: null,
  },
  {
    id: "pydantic-ai",
    name: "Pydantic AI",
    aliases: ["Pydantic.ai", "pydantic-ai", "pydantic-ai-slim"],
    category: "Applications & orchestration",
    kind: "Framework",
    job: "A framework for coordinating model interactions, tools and structured results in an application. It helps developers specify what an output should contain and connect model behavior to the surrounding workflow and validation rules.",
    example:
      "A support prototype returns an issue category, cited evidence and a review flag so staff can inspect a recommendation before using it.",
    question:
      "What happens when an answer has the required structure but its claims are unsupported?",
    limit:
      "Valid structure does not establish factual correctness, and tool access still requires clear permissions, error handling and limits on consequential actions.",
    context:
      "The multimodal exercises use Pydantic AI to organize model-driven workflows and structured responses.",
    statusNote: null,
    url: "https://pydantic.dev/docs/ai/overview/",
    lessonIds: ["m1", "m2", "m5", "m6", "m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Demo: Pydantic.ai.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Introduction to Pydantic AI.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Instructions.md",
    ],
    glossaryId: "pydantic-ai",
  },
  {
    id: "pydantic-evals",
    name: "Pydantic Evals",
    aliases: ["pydantic-evals", "pydantic_evals"],
    category: "Evaluation & observability",
    kind: "Framework",
    job: "A framework for defining repeatable evaluation cases and assessing model-assisted application behavior. It helps teams compare outputs against expected properties or judgments and keep evaluation evidence connected to changes in prompts, models, and application logic.",
    example:
      "A customer-service manager defines acceptable and unacceptable moderation examples, then reviews failures before approving an updated training assistant.",
    question:
      "Do the evaluation cases cover costly mistakes and realistic edge cases, rather than only easy examples?",
    limit:
      "Evaluations are only as representative as their cases and evaluators; model-based judges can disagree or miss failures without calibrated human review.",
    context:
      "The OmniTrainer project requires Pydantic Evals cases for text and image moderation agents.",
    statusNote: null,
    url: "https://pydantic.dev/docs/ai/evals/evals/",
    lessonIds: ["m6", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Rubric.md",
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/Demo: Testing Multimodal AI Systems with Pydantic Evals.md",
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/Exercise: Building a Real Estate Description System with Evaluations.md",
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/Solution: Building a Real Estate Description System with Evaluations.md",
    ],
    glossaryId: "pydantic-evals",
  },
  {
    id: "pydub",
    name: "PyDub",
    aliases: [],
    category: "Audio & video",
    kind: "Library",
    job: "A library for manipulating audio segments, such as trimming, combining, or converting recordings. It supports preparation around a speech or audio model, helping teams create consistent inputs and manageable clips for demonstrations or processing pipelines.",
    example:
      "A training manager asks engineers to split approved recordings into reviewable clips while preserving the context needed to judge each response fairly.",
    question:
      "Could trimming, conversion, or volume changes remove context or alter information that affects transcription and evaluation?",
    limit:
      "Editing audio can change context and signal quality. Supported formats may require additional media software, and the resulting clips still need validation for the task.",
    context: "Listed as a direct dependency in multimodal audio environments.",
    statusNote: null,
    url: "https://github.com/jiaaro/pydub",
    lessonIds: ["m4", "m5"],
    sourcePaths: [
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l3/demos/2-clap/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l3/demos/1-librosa/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l3/exercises/2-clap/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "pyparsing",
    name: "pyparsing",
    aliases: [],
    category: "Data & analysis",
    kind: "Library",
    job: "A library for recognizing structured patterns in text according to defined grammar rules. It supports deterministic text processing around an application, rather than generating language or learning meaning from examples.",
    example:
      "A document-processing team extracts consistently formatted reference identifiers before the remaining document text enters a search and summarization workflow for staff review.",
    question:
      "How will we detect and handle documents that do not follow the expected structure?",
    limit:
      "Rule-based parsing depends on the formats it was designed for; unexpected variation can cause rejection or incorrect extraction without careful validation.",
    context:
      "pyparsing is listed as a supporting direct dependency in the source environment, rather than a central generative AI tool.",
    statusNote: null,
    url: "https://pyparsing-docs.readthedocs.io/en/latest/",
    lessonIds: ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"],
    sourcePaths: ["3 - Multimodal AI Applications/Exercise/requirements.txt"],
    glossaryId: null,
  },
  {
    id: "pytest",
    name: "pytest",
    aliases: [],
    category: "Evaluation & observability",
    kind: "Developer tool",
    job: "A Python testing framework for checking whether software behaves as expected. In an AI application, it can test predictable components and integration contracts, helping distinguish ordinary software defects from uncertainty in model-generated content.",
    example:
      "A release manager requires tests for file validation, access filtering, and error responses before approving a new version of the assistant.",
    question:
      "Which predictable behaviors are protected by automated tests, and which model behaviors need separate evaluations?",
    limit:
      "Passing software tests does not establish model usefulness or factual accuracy; representative model evaluations and user acceptance checks remain separate requirements.",
    context:
      "The OmniTrainer project instructions include pytest for automated checks of the source application.",
    statusNote: null,
    url: "https://docs.pytest.org/en/stable/",
    lessonIds: ["m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Instructions.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/starter/.pytest_cache/README.md",
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/demo.ipynb",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/starter/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "python",
    name: "Python",
    aliases: ["Python 3"],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "The programming language and runtime underlying the technical course exercises. Its ecosystem connects data processing, model libraries, evaluations, and web applications, making it a common environment where engineering teams assemble and operate AI workflows.",
    example:
      "A management sponsor asks who will maintain the Python environment and dependencies after an analyst’s model demonstration becomes a recurring departmental service.",
    question:
      "Who owns the runtime, dependency updates, deployment, and support when this experiment becomes an operational application?",
    limit:
      "A popular programming language does not make an application reliable. Supported versions, dependency management, engineering practices, and operational ownership determine whether the system can be sustained.",
    context:
      "Used throughout the source archive; managers learn its ecosystem role without programming lessons.",
    statusNote: null,
    url: "https://www.python.org/about/",
    lessonIds: [
      "f1",
      "f2",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "r1",
      "r2",
      "r4",
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
      "m8",
    ],
    sourcePaths: [
      "1 - Generative AI Fundamentals/15 - Implementing Role-Based Prompting with Python/Role-Based Prompting with Python.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Prompt Templating.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Demo: Pydantic.ai.md",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "python-dotenv",
    name: "python-dotenv",
    aliases: ["dotenv"],
    category: "Workspaces & infrastructure",
    kind: "Library",
    job: "A development utility that loads local configuration values into a Python process. It helps exercises separate environment-specific settings from program logic, including information needed to connect an application to an approved model service.",
    example:
      "A prototype team changes the configured evaluation endpoint between environments while keeping the reviewed application behavior consistent for the next pilot demonstration.",
    question:
      "Where should production credentials be managed, and who can access the local configuration used during development?",
    limit:
      "This utility is not a secrets vault; local configuration files can expose credentials if copied, shared or committed without suitable controls.",
    context:
      "The source notebooks directly use python-dotenv to load environment settings. The directory explains its role without displaying credentials or configuration snippets.",
    statusNote: null,
    url: "https://bbc2.github.io/python-dotenv/",
    lessonIds: [
      "f1",
      "f2",
      "f4",
      "f6",
      "r1",
      "r2",
      "r3",
      "r4",
      "r5",
      "r7",
      "r8",
      "m1",
      "m2",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8",
    ],
    sourcePaths: [
      "1 - Generative AI Fundamentals/15 - Implementing Role-Based Prompting with Python/Exercise: Historical Figure Persona.ipynb",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/5 - Applied Prompting and Inference/prompt_engineering.py",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Demo: Pydantic.ai.md",
      "1 - Generative AI Fundamentals/4 - Applications of Generative AI/Demo: LLM Assisted Coding.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "pytorch",
    name: "PyTorch",
    aliases: ["torch"],
    category: "Training & adaptation",
    kind: "Framework",
    job: "A machine-learning framework for building, training, and running neural networks using numerical operations and automatic differentiation. It provides the technical foundation behind many models, while teams supply the data, architecture choices, evaluation, and deployment arrangement.",
    example:
      "A project sponsor reviews training experiments that compare a baseline model with an adapted version using the same held-out business examples.",
    question:
      "Can the team reproduce the improvement and explain its data, hardware, and maintenance requirements?",
    limit:
      "A flexible framework does not provide a finished business solution; data quality, training design, hardware compatibility, and production operations remain substantial work.",
    context:
      "Used directly in neural-network fundamentals, model-adaptation projects, and many multimodal exercises.",
    statusNote: null,
    url: "https://pytorch.org/",
    lessonIds: ["f5", "f6", "f7", "f8", "m1", "m2", "m3", "m4", "m6", "m7"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Demo: Comparing PyTorch Optimizers.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md",
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Demo: Introduction to PyTorch.md",
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Exercise Solution: Optimizer Bakeoff.md",
    ],
    glossaryId: "pytorch",
  },
  {
    id: "qdrant",
    name: "Qdrant",
    aliases: [],
    category: "Knowledge & retrieval",
    kind: "Database / storage",
    job: "A vector-search database that retrieves items using learned representations and associated filtering information. It can support document or media retrieval, helping teams combine semantic similarity with requirements such as document type or collection membership.",
    example:
      "A knowledge-services manager tests search across approved manuals while applying equipment-family filters so technicians receive context relevant to the machinery they support.",
    question:
      "Do similarity results remain useful after applying the filters and update rules our users actually need?",
    limit:
      "A database cannot determine which sources are authoritative by itself. Embedding quality, filtering design, access controls, and index freshness require explicit application decisions.",
    context:
      "Referenced in RAG resources and the multimodal architecture discussion as a vector-search option.",
    statusNote: null,
    url: "https://qdrant.tech/documentation/",
    lessonIds: ["r4", "r6", "m1"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Vectors and Vector Search.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Retrieval, Ranking.md",
    ],
    glossaryId: null,
  },
  {
    id: "qwen",
    name: "Qwen",
    aliases: [
      "Qwen3",
      "Qwen 2.5",
      "Qwen2.5-3B-Instruct",
      "Qwen 2.5 3B Instruct",
      "Qwen2.5-VL",
      "Qwen2.5-Omni",
    ],
    category: "Assistants & models",
    kind: "Model family",
    job: "A model family with language and multimodal variants used for generation, interpretation and adaptation experiments. The exact variant determines supported inputs and operating requirements, so the family name alone does not specify a complete application.",
    example:
      "A document-review team compares a local vision variant on scanned forms while another team adapts a small language variant for a narrowly defined exercise.",
    question:
      "Which exact variant supports our task, and what evidence shows it works on representative inputs?",
    limit:
      "Capabilities, licenses and hardware requirements vary across variants; performance from one Qwen model should not be assumed for the entire family.",
    context:
      "The fundamentals capstone adapts Qwen for counting, while multimodal exercises use Qwen vision variants through a local runtime.",
    statusNote: null,
    url: "https://qwenlm.github.io/",
    lessonIds: ["f2", "f8", "m1", "m4", "m5", "m7", "m8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/Instructions.md",
      "3 - Multimodal AI Applications/22 - Speech Processing/Whisper.md",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/Project Overview.md",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/The Acceleration Stack: A Primer.md",
    ],
    glossaryId: "qwen",
  },
  {
    id: "qwen-vl-utils",
    name: "qwen-vl-utils",
    aliases: ["qwen_vl_utils"],
    category: "Images & vision",
    kind: "Library",
    job: "A supporting library for preparing visual inputs used by Qwen vision-language models. It handles parts of image and video input processing so the chosen model receives data in the form expected by its implementation.",
    example:
      "A document-analysis manager asks why the same model performs differently after an input-processing change and requests comparison on identical source images.",
    question:
      "Are image resolution, video sampling, and input formatting consistent with the selected Qwen model’s requirements?",
    limit:
      "The utility package is not a model; compatibility and preprocessing choices can alter quality, memory use, and which visual details reach the model.",
    context:
      "Directly listed in the multimodal exercise requirements as a Qwen visual-input dependency.",
    statusNote: null,
    url: "https://github.com/QwenLM/Qwen3-VL/tree/main/qwen-vl-utils",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l1/demos/1-showcase/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l1/exercises/1-showcase-exercise/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "ragas",
    name: "Ragas",
    aliases: [],
    category: "Evaluation & observability",
    kind: "Framework",
    job: "An evaluation framework for assessing retrieval and generated answers in AI applications. It helps teams measure aspects of a document-grounded workflow, turning recurring questions and expected behavior into evidence for comparing changes over time.",
    example:
      "A policy-assistant owner compares two retrieval settings on a reviewed question set and investigates cases where the answer sounds correct but lacks support.",
    question:
      "Which metrics reflect our failure costs, and how have automated judgments been checked against qualified human review?",
    limit:
      "Automated scores depend on test data, metric definitions, and sometimes a judging model. A higher average can hide important failures in rare or sensitive cases.",
    context:
      "Used in RAG evaluation exercises and the NASA document-chat capstone.",
    statusNote: null,
    url: "https://docs.ragas.io/en/stable/",
    lessonIds: ["r1", "r8"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/16 - Evaluating RAG Systems/RAG Evaluation.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Guide to RAGAS Metrics.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Exercise: RAG Evaluation.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Solution: RAG Evaluation.md",
    ],
    glossaryId: "ragas",
  },
  {
    id: "react",
    name: "React",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Library",
    job: "A library for building interactive web user interfaces from reusable components. In an AI product, it helps present inputs, generated results, review controls and workflow status while the model and server handle separate responsibilities.",
    example:
      "A product team builds an interface where reviewers compare an AI-generated summary with source passages and accept or correct each proposed conclusion.",
    question:
      "Does the interface make uncertainty, supporting evidence and required human decisions clear?",
    limit:
      "A polished interface does not establish model reliability or protect server-side data by itself; accessibility and interaction behavior also require deliberate design.",
    context:
      "The production-interface discussion names React as a web-interface option, separate from model frameworks and inference services.",
    statusNote: null,
    url: "https://react.dev/",
    lessonIds: ["m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Project Overview.md",
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
      "3 - Multimodal AI Applications/Exercise/project/README.md",
    ],
    glossaryId: null,
  },
  {
    id: "realworldqa",
    name: "RealWorldQA",
    aliases: [],
    category: "Evaluation & observability",
    kind: "Dataset / benchmark",
    job: "A visual question-answering dataset released by xAI to assess understanding of real-world images. It pairs visual examples with questions and answers, providing a shared evaluation resource while also supplying images for illustrative experiments.",
    example:
      "A visual-assistant manager asks the team to test image understanding on a public dataset and on separately reviewed workplace photographs.",
    question:
      "Do these images and questions represent the visual decisions our users will actually ask the system to make?",
    limit:
      "A limited public dataset cannot establish reliability across all environments; source coverage, evaluation setup, and domain-specific examples still matter.",
    context:
      "The course’s CLIP image-search exercise uses images from the RealworldQA test split as its demonstration collection.",
    statusNote: null,
    url: "https://huggingface.co/datasets/xai-org/RealworldQA",
    lessonIds: ["m2"],
    sourcePaths: [
      "3 - Multimodal AI Applications/9 - Image Search using CLIP Embeddings/Exercise: Image to Image Search with CLIP.md",
      "3 - Multimodal AI Applications/9 - Image Search using CLIP Embeddings/Solution: Image to Image Search with CLIP.md",
      "3 - Multimodal AI Applications/9 - Image Search using CLIP Embeddings/Demo: Building Your First Image Search with CLIP.md",
      "3 - Multimodal AI Applications/9 - Image Search using CLIP Embeddings/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "requests",
    name: "Requests",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Library",
    job: "A Python library for making web requests and handling responses. It provides basic connectivity for fetching approved resources or communicating with services, often serving as a small but important connection point inside an AI workflow.",
    example:
      "A project manager asks the team to define how a document-ingestion job handles an unavailable source site before scheduling it as a recurring task.",
    question:
      "What are the timeout, retry, authentication, and response-validation rules for each external connection?",
    limit:
      "Connectivity does not establish trustworthy content. Applications must handle failed requests, unexpected responses, sensitive credentials, and limits imposed by the systems they contact.",
    context:
      "Directly used or declared in source exercises to retrieve data and interact with web resources.",
    statusNote: null,
    url: "https://requests.readthedocs.io/en/latest/",
    lessonIds: ["m1", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Demo: Showcasing API-based and Open-Source Models.md",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/demo.ipynb",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/exercise.ipynb",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/starter/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "rich",
    name: "Rich",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Library",
    job: "A library that formats developer-facing console output, including tables, progress indicators and diagnostic messages. It helps technical teams inspect execution and troubleshoot workflows without changing the AI model’s reasoning or predictions.",
    example:
      "An engineering lead uses clear progress and error displays to identify which stage of a long document-processing pilot stopped before completion.",
    question:
      "Can engineers distinguish an incomplete run from a successful result quickly and consistently?",
    limit:
      "Readable console output is not a monitoring or audit system, and displayed diagnostics can expose sensitive values if logging is poorly designed.",
    context:
      "The source environment includes Rich for developer output and diagnostics, not as a learner-facing AI assistant.",
    statusNote: null,
    url: "https://rich.readthedocs.io/en/stable/",
    lessonIds: ["m6", "m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l4/demos/1-yolo/pyproject.toml",
      "3 - Multimodal AI Applications/Exercise/l4/exercises/1-object-counting/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "roberta",
    name: "RoBERTa",
    aliases: [],
    category: "Assistants & models",
    kind: "Model family",
    job: "A language-model family based on a revised BERT training approach, used for text-understanding tasks such as classification and extraction. It helps explain how model training choices and compatible tokenization affect the behavior of a focused language system.",
    example:
      "A customer insights manager tests a sentiment classifier on representative feedback, including ambiguous messages that reviewers have labeled independently.",
    question:
      "How does the chosen checkpoint perform on our language, terminology, and ambiguous examples?",
    limit:
      "RoBERTa is not inherently a general chat assistant; performance depends on the selected checkpoint, task adaptation, and similarity to its training conditions.",
    context:
      "The RAG tokenization lesson names RoBERTa as a model-compatibility example rather than implementing a hosted service.",
    statusNote: null,
    url: "https://huggingface.co/docs/transformers/model_doc/roberta",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
    ],
    glossaryId: null,
  },
  {
    id: "rt-detr",
    name: "RT-DETR",
    aliases: ["RT-DETRv2", "RTDETR"],
    category: "Images & vision",
    kind: "Model family",
    job: "A transformer-based object-detection family that identifies objects and their bounding boxes in images. It supports discussions about locating visible items, distinguishing detection from understanding an entire scene or maintaining an object’s identity across video frames.",
    example:
      "A warehouse manager tests whether a detector can locate pallets in representative camera images before considering an inventory-counting workflow.",
    question:
      "How does detection performance change with occlusion, lighting, camera position, and the object types we actually need to identify?",
    limit:
      "A bounding box is not a complete scene interpretation. Small or obscured objects can be missed, and video identity tracking requires additional components.",
    context:
      "Used in multimodal visual-content exercises and discussed with other detection and segmentation models.",
    statusNote: null,
    url: "https://github.com/lyuwenyu/RT-DETR",
    lessonIds: ["m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: Object Detection with RT-DETR + Segmentation with SAM2.1.md",
      "3 - Multimodal AI Applications/15 - Multimodal Vision Applications with CLIP/Exercise: Auto-labeling Pipeline for Driving Scenes.md",
      "3 - Multimodal AI Applications/15 - Multimodal Vision Applications with CLIP/Solution: Auto-labeling Pipeline for Driving Scenes.md",
      "3 - Multimodal AI Applications/12 - Vision Transformer Models & Architectures/Vision Transformer Models for Enterprise Applications.md",
    ],
    glossaryId: "rt-detr",
  },
  {
    id: "runway",
    name: "Runway",
    aliases: ["Runway Gen-3"],
    category: "Audio & video",
    kind: "Application",
    job: "A creative platform for generating and editing visual media, including video. It supports exploration of moving-image ideas while a production team remains responsible for the brief, source permissions, factual content and final review.",
    example:
      "A marketing team develops rough campaign motion concepts and reviews them for brand fit before choosing which idea warrants a finished production.",
    question:
      "Which parts of the output need rights, factual, continuity and accessibility review before publication?",
    limit:
      "Generated scenes can contain inconsistent motion, invented details or misleading depictions; a visually convincing clip is not evidence of a real event.",
    context:
      "The multimodal lessons name Runway as a creative production option rather than a tool invoked by every exercise.",
    statusNote: null,
    url: "https://help.runwayml.com/hc/en-us",
    lessonIds: ["m1", "m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/35 - Video Generation/Video Generation Tools.md",
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md",
    ],
    glossaryId: "runway",
  },
  {
    id: "sam",
    name: "SAM",
    aliases: ["Segment Anything Model", "SAM 2", "SAM2.1"],
    category: "Images & vision",
    kind: "Model family",
    job: "Meta’s Segment Anything model family identifies regions belonging to prompted objects in images, with supported variants extending to video. It helps applications separate foreground objects from surrounding pixels for annotation, editing, or further visual analysis.",
    example:
      "A catalog operations manager tests object masks for product photos, asking reviewers to inspect difficult edges and partially hidden items.",
    question:
      "How will we measure mask quality on the objects and scenes that matter to our workflow?",
    limit:
      "Segmentation identifies regions rather than proving an object’s identity or meaning; occlusion, boundaries, and video tracking still produce errors.",
    context:
      "The vision and video lessons discuss SAM, including SAM 2.1 examples for segmentation; family versions are consolidated here.",
    statusNote: null,
    url: "https://github.com/facebookresearch/sam2",
    lessonIds: ["m3", "m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/29 - AI Models for Video Undestanding/AI Models for Video Understanding.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: Object Detection with RT-DETR + Segmentation with SAM2.1.md",
      "3 - Multimodal AI Applications/15 - Multimodal Vision Applications with CLIP/Exercise: Auto-labeling Pipeline for Driving Scenes.md",
      "3 - Multimodal AI Applications/15 - Multimodal Vision Applications with CLIP/Solution: Auto-labeling Pipeline for Driving Scenes.md",
    ],
    glossaryId: "sam",
  },
  {
    id: "scikit-learn",
    name: "scikit-learn",
    aliases: ["sklearn"],
    category: "Data & analysis",
    kind: "Library",
    job: "A machine-learning library for tasks such as classification, clustering, similarity analysis, and evaluation. It helps teams build conventional baselines and measure results, providing a useful comparison when a generative model may be unnecessary or difficult to justify.",
    example:
      "An analytics manager compares a simple ticket classifier with a generative approach using the same labeled examples and business error costs.",
    question:
      "Does a simpler evaluated method meet the business need with less operating complexity than the proposed generative workflow?",
    limit:
      "Metrics and models remain sensitive to data leakage, class imbalance, and distribution changes. A standard library cannot make an unsuitable evaluation design meaningful.",
    context:
      "Named as an evaluation resource and used for analysis, similarity, and machine-learning utilities across source modules.",
    statusNote: null,
    url: "https://scikit-learn.org/stable/",
    lessonIds: ["f4", "r4", "m3", "m4"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Demo: Evaluating GenAI Models.ipynb",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/9 - Implementing Tokens, Embeddings, and Vector Search/review_embedding_system.py",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/Exercise/Implementing Tokens Embeddings and Vector Search /exercise-embeddings/README.md",
    ],
    glossaryId: null,
  },
  {
    id: "scipy",
    name: "SciPy",
    aliases: [],
    category: "Data & analysis",
    kind: "Library",
    job: "A scientific-computing library providing methods for areas such as statistics, optimization and signal processing. It supplies analytical building blocks around AI workflows, helping teams transform measurements and investigate data beyond basic tables.",
    example:
      "An audio-quality team analyzes signal characteristics across approved recordings to understand whether inconsistent preprocessing may be affecting transcription results in its pilot.",
    question:
      "Are the analysis method and its assumptions appropriate for the measurements we collected?",
    limit:
      "A numerical result can be precise while answering the wrong question; method assumptions, units and data preparation still require expert review.",
    context:
      "SciPy is explicitly declared in the fundamentals project environment and supports scientific processing in multimodal exercises.",
    statusNote: null,
    url: "https://docs.scipy.org/doc/scipy/",
    lessonIds: ["f8", "m4"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "3 - Multimodal AI Applications/19 - Audio Processing with librosa/Demo: Audio Processing with librosa.md",
      "3 - Multimodal AI Applications/19 - Audio Processing with librosa/demo.ipynb",
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "seaborn",
    name: "seaborn",
    aliases: [],
    category: "Data & analysis",
    kind: "Library",
    job: "A statistical visualization library that helps teams compare distributions, relationships, and grouped results in data. It can turn evaluation outputs into charts that make patterns and variability easier to inspect during a model or application review.",
    example:
      "An AI program manager compares answer-quality distributions across departments instead of approving a pilot from one overall average score.",
    question:
      "Does the chart reveal sample sizes, variation, and important subgroups clearly enough to support our decision?",
    limit:
      "An attractive chart can still hide small samples or misleading aggregation; metric definitions and plotting choices need careful review.",
    context:
      "Used in RAG evaluation and model-comparison demonstrations to visualize measured results.",
    statusNote: null,
    url: "https://seaborn.pydata.org/",
    lessonIds: ["r5", "r8"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/ragas_rag_evaluation.py",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/11 - Applying Model Selection and Economics/model_selection.py",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/11 - Applying Model Selection and Economics/prompt_cost_evaluation.py",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/Exercise/RAG Evaluation Implementation/exercises/starter/README.md",
    ],
    glossaryId: null,
  },
  {
    id: "sec",
    name: "SeC",
    aliases: ["Segment Concept"],
    category: "Audio & video",
    kind: "Framework",
    job: "A research system called Segment Concept for video object segmentation. It combines visual tracking with concept information to keep identifying the target object through changing frames, illustrating a more demanding task than detecting an object once.",
    example:
      "A media-production manager reviews a research demonstration that follows a selected object through a clip before deciding whether assisted editing is worth testing.",
    question:
      "Can it preserve the intended object through the scene changes and disappearances that occur in our real footage?",
    limit:
      "Research results do not guarantee production robustness. Compute requirements, difficult scene changes, and segmentation errors need evaluation on the actual footage and editing task.",
    context:
      "Explicitly named as Segment Concept in video-understanding material; identity verified against the official OpenIXCLab project.",
    statusNote: null,
    url: "https://github.com/OpenIXCLab/SeC",
    lessonIds: ["m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/29 - AI Models for Video Undestanding/AI Models for Video Understanding.md",
    ],
    glossaryId: null,
  },
  {
    id: "semantic-kernel",
    name: "Semantic Kernel",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Framework",
    job: "A Microsoft development kit for connecting AI models with application functions and workflows. It helps developers compose model-driven behavior around existing services while the organization defines the permitted actions and expected outcomes.",
    example:
      "An operations assistant gathers status from approved systems and prepares a proposed update, leaving the final change to an authorized staff member.",
    question:
      "Which application functions can the model call, and where must a human approve the result?",
    limit:
      "Orchestration does not make a model’s plan correct or a function safe to invoke; permissions, validation and failure recovery remain essential design work.",
    context:
      "The retrieval and application material names Semantic Kernel as an integration option, rather than the framework used throughout the course.",
    statusNote: null,
    url: "https://learn.microsoft.com/en-us/semantic-kernel/overview/",
    lessonIds: ["r1"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/2 - The Large Language Model Landscape/Navigating the LLM Landscape.md",
    ],
    glossaryId: null,
  },
  {
    id: "sentence-transformers",
    name: "Sentence Transformers",
    aliases: [
      "sentence_transformers",
      "SentenceTransformer",
      "sentence-transformers",
    ],
    category: "Knowledge & retrieval",
    kind: "Library",
    job: "A library for using and training embedding and reranking models that compare information by meaning. It supports semantic search and similarity workflows, helping applications retrieve useful candidates or score relationships between texts and other supported inputs.",
    example:
      "A knowledge manager compares retrieval results for everyday employee questions and specialist terminology before selecting an embedding model for the pilot.",
    question:
      "Which model and retrieval setup work best on our language, document types, and relevance judgments?",
    limit:
      "Semantic similarity does not establish factual agreement; negation, specialist terms, and domain shifts require targeted evaluation of the chosen model.",
    context:
      "Used for answer similarity in fundamentals and referenced or used for embedding and retrieval in the RAG module.",
    statusNote: null,
    url: "https://www.sbert.net/",
    lessonIds: ["f4", "r6", "r7", "r8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Demo: Evaluating GenAI Models.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases.md",
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Demo: Evaluating GenAI Models.ipynb",
      "1 - Generative AI Fundamentals/9 - Implementing Evaluations for Generative AI Models/Exercise: Evaluating GenAI Models.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "sentencepiece",
    name: "SentencePiece",
    aliases: [],
    category: "Assistants & models",
    kind: "Library",
    job: "A toolkit for training and applying tokenizers that divide text into units a model can process. It helps explain why the same sentence may be represented differently across models and why tokenizer compatibility matters.",
    example:
      "A localization manager asks how a model represents different writing systems before interpreting token counts or approving a multilingual evaluation plan.",
    question:
      "Is the tokenizer matched to the model, and have the languages and text formats in our workload been checked?",
    limit:
      "Tokenization is a preprocessing choice, not a measure of understanding. Using an incompatible tokenizer can undermine a model even when the text looks unchanged to people.",
    context:
      "Linked in the tokenization lesson and explicitly declared in focused capstone requirements.",
    statusNote: null,
    url: "https://github.com/google/sentencepiece",
    lessonIds: ["f8", "r4"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization Steps.md",
    ],
    glossaryId: null,
  },
  {
    id: "setuptools",
    name: "setuptools",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Developer tool",
    job: "A Python packaging tool that helps build and distribute software components. It is part of the environment machinery that enables an exercise or application to install compatible libraries and its own packaged code.",
    example:
      "A technical training owner requires the demonstration package to install consistently in a clean environment before distributing it to multiple workshop teams.",
    question:
      "Who maintains the packaging configuration and verifies it when the environment changes?",
    limit:
      "Successfully building a package does not validate its behavior or dependencies, and packaging changes can still affect installation reproducibility.",
    context:
      "The fundamentals capstone explicitly installs setuptools during environment preparation; its role is supporting software packaging rather than model training itself.",
    statusNote: null,
    url: "https://setuptools.pypa.io/en/latest/",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "shapely",
    name: "Shapely",
    aliases: [],
    category: "Data & analysis",
    kind: "Library",
    job: "A library for working with planar geometry, including shapes, boundaries, intersections, and containment. In a vision application it can help turn detected positions into defined regions or counts, separating geometric rules from the model’s recognition task.",
    example:
      "A warehouse manager defines a loading-zone boundary and asks the team to count detected objects entering that area during a reviewed pilot.",
    question:
      "Are the zone boundaries and coordinate assumptions correct for every camera and image transformation?",
    limit:
      "Geometry operations cannot correct inaccurate detections; coordinate changes, perspective, and poorly defined boundaries can produce misleading counts or alerts.",
    context:
      "Explicitly included in the multimodal requirements to support geometry operations around computer-vision regions and counting workflows.",
    statusNote: null,
    url: "https://shapely.readthedocs.io/en/stable/",
    lessonIds: ["m2", "m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l2/exercises/4-grand-finale/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "siglip",
    name: "SigLIP",
    aliases: [],
    category: "Images & vision",
    kind: "Model family",
    job: "An image-text representation model family that helps compare pictures with written descriptions. It illustrates a component for image classification or retrieval, where similarity between learned representations supports matching rather than generating a full answer.",
    example:
      "A catalog manager tests whether text descriptions retrieve appropriate approved product photos, including examples where packaging color or context could confuse the match.",
    question:
      "How sensitive are matches to description wording and to visual details that matter for our product categories?",
    limit:
      "Similarity scores are not calibrated proof of identity or suitability. Evaluate confusing alternatives and verify the exact model’s supported input preparation.",
    context:
      "Named in image preprocessing and comparison examples in the multimodal source material.",
    statusNote: null,
    url: "https://huggingface.co/google/siglip-base-patch16-224",
    lessonIds: ["m2", "m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/14 - Vision-Language Models/Vision-Language Models Overview.md",
      "3 - Multimodal AI Applications/7 - Vision Pre-processing Pipelines with HuggingFace/Exercise: Resizing and Normalizing Images.md",
      "3 - Multimodal AI Applications/7 - Vision Pre-processing Pipelines with HuggingFace/Solution: Resizing and Normalizing Images.md",
      "3 - Multimodal AI Applications/7 - Vision Pre-processing Pipelines with HuggingFace/exercise.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "smollm2",
    name: "SmolLM2",
    aliases: ["SmolLM2-135M-Instruct", "HuggingFaceTB/SmolLM2-135M-Instruct"],
    category: "Assistants & models",
    kind: "Model family",
    job: "A family of small language models that provides accessible examples for studying adaptation. The course uses an instruction-tuned variant to explore how supervised and reinforcement-based training can change a narrowly defined behavior.",
    example:
      "A learning program uses a small spelling exercise to compare adaptation approaches, asking participants to examine failure cases rather than equate the exercise with enterprise readiness.",
    question:
      "What does success on this narrow task tell us, and what does it leave untested?",
    limit:
      "Small-model exercise results do not establish broad reasoning or business reliability; adaptation can improve the trained behavior while leaving substantial limitations elsewhere.",
    context:
      "The fine-tuning exercises use SmolLM2-135M-Instruct for spelling and counting demonstrations.",
    statusNote: null,
    url: "https://huggingface.co/HuggingFaceTB/SmolLM2-135M-Instruct",
    lessonIds: ["f7", "f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/17 - Applying PEFT on Foundation Models/Demo: Teach an LLM a New Skill.md",
      "1 - Generative AI Fundamentals/17 - Applying PEFT on Foundation Models/Exercise Solution: Teach an LLM to Spell.md",
      "1 - Generative AI Fundamentals/19 - Reinforcement Fine-tuning on Foundation Models/Demo: Teaching an LLM to Count.md",
      "1 - Generative AI Fundamentals/19 - Reinforcement Fine-tuning on Foundation Models/Exercise Solution: Teach an LLM to Spell.md",
    ],
    glossaryId: null,
  },
  {
    id: "smolvlm",
    name: "SmolVLM",
    aliases: ["SmolVLM2"],
    category: "Images & vision",
    kind: "Model family",
    job: "A family of compact vision-language models from Hugging Face for interpreting visual inputs with text. Video-capable variants demonstrate how smaller models can support selected multimodal tasks when hardware, bandwidth, or operating constraints limit deployment options.",
    example:
      "A field-service manager explores a compact model for describing inspection images, measuring quality on the team’s actual device and visual conditions.",
    question:
      "What useful accuracy can the chosen variant achieve within our memory, latency, and connectivity constraints?",
    limit:
      "Smaller size does not guarantee adequate quality or device support; complex scenes and detailed visual reasoning require task-specific testing.",
    context:
      "The multimodal material names SmolVLM as a compact deployment option. Its appearance near audio discussion does not make it an audio-transcription model.",
    statusNote: null,
    url: "https://huggingface.co/HuggingFaceTB/SmolVLM2-2.2B-Instruct",
    lessonIds: ["m1", "m5"],
    sourcePaths: [
      "3 - Multimodal AI Applications/24 - Audio Intelligence/Audio Intelligence.md",
      "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Technologies.md",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Exercise: Multimodal AI Showcase.md",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Solution: Multimodal AI Showcase.md",
    ],
    glossaryId: null,
  },
  {
    id: "sms-spam-collection",
    name: "SMS Spam Collection",
    aliases: ["sms_spam"],
    category: "Data & analysis",
    kind: "Dataset / benchmark",
    job: "A labeled collection of text messages for studying spam classification. It provides a concrete learning example of supervised classification, where a model learns from previously labeled messages and is evaluated on messages kept separate from training.",
    example:
      "A service manager examines false positives in a spam-classification exercise to discuss the cost of mistakenly blocking legitimate customer communication.",
    question:
      "Which error is more costly for our workflow, and does the evaluation reflect current messages rather than only historical examples?",
    limit:
      "This historical dataset does not represent every modern language, scam, or communication channel. Performance must be reassessed on representative, appropriately handled operational data.",
    context: "Used in the fundamentals spam-classification exercise.",
    statusNote: null,
    url: "https://archive.ics.uci.edu/dataset/228/sms%2Bspam%2Bcollection",
    lessonIds: ["f2"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/6 - Building Applications using Foundation Models/build-a-spam-classifier-using-a-foundation-model-starter.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "sora",
    name: "Sora",
    aliases: [],
    category: "Audio & video",
    kind: "Application",
    job: "OpenAI’s historical video-generation product, used in the course to illustrate creating moving images from instructions. Its web and app experiences ended in April 2026, and its API ended in September 2026.",
    example:
      "A media-literacy workshop examines historical generated-video examples to discuss why realistic motion should not be treated as evidence that an event actually occurred.",
    question:
      "How will our team distinguish illustrative synthetic media from evidence and label it appropriately?",
    limit:
      "Sora is discontinued and should not be treated as an available production option; historical examples can also contain visual inconsistencies and invented events.",
    context:
      "The archive predates the discontinuation and names Sora as a video-generation example. It is retained here with its current historical status.",
    statusNote:
      "Discontinued: the web/app ended in April 2026 and the API in September 2026.",
    url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation",
    lessonIds: ["f1", "m1", "m7"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/2 - Generative AI Overview/GenAI Capabilities and Concerns.md",
      "3 - Multimodal AI Applications/35 - Video Generation/Video Generation Tools.md",
      "1 - Generative AI Fundamentals/2 - Generative AI Overview/GenAI Capabilities and Concerns - Summary.md",
      "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Technologies.md",
    ],
    glossaryId: null,
  },
  {
    id: "soundfile",
    name: "SoundFile",
    aliases: [],
    category: "Audio & video",
    kind: "Library",
    job: "A library for reading and writing supported audio file formats as numerical samples. It helps AI workflows move between stored recordings and the data structures used for signal processing, while preserving explicit choices about format and sample representation.",
    example:
      "A training operations manager asks the team to export cleaned recordings in the format required by a transcription evaluation workflow.",
    question:
      "Are sample rate, channel count, and output encoding preserved or intentionally changed throughout the workflow?",
    limit:
      "File conversion does not improve recording content; format support depends on underlying libraries, and incorrect sample settings can distort playback or analysis.",
    context:
      "Used in the librosa audio-processing demonstration and declared in the multimodal exercise environment.",
    statusNote: null,
    url: "https://python-soundfile.readthedocs.io/en/latest/",
    lessonIds: ["m4", "m5"],
    sourcePaths: [
      "3 - Multimodal AI Applications/19 - Audio Processing with librosa/Demo: Audio Processing with librosa.md",
      "3 - Multimodal AI Applications/19 - Audio Processing with librosa/Exercise: Music Analysis with librosa.md",
      "3 - Multimodal AI Applications/19 - Audio Processing with librosa/Solution: Music Analysis with librosa.md",
      "3 - Multimodal AI Applications/23 - Implementing Speech Processing with Whisper & Gemini/Demo: Audio Transcription with Gemini.md",
    ],
    glossaryId: null,
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    aliases: ["Stable Diffusion 3.5"],
    category: "Images & vision",
    kind: "Model family",
    job: "An image-generation model family that turns prompts and supported image inputs into visual candidates. It also illustrates how a model can be adapted for a narrower visual style or task through additional training methods.",
    example:
      "A design manager pilots approved concept images for a fictional campaign and compares the output with the brief before assigning designers final production work.",
    question:
      "Which model variant, license, training inputs, and review process support the intended commercial use?",
    limit:
      "Variants and derivatives have different terms and capabilities. Generated images can distort products or imply unsupported facts, and adaptation requires suitable data and evaluation.",
    context:
      "Named in image-generation material and used to illustrate parameter-efficient model adaptation.",
    statusNote: null,
    url: "https://github.com/Stability-AI/generative-models",
    lessonIds: ["f7", "m1"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/16 - Adapting Foundation Models/Parameter Efficient Fine-Tuning.md",
      "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Technologies.md",
      "3 - Multimodal AI Applications/4 - Transformers & Multimodal Processing/Transformers & Multimodal Processing.md",
    ],
    glossaryId: "stable-diffusion",
  },
  {
    id: "streamlit",
    name: "Streamlit",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Framework",
    job: "A framework for turning Python data and model workflows into interactive web applications. It helps teams create demonstrable interfaces where reviewers can enter questions, inspect outputs and compare evaluation results during a pilot.",
    example:
      "A knowledge team lets subject-matter reviewers try a document assistant and record whether the cited passages actually support each generated answer.",
    question:
      "What feedback will the prototype collect, and what additional controls are needed for operational use?",
    limit:
      "A usable prototype does not establish authentication, capacity or support readiness; the surrounding deployment and data handling still need deliberate design.",
    context:
      "The NASA educational project uses Streamlit for its chat interface and to display evaluation results.",
    statusNote: null,
    url: "https://docs.streamlit.io/",
    lessonIds: ["r1", "r8"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Instructions.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Project Overview.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/1 - Introduction to LLMs and Retrival Augmented Generation (RAG)/Prerequisites and Environment.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Project-NASA-Mission-Intelligence-Starter/README.md",
    ],
    glossaryId: null,
  },
  {
    id: "subword-nmt",
    name: "subword-nmt",
    aliases: [],
    category: "Data & analysis",
    kind: "Library",
    job: "A reference implementation of subword segmentation, associated with byte-pair encoding for text models. It breaks words into reusable pieces and provides historical context for why language systems process tokens that do not always correspond to whole words.",
    example:
      "A language-technology manager reviews a legacy translation pipeline and asks whether its text segmentation matches the model that consumes the output.",
    question:
      "Is this segmentation method compatible with the model and appropriate for the languages we need?",
    limit:
      "It is a specific segmentation tool rather than a universal tokenizer; modern models may require different vocabularies and preprocessing conventions.",
    context:
      "The RAG tokenization lesson links subword-nmt as a practical BPE implementation and background resource.",
    statusNote: null,
    url: "https://github.com/rsennrich/subword-nmt",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
    ],
    glossaryId: null,
  },
  {
    id: "supervision",
    name: "Supervision",
    aliases: [],
    category: "Images & vision",
    kind: "Library",
    job: "A computer-vision utility library for working with detections, annotations, counting, and tracking-related workflows. It helps teams connect model outputs to visible results and application logic, such as counting objects crossing a defined area.",
    example:
      "A facilities manager tests a counting workflow on recorded footage and compares displayed counts with manually reviewed examples from busy and quiet periods.",
    question:
      "How are detection errors and tracking mistakes reflected in the final counts or alerts that managers will receive?",
    limit:
      "Clear annotations can make incorrect results look authoritative. Counting accuracy depends on the detector, tracking setup, camera conditions, and the chosen counting rules.",
    context:
      "Imported in multimodal video exercises for visual annotations and tracking or counting support.",
    statusNote: null,
    url: "https://supervision.roboflow.com/latest/",
    lessonIds: ["m1", "m4", "m5", "m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/22 - Speech Processing/Whisper.md",
      "3 - Multimodal AI Applications/33 - Video Classification & Moderation/Video classification.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Demo: YOLOv9 Video Object Detection.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Exercise: Luggage Counting on a Conveyor Belt.md",
    ],
    glossaryId: null,
  },
  {
    id: "swe-bench",
    name: "SWE-bench",
    aliases: [],
    category: "Evaluation & observability",
    kind: "Dataset / benchmark",
    job: "A benchmark for evaluating whether AI systems can resolve software issues in existing repositories. It frames coding capability as completing realistic change tasks under evaluation conditions, rather than merely generating plausible-looking snippets.",
    example:
      "An engineering manager reviews a coding-agent benchmark result and then commissions a smaller evaluation on representative issues from the team’s own maintained projects.",
    question:
      "Do the benchmark’s task setup and verification process resemble our repository and review workflow?",
    limit:
      "Benchmark scores depend on the evaluated setup and do not establish maintainability, security or success on an unfamiliar organization’s codebase.",
    context:
      "The evaluation lesson names SWE-bench as an example of measuring software-related model performance without teaching learners to write code.",
    statusNote: null,
    url: "https://www.swebench.com/",
    lessonIds: ["f4"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/8 - Evaluating Generative AI Models/Benchmarking GenAI Models.md",
      "1 - Generative AI Fundamentals/8 - Evaluating Generative AI Models/Benchmarking GenAI Models - Summary.md",
    ],
    glossaryId: null,
  },
  {
    id: "synthesia",
    name: "Synthesia",
    aliases: [],
    category: "Audio & video",
    kind: "Application",
    job: "A video-production platform for creating presenter-led content from scripts using AI avatars and related media tools. It can help organizations update repeatable training or communication materials while maintaining an editorial process for what is said and shown.",
    example:
      "A learning manager prepares localized onboarding videos from an approved script, then has regional reviewers check pronunciation, wording, and visual presentation.",
    question:
      "How will script approval, presenter authorization, localization review, and updates be managed across versions?",
    limit:
      "An avatar can deliver inaccurate or unsuitable content convincingly; script accuracy, consent for custom likenesses, and audience review remain necessary.",
    context:
      "Named in the video-generation tools lesson for avatar-based training and corporate communication workflows.",
    statusNote: null,
    url: "https://www.synthesia.io/",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/35 - Video Generation/Video Generation Tools.md",
    ],
    glossaryId: "synthesia",
  },
  {
    id: "t5",
    name: "T5",
    aliases: [],
    category: "Assistants & models",
    kind: "Model family",
    job: "An earlier text-to-text model family that represents different language tasks through text inputs and outputs. It provides historical context for task transfer and tokenizer compatibility, helping explain how one model approach can support several kinds of language work.",
    example:
      "A learning manager compares classification and summarization demonstrations to show that a common input-output pattern does not imply equal quality on both tasks.",
    question:
      "Which task adaptation and evaluation support this specific model, rather than assuming every text task works equally well?",
    limit:
      "The original family is a historical model example, not a current assistant recommendation. Variants, task adaptation, and tokenizer choices affect what it can do reliably.",
    context:
      "Named in the tokenizer comparison as background for compatibility between model families and text processing.",
    statusNote: null,
    url: "https://github.com/google-research/text-to-text-transfer-transformer",
    lessonIds: ["r4", "r6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Retrieval, Ranking.md",
    ],
    glossaryId: null,
  },
  {
    id: "temporal",
    name: "Temporal",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Platform / service",
    job: "A workflow-orchestration system for coordinating durable application processes across failures and delays. It can help a multi-step AI application resume work reliably while recording where the process stands and what has already happened.",
    example:
      "A document intake workflow waits for extraction, requests a reviewer’s decision and continues processing afterward without losing track of the document’s status.",
    question:
      "Which steps may be retried safely, and how will we avoid repeating consequential actions?",
    limit:
      "Durable execution does not make business actions safe to repeat; workflow design must account for external side effects, timeouts and human decisions.",
    context:
      "The architecture material names Temporal as a service-orchestration example, distinct from ordinary references to temporal patterns in video.",
    statusNote: null,
    url: "https://docs.temporal.io/",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "temporal-segment-networks",
    name: "Temporal Segment Networks",
    aliases: ["TSN"],
    category: "Audio & video",
    kind: "Model family",
    job: "A video-recognition model approach that samples information from different portions of a clip and combines it for an overall prediction. It illustrates how a system can consider temporal coverage without treating every frame as an independent full analysis.",
    example:
      "A media analytics manager asks how a proposed action-recognition system samples long clips and whether brief events are still represented.",
    question:
      "Which events could the sampling strategy miss, and how will we test that risk on representative footage?",
    limit:
      "Sparse sampling can miss short or localized events; this historical research approach does not guarantee a fixed reduction in computation without accuracy loss.",
    context:
      "Named in the enterprise video-processing lesson when discussing temporal sampling; linked to its original research implementation rather than a hosted product.",
    statusNote: null,
    url: "https://github.com/yjxiong/temporal-segment-networks",
    lessonIds: ["m6"],
    sourcePaths: [
      '3 - Multimodal AI Applications/28 - Introduction to Enterprise Video Processing/How AI "Watches" Videos.md',
    ],
    glossaryId: null,
  },
  {
    id: "tenacity",
    name: "Tenacity",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Library",
    job: "A library for defining retry behavior when a software operation fails temporarily. It helps an AI application handle transient service problems with controlled waiting and stopping rules, instead of abandoning every request immediately or retrying without limit.",
    example:
      "A service owner asks engineers to handle temporary model-service failures while ensuring a retry cannot submit the same customer action twice.",
    question:
      "Which failures are safe to retry, what is the stopping rule, and how are repeated external actions prevented?",
    limit:
      "Retries can amplify traffic, delay responses, or repeat side effects. They need bounded attempts, appropriate waiting, and separate treatment for failures that will not recover.",
    context:
      "A direct multimodal dependency used for retry handling around service interactions.",
    statusNote: null,
    url: "https://tenacity.readthedocs.io/en/latest/",
    lessonIds: ["m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/Demo: Testing Multimodal AI Systems with Pydantic Evals.md",
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/Exercise: Building a Real Estate Description System with Evaluations.md",
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/Solution: Building a Real Estate Description System with Evaluations.md",
      "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/demo.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    aliases: [],
    category: "Training & adaptation",
    kind: "Framework",
    job: "A machine-learning framework for developing, training and running models. It supplies computational building blocks within a larger AI system, while data preparation, task definition and operational integration remain separate parts of the project.",
    example:
      "A technology manager reviews an existing TensorFlow classifier and asks whether adapting the supported system is preferable to rebuilding the workflow around another stack.",
    question:
      "How does the framework fit our team’s skills, deployment environment and long-term maintenance responsibilities?",
    limit:
      "A framework choice does not establish model quality or deployment readiness; compatibility, data and evaluation determine whether the resulting system is useful.",
    context:
      "The multimodal architecture and serving discussion names TensorFlow as a framework option, rather than using it for every exercise.",
    statusNote: null,
    url: "https://www.tensorflow.org/tutorials",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "tensorflow-serving",
    name: "TensorFlow Serving",
    aliases: ["TF Serving"],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "A serving system that exposes trained models for use by applications, with built-in support for TensorFlow models. It separates requesting predictions from training the model, helping teams manage model versions and the infrastructure that answers inference requests.",
    example:
      "A platform manager plans how an approved image classifier will serve predictions to several internal applications without each application loading its own copy.",
    question:
      "How will model rollout, rollback, capacity, and prediction monitoring work in the proposed serving setup?",
    limit:
      "Serving infrastructure does not train or validate the model; compatibility, availability, security, and quality monitoring still need explicit ownership.",
    context:
      "Named in the multimodal implementation and serving-strategies lesson as a custom model-serving option.",
    statusNote: null,
    url: "https://www.tensorflow.org/tfx/guide/serving",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "tiktoken",
    name: "tiktoken",
    aliases: [],
    category: "Assistants & models",
    kind: "Library",
    job: "A tokenizer library used to turn text into the units expected by supported OpenAI models. It helps teams inspect tokenization and estimate input size, making limits and workload measurements more concrete during application planning.",
    example:
      "A product manager asks why two equally long documents consume different token counts before choosing document-length limits for an internal assistant.",
    question:
      "Are our token estimates using the encoding and request structure of the actual model and application?",
    limit:
      "Plain text token counts may not capture the full request structure or other input types. Token counts also measure text units, not correctness or usefulness.",
    context:
      "Used in tokenization and text-size discussions in the language-model source material.",
    statusNote: null,
    url: "https://github.com/openai/tiktoken",
    lessonIds: ["r1", "r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Resources for Further Learning.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/9 - Implementing Tokens, Embeddings, and Vector Search/Exercise: Tokenization.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/9 - Implementing Tokens, Embeddings, and Vector Search/Solution: Tokenization.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/1 - Introduction to LLMs and Retrival Augmented Generation (RAG)/Prerequisites and Environment.md",
    ],
    glossaryId: null,
  },
  {
    id: "timesformer",
    name: "TimeSformer",
    aliases: [],
    category: "Audio & video",
    kind: "Model family",
    job: "A historical video-understanding architecture that uses attention across image space and time. It illustrates how video models can consider relationships between frames instead of treating a clip solely as a collection of independent images.",
    example:
      "A training-video team studies whether a model can distinguish visually similar actions whose meaning depends on the order of movement across frames.",
    question:
      "Does the evaluation test motion and event order, or could individual still images explain the result?",
    limit:
      "The original research repository is archived, and research benchmark results do not establish reliable understanding of a business’s video conditions.",
    context:
      "The source names TimeSformer as a video-model example. Its original repository was archived in January 2025.",
    statusNote:
      "Original research implementation archived in January 2025; the model remains a historical teaching example.",
    url: "https://github.com/facebookresearch/TimeSformer",
    lessonIds: ["m1", "m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/29 - AI Models for Video Undestanding/Transformers in Video Understanding.md",
      "3 - Multimodal AI Applications/4 - Transformers & Multimodal Processing/How Transformers Became the Jack of All Trades (Part 2).md",
    ],
    glossaryId: null,
  },
  {
    id: "timm",
    name: "timm",
    aliases: ["PyTorch Image Models"],
    category: "Images & vision",
    kind: "Library",
    job: "A collection of image models and supporting utilities for PyTorch, often called PyTorch Image Models. It helps technical teams load documented model implementations, prepare inputs consistently, and compare or adapt vision models within a shared framework.",
    example:
      "A quality inspection manager asks the team to compare two pretrained image models using the same factory dataset and acceptance criteria.",
    question:
      "Which model, preprocessing assumptions, and license are attached to the checkpoint being proposed?",
    limit:
      "A model collection contains varied architectures and training histories; consistent evaluation and compatible preprocessing are needed before comparing business suitability.",
    context:
      "Directly listed in the multimodal requirements as a supporting vision-model library.",
    statusNote: null,
    url: "https://huggingface.co/docs/timm/index",
    lessonIds: ["m2", "m3"],
    sourcePaths: [
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/l2/demos/5-clip-and-florence/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "tokenizer-playground",
    name: "Tokenizer Playground",
    aliases: ["the-tokenizer-playground"],
    category: "Assistants & models",
    kind: "Application",
    job: "An interactive Hugging Face Space by Xenova for comparing how tokenizers split text. It makes an otherwise hidden preprocessing step visible, helping managers understand why language, punctuation, and model choice can affect the number of text units.",
    example:
      "A course participant compares the same short message in two languages and observes how different tokenizers divide it before discussing workload estimation.",
    question:
      "Which tokenizer matches the model we plan to use, and does the demonstration include the languages our users write?",
    limit:
      "The playground is a learning aid, not a complete request-cost estimator. Avoid entering sensitive text into a public demonstration without an approved data-handling basis.",
    context:
      "Linked directly from the source tokenization lesson as the-tokenizer-playground by Xenova.",
    statusNote: null,
    url: "https://huggingface.co/spaces/Xenova/the-tokenizer-playground",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
    ],
    glossaryId: null,
  },
  {
    id: "torchao",
    name: "torchao",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Library",
    job: "A PyTorch optimization toolkit supporting techniques such as lower-precision computation and model compression. It helps engineers explore efficiency tradeoffs when a model must fit a particular hardware or response-time budget.",
    example:
      "An inference team compares an optimized model with its baseline on difficult internal examples before approving a lower-memory deployment for a pilot.",
    question:
      "What quality difference is acceptable in exchange for the measured efficiency improvement?",
    limit:
      "Optimization support depends on the model and hardware, and lower-precision execution can change outputs; both quality and performance need direct measurement.",
    context:
      "The focused project requirements explicitly include torchao as a supporting optimization component rather than a standalone learner application.",
    statusNote: null,
    url: "https://docs.pytorch.org/ao/stable/index.html",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/Exercise/project/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "torchaudio",
    name: "TorchAudio",
    aliases: [],
    category: "Audio & video",
    kind: "Library",
    job: "A PyTorch library for audio and signal processing, with supporting functions and components for audio workflows. It connects sound data with the wider PyTorch ecosystem, although its maintenance phase means older examples need careful compatibility review.",
    example:
      "A speech-project manager asks the team to review an older prototype’s audio dependencies before funding further development and deployment.",
    question:
      "Which APIs remain supported, and what migration work is needed for our existing audio pipeline?",
    limit:
      "TorchAudio has entered maintenance, with some APIs removed; teams should check current supported components rather than copying older environment instructions unchanged.",
    context:
      "Declared in the fundamentals counting-model requirements; that module does not demonstrate an audio workflow using it.",
    statusNote: "In maintenance; some older APIs have been removed.",
    url: "https://docs.pytorch.org/audio/stable/index.html",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/Exercise/project/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "torchcodec",
    name: "TorchCodec",
    aliases: [],
    category: "Audio & video",
    kind: "Library",
    job: "A PyTorch media library that decodes audio and video into data usable by model workflows. It helps connect ordinary media files to tensor-based processing, giving engineers control over how frames and samples are read.",
    example:
      "A video-analysis manager asks engineers to verify that sampling preserves the brief event the pilot is supposed to detect in recorded footage.",
    question:
      "Does the decoding and sampling configuration preserve the timing, quality, and events our evaluation depends on?",
    limit:
      "Decoding compatibility and device support depend on the environment. Reading media successfully does not guarantee that the selected frames or audio samples contain the needed evidence.",
    context:
      "Imported and declared directly in multimodal media-processing environments.",
    statusNote: null,
    url: "https://github.com/meta-pytorch/torchcodec",
    lessonIds: ["m4"],
    sourcePaths: [
      "3 - Multimodal AI Applications/23 - Implementing Speech Processing with Whisper & Gemini/Demo: Speech Transcription with Whisper.md",
      "3 - Multimodal AI Applications/21 - Sound Retrieval and Classification with CLAP/demo.ipynb",
      "3 - Multimodal AI Applications/23 - Implementing Speech Processing with Whisper & Gemini/3-whisper demo.ipynb",
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "torchserve",
    name: "TorchServe",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "A historical serving system for exposing PyTorch models through application endpoints. It helps explain the separation between a trained model and the software needed to accept requests and operate that model as a service.",
    example:
      "A platform owner inventories a legacy model endpoint and plans its replacement after confirming that the serving project no longer receives maintenance or security updates.",
    question:
      "Which supported serving approach will replace this dependency, and how will we validate the migration?",
    limit:
      "The project is archived and no longer plans updates, bug fixes or security patches; it should not be recommended for new production deployments.",
    context:
      "The archive mentions TorchServe as a custom-serving option. The guide retains that historical reference and records its discontinued maintenance status.",
    statusNote:
      "Archived serving project; updates, bug fixes and security patches are no longer planned.",
    url: "https://github.com/pytorch/serve",
    lessonIds: ["m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md",
    ],
    glossaryId: null,
  },
  {
    id: "torchvision",
    name: "TorchVision",
    aliases: [],
    category: "Images & vision",
    kind: "Library",
    job: "A PyTorch library providing image transformations, datasets, and vision-model components. It helps teams prepare visual inputs and use common training or inference building blocks consistently, reducing the need to recreate standard computer-vision preparation steps.",
    example:
      "A pilot sponsor asks the team to confirm that training and evaluation images receive the same approved preparation before comparing model results.",
    question:
      "Are dataset splits and image transformations consistent with the model’s documented input requirements?",
    limit:
      "Incorrect resizing, normalization, or dataset handling can undermine results; library availability does not establish that the visual pipeline is appropriate.",
    context:
      "Used in Fashion-MNIST fundamentals exercises and multimodal image workflows for datasets, transforms, and model support.",
    statusNote: null,
    url: "https://docs.pytorch.org/vision/stable/index.html",
    lessonIds: ["f5", "m2", "m3", "m6"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Demo: Comparing PyTorch Optimizers.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md",
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Exercise: Optimizer Bakeoff.md",
      "1 - Generative AI Fundamentals/11 - Implementing Neural Networks using Pytorch/Demo: Comparing PyTorch Optimizers.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "tqdm",
    name: "tqdm",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Library",
    job: "A progress-display library for long-running processing tasks. It helps people see how much of a batch has been processed and estimate remaining work, improving the visibility of experiments that might otherwise appear inactive.",
    example:
      "A training coordinator watches a dataset-processing progress display while separately checking the final completion report for failures and skipped records.",
    question:
      "What confirms successful completion and data quality beyond the progress display reaching its final count?",
    limit:
      "A full progress bar does not prove that every item succeeded or produced a useful result. Error summaries and output checks are still required.",
    context:
      "Used in source loops and longer-running exercises to display processing progress.",
    statusNote: null,
    url: "https://tqdm.github.io/",
    lessonIds: ["r8", "m2", "m4", "m6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Demo-RAG-Pipeline-with-Evaluation.ipynb",
      "3 - Multimodal AI Applications/9 - Image Search using CLIP Embeddings/Exercise: Image to Image Search with CLIP.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Demo-RAG-Pipeline-with-Evaluation original.ipynb",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/Exercise/RAG Evaluation Implementation/exercises/Demo-RAG-Pipeline-with-Evaluation.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "triton",
    name: "Triton",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Developer tool",
    job: "A programming language and compiler for writing efficient GPU computation kernels. It operates beneath some machine-learning libraries, helping implement calculations that support model training and inference on compatible hardware.",
    example:
      "An infrastructure lead asks whether a model runtime’s accelerated operations are supported on the organization’s GPUs before approving the planned deployment environment.",
    question:
      "Which hardware and dependency constraints does this acceleration component introduce?",
    limit:
      "Kernel-level optimization is specialized engineering work, and gains depend on workload and hardware; it does not independently provide a complete model-serving service.",
    context:
      "The capstone acceleration stack includes the Triton compiler. This entry is distinct from NVIDIA Triton Inference Server.",
    statusNote: null,
    url: "https://triton-lang.org/main/index.html",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/Exercise/project/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "typing-extensions",
    name: "typing-extensions",
    aliases: ["typing_extensions"],
    category: "Workspaces & infrastructure",
    kind: "Library",
    job: "A compatibility library that makes newer Python typing features available across supported Python versions. It supports developer tooling and libraries that describe expected data shapes, helping maintain consistent interfaces within a larger application environment.",
    example:
      "A delivery manager asks why an application upgrade requires a compatibility-library change and requests evidence that the approved environment still works.",
    question:
      "Have the supported Python versions and dependent libraries been tested together after the update?",
    limit:
      "Type annotations describe expectations but do not automatically validate all runtime data; separate validation and tests are still necessary.",
    context:
      "The multimodal structured-output demonstration imports typing_extensions for type annotations, and the package supports the exercise environment.",
    statusNote: null,
    url: "https://typing-extensions.readthedocs.io/en/latest/",
    lessonIds: ["m5", "m6", "m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/39 - Using Gradio and Pydantic AI/Demo: Building a Multimodal Gradio Chatbot with Pydantic AI.md",
      "3 - Multimodal AI Applications/25 - Audio Sentiment Analysis with Gemini/Demo: Audio Sentiment Analysis with Pydantic AI and Gemini.md",
      "3 - Multimodal AI Applications/34 - Video Classification & Moderation with Gemini/Demo: Safety Equipment Video Moderation with Pydantic AI.md",
      "3 - Multimodal AI Applications/32 - Video Understanding & Search with Gemini & Clip4Clip/Demo: Video Description with Pydantic AI and Gemini.md",
    ],
    glossaryId: null,
  },
  {
    id: "ubuntu",
    name: "Ubuntu",
    aliases: ["Ubuntu 24.04"],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "A Linux operating-system distribution used as a foundation for technical workstations and servers. In AI projects, it provides the environment where drivers, Python tools, model services, and operational controls are installed and maintained.",
    example:
      "A platform manager assigns responsibility for operating-system updates and GPU-driver compatibility before moving an experiment onto a shared server.",
    question:
      "Which supported operating-system release and maintenance process will keep the application and its hardware dependencies working together?",
    limit:
      "An operating system does not manage the application’s correctness. Release support, patching, access control, and compatibility with drivers and libraries need ongoing ownership.",
    context:
      "Named as the operating system in documented source-project environment instructions.",
    statusNote: null,
    url: "https://ubuntu.com/server/docs/",
    lessonIds: ["f8"],
    sourcePaths: ["1 - Generative AI Fundamentals/Exercise/project/README.md"],
    glossaryId: null,
  },
  {
    id: "unsloth",
    name: "Unsloth",
    aliases: [],
    category: "Training & adaptation",
    kind: "Framework",
    job: "A framework and tooling for running and adapting supported language models efficiently. In the course, it helps assemble the model-training workflow so learners can investigate behavior changes within a practical experimental environment.",
    example:
      "A development lead tests whether an efficient adaptation setup can meet the pilot’s hardware limits while preserving the same held-out evaluation requirements.",
    question:
      "What measured resource savings and task-quality results support this training approach?",
    limit:
      "Compatibility and efficiency vary by model and configuration; a faster training workflow does not guarantee that the adapted behavior is useful or reliable.",
    context:
      "The fundamentals capstone uses Unsloth within its training stack. Broader product capabilities should not be assumed to appear in that exercise.",
    statusNote: null,
    url: "https://unsloth.ai/docs",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/The Acceleration Stack: A Primer.md",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
    ],
    glossaryId: "unsloth",
  },
  {
    id: "unsloth-zoo",
    name: "Unsloth Zoo",
    aliases: ["unsloth-zoo", "unsloth_zoo"],
    category: "Training & adaptation",
    kind: "Library",
    job: "A supporting library of utilities used by Unsloth training workflows. It helps supply the implementation components behind model adaptation experiments and should be understood as part of a coordinated training environment, rather than a separate end-user AI product.",
    example:
      "A training-project manager asks the team to preserve a tested dependency set so an approved adaptation experiment can be reproduced later.",
    question:
      "Which versions and licenses are required by the complete training stack we intend to maintain?",
    limit:
      "Changing a supporting utility can affect compatibility across the training stack; validate the coordinated environment and review applicable licenses before deployment.",
    context:
      "Directly declared in the fundamentals counting-model project requirements alongside Unsloth and related training dependencies.",
    statusNote: null,
    url: "https://github.com/unslothai/unsloth-zoo",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/Exercise/project/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "uv",
    name: "uv",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Developer tool",
    job: "A Python project and package-management tool for preparing environments and dependencies. It helps technical teams keep project setup consistent and record dependency choices, reducing friction when an experiment is reproduced on another machine.",
    example:
      "A project manager asks a second engineer to recreate the approved environment before accepting a model experiment as reproducible evidence.",
    question:
      "Are dependency versions recorded and reviewed, and can the environment be rebuilt without undocumented local changes?",
    limit:
      "Fast installation does not establish package trust or compatibility. Teams still need approved sources, dependency review, and tests before adopting environment updates.",
    context:
      "Used in source setup instructions to create environments and install exercise dependencies.",
    statusNote: null,
    url: "https://docs.astral.sh/uv/",
    lessonIds: ["f5", "f6", "f7", "f8", "m8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/Exercise/README.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Instructions.md",
      "1 - Generative AI Fundamentals/Exercise/project/README.md",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Environment Setup.md",
    ],
    glossaryId: null,
  },
  {
    id: "uvicorn",
    name: "Uvicorn",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "A Python application server that runs web applications using the ASGI interface. It receives network requests and hands them to an application framework, forming one part of the infrastructure around an AI service.",
    example:
      "A support-platform team runs an internal model-backed API and checks that concurrent pilot requests are handled predictably before expanding access to additional departments.",
    question:
      "How will the complete service handle load, timeouts, restarts and access control?",
    limit:
      "The server does not supply model correctness or a full operating platform; secure deployment and capacity planning require additional application and infrastructure decisions.",
    context:
      "The source environment includes Uvicorn to run Python web applications, separate from the framework and model inside those applications.",
    statusNote: null,
    url: "https://github.com/Kludex/uvicorn",
    lessonIds: ["m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/starter/pyproject.toml",
      "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/starter/multimodal_moderation/fastapi_app.py",
      "3 - Multimodal AI Applications/Exercise/requirements.txt",
      "3 - Multimodal AI Applications/Exercise/project/starter/pyproject.toml",
    ],
    glossaryId: null,
  },
  {
    id: "vellum",
    name: "Vellum",
    aliases: [],
    category: "Applications & orchestration",
    kind: "Platform / service",
    job: "A platform for developing prompts and AI workflows with tools for structured inputs, scenarios, and prompt experimentation. It helps teams organize how instructions are assembled and reviewed as an application moves beyond individual ad hoc conversations.",
    example:
      "A service design manager compares prompt variations on approved test scenarios before choosing instructions for a customer-support assistant pilot.",
    question:
      "Can reviewers trace each prompt change to the examples, evaluations, and approvals that justified it?",
    limit:
      "Prompt management does not ensure correct answers; representative tests, access rules, application integration, and release decisions still need accountable owners.",
    context:
      "The RAG prompt-templating lesson links Vellum as a platform for organizing dynamic prompts; the course does not require an account.",
    statusNote: null,
    url: "https://docs.vellum.ai/product/prompts/prompt-engineering",
    lessonIds: ["r2"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Prompt Templating.md",
    ],
    glossaryId: null,
  },
  {
    id: "veo",
    name: "Veo",
    aliases: ["Veo 2", "Veo 3"],
    category: "Audio & video",
    kind: "Model family",
    job: "Google’s video-generation model family creates video from supported creative inputs. It gives teams a way to explore scenes and visual directions, while the publishing team remains responsible for factual claims, continuity, and audience expectations.",
    example:
      "A marketing manager generates a fictional concept clip for a campaign review and checks that stakeholders understand it does not show a real event.",
    question:
      "What must be reviewed for visual consistency, factual implications, permissions, and disclosure before this clip can be shared?",
    limit:
      "Generated motion and details can be inconsistent or misleading. Features and access vary by model and product, and a polished clip is not a record of reality.",
    context:
      "Used in a source video-generation exercise and discussed as a creative-generation option.",
    statusNote: null,
    url: "https://deepmind.google/models/veo/",
    lessonIds: ["m1", "m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/35 - Video Generation/Video Generation Tools.md",
      "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Technologies.md",
      "3 - Multimodal AI Applications/36 - Video Generation with Veo 3/Demo: Generate a Marketing Video with Veo 3.md",
    ],
    glossaryId: "veo",
  },
  {
    id: "video-llama",
    name: "Video-LLaMA",
    aliases: [],
    category: "Audio & video",
    kind: "Model family",
    job: "A research model family connecting visual and audio representations with a language model for video understanding. It illustrates how several media-processing components can contribute to answering questions about a clip.",
    example:
      "A media-review team tests questions about an approved training clip and checks whether the response accurately relates visible actions to the available sound.",
    question:
      "Can the system identify evidence from the relevant moments rather than invent a coherent account of the clip?",
    limit:
      "Combining modalities does not guarantee correct timing or factual interpretation, and research implementations require separate assessment before use in a supported service.",
    context:
      "The multimodal lessons name Video-LLaMA as an audio-visual language-model architecture and research example.",
    statusNote: null,
    url: "https://github.com/DAMO-NLP-SG/Video-LLaMA",
    lessonIds: ["m1"],
    sourcePaths: [
      "3 - Multimodal AI Applications/4 - Transformers & Multimodal Processing/How Transformers Became the Jack of All Trades (Part 2).md",
    ],
    glossaryId: null,
  },
  {
    id: "vision-transformer",
    name: "Vision Transformer",
    aliases: ["ViT"],
    category: "Images & vision",
    kind: "Model family",
    job: "A vision-model family that treats image patches as a sequence for transformer processing. It provides a foundation for image recognition and related tasks, helping explain how transformer ideas extend beyond language to structured visual inputs.",
    example:
      "A manufacturing manager compares a pretrained vision model with the existing inspection baseline using labeled images from the same production conditions.",
    question:
      "Does the selected checkpoint detect our relevant categories and failures under real image conditions?",
    limit:
      "The architecture name does not establish accuracy on a task; input resolution, training data, adaptation, and evaluation determine practical suitability.",
    context:
      "The multimodal course teaches Vision Transformers and uses concrete pretrained ViT checkpoints rather than discussing only an abstract architecture.",
    statusNote: null,
    url: "https://github.com/google-research/vision_transformer",
    lessonIds: ["m1", "m2", "m3", "m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/33 - Video Classification & Moderation/Video classification.md",
      "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md",
      "3 - Multimodal AI Applications/31 - Video Understanding & Search/Video Search with CLIP4Clip.md",
    ],
    glossaryId: "vision-transformer",
  },
  {
    id: "visual-studio-code",
    name: "Visual Studio Code",
    aliases: ["VSCode", "VS Code"],
    category: "Workspaces & infrastructure",
    kind: "Application",
    job: "A development workspace for editing project files, using extensions, and working with software tools. It is part of the environment engineers use to build and inspect AI applications, rather than a model or end-user business assistant itself.",
    example:
      "A delivery manager asks engineers to document the required workspace extensions and environment so another team can review and maintain the project.",
    question:
      "Which workspace features and extensions are required, approved, and documented for maintaining this application?",
    limit:
      "An editor does not ensure software quality or reproducibility. Extensions can add access and maintenance concerns, while the actual application still needs testing and operational ownership.",
    context:
      "Named in the multimodal source development environment; no coding interface is required for the management lessons.",
    statusNote: null,
    url: "https://code.visualstudio.com/docs",
    lessonIds: ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"],
    sourcePaths: [
      "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/Demo: Pydantic.ai.md",
      "3 - Multimodal AI Applications/11 - Gemini Vision API Basics/Exercise: Image Moderation with Gemini.md",
      "3 - Multimodal AI Applications/11 - Gemini Vision API Basics/Solution: Image Moderation with Gemini.md",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Exercise: Multimodal AI Showcase.md",
    ],
    glossaryId: null,
  },
  {
    id: "vllm",
    name: "vLLM",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Runtime / infrastructure",
    job: "An inference and serving engine for supported language models, designed to manage generation workloads efficiently. It helps technical teams operate models for multiple requests while the application defines the task, access rules and review process.",
    example:
      "A platform team compares throughput and response-time variation when several employees use the same internal assistant during a representative busy-period test.",
    question:
      "Does the serving configuration meet our response-time and capacity targets under realistic concurrent demand?",
    limit:
      "Efficient serving does not improve factual accuracy, and performance depends on model compatibility, hardware, request lengths and the chosen operating settings.",
    context:
      "The capstone uses vLLM in its generation workflow, and the architecture lessons discuss it as a serving option.",
    statusNote: null,
    url: "https://docs.vllm.ai/en/latest/",
    lessonIds: ["f8", "m8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/The Acceleration Stack: A Primer.md",
      "3 - Multimodal AI Applications/44 - Scaling Multimodal AI Architecture/Scaling Multimodal AI Architecture.md",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
    ],
    glossaryId: "vllm",
  },
  {
    id: "vocareum",
    name: "Vocareum",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Platform / service",
    job: "A platform for delivering managed learning workspaces and controlled access to computing or AI services. It helps course providers give learners a prepared environment while managing resources, access, and the lifecycle of practical exercises.",
    example:
      "A learning program manager asks how participants will access an AI lab, save their work, and stay within the program’s resource allocation.",
    question:
      "What access, persistence, limits, and support are included in our specific learning arrangement?",
    limit:
      "Course access and resource allowances depend on enrollment and provider configuration; an archived workspace link does not grant ongoing public entitlement.",
    context:
      "The source uses Vocareum for hosted exercises and course-managed model access across the modules.",
    statusNote: null,
    url: "https://www.vocareum.com/",
    lessonIds: [
      "f1",
      "f2",
      "f4",
      "f8",
      "r1",
      "r2",
      "r3",
      "r4",
      "r5",
      "r7",
      "r8",
      "m1",
      "m2",
      "m4",
      "m5",
      "m6",
      "m7",
      "m8",
    ],
    sourcePaths: [
      "1 - Generative AI Fundamentals/19 - Reinforcement Fine-tuning on Foundation Models/Demo: Teaching an LLM to Count.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/7 - Applying Prompt Instruction Refinement with Python/Solution: Prompt Refinement.md",
      "3 - Multimodal AI Applications/1 - Introduction/Get a Vocareum Gemini API Key.md",
      "1 - Generative AI Fundamentals/19 - Reinforcement Fine-tuning on Foundation Models/Exercise Solution: Teach an LLM to Spell.md",
    ],
    glossaryId: null,
  },
  {
    id: "weaviate",
    name: "Weaviate",
    aliases: [],
    category: "Knowledge & retrieval",
    kind: "Database / storage",
    job: "A database designed for search using vector representations and associated data. It can support retrieval applications that combine semantic matching with other search conditions, giving teams another option for organizing and finding relevant source material.",
    example:
      "A research-operations manager evaluates a document-search pilot with both meaning-based questions and exact product identifiers to see which retrieval approach serves staff better.",
    question:
      "How will the system combine semantic search, exact terms, filters, and updates on the documents our users actually need?",
    limit:
      "Search infrastructure does not ensure grounded answers. Embedding choices, source quality, access filtering, and the balance of search methods require evaluation on real queries.",
    context:
      "Referenced in vector-search lessons for similarity retrieval and metadata filtering.",
    statusNote: null,
    url: "https://docs.weaviate.io/weaviate",
    lessonIds: ["r4", "r6"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Vectors and Vector Search.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Retrieval, Ranking.md",
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Resources for Further Learning.md",
    ],
    glossaryId: "weaviate",
  },
  {
    id: "weights-biases",
    name: "Weights & Biases",
    aliases: ["W&B", "wandb"],
    category: "Evaluation & observability",
    kind: "Platform / service",
    job: "A platform for recording experiments, comparing training runs and tracking related artifacts. It helps teams connect a model result with the configuration and evidence behind it so decisions are easier to review and reproduce.",
    example:
      "A model lead compares two adaptation runs and checks their saved evaluation results before deciding which candidate should enter a broader pilot.",
    question:
      "What experiment data may be recorded, and who can inspect or retain the resulting artifacts?",
    limit:
      "Tracking an experiment does not validate its methodology, and recorded examples or artifacts can contain information that needs access and retention controls.",
    context:
      "The adaptation example mentions this optional reporting destination but disables reporting. Its inclusion does not imply the exercise sends data to the service.",
    statusNote: null,
    url: "https://github.com/wandb/wandb",
    lessonIds: ["f7"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/17 - Applying PEFT on Foundation Models/Demo: Teach an LLM a New Skill.md",
    ],
    glossaryId: null,
  },
  {
    id: "wheel",
    name: "wheel",
    aliases: [],
    category: "Workspaces & infrastructure",
    kind: "Developer tool",
    job: "A Python packaging tool associated with the wheel distribution format, used for inspecting or manipulating packaged software. It appears in older environment bootstraps and helps explain that installing a model workflow also depends on software distribution machinery.",
    example:
      "A platform manager reviews an old notebook setup and asks the team which packaging tools are still needed in the supported environment.",
    question:
      "Is this package actually required by our current build process, or only inherited from older setup instructions?",
    limit:
      "Modern setuptools can build wheels without this separate package; installing it automatically does not solve dependency or platform compatibility problems.",
    context:
      "The counting-model notebook explicitly installs wheel during environment setup. Current wheel documentation distinguishes its remaining utility role from historical build requirements.",
    statusNote:
      "Historical build dependency; modern setuptools no longer requires it to build wheels.",
    url: "https://wheel.readthedocs.io/en/stable/",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/gen_ai_fundamentals_project_starter.ipynb",
    ],
    glossaryId: null,
  },
  {
    id: "whisper",
    name: "Whisper",
    aliases: ["Whisper large-v3-turbo"],
    category: "Audio & video",
    kind: "Model family",
    job: "A speech-recognition model family that converts audio into text and supports speech-related processing. It helps teams make recordings searchable or reviewable, while transcription remains a separate step from understanding, summarizing, or approving what was said.",
    example:
      "A training manager transcribes approved practice calls and has reviewers check names, commitments, and unclear passages against the original recording.",
    question:
      "How accurate is transcription for our accents, background noise, vocabulary, and critical numbers, and who checks uncertain passages?",
    limit:
      "Transcription may contain invented or incorrect words. Downloadable Whisper is distinct from the hosted whisper-1 API, which is deprecated with shutdown announced for February 26, 2027.",
    context:
      "Used in audio transcription exercises. Hosted API lifecycle checked separately from the downloadable model on November 13, 2026.",
    statusNote:
      "The hosted whisper-1 API is deprecated, with shutdown announced for February 26, 2027. This deadline does not retire the downloadable Whisper models.",
    url: "https://github.com/openai/whisper",
    lessonIds: ["m1", "m4", "m7"],
    sourcePaths: [
      "3 - Multimodal AI Applications/22 - Speech Processing/Whisper.md",
      "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md",
      "3 - Multimodal AI Applications/37 - Multimodal AI Deployment/Multimodal Architecture Approaches.md",
      "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Exercise: Multimodal AI Showcase.md",
    ],
    glossaryId: "whisper",
  },
  {
    id: "wikipedia",
    name: "Wikipedia",
    aliases: [],
    category: "Knowledge & retrieval",
    kind: "Dataset / benchmark",
    job: "A collaboratively edited reference resource that appears in discussions of model training data and retrieval. It helps illustrate the difference between collecting text, identifying useful evidence and deciding whether a claim is authoritative for a particular task.",
    example:
      "A learning team uses a general reference article to introduce a topic, then checks the cited primary sources before including consequential claims in training material.",
    question:
      "Which claims require stronger primary evidence or a more current source than the retrieved article?",
    limit:
      "Article quality and currency vary, and retrieved wording can be incomplete or contested; a familiar source name does not establish every claim’s reliability.",
    context:
      "The course discusses Wikipedia as a training-data and retrieval resource, rather than as a model or software dependency.",
    statusNote: null,
    url: "https://en.wikipedia.org/wiki/Wikipedia:About",
    lessonIds: ["f2", "f7"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/16 - Adapting Foundation Models/Model Adaptation Techniques.md",
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/Training Data for LLMs.md",
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/What is a Foundation Model?.md",
      "1 - Generative AI Fundamentals/5 - Introduction to Foundation Models/Training Data for LLMs - Summary.md",
    ],
    glossaryId: null,
  },
  {
    id: "xformers",
    name: "xFormers",
    aliases: [],
    category: "Training & adaptation",
    kind: "Library",
    job: "A PyTorch-based library of optimized transformer components, including supported attention operations. It helps engineers explore efficient model implementations, potentially reducing resource use when the operations, model design, and hardware are compatible with the selected software stack.",
    example:
      "A model-training manager asks the team to compare memory usage and results before enabling an optional attention implementation in the pilot environment.",
    question:
      "Have the claimed resource benefits been measured while checking numerical behavior and compatibility on our hardware?",
    limit:
      "Optimized components are not universally faster or compatible; hardware, precision, shapes, and library versions determine whether a particular operation is suitable.",
    context:
      "Directly listed in the fundamentals counting-model requirements as part of its training and acceleration stack.",
    statusNote: null,
    url: "https://facebookresearch.github.io/xformers/",
    lessonIds: ["f8"],
    sourcePaths: [
      "1 - Generative AI Fundamentals/20 - Teaching an LLM to Count!/requirements.txt",
      "1 - Generative AI Fundamentals/Exercise/project/requirements.txt",
    ],
    glossaryId: null,
  },
  {
    id: "xlnet",
    name: "XLNet",
    aliases: [],
    category: "Assistants & models",
    kind: "Model family",
    job: "An earlier language-understanding model family developed through a different pretraining approach from BERT. It serves as background for understanding model families and their matching tokenizers, rather than as a configured conversational service in the course.",
    example:
      "A learning lead compares tokenizer examples to show why replacing one model with another requires more than changing the product name in a proposal.",
    question:
      "What task evidence and maintained implementation would justify selecting this historical model for our specific application?",
    limit:
      "A model’s research history does not demonstrate current suitability. Its tokenizer, adaptation requirements, implementation support, and task performance need review before practical use.",
    context:
      "Named in the tokenization lesson as a historical compatibility example.",
    statusNote: null,
    url: "https://github.com/zihangdai/xlnet",
    lessonIds: ["r4"],
    sourcePaths: [
      "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md",
    ],
    glossaryId: null,
  },
  {
    id: "yolo",
    name: "YOLO",
    aliases: ["YOLOv9"],
    category: "Images & vision",
    kind: "Model family",
    job: "A family of object-detection models that identifies learned object categories and their locations in images. It can supply detections to downstream counting or tracking workflows, which add business rules and interpretation around the model outputs.",
    example:
      "A stockroom team tests whether a detector finds labeled container types in camera images and has staff review misses before using counts operationally.",
    question:
      "Which object categories and viewing conditions must be represented in our acceptance tests?",
    limit:
      "Detections can miss small or obscured objects, and licensing and capabilities differ across implementations; an object box does not prove identity or condition.",
    context:
      "The source installs the WongKinYiu YOLOv9 implementation. This entry avoids linking the unrelated package that happens to use the name yolo.",
    statusNote: null,
    url: "https://github.com/WongKinYiu/yolov9",
    lessonIds: ["m6"],
    sourcePaths: [
      "3 - Multimodal AI Applications/29 - AI Models for Video Undestanding/AI Models for Video Understanding.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Demo: YOLOv9 Video Object Detection.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Exercise: Luggage Counting on a Conveyor Belt.md",
      "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Solution: Luggage Counting on a Conveyor Belt.md",
    ],
    glossaryId: "yolo",
  },
];
