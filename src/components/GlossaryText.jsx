import React, { useId, useMemo } from "react";
import { segmentGlossaryText, termsForLesson } from "../glossary.js";
import { useGlossary } from "./GlossaryOverlay.jsx";

export function GlossaryTerm({ entry, children, className = "glossary-term" }) {
  const lookup = useGlossary();
  const descriptionId = useId();
  return (
    <button
      type="button"
      className={className}
      data-glossary-id={entry.id}
      aria-haspopup="dialog"
      aria-describedby={
        lookup.previewId === descriptionId ? descriptionId : undefined
      }
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch")
          lookup.show(entry, event.currentTarget, descriptionId, "hover");
      }}
      onPointerLeave={(event) => lookup.leave(event.currentTarget, "hover")}
      onFocus={(event) =>
        lookup.show(entry, event.currentTarget, descriptionId, "focus")
      }
      onBlur={(event) => lookup.leave(event.currentTarget, "focus")}
      onClick={(event) => lookup.open(entry, event.currentTarget)}
    >
      {children || entry.term}
    </button>
  );
}

export default function GlossaryText({ text, lessonId }) {
  const segments = useMemo(
    () => segmentGlossaryText(text, lessonId),
    [text, lessonId],
  );
  return segments.map((segment, index) =>
    segment.entry ? (
      <GlossaryTerm key={index} entry={segment.entry}>
        {segment.text}
      </GlossaryTerm>
    ) : (
      segment.text
    ),
  );
}

export function LessonTerms({ lessonId }) {
  const terms = termsForLesson(lessonId);
  return (
    <details className="lesson-terms">
      <summary>
        Terms in this lesson <span>{terms.length} definitions</span>
      </summary>
      <p>
        Hover or focus for a quick definition. Select a term for an example and
        more. Definitions are available during practice.
      </p>
      <ul>
        {terms.map((entry) => (
          <li key={entry.id}>
            <GlossaryTerm entry={entry} className="glossary-term-chip" />
          </li>
        ))}
      </ul>
      <a className="text-link" href="#/glossary">
        Explore the full glossary
      </a>
    </details>
  );
}
