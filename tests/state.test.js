import test from 'node:test';
import assert from 'node:assert/strict';
import {
  STORAGE_KEY,
  emptyState,
  normalizeState,
  readState,
  writeState,
  scoreQuiz,
  exportPlaybook,
} from '../src/state.js';
import { lessons } from '../src/data/course.js';

const briefKeys = ['businessProblem', 'users', 'inputs', 'success', 'reviewer', 'stopCondition'];

function memoryStorage(initial = null) {
  let raw = initial;
  return {
    getItem(key) {
      assert.equal(key, STORAGE_KEY);
      return raw;
    },
    setItem(key, value) {
      assert.equal(key, STORAGE_KEY);
      raw = value;
    },
  };
}

test('fresh sessions have independent empty progress and no fabricated completion', () => {
  const first = emptyState();
  const second = emptyState();
  assert.deepEqual(first, { version: 1, scores: {}, notes: {}, brief: {}, lastLesson: null });
  first.scores.f1 = 2;
  first.notes.f1 = 'A first reflection';
  first.brief.users = 'Support staff';
  assert.deepEqual(second, { version: 1, scores: {}, notes: {}, brief: {}, lastLesson: null });
  assert.deepEqual(readState(memoryStorage()), { state: second, error: null });
});

test('normalization rejects unknown IDs, invalid scores, and non-text notes or brief fields', () => {
  const state = normalizeState({
    version: 1,
    scores: { f1: -1, f2: 3, f3: 1.5, f4: '2', f5: true, f6: null, f7: NaN, f8: Infinity, r1: 0, r2: 1, r3: 2, unknown: 2 },
    notes: { f1: 'Keep a reviewer', f2: 42, f3: null, f4: ['Wrong shape'], unknown: 'Discard me' },
    brief: { users: 'Support staff', success: 10, reviewer: null, inputs: ['Wrong shape'], unknown: 'Discard me' },
    lastLesson: 'unknown',
    unexpected: 'Discard me',
  });
  assert.deepEqual(state, {
    version: 1,
    scores: { r1: 0, r2: 1, r3: 2 },
    notes: { f1: 'Keep a reviewer' },
    brief: { users: 'Support staff' },
    lastLesson: null,
  });
  assert.deepEqual(normalizeState({ version: 1, scores: [], notes: [], brief: [], lastLesson: 1 }), emptyState());
});

test('saved text is limited to 5000 characters for notes and all six pilot fields', () => {
  const longText = 'x'.repeat(5001);
  const brief = Object.fromEntries(briefKeys.map(key => [key, longText]));
  const state = normalizeState({ version: 1, notes: { m8: longText }, brief });
  assert.equal(state.notes.m8, 'x'.repeat(5000));
  for (const key of briefKeys) assert.equal(state.brief[key], 'x'.repeat(5000), key);
  assert.equal(normalizeState({ version: 1, notes: { f1: '  Keep my spacing  ' } }).notes.f1, '  Keep my spacing  ');
});

test('unsupported versions and malformed state shapes reset without retaining partial progress', () => {
  for (const value of [null, undefined, [], 'text', 1, {}, { version: '1' }, { version: 2, scores: { f1: 2 }, notes: { f1: 'old' } }]) {
    assert.deepEqual(normalizeState(value), emptyState());
  }
  for (const raw of ['null', '[]', '42', '{"version":2,"scores":{"f1":2}}']) {
    const result = readState(memoryStorage(raw));
    assert.deepEqual(result.state, emptyState());
    assert.equal(typeof result.error, 'string');
    assert.ok(result.error.length > 0);
  }
});

test('malformed JSON and unavailable reads return a fresh session with a useful error', () => {
  for (const storage of [memoryStorage('{broken JSON'), { getItem() { throw new Error('Storage is blocked'); } }]) {
    const result = readState(storage);
    assert.deepEqual(result.state, emptyState());
    assert.equal(typeof result.error, 'string');
    assert.ok(result.error.length > 0);
  }
});

test('valid progress, reflections, pilot fields, and resume location round-trip through storage', () => {
  const storage = memoryStorage();
  const state = {
    version: 1,
    scores: { f1: 0, r4: 1, m8: 2 },
    notes: { f1: 'Use a bounded pilot.', m8: 'Evaluate accent coverage before rollout.' },
    brief: {
      businessProblem: 'Support replies need review.',
      users: 'The support team',
      inputs: 'Approved policy documents',
      success: 'Lower correction time with unchanged quality',
      reviewer: 'The service lead',
      stopCondition: 'Pause on unauthorized retrieval',
    },
    lastLesson: 'm8',
  };
  assert.equal(writeState(storage, state), true);
  assert.deepEqual(readState(storage), { state, error: null });
});

test('writes normalize untrusted state and report storage failures without throwing', () => {
  const storage = memoryStorage();
  assert.equal(writeState(storage, { version: 1, scores: { f1: '2', fake: 2 }, lastLesson: 'fake' }), true);
  assert.deepEqual(readState(storage), { state: emptyState(), error: null });
  const blockedStorage = { setItem() { throw new Error('Quota exceeded'); } };
  assert.equal(writeState(blockedStorage, emptyState()), false);
});

test('quiz scores give credit only to valid integer answers matching each question', () => {
  const questions = lessons.find(lesson => lesson.id === 'r8').quiz;
  const correct = questions.map(question => question.answer);
  assert.equal(scoreQuiz(questions, correct), 2);
  assert.equal(scoreQuiz(questions, [(correct[0] + 1) % 3, correct[1]]), 1);
  assert.equal(scoreQuiz(questions, [correct[0]]), 1);
  for (const answers of [undefined, null, [], ['0', '2'], [false, true], [null, null], [NaN, Infinity], [-1, 3], [0.5, 2.5], '02']) {
    assert.equal(scoreQuiz(questions, answers), 0, `invalid or absent answers: ${String(answers)}`);
  }
  assert.equal(scoreQuiz([], []), 0);
});

test('playbook export uses the supplied draft and includes reflections plus all six pilot fields', () => {
  const stored = {
    notes: { f1: 'Keep an accountable reviewer.', m8: 'Check the escalation route.', unknown: 'Must not export' },
    brief: { businessProblem: 'The outdated saved problem' },
  };
  const draft = {
    businessProblem: 'The current unsaved problem',
    users: 'Our support team',
    inputs: 'Reviewed policy records',
    success: 'Measure correction minutes',
    reviewer: 'A named service owner',
    stopCondition: 'Stop on a prohibited action',
  };
  const result = exportPlaybook({ notes: stored.notes, brief: draft });
  assert.equal(typeof result, 'string');
  for (const value of Object.values(draft)) assert.ok(result.includes(value), value);
  assert.ok(result.includes(stored.notes.f1));
  assert.ok(result.includes(stored.notes.m8));
  assert.ok(result.includes(lessons.find(lesson => lesson.id === 'f1').title));
  assert.ok(result.includes(lessons.find(lesson => lesson.id === 'm8').title));
  assert.ok(!result.includes('Must not export'));
  assert.ok(!result.includes(stored.brief.businessProblem));
  assert.ok(result.endsWith('\n'));
});

test('empty playbooks explain missing work instead of exporting undefined values', () => {
  const result = exportPlaybook({ notes: { f1: '   ' }, brief: {} });
  assert.ok(result.includes('(No reflections saved yet)'));
  assert.equal(result.match(/\(Not yet written\)/g)?.length, 6);
  assert.ok(!result.includes('undefined'));
});
