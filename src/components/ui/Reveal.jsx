import { useEffect, useRef, useState } from "react";

function useInView(options) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px", ...(options || {}) },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
}

export default function Reveal({ className = "", delay = 0, children }) {
  const [ref, isInView] = useInView();
  const delayClass = delay ? ` animation-delay-${delay}` : "";
  return (
    <div
      ref={ref}
      className={`${className} ${
        isInView ? `animate-slide-up${delayClass}` : "opacity-0 translate-y-4"
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
}
