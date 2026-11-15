"use client";
import { useState } from "react";

export default function MobileMenu({ links }: { links: string[][] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative sm:hidden">
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu"
        className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-line bg-surface">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <div className="swap absolute right-0 top-12 grid w-48 gap-1 rounded-2xl border border-line bg-surface p-2 shadow-xl">
          {links.map(([h, t]) => <a key={h} href={`#${h}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-tint">{t}</a>)}
        </div>
      )}
    </div>
  );
}
