"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [w, setW] = useState(0), [n, setN] = useState(0), [del, setDel] = useState(false);
  useEffect(() => {
    const full = words[w];
    const t = setTimeout(() => {
      if (!del && n < full.length) setN(n + 1);
      else if (!del) setDel(true);
      else if (n > 0) setN(n - 1);
      else { setDel(false); setW((w + 1) % words.length); }
    }, !del && n === full.length ? 1400 : del ? 35 : 70);
    return () => clearTimeout(t);
  }, [n, del, w, words]);
  return <span className="cursor pr-1" aria-label={words[w]}>{words[w].slice(0, n)}</span>;
}
