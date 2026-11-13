import React, { useState } from 'react';
import { modules, lessons, findLesson } from '../data/course.js';
import Icon from './Icon.jsx';

export default function Course({ completed = [], lastLesson }) {
  const [expanded, setExpanded] = useState(null);
  const resume = findLesson(lastLesson) || lessons.find(lesson => !completed.includes(lesson.id)) || lessons[0];
  const allDone = completed.length === lessons.length;
  return <>
    <header className="page-intro">
      <h1>A little curiosity. A lot of possibility.</h1>
      <p>Understand the technology. Ask better questions. Lead with confidence.</p>
    </header>
    <section className="hero" aria-label="Your generative AI course">
      <div className="hero-copy">
        <h2>Make AI your<br className="desktop-break" /> next advantage.</h2>
        <p>A practical guide to generative AI for people who lead teams, products, and change.</p>
        <p className="hero-meta">3 modules <span>·</span> 24 lessons <span>·</span> No coding required</p>
        <a className="button" href={`#/lesson/${resume.id}`}>{allDone ? 'Revisit your learning' : lastLesson ? 'Continue learning' : 'Start learning'}<Icon name="arrow" /></a>
        {lastLesson && !allDone && <span className="resume-caption">Up next: {resume.title}</span>}
      </div>
      <img className="hero-art" src="/images/hero.png" alt="" fetchPriority="high" />
    </section>
    <section className="learning-path" aria-labelledby="path-title">
      <div className="section-heading"><h2 id="path-title">Your learning path</h2><p>Follow the modules, build your confidence.</p></div>
      {modules.map(module => {
        const count = module.lessons.filter(lesson => completed.includes(lesson.id)).length;
        const open = expanded === module.id;
        return <div className="module" key={module.id}>
          <button className="module-row" onClick={() => setExpanded(open ? null : module.id)} aria-expanded={open} aria-controls={`module-${module.id}`}>
            <img src={module.image} alt="" loading="lazy" />
            <span className="module-number">0{module.number}</span>
            <span className="module-copy"><span className="module-title">{module.title}</span><span>{module.description}</span></span>
            <span className="module-meta">{count ? `${count} of 8 complete` : '8 lessons'}<Icon name={count === 8 ? 'check' : 'arrow'} className={open ? 'rotate' : ''} /></span>
          </button>
          {open && <div id={`module-${module.id}`} className="module-lessons">
            {module.lessons.map((lesson, index) => <a href={`#/lesson/${lesson.id}`} key={lesson.id}><span className={`lesson-dot ${completed.includes(lesson.id) ? 'done' : ''}`}>{completed.includes(lesson.id) ? <Icon name="check" /> : index + 1}</span><span>{lesson.title}</span><small>{lesson.minutes} min</small><Icon name="arrow" /></a>)}
          </div>}
        </div>;
      })}
    </section>
    {allDone && <section className="completion-banner"><Icon name="check"/><div><h2>Ready to turn learning into action.</h2><p>All 24 knowledge checks completed. Bring your pilot brief to your next team conversation.</p></div><a className="button" href="#/playbook">Open my playbook<Icon name="arrow"/></a></section>}
    <footer className="course-footer"><p>Original management lessons adapted from your supplied Udacity course materials. Independent learning resource; not affiliated with Udacity.</p><p>Learn at your pace. Estimated times include reading and practice.</p></footer>
  </>;
}
