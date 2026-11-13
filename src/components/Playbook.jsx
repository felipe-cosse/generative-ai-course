import React, { useState } from 'react';
import { lessons } from '../data/course.js';
import { exportPlaybook } from '../state.js';
import Icon from './Icon.jsx';

const fields = [
  { id: 'businessProblem', label: 'What problem will the pilot solve?', hint: 'Name a specific task and the difficulty people face today.' },
  { id: 'users', label: 'Who will use it?', hint: 'Describe the team, its workflow, and the person accountable for the pilot.' },
  { id: 'inputs', label: 'What information may it use?', hint: 'Describe approved information types and access limits. Do not paste source data.' },
  { id: 'success', label: 'What would success look like?', hint: 'Choose a measurable outcome, a comparison with today, a timeframe, and a budget limit.' },
  { id: 'reviewer', label: 'Who reviews the results?', hint: 'Name a role responsible for checking quality and handling uncertain or disputed outputs.' },
  { id: 'stopCondition', label: 'When would you pause or stop?', hint: 'Set a clear quality, cost, or risk limit and identify who can stop the pilot.' },
];

export default function Playbook({ notes, brief, onSaveBrief }) {
  const [draft, setDraft] = useState(() => Object.fromEntries(fields.map(({ id }) => [id, brief[id] || ''])));
  const [status, setStatus] = useState('');
  const savedLessons = lessons.filter(lesson => notes[lesson.id]?.trim());

  function save(event) {
    event.preventDefault();
    const saved = onSaveBrief(draft);
    setStatus(saved ? 'Pilot brief saved in this browser.' : 'Browser storage is unavailable. Your brief is kept for this visit; download a copy before leaving.');
  }

  function download() {
    let url;
    let link;
    try {
      const content = exportPlaybook({ notes, brief: draft });
      url = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }));
      link = document.createElement('a');
      link.href = url;
      link.download = 'fieldwork-ai-playbook.txt';
      document.body.appendChild(link);
      link.click();
      setStatus('Download started with your current draft and saved lesson notes.');
    } catch {
      setStatus('The download could not start. Your draft is still here; try again or copy your notes.');
    } finally {
      link?.remove();
      if (url) window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  }

  return <>
    <header className="page-intro playbook-intro">
      <h1>Turn your learning into a first step.</h1>
      <p>Bring your reflections together and outline an AI pilot worth testing.</p>
    </header>
    <div className="playbook-layout">
      <form className="pilot-form" onSubmit={save}>
        <h2>Your pilot brief</h2>
        <p>Start with one useful task. Fill in what you know, then refine the brief with your team.</p>
        {fields.map(field => <label className="form-field" key={field.id} htmlFor={`pilot-${field.id}`}>
          {field.label}
          <span id={`pilot-${field.id}-hint`}>{field.hint}</span>
          <textarea id={`pilot-${field.id}`} aria-describedby={`pilot-${field.id}-hint`} maxLength={5000} value={draft[field.id]} onChange={event => {
            const next = { ...draft, [field.id]: event.target.value };
            setDraft(next);
            setStatus(onSaveBrief(next) ? 'Saved automatically in this browser.' : 'Browser storage is unavailable. Your brief is kept for this visit; download a copy before leaving.');
          }} />
        </label>)}
        <div className="form-actions">
          <button className="button" type="submit">Save pilot brief<Icon name="check" /></button>
          <button className="button secondary" type="button" onClick={download}>Download playbook<Icon name="note" /></button>
        </div>
        <p className="save-status" role="status" aria-live="polite">{status}</p>
        <p className="privacy-note">Auto-saved only in this browser. Download a copy to keep or share. Use fictional or general examples; do not enter personal information, confidential records, or sensitive source data.</p>
      </form>
      <section className="playbook-notes" aria-labelledby="saved-notes-title">
        <h2 id="saved-notes-title">Your lesson notes</h2>
        {savedLessons.length ? savedLessons.map(lesson => <article className="saved-note" key={lesson.id}>
          <h3>{lesson.title}</h3>
          <p>{notes[lesson.id]}</p>
          <a href={`#/lesson/${lesson.id}`}>Revisit lesson<Icon name="arrow" /><span className="sr-only">: {lesson.title}</span></a>
        </article>) : <div className="empty-state">
          <p>No lesson notes saved yet. Reflect on a lesson and save a note to bring it into your playbook.</p>
          <a className="text-link" href="#/">Explore your learning path<Icon name="arrow" /></a>
        </div>}
      </section>
    </div>
  </>;
}
