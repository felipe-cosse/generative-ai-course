import test from "node:test";
import assert from "node:assert/strict";
import { segmentGlossaryText, termsForLesson } from "../src/glossary.js";
import { lessons } from "../src/data/course.js";

const matches = (text, lessonId) =>
  segmentGlossaryText(text, lessonId)
    .filter((segment) => segment.entry)
    .map((segment) => ({ text: segment.text, id: segment.entry.id }));

// These are the authored prose surfaces approved for inline definitions.
const readingFields = (lesson) => [
  ...lesson.sections.map((section) => section.body),
  ...lesson.visual.steps.map((step) => step.detail),
  lesson.visual.caption,
  ...lesson.concepts.map((concept) => concept.explanation),
  lesson.example.context,
  lesson.example.decision,
  lesson.example.result,
  ...lesson.tools.map((tool) => tool.role),
  lesson.takeaway,
  lesson.activity.prompt,
  ...lesson.activity.options.map((option) => option.feedback),
  ...lesson.quiz.map((question) => question.explanation),
];

test("segmentation preserves every character on approved prose surfaces in all 24 lessons", () => {
  assert.equal(lessons.length, 24);
  for (const lesson of lessons) {
    const allowed = new Set(termsForLesson(lesson.id).map((entry) => entry.id));
    let highlighted = 0;
    for (const [index, text] of readingFields(lesson).entries()) {
      const segments = segmentGlossaryText(text, lesson.id);
      assert.equal(
        segments.map((segment) => segment.text).join(""),
        text,
        `${lesson.id} field ${index} must keep the original text`,
      );
      const marked = segments.filter((segment) => segment.entry);
      const ids = marked.map((segment) => segment.entry.id);
      assert.equal(
        new Set(ids).size,
        ids.length,
        `${lesson.id} field ${index} must highlight each term only once`,
      );
      for (const id of ids)
        assert.ok(allowed.has(id), `${lesson.id}: out-of-scope ${id}`);
      highlighted += marked.length;
    }
    assert.ok(
      highlighted > 0,
      `${lesson.id} must have usable inline definitions`,
    );
  }
});

test("matching respects Unicode letters, marks, numbers, underscores, and astral characters", () => {
  const text = "éRAG RAGé RAG\u0301 𐐀RAG RAG𐐀 _RAG RAG_ 2RAG RAG2 🚀RAG—done";
  assert.deepEqual(matches(text, "r6"), [
    { text: "RAG", id: "retrieval-augmented-generation" },
  ]);
  assert.equal(
    segmentGlossaryText(text, "r6")
      .map((part) => part.text)
      .join(""),
    text,
  );
});

test("acronyms and ambiguous product names do not annotate ordinary lowercase words", () => {
  assert.deepEqual(matches("a clip, CLIP, clipped, CLIP4Clip", "m3"), [
    { text: "CLIP", id: "clip" },
  ]);
  assert.deepEqual(matches("a whisper; Whisper", "m4"), [
    { text: "Whisper", id: "whisper" },
  ]);
  assert.deepEqual(matches("a rag; RAG", "r6"), [
    { text: "RAG", id: "retrieval-augmented-generation" },
  ]);
});

test("RAG never matches inside Ragas or longer words", () => {
  assert.deepEqual(matches("Ragas and RAG; RAGAS and ragged", "r8"), [
    { text: "Ragas", id: "ragas" },
    { text: "RAG", id: "retrieval-augmented-generation" },
  ]);
  assert.deepEqual(matches("CLIP4Clip"), [
    { text: "CLIP4Clip", id: "clip4clip" },
  ]);
});

test("the longest valid phrase wins over its shorter overlapping concept", () => {
  assert.deepEqual(matches("large language model; language model", "r1"), [
    { text: "large language model", id: "large-language-model" },
    { text: "language model", id: "language-model" },
  ]);
  assert.deepEqual(matches("vision transformer; transformer", "m3"), [
    { text: "vision transformer", id: "vision-transformer" },
    { text: "transformer", id: "transformer" },
  ]);
  assert.deepEqual(matches("Pydantic AI and AI", "m1"), [
    { text: "Pydantic AI", id: "pydantic-ai" },
    { text: "AI", id: "artificial-intelligence" },
  ]);
});

