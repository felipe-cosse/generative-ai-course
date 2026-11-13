import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import path from "node:path";
import { toolGuide } from "../src/data/tools.js";
import { glossary } from "../src/data/glossary.js";
import { lessons } from "../src/data/course.js";

const inventory = JSON.parse(
  readFileSync(new URL("../docs/tools-inventory.json", import.meta.url)),
);
const glossaryIds = new Set(glossary.map((entry) => entry.id));
const lessonIds = new Set(lessons.map((lesson) => lesson.id));
const categories = new Set([
  "Assistants & models",
  "Training & adaptation",
  "Knowledge & retrieval",
  "Images & vision",
  "Audio & video",
  "Evaluation & observability",
  "Applications & orchestration",
  "Workspaces & infrastructure",
  "Data & analysis",
]);
const kinds = new Set([
  "Application",
  "Model family",
  "Library",
  "Framework",
  "Platform / service",
  "Database / storage",
  "Runtime / infrastructure",
  "Developer tool",
  "Dataset / benchmark",
  "Standard / protocol",
  "Example system",
  "Hardware",
]);

test("the tools catalog covers every approved inventory identity exactly once", () => {
  assert.deepEqual(
    toolGuide.map((tool) => tool.name).sort(),
    inventory.map((item) => item.name).sort(),
  );
  assert.equal(
    new Set(toolGuide.map((tool) => tool.id)).size,
    toolGuide.length,
  );
  for (const item of inventory)
    assert.equal(toolGuide.find((tool) => tool.name === item.name).id, item.id);
});

test("every catalog entry has management guidance, valid filters, and source context", () => {
  for (const tool of toolGuide) {
    assert.match(tool.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(categories.has(tool.category), `${tool.name}: category`);
    assert.ok(kinds.has(tool.kind), `${tool.name}: type`);
    for (const field of [
      "name",
      "job",
      "example",
      "question",
      "limit",
      "context",
    ]) {
      assert.equal(typeof tool[field], "string", `${tool.name}.${field}`);
      assert.ok(tool[field].trim(), `${tool.name}.${field}`);
      assert.ok(
        !/```|<script|TODO|TBD|lorem ipsum/i.test(tool[field]),
        `${tool.name}.${field}: code or placeholder`,
      );
    }
    assert.ok(
      tool.job.split(/\s+/).length >= 15,
      `${tool.name}: role explanation`,
    );
    assert.match(tool.question, /\?$/);
    assert.ok(
      tool.lessonIds.length > 0 &&
        tool.lessonIds.every((id) => lessonIds.has(id)),
      `${tool.name}: lessons`,
    );
    assert.ok(tool.sourcePaths.length > 0, `${tool.name}: archive evidence`);
    if (tool.glossaryId)
      assert.ok(glossaryIds.has(tool.glossaryId), `${tool.name}: glossary`);
    assert.ok(
      tool.aliases.every(
        (alias) =>
          typeof alias === "string" &&
          alias.trim() === alias &&
          alias.length > 0,
      ),
    );
    assert.equal(
      new Set(tool.aliases.map((alias) => alias.toLowerCase())).size,
      tool.aliases.length,
      `${tool.name}: duplicate aliases`,
    );
    if (tool.url === null) {
      assert.ok(
        ["nasa-mission-intelligence", "omnitrainer"].includes(tool.id),
        `${tool.name}: needs primary link`,
      );
    } else {
      const url = new URL(tool.url);
      assert.equal(url.protocol, "https:", tool.name);
      assert.equal(url.username, "");
      assert.equal(url.password, "");
    }
  }
});

test("all existing glossary tools and educational projects link into the guide", () => {
  for (const entry of glossary.filter((entry) =>
    ["Tools and frameworks", "Course projects"].includes(entry.category),
  )) {
    assert.ok(
      toolGuide.some((tool) => tool.glossaryId === entry.id),
      `Missing ${entry.term}`,
    );
  }
});

test("catalog provenance matches the reviewed inventory and stays within the archive", () => {
  for (const tool of toolGuide) {
    const record = inventory.find((item) => item.id === tool.id);
    assert.deepEqual(tool.sourcePaths, record.sourcePaths);
    for (const source of tool.sourcePaths) {
      assert.ok(!path.isAbsolute(source) && !path.win32.isAbsolute(source));
      assert.ok(
        !/[\\\0]/.test(source) &&
          !source.split("/").some((part) => ["..", ".", ""].includes(part)),
      );
    }
  }
});

test(
  "tool evidence exists in the supplied original archive",
  { skip: !process.env.SOURCE_ARCHIVE },
  () => {
    for (const tool of toolGuide)
      for (const source of tool.sourcePaths) {
        assert.ok(
          statSync(path.join(process.env.SOURCE_ARCHIVE, source)).isFile(),
          `${tool.name}: ${source}`,
        );
      }
  },
);

test("verified discontinued and unmaintained tools carry visible lifecycle notes", () => {
  for (const id of ["sora", "dall-e", "torchserve"]) {
    const tool = toolGuide.find((item) => item.id === id);
    assert.ok(
      tool?.statusNote?.trim(),
      `${id}: lifecycle note must be visible without expanding a card`,
    );
    assert.match(
      `${tool.job} ${tool.limit} ${tool.statusNote}`,
      /historical|discontinu|retir|archiv|no longer/i,
    );
  }
});
