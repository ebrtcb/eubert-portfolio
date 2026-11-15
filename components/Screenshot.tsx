import Image from "next/image";
import type { Shot } from "@/lib/data";

/** Screenshot in a window frame. `ratio` crops tall pages to a consistent preview. */
export default function Screenshot({ shot }: { shot: Shot }) {
  return (
    <figure className="border-b border-line bg-tint p-4 sm:p-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-line bg-surface shadow-2xl">
        <div className="flex gap-1.5 border-b border-line bg-bg px-3 py-2.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <Image src={`/images/${shot.src}.webp`} alt={shot.alt} width={1600} height={1000} style={{ aspectRatio: shot.ratio }} className="h-auto w-full object-cover object-top" />
      </div>
      <figcaption className="mt-3 text-center text-sm text-mute">{shot.alt}</figcaption>
    </figure>
  );
}
