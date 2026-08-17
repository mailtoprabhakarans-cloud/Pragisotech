import { useEffect, useState, useRef } from "react";

/**
 * Cycles through an array of strings with a typing → pause → deleting animation.
 * Returns the current visible text and a boolean indicating if the cursor is blinking.
 */
export function useTypewriter(words: string[], typeSpeed = 80, deleteSpeed = 50, pauseMs = 2200) {
  const [text, setText] = useState("");
  const [cursorBlink, setCursorBlink] = useState(true);
  const idx = useRef(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let charIdx = 0;
    let deleting = false;

    function tick() {
      const current = words[idx.current % words.length] ?? "";

      if (!deleting) {
        charIdx++;
        setText(current.slice(0, charIdx));
        setCursorBlink(false);

        if (charIdx === current.length) {
          setCursorBlink(true);
          deleting = true;
          timeout = setTimeout(tick, pauseMs);
          return;
        }
        timeout = setTimeout(tick, typeSpeed + Math.random() * 40);
      } else {
        charIdx--;
        setText(current.slice(0, charIdx));
        setCursorBlink(false);

        if (charIdx === 0) {
          deleting = false;
          idx.current = (idx.current + 1) % words.length;
          timeout = setTimeout(tick, 300);
          return;
        }
        timeout = setTimeout(tick, deleteSpeed);
      }
    }

    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, [words, typeSpeed, deleteSpeed, pauseMs]);

  return { text, cursorBlink };
}
