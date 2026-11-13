import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { glossaryById } from "../glossary.js";
import GlossaryEntry from "./GlossaryEntry.jsx";
import Icon from "./Icon.jsx";

const GlossaryContext = createContext(null);
export const useGlossary = () => useContext(GlossaryContext);

export default function GlossaryProvider({ children, resetKey, disabled }) {
  const [preview, setPreview] = useState(null);
  const [detail, setDetail] = useState(null);
  const [position, setPosition] = useState(null);
  const tooltip = useRef(null),
    dialog = useRef(null),
    title = useRef(null);
  const interaction = useRef({
    hovered: null,
    focused: null,
    overCard: false,
    suppressed: null,
    origin: null,
    showTimer: null,
    hideTimer: null,
    detail: null,
    preview: null,
    disabled: false,
  });
  const state = interaction.current;
  state.detail = detail;
  state.preview = preview;
  state.disabled = disabled;

  const clearTimers = useCallback(() => {
    clearTimeout(interaction.current.showTimer);
    clearTimeout(interaction.current.hideTimer);
  }, []);
  const dismiss = useCallback(
    (restore = false) => {
      clearTimers();
      const current = interaction.current;
      const origin = current.origin;
      current.suppressed = current.preview?.target || origin;
      current.overCard = false;
      setPreview(null);
      setDetail(null);
      dialog.current?.close();
      if (restore)
        requestAnimationFrame(() => {
          const destination =
            origin?.isConnected &&
            origin.getClientRects().length &&
            !origin.closest("[inert], [hidden]")
              ? origin
              : document.getElementById("main");
          destination?.focus({ preventScroll: true });
        });
    },
    [clearTimers],
  );
  const show = useCallback(
    (entry, target, descriptionId, mode) => {
      const current = interaction.current;
      const key = mode === "focus" ? "focused" : "hovered";
      if (current[key] !== target && !current.detail) current.suppressed = null;
      current[key] = target;
      clearTimers();
      if (current.disabled || current.detail || current.suppressed === target)
        return;
      const reveal = () => {
        setPosition(null);
        setPreview({ entry, target, descriptionId });
      };
      if (mode === "focus") reveal();
      else current.showTimer = setTimeout(reveal, 200);
    },
    [clearTimers],
  );
  const scheduleHide = useCallback(() => {
    const current = interaction.current;
    clearTimeout(current.hideTimer);
    current.hideTimer = setTimeout(() => {
      const active = interaction.current;
      if (
        !active.overCard &&
        active.hovered !== active.preview?.target &&
        active.focused !== active.preview?.target
      )
        setPreview(null);
    }, 180);
  }, []);
  const leave = useCallback(
    (target, mode) => {
      const current = interaction.current;
      const key = mode === "focus" ? "focused" : "hovered";
      if (current[key] === target) current[key] = null;
      clearTimeout(current.showTimer);
      if (
        current.suppressed === target &&
        current.hovered !== target &&
        current.focused !== target
      )
        current.suppressed = null;
      scheduleHide();
    },
    [scheduleHide],
  );
  const open = useCallback(
    (entry, target) => {
      const current = interaction.current;
      if (current.disabled) return;
      clearTimers();
      current.origin = target;
      current.suppressed = target;
      current.overCard = false;
      setPreview(null);
      setDetail(entry);
    },
    [clearTimers],
  );

  useEffect(() => {
    dismiss();
  }, [resetKey, disabled, dismiss]);
  useEffect(() => clearTimers, [clearTimers]);
  useEffect(() => {
    if (!preview) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [preview, dismiss]);
  useLayoutEffect(() => {
    if (!preview) return;
    const place = () => {
      if (
        !preview.target.isConnected ||
        !preview.target.getClientRects().length
      ) {
        setPreview(null);
        return;
      }
      const anchor = preview.target.getBoundingClientRect();
      if (anchor.bottom < 0 || anchor.top > window.innerHeight) {
        setPreview(null);
        return;
      }
      const box = tooltip.current.getBoundingClientRect();
      const left = Math.max(
        12,
        Math.min(anchor.left, window.innerWidth - box.width - 12),
      );
      const below = anchor.bottom + 8;
      const top = Math.max(
        12,
        Math.min(
          below + box.height <= window.innerHeight - 12
            ? below
            : anchor.top - box.height - 8,
          window.innerHeight - box.height - 12,
        ),
      );
      setPosition({ left, top });
    };
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [preview]);
  useLayoutEffect(() => {
    if (!detail) return;
    if (!dialog.current.open) dialog.current.showModal();
    dialog.current.scrollTop = 0;
    title.current?.focus({ preventScroll: true });
  }, [detail]);
  useEffect(() => {
    if (!detail) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [Boolean(detail)]);

  const value = useMemo(
    () => ({ show, leave, open, dismiss, previewId: preview?.descriptionId }),
    [show, leave, open, dismiss, preview?.descriptionId],
  );
  return (
    <GlossaryContext.Provider value={value}>
      {children}
      {createPortal(
        <>
          {preview && (
            <div
              className="glossary-tooltip"
              id={preview.descriptionId}
              role="tooltip"
              ref={tooltip}
              style={{
                ...position,
                visibility: position ? "visible" : "hidden",
              }}
              onPointerEnter={() => {
                interaction.current.overCard = true;
                clearTimeout(interaction.current.hideTimer);
              }}
              onPointerLeave={() => {
                interaction.current.overCard = false;
                scheduleHide();
              }}
            >
              <strong>{preview.entry.term}</strong>
              {preview.entry.fullName && (
                <span className="glossary-tooltip-full-name">
                  {preview.entry.fullName}
                </span>
              )}
              <p>{preview.entry.definition}</p>
              <span className="glossary-tooltip-hint">
                Click the term for an example and more.
              </span>
            </div>
          )}
          <dialog
            ref={dialog}
            className="glossary-dialog"
            aria-labelledby="glossary-dialog-title"
            onCancel={(event) => {
              event.preventDefault();
              dismiss(true);
            }}
            onClick={(event) => {
              if (event.target !== dialog.current) return;
              const rect = dialog.current.getBoundingClientRect();
              if (
                event.clientX < rect.left ||
                event.clientX > rect.right ||
                event.clientY < rect.top ||
                event.clientY > rect.bottom
              )
                dismiss(true);
            }}
          >
            {detail && (
              <>
                <div className="glossary-dialog-top">
                  <span className="small-label">{detail.category}</span>
                  <button
                    type="button"
                    className="icon-button"
                    aria-label="Close definition"
                    onClick={() => dismiss(true)}
                  >
                    <Icon name="close" />
                  </button>
                </div>
                <h2 id="glossary-dialog-title" ref={title} tabIndex={-1}>
                  {detail.term}
                </h2>
                <GlossaryEntry
                  entry={detail}
                  onRelated={(id) => setDetail(glossaryById.get(id))}
                  onNavigate={(id) =>
                    dismiss(window.location.hash === `#/lesson/${id}`)
                  }
                />
              </>
            )}
          </dialog>
        </>,
        document.body,
      )}
    </GlossaryContext.Provider>
  );
}
