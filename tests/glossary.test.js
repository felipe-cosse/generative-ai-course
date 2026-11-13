import test from "node:test";
import assert from "node:assert/strict";
import { entries, searchGlossary, termsForLesson } from "../src/glossary.js";
import { lessons, findModule } from "../src/data/course.js";

test("glossary search ranks canonical names, expansions, and aliases before descriptions", () => {
  assert.equal(
    searchGlossary({ query: " LLM " })[0].id,
    "large-language-model",
  );
  assert.equal(searchGlossary({ query: "LLMs" })[0].id, "large-language-model");
  assert.equal(
    searchGlossary({ query: "large language model" })[0].id,
    "large-language-model",
  );
  assert.equal(
    searchGlossary({ query: "RAG" })[0].id,
    "retrieval-augmented-generation",
  );
  assert.equal(searchGlossary({ query: "low-rank adaptation" })[0].id, "lora");
  assert.ok(
    searchGlossary({ query: entries[0].definition }).some(
      (entry) => entry.id === entries[0].id,
    ),
  );
  assert.equal(searchGlossary({ query: "no-such-concept-1234" }).length, 0);
  assert.deepEqual(searchGlossary(), entries);
});

test("category, module, and initial filters compose without changing the catalog", () => {
  const result = searchGlossary({
    category: "Evaluation and quality",
    moduleId: "rag",
    letter: "F",
  });
  assert.deepEqual(
    result.map((entry) => entry.id),
    ["faithfulness"],
  );
  for (const entry of searchGlossary({ moduleId: "multimodal" }))
    assert.ok(entry.lessonIds.some((id) => findModule(id).id === "multimodal"));
  assert.equal(searchGlossary().length, 217);
});

test("every lesson exposes its complete term list in alphabetic order", () => {
  for (const lesson of lessons) {
    const terms = termsForLesson(lesson.id);
    assert.ok(terms.length > 0, lesson.id);
    assert.ok(terms.every((entry) => entry.lessonIds.includes(lesson.id)));
    assert.deepEqual(
      terms,
      entries.filter((entry) => entry.lessonIds.includes(lesson.id)),
    );
  }
});

test("short acronym searches do not match unrelated word fragments", () => {
  const rag = searchGlossary({ query: "RAG" }).map((entry) => entry.id);
  assert.ok(rag.includes("retrieval-augmented-generation"));
  assert.ok(rag.includes("ragas"));
  assert.ok(!rag.includes("media-compression"));
  assert.equal(searchGlossary({ query: "faith" })[0].id, "faithfulness");
  assert.deepEqual(searchGlossary({ query: "[" }), []);
});
