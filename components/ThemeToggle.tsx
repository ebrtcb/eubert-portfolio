"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icons";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.dataset.theme === "dark"), []);
  function toggle() {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setDark(!dark);
  }
  return (
    <button onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full border border-line bg-surface transition hover:rotate-12 hover:border-accent">
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}
