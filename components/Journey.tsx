"use client";
import { useRef, useState } from "react";
import { journey } from "@/lib/data";
import Tags from "./Tags";

export default function Journey() {
  const [i, setI] = useState(journey.length - 1);
  const s = journey[i];
  const list = useRef<HTMLUListElement>(null);
  function onKey(e: React.KeyboardEvent) {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const n = (i + step + journey.length) % journey.length;
    setI(n);
    requestAnimationFrame(() => list.current?.querySelectorAll("button")[n].focus());
  }
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
      <ul ref={list} onKeyDown={onKey} role="tablist" aria-label="Career timeline" className="flex snap-x gap-2 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {journey.map((j, n) => (
          <li key={j.period} className="relative min-w-48 snap-start flex-1 before:absolute before:left-0 before:right-0 before:top-[1.15rem] before:h-[3px] before:bg-line">
            <button role="tab" id={`tab-${n}`} aria-controls="journey-panel" tabIndex={n === i ? 0 : -1} aria-selected={n === i} onClick={() => setI(n)}
              className={`relative w-full cursor-pointer text-left ${n === i ? "font-semibold text-ink" : "text-mute"}`}>
              <i className={`mb-2 block h-6 w-6 rounded-full border-[3px] transition ${n === i ? "scale-125 border-accent bg-accent" : "border-line bg-surface"}`} />
              {j.title}<small className="block font-normal">{j.period}</small>
            </button>
          </li>
        ))}
      </ul>
      <div key={i} id="journey-panel" aria-labelledby={`tab-${i}`} role="tabpanel" aria-live="polite" className="swap min-h-64 border-t border-line pt-5">
        <h3 className="font-display text-2xl font-bold">{s.title}</h3>
        <p className="text-mute">{s.org}</p>
        <p className="font-semibold text-accent">{s.period} · {s.length}</p>
        <ul className="mt-3 max-w-3xl list-disc pl-5 marker:text-accent">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
        <Tags items={s.tags} />
      </div>
    </div>
  );
}
