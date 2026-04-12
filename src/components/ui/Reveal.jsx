import { useEffect, useRef, useState } from "react";

function useInView(options) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px", ...(options || {}) }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

export default function Reveal({ className = "", delay = 0, direction = "up", children }) {
  const [ref, isInView] = useInView();

  const dirMap = {
    up:    "opacity-0 translate-y-6",
    down:  "opacity-0 -translate-y-6",
    left:  "opacity-0 translate-x-6",
    right: "opacity-0 -translate-x-6",
  };

  const visibleClass = isInView
    ? `opacity-100 translate-x-0 translate-y-0 transition-all duration-700 ease-out`
    : dirMap[direction] ?? "opacity-0 translate-y-6";

  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${className} ${visibleClass}`}
      style={{ willChange: "transform, opacity", ...delayStyle }}
    >
      {children}
    </div>
  );
}
