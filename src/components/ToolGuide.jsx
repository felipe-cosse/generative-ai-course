import React, { useState } from "react";
import { toolGuide } from "../data/tools.js";
import Icon from "./Icon.jsx";
import GlossaryText from "./GlossaryText.jsx";

export default function ToolGuide() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All tools");
  const categories = [
    "All tools",
    ...new Set(toolGuide.map((tool) => tool.category)),
  ];
  const tools = toolGuide.filter(
    (tool) =>
      (category === "All tools" || tool.category === category) &&
      `${tool.name} ${tool.category} ${tool.job}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  return (
    <>
      <header className="page-intro">
        <h1>Know the tool. Ask the right question.</h1>
        <p>
          A field guide to the tools in your course—and the decisions behind
          them.
        </p>
      </header>
      <div className="tool-filters">
        <label className="search-field">
          <Icon name="search" />
          <span className="sr-only">Search tools</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a tool, task, or concept…"
          />
        </label>
        <label className="category-filter">
          Category
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <p className="muted" role="status">
        {tools.length} {tools.length === 1 ? "tool" : "tools"} to explore
      </p>
      <div className="tool-list">
        {tools.map((tool) => (
          <article className="tool-row" key={tool.name}>
            <div className="tool-name">
              <span className="small-label">{tool.category}</span>
              <h2>{tool.name}</h2>
              {tool.url && (
                <a href={tool.url} target="_blank" rel="noreferrer">
                  Official guide <Icon name="arrow" />
                  <span className="sr-only">
                    {" "}
                    for {tool.name} (opens in a new tab)
                  </span>
                </a>
              )}
            </div>
            <div>
              <p>
                <GlossaryText text={tool.job} />
              </p>
              {tool.statusNote && (
                <p className="tool-status">
                  <strong>Status to know.</strong> {tool.statusNote}
                </p>
              )}
              <p className="muted">
                <strong>Picture this.</strong>{" "}
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
            </div>
          </article>
        ))}
      </div>
      {!tools.length && (
        <div className="empty-state">
          <h2>No tools found</h2>
          <p>Try a broader search or another category.</p>
          <button
            className="button secondary"
            onClick={() => {
              setQuery("");
              setCategory("All tools");
            }}
          >
            Show all tools
          </button>
        </div>
      )}
      <footer className="course-footer">
        <p>
          Tool roles were checked against official documentation on November 13,
          2026. These are examples, not rankings or purchasing recommendations.
          Capabilities, terms, and availability change.
        </p>
      </footer>
    </>
  );
}
