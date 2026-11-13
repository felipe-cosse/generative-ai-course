import test from "node:test";
import assert from "node:assert/strict";
import {
  searchTools,
  sortedTools,
  toolCategories,
  toolKinds,
} from "../src/tools.js";
import { findModule } from "../src/data/course.js";

test("tool search resolves precise aliases and ranks exact products ahead of family aliases", () => {
  assert.equal(searchTools({ query: " cv2 " })[0].id, "opencv");
  assert.equal(searchTools({ query: "torch" })[0].id, "pytorch");
  assert.equal(searchTools({ query: "pylance" })[0].id, "lance");
  assert.equal(searchTools({ query: "GPT-2" })[0].id, "gpt-2");
  assert.equal(searchTools({ query: "Triton" })[0].id, "triton");
  assert.equal(
    searchTools({ query: "Triton Inference" })[0].id,
    "nvidia-triton-inference-server",
  );
  assert.ok(
    searchTools({ query: "discontinued" }).some((tool) => tool.id === "sora"),
  );
  assert.deepEqual(searchTools({ query: "[unfindable]" }), []);
});

test("role, type, module, and text filters combine and clearing restores every entry", () => {
  const filtered = searchTools({
    category: "Data & analysis",
    kind: "Library",
    moduleId: "rag",
  });
  assert.ok(filtered.some((tool) => tool.id === "numpy"));
  assert.ok(
    filtered.every(
      (tool) =>
        tool.category === "Data & analysis" &&
        tool.kind === "Library" &&
        tool.lessonIds.some((id) => findModule(id).id === "rag"),
    ),
  );
  assert.ok(
    searchTools({ query: "NumPy", category: "Audio & video" }).length === 0,
  );
  assert.deepEqual(searchTools(), sortedTools);
  assert.equal(sortedTools.length, 253);
  assert.equal(toolCategories.length, 9);
  assert.ok(toolKinds.includes("Example system"));
});

test("every canonical tool and alias can be found by search", () => {
  for (const tool of sortedTools) {
    assert.equal(searchTools({ query: tool.name })[0].id, tool.id, tool.name);
    for (const alias of tool.aliases)
      assert.ok(
        searchTools({ query: alias }).some((match) => match.id === tool.id),
        `${tool.name}: ${alias}`,
      );
  }
});
