import React, { useState } from "react";
import { modules } from "../data/course.js";
import {
  entries,
  glossaryById,
  categories,
  searchGlossary,
} from "../glossary.js";
import GlossaryEntry from "./GlossaryEntry.jsx";
import Icon from "./Icon.jsx";

export default function Glossary({ id }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [letter, setLetter] = useState("");
  const results = searchGlossary({ query, category, moduleId, letter });
  const reset = () => {
    setQuery("");
    setCategory("");
    setModuleId("");
    setLetter("");
  };
  if (id) {
    const entry = glossaryById.get(id);
    return (
      <div className="glossary-detail-page">
        <a href="#/glossary" className="text-link">
          <Icon name="back" /> Back to glossary
        </a>
        {entry ? (
          <>
            <header className="page-intro">
              <p className="small-label">{entry.category}</p>
              <h1 tabIndex={-1}>{entry.term}</h1>
            </header>
            <GlossaryEntry entry={entry} />
          </>
        ) : (
          <div className="empty-state">
            <h1 tabIndex={-1}>That term isn't in the glossary.</h1>
            <p>Browse all terms or search for another spelling.</p>
          </div>
        )}
      </div>
    );
  }
  return (
    <>
      <header className="page-intro">
        <p className="small-label">A FIELD GUIDE TO THE LANGUAGE OF AI</p>
        <h1>A little clarity goes a long way.</h1>
        <p>
          {entries.length} concepts, tools, and management ideas. Plain-language
          definitions, practical examples, and the connections between them.
        </p>
      </header>
      <div className="tool-filters glossary-filters">
        <label className="search-field">
          <Icon name="search" />
          <span className="sr-only">Search glossary</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try RAG, token, or fine-tuning…"
          />
        </label>
        <div className="category-filter">
          <label htmlFor="glossary-category">Category</label>
          <select
            id="glossary-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">All categories</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="category-filter">
          <label htmlFor="glossary-module">Module</label>
          <select
            id="glossary-module"
            value={moduleId}
            onChange={(event) => setModuleId(event.target.value)}
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
      <div
        className="glossary-alphabet"
        role="group"
        aria-label="Filter terms by first letter"
      >
        {["", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((value) => (
          <button
            type="button"
            key={value}
            aria-pressed={letter === value}
            onClick={() => setLetter(value)}
          >
            {value || "All"}
          </button>
        ))}
      </div>
      <div className="glossary-results-heading">
        <p role="status" className="muted">
          {results.length} {results.length === 1 ? "term" : "terms"} to explore
        </p>
        <button type="button" className="text-link" onClick={reset}>
          Clear filters
        </button>
      </div>
      <div className="glossary-list">
        {results.map((entry) => (
          <details className="glossary-row" key={entry.id}>
            <summary>
              <span className="glossary-row-title">{entry.term}</span>
              <span className="small-label">{entry.category}</span>
              <span className="glossary-row-definition">
                {entry.definition}
              </span>
            </summary>
            <GlossaryEntry entry={entry} showDefinition={false} />
            <a
              className="text-link glossary-permalink"
              href={`#/glossary/${entry.id}`}
            >
              Open permanent link <Icon name="arrow" />
            </a>
          </details>
        ))}
      </div>
      {!results.length && (
        <div className="empty-state">
          <h2>No terms found</h2>
          <p>Try a shorter phrase, an acronym, or fewer filters.</p>
          <button className="button secondary" type="button" onClick={reset}>
            Show all terms
          </button>
        </div>
      )}
    </>
  );
}
