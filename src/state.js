import { lessons } from './data/course.js';

export const STORAGE_KEY = 'fieldwork-course-v1';
export const briefFields = {
  businessProblem: 'Business problem',
  users: 'People and workflow',
  inputs: 'Approved inputs',
  success: 'Evidence of success',
  reviewer: 'Risk and review owner',
  stopCondition: 'Stop or rollback condition',
};
export const emptyState = () => ({ version: 1, scores: {}, notes: {}, brief: {}, lastLesson: null });
const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);

export function normalizeState(value) {
  const state = emptyState();
  if (!record(value) || value.version !== 1) return state;
  for (const lesson of lessons) {
    const score = record(value.scores) ? value.scores[lesson.id] : undefined;
    if (Number.isInteger(score) && score >= 0 && score <= lesson.quiz.length) state.scores[lesson.id] = score;
    const note = record(value.notes) ? value.notes[lesson.id] : undefined;
    if (typeof note === 'string') state.notes[lesson.id] = note.slice(0, 5000);
  }
  for (const field of Object.keys(briefFields)) {
    if (record(value.brief) && typeof value.brief[field] === 'string') state.brief[field] = value.brief[field].slice(0, 5000);
  }
  if (lessons.some(lesson => lesson.id === value.lastLesson)) state.lastLesson = value.lastLesson;
  return state;
}

export function readState(storage) {
  try {
    const raw = (storage ?? globalThis.localStorage).getItem(STORAGE_KEY);
    if (!raw) return { state: emptyState(), error: null };
    const parsed = JSON.parse(raw);
    if (!record(parsed) || parsed.version !== 1) return { state: emptyState(), error: 'Saved progress uses an unsupported format. Your course is available with a fresh session.' };
    return { state: normalizeState(parsed), error: null };
  } catch {
    return { state: emptyState(), error: 'Saved progress could not be read. You can keep learning and download your playbook.' };
  }
}

export function writeState(storage, state) {
  try {
    (storage ?? globalThis.localStorage).setItem(STORAGE_KEY, JSON.stringify(normalizeState(state)));
    return true;
  } catch {
    return false;
  }
}

export function scoreQuiz(questions, answers) {
  return questions.reduce((score, question, index) => score + (Number.isInteger(answers?.[index]) && answers[index] === question.answer ? 1 : 0), 0);
}

export function exportPlaybook({ notes = {}, brief = {} }) {
  const sections = ['FIELDWORK — MY AI PILOT PLAYBOOK', 'A working brief for a team conversation, not a launch approval.', '', 'MY PILOT'];
  for (const [field, label] of Object.entries(briefFields)) sections.push('', label.toUpperCase(), brief[field]?.trim() || '(Not yet written)');
  sections.push('', 'LESSON REFLECTIONS');
  const savedLessons = lessons.filter(lesson => notes[lesson.id]?.trim());
  if (!savedLessons.length) sections.push('(No reflections saved yet)');
  for (const lesson of savedLessons) sections.push('', lesson.title, notes[lesson.id]);
  return sections.join('\n') + '\n';
}