test("each canonical term is highlighted once per block, including alternate aliases", () => {
  const text = "RAG, retrieval-augmented generation, RAG.";
  assert.deepEqual(matches(text, "r6"), [
    { text: "RAG", id: "retrieval-augmented-generation" },
  ]);
  const first = segmentGlossaryText(text, "r6");
  segmentGlossaryText("retrieval-augmented generation", "f7");
  assert.deepEqual(
    segmentGlossaryText(text, "r6"),
    first,
    "another render or lesson must not leak a shared seen-term state",
  );
  assert.deepEqual(matches("LLMs and LLM and large language model", "r1"), [
    { text: "LLMs", id: "large-language-model" },
  ]);
});

test("explicit lesson scope limits inline matches while the lesson list remains discoverable", () => {
  assert.deepEqual(matches("RAG and CLIP", "f1"), []);
  assert.deepEqual(matches("RAG and CLIP", "r6"), [
    { text: "RAG", id: "retrieval-augmented-generation" },
  ]);
  assert.deepEqual(matches("RAG and CLIP", "m3"), [
    { text: "CLIP", id: "clip" },
  ]);
  assert.deepEqual(matches("RAG and CLIP", "unknown-lesson"), []);
  assert.deepEqual(termsForLesson("unknown-lesson"), []);
  for (const lesson of lessons) {
    const terms = termsForLesson(lesson.id);
    assert.ok(terms.length > 0, `${lesson.id} must expose lesson terms`);
    assert.equal(new Set(terms.map((entry) => entry.id)).size, terms.length);
    assert.ok(terms.every((entry) => entry.lessonIds.includes(lesson.id)));
  }
});

test("alias punctuation is literal and matches preserve capitalization and surrounding punctuation", () => {
  assert.deepEqual(matches("PydanticXai; (Pydantic.ai), Pydantic AI.", "m1"), [
    { text: "Pydantic.ai", id: "pydantic-ai" },
  ]);
  const text = "‘RAG’—retrieval augmented generation…\n  Pydantic.ai!\t";
  const parts = segmentGlossaryText(text);
  assert.equal(parts.map((part) => part.text).join(""), text);
  assert.deepEqual(
    parts.filter((part) => part.entry).map((part) => part.text),
    ["RAG", "Pydantic.ai"],
  );
});

test("empty, unmatched, and HTML-looking text is returned without rewriting", () => {
  for (const text of [
    "",
    "  \n\t",
    "Ordinary prose.",
    '<img src="x" onerror="alert(1)">RAG</img>',
  ]) {
    const parts = segmentGlossaryText(text, "r6");
    assert.equal(parts.map((part) => part.text).join(""), text);
    assert.ok(parts.every((part) => typeof part.text === "string"));
  }
});

test("ordinary business context, human attention, and staff training do not get model-specific definitions", () => {
  const cases = [
    [
      "r2",
      "An unnecessarily long answer consumes time and attention.",
      "attention",
    ],
    [
      "m8",
      "A source project for simulated customer-service training with multimodal moderation.",
      "training",
    ],
    ["f1", "Review provenance, permission, and business context.", "context"],
    ["m5", "Their reliability depends on context.", "context"],
  ];
  for (const [lessonId, text, falsePositive] of cases) {
    assert.ok(
      !matches(text, lessonId).some((match) => match.id === falsePositive),
      `${lessonId}: ${JSON.stringify(text)} must not explain ${falsePositive} in the model-specific sense`,
    );
  }
  assert.ok(
    matches("Transformer attention relates parts of an input.", "m1").some(
      (match) => match.id === "attention",
    ),
  );
  assert.ok(
    matches("Model training adjusts a model's internal parameters.", "f3").some(
      (match) => match.id === "training",
    ),
  );
  assert.ok(
    matches("The supplied context includes the instructions.", "r2").some(
      (match) => match.id === "context",
    ),
  );
});
