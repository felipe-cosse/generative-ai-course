export default {
  "id": "rag",
  "number": 2,
  "title": "LLMs & retrieval-augmented generation",
  "shortTitle": "LLMs & RAG",
  "description": "Turn language models into useful, grounded business tools.",
  "image": "/images/rag.png",
  "sourceRoot": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)",
  "lessons": [
    {
      "id": "r1",
      "title": "What a business chatbot actually knows",
      "minutes": 12,
      "outcome": "Explain what a language model knows, what a chat application supplies, and where a support assistant needs boundaries.",
      "sections": [
        {
          "heading": "The model and the application are different",
          "body": "A language model generates responses using patterns learned during training and the information supplied with a request. That makes it useful for drafting, summarizing, classifying, and explaining. It does not make every fluent statement a verified fact. A chat application wraps the model in a product: it provides instructions, displays a conversation, and may connect approved documents or business tools. When evaluating a proposed assistant, ask which capabilities come from the model and which depend on the surrounding application. A convincing demonstration can conceal missing knowledge, weak access controls, or an unsupported business process. Evaluate the complete workflow that employees will actually use."
        },
        {
          "heading": "A conversation is a working context",
          "body": "A customer might describe a faulty headset and later ask, “Can I return it?” To answer usefully, the application must supply enough earlier context to connect “it” with that headset. A model only receives the context included in its current request, even if a user can still see a long conversation on screen. Context has a limit. Applications may summarize older exchanges, retain recent messages, or select relevant details. Each approach can omit something important. The management question is how the team preserves essential facts, corrects mistakes, and handles uncertainty when a conversation becomes long or changes direction."
        },
        {
          "heading": "Set knowledge and action boundaries",
          "body": "Company-specific knowledge does not appear automatically because an assistant sounds knowledgeable. Return deadlines, product availability, and internal procedures need approved sources and a process for keeping them current. Retrieval-augmented generation, or RAG, brings selected source material into the answer process; later lessons explain how. Access to information is also different from authority to act. Drafting a refund response is different from issuing a refund. Start a pilot with a defined audience, a limited set of tasks, a human escalation route, and explicit prohibited actions. Include tests where the answer is unavailable. An honest handoff is often more useful than a plausible invention."
        }
      ],
      "concepts": [
        {
          "term": "Language model",
          "explanation": "The underlying model that generates responses from learned patterns and supplied context."
        },
        {
          "term": "Chat application",
          "explanation": "The product that manages instructions, conversation history, permissions, and any connected tools."
        },
        {
          "term": "Context window",
          "explanation": "The limited amount of information a model can consider in a request; visible chat history may be larger."
        }
      ],
      "visual": {
        "title": "Where an answer gets its information",
        "caption": "Training knowledge, conversation context, and approved business sources play different roles. Access to a tool does not imply permission to act.",
        "steps": [
          {
            "label": "Learned patterns",
            "detail": "Broad capabilities developed during model training."
          },
          {
            "label": "Current context",
            "detail": "Instructions and relevant conversation supplied by the application."
          },
          {
            "label": "Approved sources",
            "detail": "Business knowledge retrieved or attached for this request."
          },
          {
            "label": "Reviewed answer",
            "detail": "A response checked against the evidence and the assistant’s authority."
          }
        ]
      },
      "tools": [
        {
          "name": "ChatGPT, Claude, and Gemini",
          "role": "Examples of chat products for working with language models; organization-approved settings and available features vary."
        },
        {
          "name": "LLM provider",
          "role": "Supplies the model service that a business application can call behind its own interface."
        }
      ],
      "example": {
        "title": "The return-policy assistant",
        "context": "Fictional retailer Northstar pilots an assistant that helps support staff draft headset-return replies. A customer mentions a defect and then asks about eligibility.",
        "decision": "The manager requires product context, an approved policy passage, and a human decision for refunds.",
        "result": "The pilot can test drafting quality and source use without treating a generated suggestion as authorization to move money."
      },
      "activity": {
        "title": "Choose the pilot boundary",
        "prompt": "Northstar has a reviewed return-policy library but has not built refund authorization checks. Which initial scope best matches its readiness?",
        "options": [
          {
            "label": "Draft policy-based replies for staff review",
            "feedback": "Best fit. This uses the available evidence while retaining human control over a financial action."
          },
          {
            "label": "Let the assistant issue refunds immediately",
            "feedback": "The policy library does not supply authorization checks, transaction validation, or recovery procedures."
          },
          {
            "label": "Let it invent a reasonable deadline when a policy is missing",
            "feedback": "A plausible deadline can mislead customers. Missing evidence should trigger clarification or escalation."
          }
        ],
        "best": 0
      },
      "quiz": [
        {
          "question": "A chatbot confidently gives a return deadline absent from the supplied policy. What should the manager conclude?",
          "options": [
            "Confidence proves the deadline is correct.",
            "The answer needs verification against an approved source.",
            "A longer answer will fix the missing evidence."
          ],
          "answer": 1,
          "explanation": "Fluency is not evidence. The missing policy must be found, clarified, or escalated."
        },
        {
          "question": "After a long conversation the assistant forgets the product. What is the most relevant question for the team?",
          "options": [
            "How is relevant conversation context retained?",
            "Can we make the answer more creative?",
            "Can we hide older messages from the user?"
          ],
          "answer": 0,
          "explanation": "Context selection and summarization determine what the model receives. Visible history alone does not guarantee access to earlier details."
        }
      ],
      "takeaway": "A useful assistant needs defined knowledge, a clear task, and explicit limits on its authority.",
      "reflection": "Which task in your team could benefit from a draft or recommendation, while keeping the final action with a person?",
      "sourceSections": [
        1,
        2,
        3
      ],
      "sources": [
        {
          "label": "Course Outcomes",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/1 - Introduction to LLMs and Retrival Augmented Generation (RAG)/Course Outcomes.md"
        },
        {
          "label": "The LLM Landscape",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/2 - The Large Language Model Landscape/The LLM Landscape.md"
        },
        {
          "label": "The RAG Architecture: Key to Trust",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/2 - The Large Language Model Landscape/The RAG Architecture: Key to Trust.md"
        },
        {
          "label": "Managing Conversations with an LLM",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/3 - Implementing a Chatbot with an LLM/Managing Conversations with an LLM.md"
        },
        {
          "label": "Chatbot Issues and Testing",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/3 - Implementing a Chatbot with an LLM/Chatbot Issues and Testing.md"
        }
      ]
    },
    {
      "id": "r2",
      "title": "Brief the model like a colleague",
      "minutes": 12,
      "outcome": "Create a clear business prompt and distinguish output variety from factual reliability.",
      "sections": [
        {
          "heading": "Give a complete working brief",
          "body": "A prompt is the instruction and context supplied to a model. For a business task, a useful brief explains the task, audience, relevant facts, constraints, and desired output. “Summarize this meeting” leaves many choices open. “For the operations director, summarize decisions, owners, and deadlines from this meeting record; mark missing owners as unassigned” gives a clearer target. Add an example when the expected format or judgment is difficult to describe. This is often called few-shot prompting. The purpose is to communicate the work clearly, not to discover a magic phrase. A role description helps establish perspective but does not give the model real expertise or authority."
        },
        {
          "heading": "Choose variation and length deliberately",
          "body": "Some tools expose controls for output variety, response length, or the range of candidate words considered. Temperature is one common variety control when supported by a model. Higher variation can help with a set of campaign ideas; lower variation can make repeated classifications more consistent. Neither setting checks facts or guarantees identical answers. Length controls also involve a tradeoff: a very short limit may cut off required qualifications, while an unnecessarily long answer consumes time and attention. Ask the team to demonstrate behavior on your actual task. Do not assume that controls or numerical ranges transfer unchanged between tools and models."
        },
        {
          "heading": "Make complex work reviewable",
          "body": "For a complicated request, separate the work into stages that a person can inspect: identify the supplied facts, apply the agreed criteria, and present a recommendation with supporting evidence. Request a concise explanation, an assumptions list, or a checklist of evidence rather than treating a lengthy reasoning narrative as proof. Several model responses that agree can still share the same mistake. Verification requires reliable sources or another appropriate check. Include instructions for missing information, ambiguous cases, and escalation. Finally, inspect whether the output follows the brief. A well-written prompt improves the working conditions; it does not remove the need to assess the result."
        }
      ],
      "concepts": [
        {
          "term": "Prompt",
          "explanation": "The task instructions and context supplied to a model."
        },
        {
          "term": "Few-shot prompting",
          "explanation": "Showing a small number of examples of the desired input-to-output behavior."
        },
        {
          "term": "Temperature",
          "explanation": "A supported sampling control that influences output variation, not a truth or safety setting."
        }
      ],
      "visual": {
        "title": "The six-part business brief",
        "caption": "An explicit brief makes expectations reviewable. The model still needs reliable evidence and appropriate oversight.",
        "steps": [
          {
            "label": "Task + audience",
            "detail": "What work is needed, and who will use it?"
          },
          {
            "label": "Context + constraints",
            "detail": "Which facts, source boundaries, and rules apply?"
          },
          {
            "label": "Example + format",
            "detail": "What does a useful result look like?"
          },
          {
            "label": "Review",
            "detail": "Check accuracy, omissions, and the handling of uncertainty."
          }
        ]
      },
      "tools": [
        {
          "name": "Prompt template",
          "role": "A reusable plain-language brief with spaces for task-specific facts and requirements."
        },
        {
          "name": "Chat interface",
          "role": "A place to compare illustrative responses; use the tools and data handling approved for your organization."
        }
      ],
      "example": {
        "title": "A meeting summary with missing owners",
        "context": "In a fictional planning meeting, the team approves a launch-date review but does not assign its owner.",
        "decision": "The manager asks for decisions, owners, and deadlines from the record, with missing information explicitly marked.",
        "result": "A useful summary says “owner unassigned” and makes the follow-up visible instead of inventing a responsible colleague."
      },
      "activity": {
        "title": "Pick the stronger brief",
        "prompt": "You want an executive summary of a supplied meeting record. Which instruction makes the result easiest to verify?",
        "options": [
          {
            "label": "Make us sound decisive and fill any gaps",
            "feedback": "This encourages confident invention. Missing facts should remain visible."
          },
          {
            "label": "List decisions, named owners, and deadlines from the record; flag missing items",
            "feedback": "Best fit. It defines the output and the evidence boundary, while keeping uncertainty reviewable."
          },
          {
            "label": "Write a very long summary using your general business knowledge",
            "feedback": "Length and general knowledge do not establish what was actually decided in this meeting."
          }
        ],
        "best": 1
      },
      "quiz": [
        {
          "question": "A summary assigns owners who never appeared in the meeting record. Which prompt change best addresses the issue?",
          "options": [
            "Ask for a more confident tone.",
            "Ask for twenty additional action items.",
            "Require owners from the record and mark missing owners as unassigned."
          ],
          "answer": 2,
          "explanation": "Explicit evidence boundaries and a valid unknown state reduce pressure to invent; the output still needs review."
        },
        {
          "question": "A team lowers temperature for a policy assistant. What can it reasonably expect?",
          "options": [
            "Less variation, with accuracy still requiring checks.",
            "Guaranteed factual answers.",
            "Automatic access to the latest policy."
          ],
          "answer": 0,
          "explanation": "Sampling controls influence variation. They do not provide source access or factual guarantees."
        }
      ],
      "takeaway": "Clear instructions help; reliable evidence and review remain essential.",
      "reflection": "Take one recurring request from your team. What audience, evidence boundary, and missing-information rule would make the brief clearer?",
      "sourceSections": [
        4,
        5
      ],
      "sources": [
        {
          "label": "What Is a Prompt?",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/What Is a Prompt?.md"
        },
        {
          "label": "Prompt Templating",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Prompt Templating.md"
        },
        {
          "label": "Building Your Prompt Engineer Toolkit",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Building Your Prompt Engineer Toolkit.md"
        },
        {
          "label": "Advanced LLM Inference",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/4 - LLM Prompting & Inference/Advanced LLM Inference.md"
        },
        {
          "label": "Exercise: LLM Inference Parameters",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/5 - Applied Prompting and Inference/Exercise: LLM Inference Parameters.md"
        },
        {
          "label": "Solution: Prompt Chain of Thought",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/5 - Applied Prompting and Inference/Solution: Prompt Chain of Thought.md"
        }
      ]
    },
    {
      "id": "r3",
      "title": "Improve prompts with evidence",
      "minutes": 10,
      "outcome": "Compare prompt versions fairly and use a small review rubric to guide targeted improvements.",
      "sections": [
        {
          "heading": "Define success before rewriting",
          "body": "Prompt refinement is a small experiment: decide what better performance means, change the instructions, and compare the results. Begin with the work the team needs, not with whether an answer sounds impressive. An inbox-classification assistant might need to choose the right category, preserve the customer’s concern, avoid unsupported promises, and escalate ambiguous cases. Translate those requirements into a short scorecard. A prompt can become more polished while making classification worse. Defining criteria first keeps the review anchored to the business task and gives different reviewers a common basis for discussing errors and tradeoffs."
        },
        {
          "heading": "Change something you can evaluate",
          "body": "Review a prompt’s task, context, category definitions, examples, and output instructions. Identify a specific failure and make a targeted change. If “billing issue” absorbs delivery complaints, clarify the categories and add a contrasting example. Compare old and new versions on the same cases, using the same evaluation criteria. Keep a record of the prompt version and results so the team can explain what changed. Changing the model, the sample tickets, and the prompt at once makes diagnosis difficult. Repeat runs where variation matters, and assess the practical size of an improvement rather than declaring victory after one appealing answer."
        },
        {
          "heading": "Test beyond familiar examples",
          "body": "The examples used during refinement are practice material. Set aside additional cases that the team does not use to adjust the prompt, then check whether improvements hold there too. Include common work, difficult phrasing, incomplete information, conflicting requests, and cases outside the assistant’s scope. Use anonymized or approved data in the test process. A prompt that works on five familiar tickets may simply fit those tickets. Human reviewers should examine meaningful failures, especially when automated scoring disagrees with their judgment. Maintain the test set as the business changes, and rerun it after material prompt or model changes so previously solved problems do not quietly return."
        }
      ],
      "concepts": [
        {
          "term": "Evaluation rubric",
          "explanation": "Explicit criteria used to judge whether an output meets the business need."
        },
        {
          "term": "Prompt version",
          "explanation": "A saved set of instructions whose behavior can be compared with another version."
        },
        {
          "term": "Held-out cases",
          "explanation": "Examples reserved for evaluation rather than used to tune the prompt."
        }
      ],
      "visual": {
        "title": "A prompt improvement loop",
        "caption": "Keep the comparison fair and reserve unseen cases to check whether the improvement generalizes.",
        "steps": [
          {
            "label": "Define the rubric",
            "detail": "Choose accuracy, completeness, format, and escalation criteria."
          },
          {
            "label": "Review failures",
            "detail": "Identify a specific pattern in representative cases."
          },
          {
            "label": "Revise one element",
            "detail": "Clarify a category, add context, or improve an example."
          },
          {
            "label": "Compare + retest",
            "detail": "Use shared cases first, then check unseen cases."
          }
        ]
      },
      "tools": [
        {
          "name": "Prompt library",
          "role": "Stores reviewed instructions, their versions, and the tasks they are intended to support."
        },
        {
          "name": "Review scorecard",
          "role": "Records how candidate outputs perform against shared criteria without rewarding style over substance."
        }
      ],
      "example": {
        "title": "The overused billing category",
        "context": "A fictional support assistant labels late deliveries as billing problems because customers mention that they have already paid.",
        "decision": "The manager adds clearer category definitions and examples, then asks reviewers to compare both versions on the same tickets.",
        "result": "The review can attribute improvements to the revised instructions and identify ambiguous tickets that still need escalation."
      },
      "activity": {
        "title": "Design a fair comparison",
        "prompt": "Prompt A has been tested on simple tickets. Prompt B was tested on a different set of complex tickets. Which next step gives the strongest comparison?",
        "options": [
          {
            "label": "Pick the prompt with the most professional tone",
            "feedback": "Tone is only one criterion and does not control for different case difficulty."
          },
          {
            "label": "Pick the newer prompt because it contains more instructions",
            "feedback": "More instructions can add conflicts or noise. Newness and length are not evidence of improvement."
          },
          {
            "label": "Run both on the same representative cases with a shared rubric",
            "feedback": "Best fit. Comparable cases and criteria let you examine the effect of the prompt change."
          }
        ],
        "best": 2
      },
      "quiz": [
        {
          "question": "Prompt B appears better than A, but each was tried on different tickets. What is the best next step?",
          "options": [
            "Ship B immediately.",
            "Compare both on the same representative cases.",
            "Pick whichever response is longer."
          ],
          "answer": 1,
          "explanation": "A fair comparison controls the cases and criteria so the prompt change can be assessed."
        },
        {
          "question": "A refined prompt gets all five familiar examples right. What evidence is still missing?",
          "options": [
            "A more persuasive title.",
            "A longer role description.",
            "Performance on unseen and difficult cases."
          ],
          "answer": 2,
          "explanation": "Success on familiar examples does not establish reliable behavior across the work the assistant will actually encounter."
        }
      ],
      "takeaway": "Treat prompt changes as measured experiments, with a clear rubric and unseen test cases.",
      "reflection": "Which three difficult cases should your team keep in a prompt test set, and what would an acceptable response do?",
      "sourceSections": [
        6,
        7
      ],
      "sources": [
        {
          "label": "Prompt Instruction Refinement",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/6 - Prompt Instruction Refinement/Prompt Instruction Refinement.md"
        },
        {
          "label": "Prompt Instruction Refinement Best Practices",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/6 - Prompt Instruction Refinement/Prompt Instruction Refinement Best Practices.md"
        },
        {
          "label": "Examples: Prompt Instruction Refinement",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/6 - Prompt Instruction Refinement/Examples: Prompt Instruction Refinement.md"
        },
        {
          "label": "Exercise: Prompt Refinement",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/7 - Applying Prompt Instruction Refinement with Python/Exercise: Prompt Refinement.md"
        },
        {
          "label": "Summary: Prompt Instruction Refinement",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/7 - Applying Prompt Instruction Refinement with Python/Summary: Prompt Instruction Refinement.md"
        }
      ]
    },
    {
      "id": "r4",
      "title": "Tokens and search by meaning",
      "minutes": 12,
      "outcome": "Explain tokens, embeddings, and semantic search without confusing similarity with truth or permission.",
      "sections": [
        {
          "heading": "Tokens are processing units",
          "body": "Models process text in units called tokens. A token may be a word, part of a word, punctuation, or another piece of text; the split depends on the model and the language. Tokens help explain two practical constraints. First, a request has a limited capacity for instructions, documents, conversation, and output. Second, many model services meter usage in tokens, sometimes with different treatment for different kinds of input or output. A longer document or conversation can therefore affect cost and responsiveness. Avoid treating a fixed words-to-tokens shortcut as an exact budget. Estimate the actual workload and verify the relevant service’s current usage rules."
        },
        {
          "heading": "Embeddings make similarity searchable",
          "body": "An embedding represents content as a list of numbers that can be compared with other representations. A useful analogy is a map where related subjects occupy nearby neighborhoods. “Annual leave,” “vacation allowance,” and “time off” may be related even when the words differ. A search system can represent a question and candidate passages in a compatible way, then return those with similar representations. The analogy is simplified: real embeddings have many dimensions, and those dimensions are not necessarily human-readable categories. The important management point is that semantic search can connect related language beyond exact word matches."
        },
        {
          "heading": "Similarity needs business context",
          "body": "A close match is a retrieval clue, not a truth certificate. Two passages may discuss the same policy while disagreeing about an entitlement, applying to different regions, or reflecting different dates. A user may also lack permission to read an otherwise relevant document. Effective search combines meaning with the constraints of the task: ownership, region, date, document type, and authorization. Exact identifiers such as product codes can benefit from keyword matching alongside semantic retrieval. Ask to see challenging examples, including similar but wrong results. The best demonstration shows how the system rejects misleading matches, not merely that it can find a related paragraph."
        }
      ],
      "concepts": [
        {
          "term": "Token",
          "explanation": "A model-specific unit used to process content; it is not always a complete word."
        },
        {
          "term": "Embedding",
          "explanation": "A numerical representation useful for comparing patterns of meaning in content."
        },
        {
          "term": "Semantic search",
          "explanation": "Retrieval based on related meaning, often combined with exact-word matching and metadata filters."
        }
      ],
      "visual": {
        "title": "Find meaning, then check fit",
        "caption": "This is a conceptual workflow, not a real embedding plot. Similarity alone does not establish accuracy, freshness, or permission.",
        "steps": [
          {
            "label": "Employee question",
            "detail": "“How much time off can I take?”"
          },
          {
            "label": "Meaning match",
            "detail": "Find passages about annual leave and vacation entitlement."
          },
          {
            "label": "Business filters",
            "detail": "Check region, effective date, and the user’s access."
          },
          {
            "label": "Relevant evidence",
            "detail": "Use the current applicable policy, not just the nearest match."
          }
        ]
      },
      "tools": [
        {
          "name": "Token counter",
          "role": "Estimates the size of a particular request using a compatible tokenizer or service tooling."
        },
        {
          "name": "Embedding model",
          "role": "Produces representations that a search system can compare; the model must be appropriate for the content."
        },
        {
          "name": "Vector search",
          "role": "Retrieves similar representations, usually with additional filters and ranking."
        }
      ],
      "example": {
        "title": "Time off in the wrong region",
        "context": "A fictional employee searches for “time off.” Search returns a highly similar annual-leave policy from another country alongside the current local policy.",
        "decision": "The manager requires region and effective-date checks before the assistant uses a passage.",
        "result": "The workflow favors applicable evidence rather than assuming the most similar text is the right policy."
      },
      "activity": {
        "title": "Choose the usable search result",
        "prompt": "An employee in Region A needs the current leave policy. Which result should the assistant prefer?",
        "options": [
          {
            "label": "The current approved Region A policy the employee may access",
            "feedback": "Best fit. It matches the subject and satisfies applicability, freshness, and access requirements."
          },
          {
            "label": "An old Region A policy with the highest similarity score",
            "feedback": "A strong meaning match does not make an obsolete entitlement current."
          },
          {
            "label": "A restricted Region B policy with identical wording to the question",
            "feedback": "Neither exact wording nor similarity overrides access restrictions or the wrong region."
          }
        ],
        "best": 0
      },
      "quiz": [
        {
          "question": "Why can a search for “time off” find a document titled “Annual Leave”?",
          "options": [
            "Embeddings can capture related meaning.",
            "Both phrases always have identical tokens.",
            "The database rewrites company policy."
          ],
          "answer": 0,
          "explanation": "Semantic retrieval can connect related language beyond exact word matches."
        },
        {
          "question": "Two passages receive a high similarity score. What does that establish?",
          "options": [
            "Both are current and correct.",
            "The user may access both.",
            "Their representations are similar; truth and access need separate checks."
          ],
          "answer": 2,
          "explanation": "Similarity helps retrieval but does not verify correctness, freshness, or authorization."
        }
      ],
      "takeaway": "Semantic search finds related content; business rules determine whether that content is usable.",
      "reflection": "Which metadata would prevent a plausible but wrong search result in your organization?",
      "sourceSections": [
        8,
        9
      ],
      "sources": [
        {
          "label": "Tokenization",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Tokenization.md"
        },
        {
          "label": "Embeddings",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Embeddings.md"
        },
        {
          "label": "Vectors and Vector Search",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/8 - Tokens, Embeddings, and Vector Search/Vectors and Vector Search.md"
        },
        {
          "label": "Demo: Tokenization",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/9 - Implementing Tokens, Embeddings, and Vector Search/Demo: Tokenization.md"
        },
        {
          "label": "Demo: Embeddings and Vector Search",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/9 - Implementing Tokens, Embeddings, and Vector Search/Demo: Embeddings and Vector Search.md"
        }
      ]
    },
    {
      "id": "r5",
      "title": "Choose models by business value",
      "minutes": 14,
      "outcome": "Compare model options using task quality, speed, total cost, and operational control.",
      "sections": [
        {
          "heading": "Start with the task and its constraints",
          "body": "The best model for a workflow is the one that meets its requirements at an acceptable overall cost and risk. Begin with representative work and define what a successful result looks like. A short internal classification task and a complex customer explanation may need different capabilities. Compare candidates on quality, speed, cost, and control. Public benchmarks can inform a shortlist, but they do not replace evaluation on your own task. Include difficult cases and the required response time. A model that produces excellent answers too slowly for a live interaction may still be suitable for an overnight analysis workflow."
        },
        {
          "heading": "Count the whole operating cost",
          "body": "A low model-usage price does not automatically create a low-cost service. Include input and output usage, retries, search, monitoring, integration, infrastructure, and human correction. Compare cost per acceptable completed task, not merely cost per request. In a fictional monthly example, candidate A uses $100 of model service and $900 of review time; candidate B uses $250 of service and $400 of review. Under those assumptions, B costs $650 compared with A’s $1,000. These are teaching figures, not vendor prices or a procurement recommendation. Review volume, reviewer cost, quality requirements, and actual service quotes can change the result substantially."
        },
        {
          "heading": "Decide who operates and controls it",
          "body": "A hosted model service transfers some infrastructure work to a provider, while an open-weight deployment can give the organization more direct control over parts of the stack. Self-hosting still requires infrastructure, specialist maintenance, security, monitoring, and capacity planning; it is not automatically cheaper or compliant. Review data handling, contractual terms, availability, change management, and the team’s operating ability for each option. Some workflows route routine cases to a smaller model and escalate difficult ones, but that routing also needs evaluation. Make a documented choice with a review date because workloads and products change. Ask what evidence would cause the team to reconsider the selection."
        }
      ],
      "concepts": [
        {
          "term": "Total cost of ownership",
          "explanation": "The full operating cost, including service usage, infrastructure, integration, review, and maintenance."
        },
        {
          "term": "Cost per acceptable task",
          "explanation": "Total cost divided by work completed to the required quality standard."
        },
        {
          "term": "Model routing",
          "explanation": "Sending different tasks to different model options according to evaluated rules and constraints."
        }
      ],
      "visual": {
        "title": "Four questions for model selection",
        "caption": "Weight these dimensions for the business task. The highest benchmark score or lowest request price does not decide every case.",
        "steps": [
          {
            "label": "Quality",
            "detail": "Does it meet the task’s acceptance criteria?"
          },
          {
            "label": "Speed",
            "detail": "Does response time fit the workflow?"
          },
          {
            "label": "Total cost",
            "detail": "What does a successfully completed task really cost?"
          },
          {
            "label": "Control",
            "detail": "Can the organization operate it with the required data and service controls?"
          }
        ]
      },
      "tools": [
        {
          "name": "Model scorecard",
          "role": "Compares candidates against the same task examples, constraints, and review criteria."
        },
        {
          "name": "Usage estimator",
          "role": "Models request volume and operating assumptions; obtain current service quotes before procurement."
        },
        {
          "name": "Hosted or open-weight deployment",
          "role": "Alternative operating approaches with different responsibilities; neither label alone proves suitability."
        }
      ],
      "example": {
        "title": "The cheaper request costs more",
        "context": "For a fictional month of comparable work, candidate A costs $100 in usage plus $900 in review. Candidate B costs $250 in usage plus $400 in review. Both meet the stated quality threshold.",
        "decision": "The manager compares modeled total costs: A at $1,000 and B at $650, then checks the review assumptions.",
        "result": "B is cheaper under the supplied assumptions. The team still needs real workload measurements and current quotes before choosing a provider."
      },
      "activity": {
        "title": "Review the procurement argument",
        "prompt": "A team recommends a model because its usage price is lowest, but it needs frequent retries and staff corrections. What should you request?",
        "options": [
          {
            "label": "A larger discount on tokens, with no further evaluation",
            "feedback": "A discount may help, but it does not reveal whether corrections and retries dominate cost."
          },
          {
            "label": "A comparison of total cost per acceptable task, including review and retries",
            "feedback": "Best fit. It connects cost to a useful business result and makes hidden operating work visible."
          },
          {
            "label": "The provider with the most impressive public demo",
            "feedback": "A demo does not establish performance or cost on your actual workload."
          }
        ],
        "best": 1
      },
      "quiz": [
        {
          "question": "A candidate has the lowest token price but needs many corrections. What should determine the decision?",
          "options": [
            "Token price alone.",
            "Total cost per acceptable completed task.",
            "Provider logo size."
          ],
          "answer": 1,
          "explanation": "Rework, retries, and operating costs can outweigh a cheap model request."
        },
        {
          "question": "A vendor tops a public benchmark. What should the manager do before selection?",
          "options": [
            "Test it on representative tasks and required data controls.",
            "Skip the pilot.",
            "Assume it is best for every workflow."
          ],
          "answer": 0,
          "explanation": "A benchmark does not establish fit for the organization’s specific task, constraints, or risk tolerance."
        }
      ],
      "takeaway": "Buy a successful workflow, not a benchmark position or a cheap request.",
      "reflection": "What hidden operating cost or control requirement could change your team’s preferred model?",
      "sourceSections": [
        10,
        11
      ],
      "sources": [
        {
          "label": "Model Selection",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/10 - Strategic Model Selection & Economics/Model Selection.md"
        },
        {
          "label": "Metrics for Evaluation",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/10 - Strategic Model Selection & Economics/Metrics for Evaluation.md"
        },
        {
          "label": "Model Economics",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/10 - Strategic Model Selection & Economics/Model Economics.md"
        },
        {
          "label": "Selection Process and Resources",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/10 - Strategic Model Selection & Economics/Selection Process and Resources.md"
        },
        {
          "label": "Exercise: Prompt Cost",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/11 - Applying Model Selection and Economics/Exercise: Prompt Cost.md"
        },
        {
          "label": "Exercise: Model Selection",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/11 - Applying Model Selection and Economics/Exercise: Model Selection.md"
        }
      ]
    },
    {
      "id": "r6",
      "title": "Give AI the right business knowledge",
      "minutes": 14,
      "outcome": "Describe a RAG workflow and identify the data, retrieval, and ownership decisions it requires.",
      "sections": [
        {
          "heading": "Separate preparation from answering",
          "body": "Retrieval-augmented generation connects a model to selected external information at answer time. Preparation begins with approved documents. The team cleans and divides them into passages, creates searchable representations, and stores an index with source metadata. At question time, the application searches for relevant passages the user is authorized to access, supplies them to the model, and asks for an answer grounded in that evidence. This is different from retraining the model. Updating an indexed document can change what evidence is available without changing the model’s learned parameters. RAG can improve grounding, but an answer can still be wrong if retrieval or generation fails."
        },
        {
          "heading": "Preserve meaning and improve retrieval",
          "body": "Chunking means dividing material into pieces that fit the search and answer process. Cut too narrowly and a rule may lose its exception; include too much and irrelevant material can distract from the answer. Keep useful boundaries such as sections and related paragraphs, then test the result. Semantic retrieval finds related meaning, while keyword retrieval can help with exact names or identifiers. Hybrid search combines these signals. Reranking reorders an initial set of candidates to improve relevance. Large indexes may use approximate search to gain speed rather than compare every possible item exactly. Each choice has tradeoffs, so review end-to-end examples and measure outcomes."
        },
        {
          "heading": "Treat the knowledge base as an operating service",
          "body": "A knowledge assistant needs content owners, update processes, and enforceable permissions. Preserve source identity, effective date, region, and other metadata that determine applicability. Enforce access in the application and retrieval layer before restricted material reaches a model or user; a prompt asking for secrecy is not an authorization system. Test what happens when a document is updated, superseded, or deleted, including any copies used by the workflow. Plan for missing or conflicting evidence and make escalation visible. Managers should ask who owns freshness and who investigates retrieval failures. The value comes from reliable business knowledge over time, not simply from creating an index once."
        }
      ],
      "concepts": [
        {
          "term": "RAG",
          "explanation": "A workflow that retrieves external evidence and supplies it to a model before generating an answer."
        },
        {
          "term": "Chunking",
          "explanation": "Dividing source material into meaningful passages for search and use as context."
        },
        {
          "term": "Reranking",
          "explanation": "Reordering retrieved candidates using an additional relevance assessment."
        },
        {
          "term": "Metadata",
          "explanation": "Information about a document, such as its source, date, region, or access rules."
        }
      ],
      "visual": {
        "title": "From approved knowledge to a grounded answer",
        "caption": "Prepare knowledge before a question arrives. Enforce access and applicability during retrieval, then check the generated answer.",
        "steps": [
          {
            "label": "Prepare",
            "detail": "Clean documents and preserve meaningful passages."
          },
          {
            "label": "Index",
            "detail": "Store searchable representations with source metadata."
          },
          {
            "label": "Retrieve",
            "detail": "Find relevant passages the user is authorized to access."
          },
          {
            "label": "Generate",
            "detail": "Answer using the selected evidence and expose missing information."
          },
          {
            "label": "Maintain",
            "detail": "Refresh, remove, and reevaluate knowledge as it changes."
          }
        ]
      },
      "tools": [
        {
          "name": "Chroma",
          "role": "A vector database used for the prototype knowledge index in the source course."
        },
        {
          "name": "Pinecone and Weaviate",
          "role": "Additional vector-search platforms named in the source; evaluate operational fit rather than choosing by name."
        },
        {
          "name": "Knowledge-base filters",
          "role": "Constrain retrieval by relevant metadata and application-enforced permissions."
        }
      ],
      "example": {
        "title": "The right topic, the wrong year",
        "context": "A fictional policy assistant retrieves last year’s travel allowance because its wording closely matches the question. The current policy is stored separately.",
        "decision": "The manager assigns a knowledge owner and requires current-version metadata, retrieval filters, and update tests.",
        "result": "The team addresses the evidence problem directly instead of assuming a larger model will repair stale inputs."
      },
      "activity": {
        "title": "Fix the first failing stage",
        "prompt": "The current travel policy exists, but the assistant is given only a superseded policy passage. What should the team investigate first?",
        "options": [
          {
            "label": "Make the answer sound more confident",
            "feedback": "Tone cannot repair the wrong evidence and may make the error harder to notice."
          },
          {
            "label": "Increase the maximum answer length",
            "feedback": "A longer answer still starts from superseded material."
          },
          {
            "label": "Check indexing, version metadata, and retrieval filters",
            "feedback": "Best fit. Find out why the current applicable passage did not reach the model."
          }
        ],
        "best": 2
      },
      "quiz": [
        {
          "question": "A RAG assistant retrieves the wrong year’s policy. What should be investigated first?",
          "options": [
            "Its writing style.",
            "Whether the model needs a more impressive name.",
            "Document freshness, metadata, and retrieval filters."
          ],
          "answer": 2,
          "explanation": "The generator cannot reliably compensate for stale or inappropriate evidence supplied by the retrieval process."
        },
        {
          "question": "Restricted HR and public documents share an index. Where must access be enforced?",
          "options": [
            "Only in a sentence asking the model to keep secrets.",
            "In the application and retrieval authorization controls.",
            "Only after someone complains."
          ],
          "answer": 1,
          "explanation": "Prompts do not replace controls governing which source material a user is allowed to retrieve."
        }
      ],
      "takeaway": "A grounded answer begins with relevant, current, authorized evidence and a process to maintain it.",
      "reflection": "Who would own freshness, access permissions, and removal of outdated documents for your knowledge assistant?",
      "sourceSections": [
        12,
        13
      ],
      "sources": [
        {
          "label": "RAG Workflow",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/12 - Retrieval Augmented Generation (RAG) Workflow/RAG Workflow.md"
        },
        {
          "label": "RAG Workflow Concepts",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/12 - Retrieval Augmented Generation (RAG) Workflow/RAG Workflow Concepts.md"
        },
        {
          "label": "Vector Databases",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases.md"
        },
        {
          "label": "Vector Databases and Semantic Search for RAG",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Vector Databases and Semantic Search for RAG.md"
        },
        {
          "label": "Retrieval, Ranking",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/13 - Semantic Search with Vector Databases for RAG/Retrieval, Ranking.md"
        }
      ]
    },
    {
      "id": "r7",
      "title": "Answers you can inspect",
      "minutes": 12,
      "outcome": "Define an answer contract for evidence, citations, uncertainty, and conflicting sources.",
      "sections": [
        {
          "heading": "Specify an evidence contract",
          "body": "A grounded-answer contract states how an assistant should use supplied documents and what it should do when they are insufficient. Ask for claims supported by the retrieved evidence, clear source references, and an explicit statement when the available material cannot answer the question. Specify a useful format for the audience: a short answer, supporting passages, and any unresolved limitations may be enough. A persona can guide tone, but calling the model an expert does not create evidence. Treat the contract as behavior to test, not a guarantee secured by wording. Review whether the assistant actually obeys it in difficult and incomplete cases."
        },
        {
          "heading": "Follow each claim back to its source",
          "body": "A citation is a pointer that lets a person inspect evidence. It does not prove the cited passage supports the claim. A brochure saying a feature is planned does not support an answer saying that feature is available today. Check whether the passage is relevant, authoritative for the question, current, and strong enough to justify the wording. When sources conflict, the assistant should expose the conflict and use an established authority rule or escalate to the content owner. When evidence is absent, it should say so. Avoid rewarding a polished answer simply because it includes many citations; assess the relationship between claims and evidence."
        },
        {
          "heading": "Separate documents from instructions",
          "body": "Retrieved material is data to evaluate, not automatically an instruction the application should obey. A document may contain accidental or malicious text telling the assistant to ignore its rules, reveal other information, or make an unsupported promise. Keep trusted application instructions distinct from retrieved content and enforce important controls outside the prompt. Managers do not need to implement that separation, but they should require tests that demonstrate it. Also inspect source updates, deletions, and filters: an answer can cite a real passage that should no longer be available. A reliable source viewer and a clear escalation route make these problems easier for users to report and resolve."
        }
      ],
      "concepts": [
        {
          "term": "Grounded answer",
          "explanation": "An answer whose claims are supported by the evidence supplied for the task."
        },
        {
          "term": "Citation",
          "explanation": "A reference that lets a reader inspect a source; its presence alone does not prove support."
        },
        {
          "term": "Prompt injection",
          "explanation": "Untrusted content attempting to redirect the assistant’s behavior instead of serving only as task data."
        }
      ],
      "visual": {
        "title": "Trace the claim, not just the citation",
        "caption": "A source may exist and still fail to support an answer. Check the relationship between the claim and the passage.",
        "steps": [
          {
            "label": "Claim",
            "detail": "“The feature is available now.”"
          },
          {
            "label": "Cited passage",
            "detail": "“The feature is planned for a future release.”"
          },
          {
            "label": "Evidence check",
            "detail": "Planned availability does not support current availability."
          },
          {
            "label": "Corrected answer",
            "detail": "State that availability is unconfirmed and route to the product owner."
          }
        ]
      },
      "tools": [
        {
          "name": "Grounded-answer template",
          "role": "Defines the required evidence, source references, uncertainty handling, and output format."
        },
        {
          "name": "Source viewer",
          "role": "Lets a reviewer inspect the exact passage associated with a claim."
        },
        {
          "name": "Knowledge metadata filters",
          "role": "Help ensure the available evidence matches source, date, scope, and authorization requirements."
        }
      ],
      "example": {
        "title": "A citation that overpromises",
        "context": "A fictional sales assistant says a reporting feature is available and cites a brochure. The brochure describes the feature as planned.",
        "decision": "A reviewer marks the availability claim unsupported and requests confirmation from the product owner.",
        "result": "The corrected response explains what the brochure actually says and avoids turning a roadmap statement into a customer promise."
      },
      "activity": {
        "title": "Review the claim",
        "prompt": "A brochure says, “The reporting dashboard is planned.” The assistant says, “You can use the reporting dashboard today,” with a citation to that brochure. Which review is correct?",
        "options": [
          {
            "label": "The citation does not support current availability",
            "feedback": "Best fit. A planned feature is not evidence that the feature is available now."
          },
          {
            "label": "Any cited answer is adequately grounded",
            "feedback": "A real citation can still be attached to an unsupported claim. Read the passage."
          },
          {
            "label": "Remove the citation and keep the statement",
            "feedback": "Removing the pointer hides the mismatch rather than correcting it."
          }
        ],
        "best": 0
      },
      "quiz": [
        {
          "question": "An answer includes three citations. What is the best verification step?",
          "options": [
            "Check that each passage supports its associated claim.",
            "Approve any answer containing three citations.",
            "Remove uncertainty to make the answer persuasive."
          ],
          "answer": 0,
          "explanation": "Citation presence alone does not establish support, freshness, or correctness."
        },
        {
          "question": "Two retrieved policies disagree and neither is clearly authoritative. What should the assistant do?",
          "options": [
            "Invent a compromise.",
            "Report the conflict and route to an owner.",
            "Choose whichever passage is longer."
          ],
          "answer": 1,
          "explanation": "Unresolved evidence should remain visible. The assistant should not manufacture a policy to hide the conflict."
        }
      ],
      "takeaway": "A trustworthy-looking answer becomes inspectable only when its claims can be checked against actual evidence.",
      "reflection": "What must an assistant show your team before its answer can be used in a customer-facing decision?",
      "sourceSections": [
        14,
        15
      ],
      "sources": [
        {
          "label": "Prompt Engineering for RAG",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/14 - Prompt Engineering for RAG Synthesis/Prompt Engineering for RAG.md"
        },
        {
          "label": "Prompting Patterns for RAG",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/14 - Prompt Engineering for RAG Synthesis/Prompting Patterns for RAG.md"
        },
        {
          "label": "RAG Context and Citations",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/14 - Prompt Engineering for RAG Synthesis/RAG Context and Citations.md"
        },
        {
          "label": "Demo: Vector Database Operations",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/15 - Implementing RAG with Vector Databases/Demo: Vector Database Operations.md"
        },
        {
          "label": "Testing RAG Implementation",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/15 - Implementing RAG with Vector Databases/Testing RAG Implementation.md"
        },
        {
          "label": "Solution: RAG System",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/15 - Implementing RAG with Vector Databases/Solution: RAG System.md"
        }
      ]
    },
    {
      "id": "r8",
      "title": "Evaluate and approve a knowledge assistant",
      "minutes": 16,
      "outcome": "Diagnose retrieval and generation failures separately, then define an evidence-based pilot decision.",
      "sections": [
        {
          "heading": "Ask two different quality questions",
          "body": "A RAG answer can fail because the system did not find the right evidence or because the model used good evidence badly. Separate those questions during evaluation. Retrieval precision concerns how much of the returned material is useful; recall concerns whether the needed evidence was found. Generation faithfulness concerns whether claims are supported by the supplied context. Answer relevance concerns whether the response addresses the question. Correctness still requires reliable evidence about what the answer should be. These measures complement one another. A faithful summary of an obsolete policy can remain wrong for today’s user, and a relevant answer can contain unsupported claims."
        },
        {
          "heading": "Build a test set people can trust",
          "body": "Create representative questions with reviewed reference answers and relevant source passages where the chosen evaluation needs them. Include routine questions, hard cases, missing answers, conflicting sources, and users with different permissions. The source course uses RAGAS as an evaluation framework; tools can automate parts of scoring, but the requirements differ by metric. Model-based judges can be inconsistent or mistaken, so calibrate them against human review and inspect important disagreements. Do not borrow a universal launch threshold from a tutorial. Set criteria according to the task and consequences, and review failure patterns as well as averages. Track latency, operating cost, and appropriate escalation alongside answer quality."
        },
        {
          "heading": "Turn the project into an acceptance review",
          "body": "The source capstone, NASA Mission Intelligence, asks for a knowledge assistant spanning Apollo 11, Apollo 13, and Challenger records. As a manager, review the system rather than write its implementation: are mission filters correct, can claims be traced to supplied sources, and does it admit when evidence is missing? Require separate retrieval and generation results and tests of source updates. Record the intended users, knowledge owner, success criteria, human escalation path, monitoring owner, and stop conditions in a pilot charter. A strong average score cannot compensate for unauthorized retrieval or a critical unsupported claim. Fix the failing control, rerun relevant tests, and document the decision before expanding access."
        }
      ],
      "concepts": [
        {
          "term": "Retrieval precision and recall",
          "explanation": "Whether retrieved material is useful, and whether the evidence needed for an answer was found."
        },
        {
          "term": "Faithfulness",
          "explanation": "Whether an answer’s claims are supported by its supplied context."
        },
        {
          "term": "Golden test set",
          "explanation": "Reviewed examples used as a stable reference for evaluating the workflow."
        },
        {
          "term": "Acceptance criteria",
          "explanation": "Task-specific requirements that determine whether a pilot can proceed, needs revision, or must stop."
        }
      ],
      "visual": {
        "title": "Find the failure before choosing the fix",
        "caption": "Evaluate retrieval and generation separately. Business approval also considers access, cost, latency, and escalation.",
        "steps": [
          {
            "label": "Reviewed test cases",
            "detail": "Questions, trusted answers, evidence, and access expectations."
          },
          {
            "label": "Retrieval check",
            "detail": "Did the system find the relevant permitted material?"
          },
          {
            "label": "Generation check",
            "detail": "Did the answer use that material faithfully and address the question?"
          },
          {
            "label": "Pilot decision",
            "detail": "Approve, revise, or pause against task-specific criteria and stop conditions."
          }
        ]
      },
      "tools": [
        {
          "name": "RAGAS",
          "role": "An evaluation framework used in the source course to assess retrieval and answer quality; metric inputs and interpretation vary."
        },
        {
          "name": "Human-reviewed test set",
          "role": "Provides a credible benchmark and helps calibrate automated judgments."
        },
        {
          "name": "Pilot scorecard",
          "role": "Combines quality results with critical failures, operating performance, owners, and launch criteria."
        }
      ],
      "example": {
        "title": "The mission-intelligence sponsor review",
        "context": "A fictional review of the source-inspired NASA assistant shows strong average relevance, but one answer invents a mission detail and another retrieves a restricted evaluation document.",
        "decision": "The sponsor pauses expansion, assigns separate generation and authorization fixes, and requires focused retesting plus regression checks.",
        "result": "The team has a concrete route to reassessment instead of treating a strong average as permission to ignore critical failures."
      },
      "activity": {
        "title": "Make the launch decision",
        "prompt": "A fictional pilot scores well on most questions but exposes a restricted document in one test. What is the sound decision?",
        "options": [
          {
            "label": "Launch because the average is high",
            "feedback": "The average hides a critical access failure. Good performance elsewhere does not resolve it."
          },
          {
            "label": "Fix authorization and retest before broad rollout",
            "feedback": "Best fit. Assign the failure, verify the control, and reassess against the pilot’s acceptance criteria."
          },
          {
            "label": "Remove the failed test from the scorecard",
            "feedback": "Removing the evidence hides the risk and undermines the review."
          }
        ],
        "best": 1
      },
      "quiz": [
        {
          "question": "The correct passage was retrieved, but the answer adds an unsupported fact. Which component most directly failed?",
          "options": [
            "Generation faithfulness.",
            "Document upload speed.",
            "Search recall alone."
          ],
          "answer": 0,
          "explanation": "The evidence was available, but the generated answer failed to stay supported by it."
        },
        {
          "question": "A pilot faithfully quotes last year's travel allowance, but a new policy has replaced it. What should the sponsor decide?",
          "options": [
            "Approve the answer because it faithfully matches its source.",
            "Change the answer's tone while keeping the same evidence.",
            "Pause expansion, update the approved sources, and retest current-policy questions."
          ],
          "answer": 2,
          "explanation": "Faithfulness measures support from the supplied context, not whether that context is current. Restore the current policy, check retrieval and version handling, and retest before expanding the pilot."
        }
      ],
      "takeaway": "Approve a knowledge assistant through evidence about its components, its users, and its operating controls.",
      "reflection": "What are the success criteria, responsible owners, and non-negotiable stop conditions for your first knowledge-assistant pilot?",
      "sourceSections": [
        16,
        17,
        18
      ],
      "sources": [
        {
          "label": "RAG Evaluation",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/16 - Evaluating RAG Systems/RAG Evaluation.md"
        },
        {
          "label": "Evaluating the Retriever",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/16 - Evaluating RAG Systems/Evaluating the Retriever.md"
        },
        {
          "label": "Evaluating the Generator",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/16 - Evaluating RAG Systems/Evaluating the Generator.md"
        },
        {
          "label": "The Evaluation Dataset",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/16 - Evaluating RAG Systems/The Evaluation Dataset.md"
        },
        {
          "label": "Guide to RAGAS Metrics",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Guide to RAGAS Metrics.md"
        },
        {
          "label": "Exercise: RAG Evaluation",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/17 - RAG Evaluation Implementation/Exercise: RAG Evaluation.md"
        },
        {
          "label": "Project Overview",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Project Overview.md"
        },
        {
          "label": "Rubric",
          "path": "2 - Large Language Models (LLMs) and Retrival Augmented Generation (RAG)/18 - Project: NASA Mission Intelligence: Developing a RAG-Based Chat System/Rubric.md"
        }
      ]
    }
  ]
};
