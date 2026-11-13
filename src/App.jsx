import React, { useEffect, useState } from "react";
import { findLesson, findModule, lessons } from "./data/course.js";
import { STORAGE_KEY, readState, writeState } from "./state.js";
import Course from "./components/Course.jsx";
import Lesson from "./components/Lesson.jsx";
import ToolGuide from "./components/ToolGuide.jsx";
import Playbook from "./components/Playbook.jsx";
import Icon from "./components/Icon.jsx";

export default function App() {
  const [loaded] = useState(() => readState());
  const [state, setState] = useState(loaded.state);
  const [storageError, setStorageError] = useState(loaded.error);
  const [hash, setHash] = useState(window.location.hash);
  const [menuOpen, setMenuOpen] = useState(false);
  const save = (changes) => {
    const next = { ...state, ...changes };
    const saved = !readState().error && writeState(undefined, next);
    setState(next);
    setStorageError(
      saved
        ? null
        : "Browser storage is unavailable. Changes are kept for this session; download your playbook before leaving.",
    );
    return saved;
  };
  useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash);
      setMenuOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== STORAGE_KEY) return;
      const latest = readState();
      if (!latest.error) setState(latest.state);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  const closeMenu = () => {
    setMenuOpen(false);
    requestAnimationFrame(() =>
      document.getElementById("menu-toggle")?.focus(),
    );
  };
  const onNav = () => {
    setMenuOpen(false);
    requestAnimationFrame(() =>
      document.getElementById("main")?.focus({ preventScroll: true }),
    );
  };
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");
    const onResize = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", onResize);
    return () => desktop.removeEventListener("change", onResize);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
      if (event.key === "Tab") {
        const items = [
          ...document.querySelectorAll("#menu-toggle, #sidebar a"),
        ].filter((item) => item.offsetParent !== null);
        const first = items[0],
          last = items.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  const [, page, id, extra] = hash.split("/");
  const lesson = page === "lesson" && !extra ? findLesson(id) : null;
  const active = lesson
    ? "lesson"
    : page === "tools" && !id
      ? "tools"
      : page === "playbook" && !id
        ? "playbook"
        : !page && (!hash || hash === "#/")
          ? "course"
          : "missing";
  const title = lesson
    ? findModule(id).title
    : active === "tools"
      ? "Tool guide"
      : active === "playbook"
        ? "My playbook"
        : active === "missing"
          ? "Page not found"
          : "My learning";
  const completed = lessons
    .filter((item) => state.scores[item.id] === item.quiz.length)
    .map((item) => item.id);
  useEffect(() => {
    document.title = `${title} — Fieldwork`;
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [hash, title]);
  useEffect(() => {
    if (lesson && state.lastLesson !== lesson.id)
      save({ lastLesson: lesson.id });
  }, [lesson?.id]);
  return (
    <div className="app-shell">
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          setMenuOpen(false);
          requestAnimationFrame(() => {
            document.getElementById("main")?.focus();
            document.getElementById("main")?.scrollIntoView();
          });
        }}
      >
        Skip to content
      </a>
      <div className="mobile-header">
        <a href="#/" className="brand" onClick={onNav}>
          Fieldwork
        </a>
        <button
          id="menu-toggle"
          className="icon-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="sidebar"
          onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>
      <aside id="sidebar" className={`sidebar ${menuOpen ? "is-open" : ""}`}>
        <a href="#/" className="brand-block" onClick={onNav}>
          <span className="brand">Fieldwork</span>
          <span>AI for decision-makers</span>
        </a>
        <nav aria-label="Main navigation">
          <a
            href="#/"
            onClick={onNav}
            aria-current={
              active === "course" || active === "lesson" ? "page" : undefined
            }
          >
            <Icon name="book" />
            My learning
          </a>
          <a
            href="#/tools"
            onClick={onNav}
            aria-current={active === "tools" ? "page" : undefined}
          >
            <Icon name="layers" />
            Tool guide
          </a>
          <a
            href="#/playbook"
            onClick={onNav}
            aria-current={active === "playbook" ? "page" : undefined}
          >
            <Icon name="note" />
            My playbook
          </a>
        </nav>
        <div className="sidebar-bottom">
          <div className="progress-block">
            <span className="small-label">YOUR PROGRESS</span>
            <progress
              value={completed.length}
              max={lessons.length}
              aria-label="Course completion"
            />
            <p>
              {completed.length} of {lessons.length} lessons complete
            </p>
          </div>
          <p className="sidebar-signoff">Built for curious leaders</p>
        </div>
      </aside>
      {menuOpen && (
        <button
          className="nav-scrim"
          tabIndex="-1"
          aria-label="Close navigation backdrop"
          onClick={closeMenu}
        />
      )}
      <div className="workspace" inert={menuOpen}>
        <div className="topbar">
          <div>
            {lesson ? (
              <a href="#/">My learning</a>
            ) : (
              <span>Your workspace</span>
            )}
            <span className="breadcrumb-divider">/</span>
            <strong>{title}</strong>
          </div>
          {lesson ? (
            <a className="text-link" href="#/">
              <Icon name="back" />
              Back to course
            </a>
          ) : (
            <span className="topbar-note">Self-paced learning</span>
          )}
        </div>
        {storageError && (
          <div className="storage-warning" role="status">
            {storageError}
          </div>
        )}
        <main id="main" tabIndex="-1">
          {active === "lesson" && (
            <Lesson
              id={id}
              key={id}
              completed={completed}
              bestScore={state.scores[id] || 0}
              note={state.notes[id] || ""}
              onSaveNote={(note) =>
                save({ notes: { ...state.notes, [id]: note } })
              }
              onScore={(score) =>
                save({
                  scores: {
                    ...state.scores,
                    [id]: Math.max(state.scores[id] || 0, score),
                  },
                })
              }
            />
          )}
          {active === "tools" && <ToolGuide />}
          {active === "playbook" && (
            <Playbook
              notes={state.notes}
              brief={state.brief}
              onSaveBrief={(brief) => save({ brief })}
            />
          )}
          {active === "course" && (
            <Course completed={completed} lastLesson={state.lastLesson} />
          )}
          {active === "missing" && (
            <div className="not-found">
              <h1>That page is off the path.</h1>
              <p>Your course and saved progress are still here.</p>
              <a className="button" href="#/">
                Return to my learning
                <Icon name="arrow" />
              </a>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
