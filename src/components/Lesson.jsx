import React from 'react';
import { findLesson, findModule } from '../data/course.js';
import Icon from './Icon.jsx';

export function LessonContent({ lesson }) {
  return <>
    <div className="article-prose">{lesson.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}</div>
    <figure className="concept-visual">
      <h3>{lesson.visual.title}</h3>
      <ol>{lesson.visual.steps.map((step, index) => <li key={step.label}><span className="step-number">0{index + 1}</span><strong>{step.label}</strong><span>{step.detail}</span></li>)}</ol>
      <figcaption>{lesson.visual.caption}</figcaption>
    </figure>
    <section className="concepts"><h2>A few ideas to take with you</h2><dl>{lesson.concepts.map(concept => <div key={concept.term}><dt>{concept.term}</dt><dd>{concept.explanation}</dd></div>)}</dl></section>
    <section className="business-case"><span className="small-label">IN THE MEETING ROOM · FICTIONAL EXAMPLE</span><h2>{lesson.example.title}</h2><p>{lesson.example.context}</p><p><strong>The decision.</strong> {lesson.example.decision}</p><p><strong>What to look for.</strong> {lesson.example.result}</p></section>
    <section className="lesson-tools"><h2>The tools, in plain language</h2>{lesson.tools.map(tool => <p key={tool.name}><strong>{tool.name}</strong><span>{tool.role}</span></p>)}<a className="text-link" href="#/tools">Explore the tool guide<Icon name="arrow" /></a></section>
    <aside className="takeaway"><Icon name="spark"/><div><h3>The manager's takeaway</h3><p>{lesson.takeaway}</p></div></aside>
    <details className="sources"><summary>About this lesson & source material</summary><p>Original management adaptation of source sections {lesson.sourceSections.join(', ')}. These are references to the supplied local archive; source files are not distributed with this course.</p><ul>{lesson.sources.map(source => <li key={source.path}><strong>{source.label}</strong><span>{source.path}</span></li>)}</ul><p>Activities use fictional, fixed examples. Product capabilities and availability can change; consult official documentation before choosing a service.</p></details>
  </>;
}

export default function Lesson({ id, completed = [] }) {
  const lesson = findLesson(id);
  const module = findModule(id);
  const index = module.lessons.indexOf(lesson);
  return <>
    <header className="lesson-heading"><p className="lesson-position">Lesson {index + 1} of 8 <span>·</span> {lesson.minutes} min</p><h1>{lesson.title}</h1><p>{lesson.outcome}</p></header>
    <div className="lesson-layout"><article><LessonContent lesson={lesson}/></article><aside className="lesson-outline"><img src={module.image} alt=""/><h2>In this module</h2><ol>{module.lessons.map((item, i) => <li key={item.id}><a href={`#/lesson/${item.id}`} aria-current={item.id === id ? 'page' : undefined}><span className={`lesson-dot ${completed.includes(item.id) ? 'done' : ''}`}>{completed.includes(item.id) ? <Icon name="check"/> : i + 1}</span><span>{item.title}<small>{item.minutes} min</small></span></a></li>)}</ol></aside></div>
  </>;
}
