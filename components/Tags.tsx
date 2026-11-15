export default function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-1.5">
      {items.map((t, i) => <li key={t} style={{ "--i": i } as React.CSSProperties} className="tag rounded-full bg-tint px-3 py-0.5 text-sm">{t}</li>)}
    </ul>
  );
}
