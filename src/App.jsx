import React, { useEffect, useState } from 'react';
import { findLesson, findModule } from './data/course.js';
import Course from './components/Course.jsx';
import Lesson from './components/Lesson.jsx';
import ToolGuide from './components/ToolGuide.jsx';
import Icon from './components/Icon.jsx';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onHash = () => { setHash(window.location.hash); setMenuOpen(false); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const [, page, id] = hash.split('/');
  const lesson = page === 'lesson' ? findLesson(id) : null;
  const active = lesson ? 'lesson' : page === 'tools' ? 'tools' : 'course';
  const title = lesson ? findModule(id).title : active === 'tools' ? 'Tool guide' : 'My learning';
  useEffect(() => { document.title = `${title} — Fieldwork`; document.getElementById('main')?.focus({ preventScroll: true }); }, [hash, title]);
  return <div className="app-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="mobile-header"><a href="#/" className="brand">Fieldwork</a><button className="icon-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="sidebar" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'}/></button></div>
    <aside id="sidebar" className={`sidebar ${menuOpen ? 'is-open' : ''}`}>
      <a href="#/" className="brand-block"><span className="brand">Fieldwork</span><span>AI for decision-makers</span></a>
      <nav aria-label="Main navigation"><a href="#/" aria-current={active === 'course' || active === 'lesson' ? 'page' : undefined}><Icon name="book"/>My learning</a><a href="#/tools" aria-current={active === 'tools' ? 'page' : undefined}><Icon name="layers"/>Tool guide</a></nav>
      <div className="sidebar-bottom"><div className="progress-block"><span className="small-label">YOUR PROGRESS</span><progress value="0" max="24" aria-label="Course completion"/><p>0 of 24 lessons complete</p></div><p className="sidebar-signoff">Built for curious leaders</p></div>
    </aside>
    {menuOpen && <button className="nav-scrim" aria-label="Close navigation" onClick={() => setMenuOpen(false)}/>}
    <div className="workspace"><div className="topbar"><div>{lesson ? <a href="#/">My learning</a> : <span>Your workspace</span>}<span className="breadcrumb-divider">/</span><strong>{title}</strong></div>{lesson ? <a className="text-link" href="#/"><Icon name="back"/>Back to course</a> : <span className="topbar-note">Self-paced learning</span>}</div>
      <main id="main" tabIndex="-1">{active === 'lesson' ? <Lesson id={id} key={id}/> : active === 'tools' ? <ToolGuide/> : <Course/>}</main>
    </div>
  </div>;
}
