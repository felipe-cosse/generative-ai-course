import fundamentals from "./fundamentals.js";
import rag from "./rag.js";
import multimodal from "./multimodal.js";

export const modules = [fundamentals, rag, multimodal];
export const lessons = modules.flatMap((module) => module.lessons);
export const findLesson = (id) => lessons.find((lesson) => lesson.id === id);
export const findModule = (id) =>
  modules.find((module) => module.lessons.some((lesson) => lesson.id === id));
