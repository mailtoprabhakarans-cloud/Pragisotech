import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, threshold]);

  return { ref, inView };
}

export function useCountUp(target: number, start: boolean, duration = 1600) {
  // Initialize with target so raw server-rendered HTML contains the real final number for SEO/AEO/GEO crawlers
  const [value, setValue] = useState(target);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setValue(0);
  }, []);

  useEffect(() => {
    if (!start || !isClient) return;
    let frame = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration, isClient]);

  return value;
}
