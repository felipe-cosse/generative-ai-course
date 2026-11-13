import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { glossary } from "../src/data/glossary.js";
import { lessons } from "../src/data/course.js";

const normalize = (value) => value.toLowerCase();
const names = (entry) => [entry.term, entry.fullName, ...entry.aliases].filter(Boolean);
const ids = new Set(glossary.map((entry) => entry.id));
const lessonIds = new Set(lessons.map((lesson) => lesson.id));

test("the glossary covers every approved inventory candidate exactly once", () => {
  const inventory = readFileSync(new URL("../docs/glossary-inventory.md", import.meta.url), "utf8")
    .split("## Candidate inventory")[1].split("## Ambiguity")[0];
  const terms = inventory.split("\n").filter((row) => /\| [CPS] \|$/.test(row))
    .map((row) => row.split("|")[1].trim());
  assert.deepEqual(glossary.map((entry) => entry.term).sort(), terms.sort());
  assert.equal(ids.size, glossary.length);
  assert.equal(new Set(glossary.map((entry) => entry.category)).size, 11);
});

test("every entry has substantive manager-focused content and valid references", () => {
  for (const entry of glossary) {
    assert.match(entry.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    for (const field of ["term", "category", "definition", "explanation", "example", "whyItMatters", "confusion"]) {
      assert.equal(typeof entry[field], "string", `${entry.id}.${field}`);
      assert.ok(entry[field].trim(), `${entry.id}.${field} is empty`);
      assert.ok(!/```|<script|TODO|TBD|lorem ipsum/i.test(entry[field]), `${entry.id}.${field} contains placeholder/code`);
    }
    assert.ok(entry.definition.split(/\s+/).length >= 10, `${entry.id}: useful short definition`);
    assert.ok(entry.explanation.split(/\s+/).length >= 35, `${entry.id}: deeper explanation`);
    assert.notEqual(entry.definition, entry.explanation);
    assert.ok(entry.lessonIds.length > 0, `${entry.id}: lesson provenance`);
    for (const id of entry.lessonIds) assert.ok(lessonIds.has(id), `${entry.id}: unknown lesson ${id}`);
    assert.ok(entry.related.length >= 2, `${entry.id}: related terms`);
    for (const id of entry.related) assert.ok(ids.has(id) && id !== entry.id, `${entry.id}: invalid related term ${id}`);
    assert.equal(new Set(entry.related).size, entry.related.length);
    if (entry.category === "Tools and frameworks") assert.ok(entry.sources.length, `${entry.id}: official tool source`);
    for (const source of entry.sources) {
      assert.ok(source.label.trim());
      const url = new URL(source.url);
      assert.equal(url.protocol, "https:");
      assert.equal(url.username, "");
      assert.equal(url.password, "");
    }
  }
});

test("canonical names and reviewed aliases cannot silently collide", () => {
  const owners = new Map();
  for (const entry of glossary) for (const name of names(entry)) {
    assert.equal(name.trim(), name);
    const key = normalize(name);
    assert.ok(!owners.has(key) || owners.get(key) === entry.id, `${name}: ambiguous alias`);
    owners.set(key, entry.id);
  }
});

test("all 84 lesson concepts resolve to entries associated with that lesson", () => {
  const combined = {
    "PEFT and LoRA": ["PEFT", "LoRA"],
    "Retrieval precision and recall": ["Retrieval precision", "Retrieval recall"],
  };
  for (const lesson of lessons) for (const concept of lesson.concepts) {
    for (const term of combined[concept.term] || [concept.term]) {
      const entry = glossary.find((item) => names(item).some((name) => normalize(name) === normalize(term)));
      assert.ok(entry, `${lesson.id}: missing ${term}`);
      assert.ok(entry.lessonIds.includes(lesson.id), `${lesson.id}: ${term} is not associated`);
    }
  }
});
