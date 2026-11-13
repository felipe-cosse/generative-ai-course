import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { modules, lessons } from "../src/data/course.js";

const publicRoot = fileURLToPath(new URL("../public/", import.meta.url));
const range = (first, last) =>
  Array.from({ length: last - first + 1 }, (_, i) => first + i);
const expected = [
  { id: "fundamentals", prefix: "f", sections: [1, 2, ...range(4, 20)] },
  { id: "rag", prefix: "r", sections: range(1, 18) },
  { id: "multimodal", prefix: "m", sections: range(1, 45) },
];

function text(value, label) {
  assert.equal(typeof value, "string", `${label} must be text`);
  assert.ok(value.trim().length > 0, `${label} must not be empty`);
}

function fields(value, names, label) {
  assert.ok(value && typeof value === "object", `${label} must exist`);
  for (const name of names) text(value[name], `${label}.${name}`);
}

function safeRelative(value, label) {
  text(value, label);
  assert.ok(
    !path.posix.isAbsolute(value) && !path.win32.isAbsolute(value),
    `${label} must be relative`,
  );
  assert.ok(
    !/[\\\0]/.test(value) && !/^[a-z][a-z\d+.-]*:/i.test(value),
    `${label} must be a local path`,
  );
  assert.ok(
    value.split("/").every((part) => part && part !== "." && part !== ".."),
    `${label} must not traverse directories`,
  );
  assert.equal(
    path.posix.normalize(value),
    value,
    `${label} must be normalized`,
  );
}

test("the curriculum exports three ordered modules and 24 unique stable lesson IDs", () => {
  assert.deepEqual(
    modules.map((module) => module.id),
    expected.map((module) => module.id),
  );
  assert.deepEqual(
    modules.map((module) => module.number),
    [1, 2, 3],
  );
  const ids = expected.flatMap(({ prefix }) =>
    range(1, 8).map((number) => `${prefix}${number}`),
  );
  assert.deepEqual(
    lessons.map((lesson) => lesson.id),
    ids,
  );
  assert.equal(new Set(lessons.map((lesson) => lesson.id)).size, 24);
  assert.deepEqual(
    lessons,
    modules.flatMap((module) => module.lessons),
  );
});

