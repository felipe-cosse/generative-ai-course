import { toolGuide } from "./data/tools.js";
import { modules } from "./data/course.js";

export const sortedTools = [...toolGuide].sort((a, b) =>
  a.name.localeCompare(b.name),
);
export const toolCategories = [
  ...new Set(toolGuide.map((tool) => tool.category)),
].sort();
export const toolKinds = [
  ...new Set(toolGuide.map((tool) => tool.kind)),
].sort();
const normalize = (text) => text.trim().toLocaleLowerCase("en");
const index = sortedTools.map((tool) => ({
  tool,
  name: normalize(tool.name),
  names: [tool.name, ...tool.aliases].map(normalize),
  text: normalize(
    [
      tool.category,
      tool.kind,
      tool.job,
      tool.example,
      tool.question,
      tool.limit,
      tool.context,
      tool.statusNote || "",
    ].join(" "),
  ),
  modules: modules
    .filter((module) =>
      module.lessons.some((lesson) => tool.lessonIds.includes(lesson.id)),
    )
    .map((module) => module.id),
}));

export function searchTools({
  query = "",
  category = "",
  kind = "",
  moduleId = "",
} = {}) {
  const needle = normalize(query);
  const words = needle.split(/\s+/).filter(Boolean);
  const contains = (text, word) =>
    word.length > 3
      ? text.includes(word)
      : text.split(/[^\p{L}\p{M}\p{N}_]+/u).includes(word);
  return index
    .flatMap((item) => {
      if (
        (category && item.tool.category !== category) ||
        (kind && item.tool.kind !== kind) ||
        (moduleId && !item.modules.includes(moduleId))
      )
        return [];
      const rank =
        !needle || item.name === needle
          ? 0
          : item.names.includes(needle)
            ? 1
            : item.names.some((name) => name.startsWith(needle))
              ? 2
              : item.names.some((name) => contains(name, needle))
                ? 3
                : words.every((word) =>
                      contains(`${item.names.join(" ")} ${item.text}`, word),
                    )
                  ? 4
                  : -1;
      return rank < 0 ? [] : [{ tool: item.tool, rank }];
    })
    .sort((a, b) => a.rank - b.rank || a.tool.name.localeCompare(b.tool.name))
    .map((item) => item.tool);
}
