import { useCallback, useRef, useState } from "react";

interface TiltStyle {
  transform: string;
  transition: string;
  "--spotlight-x"?: string;
  "--spotlight-y"?: string;
}

/**
 * Provides a 3D tilt effect driven by mouse position.
 * Attach `ref` to the element and spread `style` onto it.
 * The element also gets CSS custom-properties --spotlight-x / --spotlight-y
 * so you can overlay a radial-gradient highlight in CSS.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>(maxDeg = 6, perspective = 800) {
  const ref = useRef<T | null>(null);
  const [style, setStyle] = useState<TiltStyle>({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
    transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)",
  });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0 → 1
      const y = (e.clientY - rect.top) / rect.height;
      const rotY = (x - 0.5) * maxDeg * 2;
      const rotX = (0.5 - y) * maxDeg * 2;
      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02,1.02,1.02)`,
        transition: "transform 80ms ease-out",
        "--spotlight-x": `${(x * 100).toFixed(0)}%`,
        "--spotlight-y": `${(y * 100).toFixed(0)}%`,
      });
    },
    [maxDeg, perspective],
  );

  const onLeave = useCallback(() => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`,
      transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)",
    });
  }, [perspective]);

  return { ref, style, onMove, onLeave };
}