for (const [index, module] of modules.entries()) {
  test(`${module.id}: every original section is covered once in source order`, () => {
    fields(
      module,
      ["title", "shortTitle", "description", "image", "sourceRoot"],
      module.id,
    );
    assert.equal(module.lessons.length, 8);
    assert.deepEqual(
      module.lessons.flatMap((lesson) => lesson.sourceSections),
      expected[index].sections,
    );
    for (const lesson of module.lessons) {
      assert.ok(
        Array.isArray(lesson.sourceSections) &&
          lesson.sourceSections.length > 0,
        `${lesson.id} has source coverage`,
      );
      assert.ok(
        lesson.sourceSections.every(Number.isInteger),
        `${lesson.id} section IDs are integers`,
      );
    }
  });

  test(`${module.id}: lessons contain complete teaching, concepts, tools, and examples`, () => {
    for (const lesson of module.lessons) {
      const id = lesson.id;
      fields(lesson, ["title", "outcome", "takeaway", "reflection"], id);
      assert.ok(
        Number.isFinite(lesson.minutes) && lesson.minutes > 0,
        `${id} has a positive duration`,
      );
      assert.ok(
        Array.isArray(lesson.sections) && lesson.sections.length >= 3,
        `${id} has at least three teaching sections`,
      );
      for (const section of lesson.sections)
        fields(section, ["heading", "body"], `${id} section`);
      const prose = lesson.sections.map((section) => section.body).join(" ");
      assert.ok(
        prose.trim().split(/\s+/u).length > 250,
        `${id} has more than 250 words of teaching prose`,
      );
      assert.ok(!prose.includes("```"), `${id} does not show fenced code`);
      assert.ok(
        Array.isArray(lesson.concepts) && lesson.concepts.length >= 2,
        `${id} explains key concepts`,
      );
      for (const concept of lesson.concepts)
        fields(concept, ["term", "explanation"], `${id} concept`);
      assert.ok(
        Array.isArray(lesson.tools) && lesson.tools.length > 0,
        `${id} explains tools`,
      );
      for (const tool of lesson.tools)
        fields(tool, ["name", "role"], `${id} tool`);
      fields(
        lesson.example,
        ["title", "context", "decision", "result"],
        `${id} example`,
      );
      fields(lesson.visual, ["title", "caption"], `${id} visual`);
      assert.ok(
        Array.isArray(lesson.visual.steps) && lesson.visual.steps.length >= 3,
        `${id} diagram has at least three steps`,
      );
      for (const step of lesson.visual.steps)
        fields(step, ["label", "detail"], `${id} diagram step`);
    }
  });

  test(`${module.id}: quizzes and activities provide valid choices and explanatory feedback`, () => {
    for (const lesson of module.lessons) {
      const id = lesson.id;
      assert.equal(lesson.quiz.length, 2, `${id} has two quiz questions`);
      for (const [questionIndex, question] of lesson.quiz.entries()) {
        const label = `${id} question ${questionIndex + 1}`;
        fields(question, ["question", "explanation"], label);
        assert.equal(question.options.length, 3, `${label} has three options`);
        for (const option of question.options) text(option, `${label} option`);
        assert.equal(
          new Set(question.options).size,
          3,
          `${label} has distinct options`,
        );
        assert.ok(
          Number.isInteger(question.answer) &&
            question.answer >= 0 &&
            question.answer < 3,
          `${label} has a valid correct answer`,
        );
      }
      fields(lesson.activity, ["title", "prompt"], `${id} activity`);
      assert.equal(
        lesson.activity.options.length,
        3,
        `${id} activity has three options`,
      );
      for (const option of lesson.activity.options)
        fields(option, ["label", "feedback"], `${id} activity option`);
      assert.equal(
        new Set(lesson.activity.options.map((option) => option.label)).size,
        3,
        `${id} activity choices are distinct`,
      );
      assert.ok(
        Number.isInteger(lesson.activity.best) &&
          lesson.activity.best >= 0 &&
          lesson.activity.best < 3,
        `${id} activity has a valid best choice`,
      );
    }
  });

  test(`${module.id}: images exist and source references stay inside the module`, () => {
    assert.ok(
      module.image.startsWith("/images/"),
      `${module.id} image is served from the local image directory`,
    );
    safeRelative(module.image.slice(1), `${module.id} image`);
    assert.ok(
      statSync(path.join(publicRoot, module.image.slice(1))).isFile(),
      `${module.id} image exists`,
    );
    safeRelative(module.sourceRoot, `${module.id} sourceRoot`);
    for (const lesson of module.lessons) {
      assert.ok(
        Array.isArray(lesson.sources) && lesson.sources.length > 0,
        `${lesson.id} has source references`,
      );
      for (const source of lesson.sources) {
        fields(source, ["label", "path"], `${lesson.id} source`);
        safeRelative(source.path, `${lesson.id} source path`);
        assert.ok(
          source.path.startsWith(`${module.sourceRoot}/`),
          `${lesson.id} source belongs to its module`,
        );
        assert.ok(
          source.path.endsWith(".md"),
          `${lesson.id} source references a Markdown lesson`,
        );
        const sectionDirectory = source.path
          .slice(module.sourceRoot.length + 1)
          .split("/")[0];
        const sectionNumber = Number(sectionDirectory.match(/^(\d+) - /)?.[1]);
        assert.ok(
          lesson.sourceSections.includes(sectionNumber),
          `${lesson.id} source belongs to its declared source sections`,
        );
      }
    }
  });
}

test(
  "source references exist in the supplied original archive",
  { skip: !process.env.SOURCE_ARCHIVE },
  () => {
    const archiveRoot = path.resolve(process.env.SOURCE_ARCHIVE);
    assert.ok(
      statSync(archiveRoot).isDirectory(),
      "SOURCE_ARCHIVE must point to the archive directory",
    );
    for (const lesson of lessons) {
      for (const source of lesson.sources) {
        safeRelative(source.path, `${lesson.id} source path`);
        assert.ok(
          statSync(path.join(archiveRoot, source.path)).isFile(),
          `${lesson.id}: ${source.path} exists`,
        );
      }
    }
  },
);
