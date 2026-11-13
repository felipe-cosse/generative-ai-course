import React from "react";
import { findLesson } from "../data/course.js";
import { glossaryById } from "../glossary.js";

export default function GlossaryEntry({
  entry,
  onRelated,
  onNavigate,
  showDefinition = true,
}) {
  return (
    <div className="glossary-entry">
      {entry.fullName && <p className="glossary-full-name">{entry.fullName}</p>}
      {showDefinition && (
        <p className="glossary-definition">{entry.definition}</p>
      )}
      <dl className="glossary-explanation">
        <div>
          <dt>In plain language</dt>
          <dd>{entry.explanation}</dd>
        </div>
        <div>
          <dt>
            In the meeting room <span>· fictional example</span>
          </dt>
          <dd>{entry.example}</dd>
        </div>
        <div>
          <dt>Why it matters</dt>
          <dd>{entry.whyItMatters}</dd>
        </div>
        <div>
          <dt>A common confusion</dt>
          <dd>{entry.confusion}</dd>
        </div>
      </dl>
      {entry.aliases.length > 0 && (
        <p className="muted glossary-aliases">
          <strong>Also find it as:</strong> {entry.aliases.join(", ")}
        </p>
      )}
      <div className="glossary-links">
        <h3>Connect the ideas</h3>
        <ul>
          {entry.related.map((id) => (
            <li key={id}>
              {onRelated ? (
                <button
                  type="button"
                  className="text-link"
                  onClick={() => onRelated(id)}
                >
                  {glossaryById.get(id).term}
                </button>
              ) : (
                <a href={`#/glossary/${id}`}>{glossaryById.get(id).term}</a>
              )}
            </li>
          ))}
        </ul>
        <h3>Learn in context</h3>
        <ul>
          {entry.lessonIds.map((id) => (
            <li key={id}>
              <a href={`#/lesson/${id}`} onClick={() => onNavigate?.(id)}>
                {findLesson(id).title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <details className="glossary-sources">
        <summary>Sources and course context</summary>
        <p>
          Original management explanation based on the linked lessons and their
          supplied archive references. Business examples are fictional.
        </p>
        {entry.sources.length > 0 && (
          <ul>
            {entry.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
        {entry.category === "Tools and frameworks" && (
          <p>
            Tool roles describe the course examples. Check the official
            documentation for current capabilities and availability.
          </p>
        )}
      </details>
    </div>
  );
}
