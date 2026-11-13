import { glossary } from "./data/glossary.js";
import { modules } from "./data/course.js";

export const entries = [...glossary].sort((a, b) =>
  a.term.localeCompare(b.term),
);
export const glossaryById = new Map(entries.map((entry) => [entry.id, entry]));
export const categories = [...new Set(glossary.map((entry) => entry.category))];
export const termsForLesson = (id) =>
  entries.filter((entry) => entry.lessonIds.includes(id));
const normalize = (text) => text.trim().toLocaleLowerCase("en");
const searchIndex = entries.map((entry) => ({
  entry,
  names: [entry.term, entry.fullName, ...entry.aliases]
    .filter(Boolean)
    .map(normalize),
  definition: normalize(entry.definition),
  modules: modules
    .filter((module) =>
      module.lessons.some((lesson) => entry.lessonIds.includes(lesson.id)),
    )
    .map((module) => module.id),
}));

export function searchGlossary({
  query = "",
  category = "",
  moduleId = "",
  letter = "",
} = {}) {
  const needle = normalize(query);
  return searchIndex
    .flatMap((item) => {
      if (
        (category && item.entry.category !== category) ||
        (moduleId && !item.modules.includes(moduleId)) ||
        (letter && item.entry.term[0].toUpperCase() !== letter)
      )
        return [];
      const rank =
        !needle || item.names.includes(needle)
          ? 0
          : item.names.some((name) => name.startsWith(needle))
            ? 1
            : item.names.some((name) => name.includes(needle))
              ? 2
              : item.definition.includes(needle)
                ? 3
                : -1;
      return rank < 0 ? [] : [{ entry: item.entry, rank }];
    })
    .sort((a, b) => a.rank - b.rank || a.entry.term.localeCompare(b.entry.term))
    .map((item) => item.entry);
}
