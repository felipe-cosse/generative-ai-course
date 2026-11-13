import React, { useEffect, useRef, useState } from "react";
import { scoreQuiz } from "../state.js";
import Icon from "./Icon.jsx";

export function Activity({ lesson }) {
  const [selected, setSelected] = useState(null);
  useEffect(() => setSelected(null), [lesson.id]);
  const activity = lesson.activity;

  return (
    <section aria-labelledby={`${lesson.id}-activity-title`}>
      <div className="exercise-intro">
        <span className="small-label">Practice scenario · fixed example</span>
        <h2 id={`${lesson.id}-activity-title`}>{activity.title}</h2>
        <p>{activity.prompt}</p>
        <p className="muted">
          Choose a response to explore its consequences. You can try every
          option.
        </p>
      </div>
      <div className="option-list">
        {activity.options.map((option, index) => (
          <button
            type="button"
            key={option.label}
            className={`option${selected === index ? " selected" : ""}`}
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            <span className="option-letter" aria-hidden="true">
              {String.fromCharCode(65 + index)}
            </span>
            <span>{option.label}</span>
          </button>
        ))}
      </div>
      <div aria-live="polite" aria-atomic="true">
        {selected !== null && (
          <div
            className={`feedback${selected === activity.best ? " correct" : ""}`}
          >
            <strong>
              {selected === activity.best
                ? "A sound management choice"
                : "Consider the tradeoff"}
            </strong>
            <p>{activity.options[selected].feedback}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export function Quiz({
  lesson,
  bestScore = 0,
  onScore,
  onNext,
  nextLabel = "Next lesson",
}) {
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const resultRef = useRef(null);
  const firstAnswerRef = useRef(null);
  const retryFocus = useRef(false);
  const submitted = score !== null;
  const answered = lesson.quiz.filter((_, index) =>
    Number.isInteger(answers[index]),
  ).length;
  const complete = answered === lesson.quiz.length;
  const passed =
    score === lesson.quiz.length || bestScore === lesson.quiz.length;

  useEffect(() => {
    setAnswers([]);
    setScore(null);
  }, [lesson.id]);

  useEffect(() => {
    if (score !== null) resultRef.current?.focus();
    else if (retryFocus.current) {
      firstAnswerRef.current?.focus();
      retryFocus.current = false;
    }
  }, [score]);

  function submit(event) {
    event.preventDefault();
    if (!complete || submitted) return;
    const result = scoreQuiz(lesson.quiz, answers);
    setScore(result);
    onScore(result);
  }

  function retry() {
    retryFocus.current = true;
    setAnswers([]);
    setScore(null);
  }

  return (
    <section aria-labelledby={`${lesson.id}-quiz-title`}>
      <div className="exercise-intro">
        <span className="small-label">Put your judgment to work</span>
        <h2 id={`${lesson.id}-quiz-title`}>Knowledge check</h2>
        <p>
          Answer both questions. Get both right to complete this lesson. You can
          retry as often as you need.
        </p>
      </div>
      {bestScore === lesson.quiz.length && (
        <p className="quiz-status">
          <strong>Knowledge check completed.</strong> Your previous completion
          is saved. You can practice again or continue.
        </p>
      )}
      <form onSubmit={submit}>
        {lesson.quiz.map((question, questionIndex) => {
          const correct = answers[questionIndex] === question.answer;
          const feedbackId = `${lesson.id}-question-${questionIndex}-feedback`;
          return (
            <fieldset
              className="quiz-question"
              key={question.question}
              aria-describedby={submitted ? feedbackId : undefined}
            >
              <legend>
                <span className="question-number">
                  QUESTION {questionIndex + 1} OF {lesson.quiz.length}
                </span>
                {question.question}
              </legend>
              <div className="option-list">
                {question.options.map((option, optionIndex) => (
                  <label className="option" key={option}>
                    <input
                      ref={
                        questionIndex === 0 && optionIndex === 0
                          ? firstAnswerRef
                          : undefined
                      }
                      type="radio"
                      name={`${lesson.id}-question-${questionIndex}`}
                      value={optionIndex}
                      checked={answers[questionIndex] === optionIndex}
                      disabled={submitted}
                      onChange={() =>
                        setAnswers((previous) => {
                          const next = [...previous];
                          next[questionIndex] = optionIndex;
                          return next;
                        })
                      }
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {submitted && (
                <div
                  id={feedbackId}
                  className={`feedback${correct ? " correct" : ""}`}
                >
                  <strong>{correct ? "Correct" : "Not quite"}</strong>
                  {!correct && (
                    <p>
                      <strong>Best answer:</strong>{" "}
                      {question.options[question.answer]}
                    </p>
                  )}
                  <p>{question.explanation}</p>
                </div>
              )}
            </fieldset>
          );
        })}
        {!submitted && (
          <>
            <p
              id={`${lesson.id}-answer-status`}
              className="muted"
              role="status"
            >
              {complete
                ? "Both questions answered. Ready to check."
                : `${answered} of ${lesson.quiz.length} answered. Answer both questions to enable Check answers.`}
            </p>
            <div className="lesson-actions">
              <button
                className="button"
                type="submit"
                disabled={!complete}
                aria-describedby={`${lesson.id}-answer-status`}
              >
                Check answers
                <Icon name="check" />
              </button>
            </div>
          </>
        )}
      </form>
      {submitted && (
        <div
          className={`quiz-result feedback${score === lesson.quiz.length ? " correct" : ""}`}
          ref={resultRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
        >
          <h2>
            {score} of {lesson.quiz.length} correct
          </h2>
          <p>
            {score === lesson.quiz.length
              ? "Lesson completed. Take this judgment into your next business decision."
              : "Review the explanations above, then try again. Each attempt is a chance to strengthen your judgment."}
          </p>
          <button className="button secondary" type="button" onClick={retry}>
            Try again
          </button>
        </div>
      )}
      {passed && (
        <div className="lesson-actions">
          <button className="button" type="button" onClick={onNext}>
            {nextLabel}
            <Icon name="arrow" />
          </button>
        </div>
      )}
    </section>
  );
}
