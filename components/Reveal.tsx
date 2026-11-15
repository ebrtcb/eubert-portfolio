"use client";
import { useEffect, useRef } from "react";

/** Pops its children into view when scrolled onto the screen. `d` staggers the delay. */
export default function Reveal({ children, d = 0, className = "" }: { children: React.ReactNode; d?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ "--d": d } as React.CSSProperties} className={`reveal ${className}`}>{children}</div>;
}
