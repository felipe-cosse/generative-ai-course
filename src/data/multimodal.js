export default {
  "id": "multimodal",
  "number": 3,
  "title": "Multimodal AI applications",
  "shortTitle": "Multimodal AI",
  "description": "Explore AI that sees, hears, and creates.",
  "image": "/images/multimodal.png",
  "sourceRoot": "3 - Multimodal AI Applications",
  "lessons": [
    {
      "id": "m1",
      "title": "See the whole picture",
      "minutes": 12,
      "sources": [
        {
          "label": "Course Overview",
          "path": "3 - Multimodal AI Applications/1 - Introduction/Course Overview.md"
        },
        {
          "label": "Multimodal AI Fundamentals",
          "path": "3 - Multimodal AI Applications/2 - Multimodal AI Fundamentals/Multimodal AI Fundamentals.md"
        },
        {
          "label": "Demo: Showcasing API-based and Open-Source Models",
          "path": "3 - Multimodal AI Applications/3 - Using Multimodal AI Technologies/Demo: Showcasing API-based and Open-Source Models.md"
        },
        {
          "label": "Transformers & Multimodal Processing",
          "path": "3 - Multimodal AI Applications/4 - Transformers & Multimodal Processing/Transformers & Multimodal Processing.md"
        },
        {
          "label": "The Tooling Landscape",
          "path": "3 - Multimodal AI Applications/5 - Multimodal AI Tooling/The Tooling Landscape.md"
        }
      ],
      "quiz": [
        {
          "question": "A manager wants to classify visible shipping damage. Which pilot scope is most useful?",
          "options": [
            "Collect every customer recording.",
            "Use the package photo and relevant order description, then route uncertain cases to people.",
            "Ask a text-only model to guess damage from the order number."
          ],
          "answer": 1,
          "explanation": "The inputs support the task and uncertainty has an owner."
        },
        {
          "question": "An assistant returns every required field. What has been established?",
          "options": [
            "The format is usable, but the content still needs evaluation.",
            "Every claim is correct.",
            "Human review is unnecessary."
          ],
          "answer": 0,
          "explanation": "Structure controls output shape, not factual accuracy."
        }
      ],
      "outcome": "Choose useful inputs and a reviewable output for a multimodal business workflow.",
      "sections": [
        {
          "heading": "One task, several kinds of information",
          "body": "A modality is a type of information: text, images, sound, or video. Multimodal AI can connect more than one type as input, output, or both. A damaged-product request may include a written description, a photograph, and a voice note. The business value comes from connecting relevant evidence, not from collecting every available file. Start by naming the decision: identify the product, suggest a troubleshooting step, or send the case to a specialist. Then ask which inputs actually help. An image can clarify a visible defect; a long recording may add nothing. Define the permitted data and the person responsible for its use before a pilot."
        },
        {
          "heading": "How different inputs connect",
          "body": "Models convert each input into representations that allow patterns to be compared or combined. Transformer attention relates parts of an input to other relevant parts. In a multimodal system, words may guide attention toward a region in an image. Some systems combine information early; others analyze each modality separately and combine their results later. Managers rarely need to choose the internal mathematics, but should ask whether the system tested the complete task. Understanding a photograph and transcribing a recording separately does not guarantee that their combined answer is consistent. Missing or contradictory evidence should lead to a clarification or a review step."
        },
        {
          "heading": "Buy a workflow, not a magical sense",
          "body": "A managed service can speed up a pilot, while specialized or self-hosted models may offer different control and operating responsibilities. Hugging Face helps teams discover models; a framework such as Pydantic AI coordinates calls and consistent result fields. Neither removes the need for evaluation. Ask for a result that people can act on: issue category, supporting evidence, uncertainty, and next owner. Structured fields make a response easier to process, but can contain incorrect claims. Assign access and usage-budget ownership, and compare tools on approved examples with meaningful success criteria. A credible demonstration includes incomplete inputs and a useful failure response, not only impressive clean examples."
        }
      ],
      "concepts": [
        {
          "term": "Modality",
          "explanation": "A type of information, such as text, image, sound, or video."
        },
        {
          "term": "Attention",
          "explanation": "A mechanism that relates relevant parts of an input; it is not human understanding."
        },
        {
          "term": "Structured output",
          "explanation": "A response with agreed fields that improves consistency without guaranteeing truth."
        }
      ],
      "visual": {
        "title": "From information to a decision",
        "caption": "Add a modality only when it helps answer the business question.",
        "steps": [
          {
            "label": "Relevant inputs",
            "detail": "A product photo and a short customer description."
          },
          {
            "label": "Combined interpretation",
            "detail": "Connect visual evidence with the requested task."
          },
          {
            "label": "Useful result",
            "detail": "State the likely issue and evidence, including uncertainty."
          },
          {
            "label": "Accountable action",
            "detail": "A person reviews unclear or consequential cases."
          }
        ]
      },
      "tools": [
        {
          "name": "Gemini",
          "role": "A managed multimodal model family used in the source demonstrations."
        },
        {
          "name": "Hugging Face",
          "role": "An ecosystem for discovering models and related tools."
        },
        {
          "name": "Pydantic AI",
          "role": "A developer framework for model coordination and structured results."
        }
      ],
      "example": {
        "title": "A damaged appliance, an incomplete picture",
        "context": "Fictional company Alder Appliances receives a blurry photo and a voice complaint.",
        "decision": "The manager asks the pilot to identify the product, cite visible evidence, and request clarification when needed.",
        "result": "The intended workflow asks for a clearer photo rather than asserting an unseen defect; a human owns the next step."
      },
      "activity": {
        "title": "Choose the useful evidence",
        "prompt": "A pilot must triage visible shipping damage. Which inputs would you start with?",
        "options": [
          {
            "label": "Every past customer recording",
            "feedback": "More collection adds handling and privacy work without establishing that it helps identify shipping damage."
          },
          {
            "label": "Package photo and relevant order description",
            "feedback": "Best choice: these inputs address the specific decision. Unclear photographs can trigger human review."
          },
          {
            "label": "Order number alone",
            "feedback": "An identifier helps locate records, but does not show the package condition."
          }
        ],
        "best": 1
      },
      "takeaway": "Choose the decision first, then the inputs, output contract, and review owner.",
      "reflection": "Which missing piece of evidence would make your team stop and ask a person?",
      "sourceSections": [
        1,
        2,
        3,
        4,
        5
      ]
    },
    {
      "id": "m2",
      "title": "Turn images into useful decisions",
      "minutes": 12,
      "sources": [
        {
          "label": "Computer Vision Tasks",
          "path": "3 - Multimodal AI Applications/6 - Introduction to Enterprise Visual Content Processing/Computer Vision Tasks.md"
        },
        {
          "label": "Demo: Huggingface Datasets and Transformers Pipelines",
          "path": "3 - Multimodal AI Applications/7 - Vision Pre-processing Pipelines with HuggingFace/Demo: Huggingface Datasets and Transformers Pipelines.md"
        },
        {
          "label": "Understanding Embeddings in Computer Vision",
          "path": "3 - Multimodal AI Applications/8 - Understanding Embeddings in Computer Vision/Understanding Embeddings in Computer Vision.md"
        },
        {
          "label": "Demo: Building Your First Image Search with CLIP",
          "path": "3 - Multimodal AI Applications/9 - Image Search using CLIP Embeddings/Demo: Building Your First Image Search with CLIP.md"
        },
        {
          "label": "Using Multimodal Model APIs for Vision",
          "path": "3 - Multimodal AI Applications/10 - Using Multimodal Model APIs for Vision/Using Multimodal Model APIs for Vision.md"
        },
        {
          "label": "Exercise: Image Moderation with Gemini",
          "path": "3 - Multimodal AI Applications/11 - Gemini Vision API Basics/Exercise: Image Moderation with Gemini.md"
        }
      ],
      "quiz": [
        {
          "question": "The warehouse wants to locate damaged corners in package photographs. Which output best fits?",
          "options": [
            "A whole-image label only.",
            "A free-form sales description.",
            "Marked locations of suspected damage."
          ],
          "answer": 2,
          "explanation": "Location supports inspection and follow-up; an overall label does not show where to look."
        },
        {
          "question": "Visual search returns a suitcase resembling the customer's photo. What should happen before confirming the product?",
          "options": [
            "Check product identifiers and catalog attributes.",
            "Treat resemblance as exact identity.",
            "Ignore all structured product data."
          ],
          "answer": 0,
          "explanation": "Embedding similarity helps retrieval but cannot establish exact identity or availability."
        }
      ],
      "outcome": "Match image tasks to business questions and recognize the limits of visual similarity.",
      "sections": [
        {
          "heading": "Ask for the right kind of answer",
          "body": "Computer vision is a collection of tasks with different outputs. Classification labels a whole image, such as package or invoice. Detection locates objects, such as a damaged corner. Segmentation outlines regions more precisely. Optical character recognition, or OCR, extracts visible writing. Visual search retrieves similar images. Selecting the wrong task creates a mismatch even when the model works as designed: a whole-image label cannot tell an inspector where a dent is. Start with what the next person needs to do. Then choose the output that supports that action and identify cases where the person should inspect the original image."
        },
        {
          "heading": "Similarity is a useful clue",
          "body": "An embedding is a compact representation of an image. Related visual content can sit close together in a similarity space, allowing a search system to retrieve likely matches. CLIP connects image and text representations, so someone can search a catalog using a phrase such as red carry-on suitcase. The returned pictures are candidates, not proof of exact identity. A similar-looking suitcase may have a different size, material, price, or inventory status. Those facts should come from authoritative catalog records. Measure whether users find the correct items in the retrieved results, including hard examples with similar products and different backgrounds."
        },
        {
          "heading": "Input quality is part of the product",
          "body": "Glare, cropping, resolution, orientation, and compression can alter what a system sees. Preparation should be consistent between testing and daily use. A tiny detail lost when an image is resized cannot be recovered simply by asking a better question. Vision prompts should name the task, relevant evidence, and expected response format. For a moderation workflow, supply the actual policy and specify how ambiguous cases reach reviewers. Test false alarms and missed issues separately; their business consequences may differ. Track quality alongside response time and cost, and retest after provider or preprocessing changes. Keep the original evidence accessible to authorized reviewers, with retention and access rules appropriate to the workflow."
        }
      ],
      "concepts": [
        {
          "term": "OCR",
          "explanation": "Extraction of visible text from an image or scanned page."
        },
        {
          "term": "Embedding",
          "explanation": "A compact representation used to compare content by similarity."
        },
        {
          "term": "Detection",
          "explanation": "Identification and location of objects within an image."
        },
        {
          "term": "Segmentation",
          "explanation": "An outline or region showing which pixels belong to an object or class."
        }
      ],
      "visual": {
        "title": "One image, different questions",
        "caption": "The needed business action determines the vision task.",
        "steps": [
          {
            "label": "Read",
            "detail": "OCR extracts the writing on the package label."
          },
          {
            "label": "Locate",
            "detail": "Detection marks a suspected damaged corner."
          },
          {
            "label": "Outline",
            "detail": "Segmentation separates the damaged region."
          },
          {
            "label": "Find",
            "detail": "Visual search retrieves similar package images."
          }
        ]
      },
      "tools": [
        {
          "name": "CLIP",
          "role": "Connects image and text representations for similarity-based retrieval."
        },
        {
          "name": "Hugging Face Transformers",
          "role": "Provides access to vision models and processing pipelines."
        },
        {
          "name": "Gemini",
          "role": "A source example for interpreting an image using task instructions."
        }
      ],
      "example": {
        "title": "A catalog search with a reality check",
        "context": "Fictional retailer Northstar Travel has many visually similar suitcases.",
        "decision": "The pilot retrieves candidates from a customer photo, then checks catalog identifiers and attributes.",
        "result": "The intended result is a shortlist for confirmation, with stock and size taken from catalog records rather than inferred from appearance."
      },
      "activity": {
        "title": "Match the question to the task",
        "prompt": "A finance team wants the printed invoice total from a photograph. Which task fits?",
        "options": [
          {
            "label": "Visual search",
            "feedback": "This finds similar images; resemblance does not extract the exact printed total."
          },
          {
            "label": "Object detection only",
            "feedback": "This may locate an invoice or text area, but locating it does not read the amount."
          },
          {
            "label": "OCR with review of uncertain text",
            "feedback": "Best choice: OCR extracts the writing. Unclear amounts still need verification before financial use."
          }
        ],
        "best": 2
      },
      "takeaway": "Visual similarity supports discovery; authoritative records establish business facts.",
      "reflection": "Which image conditions would you include in a realistic test set for your team?",
      "sourceSections": [
        6,
        7,
        8,
        9,
        10,
        11
      ]
    },
    {
      "id": "m3",
      "title": "Understand and create visual content",
      "minutes": 12,
      "sources": [
        {
          "label": "How Vision Transformers Work",
          "path": "3 - Multimodal AI Applications/12 - Vision Transformer Models & Architectures/How Vision Transformers Work.md"
        },
        {
          "label": "Demo: DINOv2 Image Embeddings",
          "path": "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: DINOv2 Image Embeddings.md"
        },
        {
          "label": "Demo: Object Detection with RT-DETR + Segmentation with SAM2.1",
          "path": "3 - Multimodal AI Applications/13 - Using Vision Transformers/Demo: Object Detection with RT-DETR + Segmentation with SAM2.1.md"
        },
        {
          "label": "Vision-Language Models Overview",
          "path": "3 - Multimodal AI Applications/14 - Vision-Language Models/Vision-Language Models Overview.md"
        },
        {
          "label": "Demo: Zero-Shot Image Classification with CLIP & Florence-2 Tasks",
          "path": "3 - Multimodal AI Applications/15 - Multimodal Vision Applications with CLIP/Demo: Zero-Shot Image Classification with CLIP & Florence-2 Tasks.md"
        },
        {
          "label": "Diffusion Models",
          "path": "3 - Multimodal AI Applications/16 - Diffusion Models & Image Generation/Diffusion Models.md"
        }
      ],
      "quiz": [
        {
          "question": "A generated product image looks convincing. What does that establish?",
          "options": [
            "The item can be manufactured at the shown cost.",
            "The visual concept communicates an idea.",
            "Every depicted component exists."
          ],
          "answer": 1,
          "explanation": "A plausible picture can support concept discussion without validating engineering or commercial claims."
        },
        {
          "question": "A zero-shot model correctly labels ten sample images. What is the next management step?",
          "options": [
            "Launch without further review.",
            "Assume it understands every domain.",
            "Test a representative set, including ambiguous and poor-quality inputs."
          ],
          "answer": 2,
          "explanation": "A small clean sample does not establish performance across operating conditions."
        }
      ],
      "outcome": "Distinguish visual understanding from image generation and set an appropriate approval checklist.",
      "sections": [
        {
          "heading": "How an image becomes something a model can use",
          "body": "A vision transformer divides an image into patches, represents them as information, and learns relationships across the picture. Position information helps preserve where each patch came from. This allows local details and wider context to contribute to a result. Different models serve different tasks: DINO models provide image representations, detection models locate objects, and segmentation models outline them. The practical question is whether those outputs support your workflow. A tool that performs well on general photographs may struggle with unusual factory equipment or specialized documents. Ask for evidence from your domain, including poor lighting, unfamiliar objects, and ambiguous examples."
        },
        {
          "heading": "Connecting pictures and words",
          "body": "Vision-language models relate visual information to language, enabling captions, visual questions, search, and classification. Zero-shot classification chooses among supplied descriptions without task-specific training on those labels. It does not mean zero errors or universal understanding. Wording the labels differently can change a result, and unfamiliar categories may be confused. A generated caption may mix visible facts with plausible assumptions. For example, a photograph can show a brown chair without proving its material, load rating, or warranty. Evaluate those distinctions explicitly. Accessibility descriptions should communicate relevant visible information clearly, with human review when omissions could prevent someone from understanding the content."
        },
        {
          "heading": "Generation creates a proposal",
          "body": "Diffusion models learn to reverse a process that adds noise to examples. At generation time, they can turn noise into a new image guided by instructions. This is useful for exploring concepts, illustrations, and visual directions; it does not validate a product design or document a real event. Review the output against the brief: factual details, brand accuracy, embedded text, accessibility, and appropriate use of reference material. Generated images can look convincing while inventing features. Keep concept work clearly identified and check usage rights and approvals through the relevant teams. Use an approved asset only after a person has checked the details that matter to the business."
        }
      ],
      "concepts": [
        {
          "term": "Vision transformer",
          "explanation": "A model that uses image patches and their relationships to process visual content."
        },
        {
          "term": "Zero-shot classification",
          "explanation": "Choosing labels without training specifically on those labels; accuracy still requires testing."
        },
        {
          "term": "Diffusion",
          "explanation": "A generation approach that learns to reverse noise and create new content."
        }
      ],
      "visual": {
        "title": "How a picture becomes a description",
        "caption": "This is an image-understanding workflow. Generating a new image is a separate task.",
        "steps": [
          {
            "label": "Image patches",
            "detail": "Break a picture into parts while preserving their positions."
          },
          {
            "label": "Related features",
            "detail": "Relate visual features to the question and candidate descriptions."
          },
          {
            "label": "Proposed description",
            "detail": "Produce a caption or answer about the supplied picture."
          },
          {
            "label": "Verify the description",
            "detail": "Compare claims with the image and confirm any product specifications in authoritative records."
          }
        ]
      },
      "tools": [
        {
          "name": "DINOv2",
          "role": "A source example for producing image representations."
        },
        {
          "name": "RT-DETR and SAM",
          "role": "Examples of object detection and segmentation tools."
        },
        {
          "name": "Florence-2 and CLIP",
          "role": "Source examples connecting visual content with language tasks."
        },
        {
          "name": "Stable Diffusion",
          "role": "An example of diffusion-based image generation."
        }
      ],
      "example": {
        "title": "A chair concept is not a specification",
        "context": "Fictional furniture company Cedar Studio creates images of an unreleased chair.",
        "decision": "The manager uses the images to compare visual directions and checks material and load claims against the actual design records.",
        "result": "The concept supports discussion, while unverified construction details stay out of product claims."
      },
      "activity": {
        "title": "Separate appearance from evidence",
        "prompt": "A generated caption says: This brown oak chair supports 150 kg. Only a photograph is available. Which review is appropriate?",
        "options": [
          {
            "label": "Approve all details because the caption is fluent",
            "feedback": "Fluent writing does not establish a material or a tested load rating."
          },
          {
            "label": "Verify oak and load rating against product records",
            "feedback": "Best choice: appearance can suggest color and shape, while material and load capacity require other evidence."
          },
          {
            "label": "Remove the photograph and keep the claims",
            "feedback": "Removing the visible evidence makes the unsupported claims no more reliable."
          }
        ],
        "best": 1
      },
      "takeaway": "A convincing image can communicate a concept without proving a fact.",
      "reflection": "Which details must a reviewer confirm before your team uses a generated asset?",
      "sourceSections": [
        12,
        13,
        14,
        15,
        16
      ]
    },
    {
      "id": "m4",
      "title": "Make sound searchable",
      "minutes": 12,
      "sources": [
        {
          "label": "Enterprise Applications of Audio Processing",
          "path": "3 - Multimodal AI Applications/17 - Introduction to Enterprise Audio Processing/Enterprise Applications of Audio Processing.md"
        },
        {
          "label": "How Audio is Represented Digitally",
          "path": "3 - Multimodal AI Applications/18 - Audio Data Representation/How Audio is Represented Digitally.md"
        },
        {
          "label": "Demo: Audio Processing with librosa",
          "path": "3 - Multimodal AI Applications/19 - Audio Processing with librosa/Demo: Audio Processing with librosa.md"
        },
        {
          "label": "Understanding Audio Features and Embeddings",
          "path": "3 - Multimodal AI Applications/20 - Sound Retrival and Classification/Understanding Audio Features and Embeddings.md"
        },
        {
          "label": "Demo: Sound-to-Sound and Text-to-Sound Similarity and Classification",
          "path": "3 - Multimodal AI Applications/21 - Sound Retrieval and Classification with CLAP/Demo: Sound-to-Sound and Text-to-Sound Similarity and Classification.md"
        },
        {
          "label": "Whisper",
          "path": "3 - Multimodal AI Applications/22 - Speech Processing/Whisper.md"
        },
        {
          "label": "Demo: Speech Transcription with Whisper",
          "path": "3 - Multimodal AI Applications/23 - Implementing Speech Processing with Whisper & Gemini/Demo: Speech Transcription with Whisper.md"
        }
      ],
      "quiz": [
        {
          "question": "A manager wants to find recordings of a motor rattling, with no speech. Which capability fits best?",
          "options": [
            "Sound matching or classification.",
            "Translation of spoken words.",
            "Summarizing meeting notes."
          ],
          "answer": 0,
          "explanation": "The business signal is a non-speech sound, so transcription alone will miss it."
        },
        {
          "question": "A transcript changes “do not cancel” to “cancel.” What is the useful evaluation response?",
          "options": [
            "Ignore it because most words are correct.",
            "Track meaning-changing errors and require confirmation before account actions.",
            "Increase file storage without testing again."
          ],
          "answer": 1,
          "explanation": "Business harm depends on the meaning of errors, not only a global word-accuracy score."
        }
      ],
      "outcome": "Choose speech or sound tools and evaluate the mistakes that matter to the business.",
      "sections": [
        {
          "heading": "Speech is only one kind of sound",
          "body": "Audio can be transcribed into words, classified by sound type, or matched to other recordings. A support team searching for customer complaints needs speech recognition and text search. A facilities team searching for a rattling motor needs sound classification or retrieval even when nobody speaks. Audio embeddings represent useful characteristics in a compact form. CLAP links sound and text so a phrase can retrieve candidate recordings. Similarity is a clue rather than a definitive diagnosis. The output should support a named action, such as finding a clip for inspection, rather than claiming certainty about the cause of a machine noise."
        },
        {
          "heading": "Capture quality shapes the result",
          "body": "Digital audio measures a sound signal over time. Sample rate describes how often it is measured, bit depth describes measurement precision, and channels keep separate streams. Compression changes storage requirements and can discard information. A larger file is not automatically more useful, especially if the original microphone captured noise or overlapping speakers. Consistent preparation helps the model receive suitable inputs; tools such as librosa support that work. Managers should ask the team to test recordings that resemble real operation, including relevant accents, equipment, rooms, and call quality. Increasing model sophistication may not solve poor capture conditions. Improving the recording process can be the more useful intervention."
        },
        {
          "heading": "Evaluate meaning, not just neat transcripts",
          "body": "Whisper is a speech-recognition model used in the source, alongside Gemini transcription examples. Transcription turns speech into a proposed text record, and timestamps help people find the evidence. Translation adds another interpretation step. A transcript can omit a product name or change do not cancel into cancel. A high overall word score can hide an expensive error. Evaluate important entities, instructions, and meaning-changing omissions separately, and require confirmation before consequential actions. Use approved recordings, obtain the permissions required by the organization, and provide text alternatives for users who cannot hear the audio. Captions and transcripts should be reviewed for accessibility and accuracy rather than treated as automatically complete."
        }
      ],
      "concepts": [
        {
          "term": "Transcription",
          "explanation": "A proposed text record of spoken words."
        },
        {
          "term": "Sample rate",
          "explanation": "How often a sound signal is measured digitally."
        },
        {
          "term": "Audio embedding",
          "explanation": "A compact representation used to compare or retrieve sounds."
        }
      ],
      "visual": {
        "title": "From recording to useful evidence",
        "caption": "Preserve the relevant signal before selecting the analysis task.",
        "steps": [
          {
            "label": "Capture",
            "detail": "Collect approved recordings with suitable audio quality."
          },
          {
            "label": "Prepare",
            "detail": "Check noise, channels, format, and consistency."
          },
          {
            "label": "Choose the task",
            "detail": "Transcribe speech or retrieve and classify non-speech sounds."
          },
          {
            "label": "Verify meaning",
            "detail": "Review critical words and return to the timestamped evidence."
          }
        ]
      },
      "tools": [
        {
          "name": "librosa",
          "role": "A tool for preparing and analyzing audio signals."
        },
        {
          "name": "CLAP",
          "role": "Connects text and sound representations for retrieval and classification."
        },
        {
          "name": "Whisper",
          "role": "A speech-recognition model used for transcription in the source."
        },
        {
          "name": "Gemini",
          "role": "A source example for instructed audio transcription workflows."
        }
      ],
      "example": {
        "title": "Two archives, two different needs",
        "context": "Fictional company Harbor Services stores customer calls and maintenance recordings.",
        "decision": "The service team searches transcripts; the maintenance team searches for similar mechanical sounds.",
        "result": "Each workflow retrieves evidence for a person to review instead of using one transcription tool for every audio task."
      },
      "activity": {
        "title": "Build a useful test set",
        "prompt": "Which recordings best test a contact-center transcription pilot?",
        "options": [
          {
            "label": "Only clear studio narration",
            "feedback": "Clean narration excludes the noise, accents, and interruptions likely to affect real calls."
          },
          {
            "label": "Only five-second greetings",
            "feedback": "Short greetings do not test product terms, overlapping speech, or meaning-changing instructions."
          },
          {
            "label": "Approved calls representing real accents, noise, and important terms",
            "feedback": "Best choice: representative recordings expose operating failures. Review critical meanings separately from overall word accuracy."
          }
        ],
        "best": 2
      },
      "takeaway": "Measure the errors that change a decision, not only the percentage of correct words.",
      "reflection": "Which misheard word or instruction would create the most harm in your workflow?",
      "sourceSections": [
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    {
      "id": "m5",
      "title": "Govern voice intelligence",
      "minutes": 12,
      "sources": [
        {
          "label": "Audio Intelligence",
          "path": "3 - Multimodal AI Applications/24 - Audio Intelligence/Audio Intelligence.md"
        },
        {
          "label": "Demo: Audio Sentiment Analysis with Pydantic AI and Gemini",
          "path": "3 - Multimodal AI Applications/25 - Audio Sentiment Analysis with Gemini/Demo: Audio Sentiment Analysis with Pydantic AI and Gemini.md"
        },
        {
          "label": "Voice Content Moderation",
          "path": "3 - Multimodal AI Applications/26 - Audio Classification and Moderation/Voice Content Moderation.md"
        },
        {
          "label": "Exercise: Personal Information Detection",
          "path": "3 - Multimodal AI Applications/27 - Building a Basic Voice Moderation System with Gemini/Exercise: Personal Information Detection.md"
        }
      ],
      "quiz": [
        {
          "question": "A model labels an agent's voice “angry.” What should the manager do?",
          "options": [
            "Automatically lower the agent's performance rating.",
            "Treat it as uncertain context and review the actual interaction before any consequential judgment.",
            "Publish the label to the whole company."
          ],
          "answer": 1,
          "explanation": "Tone inference is fallible and context-dependent; it does not establish intent or performance."
        },
        {
          "question": "A call moderation tool flags a possible customer identifier. Which workflow is best?",
          "options": [
            "Store the entire unredacted call in every dashboard.",
            "Assume the flag is certainly correct.",
            "Restrict access, review the relevant excerpt, and follow the organization's redaction and retention policy."
          ],
          "answer": 2,
          "explanation": "The workflow must manage the data and the model's uncertainty together."
        }
      ],
      "outcome": "Design voice review around uncertain signals, appropriate data use, and accountable people.",
      "sections": [
        {
          "heading": "Interpretation adds uncertainty",
          "body": "Voice intelligence goes beyond transcription to propose topics, next actions, commands, or sentiment labels. These outputs can help organize a review queue, but their reliability depends on context. Tone varies across languages, cultures, individuals, and recording conditions. A model label such as angry is not a reliable statement of a person's feelings or intent. Do not use that label alone to judge an employee or make a consequential decision. Review the actual interaction and the task outcome. Ask what additional evidence would change the conclusion, and distinguish observable facts, such as an explicit request, from inferred emotion or motivation."
        },
        {
          "heading": "Moderation is a workflow",
          "body": "An audio moderation system may flag likely personal information or a possible policy issue. Both missed detections and unnecessary blocks affect the business: a missed account number may expose information, while an unnecessary block may interrupt a useful conversation. Define the policy, the relevant evidence, and the review action before choosing a threshold. A consistent report can state the issue, an authorized excerpt or timestamp, the reason for the flag, and the reviewer's decision. Consistency helps routing but does not establish correctness. Start with a representative set and compare model flags with reviewed examples, including noisy recordings, ambiguous wording, and different speaker contexts."
        },
        {
          "heading": "Protect the recording and the people",
          "body": "A voice recording can contain identifying and sensitive information. Work with the organization's responsible teams to establish notice, permission, allowed purposes, access, retention, and deletion practices for the actual setting. Keep diagnostic access limited rather than copying unredacted recordings into every dashboard. Real-time moderation also has a different response-time budget from after-call review; a delay that is acceptable overnight can disrupt a live conversation. Offer a usable non-audio path and communicate when automated analysis is involved. Use a human escalation route for contested or consequential decisions, and feed corrected errors back into evaluation. The manager owns the process and its impact, not merely the model score."
        }
      ],
      "concepts": [
        {
          "term": "Sentiment signal",
          "explanation": "An uncertain model interpretation of tone or language, not proof of emotion."
        },
        {
          "term": "False positive",
          "explanation": "A flag raised when the reviewed issue is not actually present."
        },
        {
          "term": "False negative",
          "explanation": "An issue that the system fails to flag."
        },
        {
          "term": "Retention",
          "explanation": "The policy governing how long information is kept and how it is removed."
        }
      ],
      "visual": {
        "title": "A voice flag needs an owner",
        "caption": "Restrict the evidence, review the issue, and learn from corrections.",
        "steps": [
          {
            "label": "Approved recording",
            "detail": "Use audio for a defined and permitted purpose."
          },
          {
            "label": "Possible issue",
            "detail": "Identify a relevant segment and explain the flag."
          },
          {
            "label": "Restricted review",
            "detail": "An authorized person checks evidence and context."
          },
          {
            "label": "Action and feedback",
            "detail": "Apply the policy, record the decision, and improve evaluations."
          }
        ]
      },
      "tools": [
        {
          "name": "Gemini",
          "role": "A source example for combined audio analysis and issue detection."
        },
        {
          "name": "Pydantic AI",
          "role": "Helps developers request consistent fields and rationales for review."
        },
        {
          "name": "Speech services",
          "role": "A tool category for transcription or voice processing; suitability depends on the actual workflow."
        }
      ],
      "example": {
        "title": "A customer identifier in a call",
        "context": "Fictional support team Willow Desk receives a recording that may contain an account number.",
        "decision": "The manager routes only the relevant segment to authorized review and follows the organization's redaction policy.",
        "result": "The intended outcome is a reviewed issue and controlled evidence, rather than unrestricted distribution of the recording."
      },
      "activity": {
        "title": "Choose the moderation policy",
        "prompt": "A pilot flags personal information in support calls. Which operating rule is strongest?",
        "options": [
          {
            "label": "An authorized reviewer checks limited excerpts under a retention policy",
            "feedback": "Best choice: this combines an accountable decision with appropriate handling of the underlying information."
          },
          {
            "label": "Keep every unredacted recording forever for convenience",
            "feedback": "Unlimited retention and broad access add exposure without showing a necessary purpose."
          },
          {
            "label": "Use sentiment labels to score employees automatically",
            "feedback": "Emotion inference is uncertain and should not become a standalone basis for consequential judgments."
          }
        ],
        "best": 0
      },
      "takeaway": "Treat voice analysis as a review signal, and govern the underlying recordings.",
      "reflection": "Who could challenge an incorrect flag, and who would resolve that challenge?",
      "sourceSections": [
        24,
        25,
        26,
        27
      ]
    },
    {
      "id": "m6",
      "title": "Find the important moments in video",
      "minutes": 12,
      "sources": [
        {
          "label": "How AI \"Watches\" Videos",
          "path": "3 - Multimodal AI Applications/28 - Introduction to Enterprise Video Processing/How AI \"Watches\" Videos.md"
        },
        {
          "label": "AI Models for Video Understanding",
          "path": "3 - Multimodal AI Applications/29 - AI Models for Video Undestanding/AI Models for Video Understanding.md"
        },
        {
          "label": "Exercise: Luggage Counting on a Conveyor Belt",
          "path": "3 - Multimodal AI Applications/30 - Implementing Object Recognition & Tracking/Exercise: Luggage Counting on a Conveyor Belt.md"
        },
        {
          "label": "Video Search Fundamentals",
          "path": "3 - Multimodal AI Applications/31 - Video Understanding & Search/Video Search Fundamentals.md"
        },
        {
          "label": "Demo: Video Search with CLIP4CLIP",
          "path": "3 - Multimodal AI Applications/32 - Video Understanding & Search with Gemini & Clip4Clip/Demo: Video Search with CLIP4CLIP.md"
        },
        {
          "label": "Video Moderation",
          "path": "3 - Multimodal AI Applications/33 - Video Classification & Moderation/Video Moderation.md"
        },
        {
          "label": "Demo: Safety Equipment Video Moderation with Pydantic AI",
          "path": "3 - Multimodal AI Applications/34 - Video Classification & Moderation with Gemini/Demo: Safety Equipment Video Moderation with Pydantic AI.md"
        }
      ],
      "quiz": [
        {
          "question": "A system counts the same suitcase in twenty frames. What is missing?",
          "options": [
            "A longer description of the suitcase.",
            "More copies of each frame.",
            "Tracking and a rule for counting a crossing once."
          ],
          "answer": 2,
          "explanation": "Detection alone does not distinguish repeated sightings from unique items."
        },
        {
          "question": "No policy issue appears in one frame sampled every ten seconds. What can the manager conclude?",
          "options": [
            "No issue appeared in the sampled frames; brief events could have been missed.",
            "The entire recording is safe.",
            "Audio review is unnecessary."
          ],
          "answer": 0,
          "explanation": "The evidence is limited by the sampling strategy and modalities examined."
        }
      ],
      "outcome": "Understand video sampling and tracking, and evaluate what a system could have missed.",
      "sections": [
        {
          "heading": "Video adds time to the problem",
          "body": "A video contains a sequence of frames and often an audio track. A model can analyze selected frames, sequences over time, or several signals together. Sampling reduces the amount of data processed, but changes what can be observed. A brief event between sampled frames may be missed completely. A description of one frame is therefore not a reliable summary of everything that happened. Define the event the business cares about and how long it can last. Then ask whether the sampling and evaluation strategy can detect it under real operating conditions, including occlusion, poor lighting, movement, and relevant audio cues."
        },
        {
          "heading": "Find objects, follow them, count correctly",
          "body": "Detection identifies an object in a frame; tracking attempts to follow the same object across frames. YOLO illustrates detection in the source, while tracking methods preserve identity over time. Counting every detection can count the same suitcase repeatedly as it moves down a conveyor. A useful counting workflow needs an identity rule and a defined event, such as crossing a line once. Similar-looking items, objects leaving and returning to view, and camera changes can confuse that rule. Review those edge cases with operations staff. A confidence score is a model signal, not automatically a calibrated probability that the business result is correct."
        },
        {
          "heading": "Search and moderation need evidence",
          "body": "Video search can begin with titles, timestamps, transcripts, and manually supplied metadata. Visual and temporal embeddings add value when users need to find something shown rather than spoken. CLIP4Clip illustrates matching text and video in the source, while multimodal models can propose descriptions and policy flags. Keep a route from each result to the relevant moment so a person can verify it. For moderation, measure missed events and false alarms and define escalation for consequential cases. Evaluate combined audio and visual evidence where the policy requires it. Provide captions, text summaries, and accessible controls so the review process does not depend on hearing or seeing every signal unaided."
        }
      ],
      "concepts": [
        {
          "term": "Frame sampling",
          "explanation": "Selecting some video frames for analysis, which can miss events between samples."
        },
        {
          "term": "Tracking",
          "explanation": "Following an object over time rather than treating each detection as a new object."
        },
        {
          "term": "Temporal understanding",
          "explanation": "Interpreting sequence, motion, and timing across a recording."
        }
      ],
      "visual": {
        "title": "What happened between frames?",
        "caption": "A clear sampled image does not establish that an entire recording is clear.",
        "steps": [
          {
            "label": "Frame at 0 seconds",
            "detail": "A worker stands beside equipment."
          },
          {
            "label": "Brief event at 4 seconds",
            "detail": "A relevant action occurs between selected frames."
          },
          {
            "label": "Frame at 10 seconds",
            "detail": "The scene appears normal again."
          },
          {
            "label": "Review strategy",
            "detail": "Test brief incidents and choose coverage suited to the task."
          }
        ]
      },
      "tools": [
        {
          "name": "YOLO",
          "role": "An object-detection family represented in the source video examples."
        },
        {
          "name": "CoTracker and tracking systems",
          "role": "Tools for following visual points or objects over time."
        },
        {
          "name": "CLIP4Clip",
          "role": "A source example for matching text and video content."
        },
        {
          "name": "Gemini",
          "role": "A source example for video descriptions and policy-review workflows."
        }
      ],
      "example": {
        "title": "Count bags, not sightings",
        "context": "Fictional airport operator Summit Transit wants conveyor throughput data.",
        "decision": "The team tracks individual bags and counts one crossing of a defined line.",
        "result": "The intended measure reflects unique crossings; repeated appearances in neighboring frames do not inflate the count."
      },
      "activity": {
        "title": "Test a brief event",
        "prompt": "A safety event lasts one second. The pilot checks a frame every ten seconds. What should the manager request?",
        "options": [
          {
            "label": "Assume every event will be found",
            "feedback": "Sparse sampling can miss an entire brief event, so this claim is unsupported."
          },
          {
            "label": "Evaluate short incidents and adjust coverage to the risk",
            "feedback": "Best choice: test whether the observation strategy can capture the event, then choose an appropriate review and sampling approach."
          },
          {
            "label": "Use only the first frame of each recording",
            "feedback": "This further reduces coverage and cannot establish what happened later."
          }
        ],
        "best": 1
      },
      "takeaway": "Ask what the system observed, what it missed, and how a reviewer can verify a result.",
      "reflection": "What is the shortest important event in your workflow, and would your test detect it?",
      "sourceSections": [
        28,
        29,
        30,
        31,
        32,
        33,
        34
      ]
    },
    {
      "id": "m7",
      "title": "Move from creative brief to pilot",
      "minutes": 12,
      "sources": [
        {
          "label": "Video Generation",
          "path": "3 - Multimodal AI Applications/35 - Video Generation/Video Generation.md"
        },
        {
          "label": "Video Generation Tools",
          "path": "3 - Multimodal AI Applications/35 - Video Generation/Video Generation Tools.md"
        },
        {
          "label": "Demo: Generate a Marketing Video with Veo 3",
          "path": "3 - Multimodal AI Applications/36 - Video Generation with Veo 3/Demo: Generate a Marketing Video with Veo 3.md"
        },
        {
          "label": "Multimodal Architecture Approaches",
          "path": "3 - Multimodal AI Applications/37 - Multimodal AI Deployment/Multimodal Architecture Approaches.md"
        },
        {
          "label": "Implementation Tools and Serving Strategies",
          "path": "3 - Multimodal AI Applications/38 - Implementation Tools and Serving Strategies/Implementation Tools and Serving Strategies.md"
        },
        {
          "label": "Demo: Building a Multimodal Gradio Chatbot with Pydantic AI",
          "path": "3 - Multimodal AI Applications/39 - Using Gradio and Pydantic AI/Demo: Building a Multimodal Gradio Chatbot with Pydantic AI.md"
        }
      ],
      "quiz": [
        {
          "question": "A generated marketing clip contains a distorted product label. What should happen?",
          "options": [
            "Publish because the overall mood is good.",
            "Revise and review the asset against the approved product reference.",
            "Claim image-to-video guarantees exact branding."
          ],
          "answer": 1,
          "explanation": "A reference improves direction but does not replace output review."
        },
        {
          "question": "A team combines three specialist AI services. What operating cost should be planned?",
          "options": [
            "Coordination, separate failure handling, and end-to-end monitoring.",
            "None, because each service works alone.",
            "Only the subscription price of the cheapest service."
          ],
          "answer": 0,
          "explanation": "The whole workflow must align outputs, latency, access, and failures across services."
        }
      ],
      "outcome": "Create a reviewable video brief and select a proportionate architecture for a pilot.",
      "sections": [
        {
          "heading": "A creative brief is a testable contract",
          "body": "Video generation creates new scenes from instructions or a starting image. Text-to-video helps explore a direction; image-to-video anchors the process to a visual reference but does not guarantee exact product fidelity. A useful brief states the audience, business objective, scene, desired style, duration target, constraints, and approval criteria. Decide what the viewer should understand or do. Treat the first output as a draft and budget for iteration and review. Brand details, packaging, motion, spoken claims, and on-screen text can be wrong even when the overall scene looks polished. Generated scenes should not be presented as evidence that an event actually occurred."
        },
        {
          "heading": "Different tools, different operating commitments",
          "body": "The source introduces historical video-generation examples such as Veo and Runway and avatar-video examples such as Synthesia and HeyGen. These names illustrate categories rather than a ranking or purchasing recommendation. Compare the actual tools on your brief, approved reference material, output quality, accessible captions, usage permissions, and total review effort. Voice or likeness use requires appropriate authorization. A managed multimodal service can reduce integration effort. Combining specialist services can improve a particular task but creates coordination and failure-handling work. Custom hosting offers more control while adding infrastructure, staffing, and model-operation responsibilities. Choose based on tested requirements, not the longest feature list."
        },
        {
          "heading": "Make the pilot prove something",
          "body": "Gradio illustrates how teams can build a quick interface, and Pydantic AI illustrates coordination behind a multimodal workflow. A convenient prototype is useful for gathering feedback, but does not establish readiness for a broad rollout. Name the assumption the pilot should test, such as whether draft video reduces preparation time after review. Define the users, approved inputs, quality threshold, budget limit, and escalation route. Production planning also needs validation of uploads, access controls, rate limits, recoverable errors, and monitoring across services. Ask for the smallest operating setup that can test the business case credibly, then expand only when evidence supports the additional complexity."
        }
      ],
      "concepts": [
        {
          "term": "Text-to-video",
          "explanation": "Generating a clip from written instructions."
        },
        {
          "term": "Image-to-video",
          "explanation": "Generating motion from a starting image, with output details still requiring review."
        },
        {
          "term": "Orchestration",
          "explanation": "Coordinating tools and services into one reliable workflow."
        }
      ],
      "visual": {
        "title": "From brief to approved draft",
        "caption": "Generation is one step in a creative workflow with accountable review.",
        "steps": [
          {
            "label": "Brief",
            "detail": "Specify audience, objective, reference assets, and constraints."
          },
          {
            "label": "Generate",
            "detail": "Produce a draft and record the iteration effort."
          },
          {
            "label": "Review",
            "detail": "Check facts, brand details, rights, captions, and quality."
          },
          {
            "label": "Pilot decision",
            "detail": "Compare useful outputs and total effort with the baseline."
          }
        ]
      },
      "tools": [
        {
          "name": "Video-generation tools",
          "role": "Veo in the source exercises and Runway are historical examples; verify current availability before selecting a tool."
        },
        {
          "name": "Synthesia and HeyGen",
          "role": "Source examples of avatar-based video production tools."
        },
        {
          "name": "Gradio",
          "role": "A developer tool for creating a quick pilot interface."
        },
        {
          "name": "Pydantic AI",
          "role": "A framework for coordinating model calls and structured responses."
        }
      ],
      "example": {
        "title": "A five-second product concept",
        "context": "Fictional beverage team Brightwater wants an internal campaign concept.",
        "decision": "The team uses an approved product reference and reviews generated packaging, motion, and implied product claims.",
        "result": "The intended result is an internal creative draft; publishing requires the normal brand and factual approval process."
      },
      "activity": {
        "title": "Choose a sensible first build",
        "prompt": "A small team has not yet proved that generated training videos save time. Which first step fits?",
        "options": [
          {
            "label": "Build a custom platform for every department",
            "feedback": "This commits operating effort before the core business assumption has been tested."
          },
          {
            "label": "Roll out the first polished demo immediately",
            "feedback": "A demonstration does not establish quality, accessibility, or repeatable value for actual users."
          },
          {
            "label": "Run a managed pilot with review, budget, and success criteria",
            "feedback": "Best choice: test the value and operating requirements before committing to a more complex platform."
          }
        ],
        "best": 2
      },
      "takeaway": "Evaluate the complete creative workflow, including iteration and approval effort.",
      "reflection": "Which result would make you stop the pilot rather than expand it?",
      "sourceSections": [
        35,
        36,
        37,
        38,
        39
      ]
    },
    {
      "id": "m8",
      "title": "Launch a multimodal pilot responsibly",
      "minutes": 15,
      "sources": [
        {
          "label": "Multimodal Performance Monitoring and Logging",
          "path": "3 - Multimodal AI Applications/40 - Multimodal AI Performance Monitoring and Logging/Multimodal Performance Monitoring and Logging.md"
        },
        {
          "label": "Demo: Logging and Monitoring a Multimodal Application",
          "path": "3 - Multimodal AI Applications/41 - Logging and Performance Monitoring with Gradio and Arize Phoenix/Demo: Logging and Monitoring a Multimodal Application.md"
        },
        {
          "label": "Testing Multimodal Applications",
          "path": "3 - Multimodal AI Applications/42 - Evaluating Multimodal Applications/Testing Multimodal Applications.md"
        },
        {
          "label": "User Feedback Systems for Multimodal Applications",
          "path": "3 - Multimodal AI Applications/42 - Evaluating Multimodal Applications/User Feedback Systems for Multimodal Applications.md"
        },
        {
          "label": "Exercise: Building a Real Estate Description System with Evaluations",
          "path": "3 - Multimodal AI Applications/43 - Testing Multimodal Apps with Pydantic Evals/Exercise: Building a Real Estate Description System with Evaluations.md"
        },
        {
          "label": "Scaling Multimodal AI Architecture",
          "path": "3 - Multimodal AI Applications/44 - Scaling Multimodal AI Architecture/Scaling Multimodal AI Architecture.md"
        },
        {
          "label": "Project Overview",
          "path": "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Project Overview.md"
        },
        {
          "label": "Rubric",
          "path": "3 - Multimodal AI Applications/45 - OmniTrainer Multimodal Customer Service Trainer/Rubric.md"
        }
      ],
      "quiz": [
        {
          "question": "The average response time is fast, but some trainees wait a minute. What should the team inspect?",
          "options": [
            "Only the average again.",
            "High-percentile latency and traces by modality.",
            "Only the interface color."
          ],
          "answer": 1,
          "explanation": "Tail latency and stage-level traces reveal slow experiences and bottlenecks hidden by averages."
        },
        {
          "question": "An automated judge approves every answer in the pilot. Is launch justified?",
          "options": [
            "Yes, automated judges are objective.",
            "Yes, if the demo looked polished.",
            "Only after representative checks, human review, and the agreed business and operational gates also pass."
          ],
          "answer": 2,
          "explanation": "A judge is one evaluation signal, not a substitute for the complete launch decision."
        }
      ],
      "outcome": "Define a launch decision using quality, business value, operating measures, and clear ownership.",
      "sections": [
        {
          "heading": "Measure the whole experience",
          "body": "A multimodal application is a chain of steps, and a slow or unreliable stage can spoil the complete experience. Track quality, cost, errors, and response time for each modality and for the final user task. Average latency can hide people who wait much longer; high-percentile latency reveals the slower end of the experience. Traces connect steps so the team can see where time or failures accumulate. Arize Phoenix illustrates this inspection in the source. Collect only the diagnostic information needed, with appropriate access and retention. Raw recordings and customer content should not become broadly accessible merely because they are useful for debugging."
        },
        {
          "heading": "Turn failures into repeatable checks",
          "body": "An evaluation set contains examples and criteria the system should meet. Combine repeatable checks with human review for nuanced or consequential judgments. A model acting as a judge can help assess output, but also has biases and errors. Pydantic Evals illustrates organized testing in the source. Test repeated runs because generated responses can vary, and include poor-quality inputs, inconsistent modalities, unexpected files, and provider failures. A property-description example should check whether visible facts are preserved and unsupported features are invented. Retest when models, instructions, policies, or input patterns change. Feed reviewed production failures back into the evaluation set so improvement addresses actual problems."
        },
        {
          "heading": "Launch only with an operating decision",
          "body": "The OmniTrainer source project is a customer-service practice system with a simulated customer and moderation across text, images, sound, and video. Adapt it into a management pilot: define the coaching goal, permitted data, participants, review owner, success measures, budget, and stop conditions. Do not confuse simulated practice with real customer communication. Scaling introduces quotas, queues, capacity, and distinct needs for batch versus live interactions. A unified service, multiple specialists, and custom hosting need different operating plans. Check that the team can handle slow requests, unavailable services, disputed flags, and cost spikes. A readiness checklist supports a decision; it is not a certification or guarantee of safety."
        }
      ],
      "concepts": [
        {
          "term": "Trace",
          "explanation": "A connected view of the steps taken to complete one request."
        },
        {
          "term": "Tail latency",
          "explanation": "The experience of slower requests, often described with high-percentile response times."
        },
        {
          "term": "Evaluation set",
          "explanation": "Representative examples with criteria for judging system behavior."
        },
        {
          "term": "Stop condition",
          "explanation": "An agreed result or incident that pauses a pilot or triggers rollback."
        }
      ],
      "visual": {
        "title": "A pilot has four launch gates",
        "caption": "Use evidence and clear ownership to decide whether to expand, revise, or stop.",
        "steps": [
          {
            "label": "Quality",
            "detail": "Representative checks and human review meet the agreed criteria."
          },
          {
            "label": "Business value",
            "detail": "The full workflow improves the chosen outcome."
          },
          {
            "label": "Operations",
            "detail": "Cost, response time, failures, and capacity are manageable."
          },
          {
            "label": "Accountability",
            "detail": "An owner can resolve issues, stop the pilot, and learn from feedback."
          }
        ]
      },
      "tools": [
        {
          "name": "Arize Phoenix",
          "role": "Helps teams inspect traces and understand workflow behavior."
        },
        {
          "name": "Pydantic Evals",
          "role": "Supports repeatable evaluation datasets and checks."
        },
        {
          "name": "Gradio",
          "role": "The prototype interface tool used in the source."
        },
        {
          "name": "OmniTrainer",
          "role": "A source project for simulated customer-service training with multimodal moderation."
        }
      ],
      "example": {
        "title": "A coaching pilot with launch gates",
        "context": "Fictional company Acme Practice Lab uses a simulated customer to train support staff.",
        "decision": "The manager measures coaching usefulness, false blocks, missed issues, cost, and response time with a named review owner.",
        "result": "The intended launch decision uses evidence from the full workflow; a polished conversation alone does not justify expansion."
      },
      "activity": {
        "title": "Make the launch decision",
        "prompt": "The automated judge approves every answer, but no human reviewed difficult cases. What should the manager do?",
        "options": [
          {
            "label": "Complete representative human review and the remaining launch gates",
            "feedback": "Best choice: the judge is one signal. Business value, operations, and difficult cases still need evidence."
          },
          {
            "label": "Launch because the judge gave a perfect score",
            "feedback": "The judge can make systematic mistakes; a perfect score does not establish the whole workflow is ready."
          },
          {
            "label": "Ignore quality and decide using interface appearance",
            "feedback": "A polished interface does not prove correct moderation, useful coaching, or manageable operating costs."
          }
        ],
        "best": 0
      },
      "takeaway": "A launch decision needs evidence, operating limits, and someone authorized to stop.",
      "reflection": "Who owns your pilot, what would count as success, and what would make them pause it?",
      "sourceSections": [
        40,
        41,
        42,
        43,
        44,
        45
      ]
    }
  ]
};
