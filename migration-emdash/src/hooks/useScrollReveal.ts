import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to a container ref.
 * When any child with class "reveal" enters the viewport,
 * it gets the "revealed" class added, triggering the CSS animation.
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // only animate once
          }
        });
      },
      { threshold }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Standalone version for Astro/Vanila JS scripts
 */
export function setupRevealAnimations(threshold = 0.12) {
  const targets = document.querySelectorAll<HTMLElement>(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  targets.forEach((el) => observer.observe(el));
}
