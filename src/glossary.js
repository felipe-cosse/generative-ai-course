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
  // Short searches such as RAG must not match unrelated words such as storage.
  const shortWord =
    needle && needle.length <= 3
      ? new RegExp(
          `(?<![\\p{L}\\p{M}\\p{N}_])${escapePattern(needle)}(?![\\p{L}\\p{M}\\p{N}_])`,
          "u",
        )
      : null;
  const contains = (text) =>
    shortWord ? shortWord.test(text) : text.includes(needle);
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
            : item.names.some(contains)
              ? 2
              : contains(item.definition)
                ? 3
                : -1;
      return rank < 0 ? [] : [{ entry: item.entry, rank }];
    })
    .sort((a, b) => a.rank - b.rank || a.entry.term.localeCompare(b.entry.term))
    .map((item) => item.entry);
}

const wordCharacter = /[\p{L}\p{M}\p{N}_]/u;
const caseSensitiveNames = new Set([
  "Whisper",
  "Llama",
  "Chroma",
  "Runway",
  "Phoenix",
]);
const escapePattern = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const matchIndex = entries.flatMap((entry) =>
  [
    ...new Set(
      entry.inlineAliases ||
        [entry.term, entry.fullName, ...entry.aliases].filter(Boolean),
    ),
  ].map((text) => ({
    entry,
    pattern: new RegExp(
      escapePattern(text),
      /^[A-Z\d-]{2,}$/.test(text) || caseSensitiveNames.has(text)
        ? "gu"
        : "giu",
    ),
  })),
);

export function segmentGlossaryText(text, lessonId) {
  const candidates = [];
  for (const { entry, pattern } of matchIndex) {
    if (lessonId && !entry.lessonIds.includes(lessonId)) continue;
    pattern.lastIndex = 0;
    for (const match of text.matchAll(pattern)) {
      const start = match.index,
        end = start + match[0].length;
      const before = Array.from(text.slice(0, start)).at(-1) || "";
      const after = Array.from(text.slice(end))[0] || "";
      if (wordCharacter.test(before) || wordCharacter.test(after)) continue;
      candidates.push({ start, end, entry });
    }
  }
  candidates.sort(
    (a, b) =>
      a.start - b.start ||
      b.end - a.end ||
      a.entry.id.localeCompare(b.entry.id),
  );
  const segments = [],
    seen = new Set();
  let cursor = 0;
  for (const candidate of candidates) {
    if (candidate.start < cursor) continue;
    if (candidate.start > cursor)
      segments.push({ text: text.slice(cursor, candidate.start) });
    segments.push({
      text: text.slice(candidate.start, candidate.end),
      entry: seen.has(candidate.entry.id) ? undefined : candidate.entry,
    });
    seen.add(candidate.entry.id);
    cursor = candidate.end;
  }
  if (cursor < text.length) segments.push({ text: text.slice(cursor) });
  return segments;
}
