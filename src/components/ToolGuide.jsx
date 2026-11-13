import React, { useState } from "react";
import { toolGuide, toolsReviewedOn } from "../data/tools.js";
import { modules, findLesson } from "../data/course.js";
import { glossaryById } from "../glossary.js";
import { toolCategories, toolKinds, searchTools } from "../tools.js";
import Icon from "./Icon.jsx";
import GlossaryText from "./GlossaryText.jsx";
import { useGlossary } from "./GlossaryOverlay.jsx";

export default function ToolGuide() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [kind, setKind] = useState("");
  const [moduleId, setModuleId] = useState("");
  const { dismiss } = useGlossary();
  const tools = searchTools({ query, category, kind, moduleId });
  const change = (setter, value) => {
    dismiss();
    setter(value);
  };
  const reset = () => {
    dismiss();
    setQuery("");
    setCategory("");
    setKind("");
    setModuleId("");
  };
  return (
    <>
      <header className="page-intro">
        <p className="small-label">THE TOOLS BEHIND THE WORK</p>
        <h1>Know the tool. Ask the right question.</h1>
        <p>
          {toolGuide.length} apps, models, libraries, platforms, and learning
          resources from the course and its source materials. Understand their
          role before choosing an approach.
        </p>
      </header>
      <div className="tool-filters tool-directory-filters">
        <label className="search-field">
          <Icon name="search" />
          <span className="sr-only">Search tools</span>
          <input
            type="search"
            value={query}
            onChange={(event) => change(setQuery, event.target.value)}
            placeholder="Search a name, package, or business task…"
          />
        </label>
        <div className="category-filter">
          <label htmlFor="tool-category">Role</label>
          <select
            id="tool-category"
            value={category}
            onChange={(event) => change(setCategory, event.target.value)}
          >
            <option value="">All roles</option>
            {toolCategories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="category-filter">
          <label htmlFor="tool-kind">Type</label>
          <select
            id="tool-kind"
            value={kind}
            onChange={(event) => change(setKind, event.target.value)}
          >
            <option value="">All types</option>
            {toolKinds.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="category-filter">
          <label htmlFor="tool-module">Module</label>
          <select
            id="tool-module"
            value={moduleId}
            onChange={(event) => change(setModuleId, event.target.value)}
          >
            <option value="">All modules</option>
            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.shortTitle}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="tool-results-heading">
        <p className="muted" role="status">
          {tools.length} of {toolGuide.length} entries to explore
        </p>
        <button type="button" className="text-link" onClick={reset}>
          Clear filters
        </button>
      </div>
      <div className="tool-list">
        {tools.map((tool) => (
          <article
            className="tool-row"
            key={tool.id}
            aria-labelledby={`tool-${tool.id}`}
          >
            <div className="tool-name">
              <span className="small-label">{tool.category}</span>
              <h2 id={`tool-${tool.id}`}>{tool.name}</h2>
              <span className="tool-kind">{tool.kind}</span>
              {tool.url && (
                <a href={tool.url} target="_blank" rel="noreferrer">
                  Official source <Icon name="arrow" />
                  <span className="sr-only">
                    {" "}
                    for {tool.name} (opens in a new tab)
                  </span>
                </a>
              )}
              {tool.glossaryId && (
                <a
                  href={`#/glossary/${tool.glossaryId}`}
                  className="tool-glossary-link"
                >
                  Related glossary: {glossaryById.get(tool.glossaryId).term}
                </a>
              )}
            </div>
            <div className="tool-description">
              <p>
                <GlossaryText text={tool.job} />
              </p>
              {tool.statusNote && (
                <p className="tool-status">
                  <strong>Status to know.</strong> {tool.statusNote}
                </p>
              )}
              <details
                className="tool-decision"
                onToggle={(event) => {
                  if (
                    event.target === event.currentTarget &&
                    !event.currentTarget.open
                  )
                    dismiss();
                }}
              >
                <summary>
                  Business example & decision guide
                  <span className="sr-only"> for {tool.name}</span>
                </summary>
                <p className="muted">
                  <strong>Picture this · fictional example.</strong>{" "}
                  <GlossaryText text={tool.example} />
                </p>
                <div className="tool-question">
                  <strong>A question to bring to your team</strong>
                  <p>
                    <GlossaryText text={tool.question} />
                  </p>
                </div>
                <p className="tool-limit">
                  <strong>Keep in mind:</strong>{" "}
                  <GlossaryText text={tool.limit} />
                </p>
                {tool.aliases.length > 0 && (
                  <p className="tool-aliases muted">
                    <strong>Also find it as:</strong> {tool.aliases.join(", ")}
                  </p>
                )}
                <div className="tool-course-context">
                  <h3>Related lessons</h3>
                  <ul>
                    {tool.lessonIds.map((id) => (
                      <li key={id}>
                        <a href={`#/lesson/${id}`}>{findLesson(id).title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <details className="tool-source-context">
                  <summary>Why it is in this guide</summary>
                  <p>{tool.context}</p>
                  {tool.sourcePaths.length > 0 && (
                    <ul>
                      {tool.sourcePaths.map((path) => (
                        <li key={path}>{path}</li>
                      ))}
                    </ul>
                  )}
                  <p>
                    Archive references identify the supplied course materials;
                    they are not downloadable files in this app.
                  </p>
                </details>
              </details>
            </div>
          </article>
        ))}
      </div>
      {!tools.length && (
        <div className="empty-state">
          <h2>No tools found</h2>
          <p>Try another name, a broader task, or fewer filters.</p>
          <button type="button" className="button secondary" onClick={reset}>
            Show all tools
          </button>
        </div>
      )}
      <footer className="course-footer">
        <p>
          Source roles and official references reviewed {toolsReviewedOn}.
          Includes hands-on components and background examples; inclusion is not
          an endorsement or a purchasing recommendation. Model versions are
          grouped where useful. Capabilities, licensing, and availability can
          change.
        </p>
      </footer>
    </>
  );
}
