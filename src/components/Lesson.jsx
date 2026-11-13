import React, { useState } from "react";
import { findLesson, findModule, lessons } from "../data/course.js";
import Icon from "./Icon.jsx";
import { Activity, Quiz } from "./Exercises.jsx";
import GlossaryText, { LessonTerms } from "./GlossaryText.jsx";
import { useGlossary } from "./GlossaryOverlay.jsx";

export function LessonContent({ lesson }) {
  return (
    <>
      <div className="article-prose">
        <section>
          <h2>{lesson.sections[0].heading}</h2>
          <p>
            <GlossaryText text={lesson.sections[0].body} lessonId={lesson.id} />
          </p>
        </section>
      </div>
      <figure className="concept-visual">
        <h3>{lesson.visual.title}</h3>
        <ol>
          {lesson.visual.steps.map((step, index) => (
            <li key={step.label}>
              <span className="step-number">0{index + 1}</span>
              <strong>{step.label}</strong>
              <span>
                <GlossaryText text={step.detail} lessonId={lesson.id} />
              </span>
            </li>
          ))}
        </ol>
        <figcaption>
          <GlossaryText text={lesson.visual.caption} lessonId={lesson.id} />
        </figcaption>
      </figure>
      <div className="article-prose">
        {lesson.sections.slice(1).map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>
              <GlossaryText text={section.body} lessonId={lesson.id} />
            </p>
          </section>
        ))}
      </div>
      <section className="concepts">
        <h2>A few ideas to take with you</h2>
        <dl>
          {lesson.concepts.map((concept) => (
            <div key={concept.term}>
              <dt>{concept.term}</dt>
              <dd>
                <GlossaryText text={concept.explanation} lessonId={lesson.id} />
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="business-case">
        <span className="small-label">
          IN THE MEETING ROOM · FICTIONAL EXAMPLE
        </span>
        <h2>{lesson.example.title}</h2>
        <p>
          <GlossaryText text={lesson.example.context} lessonId={lesson.id} />
        </p>
        <p>
          <strong>The decision.</strong>{" "}
          <GlossaryText text={lesson.example.decision} lessonId={lesson.id} />
        </p>
        <p>
          <strong>What to look for.</strong>{" "}
          <GlossaryText text={lesson.example.result} lessonId={lesson.id} />
        </p>
      </section>
      <section className="lesson-tools">
        <h2>The tools, in plain language</h2>
        {lesson.tools.map((tool) => (
          <p key={tool.name}>
            <strong>{tool.name}</strong>
            <span>
              <GlossaryText text={tool.role} lessonId={lesson.id} />
            </span>
          </p>
        ))}
        <a className="text-link" href="#/tools">
          Explore the tool guide
          <Icon name="arrow" />
        </a>
      </section>
      <aside className="takeaway">
        <Icon name="spark" />
        <div>
          <h3>The manager's takeaway</h3>
          <p>
            <GlossaryText text={lesson.takeaway} lessonId={lesson.id} />
          </p>
        </div>
      </aside>
      <details className="sources">
        <summary>About this lesson & source material</summary>
        <p>
          Original management adaptation of source sections{" "}
          {lesson.sourceSections.join(", ")}. These are references to the
          supplied local archive; source files are not distributed with this
          course.
        </p>
        <ul>
          {lesson.sources.map((source) => (
            <li key={source.path}>
              <strong>{source.label}</strong>
              <span>{source.path}</span>
            </li>
          ))}
        </ul>
        <p>
          Activities use fictional, fixed examples. Product capabilities and
          availability can change; consult official documentation before
          choosing a service.
        </p>
      </details>
    </>
  );
}

export default function Lesson({
  id,
  completed = [],
  bestScore = 0,
  note = "",
  onSaveNote,
  onScore,
}) {
  const { dismiss } = useGlossary();
  const [tab, setTab] = useState("learn");
  const [draft, setDraft] = useState(note);
  const [noteStatus, setNoteStatus] = useState("");
  const lesson = findLesson(id);
  const module = findModule(id);
  const index = module.lessons.indexOf(lesson);
  const nextLesson = lessons[lessons.indexOf(lesson) + 1];
  const tabs = [
    { id: "learn", label: "Learn", icon: "book" },
    { id: "try", label: "Try it", icon: "spark" },
    { id: "check", label: "Knowledge check", icon: "check" },
  ];
  const changeTab = (next) => {
    dismiss();
    setTab(next);
    requestAnimationFrame(() =>
      document.getElementById(`tab-${next}`)?.focus(),
    );
  };
  const onTabKey = (event) => {
    const current = tabs.findIndex((item) => item.id === tab);
    const next =
      event.key === "ArrowRight"
        ? (current + 1) % 3
        : event.key === "ArrowLeft"
          ? (current + 2) % 3
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? 2
              : -1;
    if (next >= 0) {
      event.preventDefault();
      changeTab(tabs[next].id);
    }
  };
  const saveReflection = (event) => {
    event.preventDefault();
    setNoteStatus(
      onSaveNote(draft)
        ? "Reflection saved in this browser."
        : "Kept for this session. Browser storage is unavailable; download your playbook.",
    );
  };
  return (
    <>
      <header className="lesson-heading">
        <p className="lesson-position">
          Lesson {index + 1} of 8 <span>·</span> {lesson.minutes} min
        </p>
        <h1>{lesson.title}</h1>
        <p>{lesson.outcome}</p>
      </header>
      <div className="lesson-layout">
        <article>
          <div
            className="tabs"
            role="tablist"
            aria-label="Lesson sections"
            onKeyDown={onTabKey}
          >
            {tabs.map((item) => (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                role="tab"
                aria-selected={tab === item.id}
                aria-controls={`panel-${item.id}`}
                tabIndex={tab === item.id ? 0 : -1}
                onClick={() => changeTab(item.id)}
              >
                <Icon name={item.icon} />
                {item.label}
              </button>
            ))}
          </div>
          <LessonTerms lessonId={id} />
          {tabs.map((item) => (
            <div
              key={item.id}
              id={`panel-${item.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${item.id}`}
              hidden={tab !== item.id}
              tabIndex="0"
            >
              {item.id === "learn" && (
                <>
                  <LessonContent lesson={lesson} />
                  <div className="lesson-actions">
                    <a className="text-link" href="#/playbook">
                      <Icon name="note" />
                      My playbook
                    </a>
                    <button className="button" onClick={() => changeTab("try")}>
                      Try a decision
                      <Icon name="arrow" />
                    </button>
                  </div>
                </>
              )}
              {item.id === "try" && (
                <>
                  <Activity lesson={lesson} />
                  <form className="note-editor" onSubmit={saveReflection}>
                    <h3>Make it yours</h3>
                    <label htmlFor="reflection">{lesson.reflection}</label>
                    <textarea
                      id="reflection"
                      value={draft}
                      onChange={(event) => {
                        setDraft(event.target.value);
                        setNoteStatus(
                          onSaveNote(event.target.value)
                            ? "Saved automatically in this browser."
                            : "Kept for this session. Download your playbook before leaving.",
                        );
                      }}
                      maxLength={5000}
                      placeholder="A thought to bring to your team…"
                    />
                    <div>
                      <button className="button secondary" type="submit">
                        Save reflection
                      </button>
                      <span role="status">{noteStatus}</span>
                    </div>
                  </form>
                  <div className="lesson-actions">
                    <button
                      className="text-link icon-button-auto"
                      onClick={() => changeTab("learn")}
                    >
                      <Icon name="back" />
                      Back to lesson
                    </button>
                    <button
                      className="button"
                      onClick={() => changeTab("check")}
                    >
                      Knowledge check
                      <Icon name="arrow" />
                    </button>
                  </div>
                </>
              )}
              {item.id === "check" && (
                <Quiz
                  lesson={lesson}
                  bestScore={bestScore}
                  onScore={onScore}
                  nextLabel={
                    nextLesson ? "Next lesson" : "Build my pilot brief"
                  }
                  onNext={() => {
                    window.location.hash = nextLesson
                      ? `/lesson/${nextLesson.id}`
                      : "/playbook";
                  }}
                />
              )}
            </div>
          ))}
        </article>
        <aside className="lesson-outline">
          <img src={module.image} alt="" />
          <h2>In this module</h2>
          <ol>
            {module.lessons.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#/lesson/${item.id}`}
                  aria-current={item.id === id ? "page" : undefined}
                >
                  <span
                    className={`lesson-dot ${completed.includes(item.id) ? "done" : ""}`}
                  >
                    {completed.includes(item.id) ? (
                      <>
                        <Icon name="check" />
                        <span className="sr-only">Completed: </span>
                      </>
                    ) : (
                      i + 1
                    )}
                  </span>
                  <span>
                    {item.title}
                    <small>{item.minutes} min</small>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </>
  );
}
